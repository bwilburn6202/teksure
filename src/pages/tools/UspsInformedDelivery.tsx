import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export default function UspsInformedDelivery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="USPS Informed Delivery Setup — Free Mail Photos | TekSure" description="USPS sends a daily email with photos of mail before it arrives. Free, useful, and protects you from mail theft. Setup walkthrough." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">USPS Informed Delivery Setup</h1>
          <p className="text-lg text-muted-foreground">Free emails with photos of your mail — before it lands in your box.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What it is</h2>
            <p className="text-sm mb-2">A free USPS service. Each weekday morning you get an email showing photos of the letters arriving that day, plus tracking for packages.</p>
            <p className="text-sm"><strong>Why it matters:</strong> If a thief steals your mail (Medicare cards, Social Security letters, tax forms, checks), you'll know within hours instead of weeks.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you'll need</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Your home address (must be a residential address USPS delivers to).</li>
              <li>An email address you check daily.</li>
              <li>About 10 minutes — including a quick identity check.</li>
              <li>A driver's license or state ID handy for the verification step.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step-by-step setup</h2>
            <ol className="list-decimal pl-5 space-y-3 text-sm">
              <li>Go to <a href="https://informeddelivery.usps.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">informeddelivery.usps.com</a>.</li>
              <li>Click the big "Sign Up For Free" button.</li>
              <li>Type your address. If your address is eligible, you'll see a green checkmark.</li>
              <li>Create a usps.com account — pick a strong password.</li>
              <li>Verify your identity. Two ways:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li><strong>Online (fastest):</strong> Answer 3-4 questions only you would know (past addresses, etc.).</li>
                  <li><strong>By mail:</strong> If online doesn't work, USPS mails you a verification code in 3-7 days.</li>
                </ul>
              </li>
              <li>Once verified, daily emails start within 24-48 hours.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After it's set up</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Each weekday around 9 AM, you'll get an email with photos of the letters coming.</li>
              <li>If you see something in the email but it doesn't show up in your box — that's a red flag. Report it.</li>
              <li>You can also see package tracking, request delivery instructions, and forward mail.</li>
              <li>Reports of theft go to your local Post Office and the Postal Inspection Service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Bonus: identity-theft protection</h3>
                <p className="text-sm text-muted-foreground">Sign up <strong>even if you don\'t plan to look at the photos</strong>. The reason: scammers sometimes sign up for Informed Delivery using your address, then watch your mail to commit fraud. Once YOU\'ve claimed your address, they can\'t.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button asChild size="lg" className="w-full"><a href="https://informeddelivery.usps.com" target="_blank" rel="noopener noreferrer">Open USPS Informed Delivery <ExternalLink className="w-4 h-4 ml-2" /></a></Button>
      </main>
      <Footer />
    </div>
  );
}
