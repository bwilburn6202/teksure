import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function DigitalLegacyPlanner() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Legacy Planner — Pass Down Your Accounts | TekSure" description="Set up Apple Legacy Contact, Google Inactive Account, Facebook Memorial. Plain-English checklist so loved ones can access your accounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Legacy Planner</h1>
          <p className="text-lg text-muted-foreground">Make life easier for the people you love.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why this matters</h2>
            <p className="text-sm">When someone passes, families get locked out of email, photos, social media, banking — even with a death certificate. Setting up these legacy options now saves your family weeks of paperwork and lost memories.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple — Legacy Contact</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → tap your name → Sign-In &amp; Security.</li>
              <li>Tap "Legacy Contact".</li>
              <li>Add 1-3 trusted family members.</li>
              <li>Apple generates an "access key" — share it with them now (or print + put with will).</li>
              <li>After your passing, they show death certificate + access key → get your iCloud photos, notes, files.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google — Inactive Account Manager</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>myaccount.google.com</strong> → Data &amp; Privacy.</li>
              <li>Scroll to "Make a plan for your digital legacy".</li>
              <li>Click "Inactive Account Manager".</li>
              <li>Set timeout (3-18 months of inactivity).</li>
              <li>Add up to 10 trusted contacts. Pick what they can access (Gmail, Photos, Drive, etc.).</li>
              <li>Optional — auto-delete account after.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Facebook — Legacy Contact</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → Personal &amp; Account Info → Account Ownership and Control.</li>
              <li>Tap "Memorialization".</li>
              <li>Add a legacy contact.</li>
              <li>That person can pin tribute posts, accept friend requests, change profile photo after your passing.</li>
              <li>Or choose "delete account" instead.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Password manager</h2>
            <p className="text-sm">Most password managers (1Password, Bitwarden, LastPass) have an "Emergency Access" feature. Family member can request access. After waiting period, they get all passwords.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>1Password</strong> — share Family vault, recovery codes.</li>
              <li><strong>Bitwarden</strong> — Emergency Access (paid plan).</li>
              <li><strong>Apple Passwords (iCloud Keychain)</strong> — uses Legacy Contact.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The full checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Legacy Contact set.</li>
              <li>Google Inactive Account Manager set.</li>
              <li>Facebook Legacy Contact set.</li>
              <li>Password manager Emergency Access.</li>
              <li>Bank/brokerage — Transfer on Death (TOD) designations.</li>
              <li>Crypto/PayPal/Venmo — written instructions.</li>
              <li>Phone passcode — written + with will.</li>
              <li>Computer login — written + with will.</li>
              <li>Email account passwords — most important. Recovery starts here.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">One sealed envelope</h3>
            <p className="text-sm text-muted-foreground">Write down phone passcode, computer login, password manager master password. Seal in an envelope. Tell your executor or trusted family where it is. Don&apos;t put it WITH the will (those become public). Put it next to the will, in a separate envelope.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
