import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  AlertTriangle,
  XCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Info,
  Lock,
  HelpCircle,
  Wallet,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

type DeviceType = 'iphone' | 'ipad' | 'android' | 'mac' | 'windows';

type SupportStatus = 'supported' | 'limited' | 'unsupported' | 'unknown';

interface SupportResult {
  status: SupportStatus;
  headline: string;
  detail: string;
  yearsLeft?: number;
  recommendation: 'keep' | 'plan' | 'replace' | 'ask';
  recommendationText: string;
}

const DEVICE_TYPES: { id: DeviceType; label: string; emoji: string; description: string }[] = [
  { id: 'iphone', label: 'iPhone', emoji: '', description: 'Apple iPhone (any model)' },
  { id: 'android', label: 'Android Phone', emoji: '', description: 'Samsung, Google Pixel, or other Android' },
  { id: 'ipad', label: 'iPad', emoji: '', description: 'Any Apple iPad' },
  { id: 'mac', label: 'Mac', emoji: '', description: 'MacBook, iMac, Mac Mini, etc.' },
  { id: 'windows', label: 'Windows PC', emoji: '', description: 'Desktop or laptop running Windows' },
  { id: 'android-tablet', label: 'Android Tablet', emoji: '', description: 'Samsung, Amazon Fire, or other Android tablet' },
  { id: 'chromebook', label: 'Chromebook', emoji: '', description: 'Any laptop running ChromeOS' },
];

const CURRENT_YEAR = 2026;

// Model options per device. Each maps directly to a SupportStatus so we can be precise.
interface ModelOption {
  id: string;
  label: string;
  year?: number;
  // Pre-baked status (optional — can also compute from year).
  status?: SupportStatus;
  yearsLeft?: number;
}

const IPHONE_MODELS: ModelOption[] = [
  { id: 'iphone-16', label: 'iPhone 16 / 16 Pro', year: 2024, status: 'supported', yearsLeft: 5 },
  { id: 'iphone-15', label: 'iPhone 15 / 15 Pro', year: 2023, status: 'supported', yearsLeft: 4 },
  { id: 'iphone-14', label: 'iPhone 14 / 14 Pro', year: 2022, status: 'supported', yearsLeft: 3 },
  { id: 'iphone-13', label: 'iPhone 13 / 13 mini / 13 Pro', year: 2021, status: 'supported', yearsLeft: 2 },
  { id: 'iphone-12', label: 'iPhone 12 / 12 mini / 12 Pro', year: 2020, status: 'supported', yearsLeft: 1 },
  { id: 'iphone-11', label: 'iPhone 11 / 11 Pro', year: 2019, status: 'limited' },
  { id: 'iphone-xr-xs', label: 'iPhone XR / XS / XS Max', year: 2018, status: 'limited' },
  { id: 'iphone-x-8', label: 'iPhone X / 8 / 8 Plus', year: 2017, status: 'unsupported' },
  { id: 'iphone-7', label: 'iPhone 7 / 7 Plus or older', year: 2016, status: 'unsupported' },
  { id: 'iphone-unknown', label: 'Not sure which model', status: 'unknown' },
];

const IPAD_MODELS: ModelOption[] = [
  { id: 'ipad-2023-newer', label: 'iPad / iPad Air / Pro (2023 or newer)', year: 2023, status: 'supported', yearsLeft: 4 },
  { id: 'ipad-2021-2022', label: 'iPad / iPad Air / Pro (2021–2022)', year: 2021, status: 'supported', yearsLeft: 2 },
  { id: 'ipad-2019-2020', label: 'iPad / iPad Air / Pro (2019–2020)', year: 2019, status: 'supported', yearsLeft: 1 },
  { id: 'ipad-2018', label: 'iPad 6th gen / iPad Pro 2018', year: 2018, status: 'limited' },
  { id: 'ipad-2017', label: 'iPad 5th gen / iPad Pro 2017', year: 2017, status: 'unsupported' },
  { id: 'ipad-older', label: 'iPad Air 2 / iPad mini 4 / older', year: 2015, status: 'unsupported' },
  { id: 'ipad-unknown', label: 'Not sure which model', status: 'unknown' },
];

