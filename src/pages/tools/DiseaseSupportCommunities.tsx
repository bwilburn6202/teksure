import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const COMMUNITIES = [
  { name: 'Cancer Support Community', what: 'Cancer patient + family support groups, in-person and online.', good: 'cancersupportcommunity.org. 1-888-793-9355 helpline.' },
  { name: 'American Cancer Society', what: 'Information, ride-to-treatment, lodging assistance.', good: 'cancer.org / 1-800-227-2345.' },
  { name: 'CancerCare', what: 'Free counseling for patients + caregivers. Online support groups.', good: 'cancercare.org / 1-800-813-4673.' },
  { name: 'American Heart Association', what: 'Support Network for heart attack, stroke, AFib.', good: 'supportnetwork.heart.org.' },
  { name: 'American Diabetes Association', what: 'Educational, advocacy, online support for type 1 and 2.', good: 'diabetes.org.' },
  { name: 'National Kidney Foundation Peers', what: 'For kidney disease + dialysis patients.', good: 'kidney.org.' },
  { name: 'COPD Foundation', what: 'COPD info + community.', good: 'copdfoundation.org.' },
  { name: 'Alzheimer\'s Association', what: '24/7 helpline. Caregiver support groups. Community Resource Finder.', good: 'alz.org / 1-800-272-3900.' },
  { name: 'Inspire (inspire.com)', what: '"Facebook for patients" — communities for 200+ conditions.', good: 'Most active disease forums.' },
  { name: 'PatientsLikeMe', what: 'Track symptoms + treatments. Compare to others with same condition.', good: 'For data nerds.' },
];

export default function DiseaseSupportCommunities() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Disease Support Communities — Cancer, Heart, Alzheimer&apos;s | TekSure" description="Online support groups, helplines, and resources for major diseases. Plain-English directory of free communities for patients and caregivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Disease Support Communities</h1>
          <p className="text-lg text-muted-foreground">You\'re not alone. Online communities + free helplines.</p>
        </div>

        <div className="space-y-3 mb-6">
          {COMMUNITIES.map(c => (
            <Card key={c.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{c.name}</h3>
                <p className="text-sm">{c.what}</p>
                <p className="text-sm text-muted-foreground">{c.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For caregivers</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Caregiver Action Network</strong> — caregiveraction.org.</li>
              <li><strong>Family Caregiver Alliance</strong> — caregiver.org. State-specific resources.</li>
              <li><strong>CaringBridge</strong> — share updates with friends/family. (See our Caregiver Coordination tool.)</li>
              <li><strong>Lotsa Helping Hands</strong> — schedule meals + help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Helplines worth saving</h3>
            <p className="text-sm text-muted-foreground"><strong>988</strong> — Suicide/Crisis. <strong>1-800-799-7233</strong> — Domestic violence. <strong>1-800-272-3900</strong> — Alzheimer\'s 24/7. <strong>1-800-227-2345</strong> — American Cancer Society 24/7. Save in your phone — when you need to talk at 3 AM, it\'s there.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
