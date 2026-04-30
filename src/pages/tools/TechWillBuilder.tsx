import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollText, Printer, ChevronRight } from 'lucide-react';

interface Will {
  ownerName: string;
  date: string;
  trustedPerson: string;
  trustedRelation: string;
  trustedPhone: string;
  trustedEmail: string;
  applePresent: boolean;
  appleEmail: string;
  googlePresent: boolean;
  googleEmail: string;
  bankName: string;
  carrierName: string;
  primaryDevice: string;
  passwordManager: string;
  passwordManagerWhere: string;
  pinHint: string;
  twoFactorWhere: string;
  socialAccounts: string;
  subscriptions: string;
  wishesPhotos: string;
  wishesAccounts: string;
  wishesSocialMedia: string;
  notes: string;
}

const blank: Will = {
  ownerName: '', date: '',
  trustedPerson: '', trustedRelation: '', trustedPhone: '', trustedEmail: '',
  applePresent: false, appleEmail: '',
  googlePresent: false, googleEmail: '',
  bankName: '', carrierName: '', primaryDevice: '',
  passwordManager: '', passwordManagerWhere: '',
  pinHint: '', twoFactorWhere: '',
  socialAccounts: '', subscriptions: '',
  wishesPhotos: '', wishesAccounts: '', wishesSocialMedia: '',
  notes: '',
};

