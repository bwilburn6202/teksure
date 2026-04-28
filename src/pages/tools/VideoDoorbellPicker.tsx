import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DoorOpen, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Doorbell {
  name: string;
  price: string;
  monthly: string;
  whoFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const DOORBELLS: Doorbell[] = [
  {
    name: 'Ring Battery Doorbell',
    price: '$99 (Plus model $149)',
    monthly: '$5/mo for video history (optional)',
    whoFor: 'Best mainstream pick. Battery model means no wiring.',
    pros: [
      'Largest accessory ecosystem (chimes, cameras).',
      'No subscription needed for live view.',
      'Battery lasts 6-12 months between charges.',
    ],
    cons: [
      'Recording history requires the $5/mo Ring Protect.',
      'Owned by Amazon — privacy concerns about police data sharing.',
    ],
    link: 'https://ring.com/doorbells',
  },
  {
    name: 'Google Nest Doorbell (Battery)',
    price: '$180',
    monthly: 'Free 3-hour event history; $8/mo for full',
    whoFor: 'Google household. Best free tier of any major brand.',
    pros: [
      'Free 3 hours of event recording (no subscription needed).',
      'Smart sees-people / sees-packages alerts on free tier.',
      'Excellent video quality.',
    ],
    cons: [
      'Battery lasts 2-6 months — shorter than Ring.',
      'Best with Google Home; works less well with Alexa.',
    ],
    link: 'https://store.google.com/us/product/nest_doorbell_battery',
  },
  {
    name: 'Eufy E340 (local storage)',
    price: '$180',
    monthly: 'No subscription — stores videos on the doorbell itself',
    whoFor: 'Anyone allergic to monthly fees. Stores video locally, no cloud needed.',
    pros: [
      'Zero subscription fees, ever.',
      'Dual cameras — one for face, one for packages on the porch.',
      'On-device AI for person/package detection.',
    ],
    cons: [
      'Eufy had a privacy incident in 2022 (resolved); some lingering trust concerns.',
      'Limited Apple Home support.',
    ],
    link: 'https://us.eufy.com/products/t8214321',
  },
  {
    name: 'Apple HomeKit Secure Doorbell (Logitech Circle View)',
    price: '$200',
    monthly: 'iCloud+ ($1-$10/mo for video storage)',
    whoFor: 'Apple-house users who want privacy.',
    pros: [
      'End-to-end encrypted video.',
      'iCloud+ stores 10 days of recordings.',
      'No third-party access — Apple does not see your video.',
    ],
    cons: [
      'iPhone-only.',
      'Higher price.',
    ],
    link: 'https://www.logitech.com/en-us/products/cameras/circle-view-doorbell.html',
  },
  {
    name: 'Wyze Video Doorbell Pro',
    price: '$80',
    monthly: '$4/mo Cam Plus optional',
    whoFor: 'Cheapest mainstream pick. Battery model, 10-minute install.',
    pros: [
      'Lowest price for a real video doorbell.',
      'Decent video quality at the price.',
    ],
    cons: [
      'Wyze had a security incident in 2023; rebuilding trust slowly.',
      'Smaller ecosystem than Ring or Nest.',
    ],
    link: 'https://www.wyze.com/products/wyze-video-doorbell-pro',
  },
];

export default function VideoDoorbellPicker() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Video Doorbell Picker"
        description="Ring, Nest, Eufy, Apple HomeKit, or Wyze — which video doorbell fits you? Honest comparison of price, monthly fees, privacy, and ecosystem."
        path="/tools/video-doorbell-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <DoorOpen className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Video Doorbell Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See who is at the door without getting up. Five honest options compared.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Video Doorbell Picker' }]} />

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">What a video doorbell actually does</p>
              <p className="text-xs text-muted-foreground mb-2">
                When someone presses the button OR walks up to your door, the doorbell pings your phone or smartwatch. You can see who is there and talk to them through the doorbell — without opening the door, without getting up.
              </p>
              <p className="text-xs text-muted-foreground">
                Most also keep a recording so you can see who came by while you were out (delivery person, package thief, neighbour kid).
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? DOORBELLS : DOORBELLS.slice(0, 3)).map(d => (
              <Card key={d.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{d.name}</p>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant="outline">{d.price}</Badge>
                      <Badge variant="outline" className="text-xs">{d.monthly}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {d.whoFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {d.pros.map((p, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{p}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {d.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={d.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    View on official site <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 5 picks</Button>
            )}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Three things people do not realize before buying</p>
                <ol className="space-y-1.5 mt-2">
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">1.</span><span>Most "free trial" cloud-recording subscriptions auto-bill after the trial. Set a calendar reminder.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">2.</span><span>Battery doorbells need recharging every 2-12 months. Wired models do not — but require an existing doorbell wire.</span></li>
                  <li className="flex gap-2"><span className="text-amber-700 dark:text-amber-300 font-semibold">3.</span><span>Notifications can become noise. Tune the motion zones to your porch only — or you get pinged every time a car drives by.</span></li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/smart-home-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Home Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair with bulbs and plugs.</p>
              </Link>
              <Link to="/tools/smart-lock-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Smart Lock Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">See AND unlock from one phone.</p>
              </Link>
              <Link to="/tools/home-security-camera-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Home Security Camera</p>
                <p className="text-xs text-muted-foreground mt-0.5">For other angles around the house.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: install a doorbell that matches your phone — Ring works great everywhere, but Nest is smoother on Android, Apple HomeKit doorbells are smoother on iPhone.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
