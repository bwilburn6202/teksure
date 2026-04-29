import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Accessibility } from 'lucide-react';

export default function AccessibleTravelGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Accessible Travel Guide for Seniors | TekSure" description="Wheelchair, mobility-friendly travel. Plain-English picks for accessible airlines, hotels, cruises, and tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Accessibility className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Accessible Travel</h1>
          <p className="text-lg text-muted-foreground">For seniors with mobility, vision, hearing needs.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Airlines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal law — wheelchair assistance MUST be free.</li>
              <li>Request via airline app/site 24+ hours before flight.</li>
              <li>Tip helper $5-10 (not required but appreciated).</li>
              <li>Pre-board automatically with disability designation.</li>
              <li>Aisle wheelchair available on planes — onboard transfers.</li>
              <li>Powered wheelchairs check at gate, not luggage.</li>
              <li>Service animals welcome (papers required).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hotels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"ADA accessible rooms" — wider doorways, roll-in showers, grab bars.</li>
              <li>Always book directly so you can request specific accessibility features.</li>
              <li>Confirm 24h before arrival — staff sometimes give away accessible rooms.</li>
              <li>Marriott Bonvoy + Hilton have detailed accessibility filters.</li>
              <li>Booking.com has "Accessibility" filter.</li>
              <li>Visit airbnb.com/accessibility — vacation rentals filter for accessibility features.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cruises</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most major lines have ADA-accessible cabins.</li>
              <li>Book early — small number per ship.</li>
              <li>Disney + Royal Caribbean rated highest for accessibility.</li>
              <li>Wheelchair rental on ship for shore excursions.</li>
              <li>Some shore excursions wheelchair-friendly, some not — check.</li>
              <li>Special-needs cruises exist (Autism on Sea, Adventures by Disney).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools + apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>WheelMate</strong> — accessible toilets/parking worldwide. Free.</li>
              <li><strong>AccessNow</strong> — crowdsourced accessible places.</li>
              <li><strong>AbleScout</strong> — accessible travel community.</li>
              <li><strong>Apple Maps</strong> — wheelchair-accessible transit + entrances.</li>
              <li><strong>NPS app</strong> — National Park accessibility info.</li>
              <li><strong>Mobility International USA (miusa.org)</strong> — research + advice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Equipment rental</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Scootaround</strong> — rent scooters/wheelchairs at most cruise ports + cities.</li>
              <li><strong>Cloud of Goods</strong> — also walkers, knee walkers, oxygen.</li>
              <li><strong>Special Needs at Sea</strong> — for cruise ships specifically.</li>
              <li><strong>Disneyland / Disney World</strong> — wheelchair rental at gate.</li>
              <li>Doctor letter helps cross border with medical equipment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Travel agents who specialize</h3>
            <p className="text-sm text-muted-foreground">For first complex trip — hire travel agent specializing in accessible travel. They handle ALL accessibility logistics. Search "travel agent for [your need] travel". Cost ~$100-300, saves headaches.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
