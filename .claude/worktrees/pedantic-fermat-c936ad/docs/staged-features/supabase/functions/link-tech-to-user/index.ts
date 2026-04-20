/**
 * link-tech-to-user — Admin Edge Function
 *
 * Links an approved technician_profile to an existing auth user by email.
 * This replaces the manual SQL step previously required.
 *
 * Called by: /admin/technicians (TechVerification page)
 *
 * Request body: { tech_profile_id: string, user_email: string }
 * Response:     { success: true, user_id: string }  OR  { error: string }
 *
 * Security:
 *  - Caller must provide a valid Supabase JWT in the Authorization header
 *  - Caller must have is_admin = TRUE in their profile
 *  - Uses service-role key to search auth.users (bypasses RLS)
 */

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // ── 1. Parse request ───────────────────────────────────────────────────────
    const { tech_profile_id, user_email } = await req.json();

    if (!tech_profile_id || !user_email) {
      return new Response(
        JSON.stringify({ error: "tech_profile_id and user_email are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── 2. Verify caller is an admin ──────────────────────────────────────────
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized." }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build a client with the caller's JWT to check their admin status
    const callerClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user: callerUser } } = await callerClient.auth.getUser();
    if (!callerUser) {
      return new Response(
        JSON.stringify({ error: "Unauthorized." }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { data: callerProfile } = await callerClient
      .from("profiles")
      .select("is_admin")
      .eq("user_id", callerUser.id)
      .single();

    if (!callerProfile?.is_admin) {
      return new Response(
        JSON.stringify({ error: "Admin access required." }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── 3. Use service-role client to find user by email ─────────────────────
    const adminClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Search auth.users by email (requires service role)
    const { data: usersPage, error: listErr } = await adminClient.auth.admin.listUsers({
      page: 1,
      perPage: 1000,
    });

    if (listErr || !usersPage) {
      return new Response(
        JSON.stringify({ error: "Could not search users. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const targetUser = usersPage.users.find(
      (u) => u.email?.toLowerCase() === user_email.toLowerCase().trim()
    );

    if (!targetUser) {
      return new Response(
        JSON.stringify({ error: `No account found with email: ${user_email}` }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ── 4. Update technician_profiles.user_id ─────────────────────────────────
    const { error: updateErr } = await adminClient
      .from("technician_profiles")
      .update({ user_id: targetUser.id })
      .eq("id", tech_profile_id);

    if (updateErr) {
      return new Response(
        JSON.stringify({ error: "Failed to link account: " + updateErr.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, user_id: targetUser.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Unexpected error: " + String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
