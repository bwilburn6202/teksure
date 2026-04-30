import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, AlertTriangle, ShieldCheck, ChevronRight, RotateCcw } from 'lucide-react';

interface Q { id: string; question: string; yes: string; no: string; }
interface Verdict { id: string; level: 'danger' | 'warn' | 'ok'; title: string; advice: string[]; }

const Q: Record<string, Q | Verdict> = {
  start: { id: 'start', question: 'Where did you find the QR code?', yes: 'menu', no: 'unsolicited' } as any,
  menu: { id: 'menu', level: 'ok', title: 'Lower risk — restaurant or printed menu', advice: ['Look closely at the QR code. Is it a sticker placed OVER another QR code? That\'s the #1 trick scammers use.', 'If the sticker peels easily, tell staff and don\'t scan.', 'After scanning, check the website name shown before tapping. The restaurant name should appear.', 'Never enter your credit card on a website you reached only by scanning a QR code in public.'] },
  unsolicited: { id: 'unsolicited', level: 'danger', title: 'High risk — likely a scam', advice: ['QR codes mailed to you, on parking meters, on flyers, or sent in unexpected emails are a top scam tool right now.', 'The FBI and FTC have warned about "quishing" — QR phishing.', 'Do NOT scan it. Throw the mailer or flyer away.', 'For parking, pay only at the official meter or kiosk, or use the city\'s official app downloaded from the App Store / Play Store.', 'For unpaid toll texts (E-ZPass scams) — these are fake. Real tolls don\'t text you to scan a code.'] },
};

const QUESTIONS: { id: string; q: string; choices: { label: string; goto: string }[] }[] = [
  { id: 'start', q: 'Where did you find the QR code?', choices: [
    { label: 'On a restaurant table or menu', goto: 'menu' },
    { label: 'Mailed to me, or on a flyer / sticker / parking meter', goto: 'public' },
    { label: 'In an email or text I wasn\'t expecting', goto: 'message' },
    { label: 'On a product I bought or in a store', goto: 'product' },
  ] },
  { id: 'menu', q: 'Take a closer look — does the QR code feel like a sticker placed over the table?', choices: [
    { label: 'Yes, it peels or looks added on', goto: 'sticker' },
    { label: 'No, it\'s printed right on the menu or table', goto: 'menu_ok' },
  ] },
];

const VERDICTS: Record<string, Verdict> = {
  menu_ok: { id: 'menu_ok', level: 'ok', title: 'Lower risk — printed menu QR', advice: ['Most restaurant QRs are safe.', 'After you scan, look at the website name on the bar at the top of your screen. The restaurant name should appear there.', 'If it asks for payment info, pause — most menus don\'t need that. Pay through the waiter instead.'] },
  sticker: { id: 'sticker', level: 'danger', title: 'Stop — likely tampering', advice: ['Scammers place sticker QR codes over real ones.', 'Don\'t scan. Tell the restaurant staff.', 'Ask for a paper menu instead.'] },
  public: { id: 'public', level: 'danger', title: 'High risk — known scam vector', advice: ['QR codes on parking meters, flyers, and mailers are heavily abused by scammers.', 'Don\'t scan it.', 'For parking — pay at the meter or download the city\'s official app from the App Store / Play Store.', 'For mailers about packages, tolls, or "you have a refund" — toss them. Look up the real company yourself.'] },
  message: { id: 'message', level: 'danger', title: 'Almost certainly a scam', advice: ['Real banks, the IRS, the post office, USPS, FedEx, and toll authorities do NOT send you QR codes by text or email.', 'Delete the message.', 'Forward suspicious texts to 7726 (SPAM).', 'If you\'re worried about a real package or bill, log in to the official website yourself.'] },
  product: { id: 'product', level: 'warn', title: 'Usually safe — but check', advice: ['QR codes printed on real packaging are normally fine.', 'After scanning, the website should match the brand name (Coca-Cola.com, etc.).', 'Don\'t enter passwords or credit cards on sites you reach this way.'] },
};

export default function QrScamScanner() {
  const [path, setPath] = useState<string[]>(['start']);
  const current = path[path.length - 1];
  const verdict = VERDICTS[current];
  const question = QUESTIONS.find(q => q.id === current);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="QR Code Scam Scanner — Is This Code Safe to Scan? | TekSure" description="QR code scams (quishing) are exploding. Walk through a few questions to see if the code in front of you is safe — in plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <QrCode className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">QR Code Scam Scanner</h1>
          <p className="text-lg text-muted-foreground">Answer a few questions. We'll tell you if it's likely safe to scan.</p>
        </div>

        {question && (
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h2 className="font-bold text-lg mb-2">{question.q}</h2>
              {question.choices.map(c => (
                <Button key={c.goto} onClick={() => setPath([...path, c.goto])} variant="outline" size="lg" className="w-full justify-between text-left h-auto py-4">
                  <span className="whitespace-normal">{c.label}</span> <ChevronRight className="w-4 h-4 shrink-0" />
                </Button>
              ))}
              {path.length > 1 && <Button variant="ghost" size="sm" onClick={() => setPath(path.slice(0, -1))}>← Back</Button>}
            </CardContent>
          </Card>
        )}

        {verdict && (
          <>
            <Card className={`mb-4 border-2 ${verdict.level === 'danger' ? 'border-destructive' : verdict.level === 'warn' ? 'border-yellow-500' : 'border-green-600'}`}>
              <CardContent className="pt-6 text-center">
                {verdict.level === 'danger' ? <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-2" /> : verdict.level === 'warn' ? <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-2" /> : <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-2" />}
                <h2 className="text-2xl font-bold">{verdict.title}</h2>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">What to do</h3>
                <ul className="space-y-2 list-disc pl-5 text-sm">{verdict.advice.map((a, i) => <li key={i}>{a}</li>)}</ul>
              </CardContent>
            </Card>
            <Button onClick={() => setPath(['start'])} variant="outline" className="w-full"><RotateCcw className="w-4 h-4 mr-2" />Check another QR code</Button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
