import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Shield, ChevronRight, MapPin, Camera, Mic, Phone,
  Smartphone, Laptop, Bell, Eye, Users, HardDrive,
  AlertTriangle, CheckCircle2, Info,
} from 'lucide-react';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

type PlatformType = 'iphone' | 'android' | 'windows' | 'mac';

interface PermissionType {
  name: string;
  icon: typeof MapPin;
  risk: 'High' | 'Medium' | 'Low';
  why: string;
  rule: string;
  steps: Record<PlatformType, string[]>;
}

const permissions: PermissionType[] = [
  {
    name: 'Location',
    icon: MapPin,
    risk: 'High',
    why: 'Apps with location access can track everywhere you go — even when you\'re not using them.',
    rule: 'Only allow location for maps and delivery apps, and only "While using" — never "Always".',
    steps: {
      iphone: ['Open Settings → Privacy & Security → Location Services.', 'Tap each app.', 'Change to "While Using the App" or "Never" for anything that doesn\'t need your location.'],
      android: ['Open Settings → Privacy → Permission manager → Location.', 'Tap each app listed.', 'Change to "Only while using" or "Don\'t allow" unless you genuinely need the app to track your location.'],
      windows: ['Open Settings → Privacy & security → Location.', 'Turn off "Let apps access your location" if you don\'t use location-based apps.', 'Or scroll down to manage per-app permissions.'],
      mac: ['System Settings → Privacy & Security → Location Services.', 'Uncheck apps that don\'t need your location.'],
    },
  },
  {
    name: 'Camera',
    icon: Camera,
    risk: 'High',
    why: 'Apps with camera access can potentially take photos or video without you realising — especially concerning on older Android devices.',
    rule: 'Only video calling apps, banking (for cheque scanning), and document scanners need camera access.',
    steps: {
      iphone: ['Settings → Privacy & Security → Camera.', 'Review each app. Turn off camera for any app that has no reason to take photos.'],
      android: ['Settings → Privacy → Permission manager → Camera.', 'Tap each app and change to "Ask every time" or "Don\'t allow" for suspicious apps.'],
      windows: ['Settings → Privacy & security → Camera.', 'Toggle off camera for apps that shouldn\'t need it.'],
      mac: ['System Settings → Privacy & Security → Camera.', 'Uncheck apps you don\'t recognize or don\'t need camera for.'],
    },
  },
  {
    name: 'Microphone',
    icon: Mic,
    risk: 'High',
    why: 'A microphone-enabled app can record conversations. Most apps — including games and shopping apps — have no reason to use your microphone.',
    rule: 'Only voice calling apps, voice assistants, and transcription tools need microphone access.',
    steps: {
      iphone: ['Settings → Privacy & Security → Microphone.', 'Disable microphone for any app not related to calls, recordings, or voice input.'],
      android: ['Settings → Privacy → Permission manager → Microphone.', 'Revoke access from apps that have no reason to listen.'],
      windows: ['Settings → Privacy & security → Microphone.', 'Review and disable per-app microphone access.'],
      mac: ['System Settings → Privacy & Security → Microphone.', 'Uncheck apps you don\'t actively use for voice or calls.'],
    },
  },
  {
    name: 'Contacts',
    icon: Users,
    risk: 'Medium',
    why: 'Apps with contacts access can see everyone in your address book — including their phone numbers, emails, and home addresses.',
    rule: 'Only messaging and email apps genuinely need your contacts.',
    steps: {
      iphone: ['Settings → Privacy & Security → Contacts.', 'Disable for social media, games, and shopping apps.'],
      android: ['Settings → Privacy → Permission manager → Contacts.', 'Revoke from any app that isn\'t messaging or email.'],
      windows: ['Settings → Privacy & security → Contacts.', 'Disable for apps you\'re unsure about.'],
      mac: ['System Settings → Privacy & Security → Contacts.', 'Review and limit access.'],
    },
  },
  {
    name: 'Notifications',
    icon: Bell,
    risk: 'Low',
    why: 'While not a security risk, too many notification permissions make your phone noisy and can be used for spam.',
    rule: 'Be selective — only allow notifications from apps you actually want to hear from.',
    steps: {
      iphone: ['Settings → Notifications.', 'Tap each app and toggle off "Allow Notifications" for apps you don\'t need alerts from.'],
      android: ['Settings → Apps → tap the app → Notifications.', 'Or: Settings → Notifications → App notifications to manage all at once.'],
      windows: ['Settings → System → Notifications.', 'Toggle off notifications for individual apps.'],
      mac: ['System Settings → Notifications.', 'Set each app to "Off" if you don\'t want its alerts.'],
    },
  },
  {
    name: 'Storage / Files',
    icon: HardDrive,
    risk: 'Medium',
    why: 'Storage access lets apps read and write your photos, documents, and files. Some apps request this unnecessarily.',
    rule: 'Only file managers, photo editors, and camera apps need full storage access.',
    steps: {
      iphone: ['Settings → Privacy & Security → Photos.', 'Change from "All Photos" to "Selected Photos" for apps that don\'t need your full library.'],
      android: ['Settings → Privacy → Permission manager → Files and media.', 'Revoke broad storage access from apps like games or weather apps.'],
      windows: ['Settings → Privacy & security → File system.', 'Disable access for apps that shouldn\'t browse your files.'],
      mac: ['System Settings → Privacy & Security → Files and Folders.', 'Review which apps have access to your Documents, Downloads, and Desktop.'],
    },
  },
];

