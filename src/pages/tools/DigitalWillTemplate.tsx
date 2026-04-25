import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  AlertTriangle,
  FileText,
  Save,
  Trash2,
  Edit3,
  FileSignature,
  ArrowRight,
  BookOpen,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

/* ────────────────────────────── Types ─────────────────────────────────── */

interface EmailRow { provider: string; username: string; action: string; }
interface BankRow  { name: string; accountType: string; action: string; }
interface InvestRow{ brokerage: string; accountType: string; action: string; }
interface SubRow   { name: string; action: string; }
interface DeviceRow{ device: string; passcodeLocation: string; }

interface WillData {
  // Personal info
  fullName: string;
  dateOfBirth: string;
  dateFilledOut: string;
  documentLocation: string;
  // Executor / Digital Agent
  execName: string;
  execRelationship: string;
  execPhone: string;
  execEmail: string;
  // Backup executor
  backupName: string;
  backupRelationship: string;
  backupPhone: string;
  backupEmail: string;
  // Email accounts (5 rows)
  emails: EmailRow[];
  // Social media
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  socialOther: string;
  // Financial / Banking (4 rows)
  banks: BankRow[];
  // Investment accounts (3 rows)
  investments: InvestRow[];
  // Subscription services (10 rows)
  subscriptions: SubRow[];
  // Cloud storage
  googleCloud: string;
  icloud: string;
  dropboxOther: string;
  // Devices (4 rows)
  devices: DeviceRow[];
  // Password manager
  pmProvider: string;
  pmAccess: string;
  // Cryptocurrency
  cryptoAccounts: string;
  cryptoAck: string;
  // Photos & memories
  photoLocations: string;
  photoPriority: string;
  photoRecipients: string;
  // Special instructions
  specialInstructions: string;
  // Where this document is kept
  documentPhysicalLocation: string;
  documentDigitalBackup: string;
  // Signature
  signatureDate: string;
}

const emptyEmail: EmailRow       = { provider: '', username: '', action: '' };
const emptyBank: BankRow         = { name: '', accountType: '', action: '' };
const emptyInvest: InvestRow     = { brokerage: '', accountType: '', action: '' };
const emptySub: SubRow           = { name: '', action: '' };
const emptyDevice: DeviceRow     = { device: '', passcodeLocation: '' };

const EMPTY_WILL: WillData = {
  fullName: '', dateOfBirth: '', dateFilledOut: '', documentLocation: '',
  execName: '', execRelationship: '', execPhone: '', execEmail: '',
  backupName: '', backupRelationship: '', backupPhone: '', backupEmail: '',
  emails: Array.from({ length: 5 }, () => ({ ...emptyEmail })),
  facebook: '', instagram: '', linkedin: '', twitter: '', socialOther: '',
  banks: Array.from({ length: 4 }, () => ({ ...emptyBank })),
  investments: Array.from({ length: 3 }, () => ({ ...emptyInvest })),
  subscriptions: Array.from({ length: 10 }, () => ({ ...emptySub })),
  googleCloud: '', icloud: '', dropboxOther: '',
  devices: Array.from({ length: 4 }, () => ({ ...emptyDevice })),
  pmProvider: '', pmAccess: '',
  cryptoAccounts: '', cryptoAck: '',
  photoLocations: '', photoPriority: '', photoRecipients: '',
  specialInstructions: '',
  documentPhysicalLocation: '', documentDigitalBackup: '',
  signatureDate: '',
};

const STORAGE_KEY = 'teksure-digital-will-draft';

/* ─────────────────────── Autosave helpers ────────────────────────────── */

function loadDraft(): WillData {
  if (typeof window === 'undefined') return EMPTY_WILL;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_WILL;
    const parsed = JSON.parse(raw);
    // Shallow merge so new fields don't break old drafts
    return { ...EMPTY_WILL, ...parsed };
  } catch {
    return EMPTY_WILL;
  }
}

function formatSavedAgo(ts: number | null): string {
  if (!ts) return '';
  const seconds = Math.floor((Date.now() - ts) / 1000);
  if (seconds < 5) return 'Saved just now';
  if (seconds < 60) return `Saved ${seconds} seconds ago`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `Saved ${mins} minute${mins === 1 ? '' : 's'} ago`;
  const hours = Math.floor(mins / 60);
  return `Saved ${hours} hour${hours === 1 ? '' : 's'} ago`;
}

/* ─────────────────────── Reusable line components ────────────────────── */

/**
 * A labelled writing line. In 'form' mode it shows an editable input;
 * in 'blank' mode it shows an empty underline for handwriting. Both
 * render cleanly on 8.5×11 print.
 */
