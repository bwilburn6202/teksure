import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function DarkModeGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dark Mode for Seniors | TekSure" description="Easier on eyes. Plain-English Dark Mode senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dark Mode Guide</h1>
          <p className="text-lg text-muted-foreground">Easier on eyes. Better sleep.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why dark mode?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Less eye strain at night.</li>
              <li>Better sleep — less blue light.</li>
              <li>Reduces glare in dim rooms.</li>
              <li>Some people prefer regardless.</li>
              <li>Saves OLED phone battery.</li>
              <li>Try both — pick what feels right.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone / iPad</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings, then &quot;Display &amp; Brightness&quot;.</li>
              <li>Choose &quot;Dark&quot;.</li>
              <li>Or &quot;Automatic&quot; — switches at sunset.</li>
              <li>Most apps follow system setting.</li>
              <li>Some apps have own setting.</li>
              <li>Switch back anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings, then &quot;Display&quot;.</li>
              <li>&quot;Dark theme&quot; or &quot;Dark mode&quot;.</li>
              <li>Schedule sunrise to sunset.</li>
              <li>Apps mostly follow.</li>
              <li>Quick Settings — moon icon.</li>
              <li>Pull down notification bar.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows 11</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings, then &quot;Personalization&quot;.</li>
              <li>Click &quot;Colors&quot;.</li>
              <li>&quot;Choose your mode&quot; → Dark.</li>
              <li>Apps follow when supported.</li>
              <li>Or &quot;Custom&quot; — separate apps + Windows.</li>
              <li>Browser may need separate setting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mac</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>System Settings, then &quot;Appearance&quot;.</li>
              <li>Choose &quot;Dark&quot;.</li>
              <li>Or &quot;Auto&quot; — switches by time.</li>
              <li>Most apps follow.</li>
              <li>Mail, Safari, Notes all support.</li>
              <li>Cmd + Option + B in Terminal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Browser dark mode</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chrome — chrome://flags &gt; &quot;Force Dark Mode&quot;.</li>
              <li>Safari — Reader View dark.</li>
              <li>Firefox — themes section.</li>
              <li>Extension &quot;Dark Reader&quot; — universal.</li>
              <li>Some sites have own toggle.</li>
              <li>Email apps — separate settings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When NOT to use</h3>
            <p className="text-sm text-muted-foreground">Reading lots of black text on white pages = harder in dark mode (text becomes white on black). Some find harder to read. Vision-impaired may prefer high contrast (white-on-black). Glaucoma + macular degeneration = test both. Try 1 week each. No rule — comfort wins.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
