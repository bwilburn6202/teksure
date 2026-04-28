import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingBag, ChevronRight, AlertTriangle } from 'lucide-react';

type Role = 'buyer' | 'seller';

interface Flag {
  id: string;
  question: string;
  detail: string;
  weight: number;
}

const BUYER_FLAGS: Flag[] = [
  { id: 'b1', question: 'Asks you to message off-platform (text, WhatsApp, Telegram)', detail: 'Real listings stay on the platform — that is where scam protections live. Anyone trying to move you to a private channel before payment is dodging those protections.', weight: 25 },
  { id: 'b2', question: 'Cannot show extra photos or do a video call', detail: 'A real seller can take a fresh photo with today\'s date or a video showing the item. If the only photos are stock or 5-year-old listings, the item probably is not theirs.', weight: 25 },
  { id: 'b3', question: 'Wants payment by Zelle, wire, gift card, or crypto', detail: 'PayPal Goods & Services or eBay\'s built-in protection let you dispute. The "no-reverse" payments are scammer-favorites — once sent, the money is gone.', weight: 30 },
  { id: 'b4', question: 'Price is suspiciously low (50%+ off)', detail: 'A $1,200 iPhone for $400 is bait. Even broken iPhones sell for more. Cheap iPads, gaming consoles, designer bags often follow this pattern.', weight: 20 },
  { id: 'b5', question: 'Shipping the item from out of state when listed locally', detail: 'A "local Atlanta" listing where the seller suddenly cannot meet and "needs to ship from Indiana" is the classic bait-and-switch.', weight: 20 },
  { id: 'b6', question: 'Sob story — "selling for my grandmother"', detail: 'Excuses like "the move is rushed", "deceased relative", or "deployed military" build sympathy and pressure. Real sellers do not need that to make a sale.', weight: 15 },
  { id: 'b7', question: 'Brand new account with no reviews', detail: 'Check Facebook profile age, eBay seller feedback, Craigslist responses. Brand new accounts that only post one item are fishy.', weight: 15 },
];

const SELLER_FLAGS: Flag[] = [
  { id: 's1', question: 'Sends you a check for MORE than the asking price', detail: 'They want you to refund the difference via Zelle or wire. The check bounces a week later — you owe the bank both the bad check AND the money you sent.', weight: 35 },
  { id: 's2', question: 'Asks for a "verification code" they will text you', detail: 'They are setting up a Google Voice number in your name. Never share a 6-digit code that lands on your phone with a buyer.', weight: 30 },
  { id: 's3', question: 'Wants to overpay by Zelle and "split the shipping"', detail: 'Same setup as the check — they want to leave you the difference and disappear. Real buyers pay the asking price.', weight: 25 },
  { id: 's4', question: 'Insists on PayPal "Friends and Family"', detail: 'Friends and Family payments cannot be reversed by you. If the buyer claims fraud later, your bank can reverse it on their end and you keep nothing.', weight: 20 },
  { id: 's5', question: 'Pays via "freight forwarder" overseas', detail: 'Common with high-value items. The forwarder turns out to be fake or part of the scam. Stick to local pickup or USPS Priority within the US.', weight: 20 },
  { id: 's6', question: 'Creates urgency: "buying for my son\'s birthday tomorrow"', detail: 'Used to push you to ship before the (fake) payment clears. Wait until the money is in your account before shipping anything.', weight: 15 },
];

interface Verdict { label: string; cls: string; explain: string }

function verdict(score: number): Verdict {
  if (score >= 50) return {
    label: 'Almost certainly a scam',
    cls: 'border-red-300 bg-red-50 dark:bg-red-950/20',
    explain: 'Multiple strong tells. Stop talking to this person. Block. Report through the platform. Do not send money or items.',
  };
  if (score >= 25) return {
    label: 'Probably a scam',
    cls: 'border-amber-300 bg-amber-50 dark:bg-amber-950/20',
    explain: 'Several red flags. Ask the buyer/seller to do something only a real one could do (live video, in-person meet at a police station, platform escrow). If they cannot, walk away.',
  };
  if (score === 0) return {
    label: 'No flags so far',
    cls: 'border-border bg-muted/30',
    explain: 'Walk through the checklist. Even one big flag is worth slowing down for.',
  };
  return {
    label: 'Slow down',
    cls: 'border-amber-200 bg-amber-50/50 dark:bg-amber-950/10',
    explain: 'Something is off. Cross-check the listing, ask the other person a clarifying question, and watch how they respond.',
  };
}

export default function MarketplaceScamSpotter() {
  const [role, setRole] = useState<Role>('buyer');
  const [flagged, setFlagged] = useState<Set<string>>(new Set());

  const flags = role === 'buyer' ? BUYER_FLAGS : SELLER_FLAGS;
  const switchRole = (r: Role) => { setRole(r); setFlagged(new Set()); };

  const toggle = (id: string) => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const score = Array.from(flagged).reduce((s, id) => {
    const f = flags.find(x => x.id === id);
    return s + (f?.weight ?? 0);
  }, 0);

  const v = verdict(score);

  return (
    <>
      <SEOHead
        title="Marketplace Scam Spotter"
        description="Spot scams on Facebook Marketplace, eBay, Craigslist, and OfferUp. Separate checklists for buyers and sellers. Honest red flags, no fluff."
        path="/tools/marketplace-scam-spotter"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full">
                <ShoppingBag className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Marketplace Scam Spotter</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Buying or selling on Facebook Marketplace, eBay, Craigslist, OfferUp? Walk through the checklist before sending money or shipping.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Marketplace Scam Spotter' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Are you buying or selling?</p>
              <div className="flex gap-2">
                {(['buyer', 'seller'] as Role[]).map(r => (
                  <Button key={r} variant={role === r ? 'default' : 'outline'} onClick={() => switchRole(r)}>
                    {r === 'buyer' ? 'Buying' : 'Selling'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`mb-6 border-2 ${v.cls}`}>
            <CardContent className="p-5">
              <Badge className="mb-1">{flagged.size} flag{flagged.size !== 1 ? 's' : ''} ({score} pts)</Badge>
              <p className="font-semibold text-lg">{v.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{v.explain}</p>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {role === 'buyer' ? 'Tap each red flag the seller is showing' : 'Tap each red flag the buyer is showing'}
              </p>
              <div className="space-y-2">
                {flags.map(f => (
                  <label key={f.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      flagged.has(f.id) ? 'border-red-300 bg-red-50/50 dark:bg-red-950/20' : 'border-border hover:bg-muted/40'
                    }`}>
                    <Checkbox checked={flagged.has(f.id)} onCheckedChange={() => toggle(f.id)} className="mt-1" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{f.question}</p>
                      <p className="text-xs text-muted-foreground mt-1">{f.detail}</p>
                    </div>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Safer ways to meet in person</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Most US police stations now have "Safe Exchange Zones" — well-lit parking spots with cameras specifically for online sales meet-ups. Free.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Bank lobbies during business hours work too — bring a friend.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Inspect the item with the same charger / SIM / battery the seller showed in photos. Test before paying.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Pay with cash for in-person, PayPal Goods & Services for online — both leave you a path to dispute.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">If you have already been scammed</p>
                <p className="text-muted-foreground">
                  Report it to the platform first (eBay, Facebook, Craigslist all have report links). Then file at IdentityTheft.gov for an FTC record. If money was sent through your bank, call them within 60 days — you have stronger protections under federal law in the first 60.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Paste any text-message scam.</p>
              </Link>
              <Link to="/tools/scam-witness-statement" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Witness Statement Builder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Report a scam properly.</p>
              </Link>
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lock down before you transact.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
