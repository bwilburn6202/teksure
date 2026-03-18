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

const statusConfig: Record<RoadmapStatus, {
  label: string;
  icon: typeof Rocket;
  badgeClass: string;
  dotClass: string;
}> = {
  live: {
    label: 'Live',
    icon: CheckCircle2,
    badgeClass: 'bg-[hsl(var(--teksure-success)/0.15)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-success))]',
  },
  'in-progress': {
    label: 'In Progress',
    icon: Rocket,
    badgeClass: 'bg-[hsl(var(--teksure-warning)/0.15)] text-[hsl(var(--teksure-warning))] border-[hsl(var(--teksure-warning)/0.3)]',
    dotClass: 'bg-[hsl(var(--teksure-warning))]',
  },
  planned: {
    label: 'Planned',
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
                className="pl-10 text-base h-12"
              />
            </div>

            {/* Status tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveStatus('all')}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeStatus === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                style={{ minHeight: '44px' }}
              >
                All ({counts.all})
              </button>
              {statuses.map(status => {
                const cfg = statusConfig[status];
                return (
                  <button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                      activeStatus === status
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                    style={{ minHeight: '44px' }}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${activeStatus === status ? 'bg-primary-foreground' : cfg.dotClass}`} />
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

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => {
              const cfg = statusConfig[item.status];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: Math.min(i * 0.015, 0.4) }}
                >
                  <Card className="border-border hover:shadow-md transition-shadow h-full">
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
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No features match your search. Try a different term.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
