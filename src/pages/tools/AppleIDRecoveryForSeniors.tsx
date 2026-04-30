import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export default function AppleIDRecoveryForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple ID Recovery for Seniors | TekSure" description="Locked out of Apple ID? Senior recovery guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple ID Recovery</h1>
          <p className="text-lg text-muted-foreground">Senior locked out fix.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iforgot.apple.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Official recovery.</li><li>Email or phone.</li><li>Reset password.</li><li>Senior step-by-step.</li><li>Free.</li><li>Bookmark this.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Recovery key</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>28-character key.</li><li>Set up beforehand.</li><li>Print + save.</li><li>Senior insurance.</li><li>Bypasses lockout.</li><li>Critical to save.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Recovery contact</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add trusted family.</li><li>They help unlock.</li><li>Settings → Apple ID.</li><li>Senior critical setup.</li><li>Adult kid as contact.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Account locked</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Too many wrong tries.</li><li>Wait + try later.</li><li>Or recovery key.</li><li>Senior patience.</li><li>Apple Store help.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Legacy Contact</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family member access after death.</li><li>Settings → Apple ID.</li><li>Legacy Contact.</li><li>Senior estate planning.</li><li>Photos preserved family.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Strong password.</li><li>Recovery key printed.</li><li>Recovery contact set.</li><li>Family knows access plan.</li><li>Senior estate complete.</li><li>30 min setup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Recovery contact = senior critical</h3><p className="text-sm text-muted-foreground">Add adult child as Apple ID Recovery Contact + Legacy Contact. Senior locked out — they help unlock. Senior passes — family accesses photos + memories. Both free, 5-min setup. Most under-considered senior estate planning step. Don&apos;t skip.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
