import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Siren,
  Printer,
  Download,
  Save,
  Trash2,
  ShieldCheck,
  AlertTriangle,
  Heart,
  Phone,
  Pill,
  User,
  HeartPulse,
  Stethoscope,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  BookOpen,
  PawPrint,
  FileText,
  Lock,
  CreditCard,
  Smartphone,
} from 'lucide-react';
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
 * Emergency Info Card Generator
 * ------------------------------------------------------------------------
 * A printable emergency info card a person can keep in their wallet, on
 * their fridge, and on their phone lockscreen. All data is stored locally
 * in the browser — never sent to a server. The user controls every field
 * (every section is optional) and can hide insurance details by default.
 * ──────────────────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'teksure:emergency-info-card';

interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

interface Medication {
  name: string;
  dose: string;
  frequency: string;
}

interface CardData {
  // Personal
  fullName: string;
  dateOfBirth: string;
  bloodType: string;
  primaryLanguage: string;
  // Emergency contacts (3)
  contacts: EmergencyContact[];
  // Medical
  medicalConditions: string;
  medications: Medication[];
  allergiesDrug: string;
  allergiesFood: string;
  allergiesOther: string;
  // Doctor / Pharmacy
  doctorName: string;
  doctorPhone: string;
  pharmacyName: string;
  pharmacyPhone: string;
  // Insurance (private by default)
  insuranceCarrier: string;
  insuranceId: string;
  showInsurance: boolean;
  // DNR / advance directive
  hasDnr: boolean;
  dnrLocation: string;
  // Organ donor
  organDonor: boolean;
  // Pets
  petsDescription: string;
  vetName: string;
  vetPhone: string;
}

const EMPTY_CONTACT: EmergencyContact = { name: '', relationship: '', phone: '' };
const EMPTY_MED: Medication = { name: '', dose: '', frequency: '' };

const EMPTY_DATA: CardData = {
  fullName: '',
  dateOfBirth: '',
  bloodType: '',
  primaryLanguage: 'English',
  contacts: Array.from({ length: 3 }, () => ({ ...EMPTY_CONTACT })),
  medicalConditions: '',
  medications: Array.from({ length: 10 }, () => ({ ...EMPTY_MED })),
  allergiesDrug: '',
  allergiesFood: '',
  allergiesOther: '',
  doctorName: '',
  doctorPhone: '',
  pharmacyName: '',
  pharmacyPhone: '',
  insuranceCarrier: '',
  insuranceId: '',
  showInsurance: false,
  hasDnr: false,
  dnrLocation: '',
  organDonor: false,
  petsDescription: '',
  vetName: '',
  vetPhone: '',
};

/* ────────────────────── Templates ────────────────────── */

interface Template {
  id: string;
  label: string;
  description: string;
  icon: typeof Heart;
  data: Partial<CardData>;
}

const TEMPLATES: Template[] = [
  {
    id: 'heart-condition',
    label: 'Heart condition',
    description: 'Sample card for someone with cardiac history.',
    icon: HeartPulse,
    data: {
      bloodType: 'A+',
      medicalConditions:
        'Coronary artery disease. Had stent placed in 2023. History of high blood pressure.',
      medications: [
        { name: 'Atorvastatin', dose: '40 mg', frequency: 'Once daily, evening' },
        { name: 'Aspirin', dose: '81 mg', frequency: 'Once daily, morning' },
        { name: 'Metoprolol', dose: '25 mg', frequency: 'Twice daily' },
        { name: 'Lisinopril', dose: '10 mg', frequency: 'Once daily' },
        ...Array.from({ length: 6 }, () => ({ ...EMPTY_MED })),
      ],
      allergiesDrug: 'Penicillin (causes hives)',
    },
  },
  {
    id: 'diabetic',
    label: 'Diabetic',
    description: 'Sample card for someone managing Type 2 diabetes.',
    icon: Pill,
    data: {
      bloodType: 'O+',
      medicalConditions:
        'Type 2 diabetes (since 2018). Risk of low blood sugar. If found unconscious, check for medical bracelet.',
      medications: [
        { name: 'Metformin', dose: '1000 mg', frequency: 'Twice daily with meals' },
        { name: 'Insulin glargine (Lantus)', dose: '20 units', frequency: 'Bedtime' },
        ...Array.from({ length: 8 }, () => ({ ...EMPTY_MED })),
      ],
      allergiesDrug: 'Sulfa drugs',
    },
  },
  {
    id: 'dementia-caregiver',
    label: 'Dementia — caregiver contact',
    description: 'For a person with memory loss who may not be able to speak for themselves.',
    icon: User,
    data: {
      medicalConditions:
        'Alzheimer\'s disease. May be confused or unable to give my address. Please call my caregiver immediately.',
      medications: [
        { name: 'Donepezil', dose: '10 mg', frequency: 'Once daily, evening' },
        { name: 'Memantine', dose: '10 mg', frequency: 'Twice daily' },
        ...Array.from({ length: 8 }, () => ({ ...EMPTY_MED })),
      ],
    },
  },
  {
    id: 'latex-allergy',
    label: 'Latex allergy',
    description: 'For a serious latex allergy that affects medical treatment.',
    icon: AlertTriangle,
    data: {
      medicalConditions:
        'SEVERE LATEX ALLERGY — anaphylaxis risk. Use latex-free gloves, tubing, and supplies only.',
      allergiesDrug: 'Penicillin',
      allergiesOther: 'Latex (anaphylaxis), bee stings',
    },
  },
  {
    id: 'epilepsy',
    label: 'Epilepsy',
    description: 'For someone who may have a seizure in public.',
    icon: Sparkles,
    data: {
      medicalConditions:
        'Epilepsy. If having a seizure: do NOT restrain. Move sharp objects away. Time the seizure. Call 911 if it lasts more than 5 minutes.',
      medications: [
        { name: 'Levetiracetam (Keppra)', dose: '500 mg', frequency: 'Twice daily' },
        ...Array.from({ length: 9 }, () => ({ ...EMPTY_MED })),
      ],
    },
  },
];

/* ────────────────────── Storage helpers ────────────────────── */

