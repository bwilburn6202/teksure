import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

const APPS = [
  { name: 'Muslim Pro', cost: 'Free; $40/yr Premium', best: 'Most popular Muslim app. Prayer times, qibla compass, Quran with audio + translation.', good: 'Best free Muslim app.' },
  { name: 'Athan Pro', cost: 'FREE; $4 Pro', best: 'Customizable adhan calls, prayer times, qibla.', good: 'Strong free pick.' },
  { name: 'Quran.com / Quran Majeed app', cost: 'FREE', best: 'Pure Quran with translations + tafsir + recitations from world\'s top reciters.', good: 'Best Quran app.' },
  { name: 'IslamicFinder', cost: 'FREE', best: 'Prayer times, Quran, hadith, halal guides.', good: 'Comprehensive.' },
  { name: 'HalalCheck / Zabihah', cost: 'FREE', best: 'Halal restaurants and products. Check ingredients.', good: 'Best halal lookup.' },
  { name: 'Tarteel.ai', cost: 'Free; Premium', best: 'AI-powered Quran memorization aid. Detects mistakes.', good: 'Best for hifz / memorization.' },
  { name: 'Rocket Languages Arabic / Madinah Books online', cost: 'Various', best: 'Learn Quranic Arabic.', good: 'For deeper Quran study.' },
];

export default function IslamicPrayerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Islamic Prayer Apps — Prayer Times, Quran, Halal | TekSure" description="Prayer times, qibla, Quran, hadith, halal restaurants. Plain-English picks for the best Islamic apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Islamic Prayer Apps</h1>
          <p className="text-lg text-muted-foreground">Prayer times, Quran, halal guides.</p>
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
            <h2 className="font-bold text-xl mb-3">Find a mosque + community</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>SalatomaticThe</strong> — most comprehensive mosque finder.</li>
              <li><strong>ISNA, ICNA</strong> — major US Muslim organizations with directories.</li>
              <li><strong>Local Muslim community Facebook groups</strong>.</li>
              <li><strong>Yaqeen Institute</strong> — high-quality essays + video on Islamic thought.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For Ramadan specifically</h3>
            <p className="text-sm text-muted-foreground">During Ramadan, most apps have iftar + suhoor reminder, Quran-in-30-days reading plan, and tarawih schedule. Set notifications for last 10 nights when many seek Laylat al-Qadr.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
