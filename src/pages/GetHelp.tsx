import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Phone, Mail, User, Monitor, MessageSquare, CheckCircle, ArrowRight, Loader2,
  Calendar, Clock, Wrench, CheckCircle2, Wifi, Shield, Printer, Smartphone,
  HelpCircle, CreditCard, Lock, Sunrise, Sun, Sunset, Zap, CalendarClock,
} from 'lucide-react';
import { checkRateLimit } from '@/lib/rateLimit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

type Mode = 'asap' | 'schedule';
type ServiceType = 'wifi' | 'setup' | 'security' | 'printer' | 'phone' | 'general';
type TimeSlot = 'morning' | 'afternoon' | 'evening';

const deviceOptions = [
  { value: 'phone', label: 'Phone' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'computer', label: 'Computer' },
  { value: 'tv', label: 'TV / Streaming Device' },
  { value: 'smart-home', label: 'Smart Home Device' },
  { value: 'other', label: 'Other' },
];

const services: { id: ServiceType; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'wifi',     label: 'WiFi & Internet',   icon: Wifi,       desc: 'Slow internet, dropouts, router setup' },
  { id: 'setup',    label: 'New Device Setup',  icon: Monitor,    desc: 'New computer, phone, or tablet' },
  { id: 'security', label: 'Virus & Security',  icon: Shield,     desc: 'Virus removal, scam recovery, account security' },
  { id: 'printer',  label: 'Printer Problems',  icon: Printer,    desc: "Won't print, connection issues, drivers" },
  { id: 'phone',    label: 'Phone & Tablet',    icon: Smartphone, desc: 'Apps, settings, backups, slow performance' },
  { id: 'general',  label: 'General Help',      icon: HelpCircle, desc: "Not sure? We'll figure it out together" },
];

const timeSlots: { id: TimeSlot; label: string; time: string; icon: React.ElementType }[] = [
  { id: 'morning',   label: 'Morning',   time: '9am – 12pm', icon: Sunrise },
  { id: 'afternoon', label: 'Afternoon', time: '12pm – 5pm', icon: Sun },
  { id: 'evening',   label: 'Evening',   time: '5pm – 8pm',  icon: Sunset },
];

