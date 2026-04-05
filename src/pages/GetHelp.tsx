import { useState } from 'react';
import { Phone, Mail, User, Monitor, MessageSquare, CheckCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const deviceTypes = [
  { value: 'phone', label: 'Phone' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'computer', label: 'Computer' },
  { value: 'tv', label: 'TV / Streaming Device' },
  { value: 'smart-home', label: 'Smart Home Device' },
  { value: 'other', label: 'Other' },
];

const commonIssues = [
  { emoji: '📶', label: 'WiFi not working', query: 'wifi' },
  { emoji: '🐌', label: 'Computer is slow', query: 'slow' },
  { emoji: '🖨️', label: 'Printer problems', query: 'printer' },
  { emoji: '🔑', label: 'Forgot password', query: 'password' },
  { emoji: '⚠️', label: 'Virus or pop-ups', query: 'virus' },
  { emoji: '📱', label: 'Phone issues', query: 'phone' },
];

const GetHelp = () => {
  const { user } = useAuth();

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [name, setName] = useState(user?.fullName || '');
  const [deviceType, setDeviceType] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!phone.trim() && !email.trim()) {
      setError('Please provide at least a phone number or email so we can reach you.');
      return;
    }

    setSubmitting(true);
    const { error: dbError } = await supabase.from('help_requests').insert({
      user_id: user?.id ?? null,
      name: name.trim() || null,
      phone: phone.trim() || null,
      email: email.trim() || null,
      device_type: deviceType || null,
      problem_description: description.trim() || null,
      status: 'new',
    });

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again or call us directly.');
      console.error(dbError);
      return;
    }

    supabase.functions.invoke('send-help-confirmation', {
      body: {
        name: name.trim() || undefined,
        email: email.trim() || undefined,
        phone: phone.trim() || undefined,
        device_type: deviceType || undefined,
        problem_description: description.trim() || undefined,
      },
    }).catch(err => console.warn('Email notification failed (non-fatal):', err));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SEOHead title="Get Help — TekSure" description="Submit a help request to TekSure." path="/get-help" />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 flex items-center justify-center px-4 py-20 outline-none">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">You're all set!</h1>
              <p className="text-muted-foreground text-lg">
                We got your request. A real person will be in touch with you soon — no robots, no runaround.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              While you wait, you can browse our free guides.
            </p>
            <Button onClick={() => window.location.href = '/guides'} className="gap-2 rounded-xl" size="lg">
              Browse Free Guides <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title="Get Help — TekSure" description="Tell us what's going on and we'll get someone real to help you." path="/get-help" />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 py-16 md:py-24">
        <div className="container max-w-2xl mx-auto px-4">

          {/* Conversational header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Real humans, real help
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What's going on?</h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Tell us what's happening and we'll get someone to help you. No jargon, no rush.
            </p>
          </div>

          {/* Quick issue picker */}
          <div className="mb-10">
            <p className="text-sm font-medium text-muted-foreground mb-3 text-center">Or pick a common issue — we'll pre-fill the form:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {commonIssues.map((issue) => (
                <Link
                  key={issue.query}
                  to={`/guides?q=${encodeURIComponent(issue.query)}`}
                  className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card hover:bg-accent/50 hover:border-primary/30 transition-all text-left"
                >
                  <span className="text-lg">{issue.emoji}</span>
                  <span className="text-sm font-medium">{issue.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Contact info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">How should we reach you?</p>
                  <p className="text-xs text-muted-foreground">Phone is preferred — we can text or call.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 867-5309"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="h-11 text-base rounded-xl border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="h-11 text-base rounded-xl border-border"
                    />
                  </div>
                </div>
              </div>

              {/* Optional info */}
              <div className="space-y-4 border-t border-border pt-6">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">A bit more info (optional)</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="First name is fine"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="h-11 text-base rounded-xl border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="device" className="text-sm font-medium flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-muted-foreground" />
                      Device type
                    </Label>
                    <Select value={deviceType} onValueChange={setDeviceType}>
                      <SelectTrigger id="device" className="h-11 text-base rounded-xl border-border">
                        <SelectValue placeholder="Pick one (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {deviceTypes.map(d => (
                          <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      What's going on?
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your issue in plain English — no jargon needed!"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      rows={4}
                      className="text-base resize-none rounded-xl border-border"
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="bg-destructive/10 border border-destructive/30 text-destructive rounded-xl px-4 py-3 text-sm"
                >
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="w-full h-11 text-base gap-2 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                size="lg"
              >
                {submitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Request <ArrowRight className="h-4 w-4" /></>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. No sales pitch. Just real tech help.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetHelp;
