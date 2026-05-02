import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorGrandkidPhotoApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandkid Photo Apps for Seniors — TekSure" description="Get fresh grandkid photos automatically — Tinybeans, FamilyAlbum, shared albums." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandkid Photo Apps</h1>
          <p className="text-lg text-muted-foreground">Photos. Automatically. Forever.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FamilyAlbum (free)</h2><p>Unlimited photo and video storage. Parents post — you see automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tinybeans</h2><p>$8/month. Private. Daily photo prompts for parents. Print yearly book option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Shared Album</h2><p>Free with iPhone. Family members add photos. They appear automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Photos shared</h2><p>Free. Same as Apple but works for Android families too.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aura digital frame</h2><p>$179. Family texts photos to frame. Display rotates daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No social media risk</h2><p>These are private. Only family sees photos. Safer than Facebook.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set parents up with Tinybeans now. Treasure of memories in 5 years.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
