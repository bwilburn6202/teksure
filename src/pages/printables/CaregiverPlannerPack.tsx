import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Printer,
  Save,
  Trash2,
  Download,
  Upload,
  FileCheck,
  Lock,
  ShieldCheck,
  Calendar,
  Users,
  HeartPulse,
  Smartphone,
  KeyRound,
  CreditCard,
  Stethoscope,
  Sparkles,
  AlertTriangle,
  Info,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ──────────────────────────────────────────────────────────────────────────
   Storage keys — one per page so drafts save independently.
   ────────────────────────────────────────────────────────────────────────── */
const STORAGE_KEY_PREFIX = 'teksure:caregiver-planner-';
const STORAGE_KEY_ALL = 'teksure:caregiver-planner-all';

/* ── Types ────────────────────────────────────────────────────────────────── */
interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

interface Medication {
  name: string;
  dose: string;
  prescriber: string;
  pharmacy: string;
  frequency: string;
}

interface Device {
  type: string;
  model: string;
  purchased: string;
  purpose: string;
  setupBy: string;
  manualsLocation: string;
  warranty: string;
  passwordEnvelope: string;
}

interface AccountRow {
  type: string;
  provider: string;
  username: string;
  twoFaPhone: string;
  recoveryEmail: string;
  lastVerified: string;
}

interface ServiceRow {
  type: string;
  provider: string;
  accountNumber: string;
  monthlyCost: string;
  phone: string;
  notes: string;
}

interface ContactRow {
  relationship: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

interface CareTeamRow {
  role: string;
  name: string;
  phone: string;
  address: string;
  cadence: string;
}

interface Page1 {
  fullName: string;
  dob: string;
  phone: string;
  address: string;
  emergencyContacts: EmergencyContact[];
  primaryPhysician: string;
  physicianPhone: string;
  dnrStatus: string;
  organDonor: string;
  poaName: string;
  poaPhone: string;
  executor: string;
  executorPhone: string;
  notes: string;
}

interface Page2 {
  conditions: string;
  allergies: string;
  medications: Medication[];
  supplements: string;
  pastSurgeries: string;
  insuranceNotes: string;
  medicalDevices: string;
}

interface Page3 {
  devices: Device[];
  envelopeLocation: string;
  notes: string;
}

interface Page4 {
  accounts: AccountRow[];
  passwordManager: string;
  notes: string;
}

interface Page5 {
  services: ServiceRow[];
  notes: string;
}

interface Page6 {
  contacts: ContactRow[];
  notes: string;
}

interface Page7 {
  careTeam: CareTeamRow[];
  notes: string;
}

interface Page8 {
  religious: string;
  dietary: string;
  musicLoves: string;
  comfortItems: string;
  favoriteShows: string;
  routines: string;
  topicsToAvoid: string;
  welcomeVisits: string;
  avoidVisits: string;
  endOfLife: string;
  advanceDirectiveLocation: string;
  notes: string;
}

interface PlannerData {
  page1: Page1;
  page2: Page2;
  page3: Page3;
  page4: Page4;
  page5: Page5;
  page6: Page6;
  page7: Page7;
  page8: Page8;
  updatedAt: string;
}

/* ── Empty starting data ─────────────────────────────────────────────────── */
const EMPTY_EMERGENCY_CONTACT: EmergencyContact = { name: '', relationship: '', phone: '' };
const EMPTY_MEDICATION: Medication = {
  name: '',
  dose: '',
  prescriber: '',
  pharmacy: '',
  frequency: '',
};
const EMPTY_DEVICE: Device = {
  type: '',
  model: '',
  purchased: '',
  purpose: '',
  setupBy: '',
  manualsLocation: '',
  warranty: '',
  passwordEnvelope: '',
};
const EMPTY_ACCOUNT: AccountRow = {
  type: '',
  provider: '',
  username: '',
  twoFaPhone: '',
  recoveryEmail: '',
  lastVerified: '',
};
const EMPTY_SERVICE: ServiceRow = {
  type: '',
  provider: '',
  accountNumber: '',
  monthlyCost: '',
  phone: '',
  notes: '',
};
const EMPTY_CONTACT: ContactRow = {
  relationship: '',
  name: '',
  phone: '',
  email: '',
  notes: '',
};
const EMPTY_CARE_TEAM: CareTeamRow = {
  role: '',
  name: '',
  phone: '',
  address: '',
  cadence: '',
};

const EMPTY_PLANNER: PlannerData = {
  page1: {
    fullName: '',
    dob: '',
    phone: '',
    address: '',
    emergencyContacts: [
      { ...EMPTY_EMERGENCY_CONTACT },
      { ...EMPTY_EMERGENCY_CONTACT },
      { ...EMPTY_EMERGENCY_CONTACT },
    ],
    primaryPhysician: '',
    physicianPhone: '',
    dnrStatus: '',
    organDonor: '',
    poaName: '',
    poaPhone: '',
    executor: '',
    executorPhone: '',
    notes: '',
  },
  page2: {
    conditions: '',
    allergies: '',
    medications: Array.from({ length: 10 }, () => ({ ...EMPTY_MEDICATION })),
    supplements: '',
    pastSurgeries: '',
    insuranceNotes: '',
    medicalDevices: '',
  },
  page3: {
    devices: Array.from({ length: 6 }, () => ({ ...EMPTY_DEVICE })),
    envelopeLocation: '',
    notes: '',
  },
  page4: {
    accounts: Array.from({ length: 10 }, () => ({ ...EMPTY_ACCOUNT })),
    passwordManager: '',
    notes: '',
  },
  page5: {
    services: Array.from({ length: 10 }, () => ({ ...EMPTY_SERVICE })),
    notes: '',
  },
  page6: {
    contacts: Array.from({ length: 10 }, () => ({ ...EMPTY_CONTACT })),
    notes: '',
  },
  page7: {
    careTeam: Array.from({ length: 8 }, () => ({ ...EMPTY_CARE_TEAM })),
    notes: '',
  },
  page8: {
    religious: '',
    dietary: '',
    musicLoves: '',
    comfortItems: '',
    favoriteShows: '',
    routines: '',
    topicsToAvoid: '',
    welcomeVisits: '',
    avoidVisits: '',
    endOfLife: '',
    advanceDirectiveLocation: '',
    notes: '',
  },
  updatedAt: '',
};

/* ── Page metadata ───────────────────────────────────────────────────────── */
const PAGE_META: Array<{
  num: number;
  key: keyof Omit<PlannerData, 'updatedAt'>;
  label: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}> = [
  { num: 1, key: 'page1', label: 'About Mom or Dad', short: 'Who they are', icon: FileText, accent: 'emerald' },
  { num: 2, key: 'page2', label: 'Medical snapshot', short: 'Conditions + meds', icon: HeartPulse, accent: 'rose' },
  { num: 3, key: 'page3', label: 'Technology inventory', short: 'Devices they own', icon: Smartphone, accent: 'sky' },
  { num: 4, key: 'page4', label: 'Account logins', short: 'Usernames only', icon: KeyRound, accent: 'amber' },
  { num: 5, key: 'page5', label: 'Services + subscriptions', short: 'Utilities + bills', icon: CreditCard, accent: 'indigo' },
  { num: 6, key: 'page6', label: 'Family contact tree', short: 'Who to call', icon: Users, accent: 'teal' },
  { num: 7, key: 'page7', label: 'Medical care team', short: 'Doctors + providers', icon: Stethoscope, accent: 'cyan' },
  { num: 8, key: 'page8', label: 'Wishes + preferences', short: 'What matters to them', icon: Sparkles, accent: 'violet' },
];

/* ── localStorage helpers ────────────────────────────────────────────────── */
function loadPlanner(): PlannerData {
  if (typeof window === 'undefined') return EMPTY_PLANNER;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_ALL);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...EMPTY_PLANNER, ...parsed };
    }
    // Fall back to per-page keys if they exist (older drafts)
    const merged: PlannerData = { ...EMPTY_PLANNER };
    PAGE_META.forEach(({ num, key }) => {
      const pageRaw = window.localStorage.getItem(`${STORAGE_KEY_PREFIX}${num}`);
      if (pageRaw) {
        try {
          (merged as Record<string, unknown>)[key] = JSON.parse(pageRaw);
        } catch {
          /* ignore */
        }
      }
    });
    return merged;
  } catch {
    return EMPTY_PLANNER;
  }
}

