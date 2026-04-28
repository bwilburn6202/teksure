import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FileText, Copy, Check, ExternalLink, ChevronRight } from 'lucide-react';

interface FormState {
  contactType: string;
  whoClaimedToBe: string;
  contactDate: string;
  whatHappened: string;
  moneyLost: string;
  paymentMethod: string;
  scammerNumber: string;
  scammerEmail: string;
  yourFirstName: string;
  yourState: string;
}

const blank: FormState = {
  contactType: '',
  whoClaimedToBe: '',
  contactDate: '',
  whatHappened: '',
  moneyLost: '',
  paymentMethod: '',
  scammerNumber: '',
  scammerEmail: '',
  yourFirstName: '',
  yourState: '',
};

function buildStatement(f: FormState): string {
  const parts: string[] = [];
  parts.push(`On ${f.contactDate || '[date]'}, I was contacted by ${f.contactType || '[phone/text/email]'}.`);
  if (f.whoClaimedToBe) parts.push(`The person claimed to be from ${f.whoClaimedToBe}.`);
  parts.push('');
  parts.push('What happened:');
  parts.push(f.whatHappened || '[describe what they said and what they wanted you to do]');
  parts.push('');
  if (f.moneyLost && parseFloat(f.moneyLost) > 0) {
    parts.push(`I lost approximately $${parseFloat(f.moneyLost).toLocaleString()} via ${f.paymentMethod || '[payment method]'}.`);
  } else {
    parts.push('I did not send any money or share my account information.');
  }
  if (f.scammerNumber) parts.push(`Phone number used by the scammer: ${f.scammerNumber}`);
  if (f.scammerEmail) parts.push(`Email address used by the scammer: ${f.scammerEmail}`);
  parts.push('');
  parts.push(`Reported by: ${f.yourFirstName || '[your first name]'}, ${f.yourState || '[state]'}`);
  return parts.join('\n');
}

export default function ScamWitnessStatement() {
  const [form, setForm] = useState<FormState>(blank);
  const [copied, setCopied] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm(s => ({ ...s, [k]: v }));

  const statement = buildStatement(form);

  const copy = async () => {
    await navigator.clipboard.writeText(statement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Report a Scam — Witness Statement Builder"
        description="Walk through what happened and we will build a clear statement you can paste into your FTC, IC3, or police report. Free, no account needed."
        path="/tools/scam-witness-statement"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-red-50 dark:from-amber-950/20 dark:to-red-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Witness Statement Builder</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Answer a few questions about the scam. We will build a clear statement you can paste into an FTC, IC3, or police report.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Witness Statement Builder' },
            ]}
          />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-5">
              <div>
                <Label htmlFor="contactType">How did they contact you?</Label>
                <select
                  id="contactType"
                  value={form.contactType}
                  onChange={(e) => update('contactType', e.target.value)}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="">Pick one</option>
                  <option value="a phone call">Phone call</option>
                  <option value="a text message">Text message</option>
                  <option value="an email">Email</option>
                  <option value="a social media message">Social media message</option>
                  <option value="a letter in the mail">Letter in the mail</option>
                  <option value="a knock on my door">In person</option>
                </select>
              </div>

              <div>
                <Label htmlFor="who">Who did they claim to be?</Label>
                <Input
                  id="who"
                  placeholder="e.g. the IRS, my bank, Microsoft Support, my grandson in jail"
                  value={form.whoClaimedToBe}
                  onChange={(e) => update('whoClaimedToBe', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="when">When did this happen?</Label>
                <Input
                  id="when"
                  type="date"
                  value={form.contactDate}
                  onChange={(e) => update('contactDate', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="what">What did they say or ask you to do?</Label>
                <Textarea
                  id="what"
                  placeholder="Just write it like you would tell a friend. Include everything you can remember."
                  value={form.whatHappened}
                  onChange={(e) => update('whatHappened', e.target.value)}
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="lost">Did you send money? How much?</Label>
                  <Input
                    id="lost"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={form.moneyLost}
                    onChange={(e) => update('moneyLost', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="how">How did you pay?</Label>
                  <select
                    id="how"
                    value={form.paymentMethod}
                    onChange={(e) => update('paymentMethod', e.target.value)}
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Pick one</option>
                    <option value="gift cards">Gift cards</option>
                    <option value="wire transfer">Wire transfer</option>
                    <option value="Zelle / Venmo / Cash App">Zelle / Venmo / Cash App</option>
                    <option value="cryptocurrency">Cryptocurrency</option>
                    <option value="credit card">Credit card</option>
                    <option value="debit card">Debit card</option>
                    <option value="cash">Cash</option>
                    <option value="check">Check</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="num">Scammer&apos;s phone number (if you saw it)</Label>
                  <Input id="num" placeholder="555-555-1234" value={form.scammerNumber} onChange={(e) => update('scammerNumber', e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Scammer&apos;s email (if any)</Label>
                  <Input id="email" placeholder="name@example.com" value={form.scammerEmail} onChange={(e) => update('scammerEmail', e.target.value)} className="mt-1" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your first name</Label>
                  <Input id="name" value={form.yourFirstName} onChange={(e) => update('yourFirstName', e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="state">Your state</Label>
                  <Input id="state" placeholder="e.g. Ohio" value={form.yourState} onChange={(e) => update('yourState', e.target.value)} className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your statement</p>
                <Button onClick={copy} size="sm" className="gap-2">
                  {copied ? <><Check className="h-4 w-4" /> Copied</> : <><Copy className="h-4 w-4" /> Copy</>}
                </Button>
              </div>
              <pre className="text-sm whitespace-pre-wrap p-4 rounded-lg bg-muted/40 border border-border font-sans leading-relaxed">{statement}</pre>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Where to send it</p>
              <div className="space-y-2 text-sm">
                <a href="https://reportfraud.ftc.gov" target="_blank" rel="noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline">
                  reportfraud.ftc.gov — Federal Trade Commission <ExternalLink className="h-4 w-4" />
                </a>
                <a href="https://www.ic3.gov" target="_blank" rel="noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline">
                  ic3.gov — FBI (online crime, especially if money was lost) <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/tools/state-ag-scam-lookup" className="flex items-center gap-1 text-primary hover:underline">
                  Your state Attorney General <ChevronRight className="h-4 w-4" />
                </Link>
                <p className="text-xs text-muted-foreground mt-3">
                  If you were scammed in person or your safety feels at risk, also call your local police non-emergency line.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check a message before you reply.</p>
              </Link>
              <Link to="/tools/robocall-blocker-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Robocall Blocker Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Stop the calls coming in.</p>
              </Link>
              <Link to="/scam-defense" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Defense Center</p>
                <p className="text-xs text-muted-foreground mt-0.5">All scam protection in one place.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
