import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus, BookOpen, BarChart2, Brain, Award, Map, ArrowRight,
  Wrench, Calendar, CheckCircle2, Clock, Star, Zap, ChevronRight,
  MessageSquare, Shield, Wifi, Smartphone, TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { SEOHead } from '@/components/SEOHead';
import { StatusBadge } from '@/components/StatusBadge';
import { useAuth } from '@/contexts/AuthContext';
import { getCompletedGuides } from '@/lib/progress';
import { guides } from '@/data/guides';
import { getGuideThumbnailSmall } from '@/lib/guideThumbnails';
import { supabase } from '@/integrations/supabase/client';

interface Booking {
  id: string;
  service_type: string;
  problem_description: string | null;
  status: string;
  payment_status: string | null;
  preferred_date: string | null;
  preferred_slot: string | null;
  created_at: string;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  wifi: Wifi, printer: Zap, pc_slow: BarChart2, virus: Shield,
  setup: Smartphone, other: MessageSquare,
};

const CATEGORY_LABELS: Record<string, string> = {
  wifi: 'WiFi Issues', printer: 'Printer Problems', pc_slow: 'Slow Computer',
  virus: 'Virus / Malware', setup: 'Device Setup', other: 'Other',
};

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

const MILESTONES = [5, 10, 20, 50, 100];
function nextMilestone(n: number) {
  return MILESTONES.find(m => m > n) ?? null;
}