function getAvailableDates(): { date: string; label: string; dayName: string }[] {
  const dates: { date: string; label: string; dayName: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
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

const GetHelp = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialMode: Mode = searchParams.get('mode') === 'schedule' ? 'schedule' : 'asap';
  const [mode, setMode] = useState<Mode>(initialMode);

  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    next.set('mode', mode);
    setSearchParams(next, { replace: true });
  }, [mode, searchParams, setSearchParams]);

  // ── Shared form state ───────────────────────────────────────
  const [name, setName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // ── ASAP flow state ─────────────────────────────────────────
  const [submitted, setSubmitted] = useState(false);

  // ── Schedule flow state ─────────────────────────────────────
  const [step, setStep] = useState(0); // 0=service, 1=date/time, 2=payment, 3=success
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [scheduleDate, setScheduleDate] = useState<string | null>(null);
  const [scheduleSlot, setScheduleSlot] = useState<TimeSlot | null>(null);
  const [paymentOption, setPaymentOption] = useState<'day' | 'deposit'>('day');
  const [bookingRef, setBookingRef] = useState('');

  const availableDates = getAvailableDates();
  const selectedService = services.find((s) => s.id === serviceType);
  const selectedDate = availableDates.find((d) => d.date === scheduleDate);
  const selectedSlot = timeSlots.find((s) => s.id === scheduleSlot);
  const progress = (step / 3) * 100;

  // ── ASAP submit ─────────────────────────────────────────────
  const submitAsap = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!checkRateLimit('help-request', 3, 300_000)) {
      setError('You\'ve submitted several requests recently. Please wait a few minutes before trying again.');
      return;
    }
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
      console.error(dbError);
      setError('Something went wrong. Please try again or call us directly.');
      return;
    }

    try {
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-help-confirmation', {
        body: {
          name: name.trim() || undefined,
          email: email.trim() || undefined,
          phone: phone.trim() || undefined,
          device_type: deviceType || undefined,
          problem_description: description.trim() || undefined,
        },
      });
      if (emailError) console.error('send-help-confirmation invoke error:', emailError);
      else if (emailData && typeof emailData === 'object' && 'error' in emailData) {
        console.error('send-help-confirmation returned error:', (emailData as { error: unknown }).error);
      }
    } catch (err) {
      console.error('send-help-confirmation threw:', err);
    }

    setSubmitted(true);
  };

  // ── Schedule submit helpers ─────────────────────────────────
  const createBookingRecord = async (payStatus: 'none' | 'deposit_pending') => {
    const { data, error: dbError } = await supabase
      .from('bookings')
      .insert({
        user_id: user?.id ?? null,
        name: name.trim(),
        email: email.trim() || null,
        phone: phone.trim() || null,
        service_type: serviceType!,
        device_type: deviceType || null,
        preferred_date: scheduleDate!,
        preferred_slot: scheduleSlot!,
        problem_description: description.trim() || null,
        status: 'pending',
        payment_status: payStatus,
      })
      .select('id')
      .single();
    if (dbError) throw dbError;
    return data?.id as string;
  };

  const submitPayOnDay = async () => {
    setError('');
    if (!name.trim()) { setError('Please enter your name.'); return; }
    if (!email.trim() && !phone.trim()) { setError('Please enter an email or phone so we can reach you.'); return; }

    setSubmitting(true);
    try {
      const bookingId = await createBookingRecord('none');
      try {
        const { data: emailData, error: emailError } = await supabase.functions.invoke('send-booking-confirmation', {
          body: {
            name: name.trim(),
            email: email.trim() || undefined,
            service: selectedService?.label,
            date: selectedDate?.label,
            slot: selectedSlot?.label,
            time: selectedSlot?.time,
            bookingId,
          },
        });
        if (emailError) console.error('send-booking-confirmation invoke error:', emailError);
        else if (emailData && typeof emailData === 'object' && 'error' in emailData) {
          console.error('send-booking-confirmation returned error:', (emailData as { error: unknown }).error);
        }
      } catch (err) {
        console.error('send-booking-confirmation threw:', err);
      }
      setBookingRef(bookingId?.slice(0, 8).toUpperCase() ?? 'TEKSURE');
      setStep(3);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const submitStripeDeposit = async () => {
    setError('');
    if (!name.trim()) { setError('Please enter your name.'); return; }
    if (!email.trim() && !phone.trim()) { setError('Please enter an email or phone so we can reach you.'); return; }

    setSubmitting(true);
    try {
      const bookingId = await createBookingRecord('deposit_pending');
      const { data: fnData, error: fnError } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          bookingId,
          customerName: name.trim(),
          customerEmail: email.trim() || undefined,
          serviceLabel: selectedService?.label,
          preferredDate: selectedDate ? `${selectedDate.dayName} ${selectedDate.label}` : undefined,
          preferredSlot: selectedSlot ? `${selectedSlot.label} (${selectedSlot.time})` : undefined,
        },
      });
      if (fnError || !fnData?.url) {
        throw new Error(fnError?.message ?? 'Could not start checkout. Please try "Pay on the day" instead.');
      }
      window.location.href = fnData.url;
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Payment setup failed. Please try again.');
      setSubmitting(false);
    }
  };

  // ── ASAP success screen ─────────────────────────────────────
  if (mode === 'asap' && submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SEOHead title="Request received — TekSure" description="Your TekSure help request has been received." path="/get-help" />
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
              While you wait, browse our free guides.
            </p>
            <Button onClick={() => navigate('/guides')} className="gap-2 rounded-xl" size="lg">
              Browse Free Guides <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Schedule success screen ─────────────────────────────────
  if (mode === 'schedule' && step === 3) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SEOHead title="Booking confirmed — TekSure" description="Your TekSure booking is confirmed." path="/get-help" />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          <div className="container py-24 flex flex-col items-center justify-center text-center max-w-lg mx-auto gap-8">
            <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Booking confirmed!</h1>
              <p className="text-muted-foreground text-lg mb-6">
                We've got your booking for <strong>{selectedService?.label}</strong> on{' '}
                <strong>{selectedDate?.label}</strong> in the <strong>{selectedSlot?.label.toLowerCase()}</strong>.
              </p>
              {email && (
                <p className="text-sm text-muted-foreground mb-6">
                  A confirmation has been sent to <strong>{email}</strong>.
                </p>
              )}
            </div>
            <Card className="rounded-2xl border border-border bg-card w-full">
              <CardContent className="p-6">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Booking reference</p>
                <p className="text-3xl font-mono font-bold tracking-widest">{bookingRef}</p>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              One of our technicians will confirm your exact appointment time. They'll call or email you{phone ? ` at ${phone}` : ''} before the appointment.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button onClick={() => navigate('/my-requests')} className="rounded-xl">View My Bookings</Button>
              <Button variant="outline" onClick={() => navigate('/guides')} className="rounded-xl">Browse Free Guides</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background:
          'radial-gradient(1000px 500px at 50% -10%, #F5CDCB 0%, rgba(245,205,203,0) 60%), radial-gradient(800px 400px at 90% 10%, #FBDAD9 0%, rgba(251,218,217,0) 60%), #FAF8F4',
      }}
    >
      <SEOHead
        title="Get Tech Help — TekSure"
        description="Reach out for free tech support or schedule a technician appointment. Real humans, no jargon."
        path="/get-help"
      />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col py-12 md:py-16 px-4 outline-none">
        <div className="max-w-2xl w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Get Tech Help</h1>
            <p className="text-muted-foreground text-lg">
              Tell us what's happening — we'll get someone real to help. No jargon, no runaround.
            </p>
          </div>

          {/* Mode toggle */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <button
              type="button"
              onClick={() => setMode('asap')}
              aria-pressed={mode === 'asap'}
              className={`text-left rounded-2xl border-2 transition-colors px-5 py-5 ${
                mode === 'asap'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Zap className={`h-5 w-5 ${mode === 'asap' ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className="font-semibold">Reach out to me</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Free. A real person will call or email you as soon as possible.
              </p>
            </button>
            <button
              type="button"
              onClick={() => setMode('schedule')}
              aria-pressed={mode === 'schedule'}
              className={`text-left rounded-2xl border-2 transition-colors px-5 py-5 ${
                mode === 'schedule'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <CalendarClock className={`h-5 w-5 ${mode === 'schedule' ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className="font-semibold">Schedule a time</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Pick a date and time. Pay on the day, or secure with a $15 deposit.
              </p>
            </button>
          </div>

          {/* ── ASAP form ─────────────────────────────────────── */}
          {mode === 'asap' && (
            <form onSubmit={submitAsap} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  Phone Number <span className="text-primary font-semibold"></span>
                </Label>
                <Input id="phone" type="tel" autoComplete="tel" placeholder="(555) 867-5309" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-11 text-base rounded-xl border-border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email Address
                </Label>
                <Input id="email" type="email" autoComplete="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11 text-base rounded-xl border-border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Your Name
                </Label>
                <Input id="name" type="text" autoComplete="given-name" placeholder="First name is fine" value={name} onChange={(e) => setName(e.target.value)} className="h-11 text-base rounded-xl border-border" />
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
                    {deviceOptions.map((d) => (
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
                <Textarea id="description" placeholder="Describe your issue in plain English — no jargon needed." value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="text-base resize-none rounded-xl border-border" />
              </div>

              {error && (
                <div role="alert" className="bg-destructive/10 border border-destructive/30 text-destructive rounded-xl px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={submitting} aria-busy={submitting} className="w-full h-11 text-base gap-2 rounded-xl" size="lg">
                {submitting
                  ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...</>
                  : <>Send Request <ArrowRight className="h-4 w-4" aria-hidden="true" /></>}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. No sales pitch. Just real tech help.
              </p>
            </form>
          )}

          {/* ── Schedule flow ─────────────────────────────────── */}
          {mode === 'schedule' && (
            <>
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2" aria-hidden="true">
                  <span>Step {step + 1} of 3</span>
                  <span>{['Choose service', 'Pick a time', 'Your details & payment'][step] ?? ''}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {step === 0 && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">What do you need help with?</h2>
                  <div className="grid gap-3 sm:grid-cols-2 mb-4">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.id}
                          onClick={() => { setServiceType(s.id); setStep(1); }}
                          aria-pressed={serviceType === s.id}
                          className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card text-left hover:border-primary/30 hover:bg-card/80 transition-colors"
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
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">When works for you?</h2>
                  <p className="text-muted-foreground mb-6 flex items-center gap-2">
                    {selectedService && (() => { const SIcon = selectedService.icon; return <SIcon className="h-5 w-5 text-primary" />; })()}
                    {selectedService?.label}
                  </p>

                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" /> Choose a date
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 mb-8" role="group" aria-label="Select a date">
                    {availableDates.map((d) => (
                      <button
                        key={d.date}
                        onClick={() => setScheduleDate(d.date)}
                        aria-pressed={scheduleDate === d.date}
                        aria-label={`${d.dayName} ${d.label}${scheduleDate === d.date ? ' (selected)' : ''}`}
                        className={`flex flex-col items-center p-3 rounded-lg border transition-colors text-sm font-medium min-h-[64px] ${
                          scheduleDate === d.date
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

                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" /> Preferred time
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-3 mb-8" role="group" aria-label="Select a time slot">
                    {timeSlots.map((s) => {
                      const SIcon = s.icon;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setScheduleSlot(s.id)}
                          aria-pressed={scheduleSlot === s.id}
                          aria-label={`${s.label}, ${s.time}${scheduleSlot === s.id ? ' (selected)' : ''}`}
                          className={`flex flex-col items-center gap-1 p-4 rounded-xl border transition-colors ${
                            scheduleSlot === s.id
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
                    <Button disabled={!scheduleDate || !scheduleSlot} onClick={() => setStep(2)} className="ml-auto rounded-xl gap-2">
                      Continue <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">Your details &amp; payment</h2>
                  <p className="text-muted-foreground mb-8">We'll use these to confirm your appointment.</p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <Label htmlFor="name" className="flex items-center gap-2 mb-2 font-semibold">
                        <User className="h-4 w-4" /> Full name <span className="text-destructive">*</span>
                      </Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className="rounded-lg" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="flex items-center gap-2 mb-2 font-semibold">
                          <Mail className="h-4 w-4" /> Email
                        </Label>
                        <Input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@email.com" className="rounded-lg" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2 mb-2 font-semibold">
                          <Phone className="h-4 w-4" /> Phone
                        </Label>
                        <Input id="phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" className="rounded-lg" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="device-select" className="mb-2 block font-semibold">Device type (optional)</Label>
                      <Select value={deviceType} onValueChange={setDeviceType}>
                        <SelectTrigger id="device-select" className="rounded-lg">
                          <SelectValue placeholder="Pick one…" />
                        </SelectTrigger>
                        <SelectContent>
                          {deviceOptions.map((d) => (
                            <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="desc" className="flex items-center gap-2 mb-2 font-semibold">
                        <MessageSquare className="h-4 w-4" /> Describe the problem (optional)
                      </Label>
                      <Textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe what's happening — the more detail, the better prepared your technician will be." rows={4} className="rounded-lg resize-none" />
                    </div>
                  </div>

                  {/* Pricing + payment option */}
                  <Card className="rounded-xl border border-border bg-card mb-6">
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Pricing</p>
                      <div className="flex justify-between text-sm mb-2"><span>First hour</span><strong>$49</strong></div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-3"><span>Each additional hour</span><span>$29</span></div>
                      <p className="text-xs text-muted-foreground">Most jobs take 1 hour. You only pay for time spent — no fix, no charge.</p>
                    </CardContent>
                  </Card>

                  <div role="radiogroup" aria-label="Payment option" className="space-y-3 mb-6">
                    <button
                      role="radio"
                      aria-checked={paymentOption === 'day'}
                      onClick={() => setPaymentOption('day')}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border transition-colors text-left ${paymentOption === 'day' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentOption === 'day' ? 'border-primary' : 'border-border'}`} aria-hidden="true">
                        {paymentOption === 'day' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Pay on the day <span className="text-green-600 font-normal text-xs ml-1">Free to book</span></p>
                        <p className="text-xs text-muted-foreground mt-1">Pay the technician directly after the visit. Cash, card, or bank transfer.</p>
                      </div>
                    </button>

                    <button
                      role="radio"
                      aria-checked={paymentOption === 'deposit'}
                      onClick={() => setPaymentOption('deposit')}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border transition-colors text-left ${paymentOption === 'deposit' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${paymentOption === 'deposit' ? 'border-primary' : 'border-border'}`} aria-hidden="true">
                        {paymentOption === 'deposit' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Pay $15 deposit now</p>
                        <p className="text-xs text-muted-foreground mt-1">Secure your booking with a small deposit. Refundable if you cancel 24+ hours before.</p>
                      </div>
                    </button>
                  </div>

                  {paymentOption === 'deposit' && (
                    <Card className="rounded-xl border border-primary/20 bg-primary/5 mb-6">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Lock className="h-4 w-4 text-primary" aria-hidden="true" />
                          <p className="text-sm font-semibold">Secure checkout via Stripe</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          You'll be taken to Stripe's secure payment page. We never store your card.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  <Card className="rounded-xl border border-border bg-card mb-6">
                    <CardContent className="p-4 text-sm space-y-2">
                      <p className="font-semibold mb-3">Summary</p>
                      <p className="flex items-center gap-2"><Wrench className="h-4 w-4 text-muted-foreground" /> <strong>{selectedService?.label}</strong></p>
                      <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /> <strong>{selectedDate?.dayName}, {selectedDate?.label}</strong></p>
                      <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-muted-foreground" /> <strong>{selectedSlot?.label}</strong> ({selectedSlot?.time})</p>
                      <p className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-muted-foreground" /> <strong>{paymentOption === 'deposit' ? 'Deposit $15 now + remainder on day' : 'Pay on the day'}</strong></p>
                    </CardContent>
                  </Card>

                  {error && <p role="alert" className="text-destructive text-sm mb-4 font-medium">{error}</p>}

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="rounded-xl">← Back</Button>
                    <Button
                      onClick={paymentOption === 'deposit' ? submitStripeDeposit : submitPayOnDay}
                      disabled={submitting}
                      className="ml-auto rounded-xl gap-2"
                    >
                      {submitting
                        ? <><Loader2 className="h-4 w-4 animate-spin" /> {paymentOption === 'deposit' ? 'Redirecting to payment…' : 'Booking…'}</>
                        : paymentOption === 'deposit'
                        ? <><CreditCard className="h-4 w-4" /> Pay $15 deposit securely</>
                        : <><CheckCircle2 className="h-4 w-4" /> Confirm — pay on day</>}
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetHelp;
