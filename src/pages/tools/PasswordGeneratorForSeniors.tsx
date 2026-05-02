import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export default function PasswordGeneratorForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Password Generator for Seniors | TekSure" description="Strong passwords made easy. Senior generator guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Password Generators</h1>
          <p className="text-lg text-muted-foreground">Senior strong passwords.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Built into manager</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1Password, Bitwarden have.</li><li>Click generate.</li><li>Auto-saves login.</li><li>Senior never type strong.</li><li>Free.</li><li>Best method.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Auto-Strong</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS suggests on signup.</li><li>Senior tap accept.</li><li>Saves to Passwords app.</li><li>Free.</li><li>Auto-fill later.</li><li>Easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free online</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1password.com/password-generator.</li><li>Generate strong.</li><li>Senior copy + paste.</li><li>Free.</li><li>No login needed.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Memorable strong</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>4-word passphrase.</li><li>&quot;CorrectHorseBatteryStaple.&quot;</li><li>Senior remember.</li><li>Stronger than complex short.</li><li>Easier.</li><li>Worth method.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Master password</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Strong + memorable.</li><li>Sentence + numbers.</li><li>Senior never share.</li><li>Don&apos;t reuse anywhere.</li><li>Print + safe.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Don&apos;t reuse</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>One breach = all compromised.</li><li>Senior unique each site.</li><li>Manager auto-handles.</li><li>Critical.</li><li>Worth strict rule.</li><li>Never reuse.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">iPhone auto-strong = senior easy</h3><p className="text-sm text-muted-foreground">iPhone auto-suggests strong passwords on signup — tap accept, saves Passwords app. Senior auto-fill later. Free. Or 1password.com generator free online. Memorable 4-word passphrase strong + easy. Master password unique + never share. Don&apos;t reuse.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
