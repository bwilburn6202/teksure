import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') ?? 'bailey@teksure.com';
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') ?? 'TekSure <hello@teksure.com>';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NotificationPayload {
  type: 'newsletter_signup' | 'scam_report';
  data: Record<string, string | undefined>;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body: NotificationPayload = await req.json();
    const { type, data } = body;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    let subject = '';
    let html = '';

    if (type === 'newsletter_signup') {
      subject = `New newsletter signup: ${data.email ?? 'unknown'}`;
      html = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
          <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 20px;">New Newsletter Subscriber</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 120px;">Email</td>
              <td style="padding: 8px 0; font-weight: 500;">
                <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <a href="https://teksure.com/admin" style="display: inline-block; background: #2563eb; color: white; font-size: 14px; font-weight: 500; padding: 10px 20px; border-radius: 8px; text-decoration: none;">
              View in Admin Console
            </a>
          </div>
        </div>
      `;
    } else if (type === 'scam_report') {
      subject = `New scam report: ${data.scam_type ?? 'Unknown type'}`;
      html = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #111;">
          <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 20px;">New Scam Report</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            ${data.scam_type ? `<tr><td style="padding: 8px 0; color: #888; width: 120px;">Type</td><td style="padding: 8px 0; font-weight: 500;">${data.scam_type}</td></tr>` : ''}
            ${data.reporter_contact ? `<tr><td style="padding: 8px 0; color: #888;">Contact</td><td style="padding: 8px 0;"><a href="mailto:${data.reporter_contact}" style="color: #2563eb;">${data.reporter_contact}</a></td></tr>` : ''}
            ${data.money_lost ? `<tr><td style="padding: 8px 0; color: #888;">Money lost</td><td style="padding: 8px 0; font-weight: 500;">${data.money_lost}</td></tr>` : ''}
          </table>

          ${data.description ? `
          <div style="background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 4px; padding: 14px 16px; margin-top: 20px;">
            <p style="font-size: 13px; color: #888; margin: 0 0 6px;">Description</p>
            <p style="font-size: 15px; color: #333; margin: 0; line-height: 1.5;">${data.description}</p>
          </div>` : ''}

          ${data.scam_url ? `<p style="font-size: 13px; color: #888; margin-top: 16px;">Scam URL: <span style="color: #333;">${data.scam_url}</span></p>` : ''}
          ${data.scam_phone ? `<p style="font-size: 13px; color: #888; margin-top: 4px;">Scam phone: <span style="color: #333;">${data.scam_phone}</span></p>` : ''}
          ${data.scam_email_address ? `<p style="font-size: 13px; color: #888; margin-top: 4px;">Scam email: <span style="color: #333;">${data.scam_email_address}</span></p>` : ''}

          <div style="margin-top: 24px;">
            <a href="https://teksure.com/admin" style="display: inline-block; background: #2563eb; color: white; font-size: 14px; font-weight: 500; padding: 10px 20px; border-radius: 8px; text-decoration: none;">
              View in Admin Console
            </a>
          </div>
        </div>
      `;
    } else {
      return new Response(JSON.stringify({ error: 'Unknown notification type' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    await sendEmail({ to: ADMIN_EMAIL, subject, html });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-notification error:', err);
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
