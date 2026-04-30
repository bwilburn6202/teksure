import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function PhoneStylusForArthritis() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Stylus for Seniors with Arthritis | TekSure" description="Best stylus pens for seniors with arthritis or shaky hands. Easier phone control." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stylus for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier phone control with a pen.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why use a stylus?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easier than fingers for arthritis sufferers.</li>
              <li>More accurate — no &quot;fat finger&quot; mistakes.</li>
              <li>Works with shaky hands too.</li>
              <li>Doesn&apos;t leave fingerprints on screen.</li>
              <li>$10–$20 for basic stylus.</li>
              <li>Apple Pencil $80+ for fancy options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Basic capacitive stylus</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Works on any touchscreen.</li>
              <li>Rubber or fabric tip.</li>
              <li>$5–$15 each — buy 2-3 for around house.</li>
              <li>Brands: AmazonBasics, MEKO, MoKo.</li>
              <li>No charging or batteries needed.</li>
              <li>Easiest entry point.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Active styluses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>More precise — fine point.</li>
              <li>Battery powered.</li>
              <li>Better for drawing or note-taking.</li>
              <li>Adonit, Wacom, Logitech brands.</li>
              <li>$30–$60 typical.</li>
              <li>Worth it if you&apos;ll use daily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Pencil + S-Pen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Pencil works with iPad.</li>
              <li>USB-C model: $79.</li>
              <li>Pencil Pro: $129.</li>
              <li>Samsung S-Pen included with Note phones.</li>
              <li>S-Pen Pro: $99.</li>
              <li>Best for serious tablet use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Choosing right stylus</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Thicker = easier to grip with arthritis.</li>
              <li>Look for triangular or fat barrel shapes.</li>
              <li>Soft-grip rubberized handles best.</li>
              <li>Test in store if possible.</li>
              <li>Try multiple — find what feels right.</li>
              <li>Many brands offer return windows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other accessibility add-ons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone grip rings on back of phone.</li>
              <li>PopSockets — easier to hold.</li>
              <li>Phone stands — desk or kitchen counter.</li>
              <li>Stylus with phone clip — never lose it.</li>
              <li>Lanyards — hangs around neck.</li>
              <li>Voice typing combined with stylus = best of both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$15 stylus = huge upgrade</h3>
            <p className="text-sm text-muted-foreground">If you have arthritis or struggle with phone touchscreens, a basic $15 capacitive stylus pen can transform your phone experience. The thicker barrel is easier to grip than tapping with fingers. The fine tip is more accurate than fingertips. Buy 3 — keep one in your purse, one on your nightstand, one in the kitchen. Many seniors say it&apos;s the best $15 they&apos;ve spent on phone accessories.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
