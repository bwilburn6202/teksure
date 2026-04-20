import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Heart, Phone, Mail, CheckCircle, ArrowRight, Users, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const GIFT_OPTIONS = [
  {
    id: 'single',
    name: 'Single Session',
    price: 15,
    description: 'One 30-minute session with a verified technician. Perfect for a quick fix or setup help.',
    features: ['30-minute session', 'Phone or video call', 'Any tech issue'],
    popular: false,
  },
  {
    id: 'starter',
    name: 'Starter Pack',
    price: 39,
    description: 'Three sessions for ongoing support. Great for someone learning a new device.',
    features: ['3 sessions (30 min each)', 'Use anytime within 90 days', 'Same technician when possible', 'Priority booking'],
    popular: true,
  },
  {
    id: 'confidence',
    name: 'Confidence Builder',
    price: 69,
    description: 'Six sessions plus a personalized learning plan. The complete digital confidence package.',
    features: ['6 sessions (30 min each)', 'Personalized learning plan', 'Use anytime within 6 months', 'Priority booking', 'Email support between sessions'],
    popular: false,
  },
];

const OCCASIONS = [
  { emoji: '🎂', label: 'Birthday' },
  { emoji: '🎄', label: 'Holiday' },
  { emoji: '💝', label: "Mother's/Father's Day" },
  { emoji: '🎓', label: 'Retirement' },
  { emoji: '📱', label: 'New Device' },
  { emoji: '💛', label: 'Thinking of You' },
];

export default function GiftSession() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [step, setStep] = useState<'choose' | 'personalize' | 'confirm'>('choose');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [occasion, setOccasion] = useState('');

  const selectedOption = GIFT_OPTIONS.find(o => o.id === selectedPlan);

  return (
    <>
      <SEOHead
        title="Gift Tech Help — Give the Gift of Digital Confidence | TekSure"
        description="Give a loved one the gift of tech confidence. Purchase a tech support session for a parent, grandparent, or friend. Real human help, plain English."
        path="/gift-session"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container max-w-4xl pt-4 px-4">
          <PageBreadcrumb segments={[{ label: 'Gift a Session' }]} />
        </div>

        {/* Header */}
        <section className="border-b py-14">
          <div className="container max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-600 dark:text-pink-400 font-medium mb-6">
              <Gift className="h-4 w-4" /> The perfect gift for anyone who struggles with technology
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Gift tech help to someone you love
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A real person will call them, walk them through their tech problems step by step, and help them feel confident. No jargon. No judgment.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl py-12 px-4">
          {step === 'choose' && (
            <>
              {/* Gift plans */}
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {GIFT_OPTIONS.map((option) => (
                  <Card
                    key={option.id}
                    className={`rounded-2xl cursor-pointer transition-all hover:shadow-md ${
                      selectedPlan === option.id
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'border-border'
                    } ${option.popular ? 'relative' : ''}`}
                    onClick={() => setSelectedPlan(option.id)}
                  >
                    {option.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground text-xs">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{option.name}</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">${option.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                      <ul className="space-y-2">
                        {option.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedPlan && (
                <div className="text-center">
                  <Button size="lg" className="gap-2 rounded-xl" onClick={() => setStep('personalize')}>
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Why gift tech help */}
              <div className="mt-16 grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Heart, title: 'Show you care', desc: 'Technology can feel isolating for someone who did not grow up with it. This gift says "I want you to feel included."' },
                  { icon: Shield, title: 'Keep them safe', desc: 'Scams target people who are not confident with technology. A technician teaches them how to stay protected.' },
                  { icon: Users, title: 'Stay connected', desc: 'Video calls, photo sharing, messaging — a tech session helps them join the conversation.' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 'personalize' && (
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Personalize your gift</h2>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Your name</label>
                  <Input value={senderName} onChange={e => setSenderName(e.target.value)} placeholder="Your name" className="h-11" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Recipient's name</label>
                  <Input value={recipientName} onChange={e => setRecipientName(e.target.value)} placeholder="Who is this for?" className="h-11" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Recipient's email</label>
                  <Input type="email" value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} placeholder="They will receive the gift here" className="h-11" />
                </div>
              </div>

              {/* Occasion */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">What is the occasion?</label>
                <div className="flex flex-wrap gap-2">
                  {OCCASIONS.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => setOccasion(o.label)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm border transition-all ${
                        occasion === o.label ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/30'
                      }`}
                    >
                      <span>{o.emoji}</span> {o.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-sm font-medium mb-1.5 block">Personal message (optional)</label>
                <Textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={`Something like: "Happy birthday, Mom! I got you some tech help so you can finally video call the grandkids without stress."`}
                  rows={3}
                  className="text-sm"
                />
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep('choose')} className="rounded-xl">Back</Button>
                <Button
                  className="flex-1 rounded-xl gap-2"
                  disabled={!recipientName.trim() || !recipientEmail.trim() || !senderName.trim()}
                  onClick={() => setStep('confirm')}
                >
                  Review Gift <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 'confirm' && selectedOption && (
            <div className="max-w-lg mx-auto text-center">
              <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Review your gift</h2>
              <p className="text-muted-foreground mb-8">Here is what {recipientName} will receive:</p>

              <Card className="rounded-2xl text-left mb-6">
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Gift</span>
                    <span className="text-sm font-medium">{selectedOption.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">For</span>
                    <span className="text-sm font-medium">{recipientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="text-sm font-medium">{senderName}</span>
                  </div>
                  {occasion && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Occasion</span>
                      <span className="text-sm font-medium">{occasion}</span>
                    </div>
                  )}
                  {message && (
                    <div>
                      <span className="text-sm text-muted-foreground block mb-1">Message</span>
                      <p className="text-sm bg-muted/50 rounded-lg p-3 italic">"{message}"</p>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">${selectedOption.price}</span>
                  </div>
                </CardContent>
              </Card>

              <p className="text-xs text-muted-foreground mb-6">
                Payment will be processed securely through Stripe. The recipient will receive an email with instructions to book their session(s).
              </p>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep('personalize')} className="rounded-xl">Back</Button>
                <Button className="flex-1 rounded-xl gap-2" asChild>
                  <Link to="/book">
                    <Gift className="h-4 w-4" /> Complete Purchase — ${selectedOption.price}
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
