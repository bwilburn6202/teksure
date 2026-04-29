import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function EnergyAuditFree() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Energy Audit for Seniors | TekSure" description="Free home energy audit. Plain-English guide for senior homeowners saving on bills." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Energy Audit</h1>
          <p className="text-lg text-muted-foreground">Find energy waste. Save $200-1,000/yr.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Utility company</strong> — most offer FREE audit.</li>
              <li><strong>Weatherization Assistance</strong> — free for income-eligible.</li>
              <li><strong>State energy office</strong> — programs.</li>
              <li><strong>DOE Home Energy Score</strong> — government rating.</li>
              <li>Pro audit ($200-500) — comprehensive but pay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audit finds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drafty windows + doors.</li>
              <li>Insulation gaps.</li>
              <li>Inefficient appliances.</li>
              <li>Air leaks.</li>
              <li>HVAC issues.</li>
              <li>Phantom power use (electronics on standby).</li>
              <li>Specific cost-saving recommendations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY simple savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>LED bulbs everywhere.</li>
              <li>Smart thermostat.</li>
              <li>Caulk windows + doors.</li>
              <li>Weather strip.</li>
              <li>Insulate water heater ($30 wrap).</li>
              <li>Insulate pipes (foam wrap).</li>
              <li>Programmable thermostat.</li>
              <li>Run dishwasher full.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bigger upgrades</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Attic insulation upgrade ($1K-3K).</li>
              <li>Window replacement ($300-1,000/window).</li>
              <li>Heat pump water heater.</li>
              <li>Heat pump (HVAC).</li>
              <li>Solar panels.</li>
              <li>Insulation rebates often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weatherization Assistance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE for income-eligible (200% poverty).</li>
              <li>Up to $7,500 home upgrades.</li>
              <li>Insulation, weather stripping, HVAC.</li>
              <li>Many seniors qualify.</li>
              <li>Apply through state energy office.</li>
              <li>liheap.acl.gov — find program.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior tax credits 2026</h3>
            <p className="text-sm text-muted-foreground">Insulation + windows + heat pump + solar = 30% federal tax credit. Plus state rebates. Plus utility rebates. Stack them. Senior fixed income especially benefits. Lower bills permanently. Free audit shows where to start.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
