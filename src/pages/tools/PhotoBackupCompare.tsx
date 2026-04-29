import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

const SERVICES = [
  { name: 'iCloud Photos (Apple)', cost: '$1/mo 50GB / $3/mo 200GB / $10/mo 2TB', best: 'Built into iPhone/iPad/Mac. Best if you&apos;re all-Apple. Family sharing.', good: 'Best for iPhone-only.' },
  { name: 'Google Photos', cost: '15GB free / $2/mo 100GB / $3/mo 200GB / $10/mo 2TB', best: 'Best AI search ("dog at beach"). Works on iPhone AND Android. Free 15GB.', good: 'Best free tier.' },
  { name: 'Amazon Photos (Prime)', cost: 'FREE unlimited photos with Prime', best: 'Unlimited PHOTOS (not videos). Already paid for if you have Prime. Underused.', good: 'Best if you have Prime.' },
  { name: 'Microsoft OneDrive', cost: '5GB free / $7/mo 1TB (with M365)', best: 'Comes with Microsoft 365 subscription. Decent app.', good: 'Best if you use Office.' },
  { name: 'Dropbox', cost: '2GB free / $12/mo 2TB', best: 'Most reliable across many devices. Pricey for just photos.', good: 'Best for files + photos.' },
];

export default function PhotoBackupCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Backup Services Compared | TekSure" description="iCloud, Google Photos, Amazon, OneDrive. Plain-English picks for backing up 30 years of photos." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Backup Compare</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t lose 30 years of memories.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick decision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>All-Apple family</strong> → iCloud Photos $3/mo 200GB.</li>
              <li><strong>Mixed devices, want best search</strong> → Google Photos.</li>
              <li><strong>Already have Amazon Prime</strong> → Amazon Photos (free unlimited photos).</li>
              <li><strong>Smart play</strong> — use TWO services. Photos in iCloud + Amazon = double backup, virtually free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why backup matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone lost or stolen = photos gone forever (without backup).</li>
              <li>Phone in pool/toilet/dropped = same.</li>
              <li>Old computer hard drive failure = same.</li>
              <li>House fire = physical photo albums gone.</li>
              <li>Cloud backup means photos exist in 3 places: phone, your account, the cloud.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup — once and forget</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick a service. Sign up.</li>
              <li>Install app on phone.</li>
              <li>Toggle "Backup" ON.</li>
              <li>First backup over wifi (could take 2-12 hours for thousands of photos).</li>
              <li>After that, every new photo backs up automatically.</li>
              <li>Verify by opening on a different device — photos appear.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storage strategy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Optimize storage"</strong> — keeps phone copies small, full versions in cloud. Get back 50GB on phone.</li>
              <li>Once a year, download FULL library to a cheap external drive ($60 for 2TB at Costco).</li>
              <li>Print top 50 photos every year — printed photos survive cloud company shutdowns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family sharing</h3>
            <p className="text-sm text-muted-foreground">Apple Family Sharing splits 200GB iCloud across 6 family members ($3/mo total). Google One Family does same. One subscription covers everyone&apos;s phones. Great deal.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
