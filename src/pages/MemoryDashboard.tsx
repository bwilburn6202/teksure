import { useState } from 'react';
import { Brain, Trash2, RefreshCw, Shield, Eye, Zap, BookOpen, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { useAgentMemory } from '@/hooks/useAgentMemory';
import type { MemoryEntry, MemoryTier } from '@/services/agentMemory';

const TIER_CONFIG: Record<MemoryTier, { label: string; description: string; icon: React.ReactNode; color: string }> = {
  working: {
    label: 'Working Memory',
    description: 'Short-term observations from your current and recent sessions.',
    icon: <Zap className="h-5 w-5" />,
    color: 'text-amber-500',
  },
  episodic: {
    label: 'Episodic Memory',
    description: 'Summaries of your past interactions and conversations.',
    icon: <Eye className="h-5 w-5" />,
    color: 'text-blue-500',
  },
  semantic: {
    label: 'Semantic Memory',
    description: 'Facts TekBrain has learned about you, like your device and skill level.',
    icon: <Brain className="h-5 w-5" />,
    color: 'text-purple-500',
  },
  procedural: {
    label: 'Procedural Memory',
    description: 'Solutions and fixes that worked for you in the past.',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'text-teksure-success',
  },
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

function MemoryCard({ entry, onDelete }: { entry: MemoryEntry; onDelete: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const valueStr = Object.entries(entry.value)
    .filter(([k]) => k !== 'consolidated_from')
    .map(([k, v]) => `${k.replace(/_/g, ' ')}: ${v}`)
    .join(', ');

  return (
    <div className="rounded-xl border border-border bg-card p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground" style={{ fontSize: 15 }}>
            {entry.key.replace(/_/g, ' ')}
          </p>
          <p className="text-muted-foreground mt-0.5 line-clamp-2" style={{ fontSize: 13 }}>
            {valueStr}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span>Importance: {entry.importance}/10</span>
            <span>Used {entry.accessCount} time{entry.accessCount !== 1 ? 's' : ''}</span>
            <span>{formatDate(entry.createdAt)}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setExpanded(v => !v)}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            style={{ minHeight: 40, minWidth: 40 }}
            aria-label={expanded ? 'Collapse details' : 'Expand details'}
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(entry.id)}
            className="rounded-lg p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            style={{ minHeight: 40, minWidth: 40 }}
            aria-label="Delete this memory"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      {expanded && (
        <pre className="mt-3 p-3 rounded-lg bg-muted text-xs text-muted-foreground overflow-x-auto">
          {JSON.stringify(entry.value, null, 2)}
        </pre>
      )}
    </div>
  );
}

function TierSection({
  tier,
  entries,
  onDelete,
}: {
  tier: MemoryTier;
  entries: MemoryEntry[];
  onDelete: (id: string) => void;
}) {
  const config = TIER_CONFIG[tier];
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <span className={config.color}>{config.icon}</span>
        <div>
          <h2 className="font-bold text-lg text-foreground">{config.label}</h2>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </div>
        <span className="ml-auto rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          {entries.length}
        </span>
      </div>
      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground italic pl-7">No memories yet in this tier.</p>
      ) : (
        <div className="space-y-2 pl-7">
          {entries.map(e => (
            <MemoryCard key={e.id} entry={e} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function MemoryDashboard() {
  const { profile, stats, loading, forget, forgetAll, refresh } = useAgentMemory();
  const [clearing, setClearing] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const handleDelete = async (id: string) => {
    await forget(id);
  };

  const handleClearAll = async () => {
    if (!confirmClear) {
      setConfirmClear(true);
      return;
    }
    setClearing(true);
    await forgetAll();
    setClearing(false);
    setConfirmClear(false);
  };

  return (
    <>
      <SEOHead
        title="TekBrain Memory — TekSure"
        description="View and manage what TekBrain remembers about you. Your privacy is in your hands."
      />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <div className="border-b border-border bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-purple-700 dark:text-purple-300 mb-4">
              <Brain className="h-4 w-4" />
              Agent Memory
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              What TekBrain Remembers
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
              TekBrain learns from your conversations to give you better, more personalized help.
              Everything is stored privately and you can delete anything at any time.
            </p>

            {/* Stats bar */}
            {stats && (
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {(Object.keys(TIER_CONFIG) as MemoryTier[]).map(tier => (
                  <div
                    key={tier}
                    className="flex items-center gap-1.5 rounded-lg bg-card border border-border px-3 py-2 text-sm"
                  >
                    <span className={TIER_CONFIG[tier].color}>
                      {TIER_CONFIG[tier].icon}
                    </span>
                    <span className="font-semibold">{stats.byTier[tier]}</span>
                    <span className="text-muted-foreground">{TIER_CONFIG[tier].label.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
          {/* Actions bar */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={refresh}
              disabled={loading}
              className="gap-2"
              style={{ minHeight: 44 }}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            {confirmClear ? (
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-destructive flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4" /> Are you sure? This cannot be undone.
                </span>
                <Button
                  variant="destructive"
                  onClick={handleClearAll}
                  disabled={clearing}
                  style={{ minHeight: 44 }}
                >
                  {clearing ? 'Clearing...' : 'Yes, delete all'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setConfirmClear(false)}
                  style={{ minHeight: 44 }}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={handleClearAll}
                className="gap-2 ml-auto text-destructive hover:text-destructive"
                style={{ minHeight: 44 }}
                disabled={!stats || stats.total === 0}
              >
                <Trash2 className="h-4 w-4" />
                Clear All Memories
              </Button>
            )}
          </div>

          {/* Privacy notice */}
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <Shield className="h-5 w-5 text-teksure-success shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground" style={{ fontSize: 15 }}>Your privacy matters</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Memories are stored privately and never shared. Personal information like email addresses
                and phone numbers are automatically removed before saving. You are always in control
                of what TekBrain remembers.
              </p>
            </div>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="text-center py-12">
              <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground mx-auto" />
              <p className="text-muted-foreground mt-3">Loading your memories...</p>
            </div>
          )}

          {/* Memory tiers */}
          {!loading && profile && (
            <div className="space-y-8">
              {(Object.keys(TIER_CONFIG) as MemoryTier[]).map(tier => (
                <TierSection
                  key={tier}
                  tier={tier}
                  entries={profile[tier]}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && stats && stats.total === 0 && (
            <div className="text-center py-12">
              <Brain className="h-12 w-12 text-muted-foreground/40 mx-auto" />
              <h2 className="text-xl font-semibold text-foreground mt-4">No memories yet</h2>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                Start chatting with TekBrain and it will learn your preferences, device,
                and what topics you need help with. This makes future conversations faster and more helpful.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
