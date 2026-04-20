/**
 * send-tech-approval — Supabase Edge Function
 *
 * Sends a welcome email to a newly approved TekSure technician.
 * Called by the TechVerification admin page after a successful approve action.
 *
 * Request body (JSON):
 *   {
 *     techName: string,    // technician's full name
 *     techEmail: string,   // technician's email address
 *     adminNotes?: string  // optional message from admin (e.g. onboarding info)
 *   }
 *
 * Env vars required:
 *   RESEND_API_KEY         — Resend API key
 *   PUBLIC_SITE_URL        — e.g. https://teksure.com (no trailing slash)
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { techName, techEmail, adminNotes } = await req.json();

    if (!techName || !techEmail) {
      return new Response(
        JSON.stringify({ error: "techName and techEmail are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const siteUrl =
      Deno.env.get("PUBLIC_SITE_URL") ?? "https://teksure.com";

    const adminNoteHtml = adminNotes
      ? `<div style="background:#f0f9ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:16px 0;border-radius:4px;">
           <p style="margin:0;font-size:14px;color:#1e40af;font-weight:600;">Message from TekSure:</p>
           <p style="margin:6px 0 0;font-size:14px;color:#1e3a8a;">${adminNotes}</p>
         </div>`
      : "";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to the TekSure Team!</title>
</head>
<body style="font-family:Arial,sans-serif;background:#f8fafc;margin:0;padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#2563eb,#1d4ed8);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;letter-spacing:-0.5px;">
                🎉 Welcome to the TekSure Team!
              </h1>
              <p style="margin:8px 0 0;color:#bfdbfe;font-size:15px;">
                Your application has been approved
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="font-size:16px;color:#374151;margin:0 0 12px;">
                Hi <strong>${techName}</strong>,
              </p>
              <p style="font-size:15px;color:#4b5563;line-height:1.6;margin:0 0 16px;">
                Great news — your application to become a TekSure Technician has been
                <strong style="color:#16a34a;">approved!</strong>
                We're excited to have you on board helping everyday people with their tech.
              </p>

              ${adminNoteHtml}

              <!-- What's next -->
              <h2 style="font-size:16px;color:#111827;margin:24px 0 12px;">
                What happens next
              </h2>
              <table cellpadding="0" cellspacing="0" width="100%">
                ${[
                  ["📱", "Sign in (or create an account)", `Your login email is <strong>${techEmail}</strong>. Head to <a href="${siteUrl}/login" style="color:#2563eb;">${siteUrl}/login</a> to get started.`],
                  ["🗂️", "View your jobs", `Once customers book appointments, you'll see them on your Technician Dashboard at <a href="${siteUrl}/tech" style="color:#2563eb;">${siteUrl}/tech</a>.`],
                  ["📧", "Stay in touch", "We'll contact you via email as new jobs are assigned. Make sure to check your inbox regularly."],
                ]
                  .map(
                    ([icon, title, body]) => `
                  <tr>
                    <td valign="top" style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-size:20px;padding-right:12px;vertical-align:top;">${icon}</td>
                          <td>
                            <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#111827;">${title}</p>
                            <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.5;">${body}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>`
                  )
                  .join("")}
              </table>

              <div style="text-align:center;margin:28px 0 0;">
                <a href="${siteUrl}/tech"
                   style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;
                          padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;">
                  Go to My Dashboard →
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                TekSure — Tech help for everyone &nbsp;|&nbsp;
                <a href="${siteUrl}" style="color:#6b7280;">${siteUrl}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "TekSure <noreply@teksure.com>",
        to: [techEmail],
        subject: "🎉 You're approved — Welcome to the TekSure team!",
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Resend error:", errBody);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: errBody }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-tech-approval error:", err);
    return new Response(
      JSON.stringify({ error: "Unexpected error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
