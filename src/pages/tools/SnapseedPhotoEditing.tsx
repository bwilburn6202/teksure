import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SnapseedPhotoEditing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Snapseed Photo Editing for Seniors | TekSure" description="Free professional photo editor by Google. Snapseed for senior phone photographers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Snapseed</h1>
          <p className="text-lg text-muted-foreground">Free + powerful photo editor.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Snapseed?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free — no premium tier.</li>
              <li>By Google — high quality.</li>
              <li>Pro features for free.</li>
              <li>Works on iPhone + Android.</li>
              <li>No ads.</li>
              <li>Beloved by photographers worldwide.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best simple edits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tune Image — basic brightness/contrast.</li>
              <li>Details — sharpen blurry photos.</li>
              <li>Crop — fix composition.</li>
              <li>Rotate — straighten horizons.</li>
              <li>Vignette — darken edges.</li>
              <li>Tap and tweak each.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Healing tool</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Remove unwanted objects from photos.</li>
              <li>Tap Healing — drag finger over object.</li>
              <li>Snapseed fills in background.</li>
              <li>Remove tourists from vacation photos.</li>
              <li>Remove clutter from background.</li>
              <li>Magic-feeling feature.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Selective + brush</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjust just one part of photo.</li>
              <li>Brighten a face without changing sky.</li>
              <li>Darken sky without affecting people.</li>
              <li>Tap Selective — drop pin on area.</li>
              <li>Adjust brightness/saturation just there.</li>
              <li>Pro-level editing made simple.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Filters + looks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pre-made styles — one tap to apply.</li>
              <li>Black + white, vintage, drama, etc.</li>
              <li>Adjust strength of each.</li>
              <li>&quot;Save as Look&quot; for your custom edits.</li>
              <li>Apply to multiple photos.</li>
              <li>Consistent style across photo album.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free editors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Photos — built-in editing on iPhone.</li>
              <li>Google Photos — basic edits + auto-enhance.</li>
              <li>Adobe Photoshop Express — free version.</li>
              <li>Lightroom Mobile — free with Adobe account.</li>
              <li>VSCO — Instagram-style filters.</li>
              <li>Most have free options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Better than buying photo editing software</h3>
            <p className="text-sm text-muted-foreground">In the past, photo editing software cost $100+. Snapseed gives you nearly all those professional features completely free, on your phone. Edit photos in 5 minutes, share via text or social media. The Healing tool alone (remove objects from photos) is mind-blowing. Many seniors say it&apos;s one of the most useful free apps they&apos;ve discovered.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
