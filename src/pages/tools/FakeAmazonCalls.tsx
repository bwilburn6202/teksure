import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneOff } from 'lucide-react';

export default function FakeAmazonCalls() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fake Amazon &amp; Apple Calls | TekSure" description="&quot;This is Amazon — we noticed a fraudulent charge.&quot; It&apos;s a scam. Plain-English playbook for fake tech-support and order-confirmation calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PhoneOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fake Amazon &amp; Apple Calls</h1>
          <p className="text-lg text-muted-foreground">The #1 phone scam targeting seniors right now.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The script</h2>
            <p className="text-sm">"This is Amazon. We noticed a $1,200 charge for an iPhone shipped to Texas. Press 1 to dispute." OR a robocall version. OR a "security alert" from Apple/Microsoft/PayPal. <strong>It&apos;s always a scam.</strong> Amazon does not call. Neither does Apple. Neither does Microsoft.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What happens if you press 1</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>"Customer service rep" answers, sounding professional.</li>
              <li>They tell you the charge was made by a hacker.</li>
              <li>"To dispute, we need to refund you." They ask you to install software (AnyDesk, TeamViewer).</li>
              <li>Once installed, they see your screen + control your computer.</li>
              <li>They ask you to log into your bank "to receive the refund".</li>
              <li>They quietly transfer money OUT while you watch.</li>
              <li>OR they fake the refund amount, claim you got too much, and ask you to send the difference back via gift cards.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Unsolicited call about an order or charge.</li>
              <li>Robocall with "press 1" option.</li>
              <li>Asks you to install software.</li>
              <li>Asks for remote access to your computer.</li>
              <li>Wants you to log into bank or "receive a refund" via wire/gift card.</li>
              <li>Tells you NOT to talk to bank staff or family.</li>
              <li>Claims "Microsoft" or "Apple security" detected a virus.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Defense — hang up</h2>
            <p className="text-sm">There is no situation where Amazon/Apple/Microsoft will call you about an order or "security issue". Hang up. If you&apos;re worried about a real Amazon order, open the Amazon app yourself and check Your Orders.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you already let them in</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Disconnect computer from internet — pull the plug or turn off wifi.</li>
              <li>Power off the computer.</li>
              <li>Call your bank. Freeze accounts. Change passwords from a different device.</li>
              <li>Have computer cleaned by a trusted local shop or Geek Squad.</li>
              <li>Change ALL passwords (email first).</li>
              <li>Report at <strong>reportfraud.ftc.gov</strong>.</li>
              <li>Report identity theft at <strong>identitytheft.gov</strong>.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Train your reflex</h3>
            <p className="text-sm text-muted-foreground">Practice saying out loud: "I don&apos;t take unsolicited calls about my accounts. Goodbye." Click. No discussion. The longer you stay on the call, the more pressure scammers apply. Hanging up is always safe.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
