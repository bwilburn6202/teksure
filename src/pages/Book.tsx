import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar, Clock, Wrench, CheckCircle2, ChevronRight, ArrowRight,
  Wifi, Shield, Monitor, Printer, Smartphone, HelpCircle, Loader2,
  User, Mail, Phone as PhoneIcon, FileText, CreditCard, Lock,
  Handshake, Star, DollarSign, Sunrise, Sun, Sunset,
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
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0=service, 1=datetime, 2=details, 3=payment, 4=success
  const [paymentOption, setPaymentOption] = useState<'deposit' | 'day'>('day');
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
  const progress = (step / 4) * 100;

  const selectedService = services.find(s => s.id === form.serviceType);
  const selectedDate = availableDates.find(d => d.date === form.date);
  const selectedSlot = slots.find(s => s.id === form.slot);

  /** Save booking to DB and return its ID, or throw */
  const createBookingRecord = async (payStatus: 'none' | 'deposit_pending') => {
    const { data, error: dbError } = await supabase.from('bookings').insert({
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
      payment_status: payStatus,
    }).select('id').single();
    if (dbError) throw dbError;
    return data?.id as string;
  };

  /** "Pay on the day" — save booking + confirmation email */
  const handleSubmit = async () => {
    setError('');
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    if (!form.email.trim() && !form.phone.trim()) { setError('Please enter an email or phone number so we can reach you.'); return; }

    setSubmitting(true);
    try {
      const bookingId = await createBookingRecord('none');

      // Confirmation email — non-blocking for user, but surface failures to console
      try {
        const { data: emailData, error: emailError } = await supabase.functions.invoke(
          'send-booking-confirmation',
          {
            body: {
              name: form.name,
              email: form.email || undefined,
              service: selectedService?.label,
              date: selectedDate?.label,
              slot: selectedSlot?.label,
              time: selectedSlot?.time,
              bookingId,
            },
          }
        );
        if (emailError) {
          console.error('send-booking-confirmation invoke error:', emailError);
        } else if (emailData && typeof emailData === 'object' && 'error' in emailData) {
          console.error('send-booking-confirmation returned error:', (emailData as { error: unknown }).error);
        }
      } catch (err) {
        console.error('send-booking-confirmation threw:', err);
      }

      setBookingRef(bookingId?.slice(0, 8).toUpperCase() ?? 'TEKSURE');
      setStep(5);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  /** "Pay $15 deposit" — save booking, create Stripe session, redirect */
  const handleStripeDeposit = async () => {
    setError('');
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    if (!form.email.trim() && !form.phone.trim()) { setError('Please enter an email or phone number so we can reach you.'); return; }

    setSubmitting(true);
    try {
      const bookingId = await createBookingRecord('deposit_pending');

      const { data: fnData, error: fnError } = await supabase.functions.invoke(
        'create-checkout-session',
        {
          body: {
            bookingId,
            customerName:  form.name,
            customerEmail: form.email || undefined,
            serviceLabel:  selectedService?.label,
            preferredDate: selectedDate ? `${selectedDate.dayName} ${selectedDate.label}` : undefined,
            preferredSlot: selectedSlot ? `${selectedSlot.label} (${selectedSlot.time})` : undefined,
          },
        },
      );

      if (fnError || !fnData?.url) {
        throw new Error(fnError?.message ?? 'Could not start checkout. Please try "Pay on the day" instead.');
      }

      // Redirect to Stripe Checkout
      window.location.href = fnData.url;
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Payment setup failed. Please try again.');
      setSubmitting(false);
    }
  };

  // Step 5 = success screen
  if (step === 5) {
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
            <div
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Booking confirmed!</h1>
              <p className="text-muted-foreground text-lg mb-6">
                We've got your booking for <strong>{selectedService?.label}</strong> on{' '}
                <strong>{selectedDate?.label}</strong> in the <strong>{selectedSlot?.label.toLowerCase()}</strong>.
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

  return (
    <>
      <SEOHead
        title="Book a Technician | TekSure"
        description="Book a real human technician to help with your tech problem — WiFi, setup, security, printers, and more. Starting at $15."
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
              price: '15.00',
              priceCurrency: 'USD',
              description: 'Starting deposit for technician booking',
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
              Real help from a real person. Choose a time that works for you — we'll confirm the appointment.
            </p>
          </div>

          {/* Progress */}
          <div
            className="mb-10"
          >
            <div className="flex justify-between text-sm text-muted-foreground mb-2" aria-hidden="true">
              <span>Step {step + 1} of 4</span>
              <span>{['Choose service', 'Pick a time', 'Your details', 'Payment'][step] ?? 'Payment'}</span>
            </div>
            <Progress
              value={progress}
              className="h-2"
              aria-label={`Booking progress: step ${step + 1} of 4 — ${['Choose service', 'Pick a time', 'Your details', 'Payment'][step] ?? 'Payment'}`}
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
                    { icon: DollarSign, label: 'No call-out fee', sub: 'Pay only if we fix it' },
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

            {/* ── Step 2: Contact details ── */}
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
                  </CardContent>
                </Card>

                {error && <p role="alert" className="text-destructive text-sm mb-4 font-medium">{error}</p>}

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="rounded-xl">← Back</Button>
                  <Button
                    onClick={() => {
                      if (!form.name.trim()) { setError('Please enter your name.'); return; }
                      if (!form.email.trim() && !form.phone.trim()) { setError('Please enter an email or phone number.'); return; }
                      setError('');
                      setStep(3);
                    }}
                    className="ml-auto rounded-xl gap-2"
                  >
                    Continue to Payment <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 3: Payment ── */}
            {step === 3 && (
              <div key="payment" {...slide}>
                <h2 className="text-2xl font-bold tracking-tight mb-2">Payment</h2>
                <p className="text-muted-foreground mb-8">Choose how you'd like to pay for your technician visit.</p>

                {/* Pricing info */}
                <Card className="rounded-xl border border-border bg-card mb-8">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Pricing</p>
                    <div className="flex justify-between text-sm mb-2">
                      <span>First hour</span><strong>$49</strong>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>Each additional hour</span><span>$29</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Most jobs take 1 hour. You only pay for the time spent — no fix, no charge.</p>
                  </CardContent>
                </Card>

                {/* Payment options */}
                <div role="radiogroup" aria-label="Payment option" className="space-y-3 mb-8">
                  <button
                    role="radio"
                    aria-checked={paymentOption === 'day'}
                    onClick={() => setPaymentOption('day')}
                    className={`w-full flex items-start gap-3 p-4 rounded-xl border transition-all text-left ${paymentOption === 'day' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentOption === 'day' ? 'border-primary' : 'border-border'}`} aria-hidden="true">
                      {paymentOption === 'day' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Pay on the day <span className="text-green-600 font-normal text-xs ml-1">Free to book</span></p>
                      <p className="text-xs text-muted-foreground mt-1">Pay the technician directly after the visit. Cash, card, or bank transfer accepted.</p>
                    </div>
                  </button>

                  <button
                    role="radio"
                    aria-checked={paymentOption === 'deposit'}
                    onClick={() => setPaymentOption('deposit')}
                    className={`w-full flex items-start gap-3 p-4 rounded-xl border transition-all text-left ${paymentOption === 'deposit' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentOption === 'deposit' ? 'border-primary' : 'border-border'}`} aria-hidden="true">
                      {paymentOption === 'deposit' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Pay $15 deposit now</p>
                      <p className="text-xs text-muted-foreground mt-1">Secure your booking with a small deposit. The remainder is paid on the day. Fully refundable if you cancel 24+ hours before.</p>
                    </div>
                  </button>
                </div>

                {/* Stripe secure checkout badge */}
                {paymentOption === 'deposit' && (
                  <Card className="rounded-xl border border-primary/20 bg-primary/5 mb-8">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Lock className="h-4 w-4 text-primary" aria-hidden="true" />
                        <p className="text-sm font-semibold">Secure checkout via Stripe</p>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        You'll be taken to Stripe's secure payment page to enter your card details. We never store your card information.
                      </p>
                      <div className="flex items-center justify-center gap-3 opacity-60">
                        <span className="text-xs font-medium tracking-wide">VISA</span>
                        <span className="text-xs font-medium tracking-wide">MC</span>
                        <span className="text-xs font-medium tracking-wide">AMEX</span>
                        <span className="text-xs font-medium tracking-wide">APPLE PAY</span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Booking summary */}
                <Card className="rounded-xl border border-border bg-card mb-8">
                  <CardContent className="p-4 text-sm space-y-2">
                    <p className="font-semibold mb-3">Booking summary</p>
                    <p className="flex items-center gap-2"><Wrench className="h-4 w-4 text-muted-foreground" /> <strong>{selectedService?.label}</strong></p>
                    <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /> <strong>{selectedDate?.dayName}, {selectedDate?.label}</strong></p>
                    <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-muted-foreground" /> <strong>{selectedSlot?.label}</strong> ({selectedSlot?.time})</p>
                    <p className="flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /> <strong>{form.name}</strong></p>
                    <p className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-muted-foreground" /> <strong>{paymentOption === 'deposit' ? 'Deposit $15 now + remainder on day' : 'Pay on the day'}</strong></p>
                  </CardContent>
                </Card>

                {error && <p role="alert" className="text-destructive text-sm mb-4 font-medium">{error}</p>}

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(2)} className="rounded-xl">← Back</Button>
                  <Button
                    onClick={paymentOption === 'deposit' ? handleStripeDeposit : handleSubmit}
                    disabled={submitting}
                    className="ml-auto rounded-xl gap-2"
                  >
                    {submitting
                      ? <><Loader2 className="h-4 w-4 animate-spin" /> {paymentOption === 'deposit' ? 'Redirecting to payment…' : 'Booking…'}</>
                      : paymentOption === 'deposit'
                      ? <><CreditCard className="h-4 w-4" /> Pay $15 deposit securely</>
                      : <><CheckCircle2 className="h-4 w-4" /> Confirm booking — pay on day</>}
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
