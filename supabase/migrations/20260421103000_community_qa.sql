-- Community Q&A tables for /community/ask
-- Public-facing Q&A: anyone may submit a question, the TekSure team answers,
-- and visitors can upvote the ones they found helpful.

CREATE TABLE IF NOT EXISTS public.community_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text,
  category text NOT NULL,
  question text NOT NULL,
  context text,
  answer text,
  answered_by text,
  answered_at timestamptz,
  status text NOT NULL DEFAULT 'pending', -- pending / answered / hidden
  helpful_count int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS community_questions_status_idx
  ON public.community_questions (status);
CREATE INDEX IF NOT EXISTS community_questions_category_idx
  ON public.community_questions (category);
CREATE INDEX IF NOT EXISTS community_questions_created_at_idx
  ON public.community_questions (created_at DESC);

CREATE TABLE IF NOT EXISTS public.community_question_votes (
  question_id uuid NOT NULL REFERENCES public.community_questions(id) ON DELETE CASCADE,
  fingerprint text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (question_id, fingerprint)
);

CREATE INDEX IF NOT EXISTS community_question_votes_fingerprint_idx
  ON public.community_question_votes (fingerprint);

-- Row Level Security
ALTER TABLE public.community_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_question_votes ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon) can submit a new question.
CREATE POLICY "Anyone can insert questions"
  ON public.community_questions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Anyone can read questions that haven't been hidden by moderation.
CREATE POLICY "Everyone can read visible questions"
  ON public.community_questions
  FOR SELECT
  TO anon, authenticated
  USING (status <> 'hidden');

-- Only admins can update (answer / hide) questions.
CREATE POLICY "Admins can update questions"
  ON public.community_questions
  FOR UPDATE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Only admins can delete questions.
CREATE POLICY "Admins can delete questions"
  ON public.community_questions
  FOR DELETE
  TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Voting: anyone can record a vote.
CREATE POLICY "Anyone can vote"
  ON public.community_question_votes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Anyone can read aggregate votes.
CREATE POLICY "Everyone can read votes"
  ON public.community_question_votes
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Helper: RPC to increment helpful_count atomically when a new vote lands.
-- Using an RPC keeps the write path simple for the browser client and avoids a
-- race on concurrent upvotes. SECURITY DEFINER so anon can call it even though
-- plain UPDATEs on community_questions are admin-only.
CREATE OR REPLACE FUNCTION public.community_question_upvote(
  p_question_id uuid,
  p_fingerprint text
) RETURNS int
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_new_count int;
  v_inserted  int;
BEGIN
  INSERT INTO public.community_question_votes (question_id, fingerprint)
  VALUES (p_question_id, p_fingerprint)
  ON CONFLICT DO NOTHING;

  GET DIAGNOSTICS v_inserted = ROW_COUNT;

  IF v_inserted = 0 THEN
    RETURN (
      SELECT helpful_count FROM public.community_questions WHERE id = p_question_id
    );
  END IF;

  UPDATE public.community_questions
     SET helpful_count = helpful_count + 1
   WHERE id = p_question_id
  RETURNING helpful_count INTO v_new_count;

  RETURN v_new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.community_question_upvote(uuid, text) TO anon, authenticated;
