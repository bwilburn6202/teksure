/**
 * Agent Memory Service — Four-tier persistent memory for TekBrain.
 *
 * Inspired by agentmemory (github.com/rohitg00/agentmemory).
 *
 * Memory tiers:
 *   1. Working  — current session context (volatile, localStorage fallback)
 *   2. Episodic — past interaction summaries (what happened)
 *   3. Semantic — learned user facts (device, skill level, interests)
 *   4. Procedural — what worked (solutions, guides that helped)
 *
 * Storage: Supabase for authenticated users, localStorage for anonymous.
 */

import { supabase } from '@/integrations/supabase/client';

/* ── Types ─────────────────────────────────────────────────────── */

export type MemoryTier = 'working' | 'episodic' | 'semantic' | 'procedural';

export type MemoryCategory =
  | 'device'
  | 'skill_level'
  | 'topic_interest'
  | 'solution'
  | 'preference'
  | 'interaction'
  | 'guide_progress'
  | 'error_pattern'
  | 'conversation_summary';

export interface MemoryEntry {
  id: string;
  tier: MemoryTier;
  category: MemoryCategory;
  key: string;
  value: Record<string, unknown>;
  importance: number;           // 1–10
  accessCount: number;
  lastAccessed: string | null;
  forgetAfter: string | null;   // ISO timestamp for TTL
  supersededBy: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface MemoryRelation {
  sourceId: string;
  targetId: string;
  relation: 'supersedes' | 'extends' | 'derives' | 'contradicts' | 'related';
  confidence: number;
}

export interface ObservePayload {
  category: MemoryCategory;
  key: string;
  value: Record<string, unknown>;
  importance?: number;
  tier?: MemoryTier;
  forgetAfter?: string;
}

export interface SearchOptions {
  tiers?: MemoryTier[];
  categories?: MemoryCategory[];
  limit?: number;
  minImportance?: number;
}

/* ── Local storage fallback keys ───────────────────────────────── */

const LOCAL_KEY = 'teksure_agent_memory';

function loadLocal(): MemoryEntry[] {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocal(entries: MemoryEntry[]) {
  try {
    // Cap at 200 entries locally
    const trimmed = entries.slice(-200);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(trimmed));
  } catch {
    // Storage may be full
  }
}

function generateId(): string {
  return crypto.randomUUID?.() ?? `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/* ── Deduplication ─────────────────────────────────────────────── */

/**
 * Simple Jaccard similarity on stringified values.
 * Returns 0–1 where 1 = identical.
 */
function jaccard(a: string, b: string): number {
  const setA = new Set(a.toLowerCase().split(/\s+/));
  const setB = new Set(b.toLowerCase().split(/\s+/));
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return union.size === 0 ? 0 : intersection.size / union.size;
}

/* ── Privacy filtering ─────────────────────────────────────────── */

const PRIVACY_PATTERNS = [
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,  // emails
  /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,                           // phone numbers
  /\b(?:sk|pk|api[_-]?key)[_-]?\w{10,}\b/gi,                  // API keys
  /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,               // card numbers
];

function stripPrivate(text: string): string {
  let cleaned = text;
  for (const pattern of PRIVACY_PATTERNS) {
    cleaned = cleaned.replace(pattern, '[REDACTED]');
  }
  return cleaned;
}

function sanitizeValue(value: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(value)) {
    if (typeof v === 'string') {
      sanitized[k] = stripPrivate(v);
    } else {
      sanitized[k] = v;
    }
  }
  return sanitized;
}

/* ── Core service ──────────────────────────────────────────────── */

async function getUserId(): Promise<string | null> {
  const { data } = await supabase.auth.getUser();
  return data.user?.id ?? null;
}

/**
 * Observe — capture a new memory observation.
 * Deduplicates against recent entries (Jaccard > 0.85 = skip).
 */
export async function observe(payload: ObservePayload): Promise<MemoryEntry | null> {
  const sanitized = sanitizeValue(payload.value);
  const entry: MemoryEntry = {
    id: generateId(),
    tier: payload.tier ?? 'working',
    category: payload.category,
    key: payload.key,
    value: sanitized,
    importance: payload.importance ?? 5,
    accessCount: 0,
    lastAccessed: null,
    forgetAfter: payload.forgetAfter ?? null,
    supersededBy: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const userId = await getUserId();

  if (userId) {
    // Check for duplicates
    const { data: existing } = await supabase
      .from('agent_memory')
      .select('id, value, key')
      .eq('user_id', userId)
      .eq('key', payload.key)
      .eq('tier', entry.tier)
      .is('superseded_by', null)
      .order('created_at', { ascending: false })
      .limit(5);

    const valueStr = JSON.stringify(sanitized);
    const duplicate = existing?.find(e =>
      jaccard(JSON.stringify(e.value), valueStr) > 0.85
    );

    if (duplicate) {
      // Update access count instead of creating new entry
      await supabase
        .from('agent_memory')
        .update({
          access_count: (duplicate as Record<string, unknown>).access_count as number + 1 || 1,
          last_accessed: new Date().toISOString(),
        })
        .eq('id', duplicate.id);
      return null;
    }

    // Supersede older entries with same key if value differs significantly
    if (existing && existing.length > 0) {
      const oldEntry = existing[0];
      const similarity = jaccard(JSON.stringify(oldEntry.value), valueStr);
      if (similarity > 0.3 && similarity <= 0.85) {
        // Related but different — supersede the old one
        await supabase
          .from('agent_memory')
          .update({ superseded_by: entry.id })
          .eq('id', oldEntry.id);
      }
    }

    // Insert new memory
    const { error } = await supabase
      .from('agent_memory')
      .insert({
        id: entry.id,
        user_id: userId,
        tier: entry.tier,
        category: entry.category,
        key: entry.key,
        value: sanitized,
        importance: entry.importance,
        access_count: 0,
        forget_after: entry.forgetAfter,
      });

    if (error) {
      console.warn('[AgentMemory] Supabase insert failed, falling back to local', error.message);
      const local = loadLocal();
      local.push(entry);
      saveLocal(local);
    }
  } else {
    // Anonymous — localStorage only
    const local = loadLocal();
    const valueStr = JSON.stringify(sanitized);
    const dupeIdx = local.findIndex(
      e => e.key === payload.key && e.tier === entry.tier && jaccard(JSON.stringify(e.value), valueStr) > 0.85
    );
    if (dupeIdx >= 0) {
      local[dupeIdx].accessCount += 1;
      local[dupeIdx].lastAccessed = new Date().toISOString();
      saveLocal(local);
      return null;
    }
    local.push(entry);
    saveLocal(local);
  }

  return entry;
}

/**
 * Remember — save an explicit long-term memory (semantic or procedural tier).
 */
export async function remember(
  category: MemoryCategory,
  key: string,
  value: Record<string, unknown>,
  importance = 7
): Promise<MemoryEntry | null> {
  return observe({
    category,
    key,
    value: sanitizeValue(value),
    importance,
    tier: 'semantic',
  });
}

/**
 * Recall — search memories by tier, category, and keyword matching.
 * Returns results scored by importance and recency.
 */
export async function recall(
  query: string,
  options: SearchOptions = {}
): Promise<MemoryEntry[]> {
  const { tiers, categories, limit = 10, minImportance = 1 } = options;
  const userId = await getUserId();

  if (userId) {
    let q = supabase
      .from('agent_memory')
      .select('*')
      .eq('user_id', userId)
      .is('superseded_by', null)
      .gte('importance', minImportance)
      .order('importance', { ascending: false })
      .order('updated_at', { ascending: false })
      .limit(limit * 3); // over-fetch for client-side keyword filtering

    if (tiers && tiers.length > 0) {
      q = q.in('tier', tiers);
    }
    if (categories && categories.length > 0) {
      q = q.in('category', categories);
    }

    const { data, error } = await q;

    if (error || !data) {
      console.warn('[AgentMemory] Recall from Supabase failed, using local', error?.message);
      return recallLocal(query, options);
    }

    // Client-side keyword filtering (BM25-lite)
    const queryWords = query.toLowerCase().split(/\W+/).filter(w => w.length > 2);
    const scored = data.map(row => {
      const haystack = `${row.key} ${JSON.stringify(row.value)} ${row.category}`.toLowerCase();
      const keywordScore = queryWords.reduce((acc, w) => acc + (haystack.includes(w) ? 1 : 0), 0);
      const importanceScore = (row.importance ?? 5) / 10;
      const recencyScore = row.updated_at
        ? Math.max(0, 1 - (Date.now() - new Date(row.updated_at).getTime()) / (30 * 86400000)) // decay over 30 days
        : 0;
      return {
        entry: mapRowToEntry(row),
        score: keywordScore * 2 + importanceScore + recencyScore,
      };
    });

    // Update access counts for returned results
    const topResults = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    if (topResults.length > 0) {
      const ids = topResults.map(r => r.entry.id);
      supabase
        .from('agent_memory')
        .update({ access_count: supabase.rpc ? undefined : 1, last_accessed: new Date().toISOString() })
        .in('id', ids)
        .then(() => {}); // fire-and-forget
    }

    return topResults.map(r => r.entry);
  }

  return recallLocal(query, options);
}

function recallLocal(query: string, options: SearchOptions = {}): MemoryEntry[] {
  const { tiers, categories, limit = 10, minImportance = 1 } = options;
  let entries = loadLocal().filter(e => !e.supersededBy && e.importance >= minImportance);

  if (tiers && tiers.length > 0) entries = entries.filter(e => tiers.includes(e.tier));
  if (categories && categories.length > 0) entries = entries.filter(e => categories.includes(e.category));

  // Expire entries past their TTL
  const now = Date.now();
  entries = entries.filter(e => !e.forgetAfter || new Date(e.forgetAfter).getTime() > now);

  const queryWords = query.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const scored = entries.map(e => {
    const haystack = `${e.key} ${JSON.stringify(e.value)} ${e.category}`.toLowerCase();
    const keywordScore = queryWords.reduce((acc, w) => acc + (haystack.includes(w) ? 1 : 0), 0);
    return { entry: e, score: keywordScore * 2 + e.importance / 10 };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map(s => s.entry);
}

/**
 * Get all memories for a user, grouped by tier.
 */
export async function getProfile(): Promise<Record<MemoryTier, MemoryEntry[]>> {
  const result: Record<MemoryTier, MemoryEntry[]> = {
    working: [],
    episodic: [],
    semantic: [],
    procedural: [],
  };

  const userId = await getUserId();

  if (userId) {
    const { data } = await supabase
      .from('agent_memory')
      .select('*')
      .eq('user_id', userId)
      .is('superseded_by', null)
      .order('importance', { ascending: false })
      .order('updated_at', { ascending: false })
      .limit(200);

    if (data) {
      for (const row of data) {
        const entry = mapRowToEntry(row);
        if (result[entry.tier]) result[entry.tier].push(entry);
      }
    }
  } else {
    const entries = loadLocal().filter(e => !e.supersededBy);
    for (const e of entries) {
      if (result[e.tier]) result[e.tier].push(e);
    }
  }

  return result;
}

/**
 * Forget — remove a specific memory by ID.
 */
export async function forget(memoryId: string): Promise<boolean> {
  const userId = await getUserId();

  if (userId) {
    const { error } = await supabase
      .from('agent_memory')
      .delete()
      .eq('id', memoryId)
      .eq('user_id', userId);
    return !error;
  } else {
    const local = loadLocal().filter(e => e.id !== memoryId);
    saveLocal(local);
    return true;
  }
}

/**
 * Forget all — clear all memories for the current user.
 */
export async function forgetAll(): Promise<boolean> {
  const userId = await getUserId();

  if (userId) {
    const { error } = await supabase
      .from('agent_memory')
      .delete()
      .eq('user_id', userId);
    return !error;
  } else {
    localStorage.removeItem(LOCAL_KEY);
    return true;
  }
}

/**
 * Consolidate — promote working-tier memories to episodic.
 * Groups similar working memories and creates a summary entry.
 */
export async function consolidate(): Promise<number> {
  const userId = await getUserId();
  if (!userId) return 0;

  const { data: workingMemories } = await supabase
    .from('agent_memory')
    .select('*')
    .eq('user_id', userId)
    .eq('tier', 'working')
    .is('superseded_by', null)
    .order('created_at', { ascending: true });

  if (!workingMemories || workingMemories.length < 3) return 0;

  // Group by category
  const groups = new Map<string, typeof workingMemories>();
  for (const m of workingMemories) {
    const cat = m.category as string;
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat)!.push(m);
  }

  let consolidated = 0;

  for (const [category, memories] of groups) {
    if (memories.length < 2) continue;

    // Create episodic summary
    const keys = [...new Set(memories.map(m => m.key))];
    const summaryValue = {
      source_count: memories.length,
      keys,
      consolidated_from: memories.map(m => m.id),
      summary: `${memories.length} ${category} observations consolidated`,
    };

    const summaryId = generateId();
    await supabase.from('agent_memory').insert({
      id: summaryId,
      user_id: userId,
      tier: 'episodic',
      category,
      key: `${category}_summary`,
      value: summaryValue,
      importance: Math.max(...memories.map(m => m.importance ?? 5)),
      access_count: 0,
    });

    // Mark working memories as superseded
    const ids = memories.map(m => m.id);
    await supabase
      .from('agent_memory')
      .update({ superseded_by: summaryId })
      .in('id', ids);

    // Log consolidation
    await supabase.from('agent_memory_consolidations').insert({
      user_id: userId,
      source_ids: ids,
      target_id: summaryId,
      from_tier: 'working',
      to_tier: 'episodic',
      summary: `Consolidated ${memories.length} ${category} memories`,
    });

    consolidated += memories.length;
  }

  return consolidated;
}

/**
 * Auto-forget — remove expired and low-value memories.
 */
export async function autoForget(): Promise<number> {
  const userId = await getUserId();
  if (!userId) {
    // Local: remove expired entries
    const now = Date.now();
    const local = loadLocal();
    const before = local.length;
    const filtered = local.filter(e => !e.forgetAfter || new Date(e.forgetAfter).getTime() > now);
    saveLocal(filtered);
    return before - filtered.length;
  }

  // Remove expired memories (past their TTL)
  const { data: expired } = await supabase
    .from('agent_memory')
    .select('id')
    .eq('user_id', userId)
    .lt('forget_after', new Date().toISOString())
    .not('forget_after', 'is', null);

  let removed = 0;
  if (expired && expired.length > 0) {
    await supabase
      .from('agent_memory')
      .delete()
      .in('id', expired.map(e => e.id));
    removed += expired.length;
  }

  // Remove low-importance working memories older than 7 days
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
  const { data: stale } = await supabase
    .from('agent_memory')
    .select('id')
    .eq('user_id', userId)
    .eq('tier', 'working')
    .lt('importance', 3)
    .lt('created_at', weekAgo);

  if (stale && stale.length > 0) {
    await supabase
      .from('agent_memory')
      .delete()
      .in('id', stale.map(e => e.id));
    removed += stale.length;
  }

  return removed;
}

/**
 * Get memory stats for the current user.
 */
export async function getStats(): Promise<{
  total: number;
  byTier: Record<MemoryTier, number>;
  oldestMemory: string | null;
  newestMemory: string | null;
}> {
  const profile = await getProfile();
  const all = Object.values(profile).flat();
  return {
    total: all.length,
    byTier: {
      working: profile.working.length,
      episodic: profile.episodic.length,
      semantic: profile.semantic.length,
      procedural: profile.procedural.length,
    },
    oldestMemory: all.length > 0
      ? all.reduce((oldest, e) => e.createdAt < oldest.createdAt ? e : oldest).createdAt
      : null,
    newestMemory: all.length > 0
      ? all.reduce((newest, e) => e.createdAt > newest.createdAt ? e : newest).createdAt
      : null,
  };
}

/* ── Row mapping helper ────────────────────────────────────────── */

function mapRowToEntry(row: Record<string, unknown>): MemoryEntry {
  return {
    id: row.id as string,
    tier: row.tier as MemoryTier,
    category: row.category as MemoryCategory,
    key: row.key as string,
    value: row.value as Record<string, unknown>,
    importance: (row.importance as number) ?? 5,
    accessCount: (row.access_count as number) ?? 0,
    lastAccessed: row.last_accessed as string | null,
    forgetAfter: row.forget_after as string | null,
    supersededBy: row.superseded_by as string | null,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}
