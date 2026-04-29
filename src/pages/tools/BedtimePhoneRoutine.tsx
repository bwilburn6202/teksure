import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BedDouble } from 'lucide-react';

export default function BedtimePhoneRoutine() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bedtime Phone Routine | TekSure" description="Sleep better. Phone-free bedroom. Plain-English routine for winding down without doom-scrolling." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BedDouble className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bedtime Phone Routine</h1>
          <p className="text-lg text-muted-foreground">Sleep better. Wake refreshed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2-hour wind down</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>2 hours before bed</strong> — last big meal, no caffeine.</li>
              <li><strong>1.5 hours before</strong> — dim lights at home.</li>
              <li><strong>1 hour before</strong> — stop news, work email.</li>
              <li><strong>30 min before</strong> — hot shower, read paper book.</li>
              <li><strong>15 min before</strong> — phone in OTHER room or "Bedtime" mode.</li>
              <li><strong>Bed</strong> — no scrolling. If can&apos;t sleep, get up, sit in chair until tired.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Bedtime</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Focus → Sleep.</li>
              <li>Set schedule (e.g., 10 PM-6 AM).</li>
              <li>All notifications silenced except chosen people (kids).</li>
              <li>Lock screen dims.</li>
              <li>Sunrise alarm wakes you.</li>
              <li>Sleep tracking via Apple Watch — bonus.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Replace phone with</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kindle e-reader</strong> ($110) — no blue light, like real paper.</li>
              <li><strong>Audiobook on Echo Dot</strong> — bedside, eyes closed.</li>
              <li><strong>Old-school alarm clock</strong> — $15. No phone next to bed needed.</li>
              <li><strong>Paper book + lamp</strong> — most underrated bedtime tool.</li>
              <li><strong>Crossword puzzle book</strong> — calms while engaging brain.</li>
              <li><strong>Journaling</strong> — clear the mind.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why phone in bed hurts sleep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Blue light suppresses melatonin (sleep hormone).</li>
              <li>Notifications spike cortisol (stress).</li>
              <li>News + social media = anxiety.</li>
              <li>Mindless scrolling = "alert" brain.</li>
              <li>3 AM checks = sleep cycle disruption.</li>
              <li>Charger by bed = phone is always there. Use other room.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you sleep poorly anyway</h3>
            <p className="text-sm text-muted-foreground">Up to 50% of seniors have sleep apnea (often undiagnosed). If snoring + tired despite 8 hrs in bed — ask doctor for sleep study. Treating apnea (CPAP) can transform health. Sleep apnea is also a major heart disease + dementia risk factor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
