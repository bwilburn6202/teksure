import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  HeartPulse, ChevronRight, Pill, Phone, Calendar, Video,
  Car, MessageCircle, Apple, Printer,
  type LucideIcon,
} from 'lucide-react';

interface KitStep {
  id: string;
  title: string;
  detail: string;
  link?: { label: string; href: string };
}

interface KitSection {
  id: string;
  title: string;
  icon: LucideIcon;
  whyNow: string;
  items: KitStep[];
}

const SECTIONS: KitSection[] = [
  {
    id: 'meds',
    title: 'Medications',
    icon: Pill,
    whyNow: 'New prescriptions are the #1 thing that gets missed in the first 48 hours after discharge.',
    items: [
      {
        id: 'meds-1',
        title: 'Set up your pharmacy app',
        detail: 'CVS, Walgreens, Rite Aid, and most regional chains have free apps. Sign in once, set up auto-refill on every regular medication, and turn on notifications. The app tells you when prescriptions are ready, when refills run out, and lets you message the pharmacist.',
      },
      {
        id: 'meds-2',
        title: 'Add medication reminders to your phone',
        detail: 'iPhone: open the Health app → Browse → Medications → Add Medication. It will alert you at the right times, even if your phone is on silent. Android: install Medisafe (free) or use Google Keep with daily reminders.',
      },
      {
        id: 'meds-3',
        title: 'Photograph every prescription label and discharge paper',
        detail: 'Open the Notes app, create a folder called "Hospital — [date]", and take photos of every label, instruction sheet, and the printed discharge summary. If anything goes missing, you have copies.',
      },
      {
        id: 'meds-4',
        title: 'Update Medical ID on the lock screen',
        detail: 'iPhone: Health → Medical ID → Edit → add new medications, conditions, allergies. Turn ON "Show When Locked". First responders see this even if your phone is locked.',
      },
    ],
  },
  {
    id: 'follow-up',
    title: 'Follow-up appointments',
    icon: Calendar,
    whyNow: 'Most discharges include 1–3 follow-up appointments. Missed ones are a common reason people end up back in the hospital.',
    items: [
      {
        id: 'fu-1',
        title: 'Add every follow-up to the calendar',
        detail: 'iPhone or Android: open Calendar, tap "+", enter the doctor\'s name, address, date, and time. Set an alert 1 day before AND 2 hours before. If a family member helps with rides, share the calendar with them.',
      },
      {
        id: 'fu-2',
        title: 'Sign into the hospital\'s patient portal',
        detail: 'MyChart (Epic), MyHealthONE (HCA), Patient Gateway, and others. The hospital usually gives you a printout with the URL and a temporary password. Lab results, after-visit summaries, and follow-up appointments all show up there.',
      },
      {
        id: 'fu-3',
        title: 'Save the doctor and pharmacist phone numbers',
        detail: 'Add the discharging doctor\'s office, the pharmacy, and the hospital nurse line as contacts. If a question comes up at 2am, you do not want to be searching for a phone number.',
      },
    ],
  },
  {
    id: 'telehealth',
    title: 'Telehealth setup',
    icon: Video,
    whyNow: 'Many follow-ups can be done by video call now — saves a trip you may not feel up to.',
    items: [
      {
        id: 'th-1',
        title: 'Test the telehealth app before the appointment',
        detail: 'The hospital may use Zoom for Healthcare, Doxy.me, MyChart Video Visit, or another platform. The day before your appointment, open the link they sent and make sure your camera and microphone work. Save 30 minutes of stress on appointment day.',
      },
      {
        id: 'th-2',
        title: 'Pick a quiet, well-lit room',
        detail: 'A kitchen table with a window behind YOU (so light is on your face, not the camera) works best. Have a charger plugged into the phone or tablet — a video call will burn through battery fast.',
      },
      {
        id: 'th-3',
        title: 'Have your medication list ready on paper',
        detail: 'Doctors will ask. Print the list from the discharge papers or write it on an index card. Keep it next to the device during the call.',
      },
    ],
  },
  {
    id: 'transport',
    title: 'Transportation',
    icon: Car,
    whyNow: 'Driving may be limited for days or weeks. Knowing the options now beats scrambling later.',
    items: [
      {
        id: 'tr-1',
        title: 'Set up Uber Health or Lyft Concierge if your hospital offers it',
        detail: 'Some hospital systems book rides for follow-up appointments at no cost to you. Ask the discharge nurse: "Does our hospital offer transportation help?" before you leave.',
      },
      {
        id: 'tr-2',
        title: 'Install Uber or Lyft as a backup',
        detail: 'Even if a family member usually drives you, having one app set up as a backup is worth the 5 minutes. Use the "schedule a ride" feature to book it the night before so you do not have to think about it the morning of.',
      },
      {
        id: 'tr-3',
        title: 'Look up free senior transport in your county',
        detail: 'Most US counties offer free or low-cost senior transport (Area Agency on Aging, county transit). Search "[your county] senior transportation" or call 211 — they will tell you what is available.',
      },
    ],
  },
  {
    id: 'family',
    title: 'Stay connected with family',
    icon: MessageCircle,
    whyNow: 'Recovery goes better when family knows what is happening. Set up the channels once.',
    items: [
      {
        id: 'fa-1',
        title: 'Start a family group text or chat',
        detail: 'iMessage group, Facebook Messenger, or WhatsApp — whichever everyone already uses. Send one update a day so people do not call individually for status. "Today: feeling better, took meds, ate lunch." That is enough.',
      },
      {
        id: 'fa-2',
        title: 'Share your location with one trusted person',
        detail: 'iPhone: Find My → People → Share My Location → "Indefinitely" with one family member. Android: Google Maps → your photo → Location sharing. If you fall and cannot reach the phone, they can find you.',
      },
      {
        id: 'fa-3',
        title: 'Set up one-tap video calling',
        detail: 'For grandkids — set FaceTime or Google Meet to "Favorites" so they are one tap away. See our Grandparent Device Setup if you need help.',
        link: { label: 'Grandparent Device Setup', href: '/grandparent-device-setup' },
      },
    ],
  },
  {
    id: 'emergencies',
    title: 'Emergency readiness',
    icon: Phone,
    whyNow: 'A second hospital trip is exactly what we want to prevent. Set the safety net now.',
    items: [
      {
        id: 'em-1',
        title: 'Turn on Fall Detection',
        detail: 'If you have an Apple Watch, Pixel Watch, or Galaxy Watch, turn on automatic fall detection. After a hospital stay, the risk is real for several weeks.',
        link: { label: 'Fall Detection Setup', href: '/tools/fall-detection-setup' },
      },
      {
        id: 'em-2',
        title: 'Save the nurse hotline',
        detail: 'Most discharge papers list a 24/7 nurse line. Save it in your contacts as "Hospital Nurse Line" so you can find it when you need it.',
      },
      {
        id: 'em-3',
        title: 'Add 2–3 emergency contacts to your phone',
        detail: 'iPhone: Health → Medical ID → Emergency Contacts. Android: Settings → Safety & emergency → Emergency contacts. They get a text with your location if you trigger an SOS.',
      },
    ],
  },
  {
    id: 'meals',
    title: 'Meals and groceries',
    icon: Apple,
    whyNow: 'Cooking from scratch is hard the first week. Line up the simple options now so you do not skip meals.',
    items: [
      {
        id: 'me-1',
        title: 'Sign up for Instacart, Amazon Fresh, or Walmart+ once',
        detail: 'Pick whichever delivers in your zip code. Order pantry basics — milk, bread, fruit, the soft foods on your discharge sheet. Once an account exists, family can add to your cart from anywhere.',
      },
      {
        id: 'me-2',
        title: 'Look into Meals on Wheels',
        detail: 'After a hospital stay, you may qualify for free or low-cost prepared meals through Meals on Wheels America. Call 1-888-998-6325 or visit mealsonwheelsamerica.org/find-meals.',
      },
      {
        id: 'me-3',
        title: 'Stock up on water and electrolytes',
        detail: 'Have water bottles within arm\'s reach of where you sit and sleep. Pedialyte (yes, the kid one) helps with hospital-stay dehydration faster than soda or sport drinks.',
      },
    ],
  },
];

