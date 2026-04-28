import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import {
  ShieldAlert, Heart, HeartHandshake, Eye, BookOpen,
  Sparkles, MessageCircle, ArrowRight, Sun, type LucideIcon,
} from 'lucide-react';

interface Path {
  q: string;
  to: string;
  description: string;
  icon: LucideIcon;
  cls: string;
}

const PATHS: Path[] = [
  {
    q: 'I want a quick tip for today',
    description: 'A 60-second tip you can listen to or read.',
    to: '/daily-tip',
    icon: Sun,
    cls: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-900',
  },
  {
    q: 'I got a strange call, text, or email',
    description: 'Paste the message, get a clear answer.',
    to: '/tools/scam-message-decoder',
    icon: ShieldAlert,
    cls: 'from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-200 dark:border-red-900',
  },
  {
    q: 'I want to set up a tablet for my parent or grandparent',
    description: 'Step-by-step setup with photos, video calls, and big text.',
    to: '/grandparent-device-setup',
    icon: Heart,
    cls: 'from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 border-pink-200 dark:border-pink-900',
  },
  {
    q: 'My eyes — make my screen easier to see',
    description: 'Bigger text, bold fonts, magnifier, contrast.',
    to: '/low-vision-setup',
    icon: Eye,
    cls: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-900',
  },
  {
    q: 'I am closing accounts after a death',
    description: 'Apple, Google, Facebook, banks, phone carrier — together in one place.',
    to: '/account-after-loss',
    icon: HeartHandshake,
    cls: 'from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-200 dark:border-purple-900',
  },
  {
    q: 'I just need to learn something',
    description: 'Browse our free guide library — over 2,500 plain-English how-tos.',
    to: '/guides',
    icon: BookOpen,
    cls: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-900',
  },
  {
    q: 'I want to ask TekSure for help',
    description: 'Talk to a real person — free or $15 phone session.',
    to: '/get-help',
    icon: MessageCircle,
    cls: 'from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-950/30 border-cyan-200 dark:border-cyan-900',
  },
];

export default function Start() {
  return (
    <>
      <SEOHead
        title="Start here"
        description="Pick what you need help with — TekSure points you to the right place. Free, plain-English tech support for non-technical users and seniors."
        path="/start"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-12 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Start here</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Pick the one that sounds most like you. We will take you straight to the right place.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-10">
          <div className="space-y-3">
            {PATHS.map(p => {
              const Icon = p.icon;
              return (
                <Link key={p.to} to={p.to}>
                  <Card className={`bg-gradient-to-r ${p.cls} hover:shadow-md transition-all border-2`}>
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm shrink-0">
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-base md:text-lg">{p.q}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{p.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-2">None of these match what you need?</p>
            <Link to="/site-index" className="text-primary hover:underline text-sm font-medium">
              See every page on TekSure →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
