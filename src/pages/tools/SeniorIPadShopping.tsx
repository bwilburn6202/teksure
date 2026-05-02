import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorIPadShopping() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Shopping on iPad — Senior Guide" description="Shop online safely on your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Shopping on iPad</h1>
          <p className="text-lg text-muted-foreground">Order from your couch, safely.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Trusted apps only</h2><p>Amazon, Walmart, Target, Costco. Stick to names you know. Avoid bargain copycat sites.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Use Apple Pay</h2><p>Skips typing card numbers. Each purchase uses a one-time code. Safer than typing a card.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Read reviews</h2><p>Look for products with hundreds of reviews. Skip products with only 5-star ratings and no detail.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Check the seller</h2><p>On Amazon, scroll to seller name. Prefer Sold by Amazon over unfamiliar third parties.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Track packages</h2><p>The app shows where your order is. Get notified when it arrives at your door.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Save the receipt</h2><p>Take a screenshot of the order summary. Helpful if you need to return something.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Use a credit card instead of a debit card online — credit cards have stronger fraud protection.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
