import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

export default function AmericasTestKitchenApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="America's Test Kitchen App for Senior Cooks | TekSure" description="ATK + Cook&apos;s Illustrated app for serious senior cooks. Tested recipes + reviews." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">America&apos;s Test Kitchen</h1>
          <p className="text-lg text-muted-foreground">Tested recipes. Trusted reviews.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>10,000+ tested recipes.</li>
              <li>Cook&apos;s Illustrated archive.</li>
              <li>Equipment + ingredient reviews.</li>
              <li>$60/year — annual subscription.</li>
              <li>14-day free trial.</li>
              <li>Best paid recipe site.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior cooks love it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Every recipe rigorously tested.</li>
              <li>Explains WHY techniques work.</li>
              <li>Equipment ratings before buying.</li>
              <li>Best knife, best skillet recommendations.</li>
              <li>No fluff — just what works.</li>
              <li>Senior cooks especially trust them.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Step-by-step cooking mode.</li>
              <li>Adjustable text size.</li>
              <li>Ingredient list to grocery.</li>
              <li>Save recipe collections.</li>
              <li>Search by ingredient.</li>
              <li>Reviews from other home cooks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">All Access subscription</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$59.99/year for full access.</li>
              <li>Includes Cook&apos;s Illustrated, Cook&apos;s Country.</li>
              <li>TV show videos.</li>
              <li>Reviews + buying guides.</li>
              <li>Online cooking school.</li>
              <li>One subscription for everything.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PBS America&apos;s Test Kitchen show</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free on PBS — local station.</li>
              <li>PBS Passport — full archive.</li>
              <li>$60/year for PBS Passport (donation).</li>
              <li>Includes ATK + Masterpiece + Ken Burns.</li>
              <li>Better deal than ATK alone.</li>
              <li>Senior favorite.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs NYT Cooking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NYT — more current trends, beautiful photos.</li>
              <li>ATK — more rigorous testing.</li>
              <li>Both excellent.</li>
              <li>NYT $5/month, ATK $5/month.</li>
              <li>Many subscribe to both.</li>
              <li>Or alternate yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Watch on PBS first — free</h3>
            <p className="text-sm text-muted-foreground">Before paying $60/year, watch ATK on PBS — local station has show free. If you love their style, subscribe through PBS Passport ($60/year donation) to get ATK plus all PBS content. Better value than ATK direct subscription. Many senior cooks call ATK the best food brand on television.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
