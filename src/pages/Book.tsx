import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Calendar, Clock, Wrench, CheckCircle2, ChevronRight, ArrowRight,
  Wifi, Shield, Monitor, Printer, Smartphone, HelpCircle, Loader2,
  User, Mail, Phone as PhoneIcon, FileText, CreditCard, Lock,
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
const services: { id: ServiceType; label: string; icon: React.ElementType; desc: string; emoji: string }[] = [
  { id: 'wifi', label: 'WiFi & Internet', icon: Wifi, desc: 'Slow internet, connection drops, router setup', emoji: '📶' },
  { id: 'setup', label: 'New Device Setup', icon: Monitor, desc: 'Setting up a new computer, phone, or tablet', emoji: '🖥️' },
  { id: 'security', label: 'Virus & Security', icon: Shield, desc: 'Virus removal, scam recovery, securing accounts', emoji: '🔒' },
  { id: 'printer', label: 'Printer Problems', icon: Printer, desc: "Won't print, connection issues, driver setup", emoji: '🖨️' },
  { id: 'phone', label: 'Phone & Tablet', icon: Smartphone, desc: 'Apps, settings, backing up, slow performance', emoji: '📱' },
  { id: 'general', label: 'General Help', icon: HelpCircle, desc: "Not sure? We'll figure it out together", emoji: '🔧' },
];

