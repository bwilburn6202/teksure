-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: 20260325200000_tech_trends.sql
--
-- Creates the tech_trends cache table used by the fetch-tech-trends Edge Function.
-- Stores trending tech questions and news items fetched from Reddit and HN.
-- Cache TTL is managed by the Edge Function (default 6 hours).
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS tech_trends (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  type        TEXT        NOT NULL CHECK (type IN ('trending', 'news')),
  title       TEXT        NOT NULL,
  source      TEXT        NOT NULL,          -- e.g. 'r/techsupport', 'Hacker News'
  url         TEXT,
  score       INTEGER     NOT NULL DEFAULT 0,
  fetched_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for fast cache lookups by type + age
CREATE INDEX IF NOT EXISTS tech_trends_type_fetched_idx
  ON tech_trends (type, fetched_at DESC);

-- ── RLS: public read, no public write (Edge Function uses service role) ────────
ALTER TABLE tech_trends ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read tech trends"
  ON tech_trends
  FOR SELECT
  USING (TRUE);

-- No INSERT/UPDATE/DELETE policies — only the Edge Function (service role) writes here
