import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Printer, MessageCircle } from 'lucide-react';

const PROMPTS = [
  {
    title: 'What feels hardest about your phone right now?',
    why: 'Lets parents say it out loud without feeling judged.',
  },
  {
    title: 'What is one thing you wish your phone did better?',
    why: 'Often surfaces a single fix that helps every day.',
  },
  {
    title: 'When you get a strange call or text, what do you do?',
    why: 'Reveals scam-defense gaps before they cost money.',
  },
  {
    title: 'If something happened to me, who would know my passwords?',
    why: 'Open the door to building a tech-emergency plan together.',
  },
  {
    title: 'Who do you call first when tech goes wrong — and is that working?',
    why: 'Names a "tech buddy" or shows the support gap.',
  },
  {
    title: 'What do you wish I would stop doing on my phone when we are together?',
    why: 'Two-way street. Fair to ask everyone.',
  },
];

const ACTIONS = [
  'Pick one "tech buddy" — the family member who answers tech questions first.',
  'Set a regular tech check-in (15 min once a month, even by phone).',
  'Make sure two people know how to unlock the phone and access the password manager.',
  'Walk through the Scam Message Decoder together so everyone knows the warning signs.',
  'Add an in-case-of-emergency contact to the lock screen.',
];

export default function FamilyTechRoundtable() {
  const [familyName, setFamilyName] = useState('');
  const [date, setDate] = useState('');

  const printIt = () => window.print();

  return (
    <>
      <SEOHead
        title="Family Tech Roundtable Planner"
        description="A printable, judgment-free conversation guide so families can plan tech help together — covering everyday struggles, scam defense, and emergency access."
        path="/tools/family-tech-roundtable"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Family Tech Roundtable</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A judgment-free 30-minute conversation. Print it, gather everyone, and plan tech help together.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 print:hidden">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Family Tech Roundtable' },
            ]}
          />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fam">Family name (optional, prints at top)</Label>
                  <Input id="fam" value={familyName} onChange={(e) => setFamilyName(e.target.value)} placeholder="e.g. The Smith family" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="d">Date</Label>
                  <Input id="d" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1" />
                </div>
              </div>
              <Button onClick={printIt} size="lg" className="gap-2 w-full sm:w-auto">
                <Printer className="h-5 w-5" /> Print the roundtable guide
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">How to run it</p>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-primary font-semibold">1.</span><span>Pick a calm 30 minutes — no rushed dinners, no holidays.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold">2.</span><span>Pass the prompts around. Everyone answers each one — kids included.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold">3.</span><span>Listen. Do not fix anything yet. Just listen.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold">4.</span><span>At the end, pick one or two action steps from the list. Decide who does what.</span></li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Conversation prompts</p>
              <div className="space-y-3">
                {PROMPTS.map((p, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm flex items-start gap-2">
                      <MessageCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {p.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 ml-6">{p.why}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Action ideas to pick from</p>
              <ul className="space-y-2 text-sm">
                {ACTIONS.map((a, i) => (
                  <li key={i} className="flex gap-2"><span className="text-primary">•</span><span>{a}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/tech-cheatsheet-generator" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Tech Cheatsheet Generator</p>
                <p className="text-xs text-muted-foreground mt-0.5">Print a one-pager for the kitchen counter.</p>
              </Link>
              <Link to="/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan ahead for digital legacy.</p>
              </Link>
              <Link to="/caregiver" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Caregiver Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">More for adult children helping parents.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Print version */}
        <div className="hidden print:block px-8 py-6">
          <header className="border-b-2 border-black pb-3 mb-5">
            <h1 className="text-2xl font-bold">{familyName || 'Family Tech Roundtable'}</h1>
            {date && <p className="text-sm text-gray-700">{new Date(date).toLocaleDateString('en-US', { dateStyle: 'long' })}</p>}
            <p className="text-xs text-gray-600 mt-2">A 30-minute, judgment-free conversation. Pass these prompts around — everyone answers each one.</p>
          </header>

          <section className="mb-5">
            <h2 className="text-base font-bold uppercase tracking-wider mb-2">Conversation prompts</h2>
            <ol className="space-y-2 text-sm">
              {PROMPTS.map((p, i) => (
                <li key={i} className="break-inside-avoid">
                  <p className="font-semibold">{i + 1}. {p.title}</p>
                  <p className="text-xs text-gray-600 italic ml-4">{p.why}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-5 break-inside-avoid">
            <h2 className="text-base font-bold uppercase tracking-wider mb-2">Pick one or two action steps</h2>
            <ul className="space-y-1 text-sm">
              {ACTIONS.map((a, i) => (
                <li key={i}>☐ {a}</li>
              ))}
            </ul>
          </section>

          <section className="break-inside-avoid">
            <h2 className="text-base font-bold uppercase tracking-wider mb-2">Who does what</h2>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-black">
                  <th className="text-left py-1 pr-2">Action</th>
                  <th className="text-left py-1 pr-2">Who</th>
                  <th className="text-left py-1">By when</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map(i => (
                  <tr key={i} className="border-b border-gray-300 h-8">
                    <td></td><td></td><td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <footer className="mt-8 pt-3 border-t border-gray-300 text-xs text-gray-600">
            More free family tech tools at TekSure.com.
          </footer>
        </div>
      </main>

      <Footer />
    </>
  );
}
