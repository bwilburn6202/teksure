import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Wifi,
  Eye,
  EyeOff,
  Download,
  Printer,
  ClipboardCheck,
  Copy,
  Lock,
  Info,
  AlertTriangle,
  Lightbulb,
  QrCode as QrIcon,
  Smartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { encodeText, drawToCanvas, toSvgPath, type Ecc } from '@/lib/qrcode';

/* ── Types ───────────────────────────────── */
type Security = 'WPA' | 'WPA3' | 'WEP' | 'nopass';

interface Form {
  ssid: string;
  password: string;
  security: Security;
  hidden: boolean;
}

/* ── WiFi QR string encoding ─────────────── */
// The "WIFI:" URI is recognised by iOS and Android camera apps.
// Special characters (\ ; , : ") inside a field must be escaped with a backslash.
function escapeWifiField(value: string): string {
  return value.replace(/([\\;,":])/g, '\\$1');
}

function buildWifiString(form: Form): string {
  // WPA and WPA3 use the same "WPA" token in the URI spec.
  const sec =
    form.security === 'nopass'
      ? 'nopass'
      : form.security === 'WEP'
        ? 'WEP'
        : 'WPA';
  const ssid = escapeWifiField(form.ssid);
  const pwd =
    form.security === 'nopass' ? '' : escapeWifiField(form.password);
  const hidden = form.hidden ? 'H:true;' : '';
  return `WIFI:T:${sec};S:${ssid};P:${pwd};${hidden};`;
}

/* ── Security options — plain-English labels ── */
const SECURITY_OPTIONS: { value: Security; label: string; hint: string }[] = [
  { value: 'WPA',    label: 'WPA / WPA2 (most common)',   hint: 'Almost all home WiFi uses this' },
  { value: 'WPA3',   label: 'WPA3 (newer routers)',       hint: 'Newest, most secure — check your router label' },
  { value: 'WEP',    label: 'WEP (old, rarely used)',     hint: 'Only on very old equipment' },
  { value: 'nopass', label: 'None — open network',        hint: 'Guest networks without a password' },
];

export default function WifiQrGenerator() {
  const [form, setForm] = useState<Form>({
    ssid: '',
    password: '',
    security: 'WPA',
    hidden: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const printCanvasRef = useRef<HTMLCanvasElement>(null);

  const wifiString = useMemo(() => buildWifiString(form), [form]);
  const hasContent = form.ssid.trim().length > 0;

  // "Quartile" error correction keeps the code scannable even when printed,
  // photographed, or lightly smudged — a better choice than Medium for a
  // sign that will live in the physical world.
  const ecLevel: Ecc = 'QUARTILE';

  // Re-encode whenever anything changes.
  const qr = useMemo(() => {
    if (!hasContent) return null;
    try {
      return encodeText(wifiString, ecLevel);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('QR encoding failed:', err);
      return null;
    }
  }, [wifiString, hasContent, ecLevel]);

  // Paint onto the hidden canvases used for PNG export and print layout.
  useEffect(() => {
    if (!qr) return;
    if (previewCanvasRef.current) drawToCanvas(qr, previewCanvasRef.current, 10, 4);
    if (printCanvasRef.current) drawToCanvas(qr, printCanvasRef.current, 14, 4);
  }, [qr]);

  const svg = useMemo(() => {
    if (!qr) return null;
    return toSvgPath(qr, 4);
  }, [qr]);

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function downloadPng() {
    if (!qr) return;
    // Fresh high-resolution canvas so the saved image is crisp.
    const out = document.createElement('canvas');
    drawToCanvas(qr, out, 16, 4);
    out.toBlob(blob => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `wifi-${sanitizeFilename(form.ssid || 'network')}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
  }

  async function copyImage() {
    if (!qr) return;
    // Not every browser supports copying images to the clipboard — fall back gracefully.
    if (!('ClipboardItem' in window) || !navigator.clipboard?.write) {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 3000);
      return;
    }
    try {
      const out = document.createElement('canvas');
      drawToCanvas(qr, out, 16, 4);
      const blob: Blob = await new Promise((resolve, reject) =>
        out.toBlob(b => (b ? resolve(b) : reject(new Error('blob failed'))), 'image/png'),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ClipboardItemCtor = (window as any).ClipboardItem;
      await navigator.clipboard.write([
        new ClipboardItemCtor({ 'image/png': blob }),
      ]);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 3000);
    }
  }

  function printPage() {
    window.print();
  }

  const securityLabel =
    SECURITY_OPTIONS.find(o => o.value === form.security)?.label ?? '';

  return (
    <>
      <SEOHead
        title="WiFi QR Code Generator | TekSure"
        description="Create a scannable QR code so guests can join your WiFi in one tap — no typing the password. 100% private, runs in your browser."
        path="/tools/wifi-qr-generator"
      />
      <Navbar />
      <main
        id="main-content"
        className="container py-12 min-h-[80vh] max-w-3xl mx-auto print:py-0 print:max-w-none"
      >
        {/* ─────── Print-only sign ─────── */}
        <div className="hidden print:block">
          <div className="text-center py-12 px-8">
            <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
            <p className="text-2xl mb-10 text-gray-700">Scan here to join our WiFi</p>
            {qr && (
              <div className="flex justify-center mb-10">
                <canvas
                  ref={printCanvasRef}
                  className="border-4 border-black p-4 bg-white"
                  aria-label="WiFi QR code"
                />
              </div>
            )}
            <div className="text-2xl space-y-3 text-gray-800">
              <p><strong>Network:</strong> {form.ssid || '—'}</p>
              {form.security !== 'nopass' && form.password && (
                <p><strong>Password:</strong> {form.password}</p>
              )}
              <p className="text-lg text-gray-600 mt-8">
                Don't have a QR scanner? Open your phone's camera and point it at the code.
              </p>
            </div>
          </div>
        </div>

        {/* ─────── Screen view ─────── */}
        <div className="print:hidden">
          {/* Hero */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-primary/10 text-primary mb-5">
              <Wifi className="h-12 w-12" aria-hidden="true" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
              Share Your WiFi the Easy Way
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
              Make a QR code your guests can scan to join your WiFi in one tap — no
              more dictating a long, tricky password.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" aria-hidden="true" />
              <span>
                100% private — we never see your WiFi password. This runs entirely in your browser.
              </span>
            </div>
          </div>

          {/* Form */}
          <Card className="mb-6">
            <CardContent className="p-5 sm:p-6 space-y-6">
              <div>
                <Label htmlFor="ssid" className="block text-lg font-semibold mb-2">
                  Network name (SSID)
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  The name that shows up when you look for WiFi — usually printed on the
                  bottom of your router.
                </p>
                <Input
                  id="ssid"
                  value={form.ssid}
                  onChange={e => update('ssid', e.target.value)}
                  placeholder="e.g. Smith Family WiFi"
                  className="text-base sm:text-lg h-12"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-lg font-semibold mb-2">
                  Password
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Type it exactly as it appears on your router. Capital letters matter.
                </p>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={e => update('password', e.target.value)}
                    placeholder={
                      form.security === 'nopass'
                        ? 'Not needed — open network'
                        : 'Your WiFi password'
                    }
                    disabled={form.security === 'nopass'}
                    className="text-base sm:text-lg h-12 pr-14"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(s => !s)}
                    className="absolute right-1 top-1 h-10 w-12 inline-flex items-center justify-center rounded-md hover:bg-muted text-muted-foreground disabled:opacity-40"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    disabled={form.security === 'nopass'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="security" className="block text-lg font-semibold mb-2">
                  Security type
                </Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Not sure? Leave it on the first one — that's what almost every home network uses.
                </p>
                <Select
                  value={form.security}
                  onValueChange={v => update('security', v as Security)}
                >
                  <SelectTrigger id="security" className="text-base h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SECURITY_OPTIONS.map(o => (
                      <SelectItem key={o.value} value={o.value} className="text-base py-3">
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{o.label}</span>
                          <span className="text-xs text-muted-foreground">{o.hint}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Checkbox
                  id="hidden"
                  checked={form.hidden}
                  onCheckedChange={v => update('hidden', v === true)}
                  className="mt-1 h-5 w-5"
                />
                <div>
                  <Label htmlFor="hidden" className="text-base font-semibold cursor-pointer">
                    This is a hidden network
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Only check this if your WiFi doesn't show up in the normal list — most
                    home networks aren't hidden.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="mb-6">
            <CardContent className="p-5 sm:p-6">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <QrIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                Your WiFi QR code
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                The code updates automatically as you type.
              </p>

              {hasContent && qr && svg ? (
                <>
                  <div className="flex justify-center">
                    <div className="rounded-xl bg-white p-5 border-2 border-border shadow-sm inline-block">
                      {/* SVG for crisp on-screen display */}
                      <svg
                        viewBox={`0 0 ${svg.size} ${svg.size}`}
                        width={280}
                        height={280}
                        role="img"
                        aria-label="Scannable QR code for your WiFi network"
                        className="block"
                      >
                        <rect width={svg.size} height={svg.size} fill="#FFFFFF" />
                        <path d={svg.path} fill="#000000" />
                      </svg>
                      {/* Hidden canvas backing for PNG export / clipboard */}
                      <canvas ref={previewCanvasRef} className="hidden" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Large readable fallback for anyone without a phone handy */}
                  <div className="mt-6 rounded-xl bg-muted/50 border border-border p-5">
                    <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold mb-3">
                      If they can't scan — read out loud:
                    </p>
                    <dl className="grid gap-3 text-xl">
                      <div>
                        <dt className="text-sm text-muted-foreground">Network name</dt>
                        <dd className="font-mono font-semibold break-all">{form.ssid}</dd>
                      </div>
                      {form.security !== 'nopass' && form.password && (
                        <div>
                          <dt className="text-sm text-muted-foreground">Password</dt>
                          <dd className="font-mono font-semibold break-all">{form.password}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-sm text-muted-foreground">Security</dt>
                        <dd className="text-base">{securityLabel}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button size="lg" onClick={downloadPng} className="gap-2">
                      <Download className="h-5 w-5" aria-hidden="true" /> Download as PNG
                    </Button>
                    <Button size="lg" variant="outline" onClick={printPage} className="gap-2">
                      <Printer className="h-5 w-5" aria-hidden="true" /> Print sign
                    </Button>
                    <Button size="lg" variant="outline" onClick={copyImage} className="gap-2">
                      {copyStatus === 'copied' ? (
                        <>
                          <ClipboardCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-5 w-5" aria-hidden="true" /> Copy as image
                        </>
                      )}
                    </Button>
                  </div>
                  {copyStatus === 'error' && (
                    <p className="mt-3 text-sm text-amber-700 dark:text-amber-400">
                      Your browser didn't allow copying images. Try downloading the PNG instead.
                    </p>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                  <QrIcon className="h-16 w-16 mb-3 opacity-40" aria-hidden="true" />
                  <p className="text-base">Enter your network name above to see your QR code.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="mb-6 border-primary/30 bg-primary/5">
            <CardContent className="p-5">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />
                How your guests scan it
              </h3>
              <ol className="space-y-3 text-base">
                {[
                  'Ask them to open their phone\'s regular camera app.',
                  'Point the camera at the QR code — no button to press, just hold it steady.',
                  'A small yellow bar will pop up saying something like "Join WiFi network". Tap it.',
                  'They\'re on — no typing required.',
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-muted-foreground mt-4 flex items-start gap-2">
                <Info className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                Most iPhones and Android phones from the last 7 or 8 years can do this
                straight from the Camera app — no extra app needed.
              </p>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card className="mb-6">
            <CardContent className="p-5">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                If it doesn't scan
              </h3>
              <ul className="space-y-2 text-base">
                <li className="flex gap-2"><span className="text-primary">•</span> Turn on more lights — the camera needs to see it clearly.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Hold the phone closer, then slowly pull it back until the whole code fits on the screen.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Make sure the regular <em>Camera</em> app is open — not FaceTime or a photo editor.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> On older Android phones, try the Google Lens app or search "QR scanner" in the Play Store.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> If you printed it, make sure the paper isn't wrinkled or folded across the code.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Double-check the password above — one wrong letter will stop it working.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="mb-6 border-2 border-green-300 bg-green-50 dark:bg-green-950/30 dark:border-green-800">
            <CardContent className="p-5 flex gap-3">
              <Lock className="h-6 w-6 text-green-700 dark:text-green-400 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-green-900 dark:text-green-200 mb-1">
                  Your password never leaves this page
                </p>
                <p className="text-sm text-green-900/90 dark:text-green-200/90">
                  The QR code is built right inside your web browser. Nothing you type here
                  is uploaded, stored, or shared — you could even unplug your internet and
                  this page would still work.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Safety reminder */}
          <Card className="mb-6 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">
                  A quick safety thought
                </p>
                <p className="text-sm text-amber-900/90 dark:text-amber-200/90">
                  Anyone who can see the printed code can join your network. Keep the sign
                  in places you trust — inside your home, at a family gathering, or a
                  private office — rather than in a shop window. If you'd like a separate
                  password just for visitors, most modern routers have a "guest network"
                  option in their settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ── Helpers ─────────────────────────────── */
function sanitizeFilename(name: string): string {
  return (
    name
      .replace(/[^a-z0-9\-_]+/gi, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase() || 'network'
  );
}
