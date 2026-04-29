import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function BurnerPhoneTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Burner Phone Tips — When You Need a 2nd Number | TekSure" description="Selling on Craigslist, online dating, escape from harassment. Plain-English picks for getting a second phone number safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Burner Phone Tips</h1>
          <p className="text-lg text-muted-foreground">2nd number for privacy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you need a second number</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Selling on Craigslist, Facebook Marketplace.</li>
              <li>Online dating apps.</li>
              <li>Signing up for unknown services.</li>
              <li>Getting away from a harasser or estranged family.</li>
              <li>Business calls separated from personal.</li>
              <li>Travel — temporary number for sketchy services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheap virtual numbers (best)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Voice</strong> — FREE forever for personal use. Real US number. Calls + texts. Voicemail. Use any phone.</li>
              <li><strong>TextNow</strong> — FREE with ads. iOS/Android.</li>
              <li><strong>Hushed</strong> — $5-7/mo. Disposable numbers for short-term use.</li>
              <li><strong>Burner app</strong> — $5/mo. Throwaway numbers as you need.</li>
              <li><strong>Apple iCloud Hide My Email</strong> — different. For email only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Voice setup (FREE)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>voice.google.com</strong>.</li>
              <li>Sign in with Gmail.</li>
              <li>Pick a number (search by area code).</li>
              <li>Verify your real cell number.</li>
              <li>Get a US number. Free forever.</li>
              <li>Calls forward to your real cell, OR ring inside Google Voice app.</li>
              <li>Texts in app or as email.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Physical burner phone (rare)</h2>
            <p className="text-sm">If you really need a separate phone (escaping abuse):</p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
              <li>Walmart Tracfone or Family Mobile — $30-50, prepaid SIM.</li>
              <li>Pay cash. Don&apos;t register your real name.</li>
              <li>Buy at store far from home/work.</li>
              <li>Don&apos;t link to your real email or accounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Domestic violence resources</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re escaping abuse — call <strong>National Domestic Violence Hotline 1-800-799-7233</strong>. They have safety planning, including phone safety. Free, confidential. Many shelters provide secure phones.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
