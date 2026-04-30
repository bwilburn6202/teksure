import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff } from 'lucide-react';

export default function RobocallBlockerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robocall Blocker Apps for Seniors | TekSure" description="Stop scam calls. RoboKiller, Hiya, Truecaller for senior phone protection." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Block Robocalls</h1>
          <p className="text-lg text-muted-foreground">Stop scam calls cold.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Carrier blocking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AT&amp;T ActiveArmor — free.</li>
              <li>Verizon Call Filter — free.</li>
              <li>T-Mobile Scam Shield — free.</li>
              <li>Already on your phone, often.</li>
              <li>Blocks known scam numbers.</li>
              <li>Use first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RoboKiller</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$3.99/month or $40/year.</li>
              <li>Aggressive blocking.</li>
              <li>Plays funny &quot;answer bots&quot; for scammers.</li>
              <li>Wastes their time.</li>
              <li>Most popular paid blocker.</li>
              <li>Highly effective.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hiya / Truecaller</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with optional Premium.</li>
              <li>Caller ID enhancement.</li>
              <li>Spam warnings on incoming.</li>
              <li>User-reported numbers.</li>
              <li>Simpler than RoboKiller.</li>
              <li>Good free option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone built-in</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Phone → Silence Unknown Callers.</li>
              <li>Unknown numbers go to voicemail.</li>
              <li>Free, built-in.</li>
              <li>Scammers usually don&apos;t leave voicemail.</li>
              <li>Real callers do.</li>
              <li>Most effective single setting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Do Not Call list</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>DoNotCall.gov — register free.</li>
              <li>Reduces telemarketing (legal).</li>
              <li>Scammers ignore — but legal.</li>
              <li>Combine with phone blocker.</li>
              <li>Takes 31 days to work.</li>
              <li>Worth registering anyway.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t answer unknown numbers.</li>
              <li>Real callers leave voicemail.</li>
              <li>Hang up on robocalls immediately.</li>
              <li>Don&apos;t press buttons.</li>
              <li>Don&apos;t say &quot;yes&quot; (recorded for fraud).</li>
              <li>Block + report each scam.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">iPhone Silence Unknown is magic</h3>
            <p className="text-sm text-muted-foreground">For seniors getting too many scam calls, the most effective single setting is iPhone&apos;s &quot;Silence Unknown Callers.&quot; Enables this, unknown numbers go straight to voicemail. Real callers leave message. Scammers don&apos;t. Free, built-in, transformative. Combined with carrier&apos;s free spam filter, blocks 95% of scam calls.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
