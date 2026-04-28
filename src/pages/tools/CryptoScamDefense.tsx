import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ShieldAlert, ChevronRight, ExternalLink, Bitcoin } from 'lucide-react';

interface CryptoScam {
  name: string;
  category: string;
  hook: string;
  pattern: string;
  redFlag: string;
  whatToDo: string;
}

const SCAMS: CryptoScam[] = [
  {
    name: 'Pig Butchering',
    category: 'Long-con investment',
    hook: '"Wrong number, sorry! ...You seem nice though. What part of the country are you in?"',
    pattern: 'A friendly stranger texts you "by accident" or matches with you on a dating app. They chat for weeks or months. They share photos of expensive meals, cars, family. Once trust is built, they mention a special crypto trading platform their uncle taught them. They walk you through depositing money. The screen shows your balance growing fast. When you try to withdraw, you are told to pay "taxes" or "verification fees" first. The platform is fake. Every dollar is gone.',
    redFlag: 'A new online friend who has never met you in person is showing you how to make money on a trading site you have never heard of. The site is not Coinbase or Fidelity — it is a name you cannot find a real news article about.',
    whatToDo: 'Stop sending money. Take screenshots. Report to ic3.gov (FBI) and reportfraud.ftc.gov. Tell a family member today. The "balance" you see is a fake number on a fake screen — there is nothing to withdraw.',
  },
  {
    name: 'Fake Exchange Websites',
    category: 'Fake platform',
    hook: '"BitcoinFastTrade.io — register today and get a $500 sign-up bonus in BTC."',
    pattern: 'You see an ad on Facebook, YouTube, or in your email. The site looks polished. You deposit a small amount and see a big profit on the dashboard. You deposit more. When you try to pull your money out, the site asks for a wire transfer to "unlock" your account, or "tax payment" before withdrawal. Each fee leads to another. The site eventually goes offline.',
    redFlag: 'You cannot find the exchange in any legitimate review (Forbes, CNBC, NerdWallet). It is not registered with FinCEN. The withdrawal page keeps asking for new fees.',
    whatToDo: 'Stop depositing. Do not pay any "release fee" — you will never see the money. Save every email and screenshot. Report to ic3.gov and your state attorney general. Real US exchanges are a short list: Coinbase, Kraken, Gemini, Fidelity Crypto.',
  },
  {
    name: 'Recovery Scam (After You Were Already Scammed)',
    category: 'Second-strike',
    hook: '"We saw you were scammed. Our firm specializes in recovering lost crypto. We only get paid when you do."',
    pattern: 'Weeks or months after your first crypto loss, a "recovery agent," "blockchain investigator," or "asset retrieval lawyer" reaches out. They may claim to work with the FBI or a foreign court. They ask for an upfront retainer, a "court bond," or "miner fees" to release frozen wallets. None of it is real. The original scammers often resell victim lists to a second crew running this exact play.',
    redFlag: 'Anyone reaching out unsolicited to recover money you lost. Real law enforcement does not charge fees. Real lawyers do not cold-email victims found in a database.',
    whatToDo: 'Hang up. Block the number. The only legitimate places to report crypto loss are ic3.gov and reportfraud.ftc.gov — both are free. No private firm can "reverse" a blockchain transaction. If a service guarantees recovery, it is a scam.',
  },
  {
    name: 'Romance-Into-Crypto',
    category: 'Romance',
    hook: '"My darling, I have made so much trading Bitcoin this year. Let me show you — I want us to build a future together."',
    pattern: 'It starts on Facebook, Instagram, a dating app, or even Words With Friends. A warm, attentive partner emerges. Months of daily messages. Talk of marriage and visiting. Then the pivot: they have a trading mentor, a private platform, a sure thing. They guide you screen-by-screen as you move money from your bank into crypto, then into their fake platform. When you stop sending, they vanish.',
    redFlag: 'They have never been on a video call with you. They love you but cannot meet. The "investment opportunity" came from them, not from you. Family members are worried.',
    whatToDo: 'Step away from the keyboard. Tell one trusted person — a son, daughter, pastor, neighbor — what is happening. Reverse-image-search their photos at images.google.com. Block. Report to ic3.gov. You are not the first person this happened to, and the shame belongs to them, not you.',
  },
];

