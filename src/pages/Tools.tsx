import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  KeyRound, Wifi, Wrench, HeartPulse, ArrowLeftRight, Type, Keyboard,
} from 'lucide-react';

const tools = [
  {
    title: 'Password Strength Checker',
    description: 'Test how strong your password is with real-time feedback, a visual strength meter, and a security checklist.',
    icon: KeyRound,
    path: '/tools/password-strength',
    color: 'text-green-500',
    badge: 'Safety',
  },
  {
    title: 'WiFi Speed Test',
    description: 'Check your internet speed and get practical tips for improving slow or unreliable connections.',
    icon: Wifi,
    path: '/tools/wifi-speed',
    color: 'text-blue-500',
    badge: 'Connectivity',
  },
  {
    title: 'Tech Health Check',
    description: 'Take a quick 5-question quiz to find out how healthy your device is — with colour-coded results and tips.',
    icon: HeartPulse,
    path: '/tools/health-check',
    color: 'text-rose-500',
    badge: 'Quiz',
  },
  {
    title: 'Device Comparison',
    description: 'Compare two devices side by side — price, battery life, ease of use, storage, and our verdict.',
    icon: ArrowLeftRight,
    path: '/tools/device-compare',
    color: 'text-purple-500',
    badge: 'Devices',
  },
  {
    title: 'Font Size Adjuster',
    description: 'Use the A+/A- button in the top navigation bar to cycle between Normal → Large → XL text sizes.',
    icon: Type,
    path: null,
    color: 'text-indigo-500',
    badge: 'Beginner',
  },
  {
    title: 'More Tools Coming Soon',
    description: 'We\'re building keyboard shortcut cheat sheets, email templates, and more. Check the roadmap for updates!',
    icon: Wrench,
    path: '/roadmap',
    color: 'text-muted-foreground',
    badge: 'Roadmap',
  },
];

export default function Tools() {
  return (
    <>
      <SEOHead
        title="Tools & Utilities | TekSure"
        description="Free tech tools — password checker, WiFi speed test, health check quiz, device comparison, and more."
        path="/tools"
      />
      <Navbar />
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2">
          <Wrench className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold">Tools &amp; Utilities</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Everything you need in one place — check your passwords, test your WiFi, quiz your device health,
          compare gadgets, and more. All free, all private.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => {
            const content = (
              <Card className="h-full transition-all hover:shadow-lg hover:border-secondary/50 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <tool.icon className={`h-10 w-10 mb-3 ${tool.color} transition-transform group-hover:scale-110`} />
                    <Badge variant="secondary" className="text-xs font-normal">{tool.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            );

            if (!tool.path) return <div key={i}>{content}</div>;

            return (
              <Link key={tool.path} to={tool.path} className="group">
                {content}
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
