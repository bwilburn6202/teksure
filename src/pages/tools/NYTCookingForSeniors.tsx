import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

export default function NYTCookingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="NYT Cooking for Senior Cooks | TekSure" description="20,000+ tested recipes. NYT Cooking app guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ChefHat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">NYT Cooking</h1>
          <p className="text-lg text-muted-foreground">20k tested recipes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior favorite</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>20,000+ tested recipes.</li><li>Reviews + tweaks.</li><li>Substitutions noted.</li><li>Step-by-step photos.</li><li>$5/month.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Save favorites in collections.</li><li>Search by ingredient.</li><li>Quick weeknight category.</li><li>Save recipes offline.</li><li>Print easily.</li><li>Senior cookbook digitized.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Newsletter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sam Sifton emails.</li><li>5x weekly suggestions.</li><li>Sunday roundup.</li><li>Senior inspiration.</li><li>Beat dinner ruts.</li><li>Free with subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best recipes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sam Sifton anything.</li><li>Most-saved by readers.</li><li>5-star ratings.</li><li>Read reviews first.</li><li>Adjust to taste.</li><li>Senior reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Allrecipes — free.</li><li>Smitten Kitchen blog.</li><li>America&apos;s Test Kitchen.</li><li>YouTube cooking channels.</li><li>Senior thrifty options.</li><li>NYT worth $60/year if cooking lots.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Read reviews before cooking.</li><li>Top reviewer tweaks.</li><li>iPad in kitchen + stand.</li><li>Adjust salt + spice.</li><li>Save favorites.</li><li>Print emergency backup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$60/yr = senior dinner solver</h3><p className="text-sm text-muted-foreground">Many seniors stuck in 7-recipe rut. NYT Cooking $60/year = 20,000+ tested recipes, daily inspiration. Sam Sifton newsletter Sunday lifts dinner ruts. Reviews tell you what works. iPad in kitchen + recipe = senior cooking renaissance. Worth it.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
