import { useState } from 'react';
import { Phone, Mail, User, Monitor, MessageSquare, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
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

const deviceTypes = [
  { value: 'phone', label: '📱 Phone' },
  { value: 'tablet', label: '📲 Tablet' },
  { value: 'computer', label: '💻 Computer' },
  { value: 'tv', label: '📺 TV / Streaming Device' },
  { value: 'smart-home', label: '🏠 Smart Home Device' },
  { value: 'other', label: '🔧 Other' },
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

    // Fire-and-forget confirmation + admin notification emails.
    // Non-blocking — form succeeds even if email fails.
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
      <div className="min-h-screen flex flex-col">
        <SEOHead title="Get Help — TekSure" description="Submit a help request to TekSure." path="/get-help" />
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">You're all set!</h1>
            <p className="text-muted-foreground text-lg">
              We got your request. A real person will be in touch with you soon — no robots, no runaround.
            </p>
            <p className="text-sm text-muted-foreground">
              While you wait, you can browse our free guides below.
            </p>
            <Button onClick={() => window.location.href = '/guides'} className="gap-2">
              Browse Free Guides <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Get Help — TekSure" description="Tell us what's going on and we'll reach out to help." path="/get-help" />
      <Navbar />

      <main className="flex-1 py-12 px-4">
        <div className="max-w-xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">Need Tech Help? <span className="text-secondary">We've Got You.</span></h1>
            <p className="text-muted-foreground text-lg">
              Fill out as little or as much as you'd like — just give us one way to reach you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">

            {/* Contact Section */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">How should we reach you?</p>
              <p className="text-sm text-muted-foreground mb-3">Phone is preferred — we can text or call.</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-secondary" />
                    Phone Number <span className="text-secondary font-semibold">★ Preferred</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 867-5309"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* Optional Info */}
            <div className="space-y-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">A little more info (optional)</p>

              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="First name is fine"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="device" className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  What kind of device?
                </Label>
                <Select value={deviceType} onValueChange={setDeviceType}>
                  <SelectTrigger id="device" className="h-12 text-base">
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
                <Label htmlFor="description" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  What's going on?
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your issue in plain English — no tech jargon needed! (e.g. 'My computer is running really slow and keeps freezing')"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={4}
                  className="text-base resize-none"
                />
              </div>
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full h-13 text-base gap-2"
            >
              {submitting ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending your request...</>
              ) : (
                <>Send My Request <ArrowRight className="h-4 w-4" /></>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              No spam. No sales pitch. Just real tech help.
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetHelp;
