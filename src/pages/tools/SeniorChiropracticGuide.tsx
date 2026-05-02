import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorChiropracticGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Chiropractic Guide | TekSure" description="When + how to use chiropractor for senior back pain." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Chiropractic</h1>
          <p className="text-lg text-muted-foreground">Back pain options.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Find chiropractor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Acatoday.org find.</li><li>Senior verified.</li><li>Read reviews.</li><li>Senior-experienced preferred.</li><li>Free directory.</li><li>Worth research.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cost + Medicare</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medicare covers spinal manipulation.</li><li>$30-$80/visit.</li><li>Senior limited visits.</li><li>Out-of-pocket some services.</li><li>Worth checking.</li><li>Verify coverage.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior caution</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Osteoporosis fragile bones.</li><li>Senior gentle techniques.</li><li>Discuss medications.</li><li>Stroke risk neck adjustments.</li><li>Worth honest discussion.</li><li>Some chiros senior-specialty.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PT alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Physical therapy often better.</li><li>Medicare covers.</li><li>Senior more comprehensive.</li><li>Studies-backed.</li><li>Try first.</li><li>Worth referral.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When chiropractor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Acute lower back pain.</li><li>Senior alignment off.</li><li>Quick relief sometimes.</li><li>Don&apos;t replace doctor diagnosis.</li><li>Imaging first if severe.</li><li>Worth trying after.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch out scams</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>20-visit packages — red flag.</li><li>Senior beware sales pressure.</li><li>X-rays unnecessary often.</li><li>Worth skeptical.</li><li>Get 2nd opinion.</li><li>Don&apos;t prepay.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">PT first then chiropractor = senior back pain</h3><p className="text-sm text-muted-foreground">Senior back pain: try PT first (Medicare covers, comprehensive). Chiropractor if want — Medicare covers spinal manipulation only. Find via Acatoday.org. Senior osteoporosis caution. Avoid 20-visit packages — scam red flag. Doctor diagnosis first.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