export default function TechWillBuilder() {
  const [w, setW] = useState<Will>(blank);
  const set = <K extends keyof Will>(k: K, v: Will[K]) => setW(s => ({ ...s, [k]: v }));

  const printIt = () => window.print();

  return (
    <>
      <SEOHead
        title="Tech Will Builder — Plan your digital legacy"
        description="Build a printable one-page tech will: who handles your phone, accounts, photos, and subscriptions if something happens to you. Free, plain-English, US-focused."
        path="/tools/tech-will-builder"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <ScrollText className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Tech Will Builder</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A one-page plan for your digital life. Print it, sign it, and put it where the right person will find it.
            </p>
            <p className="text-sm text-muted-foreground mt-3">Not a legal will — pair this with a real one through an attorney.</p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 print:hidden">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Tech Will Builder' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="own">Your full name</Label><Input id="own" value={w.ownerName} onChange={(e) => set('ownerName', e.target.value)} className="mt-1" /></div>
                <div><Label htmlFor="date">Date</Label><Input id="date" type="date" value={w.date} onChange={(e) => set('date', e.target.value)} className="mt-1" /></div>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-sm font-semibold mb-3">Who do you trust to handle this?</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="tp">Trusted person</Label><Input id="tp" value={w.trustedPerson} onChange={(e) => set('trustedPerson', e.target.value)} className="mt-1" /></div>
                  <div><Label htmlFor="tr">Relation</Label><Input id="tr" placeholder="e.g. daughter" value={w.trustedRelation} onChange={(e) => set('trustedRelation', e.target.value)} className="mt-1" /></div>
                  <div><Label htmlFor="tph">Phone</Label><Input id="tph" value={w.trustedPhone} onChange={(e) => set('trustedPhone', e.target.value)} className="mt-1" /></div>
                  <div><Label htmlFor="te">Email</Label><Input id="te" value={w.trustedEmail} onChange={(e) => set('trustedEmail', e.target.value)} className="mt-1" /></div>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-sm font-semibold mb-3">Your devices and accounts</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="dev">Primary phone / computer</Label><Input id="dev" placeholder="iPhone 13, etc." value={w.primaryDevice} onChange={(e) => set('primaryDevice', e.target.value)} className="mt-1" /></div>
                  <div><Label htmlFor="ph">Phone carrier</Label><Input id="ph" value={w.carrierName} onChange={(e) => set('carrierName', e.target.value)} className="mt-1" /></div>
                  <div><Label htmlFor="ap">Apple ID email</Label><Input id="ap" value={w.appleEmail} onChange={(e) => set('appleEmail', e.target.value)} className="mt-1" /></div>
                  <div><Label htmlFor="go">Google account email</Label><Input id="go" value={w.googleEmail} onChange={(e) => set('googleEmail', e.target.value)} className="mt-1" /></div>
                  <div className="sm:col-span-2"><Label htmlFor="bk">Main bank / credit union</Label><Input id="bk" value={w.bankName} onChange={(e) => set('bankName', e.target.value)} className="mt-1" /></div>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-sm font-semibold mb-3">How to get in</p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pm">Password manager I use</Label>
                    <Input id="pm" placeholder="e.g. 1Password, Bitwarden, Apple Passwords" value={w.passwordManager} onChange={(e) => set('passwordManager', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="pmw">Where the master password is kept</Label>
                    <Input id="pmw" placeholder="e.g. with my attorney, or in the safe" value={w.passwordManagerWhere} onChange={(e) => set('passwordManagerWhere', e.target.value)} className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">Never write the actual master password here. Just where to find it.</p>
                  </div>
                  <div>
                    <Label htmlFor="2fa">Where my 2-factor / backup codes are</Label>
                    <Input id="2fa" placeholder="e.g. printed in the lockbox" value={w.twoFactorWhere} onChange={(e) => set('twoFactorWhere', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="pin">Phone unlock hint</Label>
                    <Input id="pin" placeholder="e.g. our anniversary year" value={w.pinHint} onChange={(e) => set('pinHint', e.target.value)} className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-1">A hint only you and your trusted person would understand. Not the actual PIN.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-sm font-semibold mb-3">Accounts and subscriptions</p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="soc">Social media accounts</Label>
                    <Textarea id="soc" placeholder="e.g. Facebook, Instagram, LinkedIn" value={w.socialAccounts} onChange={(e) => set('socialAccounts', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="sub">Recurring subscriptions to cancel</Label>
                    <Textarea id="sub" placeholder="e.g. Netflix, Hulu, AARP, gym, magazines" value={w.subscriptions} onChange={(e) => set('subscriptions', e.target.value)} className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-sm font-semibold mb-3">My wishes</p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="wp">What I want done with photos and videos</Label>
                    <Textarea id="wp" placeholder="e.g. download all from iCloud and share with the family" value={w.wishesPhotos} onChange={(e) => set('wishesPhotos', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="wa">Accounts to close, transfer, or memorialize</Label>
                    <Textarea id="wa" placeholder="e.g. memorialize Facebook, close Twitter" value={w.wishesAccounts} onChange={(e) => set('wishesAccounts', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="ws">A message I want shared on social media (optional)</Label>
                    <Textarea id="ws" value={w.wishesSocialMedia} onChange={(e) => set('wishesSocialMedia', e.target.value)} className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-5">
                <Label htmlFor="nt">Anything else my trusted person should know</Label>
                <Textarea id="nt" value={w.notes} onChange={(e) => set('notes', e.target.value)} className="mt-1 min-h-[100px]" />
              </div>

              <Button onClick={printIt} size="lg" className="w-full sm:w-auto gap-2">
                <Printer className="h-5 w-5" /> Print my tech will
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5 text-sm">
              <p className="font-semibold mb-2">Where to keep it</p>
              <ul className="space-y-1.5 text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>One copy in a fireproof lockbox at home.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>One copy with the trusted person you named.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>If you have an attorney, a third copy with them alongside your legal will.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Update it once a year — accounts and devices change.</span></li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/account-after-loss" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Account After Loss</p>
                <p className="text-xs text-muted-foreground mt-0.5">When you are the trusted person.</p>
              </Link>
              <Link to="/tools/family-tech-roundtable" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Family Tech Roundtable</p>
                <p className="text-xs text-muted-foreground mt-0.5">Talk through this with the family.</p>
              </Link>
              <Link to="/tools/data-broker-removal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Data Broker Removal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Clean up your digital trail.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Nothing you fill in leaves your device. We do not store, send, or save any of this.
          </p>
        </div>

        {/* Print view */}
        <div className="hidden print:block px-8 py-6 text-sm">
          <header className="border-b-2 border-black pb-3 mb-5">
            <h1 className="text-2xl font-bold">My Tech Will</h1>
            <p>{w.ownerName || '________________'}</p>
            <p className="text-xs text-gray-600">{w.date ? new Date(w.date).toLocaleDateString('en-US', { dateStyle: 'long' }) : '_______________'}</p>
            <p className="text-xs text-gray-600 italic mt-2">Not a legal document — a practical guide for the person handling my digital life.</p>
          </header>

          <section className="mb-4 break-inside-avoid">
            <h2 className="font-bold uppercase tracking-wider text-xs mb-1">Trusted person</h2>
            <p>{w.trustedPerson || '________________'} ({w.trustedRelation || '________________'})</p>
            <p>Phone: {w.trustedPhone || '________________'} • Email: {w.trustedEmail || '________________'}</p>
          </section>

          <section className="mb-4 break-inside-avoid">
            <h2 className="font-bold uppercase tracking-wider text-xs mb-1">Devices &amp; main accounts</h2>
            <p>Primary device: {w.primaryDevice || '________________'}</p>
            <p>Phone carrier: {w.carrierName || '________________'}</p>
            <p>Apple ID: {w.appleEmail || '________________'}</p>
            <p>Google account: {w.googleEmail || '________________'}</p>
            <p>Main bank: {w.bankName || '________________'}</p>
          </section>

          <section className="mb-4 break-inside-avoid">
            <h2 className="font-bold uppercase tracking-wider text-xs mb-1">How to get in</h2>
            <p>Password manager: {w.passwordManager || '________________'}</p>
            <p>Master password is kept: {w.passwordManagerWhere || '________________'}</p>
            <p>2-factor / backup codes: {w.twoFactorWhere || '________________'}</p>
            <p>Phone unlock hint: {w.pinHint || '________________'}</p>
          </section>

          <section className="mb-4 break-inside-avoid">
            <h2 className="font-bold uppercase tracking-wider text-xs mb-1">Accounts &amp; subscriptions</h2>
            <p className="font-semibold">Social media:</p><p className="whitespace-pre-wrap">{w.socialAccounts || '—'}</p>
            <p className="font-semibold mt-2">Cancel:</p><p className="whitespace-pre-wrap">{w.subscriptions || '—'}</p>
          </section>

          <section className="mb-4 break-inside-avoid">
            <h2 className="font-bold uppercase tracking-wider text-xs mb-1">My wishes</h2>
            <p className="font-semibold">Photos:</p><p className="whitespace-pre-wrap">{w.wishesPhotos || '—'}</p>
            <p className="font-semibold mt-2">Accounts:</p><p className="whitespace-pre-wrap">{w.wishesAccounts || '—'}</p>
            {w.wishesSocialMedia && <><p className="font-semibold mt-2">Social media message:</p><p className="whitespace-pre-wrap">{w.wishesSocialMedia}</p></>}
          </section>

          {w.notes && (
            <section className="mb-4 break-inside-avoid">
              <h2 className="font-bold uppercase tracking-wider text-xs mb-1">Other notes</h2>
              <p className="whitespace-pre-wrap">{w.notes}</p>
            </section>
          )}

          <section className="mt-8 pt-4 border-t border-black break-inside-avoid">
            <p>Signed: ____________________________________________</p>
            <p className="mt-3">Date: ______________________</p>
          </section>

          <footer className="mt-6 text-xs text-gray-600">Built free at TekSure.com — pair this with a real legal will.</footer>
        </div>
      </main>

      <Footer />
    </>
  );
}
