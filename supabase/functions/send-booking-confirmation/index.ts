import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') ?? 'bailey@teksure.com';
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') ?? 'TekSure <hello@teksure.com>';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BookingDetails {
  name?: string;
  email?: string;
  service?: string;
  date?: string;
  slot?: string;
  bookingId?: string;
  /** 'deposit' if a Stripe deposit was taken, otherwise pay-on-the-day. */
  paymentOption?: 'day' | 'deposit';
  /** Shown to the admin only, so a phone-only booking can still be reached. */
  phone?: string;
  device_type?: string;
  problem_description?: string;
}

/**
 * Everything below goes into HTML email. The values come from a public form,
 * so escape them — otherwise anyone can put links or markup in the email
 * Bailey receives.
 */
function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Pricing shown in the confirmation email.
 *
 * Edge functions run on Deno and cannot import from src/, so these cannot come
 * from src/data/pricing.ts the way every page does. They are duplicated here
 * deliberately — and that duplication is a liability, because three
 * contradictory prices being live at once is exactly the bug this project just
 * finished fixing.
 *
 * IF YOU CHANGE PRICING, CHANGE IT IN BOTH PLACES:
 *   src/data/pricing.ts        (the website)
 *   this file                  (the confirmation email)
 */
const FIRST_HOUR_PRICE = 49;
const ADDITIONAL_HOUR_PRICE = 29;
const DEPOSIT_AMOUNT = 15;
const FREE_CANCELLATION_HOURS = 24;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body: BookingDetails = await req.json();
    const raw = body;
    const name = raw.name ? esc(raw.name) : undefined;
    const email = raw.email ? String(raw.email).trim() : undefined;
    const service = raw.service ? esc(raw.service) : undefined;
    const date = raw.date ? esc(raw.date) : undefined;
    const slot = raw.slot ? esc(raw.slot) : undefined;
    const phone = raw.phone ? esc(raw.phone) : undefined;
    const device = raw.device_type ? esc(raw.device_type) : undefined;
    const problem = raw.problem_description ? esc(raw.problem_description) : undefined;
    const { bookingId, paymentOption } = raw;
    const paidDeposit = paymentOption === 'deposit';
    const dueOnDay = paidDeposit ? FIRST_HOUR_PRICE - DEPOSIT_AMOUNT : FIRST_HOUR_PRICE;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const firstName = name?.split(' ')[0] || 'there';
    const ref = esc(bookingId?.slice(0, 8).toUpperCase() ?? 'TEKSURE');

    // ── 1. Confirmation email to customer ────────────────────────────────────
    if (email) {
      await sendEmail({
        to: email,
        subject: `Your TekSure booking is confirmed — ${raw.service ?? 'Tech help'}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
            <div style="margin-bottom: 28px;">
              <span style="font-size: 24px; font-weight: 700;">TekSure</span>
            </div>

            <h1 style="font-size: 22px; font-weight: 600; margin: 0 0 8px;">Hi ${firstName}, you're booked in! ✅</h1>
            <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              Your appointment is confirmed. We'll call you at the time below — this is a
              <strong>remote session over the phone</strong>, so nobody will come to your door.
              You don't need to install anything beforehand.
            </p>

            <div style="background: #f0f4ff; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <p style="font-size: 13px; color: #888; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">Booking details</p>
              <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
                <tr><td style="padding: 6px 0; color: #888; width: 100px;">Service</td><td style="font-weight: 500;">${service || 'Tech support'}</td></tr>
                <tr><td style="padding: 6px 0; color: #888;">Date</td><td style="font-weight: 500;">${date || 'TBC'}</td></tr>
                <tr><td style="padding: 6px 0; color: #888;">Time</td><td style="font-weight: 500;">${slot || ''}</td></tr>
                <tr><td style="padding: 6px 0; color: #888;">Reference</td><td style="font-weight: 500; font-family: monospace; letter-spacing: 1px;">${ref}</td></tr>
              </table>
            </div>

            <!--
              What this costs and how to cancel, in writing.

              The customer has just committed to a paid appointment. Leaving them
              without a written record of the price or the cancellation terms is
              how disputes and chargebacks start, and it is the kind of thing an
              older customer is quite reasonably anxious about after clicking a
              button. Saying it plainly here costs nothing and prevents both.
            -->
            <div style="border: 1px solid #e5e5e5; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <p style="font-size: 13px; color: #888; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">What this costs</p>
              <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
                ${paidDeposit
                  ? `<tr><td style="padding: 6px 0; color: #888; width: 140px;">Paid today</td><td style="font-weight: 500;">$${DEPOSIT_AMOUNT} deposit</td></tr>
                     <tr><td style="padding: 6px 0; color: #888;">Due on the day</td><td style="font-weight: 500;">$${dueOnDay}</td></tr>`
                  : `<tr><td style="padding: 6px 0; color: #888; width: 140px;">Paid today</td><td style="font-weight: 500;">Nothing</td></tr>
                     <tr><td style="padding: 6px 0; color: #888;">Due on the day</td><td style="font-weight: 500;">$${dueOnDay}</td></tr>`}
              </table>
              <p style="font-size: 13px; color: #666; line-height: 1.6; margin: 12px 0 0;">
                That covers the first hour, which is all most jobs need. Longer jobs are
                $${ADDITIONAL_HOUR_PRICE} for each extra hour, and we always ask before starting one.
                <strong>If we can't fix it, you pay nothing.</strong>
              </p>
            </div>

            <p style="font-size: 14px; color: #555; margin: 0 0 24px;">
              Need to reschedule or cancel? Just reply to this email. Cancel ${FREE_CANCELLATION_HOURS}+ hours
              before and any deposit is refunded in full — rescheduling is always free, even at short notice.
              Full details at <a href="https://www.teksure.com/refund-policy" style="color: #2563eb;">teksure.com/refund-policy</a>.
            </p>

            <div style="text-align: center; margin-bottom: 32px;">
              <a href="https://teksure.com/my-requests" style="display: inline-block; background: #2563eb; color: white; font-size: 15px; font-weight: 500; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                View my booking →
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="font-size: 13px; color: #999; margin: 0;">
              The TekSure Team · <a href="https://teksure.com" style="color: #2563eb;">teksure.com</a>
            </p>
          </div>
        `,
      });
    }

    // ── 2. Admin notification ────────────────────────────────────────────────
    await sendEmail({
      to: ADMIN_EMAIL,
      // Bailey reads the subject line first, so say plainly whether money came in.
      subject: `${paidDeposit ? `PAID $${DEPOSIT_AMOUNT} deposit — ` : ''}New booking: ${raw.service ?? 'Tech help'}${raw.name ? ` — ${raw.name}` : ''} (${raw.date ?? 'date TBC'}, ${raw.slot ?? ''})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
          <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 20px;">📅 New Booking</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            ${name ? `<tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="font-weight: 500;">${name}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Phone</td><td><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td></tr>` : ''}
            ${email ? `<tr><td style="padding: 8px 0; color: #888;">Email</td><td><a href="mailto:${esc(email)}" style="color: #2563eb;">${esc(email)}</a></td></tr>` : ''}
            ${device ? `<tr><td style="padding: 8px 0; color: #888;">Device</td><td>${device}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #888;">Payment</td><td style="font-weight: 500;">${paidDeposit ? `$${DEPOSIT_AMOUNT} deposit paid online. Collect $${dueOnDay} on the day.` : `Nothing paid yet. Collect $${FIRST_HOUR_PRICE} on the day.`}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="font-weight: 500;">${service}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Date</td><td style="font-weight: 500;">${date}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Time</td><td style="font-weight: 500;">${slot}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Ref</td><td style="font-family: monospace;">${ref}</td></tr>
          </table>
          ${problem ? `
          <div style="background: #f0f4ff; border-left: 3px solid #2563eb; border-radius: 4px; padding: 14px 16px; margin-top: 20px;">
            <p style="font-size: 13px; color: #888; margin: 0 0 6px;">What they said</p>
            <p style="font-size: 15px; color: #333; margin: 0; line-height: 1.5;">${problem}</p>
          </div>` : ''}
          <div style="margin-top: 24px;">
            <a href="https://teksure.com/admin" style="display: inline-block; background: #2563eb; color: white; font-size: 14px; font-weight: 500; padding: 10px 20px; border-radius: 8px; text-decoration: none;">
              Manage in Admin Console →
            </a>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-booking-confirmation error:', err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend ${res.status}: ${body}`);
  }
  return res.json();
}
