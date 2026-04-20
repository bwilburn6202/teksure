import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Wifi, Copy, Check, Eye, EyeOff } from 'lucide-react';

type Security = 'WPA' | 'WEP' | 'nopass';

function encodeWifiString(ssid: string, password: string, security: Security): string {
  const escape = (s: string) => s.replace(/([\\;,":])/g, '\\$1');
  if (security === 'nopass') return `WIFI:T:nopass;S:${escape(ssid)};;`;
  return `WIFI:T:${security};S:${escape(ssid)};P:${escape(password)};;`;
}

export default function WifiQrGenerator() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [security, setSecurity] = useState<Security>('WPA');
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const wifiString = ssid.trim() ? encodeWifiString(ssid.trim(), password, security) : '';

  const copyToClipboard = () => {
    if (!wifiString) return;
    navigator.clipboard.writeText(wifiString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !wifiString) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Clear with placeholder message — no QR library loaded
    canvas.width = 200;
    canvas.height = 200;
    ctx.fillStyle = '#f4f4f5';
    ctx.fillRect(0, 0, 200, 200);
    ctx.fillStyle = '#71717a';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Copy the WiFi string', 100, 90);
    ctx.fillText('below into a QR app', 100, 108);
    ctx.fillText('to generate the code', 100, 126);
  }, [wifiString]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="WiFi QR Code Generator | TekSure"
        description="Create a WiFi connection string your guests can copy into a QR code app to join your network instantly — no typing passwords."
      />
      <Navbar />
      <main className="flex-1">
        <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'WiFi QR Generator' }]} />

        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Wifi className="h-4 w-4" />
              No app needed on your end
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              WiFi Connection String Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Fill in your WiFi details below. Copy the connection string and paste it into any
              free QR code app — your guests can then scan the QR code to join your network
              instantly, no password typing required.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 max-w-2xl space-y-6">
            {/* Form */}
            <Card className="border-2">
              <CardContent className="p-6 space-y-5">
                <div>
                  <Label htmlFor="ssid" className="text-base font-medium">
                    WiFi network name (SSID)
                  </Label>
                  <Input
                    id="ssid"
                    value={ssid}
                    onChange={(e) => setSsid(e.target.value)}
                    placeholder="e.g. HomeNetwork"
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Type it exactly as it appears — capitalisation matters.
                  </p>
                </div>

                <div>
                  <Label htmlFor="security" className="text-base font-medium">
                    Security type
                  </Label>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {(['WPA', 'WEP', 'nopass'] as Security[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSecurity(s)}
                        className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                          security === s
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-input hover:bg-muted'
                        }`}
                      >
                        {s === 'nopass' ? 'Open (no password)' : s}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Most home networks use WPA2 — choose WPA.
                  </p>
                </div>

                {security !== 'nopass' && (
                  <div>
                    <Label htmlFor="password" className="text-base font-medium">
                      WiFi password
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your WiFi password"
                        className="pr-10"
                      />
                      <button
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        type="button"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Output */}
            {wifiString && (
              <Card className="border-2 border-primary/30">
                <CardContent className="p-6">
                  <h2 className="font-bold text-lg mb-3">Your WiFi connection string</h2>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm break-all mb-4 select-all">
                    {wifiString}
                  </div>
                  <Button onClick={copyToClipboard} className="gap-2 w-full sm:w-auto">
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy to clipboard
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Instructions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-bold text-lg mb-4">How to turn this into a QR code</h2>
                <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Copy the connection string above using the Copy button.</li>
                  <li>
                    Open a free QR code generator — search "free QR code generator" in your
                    browser, or use your phone's built-in QR feature (on iPhone: open the
                    Camera app and look for a QR option in the menu).
                  </li>
                  <li>Paste the connection string into the text or URL field.</li>
                  <li>Download or print the QR code image.</li>
                  <li>
                    Guests point their phone camera at the QR code — they will be prompted to
                    join your network instantly.
                  </li>
                </ol>
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-sm text-amber-800 dark:text-amber-200">
                  <strong>Note:</strong> This string contains your WiFi password. Only share the
                  printed QR code with trusted guests, and do not paste this string into
                  untrusted websites.
                </div>
              </CardContent>
            </Card>

            {/* Device support */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-bold text-lg mb-3">Which devices can scan WiFi QR codes?</h2>
                <div className="grid gap-2 sm:grid-cols-2 text-sm">
                  {[
                    { device: 'iPhone / iPad', support: 'iOS 11 and newer — built-in Camera app' },
                    { device: 'Android phone', support: 'Android 10 and newer — built-in Camera app' },
                    { device: 'Older Android', support: 'Download "QR & Barcode Scanner" free app' },
                    { device: 'Windows PC', support: 'Settings → Network — or use phone to join' },
                  ].map((row) => (
                    <div key={row.device} className="flex items-start gap-2">
                      <Badge variant="outline" className="shrink-0 mt-0.5">{row.device}</Badge>
                      <span className="text-muted-foreground">{row.support}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
