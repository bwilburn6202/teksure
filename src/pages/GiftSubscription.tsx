import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Gift, Heart, Mail, PartyPopper, Users, CheckCircle2 } from 'lucide-react';

export default function GiftSubscription() {
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email sending edge function
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Share TekSure With Someone You Care About | TekSure"
        description="Send a free invitation to TekSure — help a friend or family member build confidence with technology."
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-border py-16">
          <div className="container max-w-2xl text-center">
            <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
              Share TekSure with Someone You Care About
            </h1>
            <p className="text-muted-foreground text-lg">
              Know someone who could use a little help with technology? Send them a free invitation
              to TekSure — our guides, tools, and support are all completely free.
            </p>
          </div>
        </div>

        <div className="container max-w-3xl py-14">
          {sent ? (
            /* Confirmation screen */
            <div className="text-center space-y-6 max-w-md mx-auto">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-primary">Invitation Sent!</h2>
              <p className="text-muted-foreground text-lg">
                We've sent your personal recommendation to <strong>{recipientName}</strong> at{' '}
                <strong>{recipientEmail}</strong>. They'll receive an email with your message and a
                link to get started on TekSure — all for free.
              </p>
              <p className="text-muted-foreground">
                Thank you for helping someone you care about feel more confident with technology.
              </p>
              <Button onClick={() => setSent(false)} variant="outline" className="gap-2">
                <Mail className="h-4 w-4" /> Send Another Invitation
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10">
              {/* Form */}
              <div>
                <h2 className="text-xl font-bold text-primary mb-2">Send a Free Invitation</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and we'll send a friendly email on your behalf, inviting
                  them to explore TekSure's free guides and support.
                </p>
                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label htmlFor="senderName" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="senderName"
                      value={senderName}
                      onChange={e => setSenderName(e.target.value)}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="recipientName" className="block text-sm font-medium mb-1">
                      Their Name
                    </label>
                    <Input
                      id="recipientName"
                      value={recipientName}
                      onChange={e => setRecipientName(e.target.value)}
                      placeholder="First name of the person you're inviting"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="recipientEmail" className="block text-sm font-medium mb-1">
                      Their Email Address
                    </label>
                    <Input
                      id="recipientEmail"
                      type="email"
                      value={recipientEmail}
                      onChange={e => setRecipientEmail(e.target.value)}
                      placeholder="friend@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="personalMessage" className="block text-sm font-medium mb-1">
                      Personal Message <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <Textarea
                      id="personalMessage"
                      value={personalMessage}
                      onChange={e => setPersonalMessage(e.target.value)}
                      placeholder="Add a personal note — for example: 'Hi Mom, I thought this might help with your new tablet!'"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2 rounded-xl">
                    <Mail className="h-4 w-4" /> Send Free Invitation
                  </Button>
                </form>
              </div>

              {/* What they'll get */}
              <div className="space-y-6">
                <Card className="rounded-2xl border border-border bg-card">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-primary">What they'll get — all free</h3>
                    <ul className="space-y-3">
                      {[
                        'Access to 236+ step-by-step technology guides',
                        'TekBot — a friendly AI chat assistant for tech questions',
                        'Guides on staying safe online, using smartphones, and more',
                        'A supportive community forum to ask questions',
                        'The ability to book one-on-one help from a real technician',
                      ].map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* How it works */}
                <Card className="rounded-2xl border border-border bg-muted">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-4">How it works</h3>
                    <div className="space-y-4">
                      {[
                        { step: '1', icon: Mail, title: 'We send a warm email', desc: 'Your friend or family member receives a personal invitation from you.' },
                        { step: '2', icon: Users, title: 'They visit TekSure', desc: 'The email includes a link to our website where they can start exploring.' },
                        { step: '3', icon: PartyPopper, title: 'They learn at their own pace', desc: 'No account required to browse guides — they can sign up whenever they\'re ready.' },
                      ].map(s => (
                        <div key={s.step} className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {s.step}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{s.title}</h4>
                            <p className="text-sm text-muted-foreground">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Footer message */}
          <div className="text-center mt-14">
            <Heart className="h-8 w-8 text-pink-400 mx-auto mb-3" />
            <p className="text-lg font-semibold text-primary mb-1">A thoughtful way to show you care</p>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Sharing TekSure helps your loved one build confidence with technology — so they can
              video call family, browse the web safely, and feel more connected to the world around them.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
