// Supabase Edge Function: create-checkout-session
// Creates a Stripe Checkout session for a $15 booking deposit
//
// Required Supabase secrets:
//   STRIPE_SECRET_KEY  — your Stripe secret key (sk_live_... or sk_test_...)
//   SITE_URL           — e.g. https://teksure.com (no trailing slash)
//
// Set them with:
//   npx supabase secrets set STRIPE_SECRET_KEY=sk_test_... --project-ref vrhxitxzqtbphzsbdqih
//   npx supabase secrets set SITE_URL=https://teksure.com   --project-ref vrhxitxzqtbphzsbdqih

import Stripe from 'https://esm.sh/stripe@13.11.0?target=deno';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    const siteUrl   = Deno.env.get('SITE_URL') ?? 'https://teksure.com';

    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not set. Add it via Supabase secrets.');
    }

    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' });

    const body = await req.json();
    const {
      bookingId,
      customerName,
      customerEmail,
      serviceLabel,
      preferredDate,
      preferredSlot,
    } = body;

    // Build a human-readable description for the Stripe receipt
    const description = [
      serviceLabel && `Service: ${serviceLabel}`,
      preferredDate && `Date: ${preferredDate}`,
      preferredSlot && `Time: ${preferredSlot}`,
    ]
      .filter(Boolean)
      .join(' · ');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'TekSure Booking Deposit',
              description: description || 'Technician appointment deposit',
              images: [`${siteUrl}/teksure-logo.svg`],
            },
            unit_amount: 1500, // $15.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail || undefined,
      metadata: {
        booking_id:    bookingId    ?? '',
        customer_name: customerName ?? '',
        service:       serviceLabel ?? '',
      },
      success_url: `${siteUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}&booking_id=${bookingId ?? ''}`,
      cancel_url:  `${siteUrl}/payment/cancel?booking_id=${bookingId ?? ''}`,
    });

    return new Response(
      JSON.stringify({ url: session.url, sessionId: session.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 },
    );
  } catch (err) {
    console.error('create-checkout-session error:', err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 },
    );
  }
});
