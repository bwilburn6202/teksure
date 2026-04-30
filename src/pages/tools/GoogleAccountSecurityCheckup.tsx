import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function GoogleAccountSecurityCheckup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Account Security Checkup for Seniors | TekSure" description="Annual security review for your Google account. Step-by-step for senior users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Security Checkup</h1>
          <p className="text-lg text-muted-foreground">Annual checkup. 10 minutes. Free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Run a Security Checkup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to MyAccount.Google.com.</li>
              <li>Click &quot;Security Checkup&quot; — top of page.</li>
              <li>Walk through automated review.</li>
              <li>Shows everything that needs attention.</li>
              <li>Green checks for items that are good.</li>
              <li>Yellow alerts for items needing attention.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2-Step Verification</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most important security step.</li>
              <li>Google.com/landing/2step.</li>
              <li>Enable text or app verification.</li>
              <li>Add backup phone number.</li>
              <li>Print + save backup codes.</li>
              <li>Required after this — login from new device needs phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Recent activity</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Review locations + devices that signed in.</li>
              <li>Anything unfamiliar?</li>
              <li>Sign out unrecognized devices.</li>
              <li>Change password if anything looks off.</li>
              <li>Set up alerts for new sign-ins.</li>
              <li>Review every 6 months minimum.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Connected apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apps + websites you allowed access to your Google.</li>
              <li>Remove anything you don&apos;t recognize or use.</li>
              <li>Old apps? Click &quot;Remove Access.&quot;</li>
              <li>Reduces hacking risk.</li>
              <li>Review yearly minimum.</li>
              <li>Some apps need re-auth after removal — fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Inactive Account Manager</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decide what happens after you stop using Google.</li>
              <li>MyAccount.Google.com → Data + Privacy.</li>
              <li>Set inactivity period (3, 6, 12, 18 months).</li>
              <li>Designate up to 10 trusted contacts.</li>
              <li>They get specified data after period passes.</li>
              <li>Important for digital legacy planning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy Checkup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>MyAccount.Google.com → Privacy Checkup.</li>
              <li>Reviews ad personalization.</li>
              <li>Location history settings.</li>
              <li>Web + app activity tracking.</li>
              <li>YouTube history.</li>
              <li>Adjust each based on comfort level.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">10 minutes annually</h3>
            <p className="text-sm text-muted-foreground">Once a year — pick a memorable date like your birthday — go to MyAccount.Google.com and run the Security Checkup + Privacy Checkup. Both are guided, take 10 minutes, and dramatically improve your account safety. Set a calendar reminder for next year. Most seniors never review these settings — easy to fix.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
