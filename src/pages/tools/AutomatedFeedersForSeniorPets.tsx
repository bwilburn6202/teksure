import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function AutomatedFeedersForSeniorPets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Automated Pet Feeders for Seniors | TekSure" description="Smart feeders for senior pet owners. Schedule meals automatically." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Automated Feeders</h1>
          <p className="text-lg text-muted-foreground">Smart pet meals.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PetSafe Smart</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130.</li><li>Schedule meals.</li><li>App control.</li><li>Senior arthritis relief.</li><li>Reliable brand.</li><li>Battery backup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No bending daily.</li><li>Same time meals.</li><li>Travel peace.</li><li>Portion control.</li><li>Pet routine.</li><li>Senior easier.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Water fountain</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$30-$80.</li><li>Filtered water.</li><li>Refill weekly.</li><li>Senior less daily.</li><li>Pets drink more.</li><li>Health benefit.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Litter robot</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$700 self-cleaning.</li><li>Never scoop again.</li><li>Senior arthritis fix.</li><li>Worth it longevity.</li><li>Bonus app.</li><li>Compare costs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Travel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3-day weekend ok.</li><li>Plus pet camera.</li><li>Senior travel guilt-free.</li><li>Auto feed + camera.</li><li>Long trips — pet sitter.</li><li>Combine.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cat senior</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Multiple small meals.</li><li>Auto-feeder schedule.</li><li>Diabetic cats need.</li><li>Senior never miss.</li><li>Health critical.</li><li>Worth investment.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$130 feeder = senior arthritis fix</h3><p className="text-sm text-muted-foreground">$130 PetSafe Smart Feeder = senior arthritis no daily bending. Auto-schedule. Travel peace 3 days. Plus $30 water fountain less daily refills. Senior pet care simplified. Pet on routine. Best senior pet care upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
