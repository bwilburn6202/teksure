-- Features that shipped in the frontend but whose schema was never migrated.
-- Found by the 2026-07-25 audit: each one failed silently at runtime.
-- (Applied via MCP 2026-07-25.)

-- 1. profiles.tier — TierContext persists the user's chosen experience level.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS tier text
  CHECK (tier IN ('just-starting', 'getting-comfortable', 'confident', 'power-user'));

-- 2. testimonials — homepage social proof (useTestimonials hook).
CREATE TABLE IF NOT EXISTS public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  detail text NOT NULL,
  quote text NOT NULL,
  rating integer NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  is_published boolean NOT NULL DEFAULT false,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read published testimonials" ON public.testimonials;
CREATE POLICY "Anyone can read published testimonials"
  ON public.testimonials FOR SELECT
  USING (is_published = true);

DROP POLICY IF EXISTS "Admins manage testimonials" ON public.testimonials;
CREATE POLICY "Admins manage testimonials"
  ON public.testimonials FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE INDEX IF NOT EXISTS idx_testimonials_published
  ON public.testimonials (is_published, display_order, created_at DESC);

-- 3. community_questions — the Ask TekSure Q&A board.
CREATE TABLE IF NOT EXISTS public.community_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text,
  category text NOT NULL DEFAULT 'General',
  question text NOT NULL,
  context text,
  answer text,
  answered_by text,
  answered_at timestamptz,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'answered', 'hidden')),
  helpful_count integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.community_questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read visible questions" ON public.community_questions;
CREATE POLICY "Anyone can read visible questions"
  ON public.community_questions FOR SELECT
  USING (status <> 'hidden');

DROP POLICY IF EXISTS "Anyone can submit a question" ON public.community_questions;
CREATE POLICY "Anyone can submit a question"
  ON public.community_questions FOR INSERT
  WITH CHECK (status = 'pending' AND length(question) BETWEEN 5 AND 2000);

DROP POLICY IF EXISTS "Admins manage questions" ON public.community_questions;
CREATE POLICY "Admins manage questions"
  ON public.community_questions FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE INDEX IF NOT EXISTS idx_community_questions_status
  ON public.community_questions (status, created_at DESC);

-- 4. Upvote tracking + RPC. One vote per browser fingerprint per question.
CREATE TABLE IF NOT EXISTS public.community_question_votes (
  question_id uuid NOT NULL REFERENCES public.community_questions(id) ON DELETE CASCADE,
  fingerprint text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (question_id, fingerprint)
);

ALTER TABLE public.community_question_votes ENABLE ROW LEVEL SECURITY;
-- No direct access; all writes go through the RPC below.

CREATE OR REPLACE FUNCTION public.community_question_upvote(
  p_question_id uuid,
  p_fingerprint text
)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_count integer;
BEGIN
  INSERT INTO public.community_question_votes (question_id, fingerprint)
  VALUES (p_question_id, p_fingerprint)
  ON CONFLICT (question_id, fingerprint) DO NOTHING;

  IF FOUND THEN
    UPDATE public.community_questions
      SET helpful_count = helpful_count + 1
      WHERE id = p_question_id
      RETURNING helpful_count INTO v_count;
  ELSE
    SELECT helpful_count INTO v_count
      FROM public.community_questions
      WHERE id = p_question_id;
  END IF;

  RETURN COALESCE(v_count, 0);
END;
$$;
