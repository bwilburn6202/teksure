-- ─────────────────────────────────────────────────────────────────────────────
-- TekBrain v2 — RAG Knowledge Base Foundation
--
-- Sets up everything TekBrain needs to answer questions by retrieving the most
-- relevant chunks of TekSure's guide library and grounding the LLM response in
-- them. Built on pgvector + HNSW for fast cosine-similarity search against
-- OpenAI `text-embedding-3-small` vectors (1536 dimensions).
--
-- Pieces introduced here:
--   1. pgvector extension
--   2. guide_chunks             — per-chunk content + embedding + metadata
--   3. match_guide_chunks()     — SQL function, top-N similarity search
--   4. tekbrain_conversations   — per-session conversation header
--   5. tekbrain_messages        — individual user/assistant turns + citations
--   6. Indexes (btree lookups + HNSW for vectors)
--   7. RLS: service role writes; authenticated users read their own history
--
-- Ingestion is performed by an Edge Function (runs under service_role) that
-- chunks each guide, calls OpenAI, and upserts rows here. The client never
-- writes to these tables directly.
-- ─────────────────────────────────────────────────────────────────────────────

BEGIN;

-- ─────────────────────────────────────────────────────────────────────────────
-- 1. Extensions
-- ─────────────────────────────────────────────────────────────────────────────
-- pgvector powers the cosine-similarity search that retrieves relevant chunks
-- for a given user question. Enabled in its own schema per Supabase convention.
CREATE EXTENSION IF NOT EXISTS vector;

-- ─────────────────────────────────────────────────────────────────────────────
-- 2. guide_chunks — the RAG corpus
-- ─────────────────────────────────────────────────────────────────────────────
-- One row per chunk of a published TekSure guide. `chunk_index` preserves the
-- original in-guide order so we can reassemble neighbouring chunks when useful.
-- `metadata` is deliberately open-ended (tags, difficulty, reading time, device
-- platforms, etc.) so we can filter retrieval without schema churn.
CREATE TABLE IF NOT EXISTS public.guide_chunks (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guide_id     text NOT NULL,              -- guide slug, e.g. 'how-to-set-up-wifi'
  guide_title  text NOT NULL,
  category     text NOT NULL,              -- e.g. 'wifi', 'scams', 'smartphones'
  chunk_index  integer NOT NULL,           -- 0-based position within the guide
  heading      text,                       -- nearest H2/H3 above the chunk
  content      text NOT NULL,              -- the chunk text fed to the embedder
  embedding    vector(1536),               -- text-embedding-3-small output
  metadata     jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),

  -- A single (guide_id, chunk_index) pair must be unique so re-ingestion of a
  -- guide safely upserts rather than duplicating.
  CONSTRAINT guide_chunks_guide_chunk_unique UNIQUE (guide_id, chunk_index)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- 3. Indexes on guide_chunks
-- ─────────────────────────────────────────────────────────────────────────────
-- Lookups by slug ("give me all chunks for this guide") and filters by category
-- ("only search smart-home guides") are both common, so they get their own
-- btree indexes. The HNSW index is the heavy hitter — it makes cosine-distance
-- searches sublinear and is what the match_guide_chunks() function relies on.
CREATE INDEX IF NOT EXISTS idx_guide_chunks_guide_id
  ON public.guide_chunks (guide_id);

CREATE INDEX IF NOT EXISTS idx_guide_chunks_category
  ON public.guide_chunks (category);

-- HNSW params tuned for ~10k–100k chunks (the expected TekSure corpus size for
-- the foreseeable future). `vector_cosine_ops` pairs with the `<=>` operator
-- used by match_guide_chunks().
CREATE INDEX IF NOT EXISTS idx_guide_chunks_embedding_hnsw
  ON public.guide_chunks
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- GIN index on metadata lets us filter by arbitrary tags (e.g. difficulty,
-- platform) in future retrieval modes without another migration.
CREATE INDEX IF NOT EXISTS idx_guide_chunks_metadata
  ON public.guide_chunks USING GIN (metadata);

-- ─────────────────────────────────────────────────────────────────────────────
-- 4. match_guide_chunks() — top-N cosine similarity search
-- ─────────────────────────────────────────────────────────────────────────────
-- Called from the TekBrain Edge Function after embedding a user question.
-- Returns the top `match_count` chunks ordered by similarity, with optional
-- category / guide filters. `similarity` is 1 - cosine_distance, so higher is
-- more similar (easier to reason about downstream than raw distance).
CREATE OR REPLACE FUNCTION public.match_guide_chunks(
  query_embedding vector(1536),
  match_count     int DEFAULT 5,
  filter_category text DEFAULT NULL,
  filter_guide_id text DEFAULT NULL
)
RETURNS TABLE (
  id           uuid,
  guide_id     text,
  guide_title  text,
  category     text,
  chunk_index  integer,
  heading      text,
  content      text,
  metadata     jsonb,
  similarity   float
)
LANGUAGE plpgsql STABLE
AS $$
BEGIN
  RETURN QUERY
  SELECT
    gc.id,
    gc.guide_id,
    gc.guide_title,
    gc.category,
    gc.chunk_index,
    gc.heading,
    gc.content,
    gc.metadata,
    1 - (gc.embedding <=> query_embedding) AS similarity
  FROM public.guide_chunks gc
  WHERE gc.embedding IS NOT NULL
    AND (filter_category IS NULL OR gc.category = filter_category)
    AND (filter_guide_id IS NULL OR gc.guide_id = filter_guide_id)
  ORDER BY gc.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

