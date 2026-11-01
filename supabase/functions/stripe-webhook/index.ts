// Supabase Edge Function: stripe-webhook
// Listens for Stripe events and updates booking payment status in the database.
//
// Required Supabase secrets:
//   STRIPE_SECRET_KEY        — your Stripe secret key
//   STRIPE_WEBHOOK_SECRET    — the signing secret from your Stripe webhook endpoint
//   SUPABASE_URL             — auto-injected by Supabase
//   SUPABASE_SERVICE_ROLE_KEY — auto-injected by Supabase
//
// Set up in Stripe dashboard:
//   Developers → Webhooks → Add endpoint
//   URL: https://vrhxitxzqtbphzsbdqih.supabase.co/functions/v1/stripe-webhook
//   Events to listen for: checkout.session.completed, checkout.session.expired

import Stripe from 'https://esm.sh/stripe@13.11.0?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

Deno.serve(async (req) => {
  const stripeKey     = Deno.env.get('STRIPE_SECRET_KEY')!;
  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;
  const supabaseUrl   = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey   = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

  const stripe    = new Stripe(stripeKey, { apiVersion: '2023-10-16' });
  const supabase  = createClient(supabaseUrl, supabaseKey);

  const body      = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return new Response('Missing stripe-signature', { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new Response(`Webhook error: ${err}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const bookingId = session.metadata?.booking_id;

    if (bookingId) {
      // Only rows that were not already paid come back from this update, so
      // when Stripe retries the same event we do not email everyone twice.
      const { data: updated, error } = await (supabase as any)
        .from('bookings')
        .update({
          payment_status:    'deposit_paid',
          stripe_session_id: session.id,
          deposit_paid_at:   new Date().toISOString(),
        })
        .eq('id', bookingId)
        .neq('payment_status', 'deposit_paid')
        .select('name, email, phone, device_type, problem_description');

      if (error) {
        console.error('Failed to update booking payment status:', error);
        return new Response('DB update failed', { status: 500 });
      }
      console.log(`✅ Deposit paid for booking ${bookingId}`);

      // Until this existed, a paid deposit sent no email at all: the customer
      // was promised a confirmation that never came, and Bailey had no alert
      // that money had arrived. The pay-on-the-day path sends these from the
      // browser; a deposit can only be confirmed here, after Stripe says so.
      const booking = Array.isArray(updated) ? updated[0] : null;
      if (booking) {
        try {
          const res = await fetch(`${supabaseUrl}/functions/v1/send-booking-confirmation`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name:                booking.name ?? session.metadata?.customer_name,
              email:               booking.email ?? session.customer_details?.email ?? undefined,
              phone:               booking.phone ?? undefined,
              device_type:         booking.device_type ?? undefined,
              problem_description: booking.problem_description ?? undefined,
              service:             session.metadata?.service || undefined,
              date:                session.metadata?.date || undefined,
              slot:                session.metadata?.slot || undefined,
              bookingId,
              paymentOption:       'deposit',
            }),
          });
          if (!res.ok) console.error('send-booking-confirmation failed:', res.status, await res.text());
        } catch (err) {
          // The payment is recorded either way. Do not make Stripe retry the
          // whole event because an email failed.
          console.error('send-booking-confirmation threw:', err);
        }
      }
    }
  }

  if (event.type === 'checkout.session.expired') {
    const session = event.data.object as Stripe.Checkout.Session;
    const bookingId = session.metadata?.booking_id;
    if (bookingId) {
      await (supabase as any)
        .from('bookings')
        .update({ payment_status: 'deposit_expired' })
        .eq('id', bookingId);
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
});
