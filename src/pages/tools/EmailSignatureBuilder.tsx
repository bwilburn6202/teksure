import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Copy, Check, ChevronRight } from 'lucide-react';

interface SigForm {
  fullName: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  quote: string;
}

const blank: SigForm = {
  fullName: '',
  title: '',
  phone: '',
  email: '',
  website: '',
  address: '',
  quote: '',
};

export default function EmailSignatureBuilder() {
  const [form, setForm] = useState<SigForm>(blank);
  const [copied, setCopied] = useState(false);

  const set = <K extends keyof SigForm>(k: K, v: SigForm[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const signature = useMemo(() => {
    const lines: string[] = [];
    const name = form.fullName.trim();
    const title = form.title.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const website = form.website.trim();
    const address = form.address.trim();
    const quote = form.quote.trim();

    if (name) lines.push(name);
    if (title) lines.push(title);
    if (lines.length > 0) lines.push('—');
    if (phone) lines.push(`Phone: ${phone}`);
    if (email) lines.push(`Email: ${email}`);
    if (website) lines.push(`Web: ${website}`);
    if (address) lines.push(address);
    if (quote) {
      lines.push('');
      lines.push(`"${quote}"`);
    }

    return lines.join('\n');
  }, [form]);

  const copySignature = async () => {
    if (!signature) return;
    try {
      await navigator.clipboard.writeText(signature);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const hasContent = signature.trim().length > 0;

  return (
    <>
      <SEOHead
        title="Email Signature Builder — Free signature for Gmail, Apple Mail, Outlook"
        description="Make a clean email signature in under a minute. Fill in your name and contact details, copy the result, and paste it into Gmail, Apple Mail, or Outlook. Free, no sign-up."
        path="/tools/email-signature-builder"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Email Signature Builder</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fill in a few boxes. Copy the signature. Paste it into your email program. That is the whole tool.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Badge variant="secondary">Free</Badge>
              <Badge variant="secondary">No sign-up</Badge>
              <Badge variant="secondary">Works in Gmail, Apple Mail, Outlook</Badge>
            </div>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Email Signature Builder' },
            ]}
          />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-5">
              <div>
                <p className="text-sm font-semibold mb-3">Your details</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fn">Full name</Label>
                    <Input
                      id="fn"
                      placeholder="Mary Johnson"
                      value={form.fullName}
                      onChange={(e) => set('fullName', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ti">Title (optional)</Label>
                    <Input
                      id="ti"
                      placeholder="Retired Teacher, Grandmother of 4"
                      value={form.title}
                      onChange={(e) => set('title', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ph">Phone (optional)</Label>
                    <Input
                      id="ph"
                      placeholder="(555) 123-4567"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="em">Email (optional)</Label>
                    <Input
                      id="em"
                      placeholder="mary@example.com"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ws">Website (optional)</Label>
                    <Input
                      id="ws"
                      placeholder="maryskitchen.com"
                      value={form.website}
                      onChange={(e) => set('website', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ad">Address (optional)</Label>
                    <Input
                      id="ad"
                      placeholder="Tampa, FL"
                      value={form.address}
                      onChange={(e) => set('address', e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      A city and state is plenty. You do not need a full street address.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="qt">Favorite quote (optional)</Label>
                  <Textarea
                    id="qt"
                    placeholder="Be kind whenever possible. It is always possible. — Dalai Lama"
                    value={form.quote}
                    onChange={(e) => set('quote', e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Keep it short — one or two lines reads best.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold">Your signature preview</p>
                  <Button
                    onClick={copySignature}
                    disabled={!hasContent}
                    size="sm"
                    className="gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copy signature
                      </>
                    )}
                  </Button>
                </div>
                <pre className="bg-muted/50 border border-border rounded-md p-4 text-sm whitespace-pre-wrap font-sans min-h-[120px]">
                  {hasContent
                    ? signature
                    : 'Start typing above and your signature will appear here.'}
                </pre>
                <p className="text-xs text-muted-foreground mt-2">
                  Nothing you fill in leaves your device. We do not save or send any of this.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">Install in Gmail</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use these steps on a computer. Once it is set, every new Gmail message will include the signature.
              </p>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                <li>Copy your signature using the button above.</li>
                <li>Open Gmail at <span className="font-mono">mail.google.com</span> and sign in.</li>
                <li>Click the gear icon in the top right, then click <span className="font-semibold">See all settings</span>.</li>
                <li>Stay on the <span className="font-semibold">General</span> tab and scroll down to <span className="font-semibold">Signature</span>.</li>
                <li>Click <span className="font-semibold">Create new</span>, give it a name like &quot;My signature,&quot; and click <span className="font-semibold">Create</span>.</li>
                <li>Click inside the big signature box and paste (Ctrl+V on Windows, Cmd+V on a Mac).</li>
                <li>Under <span className="font-semibold">Signature defaults</span>, pick your new signature for <span className="font-semibold">For New Emails Use</span> and <span className="font-semibold">On Reply/Forward Use</span>.</li>
                <li>Scroll to the bottom and click <span className="font-semibold">Save Changes</span>.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">Install in Apple Mail</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Apple Mail comes on iPhone, iPad, and Mac. Pick the one you use most.
              </p>

              <h3 className="font-semibold mt-2 mb-2">On iPhone or iPad</h3>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                <li>Copy your signature using the button above.</li>
                <li>Open the <span className="font-semibold">Settings</span> app.</li>
                <li>Scroll down and tap <span className="font-semibold">Apps</span>, then tap <span className="font-semibold">Mail</span>. (On older versions of iOS, scroll until you see Mail in the main list.)</li>
                <li>Tap <span className="font-semibold">Signature</span>.</li>
                <li>Pick <span className="font-semibold">Per Account</span> if you want a different signature for each email address, or <span className="font-semibold">All Accounts</span> for one shared signature.</li>
                <li>Tap inside the box, delete &quot;Sent from my iPhone,&quot; then paste your signature (tap and hold, then tap <span className="font-semibold">Paste</span>).</li>
                <li>Tap any other setting to save. There is no Save button — it saves on its own.</li>
              </ol>

              <h3 className="font-semibold mt-5 mb-2">On a Mac</h3>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                <li>Copy your signature using the button above.</li>
                <li>Open the <span className="font-semibold">Mail</span> app.</li>
                <li>From the top menu, click <span className="font-semibold">Mail</span>, then <span className="font-semibold">Settings</span> (older Macs say Preferences).</li>
                <li>Click the <span className="font-semibold">Signatures</span> tab at the top.</li>
                <li>Pick your email account on the left, then click the <span className="font-semibold">+</span> button under the middle column.</li>
                <li>Click in the right column and paste with Cmd+V.</li>
                <li>At the bottom, open <span className="font-semibold">Choose Signature</span> and pick the new one so it shows on every message.</li>
                <li>Close the Settings window. Mail saves on its own.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">Install in Outlook</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Outlook comes in a few flavors. The web version is the most common at home.
              </p>

              <h3 className="font-semibold mt-2 mb-2">Outlook on the web (outlook.com or office.com)</h3>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                <li>Copy your signature using the button above.</li>
                <li>Sign in at <span className="font-mono">outlook.com</span>.</li>
                <li>Click the <span className="font-semibold">gear icon</span> in the top right.</li>
                <li>In the panel that opens, type <span className="font-semibold">signature</span> in the search box, then click <span className="font-semibold">Email signature</span>.</li>
                <li>Click <span className="font-semibold">+ New signature</span>, give it a name, and paste your signature into the box.</li>
                <li>Under <span className="font-semibold">Select default signatures</span>, pick your signature for new messages and replies.</li>
                <li>Click <span className="font-semibold">Save</span> at the bottom.</li>
              </ol>

              <h3 className="font-semibold mt-5 mb-2">Outlook desktop app on Windows</h3>
              <ol className="space-y-2 text-sm list-decimal pl-5">
                <li>Copy your signature using the button above.</li>
                <li>Open <span className="font-semibold">Outlook</span>.</li>
                <li>Click <span className="font-semibold">File</span> in the top left, then <span className="font-semibold">Options</span>.</li>
                <li>Click <span className="font-semibold">Mail</span> on the left, then click the <span className="font-semibold">Signatures...</span> button.</li>
                <li>Click <span className="font-semibold">New</span>, type a name like &quot;My signature,&quot; and click <span className="font-semibold">OK</span>.</li>
                <li>Paste into the big box at the bottom with Ctrl+V.</li>
                <li>On the right, set <span className="font-semibold">New messages</span> and <span className="font-semibold">Replies/forwards</span> to your new signature.</li>
                <li>Click <span className="font-semibold">OK</span>, then <span className="font-semibold">OK</span> again to close Options.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5 text-sm">
              <p className="font-semibold mb-2">Quick Tips</p>
              <ul className="space-y-1.5 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Send a test email to yourself first to be sure the signature looks right.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Do not include your full street address — a city and state is enough.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Skip your social media profiles unless you really want strangers to find them.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Update the signature once a year, especially if your phone number changes.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link
                to="/tools/email-organization"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Email Organization</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tame the inbox once and for all.</p>
              </Link>
              <Link
                to="/tools/email-migration"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Email Migration</p>
                <p className="text-xs text-muted-foreground mt-0.5">Move from one email service to another.</p>
              </Link>
              <Link
                to="/tools/scam-message-decoder"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tell a real email from a fake one.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Built free at TekSure for our friends, parents, and grandparents.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
