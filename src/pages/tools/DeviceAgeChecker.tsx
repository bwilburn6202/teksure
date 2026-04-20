import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, XCircle, CheckCircle, ChevronLeft, Info, Lock } from 'lucide-react';

type DeviceType = 'iphone' | 'android' | 'ipad' | 'mac' | 'windows' | 'android-tablet' | 'chromebook';

type SupportStatus = 'supported' | 'limited' | 'unsupported';

interface SupportResult {
  status: SupportStatus;
  headline: string;
  detail: string;
  yearsLeft?: number;
  recommendation: 'keep' | 'plan' | 'replace';
  recommendationText: string;
}

const DEVICE_TYPES: { id: DeviceType; label: string; emoji: string; description: string }[] = [
  { id: 'iphone', label: 'iPhone', emoji: '📱', description: 'Apple iPhone (any model)' },
  { id: 'android', label: 'Android Phone', emoji: '🤖', description: 'Samsung, Google Pixel, or other Android' },
  { id: 'ipad', label: 'iPad', emoji: '📋', description: 'Any Apple iPad' },
  { id: 'mac', label: 'Mac', emoji: '💻', description: 'MacBook, iMac, Mac Mini, etc.' },
  { id: 'windows', label: 'Windows PC', emoji: '🖥️', description: 'Desktop or laptop running Windows' },
  { id: 'android-tablet', label: 'Android Tablet', emoji: '📲', description: 'Samsung, Amazon Fire, or other Android tablet' },
  { id: 'chromebook', label: 'Chromebook', emoji: '🌐', description: 'Any laptop running ChromeOS' },
];

const CURRENT_YEAR = 2026;

