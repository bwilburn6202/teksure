import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Gift, Star } from 'lucide-react';

type Recipient = 'senior' | 'parent' | 'child' | 'anyone';
type Budget = 'under25' | '25to75' | '75to150' | 'over150';

interface GiftItem { name: string; emoji: string; price: string; why: string; recipient: Recipient[]; budget: Budget[]; tag?: string; searchQuery: string; }

const gifts: GiftItem[] = [
  { name: 'Amazon Echo Dot', emoji: '', price: '~$35', why: 'Voice-controlled speaker — set reminders, play music, ask questions hands-free. Perfect for seniors who find phones fiddly.', recipient: ['senior', 'parent', 'anyone'], budget: ['25to75'], tag: 'Top Pick', searchQuery: 'Amazon Echo Dot' },
  { name: 'Kindle Paperwhite', emoji: '', price: '~$120', why: 'Lightweight e-reader with adjustable text size and backlight — perfect for avid readers or those with vision difficulties.', recipient: ['senior', 'parent', 'anyone'], budget: ['75to150'], tag: 'Bestseller', searchQuery: 'Kindle Paperwhite' },
  { name: 'iPad (entry level)', emoji: '', price: '~$329', why: 'The easiest tablet to learn on. Video calls, photos, guides, email — all in one simple device.', recipient: ['senior', 'parent', 'anyone'], budget: ['over150'], tag: 'Life Changer', searchQuery: 'Apple iPad 10th generation' },
  { name: 'Ring Video Doorbell', emoji: '', price: '~$50–100', why: 'See and speak to visitors on your phone — no need to rush to the door. Great safety gift for older relatives living alone.', recipient: ['senior', 'parent', 'anyone'], budget: ['25to75', '75to150'], searchQuery: 'Ring Video Doorbell' },
  { name: 'Tile Bluetooth Tracker (4-pack)', emoji: '', price: '~$35', why: 'Attach to keys, wallet, or bag — find them instantly with a phone app. Brilliant for anyone who regularly misplaces things.', recipient: ['senior', 'parent', 'anyone'], budget: ['25to75'], searchQuery: 'Tile Bluetooth Tracker 4 pack' },
  { name: 'Portable phone charger', emoji: '', price: '~$20–35', why: 'Never run out of battery on the go. Choose a high-capacity (20,000mAh) one for traveling or a compact slim one for everyday use.', recipient: ['senior', 'parent', 'child', 'anyone'], budget: ['under25', '25to75'], searchQuery: 'portable phone charger power bank' },
  { name: 'Wireless charging pad', emoji: '', price: '~$15–25', why: 'Just place the phone on the pad to charge — no fumbling with cables. Works with most modern iPhones and Android phones.', recipient: ['senior', 'parent', 'child', 'anyone'], budget: ['under25', '25to75'], searchQuery: 'wireless charging pad Qi' },
  { name: 'Smart plug (2-pack)', emoji: '', price: '~$25', why: 'Turn any lamp or appliance on/off with your voice or phone. Great starter smart home gift that works with Alexa and Google.', recipient: ['senior', 'parent', 'anyone'], budget: ['under25', '25to75'], searchQuery: 'smart plug 2 pack Alexa Google' },
  { name: 'Over-ear noise-cancelling headphones', emoji: '', price: '~$80–150', why: 'Block out background noise for clearer calls and better music. The Sony WH-1000XM4 or Jabra Evolve 40 are excellent mid-range options.', recipient: ['parent', 'child', 'anyone'], budget: ['75to150'], tag: 'Popular', searchQuery: 'over ear noise cancelling headphones' },
  { name: 'Laptop stand + USB hub', emoji: '', price: '~$30–50', why: 'Raises the laptop to eye level to reduce neck strain, and adds extra USB ports. Great for home workers.', recipient: ['parent', 'child', 'anyone'], budget: ['25to75'], searchQuery: 'laptop stand adjustable USB hub' },
  { name: 'Bluetooth speaker (waterproof)', emoji: '', price: '~$30–60', why: 'Portable speaker for the garden, kitchen, or bathroom. JBL Clip and UE Wonderboom are compact and excellent.', recipient: ['senior', 'parent', 'child', 'anyone'], budget: ['25to75'], searchQuery: 'waterproof bluetooth portable speaker' },
  { name: 'Photo printing subscription (Chatbooks / Motif)', emoji: '', price: '~$10–20/mo', why: 'Automatically turns phone photos into a printed album or prints. A lovely ongoing gift that doesn\'t require tech knowledge.', recipient: ['senior', 'parent', 'anyone'], budget: ['under25', '25to75'], searchQuery: 'Chatbooks photo book subscription' },
  { name: 'Smart watch (entry level)', emoji: '', price: '~$80–150', why: 'Step count, heart rate, reminders, and calls from the wrist. Samsung Galaxy Watch and Apple Watch SE are brilliant entry-level options.', recipient: ['senior', 'parent', 'child', 'anyone'], budget: ['75to150'], tag: 'Popular', searchQuery: 'Samsung Galaxy Watch SE Apple Watch' },
  { name: 'USB-C cables (multi-pack)', emoji: '', price: '~$10–20', why: 'Always useful — most new phones, tablets, and laptops use USB-C. Anker cables are cheap, fast, and durable.', recipient: ['senior', 'parent', 'child', 'anyone'], budget: ['under25'], searchQuery: 'Anker USB-C cable multi pack' },
];

