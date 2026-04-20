-- Guide ratings table
create table if not exists public.guide_ratings (
  id           uuid primary key default gen_random_uuid(),
  guide_slug   text not null,
  user_id      uuid references auth.users(id) on delete cascade,
  anon_key     text,
  stars        smallint not null check (stars between 1 and 5),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  unique (guide_slug, user_id),
  unique (guide_slug, anon_key),
  constraint rating_identity_required check (
    user_id is not null or anon_key is not null
  )
);

alter table public.guide_ratings enable row level security;

create policy "Anyone can read guide ratings"
  on public.guide_ratings for select
  using (true);

create policy "Users can insert their own rating"
  on public.guide_ratings for insert
  with check (
    (auth.uid() is not null and user_id = auth.uid()) or
    (auth.uid() is null and anon_key is not null)
  );

create policy "Users can update their own rating"
  on public.guide_ratings for update
  using (
    (auth.uid() is not null and user_id = auth.uid()) or
    (auth.uid() is null and anon_key is not null)
  );

create or replace view public.guide_rating_stats as
  select
    guide_slug,
    round(avg(stars)::numeric, 1)  as avg_stars,
    count(*)::int                  as rating_count
  from public.guide_ratings
  group by guide_slug;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger guide_ratings_updated_at
  before update on public.guide_ratings
  for each row execute function public.set_updated_at();

-- OS type enum
DO $$ BEGIN
  CREATE TYPE os_type AS ENUM ('windows', 'macos', 'ios', 'android');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- video_tutorials
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

-- guide_videos junction
CREATE TABLE IF NOT EXISTS guide_videos (
  guide_slug  TEXT    NOT NULL,
  video_id    UUID    NOT NULL REFERENCES video_tutorials(id) ON DELETE CASCADE,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (guide_slug, video_id)
);

CREATE INDEX IF NOT EXISTS idx_vt_guide_slug    ON video_tutorials(guide_slug);
CREATE INDEX IF NOT EXISTS idx_vt_os_type       ON video_tutorials(os_type);
CREATE INDEX IF NOT EXISTS idx_vt_is_published  ON video_tutorials(is_published);
CREATE INDEX IF NOT EXISTS idx_gv_guide_slug    ON guide_videos(guide_slug);

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

ALTER TABLE video_tutorials ENABLE ROW LEVEL SECURITY;
ALTER TABLE guide_videos    ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published videos"
  ON video_tutorials FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins manage video_tutorials"
  ON video_tutorials FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Public can read guide_videos"
  ON guide_videos FOR SELECT
  USING (true);

CREATE POLICY "Admins manage guide_videos"
  ON guide_videos FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );