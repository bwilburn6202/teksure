import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Shield, ChevronRight, ChevronDown, ChevronUp,
  Smartphone, Mail, Key, CheckCircle2, Star, Lock,
} from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

type ServiceType = 'google' | 'apple' | 'facebook' | 'amazon' | 'bank';

interface ServiceGuide {
  name: string;
  emoji: string;
  steps: string[];
  appRequired: boolean;
  smsAvailable: boolean;
}

const serviceGuides: Record<ServiceType, ServiceGuide> = {
  google: {
    name: 'Google / Gmail', emoji: '',
    appRequired: false, smsAvailable: true,
    steps: [
      'Go to myaccount.google.com in your browser.',
      'Click "Security" in the left sidebar.',
      'Scroll down to "How you sign in to Google" and click "2-Step Verification".',
      'Click "Get started" and sign in again if asked.',
      'Choose your method: "Google prompts" (easiest — just tap Yes on your phone), SMS text, or an authenticator app.',
      'Follow the on-screen steps and click "Turn on".',
      'You\'ll now be asked to verify it\'s really you every time you sign into a new device.',
    ],
  },
  apple: {
    name: 'Apple / iCloud', emoji: '',
    appRequired: false, smsAvailable: true,
    steps: [
      'On your iPhone: go to Settings → tap your name at the top.',
      'Tap "Sign-In & Security" (or "Password & Security" on older iOS).',
      'Tap "Two-Factor Authentication".',
      'Tap "Turn On" and follow the prompts.',
      'Apple will send a 6-digit code to your trusted phone number whenever you sign into iCloud on a new device.',
      'Store your backup recovery key in a safe place when prompted.',
    ],
  },
  facebook: {
    name: 'Facebook', emoji: '',
    appRequired: false, smsAvailable: true,
    steps: [
      'Open Facebook and tap the menu (three lines, bottom right on mobile).',
      'Tap Settings & privacy → Settings.',
      'Tap "Password and security".',
      'Under "Two-factor authentication", tap "Use two-factor authentication".',
      'Choose: Authentication app (more secure) or SMS text.',
      'Follow the steps shown and confirm with your current password.',
    ],
  },
  amazon: {
    name: 'Amazon', emoji: '',
    appRequired: false, smsAvailable: true,
    steps: [
      'Go to amazon.com and sign in.',
      'Hover over "Account & Lists" → click "Account".',
      'Click "Login & security".',
      'Next to "Two-Step Verification (2SV)", click "Turn on".',
      'Click "Get started" and choose: Authenticator app or phone number.',
      'Enter the code you receive and click "Verify code and continue".',
      'Click "Got it. Turn on Two-Step Verification".',
    ],
  },
  bank: {
    name: 'Your Bank', emoji: '',
    appRequired: false, smsAvailable: true,
    steps: [
      'Most banks enable 2FA automatically when you register your phone number.',
      'Log into your bank\'s app or website.',
      'Go to Settings or Security (often under your profile icon).',
      'Look for "Two-step verification", "Extra security", or "Security notifications".',
      'Follow the prompts to verify your mobile number.',
      'If you can\'t find it, call your bank\'s customer service line and ask them to enable 2FA on your account.',
    ],
  },
};

const services: { type: ServiceType; label: string; emoji: string; priority: string }[] = [
  { type: 'google', label: 'Google / Gmail', emoji: '', priority: 'Start here' },
  { type: 'apple', label: 'Apple / iCloud', emoji: '', priority: 'High priority' },
  { type: 'facebook', label: 'Facebook', emoji: '', priority: 'Recommended' },
  { type: 'amazon', label: 'Amazon', emoji: '', priority: 'Recommended' },
  { type: 'bank', label: 'Your Bank', emoji: '', priority: 'Essential' },
];

const authApps = [
  { name: 'Google Authenticator', platforms: 'iPhone & Android', rating: 4, note: 'Free, simple, backed by Google.' },
  { name: 'Microsoft Authenticator', platforms: 'iPhone & Android', rating: 5, note: 'Free, also backs up your codes to the cloud.' },
  { name: 'Authy', platforms: 'iPhone, Android & Desktop', rating: 5, note: 'Free, syncs across devices, great for backups.' },
];

type Method = '2fa' | null;