const slots: { id: TimeSlot; label: string; time: string; emoji: string }[] = [
  { id: 'morning', label: 'Morning', time: '9am – 12pm', emoji: '🌅' },
  { id: 'afternoon', label: 'Afternoon', time: '12pm – 5pm', emoji: '☀️' },
  { id: 'evening', label: 'Evening', time: '5pm – 8pm', emoji: '🌆' },
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
      label: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      dayName: d.toLocaleDateString('en-GB', { weekday: 'short' }),
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

  const handleSubmit = async () => {
    setError('');
    if (!form.name.trim()) { setError('Please enter your name.'); return; }
    if (!form.email.trim() && !form.phone.trim()) { setError('Please enter an email or phone number so we can reach you.'); return; }

    setSubmitting(true);
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
    }).select('id').single();

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again or call us directly.');
      console.error(dbError);
      return;
    }

    // Fire-and-forget booking confirmation email
    supabase.functions.invoke('send-booking-confirmation', {
      body: {
        name: form.name,
        email: form.email || undefined,
        service: selectedService?.label,
        date: selectedDate?.label,
        slot: selectedSlot?.label,
        time: selectedSlot?.time,
        bookingId: data?.id,
      },
    }).catch(err => console.warn('Booking email failed (non-fatal):', err));

    setBookingRef(data?.id?.slice(0, 8).toUpperCase() ?? 'TEKSURE');
    setStep(5);
  };

  // Step 5 = success screen
  if (step === 5) {
    return (
      <>
        <SEOHead title="Booking Confirmed | TekSure" description="Your TekSure booking is confirmed." path="/book" />
        <Navbar />
        <main className="container py-24 min-h-[70vh] flex flex-col items-center justify-center text-center max-w-lg mx-auto gap-6">
          <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold">Booking confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            We've got your booking for <strong>{selectedService?.label}</strong> on{' '}
            <strong>{selectedDate?.label}</strong> in the <strong>{selectedSlot?.label.toLowerCase()}</strong>.
          </p>
          {form.email && (
            <p className="text-sm text-muted-foreground">
              A confirmation has been sent to <strong>{form.email}</strong>.
            </p>
          )}
          <div className="bg-muted rounded-xl px-6 py-4 w-full">
            <p className="text-xs text-muted-foreground mb-1">Booking reference</p>
            <p className="text-2xl font-mono font-bold tracking-widest">{bookingRef}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            One of our technicians will confirm your exact appointment time. They'll call or email you {form.phone ? 'at ' + form.phone : ''} before the appointment.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Button onClick={() => navigate('/my-requests')}>View My Bookings</Button>
            <Button variant="outline" onClick={() => navigate('/guides')}>Browse Free Guides</Button>
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
        description="Book a real human technician to help with your tech problem — WiFi, setup, security, printers, and more."
        path="/book"
      />
      <Navbar />
      <main className="container py-12 min-h-[80vh] max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Wrench className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold">Book a Technician</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Real help from a real person. Choose a time that works for you — we'll confirm the appointment.
        </p>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>Step {step + 1} of 4</span>
            <span>{['Choose service', 'Pick a time', 'Your details', 'Payment'][step] ?? 'Payment'}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">

          {/* ── Step 0: Service type ── */}
          {step === 0 && (
            <motion.div key="service" {...slide}>
              <h2 className="text-xl font-semibold mb-4">What do you need help with?</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map(s => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => { setForm(f => ({ ...f, serviceType: s.id })); setStep(1); }}
                      className="flex items-start gap-3 p-4 rounded-xl border-2 border-border bg-card text-left transition-all hover:border-secondary/60 hover:bg-secondary/5 hover:shadow-sm"
                    >
                      <span className="text-2xl shrink-0">{s.emoji}</span>
                      <div>
                        <div className="font-medium">{s.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Trust signals */}
              <div className="mt-8 grid sm:grid-cols-3 gap-3 text-center">
                {[
                  { emoji: '🤝', label: 'Real humans', sub: 'No bots or call centres' },
                  { emoji: '⭐', label: 'Vetted techs', sub: 'ID-verified professionals' },
                  { emoji: '💰', label: 'No call-out fee', sub: 'Pay only if we fix it' },
                ].map(t => (
                  <div key={t.label} className="rounded-xl border bg-card p-3">
                    <div className="text-2xl mb-1">{t.emoji}</div>
                    <div className="text-sm font-medium">{t.label}</div>
                    <div className="text-xs text-muted-foreground">{t.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Step 1: Date + time slot ── */}
          {step === 1 && (
            <motion.div key="datetime" {...slide}>
              <h2 className="text-xl font-semibold mb-4">
                When works for you?
                <span className="ml-2 text-base font-normal text-muted-foreground">— {selectedService?.emoji} {selectedService?.label}</span>
              </h2>

              {/* Date picker */}
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Choose a date
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-6">
                {availableDates.map(d => (
                  <button
                    key={d.date}
                    onClick={() => setForm(f => ({ ...f, date: d.date }))}
                    className={`flex flex-col items-center p-2.5 rounded-xl border-2 transition-all text-sm font-medium ${
                      form.date === d.date
                        ? 'border-secondary bg-secondary text-secondary-foreground'
                        : 'border-border bg-card hover:border-secondary/60 hover:bg-secondary/5'
                    }`}
                  >
                    <span className="text-xs font-normal opacity-70">{d.dayName}</span>
                    <span className="text-base font-bold">{d.label.split(' ')[0]}</span>
                    <span className="text-xs opacity-70">{d.label.split(' ')[1]}</span>
                  </button>
                ))}
              </div>

              {/* Time slot picker */}
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Preferred time
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 mb-6">
                {slots.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setForm(f => ({ ...f, slot: s.id }))}
                    className={`flex flex-col items-center gap-1 p-4 rounded-xl border-2 transition-all ${
                      form.slot === s.id
                        ? 'border-secondary bg-secondary/10'
                        : 'border-border bg-card hover:border-secondary/60 hover:bg-secondary/5'
                    }`}
                  >
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="font-medium">{s.label}</span>
                    <span className="text-xs text-muted-foreground">{s.time}</span>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep(0)}>← Back</Button>
                <Button
                  disabled={!form.date || !form.slot}
                  onClick={() => setStep(2)}
                  className="ml-auto"
                >
                  Continue <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ── Step 2: Contact details ── */}
          {step === 2 && (
            <motion.div key="details" {...slide}>
              <h2 className="text-xl font-semibold mb-1">Your contact details</h2>
              <p className="text-muted-foreground text-sm mb-6">
                We'll use these to confirm your appointment. All details are kept private.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-1.5">
                    <User className="h-4 w-4" /> Full name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-1.5">
                      <Mail className="h-4 w-4" /> Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-1.5">
                      <PhoneIcon className="h-4 w-4" /> Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="07700 900000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="device" className="mb-1.5 block">Device type (optional)</Label>
                  <select
                    id="device"
                    value={form.deviceType}
                    onChange={e => setForm(f => ({ ...f, deviceType: e.target.value }))}
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a device…</option>
                    {deviceTypes.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <Label htmlFor="desc" className="flex items-center gap-2 mb-1.5">
                    <FileText className="h-4 w-4" /> Tell us more about the problem (optional)
                  </Label>
                  <Textarea
                    id="desc"
                    value={form.description}
                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    placeholder="Describe what's happening — the more detail, the better prepared your technician will be…"
                    rows={4}
                  />
                </div>
              </div>

              {/* Summary card */}
              <Card className="mb-6 bg-muted/40">
                <CardContent className="p-4 text-sm space-y-1">
                  <p className="font-semibold mb-2">Booking summary</p>
                  <p>🔧 <strong>{selectedService?.label}</strong></p>
                  <p>📅 <strong>{selectedDate?.dayName}, {selectedDate?.label}</strong></p>
                  <p>🕐 <strong>{selectedSlot?.label}</strong> ({selectedSlot?.time})</p>
                </CardContent>
              </Card>

              {error && <p className="text-destructive text-sm mb-4">{error}</p>}

              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep(1)}>← Back</Button>
                <Button
                  onClick={() => {
                    if (!form.name.trim()) { setError('Please enter your name.'); return; }
                    if (!form.email.trim() && !form.phone.trim()) { setError('Please enter an email or phone number.'); return; }
                    setError('');
                    setStep(3);
                  }}
                  className="ml-auto gap-2"
                >
                  Continue to Payment <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Payment ── */}
          {step === 3 && (
            <motion.div key="payment" {...slide}>
              <h2 className="text-xl font-semibold mb-1">Payment</h2>
              <p className="text-muted-foreground text-sm mb-5">Choose how you'd like to pay for your technician visit.</p>

              {/* Pricing info */}
              <Card className="mb-5 bg-muted/30">
                <CardContent className="p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pricing</p>
                  <div className="flex justify-between text-sm mb-1">
                    <span>First hour</span><strong>£49</strong>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mb-3">
                    <span>Each additional hour</span><span>£29</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Most jobs take 1 hour. You only pay for the time spent — no fix, no charge.</p>
                </CardContent>
              </Card>

              {/* Payment options */}
              <div className="space-y-3 mb-5">
                <button
                  onClick={() => setPaymentOption('day')}
                  className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 transition-all text-left ${paymentOption === 'day' ? 'border-secondary bg-secondary/5' : 'border-border hover:border-secondary/40'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentOption === 'day' ? 'border-secondary' : 'border-border'}`}>
                    {paymentOption === 'day' && <div className="w-2.5 h-2.5 rounded-full bg-secondary" />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Pay on the day <span className="text-green-600 font-normal text-xs ml-1">Free to book</span></p>
                    <p className="text-xs text-muted-foreground mt-0.5">Pay the technician directly after the visit. Cash, card, or bank transfer accepted.</p>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentOption('deposit')}
                  className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 transition-all text-left ${paymentOption === 'deposit' ? 'border-secondary bg-secondary/5' : 'border-border hover:border-secondary/40'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentOption === 'deposit' ? 'border-secondary' : 'border-border'}`}>
                    {paymentOption === 'deposit' && <div className="w-2.5 h-2.5 rounded-full bg-secondary" />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Pay £15 deposit now</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Secure your booking with a small deposit. The remainder is paid on the day. Fully refundable if you cancel 24+ hours before.</p>
                  </div>
                </button>
              </div>

              {/* Stripe checkout placeholder */}
              {paymentOption === 'deposit' && (
                <Card className="mb-5 border-dashed border-secondary/40">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="h-4 w-4 text-secondary" />
                      <p className="text-sm font-medium">Card details</p>
                      <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="h-3 w-3" /> Secured by Stripe
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-10 rounded-md bg-muted border border-border flex items-center px-3 text-sm text-muted-foreground">
                        Card number — payment coming soon
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-10 rounded-md bg-muted border border-border" />
                        <div className="h-10 rounded-md bg-muted border border-border" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Online payments will be available soon. Please select "Pay on the day" to complete your booking now.</p>
                  </CardContent>
                </Card>
              )}

              {/* Booking summary */}
              <Card className="mb-5 bg-muted/40">
                <CardContent className="p-4 text-sm space-y-1">
                  <p className="font-semibold mb-2">Booking summary</p>
                  <p>🔧 <strong>{selectedService?.label}</strong></p>
                  <p>📅 <strong>{selectedDate?.dayName}, {selectedDate?.label}</strong></p>
                  <p>🕐 <strong>{selectedSlot?.label}</strong> ({selectedSlot?.time})</p>
                  <p>👤 <strong>{form.name}</strong></p>
                  <p>💳 <strong>{paymentOption === 'deposit' ? 'Deposit £15 now + remainder on day' : 'Pay on the day'}</strong></p>
                </CardContent>
              </Card>

              {error && <p className="text-destructive text-sm mb-4">{error}</p>}

              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep(2)}>← Back</Button>
                <Button
                  onClick={handleSubmit}
                  disabled={submitting || paymentOption === 'deposit'}
                  className="ml-auto gap-2"
                >
                  {submitting
                    ? <><Loader2 className="h-4 w-4 animate-spin" /> Booking…</>
                    : paymentOption === 'deposit'
                    ? <><CreditCard className="h-4 w-4" /> Pay £15 deposit (coming soon)</>
                    : <><CheckCircle2 className="h-4 w-4" /> Confirm booking — pay on day</>}
                </Button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
