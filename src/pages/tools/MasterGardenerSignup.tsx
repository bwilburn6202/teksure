import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function MasterGardenerSignup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Master Gardener Volunteer Program | TekSure" description="Free advanced gardening training. Plain-English guide to becoming a Master Gardener — extension office program for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Master Gardener Program</h1>
          <p className="text-lg text-muted-foreground">Free training. Volunteer service. Community.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <p className="text-sm">USDA-certified program through state Cooperative Extension. 40-50 hours of advanced gardening + horticulture training. Pay back with 40-50 volunteer hours teaching others. Senior favorite.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most states: $100-200 (training materials).</li>
              <li>Some states FREE.</li>
              <li>Discounts often for low-income, veterans.</li>
              <li>Payback: 40-50 volunteer hours = "graduate" Master Gardener.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Soil science.</li>
              <li>Plant pathology + pest management.</li>
              <li>Vegetables, fruits, ornamentals.</li>
              <li>Native plants + ecology.</li>
              <li>Composting, pollinators.</li>
              <li>Plant identification.</li>
              <li>Sustainable gardening.</li>
              <li>Community workshops.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Volunteer ways to pay back</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hotline answer at Extension office (phone/email questions).</li>
              <li>Demo gardens at libraries, schools, senior centers.</li>
              <li>Farmers market education tables.</li>
              <li>Teach community classes.</li>
              <li>Plant clinics at Home Depot / Lowes.</li>
              <li>Habitat for Humanity garden design.</li>
              <li>School + community garden builds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Search "[your county] Master Gardener Program".</li>
              <li>Or "[your state] Cooperative Extension".</li>
              <li>Application + interview.</li>
              <li>Training class (often spring or fall).</li>
              <li>Some classes online + hybrid options.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Built-in community</h3>
            <p className="text-sm text-muted-foreground">Most Master Gardeners are 55+. Built-in community of like-minded gardening seniors. Field trips, plant swaps, study groups. Best volunteer program for many seniors who love plants + community.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
