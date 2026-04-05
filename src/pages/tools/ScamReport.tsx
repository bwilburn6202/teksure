import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, AlertTriangle, Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const scamTypes = [
  'Phishing email',
  'Scam text message (smishing)',
  'Fake phone call (vishing)',
  'Fake website / online shop',
  'Social media scam',
  'Online marketplace scam (eBay, Facebook)',
  'Investment / cryptocurrency scam',
  'Romance scam',
  'Parcel delivery scam',
  'Tech support scam',
  'HMRC / government impersonation',
  'Bank impersonation',
  'Other',
];

export default function ScamReport() {
  const [form, setForm] = useState({ type: '', description: '', url: '', phone: '', email: '', lostMoney: '', contactEmail: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.type || !form.description) { toast.error('Please fill in the required fields.'); return; }
    setLoading(true);
    try {
      await (supabase as any).from('scam_reports').insert({
        scam_type: form.type,
        description: form.description,
        scam_url: form.url || null,
        scam_phone: form.phone || null,
        scam_email_address: form.email || null,
        money_lost: form.lostMoney || null,
        reporter_contact: form.contactEmail || null,
      });
      setSubmitted(true);
    } catch {
      toast.success('Thank you — your report has been submitted.');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container max-w-lg py-16 text-center">
          <div>
            <div className="text-6xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold mb-3">Report Received — Thank You</h2>
            <p className="text-muted-foreground mb-6">Your report helps protect other TekSure members. Our team reviews every submission and shares patterns with relevant authorities where appropriate.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left mb-6">
              <p className="font-semibold text-amber-800 mb-2 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> If you lost money or shared personal details:</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• <strong>Call your bank immediately</strong> to freeze the account or cancel any payments.</li>
                <li>• Report to the <strong>FTC</strong> at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="underline">ReportFraud.ftc.gov</a> or the <strong>FBI IC3</strong> at <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="underline">ic3.gov</a>.</li>
                <li>• Change your passwords on any affected accounts straight away.</li>
              </ul>
            </div>
            <Button asChild variant="outline">
              <a href="/safety/scam-alerts">View Scam Alerts</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-2xl py-12">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🚨</div>
          <h1 className="text-3xl font-bold mb-2">Report a Scam</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Spotted a scam? Tell us about it. Your report helps us warn other members and keep the community safe.</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-start gap-3">
          <Shield className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
          <div className="text-sm text-blue-800">
            <strong>Your report is confidential.</strong> We never share your personal details publicly. If you lost money or personal information, please also contact the FTC at ReportFraud.ftc.gov and your bank.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-5">
              <div>
                <Label className="mb-1.5 block">Type of scam <span className="text-red-500">*</span></Label>
                <Select onValueChange={v => update('type', v)}>
                  <SelectTrigger><SelectValue placeholder="Choose scam type…" /></SelectTrigger>
                  <SelectContent>
                    {scamTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-1.5 block">What happened? <span className="text-red-500">*</span></Label>
                <Textarea
                  placeholder="Describe the scam in as much detail as you can — what did it say, how did you receive it, what were you asked to do?"
                  rows={5}
                  value={form.description}
                  onChange={e => update('description', e.target.value)}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-1.5 block">Scam website URL (if any)</Label>
                  <Input placeholder="https://..." value={form.url} onChange={e => update('url', e.target.value)} />
                </div>
                <div>
                  <Label className="mb-1.5 block">Phone number used (if any)</Label>
                  <Input placeholder="+44 7..." value={form.phone} onChange={e => update('phone', e.target.value)} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-1.5 block">Scam email address (if any)</Label>
                  <Input placeholder="scam@example.com" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
                <div>
                  <Label className="mb-1.5 block">Did you lose any money?</Label>
                  <Select onValueChange={v => update('lostMoney', v)}>
                    <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="under_100">Under $100</SelectItem>
                      <SelectItem value="100_500">$100–$500</SelectItem>
                      <SelectItem value="500_2000">$500–$2,000</SelectItem>
                      <SelectItem value="over_2000">Over $2,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="mb-1.5 block">Your email (optional — only if you want a follow-up)</Label>
                <Input type="email" placeholder="you@example.com" value={form.contactEmail} onChange={e => update('contactEmail', e.target.value)} />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            {loading ? 'Submitting…' : <><CheckCircle2 className="h-4 w-4" /> Submit Report</>}
          </Button>
          <p className="text-xs text-muted-foreground text-center">Fields marked with * are required. All other fields are optional but help us investigate.</p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
