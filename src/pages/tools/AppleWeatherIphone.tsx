import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudSun } from 'lucide-react';

export default function AppleWeatherIphone() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Weather App for Seniors | TekSure" description="Apple Weather (formerly Dark Sky) explained for senior iPhone users. Most accurate weather." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudSun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Weather</h1>
          <p className="text-lg text-muted-foreground">Most accurate iPhone weather. Free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Built-in weather</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple acquired Dark Sky 2020.</li>
              <li>Most accurate phone weather.</li>
              <li>Free, built into iPhone.</li>
              <li>Hyper-local accuracy.</li>
              <li>Down to street-level forecasts.</li>
              <li>Severe weather notifications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hidden features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap any hour for detailed forecast.</li>
              <li>Air quality index.</li>
              <li>UV index for sun protection.</li>
              <li>Pollen + allergy levels.</li>
              <li>Visibility for fog warnings.</li>
              <li>Sunset/sunrise times.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add multiple cities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap menu icon top-right.</li>
              <li>Add cities — your home + family + travel.</li>
              <li>Swipe to switch between.</li>
              <li>Plan trips ahead.</li>
              <li>Stay aware of family weather.</li>
              <li>Up to 100 cities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weather widgets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add Weather widget to home screen.</li>
              <li>Multiple widget sizes.</li>
              <li>See current temp at glance.</li>
              <li>Lock screen widget too.</li>
              <li>Customize how much info.</li>
              <li>No need to open app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Severe weather alerts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Notifications → Weather.</li>
              <li>Toggle Severe Weather ON.</li>
              <li>Tornado, hurricane, blizzard alerts.</li>
              <li>Lightning warnings (premium feature).</li>
              <li>Free with iPhone.</li>
              <li>Combined with FEMA app — comprehensive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weather + Siri</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Siri, what&apos;s the weather today?&quot;</li>
              <li>&quot;Will it rain tomorrow?&quot;</li>
              <li>&quot;What&apos;s the weather in Phoenix?&quot;</li>
              <li>&quot;Pollen count today?&quot;</li>
              <li>&quot;UV index?&quot;</li>
              <li>Hands-free morning weather check.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t install another weather app</h3>
            <p className="text-sm text-muted-foreground">If you have iPhone, Apple Weather (free, built in) is more accurate than most paid weather apps. Don&apos;t pay for AccuWeather Premium or Weather Channel ad-free. Apple Weather has hyperlocal Dark Sky technology. Add severe weather alerts in Settings, add multiple cities for family. That&apos;s all most seniors need for weather.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
