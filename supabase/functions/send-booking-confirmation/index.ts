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
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body: BookingDetails = await req.json();
    const { name, email, service, date, slot, bookingId } = body;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const firstName = name?.split(' ')[0] || 'there';
    const ref = bookingId?.slice(0, 8).toUpperCase() ?? 'TEKSURE';

    // ── 1. Confirmation email to customer ────────────────────────────────────
    if (email) {
      await sendEmail({
        to: email,
        subject: `Your TekSure booking is confirmed — ${service}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
            <div style="margin-bottom: 28px;">
              <span style="font-size: 24px; font-weight: 700;">TekSure</span>
            </div>

            <h1 style="font-size: 22px; font-weight: 600; margin: 0 0 8px;">Hi ${firstName}, you're booked in! ✅</h1>
            <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              Your technician appointment is confirmed. We'll be in touch to confirm the exact time before your appointment.
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

            <p style="font-size: 14px; color: #555; margin: 0 0 24px;">
              If you need to reschedule or have any questions, just reply to this email and we'll sort it out.
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
      subject: `New booking: ${service}${name ? ` — ${name}` : ''} (${date}, ${slot})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
          <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 20px;">📅 New Booking</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            ${name ? `<tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="font-weight: 500;">${name}</td></tr>` : ''}
            ${email ? `<tr><td style="padding: 8px 0; color: #888;">Email</td><td><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="font-weight: 500;">${service}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Date</td><td style="font-weight: 500;">${date}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Time</td><td style="font-weight: 500;">${slot}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Ref</td><td style="font-family: monospace;">${ref}</td></tr>
          </table>
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
