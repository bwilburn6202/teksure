import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookMarked,
  Lock,
  Shield,
  AlertTriangle,
  Printer,
  Save,
  Trash2,
  Download,
  Upload,
  FileText,
  Info,
  Heart,
  Users,
  FileSignature,
  Landmark,
  ShieldCheck,
  Cloud,
  Smartphone,
  PawPrint,
  Flower2,
  User,
  Mail,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ──────────────────────────────────────────────────────────────────────────
 * Digital Estate Binder
 * ------------------------------------------------------------------------
 * A printable legacy-planning binder for organizing someone's digital and
 * physical estate so family can find everything after they're gone. All
 * data is stored locally in the browser (localStorage). Never write real
 * passwords here — this is a map of where things are, not the keys.
 * ──────────────────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'teksure:digital-estate-binder';
const BINDER_VERSION = '1.0';

/* ──────────────── Types ──────────────── */

interface Person {
  name: string;
  relationship: string;
  phone: string;
  email: string;
  notes: string;
}

interface Account {
  institution: string;
  accountType: string;
  last4: string;
  portalUrl: string;
  username: string;
  passwordHint: string;
  securityHint: string;
  notes: string;
}

interface Insurance {
  type: string;
  carrier: string;
  policyNumber: string;
  agent: string;
  agentPhone: string;
  expiration: string;
  keyBenefits: string;
}

interface DigitalAccount {
  platform: string;
  username: string;
  memorializePlan: string;
}

interface Device {
  device: string;
  location: string;
  passcodeHint: string;
  notes: string;
}

interface Pet {
  name: string;
  breed: string;
  age: string;
  vet: string;
  vetPhone: string;
  food: string;
  meds: string;
  routine: string;
  preferredHome: string;
}

interface KeyDoc {
  name: string;
  location: string;
  notes: string;
}

interface Letter {
  recipient: string;
  location: string;
  notes: string;
}

interface BinderData {
  // Cover
  fullName: string;
  dateOfBirth: string;
  lastUpdated: string;
  version: string;
  binderLocation: string;

  // Emergency Start Here
  firstCallName: string;
  firstCallPhone: string;
  first48Notes: string;
  emergencyInstructions: string;

  // Important People
  spouse: Person;
  children: Person[];
  executor: Person;
  financialPoa: Person;
  healthcarePoa: Person;
  lawyer: Person;
  accountant: Person;
  clergy: Person;
  closeFriends: Person[];

  // Key Documents
  willLocation: string;
  trustLocation: string;
  lifeInsuranceLocation: string;
  titlesLocation: string;
  safeDepositBox: string;
  safeDepositKey: string;
  homeSafeHint: string;
  otherDocs: KeyDoc[];

  // Financial Accounts
  bankAccounts: Account[];
  investmentAccounts: Account[];
  retirementAccounts: Account[];
  creditCards: Account[];
  loans: Account[];

  // Insurance
  insurances: Insurance[];

  // Digital Accounts
  emailAccounts: DigitalAccount[];
  socialMedia: DigitalAccount[];
  cloudStorage: DigitalAccount[];
  subscriptions: DigitalAccount[];

  // Devices
  devices: Device[];
  smartHomeNotes: string;
  cryptoNotes: string;
  backupDriveLocation: string;

  // Pets
  pets: Pet[];

  // Final Wishes
  burialPreference: string;
  memorialType: string;
  hymnsReadings: string;
  obituaryPreference: string;
  finalMessages: string;
  charitableRequests: string;
  religiousPreference: string;

  // Personal History
  whereBorn: string;
  schools: string;
  jobs: string;
  marriageInfo: string;
  childrenInfo: string;
  accomplishments: string;
  lifeStory: string;

  // Letters to loved ones
  letters: Letter[];
}

const EMPTY_PERSON: Person = {
  name: '',
  relationship: '',
  phone: '',
  email: '',
  notes: '',
};

const EMPTY_ACCOUNT: Account = {
  institution: '',
  accountType: '',
  last4: '',
  portalUrl: '',
  username: '',
  passwordHint: '',
  securityHint: '',
  notes: '',
};

const EMPTY_INSURANCE: Insurance = {
  type: '',
  carrier: '',
  policyNumber: '',
  agent: '',
  agentPhone: '',
  expiration: '',
  keyBenefits: '',
};

const EMPTY_DIGITAL: DigitalAccount = {
  platform: '',
  username: '',
  memorializePlan: '',
};

const EMPTY_DEVICE: Device = {
  device: '',
  location: '',
  passcodeHint: '',
  notes: '',
};

const EMPTY_PET: Pet = {
  name: '',
  breed: '',
  age: '',
  vet: '',
  vetPhone: '',
  food: '',
  meds: '',
  routine: '',
  preferredHome: '',
};

const EMPTY_DOC: KeyDoc = { name: '', location: '', notes: '' };
const EMPTY_LETTER: Letter = { recipient: '', location: '', notes: '' };

const EMPTY_DATA: BinderData = {
  fullName: '',
  dateOfBirth: '',
  lastUpdated: '',
  version: BINDER_VERSION,
  binderLocation: '',
  firstCallName: '',
  firstCallPhone: '',
  first48Notes: '',
  emergencyInstructions: '',
  spouse: { ...EMPTY_PERSON },
  children: Array.from({ length: 3 }, () => ({ ...EMPTY_PERSON })),
  executor: { ...EMPTY_PERSON },
  financialPoa: { ...EMPTY_PERSON },
  healthcarePoa: { ...EMPTY_PERSON },
  lawyer: { ...EMPTY_PERSON },
  accountant: { ...EMPTY_PERSON },
  clergy: { ...EMPTY_PERSON },
  closeFriends: Array.from({ length: 3 }, () => ({ ...EMPTY_PERSON })),
  willLocation: '',
  trustLocation: '',
  lifeInsuranceLocation: '',
  titlesLocation: '',
  safeDepositBox: '',
  safeDepositKey: '',
  homeSafeHint: '',
  otherDocs: Array.from({ length: 3 }, () => ({ ...EMPTY_DOC })),
  bankAccounts: Array.from({ length: 3 }, () => ({ ...EMPTY_ACCOUNT })),
  investmentAccounts: Array.from({ length: 3 }, () => ({ ...EMPTY_ACCOUNT })),
  retirementAccounts: Array.from({ length: 3 }, () => ({ ...EMPTY_ACCOUNT })),
  creditCards: Array.from({ length: 4 }, () => ({ ...EMPTY_ACCOUNT })),
  loans: Array.from({ length: 3 }, () => ({ ...EMPTY_ACCOUNT })),
  insurances: Array.from({ length: 6 }, () => ({ ...EMPTY_INSURANCE })),
  emailAccounts: Array.from({ length: 3 }, () => ({ ...EMPTY_DIGITAL })),
  socialMedia: Array.from({ length: 5 }, () => ({ ...EMPTY_DIGITAL })),
  cloudStorage: Array.from({ length: 3 }, () => ({ ...EMPTY_DIGITAL })),
  subscriptions: Array.from({ length: 5 }, () => ({ ...EMPTY_DIGITAL })),
  devices: Array.from({ length: 5 }, () => ({ ...EMPTY_DEVICE })),
  smartHomeNotes: '',
  cryptoNotes: '',
  backupDriveLocation: '',
  pets: Array.from({ length: 2 }, () => ({ ...EMPTY_PET })),
  burialPreference: '',
  memorialType: '',
  hymnsReadings: '',
  obituaryPreference: '',
  finalMessages: '',
  charitableRequests: '',
  religiousPreference: '',
  whereBorn: '',
  schools: '',
  jobs: '',
  marriageInfo: '',
  childrenInfo: '',
  accomplishments: '',
  lifeStory: '',
  letters: Array.from({ length: 3 }, () => ({ ...EMPTY_LETTER })),
};

/* ──────────────── Section definitions ──────────────── */

const SECTIONS = [
  { id: 'cover', title: 'Cover Page', number: 1, icon: BookMarked, tab: 'Cover' },
  { id: 'emergency', title: 'Start Here (Emergency)', number: 2, icon: AlertTriangle, tab: 'Start Here' },
  { id: 'people', title: 'Important People', number: 3, icon: Users, tab: 'People' },
  { id: 'documents', title: 'Key Documents', number: 4, icon: FileSignature, tab: 'Documents' },
  { id: 'financial', title: 'Financial Accounts', number: 5, icon: Landmark, tab: 'Financial' },
  { id: 'insurance', title: 'Insurance', number: 6, icon: ShieldCheck, tab: 'Insurance' },
  { id: 'digital', title: 'Digital Accounts', number: 7, icon: Cloud, tab: 'Digital' },
  { id: 'devices', title: 'Devices', number: 8, icon: Smartphone, tab: 'Devices' },
  { id: 'pets', title: 'Pets', number: 9, icon: PawPrint, tab: 'Pets' },
  { id: 'wishes', title: 'Final Wishes', number: 10, icon: Flower2, tab: 'Wishes' },
  { id: 'history', title: 'Personal History', number: 11, icon: User, tab: 'History' },
  { id: 'letters', title: 'Letters to Loved Ones', number: 12, icon: Mail, tab: 'Letters' },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

/* ──────────────── Helpers ──────────────── */

function loadData(): BinderData {
  if (typeof window === 'undefined') return EMPTY_DATA;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_DATA;
    const parsed = JSON.parse(raw);
    return { ...EMPTY_DATA, ...parsed };
  } catch {
    return EMPTY_DATA;
  }
}

