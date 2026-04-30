import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function CaptioningCallSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Captioning Phones for Hearing-Impaired Seniors | TekSure" description="Free captioning phone services. CapTel, ClearCaptions, Hamilton CapTel for hearing loss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Captioned Phone Calls</h1>
          <p className="text-lg text-muted-foreground">Read what callers say. Free for hearing loss.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is captioned phone service?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone shows real-time captions of caller&apos;s speech.</li>
              <li>Read what they say while listening.</li>
              <li>Federally subsidized — FREE for hearing-impaired.</li>
              <li>Doctor&apos;s note required to qualify.</li>
              <li>Several providers — pick one.</li>
              <li>Game-changer for moderate hearing loss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CapTel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most popular service.</li>
              <li>Captioned phone — free with hearing loss.</li>
              <li>Big screen for reading captions.</li>
              <li>Doctor signs eligibility form.</li>
              <li>Tech support included.</li>
              <li>Apply at CapTel.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ClearCaptions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Similar to CapTel — free phone.</li>
              <li>App version for smartphones.</li>
              <li>Same FCC eligibility rules.</li>
              <li>Online and over-the-phone signup.</li>
              <li>Free with verified hearing loss.</li>
              <li>Apply at ClearCaptions.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hamilton CapTel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Available on phone, mobile app, computer.</li>
              <li>Free service for those who qualify.</li>
              <li>Same FCC subsidy.</li>
              <li>Mobile app works on iPhone + Android.</li>
              <li>Use with regular phone or smartphone.</li>
              <li>HamiltonCapTel.com to apply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How qualifying works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Need verified hearing loss.</li>
              <li>Medical professional signs form.</li>
              <li>Audiologist, doctor, hearing specialist all qualify.</li>
              <li>Self-certification + doctor stipulation.</li>
              <li>FCC funds the service — taxpayer-funded.</li>
              <li>No income or age requirement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free smartphone captioning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Live Listen — pairs with AirPods.</li>
              <li>iOS 16+: Live Captions for any audio.</li>
              <li>Android Live Caption — free, built-in.</li>
              <li>Google Live Transcribe — face-to-face conversations.</li>
              <li>Otter.ai — captions any conversation.</li>
              <li>Combine with hearing aids for best results.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free service most don&apos;t know about</h3>
            <p className="text-sm text-muted-foreground">If you have hearing loss, captioned phone service is FREE thanks to FCC subsidies — yet most people don&apos;t know it exists. You get a free captioned phone (or use the app on your existing smartphone). Captions appear in real-time as the caller speaks. Apply through CapTel, ClearCaptions, or Hamilton CapTel. Your doctor signs a quick form. Within 2 weeks you have a phone that works for hearing loss.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
