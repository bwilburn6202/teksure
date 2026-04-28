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
  Video, ChevronRight, Printer, type LucideIcon,
  Wifi, Pill, Camera, FileText, Clock, Smartphone,
} from 'lucide-react';

interface Item {
  id: string;
  title: string;
  detail: string;
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  when: string;
  items: Item[];
}

const SECTIONS: Section[] = [
  {
    id: 'before',
    title: 'A day before',
    when: 'Pick a quiet 10 minutes the night before.',
    icon: Clock,
    items: [
      { id: 'b1', title: 'Find the appointment link', detail: 'Check your email for a link from MyChart, Doxy.me, Zoom for Healthcare, or whatever your provider uses. Forward it to yourself a second time so it is at the top of your inbox tomorrow.' },
      { id: 'b2', title: 'Test the link in advance', detail: 'Tap the link now, not at appointment time. The first time you open a telehealth app, it asks for camera and microphone permission. Sort that out today.' },
      { id: 'b3', title: 'Make sure the device is charged or plugged in', detail: 'Video calls drain a phone or tablet fast. If on a phone or tablet, plug it in. If on a laptop, plug it in.' },
      { id: 'b4', title: 'Pick the room', detail: 'Quiet, well-lit. A window behind you (with light on your face, not the camera) is best. Kitchen table works well.' },
    ],
  },
  {
    id: 'meds',
    title: 'Have ready',
    when: 'Print or write on a card. Keep it next to the device.',
    icon: Pill,
    items: [
      { id: 'm1', title: 'A current list of every medication', detail: 'Name, dose, how often. Include over-the-counter pills and supplements. The doctor will ask. Photograph the bottle labels if it is faster.' },
      { id: 'm2', title: 'Recent test results or vitals', detail: 'If you measure your blood pressure, blood sugar, or weight at home, write down the last week of numbers.' },
      { id: 'm3', title: 'Your top 3 questions', detail: 'Write them down. Telehealth time is short. Big questions go first — anything left over goes in a follow-up message through the patient portal.' },
      { id: 'm4', title: 'Your pharmacy phone number', detail: 'If the doctor wants to send a new prescription, they will ask which pharmacy. "CVS on 5th street" is not enough — the address and phone are.' },
    ],
  },
  {
    id: 'check',
    title: '15 minutes before',
    when: 'Stop everything else.',
    icon: Wifi,
    items: [
      { id: 'c1', title: 'Open the app or click the link', detail: 'Some platforms put you in a "waiting room" until the doctor joins. Better to be there 5 minutes early than 5 minutes late.' },
      { id: 'c2', title: 'Test the camera and microphone', detail: 'You should see your own face and hear your own voice when the camera is on. If not, close everything and re-open the app — usually fixes it.' },
      { id: 'c3', title: 'Close other tabs and apps', detail: 'On a laptop, close everything except the telehealth window. On a phone, close apps in the background. Leaves more memory for the call.' },
      { id: 'c4', title: 'Mute everything else', detail: 'Phone on Do Not Disturb. TV off. Pets in another room.' },
    ],
  },
  {
    id: 'during',
    title: 'During the call',
    when: '',
    icon: Video,
    items: [
      { id: 'd1', title: 'Speak slowly and look at the camera', detail: 'The doctor reads facial expressions. Looking at the green dot near the camera (not at the screen) makes them feel like you are looking at them.' },
      { id: 'd2', title: 'Move into good light if needed', detail: 'If the doctor cannot see your skin tone, your eyes, or a rash you want to show — face the window or turn on a lamp.' },
      { id: 'd3', title: 'Show, do not only describe', detail: 'For rashes, swelling, or wounds — point the camera right at it. The doctor can see things in 4K that they could not see on a phone call.' },
      { id: 'd4', title: 'Take notes or have someone else do it', detail: 'It is fair to ask a family member to listen with you and take notes. Or ask the doctor "could you summarise that in a portal message?" — most will.' },
    ],
  },
  {
    id: 'after',
    title: 'After the visit',
    when: '',
    icon: FileText,
    items: [
      { id: 'a1', title: 'Check the patient portal that night', detail: 'The doctor usually posts an "after-visit summary" with everything discussed. Read it. If anything is wrong, message back through the portal.' },
      { id: 'a2', title: 'Confirm prescriptions arrived at the pharmacy', detail: 'Call the pharmacy or check the pharmacy app. Sometimes prescriptions get stuck in the system.' },
      { id: 'a3', title: 'Add follow-up items to your calendar', detail: 'New meds — set reminders. Lab work — book it. Next appointment — calendar it.' },
    ],
  },
];

