import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorPhotoBackupStrategy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Photo Backup Strategy | TekSure" description="Bulletproof senior photo backup. 3-2-1 rule explained simply." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Backup Strategy</h1>
          <p className="text-lg text-muted-foreground">3-2-1 senior rule.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">3-2-1 Rule</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3 copies of photos.</li><li>2 different storage types.</li><li>1 offsite (cloud).</li><li>Bulletproof strategy.</li><li>Senior peace.</li><li>Used by pros.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Original on phone.</li><li>iCloud or Google Photos cloud.</li><li>External drive at home.</li><li>3 places — house fire safe.</li><li>Hard drive + cloud + phone.</li><li>Senior bulletproof.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cloud backup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iCloud Photos auto.</li><li>Google Photos auto.</li><li>$3-$10/month.</li><li>Set + forget.</li><li>Off-site safety.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">External drive</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80 Western Digital 2TB.</li><li>Plug into computer monthly.</li><li>Copy photos.</li><li>Store in safe.</li><li>Or fire safe.</li><li>Senior physical backup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Old photo scanning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Scan boxes of prints.</li><li>FotoBox flatbed $90.</li><li>Or local service $20-$100.</li><li>ScanCafe online.</li><li>Senior treasure preserved.</li><li>Then 3-2-1 the digital.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Test restore</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Try restoring one photo.</li><li>Check backup works.</li><li>Yearly check.</li><li>Senior verify before need.</li><li>Don&apos;t assume backup works.</li><li>Test = peace.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">3-2-1 = senior memories never lost</h3><p className="text-sm text-muted-foreground">3 copies + 2 types + 1 offsite = senior photos survive house fires, phone breaks, hard drive fails. Phone + iCloud + external drive at home = solid setup. Test once a year. Old print boxes — scan + 3-2-1. Decades of memories preserved forever.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
