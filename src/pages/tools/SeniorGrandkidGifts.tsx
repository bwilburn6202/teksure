import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function SeniorGrandkidGifts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tech Gifts for Grandkids — TekSure" description="Tech gifts seniors give grandkids — age-appropriate, safe, fun." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tech Gifts for Grandkids</h1>
          <p className="text-lg text-muted-foreground">Smart picks. Safe. Fun.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ages 3-5</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Yoto Mini ($60) — screen-free audio player</li><li>LeapPad Academy ($150)</li><li>Toniebox audio system</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ages 6-9</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Amazon Kids+ ($5/month subscription)</li><li>Kindle Paperwhite Kids ($170)</li><li>LEGO sets — timeless</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ages 10-13</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Apple Watch SE ($249)</li><li>Nintendo Switch ($300)</li><li>Drawing tablet</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ages 14+</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Wireless earbuds ($50-$150)</li><li>Polaroid camera ($80)</li><li>Bluetooth speaker ($30-$100)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip</h2><p>Cheap fad gadgets. Apps with in-app purchases. Anything with surprise subscriptions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best gift always</h2><p>An Amazon gift card. Or money in their college 529 plan.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Ask parents first. They know what kids want and what&apos;s allowed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
