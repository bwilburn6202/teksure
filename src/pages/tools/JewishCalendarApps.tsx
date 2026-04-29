import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const APPS = [
  { name: 'Hebcal', cost: 'FREE', best: 'Comprehensive Jewish calendar. Shabbat times by zip code, holidays, weekly Torah portion. Sync to Google/Apple calendar.', good: 'Most-used free Jewish app.' },
  { name: 'OU.org Daily Halacha', cost: 'FREE', best: 'Orthodox Union app — daily Jewish law, news, kosher database.', good: 'Best for Orthodox.' },
  { name: 'Sefaria', cost: 'FREE', best: 'Largest free Jewish text library. Talmud, Torah, Mishnah — fully searchable in Hebrew + English.', good: 'Best for Torah study.' },
  { name: 'My Jewish Learning', cost: 'FREE', best: 'Educational articles on every Jewish topic.', good: 'For those building knowledge.' },
  { name: 'OneTable / 18Doors', cost: 'FREE', best: 'Connect young adult Jews + interfaith couples around Shabbat dinners.', good: 'For grandkids and young families.' },
  { name: 'Chabad.org / iTorah', cost: 'FREE', best: 'Chabad-Lubavitch Judaism, lessons, Hasidic tradition.', good: 'Comprehensive Chabad content.' },
];

export default function JewishCalendarApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jewish Calendar & Torah Apps — Hebcal, Sefaria | TekSure" description="Shabbat times, holidays, Torah study, kosher info. Plain-English picks for the best free Jewish apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jewish Calendar & Torah Apps</h1>
          <p className="text-lg text-muted-foreground">Shabbat, holidays, Torah study.</p>
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
            <h2 className="font-bold text-xl mb-3">Stream services</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most Reform/Conservative synagogues stream Shabbat services on Facebook or Zoom.</li>
              <li>Yom Kippur livestreams free for everyone (high holy day tradition).</li>
              <li>Central Synagogue (NYC) has a top-tier worldwide livestream.</li>
              <li>Search "[your synagogue name] livestream" or check the bulletin.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other useful</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>JewishGen</strong> — best for Jewish genealogy / Holocaust ancestry.</li>
              <li><strong>Yad Vashem</strong> — Holocaust victim database, Survivor testimonies.</li>
              <li><strong>JewBelong</strong> — for the unaffiliated. Modern voice.</li>
              <li><strong>"AlephBeta"</strong> — beautiful video Torah commentaries by Rabbi Fohrman.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For grandkids</h3>
            <p className="text-sm text-muted-foreground">PJ Library (free) sends Jewish children\'s books for ages 0-8. Sign up grandkids at pjlibrary.org. Free monthly mailing for the first year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
