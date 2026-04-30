import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FolderOpen } from 'lucide-react';

export default function PhotoOrganizingMassive() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Organize 30,000 Phone Photos for Seniors | TekSure" description="Tame your phone photo library. Organize, cull, and back up massive photo collections." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FolderOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Organize Massive Photo Library</h1>
          <p className="text-lg text-muted-foreground">Tame the 30,000 photos on your phone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The problem</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Average senior has 5,000–30,000 photos on phone.</li>
              <li>Mostly screenshots, blurry, duplicates.</li>
              <li>Phone storage running out.</li>
              <li>Find one good photo = impossible.</li>
              <li>Family won&apos;t know what mattered.</li>
              <li>Solution: organize gradually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1: Back up everything first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iCloud Photos — for iPhone, $1–$10/month.</li>
              <li>Google Photos — works on both, $2/month for 100GB.</li>
              <li>Amazon Photos — free unlimited for Prime.</li>
              <li>External hard drive backup yearly.</li>
              <li>Never delete before backed up.</li>
              <li>2 backups = safe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2: Delete obvious junk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photos app → Albums → Screenshots.</li>
              <li>Delete most screenshots — usually not needed.</li>
              <li>Photos → Albums → Videos — review long ones.</li>
              <li>Recently Deleted has 30 days to recover.</li>
              <li>Removes 10–20% in hour or two.</li>
              <li>Frees up storage immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3: Use search</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photos app has powerful search now.</li>
              <li>Search &quot;dog&quot; — shows all dog photos.</li>
              <li>Search &quot;Christmas&quot; — finds holiday photos.</li>
              <li>Search by year, location, person.</li>
              <li>Find photos faster than scrolling.</li>
              <li>Apple + Google have learned to recognize.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4: Create albums</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Make albums: Family, Vacations, Grandkids, Pets.</li>
              <li>Or by year: 2024, 2023, 2022.</li>
              <li>Add favorites to album as you go.</li>
              <li>Don&apos;t need to organize ALL photos.</li>
              <li>Just put best ones in albums.</li>
              <li>Search handles the rest.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cull duplicates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone: Photos → Albums → Duplicates.</li>
              <li>Auto-detected, merge or delete.</li>
              <li>Apps: Gemini Photos, Cleaner Pro.</li>
              <li>Find similar photos (10 of same flower).</li>
              <li>Pick best, delete rest.</li>
              <li>Frees significant space.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">15 minutes a week</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t try to organize 30,000 photos in one weekend. Instead, every Sunday, spend 15 minutes deleting screenshots and putting that week&apos;s best photos in an album. Over a year, your library becomes manageable. Combined with iCloud or Google Photos backup, your memories are safe and findable. Future you will thank you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