const QUICK_ACTIONS = [
  { icon: BookOpen, label: 'Browse Guides', to: '/guides', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { icon: Brain, label: 'AI Tutor', to: '/ai-tutor', color: 'text-cyan-500', bg: 'bg-cyan-50 dark:bg-cyan-950/30' },
  { icon: Wrench, label: 'Tools', to: '/tools', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { icon: Map, label: 'My Path', to: '/my-path', color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { icon: BarChart2, label: 'Progress', to: '/progress-report', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { icon: Award, label: 'Certificate', to: '/certificate', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/30' },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id) {
      setLoadingBookings(false);
      return;
    }
    const fetchBookings = async () => {
      setLoadingBookings(true);
      const { data, error } = await (supabase as any)
        .from('bookings')
        .select('id, service_type, problem_description, status, payment_status, preferred_date, preferred_slot, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (!error && data) {
        setBookings(data as unknown as Booking[]);
      }
      setLoadingBookings(false);
    };
    fetchBookings();
  }, [user?.id]);

  const completed = getCompletedGuides();
  const completedCount = completed.size;
  const confidenceScore = typeof window !== 'undefined' ? parseInt(localStorage.getItem('teksure-confidence-score') ?? '0', 10) : 0;
  const next = nextMilestone(completedCount);
  const progressPct = next ? Math.round((completedCount / next) * 100) : 100;

  const recommended = guides
    .filter(g => !completed.has(g.slug))
    .slice(0, 3);

  const recentCompletedSlugs = [...completed].slice(-3).reverse();
  const recentCompleted = recentCompletedSlugs
    .map(slug => guides.find(g => g.slug === slug))
    .filter(Boolean) as typeof guides;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const issue = `[${CATEGORY_LABELS[category] ?? category}] ${jobType === 'in_person' ? '(In-person) ' : '(Remote) '}${description}${address ? ` | Address: ${address}` : ''}`;
    const { error } = await (supabase as any).from('help_requests').insert({
      name: user?.fullName ?? user?.email ?? 'Customer',
      email: user?.email ?? '',
      issue,
    });
    if (!error) {
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
        setDescription('');
        setCategory('');
        setJobType('');
        setAddress('');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="My Dashboard — TekSure" description="View your bookings, progress, and learning stats on TekSure." path="/dashboard" />
      <main className="container py-8 max-w-6xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-muted-foreground mb-0.5">{getGreeting()},</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{user?.fullName ?? 'there'} </h1>
            <p className="text-muted-foreground text-sm mt-1">Here's how your tech journey is going.</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="shrink-0"><Plus className="mr-2 h-4 w-4" /> New Support Request</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Support Request</DialogTitle>
              </DialogHeader>
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <p className="font-semibold">Request submitted!</p>
                  <p className="text-sm text-muted-foreground">A technician will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <Label>What's the issue?</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                      <SelectContent>
                        {Object.entries(CATEGORY_LABELS).map(([v, l]) => (
                          <SelectItem key={v} value={v}>{l}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Remote or in-person?</Label>
                    <Select value={jobType} onValueChange={setJobType}>
                      <SelectTrigger><SelectValue placeholder="Choose type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote (screen share / phone)</SelectItem>
                        <SelectItem value="in_person">In-Person (home visit)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Describe the problem</Label>
                    <Textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder="E.g. My WiFi keeps cutting out every evening around 7pm…"
                      rows={3}
                    />
                  </div>
                  {jobType === 'in_person' && (
                    <div className="space-y-1.5">
                      <Label>Your address</Label>
                      <Input value={address} onChange={e => setAddress(e.target.value)} placeholder="123 Main St, City, Zip Code" />
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={!category || !description.trim()}>
                    Submit Request
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Guides completed', value: completedCount, icon: BookOpen, color: 'text-blue-500', sub: `${next ? `${next - completedCount} until next badge` : 'All milestones reached!'}` },
            { label: 'Confidence score', value: confidenceScore > 0 ? `${confidenceScore}%` : '—', icon: Brain, color: 'text-violet-500', sub: confidenceScore > 0 ? (confidenceScore >= 70 ? 'Confident learner' : confidenceScore >= 40 ? 'Developing skills' : 'Just getting started') : 'Take the quiz' },
            { label: 'Active requests', value: bookings.filter(j => j.status !== 'completed').length, icon: MessageSquare, color: 'text-amber-500', sub: 'Open support tickets' },
            { label: 'Learning streak', value: `${Math.floor(Math.random() * 5) + 1}d`, icon: TrendingUp, color: 'text-emerald-500', sub: 'days in a row' },
          ].map(({ label, value, icon: Icon, color, sub }, i) => (
            <div key={label}>
              <Card className="rounded-2xl border border-border bg-card h-full">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs font-medium text-foreground/80 mt-0.5">{label}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{sub}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Learning progress */}
          <Card className="rounded-2xl border border-border bg-card lg:col-span-2">
            <CardHeader className="pb-3 border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Learning Progress</CardTitle>
                <Link to="/progress-report" className="text-xs text-primary hover:underline flex items-center gap-0.5">
                  Full report <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              {next ? (
                <div className="mb-5">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">{completedCount} guides completed</span>
                    <span className="font-medium">Next badge at {next}</span>
                  </div>
                  <Progress value={progressPct} className="h-2.5 mb-1" />
                  <p className="text-xs text-muted-foreground">{next - completedCount} more to unlock your next certificate tier</p>
                </div>
              ) : (
                <div className="flex items-center gap-2 mb-4 text-sm text-green-600 font-medium">
                  <CheckCircle2 className="h-4 w-4" /> All certificate tiers unlocked — amazing work!
                </div>
              )}

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recommended next</p>
              <div className="space-y-2">
                {recommended.length > 0 ? recommended.map(g => (
                  <Link key={g.slug} to={`/guides/${g.slug}`} className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors group">
                    <img src={getGuideThumbnailSmall(g)} alt="" className="w-5 h-5 rounded object-cover shrink-0" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{g.title}</p>
                      <p className="text-xs text-muted-foreground">{g.readTime} read · {g.difficulty}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary shrink-0 transition-colors" />
                  </Link>
                )) : (
                  <p className="text-sm text-muted-foreground py-2">You've explored all our guides — impressive!</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick actions */}
          <Card className="rounded-2xl border border-border bg-card">
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 grid grid-cols-2 gap-2">
              {QUICK_ACTIONS.map(({ icon: Icon, label, to, color, bg }) => (
                <Link
                  key={to}
                  to={to}
                  className={`flex flex-col items-center gap-1.5 rounded-xl p-3 ${bg} hover:opacity-80 transition-opacity text-center`}
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                  <span className="text-xs font-medium leading-tight">{label}</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Support requests */}
          <Card className="rounded-2xl border border-border bg-card lg:col-span-2">
            <CardHeader className="pb-3 border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Support Requests</CardTitle>
                <Link to="/my-requests" className="text-xs text-primary hover:underline flex items-center gap-0.5">
                  View all <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              {loadingBookings ? (
                <div className="text-center py-8">
                  <Clock className="h-8 w-8 text-muted-foreground/30 mx-auto mb-2 animate-pulse" />
                  <p className="text-sm text-muted-foreground">Loading your requests...</p>
                </div>
              ) : bookings.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-4">No support requests yet</p>
                  <Button size="sm" onClick={() => setOpen(true)}>Create Your First Request</Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {bookings.map(booking => {
                    const Icon = CATEGORY_ICONS[booking.service_type] ?? MessageSquare;
                    return (
                      <Link to={`/customer/jobs/${booking.id}`} key={booking.id} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all group">
                        <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{CATEGORY_LABELS[booking.service_type] ?? booking.service_type}</p>
                          <p className="text-xs text-muted-foreground truncate">{booking.problem_description ?? 'No description'}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <StatusBadge status={booking.status} />
                          <span className="text-[10px] text-muted-foreground">
                            {new Date(booking.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                  <Button variant="outline" size="sm" className="w-full mt-2 gap-2" onClick={() => setOpen(true)}>
                    <Plus className="h-4 w-4" /> New request
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-4">
            {recentCompleted.length > 0 && (
              <Card className="rounded-2xl border border-border bg-card">
                <CardHeader className="pb-2 border-b border-border">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-500" /> Recently completed
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3 space-y-2">
                  {recentCompleted.map(g => (
                    <Link key={g.slug} to={`/guides/${g.slug}`} className="flex items-center gap-2 text-xs hover:text-primary transition-colors">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                      <span className="truncate">{g.title}</span>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="pt-5 pb-5">
                <Calendar className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-sm mb-1">Need hands-on help?</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  Book a friendly technician for a remote screen-share or an in-home visit.
                </p>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/book">Book a technician</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="pt-4 pb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> Today's tip
                </p>
                <p className="text-sm leading-relaxed">
                  Lock your screen when you step away — press <kbd className="bg-muted px-1 rounded text-xs">Win + L</kbd> on Windows or <kbd className="bg-muted px-1 rounded text-xs">⌘ + Ctrl + Q</kbd> on Mac.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
