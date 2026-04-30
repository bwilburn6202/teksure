import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function HallowPrayerApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hallow Catholic Prayer App for Seniors | TekSure" description="Hallow prayer + meditation app for Catholic seniors. Rosary, scripture, devotionals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hallow</h1>
          <p className="text-lg text-muted-foreground">Catholic prayer + meditation app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Hallow?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Catholic prayer + meditation app.</li>
              <li>Rosary, daily readings, examen.</li>
              <li>Sleep meditations + bedtime prayer.</li>
              <li>$70/year for full access.</li>
              <li>Some content always free.</li>
              <li>Voice talent: Mark Wahlberg, Jonathan Roumie, others.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Features for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Audio rosary — pray along with daily prayer.</li>
              <li>Scripture reading aloud.</li>
              <li>Stations of the Cross.</li>
              <li>Saints + feast days calendar.</li>
              <li>Spanish + English versions.</li>
              <li>Latin prayers + traditional content.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free version</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily rosary always free.</li>
              <li>Lent + Advent challenges free annually.</li>
              <li>Daily Gospel reading.</li>
              <li>Examen of conscience.</li>
              <li>Plenty for daily use without paying.</li>
              <li>Premium adds Pray25, sleep content.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other Catholic apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Laudate — completely free, Catholic Mass + readings.</li>
              <li>iBreviary — Liturgy of the Hours.</li>
              <li>Magnificat (subscription) — daily prayer + Mass.</li>
              <li>Word On Fire — Bishop Barron content.</li>
              <li>Verbum — academic Bible study.</li>
              <li>Most have free options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For other faiths</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Abide — Christian meditation.</li>
              <li>Echo Prayer — non-denominational Christian.</li>
              <li>Soulscape — Christian meditation.</li>
              <li>Pause — Buddhist meditation.</li>
              <li>Insight Timer — multi-faith meditation, mostly free.</li>
              <li>Calm + Headspace — secular meditation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use Hallow</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download from app store.</li>
              <li>7-day free trial of Premium.</li>
              <li>Or use free content forever.</li>
              <li>Set daily reminder for prayer time.</li>
              <li>Use during morning coffee or bedtime.</li>
              <li>Turn off notifications if overwhelming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try the free rosary daily</h3>
            <p className="text-sm text-muted-foreground">Hallow&apos;s daily rosary is completely free and available without a paid subscription. Many Catholic seniors love using it during morning coffee — about 20 minutes of guided prayer with beautiful background music. If you want fuller features after that, the $70/year is reasonable. The free content alone is one of the best Catholic prayer resources available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