function getResult(device: DeviceType, year: number): SupportResult {
  const age = CURRENT_YEAR - year;

  switch (device) {
    case 'iphone': {
      // Apple supports iPhones ~5-6 years from release
      // iPhone 12+ (2020): supported. iPhone 11 (2019): borderline. iPhone X/8 (2017): end of life ~2023.
      if (year >= 2020) {
        const yearsLeft = Math.max(0, (year + 6) - CURRENT_YEAR);
        return {
          status: 'supported',
          headline: 'Your iPhone is still getting security updates.',
          detail: `iPhones from ${year} are still within Apple's support window. Apple typically supports iPhones for 5–6 years from release, so yours should continue receiving iOS updates for another ${yearsLeft} year${yearsLeft !== 1 ? 's' : ''} or so. You're in good shape.`,
          yearsLeft,
          recommendation: yearsLeft >= 2 ? 'keep' : 'plan',
          recommendationText: yearsLeft >= 2
            ? 'Keep it. Your phone is receiving security updates and should be fine for the foreseeable future.'
            : `Start thinking about upgrading in the next year or two. Your phone is still supported, but it's approaching the end of its update window.`,
        };
      }
      if (year === 2019) {
        return {
          status: 'limited',
          headline: 'Your iPhone may have limited update support.',
          detail: `iPhones from 2019 (iPhone 11 series) received iOS 17 support, but iOS 18 support may be limited or ending soon. Apple has been providing roughly 5–6 years of software updates. Your device is at or near the end of that window.`,
          yearsLeft: 0,
          recommendation: 'plan',
          recommendationText: `Plan to replace within 1–2 years. Your phone still works fine, but security updates may stop soon. Start shopping when you're ready — you don't need to rush today.`,
        };
      }
      // 2018 and older (iPhone 8, X) — end of life
      return {
        status: 'unsupported',
        headline: 'Your iPhone is no longer receiving security updates.',
        detail: `iPhones from ${year} have reached the end of Apple's support window. The iPhone 8 and iPhone X (both 2017) stopped receiving iOS updates after iOS 16. Without security updates, new threats discovered after that point are not fixed on your device.`,
        recommendation: 'replace',
        recommendationText: `Consider replacing when you're ready. An unsupported phone isn't a crisis if you stay careful — see our safety tips below — but a newer device will be significantly more secure.`,
      };
    }

    case 'android': {
      // Google Pixel 6+ gets 7 years (from ~2021). Samsung Galaxy S gets 4 years.
      // Older Androids (2018 and before) are almost certainly out of support.
      if (year >= 2021) {
        // Could be Pixel 6+ (7 years) or Samsung (4 years) — give a range
        const pixelYearsLeft = Math.max(0, (year + 7) - CURRENT_YEAR);
        const samsungYearsLeft = Math.max(0, (year + 4) - CURRENT_YEAR);
        return {
          status: samsungYearsLeft > 0 ? 'supported' : 'limited',
          headline: samsungYearsLeft > 0
            ? 'Your Android is likely still receiving updates.'
            : 'Your Android may be reaching the end of its update window.',
          detail: `Android phones from ${year} are generally still in their support window, though it depends on the brand and model. Google Pixel phones get up to 7 years of updates. Samsung Galaxy S phones typically get 4 years. Other brands may be shorter. Check your phone's Settings → Software Update to see if updates are available.`,
          yearsLeft: samsungYearsLeft,
          recommendation: samsungYearsLeft >= 2 ? 'keep' : 'plan',
          recommendationText: samsungYearsLeft >= 2
            ? `Keep it. Your phone is likely still receiving updates. Check Settings → Software Update to confirm you're on the latest version.`
            : `Plan to replace in the next 1–2 years depending on your brand. Samsung phones from ${year} may be approaching their update limit, while Google Pixels have longer support.`,
        };
      }
      if (year >= 2019) {
        return {
          status: 'limited',
          headline: 'Your Android is likely approaching the end of security updates.',
          detail: `Android phones from ${year} are near or past the end of typical manufacturer support windows. Most Android brands provide 3–4 years of updates, so a ${year} phone may have received its last security patch in ${year + 4} or earlier. Go to Settings → About Phone → Android Security Patch Level to check your last update date.`,
          recommendation: 'plan',
          recommendationText: `Plan to replace within 1–2 years. Check your security patch date in Settings — if it's more than a year old, moving to a newer device would improve your security meaningfully.`,
        };
      }
      // 2018 and older
      return {
        status: 'unsupported',
        headline: 'Your Android is no longer receiving security updates.',
        detail: `Android phones from ${year} are well past the typical 3–4 year support window. Security patches have stopped, which means vulnerabilities discovered since then are not fixed. This is especially important for banking apps and anything involving passwords.`,
        recommendation: 'replace',
        recommendationText: 'Consider replacing when you\'re able. An older Android without updates carries real security risk, particularly for banking and email. See our safety tips below for steps you can take in the meantime.',
      };
    }

    case 'ipad': {
      // Similar to iPhone — ~5-6 years. iPad (6th gen, 2018): borderline. iPad Pro (2017): end of life.
      if (year >= 2019) {
        const yearsLeft = Math.max(0, (year + 6) - CURRENT_YEAR);
        return {
          status: 'supported',
          headline: 'Your iPad is still receiving security updates.',
          detail: `iPads from ${year} are within Apple's typical 5–6 year support window. You should be receiving the latest iPadOS updates, which include important security patches. Check Settings → General → Software Update to make sure you're running the latest version.`,
          yearsLeft,
          recommendation: yearsLeft >= 2 ? 'keep' : 'plan',
          recommendationText: yearsLeft >= 2
            ? 'Keep it. Your iPad is supported and up to date. Make sure to install software updates when Apple releases them.'
            : 'Your iPad is still supported but nearing the end of its window. Plan to replace in the next 1–2 years if you use it for important tasks.',
        };
      }
      if (year === 2018) {
        return {
          status: 'limited',
          headline: 'Your iPad is at or near the end of its support window.',
          detail: `iPads from 2018 (like the 6th generation iPad) received iPadOS 16 support, but may not receive all future updates. Apple provides around 5–6 years of support, so a 2018 iPad is right at that boundary.`,
          recommendation: 'plan',
          recommendationText: 'Plan to replace within 1–2 years. Your iPad still works and may receive some updates, but it\'s worth starting to think about a replacement, especially if you use it for email or financial tasks.',
        };
      }
      // 2017 and older
      return {
        status: 'unsupported',
        headline: 'Your iPad is no longer receiving security updates.',
        detail: `iPads from ${year} have passed Apple's support window. The iPad Pro models from 2017 stopped receiving iPadOS updates after iPadOS 16. Without security updates, your device won't get patches for newly discovered threats.`,
        recommendation: 'replace',
        recommendationText: 'Consider replacing when you\'re ready. If you use your iPad for email, banking, or shopping, an unsupported device carries more risk. In the meantime, see our safety tips below.',
      };
    }

    case 'mac': {
      // Apple supports Macs for ~7 years. 2017+: likely still supported. 2015 and older: end of support.
      if (year >= 2018) {
        const yearsLeft = Math.max(0, (year + 7) - CURRENT_YEAR);
        return {
          status: 'supported',
          headline: 'Your Mac is likely still receiving macOS updates.',
          detail: `Macs from ${year} are within Apple's typical 7-year support window. You should be able to install recent versions of macOS, which include important security patches. Click the Apple menu → System Settings → General → Software Update to check.`,
          yearsLeft,
          recommendation: yearsLeft >= 3 ? 'keep' : 'plan',
          recommendationText: yearsLeft >= 3
            ? 'Keep it. Your Mac is likely receiving updates and performing well. Install macOS updates when they become available.'
            : 'Your Mac is still supported but will reach end of life in a few years. Start planning for a replacement, especially if you rely on it for work or finances.',
        };
      }
      if (year === 2017) {
        return {
          status: 'limited',
          headline: 'Your Mac may be near the end of its update support.',
          detail: `Macs from 2017 are at or approaching the boundary of Apple's ~7-year support window. Some 2017 Macs still receive macOS updates, while others may have been dropped. Go to Apple menu → System Settings → Software Update to check if a recent macOS version is available for your machine.`,
          recommendation: 'plan',
          recommendationText: 'Check for updates now, and plan to replace in the next 1–2 years. A 2017 Mac that still runs the latest macOS is fine to keep — but start budgeting for a replacement.',
        };
      }
      if (year >= 2015) {
        return {
          status: 'unsupported',
          headline: 'Your Mac is no longer receiving security updates.',
          detail: `Macs from ${year} have passed Apple's support window for current macOS versions. Apple stopped providing macOS updates for these models, which means new security vulnerabilities discovered after the last update are not patched.`,
          recommendation: 'replace',
          recommendationText: 'Consider replacing when you\'re able to. If your Mac is used for email, banking, or sensitive work, an unsupported machine carries increasing risk over time. See our safety tips below.',
        };
      }
      // Very old
      return {
        status: 'unsupported',
        headline: 'Your Mac is well past its end-of-support date.',
        detail: `Macs from ${year} stopped receiving macOS security updates many years ago. Running an unsupported Mac — especially for banking, email, or shopping — carries significant security risk as known vulnerabilities are not patched.`,
        recommendation: 'replace',
        recommendationText: 'We recommend replacing this computer when you\'re able. If immediate replacement isn\'t possible, see our safety tips below for steps to reduce risk.',
      };
    }

    case 'windows': {
      // Windows 10 support ends October 2025. Windows 11 needs newer hardware. Pre-2017 can't run Win11.
      if (year >= 2020) {
        return {
          status: 'supported',
          headline: 'Your PC can likely run Windows 11 and receive updates.',
          detail: `Computers purchased in ${year} almost certainly meet the hardware requirements for Windows 11, which receives regular security updates from Microsoft. Go to Settings → Windows Update to make sure you're on the latest version. Windows 10 support ended in October 2025, so upgrading to Windows 11 is important.`,
          yearsLeft: 5,
          recommendation: 'keep',
          recommendationText: 'Keep it — but make sure you\'re running Windows 11. If your PC shipped with Windows 10, check if Windows 11 is available through Windows Update. It\'s a free upgrade for eligible machines.',
        };
      }
      if (year >= 2017) {
        return {
          status: 'limited',
          headline: 'Your PC may or may not support Windows 11.',
          detail: `Computers from ${year} are in a gray zone. Windows 11 requires a specific processor (8th generation Intel or newer, or Ryzen 2000 or newer) and a security chip called TPM 2.0. Some ${year} machines have these, some don't. Windows 10 support ended in October 2025, so if your PC can't run Windows 11, it's no longer receiving security updates. Run the "PC Health Check" app from Microsoft to find out for sure.`,
          recommendation: 'plan',
          recommendationText: 'Check compatibility now. Download the free "PC Health Check" app from Microsoft.com to see if your PC supports Windows 11. If it doesn\'t, plan for a new PC — staying on unsupported Windows 10 after October 2025 carries security risk.',
        };
      }
      // Pre-2017: almost certainly can't run Windows 11
      return {
        status: 'unsupported',
        headline: 'Your PC likely cannot run Windows 11 and is no longer supported.',
        detail: `Computers from ${year} almost certainly do not meet Windows 11's hardware requirements. Windows 10 support ended in October 2025. This means your PC is no longer receiving security patches from Microsoft — a real risk for online activities like banking, email, and shopping.`,
        recommendation: 'replace',
        recommendationText: 'We recommend replacing this PC when you\'re able to. If you must keep using it, see our safety tips below for ways to reduce risk while you plan for a replacement.',
      };
    }

    case 'android-tablet': {
      // Similar to Android phones — varies by brand, typically 3-4 years
      if (year >= 2021) {
        const yearsLeft = Math.max(0, (year + 4) - CURRENT_YEAR);
        return {
          status: yearsLeft > 0 ? 'supported' : 'limited',
          headline: yearsLeft > 0
            ? 'Your tablet is likely still receiving security updates.'
            : 'Your tablet may be reaching the end of its update window.',
          detail: `Android tablets from ${year} are generally within or near the typical support window. Samsung tablets often get 4 years of updates, while Amazon Fire tablets receive fewer. Go to Settings → Software Update to check your last security patch date.`,
          yearsLeft,
          recommendation: yearsLeft >= 2 ? 'keep' : 'plan',
          recommendationText: yearsLeft >= 2
            ? 'Keep it. Check Settings → Software Update to make sure you have the latest security patches.'
            : 'Plan to replace within the next 1–2 years as your tablet approaches the end of its update window.',
        };
      }
      if (year >= 2019) {
        return {
          status: 'limited',
          headline: 'Your tablet is likely approaching the end of security updates.',
          detail: `Android tablets from ${year} are near or past the typical 3–4 year support window. Amazon Fire tablets and many Android tablets from this era have stopped receiving updates. Check Settings → About Tablet → Software Information to see your security patch date.`,
          recommendation: 'plan',
          recommendationText: 'Plan to replace in the next year or so, especially if you use this tablet for email or shopping. If the security patch date in Settings is over a year old, it\'s likely no longer receiving updates.',
        };
      }
      return {
        status: 'unsupported',
        headline: 'Your tablet is likely no longer receiving security updates.',
        detail: `Android tablets from ${year} are well past typical manufacturer support windows. Most Android tablets from this era stopped receiving security patches years ago. This matters most if you use the tablet for banking, email, or shopping.`,
        recommendation: 'replace',
        recommendationText: 'Consider replacing when you\'re ready — especially if you use it for sensitive tasks. In the meantime, see our safety tips below.',
      };
    }

    case 'chromebook': {
      // Google supports Chromebooks for ~8 years from first release of that model
      // Most 2019+ Chromebooks still supported. Most 2016 and older: end of life.
      if (year >= 2020) {
        const yearsLeft = Math.max(0, (year + 8) - CURRENT_YEAR);
        return {
          status: 'supported',
          headline: 'Your Chromebook is receiving security updates.',
          detail: `Chromebooks from ${year} are still within Google's support window. Google supports Chromebooks for about 8 years from the device's first release. Your Chromebook should continue receiving automatic ChromeOS updates — these include security patches and happen in the background. You can check your expiration date in Settings → About ChromeOS → Additional details.`,
          yearsLeft,
          recommendation: 'keep',
          recommendationText: `Keep it. Your Chromebook has roughly ${yearsLeft} more year${yearsLeft !== 1 ? 's' : ''} of support. Chromebooks are generally low-maintenance — just keep auto-updates enabled.`,
        };
      }
      if (year >= 2018) {
        const yearsLeft = Math.max(0, (year + 8) - CURRENT_YEAR);
        return {
          status: yearsLeft > 0 ? 'supported' : 'limited',
          headline: yearsLeft > 0
            ? 'Your Chromebook is still receiving updates.'
            : 'Your Chromebook has recently reached or is near end of life.',
          detail: `Chromebooks from ${year} may still be in their 8-year support window, or may have just passed it. The easiest way to check is to open Settings → About ChromeOS → Additional details and look for your "Auto Update Expiration" date. After that date, ChromeOS stops receiving security updates.`,
          yearsLeft,
          recommendation: yearsLeft >= 2 ? 'keep' : 'plan',
          recommendationText: yearsLeft >= 2
            ? 'Keep it — but check your Auto Update Expiration date in Settings to know exactly when support ends.'
            : 'Plan to replace within 1–2 years. Your Chromebook\'s support is ending soon. Check the exact date in Settings → About ChromeOS.',
        };
      }
      if (year >= 2016) {
        return {
          status: 'limited',
          headline: 'Your Chromebook may have recently lost update support.',
          detail: `Chromebooks from ${year} are near or past Google's 8-year support window. Many 2016 Chromebooks reached their Auto Update Expiration date around 2024. Once updates stop, ChromeOS no longer receives security patches. Open Settings → About ChromeOS → Additional details to check your specific expiration date.`,
          recommendation: 'plan',
          recommendationText: 'Check your expiration date in Settings now. If it has passed, your Chromebook is no longer receiving security updates and you should plan to replace it.',
        };
      }
      return {
        status: 'unsupported',
        headline: 'Your Chromebook is no longer receiving security updates.',
        detail: `Chromebooks from ${year} have passed Google's 8-year support window and are no longer receiving ChromeOS security updates. While Chromebooks are generally safer than Windows PCs even when unsupported, an unpatched device is more vulnerable to new threats.`,
        recommendation: 'replace',
        recommendationText: 'Consider replacing when you\'re ready. Chromebooks are generally affordable — a new basic model starts around $200-$300 and will have years of support ahead.',
      };
    }

    default:
      return {
        status: 'limited',
        headline: 'We couldn\'t determine your device\'s support status.',
        detail: 'Please check the manufacturer\'s website for your device\'s specific support end date.',
        recommendation: 'plan',
        recommendationText: 'Check your device manufacturer\'s website for support information.',
      };
  }
}

