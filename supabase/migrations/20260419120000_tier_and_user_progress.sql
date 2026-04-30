-- ─────────────────────────────────────────────────────────────────────────────
-- Tier system + user_progress table
--
-- Adds a per-user experience tier to `profiles` and creates a `user_progress`
-- table that tracks per-guide learning state for the skill-tree view at
-- /my-path. Mirrors client-side localStorage state so tier + progress
-- persist across devices once a user signs in.
--
-- Backfill: existing users get tier = NULL (they'll be prompted to pick on
-- their next visit). No existing rows are modified.
-- ─────────────────────────────────────────────────────────────────────────────

-- 1. Tier enum + column on profiles ─────────────────────────────────────────
do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_tier') then
    create type public.user_tier as enum (
      'just-starting',
      'getting-comfortable',
      'confident',
      'power-user'
    );
  end if;
end$$;

alter table public.profiles
  add column if not exists tier public.user_tier,
  add column if not exists tier_chosen_at timestamptz;

comment on column public.profiles.tier is
  'Self-declared experience level. Drives content recommendations; users can change it anytime.';
comment on column public.profiles.tier_chosen_at is
  'When the user last picked / changed their tier.';

-- 2. user_progress — per-guide progress keyed on (user_id, guide_slug) ─────
do $$
begin
  if not exists (select 1 from pg_type where typname = 'progress_status') then
    create type public.progress_status as enum (
      'not-started',
      'attempted',
      'familiar',
      'proficient',
      'mastered'
    );
  end if;
end$$;

create table if not exists public.user_progress (
  user_id       uuid        not null references auth.users(id) on delete cascade,
  guide_slug    text        not null,
  status        public.progress_status not null default 'attempted',
  completed_at  timestamptz,
  last_seen_at  timestamptz not null default now(),
  notes         text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  primary key (user_id, guide_slug)
);

create index if not exists user_progress_user_idx
  on public.user_progress (user_id, last_seen_at desc);

create index if not exists user_progress_status_idx
  on public.user_progress (user_id, status);

comment on table public.user_progress is
  'Per-guide learning status for each signed-in user. Powers the /my-path skill tree and TekBot context.';

-- updated_at trigger ─────────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists user_progress_set_updated_at on public.user_progress;
create trigger user_progress_set_updated_at
  before update on public.user_progress
  for each row execute function public.set_updated_at();

-- 3. Row Level Security ─────────────────────────────────────────────────────
alter table public.user_progress enable row level security;

drop policy if exists "user_progress_owner_select" on public.user_progress;
create policy "user_progress_owner_select"
  on public.user_progress for select
  using (auth.uid() = user_id);

drop policy if exists "user_progress_owner_insert" on public.user_progress;
create policy "user_progress_owner_insert"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "user_progress_owner_update" on public.user_progress;
create policy "user_progress_owner_update"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "user_progress_owner_delete" on public.user_progress;
create policy "user_progress_owner_delete"
  on public.user_progress for delete
  using (auth.uid() = user_id);