function WriteLine({
  label, helper, value, onChange, mode, wide = false, type = 'text',
}: {
  label: string;
  helper?: string;
  value: string;
  onChange: (v: string) => void;
  mode: 'form' | 'blank';
  wide?: boolean;
  type?: 'text' | 'date' | 'tel' | 'email';
}) {
  return (
    <div className={`dw-field ${wide ? 'dw-field-wide' : ''}`}>
      <div className="dw-label">{label}</div>
      {helper && <div className="dw-helper">{helper}</div>}
      {mode === 'form' ? (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="dw-input"
          aria-label={label}
        />
      ) : (
        <div className="dw-line" aria-hidden />
      )}
    </div>
  );
}

/** A multi-line writing area. Shows 3 blank lines when blank, or a textarea in form mode. */
function WriteBlock({
  label, helper, value, onChange, mode, lines = 3,
}: {
  label: string;
  helper?: string;
  value: string;
  onChange: (v: string) => void;
  mode: 'form' | 'blank';
  lines?: number;
}) {
  return (
    <div className="dw-field dw-field-wide">
      <div className="dw-label">{label}</div>
      {helper && <div className="dw-helper">{helper}</div>}
      {mode === 'form' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={lines}
          className="dw-textarea"
          aria-label={label}
        />
      ) : (
        <div className="dw-multiline" aria-hidden>
          {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className="dw-line" />
          ))}
        </div>
      )}
    </div>
  );
}

function SectionHeader({ number, title, subtitle, icon }: {
  number: number; title: string; subtitle?: string; icon?: ReactNode;
}) {
  return (
    <div className="dw-section-head">
      <div className="dw-section-badge">{number}</div>
      <div>
        <h2 className="dw-section-title">
          {icon && <span className="dw-section-icon" aria-hidden>{icon}</span>}
          {title}
        </h2>
        {subtitle && <p className="dw-section-sub">{subtitle}</p>}
      </div>
    </div>
  );
}

/* ───────────────────────────── The Page ──────────────────────────────── */

