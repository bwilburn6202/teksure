import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, ExternalLink, AlertTriangle } from 'lucide-react';

type Portal = 'mychart' | 'patient-gateway' | 'myhealthone' | 'healthelife' | 'athena';

interface PortalInfo {
  name: string;
  who: string;
  setup: string[];
  features: string[];
  notes: string[];
  link: string;
}

const PORTALS: Record<Portal, PortalInfo> = {
  'mychart': {
    name: 'MyChart (Epic)',
    who: 'Used by most major US hospitals — Cleveland Clinic, Johns Hopkins, Kaiser, UCLA Health, NYU Langone, Mayo Clinic, and many more. If your hospital uses Epic, this is your portal.',
    setup: [
      'Ask the front desk at your last visit for an "activation code" — or look on your visit summary paperwork.',
      'Go to mychart.org or download the "MyChart" app from the App Store or Play Store.',
      'Tap "Sign Up Now" and enter your activation code, date of birth, and Social Security number (last 4).',
      'Pick a username and password. Write them down somewhere safe at home.',
      'Add your hospital or clinic — search by name, then tap "Connect".',
    ],
    features: [
      'See lab results the moment your doctor releases them.',
      'Send a message to your doctor or nurse — replies usually come within 1-2 business days.',
      'Request prescription refills without calling the office.',
      'Schedule, reschedule, or cancel appointments online.',
      'Pay your bill and see itemized charges.',
      'Link family members (spouse, adult child) with "proxy access" so they can help manage care.',
    ],
    notes: [
      'One MyChart login can connect to many hospitals at once. If you see doctors at two health systems that both use Epic, link them both.',
      'Lab results sometimes appear before your doctor has reviewed them. Do not panic at numbers in red — wait for the doctor message.',
    ],
    link: 'https://www.mychart.org',
  },
  'patient-gateway': {
    name: 'Patient Gateway (Mass General Brigham)',
    who: 'Used by Mass General, Brigham and Women\'s, and other Mass General Brigham hospitals in New England. (Note: HCA Healthcare uses a separate "MyHealthOne" portal — see that option below.)',
    setup: [
      'Visit patientgateway.massgeneralbrigham.org or download "Patient Gateway" from the App Store or Play Store.',
      'Tap "Sign Up Now". You can self-enroll using your name, date of birth, and the last 4 digits of your Social Security number.',
      'If self-enroll fails, call the help desk at 1-800-745-9683 — they will email you an activation code.',
      'Pick a username and password.',
      'Verify your email address by clicking the link they send you.',
    ],
    features: [
      'View test and lab results, often the same day.',
      'Message your care team — doctors, nurses, specialists.',
      'Request medication refills.',
      'Book and reschedule appointments.',
      'Join video visits from your phone or computer.',
      'See your full visit history and after-visit summaries.',
    ],
    notes: [
      'Patient Gateway is built on Epic, so the experience is similar to MyChart — but it is a separate login.',
      'For HCA Healthcare hospitals (different system), use MyHealthOne instead.',
    ],
    link: 'https://patientgateway.massgeneralbrigham.org',
  },
  'myhealthone': {
    name: 'MyHealthOne (HCA Healthcare)',
    who: 'Used by HCA Healthcare hospitals — over 180 hospitals across the US, including TriStar, Medical City, Methodist, and HCA Florida. If you were treated at an HCA hospital or ER, this is your portal.',
    setup: [
      'Go to myhealthone.com or download "MyHealthONE" from the App Store or Play Store.',
      'Tap "Create an Account".',
      'Enter your name, date of birth, email, and phone number.',
      'Verify your identity — they may ask for your medical record number (on your hospital paperwork) or send a code to your phone.',
      'Create a password and answer the security questions.',
    ],
    features: [
      'See hospital and ER visit summaries, lab results, and imaging reports.',
      'Pay your hospital bill online.',
      'Pre-register for upcoming visits to skip the front-desk paperwork.',
      'Link records from multiple HCA hospitals into one view.',
      'Download or share your records with another doctor.',
    ],
    notes: [
      'MyHealthOne is mainly for hospital and ER care. Your regular family doctor probably uses MyChart or another portal.',
      'If you were admitted recently, your records can take 24-72 hours to appear in the portal.',
    ],
    link: 'https://myhealthone.com',
  },
  'healthelife': {
    name: 'Cerner HealtheLife',
    who: 'Used by hospitals on the Oracle Cerner system — including many VA hospitals, Adventist Health, Truman Medical Centers, and regional health networks. Your hospital may brand it with their own name (like "MyCare" or "HealtheLife").',
    setup: [
      'Ask your hospital for the exact portal web address — every Cerner site has its own URL.',
      'Some hospitals send an invite email with a sign-up link. If you have that email, click it and follow the steps.',
      'No invite? Call the medical records office and ask them to send you one.',
      'Create your username and password from the invite link.',
      'Download the "HealtheLife" app and sign in with the credentials you set up.',
    ],
    features: [
      'View test results, vaccinations, and visit notes.',
      'Send secure messages to your care team.',
      'Refill prescriptions.',
      'Schedule appointments at participating clinics.',
      'See and pay your bill.',
      'Track health goals like blood pressure or weight over time.',
    ],
    notes: [
      'Oracle bought Cerner in 2022, so you may see "Oracle Health" branding now. Same portal, new name.',
      'If your hospital has its own custom-branded version, the app might be called something different — ask the front desk.',
    ],
    link: 'https://www.cerner.com/solutions/healthelife',
  },
  'athena': {
    name: 'athenaPatient',
    who: 'Used by smaller practices, specialty clinics, and many primary care offices that run on athenahealth software. If your doctor is at an independent practice (not a big hospital), this is often the one.',
    setup: [
      'After a visit, you should get an email from your doctor\'s office with a portal invite link.',
      'Click the link in the email — it expires after a few days, so do not wait.',
      'Set up a password (your email becomes your username).',
      'Download "athenaPatient" from the App Store or Play Store for phone access.',
      'Sign in with the same email and password.',
    ],
    features: [
      'View lab and imaging results.',
      'Message your doctor\'s office directly.',
      'Request prescription refills.',
      'Book new appointments and confirm existing ones.',
      'Fill out check-in forms before a visit so you spend less time in the waiting room.',
      'Pay copays and bills online.',
    ],
    notes: [
      'One athenaPatient login can connect to all your athenahealth providers — primary care, dermatologist, cardiologist, and so on.',
      'If you missed the email invite, call the front desk and ask them to resend the portal invitation.',
    ],
    link: 'https://www.athenahealth.com/patients',
  },
};

