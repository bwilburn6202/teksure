import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Captions } from 'lucide-react';

export default function LiveCaptionsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Live Captions Apps for Seniors | TekSure" description="Auto-caption real-life conversations. Plain-English live caption guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Captions className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Live Captions</h1>
          <p className="text-lg text-muted-foreground">Phone reads conversations in real time.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Live Captions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Accessibility → Live Captions.</li>
              <li>Captions appear on screen for any audio.</li>
              <li>FaceTime calls captioned.</li>
              <li>Phone calls captioned.</li>
              <li>Movies/videos captioned.</li>
              <li>Real-life conversations via mic.</li>
              <li>FREE built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android Live Transcribe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE app from Google.</li>
              <li>70+ languages.</li>
              <li>Captions in real time.</li>
              <li>Save transcripts.</li>
              <li>Vibration alerts for sounds.</li>
              <li>Restaurant + meetings = senior favorite.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps for hearing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Otter.ai</strong> — captions + transcripts. Free tier.</li>
              <li><strong>Ava</strong> — designed for deaf. Tags speakers.</li>
              <li><strong>Live Transcribe</strong> (Android) — free Google.</li>
              <li><strong>Innocaption</strong> — phone calls free, FCC-funded.</li>
              <li><strong>Hamilton CapTel</strong> — captioned phone, free.</li>
              <li>All free or freemium.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Restaurants — read captions of dining companion.</li>
              <li>Doctor appointments — capture instructions.</li>
              <li>Family gatherings — follow conversations.</li>
              <li>Phone calls — read while listening.</li>
              <li>Religious services — caption sermons.</li>
              <li>TV — many built into apps now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CapTel phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Captioned phone — built-in screen.</li>
              <li>FREE if hearing loss certified.</li>
              <li>Plug into landline.</li>
              <li>Captions appear on phone screen.</li>
              <li>Federal program (Title IV).</li>
              <li>Senior favorite landline replacement.</li>
              <li>Apply at captel.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quality varies</h3>
            <p className="text-sm text-muted-foreground">Auto-captions 90-95% accurate now. Sometimes funny errors. Position phone near speaker. Quiet room = better. Combined with hearing aids = excellent communication. Don&apos;t struggle with hearing alone — free tools available.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
