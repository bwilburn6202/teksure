import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  KeyRound, Wifi, Wrench, HeartPulse, ArrowLeftRight, Type, Keyboard, Mail, AlertCircle, Languages, CreditCard,
  HelpCircle, Laptop, HardDrive, GraduationCap, Smartphone, ShieldCheck,
} from 'lucide-react';

const tools = [
  {
    title: 'Interactive Troubleshooter',
    description: 'Answer yes/no questions and get guided step-by-step to the exact fix for WiFi, printers, passwords, phones, and more.',
    icon: HelpCircle,
    path: '/tools/troubleshooter',
    color: 'text-secondary',
    badge: 'Popular',
  },
  {
    title: 'Device Chooser Quiz',
    description: 'Not sure whether to buy a tablet, laptop, or desktop? Answer 5 quick questions for a personalised recommendation.',
    icon: Laptop,
    path: '/tools/device-chooser',
    color: 'text-violet-500',
    badge: 'Buying Guide',
  },
  {
    title: 'Data Backup Wizard',
    description: 'Step-by-step personalised backup plan for your photos, documents, and contacts — covering cloud, USB drives, and more.',
    icon: HardDrive,
    path: '/tools/backup-wizard',
    color: 'text-sky-500',
    badge: 'Safety',
  },
  {
    title: 'Internet Safety Course',
    description: 'Five bite-sized lessons on spotting scams, strong passwords, safe shopping, privacy, and what to do when things go wrong.',
    icon: GraduationCap,
    path: '/tools/safety-course',
    color: 'text-amber-500',
    badge: 'Course',
  },
  {
    title: 'App Recommender',
    description: 'Not sure which app to use? Answer 3 questions about what you want to do and your device — get personalised recommendations.',
    icon: Smartphone,
    path: '/tools/app-recommender',
    color: 'text-rose-500',
    badge: 'Recommended',
  },
  {
    title: 'Warranty & Repair Finder',
    description: 'Check how long your device warranty lasts, how to verify it\'s still active, and find authorised repair options.',
    icon: ShieldCheck,
    path: '/tools/warranty-checker',
    color: 'text-lime-600',
    badge: 'Support',
  },
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
    title: 'Keyboard Shortcuts',
    description: 'Printable cheat sheets for Windows, Mac, browsers, email, Word/Docs, and Excel/Sheets.',
    icon: Keyboard,
    path: '/tools/keyboard-shortcuts',
    color: 'text-orange-500',
    badge: 'Reference',
  },
  {
    title: 'Email Templates',
    description: '10 ready-to-use email templates for complaints, returns, job enquiries, IT support, and more.',
    icon: Mail,
    path: '/tools/email-templates',
    color: 'text-teal-500',
    badge: 'Productivity',
  },
  {
    title: 'Error Message Decoder',
    description: 'Search 20 common error messages and get plain-English explanations with 3 practical fixes each.',
    icon: AlertCircle,
    path: '/tools/error-decoder',
    color: 'text-destructive',
    badge: 'Troubleshooting',
  },
  {
    title: 'Tech Jargon Translator',
    description: 'Type any confusing tech word and get a plain-English explanation anyone can understand.',
    icon: Languages,
    path: '/tools/jargon-translator',
    color: 'text-cyan-500',
    badge: 'Reference',
  },
  {
    title: 'Quick Reference Cards',
    description: 'Printable cheat-sheet cards for shortcuts, safety tips, and troubleshooting — stick them next to your screen.',
    icon: CreditCard,
    path: '/tools/quick-reference',
    color: 'text-emerald-500',
    badge: 'Printable',
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