const statusConfig: Record<SupportStatus, { color: string; bg: string; border: string; icon: React.ReactNode; label: string }> = {
  supported: {
    color: 'text-green-700 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-200 dark:border-green-800',
    icon: <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />,
    label: 'Supported',
  },
  limited: {
    color: 'text-yellow-700 dark:text-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-950/20',
    border: 'border-yellow-200 dark:border-yellow-700',
    icon: <AlertTriangle className="h-5 w-5 text-yellow-600" aria-hidden="true" />,
    label: 'Limited Support',
  },
  unsupported: {
    color: 'text-red-700 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950/20',
    border: 'border-red-200 dark:border-red-700',
    icon: <XCircle className="h-5 w-5 text-red-600" aria-hidden="true" />,
    label: 'No Longer Supported',
  },
};

const YEARS = Array.from({ length: 11 }, (_, i) => 2015 + i); // 2015–2025

export default function DeviceAgeChecker() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [result, setResult] = useState<SupportResult | null>(null);

  const handleDeviceSelect = (id: DeviceType) => {
    setDeviceType(id);
    setYear(null);
    setResult(null);
    setStep(2);
  };

  const handleYearSelect = (y: number) => {
    setYear(y);
    if (deviceType) {
      setResult(getResult(deviceType, y));
      setStep(3);
    }
  };

  const reset = () => {
    setStep(1);
    setDeviceType(null);
    setYear(null);
    setResult(null);
  };

  const selectedDevice = DEVICE_TYPES.find(d => d.id === deviceType);

  return (
    <>
      <SEOHead
        title="Device Age & Security Check — Is Your Device Still Safe? | TekSure"
        description="Find out if your iPhone, Android, Mac, Windows PC, or tablet is still receiving security updates — and what to do if it isn't."
        path="/tools/device-age-checker"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Device Age &amp; Security Check
            </h1>
            <p className="text-muted-foreground text-lg">
              Find out if your device is still receiving security updates — and what that means for you. Takes about 30 seconds.
            </p>
          </div>
        </section>

        <div className="container py-10 pb-24 max-w-2xl">
          {/* Step indicators */}
          <div className="flex items-center gap-2 mb-10 text-sm">
            {[
              { n: 1, label: 'Device type' },
              { n: 2, label: 'Year purchased' },
              { n: 3, label: 'Results' },
            ].map(s => (
              <div key={s.n} className="flex items-center gap-2">
                <div
                  className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step === s.n
                      ? 'bg-primary text-primary-foreground'
                      : step > s.n
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step > s.n ? <CheckCircle className="h-4 w-4" aria-hidden="true" /> : s.n}
                </div>
                <span className={step === s.n ? 'font-medium' : 'text-muted-foreground'}>{s.label}</span>
                {s.n < 3 && <span className="text-muted-foreground/40 ml-1">›</span>}
              </div>
            ))}
          </div>

          {/* Step 1: Device type */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">What type of device do you have?</h2>
              <p className="text-muted-foreground mb-6 text-sm">Select the one that matches your device.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {DEVICE_TYPES.map(dt => (
                  <button
                    key={dt.id}
                    type="button"
                    onClick={() => handleDeviceSelect(dt.id)}
                    className="flex items-center gap-4 p-4 rounded-2xl border-2 border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors text-left min-h-[72px]"
                  >
                    <span className="text-3xl leading-none flex-shrink-0" aria-hidden="true">{dt.emoji}</span>
                    <div>
                      <p className="font-semibold text-sm">{dt.label}</p>
                      <p className="text-xs text-muted-foreground">{dt.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Year */}
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
                <span className="text-4xl" aria-hidden="true">{selectedDevice.emoji}</span>
                <div>
                  <h2 className="text-xl font-semibold">When did you get your {selectedDevice.label}?</h2>
                  <p className="text-sm text-muted-foreground">Choose the year you purchased it or received it.</p>
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {YEARS.map(y => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => handleYearSelect(y)}
                    className={`py-3 px-4 rounded-2xl border-2 text-sm font-semibold transition-colors min-h-[52px] ${
                      year === y
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-card hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Not sure of the exact year? Your best guess is fine — even an approximate year gives a useful answer.
              </p>
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && result && selectedDevice && year && (
            <div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                aria-label="Go back to year selection"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl" aria-hidden="true">{selectedDevice.emoji}</span>
                <p className="text-sm text-muted-foreground">
                  {selectedDevice.label} purchased around {year}
                </p>
              </div>

              {/* Status card */}
              {(() => {
                const sc = statusConfig[result.status];
                return (
                  <div className={`rounded-2xl border-2 p-6 mb-5 ${sc.bg} ${sc.border}`}>
                    <div className="flex items-center gap-3 mb-3">
                      {sc.icon}
                      <span className={`font-bold text-base ${sc.color}`}>{sc.label}</span>
                      {result.yearsLeft !== undefined && result.yearsLeft > 0 && (
                        <Badge variant="outline" className={`${sc.color} border-current text-xs`}>
                          ~{result.yearsLeft} year{result.yearsLeft !== 1 ? 's' : ''} left
                        </Badge>
                      )}
                    </div>
                    <h3 className={`font-semibold text-lg mb-2 ${sc.color}`}>{result.headline}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{result.detail}</p>
                  </div>
                );
              })()}

              {/* Recommendation */}
              <div className="rounded-2xl border border-border bg-card p-5 mb-5">
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                  Our recommendation
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{result.recommendationText}</p>
              </div>

              {/* Security risks for unsupported */}
              {result.status !== 'supported' && (
                <div className="rounded-2xl border border-border bg-muted/40 p-5 mb-5">
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden="true" />
                    What are the risks of an unsupported device?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">•</span>
                      <span>Security holes discovered after the last update are never fixed, making you more vulnerable to viruses and hackers.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">•</span>
                      <span>Banking and shopping apps may stop working properly as they require newer software.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">•</span>
                      <span>Personal data (passwords, photos, financial details) stored on the device is at higher risk.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">•</span>
                      <span>Some websites and services may stop working as they require modern security standards.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Safety tips for everyone */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 mb-8">
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" aria-hidden="true" />
                  Good habits that matter more than hardware age
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Even older devices can be safer with these habits in place:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Use strong, unique passwords — or a password manager to handle them for you.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Turn on two-step verification (2FA) for your email and banking apps.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Keep your apps updated — even if the operating system can't be updated, apps often can.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Avoid clicking suspicious links in texts or emails, even if they look real.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Only use trusted Wi-Fi networks for banking and shopping — avoid public Wi-Fi for sensitive tasks.</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={reset}
                className="w-full py-3 px-4 rounded-2xl border-2 border-border text-sm font-medium hover:border-primary hover:bg-primary/5 transition-colors"
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
