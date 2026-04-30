import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function AirbnbHostingForRetirees() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airbnb Hosting for Senior Retirees | TekSure" description="Earn money hosting Airbnb. Senior-friendly tips for renting spare room or property." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airbnb Hosting</h1>
          <p className="text-lg text-muted-foreground">Earn from spare room or property.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spare room option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rent guest room when not used.</li>
              <li>$50-$200/night typical.</li>
              <li>Meet interesting travelers.</li>
              <li>Empty nesters love this.</li>
              <li>Set rules + availability.</li>
              <li>Bonus social interaction.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Whole property</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vacation home rental.</li>
              <li>$100-$500+/night.</li>
              <li>Hire cleaning service between.</li>
              <li>Co-host arrangement helpful.</li>
              <li>Regulations + taxes.</li>
              <li>Significant income potential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>List on Airbnb (free).</li>
              <li>Photograph well.</li>
              <li>Set price + availability.</li>
              <li>Verify ID.</li>
              <li>Approve guests by application.</li>
              <li>Host insurance through Airbnb.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Verify guests carefully.</li>
              <li>Check reviews + ID.</li>
              <li>Lock private areas.</li>
              <li>Cameras OK in common areas only.</li>
              <li>Family knows you have guest.</li>
              <li>Trust your instincts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax + legal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Income reportable on taxes.</li>
              <li>Some states require permits.</li>
              <li>HOA may forbid rentals.</li>
              <li>Insurance may need adjustment.</li>
              <li>Consult tax pro.</li>
              <li>Cities have varying rules.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VRBO alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VRBO — whole-home only.</li>
              <li>Older demographic guests.</li>
              <li>More family travelers.</li>
              <li>Fewer surprises than Airbnb.</li>
              <li>List on both platforms.</li>
              <li>Increase bookings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Spare room low-risk start</h3>
            <p className="text-sm text-muted-foreground">For seniors with empty nest, renting one room on Airbnb is low-risk way to earn $1,000-$3,000/month. You meet the guests + can decline anyone. Many retired hosts love the income + social connection. Use Airbnb&apos;s host insurance + verify guests. Test the waters before committing to whole-home rental.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
