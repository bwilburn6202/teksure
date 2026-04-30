import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function AccuWeatherForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AccuWeather for Seniors | TekSure" description="Senior-friendly weather app. AccuWeather + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AccuWeather</h1>
          <p className="text-lg text-muted-foreground">Senior weather details.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + Premium $4/mo.</li><li>Hour-by-hour.</li><li>RealFeel temperatures.</li><li>Senior detail-friendly.</li><li>Allergy alerts.</li><li>Severe weather.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Apple Weather</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple — built-in iPhone.</li><li>Senior simple.</li><li>Less detailed.</li><li>AccuWeather — more.</li><li>Senior pick depth.</li><li>Both free options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>RealFeel important.</li><li>Senior temperature sensitivity.</li><li>Plan outings.</li><li>Hourly details.</li><li>Storm warnings.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Notification setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Severe weather alerts.</li><li>Daily forecast.</li><li>Senior wake-up info.</li><li>Customizable.</li><li>Free.</li><li>Don&apos;t skip alerts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Allergy tracker</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pollen counts.</li><li>Air quality.</li><li>Senior asthma + allergies.</li><li>Plan medication.</li><li>Free.</li><li>Daily reference.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Complications on watch face.</li><li>Senior glance.</li><li>Live temperature.</li><li>UV index.</li><li>Free with Apple Watch.</li><li>Always visible.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free AccuWeather + alerts = senior planning</h3><p className="text-sm text-muted-foreground">Free AccuWeather senior-detailed weather. RealFeel temperatures matter for senior temperature sensitivity. Severe weather alerts critical. Pollen + air quality for allergies. Plus Apple Weather built-in if simpler. Both free. Set notifications.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