const ANDROID_MODELS: ModelOption[] = [
  { id: 'pixel-8-9', label: 'Google Pixel 8 / 9 (2023–2024)', year: 2023, status: 'supported', yearsLeft: 6 },
  { id: 'pixel-6-7', label: 'Google Pixel 6 / 7 (2021–2022)', year: 2021, status: 'supported', yearsLeft: 3 },
  { id: 'pixel-5-older', label: 'Google Pixel 5 or older', year: 2020, status: 'unsupported' },
  { id: 'samsung-s23-newer', label: 'Samsung Galaxy S23 / S24 / S25', year: 2023, status: 'supported', yearsLeft: 4 },
  { id: 'samsung-s21-s22', label: 'Samsung Galaxy S21 / S22', year: 2021, status: 'supported', yearsLeft: 1 },
  { id: 'samsung-s20-older', label: 'Samsung Galaxy S20 or older', year: 2020, status: 'limited' },
  { id: 'android-other-new', label: 'Other Android (2023 or newer)', year: 2023, status: 'supported', yearsLeft: 2 },
  { id: 'android-other-mid', label: 'Other Android (2020–2022)', year: 2021, status: 'limited' },
  { id: 'android-other-old', label: 'Other Android (2019 or older)', year: 2019, status: 'unsupported' },
  { id: 'android-unknown', label: 'Not sure which model', status: 'unknown' },
];

const MAC_MODELS: ModelOption[] = [
  { id: 'mac-2023-newer', label: 'Mac (2023 or newer — M2/M3/M4)', year: 2023, status: 'supported', yearsLeft: 6 },
  { id: 'mac-2020-2022', label: 'Mac (2020–2022 — first M1 Macs)', year: 2020, status: 'supported', yearsLeft: 3 },
  { id: 'mac-2018-2019', label: 'Mac (2018–2019 — Intel)', year: 2018, status: 'supported', yearsLeft: 1 },
  { id: 'mac-2017', label: 'Mac (2017)', year: 2017, status: 'limited' },
  { id: 'mac-2016', label: 'Mac (2016)', year: 2016, status: 'unsupported' },
  { id: 'mac-2015-older', label: 'Mac (2015 or older)', year: 2015, status: 'unsupported' },
  { id: 'mac-unknown', label: 'Not sure which model', status: 'unknown' },
];

const WINDOWS_MODELS: ModelOption[] = [
  { id: 'win-11-new', label: 'Windows 11 PC (bought 2022 or newer)', year: 2022, status: 'supported', yearsLeft: 5 },
  { id: 'win-11-upgraded', label: 'Windows 11 PC (upgraded from Windows 10)', year: 2020, status: 'supported', yearsLeft: 4 },
  { id: 'win-10-eligible', label: 'Windows 10 PC (can upgrade to Windows 11)', year: 2019, status: 'limited' },
  { id: 'win-10-stuck', label: 'Windows 10 PC (cannot run Windows 11)', year: 2017, status: 'unsupported' },
  { id: 'win-8', label: 'Windows 8 / 8.1 PC', year: 2013, status: 'unsupported' },
  { id: 'win-7', label: 'Windows 7 PC', year: 2010, status: 'unsupported' },
  { id: 'win-unknown', label: 'Not sure which version', status: 'unknown' },
];

const MODELS_BY_DEVICE: Record<DeviceType, ModelOption[]> = {
  iphone: IPHONE_MODELS,
  ipad: IPAD_MODELS,
  android: ANDROID_MODELS,
  mac: MAC_MODELS,
  windows: WINDOWS_MODELS,
};

function getResult(device: DeviceType, model: ModelOption): SupportResult {
  const status: SupportStatus = model.status ?? 'unknown';

  if (status === 'unknown') {
    return {
      status: 'unknown',
      headline: "We can't tell for sure without more info.",
      detail:
        "Device support varies a lot between brands and models. If you're not sure which exact model you have, don't worry — TekBrain (our tech helper) can walk you through finding the model name on your device in plain English.",
      recommendation: 'ask',
      recommendationText:
        'Ask TekBrain for help figuring out exactly what you have. It only takes a minute, and once you know the model you can come back here for a precise answer.',
    };
  }

  switch (device) {
    case 'iphone':
      return iphoneResult(model, status);
    case 'ipad':
      return ipadResult(model, status);
    case 'android':
      return androidResult(model, status);
    case 'mac':
      return macResult(model, status);
    case 'windows':
      return windowsResult(model, status);
  }
}

