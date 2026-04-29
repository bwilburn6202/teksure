import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

const APPS = [
  { name: 'iCloud (Apple)', cost: 'Free 5GB; $1/mo 50GB; $3/mo 200GB; $10/mo 2TB', best: 'iPhone, iPad, Mac users. Backs up your phone, photos, Notes, contacts. Family Sharing splits the cost.', good: 'iCloud+ adds private email and HideMyEmail.' },
  { name: 'Google Drive / One', cost: 'Free 15GB; $2/mo 100GB; $3/mo 200GB; $10/mo 2TB', best: 'Android, Chrome users. Includes Gmail, Google Photos, Docs.', good: 'Same plan covers all Google services.' },
  { name: 'Microsoft OneDrive', cost: 'Free 5GB; included with Microsoft 365 ($7-10/mo)', best: 'PC and Office users. Comes free with Microsoft 365 (Word, Excel) at 1TB. Best deal if you already pay for Office.', good: 'Family plan covers 6 people, $10/month total.' },
  { name: 'Dropbox', cost: 'Free 2GB; $12/mo 2TB', best: 'Cross-platform — works the same on Mac, Windows, iPhone, Android. Best for sharing files with non-tech-savvy people.', good: 'Cleanest interface for file-sharing.' },
  { name: 'Amazon Photos', cost: 'Free unlimited photos with Prime', best: 'If you already pay for Amazon Prime, photo backup is FREE and unlimited. Best deal in cloud storage.', good: 'Most people miss this benefit.' },
  { name: 'Backblaze', cost: '$9/month for unlimited computer backup', best: 'Whole-computer backup, not just files you sync. Set and forget.', good: 'Best disaster-prevention insurance.' },
];

export default function CloudStoragePicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cloud Storage Picker — iCloud, Google Drive, Dropbox, OneDrive | TekSure" description="Photos and files you don\'t want to lose. Plain-English picks for the right cloud storage — free options first." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cloud Storage Picker</h1>
          <p className="text-lg text-muted-foreground">Don\'t lose your photos. Pick the right cloud.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What "the cloud" really is</h2>
            <p className="text-sm">A copy of your files on a company\'s servers. If your phone breaks, gets lost, or stops working, your photos and documents survive. Most cloud services back up automatically — set it once, never worry again.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How much do you need?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>50GB ($1/mo)</strong> — fine if you don\'t shoot many videos.</li>
              <li><strong>200GB ($3/mo)</strong> — sweet spot for most. Years of photos, videos, files.</li>
              <li><strong>2TB ($10/mo)</strong> — overkill unless you\'re a photographer or have decades of digitized media.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Tip: Apple\'s iCloud+ Family Plan splits 200GB across 6 family members for $3/mo total.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don\'t put all eggs in one basket</h2>
            <p className="text-sm">Pick TWO clouds for important things. Most photographers use Apple Photos OR Google Photos as primary, plus Amazon Photos (free with Prime) as a free second backup. If one company has a crash or you lose access, the other has it all.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Already paying for something?</h3>
            <p className="text-sm text-muted-foreground"><strong>Microsoft 365 Family</strong> is the best value if you have multiple devices: $100/year for 6 people, includes 1TB OneDrive each, plus Word/Excel/PowerPoint. <strong>Amazon Prime</strong> already includes unlimited Photos. <strong>Apple One</strong> bundles iCloud+ with Music, TV, Arcade.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
