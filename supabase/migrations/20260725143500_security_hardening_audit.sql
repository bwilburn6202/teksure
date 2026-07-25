-- Security hardening from 2026-07-25 audit (applied via MCP 2026-07-25)

-- 1. scraped_articles: only admins may update (was: any signed-in user)
DROP POLICY IF EXISTS "authenticated_update_scraped_articles" ON public.scraped_articles;
CREATE POLICY "admins_update_scraped_articles"
  ON public.scraped_articles FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- 2. Pin search_path on flagged functions (mutable search_path advisor)
ALTER FUNCTION public.update_bookings_updated_at() SET search_path = public;
ALTER FUNCTION public.update_forum_threads_updated_at() SET search_path = public;
ALTER FUNCTION public.increment_thread_reply_count() SET search_path = public;
ALTER FUNCTION public.decrement_thread_reply_count() SET search_path = public;
ALTER FUNCTION public.update_simplified_articles_updated_at() SET search_path = public;
ALTER FUNCTION public.update_agent_memory_updated_at() SET search_path = public;
ALTER FUNCTION public.update_knowledge_updated_at() SET search_path = public;

-- 3. SECURITY DEFINER functions should not be callable via public RPC.
-- handle_new_user is a trigger fn; rls_auto_enable is an event-trigger helper.
-- Trigger execution does not require caller EXECUTE, so this is safe.
-- (is_admin is intentionally left executable — RLS policies evaluate it as the caller.)
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM anon, authenticated, public;