const filters: { label: string; value: Recipient | 'anyone' }[] = [
  { label: 'Anyone', value: 'anyone' },
  { label: 'Older relative / senior', value: 'senior' },
  { label: 'Parent / mom or dad', value: 'parent' },
  { label: 'Teen / young person', value: 'child' },
];

const budgets: { label: string; value: Budget }[] = [
  { label: 'Under $25', value: 'under25' },
  { label: '$25–$75', value: '25to75' },
  { label: '$75–$150', value: '75to150' },
  { label: '$150+', value: 'over150' },
];

export default function TechGiftGuide() {
  const [recipient, setRecipient] = useState<Recipient | 'anyone'>('anyone');
  const [budget, setBudget] = useState<Budget | 'all'>('all');

  const filtered = gifts.filter(g => {
    const recipientMatch = recipient === 'anyone' || g.recipient.includes(recipient) || g.recipient.includes('anyone');
    const budgetMatch = budget === 'all' || g.budget.includes(budget);
    return recipientMatch && budgetMatch;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Tech Gift Guide — Perfect Gifts for Anyone Who Uses Technology | TekSure"
        description="Curated tech gift recommendations for every budget and recipient — from tablets to smart plugs. Handpicked for real people, not tech enthusiasts."
        path="/gift-guide"
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        <div className="border-b border-border py-14 text-center">
          <div className="text-4xl mb-3"></div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">Tech Gift Guide</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Curated tech gifts for every occasion — handpicked for real people, not tech enthusiasts.</p>
        </div>

        <div className="container py-10 max-w-5xl">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="text-sm font-medium self-center text-muted-foreground">For:</span>
              {filters.map(f => (
                <Button key={f.value} variant={recipient === f.value ? 'default' : 'outline'} size="sm" className={`rounded-xl ${recipient === f.value ? 'bg-primary text-primary-foreground' : ''}`} onClick={() => setRecipient(f.value as Recipient)}>{f.label}</Button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="text-sm font-medium self-center text-muted-foreground">Budget:</span>
              <Button variant={budget === 'all' ? 'default' : 'outline'} size="sm" className={`rounded-xl ${budget === 'all' ? 'bg-primary text-primary-foreground' : ''}`} onClick={() => setBudget('all')}>Any</Button>
              {budgets.map(b => (
                <Button key={b.value} variant={budget === b.value ? 'default' : 'outline'} size="sm" className={`rounded-xl ${budget === b.value ? 'bg-primary text-primary-foreground' : ''}`} onClick={() => setBudget(b.value)}>{b.label}</Button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-8">{filtered.length} gift{filtered.length !== 1 ? 's' : ''} found</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((gift, i) => (
              <div key={gift.name}>
                <Card className="h-full flex flex-col rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="pt-5 pb-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-3xl">{gift.emoji}</span>
                      {gift.tag && <Badge variant="secondary" className="text-xs flex items-center gap-1"><Star className="h-3 w-3" />{gift.tag}</Badge>}
                    </div>
                    <h3 className="font-bold text-base mb-1">{gift.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{gift.price}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{gift.why}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full gap-1.5 rounded-lg" asChild>
                        <a href={`https://www.amazon.co.uk/s?k=${encodeURIComponent(gift.searchQuery)}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" /> Search on Amazon
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Gift className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>No gifts match your filters — try adjusting the budget or recipient.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
