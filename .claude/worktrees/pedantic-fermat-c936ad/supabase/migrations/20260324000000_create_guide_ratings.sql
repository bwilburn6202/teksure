-- Guide ratings table: stores star ratings (1-5) per user per guide
create table if not exists public.guide_ratings (
  id           uuid primary key default gen_random_uuid(),
  guide_slug   text not null,
  user_id      uuid references auth.users(id) on delete cascade,
  -- allow anonymous ratings via session fingerprint
  anon_key     text,
  stars        smallint not null check (stars between 1 and 5),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  -- each user/anon can only rate a guide once
  unique (guide_slug, user_id),
  unique (guide_slug, anon_key),
  -- one of user_id or anon_key must be present
  constraint rating_identity_required check (
    user_id is not null or anon_key is not null
  )
);

-- RLS: anyone can read aggregate ratings; only owner can insert/update their own
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

-- View: avg rating + count per guide slug
create or replace view public.guide_rating_stats as
  select
    guide_slug,
    round(avg(stars)::numeric, 1)  as avg_stars,
    count(*)::int                  as rating_count
  from public.guide_ratings
  group by guide_slug;

-- Updated_at trigger
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
