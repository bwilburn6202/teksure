import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserX } from 'lucide-react';

export default function SocialMediaFakeAccounts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Media Fake Accounts | TekSure" description="Spot + report fake accounts. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserX className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fake Account Defense</h1>
          <p className="text-lg text-muted-foreground">Imposters using your photos.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why it happens</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Scammers want to friend your contacts.</li>
              <li>Then ask them for money.</li>
              <li>They copy your photos + name.</li>
              <li>Common on Facebook + Instagram.</li>
              <li>Often start &quot;Hey, I have a new account&quot;.</li>
              <li>Family members are the targets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spot fake accounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Brand new account (recent).</li>
              <li>Few photos.</li>
              <li>Few friends.</li>
              <li>Random message you about money / gift cards.</li>
              <li>Can&apos;t video chat.</li>
              <li>Doesn&apos;t know mutual jokes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If yours impersonated</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t panic — common.</li>
              <li>Report to platform — fast.</li>
              <li>Facebook: profile, then &quot;Report&quot; → &quot;Pretending to be someone&quot;.</li>
              <li>Instagram: same flow.</li>
              <li>Tell family + friends.</li>
              <li>Post on real account warning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prevent it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make profile private.</li>
              <li>Friends only see photos.</li>
              <li>Don&apos;t post profile pic high-res.</li>
              <li>2FA on all accounts.</li>
              <li>Don&apos;t accept all friend requests.</li>
              <li>Verify mutual friends real.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If contact gets fake message</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t respond from fake account.</li>
              <li>Report it.</li>
              <li>Tell person message came from real you.</li>
              <li>Phone call to verify all requests.</li>
              <li>Family code word for emergencies.</li>
              <li>Money requests = ALWAYS verify.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reverse image search</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Suspicious profile? Right-click photo.</li>
              <li>Google Images search by image.</li>
              <li>Or TinEye.com.</li>
              <li>See if photo used elsewhere.</li>
              <li>Stock photo = scammer.</li>
              <li>Different name = scammer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family code word</h3>
            <p className="text-sm text-muted-foreground">Set a family code word — like &quot;tomato&quot;. Anyone asking for emergency money MUST say code word. Scammer can fake voice now (AI). Fake video face. Code word = real verification. Tell every family member. Pre-share it. Senior protection.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
