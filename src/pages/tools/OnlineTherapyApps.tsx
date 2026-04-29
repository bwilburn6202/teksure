import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquareHeart } from 'lucide-react';

const APPS = [
  { name: 'BetterHelp', cost: '$60-90/wk', best: 'Biggest. 30,000+ therapists. Match-and-switch easily. Text, phone, video.', good: 'Often runs new-customer discounts.' },
  { name: 'Talkspace', cost: '$70-110/wk', best: 'Accepts many insurance plans (Cigna, Aetna, Optum). Includes psychiatry option.', good: 'Best if you want insurance to pay.' },
  { name: 'Brightside', cost: '$95/mo for therapy + $95 for psychiatry', best: 'Combines therapy + psychiatric medication. For people who may need both.', good: 'Real psychiatrist, not just therapist.' },
  { name: 'Cerebral', cost: '$30-300/mo varies', best: 'Subscription-based. Sometimes covers ADHD/anxiety meds.', good: 'Mixed reviews; check current state of company.' },
  { name: 'Headway', cost: 'Insurance copay', best: 'Find an in-network therapist who accepts your insurance. Skip the navigation.', good: 'Best for using insurance.' },
  { name: 'Open Path Collective', cost: '$30-80/session sliding scale', best: 'Non-profit. Affordable therapy for people without good insurance.', good: 'Best low-income option.' },
  { name: 'Local hospital sliding scale', cost: 'Income-based, often $0-25/visit', best: 'Many large hospitals offer income-based therapy. Especially university hospitals.', good: 'Quality often as good as private.' },
];

export default function OnlineTherapyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Therapy Apps — BetterHelp, Talkspace | TekSure" description="Therapy from home. Plain-English picks for online therapy services for depression, anxiety, grief, and life transitions. Free and paid options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquareHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Therapy Apps</h1>
          <p className="text-lg text-muted-foreground">Talk to a real therapist from home.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">When therapy helps</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Depression or persistent low mood.</li>
              <li>Anxiety, panic, intrusive worry.</li>
              <li>Grief — especially complicated grief or one that doesn\'t lift after 6+ months.</li>
              <li>Life transitions — retirement, illness, empty nest, loss of identity.</li>
              <li>Caregiver stress / caregiver burnout.</li>
              <li>Marital strain.</li>
              <li>Insomnia, anger, addiction.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free crisis resources</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>988 — Suicide & Crisis Lifeline</strong> (call or text). Available 24/7.</li>
              <li><strong>Crisis Text Line</strong> — text HOME to 741741.</li>
              <li><strong>Veterans Crisis Line</strong> — 988 then press 1.</li>
              <li><strong>SAMHSA Helpline</strong> — 1-800-662-4357. Mental health and substance.</li>
              <li><strong>NAMI Helpline</strong> — 1-800-950-6264.</li>
              <li><strong>Friendship Line for Older Adults</strong> — 1-800-971-0016. Counseling for loneliness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use Medicare for therapy</h2>
            <p className="text-sm">Original Medicare covers 80% of mental health visits with a Medigap plan covering the rest. Find Medicare-accepting therapists at <strong>psychologytoday.com</strong> (filter by insurance) or your patient portal.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">Sign up for BetterHelp\'s 7-day trial OR ask your primary care doctor for a referral. The first therapist is rarely the right fit — give it 2-3 sessions before deciding. Don\'t hesitate to switch.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