function savePlanner(data: PlannerData) {
  if (typeof window === 'undefined') return;
  try {
    const withTimestamp = { ...data, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY_ALL, JSON.stringify(withTimestamp));
    // Mirror into per-page keys so individual drafts survive too.
    PAGE_META.forEach(({ num, key }) => {
      window.localStorage.setItem(
        `${STORAGE_KEY_PREFIX}${num}`,
        JSON.stringify((withTimestamp as Record<string, unknown>)[key]),
      );
    });
  } catch {
    /* storage full or blocked — fail silently */
  }
}

function clearPlanner() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY_ALL);
    PAGE_META.forEach(({ num }) => {
      window.localStorage.removeItem(`${STORAGE_KEY_PREFIX}${num}`);
    });
  } catch {
    /* ignore */
  }
}

/* ── Small helpers ───────────────────────────────────────────────────────── */
function formatDateTime(iso: string): string {
  if (!iso) return 'not saved yet';
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────────────────── */
export default function CaregiverPlannerPack() {
  const [data, setData] = useState<PlannerData>(EMPTY_PLANNER);
  const [hydrated, setHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('page1');
  const [selectedPages, setSelectedPages] = useState<Record<number, boolean>>(
    () => Object.fromEntries(PAGE_META.map((p) => [p.num, true])),
  );
  const [blankPrintMode, setBlankPrintMode] = useState(false);
  const [savedAt, setSavedAt] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* Load once on mount */
  useEffect(() => {
    const loaded = loadPlanner();
    setData(loaded);
    setSavedAt(loaded.updatedAt);
    setHydrated(true);
  }, []);

  /* Persist every change after hydration */
  useEffect(() => {
    if (!hydrated) return;
    savePlanner(data);
    setSavedAt(new Date().toISOString());
  }, [data, hydrated]);

  /* ── Update helpers ─────────────────────────────────────────────────── */
  const updatePage = useCallback(
    <K extends keyof Omit<PlannerData, 'updatedAt'>>(
      key: K,
      updater: (prev: PlannerData[K]) => PlannerData[K],
    ) => {
      setData((prev) => ({ ...prev, [key]: updater(prev[key]) }));
    },
    [],
  );

  /* ── Print handlers ─────────────────────────────────────────────────── */
  const applyPrintClasses = useCallback(
    (pages: number[], blank: boolean) => {
      const body = document.body;
      // Clear old classes
      for (let i = 1; i <= 8; i++) {
        body.classList.remove(`cp-print-p${i}`);
      }
      body.classList.remove('cp-print-active', 'cp-print-blank');
      // Add new
      body.classList.add('cp-print-active');
      if (blank) body.classList.add('cp-print-blank');
      pages.forEach((p) => body.classList.add(`cp-print-p${p}`));
    },
    [],
  );

  const removePrintClasses = useCallback(() => {
    const body = document.body;
    for (let i = 1; i <= 8; i++) {
      body.classList.remove(`cp-print-p${i}`);
    }
    body.classList.remove('cp-print-active', 'cp-print-blank');
  }, []);

  const printPages = useCallback(
    (pages: number[], blank = false) => {
      if (pages.length === 0) {
        window.alert('Pick at least one page to print.');
        return;
      }
      setBlankPrintMode(blank);
      applyPrintClasses(pages, blank);
      // Let the DOM settle before opening the print dialog
      window.setTimeout(() => {
        window.print();
        window.setTimeout(() => {
          removePrintClasses();
          setBlankPrintMode(false);
        }, 400);
      }, 80);
    },
    [applyPrintClasses, removePrintClasses],
  );

  const handlePrintAll = () => printPages([1, 2, 3, 4, 5, 6, 7, 8], false);
  const handlePrintSelected = () => {
    const pages = PAGE_META.filter((p) => selectedPages[p.num]).map((p) => p.num);
    printPages(pages, false);
  };
  const handlePrintBlankTemplate = () => printPages([1, 2, 3, 4, 5, 6, 7, 8], true);

  /* ── Import / Export JSON ───────────────────────────────────────────── */
  const handleExport = () => {
    try {
      const payload = JSON.stringify({ ...data, updatedAt: new Date().toISOString() }, null, 2);
      const blob = new Blob([payload], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const safeName = (data.page1.fullName || 'caregiver-planner')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      a.download = `${safeName}-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.alert('Could not export. Your browser may be blocking downloads.');
    }
  };

  const handleImportClick = () => fileInputRef.current?.click();

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(String(evt.target?.result || '{}'));
        setData({ ...EMPTY_PLANNER, ...parsed });
        window.alert('Import complete. Your planner has been restored.');
      } catch {
        window.alert('That file did not look like a valid planner. Nothing changed.');
      }
    };
    reader.readAsText(file);
    // Reset the input so the same file can be chosen again if needed
    e.target.value = '';
  };

  const handleClearAll = () => {
    const ok = window.confirm(
      'Erase every field on every page? Printed copies stay printed, but your draft on this device will be wiped.',
    );
    if (!ok) return;
    clearPlanner();
    setData(EMPTY_PLANNER);
    setSavedAt('');
  };

  /* ── Counts ─────────────────────────────────────────────────────────── */
  const filledCount = useMemo(() => {
    const page1Filled = [
      data.page1.fullName,
      data.page1.dob,
      data.page1.phone,
      data.page1.address,
      data.page1.primaryPhysician,
      data.page1.poaName,
    ].filter((v) => v.trim().length > 0).length;
    return page1Filled;
  }, [data]);

  /* ──────────────────────────────────────────────────────────────────────
     RENDER
     ────────────────────────────────────────────────────────────────────── */
  return (
    <>
      <SEOHead
        title="Caregiver Planner — Print, Fill, Keep Handy"
        description="Eight printable pages to organize an aging parent's tech, health, contacts, and care plan. Fill them in once, keep updated, store safely."
        path="/printables/caregiver-planner"
        type="article"
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container max-w-6xl pt-4 px-4 print:hidden">
          <PageBreadcrumb />
        </div>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden print:hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 dark:from-emerald-950/40 dark:via-green-950/30 dark:to-teal-950/40"
            aria-hidden
          />
          <div className="relative container max-w-6xl mx-auto px-4 py-12 md:py-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white text-base min-h-8">
                Printable Pack
              </Badge>
              <Badge variant="outline" className="text-base min-h-8 border-emerald-300 text-emerald-800 dark:text-emerald-200">
                8 pages
              </Badge>
              <BookmarkButton
                type="tool"
                slug="caregiver-planner"
                title="Caregiver Planner"
                url="/printables/caregiver-planner"
              />
            </div>
            <div className="flex items-start gap-4">
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-emerald-600 text-white items-center justify-center shrink-0 shadow-lg">
                <FileText className="w-9 h-9" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-emerald-950 dark:text-emerald-100">
                  Caregiver Planner — Print + Fill + Keep Handy
                </h1>
                <p className="mt-4 text-lg md:text-xl text-emerald-900/80 dark:text-emerald-100/80 max-w-3xl">
                  8 printable pages. Fill them in once, keep updated. A tangible plan for caring for an aging parent.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    onClick={handlePrintAll}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white min-h-14 text-base"
                  >
                    <Printer className="w-5 h-5 mr-2" />
                    Print all 8 pages
                  </Button>
                  <Button
                    onClick={handlePrintBlankTemplate}
                    size="lg"
                    variant="outline"
                    className="min-h-14 text-base border-emerald-300"
                  >
                    <FileCheck className="w-5 h-5 mr-2" />
                    Print blank template
                  </Button>
                </div>
                <p className="mt-4 text-sm text-emerald-900/70 dark:text-emerald-100/70">
                  Draft saved {savedAt ? `at ${formatDateTime(savedAt)}` : '(nothing saved yet)'} · {filledCount}/6 key fields on page 1
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy reminder ─────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 -mt-4 md:-mt-6 print:hidden relative z-10">
          <Alert className="border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40">
            <Lock className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100 text-lg">
              This contains sensitive info. Handle with care.
            </AlertTitle>
            <AlertDescription className="text-emerald-900/90 dark:text-emerald-100/90 text-base">
              Don&apos;t leave it lying around. Keep physical copies in a fireproof box or locked drawer. The digital draft stays on THIS device only — nothing is sent anywhere.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Toolbar ──────────────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mt-8 print:hidden">
          <Card className="border-2 border-emerald-200 dark:border-emerald-900">
            <CardContent className="p-5 md:p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Printer className="w-5 h-5 text-emerald-700" />
                    Print selected pages
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {PAGE_META.map((p) => (
                      <label
                        key={p.num}
                        className="flex items-start gap-2 p-2 rounded border border-border hover:border-emerald-300 cursor-pointer"
                      >
                        <Checkbox
                          checked={selectedPages[p.num] ?? false}
                          onCheckedChange={(v) =>
                            setSelectedPages((prev) => ({ ...prev, [p.num]: v === true }))
                          }
                          className="mt-0.5"
                          aria-label={`Include page ${p.num}: ${p.label}`}
                        />
                        <span className="text-sm">
                          <span className="font-semibold">P{p.num}.</span> {p.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      onClick={handlePrintSelected}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white min-h-12 text-base"
                    >
                      <Printer className="w-4 h-4 mr-2" />
                      Print selected
                    </Button>
                    <Button
                      variant="ghost"
                      className="min-h-12 text-base"
                      onClick={() =>
                        setSelectedPages(Object.fromEntries(PAGE_META.map((p) => [p.num, true])))
                      }
                    >
                      Select all
                    </Button>
                    <Button
                      variant="ghost"
                      className="min-h-12 text-base"
                      onClick={() =>
                        setSelectedPages(Object.fromEntries(PAGE_META.map((p) => [p.num, false])))
                      }
                    >
                      Clear
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Save className="w-5 h-5 text-emerald-700" />
                    Save, back up, or reset
                  </h2>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      onClick={handleExport}
                      className="justify-start min-h-12 text-base"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export as JSON (back up this planner)
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleImportClick}
                      className="justify-start min-h-12 text-base"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Import a saved JSON file
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/json,.json"
                      className="hidden"
                      onChange={handleImportFile}
                    />
                    <Button
                      variant="outline"
                      onClick={handleClearAll}
                      className="justify-start min-h-12 text-base text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Erase all fields on this device
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1">
                      Import replaces every page with the file&apos;s contents. Exporting is the only way to move a draft between devices.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Tabs: editor + preview ───────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mt-10 mb-16 print:hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted p-1 mb-6">
              {PAGE_META.map((p) => (
                <TabsTrigger
                  key={p.key}
                  value={p.key}
                  className="text-sm md:text-base min-h-11 data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                >
                  <span className="font-semibold mr-1">{p.num}.</span> {p.short}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* PAGE 1 */}
            <TabsContent value="page1" className="space-y-5">
              <PageHeader
                num={1}
                label="About Mom or Dad"
                description="The essentials. If a first responder, a hospital, or a family member needed one page, this is it."
              />
              <Card>
                <CardContent className="p-5 md:p-6 grid gap-4 md:grid-cols-2">
                  <LabeledInput
                    label="Full legal name"
                    value={data.page1.fullName}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, fullName: v }))}
                  />
                  <LabeledInput
                    label="Date of birth"
                    placeholder="MM / DD / YYYY"
                    value={data.page1.dob}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, dob: v }))}
                  />
                  <div className="md:col-span-2">
                    <Label className="text-base font-semibold">SSN</Label>
                    <div className="mt-1 p-3 rounded border border-dashed border-amber-400 bg-amber-50 dark:bg-amber-950/30 text-sm text-amber-900 dark:text-amber-200">
                      We don&apos;t store Social Security Numbers in the app, even on your device. Leave the SSN line blank on the digital draft and fill it in by hand after printing.
                    </div>
                  </div>
                  <LabeledInput
                    label="Phone"
                    value={data.page1.phone}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, phone: v }))}
                  />
                  <LabeledInput
                    label="Home address"
                    value={data.page1.address}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, address: v }))}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <h3 className="text-lg font-bold">Three emergency contacts</h3>
                  {data.page1.emergencyContacts.map((c, idx) => (
                    <div key={idx} className="grid md:grid-cols-3 gap-3">
                      <LabeledInput
                        label={`Contact ${idx + 1} — name`}
                        value={c.name}
                        onChange={(v) =>
                          updatePage('page1', (p) => {
                            const next = [...p.emergencyContacts];
                            next[idx] = { ...next[idx], name: v };
                            return { ...p, emergencyContacts: next };
                          })
                        }
                      />
                      <LabeledInput
                        label="Relationship"
                        value={c.relationship}
                        onChange={(v) =>
                          updatePage('page1', (p) => {
                            const next = [...p.emergencyContacts];
                            next[idx] = { ...next[idx], relationship: v };
                            return { ...p, emergencyContacts: next };
                          })
                        }
                      />
                      <LabeledInput
                        label="Phone"
                        value={c.phone}
                        onChange={(v) =>
                          updatePage('page1', (p) => {
                            const next = [...p.emergencyContacts];
                            next[idx] = { ...next[idx], phone: v };
                            return { ...p, emergencyContacts: next };
                          })
                        }
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 md:p-6 grid gap-4 md:grid-cols-2">
                  <LabeledInput
                    label="Primary physician"
                    value={data.page1.primaryPhysician}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, primaryPhysician: v }))}
                  />
                  <LabeledInput
                    label="Physician phone"
                    value={data.page1.physicianPhone}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, physicianPhone: v }))}
                  />
                  <div>
                    <Label className="text-base font-semibold">DNR status</Label>
                    <Select
                      value={data.page1.dnrStatus}
                      onValueChange={(v) => updatePage('page1', (p) => ({ ...p, dnrStatus: v }))}
                    >
                      <SelectTrigger className="min-h-12 text-base mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes — DNR on file</SelectItem>
                        <SelectItem value="no">No DNR</SelectItem>
                        <SelectItem value="unknown">Not sure / talking about it</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Organ donor</Label>
                    <Select
                      value={data.page1.organDonor}
                      onValueChange={(v) => updatePage('page1', (p) => ({ ...p, organDonor: v }))}
                    >
                      <SelectTrigger className="min-h-12 text-base mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes — registered donor</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="unknown">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <LabeledInput
                    label="Power of attorney — name"
                    value={data.page1.poaName}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, poaName: v }))}
                  />
                  <LabeledInput
                    label="Power of attorney — phone"
                    value={data.page1.poaPhone}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, poaPhone: v }))}
                  />
                  <LabeledInput
                    label="Executor of estate"
                    value={data.page1.executor}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, executor: v }))}
                  />
                  <LabeledInput
                    label="Executor phone"
                    value={data.page1.executorPhone}
                    onChange={(v) => updatePage('page1', (p) => ({ ...p, executorPhone: v }))}
                  />
                </CardContent>
              </Card>

              <LabeledTextarea
                label="Notes for page 1"
                value={data.page1.notes}
                onChange={(v) => updatePage('page1', (p) => ({ ...p, notes: v }))}
              />
            </TabsContent>

            {/* PAGE 2 */}
            <TabsContent value="page2" className="space-y-5">
              <PageHeader
                num={2}
                label="Medical snapshot"
                description="What a doctor or nurse would want in 30 seconds."
              />
              <div className="grid md:grid-cols-2 gap-4">
                <LabeledTextarea
                  label="Diagnosed conditions"
                  value={data.page2.conditions}
                  onChange={(v) => updatePage('page2', (p) => ({ ...p, conditions: v }))}
                />
                <LabeledTextarea
                  label="Allergies (drug, food, environment)"
                  value={data.page2.allergies}
                  onChange={(v) => updatePage('page2', (p) => ({ ...p, allergies: v }))}
                />
              </div>

              <Card>
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg font-bold mb-3">Medications (up to 10)</h3>
                  <div className="hidden md:grid grid-cols-12 gap-2 mb-2 text-xs font-semibold text-muted-foreground">
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Dose</div>
                    <div className="col-span-3">Prescriber</div>
                    <div className="col-span-2">Pharmacy</div>
                    <div className="col-span-2">Frequency</div>
                  </div>
                  <div className="space-y-2">
                    {data.page2.medications.map((m, idx) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2">
                        <Input
                          placeholder="Name"
                          className="md:col-span-3 min-h-12 text-base"
                          value={m.name}
                          onChange={(e) =>
                            updatePage('page2', (p) => {
                              const next = [...p.medications];
                              next[idx] = { ...next[idx], name: e.target.value };
                              return { ...p, medications: next };
                            })
                          }
                        />
                        <Input
                          placeholder="Dose"
                          className="md:col-span-2 min-h-12 text-base"
                          value={m.dose}
                          onChange={(e) =>
                            updatePage('page2', (p) => {
                              const next = [...p.medications];
                              next[idx] = { ...next[idx], dose: e.target.value };
                              return { ...p, medications: next };
                            })
                          }
                        />
                        <Input
                          placeholder="Prescriber"
                          className="md:col-span-3 min-h-12 text-base"
                          value={m.prescriber}
                          onChange={(e) =>
                            updatePage('page2', (p) => {
                              const next = [...p.medications];
                              next[idx] = { ...next[idx], prescriber: e.target.value };
                              return { ...p, medications: next };
                            })
                          }
                        />
                        <Input
                          placeholder="Pharmacy"
                          className="md:col-span-2 min-h-12 text-base"
                          value={m.pharmacy}
                          onChange={(e) =>
                            updatePage('page2', (p) => {
                              const next = [...p.medications];
                              next[idx] = { ...next[idx], pharmacy: e.target.value };
                              return { ...p, medications: next };
                            })
                          }
                        />
                        <Input
                          placeholder="Frequency"
                          className="md:col-span-2 min-h-12 text-base"
                          value={m.frequency}
                          onChange={(e) =>
                            updatePage('page2', (p) => {
                              const next = [...p.medications];
                              next[idx] = { ...next[idx], frequency: e.target.value };
                              return { ...p, medications: next };
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <LabeledTextarea
                  label="Vitamins + supplements"
                  value={data.page2.supplements}
                  onChange={(v) => updatePage('page2', (p) => ({ ...p, supplements: v }))}
                />
                <LabeledTextarea
                  label="Past surgeries (year + procedure)"
                  value={data.page2.pastSurgeries}
                  onChange={(v) => updatePage('page2', (p) => ({ ...p, pastSurgeries: v }))}
                />
                <LabeledTextarea
                  label="Insurance cards — notes + where scans are kept"
                  placeholder="e.g. Medicare + BCBS supplement; scans in Google Drive / Scans folder. On the printed page, paste or tape copies of the front and back of each card."
                  value={data.page2.insuranceNotes}
                  onChange={(v) => updatePage('page2', (p) => ({ ...p, insuranceNotes: v }))}
                />
                <LabeledTextarea
                  label="Medical devices (CPAP, hearing aids, pacemaker, etc.)"
                  value={data.page2.medicalDevices}
                  onChange={(v) => updatePage('page2', (p) => ({ ...p, medicalDevices: v }))}
                />
              </div>
            </TabsContent>

            {/* PAGE 3 */}
            <TabsContent value="page3" className="space-y-5">
              <PageHeader
                num={3}
                label="Technology inventory"
                description="Every device they own. Passwords don't live here — they live in a sealed envelope."
              />
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  {data.page3.devices.map((d, idx) => (
                    <div key={idx} className="border rounded-lg p-3 md:p-4 bg-muted/30">
                      <h4 className="font-semibold mb-2">Device {idx + 1}</h4>
                      <div className="grid gap-3 md:grid-cols-2">
                        <LabeledInput
                          label="Type"
                          placeholder="phone / tablet / computer / TV / router / speaker / medical alert"
                          value={d.type}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], type: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                        <LabeledInput
                          label="Make / model"
                          value={d.model}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], model: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                        <LabeledInput
                          label="Purchase date"
                          value={d.purchased}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], purchased: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                        <LabeledInput
                          label="Purpose (what do they use it for?)"
                          value={d.purpose}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], purpose: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                        <LabeledInput
                          label="Who set it up / who to call"
                          value={d.setupBy}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], setupBy: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                        <LabeledInput
                          label="Where are the manuals?"
                          value={d.manualsLocation}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], manualsLocation: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                        <LabeledInput
                          label="Warranty / AppleCare status"
                          value={d.warranty}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], warranty: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                        <LabeledInput
                          label="Password envelope label"
                          placeholder="e.g. Envelope #3 — kitchen drawer"
                          value={d.passwordEnvelope}
                          onChange={(v) =>
                            updatePage('page3', (p) => {
                              const next = [...p.devices];
                              next[idx] = { ...next[idx], passwordEnvelope: v };
                              return { ...p, devices: next };
                            })
                          }
                        />
                      </div>
                    </div>
                  ))}
                  <LabeledInput
                    label="Where are the sealed password envelopes kept?"
                    placeholder="e.g. Fireproof box, top shelf of hall closet"
                    value={data.page3.envelopeLocation}
                    onChange={(v) => updatePage('page3', (p) => ({ ...p, envelopeLocation: v }))}
                  />
                  <LabeledTextarea
                    label="Notes"
                    value={data.page3.notes}
                    onChange={(v) => updatePage('page3', (p) => ({ ...p, notes: v }))}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* PAGE 4 */}
            <TabsContent value="page4" className="space-y-5">
              <PageHeader
                num={4}
                label="Account logins summary"
                description="Usernames only. Passwords live in a password manager — never write them on this page."
              />
              <Alert className="border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40">
                <Info className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                <AlertTitle>Use a password manager</AlertTitle>
                <AlertDescription>
                  Need help picking one?{' '}
                  <Link to="/tools/password-strength-tester" className="underline font-semibold">
                    Test a password + see manager options
                  </Link>
                  .
                </AlertDescription>
              </Alert>
              <Card>
                <CardContent className="p-5 md:p-6 space-y-3">
                  <div className="hidden md:grid grid-cols-12 gap-2 text-xs font-semibold text-muted-foreground">
                    <div className="col-span-2">Type</div>
                    <div className="col-span-2">Provider</div>
                    <div className="col-span-2">Username</div>
                    <div className="col-span-2">2FA phone</div>
                    <div className="col-span-2">Recovery email</div>
                    <div className="col-span-2">Last verified</div>
                  </div>
                  {data.page4.accounts.map((a, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2">
                      <Input
                        placeholder="Bank / card / Medicare / email..."
                        className="md:col-span-2 min-h-12 text-base"
                        value={a.type}
                        onChange={(e) =>
                          updatePage('page4', (p) => {
                            const next = [...p.accounts];
                            next[idx] = { ...next[idx], type: e.target.value };
                            return { ...p, accounts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Provider"
                        className="md:col-span-2 min-h-12 text-base"
                        value={a.provider}
                        onChange={(e) =>
                          updatePage('page4', (p) => {
                            const next = [...p.accounts];
                            next[idx] = { ...next[idx], provider: e.target.value };
                            return { ...p, accounts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Username"
                        className="md:col-span-2 min-h-12 text-base"
                        value={a.username}
                        onChange={(e) =>
                          updatePage('page4', (p) => {
                            const next = [...p.accounts];
                            next[idx] = { ...next[idx], username: e.target.value };
                            return { ...p, accounts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="2FA phone"
                        className="md:col-span-2 min-h-12 text-base"
                        value={a.twoFaPhone}
                        onChange={(e) =>
                          updatePage('page4', (p) => {
                            const next = [...p.accounts];
                            next[idx] = { ...next[idx], twoFaPhone: e.target.value };
                            return { ...p, accounts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Recovery email"
                        className="md:col-span-2 min-h-12 text-base"
                        value={a.recoveryEmail}
                        onChange={(e) =>
                          updatePage('page4', (p) => {
                            const next = [...p.accounts];
                            next[idx] = { ...next[idx], recoveryEmail: e.target.value };
                            return { ...p, accounts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="YYYY-MM"
                        className="md:col-span-2 min-h-12 text-base"
                        value={a.lastVerified}
                        onChange={(e) =>
                          updatePage('page4', (p) => {
                            const next = [...p.accounts];
                            next[idx] = { ...next[idx], lastVerified: e.target.value };
                            return { ...p, accounts: next };
                          })
                        }
                      />
                    </div>
                  ))}
                  <LabeledInput
                    label="Password manager used"
                    placeholder="1Password / Bitwarden / Keeper / paper book in safe"
                    value={data.page4.passwordManager}
                    onChange={(v) => updatePage('page4', (p) => ({ ...p, passwordManager: v }))}
                  />
                  <LabeledTextarea
                    label="Notes"
                    value={data.page4.notes}
                    onChange={(v) => updatePage('page4', (p) => ({ ...p, notes: v }))}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* PAGE 5 */}
            <TabsContent value="page5" className="space-y-5">
              <PageHeader
                num={5}
                label="Services + subscriptions"
                description="Every recurring bill in one place — utilities, streaming, memberships."
              />
              <Card>
                <CardContent className="p-5 md:p-6 space-y-3">
                  <div className="hidden md:grid grid-cols-12 gap-2 text-xs font-semibold text-muted-foreground">
                    <div className="col-span-2">Type</div>
                    <div className="col-span-3">Provider</div>
                    <div className="col-span-2">Account #</div>
                    <div className="col-span-1">$/mo</div>
                    <div className="col-span-2">Phone</div>
                    <div className="col-span-2">Notes</div>
                  </div>
                  {data.page5.services.map((s, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2">
                      <Input
                        placeholder="Power / gas / internet / Netflix..."
                        className="md:col-span-2 min-h-12 text-base"
                        value={s.type}
                        onChange={(e) =>
                          updatePage('page5', (p) => {
                            const next = [...p.services];
                            next[idx] = { ...next[idx], type: e.target.value };
                            return { ...p, services: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Provider"
                        className="md:col-span-3 min-h-12 text-base"
                        value={s.provider}
                        onChange={(e) =>
                          updatePage('page5', (p) => {
                            const next = [...p.services];
                            next[idx] = { ...next[idx], provider: e.target.value };
                            return { ...p, services: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Account #"
                        className="md:col-span-2 min-h-12 text-base"
                        value={s.accountNumber}
                        onChange={(e) =>
                          updatePage('page5', (p) => {
                            const next = [...p.services];
                            next[idx] = { ...next[idx], accountNumber: e.target.value };
                            return { ...p, services: next };
                          })
                        }
                      />
                      <Input
                        placeholder="$"
                        className="md:col-span-1 min-h-12 text-base"
                        value={s.monthlyCost}
                        onChange={(e) =>
                          updatePage('page5', (p) => {
                            const next = [...p.services];
                            next[idx] = { ...next[idx], monthlyCost: e.target.value };
                            return { ...p, services: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Phone"
                        className="md:col-span-2 min-h-12 text-base"
                        value={s.phone}
                        onChange={(e) =>
                          updatePage('page5', (p) => {
                            const next = [...p.services];
                            next[idx] = { ...next[idx], phone: e.target.value };
                            return { ...p, services: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Notes"
                        className="md:col-span-2 min-h-12 text-base"
                        value={s.notes}
                        onChange={(e) =>
                          updatePage('page5', (p) => {
                            const next = [...p.services];
                            next[idx] = { ...next[idx], notes: e.target.value };
                            return { ...p, services: next };
                          })
                        }
                      />
                    </div>
                  ))}
                  <LabeledTextarea
                    label="Notes"
                    value={data.page5.notes}
                    onChange={(v) => updatePage('page5', (p) => ({ ...p, notes: v }))}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* PAGE 6 */}
            <TabsContent value="page6" className="space-y-5">
              <PageHeader
                num={6}
                label="Family contact tree"
                description="Spouse, kids, siblings, neighbors with a key, attorney, accountant, religious leader."
              />
              <Card>
                <CardContent className="p-5 md:p-6 space-y-3">
                  <div className="hidden md:grid grid-cols-12 gap-2 text-xs font-semibold text-muted-foreground">
                    <div className="col-span-2">Relationship</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Phone</div>
                    <div className="col-span-3">Email</div>
                    <div className="col-span-2">Notes</div>
                  </div>
                  {data.page6.contacts.map((c, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2">
                      <Input
                        placeholder="Spouse / child / neighbor..."
                        className="md:col-span-2 min-h-12 text-base"
                        value={c.relationship}
                        onChange={(e) =>
                          updatePage('page6', (p) => {
                            const next = [...p.contacts];
                            next[idx] = { ...next[idx], relationship: e.target.value };
                            return { ...p, contacts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Name"
                        className="md:col-span-3 min-h-12 text-base"
                        value={c.name}
                        onChange={(e) =>
                          updatePage('page6', (p) => {
                            const next = [...p.contacts];
                            next[idx] = { ...next[idx], name: e.target.value };
                            return { ...p, contacts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Phone"
                        className="md:col-span-2 min-h-12 text-base"
                        value={c.phone}
                        onChange={(e) =>
                          updatePage('page6', (p) => {
                            const next = [...p.contacts];
                            next[idx] = { ...next[idx], phone: e.target.value };
                            return { ...p, contacts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Email"
                        className="md:col-span-3 min-h-12 text-base"
                        value={c.email}
                        onChange={(e) =>
                          updatePage('page6', (p) => {
                            const next = [...p.contacts];
                            next[idx] = { ...next[idx], email: e.target.value };
                            return { ...p, contacts: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Notes"
                        className="md:col-span-2 min-h-12 text-base"
                        value={c.notes}
                        onChange={(e) =>
                          updatePage('page6', (p) => {
                            const next = [...p.contacts];
                            next[idx] = { ...next[idx], notes: e.target.value };
                            return { ...p, contacts: next };
                          })
                        }
                      />
                    </div>
                  ))}
                  <LabeledTextarea
                    label="Notes"
                    value={data.page6.notes}
                    onChange={(v) => updatePage('page6', (p) => ({ ...p, notes: v }))}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* PAGE 7 */}
            <TabsContent value="page7" className="space-y-5">
              <PageHeader
                num={7}
                label="Medical care team"
                description="Primary care, specialists, dentist, eye doctor, pharmacist, PT/OT, mental health."
              />
              <Card>
                <CardContent className="p-5 md:p-6 space-y-3">
                  <div className="hidden md:grid grid-cols-12 gap-2 text-xs font-semibold text-muted-foreground">
                    <div className="col-span-2">Role</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Phone</div>
                    <div className="col-span-3">Address</div>
                    <div className="col-span-2">Visit cadence</div>
                  </div>
                  {data.page7.careTeam.map((c, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2">
                      <Input
                        placeholder="Primary / cardiologist / dentist..."
                        className="md:col-span-2 min-h-12 text-base"
                        value={c.role}
                        onChange={(e) =>
                          updatePage('page7', (p) => {
                            const next = [...p.careTeam];
                            next[idx] = { ...next[idx], role: e.target.value };
                            return { ...p, careTeam: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Name"
                        className="md:col-span-3 min-h-12 text-base"
                        value={c.name}
                        onChange={(e) =>
                          updatePage('page7', (p) => {
                            const next = [...p.careTeam];
                            next[idx] = { ...next[idx], name: e.target.value };
                            return { ...p, careTeam: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Phone"
                        className="md:col-span-2 min-h-12 text-base"
                        value={c.phone}
                        onChange={(e) =>
                          updatePage('page7', (p) => {
                            const next = [...p.careTeam];
                            next[idx] = { ...next[idx], phone: e.target.value };
                            return { ...p, careTeam: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Address"
                        className="md:col-span-3 min-h-12 text-base"
                        value={c.address}
                        onChange={(e) =>
                          updatePage('page7', (p) => {
                            const next = [...p.careTeam];
                            next[idx] = { ...next[idx], address: e.target.value };
                            return { ...p, careTeam: next };
                          })
                        }
                      />
                      <Input
                        placeholder="Quarterly / yearly..."
                        className="md:col-span-2 min-h-12 text-base"
                        value={c.cadence}
                        onChange={(e) =>
                          updatePage('page7', (p) => {
                            const next = [...p.careTeam];
                            next[idx] = { ...next[idx], cadence: e.target.value };
                            return { ...p, careTeam: next };
                          })
                        }
                      />
                    </div>
                  ))}
                  <LabeledTextarea
                    label="Notes"
                    value={data.page7.notes}
                    onChange={(v) => updatePage('page7', (p) => ({ ...p, notes: v }))}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* PAGE 8 */}
            <TabsContent value="page8" className="space-y-5">
              <PageHeader
                num={8}
                label="Wishes + preferences"
                description="The human side — what makes them feel at home, who they want around, what they'd want at the end."
              />
              <div className="grid md:grid-cols-2 gap-4">
                <LabeledTextarea
                  label="Religious / spiritual preferences"
                  value={data.page8.religious}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, religious: v }))}
                />
                <LabeledTextarea
                  label="Dietary preferences + restrictions"
                  value={data.page8.dietary}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, dietary: v }))}
                />
                <LabeledTextarea
                  label="Music they love"
                  value={data.page8.musicLoves}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, musicLoves: v }))}
                />
                <LabeledTextarea
                  label="Comfort items (blanket, photo, stuffed animal)"
                  value={data.page8.comfortItems}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, comfortItems: v }))}
                />
                <LabeledTextarea
                  label="Favorite shows / movies"
                  value={data.page8.favoriteShows}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, favoriteShows: v }))}
                />
                <LabeledTextarea
                  label="Routines that matter (morning coffee, evening news, Sunday call...)"
                  value={data.page8.routines}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, routines: v }))}
                />
                <LabeledTextarea
                  label="Topics to avoid"
                  value={data.page8.topicsToAvoid}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, topicsToAvoid: v }))}
                />
                <LabeledTextarea
                  label="People they love seeing"
                  value={data.page8.welcomeVisits}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, welcomeVisits: v }))}
                />
                <LabeledTextarea
                  label="People they don't want visits from"
                  value={data.page8.avoidVisits}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, avoidVisits: v }))}
                />
                <LabeledTextarea
                  label="End-of-life wishes"
                  value={data.page8.endOfLife}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, endOfLife: v }))}
                />
                <LabeledInput
                  label="Advance directive — where is it kept?"
                  value={data.page8.advanceDirectiveLocation}
                  onChange={(v) =>
                    updatePage('page8', (p) => ({ ...p, advanceDirectiveLocation: v }))
                  }
                />
                <LabeledTextarea
                  label="Other notes"
                  value={data.page8.notes}
                  onChange={(v) => updatePage('page8', (p) => ({ ...p, notes: v }))}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* ── Preview pane ─────────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mb-12 print:hidden">
          <Card className="border-2 border-dashed">
            <CardContent className="p-5 md:p-6">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-700" />
                  Live preview — what will print
                </h2>
                <Badge variant="secondary" className="text-sm">
                  Showing: {PAGE_META.find((p) => p.key === activeTab)?.label}
                </Badge>
              </div>
              <div className="bg-white dark:bg-neutral-100 dark:text-neutral-900 rounded border shadow-inner p-4 md:p-6 max-h-[520px] overflow-auto">
                <PrintablePage
                  num={PAGE_META.find((p) => p.key === activeTab)?.num ?? 1}
                  data={data}
                  blank={false}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Who else should have a copy ──────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mb-12 print:hidden">
          <Card>
            <CardContent className="p-5 md:p-6">
              <h2 className="text-2xl font-bold mb-2">Who else should have a copy?</h2>
              <p className="text-muted-foreground mb-4">
                Print extra copies and hand one to each of these people. Ask them to store it somewhere safe.
              </p>
              <div className="grid md:grid-cols-5 gap-3">
                {[
                  { label: 'Spouse', icon: Users },
                  { label: 'Power of attorney', icon: ShieldCheck },
                  { label: 'Attorney', icon: FileText },
                  { label: 'Executor of estate', icon: FileCheck },
                  { label: 'Primary physician', icon: Stethoscope },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="border rounded-lg p-3 flex items-center gap-2 bg-emerald-50/50 dark:bg-emerald-950/30"
                  >
                    <Icon className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span className="text-base font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Keep it updated ──────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mb-12 print:hidden">
          <Card className="border-2 border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/30">
            <CardContent className="p-5 md:p-6">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-amber-700" />
                Keep it updated
              </h2>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>At least once a year — pick a date you&apos;ll remember, like their birthday or New Year&apos;s.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>After a hospital stay or ER visit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>After any new medication, dose change, or new specialist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>After a move, a new device purchase, or a cancelled service.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <span>After losing someone on the contact tree.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="container max-w-4xl mx-auto px-4 mb-16 print:hidden">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left text-base">
                Is any of this sent to TekSure or stored in the cloud?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                No. Every field you type stays in this browser only. Exporting as JSON is the only way data leaves the device — and that only happens when you click Export.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-left text-base">
                Should I put the SSN on the printed page?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Up to you. The app doesn&apos;t store SSNs. If you want the SSN on the physical copy, write it by hand after printing, and keep the page in a locked drawer or fireproof box.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-left text-base">
                What about passwords?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Page 4 only asks for usernames. Passwords belong in a password manager, or in a sealed envelope with a label that matches your inventory on page 3.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-left text-base">
                How do I share this with a sibling?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Two options: print them a copy, or use the Export button to save a JSON file and send it over a secure channel. They can open the page on their own device and click Import.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger className="text-left text-base">
                What if my parent can&apos;t answer some of these?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Leave fields blank. Something on paper is better than nothing. Fill in what you know, and add the rest over time as you learn more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ── Related tools ────────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mb-20 print:hidden">
          <h2 className="text-2xl font-bold mb-5">Pairs well with</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/toolkits/caregiver"
              className="border rounded-xl p-5 hover:shadow-md hover:border-emerald-300 transition group flex items-start gap-3"
            >
              <Users className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Caregiver toolkit</h3>
                <p className="text-sm text-muted-foreground">
                  The full hub — guides, tools, and checklists for caregivers.
                </p>
              </div>
            </Link>
            <Link
              to="/tools/emergency-info-card"
              className="border rounded-xl p-5 hover:shadow-md hover:border-emerald-300 transition group flex items-start gap-3"
            >
              <AlertTriangle className="h-6 w-6 text-rose-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Emergency Info Card</h3>
                <p className="text-sm text-muted-foreground">
                  Wallet + fridge + lockscreen card for first responders.
                </p>
              </div>
            </Link>
            <Link
              to="/tools/digital-will-template"
              className="border rounded-xl p-5 hover:shadow-md hover:border-emerald-300 transition group flex items-start gap-3"
            >
              <FileText className="h-6 w-6 text-indigo-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Digital Will Template</h3>
                <p className="text-sm text-muted-foreground">
                  The accounts your family will need, in one document.
                </p>
              </div>
            </Link>
            <Link
              to="/tools/grief-tech-helper"
              className="border rounded-xl p-5 hover:shadow-md hover:border-emerald-300 transition group flex items-start gap-3"
            >
              <HeartPulse className="h-6 w-6 text-violet-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Grief + Digital Aftercare</h3>
                <p className="text-sm text-muted-foreground">
                  A gentle guide for after a loved one passes.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── PRINT-ONLY LAYOUT ───────────────────────────────── */}
        <div className="hidden print:block cp-print-area" aria-hidden={!blankPrintMode}>
          {PAGE_META.map((p) => (
            <div key={p.num} className={`cp-print-page cp-print-page-${p.num}`}>
              <PrintablePage num={p.num} data={data} blank={blankPrintMode} />
            </div>
          ))}
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>

      {/* ── Print CSS ────────────────────────────────────────── */}
      <style>{`
        @page { size: letter; margin: 0.5in; }
        @media print {
          html, body { background: #fff !important; color: #000 !important; }
          .cp-print-area { display: block !important; }
          .cp-print-page {
            page-break-after: always;
            break-after: page;
            color: #000;
          }
          .cp-print-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }
          body.cp-print-active .cp-print-page { display: none; }
          body.cp-print-active.cp-print-p1 .cp-print-page-1 { display: block; }
          body.cp-print-active.cp-print-p2 .cp-print-page-2 { display: block; }
          body.cp-print-active.cp-print-p3 .cp-print-page-3 { display: block; }
          body.cp-print-active.cp-print-p4 .cp-print-page-4 { display: block; }
          body.cp-print-active.cp-print-p5 .cp-print-page-5 { display: block; }
          body.cp-print-active.cp-print-p6 .cp-print-page-6 { display: block; }
          body.cp-print-active.cp-print-p7 .cp-print-page-7 { display: block; }
          body.cp-print-active.cp-print-p8 .cp-print-page-8 { display: block; }
          .cp-print-field {
            border-bottom: 1px solid #333;
            min-height: 1.4rem;
            padding: 2px 4px;
          }
          .cp-print-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #555;
          }
          .cp-print-row { display: flex; gap: 8px; margin-bottom: 6px; }
          .cp-print-table { width: 100%; border-collapse: collapse; font-size: 11px; }
          .cp-print-table th, .cp-print-table td {
            border: 1px solid #999;
            padding: 4px 6px;
            vertical-align: top;
            min-height: 18px;
          }
          .cp-print-table th { background: #f0f0f0; text-align: left; }
          .cp-print-title {
            font-size: 22px;
            font-weight: 800;
            margin: 0 0 2px 0;
            color: #111;
          }
          .cp-print-subtitle {
            font-size: 11px;
            color: #666;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Sub-components
   ────────────────────────────────────────────────────────────────────────── */

function PageHeader({
  num,
  label,
  description,
}: {
  num: number;
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
        {num}
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold">{label}</h2>
        <p className="text-sm md:text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function LabeledInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <Label className="text-base font-semibold">{label}</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-12 text-base mt-1"
      />
    </div>
  );
}

function LabeledTextarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <Label className="text-base font-semibold">{label}</Label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-base mt-1 min-h-24"
      />
    </div>
  );
}

/* ── Printable page renderer ─────────────────────────────────────────────── */
function PrintablePage({
  num,
  data,
  blank,
}: {
  num: number;
  data: PlannerData;
  blank: boolean;
}) {
  const show = (v: string) => (blank ? '' : v);
  const headerLabel = PAGE_META.find((p) => p.num === num)?.label ?? '';

  return (
    <div className="cp-printable text-neutral-900">
      <div className="cp-print-heading mb-3">
        <h1 className="cp-print-title text-2xl font-extrabold">
          Caregiver Planner · Page {num}
        </h1>
        <p className="cp-print-subtitle text-xs text-neutral-600">
          {headerLabel} · Keep this in a fireproof box or locked drawer
        </p>
      </div>

      {num === 1 && <PrintablePage1 data={data} show={show} />}
      {num === 2 && <PrintablePage2 data={data} show={show} />}
      {num === 3 && <PrintablePage3 data={data} show={show} />}
      {num === 4 && <PrintablePage4 data={data} show={show} />}
      {num === 5 && <PrintablePage5 data={data} show={show} />}
      {num === 6 && <PrintablePage6 data={data} show={show} />}
      {num === 7 && <PrintablePage7 data={data} show={show} />}
      {num === 8 && <PrintablePage8 data={data} show={show} />}
    </div>
  );
}

type ShowFn = (v: string) => string;

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-2">
      <div className="cp-print-label text-[10px] uppercase tracking-wide text-neutral-500">
        {label}
      </div>
      <div className="cp-print-field border-b border-neutral-700 min-h-[1.4rem] pb-0.5 text-sm">
        {value || '\u00A0'}
      </div>
    </div>
  );
}

function PrintablePage1({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page1;
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Full legal name" value={show(p.fullName)} />
        <Field label="Date of birth" value={show(p.dob)} />
      </div>
      <Field label="SSN (fill in by hand)" value="" />
      <div className="grid grid-cols-2 gap-3">
        <Field label="Phone" value={show(p.phone)} />
        <Field label="Home address" value={show(p.address)} />
      </div>
      <div>
        <div className="text-sm font-bold mt-2 mb-1">Emergency contacts</div>
        <table className="cp-print-table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Relationship</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {p.emergencyContacts.map((c, idx) => (
              <tr key={idx}>
                <td>{show(c.name) || '\u00A0'}</td>
                <td>{show(c.relationship) || '\u00A0'}</td>
                <td>{show(c.phone) || '\u00A0'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Primary physician" value={show(p.primaryPhysician)} />
        <Field label="Physician phone" value={show(p.physicianPhone)} />
        <Field label="DNR status" value={show(p.dnrStatus)} />
        <Field label="Organ donor" value={show(p.organDonor)} />
        <Field label="Power of attorney — name" value={show(p.poaName)} />
        <Field label="Power of attorney — phone" value={show(p.poaPhone)} />
        <Field label="Executor of estate" value={show(p.executor)} />
        <Field label="Executor phone" value={show(p.executorPhone)} />
      </div>
      {show(p.notes) && (
        <div className="mt-2 text-sm whitespace-pre-wrap">
          <span className="font-semibold">Notes: </span>
          {show(p.notes)}
        </div>
      )}
    </div>
  );
}

function PrintablePage2({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page2;
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <FieldBlock label="Diagnosed conditions" value={show(p.conditions)} />
        <FieldBlock label="Allergies" value={show(p.allergies)} />
      </div>
      <div>
        <div className="text-sm font-bold mt-2 mb-1">Medications</div>
        <table className="cp-print-table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Dose</th>
              <th>Prescriber</th>
              <th>Pharmacy</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {p.medications.map((m, idx) => (
              <tr key={idx}>
                <td>{show(m.name) || '\u00A0'}</td>
                <td>{show(m.dose) || '\u00A0'}</td>
                <td>{show(m.prescriber) || '\u00A0'}</td>
                <td>{show(m.pharmacy) || '\u00A0'}</td>
                <td>{show(m.frequency) || '\u00A0'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <FieldBlock label="Supplements" value={show(p.supplements)} />
        <FieldBlock label="Past surgeries" value={show(p.pastSurgeries)} />
        <FieldBlock
          label="Insurance cards — paste copies of front + back below"
          value={show(p.insuranceNotes)}
        />
        <FieldBlock label="Medical devices" value={show(p.medicalDevices)} />
      </div>
      <div className="border-2 border-dashed border-neutral-400 rounded p-2 min-h-24 text-xs text-neutral-500">
        Tape or paste insurance card copies here ↑
      </div>
    </div>
  );
}

function PrintablePage3({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page3;
  return (
    <div className="space-y-3">
      <table className="cp-print-table w-full">
        <thead>
          <tr>
            <th>Type</th>
            <th>Make / model</th>
            <th>Purchased</th>
            <th>Purpose</th>
            <th>Set up by</th>
            <th>Manuals</th>
            <th>Warranty</th>
            <th>Password env.</th>
          </tr>
        </thead>
        <tbody>
          {p.devices.map((d, idx) => (
            <tr key={idx}>
              <td>{show(d.type) || '\u00A0'}</td>
              <td>{show(d.model) || '\u00A0'}</td>
              <td>{show(d.purchased) || '\u00A0'}</td>
              <td>{show(d.purpose) || '\u00A0'}</td>
              <td>{show(d.setupBy) || '\u00A0'}</td>
              <td>{show(d.manualsLocation) || '\u00A0'}</td>
              <td>{show(d.warranty) || '\u00A0'}</td>
              <td>{show(d.passwordEnvelope) || '\u00A0'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Field
        label="Where are the sealed password envelopes kept?"
        value={show(p.envelopeLocation)}
      />
      {show(p.notes) && (
        <div className="text-sm whitespace-pre-wrap">
          <span className="font-semibold">Notes: </span>
          {show(p.notes)}
        </div>
      )}
    </div>
  );
}

function PrintablePage4({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page4;
  return (
    <div className="space-y-3">
      <div className="text-xs text-neutral-600 italic">
        Usernames only. Passwords live in a password manager — never on this page.
      </div>
      <table className="cp-print-table w-full">
        <thead>
          <tr>
            <th>Type</th>
            <th>Provider</th>
            <th>Username</th>
            <th>2FA phone</th>
            <th>Recovery email</th>
            <th>Last verified</th>
          </tr>
        </thead>
        <tbody>
          {p.accounts.map((a, idx) => (
            <tr key={idx}>
              <td>{show(a.type) || '\u00A0'}</td>
              <td>{show(a.provider) || '\u00A0'}</td>
              <td>{show(a.username) || '\u00A0'}</td>
              <td>{show(a.twoFaPhone) || '\u00A0'}</td>
              <td>{show(a.recoveryEmail) || '\u00A0'}</td>
              <td>{show(a.lastVerified) || '\u00A0'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Field label="Password manager used" value={show(p.passwordManager)} />
      {show(p.notes) && (
        <div className="text-sm whitespace-pre-wrap">
          <span className="font-semibold">Notes: </span>
          {show(p.notes)}
        </div>
      )}
    </div>
  );
}

function PrintablePage5({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page5;
  return (
    <div className="space-y-3">
      <table className="cp-print-table w-full">
        <thead>
          <tr>
            <th>Type</th>
            <th>Provider</th>
            <th>Account #</th>
            <th>$ / month</th>
            <th>Phone</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {p.services.map((s, idx) => (
            <tr key={idx}>
              <td>{show(s.type) || '\u00A0'}</td>
              <td>{show(s.provider) || '\u00A0'}</td>
              <td>{show(s.accountNumber) || '\u00A0'}</td>
              <td>{show(s.monthlyCost) || '\u00A0'}</td>
              <td>{show(s.phone) || '\u00A0'}</td>
              <td>{show(s.notes) || '\u00A0'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {show(p.notes) && (
        <div className="text-sm whitespace-pre-wrap">
          <span className="font-semibold">Notes: </span>
          {show(p.notes)}
        </div>
      )}
    </div>
  );
}

function PrintablePage6({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page6;
  return (
    <div className="space-y-3">
      <table className="cp-print-table w-full">
        <thead>
          <tr>
            <th>Relationship</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {p.contacts.map((c, idx) => (
            <tr key={idx}>
              <td>{show(c.relationship) || '\u00A0'}</td>
              <td>{show(c.name) || '\u00A0'}</td>
              <td>{show(c.phone) || '\u00A0'}</td>
              <td>{show(c.email) || '\u00A0'}</td>
              <td>{show(c.notes) || '\u00A0'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {show(p.notes) && (
        <div className="text-sm whitespace-pre-wrap">
          <span className="font-semibold">Notes: </span>
          {show(p.notes)}
        </div>
      )}
    </div>
  );
}

function PrintablePage7({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page7;
  return (
    <div className="space-y-3">
      <table className="cp-print-table w-full">
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Visit cadence</th>
          </tr>
        </thead>
        <tbody>
          {p.careTeam.map((c, idx) => (
            <tr key={idx}>
              <td>{show(c.role) || '\u00A0'}</td>
              <td>{show(c.name) || '\u00A0'}</td>
              <td>{show(c.phone) || '\u00A0'}</td>
              <td>{show(c.address) || '\u00A0'}</td>
              <td>{show(c.cadence) || '\u00A0'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {show(p.notes) && (
        <div className="text-sm whitespace-pre-wrap">
          <span className="font-semibold">Notes: </span>
          {show(p.notes)}
        </div>
      )}
    </div>
  );
}

function PrintablePage8({ data, show }: { data: PlannerData; show: ShowFn }) {
  const p = data.page8;
  return (
    <div className="space-y-3 text-sm">
      <div className="grid grid-cols-2 gap-3">
        <FieldBlock label="Religious / spiritual" value={show(p.religious)} />
        <FieldBlock label="Dietary" value={show(p.dietary)} />
        <FieldBlock label="Music they love" value={show(p.musicLoves)} />
        <FieldBlock label="Comfort items" value={show(p.comfortItems)} />
        <FieldBlock label="Favorite shows / movies" value={show(p.favoriteShows)} />
        <FieldBlock label="Routines that matter" value={show(p.routines)} />
        <FieldBlock label="Topics to avoid" value={show(p.topicsToAvoid)} />
        <FieldBlock label="People they love seeing" value={show(p.welcomeVisits)} />
        <FieldBlock label="People they don't want visits from" value={show(p.avoidVisits)} />
        <FieldBlock label="End-of-life wishes" value={show(p.endOfLife)} />
      </div>
      <Field label="Advance directive — where is it kept?" value={show(p.advanceDirectiveLocation)} />
      {show(p.notes) && (
        <div className="text-sm whitespace-pre-wrap">
          <span className="font-semibold">Notes: </span>
          {show(p.notes)}
        </div>
      )}
    </div>
  );
}

function FieldBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-neutral-400 rounded p-2 min-h-16">
      <div className="cp-print-label text-[10px] uppercase tracking-wide text-neutral-500 mb-1">
        {label}
      </div>
      <div className="whitespace-pre-wrap text-sm">{value || '\u00A0'}</div>
    </div>
  );
}
