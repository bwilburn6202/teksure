import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Clock, CheckCircle2, Compass, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { roadmapItems, RoadmapStatus } from '@/data/roadmapData';
import { Separator } from '@/components/ui/separator';

const statusConfig: Record<RoadmapStatus, {
  label: string;
  icon: typeof Rocket;
  badgeClass: string;
  dotClass: string;
  buttonIdle: string;
  buttonActive: string;
}> = {
  live: {
    label: 'Live',
    icon: CheckCircle2,
    badgeClass: 'bg-[hsl(var(--teksure-success)/0.15)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-success))]',
    buttonIdle: 'bg-[hsl(var(--teksure-success)/0.1)] text-[hsl(var(--teksure-success))] border border-[hsl(var(--teksure-success)/0.3)] hover:bg-[hsl(var(--teksure-success)/0.2)]',
    buttonActive: 'bg-[hsl(var(--teksure-success))] text-white border border-[hsl(var(--teksure-success))] shadow-md',
  },
  'in-progress': {
    label: 'In Progress',
    icon: Rocket,
    badgeClass: 'bg-[hsl(var(--teksure-warning)/0.15)] text-[hsl(var(--teksure-warning))] border-[hsl(var(--teksure-warning)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-warning))]',
    buttonIdle: 'bg-[hsl(var(--teksure-warning)/0.1)] text-[hsl(var(--teksure-warning))] border border-[hsl(var(--teksure-warning)/0.3)] hover:bg-[hsl(var(--teksure-warning)/0.2)]',
    buttonActive: 'bg-[hsl(var(--teksure-warning))] text-white border border-[hsl(var(--teksure-warning))] shadow-md',
  },
  planned: {
    label: 'Planned',
    icon: Clock,
    badgeClass: 'bg-[hsl(var(--teksure-info)/0.15)] text-[hsl(var(--teksure-info))] border-[hsl(var(--teksure-info)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-info))]',
    buttonIdle: 'bg-[hsl(var(--teksure-info)/0.1)] text-[hsl(var(--teksure-info))] border border-[hsl(var(--teksure-info)/0.3)] hover:bg-[hsl(var(--teksure-info)/0.2)]',
    buttonActive: 'bg-[hsl(var(--teksure-info))] text-white border border-[hsl(var(--teksure-info))] shadow-md',
  },
  exploring: {
    label: 'Exploring',
    icon: Compass,
    badgeClass: 'bg-muted text-muted-foreground border-border',
    dotClass: 'bg-muted-foreground',
    buttonIdle: 'bg-muted/60 text-muted-foreground border border-border hover:bg-muted',
    buttonActive: 'bg-muted-foreground text-background border border-muted-foreground shadow-md',
  },
};

const statuses: RoadmapStatus[] = ['live', 'in-progress', 'planned', 'exploring'];

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

  // Group filtered items by status for "all" view with separators
  const groupedByStatus = useMemo(() => {
    if (activeStatus !== 'all') return null;
    const groups: { status: RoadmapStatus; items: typeof filtered }[] = [];
    for (const s of statuses) {
      const items = filtered.filter(i => i.status === s);
      if (items.length > 0) groups.push({ status: s, items });
    }
    return groups;
  }, [filtered, activeStatus]);

  const renderCard = (item: typeof filtered[0], i: number) => {
    const cfg = statusConfig[item.status];
    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: Math.min(i * 0.015, 0.4) }}
      >
        <Card className="border border-border/80 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-200 h-full bg-card">
          <CardContent className="p-5 flex flex-col h-full">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground text-base leading-snug">{item.title}</h3>
              <Badge variant="outline" className={`shrink-0 text-xs border ${cfg.badgeClass}`}>
                {cfg.label}
              </Badge>
            </div>
            <p className="text-muted-foreground text-base flex-1 mb-3">{item.description}</p>
            <Badge variant="outline" className="self-start text-xs">
              {item.category}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      <SEOHead
        title="TekSure Roadmap – See What We're Building Next"
        description="Explore 100 feature ideas we're building to help you master technology. See live, in-progress, planned, and exploring features on our public roadmap."
        path="/roadmap"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50">
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">Roadmap</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">TekSure Roadmap</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                See what we're building next to help you master technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cards section with off-white background */}
        <div className="bg-muted/40">
          <div className="container mx-auto px-4 max-w-6xl py-8 md:py-12">
            {/* Filter bar */}
            <div className="flex flex-col gap-4 mb-8">
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search features…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-10 text-base h-12 bg-background"
                />
              </div>

              {/* Status tabs with colored backgrounds */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveStatus('all')}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-all ${
                    activeStatus === 'all'
                      ? 'bg-primary text-primary-foreground border border-primary shadow-md font-bold'
                      : 'bg-background text-foreground border border-border hover:bg-muted'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  All ({counts.all})
                </button>
                {statuses.map(status => {
                  const cfg = statusConfig[status];
                  const isActive = activeStatus === status;
                  return (
                    <button
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-base transition-all ${
                        isActive ? `${cfg.buttonActive} font-bold` : cfg.buttonIdle
                      }`}
                      style={{ minHeight: '44px' }}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : cfg.dotClass}`} />
                      {cfg.label} ({counts[status]})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results count */}
            <p className="text-muted-foreground mb-4 text-base">
              Showing {filtered.length} feature{filtered.length !== 1 ? 's' : ''}
            </p>

            {/* Card grid — grouped with separators when showing "all" */}
            {groupedByStatus ? (
              <div className="space-y-8">
                {groupedByStatus.map((group, gi) => {
                  const cfg = statusConfig[group.status];
                  const Icon = cfg.icon;
                  return (
                    <div key={group.status}>
                      {gi > 0 && <Separator className="mb-6" />}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`w-3 h-3 rounded-full ${cfg.dotClass}`} />
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <h2 className="text-lg font-bold text-foreground">{cfg.label}</h2>
                        <span className="text-sm text-muted-foreground">({group.items.length})</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.items.map((item, i) => renderCard(item, gi * 20 + i))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((item, i) => renderCard(item, i))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No features match your search. Try a different term.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
