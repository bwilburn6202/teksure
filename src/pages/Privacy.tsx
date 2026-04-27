import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Trash2, Shield, Eye, Cookie, Scale, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Privacy = () => {
  const handleDeleteData = () => {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith('teksure-'));
    keys.forEach((k) => localStorage.removeItem(k));
    toast.success('Local data deleted', {
      description: `Removed ${keys.length} item${keys.length !== 1 ? 's' : ''} stored on this device. To delete your account data, visit your profile page.`,
    });
  };

  const handleExportData = () => {
    const data: Record<string, string | null> = {};
    Object.keys(localStorage)
      .filter((k) => k.startsWith('teksure-'))
      .forEach((k) => {
        data[k] = localStorage.getItem(k);
      });

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `teksure-data-export-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Data exported', { description: 'Your data file has been downloaded.' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Privacy Policy — TekSure"
        description="Learn how TekSure collects, uses, and protects your personal information. Written in plain English so everyone can understand."
        path="/privacy"
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        <div className="container max-w-3xl py-8 px-4 space-y-8">
          <PageBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy' },
            ]}
          />

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Your privacy matters to us. This page explains what information we collect, how we use it, and what choices you have — all in plain English.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: April 5, 2026</p>
          </div>

          {/* What We Collect */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Eye className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <CardTitle className="text-xl">What We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>We only collect the information we need to make TekSure work well for you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account information</strong> — Your name and email address when you sign up.</li>
                <li><strong>Preferences</strong> — Settings like text size, contrast mode, and which guides you have bookmarked. These are stored on your device.</li>
                <li><strong>Usage data</strong> — General information about which pages you visit and how you use the site (through cookies). This helps us improve.</li>
                <li><strong>Support requests</strong> — If you book a tech support session, we store your request details so we can match you with a technician.</li>
                <li><strong>Payment information</strong> — When you pay for support, payments are handled securely by Stripe. We never see or store your full card number.</li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Use It */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Shield className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <CardTitle className="text-xl">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve TekSure's guides, tools, and support services.</li>
                <li>Remember your preferences (like text size and bookmarks) so you do not have to set them up again.</li>
                <li>Match you with a verified technician when you request help.</li>
                <li>Send you booking confirmations and important account updates.</li>
                <li>Understand how people use the site so we can make it better.</li>
              </ul>
              <p>We <strong>never</strong> sell your personal information to anyone. We do not share it with advertisers.</p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Cookie className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <CardTitle className="text-xl">Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Cookies are small files stored on your device that help websites remember things about you. Here is what we use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Necessary cookies</strong> — Keep you logged in and remember your settings. The site needs these to work properly.</li>
                <li><strong>Analytics cookies</strong> — Help us understand which pages are popular and where people get stuck, so we can improve. These do not identify you personally.</li>
              </ul>
              <p>
                You can clear cookies at any time through your browser settings. You can also use the "Delete My Data" button at the bottom of this page to remove all TekSure data stored on your device.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Scale className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <CardTitle className="text-xl">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>Under privacy laws like GDPR (Europe) and CCPA (California), you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>See your data</strong> — Find out what information we have about you.</li>
                <li><strong>Export your data</strong> — Download a copy of everything we store about you.</li>
                <li><strong>Delete your data</strong> — Ask us to remove all your personal information.</li>
                <li><strong>Opt out</strong> — Say no to non-essential cookies and tracking.</li>
                <li><strong>Change your mind</strong> — Withdraw consent at any time without penalty.</li>
              </ul>
              <p>
                Use the buttons below to export or delete data stored on your device. To manage your account data (stored on our servers), visit your <a href="/profile" className="text-primary underline">profile page</a>.
              </p>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <CardTitle className="text-xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                If you have any questions about this privacy policy or want to make a data request, contact us at:
              </p>
              <p>
                <a href="mailto:bailey@teksure.com" className="text-primary underline">bailey@teksure.com</a>
              </p>
              <p>We will respond within 30 days.</p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-8">
            <Button variant="outline" size="lg" className="gap-2" onClick={handleExportData}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Export My Data
            </Button>
            <Button variant="destructive" size="lg" className="gap-2" onClick={handleDeleteData}>
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Delete My Data
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
