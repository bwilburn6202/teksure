import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function ThumbtackForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Thumbtack for Senior Homeowners | TekSure" description="Hire local pros for home repair + services. Thumbtack app for senior homeowners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Thumbtack</h1>
          <p className="text-lg text-muted-foreground">Hire local pros for home services.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Thumbtack does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find local pros — plumbers, electricians, etc.</li>
              <li>Free for customers.</li>
              <li>Get multiple quotes.</li>
              <li>Read reviews + ratings.</li>
              <li>Background-checked pros.</li>
              <li>Massive coverage in major cities.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plumbing repairs.</li>
              <li>Electrical work.</li>
              <li>Lawn + tree care.</li>
              <li>Snow removal.</li>
              <li>Painting + handyman.</li>
              <li>Cleaning services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Describe your project.</li>
              <li>Get matched with 5-10 pros.</li>
              <li>Pros send quotes.</li>
              <li>You compare + pick.</li>
              <li>Hire through app or directly.</li>
              <li>Pay pro directly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Compared to alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Angi (formerly Angie&apos;s List) — similar.</li>
              <li>HomeAdvisor — owned by Angi.</li>
              <li>TaskRabbit — small task focus.</li>
              <li>Yelp — also has service pros.</li>
              <li>Nextdoor — neighbor recommendations.</li>
              <li>Multiple quotes still wisest approach.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vet the pros</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read multiple reviews.</li>
              <li>Verify license + insurance.</li>
              <li>Check Better Business Bureau.</li>
              <li>Get written quotes.</li>
              <li>Don&apos;t pay 100% upfront.</li>
              <li>Half down, balance on completion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t let strangers in unaccompanied.</li>
              <li>Friend or family member present if possible.</li>
              <li>Watch them work.</li>
              <li>Don&apos;t pay cash for big jobs.</li>
              <li>Get receipts.</li>
              <li>Trust your instincts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free quote alternative to phone book</h3>
            <p className="text-sm text-muted-foreground">For seniors who used to use the phone book to find handyman/plumber, Thumbtack works similarly but in app form. Get 5+ quotes in 30 minutes. Read reviews. Pick the best fit. Free for customers. Combined with Nextdoor neighbor recommendations + Yelp reviews, you&apos;ll find quality local pros.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