function iphoneResult(m: ModelOption, status: SupportStatus): SupportResult {
  if (status === 'supported') {
    return {
      status,
      headline: 'Your iPhone is fully supported.',
      detail: `${m.label} is still in Apple's active support window. Apple typically supports iPhones for about 5–6 years from release, so you'll keep getting iOS security updates for a while yet. Just make sure automatic updates are turned on in Settings → General → Software Update.`,
      yearsLeft: m.yearsLeft,
      recommendation: 'keep',
      recommendationText:
        "Keep it. Your iPhone is safe to use for banking, email, shopping — anything. There's no reason to rush an upgrade.",
    };
  }
  if (status === 'limited') {
    return {
      status,
      headline: 'Your iPhone has limited support left.',
      detail: `${m.label} received iOS 17 and may get a bit more, but it's near the end of Apple's support window. Future iOS versions likely won't be available, which means future security patches may not reach your device.`,
      recommendation: 'plan',
      recommendationText:
        "Start planning an upgrade in the next 1–2 years. No need to panic today — but when you see a good deal on a newer iPhone, it's worth taking it.",
    };
  }
  return {
    status: 'unsupported',
    headline: 'Your iPhone is no longer getting security updates.',
    detail: `${m.label} has reached end-of-support from Apple. New security holes discovered today are not fixed on this phone. For casual use it still works — but for banking, email, and anything involving passwords, an unsupported phone carries real risk.`,
    recommendation: 'replace',
    recommendationText:
      "Upgrade when you're able to. It doesn't need to be the newest model — even a refurbished iPhone that's a couple of years newer than yours will be significantly safer.",
  };
}

function ipadResult(m: ModelOption, status: SupportStatus): SupportResult {
  if (status === 'supported') {
    return {
      status,
      headline: 'Your iPad is fully supported.',
      detail: `${m.label} is within Apple's support window for iPadOS. You'll continue receiving security updates automatically — just keep auto-update turned on in Settings → General → Software Update.`,
      yearsLeft: m.yearsLeft,
      recommendation: 'keep',
      recommendationText:
        'Keep it. Your iPad is safe for email, web browsing, banking apps, and video calls. No action needed.',
    };
  }
  if (status === 'limited') {
    return {
      status,
      headline: 'Your iPad is near the end of its support window.',
      detail: `${m.label} received iPadOS 16 support, but may not get all future iPadOS versions. Once updates stop, new security issues won't be fixed.`,
      recommendation: 'plan',
      recommendationText:
        'Plan to replace in the next 1–2 years. No rush today — but start watching for refurbished deals or trade-in offers.',
    };
  }
  return {
    status: 'unsupported',
    headline: 'Your iPad is no longer getting security updates.',
    detail: `${m.label} has passed Apple's support window. Without security patches, newly discovered vulnerabilities stay open on your device. It's still fine for low-risk use like watching videos, but risky for banking and email.`,
    recommendation: 'replace',
    recommendationText:
      "Upgrade when you're ready. A refurbished recent iPad is often hundreds less than a brand-new one and will be supported for years.",
  };
}

function androidResult(m: ModelOption, status: SupportStatus): SupportResult {
  if (status === 'supported') {
    return {
      status,
      headline: 'Your Android phone is fully supported.',
      detail: `${m.label} is still within its manufacturer support window. Google Pixel phones get up to 7 years of updates; Samsung Galaxy S phones get 4–7; most other brands get 2–4. Check Settings → About phone → Android security patch level to confirm you're up to date.`,
      yearsLeft: m.yearsLeft,
      recommendation: 'keep',
      recommendationText:
        'Keep it. Make sure Settings → System → System update is set to download automatically.',
    };
  }
  if (status === 'limited') {
    return {
      status,
      headline: 'Your Android may be near the end of updates.',
      detail: `${m.label} is at or just past the typical 3–4 year security-update window for many Android brands. Open Settings → About phone → Android security patch level — if that date is more than a year old, security updates have likely stopped.`,
      recommendation: 'plan',
      recommendationText:
        'Check your security patch date. If it\'s more than 12 months old, plan to replace within the next year.',
    };
  }
  return {
    status: 'unsupported',
    headline: 'Your Android is no longer getting security updates.',
    detail: `${m.label} has passed the typical manufacturer support window. Most Android phones this age stopped getting security patches a long time ago — which matters especially for banking apps and anything with a password.`,
    recommendation: 'replace',
    recommendationText:
      "Upgrade when you're able. A Google Pixel A-series phone or a refurbished recent Samsung is affordable and will have years of updates ahead.",
  };
}

