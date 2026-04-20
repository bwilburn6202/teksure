-- ─────────────────────────────────────────────
-- Video Tutorials Infrastructure
-- ─────────────────────────────────────────────

-- OS type enum
DO $$ BEGIN
  CREATE TYPE os_type AS ENUM ('windows', 'macos', 'ios', 'android');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- ── video_tutorials ──────────────────────────
CREATE TABLE IF NOT EXISTS video_tutorials (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  guide_slug       TEXT        NOT NULL,
  title            TEXT        NOT NULL,
  description      TEXT,
  video_url        TEXT        NOT NULL,
  os_type          os_type     NOT NULL,
  os_version       TEXT,
  duration_seconds INTEGER,
  thumbnail_url    TEXT,
  is_published     BOOLEAN     NOT NULL DEFAULT true,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── guide_videos (junction) ──────────────────
-- Allows multiple guides to reference the same video,
-- with per-guide ordering control.
CREATE TABLE IF NOT EXISTS guide_videos (
  guide_slug  TEXT    NOT NULL,
  video_id    UUID    NOT NULL REFERENCES video_tutorials(id) ON DELETE CASCADE,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (guide_slug, video_id)
);

-- ── Indexes ──────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_vt_guide_slug    ON video_tutorials(guide_slug);
CREATE INDEX IF NOT EXISTS idx_vt_os_type       ON video_tutorials(os_type);
CREATE INDEX IF NOT EXISTS idx_vt_is_published  ON video_tutorials(is_published);
CREATE INDEX IF NOT EXISTS idx_gv_guide_slug    ON guide_videos(guide_slug);

-- ── updated_at trigger ───────────────────────
CREATE OR REPLACE FUNCTION update_video_tutorials_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_vt_updated_at ON video_tutorials;
CREATE TRIGGER trg_vt_updated_at
  BEFORE UPDATE ON video_tutorials
  FOR EACH ROW EXECUTE FUNCTION update_video_tutorials_updated_at();

-- ── Row Level Security ───────────────────────
ALTER TABLE video_tutorials ENABLE ROW LEVEL SECURITY;
ALTER TABLE guide_videos    ENABLE ROW LEVEL SECURITY;

-- Anyone can read published videos
CREATE POLICY "Public can read published videos"
  ON video_tutorials FOR SELECT
  USING (is_published = true);

-- Admins have full access to video_tutorials
CREATE POLICY "Admins manage video_tutorials"
  ON video_tutorials FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Anyone can read guide_videos join rows
CREATE POLICY "Public can read guide_videos"
  ON guide_videos FOR SELECT
  USING (true);

-- Admins manage junction table
CREATE POLICY "Admins manage guide_videos"
  ON guide_videos FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );
