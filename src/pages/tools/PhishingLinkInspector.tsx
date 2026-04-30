import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldAlert, ShieldCheck, AlertTriangle, Search, Info } from 'lucide-react';

interface Finding {
  level: 'danger' | 'warn' | 'ok';
  title: string;
  detail: string;
}

const SHORTENERS = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'is.gd', 'buff.ly', 'rebrand.ly', 'cutt.ly', 'shorturl.at'];
const SUSPICIOUS_TLDS = ['.zip', '.mov', '.xyz', '.top', '.click', '.country', '.gq', '.tk', '.ml', '.cf', '.ga'];
const BRAND_KEYWORDS = ['paypal', 'apple', 'amazon', 'microsoft', 'google', 'facebook', 'instagram', 'netflix', 'chase', 'wellsfargo', 'bankofamerica', 'usps', 'ups', 'fedex', 'irs', 'medicare', 'social-security', 'ssa'];

function inspect(raw: string): Finding[] {
  const findings: Finding[] = [];
  let url: URL;
  try {
    url = new URL(raw.trim().startsWith('http') ? raw.trim() : `http://${raw.trim()}`);
  } catch {
    return [{ level: 'danger', title: 'Not a valid web link', detail: 'This does not look like a real website address. Do not click it.' }];
  }
  const host = url.hostname.toLowerCase();

  if (url.protocol !== 'https:') {
    findings.push({ level: 'warn', title: 'Not a secure connection (no HTTPS)', detail: 'Real banks, government sites, and stores always use https://. A missing "s" can mean the site is fake or unsafe.' });
  } else {
    findings.push({ level: 'ok', title: 'Uses HTTPS (secure connection)', detail: 'The link starts with https, which is what real sites use. This alone does not make it safe.' });
  }

  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    findings.push({ level: 'danger', title: 'Web address is just numbers', detail: 'Real companies use names like apple.com, not raw numbers. This is a strong sign of a scam.' });
  }

  if (raw.includes('@')) {
    findings.push({ level: 'danger', title: 'Contains an @ symbol', detail: 'Scammers hide the real destination after an @. Whatever comes after @ is where you actually go.' });
  }

  if (host.split('.').length > 4) {
    findings.push({ level: 'warn', title: 'Many dots in the address', detail: 'Real sites are usually short like apple.com. Lots of dots (apple.support.login.verify-now.example.com) often hide the real owner.' });
  }

  if (SHORTENERS.includes(host)) {
    findings.push({ level: 'warn', title: 'Shortened link — destination is hidden', detail: 'Short links like bit.ly hide where you really land. Ask the sender for the real address before clicking.' });
  }

  for (const tld of SUSPICIOUS_TLDS) {
    if (host.endsWith(tld)) {
      findings.push({ level: 'warn', title: `Unusual ending: ${tld}`, detail: 'This ending is cheap to buy and rarely used by real US companies. Be extra careful.' });
      break;
    }
  }

  for (const brand of BRAND_KEYWORDS) {
    if (host.includes(brand) && !host.endsWith(`${brand}.com`) && !host.endsWith(`${brand}.gov`) && !host.endsWith(`.${brand}.com`)) {
      findings.push({ level: 'danger', title: `Pretends to be ${brand}`, detail: `The address mentions "${brand}" but is not the real ${brand} website. This is a common scam trick.` });
      break;
    }
  }

  if (raw.length > 90) {
    findings.push({ level: 'warn', title: 'Very long link', detail: 'Real links are usually short. Long, messy links with random letters often come from scams.' });
  }

  if (/-{2,}|[a-z]{20,}/i.test(host)) {
    findings.push({ level: 'warn', title: 'Strange-looking name', detail: 'Random letters or several dashes in a row are unusual for real businesses.' });
  }

  if (findings.filter(f => f.level !== 'ok').length === 0) {
    findings.push({ level: 'ok', title: 'No common scam tricks found', detail: 'No big red flags. This does NOT mean the site is 100% safe — only visit if you trust the sender.' });
  }
  return findings;
}

export default function PhishingLinkInspector() {
  const [link, setLink] = useState('');
  const [findings, setFindings] = useState<Finding[] | null>(null);

  const run = () => { if (link.trim()) setFindings(inspect(link)); };

  const dangerCount = findings?.filter(f => f.level === 'danger').length ?? 0;
  const warnCount = findings?.filter(f => f.level === 'warn').length ?? 0;
  const verdict = !findings ? null : dangerCount > 0 ? 'danger' : warnCount > 0 ? 'warn' : 'ok';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phishing Link Inspector — Check a Link Before You Click | TekSure" description="Paste any web link and we check it for common scam warning signs in plain English. Free, private, runs in your browser." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phishing Link Inspector</h1>
          <p className="text-lg text-muted-foreground">Paste a suspicious link. We'll explain what looks safe — and what looks like a scam.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-3">
            <label className="font-medium">Paste the web link (URL)</label>
            <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://example.com/verify" onKeyDown={(e) => e.key === 'Enter' && run()} />
            <Button onClick={run} className="w-full" size="lg"><Search className="w-4 h-4 mr-2" />Check this link</Button>
            <p className="text-xs text-muted-foreground flex items-start gap-2"><Info className="w-3 h-3 mt-0.5 shrink-0" />Your link never leaves your device. We do not save or send it anywhere.</p>
          </CardContent>
        </Card>

        {findings && (
          <>
            <Card className={`mb-6 border-2 ${verdict === 'danger' ? 'border-destructive' : verdict === 'warn' ? 'border-yellow-500' : 'border-green-600'}`}>
              <CardContent className="pt-6 text-center">
                {verdict === 'danger' && <><AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-2" /><h2 className="text-2xl font-bold text-destructive">Do not click this link</h2><p className="text-muted-foreground mt-1">We found {dangerCount} serious warning sign{dangerCount !== 1 ? 's' : ''}.</p></>}
                {verdict === 'warn' && <><AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-2" /><h2 className="text-2xl font-bold text-yellow-700">Be careful with this link</h2><p className="text-muted-foreground mt-1">{warnCount} thing{warnCount !== 1 ? 's' : ''} look unusual. Only click if you trust the sender.</p></>}
                {verdict === 'ok' && <><ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-2" /><h2 className="text-2xl font-bold text-green-700">No big red flags found</h2><p className="text-muted-foreground mt-1">Still — only visit links from people and companies you trust.</p></>}
              </CardContent>
            </Card>

            <div className="space-y-3">
              {findings.map((f, i) => (
                <Card key={i} className={f.level === 'danger' ? 'border-destructive/50' : f.level === 'warn' ? 'border-yellow-500/50' : 'border-green-600/30'}>
                  <CardContent className="pt-4 flex gap-3">
                    {f.level === 'danger' && <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />}
                    {f.level === 'warn' && <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />}
                    {f.level === 'ok' && <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />}
                    <div><p className="font-semibold">{f.title}</p><p className="text-sm text-muted-foreground">{f.detail}</p></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-muted/40">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">When in doubt</h3>
                <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                  <li>Don't click. Open a new tab and type the company name yourself.</li>
                  <li>Call the company using the phone number on your bill or the back of your card — not a number from the message.</li>
                  <li>Forward suspicious texts to <strong>7726</strong> (SPAM) and emails to <strong>reportphishing@apwg.org</strong>.</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