function macResult(m: ModelOption, status: SupportStatus): SupportResult {
  if (status === 'supported') {
    return {
      status,
      headline: 'Your Mac is fully supported.',
      detail: `${m.label} can run current macOS and is getting regular security updates from Apple. Apple typically supports Macs for around 7 years of new macOS versions.`,
      yearsLeft: m.yearsLeft,
      recommendation: 'keep',
      recommendationText:
        'Keep it. Check Apple menu → System Settings → General → Software Update to make sure updates are installing automatically.',
    };
  }
  if (status === 'limited') {
    return {
      status,
      headline: 'Your Mac is near the end of macOS updates.',
      detail: `${m.label} is around the edge of Apple's ~7-year support window. Some 2017 Macs still get current macOS, others have been dropped. Open Apple menu → System Settings → Software Update to see whether the newest macOS is offered to you.`,
      recommendation: 'plan',
      recommendationText:
        'Check for updates now. If the newest macOS isn\'t available for your Mac, plan to replace in the next 1–2 years.',
    };
  }
  return {
    status: 'unsupported',
    headline: 'Your Mac is no longer getting macOS security updates.',
    detail: `${m.label} has passed Apple's support window. New security vulnerabilities are not patched — which is a real problem if you use it for banking, email, or sensitive work.`,
    recommendation: 'replace',
    recommendationText:
      "Replace when you're able. Apple's refurbished store and certified-refurbished Macs from major retailers can save hundreds versus new.",
  };
}

function windowsResult(m: ModelOption, status: SupportStatus): SupportResult {
  if (status === 'supported') {
    return {
      status,
      headline: 'Your Windows PC is fully supported.',
      detail: `${m.label} is running Windows 11, which Microsoft actively supports with security updates. Go to Settings → Windows Update to confirm updates are installing automatically.`,
      yearsLeft: m.yearsLeft,
      recommendation: 'keep',
      recommendationText:
        "Keep it. Just make sure Windows Update isn't paused and that you're getting the monthly \u201CPatch Tuesday\u201D updates.",
    };
  }
  if (status === 'limited') {
    return {
      status,
      headline: 'Your PC can probably upgrade to Windows 11 — but Windows 10 is ending.',
      detail: `${m.label} is in the gray zone. Windows 10 mainstream support ended in October 2025. If your PC meets Windows 11 hardware requirements (8th-gen Intel or Ryzen 2000 or newer, plus TPM 2.0), you can upgrade free. Download Microsoft's "PC Health Check" app to find out.`,
      recommendation: 'plan',
      recommendationText:
        'Run the PC Health Check app today. If Windows 11 is available, upgrade now — it\'s free. If not, plan for a new PC.',
    };
  }
  return {
    status: 'unsupported',
    headline: "Your Windows PC isn't getting security updates anymore.",
    detail: `${m.label} is no longer supported by Microsoft. Windows 7, 8, and 8.1 are years past end-of-support. Windows 10 support ended in October 2025 for PCs that can't run Windows 11. Unpatched Windows PCs are a top target for scams, ransomware, and viruses — especially for banking.`,
    recommendation: 'replace',
    recommendationText:
      "Replace this PC when you can. Until then, stop using it for banking, shopping, or email. A basic new Windows 11 laptop starts around $400; refurbished models start even lower.",
  };
}

const statusConfig: Record<
  SupportStatus,
  { color: string; bg: string; border: string; icon: React.ReactNode; label: string }
