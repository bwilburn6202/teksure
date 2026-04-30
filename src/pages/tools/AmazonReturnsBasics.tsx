import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';

export default function AmazonReturnsBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Returns for Seniors | TekSure" description="How to return Amazon orders easily. Step-by-step guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RotateCcw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Returns</h1>
          <p className="text-lg text-muted-foreground">Easy returns step by step.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When can you return?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most items — 30 days from delivery.</li>
              <li>Holiday gifts — extended through January.</li>
              <li>Electronics — 30 days, working or not.</li>
              <li>Clothing — usually 30 days, must have tags.</li>
              <li>Books — 30 days, gently used okay sometimes.</li>
              <li>Some items not returnable — clearly marked.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step-by-step return</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Amazon app or go to Amazon.com.</li>
              <li>Tap &quot;Your Orders.&quot;</li>
              <li>Find item, tap &quot;Return or Replace.&quot;</li>
              <li>Choose reason (defective, wrong size, etc.).</li>
              <li>Pick return method — most are free.</li>
              <li>Get QR code or label by email.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Return drop-off options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Whole Foods — bring item, show QR code.</li>
              <li>Kohl&apos;s — they pack + ship for you, free.</li>
              <li>UPS Store — free drop-off with QR code.</li>
              <li>Amazon Locker — drop in locker.</li>
              <li>Mail back with prepaid label.</li>
              <li>Pick whatever&apos;s closest to you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best return option for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kohl&apos;s — best for most seniors.</li>
              <li>No box or label needed.</li>
              <li>Bring item + QR code on phone.</li>
              <li>Kohl&apos;s associate handles everything.</li>
              <li>Plus 25% off Kohl&apos;s coupon for returning.</li>
              <li>Many Kohl&apos;s near most seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Refund timing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Refund triggered once item dropped off.</li>
              <li>Credit card — 3–5 business days.</li>
              <li>Amazon gift card balance — instant.</li>
              <li>Check email for refund confirmation.</li>
              <li>If no refund in 7 days — contact customer service.</li>
              <li>Track return on Your Orders page.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoiding returns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read reviews carefully before buying.</li>
              <li>Check size charts for clothing.</li>
              <li>&quot;Verified Purchase&quot; reviews most reliable.</li>
              <li>Check question + answer section.</li>
              <li>Look at customer photos in reviews.</li>
              <li>Returns hassle-free, but time-saving to avoid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use Kohl&apos;s for everything</h3>
            <p className="text-sm text-muted-foreground">For seniors, Kohl&apos;s Amazon returns are by far the easiest. Just bring the item — no box, no label, no packing required. The associate scans your QR code from your phone (have Amazon open to the return page), takes the item, and you&apos;re done in 30 seconds. Plus you get a 25% off coupon. It&apos;s a small reason to shop Kohl&apos;s if you needed one.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
