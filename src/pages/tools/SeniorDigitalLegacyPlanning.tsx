import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorDigitalLegacyPlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Digital Legacy Planning | TekSure" description="Plan online accounts after death. Senior digital estate." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Legacy</h1>
          <p className="text-lg text-muted-foreground">Senior plan online assets.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Photos in cloud.</li><li>Email accounts.</li><li>Social media.</li><li>Online banking.</li><li>Senior leave plan.</li><li>Family confused without.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Legacy Contact</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Apple ID.</li><li>Legacy Contact set.</li><li>Family access photos + iCloud.</li><li>Senior 5-min setup.</li><li>Free.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Inactive Account</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>myaccount.google.com.</li><li>Inactive Account Manager.</li><li>Senior set trustees.</li><li>After 6 months inactive.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Facebook memorialize</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Memorialization.</li><li>Senior choose legacy contact.</li><li>Or delete option.</li><li>Family decisions reduced.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Password manager bequeath</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1Password emergency kit.</li><li>Senior print + safe.</li><li>Family accesses everything.</li><li>Bitwarden similar.</li><li>Worth setup.</li><li>Critical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Master document</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>List all accounts.</li><li>Where master password is.</li><li>Senior printed locked safe.</li><li>Tell executor location.</li><li>Free.</li><li>Most important step.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple Legacy + Google Inactive + master doc = senior digital plan</h3><p className="text-sm text-muted-foreground">Senior 30-min digital legacy: Apple Legacy Contact + Google Inactive Account Manager + Facebook memorialize + 1Password emergency kit + master document listing all accounts in safe. Family knows. Free + critical. Most under-considered senior estate step.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
