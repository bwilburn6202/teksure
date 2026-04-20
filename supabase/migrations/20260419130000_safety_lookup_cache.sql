-- ─────────────────────────────────────────────────────────────────────────────
-- safety_lookup_cache
--
-- 24-hour lookup cache for the `safety-lookup` edge function so repeated
-- URL / phone / email checks don't re-hit Google Safe Browsing, PhishTank,
-- or HIBP. Keyed on `kind:lowercased-value` so the same URL queried twice
-- hits the same row.
--
-- Writes happen from the edge function using the service role; reads are
-- also service-role. No end-user access is granted.
-- ─────────────────────────────────────────────────────────────────────────────

create table if not exists public.safety_lookup_cache (
  cache_key   text primary key,
  kind        text not null check (kind in ('url', 'phone', 'email')),
  value       text not null,
  result      jsonb not null,
  checked_at  timestamptz not null default now()
);

create index if not exists safety_lookup_cache_checked_at_idx
  on public.safety_lookup_cache (checked_at desc);

comment on table public.safety_lookup_cache is
  'Result cache for the safety-lookup edge function. TTL enforced in application code (24h).';

-- Only service-role reads/writes. RLS denies everything else.
alter table public.safety_lookup_cache enable row level security;

-- Scheduled cleanup helper (call from a cron / scheduled task):
--   select public.purge_safety_lookup_cache(48);
create or replace function public.purge_safety_lookup_cache(hours integer default 48)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  deleted_count integer;
begin
  delete from public.safety_lookup_cache
    where checked_at < now() - make_interval(hours => hours);
  get diagnostics deleted_count = row_count;
  return deleted_count;
end;
$$;
