import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function SeekByINaturalistSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Seek by iNaturalist for Seniors | TekSure" description="Identify any plant + animal. Free Seek app for senior nature lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Seek</h1>
          <p className="text-lg text-muted-foreground">Free nature ID.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free iNaturalist app.</li><li>Identifies any plant + animal.</li><li>Point camera.</li><li>AI identifies.</li><li>Senior nature companion.</li><li>Educational.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Use anywhere</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Garden plants.</li><li>Backyard birds.</li><li>Insects.</li><li>National park hikes.</li><li>Senior daily curiosity.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Learn nature.</li><li>Track sightings.</li><li>Grandkid teach.</li><li>Senior curiosity outlet.</li><li>Free.</li><li>Educational fun.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs PictureThis</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>PictureThis — paid plants only.</li><li>Seek — free everything.</li><li>Senior compare.</li><li>Use both.</li><li>Different specialties.</li><li>Free options sufficient.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy-friendly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No login required.</li><li>Senior-friendly.</li><li>No data harvesting.</li><li>Anonymous use.</li><li>Just curious nature.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Achievements</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Earn badges.</li><li>Find new species.</li><li>Senior gamification.</li><li>Motivating.</li><li>Family fun.</li><li>Track progress.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Seek = senior nature lover gift</h3><p className="text-sm text-muted-foreground">Free Seek by iNaturalist = senior identifies any plant, bird, insect, animal. Great with grandkids on hikes. National parks educational. No login required. Privacy-friendly. Most senior nature curiosity tool. Free always.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