function loadData(): CardData {
  if (typeof window === 'undefined') return EMPTY_DATA;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_DATA;
    const parsed = JSON.parse(raw);
    return {
      ...EMPTY_DATA,
      ...parsed,
      contacts: Array.from({ length: 3 }, (_, i) => ({
        ...EMPTY_CONTACT,
        ...(parsed.contacts?.[i] ?? {}),
      })),
      medications: Array.from({ length: 10 }, (_, i) => ({
        ...EMPTY_MED,
        ...(parsed.medications?.[i] ?? {}),
      })),
    };
  } catch {
    return EMPTY_DATA;
  }
}

function formatSavedAgo(ts: number | null): string {
  if (!ts) return '';
  const seconds = Math.floor((Date.now() - ts) / 1000);
  if (seconds < 5) return 'Saved moments ago';
  if (seconds < 60) return `Saved ${seconds} seconds ago`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `Saved ${mins} minute${mins === 1 ? '' : 's'} ago`;
  const hours = Math.floor(mins / 60);
  return `Saved ${hours} hour${hours === 1 ? '' : 's'} ago`;
}

/* ────────────────────── Card renderers ────────────────────── */

/** Filter helpers — keeps the rendered card free of empty rows. */
function nonEmptyContacts(contacts: EmergencyContact[]) {
  return contacts.filter((c) => c.name.trim() || c.phone.trim());
}
function nonEmptyMeds(meds: Medication[]) {
  return meds.filter((m) => m.name.trim());
}

/** A reusable label/value row for the printed cards. */
function CardRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="eic-row">
      <span className="eic-row-label">{label}</span>
      <span className="eic-row-value">{value}</span>
    </div>
  );
}

/* ────────────────────── The Page ────────────────────── */

