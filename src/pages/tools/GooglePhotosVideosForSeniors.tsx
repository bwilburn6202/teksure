import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function GooglePhotosVideosForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Photos Videos for Seniors | TekSure" description="Auto-creates videos from photos. Senior Google Photos magic." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Photos Videos</h1>
          <p className="text-lg text-muted-foreground">Auto-create memories.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memories feature</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-creates videos.</li><li>From your photos.</li><li>Year ago today.</li><li>Senior surprise gift.</li><li>Free.</li><li>Shows daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Manual video</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Library → Utilities.</li><li>Movie + theme.</li><li>Pick photos.</li><li>Auto edits.</li><li>Senior 5 min.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Themes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Selfies of person.</li><li>Pets.</li><li>Holiday memories.</li><li>Travel.</li><li>Senior pick mood.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No editing skill.</li><li>Music auto-added.</li><li>Send to family.</li><li>Birthday compilation.</li><li>Senior gift.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family albums</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Shared family album.</li><li>Everyone adds.</li><li>Auto-syncs.</li><li>Senior sees grandkid pics.</li><li>Free.</li><li>Best feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos.google.com or app.</li><li>Free Google account.</li><li>Auto-backs up phone.</li><li>15GB free.</li><li>Senior easy.</li><li>Cross-platform.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Auto-magic videos = senior gift</h3><p className="text-sm text-muted-foreground">Free Google Photos Memories auto-creates videos from senior photos. Year ago today. Pick theme — pets, travel, person. 5 min manual movies. Family shared album auto-syncs grandkid photos. Most under-used senior memory tool. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
