import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Warehouse } from 'lucide-react';

export default function GarageDoorOpenerSmart() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Garage Door Openers | TekSure" description="Open and close the garage from your phone. Plain-English picks for myQ, Tailwind, and other smart garage door controllers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Warehouse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Garage Door Openers</h1>
          <p className="text-lg text-muted-foreground">"Did I close the garage?" — check from your phone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bother</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check if garage is open from anywhere — at restaurant, on vacation.</li>
              <li>Close it from phone. No driving home.</li>
              <li>Get alert if left open for 15+ minutes.</li>
              <li>Let in dog walker, contractor, package without giving keys.</li>
              <li>Auto-close at sundown OR when you leave the neighborhood.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best picks (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chamberlain MyQ</strong> ($30-50) — fits most garage door brands. Reliable. Free open/close in app. Schedules cost $1/mo.</li>
              <li><strong>Tailwind iQ3</strong> ($100) — works with any opener. HomeKit + Google + Alexa. No subscription.</li>
              <li><strong>Meross Smart Garage Door Opener</strong> ($45) — cheapest with Apple HomeKit support. No subscription.</li>
              <li><strong>Built-in smart openers</strong> — newer Chamberlain LiftMaster openers come with WiFi built in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup — DIY in 30 minutes</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Buy a kit. Each kit comes with: hub + door sensor.</li>
              <li>Mount hub on garage ceiling near opener.</li>
              <li>Wire 2 wires to opener terminals (manual shows where).</li>
              <li>Stick the door sensor on the door itself.</li>
              <li>Plug hub into outlet.</li>
              <li>Download app. Connect to wifi.</li>
              <li>Test from phone — opens and closes.</li>
            </ol>
            <p className="text-sm mt-3">If wiring scares you — handyman charges $50-100 to install.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">myQ subscription gotcha</h2>
            <p className="text-sm">Chamberlain MyQ&apos;s app is free for basic open/close, but charges $1-3/month for: scheduled open/close, IFTTT/Alexa link, and "auto close after X minutes". Many features Tailwind/Meross include free.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best automations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto-close at 10 PM nightly.</li>
              <li>Notify if open more than 15 minutes.</li>
              <li>Auto-close when phone leaves the neighborhood.</li>
              <li>Voice command: "Hey Google, close the garage."</li>
              <li>Apple Watch: tap to open as you pull into driveway.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Amazon Key</h3>
            <p className="text-sm text-muted-foreground">If you have myQ, Amazon delivery drivers can put packages INSIDE your garage instead of leaving on porch. Free service. Reduces porch piracy. Driver only opens during delivery, garage closes after. Opt in at amazon.com/key.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
