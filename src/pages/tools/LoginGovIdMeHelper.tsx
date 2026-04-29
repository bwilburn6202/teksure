import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export default function LoginGovIdMeHelper() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Login.gov & ID.me Helper — Sign In to Government Sites | TekSure" description="SSA, IRS, VA, Medicare — most federal sites now want you to sign in with Login.gov or ID.me. Plain-English setup guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Login.gov & ID.me Helper</h1>
          <p className="text-lg text-muted-foreground">One sign-in for SSA, IRS, VA, Medicare, and more.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What these are</h2>
            <p className="text-sm">Two government-approved sign-in services. Instead of a different password for every federal site (Social Security, Medicare, IRS, VA, USAJobs, etc.), you create ONE account and use it everywhere. Both are free and operated under federal contracts.</p>
            <p className="text-sm mt-2"><strong>Login.gov</strong> — operated by the General Services Administration. The simpler, government-run option.</p>
            <p className="text-sm mt-1"><strong>ID.me</strong> — a private company contracted by the government. Has a stricter "verify your identity with selfie" step for some agencies.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which one do you need?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Social Security (SSA):</strong> Both work. Login.gov is simpler. Set up at <strong>ssa.gov/myaccount</strong>.</li>
              <li><strong>IRS (your tax records):</strong> ID.me only. <strong>irs.gov</strong>.</li>
              <li><strong>Medicare:</strong> Login.gov works. <strong>medicare.gov</strong>.</li>
              <li><strong>VA:</strong> Both. ID.me is more common. <strong>va.gov</strong>.</li>
              <li><strong>USAJobs:</strong> Login.gov.</li>
              <li><strong>StudentAid.gov:</strong> Login.gov.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">In short: most people end up with both. Set up Login.gov first since it's used by more agencies and easier.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up Login.gov</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>login.gov</strong>.</li>
              <li>Click "Create an account".</li>
              <li>Type your email — use one you check daily.</li>
              <li>Pick a password — at least 12 characters.</li>
              <li>Pick how you'll get the second-step code: <strong>text message</strong> is easiest. Or use the free Authenticator app for stronger security.</li>
              <li>Confirm with the test code they send.</li>
              <li>Done. Now when you visit ssa.gov, medicare.gov, etc., click "Sign in with Login.gov".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up ID.me (more steps — needed for IRS)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>id.me</strong>.</li>
              <li>Click "Create an ID.me account".</li>
              <li>Email + password + confirm.</li>
              <li>Choose a second-step code method (text or app).</li>
              <li>Verify your identity — this is the bigger step. You'll need:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li>A driver's license, passport, or state ID.</li>
                  <li>A working camera on your phone or computer.</li>
                  <li>To take a selfie that the system matches to your ID photo.</li>
                </ul>
              </li>
              <li>If selfie verification fails (common with older phones), you can do a video call with an ID.me agent — takes 5-15 minutes.</li>
              <li>Once verified, your account is ready.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Watch out for fakes</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Always type <strong>login.gov</strong> or <strong>id.me</strong> directly — never click a link in an email.</li>
                  <li>Real Login.gov and ID.me will never call you, never ask for gift cards, never email you to "verify urgently".</li>
                  <li>Watch for typo-domain scams like "logingov.com" or "idme.net" — those are fake.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If you get stuck</h3>
            <p className="text-sm text-muted-foreground">Both services have free phone support. Login.gov: 1-844-875-6446. ID.me: open a chat at help.id.me. They're patient with first-time users.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
