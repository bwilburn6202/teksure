import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

export default function AllrecipesYummlyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Allrecipes vs Yummly for Seniors | TekSure" description="Compare Allrecipes and Yummly recipe apps. Find new recipes for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recipe Discovery</h1>
          <p className="text-lg text-muted-foreground">Allrecipes vs Yummly — find new dishes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Allrecipes — community recipes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>50,000+ recipes contributed by home cooks.</li>
              <li>Real reviews from real cooks.</li>
              <li>Free to use — ad-supported.</li>
              <li>Search by ingredient you have on hand.</li>
              <li>Pictures from people who actually made it.</li>
              <li>Tested family-friendly recipes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yummly — personalized</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>2 million+ recipes from web + magazines.</li>
              <li>Tells you recipes based on diet preferences.</li>
              <li>Filter by allergies — gluten-free, dairy-free.</li>
              <li>Free with limits — Premium $4.99/month.</li>
              <li>Build grocery list from recipes.</li>
              <li>Smart suggestions based on your history.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">NYT Cooking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$5/month — chef-quality recipes.</li>
              <li>Test kitchen tested.</li>
              <li>Beautiful recipe organization.</li>
              <li>Notes from other home cooks.</li>
              <li>Best for serious home cooks.</li>
              <li>Tutorials + technique videos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly cooking apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cook&apos;n — recipe organizer with grocery lists.</li>
              <li>BigOven — community + meal planning.</li>
              <li>SuperCook — type ingredients, get recipes.</li>
              <li>Tasty — short video recipes.</li>
              <li>SideChef — voice-guided cooking.</li>
              <li>Many free options — try several.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cooking with iPad/tablet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tablet stand for kitchen counter.</li>
              <li>Larger text easier on eyes.</li>
              <li>Voice control — &quot;next step&quot; with hands dirty.</li>
              <li>Built-in timers.</li>
              <li>Watch tutorial videos while cooking.</li>
              <li>Wipe-clean tablet stands available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Diet-specific apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Diabetic-friendly: ADA Diabetes Food Hub.</li>
              <li>Heart-healthy: AHA Heart Healthy Recipes.</li>
              <li>Low-sodium: Salt Sense by Mayo Clinic.</li>
              <li>Mediterranean: Olive Tomato app.</li>
              <li>Plant-based: Forks Over Knives.</li>
              <li>Most have free versions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Allrecipes for trying new things</h3>
            <p className="text-sm text-muted-foreground">For most seniors, free Allrecipes is the best starting point. The community reviews are gold — real cooks describe what they changed and why. When you find a winner, save it to Paprika or AnyList. Then build your weekly grocery list from saved recipes. This three-app combo (Allrecipes for finding + Paprika for saving + grocery delivery) transforms cooking for many seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
