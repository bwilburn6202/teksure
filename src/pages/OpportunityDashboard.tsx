import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from 'recharts';
import { TrendingUp, DollarSign, Percent, Clock } from 'lucide-react';

type Category = 'all' | 'ecommerce' | 'saas' | 'content' | 'services';

interface BusinessModel {
  id: number;
  name: string;
  category: Exclude<Category, 'all'>;
  startupCost: number;
  monthlyRevenue: number;
  grossMargin: number;
  netMargin: number;
  breakEvenMonths: number;
  difficulty: number;
  scalability: number;
}

const CATEGORY_COLORS: Record<Exclude<Category, 'all'>, string> = {
  ecommerce: '#3b82f6',
  saas: '#10b981',
  content: '#f59e0b',
  services: '#ef4444',
};

const CATEGORY_LABELS: Record<Exclude<Category, 'all'>, string> = {
  ecommerce: 'E-commerce/Retail',
  saas: 'SaaS/Software',
  content: 'Content/Creator',
  services: 'Services/Freelance',
};

const models: BusinessModel[] = [
  { id: 1, name: 'Dropshipping', category: 'ecommerce', startupCost: 500, monthlyRevenue: 8000, grossMargin: 30, netMargin: 20, breakEvenMonths: 8, difficulty: 5, scalability: 7 },
  { id: 2, name: 'Print on Demand', category: 'ecommerce', startupCost: 350, monthlyRevenue: 12000, grossMargin: 32, netMargin: 15, breakEvenMonths: 5, difficulty: 3, scalability: 5 },
  { id: 3, name: 'Amazon FBA', category: 'ecommerce', startupCost: 5000, monthlyRevenue: 50000, grossMargin: 40, netMargin: 18, breakEvenMonths: 12, difficulty: 6, scalability: 8 },
  { id: 4, name: 'Handmade Products', category: 'ecommerce', startupCost: 1000, monthlyRevenue: 6000, grossMargin: 55, netMargin: 35, breakEvenMonths: 6, difficulty: 4, scalability: 3 },
  { id: 5, name: 'Micro SaaS', category: 'saas', startupCost: 3000, monthlyRevenue: 20000, grossMargin: 80, netMargin: 60, breakEvenMonths: 10, difficulty: 8, scalability: 10 },
  { id: 6, name: 'SaaS Platform', category: 'saas', startupCost: 20000, monthlyRevenue: 80000, grossMargin: 78, netMargin: 28, breakEvenMonths: 15, difficulty: 7, scalability: 9 },
  { id: 7, name: 'WordPress Plugins', category: 'saas', startupCost: 1000, monthlyRevenue: 10000, grossMargin: 90, netMargin: 75, breakEvenMonths: 8, difficulty: 6, scalability: 8 },
  { id: 8, name: 'Mobile App', category: 'saas', startupCost: 8000, monthlyRevenue: 35000, grossMargin: 75, netMargin: 50, breakEvenMonths: 12, difficulty: 8, scalability: 9 },
  { id: 9, name: 'YouTube Channel', category: 'content', startupCost: 2500, monthlyRevenue: 25000, grossMargin: 80, netMargin: 65, breakEvenMonths: 18, difficulty: 6, scalability: 8 },
  { id: 10, name: 'Newsletter', category: 'content', startupCost: 500, monthlyRevenue: 15000, grossMargin: 88, netMargin: 72, breakEvenMonths: 10, difficulty: 4, scalability: 7 },
  { id: 11, name: 'Online Course', category: 'content', startupCost: 2000, monthlyRevenue: 30000, grossMargin: 88, netMargin: 70, breakEvenMonths: 4, difficulty: 5, scalability: 9 },
  { id: 12, name: 'Affiliate Blog', category: 'content', startupCost: 800, monthlyRevenue: 18000, grossMargin: 90, netMargin: 80, breakEvenMonths: 18, difficulty: 5, scalability: 7 },
  { id: 13, name: 'Digital Agency', category: 'services', startupCost: 5000, monthlyRevenue: 80000, grossMargin: 60, netMargin: 30, breakEvenMonths: 3, difficulty: 6, scalability: 6 },
  { id: 14, name: 'Consulting', category: 'services', startupCost: 1500, monthlyRevenue: 40000, grossMargin: 88, netMargin: 70, breakEvenMonths: 2, difficulty: 7, scalability: 4 },
  { id: 15, name: 'Web Dev Freelance', category: 'services', startupCost: 1000, monthlyRevenue: 25000, grossMargin: 82, netMargin: 65, breakEvenMonths: 1, difficulty: 5, scalability: 4 },
  { id: 16, name: 'Coaching', category: 'services', startupCost: 1500, monthlyRevenue: 30000, grossMargin: 90, netMargin: 75, breakEvenMonths: 2, difficulty: 5, scalability: 5 },
];

