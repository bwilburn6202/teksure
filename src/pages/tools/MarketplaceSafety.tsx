import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, AlertTriangle } from 'lucide-react';

export default function MarketplaceSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Marketplace, Craigslist, Nextdoor Safety | TekSure" description="Buying or selling locally? Stay safe with these clear rules. Common scams explained, plus how to meet up safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Marketplace Safety</h1>
          <p className="text-lg text-muted-foreground">Facebook Marketplace, Craigslist, Nextdoor — buy and sell without getting burned.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🛡️ The 7 rules</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Meet in public.</strong> Police station parking lots, busy coffee shops, the front of a bank during business hours. Many police stations have "Safe Exchange Zones" with cameras.</li>
              <li><strong>Bring someone with you.</strong> A friend or family member, or at least tell someone where you're going.</li>
              <li><strong>Daytime only.</strong> Don't meet strangers at night.</li>
              <li><strong>Cash or Zelle in person.</strong> Never wire money, send a check, or pay before seeing the item. Treat Zelle and Venmo like cash — once it's gone, it's gone.</li>
              <li><strong>Inspect the item before paying.</strong> Phones — check the IMEI on apple.com or imei.info. Cars — get a mechanic to look. Electronics — plug in and test.</li>
              <li><strong>Trust your gut.</strong> If something feels off — the deal is too good, the seller is rushing, the message has bad grammar — walk away.</li>
              <li><strong>Don't give out personal info.</strong> No need for your home address or last name. First name and a meet-up location is enough.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 border-destructive">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
              <div>
                <h3 className="font-bold mb-2">🚩 Top scams to watch for</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>"Just send me a Zelle for shipping" (selling)</strong> — buyer "accidentally" sends too much, asks you to refund the difference. Their original payment will reverse, leaving you out the refund money.</li>
                  <li><strong>"I'll pay through Venmo Friends and Family" (buying)</strong> — Friends and Family removes buyer protection. Use Goods and Services or pay in person.</li>
                  <li><strong>Cashier's check or money order</strong> — fake. Banks may take days to confirm and you're on the hook when it bounces.</li>
                  <li><strong>"My agent will deliver it"</strong> — never. Always meet in person.</li>
                  <li><strong>"Buy from my eBay link" (Craigslist)</strong> — fake eBay site. Real eBay never sends you to outside payment links.</li>
                  <li><strong>Rental scams</strong> — listings that don't match the property, demands for first month + deposit before viewing. Drive by first.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">Buying smart</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Reverse-image-search the photo (right-click → "Search Google for image"). If the picture is from a stock site, it's a scam.</li>
              <li>Check the seller's profile age and reviews. Brand-new accounts with no friends are red flags.</li>
              <li>Ask a question only the real owner could answer ("send me a photo with today's date written on a piece of paper next to the item").</li>
              <li>For cars — get the VIN. Run a free Carfax check at vehiclehistory.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-bold text-lg mb-3">Selling smart</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Take photos in front of a plain background. Don't show your house number.</li>
              <li>Don't list on multiple sites with the same wording — scammers copy listings.</li>
              <li>Decline checks and money orders. Cash is king. Zelle in person is OK.</li>
              <li>For phones and tablets — meet at a Verizon/T-Mobile/AT&T store. They'll verify the device works and isn't stolen.</li>
              <li>Wipe the device first: factory reset, sign out of iCloud or Google, take it OUT of Find My before handing over.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If something goes wrong</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Report the listing to Facebook, Craigslist, or Nextdoor through their "Report" button.</li>
              <li>File at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">reportfraud.ftc.gov</a>.</li>
              <li>If you lost more than $500, file a police report. They sometimes catch repeat scammers.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