> = {
  supported: {
    color: 'text-green-700 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-200 dark:border-green-800',
    icon: <CheckCircle className="h-6 w-6 text-green-600" aria-hidden="true" />,
    label: 'Fully Supported',
  },
  limited: {
    color: 'text-yellow-800 dark:text-yellow-300',
    bg: 'bg-yellow-50 dark:bg-yellow-950/20',
    border: 'border-yellow-200 dark:border-yellow-700',
    icon: <AlertTriangle className="h-6 w-6 text-yellow-600" aria-hidden="true" />,
    label: 'Limited Support',
  },
  unsupported: {
    color: 'text-red-700 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950/20',
    border: 'border-red-200 dark:border-red-700',
    icon: <XCircle className="h-6 w-6 text-red-600" aria-hidden="true" />,
    label: 'No Longer Supported',
  },
  unknown: {
    color: 'text-blue-700 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800',
    icon: <HelpCircle className="h-6 w-6 text-blue-600" aria-hidden="true" />,
    label: 'Need More Info',
  },
};

interface GuideLink {
  label: string;
  to: string;
}

function getGuideLinks(device: DeviceType, status: SupportStatus): GuideLink[] {
  const links: GuideLink[] = [];

  if (status === 'unknown') {
    links.push({ label: 'Ask TekBrain which model I have', to: '/tekbrain' });
    return links;
  }

  // Universal
  links.push({ label: 'Back up your device before upgrading', to: '/tools/backup-wizard' });

  if (status === 'unsupported' || status === 'limited') {
    links.push({ label: 'Estimate your trade-in value', to: '/tools/trade-in-estimator' });
    links.push({ label: 'Compare new devices side-by-side', to: '/tools/device-compare' });
  }

  if (device === 'iphone' || device === 'android' || device === 'ipad') {
    if (status === 'unsupported' || status === 'limited') {
      links.push({ label: 'Checklist for setting up a new phone', to: '/tools/new-phone-setup' });
    }
  }

  if (device === 'windows' || device === 'mac') {
    links.push({ label: 'Computer cleanup wizard', to: '/tools/computer-cleanup-wizard' });
  }

  if (status === 'supported') {
    links.push({ label: 'Run a full device health check', to: '/tools/device-health' });
  }

  links.push({ label: 'Ask TekBrain a follow-up question', to: '/tekbrain' });
  return links;
}

