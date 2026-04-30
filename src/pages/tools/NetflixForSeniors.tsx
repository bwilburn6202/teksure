import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function NetflixForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Netflix for Seniors | TekSure" description="Get the most from Netflix. Plain-English guide for senior streamers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Netflix for Seniors</h1>
          <p className="text-lg text-muted-foreground">Most popular streaming. Worth $7-23/mo.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plan picks 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Standard with Ads</strong> — $8/mo. 1080p HD. Limited ads.</li>
              <li><strong>Standard</strong> — $18/mo. No ads. 1080p HD.</li>
              <li><strong>Premium</strong> — $25/mo. 4K + 4 screens.</li>
              <li>Most seniors fine with ad-supported tier.</li>
              <li>Share Standard or Premium with family ($8 extra/member).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite shows</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Crown</strong> — British royals.</li>
              <li><strong>Grace and Frankie</strong> — senior friendship.</li>
              <li><strong>Old Lady Drama</strong> — many British shows.</li>
              <li><strong>Last Tango in Halifax</strong> — older couple.</li>
              <li><strong>Frasier</strong> — classic sitcom revival.</li>
              <li><strong>Documentaries</strong> — David Attenborough, history.</li>
              <li><strong>Cooking shows</strong> — Great British Bake Off.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Subtitles always on (helps hearing).</li>
              <li>Subtitle size large + high contrast.</li>
              <li>Audio description — narration of action.</li>
              <li>Profile picture for easy identifying.</li>
              <li>Save to &quot;My List&quot; for queue.</li>
              <li>Disable autoplay (Settings).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find good content</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Reelgood.com</strong> — what&apos;s on what service.</li>
              <li><strong>JustWatch.com</strong> — search any movie/show.</li>
              <li><strong>NYT Watching</strong> — curated recommendations.</li>
              <li>Netflix Top 10 daily.</li>
              <li>Family member recs.</li>
              <li>Don&apos;t doom-scroll — pick one show.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to cancel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Going months without watching.</li>
              <li>Library has free streaming (Hoopla, Kanopy).</li>
              <li>Subscribe → binge favorite show → cancel → resubscribe months later.</li>
              <li>Easy cancel anytime (no contract).</li>
              <li>Can re-subscribe instantly.</li>
              <li>Many seniors rotate streaming services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stream to TV</h3>
            <p className="text-sm text-muted-foreground">Smart TV (2018+) has Netflix built-in. Or use Roku ($30), Apple TV ($150), Fire TV Stick ($50). Cast from phone via AirPlay or Chromecast. Big screen better than phone for seniors. See /tools/streaming-device-compare.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