const platforms: { type: PlatformType; label: string; emoji: string }[] = [
  { type: 'iphone', label: 'iPhone / iPad', emoji: '' },
  { type: 'android', label: 'Android', emoji: '' },
  { type: 'windows', label: 'Windows PC', emoji: '' },
  { type: 'mac', label: 'Mac', emoji: '' },
];

const riskColors = {
  High: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-950/20 dark:text-red-400',
  Medium: 'bg-[hsl(var(--teksure-warning)/0.1)] text-[hsl(var(--teksure-warning))] border-[hsl(var(--teksure-warning)/0.3)]',
  Low: 'bg-[hsl(var(--teksure-success)/0.1)] text-[hsl(var(--teksure-success))] border-[hsl(var(--teksure-success)/0.3)]',
};

export default function AppPermissions() {
  const [platform, setPlatform] = useState<PlatformType | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <>
      <SEOHead
        title="App Permission Auditor – TekSure Tools"
        description="Learn which app permissions are risky and how to review and revoke them on your iPhone, Android, Windows PC, or Mac."
        path="/tools/app-permissions"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-3xl">
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
                  <BreadcrumbPage className="text-primary-foreground">App Permissions</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Eye className="h-7 w-7" />
                <h1 className="text-3xl md:text-4xl font-bold">App Permission Auditor</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                Find out which apps are watching you — and take back control in minutes.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-muted/40 min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">

            {/* Platform picker */}
            <div>
              <p className="text-sm text-muted-foreground mb-3 font-medium">Select your device to see instructions tailored to you:</p>
              <div className="flex flex-wrap gap-2">
                {platforms.map(p => (
                  <button
                    key={p.type}
                    onClick={() => setPlatform(p.type === platform ? null : p.type)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                      platform === p.type
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <span>{p.emoji}</span>{p.label}
                  </button>
                ))}
              </div>
              {!platform && (
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                  <Info className="h-3 w-3" /> Select a device above to see step-by-step instructions for each permission.
                </p>
              )}
            </div>

            {/* Permission cards */}
            <div className="space-y-3">
              {permissions.map((perm, i) => {
                const Icon = perm.icon;
                const isExpanded = expandedId === perm.name;
                return (
                  <div
                    key={perm.name}
                  >
                    <Card
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setExpandedId(isExpanded ? null : perm.name)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-muted shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold">{perm.name}</span>
                              <Badge variant="outline" className={`text-xs ${riskColors[perm.risk]}`}>
                                {perm.risk} Risk
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{perm.why}</p>
                          </div>
                          <ChevronRight className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </div>

                        <>
                          {isExpanded && (
                            <div
                              className="mt-4 pt-4 border-t border-border space-y-3"
                            >
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <p className="text-sm"><span className="font-medium">Rule: </span>{perm.rule}</p>
                              </div>
                              {platform && (
                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                                    How to review on {platforms.find(p => p.type === platform)?.label}
                                  </p>
                                  <ol className="space-y-1.5 list-decimal list-inside">
                                    {perm.steps[platform].map((step, si) => (
                                      <li key={si} className="text-sm text-foreground/80">{step}</li>
                                    ))}
                                  </ol>
                                </div>
                              )}
                              {!platform && (
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Info className="h-3 w-3" /> Select your device above to see step-by-step instructions.
                                </p>
                              )}
                            </div>
                          )}
                        </>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Summary tip */}
            <Card className="border-[hsl(var(--teksure-success)/0.3)] bg-[hsl(var(--teksure-success)/0.05)]">
              <CardContent className="p-5 flex items-start gap-3">
                <Shield className="h-5 w-5 text-[hsl(var(--teksure-success))] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Quick audit tip</p>
                  <p className="text-sm text-muted-foreground">
                    Start with the <strong>High Risk</strong> permissions — Location, Camera, and Microphone. Spend 5 minutes reviewing those three, and you'll significantly reduce your privacy exposure.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 pb-4">
              <Button variant="outline" asChild className="flex-1">
                <Link to="/tools/cyber-scorecard">Full Cybersecurity Scorecard</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/tools/tech-health-quiz">Take the Tech Health Quiz →</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
