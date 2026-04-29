import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu } from 'lucide-react';

export default function RaspberryPiSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Raspberry Pi for Senior Hobbyists | TekSure" description="Tiny computer for tinkering. Plain-English Raspberry Pi guide for senior makers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cpu className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Raspberry Pi for Seniors</h1>
          <p className="text-lg text-muted-foreground">$80 computer the size of credit card.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is it?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Small computer designed for learning + tinkering.</li>
              <li>Raspberry Pi 5 = $80. Or Pi 4 = $35.</li>
              <li>Plug in keyboard, mouse, monitor — full computer.</li>
              <li>Originally for kids, popular with retired engineers.</li>
              <li>Endless project ideas.</li>
              <li>Active community + tutorials.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior project ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pi-hole</strong> — block ads + scams network-wide.</li>
              <li><strong>Home automation hub</strong> — Home Assistant.</li>
              <li><strong>Photo frame</strong> — display family photos rotation.</li>
              <li><strong>Weather station</strong> — local data.</li>
              <li><strong>Bird feeder camera</strong> — capture birds.</li>
              <li><strong>Retro gaming console</strong> — play 1980s arcade games.</li>
              <li><strong>Magic mirror</strong> — wall mirror that shows time + news.</li>
              <li><strong>Music server</strong> — Plex / Jellyfin for whole house.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pi-hole = senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$60-100 setup (Pi + accessories).</li>
              <li>Blocks ads on whole home network.</li>
              <li>Blocks tracking + scam sites.</li>
              <li>Faster internet (no ads loading).</li>
              <li>Family-wide protection.</li>
              <li>Tutorial: pi-hole.net.</li>
              <li>Many retired tech workers love this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter kit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pi 5 with case, charger, microSD card $130 starter kit.</li>
              <li>Buy on canakit.com or Amazon.</li>
              <li>Use existing keyboard/mouse/monitor (HDMI).</li>
              <li>Free OS (Raspberry Pi OS).</li>
              <li>Free tutorials at raspberrypi.com.</li>
              <li>Library may have Pi for borrowing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learning resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>raspberrypi.com</strong> — official tutorials.</li>
              <li><strong>YouTube</strong> — &quot;Raspberry Pi for beginners&quot; channels.</li>
              <li><strong>Reddit r/raspberry_pi</strong> — friendly community.</li>
              <li><strong>Adafruit</strong> — projects + parts.</li>
              <li><strong>Local makerspaces</strong> — hands-on classes.</li>
              <li><strong>Coursera + edX</strong> free courses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for which seniors</h3>
            <p className="text-sm text-muted-foreground">Retired engineers, tech workers, teachers, hobbyists. Low entry cost, deep learning curve. Hours of tinkering. Many seniors say best retirement hobby. Connect with grandkids over shared tech project. Make something useful + meaningful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
