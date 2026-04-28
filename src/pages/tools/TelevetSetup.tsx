import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, ExternalLink, AlertTriangle } from 'lucide-react';

type Service = 'vetster' | 'pawp' | 'askvet' | 'firstvet' | 'chewy';
interface VetService { name: string; cost: string; who: string; pros: string[]; cons: string[]; link: string; }

const SERVICES: Record<Service, VetService> = {
  'vetster': {
    name: 'Vetster',
    cost: 'Per visit. Around $50-$85 depending on the vet.',
    who: 'People who want a real licensed vet on video, with prescriptions where state law allows.',
    pros: ['Licensed vets in all 50 states.', 'Real video appointments, not chat-only.', 'Can write prescriptions in many states.'],
    cons: ['Pay-per-visit adds up fast with multiple pets.', 'Some states require an in-person visit before any prescription.'],
    link: 'https://vetster.com',
  },
  'pawp': {
    name: 'Pawp',
    cost: '$24/month for unlimited chats and video. Covers up to 6 pets.',
    who: 'Multi-pet households who want unlimited "is this an emergency?" reassurance.',
    pros: ['Unlimited 24/7 video and chat for one flat fee.', 'One plan covers up to 6 pets.', 'Includes a $3,000 emergency fund toward one real-vet emergency per year (rules apply).'],
    cons: ['Cannot write prescriptions or formally diagnose.', 'Emergency fund has strict rules — read them first.'],
    link: 'https://pawp.com',
  },
  'askvet': {
    name: 'AskVet',
    cost: 'About $9.99/month for unlimited chat. No contract.',
    who: 'Low-cost everyday questions — feeding, behavior, "is this rash normal?".',
    pros: ['Inexpensive monthly fee.', 'Unlimited text chat with vets and trainers.', 'Helpful for behavior and nutrition.'],
    cons: ['Chat-based, not video.', 'No diagnoses or prescriptions.'],
    link: 'https://askvet.app',
  },
  'firstvet': {
    name: 'FirstVet',
    cost: 'Free if your pet insurance partners (Nationwide, Pumpkin, MetLife). Otherwise about $35/visit.',
    who: 'People who already have pet insurance — check if your plan covers FirstVet at no extra cost.',
    pros: ['Free for many pet-insurance customers.', 'Video visits with licensed vets.', 'Available in most states.'],
    cons: ['Out-of-pocket if your insurer is not a partner.', 'Cannot prescribe in every state.'],
    link: 'https://firstvet.com/us',
  },
  'chewy': {
    name: 'Chewy Connect with a Vet',
    cost: 'Free for active Chewy customers (recent purchase or autoship).',
    who: 'Anyone who already buys pet food or meds from Chewy — no extra cost.',
    pros: ['Free for Chewy customers.', 'Live chat or video with licensed vets.', 'No appointment needed during open hours.'],
    cons: ['Need an active Chewy account in good standing.', 'Hours are limited (not 24/7).'],
    link: 'https://www.chewy.com/app/content/connect-with-a-vet',
  },
};

const OPTS: { id: Service; label: string }[] = [
  { id: 'vetster',  label: 'Vetster (per-visit video)' },
  { id: 'pawp',     label: 'Pawp ($24/mo unlimited)' },
  { id: 'askvet',   label: 'AskVet (low-cost chat)' },
  { id: 'firstvet', label: 'FirstVet (insurance-linked)' },
  { id: 'chewy',    label: 'Chewy Connect (free)' },
];

export default function TelevetSetup() {
  const [service, setService] = useState<Service>('vetster');
  const s = SERVICES[service];

  return (
    <>
      <SEOHead
        title="Televet Setup"
        description="Compare online vet visits — Vetster, Pawp, AskVet, FirstVet, and Chewy Connect with a Vet. Find the right fit by cost and coverage."
        path="/tools/televet-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-teal-50 via-background to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-teal-500/10 rounded-full">
                <Stethoscope className="h-8 w-8 text-teal-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Televet Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Talk to a licensed vet from your couch. Compare the most-used US online vet services by cost and coverage.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Televet Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which service are you considering?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {OPTS.map(o => (
                  <button key={o.id} onClick={() => setService(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      service === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{s.name}</Badge>
              <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {s.who}</p>
              <Badge variant="outline" className="text-xs justify-start mb-4">Cost: {s.cost}</Badge>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pros</p>
              <ul className="space-y-1 mb-4">
                {s.pros.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-green-600 font-semibold shrink-0">+</span><span>{p}</span></li>
                ))}
              </ul>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cons</p>
              <ul className="space-y-1 mb-3">
                {s.cons.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-amber-600 font-semibold shrink-0">-</span><span>{c}</span></li>
                ))}
              </ul>

              <a href={s.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                Visit {s.name} <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Televet cannot diagnose every issue</p>
                <p className="text-muted-foreground">
                  Online vets help with advice, follow-ups, and "should I worry?" questions. They cannot run blood work, take X-rays, or treat true emergencies. If your pet is bleeding heavily, struggling to breathe, vomiting repeatedly, has a swollen belly, ate something toxic, or had a seizure — go to an in-person vet right away. Note: Banfield offers telehealth only to existing Optimum Wellness Plan members through their app.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Five things to do before your video vet visit</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Write down symptoms, when they started, and what changed.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Take photos or a short video — rashes, limping, eating habits.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Have your pet's weight, age, breed, and current meds ready.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Pick a quiet, well-lit room so the vet can see clearly.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Test your camera and microphone five minutes before the call.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/pet-tech-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Pet Tech Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Cameras, feeders, and trackers for your pet.</p>
              </Link>
              <Link to="/tools/find-lost-items" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Find Lost Items</p>
                <p className="text-xs text-muted-foreground mt-0.5">Track collars, AirTags, and more.</p>
              </Link>
              <Link to="/tools/telehealth-prep" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Telehealth Prep</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get ready for any video health visit.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
