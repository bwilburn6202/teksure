-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: Forum "Accepted Answer" / Solved marker
-- Date: 2026-03-24
-- ─────────────────────────────────────────────────────────────────────────────
--
-- Adds an `accepted_reply_id` foreign key to forum_threads.
-- When set, the thread is considered "Solved" and that reply is shown
-- as the "Best Answer" at the top of the thread page.
--
-- Only the thread author OR an admin can accept/unaccept a reply.
-- Enforced via the `accept_reply` RPC function below.
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE forum_threads
  ADD COLUMN IF NOT EXISTS accepted_reply_id UUID
    REFERENCES forum_replies(id) ON DELETE SET NULL;

-- ─────────────────────────────────────────────────────────────────────────────
-- RPC: accept_reply
--   p_thread_id  — the thread to update
--   p_reply_id   — the reply to accept (NULL = unaccept / clear)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION accept_reply(
  p_thread_id UUID,
  p_reply_id  UUID DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Only the thread author or an admin can accept/unaccept
  IF NOT EXISTS (
    SELECT 1
    FROM forum_threads t
    WHERE t.id = p_thread_id
      AND (
        t.user_id = auth.uid()
        OR EXISTS (
          SELECT 1 FROM profiles
          WHERE user_id = auth.uid()
            AND is_admin = TRUE
        )
      )
  ) THEN
    RAISE EXCEPTION 'Unauthorized: only the thread author or an admin can mark an answer';
  END IF;

  -- If a reply is provided, confirm it belongs to this thread
  IF p_reply_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM forum_replies
    WHERE id = p_reply_id
      AND thread_id = p_thread_id
  ) THEN
    RAISE EXCEPTION 'Reply does not belong to this thread';
  END IF;

  UPDATE forum_threads
  SET accepted_reply_id = p_reply_id
  WHERE id = p_thread_id;
END;
$$;

-- Allow any authenticated user to call the function
-- (the body enforces who can actually use it)
GRANT EXECUTE ON FUNCTION accept_reply(UUID, UUID) TO authenticated;
