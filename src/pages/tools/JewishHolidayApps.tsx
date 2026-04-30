import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function JewishHolidayApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jewish Holiday + Prayer Apps for Seniors | TekSure" description="Best apps for Jewish seniors. Hebcal, Siddur apps, Jewish learning resources." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jewish Apps</h1>
          <p className="text-lg text-muted-foreground">Holidays, prayer, study, community.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hebcal Calendar</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Jewish calendar app.</li>
              <li>Holiday dates + candle-lighting times.</li>
              <li>Customized for your zip code.</li>
              <li>Shabbat candle-lighting times each week.</li>
              <li>Yahrzeit (memorial) tracking.</li>
              <li>Sync to Google Calendar or Apple Calendar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Siddur apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RustyBrick Siddur — popular, Hebrew + English.</li>
              <li>Siddur ArtScroll — premium, traditional.</li>
              <li>Pocket Siddur — free, basic.</li>
              <li>Audio prayer recordings.</li>
              <li>Multiple traditions: Ashkenazi, Sephardi.</li>
              <li>Adjustable text size.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sefaria — free Torah library</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free, completely open library.</li>
              <li>Torah, Talmud, Midrash, commentaries.</li>
              <li>English + Hebrew side-by-side.</li>
              <li>Available web + app.</li>
              <li>Connects related texts beautifully.</li>
              <li>Best Jewish text resource ever made.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Holiday-specific</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Haggadah app for Passover seder.</li>
              <li>Megillat Esther for Purim.</li>
              <li>Selichot apps for High Holidays.</li>
              <li>Tisha B&apos;Av Eichah.</li>
              <li>Many free for specific holidays.</li>
              <li>Search by holiday name in app store.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learning + community</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>MyJewishLearning — articles + courses.</li>
              <li>Aleph Beta — Torah video courses.</li>
              <li>Daf Yomi — daily Talmud page.</li>
              <li>Chabad.org — comprehensive resource.</li>
              <li>OneTable — Shabbat dinners with community.</li>
              <li>Most free or low-cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yahrzeit tracking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hebcal sets yahrzeit reminders.</li>
              <li>Light memorial candle.</li>
              <li>Recite Kaddish.</li>
              <li>Visit gravesite if possible.</li>
              <li>Hebrew date used (different from civil date).</li>
              <li>Hebcal calculates the right date automatically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hebcal + Sefaria — both free</h3>
            <p className="text-sm text-muted-foreground">Two essential free apps for any Jewish senior: Hebcal for calendar, candle-lighting times, and yahrzeits — Sefaria for Torah, Talmud, and Jewish learning. Both free, both open-source, both run by nonprofits. Together they replace several books and reference materials. Add a Siddur app of your choice for daily prayer. All free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
