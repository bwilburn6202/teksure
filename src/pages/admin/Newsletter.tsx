import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Eye, AlertTriangle, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const DEFAULT_HTML = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #111;">
  <h1 style="font-size: 22px; font-weight: 600; margin: 0 0 16px;">This week on TekSure</h1>
  <p style="color: #444; font-size: 16px; line-height: 1.6;">
    Replace this with your weekly tip, featured guide, and scam alert.
  </p>
  <p style="color: #444; font-size: 16px; line-height: 1.6;">
    — The TekSure Team
  </p>
</div>`;

interface SendResult {
  sent?: number;
  failed?: number;
  total?: number;
  errors?: Array<{ to: string; error: string }>;
  recipientCount?: number;
  sampleRecipients?: string[];
  warning?: string;
  error?: string;
}

const Newsletter = () => {
  const [subject, setSubject] = useState('');
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [testTo, setTestTo] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<SendResult | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const invoke = async (mode: 'preview' | 'test' | 'send') => {
    if (!subject.trim() || !html.trim()) {
      toast.error('Subject and HTML are required.');
      return;
    }
    if (mode === 'test' && !testTo.trim()) {
      toast.error('Enter a test recipient.');
      return;
    }
    if (mode === 'send' && !window.confirm('Send to every subscriber? This cannot be undone.')) {
      return;
    }

    setBusy(true);
    setResult(null);

    const body: Record<string, unknown> = { subject: subject.trim(), html };
    if (mode === 'preview') body.preview = true;
    if (mode === 'test') body.testTo = testTo.trim();

    try {
      const { data, error } = await supabase.functions.invoke('send-weekly-newsletter', { body });
      if (error) {
        toast.error(`Invoke error: ${error.message}`);
        setResult({ error: error.message });
      } else {
        setResult(data as SendResult);
        if ((data as SendResult).error) {
          toast.error((data as SendResult).error!);
        } else if (mode === 'preview') {
          toast.success(`Would send to ${(data as SendResult).recipientCount ?? 0} subscribers.`);
        } else if (mode === 'test') {
          toast.success(`Test sent — ${(data as SendResult).sent ?? 0} ok, ${(data as SendResult).failed ?? 0} failed.`);
        } else {
          toast.success(`Sent ${(data as SendResult).sent ?? 0}, failed ${(data as SendResult).failed ?? 0}.`);
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      toast.error(msg);
      setResult({ error: msg });
    } finally {
      setBusy(false);
    }
  };

  const runSelftest = async (sendReal: boolean) => {
    setBusy(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke(
        sendReal ? 'email-selftest?send=1' : 'email-selftest'
      );
      if (error) {
        toast.error(error.message);
        setResult({ error: error.message });
      } else {
        setResult(data as SendResult);
        toast.success('Self-test complete. See result panel.');
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title="Newsletter — Admin" description="Compose and send the TekSure newsletter." path="/admin/newsletter" noindex />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 max-w-4xl w-full mx-auto px-4 py-10 outline-none">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Newsletter</h1>
            <p className="text-sm text-muted-foreground">Compose, preview, test, and send to all subscribers.</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              Email diagnostics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Verify Resend is configured before sending. The self-test reports which env vars are set in the edge function runtime.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => runSelftest(false)} disabled={busy}>
                Check config
              </Button>
              <Button variant="outline" size="sm" onClick={() => runSelftest(true)} disabled={busy}>
                Send test to admin
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Compose</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject line</Label>
              <Input
                id="subject"
                placeholder="TekSure Weekly — tip, guide, scam alert"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="html">HTML body</Label>
                <Button type="button" variant="ghost" size="sm" onClick={() => setShowPreview((v) => !v)}>
                  <Eye className="h-3.5 w-3.5 mr-1" />
                  {showPreview ? 'Hide preview' : 'Show preview'}
                </Button>
              </div>
              <Textarea
                id="html"
                rows={14}
                className="font-mono text-xs"
                value={html}
                onChange={(e) => setHtml(e.target.value)}
              />
            </div>

            {showPreview && (
              <div className="border rounded-lg overflow-hidden">
                <div className="px-3 py-2 text-xs text-muted-foreground bg-muted border-b">Preview</div>
                <iframe
                  title="Newsletter preview"
                  srcDoc={html}
                  className="w-full h-80 bg-white"
                  sandbox=""
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Send</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2 items-end">
              <div className="flex-1 min-w-[240px] space-y-2">
                <Label htmlFor="testTo">Test recipient (optional)</Label>
                <Input
                  id="testTo"
                  type="email"
                  placeholder="you@example.com"
                  value={testTo}
                  onChange={(e) => setTestTo(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" onClick={() => invoke('preview')} disabled={busy}>
                  Preview recipients
                </Button>
                <Button variant="outline" onClick={() => invoke('test')} disabled={busy}>
                  Send to test only
                </Button>
                <Button onClick={() => invoke('send')} disabled={busy}>
                  <Send className="h-4 w-4 mr-1" />
                  Send to all
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                {result.error ? (
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                )}
                Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto whitespace-pre-wrap">
                {JSON.stringify(result, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
