import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function AccessibilityShortcutsIphone() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPhone Accessibility Shortcuts for Seniors | TekSure" description="Triple-click + back tap shortcuts for senior iPhone users. Speed up common tasks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Settings className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Accessibility Shortcuts</h1>
          <p className="text-lg text-muted-foreground">Make your iPhone work for YOUR needs.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Triple-click side button</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Accessibility Shortcut.</li>
              <li>Choose what triple-click does.</li>
              <li>Magnifier — for reading tiny print.</li>
              <li>Voice Control — control phone by voice.</li>
              <li>Color Filters — for color-blindness.</li>
              <li>Zoom — magnify any screen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Back Tap (iPhone 8+)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Touch → Back Tap.</li>
              <li>Double tap or triple tap back of iPhone.</li>
              <li>Triggers any action you choose.</li>
              <li>Take screenshot, open camera, mute, etc.</li>
              <li>Works through cases.</li>
              <li>Hidden gem most seniors don&apos;t know.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Speak Screen / Speak Selection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone reads any text aloud.</li>
              <li>Settings → Accessibility → Spoken Content.</li>
              <li>Toggle Speak Screen ON.</li>
              <li>Swipe down with 2 fingers from top.</li>
              <li>iPhone reads everything on screen.</li>
              <li>Great for emails, articles, books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Larger text</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Display + Brightness → Text Size.</li>
              <li>Slider makes text bigger across all apps.</li>
              <li>Or Settings → Accessibility → Display + Text Size.</li>
              <li>Then Larger Text → toggle larger sizes ON.</li>
              <li>Slider goes much bigger now.</li>
              <li>Apps that support it will adjust.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bold text + button shapes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Display + Text Size.</li>
              <li>Bold Text — easier to read.</li>
              <li>Button Shapes — outlines around buttons.</li>
              <li>Increase Contrast — clearer interface.</li>
              <li>Reduce Motion — fewer animations.</li>
              <li>All combined make iPhone much friendlier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice Control</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Control entire iPhone by voice.</li>
              <li>Settings → Accessibility → Voice Control.</li>
              <li>Say &quot;tap [word]&quot; to tap that button.</li>
              <li>Say &quot;open Messages.&quot;</li>
              <li>Say &quot;swipe up.&quot;</li>
              <li>Useful for arthritis or limited dexterity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Spend 15 minutes today</h3>
            <p className="text-sm text-muted-foreground">Open Settings → Accessibility on your iPhone and explore for 15 minutes. Try Bold Text, Larger Text, Speak Screen. Set up Triple-Click for Magnifier. Enable Back Tap for screenshots. Each takes 30 seconds to enable. These free, built-in features can dramatically improve daily iPhone use for seniors. Apple put these in for a reason — use them.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
