import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Check, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const plans = [
  {
    name: '1 Month Gift',
    price: '£9.99',
    emoji: '🎁',
    perks: ['Full access to all 236+ guides', 'Unlimited TekBot chat', 'Priority email support', 'Achievement badges', 'Personalised learning path'],
    highlight: false,
  },
  {
    name: '6 Month Gift',
    price: '£49.99',
    saving: 'Save £10',
    emoji: '⭐',
    perks: ['Everything in 1 month', 'One video consultation session', 'Printable guide packs', 'Technician booking discounts', 'Monthly progress report emails'],
    highlight: true,
  },
  {
    name: '12 Month Gift',
    price: '£89.99',
    saving: 'Save £30',
    emoji: '🏆',
    perks: ['Everything in 6 months', 'Two video consultation sessions', 'Dedicated onboarding call', 'Priority phone support', 'Digital legacy planning kit'],
    highlight: false,
  },
];

const occasions = [
  { emoji: '🎂', label: 'Birthday' },
  { emoji: '🎄', label: 'Christmas' },
  { emoji: '👨‍👩‍👧', label: "Mother's / Father's Day" },
  { emoji: '🎓', label: 'Retirement' },
  { emoji: '💙', label: 'Just because' },
];

export default function GiftSubscription() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="border-b border-border py-16">
          <div className="container max-w-2xl text-center">
            <div className="text-5xl mb-4">🎁</div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Gift a TekSure Subscription</h1>
            <p className="text-muted-foreground text-lg">The gift of confidence with technology — for parents, grandparents, or anyone who wants to feel less left behind.</p>
            <div className="flex justify-center gap-3 mt-5 flex-wrap">
              {occasions.map(o => (
                <span key={o.label} className="text-sm bg-white border border-border rounded-full px-3 py-1 flex items-center gap-1.5">
                  <span>{o.emoji}</span>{o.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="container max-w-5xl py-14">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="flex">
                <Card className={`flex flex-col w-full rounded-2xl border border-border bg-card ${plan.highlight ? 'border-primary border-2 shadow-lg relative' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                      <Badge className="bg-primary text-primary-foreground flex items-center gap-1 px-3"><Star className="h-3 w-3" /> Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="pt-7 pb-5 flex flex-col flex-1">
                    <div className="text-3xl mb-3">{plan.emoji}</div>
                    <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-black">{plan.price}</span>
                      {plan.saving && <Badge variant="secondary" className="text-xs">{plan.saving}</Badge>}
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {plan.perks.map(p => (
                        <li key={p} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full gap-2 rounded-xl ${plan.highlight ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`} asChild>
                      <Link to="/pricing"><Gift className="h-4 w-4" /> Give This Gift</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-muted rounded-2xl p-8 mb-10 border border-border">
            <h2 className="text-xl font-bold text-center text-primary mb-8">How gifting works</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { step: '1', emoji: '🛒', title: 'Choose a plan', desc: 'Select the gift duration that suits your budget.' },
                { step: '2', emoji: '✉️', title: 'We send a gift card', desc: 'A beautiful digital gift card is sent to you (or directly to your recipient).' },
                { step: '3', emoji: '🎉', title: 'They redeem & start', desc: 'Your recipient creates a free account and activates their gift code in under 2 minutes.' },
              ].map(s => (
                <div key={s.step} className="relative">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mx-auto mb-3">{s.step}</div>
                  <div className="text-3xl mb-2">{s.emoji}</div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Heart className="h-8 w-8 text-pink-400 mx-auto mb-3" />
            <p className="text-lg font-semibold text-primary mb-1">More than a subscription</p>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">TekSure gives your loved one the confidence to use technology independently — so they can video call family, shop safely online, and stop feeling left behind.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
