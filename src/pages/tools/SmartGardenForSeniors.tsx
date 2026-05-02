import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SmartGardenForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Garden Apps for Seniors | TekSure" description="From The Garden, Vera, smart garden tracking for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Garden Apps</h1>
          <p className="text-lg text-muted-foreground">Senior digital garden.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">From the Garden</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5/month.</li><li>Track each plant.</li><li>Watering schedule.</li><li>Senior personalized.</li><li>Weather sync.</li><li>Worth it gardeners.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Garden Manager</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free options abundant.</li><li>Track planting dates.</li><li>Harvest log.</li><li>Senior memory aid.</li><li>Multi-plant.</li><li>Photo journal.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Almanac.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Old Farmer&apos;s Almanac.</li><li>Free moon planting calendar.</li><li>Frost dates.</li><li>Senior trusted source.</li><li>Free + reliable.</li><li>Decades of wisdom.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sensors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30 soil moisture.</li><li>Bluetooth.</li><li>Senior precise watering.</li><li>Avoid over/under.</li><li>Plant-specific.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pest tracking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photo new pest.</li><li>App identifies.</li><li>Senior treatment options.</li><li>PictureThis $30/yr.</li><li>Or free PlantNet.</li><li>Daily walk-through.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free Almanac + iPhone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Skip paid apps.</li><li>iPhone Notes for journal.</li><li>Almanac free reference.</li><li>Senior frugal start.</li><li>Add paid if want more.</li><li>Free works.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Almanac + iPhone Notes = senior digital garden</h3><p className="text-sm text-muted-foreground">Free Almanac.com (frost dates, moon planting) + iPhone Notes journal + free PlantNet plant ID = senior digital garden start. Add $30 soil sensor if precise. Skip paid apps until know need. Most senior gardening free tools sufficient.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
