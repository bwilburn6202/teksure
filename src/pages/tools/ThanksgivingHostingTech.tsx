import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function ThanksgivingHostingTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Thanksgiving Hosting Tech | TekSure" description="Tech tools for Thanksgiving hosts. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Thanksgiving Hosting</h1>
          <p className="text-lg text-muted-foreground">Tech tools for an easier holiday.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recipe + meal planning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NYT Cooking</strong> — Thanksgiving guide.</li>
              <li><strong>AllRecipes app</strong> — voice search.</li>
              <li><strong>Yummly</strong> — meal planning.</li>
              <li><strong>Pinterest</strong> — endless ideas.</li>
              <li>Library — Thanksgiving cookbooks.</li>
              <li>Print recipes large font.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grocery delivery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Instacart</strong> — Costco, Safeway, more.</li>
              <li><strong>Amazon Fresh / Whole Foods</strong>.</li>
              <li><strong>Walmart Plus</strong>.</li>
              <li>Order Monday for Thursday.</li>
              <li>Avoids Wednesday store chaos.</li>
              <li>Schedule delivery window.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cooking timing apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Turkey timer apps</strong> — calculate by weight.</li>
              <li><strong>Multiple kitchen timers</strong> — Alexa, Google.</li>
              <li>Ask Alexa: &quot;set turkey timer 4 hours&quot;.</li>
              <li>Multiple timers running OK.</li>
              <li>Smart oven — phone notifications.</li>
              <li>Probe thermometer = no overcook.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connect family far away</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FaceTime / Zoom during dinner.</li>
              <li>Set up tablet at table.</li>
              <li>Pre-test camera + audio.</li>
              <li>Share photos in family group chat.</li>
              <li>Record gratitude messages.</li>
              <li>Stream football together.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart home help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Alexa — Thanksgiving playlist.&quot;</li>
              <li>&quot;Add cranberry sauce to grocery list.&quot;</li>
              <li>&quot;What temperature for turkey?&quot;</li>
              <li>&quot;Turn on dining room lights.&quot;</li>
              <li>&quot;Call Aunt Sarah.&quot;</li>
              <li>Hands-free during cooking = lifesaver.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After the meal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photo all the family.</li>
              <li>Share on family group chat.</li>
              <li>Send leftovers home — Tupperware photos.</li>
              <li>Thank-you texts.</li>
              <li>Add photos to family album.</li>
              <li>Save best for yearly photo book.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cyber Monday next</h3>
            <p className="text-sm text-muted-foreground">Use Thanksgiving evening for Cyber Monday early-bird deals. Make Christmas list now. Order before December rush. Black Friday online safer than store crowds. AARP + Senior partner discounts kick in. Holiday joy = stress reduction tools.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
