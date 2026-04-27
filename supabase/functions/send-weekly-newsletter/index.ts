// send-weekly-newsletter: admin-invoked endpoint that sends a newsletter
// to all rows in newsletter_subscribers via Resend.
//
// POST body: { subject: string, html: string, preview?: boolean, testTo?: string }
// - preview=true returns the rendered payload + recipient count without sending
// - testTo sends only to that single address (for pre-send verification)
// - otherwise sends to every subscriber, one Resend API call per address,
//   with small concurrency to stay under Resend's rate limit (10 req/s on free tier)
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') ?? 'TekSure <hello@teksure.com>';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RequestBody {
  subject?: string;
  html?: string;
  preview?: boolean;
  testTo?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization') ?? '';
    const token = authHeader.replace(/^Bearer\s+/i, '');
    if (!token) {
      return json({ error: 'Missing Authorization bearer token.' }, 401);
    }

    // Admin check: resolve the caller and verify role='admin' in profiles.
    const userClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: userResult, error: userErr } = await userClient.auth.getUser(token);
    if (userErr || !userResult?.user) {
      return json({ error: 'Invalid session.' }, 401);
    }
    const { data: profile } = await userClient
      .from('profiles')
      .select('role')
      .eq('id', userResult.user.id)
      .single();
    if (profile?.role !== 'admin') {
      return json({ error: 'Admin only.' }, 403);
    }

    if (!RESEND_API_KEY) {
      return json({ error: 'RESEND_API_KEY not configured.' }, 500);
    }

    const body: RequestBody = await req.json();
    const subject = body.subject?.trim();
    const html = body.html?.trim();
    if (!subject || !html) {
      return json({ error: 'subject and html are required.' }, 400);
    }

    // Service-role client for reading subscribers (RLS allows admin only from client,
    // so we always use service role inside the function).
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    let recipients: string[];
    if (body.testTo) {
      recipients = [body.testTo];
    } else {
      const { data, error } = await admin
        .from('newsletter_subscribers')
        .select('email');
      if (error) return json({ error: `DB read failed: ${error.message}` }, 500);
      recipients = (data ?? []).map((r: { email: string }) => r.email).filter(Boolean);
    }

    if (body.preview) {
      return json({
        preview: true,
        subject,
        htmlBytes: html.length,
        recipientCount: recipients.length,
        sampleRecipients: recipients.slice(0, 5),
      });
    }

    if (recipients.length === 0) {
      return json({ sent: 0, failed: 0, warning: 'No recipients.' });
    }

    // Send with concurrency=5. One Resend call per recipient (bcc would leak addresses).
    let sent = 0;
    let failed = 0;
    const errors: Array<{ to: string; error: string }> = [];
    const CONCURRENCY = 5;

    for (let i = 0; i < recipients.length; i += CONCURRENCY) {
      const batch = recipients.slice(i, i + CONCURRENCY);
      const results = await Promise.allSettled(batch.map((to) => sendOne(to, subject, html)));
      results.forEach((r, idx) => {
        if (r.status === 'fulfilled') {
          sent++;
        } else {
          failed++;
          errors.push({ to: batch[idx], error: String(r.reason).slice(0, 200) });
        }
      });
    }

    return json({ sent, failed, total: recipients.length, errors: errors.slice(0, 20) });
  } catch (err) {
    console.error('send-weekly-newsletter error:', err);
    return json({ error: String(err) }, 500);
  }
});

async function sendOne(to: string, subject: string, html: string) {
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

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
