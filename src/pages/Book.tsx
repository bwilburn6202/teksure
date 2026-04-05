import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Calendar, Clock, Wrench, CheckCircle2, ArrowRight,
  Wifi, Shield, Monitor, Printer, Smartphone, HelpCircle, Loader2,
  User, Mail, Phone as PhoneIcon, FileText,
  Handshake, Star, Heart, Sunrise, Sun, Sunset, LogIn,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

/* ── Types ───────────────────────────────── */
type ServiceType = 'wifi' | 'setup' | 'security' | 'printer' | 'phone' | 'general';
type TimeSlot = 'morning' | 'afternoon' | 'evening';

interface BookingForm {
  serviceType: ServiceType | null;
  date: string | null;
  slot: TimeSlot | null;
  name: string;
  email: string;
  phone: string;
  deviceType: string;
  description: string;
}

/* ── Service options ─────────────────────── */
const services: { id: ServiceType; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'wifi', label: 'WiFi & Internet', icon: Wifi, desc: 'Slow internet, connection drops, router setup' },
  { id: 'setup', label: 'New Device Setup', icon: Monitor, desc: 'Setting up a new computer, phone, or tablet' },
  { id: 'security', label: 'Virus & Security', icon: Shield, desc: 'Virus removal, scam recovery, securing accounts' },
  { id: 'printer', label: 'Printer Problems', icon: Printer, desc: "Won't print, connection issues, driver setup" },
  { id: 'phone', label: 'Phone & Tablet', icon: Smartphone, desc: 'Apps, settings, backing up, slow performance' },
  { id: 'general', label: 'General Help', icon: HelpCircle, desc: "Not sure? We'll figure it out together" },
];

const slots: { id: TimeSlot; label: string; time: string; icon: React.ElementType }[] = [
  { id: 'morning', label: 'Morning', time: '9am – 12pm', icon: Sunrise },
  { id: 'afternoon', label: 'Afternoon', time: '12pm – 5pm', icon: Sun },
  { id: 'evening', label: 'Evening', time: '5pm – 8pm', icon: Sunset },
];

const deviceTypes = [
  'Windows PC / Laptop', 'Mac / MacBook', 'iPhone / iPad', 'Android Phone / Tablet',
  'Smart TV', 'Printer', 'Router / WiFi', 'Other',
];

/* ── Date helpers ────────────────────────── */
function getAvailableDates(): { date: string; label: string; dayName: string }[] {
  const dates = [];
  const d = new Date();
  d.setDate(d.getDate() + 1); // Start tomorrow
  for (let i = 0; i < 7; i++) {
    const dateStr = d.toISOString().split('T')[0];
    dates.push({
      date: dateStr,
      label: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
    });
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

/* ── Slide animation ─────────────────────── */
const slide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.25 },
};

