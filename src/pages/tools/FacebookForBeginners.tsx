import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function FacebookForBeginners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook for Beginner Seniors | TekSure" description="Connect with family on Facebook. Plain-English Facebook setup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook for Beginners</h1>
          <p className="text-lg text-muted-foreground">Connect with family. Avoid the noise.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior Facebook</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See grandkids&apos; photos.</li>
              <li>Reconnect old friends.</li>
              <li>School + church alumni groups.</li>
              <li>Hobby groups (gardening, knitting).</li>
              <li>Local neighborhood news.</li>
              <li>Family birthday reminders.</li>
              <li>Most-used by 65+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign up at facebook.com.</li>
              <li>Strong password + 2FA.</li>
              <li>Profile photo (clear face shot).</li>
              <li>Cover photo optional.</li>
              <li>Search names of family.</li>
              <li>&quot;Add Friend&quot; — they accept.</li>
              <li>Don&apos;t over-share personal info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy settings (do FIRST)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy → Audience.</li>
              <li>Default: Friends only.</li>
              <li>Profile visible to friends only.</li>
              <li>Posts: friends only.</li>
              <li>Hide birth year.</li>
              <li>Don&apos;t public-post location.</li>
              <li>Disable face recognition.</li>
              <li>Run Privacy Checkup yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t click ads with too-good prices.</li>
              <li>&quot;Friend&quot; messages asking for money — call them direct.</li>
              <li>Quiz apps that take your data — skip.</li>
              <li>Sponsored posts misleading — don&apos;t click.</li>
              <li>Romance + friend scams common.</li>
              <li>Block strangers who friend you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Healthy Facebook</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Limit to 30 min/day.</li>
              <li>Unfollow (don&apos;t unfriend) toxic feeds.</li>
              <li>Hide political ads.</li>
              <li>Mute groups posting too much.</li>
              <li>Don&apos;t engage with rage-bait.</li>
              <li>Ignore comments section.</li>
              <li>Post things you&apos;re proud of.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Healthier social</h3>
            <p className="text-sm text-muted-foreground"><strong>Nextdoor</strong> for neighbors. <strong>Group texts</strong> for family. Many seniors find Facebook stressful — fine to skip. Phone calls + visits beat scrolling. Use Facebook only for specific connection benefits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
