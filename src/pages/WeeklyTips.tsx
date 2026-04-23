import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Calendar, ArrowRight, Shield, Wifi, Smartphone, Lock, Mail, Eye, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

interface WeeklyTip {
  id: number;
  week: string;
  title: string;
  tip: string;
  category: string;
  icon: typeof Lightbulb;
  color: string;
  relatedGuide?: string;
}

const tips: WeeklyTip[] = [
  { id: 1, week: 'April 14, 2026', title: 'Try the Scam Simulator', tip: 'Practice spotting fake emails, texts, and calls in a safe environment. Our new Scam Practice Simulator shows you real scam examples and teaches you the red flags to watch for. Americans lose $3.4 billion a year to scams targeting seniors — this tool helps you fight back.', category: 'Safety', icon: Shield, color: 'text-red-500', relatedGuide: '/tools/scam-simulator' },
  { id: 2, week: 'April 7, 2026', title: 'Check your streaming costs', tip: 'The average American spends $61 per month on streaming services — and many of those subscriptions go unused. Open your bank statement and search for recurring charges from Netflix, Hulu, Disney+, Spotify, and others. Cancel anything you have not used in the last 30 days. You can always resubscribe later.', category: 'Money', icon: Zap, color: 'text-green-500', relatedGuide: '/tools/streaming-calculator' },
  { id: 3, week: 'March 31, 2026', title: 'Set up two-factor authentication', tip: 'Two-factor authentication (2FA) is the single most effective thing you can do to protect your online accounts. It means that even if someone steals your password, they cannot log in without a code from your phone. Start with your email and banking apps — those are the most important.', category: 'Security', icon: Lock, color: 'text-violet-500', relatedGuide: '/tools/two-factor-setup' },
  { id: 4, week: 'March 24, 2026', title: 'Clean up your email inbox', tip: 'Search your inbox for "unsubscribe" — you will find dozens of newsletters you forgot about. Open each one and click the unsubscribe link at the bottom. Do 5 per day and your inbox will be cleaner within a week. Then set up filters to automatically sort important emails into folders.', category: 'Productivity', icon: Mail, color: 'text-teal-500', relatedGuide: '/tools/email-declutter' },
  { id: 5, week: 'March 17, 2026', title: 'Check your privacy settings', tip: 'Go to Settings → Privacy on your phone and review which apps have access to your location, camera, and microphone. Remove access from any app that does not need it. A weather app needs your location, but a flashlight app does not. This takes 5 minutes and significantly improves your privacy.', category: 'Privacy', icon: Eye, color: 'text-indigo-500', relatedGuide: '/tools/privacy-audit' },
  { id: 6, week: 'March 10, 2026', title: 'Speed up your WiFi', tip: 'Your router placement matters more than you think. Move it to a central location in your home, elevated off the floor. Keep it away from microwaves, baby monitors, and thick walls. If you are still getting slow speeds in some rooms, consider a mesh WiFi system — prices start around $70 for a 2-pack.', category: 'WiFi', icon: Wifi, color: 'text-blue-500', relatedGuide: '/tools/wifi-troubleshooter' },
  { id: 7, week: 'March 3, 2026', title: 'Back up your phone today', tip: 'If your phone was lost or stolen right now, would you lose any photos or contacts? iPhone: Settings → [your name] → iCloud → iCloud Backup → Back Up Now. Android: Settings → Google → Backup → Back up now. This takes a few minutes and could save years of memories.', category: 'Safety', icon: Smartphone, color: 'text-emerald-500', relatedGuide: '/tools/contact-backup' },
  { id: 8, week: 'February 24, 2026', title: 'Update your phone right now', tip: 'Phone updates include security fixes that protect you from hackers. iPhone: Settings → General → Software Update. Android: Settings → System → System Update. If an update is available, install it today. Leave your phone plugged in and on WiFi while it updates.', category: 'Security', icon: Shield, color: 'text-amber-500' },
  { id: 9, week: 'February 17, 2026', title: 'Test your password strength', tip: 'Go to our Password Strength Checker tool and type in your most-used password. If it rates below "Strong," change it today. A strong password has at least 12 characters with a mix of letters, numbers, and symbols. Never use birthdays, pet names, or common words.', category: 'Security', icon: Lock, color: 'text-rose-500', relatedGuide: '/tools/password-strength' },
  { id: 10, week: 'February 10, 2026', title: 'Register on the Do Not Call list', tip: 'Go to donotcall.gov and register every phone number in your household. This tells legitimate telemarketers not to call you. It will not stop all spam calls (scammers ignore the list), but it will significantly reduce the number of unwanted calls you receive. Registration is free and never expires.', category: 'Safety', icon: Shield, color: 'text-orange-500' },
];

export default function WeeklyTips() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => [...new Set(tips.map(t => t.category))], []);
  const filtered = selectedCategory ? tips.filter(t => t.category === selectedCategory) : tips;

  return (
    <>
      <SEOHead title="Weekly Tech Tips — One Helpful Tip Every Week | TekSure" description="Free weekly tech tips for everyday people. Practical advice on security, privacy, productivity, and staying safe online." path="/weekly-tips" />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        <div className="container max-w-3xl pt-4 px-4">
          <PageBreadcrumb segments={[{ label: 'Weekly Tips' }]} />
        </div>
        <section className="border-b py-14">
          <div className="container max-w-3xl text-center">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Weekly Tech Tips</h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">One practical tip every week to help you stay safe, save money, and get more from your devices.</p>
          </div>
        </section>

        <div className="container max-w-3xl py-12 px-4">
          <div className="flex flex-wrap gap-2 mb-8">
            <button onClick={() => setSelectedCategory(null)} className={`text-xs px-3 py-1.5 rounded-full border transition-all ${!selectedCategory ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-primary/30'}`}>All</button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`text-xs px-3 py-1.5 rounded-full border transition-all ${selectedCategory === cat ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-primary/30'}`}>{cat}</button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map(tip => (
              <Card key={tip.id} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-xl bg-muted flex items-center justify-center shrink-0 ${tip.color}`}>
                      <tip.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{tip.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {tip.week}</span>
                      </div>
                      <h2 className="font-semibold text-base mb-2">{tip.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tip.tip}</p>
                      {tip.relatedGuide && (
                        <Link to={tip.relatedGuide} className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 hover:underline">
                          Try it now <ArrowRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
