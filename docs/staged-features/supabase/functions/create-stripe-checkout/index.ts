import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@13.11.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Verify user is authenticated
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { bookingId, serviceType, amount, bookingDate, bookingTime } = await req.json();

    // Determine price based on service type
    const servicePrices: Record<string, number> = {
      "in-home": 8999,       // $89.99
      "remote": 4999,        // $49.99
      "phone": 2999,         // $29.99
      "drop-off": 5999,      // $59.99
    };

    const priceInCents = amount
      ? Math.round(amount * 100)
      : servicePrices[serviceType] ?? 4999;

    const serviceLabels: Record<string, string> = {
      "in-home": "In-Home Tech Support",
      "remote": "Remote Tech Support",
      "phone": "Phone Support Session",
      "drop-off": "Drop-Off Tech Support",
    };

    const serviceLabel = serviceLabels[serviceType] ?? "Tech Support Session";

    const successUrl = `${Deno.env.get("PUBLIC_SITE_URL") ?? "https://teksure.com"}/book/confirmation?session_id={CHECKOUT_SESSION_ID}&booking_id=${bookingId}`;
    const cancelUrl = `${Deno.env.get("PUBLIC_SITE_URL") ?? "https://teksure.com"}/book`;

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: serviceLabel,
              description: `Appointment on ${bookingDate} at ${bookingTime}`,
              images: [],
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        booking_id: bookingId,
        user_id: user.id,
        service_type: serviceType,
      },
      customer_email: user.email,
    });

    // Update booking with Stripe session ID (pending payment)
    if (bookingId) {
      await supabase
        .from("bookings")
        .update({
          stripe_session_id: session.id,
          payment_status: "pending",
        })
        .eq("id", bookingId)
        .eq("user_id", user.id);
    }

    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create checkout session" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
