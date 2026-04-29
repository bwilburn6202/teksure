import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

export default function SoupRecipes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Soup Recipes | TekSure" description="Easy, healthy, freezer-friendly soup recipes for 1-2 people. Plain-English picks for senior soups." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Soup Recipes</h1>
          <p className="text-lg text-muted-foreground">5 simple. Endless variations.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 senior-favorite soups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chicken noodle</strong> — rotisserie chicken + noodles + carrots + celery + chicken broth.</li>
              <li><strong>Vegetable beef</strong> — ground beef + canned tomatoes + frozen veggie mix + barley.</li>
              <li><strong>Tomato basil</strong> — canned tomatoes + cream + fresh basil. 20 min.</li>
              <li><strong>Italian wedding</strong> — meatballs + spinach + small pasta + chicken broth.</li>
              <li><strong>Bean + ham</strong> — Great Northern beans + ham bone + carrots + onions. Slow cook all day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why soups for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easy to chew + swallow.</li>
              <li>Hydrating.</li>
              <li>Digestible.</li>
              <li>Sneak in vegetables.</li>
              <li>Freezes well — make once, eat 5 times.</li>
              <li>Low-cost ingredients.</li>
              <li>Comforting + warming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use canned soup smarter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add fresh spinach + frozen veggies — quick upgrade.</li>
              <li>Squeeze of lemon brightens canned tomato.</li>
              <li>Toss in shredded rotisserie chicken.</li>
              <li>Top with parmesan + grilled cheese.</li>
              <li>Look for "Heart Healthy" + "Low Sodium" varieties.</li>
              <li>Progresso, Amy&apos;s, Pacific = best for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Slow cooker soup base</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Onion + celery + carrots in 4-6qt slow cooker.</li>
              <li>1 lb meat (chicken, beef, sausage).</li>
              <li>Beans, lentils, OR pasta.</li>
              <li>Spice: salt, pepper, bay leaf, herbs.</li>
              <li>Cover with broth.</li>
              <li>Cook 6-8 hrs LOW.</li>
              <li>Endless variations.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free recipe sources</h3>
            <p className="text-sm text-muted-foreground"><strong>America&apos;s Test Kitchen</strong> — most-tested. <strong>Damn Delicious</strong> blog — easy + reliable. <strong>Skinnytaste</strong> — healthy + WW points. <strong>Pinch of Yum</strong> — beautiful photos + clear instructions. All free + senior-friendly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
