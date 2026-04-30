import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

export default function CanvaForSeniorsGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Canva for Seniors | TekSure" description="Make beautiful cards, photo books, invitations with Canva. Free design tool for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Palette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Canva</h1>
          <p className="text-lg text-muted-foreground">Beautiful designs without being an artist.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Canva?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free design tool — works in browser or app.</li>
              <li>Drag-and-drop — no technical skills needed.</li>
              <li>Thousands of pre-designed templates.</li>
              <li>Make cards, posters, invitations, photo collages.</li>
              <li>Print at home or send to print service.</li>
              <li>200+ million people use it worldwide.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can make</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Birthday cards — print or send digitally.</li>
              <li>Holiday cards — Christmas, Hanukkah, Easter.</li>
              <li>Photo collages of family + grandkids.</li>
              <li>Family newsletter — share with relatives.</li>
              <li>Memorial programs for funerals.</li>
              <li>Invitations to parties + reunions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free vs Pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free version — plenty for most seniors.</li>
              <li>Hundreds of free templates + photos.</li>
              <li>Canva Pro — $14.99/month or $119.99/year.</li>
              <li>Pro adds: more templates, background remover.</li>
              <li>Most personal use fine on free plan.</li>
              <li>30-day free trial of Pro available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to Canva.com or download app.</li>
              <li>Sign up free with email or Google.</li>
              <li>Search a template type (e.g., &quot;birthday card&quot;).</li>
              <li>Pick a design that catches your eye.</li>
              <li>Click any text or image to change it.</li>
              <li>Download as PDF, image, or share link.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make a photo book</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search &quot;Photo book&quot; in templates.</li>
              <li>Pick layout — grid, magazine style, etc.</li>
              <li>Upload photos from phone or computer.</li>
              <li>Drag photos into book pages.</li>
              <li>Add captions + dates.</li>
              <li>Print at home or send to Shutterfly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use templates — don&apos;t start from blank.</li>
              <li>Save designs — re-edit later anytime.</li>
              <li>Share editable link with family — they help.</li>
              <li>Print at FedEx Office or Walgreens.</li>
              <li>Free version has plenty for personal use.</li>
              <li>Watch free YouTube tutorials when stuck.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Make this year&apos;s holiday card</h3>
            <p className="text-sm text-muted-foreground">Skip the $40 box of holiday cards from the store. Spend 20 minutes in Canva making a personalized holiday card with photos of grandkids. Print 30 at home for under $10 in cardstock and ink, or send to Shutterfly for printing. People treasure personalized cards more than store-bought ones. Canva makes it as easy as filling out a form.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