interface AppInfo {
  name: string;
  who: string;
  setup: string;
}

const APPS: AppInfo[] = [
  { name: 'MyChart',           who: 'Most major US hospitals (Epic systems)', setup: 'Download "MyChart" from the App Store / Play Store. Sign in with the username your hospital gave you. Past visits, lab results, and the video link all live here.' },
  { name: 'Doxy.me',           who: 'Many independent doctors',                setup: 'No app to download — open the link in your phone\'s browser (Safari or Chrome). Type your name on the welcome screen. The doctor joins from their end.' },
  { name: 'Zoom for Healthcare', who: 'Many specialists',                       setup: 'Download "Zoom" from the App Store. Tap the meeting link from your email — it opens Zoom and asks for your name. No account needed.' },
  { name: 'Teladoc / MDLive',  who: 'Some employer / insurance plans',          setup: 'Download the named app, sign up with your insurance ID. Lets you see a doctor on demand for non-emergencies.' },
];

export default function TelehealthPrep() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const total = SECTIONS.reduce((s, x) => s + x.items.length, 0);

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
        title="Telehealth Visit Prep"
        description="Get ready for a video doctor visit so it goes smoothly. Day-before checklist, what to have on hand, 15-minute pre-flight, what to do during, and after-visit follow-up."
        path="/tools/telehealth-prep"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Telehealth Visit Prep</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A 15-minute setup the day before. Then everything goes smoothly.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 print:hidden">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Telehealth Prep' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
              <p className="text-sm text-muted-foreground">{done.size} of {total} done</p>
              <Button onClick={printIt} variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" /> Print this checklist
              </Button>
            </CardContent>
          </Card>

          {SECTIONS.map(s => {
            const Icon = s.icon;
            return (
              <section key={s.id} id={s.id} className="mb-6 scroll-mt-24">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{s.title}</h2>
                    {s.when && <p className="text-xs text-muted-foreground italic">{s.when}</p>}
                  </div>
                </div>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <div className="space-y-3">
                      {s.items.map(item => (
                        <label key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            done.has(item.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'
                          }`}>
                          <Checkbox checked={done.has(item.id)} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                          <div className="flex-1">
                            <p className={`font-medium text-sm ${done.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>{item.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Common telehealth apps</p>
              <div className="space-y-3">
                {APPS.map(a => (
                  <div key={a.name} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm">{a.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5"><strong>Used by:</strong> {a.who}</p>
                    <p className="text-xs text-muted-foreground mt-1">{a.setup}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/hospital-discharge-kit" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hospital Discharge Kit</p>
                <p className="text-xs text-muted-foreground mt-0.5">After a hospital stay.</p>
              </Link>
              <Link to="/tools/medicare-plan-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medicare Plan Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick the right plan.</p>
              </Link>
              <Link to="/caregiver" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Caregiver Hub</p>
                <p className="text-xs text-muted-foreground mt-0.5">More health-tech help.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Print version */}
        <div className="hidden print:block px-8 py-6 text-sm">
          <header className="border-b-2 border-black pb-3 mb-5">
            <h1 className="text-2xl font-bold">Telehealth Visit Prep Checklist</h1>
            <p className="text-xs text-gray-600 mt-1">From TekSure.com</p>
          </header>
          {SECTIONS.map(s => (
            <section key={s.id} className="mb-4 break-inside-avoid">
              <h2 className="font-bold uppercase tracking-wider text-xs mb-1">{s.title}</h2>
              {s.when && <p className="text-xs text-gray-600 italic mb-1">{s.when}</p>}
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
        </div>
      </main>

      <Footer />
    </>
  );
}
