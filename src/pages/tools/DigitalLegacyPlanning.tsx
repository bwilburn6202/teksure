import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Archive } from 'lucide-react';

export default function DigitalLegacyPlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Legacy Planning for Seniors | TekSure" description="Plan what happens to your digital accounts after you die. Apple Legacy Contact, Google Inactive, more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Archive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Legacy</h1>
          <p className="text-lg text-muted-foreground">Plan for your accounts after you&apos;re gone.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why this matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family will need access to photos + emails.</li>
              <li>Without planning, accounts may be permanently locked.</li>
              <li>Banks need access to close accounts.</li>
              <li>Subscriptions keep charging without intervention.</li>
              <li>Social media may stay up indefinitely.</li>
              <li>10 minutes now saves family weeks later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Legacy Contact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → Apple ID → Legacy Contact.</li>
              <li>Designate up to 5 trusted people.</li>
              <li>They can request data after death certificate.</li>
              <li>Includes photos, files, iMessages.</li>
              <li>Set up in 5 minutes.</li>
              <li>Contacts get access key to share with you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Inactive Account</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>myaccount.google.com → Data + Privacy.</li>
              <li>Inactive Account Manager.</li>
              <li>Set period (3, 6, 12, 18 months inactivity).</li>
              <li>Designate up to 10 trusted contacts.</li>
              <li>They get access to specified data.</li>
              <li>Or auto-delete account.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Facebook + social media</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Facebook: Memorialize or delete account.</li>
              <li>Settings → Memorialization Settings.</li>
              <li>Designate &quot;Legacy Contact&quot; to manage.</li>
              <li>Instagram: family can request memorialization.</li>
              <li>Twitter/X: family can request deletion.</li>
              <li>LinkedIn: family can deactivate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Password manager + access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1Password — Family plan with emergency access.</li>
              <li>LastPass + Bitwarden — emergency access settings.</li>
              <li>Designate trusted person for password access.</li>
              <li>Without this, accounts may never be accessed.</li>
              <li>Don&apos;t put passwords in your will (it becomes public).</li>
              <li>Use the password manager&apos;s emergency feature.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Document for executor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>List all online accounts (without passwords).</li>
              <li>Banking + investment login URLs.</li>
              <li>Subscription services to cancel.</li>
              <li>Social media accounts.</li>
              <li>Email accounts.</li>
              <li>Where photos + files are stored.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up Legacy Contact this week</h3>
            <p className="text-sm text-muted-foreground">If you have an iPhone, set up Apple Legacy Contact today (10 minutes). Same for Google Inactive Account Manager. These ensure your photos, emails, and digital memories pass to family members. Without these, after death, accounts often become impossible to access. Your children deserve to inherit your photos and memories — not lose them to corporate policy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
