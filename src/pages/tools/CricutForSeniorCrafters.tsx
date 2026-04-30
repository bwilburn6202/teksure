import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

export default function CricutForSeniorCrafters() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cricut for Senior Crafters | TekSure" description="Cricut cutting machine for senior crafters. Make cards, t-shirts, signs, decals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cricut</h1>
          <p className="text-lg text-muted-foreground">Smart cutting machine for crafters.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Cricut?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart cutting machine — cuts paper, vinyl, fabric.</li>
              <li>Connects to phone + computer.</li>
              <li>Precise cuts for crafts.</li>
              <li>Cricut Joy — $179 starter.</li>
              <li>Cricut Maker 3 — $429 advanced.</li>
              <li>3 million+ users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior project ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Custom holiday cards.</li>
              <li>Photo decorations + scrapbooks.</li>
              <li>Personalized t-shirts for grandkids.</li>
              <li>Window decals + wall art.</li>
              <li>Custom mugs + tumblers.</li>
              <li>Wooden signs for home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Design Space (free app)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free design app for Cricut.</li>
              <li>Drag-and-drop interface.</li>
              <li>Free + paid templates.</li>
              <li>Cricut Access subscription $10/month.</li>
              <li>Free templates plenty for many.</li>
              <li>Easy enough for senior beginners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cricut Joy starter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smallest, easiest model.</li>
              <li>Perfect for cards + small projects.</li>
              <li>Quick setup.</li>
              <li>Phone or computer control.</li>
              <li>$179 + $50 in starter materials.</li>
              <li>Best for senior beginners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Watch YouTube tutorials before buying.</li>
              <li>Cricut help line excellent.</li>
              <li>JOANN Fabrics has Cricut classes.</li>
              <li>Friend or grandkid help with first project.</li>
              <li>Ergonomic mat lifters help arthritic hands.</li>
              <li>Take breaks during long projects.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cricut Cake replacement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make custom cake toppers.</li>
              <li>Custom cookie cutters.</li>
              <li>Edible decorations.</li>
              <li>Birthday cakes for grandkids.</li>
              <li>Holiday baking decorations.</li>
              <li>Replaces fancy bakery orders.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cricut Joy if curious</h3>
            <p className="text-sm text-muted-foreground">If you&apos;ve been curious about Cricut, the $179 Cricut Joy is the perfect entry point. Small footprint, easy setup, makes cards + small projects beautifully. Many seniors who try it become passionate crafters making personalized gifts for everyone in their life. Watch a few YouTube videos first to see if it appeals to you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