export default function DeviceAgeChecker() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
  const [model, setModel] = useState<ModelOption | null>(null);
  const [result, setResult] = useState<SupportResult | null>(null);

  const handleDeviceSelect = (id: DeviceType) => {
    setDeviceType(id);
    setModel(null);
    setResult(null);
    setStep(2);
  };

  const handleModelSelect = (m: ModelOption) => {
    if (!deviceType) return;
    setModel(m);
    setResult(getResult(deviceType, m));
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setDeviceType(null);
    setModel(null);
    setResult(null);
  };

  const selectedDevice = DEVICE_TYPES.find((d) => d.id === deviceType);
  const models = deviceType ? MODELS_BY_DEVICE[deviceType] : [];

  return (
    <>
      <SEOHead
        title="Is Your Device Still Safe? — Device Age & Security Check | TekSure"
        description="Find out in 30 seconds whether your iPhone, iPad, Android, Mac, or Windows PC is still getting security updates — and what to do if it isn't."
        path="/tools/device-age-checker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b bg-gradient-to-b from-indigo-50/60 to-transparent dark:from-indigo-950/20">
          <div className="container py-14 md:py-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-14 w-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0">
                <Shield className="h-7 w-7 text-indigo-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool · 30 seconds</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Is Your Device Still Safe?
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Old phones and computers stop getting security updates after a few years. That's
              when they become risky for banking, email, and passwords. Pick your device below
              and we'll tell you — in plain English — whether yours is still protected, and what
              to do if it isn't.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-3xl">
          {/* Step indicators */}
          <div className="flex items-center gap-2 mb-10 text-sm flex-wrap">
            {[
              { n: 1, label: 'Device type' },
              { n: 2, label: 'Model' },
              { n: 3, label: 'Results' },
            ].map((s) => (
              <div key={s.n} className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step === s.n
                      ? 'bg-primary text-primary-foreground'
                      : step > s.n
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step > s.n ? <CheckCircle className="h-4 w-4" aria-hidden="true" /> : s.n}
                </div>
                <span className={step === s.n ? 'font-semibold' : 'text-muted-foreground'}>
                  {s.label}
                </span>
                {s.n < 3 && <span className="text-muted-foreground/40 ml-1">›</span>}
              </div>
            ))}
          </div>

          {/* Step 1: Device type */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">What kind of device do you have?</h2>
              <p className="text-muted-foreground mb-6">
                Pick the one that matches — we'll ask for the specific model next.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {DEVICE_TYPES.map((dt) => (
                  <button
                    key={dt.id}
                    type="button"
                    onClick={() => handleDeviceSelect(dt.id)}
                    className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors text-left min-h-[80px]"
                  >
                    <span className="text-4xl leading-none flex-shrink-0" aria-hidden="true">
                      {dt.emoji}
                    </span>
                    <div>
                      <p className="font-semibold text-base">{dt.label}</p>
                      <p className="text-sm text-muted-foreground">{dt.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Why this matters */}
              <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                  What are "security updates" and why do they matter?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every few weeks, the companies that make your phone or computer discover new
                  security holes — tricks hackers can use to get into your device. They fix those
                  holes and send the fix to your device as a "security update." When a device
                  gets too old, the company stops sending these fixes. From that day on, every
                  new security hole stays open on your device forever. That's why age matters
                  more than it feels like it should.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Model */}
          {step === 2 && selectedDevice && (
            <div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                aria-label="Go back to device selection"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
              </button>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl" aria-hidden="true">
                  {selectedDevice.emoji}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold">
                    Which {selectedDevice.label} do you have?
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Pick the closest match. If you're not sure, there's a "not sure" option at the
                    bottom — we'll help.
                  </p>
                </div>
              </div>
              <div className="grid gap-2">
                {models.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleModelSelect(m)}
                    className={`flex items-center justify-between gap-3 p-4 rounded-2xl border-2 transition-colors text-left min-h-[60px] ${
                      m.status === 'unknown'
                        ? 'border-dashed border-blue-300 bg-blue-50/40 hover:border-blue-500 hover:bg-blue-50 dark:border-blue-700 dark:bg-blue-950/20'
                        : 'border-border bg-card hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {m.status === 'unknown' ? (
                        <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                      ) : null}
                      <span className="font-medium text-base">{m.label}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && result && selectedDevice && model && (
            <div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                aria-label="Go back to model selection"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl" aria-hidden="true">
                  {selectedDevice.emoji}
                </span>
                <p className="text-sm text-muted-foreground">
                  {selectedDevice.label} · {model.label}
                </p>
              </div>

              {/* Verdict card */}
              {(() => {
                const sc = statusConfig[result.status];
                return (
                  <div className={`rounded-3xl border-2 p-7 mb-6 ${sc.bg} ${sc.border}`}>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      {sc.icon}
                      <span className={`font-bold text-lg ${sc.color}`}>{sc.label}</span>
                      {result.yearsLeft !== undefined && result.yearsLeft > 0 && (
                        <Badge variant="outline" className={`${sc.color} border-current`}>
                          ~{result.yearsLeft} year{result.yearsLeft !== 1 ? 's' : ''} of updates left
                        </Badge>
                      )}
                    </div>
                    <h3 className={`font-bold text-2xl mb-3 ${sc.color}`}>{result.headline}</h3>
                    <p className="text-base text-foreground/80 leading-relaxed">{result.detail}</p>
                  </div>
                );
              })()}

              {/* Why security updates matter (always shown) */}
              <div className="rounded-2xl border border-border bg-muted/40 p-5 mb-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                  A quick reminder: why this matters
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Security updates plug holes that hackers use to steal passwords, bank info,
                  and photos. A supported device gets new fixes every month. An unsupported
                  device doesn't — which means any new hole discovered stays open forever. The
                  longer you use an unsupported device for sensitive tasks, the more risk builds
                  up.
                </p>
              </div>

              {/* Our recommendation */}
              <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 mb-5">
                <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                  What we recommend
                </h3>
                <p className="text-base text-foreground/90 leading-relaxed">
                  {result.recommendationText}
                </p>
              </div>

              {/* Unknown: TekBrain nudge */}
              {result.status === 'unknown' && (
                <div className="rounded-2xl border-2 border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/30 p-6 mb-5">
                  <h3 className="font-semibold text-base mb-2 flex items-center gap-2 text-blue-800 dark:text-blue-300">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Not sure which model you have?
                  </h3>
                  <p className="text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed mb-4">
                    TekBrain is our friendly tech helper. Tell it what your device looks like —
                    color, size, how old you think it is — and it'll help you find the exact
                    model name, usually in under a minute.
                  </p>
                  <Link
                    to="/tekbrain"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Ask TekBrain for help
                  </Link>
                </div>
              )}

              {/* Budget tips when replacing or planning */}
              {(result.status === 'unsupported' || result.status === 'limited') && (
                <div className="rounded-2xl border border-border bg-card p-6 mb-5">
                  <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    Upgrading on a budget
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-600 font-bold">1.</span>
                      <span>
                        <strong className="text-foreground">Buy refurbished.</strong>{' '}
                        {selectedDevice.id === 'iphone' || selectedDevice.id === 'ipad' || selectedDevice.id === 'mac'
                          ? 'Apple\'s official refurbished store has certified-refurbished devices with a full warranty, usually 15–20% off. '
                          : 'Best Buy Outlet, Amazon Renewed, and Back Market sell tested refurbished devices with 30-day return policies. '}
                        You get a device that's 1–2 years newer than yours, at half the price of new.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-600 font-bold">2.</span>
                      <span>
                        <strong className="text-foreground">Trade in your current device.</strong>{' '}
                        Apple, Samsung, Best Buy, and all major carriers offer trade-in credit —
                        even for older devices in rough shape, it's usually $30–$200 off a new
                        purchase. Our{' '}
                        <Link to="/tools/trade-in-estimator" className="text-primary underline underline-offset-2">
                          trade-in estimator
                        </Link>{' '}
                        shows what yours is worth.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-600 font-bold">3.</span>
                      <span>
                        <strong className="text-foreground">Consider the "one-generation-old" model.</strong>{' '}
                        When a new iPhone or Samsung comes out, the previous year's model drops
                        in price by $100–$200 overnight. Same features, years of updates ahead.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-600 font-bold">4.</span>
                      <span>
                        <strong className="text-foreground">Carrier promotions are real — sometimes.</strong>{' '}
                        "Free with trade-in" offers often require a 36-month contract. Read the
                        total cost over 3 years before signing. A paid-off refurbished phone is
                        almost always cheaper.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-600 font-bold">5.</span>
                      <span>
                        <strong className="text-foreground">Second-hand from trusted marketplaces.</strong>{' '}
                        Swappa, Gazelle, and Back Market specialize in tested used phones and
                        laptops. Avoid Facebook Marketplace or Craigslist unless you can verify
                        the device boots and isn't stolen or iCloud-locked.
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Good habits (everyone) */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 mb-5">
                <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
                  Habits that matter more than hardware age
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Whatever your device's age, these habits dramatically reduce your risk:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Use a unique password for every account, or a password manager.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Turn on two-step verification for email, banking, and social media.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Keep apps updated even if the operating system can't be.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Don't click links in texts or emails unless you're certain who sent them.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Avoid public Wi-Fi for banking and shopping — use your phone's data instead.</span>
                  </li>
                </ul>
              </div>

              {/* Relevant guides */}
              {deviceType && (
                <div className="rounded-2xl border border-border bg-card p-6 mb-8">
                  <h3 className="font-semibold text-base mb-3">Helpful next steps</h3>
                  <div className="grid gap-2">
                    {getGuideLinks(deviceType, result.status).map((g) => (
                      <Link
                        key={g.to}
                        to={g.to}
                        className="flex items-center justify-between gap-3 p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors text-sm"
                      >
                        <span className="font-medium">{g.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={reset}
                className="w-full py-4 px-4 rounded-2xl border-2 border-border text-base font-semibold hover:border-primary hover:bg-primary/5 transition-colors"
              >
                Check another device
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
