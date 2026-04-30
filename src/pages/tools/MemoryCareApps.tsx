import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

const APPS = [
  { name: 'MindMate', cost: 'FREE / $5/mo Premium', best: 'Brain games designed for dementia. Photo journal, music memories, life story.', good: 'Best overall.' },
  { name: 'Greymatters', cost: 'FREE', best: 'Personalized for the patient — family adds their photos, music, life events.', good: 'Best personalized.' },
  { name: 'Lumosity / Elevate / BrainHQ', cost: 'FREE / $12/mo', best: 'Brain training games. BrainHQ is research-backed for early cognitive decline.', good: 'Best brain training.' },
  { name: 'Reminisce / Memory Lane Games', cost: 'FREE-$5', best: 'Trigger memories with old photos, songs, news clips from a chosen decade.', good: 'Best for storytelling.' },
  { name: 'CareZone', cost: 'FREE', best: 'Caregiver-side: track meds, symptoms, daily notes. Share with family.', good: 'Best caregiver record.' },
];

export default function MemoryCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memory Care Apps for Dementia | TekSure" description="Apps that help with memory loss and dementia. Plain-English picks for brain games, life-story journals, and caregiver tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memory Care Apps</h1>
          <p className="text-lg text-muted-foreground">Tools for memory loss + dementia.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wandering safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple AirTag in shoes/wallet</strong> — $30, finds them.</li>
              <li><strong>GPS Smart Sole</strong> — shoe insole with GPS. $300 + $25/mo.</li>
              <li><strong>Project Lifesaver</strong> — local sheriff partnership. Radio bracelet for at-risk wanderers. Free in many counties.</li>
              <li><strong>MedicAlert + Safe Return</strong> — Alzheimer&apos;s Association ID bracelet, 24/7 hotline.</li>
              <li><strong>Door alarms</strong> — beep when door opens (Skylink, GE).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Music + memory</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Music from age 16-25 stays in memory longest. Build playlist of those years.</li>
              <li>Spotify, Apple Music, YouTube — free music to play.</li>
              <li><strong>Music &amp; Memory</strong> nonprofit — free iPods loaded with personal playlists for dementia patients.</li>
              <li>Engaging music can reduce agitation by 50%.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free help &amp; resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Alzheimer&apos;s Association</strong> — alz.org or 1-800-272-3900 (24/7).</li>
              <li><strong>National Institute on Aging</strong> — nia.nih.gov, free guides.</li>
              <li><strong>Local memory cafes</strong> — social meetups for patients + caregivers.</li>
              <li><strong>Dementia Friends</strong> — free training to better understand.</li>
              <li><strong>Adult day programs</strong> — supervised activity, $40-100/day. Medicaid sometimes covers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Caregiver burnout</h3>
            <p className="text-sm text-muted-foreground">Memory care is one of the hardest jobs. 40% of dementia caregivers die before the patient — from stress. Take respite seriously. Local Area Agency on Aging arranges weekly respite hours, often free or low cost. Nobody can do this alone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