function logisticGrowth(maxRevenue: number, month: number, midpoint: number = 8): number {
  return maxRevenue / (1 + Math.exp(-0.5 * (month - midpoint)));
}

const fmt = (n: number) => n >= 1000 ? `$${(n / 1000).toFixed(0)}K` : `$${n}`;
const fmtFull = (n: number) => `$${n.toLocaleString()}`;

type SortKey = 'revenue' | 'startupCost' | 'netMargin' | 'breakEven';

export default function OpportunityDashboard() {
  const [category, setCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortKey>('revenue');

  const filtered = useMemo(() => {
    let list = category === 'all' ? [...models] : models.filter(m => m.category === category);
    const sorters: Record<SortKey, (a: BusinessModel, b: BusinessModel) => number> = {
      revenue: (a, b) => b.monthlyRevenue - a.monthlyRevenue,
      startupCost: (a, b) => a.startupCost - b.startupCost,
      netMargin: (a, b) => b.netMargin - a.netMargin,
      breakEven: (a, b) => a.breakEvenMonths - b.breakEvenMonths,
    };
    return list.sort(sorters[sortBy]);
  }, [category, sortBy]);

  const kpis = useMemo(() => {
    const best = (key: 'monthlyRevenue' | 'netMargin', dir: 'max') =>
      filtered.reduce((a, b) => b[key] > a[key] ? b : a, filtered[0]);
    const lowest = filtered.reduce((a, b) => a.startupCost < b.startupCost ? a : b, filtered[0]);
    const fastest = filtered.reduce((a, b) => a.breakEvenMonths < b.breakEvenMonths ? a : b, filtered[0]);
    return {
      highestRevenue: best('monthlyRevenue', 'max'),
      lowestCost: lowest,
      highestMargin: best('netMargin', 'max'),
      fastestBreakEven: fastest,
    };
  }, [filtered]);

  // Growth chart data — 24 months, one line per category
  const growthData = useMemo(() => {
    const cats = category === 'all'
      ? (['ecommerce', 'saas', 'content', 'services'] as const)
      : [category as Exclude<Category, 'all'>];
    return Array.from({ length: 24 }, (_, i) => {
      const month = i + 1;
      const point: Record<string, number | string> = { month: `M${month}` };
      cats.forEach(cat => {
        const catModels = models.filter(m => m.category === cat);
        const avg = catModels.reduce((s, m) => s + m.monthlyRevenue, 0) / catModels.length;
        point[cat] = Math.round(logisticGrowth(avg, month));
      });
      return point;
    });
  }, [category]);

  const revenueBarData = filtered.map(m => ({
    name: m.name,
    revenue: m.monthlyRevenue,
    color: CATEGORY_COLORS[m.category],
  }));

  const costBarData = filtered.map(m => ({
    name: m.name,
    cost: m.startupCost,
    color: CATEGORY_COLORS[m.category],
  }));

  const marginBreakEvenData = filtered.map(m => ({
    name: m.name,
    netMargin: m.netMargin,
    breakEven: m.breakEvenMonths,
    color: CATEGORY_COLORS[m.category],
  }));

  const activeCats = category === 'all'
    ? (['ecommerce', 'saas', 'content', 'services'] as const)
    : [category as Exclude<Category, 'all'>];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Business Opportunity Dashboard</h1>
            <p className="text-muted-foreground mt-1">Compare 16 business models across revenue, cost, margins & break-even</p>
          </div>
          <div className="flex gap-3">
            <Select value={category} onValueChange={(v) => setCategory(v as Category)}>
              <SelectTrigger className="w-[180px]"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="ecommerce">E-commerce/Retail</SelectItem>
                <SelectItem value="saas">SaaS/Software</SelectItem>
                <SelectItem value="content">Content/Creator</SelectItem>
                <SelectItem value="services">Services/Freelance</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortKey)}>
              <SelectTrigger className="w-[180px]"><SelectValue placeholder="Sort By" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="startupCost">Startup Cost</SelectItem>
                <SelectItem value="netMargin">Net Margin</SelectItem>
                <SelectItem value="breakEven">Break-even</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* KPI Cards */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard icon={<TrendingUp className="h-5 w-5" />} label="Highest Revenue" value={fmtFull(kpis.highestRevenue.monthlyRevenue) + '/mo'} sub={kpis.highestRevenue.name} color="text-secondary" />
            <KpiCard icon={<DollarSign className="h-5 w-5" />} label="Lowest Startup Cost" value={fmtFull(kpis.lowestCost.startupCost)} sub={kpis.lowestCost.name} color="text-[hsl(var(--teksure-info))]" />
            <KpiCard icon={<Percent className="h-5 w-5" />} label="Highest Net Margin" value={kpis.highestMargin.netMargin + '%'} sub={kpis.highestMargin.name} color="text-[hsl(var(--teksure-success))]" />
            <KpiCard icon={<Clock className="h-5 w-5" />} label="Fastest Break-even" value={kpis.fastestBreakEven.breakEvenMonths + ' mo'} sub={kpis.fastestBreakEven.name} color="text-[hsl(var(--teksure-warning))]" />
          </div>
        )}

        {/* Revenue Growth Trajectories */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Revenue Growth Trajectories (Logistic Model)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tickFormatter={fmt} stroke="hsl(var(--muted-foreground))" />
                <Tooltip formatter={(v: number) => fmtFull(v)} />
                <Legend />
                {activeCats.map(cat => (
                  <Line key={cat} type="monotone" dataKey={cat} name={CATEGORY_LABELS[cat]} stroke={CATEGORY_COLORS[cat]} strokeWidth={2} dot={false} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Monthly Revenue at Scale</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueBarData} layout="vertical" margin={{ left: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" tickFormatter={fmt} stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" width={95} />
                  <Tooltip formatter={(v: number) => fmtFull(v)} />
                  <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                    {revenueBarData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg">Startup Cost Required</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costBarData} layout="vertical" margin={{ left: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" tickFormatter={fmt} stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" width={95} />
                  <Tooltip formatter={(v: number) => fmtFull(v)} />
                  <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
                    {costBarData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Net Margin & Break-even */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Net Margin (%)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marginBreakEvenData} layout="vertical" margin={{ left: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" width={95} />
                  <Tooltip formatter={(v: number) => `${v}%`} />
                  <Bar dataKey="netMargin" radius={[0, 4, 4, 0]}>
                    {marginBreakEvenData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg">Months to Break-Even</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marginBreakEvenData} layout="vertical" margin={{ left: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" width={95} />
                  <Tooltip formatter={(v: number) => `${v} months`} />
                  <Bar dataKey="breakEven" radius={[0, 4, 4, 0]}>
                    {marginBreakEvenData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Full Data Table */}
        <Card>
          <CardHeader><CardTitle className="text-lg">All Business Models</CardTitle></CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 px-2 font-medium text-muted-foreground">#</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground">Model</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground">Category</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground text-right">Startup Cost</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground text-right">Monthly Rev</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground text-right">Gross %</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground text-right">Net %</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground text-right">Break-even</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground text-center">Difficulty</th>
                  <th className="py-3 px-2 font-medium text-muted-foreground text-center">Scalability</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m, i) => (
                  <tr key={m.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-2.5 px-2 text-muted-foreground">{i + 1}</td>
                    <td className="py-2.5 px-2 font-medium">{m.name}</td>
                    <td className="py-2.5 px-2">
                      <Badge variant="outline" style={{ borderColor: CATEGORY_COLORS[m.category], color: CATEGORY_COLORS[m.category] }}>
                        {CATEGORY_LABELS[m.category]}
                      </Badge>
                    </td>
                    <td className="py-2.5 px-2 text-right">{fmtFull(m.startupCost)}</td>
                    <td className="py-2.5 px-2 text-right font-medium">{fmtFull(m.monthlyRevenue)}</td>
                    <td className="py-2.5 px-2 text-right">{m.grossMargin}%</td>
                    <td className="py-2.5 px-2 text-right">{m.netMargin}%</td>
                    <td className="py-2.5 px-2 text-right">{m.breakEvenMonths} mo</td>
                    <td className="py-2.5 px-2 text-center">
                      <DifficultyDots value={m.difficulty} />
                    </td>
                    <td className="py-2.5 px-2 text-center">
                      <DifficultyDots value={m.scalability} color="hsl(var(--secondary))" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

function KpiCard({ icon, label, value, sub, color }: { icon: React.ReactNode; label: string; value: string; sub: string; color: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <div className={`${color}`}>{icon}</div>
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">{sub}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DifficultyDots({ value, color = 'hsl(var(--foreground))' }: { value: number; color?: string }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i < value ? color : 'hsl(var(--muted))' }} />
      ))}
    </div>
  );
}
