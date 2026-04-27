import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Cpu, HardDrive, Wifi, Battery, Shield, AlertTriangle,
  CheckCircle2, RefreshCw, Monitor, Clock, ChevronRight, Info,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface HealthItem {
  id: string;
  label: string;
  icon: typeof Cpu;
  score: number; // 0-100
  status: 'good' | 'warning' | 'critical';
  detail: string;
  tip: string;
}

const initialItems: HealthItem[] = [
  {
    id: 'storage',
    label: 'Storage Space',
    icon: HardDrive,
    score: 62,
    status: 'warning',
    detail: '38% of your storage is free',
    tip: 'Delete unused apps and old downloads to free up space.',
  },
  {
    id: 'security',
    label: 'Security Updates',
    icon: Shield,
    score: 95,
    status: 'good',
    detail: 'Your device is up to date',
    tip: 'Keep automatic updates turned on to stay protected.',
  },
  {
    id: 'battery',
    label: 'Battery Health',
    icon: Battery,
    score: 78,
    status: 'good',
    detail: 'Battery capacity is healthy',
    tip: 'Avoid letting your battery drain to 0% regularly.',
  },
  {
    id: 'network',
    label: 'Network Connection',
    icon: Wifi,
    score: 88,
    status: 'good',
    detail: 'Strong Wi-Fi connection',
    tip: 'Restart your router monthly for the best performance.',
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: Cpu,
    score: 45,
    status: 'warning',
    detail: 'Several apps are running in background',
    tip: 'Close apps you are not using to speed things up.',
  },
  {
    id: 'privacy',
    label: 'Privacy Settings',
    icon: Monitor,
    score: 30,
    status: 'critical',
    detail: '4 apps have access to your location',
    tip: 'Review which apps can see your location, camera, and contacts.',
  },
];

const statusColors = {
  good: 'text-[hsl(var(--teksure-success))]',
  warning: 'text-[hsl(var(--teksure-warning))]',
  critical: 'text-[hsl(var(--teksure-danger,0_84%_60%))]',
};

const statusBg = {
  good: 'bg-[hsl(var(--teksure-success)/0.1)] border-[hsl(var(--teksure-success)/0.3)]',
  warning: 'bg-[hsl(var(--teksure-warning)/0.1)] border-[hsl(var(--teksure-warning)/0.3)]',
  critical: 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800/30',
};

const progressColor = {
  good: '[&>div]:bg-[hsl(var(--teksure-success))]',
  warning: '[&>div]:bg-[hsl(var(--teksure-warning))]',
  critical: '[&>div]:bg-red-500',
};

function getOverallScore(items: HealthItem[]) {
  return Math.round(items.reduce((sum, i) => sum + i.score, 0) / items.length);
}

function getOverallStatus(score: number): 'good' | 'warning' | 'critical' {
  if (score >= 75) return 'good';
  if (score >= 50) return 'warning';
  return 'critical';
}

