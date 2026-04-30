import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function PowerOutagePrep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Power Outage Prep for Seniors | TekSure" description="How to prepare for and survive power outages safely. Senior-specific guidance." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Power Outage Prep</h1>
          <p className="text-lg text-muted-foreground">Be ready when lights go out.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Register with utility company</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call utility — ask about Medical Priority list.</li>
              <li>Free service for medical equipment users.</li>
              <li>Oxygen concentrators, CPAP, dialysis, etc.</li>
              <li>You get priority restoration.</li>
              <li>Sometimes notified before planned outages.</li>
              <li>Doctor signature usually required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Backup power options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Portable power station — Jackery, EcoFlow ($300+).</li>
              <li>Charges phones, runs CPAP, lights.</li>
              <li>Solar panels can recharge them.</li>
              <li>Small generator — propane or gas ($500+).</li>
              <li>Whole-house generator — Generac ($5,000+).</li>
              <li>Even a $50 portable battery helps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phone + communication</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Keep phone fully charged when storms approach.</li>
              <li>2+ portable chargers (power banks).</li>
              <li>Hand-crank emergency radio with phone charger.</li>
              <li>Car phone charger works during outages.</li>
              <li>Text uses less power than calls.</li>
              <li>Save cell battery for emergencies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heat + cold safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cold: layer clothing, blankets, hats indoors.</li>
              <li>Never use grill or generator indoors — CO poisoning.</li>
              <li>Heat: open windows nighttime, close + shade by day.</li>
              <li>Stay hydrated — even cool day matters.</li>
              <li>Battery-powered fans help in heat.</li>
              <li>Visit air-conditioned cooling center if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Food safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Keep refrigerator + freezer closed as long as possible.</li>
              <li>Refrigerator stays cold ~4 hours unopened.</li>
              <li>Freezer stays cold ~48 hours full, ~24 hours half.</li>
              <li>Cooler with ice for important meds (insulin).</li>
              <li>When in doubt, throw it out.</li>
              <li>Discard meat above 40°F for 2+ hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to leave home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Outage extending beyond 24 hours.</li>
              <li>Home temperature unsafe (too hot/cold).</li>
              <li>Medical equipment can&apos;t function.</li>
              <li>Family or hotel as backup.</li>
              <li>Red Cross shelters available in disasters.</li>
              <li>Don&apos;t hesitate — pride doesn&apos;t keep you safe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get on the medical priority list</h3>
            <p className="text-sm text-muted-foreground">If you use any medical equipment that requires electricity — CPAP, oxygen concentrator, nebulizer, dialysis machine, electric wheelchair — call your electric utility today and ask about their medical priority program. It&apos;s free, takes 10 minutes to sign up, and ensures you&apos;re among the first restored after outages. Your doctor signs a form. This is one of the most important calls a senior with medical needs can make.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
