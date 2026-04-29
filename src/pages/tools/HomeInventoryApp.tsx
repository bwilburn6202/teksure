import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

export default function HomeInventoryApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Inventory App — Be Ready for Insurance Claims | TekSure" description="Fire, theft, hurricane — a home inventory makes insurance claims smooth instead of nightmare. Free apps to do it from your phone in under 2 hours." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListChecks className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Inventory App</h1>
          <p className="text-lg text-muted-foreground">2 hours of work. Could save tens of thousands in a claim.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">After a fire or burglary, insurance companies ask: "What did you own and what was it worth?" With no inventory, you\'ll forget half. People who keep an inventory typically recover 30-50% MORE on claims than those who don\'t.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easiest way — phone video walkthrough</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open your phone camera, switch to video mode.</li>
              <li>Walk through every room, narrating what you see.</li>
              <li>Open closets, drawers, garage, attic. Linger on expensive items — TVs, jewelry, computers, instruments.</li>
              <li>Pan to model numbers and serial numbers when visible.</li>
              <li>Save the video to iCloud / Google Photos. Email a copy to yourself.</li>
              <li>Update once a year (after holidays — new gifts).</li>
            </ol>
            <p className="text-sm mt-3">10-15 minute video covers a typical house. Insurance adjusters love this — it\'s self-evident proof.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real home inventory apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sortly</strong> — free for up to 100 items. Photos, categories, barcode scan. Best free option.</li>
              <li><strong>Encircle</strong> — free, made for insurance claims. Backed up to cloud.</li>
              <li><strong>NAIC Home Inventory app</strong> — free, from the National Association of Insurance Commissioners.</li>
              <li><strong>Apple Notes / Google Keep</strong> — manual but no setup. Good for the major items.</li>
              <li><strong>Spreadsheet</strong> — old-school but reliable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">High-value items deserve extra care</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Jewelry — get appraisals every 5 years. Photo each piece.</li>
              <li>Art — receipts, certificates, current photos.</li>
              <li>Antiques and collectibles — appraisals.</li>
              <li>Firearms — serial numbers, photos, model.</li>
              <li>Electronics — model and serial numbers.</li>
              <li>Tools/equipment — easy to forget how many you own.</li>
            </ul>
            <p className="text-sm mt-2">Standard homeowner\'s insurance often caps jewelry at $1,500. If you have more than that, ask your agent about a "scheduled" rider.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to keep the inventory</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Cloud backup (iCloud, Google Drive, OneDrive) — survives if the house burns down.</li>
              <li>Email it to yourself — a second backup.</li>
              <li>Optional: a copy at a relative\'s house, or in a safe deposit box.</li>
              <li>Don\'t keep it ONLY on your home computer — that gets destroyed in the same fire.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best time to do it</h3>
            <p className="text-sm text-muted-foreground">Right now. A 15-minute video walkthrough today is infinitely better than a perfect spreadsheet you never finish. Just walk through and record. Update later.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