function formatSavedAgo(ts: number | null): string {
  if (!ts) return '';
  const seconds = Math.floor((Date.now() - ts) / 1000);
  if (seconds < 5) return 'Saved a moment ago';
  if (seconds < 60) return `Saved ${seconds} seconds ago`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `Saved ${mins} minute${mins === 1 ? '' : 's'} ago`;
  const hours = Math.floor(mins / 60);
  return `Saved ${hours} hour${hours === 1 ? '' : 's'} ago`;
}

/* ──────────────── Small field components ──────────────── */

function FieldLabel({ children, optional = true }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <Label className="text-base font-semibold mb-1.5 flex items-center gap-2">
      {children}
      {optional && (
        <span className="text-xs font-normal text-muted-foreground">(optional)</span>
      )}
    </Label>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  helper,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  helper?: string;
  type?: 'text' | 'date' | 'tel' | 'email' | 'url';
}) {
  return (
    <div className="space-y-1.5">
      <FieldLabel>{label}</FieldLabel>
      {helper && <p className="text-sm text-muted-foreground">{helper}</p>}
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-[3.5rem] text-base"
      />
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  helper,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  helper?: string;
  rows?: number;
}) {
  return (
    <div className="space-y-1.5">
      <FieldLabel>{label}</FieldLabel>
      {helper && <p className="text-sm text-muted-foreground">{helper}</p>}
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="text-base min-h-[7rem]"
      />
    </div>
  );
}

/* ──────────────── Person row ──────────────── */

function PersonEditor({
  label,
  person,
  onChange,
}: {
  label: string;
  person: Person;
  onChange: (p: Person) => void;
}) {
  return (
    <div className="rounded-xl border bg-muted/30 p-4 md:p-5 space-y-3">
      <div className="font-bold text-lg flex items-center gap-2">
        <User className="h-5 w-5 text-violet-700" aria-hidden />
        {label}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <TextField
          label="Name"
          value={person.name}
          onChange={(v) => onChange({ ...person, name: v })}
        />
        <TextField
          label="Relationship"
          value={person.relationship}
          onChange={(v) => onChange({ ...person, relationship: v })}
          placeholder="e.g. son, attorney, best friend"
        />
        <TextField
          label="Phone"
          type="tel"
          value={person.phone}
          onChange={(v) => onChange({ ...person, phone: v })}
        />
        <TextField
          label="Email"
          type="email"
          value={person.email}
          onChange={(v) => onChange({ ...person, email: v })}
        />
      </div>
      <TextAreaField
        label="Notes"
        value={person.notes}
        onChange={(v) => onChange({ ...person, notes: v })}
        placeholder="Anything family should know when they call this person."
        rows={2}
      />
    </div>
  );
}

/* ──────────────── The Page ──────────────── */

