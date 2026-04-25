import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Check, Heart, Star, Trophy, Cake, TreePine, Users, GraduationCap, ShoppingCart, Mail, PartyPopper, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans: { name: string; price: string; saving?: string; icon: LucideIcon; perks: string[]; highlight: boolean }[] = [
  {
    name: '1 Month Gift',
    price: '$9.99',
    icon: Gift,
    perks: ['Full access to all 236+ guides', 'Unlimited TekBrain chat', 'Priority email support', 'Achievement badges', 'Personalized learning path'],
    highlight: false,
  },
  {
    name: '6 Month Gift',
    price: '$49.99',
    saving: 'Save $10',
    icon: Star,
    perks: ['Everything in 1 month', 'One video consultation session', 'Printable guide packs', 'Technician booking discounts', 'Monthly progress report emails'],
    highlight: true,
  },
  {
    name: '12 Month Gift',
    price: '$89.99',
    saving: 'Save $30',
    icon: Trophy,
    perks: ['Everything in 6 months', 'Two video consultation sessions', 'Dedicated onboarding call', 'Priority phone support', 'Digital legacy planning kit'],
    highlight: false,
  },
];

const occasions: { icon: LucideIcon; label: string }[] = [
  { icon: Cake, label: 'Birthday' },
  { icon: TreePine, label: 'Christmas' },
  { icon: Users, label: "Mother's / Father's Day" },
  { icon: GraduationCap, label: 'Retirement' },
  { icon: Heart, label: 'Just because' },
];

export default function GiftSubscription() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Gift a TekSure Subscription — Give the Gift of Tech Confidence"
        description="Give someone the gift of digital confidence. Gift TekSure subscriptions from $9.99 — perfect for parents, grandparents, and loved ones."
        path="/gift"
      />
      <main className="flex-1">
        <div className="border-b border-border py-16">
          <div className="container max-w-2xl text-center">
            <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">Gift a TekSure Subscription</h1>
            <p className="text-muted-foreground text-lg">The gift of confidence with technology — for parents, grandparents, or anyone who wants to feel less left behind.</p>
            <div className="flex justify-center gap-3 mt-5 flex-wrap">
              {occasions.map(o => (
                <span key={o.label} className="text-sm bg-background border border-border rounded-full px-3 py-1 flex items-center gap-1.5">
                  <o.icon className="h-4 w-4 text-primary" />{o.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="container max-w-5xl py-14">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {plans.map((plan, i) => (
              <div key={plan.name} className="flex">
                <Card className={`flex flex-col w-full rounded-2xl border border-border bg-card ${plan.highlight ? 'border-primary border-2' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                      <Badge className="bg-primary text-primary-foreground flex items-center gap-1 px-3"><Star className="h-3 w-3" /> Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="pt-7 pb-5 flex flex-col flex-1">
                    <plan.icon className="h-8 w-8 text-primary mb-3" />
                    <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-black text-primary">{plan.price}</span>
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
                      <Link to="/get-help"><Gift className="h-4 w-4" /> Give This Gift</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-muted rounded-2xl p-8 mb-10 border border-border">
            <h2 className="text-xl font-bold text-center text-primary mb-8">How gifting works</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { step: '1', icon: ShoppingCart, title: 'Choose a plan', desc: 'Select the gift duration that suits your budget.' },
                { step: '2', icon: Mail, title: 'We send a gift card', desc: 'A beautiful digital gift card is sent to you (or directly to your recipient).' },
                { step: '3', icon: PartyPopper, title: 'They redeem & start', desc: 'Your recipient creates a free account and activates their gift code in under 2 minutes.' },
              ].map(s => (
                <div key={s.step} className="relative">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mx-auto mb-3">{s.step}</div>
                  <s.icon className="h-7 w-7 text-primary mx-auto mb-2" />
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
    </div>
  );
}