export default function DeviceHealthDashboard() {
  const [items, setItems] = useState<HealthItem[]>(initialItems);
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const overall = getOverallScore(items);
  const overallStatus = getOverallStatus(overall);

  const handleScan = () => {
    setScanning(true);
    setScanned(false);
    // Simulate a scan with slight random variations
    setTimeout(() => {
      setItems(prev => prev.map(item => {
        const delta = Math.floor(Math.random() * 10) - 4;
        const newScore = Math.max(10, Math.min(100, item.score + delta));
        const newStatus: HealthItem['status'] =
          newScore >= 75 ? 'good' : newScore >= 45 ? 'warning' : 'critical';
        return { ...item, score: newScore, status: newStatus };
      }));
      setScanning(false);
      setScanned(true);
    }, 2200);
  };

  const criticalCount = items.filter(i => i.status === 'critical').length;
  const warningCount = items.filter(i => i.status === 'warning').length;

  return (
    <>
      <SEOHead
        title="Device Health Dashboard – TekSure Tools"
        description="Check your device's health score across storage, security, battery, network, performance, and privacy. Get simple tips to improve each area."
        path="/tools/device-health"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumb className="mb-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/tools" className="text-primary-foreground/70 hover:text-primary-foreground">Tools</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">Device Health</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Device Health Dashboard</h1>
              <p className="text-lg text-primary-foreground/80">
                See how healthy your device is and get simple tips to improve it.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen">
          <div className="container mx-auto px-4 max-w-4xl py-8">

            {/* Overall Score */}
            <div>
              <Card className="mb-6 border border-border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Score circle */}
                    <div className="relative flex items-center justify-center w-28 h-28 rounded-full border-4 shrink-0"
                      style={{
                        borderColor: overallStatus === 'good' ? 'hsl(var(--teksure-success))' :
                          overallStatus === 'warning' ? 'hsl(var(--teksure-warning))' : 'rgb(239 68 68)',
                      }}>
                      <div className="text-center">
                        <div className="text-3xl font-bold">{overall}</div>
                        <div className="text-xs text-muted-foreground">/ 100</div>
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                        <h2 className="text-xl font-bold">Overall Health Score</h2>
                        {overallStatus === 'good' && <CheckCircle2 className="h-5 w-5 text-[hsl(var(--teksure-success))]" />}
                        {overallStatus === 'warning' && <AlertTriangle className="h-5 w-5 text-[hsl(var(--teksure-warning))]" />}
                        {overallStatus === 'critical' && <AlertTriangle className="h-5 w-5 text-red-500" />}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {overallStatus === 'good' && 'Your device is in great shape! Keep up the good habits.'}
                        {overallStatus === 'warning' && `${warningCount} area${warningCount !== 1 ? 's' : ''} need${warningCount === 1 ? 's' : ''} your attention.`}
                        {overallStatus === 'critical' && `${criticalCount} critical issue${criticalCount !== 1 ? 's' : ''} found. Review the items below.`}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {criticalCount > 0 && <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 dark:bg-red-950/20 dark:text-red-400">{criticalCount} Critical</Badge>}
                        {warningCount > 0 && <Badge variant="outline" className="bg-[hsl(var(--teksure-warning)/0.1)] text-[hsl(var(--teksure-warning))] border-[hsl(var(--teksure-warning)/0.3)]">{warningCount} Warning</Badge>}
                        <Badge variant="outline" className="bg-[hsl(var(--teksure-success)/0.1)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]">
                          {items.filter(i => i.status === 'good').length} Good
                        </Badge>
                      </div>
                    </div>
                    <Button onClick={handleScan} disabled={scanning} className="shrink-0 min-w-[120px]">
                      <RefreshCw className={`h-4 w-4 mr-2 ${scanning ? 'animate-spin' : ''}`} />
                      {scanning ? 'Scanning…' : scanned ? 'Re-scan' : 'Run Scan'}
                    </Button>
                  </div>
                  {scanned && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-[hsl(var(--teksure-success))]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Scan completed — {new Date().toLocaleTimeString()}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Health Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, i) => {
                const Icon = item.icon;
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                  >
                    <Card
                      className={`border cursor-pointer transition-all hover:shadow-md ${statusBg[item.status]} ${isExpanded ? 'shadow-md' : ''}`}
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-background/60`}>
                            <Icon className={`h-5 w-5 ${statusColors[item.status]}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-sm">{item.label}</span>
                              <span className={`text-sm font-bold ${statusColors[item.status]}`}>{item.score}</span>
                            </div>
                          </div>
                        </div>
                        <Progress value={item.score} className={`h-2 mb-2 ${progressColor[item.status]}`} />
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                        {isExpanded && (
                          <div
                            className="mt-3 pt-3 border-t border-border/50"
                          >
                            <div className="flex items-start gap-2">
                              <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <p className="text-sm text-foreground">{item.tip}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Info note */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-muted border border-border text-sm text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0 mt-0.5" />
              <p>
                This dashboard gives you a general overview based on typical device patterns.
                Scores are estimates to help you know where to focus. Tap any card for a quick tip.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