export default function HospitalDischargeKit() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const total = SECTIONS.reduce((s, sec) => s + sec.items.length, 0);

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const printIt = () => window.print();

  return (
    <>
      <SEOHead
        title="Hospital Discharge Tech Kit"
        description="The phone setup, app installs, and reminders to do the day someone comes home from the hospital. Free, plain-English, US-focused — covers medications, follow-ups, telehealth, transport, family contact, and emergency readiness."
        path="/tools/hospital-discharge-kit"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-rose-50 via-background to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <HeartPulse className="h-8 w-8 text-rose-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Hospital Discharge Tech Kit</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The phone setup to do the day someone comes home — so the next 30 days go smoother and a second hospital trip becomes less likely.
            </p>
            <p className="text-sm text-muted-foreground mt-3">About 30–45 minutes total. Best done with a family member alongside.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 print:hidden">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Hospital Discharge Kit' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
              <p className="text-sm text-muted-foreground">{done.size} of {total} done</p>
              <Button onClick={printIt} variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" /> Print the kit
              </Button>
            </CardContent>
          </Card>

          {/* Skip-ahead nav */}
          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Skip ahead</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {SECTIONS.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {SECTIONS.map(section => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="mb-8 scroll-mt-24">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{section.whyNow}</p>
                  </div>
                </div>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <div className="space-y-3">
                      {section.items.map(item => (
                        <label
                          key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            done.has(item.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'
                          }`}
                        >
                          <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                          <div className="flex-1">
                            <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                            {item.link && (
                              <Link to={item.link.href}
                                className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                                {item.link.label} <ChevronRight className="h-3 w-3" />
                              </Link>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Higher fall risk after a hospital stay.</p>
              </Link>
              <Link to="/caregiver" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Caregiver Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">More for the person helping recovery.</p>
              </Link>
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Plan recovery support together.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: do this kit alongside the patient — it doubles as the conversation about what they will need most.
          </p>
        </div>

        {/* Print version */}
        <div className="hidden print:block px-8 py-6 text-sm">
          <header className="border-b-2 border-black pb-3 mb-5">
            <h1 className="text-2xl font-bold">Hospital Discharge Tech Kit</h1>
            <p className="text-xs text-gray-600 mt-1">A 30-minute setup for the first weeks home — TekSure.com</p>
          </header>
          {SECTIONS.map(s => (
            <section key={s.id} className="mb-4 break-inside-avoid">
              <h2 className="font-bold uppercase tracking-wider text-xs mb-2">{s.title}</h2>
              <p className="text-xs text-gray-600 italic mb-2">{s.whyNow}</p>
              <ul className="space-y-1">
                {s.items.map(item => (
                  <li key={item.id} className="leading-snug">
                    <span className="font-mono mr-1">☐</span>
                    <strong>{item.title}.</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <footer className="mt-6 pt-3 border-t border-gray-300 text-xs text-gray-600">More free recovery tools at TekSure.com.</footer>
        </div>
      </main>

      <Footer />
    </>
  );
}
