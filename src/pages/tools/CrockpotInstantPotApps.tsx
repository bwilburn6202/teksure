import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CookingPot } from 'lucide-react';

export default function CrockpotInstantPotApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Slow Cooker + Instant Pot Apps for Seniors | TekSure" description="Best apps for slow cooker + Instant Pot recipes. Senior-friendly cooking shortcuts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CookingPot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Slow Cooker + Instant Pot</h1>
          <p className="text-lg text-muted-foreground">Set + forget cooking made easier.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best slow cooker apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Crockpot Recipes (free).</li>
              <li>SkinnyTaste — healthier recipes.</li>
              <li>Forks Over Knives — plant-based.</li>
              <li>Pinterest for recipe browsing.</li>
              <li>Allrecipes Slow Cooker section.</li>
              <li>Hundreds free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Instant Pot Connect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Official Instant Pot app.</li>
              <li>Free with Instant Pot purchase.</li>
              <li>Smart pots connect via Bluetooth.</li>
              <li>Schedule cooking remotely.</li>
              <li>Recipe library.</li>
              <li>Step-by-step pressure cooking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beef stew + chuck roast.</li>
              <li>Chicken + dumplings.</li>
              <li>Chili.</li>
              <li>Pulled pork.</li>
              <li>Soups + stews of all kinds.</li>
              <li>One-pot meals = less cleanup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>365 Days of Slow Cooking.</li>
              <li>Pressure Luck Cooking.</li>
              <li>Six Sisters&apos; Stuff.</li>
              <li>Free recipe videos.</li>
              <li>Watch in kitchen on tablet.</li>
              <li>Many senior-friendly recipes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why slow cooker for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set in morning, dinner ready.</li>
              <li>Less work in evening when tired.</li>
              <li>Tough cuts of meat tender.</li>
              <li>Cheaper meat options work great.</li>
              <li>One pot — easy cleanup.</li>
              <li>Energy efficient.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Instant Pot</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pressure cook — fast.</li>
              <li>Slow cook function too.</li>
              <li>Sauté + brown without separate pan.</li>
              <li>Yogurt maker, rice cooker.</li>
              <li>Replaces 7 appliances.</li>
              <li>Senior counter-saver.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free recipe apps + YouTube enough</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t pay for slow cooker apps. Free Crockpot Recipes app + YouTube cooking channels provide thousands of recipes. Build a list of 5–7 family favorites that you make on rotation. Slow cookers + Instant Pots are great for cooking-for-one or two — leftovers freeze well.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
