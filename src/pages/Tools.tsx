import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  KeyRound, Wifi, Wrench, Zap, BookOpen, Smartphone,
  Type, Printer, ClipboardCopy, ExternalLink,
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
    title: 'Quick Fixes',
    description: 'Instant solutions for the most common tech problems — slow computers, WiFi issues, printing errors, and more.',
    icon: Zap,
    path: '/quick-fixes',
    color: 'text-yellow-500',
    badge: 'Troubleshooting',
  },
  {
    title: 'Tech Glossary',
    description: 'Over 80 tech terms explained in everyday language with helpful analogies anyone can understand.',
    icon: BookOpen,
    path: '/glossary',
    color: 'text-purple-500',
    badge: 'Reference',
  },
  {
    title: 'Device Hub',
    description: 'Browse help organized by device type — phones, tablets, laptops, smart TVs, and more.',
    icon: Smartphone,
    path: '/device-hub',
    color: 'text-teal-500',
    badge: 'Devices',
  },
  {
    title: 'Print-Friendly Guides',
    description: 'Every guide includes a print button for clean, ink-friendly printouts — no ads, no clutter.',
    icon: Printer,
    path: '/guides',
    color: 'text-orange-500',
    badge: 'Guides',
  },
  {
    title: 'Copy-Paste Snippets',
    description: 'One-click copy buttons on every code block, command, and setting so you never mis-type anything.',
    icon: ClipboardCopy,
    path: '/guides',
    color: 'text-cyan-500',
    badge: 'Guides',
  },
  {
    title: 'Font Size Adjuster',
    description: 'Use the A+/A- button in the top navigation bar to switch between Normal, Large, and Extra Large text.',
    icon: Type,
    path: null,
    color: 'text-indigo-500',
    badge: 'Accessibility',
  },
];

export default function Tools() {
  return (
    <>
      <SEOHead
        title="Tools & Utilities | TekSure"
        description="Free tech tools — password checker, WiFi speed test, quick fixes, glossary, and more. No data stored."
        path="/tools"
      />
      <Navbar />
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2">
          <Wrench className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold">Tools &amp; Utilities</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Everything you need in one place — check your passwords, test your WiFi, look up tech terms,
          troubleshoot common problems, and more. All free, all private — no data is stored or sent anywhere.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const content = (
              <Card className="h-full transition-all hover:shadow-lg hover:border-secondary/50 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <tool.icon className={`h-10 w-10 mb-3 ${tool.color} transition-transform group-hover:scale-110`} />
                    <Badge variant="secondary" className="text-xs font-normal">
                      {tool.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {tool.title}
                    {tool.path && !tool.path.startsWith('/tools') && (
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            );

            if (!tool.path) {
              return <div key={tool.title}>{content}</div>;
            }

            return (
              <Link key={tool.path + tool.title} to={tool.path} className="group">
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
