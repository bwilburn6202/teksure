import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function SmartKitchenScalesApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Kitchen Scales for Seniors | TekSure" description="Smart kitchen scales that connect to phone apps. Better baking + portion control for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Kitchen Scales</h1>
          <p className="text-lg text-muted-foreground">Better baking + portion control.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why a kitchen scale matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Baking by weight is more accurate than cups.</li>
              <li>Better, more consistent results.</li>
              <li>Portion control for diabetics + heart patients.</li>
              <li>Match recipes from European or pro cookbooks.</li>
              <li>Less mess — no measuring cups to wash.</li>
              <li>Helpful for portion-controlled meals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best basic scales</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>OXO Good Grips — $50, large display, easy to read.</li>
              <li>Escali Primo — $25, popular budget option.</li>
              <li>Etekcity — $20, basic but reliable.</li>
              <li>Battery powered — no cord clutter.</li>
              <li>Tare button — zero out container weight.</li>
              <li>Any of these work for most cooking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart scales with apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drop Scale — connects to recipe app, scales recipes.</li>
              <li>Perfect Bake — guided baking with app.</li>
              <li>Kitchen Companion — nutrition tracking integration.</li>
              <li>$80–$150 range.</li>
              <li>Work with iOS + Android.</li>
              <li>Worth it for serious bakers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For diabetic portion control</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Greater Goods Nourish Scale — $45.</li>
              <li>Calculates carbs, protein, fat for foods.</li>
              <li>Built-in food database.</li>
              <li>Helpful for diabetes management.</li>
              <li>Doctor-recommended.</li>
              <li>App syncs with meal tracking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps that work with scales</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>MyFitnessPal — track food + nutrition.</li>
              <li>Lose It — calorie + portion tracking.</li>
              <li>CarbManager — diabetic-friendly.</li>
              <li>NoomCookbook — weight management.</li>
              <li>Apple Health — automatic nutrition logging.</li>
              <li>All free or low-cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Scaling a recipe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recipe says 1 lb (450g) flour.</li>
              <li>Place bowl on scale, press tare to zero.</li>
              <li>Add flour until display reads 450g.</li>
              <li>Press tare again, add next ingredient.</li>
              <li>One bowl, no measuring cups.</li>
              <li>Apps automatically convert recipes for you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with $25 OXO scale</h3>
            <p className="text-sm text-muted-foreground">For most senior cooks, a $25 basic scale (OXO Good Grips or Escali Primo) is plenty. Large readout, easy buttons, switches between ounces and grams. If you bake regularly, you&apos;ll wonder how you ever cooked without it. The smart app-connected scales are nice but rarely worth 3x the price for casual cooks. Stick with simple unless you&apos;re tracking nutrition closely.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
