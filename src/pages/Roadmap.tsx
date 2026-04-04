import { useState, useMemo } from 'react';
import { Search, Rocket, Clock, CheckCircle2, Compass, Lightbulb, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { roadmapItems, RoadmapStatus } from '@/data/roadmapData';
import { Separator } from '@/components/ui/separator';

const statusConfig: Record<RoadmapStatus, {
  label: string;
  icon: typeof Rocket;
  badgeClass: string;
  dotClass: string;
}> = {
  live: {
    label: 'Live Now',
    icon: CheckCircle2,
    badgeClass: 'bg-[hsl(var(--teksure-success)/0.15)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-success))]',
  },
  'in-progress': {
    label: 'Building Now',
    icon: Rocket,
    badgeClass: 'bg-[hsl(var(--teksure-warning)/0.15)] text-[hsl(var(--teksure-warning))] border-[hsl(var(--teksure-warning)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-warning))]',
  },
  planned: {
    label: 'Coming Soon',
    icon: Clock,
    badgeClass: 'bg-[hsl(var(--teksure-info)/0.15)] text-[hsl(var(--teksure-info))] border-[hsl(var(--teksure-info)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-info))]',
  },
  exploring: {
    label: 'Exploring',
    icon: Compass,
    badgeClass: 'bg-muted text-muted-foreground border-border',
    dotClass: 'bg-muted-foreground',
  },
};

const statuses: RoadmapStatus[] = ['live', 'in-progress', 'planned', 'exploring'];

const visionPoints = [
  {
    icon: Lightbulb,
    title: 'Understand, Not Just Follow',
    description: 'We teach you why things work — not just which buttons to press. When you understand the idea behind a step, you can figure things out on your own next time.',
  },
  {
    icon: Sparkles,
    title: 'AI That Teaches You',
    description: 'Our AI does not do your thinking for you. It walks beside you, explains things in your words, and helps you build real confidence with technology.',
  },
  {
    icon: Rocket,
    title: 'Your Knowledge Grows Over Time',
    description: 'Every guide you read, every question you ask, and every tool you try adds to your personal learning path. TekSure gets more helpful the more you use it.',
  },
];

export default function Roadmap() {
  const [search, setSearch] = useState('');
  const [activeStatus, setActiveStatus] = useState<'all' | RoadmapStatus>('all');

  const filtered = useMemo(() => {
    return roadmapItems.filter(item => {
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = activeStatus === 'all' || item.status === activeStatus;
      return matchesSearch && matchesStatus;
    });
  }, [search, activeStatus]);

  const counts = useMemo(() => {
    const base = roadmapItems.filter(item =>
      !search ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
    return {
      all: base.length,
      live: base.filter(i => i.status === 'live').length,
      'in-progress': base.filter(i => i.status === 'in-progress').length,
      planned: base.filter(i => i.status === 'planned').length,
      exploring: base.filter(i => i.status === 'exploring').length,
    };
  }, [search]);

  const groupedByStatus = useMemo(() => {
    if (activeStatus !== 'all') return null;
    const groups: { status: RoadmapStatus; items: typeof filtered }[] = [];
    for (const s of statuses) {
      const items = filtered.filter(i => i.status === s);
      if (items.length > 0) groups.push({ status: s, items });
    }
    return groups;
  }, [filtered, activeStatus]);

  const renderCard = (item: typeof filtered[0]) => {
    const cfg = statusConfig[item.status];
    return (
      <div key={item.title}>
        <Card className="rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-200 h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-semibold text-foreground text-base leading-snug flex-1">{item.title}</h3>
              <Badge className={`shrink-0 text-xs border ${cfg.badgeClass}`}>
                {cfg.label}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">{item.description}</p>
            <Badge variant="outline" className="self-start text-xs font-medium">
              {item.category}
            </Badge>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <>
      <SEOHead
        title="What We're Building — TekSure Roadmap"
        description="See everything TekSure offers today and what we're building next. Free tools, guides, and AI-powered help to make technology accessible for everyone."
        path="/roadmap"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              What We're Building
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10">
              Everything on TekSure is free. Our mission is to make technology
              understandable for everyone — especially people who did not grow up with it.
            </p>

            {/* Vision cards */}
            <div className="grid gap-5 sm:grid-cols-3">
              {visionPoints.map(point => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <Icon className="h-6 w-6 text-primary mb-3" aria-hidden="true" />
                    <h2 className="font-semibold text-base mb-2">{point.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Search and filters */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search features…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-10 h-11 bg-background rounded-xl border border-border"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveStatus('all')}
                  data-state={activeStatus === 'all' ? 'active' : 'inactive'}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    activeStatus === 'all'
                      ? 'bg-foreground text-background'
                      : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                  }`}
                >
                  All ({counts.all})
                </button>
                {statuses.map(status => {
                  const isActive = activeStatus === status;
                  return (
                    <button
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      data-state={isActive ? 'active' : 'inactive'}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-foreground text-background'
                          : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                      }`}
                    >
                      {statusConfig[status].label} ({counts[status]})
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-8">
              Showing {filtered.length} feature{filtered.length !== 1 ? 's' : ''}
            </p>

            {/* Grid */}
            {groupedByStatus ? (
              <div className="space-y-12">
                {groupedByStatus.map((group, gi) => {
                  const cfg = statusConfig[group.status];
                  const Icon = cfg.icon;
                  return (
                    <div key={group.status}>
                      {gi > 0 && <Separator className="mb-12" />}
                      <div className="flex items-center gap-3 mb-6">
                        <span className={`w-2.5 h-2.5 rounded-full ${cfg.dotClass}`} />
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <h2 className="text-lg font-semibold text-foreground">{cfg.label}</h2>
                        <span className="text-sm text-muted-foreground">({group.items.length})</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {group.items.map(item => renderCard(item))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map(item => renderCard(item))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No features match your search. Try a different term.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