export default function CryptoScamDefense() {
  return (
    <>
      <SEOHead
        title="Crypto Scam Defense"
        description="A defensive guide to crypto scams targeting older adults: pig butchering, fake exchanges, recovery scams, and romance-into-crypto. Plain language. No jargon."
        path="/tools/crypto-scam-defense"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-red-50 dark:from-amber-950/20 dark:to-red-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <Bitcoin className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Crypto Scam Defense</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Four crypto scams that drain savings accounts. Recognize the pattern before you send a dollar.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Crypto Scam Defense' }]} />

          <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-base text-red-900 dark:text-red-100 mb-1">
                    The FBI reports US victims lost over &#36;5.6 billion to crypto investment scams in 2023.
                  </p>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    Adults over 60 lost more than any other age group. The numbers grew again in 2024 and 2025. This is the fastest-growing fraud category in America.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-primary" />
                What this page is — and is not
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                This is a defensive guide. It will help you recognize crypto scams aimed at people 60+. It is not a guide to investing, trading, or buying cryptocurrency.
              </p>
              <p className="text-sm text-muted-foreground">
                Crypto is a high-risk asset. If you are reading this because someone is pressuring you to buy some, that pressure is the warning sign. Read on.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{SCAMS.length} crypto scams</p>

          <div className="space-y-4 mb-6">
            {SCAMS.map(s => (
              <Card key={s.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{s.name}</p>
                    <Badge variant="outline">{s.category}</Badge>
                  </div>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">Hook</p>
                  <p className="text-sm italic p-2 rounded bg-muted/40 border border-border">{s.hook}</p>

                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-1">How it works</p>
                  <p className="text-sm">{s.pattern}</p>

                  <p className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider mt-3 mb-1">Red flag</p>
                  <p className="text-sm p-2 rounded bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">{s.redFlag}</p>

                  <p className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase tracking-wider mt-3 mb-1">What to do</p>
                  <p className="text-sm p-2 rounded bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">{s.whatToDo}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5">
              <p className="font-semibold text-base mb-2 text-amber-900 dark:text-amber-100">An honest recommendation</p>
              <p className="text-sm text-amber-900 dark:text-amber-100 mb-2">
                If you do not already use cryptocurrency, you do not need to.
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                Crypto is not required to bank, pay bills, shop online, or stay connected with family. It is not a replacement for a savings account or Social Security. Most US adults over 65 who lose money to crypto are pulled in one of two ways: through a romantic relationship that turned out to be fake, or through an "exclusive investment opportunity" that came from a stranger online.
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                If neither of those applies to you and you have no specific reason to own crypto, the safest position is to own none. There is no shame in saying, "That is not for me."
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Where to report a crypto scam</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="https://www.ic3.gov" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">ic3.gov <ExternalLink className="h-3 w-3" /></a> — FBI Internet Crime Complaint Center (the main one for crypto)</li>
                <li><a href="https://reportfraud.ftc.gov" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">reportfraud.ftc.gov <ExternalLink className="h-3 w-3" /></a> — Federal Trade Commission</li>
                <li><a href="https://www.cftc.gov/complaint" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">cftc.gov/complaint <ExternalLink className="h-3 w-3" /></a> — Commodity Futures Trading Commission</li>
                <li>Your state attorney general — every state has a consumer fraud line</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste any text and check it.</p>
              </Link>
              <Link to="/tools/online-dating-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Dating Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot a romance scam early.</p>
              </Link>
              <Link to="/tools/scam-witness-statement" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Witness Statement Builder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Build a clean report.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: before sending money to any crypto platform, search the platform name plus the word "scam" on Google. If even one result comes up, walk away.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