export default function EmergencyInfoCard() {
  const [data, setData] = useState<CardData>(EMPTY_DATA);
  const [hydrated, setHydrated] = useState(false);
  const [lastSaved, setLastSaved] = useState<number | null>(null);
  const [savedLabel, setSavedLabel] = useState('');
  const [activeCard, setActiveCard] = useState<'wallet' | 'fridge' | 'lockscreen'>(
    'wallet',
  );
  const [printTarget, setPrintTarget] = useState<'wallet' | 'fridge' | 'lockscreen' | null>(
    null,
  );

  const lockscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  /* Hydrate from localStorage once on mount */
  useEffect(() => {
    setData(loadData());
    setHydrated(true);
  }, []);

  /* Autosave whenever data changes */
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setLastSaved(Date.now());
    } catch {
      // private browsing or quota — quietly ignore
    }
  }, [data, hydrated]);

  /* Tick the "Saved X minutes ago" label */
  useEffect(() => {
    setSavedLabel(formatSavedAgo(lastSaved));
    const t = window.setInterval(() => setSavedLabel(formatSavedAgo(lastSaved)), 15_000);
    return () => window.clearInterval(t);
  }, [lastSaved]);

  /* When printTarget is set, set body class so the right card prints, then trigger window.print */
  useEffect(() => {
    if (!printTarget) return;
    const cls = `eic-print-${printTarget}`;
    document.body.classList.add(cls);
    const t = window.setTimeout(() => {
      window.print();
      document.body.classList.remove(cls);
      setPrintTarget(null);
    }, 80);
    return () => {
      document.body.classList.remove(cls);
      window.clearTimeout(t);
    };
  }, [printTarget]);

  const update = useCallback(
    <K extends keyof CardData>(key: K, value: CardData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const updateContact = (i: number, field: keyof EmergencyContact, value: string) => {
    setData((prev) => {
      const next = [...prev.contacts];
      next[i] = { ...next[i], [field]: value };
      return { ...prev, contacts: next };
    });
  };

  const updateMed = (i: number, field: keyof Medication, value: string) => {
    setData((prev) => {
      const next = [...prev.medications];
      next[i] = { ...next[i], [field]: value };
      return { ...prev, medications: next };
    });
  };

  const handleClear = () => {
    const ok = window.confirm(
      'Clear everything you have entered so far? This cannot be undone.',
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

  const applyTemplate = (id: string) => {
    const t = TEMPLATES.find((x) => x.id === id);
    if (!t) return;
    const ok = window.confirm(
      `Load the "${t.label}" sample? This will fill in example data so you can see what a complete card looks like. Anything you have already typed will be replaced.`,
    );
    if (!ok) return;
    setData((prev) => ({
      ...EMPTY_DATA,
      // Keep personal contact details the user already typed
      fullName: prev.fullName,
      dateOfBirth: prev.dateOfBirth,
      contacts: prev.contacts,
      // Apply template fields
      ...t.data,
      medications:
        t.data.medications ??
        Array.from({ length: 10 }, () => ({ ...EMPTY_MED })),
    }));
  };

  const meds = useMemo(() => nonEmptyMeds(data.medications), [data.medications]);
  const contacts = useMemo(() => nonEmptyContacts(data.contacts), [data.contacts]);
  const allergiesCombined = useMemo(() => {
    const parts = [
      data.allergiesDrug && `Drugs: ${data.allergiesDrug}`,
      data.allergiesFood && `Food: ${data.allergiesFood}`,
      data.allergiesOther && `Other: ${data.allergiesOther}`,
    ].filter(Boolean);
    return parts.join(' · ');
  }, [data.allergiesDrug, data.allergiesFood, data.allergiesOther]);

  /* ─── Lockscreen PNG export (manual canvas, no html2canvas dependency) ─── */
  const downloadLockscreenPng = useCallback(() => {
    const canvas = lockscreenCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Standard iPhone lockscreen: 1170 × 2532
    canvas.width = 1170;
    canvas.height = 2532;

    // Background
    const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bg.addColorStop(0, '#7f1d1d');
    bg.addColorStop(1, '#450a0a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header band
    ctx.fillStyle = '#fef2f2';
    ctx.fillRect(0, 140, canvas.width, 220);
    ctx.fillStyle = '#7f1d1d';
    ctx.font = 'bold 96px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('IN CASE OF EMERGENCY', canvas.width / 2, 280);

    // Person name
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 88px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    const name = data.fullName || 'Your name';
    ctx.fillText(name, canvas.width / 2, 480);

    if (data.bloodType || data.dateOfBirth) {
      ctx.font = '52px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#fecaca';
      const subParts = [
        data.bloodType && `Blood: ${data.bloodType}`,
        data.dateOfBirth && `DOB: ${data.dateOfBirth}`,
      ].filter(Boolean);
      ctx.fillText(subParts.join('   ·   '), canvas.width / 2, 560);
    }

    // Contacts block
    let y = 720;
    ctx.fillStyle = '#fecaca';
    ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('CALL FIRST', 90, y);
    y += 20;
    ctx.strokeStyle = '#fecaca';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(90, y);
    ctx.lineTo(canvas.width - 90, y);
    ctx.stroke();
    y += 70;

    ctx.fillStyle = '#ffffff';
    if (contacts.length === 0) {
      ctx.font = '52px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('Add contacts in the form to fill this in.', 90, y);
      y += 80;
    } else {
      contacts.forEach((c) => {
        ctx.font = 'bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${c.name || 'Contact'}${c.relationship ? ` — ${c.relationship}` : ''}`, 90, y);
        y += 80;
        ctx.font = '76px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillStyle = '#fef2f2';
        ctx.fillText(c.phone || 'No phone', 90, y);
        y += 110;
      });
    }

    // Critical meds block
    y += 30;
    ctx.fillStyle = '#fecaca';
    ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('CRITICAL MEDICATIONS', 90, y);
    y += 20;
    ctx.beginPath();
    ctx.moveTo(90, y);
    ctx.lineTo(canvas.width - 90, y);
    ctx.stroke();
    y += 70;

    ctx.fillStyle = '#ffffff';
    if (meds.length === 0) {
      ctx.font = '46px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('Add meds in the form to fill this in.', 90, y);
      y += 70;
    } else {
      meds.slice(0, 5).forEach((m) => {
        ctx.font = 'bold 50px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`• ${m.name}${m.dose ? ` — ${m.dose}` : ''}`, 90, y);
        y += 64;
        if (m.frequency) {
          ctx.font = '40px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.fillStyle = '#fecaca';
          ctx.fillText(`  ${m.frequency}`, 90, y);
          y += 60;
        }
      });
    }

    // Allergies / conditions block
    if (allergiesCombined || data.medicalConditions) {
      y += 30;
      ctx.fillStyle = '#fecaca';
      ctx.font = 'bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('ALLERGIES & CONDITIONS', 90, y);
      y += 20;
      ctx.beginPath();
      ctx.moveTo(90, y);
      ctx.lineTo(canvas.width - 90, y);
      ctx.stroke();
      y += 70;

      ctx.fillStyle = '#ffffff';
      ctx.font = '40px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      const fullText = [allergiesCombined, data.medicalConditions]
        .filter(Boolean)
        .join('  ·  ');
      // Word-wrap
      const words = fullText.split(' ');
      let line = '';
      const maxWidth = canvas.width - 180;
      for (const word of words) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth) {
          ctx.fillText(line, 90, y);
          y += 56;
          line = word;
        } else {
          line = test;
        }
        if (y > canvas.height - 200) break;
      }
      if (line && y < canvas.height - 120) ctx.fillText(line, 90, y);
    }

    // Footer
    ctx.fillStyle = '#fecaca';
    ctx.font = '36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Made with TekSure · teksure.com', canvas.width / 2, canvas.height - 60);

    // Trigger download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `emergency-lockscreen-${(data.fullName || 'me').replace(/\s+/g, '-').toLowerCase()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png');
  }, [contacts, meds, data.fullName, data.bloodType, data.dateOfBirth, data.medicalConditions, allergiesCombined]);

  return (
    <>
      <SEOHead
        title="Emergency Info Card — Free Printable Wallet & Lockscreen Card | TekSure"
        description="A free, printable emergency info card with your medical info, contacts, and meds. Wallet, fridge, and phone lockscreen formats. All data stays on your device — never sent anywhere."
        path="/tools/emergency-info-card"
      />

      {/* Print styles — hide everything except the active card */}
      <style>{`
        .eic-row {
          display: flex; align-items: baseline; gap: 6px;
          font-size: 11px; line-height: 1.3; margin-bottom: 2px;
        }
        .eic-row-label {
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
          color: #7f1d1d; min-width: 64px;
        }
        .eic-row-value { color: #0f172a; flex: 1; }

        /* ── Wallet card ── */
        .eic-wallet {
          width: 3.5in; height: 2in;
          border-radius: 12px; overflow: hidden;
          background: #ffffff; color: #0f172a;
          box-shadow: 0 6px 20px -8px rgba(0,0,0,0.25);
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          display: grid; grid-template-rows: auto 1fr;
        }
        .eic-wallet-header {
          background: linear-gradient(135deg, #b91c1c, #7f1d1d);
          color: #fff; padding: 6px 10px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .eic-wallet-header h3 {
          margin: 0; font-size: 11px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.08em;
        }
        .eic-wallet-body { padding: 8px 10px; }
        .eic-wallet-name {
          font-size: 13px; font-weight: 800; margin: 0 0 4px;
        }

        /* ── Fridge card (8.5 × 11) ── */
        .eic-fridge {
          width: min(8.5in, 100%);
          background: #ffffff; color: #0f172a;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.25);
          border-radius: 4px;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          padding: 0.55in 0.6in;
        }
        .eic-fridge h2 {
          font-size: 36pt; margin: 0 0 6pt;
          color: #7f1d1d; font-weight: 900; letter-spacing: -0.01em;
          line-height: 1;
        }
        .eic-fridge .eic-tag {
          font-size: 14pt; font-weight: 600; color: #b91c1c; margin: 0 0 14pt;
        }
        .eic-fridge .eic-rule {
          height: 4pt; background: #b91c1c; border-radius: 2pt; margin: 8pt 0 14pt;
        }
        .eic-fridge .eic-section {
          margin-top: 12pt; break-inside: avoid; page-break-inside: avoid;
        }
        .eic-fridge .eic-section-title {
          font-size: 14pt; font-weight: 800; color: #ffffff;
          background: #7f1d1d; padding: 4pt 8pt; border-radius: 4pt 4pt 0 0;
          text-transform: uppercase; letter-spacing: 0.06em;
          display: flex; align-items: center; gap: 6pt;
        }
        .eic-fridge .eic-section-body {
          border: 1.5pt solid #7f1d1d; border-top: none;
          padding: 8pt 10pt; font-size: 13pt; line-height: 1.5;
          border-radius: 0 0 4pt 4pt;
        }
        .eic-fridge ul { margin: 0; padding-left: 18pt; }
        .eic-fridge li { margin-bottom: 4pt; }

        /* ── Lockscreen preview (scaled) ── */
        .eic-lockscreen {
          width: 234px; height: 506px;
          border-radius: 30px; overflow: hidden;
          background: linear-gradient(180deg, #7f1d1d, #450a0a);
          color: #fff;
          box-shadow: 0 12px 40px -8px rgba(0,0,0,0.4);
          padding: 16px 14px;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          display: flex; flex-direction: column; gap: 8px;
          font-size: 10px;
        }
        .eic-lockscreen .ls-banner {
          background: #fef2f2; color: #7f1d1d;
          padding: 8px 4px; text-align: center;
          font-weight: 800; font-size: 11px; letter-spacing: 0.05em;
          border-radius: 4px;
        }
        .eic-lockscreen .ls-name {
          text-align: center; font-weight: 800; font-size: 16px; margin-top: 6px;
        }
        .eic-lockscreen .ls-sub {
          text-align: center; font-size: 9px; color: #fecaca;
        }
        .eic-lockscreen .ls-section-title {
          color: #fecaca; font-weight: 800; font-size: 9px;
          text-transform: uppercase; letter-spacing: 0.08em;
          border-bottom: 1px solid #fecaca; padding-bottom: 2px;
          margin-top: 8px;
        }
        .eic-lockscreen .ls-contact {
          margin-top: 4px;
        }
        .eic-lockscreen .ls-contact-name { font-weight: 700; font-size: 10px; }
        .eic-lockscreen .ls-contact-phone { font-size: 12px; font-weight: 700; }

        /* ── Print: only show the active card ── */
        @media print {
          html, body { background: #fff !important; }
          body * { visibility: hidden !important; }
          /* Show only what is targeted */
          body.eic-print-wallet .eic-print-wallet-area,
          body.eic-print-wallet .eic-print-wallet-area * { visibility: visible !important; }
          body.eic-print-fridge .eic-print-fridge-area,
          body.eic-print-fridge .eic-print-fridge-area * { visibility: visible !important; }

          .eic-print-wallet-area, .eic-print-fridge-area {
            position: absolute; left: 0; top: 0; width: 100%;
            display: flex; justify-content: center; padding: 12px;
          }
          .eic-wallet, .eic-fridge { box-shadow: none !important; border-radius: 0 !important; }
        }
        @page { size: letter; margin: 0.5in; }
      `}</style>


      <main className="min-h-screen bg-background">
        <div className="container max-w-6xl pt-4 px-4 print:hidden">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Emergency Info Card' },
            ]}
          />
        </div>

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-700 via-red-700 to-red-900" aria-hidden />
          <div className="relative container max-w-6xl mx-auto px-4 py-12 md:py-16 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-base px-3 py-1">
                <Sparkles className="h-4 w-4 mr-1" />
                New Tool
              </Badge>
              <BookmarkButton
                type="tool"
                slug="emergency-info-card"
                title="Emergency Info Card"
                url="/tools/emergency-info-card"
                className="bg-white/15 border-white/30 text-white hover:bg-white/25"
              />
            </div>
            <div className="flex items-start gap-4 md:gap-5">
              <Siren className="h-12 w-12 md:h-16 md:w-16 shrink-0 text-rose-200" aria-hidden />
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Emergency Info Card — Printable in 5 Minutes
                </h1>
                <p className="mt-3 text-lg md:text-xl text-rose-100 max-w-3xl leading-relaxed">
                  A card with your medical info, contacts, and meds — ready if someone finds you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy callout ──────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 -mt-6 print:hidden relative z-10">
          <Alert className="border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900">
            <Lock className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
            <AlertTitle className="text-base md:text-lg font-bold text-emerald-900 dark:text-emerald-200">
              Your data stays on your device — never sent anywhere
            </AlertTitle>
            <AlertDescription className="text-base text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
              Everything you type is saved only in your browser. We do not have a server that
              receives this information. Close the tab and your data is still here when you come
              back. Use the <strong>Clear</strong> button anytime to wipe it.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Templates row ────────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mt-8 print:hidden">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-rose-600" aria-hidden />
            <h2 className="text-lg md:text-xl font-bold">Start from a template</h2>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            Pick a sample to see what a complete card looks like — then change the details to match your own.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {TEMPLATES.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => applyTemplate(t.id)}
                  className="text-left rounded-xl border-2 border-rose-200 bg-rose-50/60 dark:bg-rose-950/20 dark:border-rose-900 p-4 min-h-14 hover:border-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                >
                  <Icon className="h-6 w-6 text-rose-600 mb-2" aria-hidden />
                  <div className="font-semibold text-base">{t.label}</div>
                  <div className="text-sm text-muted-foreground mt-1 leading-snug">{t.description}</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Form + Output, two columns on desktop ───────────── */}
        <section className="container max-w-6xl mx-auto px-4 mt-10 mb-16 print:hidden">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* ── Form column ── */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Fill in what you want on the card</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Save className="h-4 w-4" aria-hidden />
                  <span aria-live="polite">{savedLabel || 'Autosave on'}</span>
                </div>
              </div>
              <p className="text-base text-muted-foreground -mt-2">
                Every section is optional. Skip what does not apply.
              </p>

              {/* Personal */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">Personal</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="full-name" className="text-base">Full name</Label>
                      <Input
                        id="full-name"
                        value={data.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        placeholder="First Last"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="dob" className="text-base">Date of birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={data.dateOfBirth}
                        onChange={(e) => update('dateOfBirth', e.target.value)}
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="blood-type" className="text-base">Blood type</Label>
                      <Select value={data.bloodType || 'unknown'} onValueChange={(v) => update('bloodType', v === 'unknown' ? '' : v)}>
                        <SelectTrigger id="blood-type" className="text-base min-h-14">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unknown">Don't know / prefer not to say</SelectItem>
                          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bt) => (
                            <SelectItem key={bt} value={bt}>{bt}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lang" className="text-base">Primary language</Label>
                      <Input
                        id="lang"
                        value={data.primaryLanguage}
                        onChange={(e) => update('primaryLanguage', e.target.value)}
                        placeholder="English"
                        className="text-base min-h-14"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency contacts */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">Emergency contacts</h3>
                  </div>
                  <p className="text-sm text-muted-foreground -mt-1">
                    Up to three people first responders should call.
                  </p>
                  {data.contacts.map((c, i) => (
                    <div key={i} className="grid sm:grid-cols-3 gap-3 pt-2 border-t first:border-t-0 first:pt-0">
                      <div className="space-y-1.5">
                        <Label htmlFor={`contact-name-${i}`} className="text-base">
                          {i === 0 ? 'First contact name' : i === 1 ? 'Second contact name' : 'Third contact name'}
                        </Label>
                        <Input
                          id={`contact-name-${i}`}
                          value={c.name}
                          onChange={(e) => updateContact(i, 'name', e.target.value)}
                          placeholder="Name"
                          className="text-base min-h-14"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor={`contact-rel-${i}`} className="text-base">Relationship</Label>
                        <Input
                          id={`contact-rel-${i}`}
                          value={c.relationship}
                          onChange={(e) => updateContact(i, 'relationship', e.target.value)}
                          placeholder="Spouse, son, neighbor"
                          className="text-base min-h-14"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor={`contact-phone-${i}`} className="text-base">Phone</Label>
                        <Input
                          id={`contact-phone-${i}`}
                          type="tel"
                          value={c.phone}
                          onChange={(e) => updateContact(i, 'phone', e.target.value)}
                          placeholder="(555) 555-5555"
                          className="text-base min-h-14"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Medical conditions */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">Medical conditions</h3>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="conditions" className="text-base">
                      Conditions a paramedic should know about
                    </Label>
                    <Textarea
                      id="conditions"
                      value={data.medicalConditions}
                      onChange={(e) => update('medicalConditions', e.target.value)}
                      placeholder="Diabetes, pacemaker, epilepsy, kidney disease, etc."
                      rows={4}
                      className="text-base"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Medications */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Pill className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">Medications</h3>
                  </div>
                  <p className="text-sm text-muted-foreground -mt-1">
                    Up to ten current prescriptions.
                  </p>
                  <div className="space-y-3">
                    {data.medications.map((m, i) => (
                      <div key={i} className="grid sm:grid-cols-3 gap-3 pt-2 border-t first:border-t-0 first:pt-0">
                        <div className="space-y-1.5">
                          <Label htmlFor={`med-name-${i}`} className="text-base">Med #{i + 1} name</Label>
                          <Input
                            id={`med-name-${i}`}
                            value={m.name}
                            onChange={(e) => updateMed(i, 'name', e.target.value)}
                            placeholder="Lisinopril"
                            className="text-base min-h-14"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor={`med-dose-${i}`} className="text-base">Dose</Label>
                          <Input
                            id={`med-dose-${i}`}
                            value={m.dose}
                            onChange={(e) => updateMed(i, 'dose', e.target.value)}
                            placeholder="10 mg"
                            className="text-base min-h-14"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor={`med-freq-${i}`} className="text-base">Frequency</Label>
                          <Input
                            id={`med-freq-${i}`}
                            value={m.frequency}
                            onChange={(e) => updateMed(i, 'frequency', e.target.value)}
                            placeholder="Once daily, morning"
                            className="text-base min-h-14"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Allergies */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">Allergies</h3>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="allergy-drug" className="text-base">Drug allergies</Label>
                      <Input
                        id="allergy-drug"
                        value={data.allergiesDrug}
                        onChange={(e) => update('allergiesDrug', e.target.value)}
                        placeholder="Penicillin, sulfa"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="allergy-food" className="text-base">Food allergies</Label>
                      <Input
                        id="allergy-food"
                        value={data.allergiesFood}
                        onChange={(e) => update('allergiesFood', e.target.value)}
                        placeholder="Peanuts, shellfish"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="allergy-other" className="text-base">Other allergies</Label>
                      <Input
                        id="allergy-other"
                        value={data.allergiesOther}
                        onChange={(e) => update('allergiesOther', e.target.value)}
                        placeholder="Latex, bee stings"
                        className="text-base min-h-14"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Doctor & Pharmacy */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">Doctor & pharmacy</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="doctor-name" className="text-base">Primary doctor</Label>
                      <Input
                        id="doctor-name"
                        value={data.doctorName}
                        onChange={(e) => update('doctorName', e.target.value)}
                        placeholder="Dr. Smith"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="doctor-phone" className="text-base">Doctor's phone</Label>
                      <Input
                        id="doctor-phone"
                        type="tel"
                        value={data.doctorPhone}
                        onChange={(e) => update('doctorPhone', e.target.value)}
                        placeholder="(555) 555-5555"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="pharmacy-name" className="text-base">Pharmacy</Label>
                      <Input
                        id="pharmacy-name"
                        value={data.pharmacyName}
                        onChange={(e) => update('pharmacyName', e.target.value)}
                        placeholder="CVS on Main St"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="pharmacy-phone" className="text-base">Pharmacy phone</Label>
                      <Input
                        id="pharmacy-phone"
                        type="tel"
                        value={data.pharmacyPhone}
                        onChange={(e) => update('pharmacyPhone', e.target.value)}
                        placeholder="(555) 555-5555"
                        className="text-base min-h-14"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-rose-600" aria-hidden />
                      <h3 className="text-lg font-bold">Insurance</h3>
                    </div>
                    <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer select-none">
                      <Checkbox
                        id="show-insurance"
                        checked={data.showInsurance}
                        onCheckedChange={(v) => update('showInsurance', Boolean(v))}
                      />
                      <span className="flex items-center gap-1">
                        {data.showInsurance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        Show on card
                      </span>
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground -mt-1">
                    Hidden by default. Only printed if you check the box above.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="ins-carrier" className="text-base">Carrier</Label>
                      <Input
                        id="ins-carrier"
                        value={data.insuranceCarrier}
                        onChange={(e) => update('insuranceCarrier', e.target.value)}
                        placeholder="Blue Cross Blue Shield"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ins-id" className="text-base">Member ID</Label>
                      <Input
                        id="ins-id"
                        value={data.insuranceId}
                        onChange={(e) => update('insuranceId', e.target.value)}
                        placeholder="ABC123456789"
                        className="text-base min-h-14"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* DNR / Advance directive */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">DNR / Advance directive</h3>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <Checkbox
                      id="has-dnr"
                      checked={data.hasDnr}
                      onCheckedChange={(v) => update('hasDnr', Boolean(v))}
                      className="mt-1"
                    />
                    <span className="text-base">
                      I have a DNR (Do Not Resuscitate) order or advance directive on file.
                    </span>
                  </label>
                  {data.hasDnr && (
                    <div className="space-y-1.5">
                      <Label htmlFor="dnr-loc" className="text-base">Where it is stored</Label>
                      <Input
                        id="dnr-loc"
                        value={data.dnrLocation}
                        onChange={(e) => update('dnrLocation', e.target.value)}
                        placeholder="On file at Memorial Hospital + copy in home safe"
                        className="text-base min-h-14"
                      />
                    </div>
                  )}
                  <label className="flex items-start gap-3 cursor-pointer select-none pt-2">
                    <Checkbox
                      id="organ-donor"
                      checked={data.organDonor}
                      onCheckedChange={(v) => update('organDonor', Boolean(v))}
                      className="mt-1"
                    />
                    <span className="text-base">I am a registered organ donor.</span>
                  </label>
                </CardContent>
              </Card>

              {/* Pets */}
              <Card>
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <PawPrint className="h-5 w-5 text-rose-600" aria-hidden />
                    <h3 className="text-lg font-bold">Pets at home</h3>
                  </div>
                  <p className="text-sm text-muted-foreground -mt-1">
                    So first responders know to look for them and arrange care.
                  </p>
                  <div className="space-y-1.5">
                    <Label htmlFor="pets-desc" className="text-base">Pets in the home</Label>
                    <Textarea
                      id="pets-desc"
                      value={data.petsDescription}
                      onChange={(e) => update('petsDescription', e.target.value)}
                      placeholder="One indoor cat (orange tabby, named Biscuit) and a small dog (terrier mix, named Max)."
                      rows={3}
                      className="text-base"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="vet-name" className="text-base">Vet name</Label>
                      <Input
                        id="vet-name"
                        value={data.vetName}
                        onChange={(e) => update('vetName', e.target.value)}
                        placeholder="Riverside Animal Hospital"
                        className="text-base min-h-14"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="vet-phone" className="text-base">Vet phone</Label>
                      <Input
                        id="vet-phone"
                        type="tel"
                        value={data.vetPhone}
                        onChange={(e) => update('vetPhone', e.target.value)}
                        placeholder="(555) 555-5555"
                        className="text-base min-h-14"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Form actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={handleClear}
                  className="gap-2 min-h-14 text-base hover:text-rose-600 hover:border-rose-300"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear everything
                </Button>
                <p className="text-sm text-muted-foreground self-center">
                  All clearing happens locally. Nothing is uploaded.
                </p>
              </div>
            </div>

            {/* ── Output column ── */}
            <div className="lg:col-span-2 space-y-4">
              <div className="lg:sticky lg:top-6 space-y-4">
                <h2 className="text-2xl font-bold">Your card — print preview</h2>
                <Tabs value={activeCard} onValueChange={(v) => setActiveCard(v as typeof activeCard)} className="w-full">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="wallet" className="text-sm md:text-base min-h-12">
                      <CreditCard className="h-4 w-4 mr-1" /> Wallet
                    </TabsTrigger>
                    <TabsTrigger value="fridge" className="text-sm md:text-base min-h-12">
                      <FileText className="h-4 w-4 mr-1" /> Fridge
                    </TabsTrigger>
                    <TabsTrigger value="lockscreen" className="text-sm md:text-base min-h-12">
                      <Smartphone className="h-4 w-4 mr-1" /> Phone
                    </TabsTrigger>
                  </TabsList>

                  {/* Wallet preview */}
                  <TabsContent value="wallet" className="mt-4">
                    <div className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 p-4 flex items-center justify-center">
                      <WalletCard data={data} contacts={contacts} meds={meds} allergies={allergiesCombined} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Standard business-card size: 3.5" × 2"
                    </p>
                    <Button
                      onClick={() => setPrintTarget('wallet')}
                      className="w-full mt-3 gap-2 bg-red-700 hover:bg-red-800 min-h-14 text-base"
                    >
                      <Printer className="h-5 w-5" />
                      Print wallet card
                    </Button>
                  </TabsContent>

                  {/* Fridge preview */}
                  <TabsContent value="fridge" className="mt-4">
                    <div className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 p-4 flex items-center justify-center overflow-hidden">
                      <div className="origin-top scale-[0.32] md:scale-[0.4]">
                        <FridgeCard data={data} contacts={contacts} meds={meds} />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Letter size: 8.5" × 11" — large print for visibility
                    </p>
                    <Button
                      onClick={() => setPrintTarget('fridge')}
                      className="w-full mt-3 gap-2 bg-red-700 hover:bg-red-800 min-h-14 text-base"
                    >
                      <Printer className="h-5 w-5" />
                      Print fridge card
                    </Button>
                  </TabsContent>

                  {/* Lockscreen preview */}
                  <TabsContent value="lockscreen" className="mt-4">
                    <div className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 p-4 flex items-center justify-center">
                      <LockscreenPreview data={data} contacts={contacts} meds={meds} allergies={allergiesCombined} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Phone wallpaper: 1170 × 2532 (iPhone preset)
                    </p>
                    <Button
                      onClick={downloadLockscreenPng}
                      className="w-full mt-3 gap-2 bg-red-700 hover:bg-red-800 min-h-14 text-base"
                    >
                      <Download className="h-5 w-5" />
                      Download as PNG
                    </Button>
                    <canvas ref={lockscreenCanvasRef} className="hidden" />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* ── Important alert ────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mb-10 print:hidden">
          <Alert className="border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
            <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
            <AlertTitle className="text-base md:text-lg font-bold text-amber-900 dark:text-amber-200">
              Always update this after medical changes
            </AlertTitle>
            <AlertDescription className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
              Tell family where you keep it. A card with old meds or wrong contacts can do more
              harm than no card at all. Set a reminder to review it every six months and after any
              new prescription.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Related tools ──────────────────────────────────── */}
        <section className="container max-w-6xl mx-auto px-4 mb-12 print:hidden">
          <h2 className="text-2xl font-bold mb-5">Keep your safety plan complete</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/tools/digital-will-template"
              className="border rounded-xl p-5 hover:shadow-md hover:border-rose-300 transition group flex items-start gap-3"
            >
              <FileText className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-semibold text-lg">Digital Will Template</h3>
                <p className="text-sm text-muted-foreground">
                  The accounts your family will need — in one printable document.
                </p>
              </div>
            </Link>
            <Link
              to="/tools/medication-reminder-setup"
              className="border rounded-xl p-5 hover:shadow-md hover:border-rose-300 transition group flex items-start gap-3"
            >
              <Pill className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-semibold text-lg">Medication Reminder Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Set phone reminders for every prescription so you never miss a dose.
                </p>
              </div>
            </Link>
            <Link
              to="/guides?category=safety"
              className="border rounded-xl p-5 hover:shadow-md hover:border-rose-300 transition group flex items-start gap-3"
            >
              <BookOpen className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-semibold text-lg">All Safety Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Plain-English guides on staying safe at home, online, and on the road.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="container max-w-4xl mx-auto px-4 mb-20 print:hidden">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="where">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                Where should I keep this card?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                Five places: in your <strong>wallet</strong> behind your ID, on your <strong>phone
                lockscreen</strong>, on your <strong>fridge</strong>, in your car's <strong>glovebox</strong>,
                and in your purse or daily bag. Paramedics and bystanders are trained to check
                wallets and phones first, so those two matter most. The fridge copy helps in-home
                emergencies. Make sure family members know where you keep yours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hipaa">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                What about HIPAA — am I allowed to share this?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                HIPAA does not apply here. HIPAA restricts what doctors, hospitals, and insurers can
                share about you — it does not restrict what <strong>you</strong> share about
                yourself. You own your medical info and can put it on a card, on a bracelet, or
                anywhere you want.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="paramedics">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                Can paramedics actually use this?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                Yes. In Case of Emergency (ICE) cards are a long-standing standard. EMTs and
                paramedics are trained to look for them in wallets, on phone lockscreens, and on
                medical jewelry. A current card with allergies, conditions, and meds can change the
                medications they give you in the field.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="qr">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                What about a QR code?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                A QR code can link to a longer text version of your info, which is helpful if you
                run out of room. But keep the card text-first. Not every responder has time or a
                free hand to scan a code, and some older phones are slow to read them. Plain
                printed text is the most reliable format. If you want to add a QR code later, link
                it to a private text file you control — never to a third-party medical record service
                without reading their privacy policy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="storage">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                Where is my data actually stored?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                Only in your browser's local storage on this device. There is no TekSure server
                receiving your medical info. If you switch devices or clear your browser data, you
                will need to re-enter it. We do this on purpose — your medical record should not
                live on someone else's server.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
            <span>Free forever. No account. No tracking on this tool.</span>
          </div>
        </section>

        {/* ── Print containers (hidden on screen, shown when printing) ─────────────── */}
        <div className="hidden print:block">
          <div className="eic-print-wallet-area">
            <WalletCard data={data} contacts={contacts} meds={meds} allergies={allergiesCombined} />
          </div>
          <div className="eic-print-fridge-area">
            <FridgeCard data={data} contacts={contacts} meds={meds} />
          </div>
        </div>
      </main>

      <div className="print:hidden">
      </div>
    </>
  );
}

/* ────────────────────── Card components ────────────────────── */

interface CardProps {
  data: CardData;
  contacts: EmergencyContact[];
  meds: Medication[];
  allergies: string;
}

/** Wallet card — 3.5 × 2 inches, dense layout */
function WalletCard({ data, contacts, meds, allergies }: CardProps) {
  return (
    <div className="eic-wallet" aria-label="Wallet card preview">
      <div className="eic-wallet-header">
        <h3>In Case of Emergency</h3>
        <Siren className="h-3 w-3" />
      </div>
      <div className="eic-wallet-body" style={{ fontSize: 10 }}>
        <p className="eic-wallet-name">{data.fullName || 'Your name'}</p>
        <CardRow label="DOB" value={data.dateOfBirth} />
        <CardRow label="Blood" value={data.bloodType} />
        <CardRow label="Lang" value={data.primaryLanguage} />
        {contacts.length > 0 && (
          <div style={{ marginTop: 4, paddingTop: 4, borderTop: '1px solid #fecaca' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#7f1d1d', textTransform: 'uppercase' }}>Call</div>
            {contacts.slice(0, 2).map((c, i) => (
              <div key={i} style={{ fontSize: 10 }}>
                <strong>{c.name}</strong>{c.relationship ? ` (${c.relationship})` : ''}: {c.phone}
              </div>
            ))}
          </div>
        )}
        {(allergies || meds.length > 0 || data.medicalConditions) && (
          <div style={{ marginTop: 4, paddingTop: 4, borderTop: '1px solid #fecaca' }}>
            {allergies && <CardRow label="Allergy" value={allergies} />}
            {data.medicalConditions && (
              <div style={{ fontSize: 10, marginTop: 2 }}>
                <strong style={{ color: '#7f1d1d' }}>Conditions:</strong> {data.medicalConditions}
              </div>
            )}
            {meds.length > 0 && (
              <div style={{ fontSize: 10, marginTop: 2 }}>
                <strong style={{ color: '#7f1d1d' }}>Meds:</strong>{' '}
                {meds.slice(0, 4).map((m) => `${m.name}${m.dose ? ` ${m.dose}` : ''}`).join(', ')}
                {meds.length > 4 ? ` +${meds.length - 4} more (see fridge card)` : ''}
              </div>
            )}
          </div>
        )}
        {data.showInsurance && data.insuranceCarrier && (
          <div style={{ fontSize: 10, marginTop: 4 }}>
            <strong style={{ color: '#7f1d1d' }}>Ins:</strong> {data.insuranceCarrier}
            {data.insuranceId ? ` #${data.insuranceId}` : ''}
          </div>
        )}
        {data.hasDnr && (
          <div style={{ fontSize: 10, marginTop: 2, fontWeight: 700, color: '#7f1d1d' }}>
            DNR ON FILE{data.dnrLocation ? ` — ${data.dnrLocation}` : ''}
          </div>
        )}
      </div>
    </div>
  );
}

/** Fridge card — full letter-size, large print */
function FridgeCard({ data, contacts, meds }: Omit<CardProps, 'allergies'>) {
  return (
    <article className="eic-fridge" aria-label="Fridge card preview">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Siren style={{ width: 48, height: 48, color: '#7f1d1d' }} />
        <div>
          <h2>EMERGENCY INFO</h2>
          <p className="eic-tag">First responders — please read</p>
        </div>
      </div>
      <div className="eic-rule" />

      <div className="eic-section">
        <div className="eic-section-title"><User style={{ width: 16, height: 16 }} /> Patient</div>
        <div className="eic-section-body">
          <div style={{ fontSize: '20pt', fontWeight: 800, marginBottom: '4pt' }}>
            {data.fullName || 'Your name'}
          </div>
          <div>
            {data.dateOfBirth && <span><strong>Date of birth:</strong> {data.dateOfBirth}</span>}
            {data.bloodType && <span style={{ marginLeft: 16 }}><strong>Blood type:</strong> {data.bloodType}</span>}
            {data.primaryLanguage && <span style={{ marginLeft: 16 }}><strong>Language:</strong> {data.primaryLanguage}</span>}
          </div>
        </div>
      </div>

      {contacts.length > 0 && (
        <div className="eic-section">
          <div className="eic-section-title"><Phone style={{ width: 16, height: 16 }} /> Call These People First</div>
          <div className="eic-section-body">
            <ul>
              {contacts.map((c, i) => (
                <li key={i}>
                  <strong>{c.name || 'Contact'}</strong>
                  {c.relationship ? ` — ${c.relationship}` : ''}
                  {c.phone ? ` — ${c.phone}` : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {data.medicalConditions && (
        <div className="eic-section">
          <div className="eic-section-title"><HeartPulse style={{ width: 16, height: 16 }} /> Medical Conditions</div>
          <div className="eic-section-body">{data.medicalConditions}</div>
        </div>
      )}

      {meds.length > 0 && (
        <div className="eic-section">
          <div className="eic-section-title"><Pill style={{ width: 16, height: 16 }} /> Current Medications</div>
          <div className="eic-section-body">
            <ul>
              {meds.map((m, i) => (
                <li key={i}>
                  <strong>{m.name}</strong>
                  {m.dose ? ` — ${m.dose}` : ''}
                  {m.frequency ? ` — ${m.frequency}` : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {(data.allergiesDrug || data.allergiesFood || data.allergiesOther) && (
        <div className="eic-section">
          <div className="eic-section-title"><AlertTriangle style={{ width: 16, height: 16 }} /> Allergies</div>
          <div className="eic-section-body">
            {data.allergiesDrug && <div><strong>Drugs:</strong> {data.allergiesDrug}</div>}
            {data.allergiesFood && <div><strong>Food:</strong> {data.allergiesFood}</div>}
            {data.allergiesOther && <div><strong>Other:</strong> {data.allergiesOther}</div>}
          </div>
        </div>
      )}

      {(data.doctorName || data.pharmacyName) && (
        <div className="eic-section">
          <div className="eic-section-title"><Stethoscope style={{ width: 16, height: 16 }} /> Doctor & Pharmacy</div>
          <div className="eic-section-body">
            {data.doctorName && (
              <div><strong>Doctor:</strong> {data.doctorName}{data.doctorPhone ? ` — ${data.doctorPhone}` : ''}</div>
            )}
            {data.pharmacyName && (
              <div><strong>Pharmacy:</strong> {data.pharmacyName}{data.pharmacyPhone ? ` — ${data.pharmacyPhone}` : ''}</div>
            )}
          </div>
        </div>
      )}

      {data.showInsurance && (data.insuranceCarrier || data.insuranceId) && (
        <div className="eic-section">
          <div className="eic-section-title"><CreditCard style={{ width: 16, height: 16 }} /> Insurance</div>
          <div className="eic-section-body">
            {data.insuranceCarrier && <div><strong>Carrier:</strong> {data.insuranceCarrier}</div>}
            {data.insuranceId && <div><strong>Member ID:</strong> {data.insuranceId}</div>}
          </div>
        </div>
      )}

      {(data.hasDnr || data.organDonor) && (
        <div className="eic-section">
          <div className="eic-section-title"><FileText style={{ width: 16, height: 16 }} /> Directives</div>
          <div className="eic-section-body">
            {data.hasDnr && (
              <div><strong>DNR ON FILE.</strong> {data.dnrLocation || 'Location not specified.'}</div>
            )}
            {data.organDonor && <div><strong>Registered organ donor.</strong></div>}
          </div>
        </div>
      )}

      {(data.petsDescription || data.vetName) && (
        <div className="eic-section">
          <div className="eic-section-title"><PawPrint style={{ width: 16, height: 16 }} /> Pets at Home</div>
          <div className="eic-section-body">
            {data.petsDescription && <div>{data.petsDescription}</div>}
            {data.vetName && (
              <div style={{ marginTop: 4 }}>
                <strong>Vet:</strong> {data.vetName}{data.vetPhone ? ` — ${data.vetPhone}` : ''}
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ marginTop: '18pt', paddingTop: '8pt', borderTop: '0.75pt solid #b91c1c', fontSize: '10pt', color: '#475569', textAlign: 'center' }}>
        Made with TekSure · teksure.com/tools/emergency-info-card · Free forever
      </div>
    </article>
  );
}

/** Lockscreen preview — visual only, the real PNG is drawn on canvas */
function LockscreenPreview({ data, contacts, meds, allergies }: CardProps) {
  return (
    <div className="eic-lockscreen" aria-label="Phone lockscreen preview">
      <div className="ls-banner">IN CASE OF EMERGENCY</div>
      <div className="ls-name">{data.fullName || 'Your name'}</div>
      {(data.bloodType || data.dateOfBirth) && (
        <div className="ls-sub">
          {[data.bloodType && `Blood ${data.bloodType}`, data.dateOfBirth && `DOB ${data.dateOfBirth}`].filter(Boolean).join(' · ')}
        </div>
      )}

      <div className="ls-section-title">Call first</div>
      {contacts.length > 0 ? (
        contacts.slice(0, 3).map((c, i) => (
          <div key={i} className="ls-contact">
            <div className="ls-contact-name">{c.name || 'Contact'}{c.relationship ? ` · ${c.relationship}` : ''}</div>
            <div className="ls-contact-phone">{c.phone || '—'}</div>
          </div>
        ))
      ) : (
        <div style={{ fontSize: 9, opacity: 0.85 }}>Add contacts above.</div>
      )}

      {meds.length > 0 && (
        <>
          <div className="ls-section-title">Critical meds</div>
          {meds.slice(0, 4).map((m, i) => (
            <div key={i} style={{ fontSize: 10 }}>
              • {m.name}{m.dose ? ` ${m.dose}` : ''}
            </div>
          ))}
        </>
      )}

      {(allergies || data.medicalConditions) && (
        <>
          <div className="ls-section-title">Allergies & conditions</div>
          <div style={{ fontSize: 9, lineHeight: 1.4 }}>
            {[allergies, data.medicalConditions].filter(Boolean).join(' · ')}
          </div>
        </>
      )}

      <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: 8, opacity: 0.8 }}>
        Tap power button to wake · Hold for SOS
      </div>
    </div>
  );
}

