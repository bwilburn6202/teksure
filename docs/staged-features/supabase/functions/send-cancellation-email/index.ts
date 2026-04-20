/**
 * send-cancellation-email — Supabase Edge Function
 *
 * Sends a cancellation confirmation email to a customer when they cancel a booking.
 * Called by MyBookings.tsx after a successful cancellation.
 *
 * Request body (JSON):
 *   {
 *     bookingId: string,
 *     userEmail: string,
 *     userName: string,          // optional — falls back to "there"
 *     serviceType: string,       // e.g. "remote", "in-home"
 *     bookingDate: string,       // e.g. "2026-04-15"
 *     bookingTime: string,       // e.g. "10:00 AM"
 *   }
 *
 * Env vars required:
 *   RESEND_API_KEY   — Resend API key
 *   PUBLIC_SITE_URL  — e.g. https://teksure.com (no trailing slash)
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const serviceLabels: Record<string, string> = {
  "in-home": "In-Home Visit",
  remote: "Remote Support",
  phone: "Phone Guidance",
  "drop-off": "Drop-Off Service",
};

function fmtDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const {
      bookingId,
      userEmail,
      userName,
      serviceType,
      bookingDate,
      bookingTime,
    } = await req.json();

    if (!userEmail || !bookingId) {
      return new Response(
        JSON.stringify({ error: "userEmail and bookingId are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const siteUrl =
      Deno.env.get("PUBLIC_SITE_URL") ?? "https://teksure.com";
    const displayName = userName || "there";
    const displayService = serviceLabels[serviceType] ?? serviceType ?? "Tech Support";
    const displayDate = bookingDate ? fmtDate(bookingDate) : "your scheduled date";
    const displayTime = bookingTime ?? "";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Booking Cancelled</title>
</head>
<body style="font-family:Arial,sans-serif;background:#f8fafc;margin:0;padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#dc2626,#b91c1c);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;letter-spacing:-0.5px;">
                Booking Cancelled
              </h1>
              <p style="margin:8px 0 0;color:#fecaca;font-size:15px;">
                Your appointment has been cancelled
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="font-size:16px;color:#374151;margin:0 0 12px;">
                Hi <strong>${displayName}</strong>,
              </p>
              <p style="font-size:15px;color:#4b5563;line-height:1.6;margin:0 0 20px;">
                This is to confirm that your booking has been cancelled. Here are the details of the cancelled appointment:
              </p>

              <!-- Booking details box -->
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin:0 0 24px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="padding:6px 0;">
                      <span style="font-size:13px;color:#9ca3af;">Service</span><br/>
                      <span style="font-size:15px;color:#374151;font-weight:600;">${displayService}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;">
                      <span style="font-size:13px;color:#9ca3af;">Date</span><br/>
                      <span style="font-size:15px;color:#374151;font-weight:600;">${displayDate}</span>
                    </td>
                  </tr>
                  ${displayTime ? `<tr>
                    <td style="padding:6px 0;">
                      <span style="font-size:13px;color:#9ca3af;">Time</span><br/>
                      <span style="font-size:15px;color:#374151;font-weight:600;">${displayTime}</span>
                    </td>
                  </tr>` : ""}
                  <tr>
                    <td style="padding:6px 0;">
                      <span style="font-size:13px;color:#9ca3af;">Booking ID</span><br/>
                      <span style="font-size:13px;color:#6b7280;font-family:monospace;">${bookingId.slice(0, 8)}…</span>
                    </td>
                  </tr>
                </table>
              </div>

              <p style="font-size:14px;color:#6b7280;line-height:1.6;margin:0 0 8px;">
                If you paid a deposit, it will be refunded within 5–10 business days to your original payment method. If you have any questions about your refund, please contact us.
              </p>

              <p style="font-size:14px;color:#6b7280;line-height:1.6;margin:0 0 24px;">
                Changed your mind? You can book a new appointment anytime.
              </p>

              <div style="text-align:center;margin:0 0 8px;">
                <a href="${siteUrl}/book"
                   style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;
                          padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;">
                  Book a New Appointment
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
              <p style="margin:4px 0 0;font-size:11px;color:#d1d5db;">
                Need help? Email <a href="mailto:support@teksure.com" style="color:#9ca3af;">support@teksure.com</a>
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
        to: [userEmail],
        subject: "Your TekSure booking has been cancelled",
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
    console.error("send-cancellation-email error:", err);
    return new Response(
      JSON.stringify({ error: "Unexpected error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