export default function DigitalWillTemplate() {
  const [data, setData] = useState<WillData>(EMPTY_WILL);
  const [mode, setMode] = useState<'form' | 'blank'>('form');
  const [lastSaved, setLastSaved] = useState<number | null>(null);
  const [savedLabel, setSavedLabel] = useState<string>('');
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const loaded = loadDraft();
    setData(loaded);
    // If anything was actually saved previously, mark it as loaded
    const hasAny = JSON.stringify(loaded) !== JSON.stringify(EMPTY_WILL);
    if (hasAny) setLastSaved(Date.now());
    setHydrated(true);
  }, []);

  // Autosave whenever data changes (only after hydration, so we don't immediately
  // overwrite a real draft with the empty default on first paint)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setLastSaved(Date.now());
    } catch {
      // Storage quota or private browsing — ignore
    }
  }, [data, hydrated]);

  // Update "Saved X minutes ago" label every 15 seconds
  useEffect(() => {
    setSavedLabel(formatSavedAgo(lastSaved));
    const t = window.setInterval(() => setSavedLabel(formatSavedAgo(lastSaved)), 15_000);
    return () => window.clearInterval(t);
  }, [lastSaved]);

  const update = useCallback(<K extends keyof WillData>(key: K, value: WillData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateEmail = (i: number, field: keyof EmailRow, value: string) => {
    setData((p) => {
      const next = [...p.emails];
      next[i] = { ...next[i], [field]: value };
      return { ...p, emails: next };
    });
  };
  const updateBank = (i: number, field: keyof BankRow, value: string) => {
    setData((p) => {
      const next = [...p.banks];
      next[i] = { ...next[i], [field]: value };
      return { ...p, banks: next };
    });
  };
  const updateInvest = (i: number, field: keyof InvestRow, value: string) => {
    setData((p) => {
      const next = [...p.investments];
      next[i] = { ...next[i], [field]: value };
      return { ...p, investments: next };
    });
  };
  const updateSub = (i: number, field: keyof SubRow, value: string) => {
    setData((p) => {
      const next = [...p.subscriptions];
      next[i] = { ...next[i], [field]: value };
      return { ...p, subscriptions: next };
    });
  };
  const updateDevice = (i: number, field: keyof DeviceRow, value: string) => {
    setData((p) => {
      const next = [...p.devices];
      next[i] = { ...next[i], [field]: value };
      return { ...p, devices: next };
    });
  };

  const handlePrint = () => window.print();

  const handleClear = () => {
    const confirmed = window.confirm(
      'Clear everything you have filled in so far? This cannot be undone.'
    );
    if (!confirmed) return;
    setData(EMPTY_WILL);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setLastSaved(null);
  };

  return (
    <>
      <SEOHead
        title="Your Digital Will — Free Printable Template | TekSure"
        description="A free, printable digital asset inheritance template. The accounts your family will need — in one document. Fill online or print blank. Senior-friendly, big-text, and free forever."
        path="/tools/digital-will-template"
      />

      {/* Scoped print styles — the whole document is one 8.5×11 page-ish layout */}
      <style>{`
        .dw-outer { display: flex; justify-content: center; padding: 24px 12px 48px; }
        .dw-page {
          width: min(8.5in, 100%);
          background: #ffffff;
          color: #0f172a;
          box-sizing: border-box;
          padding: 0.6in 0.7in 0.5in;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.25);
          border-radius: 4px;
        }
        .dw-page h1 {
          font-size: 28pt; line-height: 1.1;
          margin: 0 0 6pt; font-weight: 800; letter-spacing: -0.01em;
          color: #0f172a;
        }
        .dw-page .dw-tag {
          font-size: 13pt; margin: 0 0 10pt; font-weight: 500; color: #334155;
        }
        .dw-page .dw-head-brand {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10pt; margin-bottom: 6pt;
          font-size: 9.5pt; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 700; color: #4338ca;
        }
        .dw-page .dw-head-brand .dw-date {
          color: #64748b; letter-spacing: 0.04em; text-transform: none; font-weight: 500;
        }
        .dw-page .dw-rule {
          height: 2pt; background: #4338ca; border-radius: 2pt;
          margin: 4pt 0 14pt; opacity: 0.85;
        }
        .dw-warn {
          border: 1.5pt solid #b91c1c;
          background: #fef2f2;
          padding: 10pt 12pt;
          border-radius: 5pt;
          margin: 8pt 0 18pt;
          display: flex; gap: 10pt; align-items: flex-start;
        }
        .dw-warn strong { color: #7f1d1d; }
        .dw-warn p { margin: 0; font-size: 11pt; line-height: 1.45; color: #450a0a; }

        .dw-section {
          margin-top: 14pt;
          padding-top: 4pt;
          break-inside: avoid;
          page-break-inside: avoid;
        }
        .dw-section-head {
          display: flex; gap: 10pt; align-items: flex-start;
          margin-bottom: 8pt;
        }
        .dw-section-badge {
          width: 22pt; height: 22pt; border-radius: 999pt;
          background: #4338ca; color: #ffffff;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 11pt; flex-shrink: 0;
        }
        .dw-section-title {
          font-size: 15pt; font-weight: 800; margin: 0;
          color: #0f172a; display: flex; gap: 6pt; align-items: center;
          text-transform: uppercase; letter-spacing: 0.04em;
        }
        .dw-section-icon { display: inline-flex; }
        .dw-section-sub {
          margin: 2pt 0 0; font-size: 10.5pt; color: #475569;
          font-weight: 500; line-height: 1.35;
        }

        .dw-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 10pt 18pt;
        }
        .dw-grid-3 { grid-template-columns: 1fr 1fr 1fr; }
        .dw-grid-1 { grid-template-columns: 1fr; }

        .dw-field { display: flex; flex-direction: column; margin-bottom: 4pt; }
        .dw-field-wide { grid-column: 1 / -1; }
        .dw-label {
          font-size: 10.5pt; font-weight: 700; color: #0f172a; margin-bottom: 1pt;
        }
        .dw-helper {
          font-size: 9.5pt; color: #64748b; margin-bottom: 4pt;
          line-height: 1.3; font-style: italic;
        }
        .dw-line {
          border-bottom: 0.75pt solid #0f172a;
          height: 22pt; margin-top: 2pt;
          width: 100%;
        }
        .dw-multiline .dw-line { margin-top: 0; height: 22pt; }
        .dw-multiline .dw-line + .dw-line { margin-top: 4pt; }

        .dw-input, .dw-textarea {
          width: 100%;
          font: inherit; font-size: 12pt;
          border: none;
          border-bottom: 1pt solid #94a3b8;
          background: #fafafa;
          padding: 6pt 4pt;
          color: #0f172a;
          outline: none;
          border-radius: 2pt 2pt 0 0;
          box-sizing: border-box;
        }
        .dw-input:focus, .dw-textarea:focus {
          background: #eef2ff;
          border-bottom-color: #4338ca;
        }
        .dw-textarea { resize: vertical; min-height: 3em; line-height: 1.4; }

        .dw-row-heading {
          font-size: 10pt; font-weight: 700; color: #475569;
          text-transform: uppercase; letter-spacing: 0.08em;
          margin: 10pt 0 4pt;
        }
        .dw-num-row {
          display: grid; grid-template-columns: 18pt 1fr;
          gap: 6pt; margin-bottom: 6pt; align-items: start;
        }
        .dw-num { font-weight: 700; color: #4338ca; font-size: 11pt; padding-top: 4pt; }

        .dw-foot {
          margin-top: 22pt; padding-top: 10pt;
          border-top: 0.75pt solid #94a3b8;
          font-size: 10pt; color: #475569; line-height: 1.4;
        }
        .dw-foot .dw-legal {
          background: #fffbeb;
          border: 1pt solid #fde68a;
          padding: 10pt 12pt;
          border-radius: 4pt;
          color: #713f12;
          font-size: 10.5pt;
        }

        /* ── Responsive (non-print) ── */
        @media (max-width: 640px) {
          .dw-grid, .dw-grid-3 { grid-template-columns: 1fr; }
          .dw-page { padding: 0.4in 0.35in 0.4in; }
          .dw-page h1 { font-size: 24pt; }
        }

        /* ── Print layout ── */
        @page { size: letter; margin: 0.5in 0.55in; }
        @media print {
          html, body { background: #fff !important; }
          .no-print, nav, header.site-header, footer.site-footer { display: none !important; }
          .dw-outer { padding: 0 !important; }
          .dw-page {
            box-shadow: none !important; border-radius: 0 !important;
            width: 100% !important; min-height: 100vh !important;
            padding: 0 !important;
          }
          .dw-input, .dw-textarea {
            border: none !important; background: transparent !important;
            border-bottom: 0.75pt solid #0f172a !important;
            padding: 2pt 0 !important; color: #0f172a !important;
          }
          .dw-textarea { min-height: auto !important; }
          .dw-section { page-break-inside: avoid; }
          .dw-warn { page-break-inside: avoid; }
          .dw-foot { page-break-inside: avoid; }
        }
      `}</style>

      {/* Navbar hidden on print */}
      <div className="print:hidden">
      </div>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb (non-print) */}
        <div className="container max-w-5xl pt-4 px-4 print:hidden">
          <PageBreadcrumb segments={[
            { label: 'Tools', href: '/tools' },
            { label: 'Digital Will Template' },
          ]} />
        </div>

        {/* Hero & Controls */}
        <section className="print:hidden container max-w-5xl mx-auto px-4 pt-6 pb-4">
          <div className="flex items-center gap-3 text-indigo-600 text-sm font-bold uppercase tracking-widest mb-3">
            <FileSignature className="h-5 w-5" />
            <span>Free Printable Template</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Your Digital Will — Free Template
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-snug">
            The accounts your family will need. In one document.
            Done in under an hour.
          </p>

          {/* Link to companion guide */}
          <div className="mt-4">
            <Link
              to="/guides/digital-estate-planning-accounts-after-death"
              className="inline-flex items-center gap-2 text-base font-semibold text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 hover:underline"
            >
              <BookOpen className="h-4 w-4" />
              Read the Digital Estate Planning guide first
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Important warning */}
          <div className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 dark:bg-rose-950/20 dark:border-rose-900 p-5 md:p-6 flex gap-4 items-start">
            <ShieldAlert className="h-7 w-7 md:h-8 md:w-8 text-rose-600 shrink-0 mt-0.5" aria-hidden />
            <div className="text-base md:text-lg leading-relaxed">
              <p className="font-bold text-rose-900 dark:text-rose-200 mb-1">
                Do NOT put actual passwords here.
              </p>
              <p className="text-rose-900/90 dark:text-rose-100/90">
                Those go in a password manager or a sealed envelope with your
                lawyer. <strong>This is a map, not a key.</strong> This document
                tells your family <em>which doors exist</em> — not how to open
                them.
              </p>
            </div>
          </div>

          {/* Mode toggle + toolbar */}
          <div className="mt-6 flex flex-wrap gap-3 items-center justify-between rounded-xl border bg-muted/40 p-4">
            <div
              role="radiogroup"
              aria-label="Template mode"
              className="inline-flex rounded-lg bg-background border p-1 shadow-sm"
            >
              <button
                type="button"
                role="radio"
                aria-checked={mode === 'form'}
                onClick={() => setMode('form')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-base font-semibold transition-colors ${
                  mode === 'form'
                    ? 'bg-indigo-600 text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Edit3 className="h-4 w-4" />
                Fill out online
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={mode === 'blank'}
                onClick={() => setMode('blank')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-base font-semibold transition-colors ${
                  mode === 'blank'
                    ? 'bg-indigo-600 text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <FileText className="h-4 w-4" />
                Print blank (fill by hand)
              </button>
            </div>

            <div className="flex gap-2 items-center flex-wrap">
              {mode === 'form' && (
                <span
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                  aria-live="polite"
                >
                  <Save className="h-4 w-4" />
                  {savedLabel || 'Autosave on'}
                </span>
              )}
              {mode === 'form' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  className="gap-1.5 text-muted-foreground hover:text-rose-600"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear
                </Button>
              )}
              <Button onClick={handlePrint} size="lg" className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                <Printer className="h-5 w-5" />
                Download as PDF
              </Button>
            </div>
          </div>

          <p className="mt-3 text-sm text-muted-foreground flex items-start gap-2">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              In the print dialog, choose <strong>Save as PDF</strong> as the
              destination — that lets you keep a digital copy, email it to your
              executor, or print it later.
            </span>
          </p>
        </section>

        {/* The Document */}
        <div className="dw-outer">
          <article className="dw-page" aria-label="Digital Will Template">
            <div className="dw-head-brand">
              <span>TekSure · Digital Will Template</span>
              <span className="dw-date">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </span>
            </div>

            <h1>Your Digital Will</h1>
            <p className="dw-tag">
              The accounts your family will need. In one document.
            </p>
            <div className="dw-rule" />

            <div className="dw-warn" role="note">
              <AlertTriangle className="h-5 w-5 text-red-700 shrink-0 mt-0.5" aria-hidden />
              <p>
                <strong>Do NOT write actual passwords on this document.</strong>
                {' '}Passwords belong in a password manager or a sealed envelope
                with your lawyer. This form tells your family <em>what accounts
                exist and what you want done with them</em> — nothing more.
              </p>
            </div>

            {/* 1. Personal Information */}
            <section className="dw-section">
              <SectionHeader number={1} title="Personal Information" />
              <div className="dw-grid">
                <WriteLine mode={mode} label="Full legal name"
                  helper="The name on your driver's license or birth certificate."
                  value={data.fullName} onChange={(v) => update('fullName', v)} />
                <WriteLine mode={mode} label="Date of birth"
                  helper="Month, day, year." type="date"
                  value={data.dateOfBirth} onChange={(v) => update('dateOfBirth', v)} />
                <WriteLine mode={mode} label="Date this was filled out"
                  helper="When you wrote or last updated this document." type="date"
                  value={data.dateFilledOut} onChange={(v) => update('dateFilledOut', v)} />
                <WriteLine mode={mode} label="Who has copies of this document"
                  helper="For example: spouse, attorney, adult child."
                  value={data.documentLocation} onChange={(v) => update('documentLocation', v)} />
              </div>
            </section>

            {/* 2. Executor / Digital Agent */}
            <section className="dw-section">
              <SectionHeader number={2} title="Executor / Digital Agent"
                subtitle="The person you trust to carry out these wishes." />
              <div className="dw-grid">
                <WriteLine mode={mode} label="Name"
                  helper="Who will handle your digital accounts?"
                  value={data.execName} onChange={(v) => update('execName', v)} />
                <WriteLine mode={mode} label="Relationship"
                  helper="Spouse, child, sibling, friend, attorney."
                  value={data.execRelationship} onChange={(v) => update('execRelationship', v)} />
                <WriteLine mode={mode} label="Phone" type="tel"
                  helper="The number they are most likely to answer."
                  value={data.execPhone} onChange={(v) => update('execPhone', v)} />
                <WriteLine mode={mode} label="Email" type="email"
                  helper="Where platforms can contact them."
                  value={data.execEmail} onChange={(v) => update('execEmail', v)} />
              </div>
            </section>

            {/* 3. Backup Executor */}
            <section className="dw-section">
              <SectionHeader number={3} title="Backup Executor"
                subtitle="In case the first person is unavailable." />
              <div className="dw-grid">
                <WriteLine mode={mode} label="Name"
                  helper="Second-choice trusted person."
                  value={data.backupName} onChange={(v) => update('backupName', v)} />
                <WriteLine mode={mode} label="Relationship"
                  helper="Their connection to you."
                  value={data.backupRelationship} onChange={(v) => update('backupRelationship', v)} />
                <WriteLine mode={mode} label="Phone" type="tel"
                  helper="Primary phone number."
                  value={data.backupPhone} onChange={(v) => update('backupPhone', v)} />
                <WriteLine mode={mode} label="Email" type="email"
                  helper="Primary email address."
                  value={data.backupEmail} onChange={(v) => update('backupEmail', v)} />
              </div>
            </section>

            {/* 4. Email Accounts */}
            <section className="dw-section">
              <SectionHeader number={4} title="Email Accounts"
                subtitle="List each email provider you use. Username only — no passwords." />
              {data.emails.map((row, i) => (
                <div key={i} className="dw-num-row">
                  <div className="dw-num">{i + 1}.</div>
                  <div className="dw-grid dw-grid-3">
                    <WriteLine mode={mode} label="Provider"
                      helper="Gmail, Yahoo, Outlook, AOL, etc."
                      value={row.provider}
                      onChange={(v) => updateEmail(i, 'provider', v)} />
                    <WriteLine mode={mode} label="Username / address"
                      helper="The @ address — not the password."
                      value={row.username}
                      onChange={(v) => updateEmail(i, 'username', v)} />
                    <WriteLine mode={mode} label="What to do after death"
                      helper="Close, memorialize, or forward mail."
                      value={row.action}
                      onChange={(v) => updateEmail(i, 'action', v)} />
                  </div>
                </div>
              ))}
            </section>

            {/* 5. Social Media */}
            <section className="dw-section">
              <SectionHeader number={5} title="Social Media"
                subtitle="For each one: delete, memorialize, or keep active." />
              <div className="dw-grid dw-grid-1">
                <WriteLine mode={mode} wide label="Facebook"
                  helper="Your profile URL or username, plus what to do (delete / memorialize / keep)."
                  value={data.facebook} onChange={(v) => update('facebook', v)} />
                <WriteLine mode={mode} wide label="Instagram"
                  helper="Handle + instruction (delete / memorialize / keep)."
                  value={data.instagram} onChange={(v) => update('instagram', v)} />
                <WriteLine mode={mode} wide label="LinkedIn"
                  helper="Profile + whether to close or leave as-is."
                  value={data.linkedin} onChange={(v) => update('linkedin', v)} />
                <WriteLine mode={mode} wide label="Twitter / X"
                  helper="Handle + instruction."
                  value={data.twitter} onChange={(v) => update('twitter', v)} />
                <WriteLine mode={mode} wide label="Other platforms"
                  helper="TikTok, Pinterest, Reddit, forums, etc."
                  value={data.socialOther} onChange={(v) => update('socialOther', v)} />
              </div>
            </section>

            {/* 6. Financial / Banking */}
            <section className="dw-section">
              <SectionHeader number={6} title="Financial / Banking"
                subtitle="Bank name + account type + what to do. No account numbers or PINs." />
              {data.banks.map((row, i) => (
                <div key={i} className="dw-num-row">
                  <div className="dw-num">{i + 1}.</div>
                  <div className="dw-grid dw-grid-3">
                    <WriteLine mode={mode} label="Bank name"
                      helper="Institution name only."
                      value={row.name}
                      onChange={(v) => updateBank(i, 'name', v)} />
                    <WriteLine mode={mode} label="Account type"
                      helper="Checking, savings, CD, joint."
                      value={row.accountType}
                      onChange={(v) => updateBank(i, 'accountType', v)} />
                    <WriteLine mode={mode} label="What to do"
                      helper="Close, transfer to [name], or leave for executor."
                      value={row.action}
                      onChange={(v) => updateBank(i, 'action', v)} />
                  </div>
                </div>
              ))}
            </section>

            {/* 7. Investment Accounts */}
            <section className="dw-section">
              <SectionHeader number={7} title="Investment Accounts"
                subtitle="Brokerages, 401(k), IRA, pension. Institution + type + instruction." />
              {data.investments.map((row, i) => (
                <div key={i} className="dw-num-row">
                  <div className="dw-num">{i + 1}.</div>
                  <div className="dw-grid dw-grid-3">
                    <WriteLine mode={mode} label="Brokerage / firm"
                      helper="Fidelity, Vanguard, Schwab, employer pension."
                      value={row.brokerage}
                      onChange={(v) => updateInvest(i, 'brokerage', v)} />
                    <WriteLine mode={mode} label="Account type"
                      helper="401(k), traditional IRA, Roth IRA, brokerage."
                      value={row.accountType}
                      onChange={(v) => updateInvest(i, 'accountType', v)} />
                    <WriteLine mode={mode} label="What to do"
                      helper="Transfer to beneficiary, close, roll over."
                      value={row.action}
                      onChange={(v) => updateInvest(i, 'action', v)} />
                  </div>
                </div>
              ))}
            </section>

            {/* 8. Subscription Services */}
            <section className="dw-section">
              <SectionHeader number={8} title="Subscription Services"
                subtitle="Recurring charges that will keep hitting your card. Cancel or forward." />
              {data.subscriptions.map((row, i) => (
                <div key={i} className="dw-num-row">
                  <div className="dw-num">{i + 1}.</div>
                  <div className="dw-grid">
                    <WriteLine mode={mode} label="Service name"
                      helper="Netflix, Amazon Prime, Peloton, newspaper, etc."
                      value={row.name}
                      onChange={(v) => updateSub(i, 'name', v)} />
                    <WriteLine mode={mode} label="Cancel or forward to family?"
                      helper="Cancel, or transfer to [name]."
                      value={row.action}
                      onChange={(v) => updateSub(i, 'action', v)} />
                  </div>
                </div>
              ))}
            </section>

            {/* 9. Cloud Storage */}
            <section className="dw-section">
              <SectionHeader number={9} title="Cloud Storage"
                subtitle="Where your photos, files, and backups live online." />
              <div className="dw-grid dw-grid-1">
                <WriteLine mode={mode} wide label="Google (Drive, Photos, Gmail)"
                  helper="Account email + what to preserve or delete."
                  value={data.googleCloud} onChange={(v) => update('googleCloud', v)} />
                <WriteLine mode={mode} wide label="iCloud (Apple)"
                  helper="Apple ID + instructions. Apple needs a Legacy Contact set up — see the guide."
                  value={data.icloud} onChange={(v) => update('icloud', v)} />
                <WriteLine mode={mode} wide label="Dropbox, OneDrive, other"
                  helper="Service + account + what to do with files and shared folders."
                  value={data.dropboxOther} onChange={(v) => update('dropboxOther', v)} />
              </div>
            </section>

            {/* 10. Devices */}
            <section className="dw-section">
              <SectionHeader number={10} title="Devices"
                subtitle="Phones, computers, tablets. Where are the passcodes kept?" />
              {data.devices.map((row, i) => (
                <div key={i} className="dw-num-row">
                  <div className="dw-num">{i + 1}.</div>
                  <div className="dw-grid">
                    <WriteLine mode={mode} label="Device"
                      helper="iPhone 15, MacBook Air 2022, iPad, Windows laptop."
                      value={row.device}
                      onChange={(v) => updateDevice(i, 'device', v)} />
                    <WriteLine mode={mode} label="Passcode stored with"
                      helper="Password manager, sealed envelope, or trusted family member."
                      value={row.passcodeLocation}
                      onChange={(v) => updateDevice(i, 'passcodeLocation', v)} />
                  </div>
                </div>
              ))}
            </section>

            {/* 11. Password Manager */}
            <section className="dw-section">
              <SectionHeader number={11} title="Password Manager"
                subtitle="This is the master key. Tell your executor how to reach it — not the master password itself." />
              <div className="dw-grid dw-grid-1">
                <WriteLine mode={mode} wide label="Provider"
                  helper="1Password, Bitwarden, LastPass, Apple Passwords, Google Password Manager, etc."
                  value={data.pmProvider} onChange={(v) => update('pmProvider', v)} />
                <WriteBlock mode={mode} lines={3} label="How to access emergency recovery"
                  helper="Example: 'The emergency kit is in our home safe; the safe combination is with John Smith, attorney.' Never write the master password here."
                  value={data.pmAccess} onChange={(v) => update('pmAccess', v)} />
              </div>
            </section>

            {/* 12. Cryptocurrency */}
            <section className="dw-section">
              <SectionHeader number={12} title="Cryptocurrency"
                subtitle="Exchanges, wallets, and the single warning that matters." />
              <div className="dw-grid dw-grid-1">
                <WriteBlock mode={mode} lines={3} label="Exchanges and wallets"
                  helper="Coinbase, Kraken, Ledger, Trezor. Account emails + how the seed phrase is stored. Never on paper that sits with this document."
                  value={data.cryptoAccounts} onChange={(v) => update('cryptoAccounts', v)} />
                <WriteBlock mode={mode} lines={2} label="Explicit acknowledgment"
                  helper="Write or initial: 'I understand that lost seed phrases mean lost crypto forever. There is no recovery. I have stored them at [location] and my executor can find them by [method].'"
                  value={data.cryptoAck} onChange={(v) => update('cryptoAck', v)} />
              </div>
            </section>

            {/* 13. Photos & Memories */}
            <section className="dw-section">
              <SectionHeader number={13} title="Photos & Memories"
                subtitle="The stuff nobody wants lost. Where they live and who gets what." />
              <div className="dw-grid dw-grid-1">
                <WriteBlock mode={mode} lines={2} label="Where they live"
                  helper="iCloud Photos, Google Photos, external hard drive in office drawer, printed albums in the attic."
                  value={data.photoLocations} onChange={(v) => update('photoLocations', v)} />
                <WriteBlock mode={mode} lines={2} label="Priority for saving"
                  helper="Which photos matter most? Wedding, childhood, grandkids, travel?"
                  value={data.photoPriority} onChange={(v) => update('photoPriority', v)} />
                <WriteBlock mode={mode} lines={2} label="Who gets what"
                  helper="Example: 'Wedding album to eldest daughter. Grandkid photos shared with all children. Family videos to my son Mark.'"
                  value={data.photoRecipients} onChange={(v) => update('photoRecipients', v)} />
              </div>
            </section>

            {/* 14. Special Instructions */}
            <section className="dw-section">
              <SectionHeader number={14} title="Special Instructions"
                subtitle="Anything specific you want done — or not done." />
              <WriteBlock mode={mode} lines={6} label="Your specific wishes"
                helper={'Examples: "Please send my Kindle books to my daughter." "Delete my browser history." "Do not read my private journal — burn it." "Post this final message on Facebook."'}
                value={data.specialInstructions} onChange={(v) => update('specialInstructions', v)} />
            </section>

            {/* 15. Where This Document Is Kept */}
            <section className="dw-section">
              <SectionHeader number={15} title="Where This Document Is Kept"
                subtitle="The document is only useful if your family can find it." />
              <div className="dw-grid dw-grid-1">
                <WriteBlock mode={mode} lines={2} label="Physical location"
                  helper="Example: 'Locked home safe, combination known to executor.' 'Top drawer of bedroom filing cabinet.'"
                  value={data.documentPhysicalLocation} onChange={(v) => update('documentPhysicalLocation', v)} />
                <WriteBlock mode={mode} lines={2} label="Digital backup location"
                  helper="Example: 'Encrypted PDF in my password manager vault.' 'Scanned copy emailed to my attorney.'"
                  value={data.documentDigitalBackup} onChange={(v) => update('documentDigitalBackup', v)} />
              </div>
            </section>

            {/* 16. Signature */}
            <section className="dw-section">
              <SectionHeader number={16} title="Signature" />
              <div className="dw-grid">
                <WriteLine mode={mode} label="Date" type="date"
                  helper="The day you sign this document."
                  value={data.signatureDate} onChange={(v) => update('signatureDate', v)} />
                <div className="dw-field">
                  <div className="dw-label">Signature</div>
                  <div className="dw-helper">Sign in pen after printing.</div>
                  <div className="dw-line" aria-hidden />
                </div>
              </div>
            </section>

            {/* Footer disclaimer */}
            <div className="dw-foot">
              <div className="dw-legal">
                <strong>This is a template, not a legal document.</strong> It
                helps your family find and handle your digital accounts — but
                it is not a substitute for a will. Ask your lawyer about making
                this legally binding under your state's RUFADAA law (the
                Revised Uniform Fiduciary Access to Digital Assets Act, which
                lets executors legally access digital accounts in most U.S.
                states).
              </div>
              <p style={{ marginTop: 10, fontSize: '9.5pt', textAlign: 'center' }}>
                Made with care by TekSure · teksure.com/tools/digital-will-template ·
                Free forever.
              </p>
            </div>
          </article>
        </div>

        {/* Related tools (non-print) */}
        <section className="print:hidden container max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Keep going — related free tools
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/guides/digital-estate-planning-accounts-after-death"
              className="border rounded-xl p-5 hover:shadow-md transition group flex items-start gap-3"
            >
              <BookOpen className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Digital Estate Planning Guide</h3>
                <p className="text-sm text-muted-foreground">
                  The full plain-English explainer this template comes from.
                </p>
              </div>
            </Link>
            <Link
              to="/tools/password-manager"
              className="border rounded-xl p-5 hover:shadow-md transition group flex items-start gap-3"
            >
              <FileText className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Password Manager Picker</h3>
                <p className="text-sm text-muted-foreground">
                  The safe place to keep the passwords that don't belong here.
                </p>
              </div>
            </Link>
            <Link
              to="/checklists"
              className="border rounded-xl p-5 hover:shadow-md transition group flex items-start gap-3"
            >
              <FileSignature className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Printable Checklists</h3>
                <p className="text-sm text-muted-foreground">
                  "My Loved One Passed Away" and "Family Digital Legacy Plan."
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <div className="print:hidden">
      </div>
    </>
  );
}