COMMENT ON FUNCTION public.match_guide_chunks(vector, int, text, text)
  IS 'Top-N cosine-similarity search over guide_chunks. Returns similarity = 1 - cosine_distance.';

-- ─────────────────────────────────────────────────────────────────────────────
-- 5. tekbrain_conversations — one row per chat session
-- ─────────────────────────────────────────────────────────────────────────────
-- `user_id` is nullable so anonymous visitors can still use TekBrain; we use
-- `session_id` (a client-generated UUID stored in localStorage) to thread their
-- messages together without an auth account.
CREATE TABLE IF NOT EXISTS public.tekbrain_conversations (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid REFERENCES auth.users (id) ON DELETE CASCADE,
  session_id text NOT NULL,                -- client-side session ID for anon users
  started_at timestamptz NOT NULL DEFAULT now(),
  ended_at   timestamptz,
  metadata   jsonb NOT NULL DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_tekbrain_conversations_user_id
  ON public.tekbrain_conversations (user_id);

CREATE INDEX IF NOT EXISTS idx_tekbrain_conversations_session_id
  ON public.tekbrain_conversations (session_id);

CREATE INDEX IF NOT EXISTS idx_tekbrain_conversations_started_at
  ON public.tekbrain_conversations (started_at DESC);

-- ─────────────────────────────────────────────────────────────────────────────
-- 6. tekbrain_messages — individual chat turns
-- ─────────────────────────────────────────────────────────────────────────────
-- `chunks_used` is the citation trail for assistant replies: an array of
-- { id, guide_id, guide_title, similarity } objects pulled from
-- match_guide_chunks() for that turn. Lets us show sources in the UI and
-- audit retrieval quality offline.
CREATE TABLE IF NOT EXISTS public.tekbrain_messages (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES public.tekbrain_conversations (id) ON DELETE CASCADE,
  role            text NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content         text NOT NULL,
  chunks_used     jsonb NOT NULL DEFAULT '[]'::jsonb,
  tokens_in       integer,
  tokens_out      integer,
  model_name      text,
  timestamp       timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_tekbrain_messages_conversation_id
  ON public.tekbrain_messages (conversation_id);

CREATE INDEX IF NOT EXISTS idx_tekbrain_messages_timestamp
  ON public.tekbrain_messages (timestamp DESC);

-- ─────────────────────────────────────────────────────────────────────────────
-- 7. updated_at trigger for guide_chunks
-- ─────────────────────────────────────────────────────────────────────────────
-- Reuses the existing public.update_knowledge_updated_at() helper introduced in
-- 20260403150000_knowledge_base.sql. Defined here as a separate function for
-- clarity and to avoid cross-file dependency if the older migration ever moves.
CREATE OR REPLACE FUNCTION public.update_tekbrain_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_guide_chunks_updated_at ON public.guide_chunks;
CREATE TRIGGER trg_guide_chunks_updated_at
  BEFORE UPDATE ON public.guide_chunks
  FOR EACH ROW EXECUTE FUNCTION public.update_tekbrain_updated_at();

-- ─────────────────────────────────────────────────────────────────────────────
-- 8. Row-Level Security
-- ─────────────────────────────────────────────────────────────────────────────
-- Philosophy:
--   * guide_chunks            — readable by anyone (the guide content is public
--                               anyway); only service_role can write.
--   * tekbrain_conversations  — users can read/create/update their own rows;
--                               service_role has full access (Edge Function).
--   * tekbrain_messages       — users can read their own messages (via the
--                               parent conversation); service_role writes.
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE public.guide_chunks            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tekbrain_conversations  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tekbrain_messages       ENABLE ROW LEVEL SECURITY;

-- ── guide_chunks ─────────────────────────────────────────────────────────────
-- Public read (including anon) so the retrieval function works for logged-out
-- visitors using TekBrain.
CREATE POLICY "Anyone can read guide chunks"
  ON public.guide_chunks FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role manages guide chunks"
  ON public.guide_chunks FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

-- ── tekbrain_conversations ───────────────────────────────────────────────────
CREATE POLICY "Users read own conversations"
  ON public.tekbrain_conversations FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users create own conversations"
  ON public.tekbrain_conversations FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own conversations"
  ON public.tekbrain_conversations FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role manages conversations"
  ON public.tekbrain_conversations FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

-- ── tekbrain_messages ────────────────────────────────────────────────────────
-- SELECT is permitted when the caller owns the parent conversation. Writes go
-- through the Edge Function under service_role; we do not expose insert/update
-- to authenticated users directly (prevents clients from fabricating assistant
-- messages or citations).
CREATE POLICY "Users read own messages"
  ON public.tekbrain_messages FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.tekbrain_conversations c
      WHERE c.id = tekbrain_messages.conversation_id
        AND c.user_id = auth.uid()
    )
  );

CREATE POLICY "Service role manages messages"
  ON public.tekbrain_messages FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

COMMIT;