/* ── Main component ──────────────────────── */
export default function Book() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0=service, 1=datetime, 2=details, 3=success
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  const [form, setForm] = useState<BookingForm>({
    serviceType: null,
    date: null,
    slot: null,
    name: user?.fullName || '',
    email: user?.email || '',
    phone: '',
    deviceType: '',
    description: '',
  });

  const availableDates = getAvailableDates();
  const progress = (step / 3) * 100;

  const selectedService = services.find(s => s.id === form.serviceType);
  const selectedDate = availableDates.find(d => d.date === form.date);
  const selectedSlot = slots.find(s => s.id === form.slot);

  /** Save booking to DB and return its ID, or throw */
  const createBookingRecord = async () => {
    const { data, error: dbError } = await (supabase as any).from('bookings').insert({
      user_id: user?.id ?? null,
      name: form.name.trim(),
      email: form.email.trim() || null,
      phone: form.phone.trim() || null,
      service_type: form.serviceType!,
      device_type: form.deviceType || null,
      preferred_date: form.date!,
      preferred_slot: form.slot!,
      problem_description: form.description.trim() || null,
      status: 'pending',
      payment_status: 'none',
    }).select('id').single();
    if (dbError) throw dbError;
    return data?.id as string;
  };

  /** Submit the booking */
  const handleSubmit = async () => {
    setError('');
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    if (!form.email.trim() && !form.phone.trim()) { setError('Please enter an email or phone number so we can reach you.'); return; }

    setSubmitting(true);
    try {
      const bookingId = await createBookingRecord();

      // Fire-and-forget confirmation email
      supabase.functions.invoke('send-booking-confirmation', {
        body: {
          name: form.name,
          email: form.email || undefined,
          service: selectedService?.label,
          date: selectedDate?.label,
          slot: selectedSlot?.label,
          time: selectedSlot?.time,
          bookingId,
        },
      }).catch(err => console.warn('Booking email failed (non-fatal):', err));

      setBookingRef(bookingId?.slice(0, 8).toUpperCase() ?? 'TEKSURE');
      setStep(4);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  // Step 4 = success screen
  if (step === 4) {
    return (
      <>
        <SEOHead title="Booking Confirmed | TekSure" description="Your TekSure booking is confirmed." path="/book" />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="min-h-screen bg-background outline-none">
          <div className="container py-24 flex flex-col items-center justify-center text-center max-w-lg mx-auto gap-8">
            <div
              className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center"
            >
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">You're all set!</h1>
              <p className="text-muted-foreground text-lg mb-6">
                Your booking for <strong>{selectedService?.label}</strong> on{' '}
                <strong>{selectedDate?.label}</strong> in the <strong>{selectedSlot?.label.toLowerCase()}</strong> has been received.
              </p>
              {form.email && (
                <p className="text-sm text-muted-foreground mb-6">
                  A confirmation has been sent to <strong>{form.email}</strong>.
                </p>
              )}
            </div>
            <Card className="rounded-2xl border border-border bg-card w-full">
              <CardContent className="p-6">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Booking reference</p>
                <p className="text-3xl font-mono font-bold tracking-widest">{bookingRef}</p>
              </CardContent>
            </Card>
            <p
              className="text-sm text-muted-foreground"
            >
              One of our technicians will confirm your exact appointment time. They'll call or email you {form.phone ? 'at ' + form.phone : ''} before the appointment.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button onClick={() => navigate('/my-requests')} className="rounded-xl">View My Bookings</Button>
              <Button variant="outline" onClick={() => navigate('/guides')} className="rounded-xl">Browse Free Guides</Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // If auth is still loading, show a brief loading state
  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </>
    );
  }

  // If user is not logged in, show a friendly sign-in prompt
  if (!user) {
    return (
      <>
        <SEOHead
          title="Book a Technician | TekSure"
          description="Book a real human technician to help with your tech problem — WiFi, setup, security, printers, and more. Completely free."
          path="/book"
        />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="min-h-screen bg-background" style={{ outline: 'none' }}>
          <div className="container py-24 flex flex-col items-center justify-center text-center max-w-lg mx-auto gap-8">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <LogIn className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Sign in to book a technician</h1>
              <p className="text-muted-foreground text-lg mb-6">
                To schedule your free appointment, we need you to sign in with your email first. This helps us keep track of your bookings and send you updates.
              </p>
              <p className="text-muted-foreground text-base mb-8">
                Don't have an account yet? You can create one in under a minute.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button asChild className="rounded-xl gap-2 text-base px-6 py-3">
                <Link to="/login">
                  <LogIn className="h-5 w-5" /> Sign In
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl gap-2 text-base px-6 py-3">
                <Link to="/login">
                  Create an Account
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Book a Technician | TekSure"
        description="Book a real human technician to help with your tech problem — WiFi, setup, security, printers, and more. Completely free."
        path="/book"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'TekSure Tech Support',
            description: 'In-home and remote tech support for everyday people. Help with WiFi, email, printers, phones, security, and more.',
            url: 'https://teksure.com/book',
            provider: {
              '@type': 'Organization',
              name: 'TekSure',
              url: 'https://teksure.com',
            },
            areaServed: { '@type': 'Country', name: 'US' },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Free technician booking',
            },
          },
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-background" id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <div className="container py-16 max-w-2xl mx-auto">

          {/* Header */}
          <div
            className="mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Book a Technician</h1>
            <p className="text-muted-foreground text-lg">
              Real help from a real person — completely free. Choose a time that works for you and we'll confirm the appointment.
            </p>
          </div>

          {/* Progress */}
          <div
            className="mb-10"
          >
            <div className="flex justify-between text-sm text-muted-foreground mb-2" aria-hidden="true">
              <span>Step {step + 1} of 3</span>
              <span>{['Choose service', 'Pick a time', 'Your details'][step] ?? 'Your details'}</span>
            </div>
            <Progress
              value={progress}
              className="h-2"
              aria-label={`Booking progress: step ${step + 1} of 3 — ${['Choose service', 'Pick a time', 'Your details'][step] ?? 'Your details'}`}
            />
          </div>

          <>

            {/* ── Step 0: Service type ── */}
            {step === 0 && (
              <div key="service" {...slide}>
                <h2 className="text-2xl font-bold tracking-tight mb-6">What do you need help with?</h2>
                <div className="grid gap-3 sm:grid-cols-2 mb-8">
                  {services.map(s => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.id}
                        onClick={() => { setForm(f => ({ ...f, serviceType: s.id })); setStep(1); }}
                        aria-pressed={form.serviceType === s.id}
                        className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card text-left transition-all hover:border-primary/30 hover:bg-card/80"
                      >
                        <Icon className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <div className="font-semibold">{s.label}</div>
                          <div className="text-sm text-muted-foreground mt-0.5">{s.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Trust signals */}
                <div className="grid sm:grid-cols-3 gap-3 text-center">
                  {[
                    { icon: Handshake, label: 'Real humans', sub: 'No bots or call centers' },
                    { icon: Star, label: 'Vetted techs', sub: 'ID-verified professionals' },
                    { icon: Heart, label: '100% free', sub: 'No fees or hidden charges' },
                  ].map(t => {
                    const TIcon = t.icon;
                    return (
                      <Card key={t.label} className="rounded-xl border border-border bg-card">
                        <CardContent className="p-4">
                          <div className="flex justify-center mb-2"><TIcon className="h-6 w-6 text-primary" aria-hidden="true" /></div>
                          <div className="text-sm font-medium">{t.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{t.sub}</div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Step 1: Date + time slot ── */}
            {step === 1 && (
              <div key="datetime" {...slide}>
                <h2 className="text-2xl font-bold tracking-tight mb-2">
                  When works for you?
                </h2>
                <p className="text-muted-foreground mb-6 flex items-center gap-2">
                  {selectedService && (() => { const SIcon = selectedService.icon; return <SIcon className="h-5 w-5 text-primary" />; })()}
                  {selectedService?.label}
                </p>

                {/* Date picker */}
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" /> Choose a date
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 mb-8" role="group" aria-label="Select a date">
                  {availableDates.map(d => (
                    <button
                      key={d.date}
                      onClick={() => setForm(f => ({ ...f, date: d.date }))}
                      aria-pressed={form.date === d.date}
                      aria-label={`${d.dayName} ${d.label}${form.date === d.date ? ' (selected)' : ''}`}
                      className={`flex flex-col items-center p-3 sm:p-3 rounded-lg border transition-all text-sm font-medium min-h-[64px] ${
                        form.date === d.date
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card hover:border-primary/30 hover:bg-card/80'
                      }`}
                    >
                      <span className="text-xs font-normal opacity-70" aria-hidden="true">{d.dayName}</span>
                      <span className="text-base font-bold" aria-hidden="true">{d.label.split(' ')[0]}</span>
                      <span className="text-xs opacity-70" aria-hidden="true">{d.label.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>

                {/* Time slot picker */}
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4" aria-hidden="true" /> Preferred time
                </h3>
                <div className="grid gap-3 sm:grid-cols-3 mb-8" role="group" aria-label="Select a time slot">
                  {slots.map(s => {
                    const SIcon = s.icon;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setForm(f => ({ ...f, slot: s.id }))}
                        aria-pressed={form.slot === s.id}
                        aria-label={`${s.label}, ${s.time}${form.slot === s.id ? ' (selected)' : ''}`}
                        className={`flex flex-col items-center gap-1 p-4 rounded-xl border transition-all ${
                          form.slot === s.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border bg-card hover:border-primary/30 hover:bg-card/80'
                        }`}
                      >
                        <SIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                        <span className="font-semibold text-sm">{s.label}</span>
                        <span className="text-xs text-muted-foreground">{s.time}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(0)} className="rounded-xl">← Back</Button>
                  <Button
                    disabled={!form.date || !form.slot}
                    onClick={() => setStep(2)}
                    className="ml-auto rounded-xl gap-2"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 2: Contact details + submit ── */}
            {step === 2 && (
              <div key="details" {...slide}>
                <h2 className="text-2xl font-bold tracking-tight mb-2">Your contact details</h2>
                <p className="text-muted-foreground mb-8">
                  We'll use these to confirm your appointment. All details are kept private.
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2 font-semibold">
                      <User className="h-4 w-4" /> Full name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Jane Smith"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2 mb-2 font-semibold">
                        <Mail className="h-4 w-4" /> Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="jane@email.com"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-2 mb-2 font-semibold">
                        <PhoneIcon className="h-4 w-4" /> Phone number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="(555) 123-4567"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="device" className="mb-2 block font-semibold">Device type (optional)</Label>
                    <select
                      id="device"
                      value={form.deviceType}
                      onChange={e => setForm(f => ({ ...f, deviceType: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a device…</option>
                      {deviceTypes.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="desc" className="flex items-center gap-2 mb-2 font-semibold">
                      <FileText className="h-4 w-4" /> Tell us more about the problem (optional)
                    </Label>
                    <Textarea
                      id="desc"
                      value={form.description}
                      onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                      placeholder="Describe what's happening — the more detail, the better prepared your technician will be…"
                      rows={4}
                      className="rounded-lg resize-none"
                    />
                  </div>
                </div>

                {/* Summary card */}
                <Card className="rounded-xl border border-border bg-card mb-8">
                  <CardContent className="p-4 text-sm space-y-2">
                    <p className="font-semibold mb-3">Booking summary</p>
                    <p className="flex items-center gap-2"><Wrench className="h-4 w-4 text-muted-foreground" /> <strong>{selectedService?.label}</strong></p>
                    <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /> <strong>{selectedDate?.dayName}, {selectedDate?.label}</strong></p>
                    <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-muted-foreground" /> <strong>{selectedSlot?.label}</strong> ({selectedSlot?.time})</p>
                    <p className="flex items-center gap-2"><Heart className="h-4 w-4 text-green-600" /> <strong className="text-green-600">Free — no charges</strong></p>
                  </CardContent>
                </Card>

                {error && <p role="alert" className="text-destructive text-sm mb-4 font-medium">{error}</p>}

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="rounded-xl">← Back</Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="ml-auto rounded-xl gap-2"
                  >
                    {submitting
                      ? <><Loader2 className="h-4 w-4 animate-spin" /> Booking…</>
                      : <><CheckCircle2 className="h-4 w-4" /> Confirm Booking</>}
                  </Button>
                </div>
              </div>
            )}

          </>
        </div>
      </main>
      <Footer />
    </>
  );
}