const PORTAL_OPTIONS: { id: Portal; label: string }[] = [
  { id: 'mychart',         label: 'MyChart (Epic) — most US hospitals' },
  { id: 'patient-gateway', label: 'Patient Gateway (Mass General Brigham)' },
  { id: 'myhealthone',     label: 'MyHealthOne (HCA Healthcare)' },
  { id: 'healthelife',     label: 'Cerner HealtheLife / Oracle Health' },
  { id: 'athena',          label: 'athenaPatient (smaller practices)' },
];

export default function OnlineDoctorPortalSetup() {
  const [portal, setPortal] = useState<Portal>('mychart');
  const p = PORTALS[portal];

  return (
    <>
      <SEOHead
        title="Online Doctor Portal Setup"
        description="Step-by-step setup for MyChart, Patient Gateway, MyHealthOne, HealtheLife, and athenaPatient. See lab results, message your doctor, and book appointments online."
        path="/tools/online-doctor-portal-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-sky-500/10 rounded-full">
                <Stethoscope className="h-8 w-8 text-sky-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Online Doctor Portal Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See your lab results, message your doctor, and book appointments online. Pick the portal your hospital uses, then follow the steps.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Online Doctor Portal Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which portal does your hospital use?</p>
              <p className="text-xs text-muted-foreground mb-3">Not sure? Ask the front desk at your next visit, check your after-visit summary paperwork, or call the medical records office.</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {PORTAL_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => setPortal(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      portal === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{p.name}</Badge>
              <p className="text-sm text-muted-foreground mb-4"><strong>Who uses it:</strong> {p.who}</p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">How to sign up</p>
              <ol className="space-y-1.5 mb-4">
                {p.setup.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What you can do once you are signed in</p>
              <ul className="space-y-1.5 mb-4">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{f}</span></li>
                ))}
              </ul>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Worth knowing</p>
              <ul className="space-y-1">
                {p.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{n}</span></li>
                ))}
              </ul>

              <a href={p.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                Official portal site <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out: fake "your medical records are ready" emails</p>
                <p className="text-muted-foreground">
                  Scammers send emails that look like portal alerts — "Your test results are ready, click here to view." The link goes to a fake page that steals your password. A real portal email will NOT have urgent threats, will NOT ask for your Social Security number by email, and will NOT include attachments. When in doubt, do not click the email link. Open the portal app or type the web address yourself, then sign in to check.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Five habits that make portals work for you</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Save your portal password in a notebook at home, not on a sticky note on the computer.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Turn on two-step verification (a code by text) — most portals offer it under Account Settings.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Add the portal app to your phone home screen for one-tap access.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Set up "proxy access" so a trusted family member can help you read messages and book appointments.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Read messages from your doctor in the portal, not in email — email previews can leak private health info.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Sending your first message to a doctor</p>
              <ol className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">1.</span><span>Open the portal app and tap "Messages".</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">2.</span><span>Tap "New Message" and pick the doctor or nurse from the list.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">3.</span><span>Write a short, clear question — one topic per message. Example: "My blood pressure has been 150/90 every morning for a week. Should I come in?"</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">4.</span><span>Tap Send. Most replies come within 1-2 business days. For anything urgent, call the office instead.</span></li>
                <li className="flex gap-2"><span className="text-primary font-semibold shrink-0">5.</span><span>Never use a portal message for an emergency. Chest pain, trouble breathing, signs of stroke — call 911.</span></li>
              </ol>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/telehealth-prep" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Telehealth Prep</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get ready for a video visit with your doctor.</p>
              </Link>
              <Link to="/tools/hospital-discharge-kit" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Hospital Discharge Kit</p>
                <p className="text-xs text-muted-foreground mt-0.5">What to do after leaving the hospital.</p>
              </Link>
              <Link to="/tools/medicare-plan-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medicare Plan Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pick the right Medicare plan for you.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