export default function DigitalEstateBinder() {
  const [data, setData] = useState<BinderData>(EMPTY_DATA);
  const [hydrated, setHydrated] = useState(false);
  const [lastSaved, setLastSaved] = useState<number | null>(null);
  const [savedLabel, setSavedLabel] = useState('');
  const [activeTab, setActiveTab] = useState<SectionId>('cover');
  const [printMode, setPrintMode] = useState<'full' | 'selected' | null>(null);
  const [selectedSections, setSelectedSections] = useState<Record<SectionId, boolean>>(
    () => SECTIONS.reduce((acc, s) => ({ ...acc, [s.id]: true }), {} as Record<SectionId, boolean>),
  );
  const [showBlankTemplate, setShowBlankTemplate] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* Hydrate from localStorage */
  useEffect(() => {
    setData(loadData());
    setHydrated(true);
  }, []);

  /* Autosave */
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setLastSaved(Date.now());
    } catch {
      // ignore quota or private mode
    }
  }, [data, hydrated]);

  /* Tick saved label */
  useEffect(() => {
    setSavedLabel(formatSavedAgo(lastSaved));
    const t = window.setInterval(() => setSavedLabel(formatSavedAgo(lastSaved)), 15_000);
    return () => window.clearInterval(t);
  }, [lastSaved]);

  /* Trigger print with proper body class */
  useEffect(() => {
    if (!printMode) return;
    const cls = printMode === 'full' ? 'deb-print-full' : 'deb-print-selected';
    document.body.classList.add(cls);
    // Add class for each deselected section
    if (printMode === 'selected') {
      SECTIONS.forEach((s) => {
        if (!selectedSections[s.id]) {
          document.body.classList.add(`deb-hide-${s.id}`);
        }
      });
    }
    const t = window.setTimeout(() => {
      window.print();
      document.body.classList.remove(cls);
      SECTIONS.forEach((s) => document.body.classList.remove(`deb-hide-${s.id}`));
      setPrintMode(null);
    }, 100);
    return () => {
      document.body.classList.remove(cls);
      SECTIONS.forEach((s) => document.body.classList.remove(`deb-hide-${s.id}`));
      window.clearTimeout(t);
    };
  }, [printMode, selectedSections]);

  /* ──────────── Update helpers ──────────── */

  const update = useCallback(
    <K extends keyof BinderData>(key: K, value: BinderData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const updateArrayItem = <T,>(key: keyof BinderData, index: number, item: T) => {
    setData((prev) => {
      const arr = [...(prev[key] as unknown as T[])];
      arr[index] = item;
      return { ...prev, [key]: arr as unknown as BinderData[keyof BinderData] };
    });
  };

  /* ──────────── Clear / Export / Import ──────────── */

  const handleClear = () => {
    const ok = window.confirm(
      'Clear everything you have entered? This cannot be undone. Consider exporting first.',
    );
    if (!ok) return;
    setData(EMPTY_DATA);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setLastSaved(null);
  };

  const handleExport = () => {
    try {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const name = (data.fullName || 'binder').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
      a.href = url;
      a.download = `digital-estate-binder-${name}-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      alert('Could not export your binder. Try again.');
    }
  };

  const handleImportClick = () => fileInputRef.current?.click();

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(String(ev.target?.result));
        if (!parsed || typeof parsed !== 'object') throw new Error('not an object');
        const ok = window.confirm(
          'Importing will replace what you have right now. Continue?',
        );
        if (!ok) return;
        setData({ ...EMPTY_DATA, ...parsed });
      } catch {
        alert('That file could not be read. Make sure it is a Digital Estate Binder export (.json).');
      } finally {
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  const handleMarkUpdated = () => {
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    update('lastUpdated', today);
  };

  /* ──────────── Render ──────────── */

  return (
    <>
      <SEOHead
        title="Digital Estate Binder — Free Printable Legacy Planner | TekSure"
        description="A printable binder for organizing every account, password hint, and final wish so your family isn't left guessing. Free, senior-friendly, and saves on your own device."
        path="/printables/digital-estate-binder"
      />

      {/* Scoped styles for binder printing */}
      <style>{`
        .deb-preview { display: flex; justify-content: center; padding: 24px 12px 48px; }
        .deb-page {
          width: min(8.5in, 100%);
          background: #ffffff;
          color: #0f172a;
          box-sizing: border-box;
          padding: 0.6in 0.7in;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.25);
          border-radius: 4px;
        }
        .deb-page h1 {
          font-size: 32pt; line-height: 1.1;
          margin: 0 0 6pt; font-weight: 800;
          color: #0f172a;
        }
        .deb-page h2 {
          font-size: 18pt; line-height: 1.2; font-weight: 800;
          margin: 0 0 8pt; color: #4c1d95;
          display: flex; gap: 8pt; align-items: center;
        }
        .deb-page h3 {
          font-size: 13pt; font-weight: 700;
          margin: 14pt 0 4pt; color: #1e293b;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .deb-head-brand {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10pt; margin-bottom: 6pt;
          font-size: 9.5pt; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 700; color: #7c3aed;
        }
        .deb-head-brand .deb-date {
          color: #64748b; letter-spacing: 0.04em; text-transform: none; font-weight: 500;
        }
        .deb-rule {
          height: 2pt; background: #7c3aed; border-radius: 2pt;
          margin: 4pt 0 14pt; opacity: 0.85;
        }
        .deb-section {
          padding: 14pt 0 10pt;
          break-inside: avoid-page;
          page-break-after: always;
          page-break-inside: avoid;
        }
        .deb-section:last-child { page-break-after: auto; }
        .deb-section-num {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28pt; height: 28pt; border-radius: 999pt;
          background: #7c3aed; color: #ffffff;
          font-weight: 800; font-size: 13pt;
        }
        .deb-tag {
          font-size: 12pt; color: #475569; font-weight: 500;
          margin: 0 0 10pt;
        }
        .deb-warn {
          border: 1.5pt solid #b91c1c;
          background: #fef2f2;
          padding: 10pt 12pt;
          border-radius: 5pt;
          margin: 8pt 0 14pt;
          font-size: 10.5pt; color: #450a0a; line-height: 1.45;
          break-inside: avoid;
        }
        .deb-warn strong { color: #7f1d1d; }
        .deb-callout {
          border-left: 3pt solid #7c3aed;
          background: #f5f3ff;
          padding: 8pt 12pt;
          border-radius: 0 5pt 5pt 0;
          margin: 8pt 0;
          font-size: 10.5pt; color: #1e1b4b; line-height: 1.5;
        }
        .deb-row {
          display: grid; grid-template-columns: 1.1fr 2fr;
          gap: 6pt 14pt; padding: 3pt 0;
          border-bottom: 0.5pt dotted #cbd5e1;
          font-size: 11pt;
          break-inside: avoid;
        }
        .deb-row:last-child { border-bottom: none; }
        .deb-row-label {
          font-weight: 700; color: #334155;
        }
        .deb-row-value {
          color: #0f172a; white-space: pre-wrap; word-break: break-word;
          min-height: 14pt;
        }
        .deb-row-value.empty {
          color: #cbd5e1; border-bottom: 0.5pt solid #cbd5e1;
          min-height: 14pt;
        }
        .deb-grid-cards {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10pt;
        }
        .deb-sub-card {
          border: 1pt solid #ddd6fe;
          border-radius: 6pt;
          padding: 8pt 10pt;
          background: #faf5ff;
          break-inside: avoid;
        }
        .deb-sub-card-title {
          font-size: 11pt; font-weight: 800; color: #4c1d95;
          margin-bottom: 4pt;
        }
        .deb-blank-line {
          border-bottom: 0.5pt solid #94a3b8;
          height: 18pt; margin-top: 2pt;
        }
        .deb-blank-block { margin: 6pt 0; }
        .deb-blank-block .deb-blank-line + .deb-blank-line { margin-top: 6pt; }
        .deb-foot {
          margin-top: 18pt; padding-top: 8pt;
          border-top: 0.5pt solid #94a3b8;
          font-size: 9pt; color: #64748b;
        }
        @media (max-width: 640px) {
          .deb-grid-cards { grid-template-columns: 1fr; }
          .deb-row { grid-template-columns: 1fr; }
          .deb-page { padding: 0.4in 0.35in; }
          .deb-page h1 { font-size: 24pt; }
        }

        /* ── Print layout ── */
        @page { size: letter; margin: 0.5in 0.55in; }
        @media print {
          html, body { background: #fff !important; }
          .no-print, nav, header.site-header, footer.site-footer { display: none !important; }
          .deb-preview { padding: 0 !important; }
          .deb-page {
            box-shadow: none !important; border-radius: 0 !important;
            width: 100% !important; padding: 0 !important;
          }
          .deb-section { page-break-after: always; }
        }
        /* Hide per section when that section is deselected for print */
        ${SECTIONS.map(
          (s) => `body.deb-hide-${s.id} .deb-section[data-section="${s.id}"] { display: none !important; }`,
        ).join('\n')}
      `}</style>

      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb (non-print) */}
        <div className="container max-w-6xl pt-4 px-4 print:hidden">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Digital Estate Binder' },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="print:hidden relative overflow-hidden border-b">
          <div
            className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-fuchsia-950/20"
            aria-hidden
          />
          <div className="relative container max-w-6xl mx-auto px-4 py-10 md:py-14">
            <div className="flex items-center gap-3 text-violet-700 dark:text-violet-300 text-sm font-bold uppercase tracking-widest mb-3">
              <BookMarked className="h-5 w-5" />
              <span>Free Printable Binder</span>
            </div>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Digital Estate Binder —{' '}
                <span className="text-violet-700 dark:text-violet-300">
                  Make It Easy for Your Family
                </span>
              </h1>
              <BookmarkButton
                type="tool"
                slug="digital-estate-binder"
                title="Digital Estate Binder"
                url="/printables/digital-estate-binder"
              />
            </div>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-snug">
              One binder. Every account, every password hint, every wish.
              Your family shouldn't have to guess.
            </p>

            {/* Privacy warning */}
            <Alert className="mt-6 border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-700">
              <Lock className="h-5 w-5 text-amber-700 dark:text-amber-300" />
              <AlertTitle className="text-lg font-bold text-amber-900 dark:text-amber-100">
                Never write real passwords here.
              </AlertTitle>
              <AlertDescription className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
                This binder is a <strong>map</strong>, not a key. Use password hints only —
                your actual passwords belong in a password manager like Bitwarden (free) or
                1Password.{' '}
                <Link
                  to="/tools/password-strength-tester"
                  className="underline font-semibold"
                >
                  See our password guide
                </Link>
                .
              </AlertDescription>
            </Alert>

            {/* Device privacy notice */}
            <Alert className="mt-4 border-2 border-violet-300 bg-violet-50 dark:bg-violet-950/30 dark:border-violet-800">
              <Shield className="h-5 w-5 text-violet-700 dark:text-violet-300" />
              <AlertTitle className="text-lg font-bold text-violet-900 dark:text-violet-100">
                Your data stays on this device.
              </AlertTitle>
              <AlertDescription className="text-base text-violet-900/90 dark:text-violet-100/90 leading-relaxed">
                Nothing you type is sent anywhere. Everything saves to this browser only.
                <strong> Don't fill this on a shared or public computer.</strong>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Toolbar */}
        <section className="print:hidden container max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center gap-3 justify-between rounded-xl border bg-muted/40 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                aria-live="polite"
              >
                <Save className="h-4 w-4" />
                {savedLabel || 'Autosave on'}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleMarkUpdated}
                className="gap-1.5"
              >
                <Calendar className="h-4 w-4" />
                Mark as updated today
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                className="gap-1.5"
              >
                <Download className="h-4 w-4" />
                Export JSON
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleImportClick}
                className="gap-1.5"
              >
                <Upload className="h-4 w-4" />
                Import JSON
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={handleImportFile}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="gap-1.5 text-muted-foreground hover:text-rose-600"
              >
                <Trash2 className="h-4 w-4" />
                Clear all
              </Button>
            </div>
          </div>

          {/* Print options */}
          <div className="mt-4 rounded-xl border-2 border-violet-200 dark:border-violet-900 bg-violet-50/50 dark:bg-violet-950/20 p-4">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Printer className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                <div>
                  <div className="font-bold text-lg">Print or save as PDF</div>
                  <p className="text-sm text-muted-foreground">
                    In the print dialog, choose <strong>Save as PDF</strong> to keep a
                    digital copy you can store safely.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setPrintMode('full')}
                  className="gap-2 bg-violet-700 hover:bg-violet-800"
                  size="lg"
                >
                  <Printer className="h-5 w-5" />
                  Print full binder
                </Button>
                <Button
                  onClick={() => setPrintMode('selected')}
                  variant="outline"
                  size="lg"
                  className="gap-2 border-violet-400"
                >
                  <FileText className="h-5 w-5" />
                  Print selected sections
                </Button>
              </div>
            </div>

            {/* Blank template toggle */}
            <div className="mt-4 pt-4 border-t border-violet-200 dark:border-violet-900">
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  checked={showBlankTemplate}
                  onCheckedChange={(v) => setShowBlankTemplate(!!v)}
                  aria-label="Show blank template for handwriting"
                />
                <span className="text-base">
                  Show <strong>blank template</strong> preview (print empty pages to fill in
                  by hand)
                </span>
              </label>
            </div>

            {/* Section picker — visible when "selected" mode chosen */}
            <div className="mt-4 pt-4 border-t border-violet-200 dark:border-violet-900">
              <div className="font-semibold text-sm uppercase tracking-wide mb-2 text-muted-foreground">
                Include in print:
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {SECTIONS.map((s) => (
                  <label
                    key={s.id}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <Checkbox
                      checked={selectedSections[s.id]}
                      onCheckedChange={(v) =>
                        setSelectedSections((prev) => ({ ...prev, [s.id]: !!v }))
                      }
                      aria-label={`Include ${s.title}`}
                    />
                    <span>
                      {s.number}. {s.title}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tabs for editing */}
        <section className="print:hidden container max-w-6xl mx-auto px-4 py-6">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as SectionId)}>
            <TabsList className="flex flex-wrap h-auto gap-1 justify-start p-1 bg-muted">
              {SECTIONS.map((s) => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="text-sm data-[state=active]:bg-violet-700 data-[state=active]:text-white"
                >
                  <span className="hidden sm:inline">{s.number}. </span>
                  {s.tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* 1. COVER */}
            <TabsContent value="cover" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <BookMarked className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Cover Page</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    The first page of the binder. Identifies whose binder this is.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="Full legal name"
                      value={data.fullName}
                      onChange={(v) => update('fullName', v)}
                    />
                    <TextField
                      label="Date of birth"
                      type="date"
                      value={data.dateOfBirth}
                      onChange={(v) => update('dateOfBirth', v)}
                    />
                    <TextField
                      label="Last updated"
                      value={data.lastUpdated}
                      onChange={(v) => update('lastUpdated', v)}
                      helper="Click 'Mark as updated today' above, or type a date."
                    />
                    <TextField
                      label="Binder version"
                      value={data.version}
                      onChange={(v) => update('version', v)}
                    />
                  </div>
                  <TextAreaField
                    label="Where is this binder kept?"
                    value={data.binderLocation}
                    onChange={(v) => update('binderLocation', v)}
                    placeholder="e.g. Fireproof safe in the home office, third drawer from the top. Key is in the kitchen junk drawer under the silverware tray."
                    helper="Tell your spouse, executor, or POA where to find this."
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 2. EMERGENCY */}
            <TabsContent value="emergency" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-7 w-7 text-rose-700" />
                    <h2 className="text-2xl font-bold">Start Here (Emergency)</h2>
                  </div>
                  <Alert className="bg-rose-50 border-rose-300 dark:bg-rose-950/30 dark:border-rose-800">
                    <AlertTriangle className="h-5 w-5 text-rose-700" />
                    <AlertTitle className="font-bold text-rose-900 dark:text-rose-100">
                      For immediate medical emergencies, call 911 first.
                    </AlertTitle>
                    <AlertDescription className="text-rose-900/90 dark:text-rose-100/90">
                      This binder is for <strong>after</strong>.
                    </AlertDescription>
                  </Alert>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="First person to call"
                      value={data.firstCallName}
                      onChange={(v) => update('firstCallName', v)}
                      placeholder="Spouse, eldest child, etc."
                    />
                    <TextField
                      label="Their phone number"
                      type="tel"
                      value={data.firstCallPhone}
                      onChange={(v) => update('firstCallPhone', v)}
                    />
                  </div>
                  <TextAreaField
                    label="First 48 hours — what to do"
                    value={data.first48Notes}
                    onChange={(v) => update('first48Notes', v)}
                    rows={6}
                    placeholder="1) Call spouse/executor. 2) Locate my will (see Section 4). 3) Don't rush to cancel accounts. 4) Contact my lawyer ___ before making financial decisions."
                    helper="Clear, numbered steps help family when they're in shock."
                  />
                  <TextAreaField
                    label="If I'm in the hospital but still alive"
                    value={data.emergencyInstructions}
                    onChange={(v) => update('emergencyInstructions', v)}
                    rows={4}
                    placeholder="My healthcare POA is ___. My living will is kept at ___. I do / do not want CPR."
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 3. PEOPLE */}
            <TabsContent value="people" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Important People</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    The people your family should know about. Every field is optional — skip what
                    doesn't apply.
                  </p>

                  <PersonEditor
                    label="Spouse / Partner"
                    person={data.spouse}
                    onChange={(p) => update('spouse', p)}
                  />

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Children</h3>
                    {data.children.map((child, i) => (
                      <PersonEditor
                        key={i}
                        label={`Child ${i + 1}`}
                        person={child}
                        onChange={(p) => updateArrayItem('children', i, p)}
                      />
                    ))}
                  </div>

                  <PersonEditor
                    label="Executor (of your will)"
                    person={data.executor}
                    onChange={(p) => update('executor', p)}
                  />
                  <PersonEditor
                    label="Financial Power of Attorney"
                    person={data.financialPoa}
                    onChange={(p) => update('financialPoa', p)}
                  />
                  <PersonEditor
                    label="Healthcare Power of Attorney"
                    person={data.healthcarePoa}
                    onChange={(p) => update('healthcarePoa', p)}
                  />
                  <PersonEditor
                    label="Attorney / Lawyer"
                    person={data.lawyer}
                    onChange={(p) => update('lawyer', p)}
                  />
                  <PersonEditor
                    label="Accountant / CPA"
                    person={data.accountant}
                    onChange={(p) => update('accountant', p)}
                  />
                  <PersonEditor
                    label="Clergy / Pastor / Rabbi / Priest"
                    person={data.clergy}
                    onChange={(p) => update('clergy', p)}
                  />

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Close Friends</h3>
                    {data.closeFriends.map((f, i) => (
                      <PersonEditor
                        key={i}
                        label={`Close friend ${i + 1}`}
                        person={f}
                        onChange={(p) => updateArrayItem('closeFriends', i, p)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 4. DOCUMENTS */}
            <TabsContent value="documents" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <FileSignature className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Key Documents</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Where each important paper lives. Not the contents — only the location.
                  </p>
                  <TextAreaField
                    label="Will — where is the signed original?"
                    value={data.willLocation}
                    onChange={(v) => update('willLocation', v)}
                    rows={2}
                    placeholder="e.g. Fireproof safe, top shelf. Signed copy with attorney [name]."
                  />
                  <TextAreaField
                    label="Trust documents"
                    value={data.trustLocation}
                    onChange={(v) => update('trustLocation', v)}
                    rows={2}
                  />
                  <TextAreaField
                    label="Life insurance policies"
                    value={data.lifeInsuranceLocation}
                    onChange={(v) => update('lifeInsuranceLocation', v)}
                    rows={2}
                  />
                  <TextAreaField
                    label="Titles (house, car, boat, etc.)"
                    value={data.titlesLocation}
                    onChange={(v) => update('titlesLocation', v)}
                    rows={2}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextAreaField
                      label="Safe deposit box location"
                      value={data.safeDepositBox}
                      onChange={(v) => update('safeDepositBox', v)}
                      rows={2}
                      placeholder="e.g. Wells Fargo, Main St branch. Box #142."
                    />
                    <TextAreaField
                      label="Safe deposit box key location"
                      value={data.safeDepositKey}
                      onChange={(v) => update('safeDepositKey', v)}
                      rows={2}
                      placeholder="Don't write the key number — only where the physical key is."
                    />
                  </div>
                  <TextAreaField
                    label="Home safe — combination HINT only"
                    value={data.homeSafeHint}
                    onChange={(v) => update('homeSafeHint', v)}
                    rows={2}
                    helper="A hint only. Not the combination itself. E.g. 'Our wedding date — spouse knows.'"
                  />

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Other important documents</h3>
                    {data.otherDocs.map((doc, i) => (
                      <div key={i} className="grid gap-3 sm:grid-cols-3 rounded-lg border p-4 bg-muted/20">
                        <TextField
                          label="Document name"
                          value={doc.name}
                          onChange={(v) =>
                            updateArrayItem('otherDocs', i, { ...doc, name: v })
                          }
                        />
                        <TextField
                          label="Location"
                          value={doc.location}
                          onChange={(v) =>
                            updateArrayItem('otherDocs', i, { ...doc, location: v })
                          }
                        />
                        <TextField
                          label="Notes"
                          value={doc.notes}
                          onChange={(v) =>
                            updateArrayItem('otherDocs', i, { ...doc, notes: v })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 5. FINANCIAL */}
            <TabsContent value="financial" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <Landmark className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Financial Accounts</h2>
                  </div>
                  <Alert className="bg-amber-50 border-amber-300 dark:bg-amber-950/30 dark:border-amber-800">
                    <Lock className="h-5 w-5 text-amber-700" />
                    <AlertTitle className="font-bold">
                      Last 4 digits only. Password hints only.
                    </AlertTitle>
                    <AlertDescription>
                      Don't write full account numbers or real passwords. The actual password
                      should live in a password manager like{' '}
                      <Link to="/tools/password-strength-tester" className="underline font-semibold">
                        Bitwarden or 1Password
                      </Link>
                      .
                    </AlertDescription>
                  </Alert>

                  <AccountGroup
                    title="Bank accounts (checking, savings, credit union)"
                    accounts={data.bankAccounts}
                    onChange={(i, a) => updateArrayItem('bankAccounts', i, a)}
                  />
                  <AccountGroup
                    title="Investment accounts (brokerage, taxable)"
                    accounts={data.investmentAccounts}
                    onChange={(i, a) => updateArrayItem('investmentAccounts', i, a)}
                  />
                  <AccountGroup
                    title="Retirement (401k, IRA, pension)"
                    accounts={data.retirementAccounts}
                    onChange={(i, a) => updateArrayItem('retirementAccounts', i, a)}
                  />
                  <AccountGroup
                    title="Credit cards"
                    accounts={data.creditCards}
                    onChange={(i, a) => updateArrayItem('creditCards', i, a)}
                  />
                  <AccountGroup
                    title="Mortgages & loans"
                    accounts={data.loans}
                    onChange={(i, a) => updateArrayItem('loans', i, a)}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 6. INSURANCE */}
            <TabsContent value="insurance" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Insurance</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Health, life, auto, home, dental, vision, Medigap, long-term care. Fill in
                    what you have.
                  </p>
                  {data.insurances.map((ins, i) => (
                    <InsuranceEditor
                      key={i}
                      insurance={ins}
                      index={i}
                      onChange={(updated) => updateArrayItem('insurances', i, updated)}
                    />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* 7. DIGITAL */}
            <TabsContent value="digital" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Digital Accounts</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Email, social media, cloud storage, and subscriptions. List the platform
                    and username — not the password.
                  </p>
                  <div className="rounded-lg bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 p-4">
                    <p className="text-base">
                      For help closing or memorializing accounts, see{' '}
                      <Link
                        to="/tools/grief-tech-helper"
                        className="underline font-semibold text-violet-700 dark:text-violet-300"
                      >
                        Grief & Digital Aftercare
                      </Link>
                      .
                    </p>
                  </div>

                  <DigitalGroup
                    title="Email accounts"
                    accounts={data.emailAccounts}
                    onChange={(i, a) => updateArrayItem('emailAccounts', i, a)}
                    platformLabel="Provider"
                    platformPlaceholder="Gmail, Outlook, Yahoo, etc."
                  />
                  <DigitalGroup
                    title="Social media"
                    accounts={data.socialMedia}
                    onChange={(i, a) => updateArrayItem('socialMedia', i, a)}
                    platformLabel="Platform"
                    platformPlaceholder="Facebook, Instagram, LinkedIn, X, etc."
                  />
                  <DigitalGroup
                    title="Cloud storage"
                    accounts={data.cloudStorage}
                    onChange={(i, a) => updateArrayItem('cloudStorage', i, a)}
                    platformLabel="Service"
                    platformPlaceholder="Google Drive, iCloud, Dropbox, OneDrive"
                  />
                  <DigitalGroup
                    title="Subscription services"
                    accounts={data.subscriptions}
                    onChange={(i, a) => updateArrayItem('subscriptions', i, a)}
                    platformLabel="Service"
                    platformPlaceholder="Netflix, Amazon, streaming, magazines"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 8. DEVICES */}
            <TabsContent value="devices" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Devices</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Phone, tablet, computers, hardware wallets, backup drives. Where each
                    lives and a hint (not the passcode itself).
                  </p>
                  {data.devices.map((d, i) => (
                    <div key={i} className="rounded-lg border p-4 bg-muted/20 grid gap-3 sm:grid-cols-2">
                      <TextField
                        label="Device"
                        value={d.device}
                        onChange={(v) => updateArrayItem('devices', i, { ...d, device: v })}
                        placeholder="iPhone 14, Dell laptop, iPad mini, Trezor wallet"
                      />
                      <TextField
                        label="Where it is"
                        value={d.location}
                        onChange={(v) => updateArrayItem('devices', i, { ...d, location: v })}
                      />
                      <TextField
                        label="Passcode hint (not the passcode)"
                        value={d.passcodeHint}
                        onChange={(v) =>
                          updateArrayItem('devices', i, { ...d, passcodeHint: v })
                        }
                        placeholder='e.g. "Anniversary year"'
                      />
                      <TextField
                        label="Notes"
                        value={d.notes}
                        onChange={(v) => updateArrayItem('devices', i, { ...d, notes: v })}
                        placeholder="Face ID enabled, Find My is on, etc."
                      />
                    </div>
                  ))}
                  <TextAreaField
                    label="Smart home accounts (Alexa, Google Home, Ring, Nest, etc.)"
                    value={data.smartHomeNotes}
                    onChange={(v) => update('smartHomeNotes', v)}
                    rows={3}
                  />
                  <TextAreaField
                    label="Hardware wallets / crypto"
                    value={data.cryptoNotes}
                    onChange={(v) => update('cryptoNotes', v)}
                    rows={3}
                    helper="Where the device is. Seed phrase should be in a fireproof safe — NEVER digital."
                  />
                  <TextAreaField
                    label="Backup drives / external storage"
                    value={data.backupDriveLocation}
                    onChange={(v) => update('backupDriveLocation', v)}
                    rows={2}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 9. PETS */}
            <TabsContent value="pets" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <PawPrint className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Pets</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    So whoever cares for them knows their routines and who you'd want them to
                    live with.
                  </p>
                  {data.pets.map((pet, i) => (
                    <div key={i} className="rounded-lg border p-4 md:p-5 bg-muted/20 space-y-3">
                      <h3 className="font-bold text-xl">Pet {i + 1}</h3>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <TextField
                          label="Name"
                          value={pet.name}
                          onChange={(v) => updateArrayItem('pets', i, { ...pet, name: v })}
                        />
                        <TextField
                          label="Breed / species"
                          value={pet.breed}
                          onChange={(v) => updateArrayItem('pets', i, { ...pet, breed: v })}
                        />
                        <TextField
                          label="Age"
                          value={pet.age}
                          onChange={(v) => updateArrayItem('pets', i, { ...pet, age: v })}
                        />
                        <TextField
                          label="Vet name / clinic"
                          value={pet.vet}
                          onChange={(v) => updateArrayItem('pets', i, { ...pet, vet: v })}
                        />
                        <TextField
                          label="Vet phone"
                          type="tel"
                          value={pet.vetPhone}
                          onChange={(v) => updateArrayItem('pets', i, { ...pet, vetPhone: v })}
                        />
                        <TextField
                          label="Food brand"
                          value={pet.food}
                          onChange={(v) => updateArrayItem('pets', i, { ...pet, food: v })}
                        />
                      </div>
                      <TextAreaField
                        label="Medications"
                        value={pet.meds}
                        onChange={(v) => updateArrayItem('pets', i, { ...pet, meds: v })}
                        rows={2}
                      />
                      <TextAreaField
                        label="Routine"
                        value={pet.routine}
                        onChange={(v) => updateArrayItem('pets', i, { ...pet, routine: v })}
                        rows={3}
                        placeholder="Feeds at 7am and 6pm. Walked twice a day. Afraid of thunder."
                      />
                      <TextAreaField
                        label="Preferred home if I pass"
                        value={pet.preferredHome}
                        onChange={(v) =>
                          updateArrayItem('pets', i, { ...pet, preferredHome: v })
                        }
                        rows={2}
                        placeholder="My daughter Sarah has agreed to take her."
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* 10. FINAL WISHES */}
            <TabsContent value="wishes" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <Flower2 className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Final Wishes</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Your preferences. Family shouldn't have to guess what you would have wanted.
                  </p>
                  <TextAreaField
                    label="Burial, cremation, or other"
                    value={data.burialPreference}
                    onChange={(v) => update('burialPreference', v)}
                    rows={3}
                  />
                  <TextAreaField
                    label="Memorial service — what kind?"
                    value={data.memorialType}
                    onChange={(v) => update('memorialType', v)}
                    rows={3}
                    placeholder="Traditional funeral / celebration of life / small family gathering / no service"
                  />
                  <TextAreaField
                    label="Hymns, readings, music"
                    value={data.hymnsReadings}
                    onChange={(v) => update('hymnsReadings', v)}
                    rows={4}
                  />
                  <TextAreaField
                    label="Obituary preferences"
                    value={data.obituaryPreference}
                    onChange={(v) => update('obituaryPreference', v)}
                    rows={4}
                    placeholder="What papers to run it in. Tone. Photos to use. What you want mentioned."
                  />
                  <TextAreaField
                    label="Final messages to family"
                    value={data.finalMessages}
                    onChange={(v) => update('finalMessages', v)}
                    rows={6}
                    helper="Can reference separate sealed letters. See Section 12."
                  />
                  <TextAreaField
                    label="Charitable giving requests"
                    value={data.charitableRequests}
                    onChange={(v) => update('charitableRequests', v)}
                    rows={3}
                    placeholder='e.g. "In lieu of flowers, donations to the American Cancer Society"'
                  />
                  <TextAreaField
                    label="Religious or spiritual preferences"
                    value={data.religiousPreference}
                    onChange={(v) => update('religiousPreference', v)}
                    rows={3}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 11. HISTORY */}
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <User className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Personal History</h2>
                  </div>
                  <p className="text-base text-muted-foreground">
                    For the eulogy, obituary, and family memory. The facts family may not
                    remember when they're grieving.
                  </p>
                  <TextField
                    label="Where you were born"
                    value={data.whereBorn}
                    onChange={(v) => update('whereBorn', v)}
                  />
                  <TextAreaField
                    label="Schools attended"
                    value={data.schools}
                    onChange={(v) => update('schools', v)}
                    rows={3}
                  />
                  <TextAreaField
                    label="Jobs and career"
                    value={data.jobs}
                    onChange={(v) => update('jobs', v)}
                    rows={4}
                  />
                  <TextAreaField
                    label="Marriage / partnerships"
                    value={data.marriageInfo}
                    onChange={(v) => update('marriageInfo', v)}
                    rows={3}
                  />
                  <TextAreaField
                    label="Children and grandchildren"
                    value={data.childrenInfo}
                    onChange={(v) => update('childrenInfo', v)}
                    rows={3}
                  />
                  <TextAreaField
                    label="Accomplishments you're proud of"
                    value={data.accomplishments}
                    onChange={(v) => update('accomplishments', v)}
                    rows={4}
                  />
                  <TextAreaField
                    label="Anything else about your life story"
                    value={data.lifeStory}
                    onChange={(v) => update('lifeStory', v)}
                    rows={6}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 12. LETTERS */}
            <TabsContent value="letters" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <Mail className="h-7 w-7 text-violet-700" />
                    <h2 className="text-2xl font-bold">Letters to Loved Ones</h2>
                  </div>
                  <Alert className="bg-violet-50 border-violet-300 dark:bg-violet-950/30 dark:border-violet-800">
                    <Heart className="h-5 w-5 text-violet-700" />
                    <AlertTitle>Don't write the letters here.</AlertTitle>
                    <AlertDescription>
                      Write sealed letters on paper, keep them somewhere safe, and note below
                      where they are. Keeping letters on a device risks someone reading them
                      early — or never finding them.
                    </AlertDescription>
                  </Alert>
                  {data.letters.map((l, i) => (
                    <div key={i} className="rounded-lg border p-4 bg-muted/20 grid gap-3 sm:grid-cols-3">
                      <TextField
                        label="To whom"
                        value={l.recipient}
                        onChange={(v) =>
                          updateArrayItem('letters', i, { ...l, recipient: v })
                        }
                        placeholder="My wife, my son, my daughter"
                      />
                      <TextField
                        label="Where the letter is"
                        value={l.location}
                        onChange={(v) => updateArrayItem('letters', i, { ...l, location: v })}
                        placeholder="Fireproof safe, envelope marked 'For Emma'"
                      />
                      <TextField
                        label="Notes"
                        value={l.notes}
                        onChange={(v) => updateArrayItem('letters', i, { ...l, notes: v })}
                        placeholder='e.g. "Open only after my passing"'
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* LIVE PREVIEW */}
        <section className="print:hidden container max-w-6xl mx-auto px-4 py-6">
          <h2 className="text-3xl font-bold mb-3">Live preview of your binder</h2>
          <p className="text-muted-foreground mb-4">
            This is what prints. Scroll through it before hitting print.
          </p>
        </section>

        <div className="deb-preview">
          <article className="deb-page" aria-label="Digital Estate Binder">
            {/* Header */}
            <div className="deb-head-brand">
              <span>TekSure · Digital Estate Binder</span>
              <span className="deb-date">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            {/* Family instructions sheet (first) */}
            <section className="deb-section" data-section="_instructions">
              <h1>If you're reading this…</h1>
              <p className="deb-tag">
                A message from {data.fullName || '[name]'} for family.
              </p>
              <div className="deb-rule" />
              <div className="deb-callout">
                This is my Digital Estate Binder. It won't answer every question, but it will
                tell you where things are and who to call. <strong>Take your time.</strong> Most
                things don't need to be decided in the first 48 hours.
              </div>
              <h3>First steps</h3>
              <ol style={{ paddingLeft: '18pt', lineHeight: 1.55, fontSize: '11pt' }}>
                <li>Breathe. You don't have to do everything today.</li>
                <li>Call the first person listed in Section 2 of this binder.</li>
                <li>If this is a medical emergency, call 911 first — come back to this later.</li>
                <li>Don't rush to cancel accounts or sell anything. Most of it can wait a few weeks.</li>
                <li>Find my will (see Section 4) before making financial decisions.</li>
              </ol>
              <div className="deb-warn">
                <strong>Note to the reader: </strong> passwords are not written in this binder.
                They live in a password manager — see Section 7 for how to access it.
              </div>
            </section>

            {/* 1. Cover */}
            <PrintSection sectionId="cover" number={1} title="Cover Page" showBlank={showBlankTemplate}>
              {showBlankTemplate ? (
                <BlankLines labels={['Full legal name', 'Date of birth', 'Last updated', 'Binder version', 'Where this binder is kept']} />
              ) : (
                <>
                  <PrintRow label="Full legal name" value={data.fullName} />
                  <PrintRow label="Date of birth" value={data.dateOfBirth} />
                  <PrintRow label="Last updated" value={data.lastUpdated} />
                  <PrintRow label="Binder version" value={data.version} />
                  <PrintRow label="Where this binder is kept" value={data.binderLocation} />
                </>
              )}
            </PrintSection>

            {/* 2. Emergency */}
            <PrintSection
              sectionId="emergency"
              number={2}
              title="Start Here (Emergency)"
              showBlank={showBlankTemplate}
            >
              <div className="deb-warn">
                <strong>For immediate medical emergencies, call 911 first.</strong> This binder is
                for after.
              </div>
              {showBlankTemplate ? (
                <BlankLines
                  labels={[
                    'First person to call',
                    'Their phone number',
                    'First 48 hours — what to do',
                    'If I\'m in the hospital but still alive',
                  ]}
                  extraLinesForEach={{ 'First 48 hours — what to do': 4, 'If I\'m in the hospital but still alive': 3 }}
                />
              ) : (
                <>
                  <PrintRow label="First person to call" value={data.firstCallName} />
                  <PrintRow label="Their phone number" value={data.firstCallPhone} />
                  <PrintRow label="First 48 hours — what to do" value={data.first48Notes} multiline />
                  <PrintRow
                    label="If I'm in the hospital but still alive"
                    value={data.emergencyInstructions}
                    multiline
                  />
                </>
              )}
            </PrintSection>

            {/* 3. People */}
            <PrintSection
              sectionId="people"
              number={3}
              title="Important People"
              showBlank={showBlankTemplate}
            >
              <div className="deb-grid-cards">
                <PrintPerson label="Spouse / Partner" person={data.spouse} showBlank={showBlankTemplate} />
                <PrintPerson label="Executor" person={data.executor} showBlank={showBlankTemplate} />
                <PrintPerson label="Financial POA" person={data.financialPoa} showBlank={showBlankTemplate} />
                <PrintPerson label="Healthcare POA" person={data.healthcarePoa} showBlank={showBlankTemplate} />
                <PrintPerson label="Attorney" person={data.lawyer} showBlank={showBlankTemplate} />
                <PrintPerson label="Accountant" person={data.accountant} showBlank={showBlankTemplate} />
                <PrintPerson label="Clergy" person={data.clergy} showBlank={showBlankTemplate} />
                {data.children.map((c, i) =>
                  (c.name || showBlankTemplate) ? (
                    <PrintPerson
                      key={`child-${i}`}
                      label={`Child ${i + 1}`}
                      person={c}
                      showBlank={showBlankTemplate}
                    />
                  ) : null,
                )}
                {data.closeFriends.map((f, i) =>
                  (f.name || showBlankTemplate) ? (
                    <PrintPerson
                      key={`friend-${i}`}
                      label={`Close friend ${i + 1}`}
                      person={f}
                      showBlank={showBlankTemplate}
                    />
                  ) : null,
                )}
              </div>
            </PrintSection>

            {/* 4. Documents */}
            <PrintSection
              sectionId="documents"
              number={4}
              title="Key Documents"
              showBlank={showBlankTemplate}
            >
              {showBlankTemplate ? (
                <BlankLines
                  labels={[
                    'Will — where is the signed original?',
                    'Trust documents',
                    'Life insurance policies',
                    'Titles (house, car, boat)',
                    'Safe deposit box location',
                    'Safe deposit box key location',
                    'Home safe combination HINT',
                  ]}
                />
              ) : (
                <>
                  <PrintRow label="Will location" value={data.willLocation} multiline />
                  <PrintRow label="Trust documents" value={data.trustLocation} multiline />
                  <PrintRow label="Life insurance" value={data.lifeInsuranceLocation} multiline />
                  <PrintRow label="Titles" value={data.titlesLocation} multiline />
                  <PrintRow label="Safe deposit box" value={data.safeDepositBox} multiline />
                  <PrintRow label="Safe deposit box key" value={data.safeDepositKey} multiline />
                  <PrintRow label="Home safe — hint only" value={data.homeSafeHint} multiline />
                  {data.otherDocs
                    .filter((d) => d.name || d.location)
                    .map((d, i) => (
                      <PrintRow
                        key={i}
                        label={d.name || 'Other document'}
                        value={`${d.location}${d.notes ? ` — ${d.notes}` : ''}`}
                      />
                    ))}
                </>
              )}
            </PrintSection>

            {/* 5. Financial */}
            <PrintSection
              sectionId="financial"
              number={5}
              title="Financial Accounts"
              showBlank={showBlankTemplate}
            >
              <div className="deb-warn">
                <strong>Last 4 digits only. Password hints only.</strong> Real passwords live in a
                password manager.
              </div>
              <PrintAccountGroup title="Bank accounts" accounts={data.bankAccounts} showBlank={showBlankTemplate} />
              <PrintAccountGroup title="Investment" accounts={data.investmentAccounts} showBlank={showBlankTemplate} />
              <PrintAccountGroup title="Retirement" accounts={data.retirementAccounts} showBlank={showBlankTemplate} />
              <PrintAccountGroup title="Credit cards" accounts={data.creditCards} showBlank={showBlankTemplate} />
              <PrintAccountGroup title="Loans / mortgages" accounts={data.loans} showBlank={showBlankTemplate} />
            </PrintSection>

            {/* 6. Insurance */}
            <PrintSection
              sectionId="insurance"
              number={6}
              title="Insurance"
              showBlank={showBlankTemplate}
            >
              {data.insurances
                .filter((ins) => ins.type || ins.carrier || showBlankTemplate)
                .map((ins, i) => (
                  <div key={i} className="deb-sub-card" style={{ marginBottom: '8pt' }}>
                    <div className="deb-sub-card-title">
                      {ins.type || `Policy ${i + 1}`}
                    </div>
                    <PrintRow label="Carrier" value={ins.carrier} />
                    <PrintRow label="Policy #" value={ins.policyNumber} />
                    <PrintRow label="Agent" value={ins.agent} />
                    <PrintRow label="Agent phone" value={ins.agentPhone} />
                    <PrintRow label="Expiration" value={ins.expiration} />
                    <PrintRow label="Key benefits" value={ins.keyBenefits} multiline />
                  </div>
                ))}
            </PrintSection>

            {/* 7. Digital */}
            <PrintSection
              sectionId="digital"
              number={7}
              title="Digital Accounts"
              showBlank={showBlankTemplate}
            >
              <PrintDigitalGroup title="Email accounts" accounts={data.emailAccounts} showBlank={showBlankTemplate} />
              <PrintDigitalGroup title="Social media" accounts={data.socialMedia} showBlank={showBlankTemplate} />
              <PrintDigitalGroup title="Cloud storage" accounts={data.cloudStorage} showBlank={showBlankTemplate} />
              <PrintDigitalGroup title="Subscriptions" accounts={data.subscriptions} showBlank={showBlankTemplate} />
            </PrintSection>

            {/* 8. Devices */}
            <PrintSection
              sectionId="devices"
              number={8}
              title="Devices"
              showBlank={showBlankTemplate}
            >
              {data.devices
                .filter((d) => d.device || d.location || showBlankTemplate)
                .map((d, i) => (
                  <div key={i} className="deb-sub-card" style={{ marginBottom: '8pt' }}>
                    <div className="deb-sub-card-title">{d.device || `Device ${i + 1}`}</div>
                    <PrintRow label="Where it is" value={d.location} />
                    <PrintRow label="Passcode hint" value={d.passcodeHint} />
                    <PrintRow label="Notes" value={d.notes} multiline />
                  </div>
                ))}
              <PrintRow label="Smart home" value={data.smartHomeNotes} multiline />
              <PrintRow label="Hardware wallets / crypto" value={data.cryptoNotes} multiline />
              <PrintRow label="Backup drives" value={data.backupDriveLocation} multiline />
            </PrintSection>

            {/* 9. Pets */}
            <PrintSection sectionId="pets" number={9} title="Pets" showBlank={showBlankTemplate}>
              {data.pets
                .filter((p) => p.name || showBlankTemplate)
                .map((p, i) => (
                  <div key={i} className="deb-sub-card" style={{ marginBottom: '8pt' }}>
                    <div className="deb-sub-card-title">{p.name || `Pet ${i + 1}`}</div>
                    <PrintRow label="Breed / species" value={p.breed} />
                    <PrintRow label="Age" value={p.age} />
                    <PrintRow label="Vet" value={p.vet} />
                    <PrintRow label="Vet phone" value={p.vetPhone} />
                    <PrintRow label="Food brand" value={p.food} />
                    <PrintRow label="Medications" value={p.meds} multiline />
                    <PrintRow label="Routine" value={p.routine} multiline />
                    <PrintRow label="Preferred home if I pass" value={p.preferredHome} multiline />
                  </div>
                ))}
            </PrintSection>

            {/* 10. Final Wishes */}
            <PrintSection sectionId="wishes" number={10} title="Final Wishes" showBlank={showBlankTemplate}>
              {showBlankTemplate ? (
                <BlankLines
                  labels={[
                    'Burial / cremation / other',
                    'Memorial service type',
                    'Hymns, readings, music',
                    'Obituary preferences',
                    'Final messages to family',
                    'Charitable giving requests',
                    'Religious or spiritual preferences',
                  ]}
                  extraLinesForEach={{
                    'Final messages to family': 4,
                    'Obituary preferences': 3,
                    'Hymns, readings, music': 3,
                  }}
                />
              ) : (
                <>
                  <PrintRow label="Burial / cremation / other" value={data.burialPreference} multiline />
                  <PrintRow label="Memorial service type" value={data.memorialType} multiline />
                  <PrintRow label="Hymns, readings, music" value={data.hymnsReadings} multiline />
                  <PrintRow label="Obituary preferences" value={data.obituaryPreference} multiline />
                  <PrintRow label="Final messages to family" value={data.finalMessages} multiline />
                  <PrintRow label="Charitable requests" value={data.charitableRequests} multiline />
                  <PrintRow label="Religious preferences" value={data.religiousPreference} multiline />
                </>
              )}
            </PrintSection>

            {/* 11. Personal History */}
            <PrintSection
              sectionId="history"
              number={11}
              title="Personal History"
              showBlank={showBlankTemplate}
            >
              {showBlankTemplate ? (
                <BlankLines
                  labels={[
                    'Where I was born',
                    'Schools attended',
                    'Jobs and career',
                    'Marriage / partnerships',
                    'Children and grandchildren',
                    'Accomplishments',
                    'Life story',
                  ]}
                  extraLinesForEach={{
                    'Jobs and career': 4,
                    'Life story': 6,
                    'Accomplishments': 3,
                  }}
                />
              ) : (
                <>
                  <PrintRow label="Where I was born" value={data.whereBorn} />
                  <PrintRow label="Schools" value={data.schools} multiline />
                  <PrintRow label="Jobs and career" value={data.jobs} multiline />
                  <PrintRow label="Marriage" value={data.marriageInfo} multiline />
                  <PrintRow label="Children" value={data.childrenInfo} multiline />
                  <PrintRow label="Accomplishments" value={data.accomplishments} multiline />
                  <PrintRow label="Life story" value={data.lifeStory} multiline />
                </>
              )}
            </PrintSection>

            {/* 12. Letters */}
            <PrintSection
              sectionId="letters"
              number={12}
              title="Letters to Loved Ones"
              showBlank={showBlankTemplate}
            >
              <div className="deb-callout">
                The letters themselves are kept elsewhere. This list tells family they exist and
                where to find them.
              </div>
              {data.letters
                .filter((l) => l.recipient || l.location || showBlankTemplate)
                .map((l, i) => (
                  <div key={i} className="deb-sub-card" style={{ marginBottom: '8pt' }}>
                    <div className="deb-sub-card-title">
                      Letter {i + 1}
                      {l.recipient ? ` — To ${l.recipient}` : ''}
                    </div>
                    <PrintRow label="Location" value={l.location} />
                    <PrintRow label="Notes" value={l.notes} multiline />
                  </div>
                ))}
            </PrintSection>

            <div className="deb-foot">
              TekSure · Digital Estate Binder · v{data.version || BINDER_VERSION} · Printed{' '}
              {new Date().toLocaleDateString('en-US')}
            </div>
          </article>
        </div>

        {/* FAQ */}
        <section className="print:hidden container max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Info className="h-7 w-7 text-violet-700" />
            Questions people ask
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left text-lg">
                Isn't a will enough?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                A will handles the legal transfer of physical assets. It usually <em>doesn't</em>{' '}
                cover your digital life — email, social media, subscriptions, crypto, photos
                stored in the cloud. Without a binder like this, family can spend months trying
                to figure out what accounts you had, how to close them, and how to keep things
                from going to collections for services they can't cancel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-left text-lg">
                What if I don't have a lawyer?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                You can still use this binder. If you want help with the legal side:{' '}
                <strong>Legal Aid</strong> (free for qualifying incomes — search
                "Legal Aid [your state]"), <strong>AARP Legal Resources</strong> for people 50+,
                or your state bar's lawyer referral service. Online services like LegalZoom work
                for simple situations but read reviews and understand what you're signing — they
                don't give legal advice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-left text-lg">
                Which password manager do you recommend?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                <strong>Bitwarden</strong> is free and works well. <strong>1Password</strong>{' '}
                is paid (around $3/month) and has great family sharing. Either is far safer
                than a paper list. Your password manager master password is what you'd write
                into a sealed envelope for your executor — not the individual passwords.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-left text-lg">
                What about crypto?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                The <strong>seed phrase</strong> (the 12 or 24 words that restores a crypto
                wallet) should live on paper in a fireproof safe — <strong>never digital</strong>,
                never in this binder, never in a photo. In this binder, note which wallets exist
                and where the seed phrase is. Your executor can then retrieve it physically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger className="text-left text-lg">
                Can I fill this in pieces?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Yes. Every field is optional. Your progress saves automatically. Come back next
                week, next month, next year and add more. Most people work through it over a
                few sittings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger className="text-left text-lg">
                How do I share this with my spouse or executor?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                <strong>The data stays on this device only.</strong> A link by itself won't show
                them your content — they'd open a blank form. The safest way to share is to print
                the binder (or save as PDF) and give it to them in person. You can also{' '}
                <strong>Export JSON</strong> and send them that file to import on their own
                computer if they want their own copy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger className="text-left text-lg">
                How often should I update it?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Once a year is a good rhythm. Pick a reliable date — your birthday, New Year's,
                or a wedding anniversary. Also update after any major life change: moving, new
                bank, new pet, a death in the family, divorce, remarriage, a new grandchild.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Storage guidance */}
        <section className="print:hidden container max-w-4xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border-2 border-violet-300 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/40 dark:to-fuchsia-950/20 p-6">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Shield className="h-6 w-6 text-violet-700" />
              Where to keep the printed binder
            </h2>
            <ul className="space-y-2 text-base leading-relaxed">
              <li className="flex gap-2">
                <span className="text-violet-700 font-bold">•</span>
                <span>
                  <strong>Fireproof safe</strong> at home — and tell your spouse/executor where
                  the key is.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-violet-700 font-bold">•</span>
                <span>
                  <strong>Your attorney's office</strong> — a sealed envelope they hold until
                  needed.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-violet-700 font-bold">•</span>
                <span>
                  <strong>Safe deposit box</strong> — but know that some boxes are sealed on
                  death; check with your bank.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-violet-700 font-bold">•</span>
                <span>
                  <strong>Tell someone it exists.</strong> A perfect binder hidden too well does
                  no good.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Related */}
        <section className="print:hidden container max-w-5xl mx-auto px-4 pb-14">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="h-6 w-6 text-violet-700" />
            Related tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Grief & Digital Aftercare',
                description: "Handling a loved one's digital life after they pass.",
                path: '/tools/grief-tech-helper',
              },
              {
                title: 'Digital Will Template',
                description: 'A simpler printable will focused on online accounts.',
                path: '/tools/digital-will-template',
              },
              {
                title: 'Emergency Info Card',
                description: 'Wallet, fridge, and lockscreen medical info.',
                path: '/tools/emergency-info-card',
              },
              {
                title: 'Caregiver Toolkit',
                description: 'A hub for people caring for an aging loved one.',
                path: '/toolkits/caregiver',
              },
            ].map((r) => (
              <Link
                key={r.path}
                to={r.path}
                className="group rounded-xl border bg-card p-4 hover:border-violet-400 hover:shadow-md transition-all"
              >
                <div className="font-bold text-base mb-1 group-hover:text-violet-700">
                  {r.title}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.description}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-violet-700">
                  Open
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}

/* ──────────── Helper subcomponents ──────────── */

function AccountGroup({
  title,
  accounts,
  onChange,
}: {
  title: string;
  accounts: Account[];
  onChange: (i: number, a: Account) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold">{title}</h3>
      {accounts.map((a, i) => (
        <div key={i} className="rounded-lg border p-4 bg-muted/20 space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <TextField
              label="Institution"
              value={a.institution}
              onChange={(v) => onChange(i, { ...a, institution: v })}
            />
            <TextField
              label="Account type"
              value={a.accountType}
              onChange={(v) => onChange(i, { ...a, accountType: v })}
              placeholder="Checking, savings, Roth IRA, etc."
            />
            <TextField
              label="Account # — last 4 only"
              value={a.last4}
              onChange={(v) => onChange(i, { ...a, last4: v })}
              placeholder="0000"
            />
            <TextField
              label="Online portal URL"
              type="url"
              value={a.portalUrl}
              onChange={(v) => onChange(i, { ...a, portalUrl: v })}
            />
            <TextField
              label="Username"
              value={a.username}
              onChange={(v) => onChange(i, { ...a, username: v })}
            />
            <TextField
              label="Password hint (not the password)"
              value={a.passwordHint}
              onChange={(v) => onChange(i, { ...a, passwordHint: v })}
              placeholder='e.g. "in Bitwarden"'
            />
          </div>
          <TextField
            label="Security question hint"
            value={a.securityHint}
            onChange={(v) => onChange(i, { ...a, securityHint: v })}
            placeholder={`e.g. "mother's maiden name — see family tree"`}
          />
          <TextAreaField
            label="Notes"
            value={a.notes}
            onChange={(v) => onChange(i, { ...a, notes: v })}
            rows={2}
          />
        </div>
      ))}
    </div>
  );
}

function DigitalGroup({
  title,
  accounts,
  onChange,
  platformLabel,
  platformPlaceholder,
}: {
  title: string;
  accounts: DigitalAccount[];
  onChange: (i: number, a: DigitalAccount) => void;
  platformLabel: string;
  platformPlaceholder: string;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold">{title}</h3>
      {accounts.map((a, i) => (
        <div key={i} className="rounded-lg border p-4 bg-muted/20 grid gap-3 sm:grid-cols-3">
          <TextField
            label={platformLabel}
            value={a.platform}
            onChange={(v) => onChange(i, { ...a, platform: v })}
            placeholder={platformPlaceholder}
          />
          <TextField
            label="Username / email"
            value={a.username}
            onChange={(v) => onChange(i, { ...a, username: v })}
          />
          <TextField
            label="How to memorialize or close"
            value={a.memorializePlan}
            onChange={(v) => onChange(i, { ...a, memorializePlan: v })}
            placeholder='e.g. "Memorialize via Facebook form"'
          />
        </div>
      ))}
    </div>
  );
}

function InsuranceEditor({
  insurance,
  index,
  onChange,
}: {
  insurance: Insurance;
  index: number;
  onChange: (ins: Insurance) => void;
}) {
  return (
    <div className="rounded-lg border p-4 bg-muted/20 space-y-3">
      <h3 className="font-bold text-lg">Policy {index + 1}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <TextField
          label="Type"
          value={insurance.type}
          onChange={(v) => onChange({ ...insurance, type: v })}
          placeholder="Health, Life, Auto, Home, Dental, Vision, Medigap, Long-term care"
        />
        <TextField
          label="Carrier"
          value={insurance.carrier}
          onChange={(v) => onChange({ ...insurance, carrier: v })}
        />
        <TextField
          label="Policy #"
          value={insurance.policyNumber}
          onChange={(v) => onChange({ ...insurance, policyNumber: v })}
        />
        <TextField
          label="Agent"
          value={insurance.agent}
          onChange={(v) => onChange({ ...insurance, agent: v })}
        />
        <TextField
          label="Agent phone"
          type="tel"
          value={insurance.agentPhone}
          onChange={(v) => onChange({ ...insurance, agentPhone: v })}
        />
        <TextField
          label="Expiration / renewal"
          value={insurance.expiration}
          onChange={(v) => onChange({ ...insurance, expiration: v })}
        />
      </div>
      <TextAreaField
        label="Key benefits or notes"
        value={insurance.keyBenefits}
        onChange={(v) => onChange({ ...insurance, keyBenefits: v })}
        rows={3}
      />
    </div>
  );
}

/* ──────────── Print-side subcomponents ──────────── */

function PrintSection({
  sectionId,
  number,
  title,
  children,
}: {
  sectionId: string;
  number: number;
  title: string;
  children: React.ReactNode;
  showBlank?: boolean;
}) {
  return (
    <section className="deb-section" data-section={sectionId}>
      <h2>
        <span className="deb-section-num">{number}</span>
        {title}
      </h2>
      <div className="deb-rule" />
      {children}
    </section>
  );
}

function PrintRow({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  const empty = !value || value.trim() === '';
  return (
    <div className="deb-row">
      <span className="deb-row-label">{label}</span>
      <span className={`deb-row-value ${empty ? 'empty' : ''}`}>
        {empty ? '\u00A0' : value}
      </span>
    </div>
  );
}

function PrintPerson({
  label,
  person,
  showBlank,
}: {
  label: string;
  person: Person;
  showBlank: boolean;
}) {
  const hasAny =
    person.name || person.relationship || person.phone || person.email || person.notes;
  if (!hasAny && !showBlank) return null;
  return (
    <div className="deb-sub-card">
      <div className="deb-sub-card-title">{label}</div>
      <PrintRow label="Name" value={person.name} />
      <PrintRow label="Relationship" value={person.relationship} />
      <PrintRow label="Phone" value={person.phone} />
      <PrintRow label="Email" value={person.email} />
      {person.notes && <PrintRow label="Notes" value={person.notes} multiline />}
    </div>
  );
}

function PrintAccountGroup({
  title,
  accounts,
  showBlank,
}: {
  title: string;
  accounts: Account[];
  showBlank: boolean;
}) {
  const visible = accounts.filter(
    (a) => a.institution || a.accountType || a.last4 || showBlank,
  );
  if (visible.length === 0) return null;
  return (
    <>
      <h3>{title}</h3>
      {visible.map((a, i) => (
        <div key={i} className="deb-sub-card" style={{ marginBottom: '6pt' }}>
          <div className="deb-sub-card-title">
            {a.institution || `Account ${i + 1}`}
            {a.accountType ? ` · ${a.accountType}` : ''}
            {a.last4 ? ` · ····${a.last4}` : ''}
          </div>
          <PrintRow label="Portal URL" value={a.portalUrl} />
          <PrintRow label="Username" value={a.username} />
          <PrintRow label="Password hint" value={a.passwordHint} />
          <PrintRow label="Security hint" value={a.securityHint} />
          {a.notes && <PrintRow label="Notes" value={a.notes} multiline />}
        </div>
      ))}
    </>
  );
}

function PrintDigitalGroup({
  title,
  accounts,
  showBlank,
}: {
  title: string;
  accounts: DigitalAccount[];
  showBlank: boolean;
}) {
  const visible = accounts.filter((a) => a.platform || a.username || showBlank);
  if (visible.length === 0) return null;
  return (
    <>
      <h3>{title}</h3>
      {visible.map((a, i) => (
        <div key={i} className="deb-sub-card" style={{ marginBottom: '6pt' }}>
          <div className="deb-sub-card-title">{a.platform || `Account ${i + 1}`}</div>
          <PrintRow label="Username" value={a.username} />
          <PrintRow label="How to memorialize / close" value={a.memorializePlan} multiline />
        </div>
      ))}
    </>
  );
}

function BlankLines({
  labels,
  extraLinesForEach = {},
}: {
  labels: string[];
  extraLinesForEach?: Record<string, number>;
}) {
  return (
    <div>
      {labels.map((l, i) => {
        const extra = extraLinesForEach[l] || 0;
        return (
          <div key={i} className="deb-blank-block">
            <div className="deb-row-label" style={{ fontSize: '11pt' }}>
              {l}
            </div>
            <div className="deb-blank-line" />
            {Array.from({ length: extra }).map((_, k) => (
              <div key={k} className="deb-blank-line" />
            ))}
          </div>
        );
      })}
    </div>
  );
}
