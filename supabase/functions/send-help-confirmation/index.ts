import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') ?? 'bailey@teksure.com';
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') ?? 'TekSure <hello@teksure.com>';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface HelpRequest {
  name?: string;
  email?: string;
  phone?: string;
  device_type?: string;
  problem_description?: string;
}

const deviceLabels: Record<string, string> = {
  phone: 'Phone',
  tablet: 'Tablet',
  computer: 'Computer',
  tv: 'TV / Streaming Device',
  'smart-home': 'Smart Home Device',
  other: 'Other',
};

serve(async (req) => {
  // Handle CORS pre-flight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body: HelpRequest = await req.json();
    const { name, email, phone, device_type, problem_description } = body;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const firstName = name?.split(' ')[0] || 'there';
    const device = device_type ? deviceLabels[device_type] ?? device_type : null;

    // ── 1. Confirmation email to the customer ────────────────────────────────
    if (email) {
      await sendEmail({
        to: email,
        subject: 'We got your request — TekSure',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
            <div style="margin-bottom: 32px;">
              <span style="font-size: 24px; font-weight: 700; color: #1a1a1a;">TekSure</span>
            </div>

            <h1 style="font-size: 22px; font-weight: 600; margin: 0 0 8px;">Hi ${firstName}, we got your request! 👋</h1>
            <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              A real person on our team will review your request and be in touch soon — no robots, no runaround.
            </p>

            ${problem_description ? `
            <div style="background: #f5f5f5; border-radius: 10px; padding: 16px; margin-bottom: 24px;">
              <p style="font-size: 13px; color: #888; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 0.5px;">Your request</p>
              <p style="color: #333; font-size: 15px; margin: 0; line-height: 1.5;">${problem_description}</p>
            </div>` : ''}

            <div style="margin-bottom: 32px;">
              <p style="font-size: 14px; color: #555; margin: 0 0 4px;"><strong>How we'll reach you:</strong></p>
              ${phone ? `<p style="font-size: 14px; color: #555; margin: 0;">📞 ${phone}</p>` : ''}
              ${email ? `<p style="font-size: 14px; color: #555; margin: 0;">✉️ ${email}</p>` : ''}
              ${device ? `<p style="font-size: 14px; color: #555; margin: 0;">💻 ${device}</p>` : ''}
            </div>

            <div style="text-align: center; margin-bottom: 32px;">
              <a href="https://teksure.co/guides" style="display: inline-block; background: #2563eb; color: white; font-size: 15px; font-weight: 500; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                Browse free guides while you wait →
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="font-size: 13px; color: #999; margin: 0;">
              Questions? Reply to this email or call us any time. — The TekSure Team
            </p>
          </div>
        `,
      });
    }

    // ── 2. Notification email to admin (Bailey) ──────────────────────────────
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `New help request${name ? ` from ${name}` : ''} — TekSure`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
          <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 20px;">New Help Request</h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            ${name ? `<tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 500;">${name}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td></tr>` : ''}
            ${email ? `<tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>` : ''}
            ${device ? `<tr><td style="padding: 8px 0; color: #888;">Device</td><td style="padding: 8px 0;">${device}</td></tr>` : ''}
          </table>

          ${problem_description ? `
          <div style="background: #f0f4ff; border-left: 3px solid #2563eb; border-radius: 4px; padding: 14px 16px; margin-top: 20px;">
            <p style="font-size: 13px; color: #888; margin: 0 0 6px;">Issue description</p>
            <p style="font-size: 15px; color: #333; margin: 0; line-height: 1.5;">${problem_description}</p>
          </div>` : ''}

          <div style="margin-top: 28px;">
            <a href="https://teksure.co/admin" style="display: inline-block; background: #2563eb; color: white; font-size: 14px; font-weight: 500; padding: 10px 20px; border-radius: 8px; text-decoration: none;">
              View in Admin Console →
            </a>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-help-confirmation error:', err);
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
    throw new Error(`Resend API error ${res.status}: ${body}`);
  }

  return res.json();
}
