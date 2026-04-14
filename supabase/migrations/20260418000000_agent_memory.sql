-- Agent Memory: Four-tier persistent memory for TekBot
-- Inspired by agentmemory (github.com/rohitg00/agentmemory)

-- ── Memory tiers enum ────────────────────────────────────────────────────────
create type memory_tier as enum ('working', 'episodic', 'semantic', 'procedural');

-- ── Core memory table ────────────────────────────────────────────────────────
create table if not exists agent_memory (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users(id) on delete cascade not null,
  tier          memory_tier not null default 'working',
  category      text not null,           -- e.g. 'device', 'skill_level', 'topic', 'solution', 'preference'
  key           text not null,           -- lookup key, e.g. 'primary_device', 'wifi_fix_worked'
  value         jsonb not null,          -- flexible payload
  importance    smallint not null default 5 check (importance between 1 and 10),
  access_count  integer not null default 0,
  last_accessed timestamptz,
  forget_after  timestamptz,             -- optional TTL for auto-expiry
  superseded_by uuid references agent_memory(id) on delete set null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Composite index for fast per-user lookups by tier + category
create index idx_agent_memory_user_tier on agent_memory(user_id, tier, category);
create index idx_agent_memory_user_key  on agent_memory(user_id, key);

-- ── Memory relationships ─────────────────────────────────────────────────────
create type memory_relation_type as enum (
  'supersedes', 'extends', 'derives', 'contradicts', 'related'
);

create table if not exists agent_memory_relations (
  id          uuid primary key default gen_random_uuid(),
  source_id   uuid references agent_memory(id) on delete cascade not null,
  target_id   uuid references agent_memory(id) on delete cascade not null,
  relation    memory_relation_type not null,
  confidence  real not null default 0.8 check (confidence between 0 and 1),
  created_at  timestamptz not null default now(),
  unique(source_id, target_id, relation)
);

-- ── Memory consolidation log ─────────────────────────────────────────────────
-- Tracks when working memories get consolidated into higher tiers
create table if not exists agent_memory_consolidations (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid references auth.users(id) on delete cascade not null,
  source_ids     uuid[] not null,       -- working-tier memory IDs that were consolidated
  target_id      uuid references agent_memory(id) on delete set null,
  from_tier      memory_tier not null,
  to_tier        memory_tier not null,
  summary        text,                  -- human-readable summary of what was consolidated
  created_at     timestamptz not null default now()
);

-- ── RLS ──────────────────────────────────────────────────────────────────────
alter table agent_memory enable row level security;
alter table agent_memory_relations enable row level security;
alter table agent_memory_consolidations enable row level security;

-- Users can only access their own memories
create policy "Users manage own memories"
  on agent_memory for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Relations visible if user owns the source memory
create policy "Users view own memory relations"
  on agent_memory_relations for all
  using (
    exists (select 1 from agent_memory where id = source_id and user_id = auth.uid())
  )
  with check (
    exists (select 1 from agent_memory where id = source_id and user_id = auth.uid())
  );

create policy "Users view own consolidations"
  on agent_memory_consolidations for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ── Auto-update updated_at ───────────────────────────────────────────────────
create or replace function update_agent_memory_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_agent_memory_updated_at
  before update on agent_memory
  for each row execute function update_agent_memory_updated_at();
