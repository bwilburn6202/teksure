import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SocialMediaPrivacyDeep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Media Privacy Deep Dive for Seniors | TekSure" description="Lock down Facebook, Instagram, TikTok privacy. Protect senior info from scammers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Social Media Privacy</h1>
          <p className="text-lg text-muted-foreground">Lock down before scammers find you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Facebook lockdown</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy.</li>
              <li>Future posts: Friends only.</li>
              <li>Past posts: Limit to Friends.</li>
              <li>Friend list: Only Me.</li>
              <li>Hide birth year.</li>
              <li>Phone + email: Friends only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Instagram private</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy → Private Account.</li>
              <li>Only approved followers see posts.</li>
              <li>Hide location data.</li>
              <li>Don&apos;t tag location in posts.</li>
              <li>Filter who can DM you.</li>
              <li>Remove face from profile pic if concerned.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t post these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Travel plans before/during trip.</li>
              <li>House photos with address.</li>
              <li>Children&apos;s school name.</li>
              <li>Daily routine.</li>
              <li>Phone number.</li>
              <li>Financial info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TikTok privacy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Privacy → Private Account.</li>
              <li>Filter Restricted Mode ON.</li>
              <li>Disable comments from strangers.</li>
              <li>Disable DMs from anyone.</li>
              <li>Don&apos;t share location data.</li>
              <li>Especially important.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After lockdown</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Review monthly.</li>
              <li>Privacy settings change with platform updates.</li>
              <li>Re-lockdown after iPhone updates.</li>
              <li>Watch for new tracking features.</li>
              <li>Tell friends to do same.</li>
              <li>Privacy is ongoing practice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For grandchildren too</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t post grandkid photos publicly.</li>
              <li>Friends-only posts.</li>
              <li>Predators scan public profiles.</li>
              <li>Don&apos;t identify schools.</li>
              <li>Don&apos;t announce when home alone.</li>
              <li>Family privacy is grandparent responsibility too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">15-minute privacy review</h3>
            <p className="text-sm text-muted-foreground">Spend 15 minutes locking down social media this weekend. Facebook, Instagram, TikTok — set to private. Hide birth year, phone, address. Review past posts. Restrict who messages you. This single audit reduces senior scam targeting by 80%. Many grandparents post too publicly without realizing risk.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
