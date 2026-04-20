// email-selftest: diagnostic endpoint for verifying Resend configuration.
// Admin-only. Returns which env vars are set (without leaking values) and
// optionally attempts a test send when ?send=1 is passed.
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL');
const FROM_EMAIL = Deno.env.get('FROM_EMAIL');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const url = new URL(req.url);
  const shouldSend = url.searchParams.get('send') === '1';
  const to = url.searchParams.get('to') ?? ADMIN_EMAIL;

  const config = {
    RESEND_API_KEY: RESEND_API_KEY ? `set (${RESEND_API_KEY.length} chars)` : 'MISSING',
    ADMIN_EMAIL: ADMIN_EMAIL ?? 'MISSING (using default bailey@teksure.com)',
    FROM_EMAIL: FROM_EMAIL ?? 'MISSING (using default TekSure <hello@teksure.com>)',
  };

  if (!shouldSend) {
    return new Response(JSON.stringify({ config, hint: 'Pass ?send=1 to attempt a test email.' }, null, 2), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ config, error: 'Cannot send: RESEND_API_KEY not set.' }, null, 2), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
  if (!to) {
    return new Response(JSON.stringify({ config, error: 'Cannot send: no destination (pass ?to=...)' }, null, 2), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL ?? 'TekSure <hello@teksure.com>',
        to,
        subject: 'TekSure email self-test',
        html: `<div style="font-family: sans-serif; padding: 24px;">
          <h2 style="margin: 0 0 12px;">TekSure email self-test</h2>
          <p>If you received this, Resend is configured correctly in production.</p>
          <p style="color:#666; font-size:13px;">Sent at ${new Date().toISOString()}</p>
        </div>`,
      }),
    });

    const resendBody = await res.text();
    return new Response(
      JSON.stringify({ config, resendStatus: res.status, resendBody, to }, null, 2),
      {
        status: res.ok ? 200 : 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ config, error: String(err) }, null, 2), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