export default function TwoFactorSetup() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [expanded, setExpanded] = useState<ServiceType | null>(null);
  const [completedServices, setCompletedServices] = useState<Set<ServiceType>>(new Set());

  const toggleComplete = (type: ServiceType) => {
    setCompletedServices(prev => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type); else next.add(type);
      return next;
    });
  };

  return (
    <>
      <SEOHead
        title="Two-Factor Authentication Setup – TekSure Tools"
        description="Set up two-factor authentication (2FA) on your most important accounts — Google, Apple, Facebook, Amazon, and your bank — step by step."
        path="/tools/two-factor-setup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-2xl">
            <Breadcrumb className="mb-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/tools" className="text-primary-foreground/70 hover:text-primary-foreground">Tools</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground">2FA Setup</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-7 w-7" />
                <h1 className="text-3xl md:text-4xl font-bold">Two-Factor Authentication Setup</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                The single most powerful thing you can do to protect your accounts — takes 5 minutes per account.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-2xl space-y-6">

            {/* What is 2FA */}
            <div>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">What is two-factor authentication (2FA)?</p>
                      <p className="text-sm text-muted-foreground">
                        It's a second lock on your accounts. Even if someone steals your password, they can't get in without a code from your phone. Think of it as a deadbolt on top of your regular lock.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress */}
            {completedServices.size > 0 && (
              <div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-[hsl(var(--teksure-success)/0.1)] border border-[hsl(var(--teksure-success)/0.3)]">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(var(--teksure-success))]" />
                  <span className="text-sm font-medium text-[hsl(var(--teksure-success))]">
                    {completedServices.size} of {services.length} accounts secured 
                  </span>
                </div>
              </div>
            )}

            {/* Service list */}
            <div>
              <h2 className="font-bold text-lg mb-3">Set up 2FA — pick an account to start:</h2>
              <div className="space-y-2">
                {services.map((svc, i) => {
                  const guide = serviceGuides[svc.type];
                  const isExpanded = expanded === svc.type;
                  const isDone = completedServices.has(svc.type);
                  return (
                    <div
                      key={svc.type}
                    >
                      <Card className={`transition-all ${isDone ? 'opacity-70' : ''}`}>
                        <CardContent className="p-0">
                          <button
                            className="w-full text-left p-4 flex items-center gap-3"
                            onClick={() => setExpanded(isExpanded ? null : svc.type)}
                          >
                            <span className="text-2xl">{svc.emoji}</span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`font-semibold ${isDone ? 'line-through text-muted-foreground' : ''}`}>{svc.label}</span>
                                <Badge variant="outline" className={`text-xs ${svc.priority === 'Start here' || svc.priority === 'Essential' ? 'bg-red-50 text-red-600 border-red-200 dark:bg-red-950/20 dark:text-red-400' : 'bg-[hsl(var(--teksure-warning)/0.1)] text-[hsl(var(--teksure-warning))] border-[hsl(var(--teksure-warning)/0.3)]'}`}>
                                  {svc.priority}
                                </Badge>
                                {isDone && <CheckCircle2 className="h-4 w-4 text-[hsl(var(--teksure-success))]" />}
                              </div>
                            </div>
                            {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                          </button>

                          <>
                            {isExpanded && (
                              <div
                                className="px-4 pb-4"
                              >
                                <div className="border-t border-border pt-4">
                                  <ol className="space-y-2">
                                    {guide.steps.map((step, si) => (
                                      <li key={si} className="flex items-start gap-2.5 text-sm">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold">{si + 1}</span>
                                        <span className="text-foreground/80">{step}</span>
                                      </li>
                                    ))}
                                  </ol>
                                  <Button
                                    variant={isDone ? 'outline' : 'default'}
                                    size="sm"
                                    className="mt-4"
                                    onClick={() => toggleComplete(svc.type)}
                                  >
                                    {isDone ? ' Mark as not done' : ' Mark as done'}
                                  </Button>
                                </div>
                              </div>
                            )}
                          </>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Authenticator apps */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Want extra security? Use an authenticator app</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    An authenticator app generates codes on your phone — more secure than SMS because they can't be intercepted. All of these are free:
                  </p>
                  {authApps.map((app, i) => (
                    <div key={i} className="flex items-start justify-between gap-3 py-2 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium text-sm">{app.name}</p>
                        <p className="text-xs text-muted-foreground">{app.platforms} · {app.note}</p>
                      </div>
                      <div className="flex gap-0.5 shrink-0">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star key={si} className={`h-3 w-3 ${si < app.rating ? 'fill-[hsl(var(--teksure-warning))] text-[hsl(var(--teksure-warning))]' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pb-4">
              <Button variant="outline" asChild className="flex-1">
                <Link to="/tools/app-permissions">Review App Permissions</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/tools/cyber-scorecard">Full Security Scorecard →</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
