import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, ExternalLink, Lock, CheckCircle2, ArrowLeft,
  Facebook, Apple, Smartphone, Globe, Info, BookOpen,
} from 'lucide-react';

/* ── Types ─────────────────────────────────────── */
interface PrivacyCheck {
  id: string;
  label: string;
  where: string;         // Plain-English path like "Settings > Privacy > Face ID"
  link?: string;         // Direct https:// link when available
  why: string;           // 2–3 sentences on why it matters
}

interface ServiceSection {
  id: 'facebook' | 'google' | 'apple' | 'iphone' | 'android';
  title: string;
  tagline: string;
  icon: React.ElementType;
  color: string;          // Tailwind classes for the tile background
  guide?: { label: string; to: string };
  checks: PrivacyCheck[];
}

/* ── Service data ──────────────────────────────── */
const SERVICES: ServiceSection[] = [
  /* ── Facebook ───────────────────────────────── */
  {
    id: 'iphone', name: 'iPhone', icon: '',
    settings: [
      { id: 'ip-loc', label: 'Turn off location tracking for apps that do not need it', why: 'Many apps request your location even when they have no reason to.', link: 'https://support.apple.com/en-us/HT207092', linkLabel: 'Apple: Location Services' },
      { id: 'ip-track', label: 'Turn on "Ask App Not to Track"', why: 'This stops apps from tracking your activity across other apps and websites.', link: 'https://support.apple.com/en-us/HT212025', linkLabel: 'Apple: App Tracking' },
      { id: 'ip-ad', label: 'Turn off personalized ads in Apple settings', why: 'Apple uses your information to show targeted ads in the App Store and Apple News.' },
      { id: 'ip-lock', label: 'Set a strong passcode (6 digits or more)', why: 'A 6-digit passcode has a million combinations, making your phone much harder to break into.' },
      { id: 'ip-faceid', label: 'Set up Face ID or Touch ID', why: 'Biometric locks are more secure than passcodes alone and make it easy to keep your phone locked.' },
      { id: 'ip-findmy', label: 'Turn on Find My iPhone', why: 'If your phone is lost or stolen, Find My lets you locate it, lock it, or erase it remotely.', link: 'https://support.apple.com/en-us/HT210400', linkLabel: 'Apple: Find My' },
      { id: 'ip-2fa', label: 'Turn on two-factor authentication for Apple ID', why: 'Even if someone gets your password, they still cannot access your account without your phone.', link: 'https://support.apple.com/en-us/HT204915', linkLabel: 'Apple: Two-Factor' },
      { id: 'ip-safari', label: 'Turn on "Prevent Cross-Site Tracking" in Safari', why: 'Websites track you across the internet to build advertising profiles. This blocks most of that tracking.' },
      { id: 'ip-auto', label: 'Turn on automatic iOS updates', why: 'Updates fix security holes. Keeping your phone updated is one of the most important things you can do.' },
      { id: 'ip-lock-screen', label: 'Review what shows on your lock screen', why: 'Message previews on your lock screen can expose private information to anyone who picks up your phone.' },
    ],
  },

  /* ── Google ─────────────────────────────────── */
  {
    id: 'android', name: 'Android', icon: '',
    settings: [
      { id: 'an-loc', label: 'Review app location permissions', why: 'Set most apps to "Only while using" or "Deny."', link: 'https://support.google.com/android/answer/6179507', linkLabel: 'Google: Location permissions' },
      { id: 'an-ad', label: 'Opt out of ad personalization', why: 'Google uses your activity to show targeted ads. Opting out means less tracking.', link: 'https://support.google.com/android/answer/3118621', linkLabel: 'Google: Ad settings' },
      { id: 'an-goog', label: 'Turn off Google activity tracking you do not need', why: 'Google tracks your searches, location history, and YouTube history by default.', link: 'https://myactivity.google.com/activitycontrols', linkLabel: 'Google: Activity Controls' },
      { id: 'an-perm', label: 'Review app permissions (camera, microphone, contacts)', why: 'Apps may have permissions you granted once and forgot about.', link: 'https://support.google.com/android/answer/9431959', linkLabel: 'Google: App permissions' },
      { id: 'an-lock', label: 'Set a strong screen lock (PIN, pattern, or fingerprint)', why: 'Your phone contains your email, banking apps, photos, and messages.' },
      { id: 'an-findmy', label: 'Turn on Find My Device', why: 'If your phone is lost or stolen, you can locate it, lock it, or erase your data remotely.', link: 'https://support.google.com/android/answer/6160491', linkLabel: 'Google: Find My Device' },
      { id: 'an-2fa', label: 'Turn on 2-Step Verification for your Google account', why: 'Makes it much harder for someone to break into your Gmail, Drive, and other Google services.', link: 'https://myaccount.google.com/signinoptions/two-step-verification', linkLabel: 'Google: 2-Step Verification' },
      { id: 'an-update', label: 'Turn on automatic system updates', why: 'Security updates patch vulnerabilities. Enable auto-updates so you are always protected.' },
      { id: 'an-chrome', label: 'Turn on Safe Browsing in Chrome', why: 'Safe Browsing warns you before visiting dangerous websites or downloading harmful files.' },
      { id: 'an-install', label: 'Make sure "Install unknown apps" is turned off', why: 'This prevents apps from being installed outside the Google Play Store.' },
    ],
  },

  /* ── Apple ID ───────────────────────────────── */
  {
    id: 'facebook', name: 'Facebook', icon: '',
    settings: [
      { id: 'fb-who', label: 'Set "Who can see your future posts" to Friends Only', why: 'Posts set to Public can be seen by anyone on the internet.', link: 'https://www.facebook.com/settings?tab=privacy', linkLabel: 'Facebook Privacy Settings' },
      { id: 'fb-search', label: 'Limit who can look you up by email or phone number', why: 'Scammers can use your phone number or email to find your profile.' },
      { id: 'fb-face', label: 'Turn off facial recognition', why: 'Prevents your face from being automatically identified in photos.' },
      { id: 'fb-ads', label: 'Review your ad preferences and limit ad tracking', why: 'Facebook builds a detailed profile about you to sell ads.', link: 'https://www.facebook.com/adpreferences', linkLabel: 'Facebook Ad Preferences' },
      { id: 'fb-apps', label: 'Remove apps and websites connected to Facebook', why: 'Apps you logged into with Facebook may still have access to your information.', link: 'https://www.facebook.com/settings?tab=applications', linkLabel: 'Facebook Connected Apps' },
      { id: 'fb-friends', label: 'Set your friends list to private', why: 'A public friends list helps scammers impersonate you or target your contacts.' },
      { id: 'fb-2fa', label: 'Turn on two-factor authentication', why: 'Adds a second step when logging in for extra protection.', link: 'https://www.facebook.com/settings?tab=security', linkLabel: 'Facebook Security Settings' },
      { id: 'fb-profile', label: 'Review what is visible on your public profile', why: 'Your birthday, hometown, and employer can be used for identity theft.' },
    ],
  },

  /* ── iPhone ─────────────────────────────────── */
  {
    id: 'google', name: 'Google', icon: '',
    settings: [
      { id: 'go-activity', label: 'Turn off Web & App Activity', why: 'Google saves every search and website visit. Turning this off stops that collection.', link: 'https://myactivity.google.com/activitycontrols', linkLabel: 'Google Activity Controls' },
      { id: 'go-loc', label: 'Turn off Location History', why: 'Google tracks everywhere you go and saves a timeline.' },
      { id: 'go-yt', label: 'Turn off YouTube History', why: 'Google saves every YouTube video you watch.' },
      { id: 'go-ads', label: 'Turn off Ad Personalization', why: 'Google uses your data to target ads.', link: 'https://adssettings.google.com/', linkLabel: 'Google Ad Settings' },
      { id: 'go-auto-del', label: 'Set up auto-delete for activity data (3 or 18 months)', why: 'Auto-delete removes old activity automatically so you keep some personalization without a lifetime of data.' },
      { id: 'go-2fa', label: 'Turn on 2-Step Verification', why: 'Your Google account is the key to your Gmail, Drive, Photos, and more.', link: 'https://myaccount.google.com/signinoptions/two-step-verification', linkLabel: 'Google 2-Step Verification' },
      { id: 'go-checkup', label: 'Run the Google Privacy Checkup', why: 'Google provides a guided walkthrough to review all your privacy settings in one place.', link: 'https://myaccount.google.com/privacycheckup', linkLabel: 'Google Privacy Checkup' },
      { id: 'go-pass', label: 'Review saved passwords and update weak ones', why: 'Check for reused or weak passwords and update them.', link: 'https://passwords.google.com/', linkLabel: 'Google Password Manager' },
      { id: 'go-third', label: 'Remove third-party apps with access to your account', why: 'Apps you signed into with Google may still have access to your data.', link: 'https://myaccount.google.com/permissions', linkLabel: 'Google Third-Party Access' },
    ],
  },

  /* ── Android ───────────────────────────────── */
  {
    id: 'instagram', name: 'Instagram', icon: '',
    settings: [
      { id: 'ig-priv', label: 'Set your account to Private', why: 'A private account means only approved followers can see your posts and stories.' },
      { id: 'ig-activity', label: 'Turn off Activity Status', why: 'Activity status shows others when you were last online.' },
      { id: 'ig-story', label: 'Review who can reply to your stories', why: 'You can limit story replies to close friends only or turn them off.' },
      { id: 'ig-mention', label: 'Control who can mention or tag you', why: 'Scammers and spam accounts may tag you. Set this to people you follow only.' },
      { id: 'ig-2fa', label: 'Turn on two-factor authentication', why: 'Instagram account hacking is very common. This adds an extra layer of protection.' },
      { id: 'ig-data', label: 'Download your data to see what Instagram has', why: 'Download all the data Instagram has collected about you.', link: 'https://help.instagram.com/181231772500920', linkLabel: 'Instagram: Download Your Data' },
      { id: 'ig-apps', label: 'Remove third-party apps connected to Instagram', why: 'Quiz apps and follower trackers may have access to your account.' },
      { id: 'ig-loc', label: 'Remove location data from posts', why: 'Posting your exact location tells everyone where you are.' },
    ],
  },
  {
    id: 'amazon', name: 'Amazon', icon: '',
    settings: [
      { id: 'am-2fa', label: 'Turn on two-step verification', why: 'Your Amazon account has your payment info and order history.', link: 'https://www.amazon.com/a/settings/approval', linkLabel: 'Amazon: Two-Step Verification' },
      { id: 'am-history', label: 'Review and manage your browsing history', why: 'Amazon tracks everything you look at to recommend products and target ads.' },
      { id: 'am-alexa', label: 'Delete Alexa voice recordings', why: 'Amazon stores recordings of what you say to Alexa.', link: 'https://www.amazon.com/alexa-privacy/apd/myad', linkLabel: 'Amazon: Alexa Privacy' },
      { id: 'am-ads', label: 'Opt out of personalized ads', why: 'Amazon uses your shopping data for targeted advertising.', link: 'https://www.amazon.com/adprefs', linkLabel: 'Amazon: Ad Preferences' },
      { id: 'am-payment', label: 'Review saved payment methods', why: 'Remove old credit cards you no longer use to reduce risk.' },
      { id: 'am-devices', label: 'Review authorized devices and apps', why: 'Check which devices are logged in and remove any you do not recognize.' },
      { id: 'am-sharing', label: 'Review household sharing settings', why: 'Amazon Household shares payment methods. Make sure only trusted people have access.' },
      { id: 'am-password', label: 'Update your password if it is old or reused', why: 'Use a unique, strong password not used for any other website.' },
    ],
  },
  {
    id: 'whatsapp', name: 'WhatsApp', icon: '',
    settings: [
      { id: 'wa-2fa', label: 'Turn on two-step verification', why: 'Adds a PIN required when registering your number again. Prevents account hijacking.' },
      { id: 'wa-photo', label: 'Set profile photo visibility to "My Contacts"', why: 'Strangers should not be able to see your profile photo.' },
      { id: 'wa-last', label: 'Set "Last Seen" to "My Contacts" or "Nobody"', why: 'Prevents strangers from knowing when you were last active.' },
      { id: 'wa-about', label: 'Set "About" visibility to "My Contacts"', why: 'Your status message can reveal personal information.' },
      { id: 'wa-groups', label: 'Set "Groups" to "My Contacts"', why: 'Prevents random people from adding you to group chats.' },
      { id: 'wa-backup', label: 'Turn on end-to-end encrypted backups', why: 'By default, cloud backups are not encrypted. Turning on encryption protects your messages.' },
      { id: 'wa-fingerprint', label: 'Turn on fingerprint or face lock for WhatsApp', why: 'Extra protection so someone with your unlocked phone still cannot open WhatsApp.' },
      { id: 'wa-disappearing', label: 'Consider turning on disappearing messages for sensitive chats', why: 'Messages are automatically deleted after a set time.' },
    ],
  },
  {
    id: 'windows', name: 'Windows PC', icon: '',
    settings: [
      { id: 'wi-update', label: 'Turn on automatic Windows updates', why: 'Security updates fix vulnerabilities that hackers exploit.' },
      { id: 'wi-diag', label: 'Set diagnostic data to "Required" (not Full)', why: 'Setting it to Required sends the minimum amount of data to Microsoft.' },
      { id: 'wi-ad-id', label: 'Turn off advertising ID', why: 'Windows assigns a unique ID that apps use to track you.' },
      { id: 'wi-loc', label: 'Turn off location services if not needed', why: 'Your PC shares your location with apps and Microsoft by default.' },
      { id: 'wi-camera', label: 'Review which apps can use your camera and microphone', why: 'Check Settings > Privacy > Camera and Microphone.' },
      { id: 'wi-firewall', label: 'Make sure Windows Firewall is turned on', why: 'The firewall blocks unauthorized connections to your computer.' },
      { id: 'wi-defender', label: 'Make sure Windows Security (Defender) is active', why: 'Windows includes built-in antivirus protection. Make sure it is running.' },
      { id: 'wi-login', label: 'Use a strong password and enable 2FA for your Microsoft account', why: 'A Microsoft account lets you use two-factor authentication and recover your PC remotely.' },
    ],
  },
  {
    id: 'mac', name: 'Mac', icon: '',
    settings: [
      { id: 'mc-update', label: 'Turn on automatic macOS updates', why: 'Apple regularly patches security vulnerabilities.' },
      { id: 'mc-firewall', label: 'Turn on the built-in firewall', why: 'The macOS firewall blocks unwanted incoming connections. It is off by default.' },
      { id: 'mc-filevault', label: 'Turn on FileVault disk encryption', why: 'FileVault encrypts your entire hard drive. If your Mac is stolen, your files stay protected.' },
      { id: 'mc-loc', label: 'Review location services permissions', why: 'Check System Settings > Privacy & Security > Location Services.' },
      { id: 'mc-analytics', label: 'Turn off "Share Mac Analytics" with Apple', why: 'macOS sends usage data to Apple by default. You can turn this off.' },
      { id: 'mc-siri', label: 'Review Siri and Dictation data sharing', why: 'Apple may store and review voice recordings from Siri.' },
      { id: 'mc-findmy', label: 'Turn on Find My Mac', why: 'Lets you locate, lock, or erase your Mac remotely if lost or stolen.' },
      { id: 'mc-password', label: 'Require password immediately after sleep', why: 'Set your Mac to require a password immediately when waking from sleep.' },
    ],
  },
];

/* ── Component ─────────────────────────────────── */
export default function PrivacyAudit() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeService, setActiveService] = useState<ServiceSection['id'] | null>(null);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const serviceProgress = (service: ServiceSection) => {
    const ids = service.checks.map((c) => c.id);
    const done = ids.filter((id) => checked[id]).length;
    return { done, total: ids.length, pct: Math.round((done / ids.length) * 100) };
  };

  const totalProgress = useMemo(() => {
    const all = SERVICES.flatMap((s) => s.checks.map((c) => c.id));
    const done = all.filter((id) => checked[id]).length;
    return { done, total: all.length, pct: Math.round((done / all.length) * 100) };
  }, [checked]);

  const active = SERVICES.find((s) => s.id === activeService);

  return (
    <>
      <SEOHead
        title="Privacy Audit — Take Back Your Privacy One Setting at a Time"
        description="Step-by-step guided privacy audit for Facebook, Google, Apple ID, iPhone, and Android. Walks you through the settings that actually matter in plain English."
        path="/tools/privacy-audit"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ── Hero ─────────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container py-12 md:py-16 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="privacy-audit"
                title="Privacy Audit"
                url="/tools/privacy-audit"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Privacy</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 pr-14">
              Take Back Your Privacy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              We'll walk you through the settings that matter — one screen at a time.
            </p>
          </div>
        </section>

        {/* ── Reassurance banner ──────────────── */}
        <section className="container pt-8 pb-2">
          <Card className="border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20">
            <CardContent className="p-5 flex items-start gap-3">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Your progress stays with you</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We don't collect any data. This is a guided checklist that shows you exactly
                  where to tap on Facebook, Google, your iPhone, or your Android device. Your
                  checkmarks are saved only in this browser.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Total progress bar ──────────────── */}
        <section className="container py-6">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <h2 className="text-xl font-semibold">Overall Progress</h2>
                <span className="text-lg font-bold text-primary">
                  {totalProgress.done} / {totalProgress.total} settings reviewed
                </span>
              </div>
              <Progress value={totalProgress.pct} className="h-4 mb-2" />
              <p className="text-base text-muted-foreground">
                {totalProgress.pct === 100
                  ? 'Incredible — you have locked down every service. Come back in 6 months to re-check.'
                  : totalProgress.pct === 0
                    ? 'Pick a service below to get started. You do not have to do everything at once.'
                    : 'Keep going! Small steps add up to big privacy wins.'}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Service picker OR active service ─ */}
        {!active ? (
          <section className="container pb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Which service do you want to audit?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Start with the one you use most. You can come back to the others anytime.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => {
                const { done, total, pct } = serviceProgress(service);
                const Icon = service.icon;
                const complete = done === total && total > 0;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className="text-left group"
                  >
                    <Card
                      className={`h-full transition-all group-hover:shadow-md group-hover:border-primary/50 ${
                        complete ? 'border-green-500/50' : ''
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-lg shrink-0 ${service.color}`}>
                            {complete ? (
                              <CheckCircle2 className="w-8 h-8" />
                            ) : (
                              <Icon className="w-8 h-8" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                            <p className="text-base text-muted-foreground leading-snug">
                              {service.tagline}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">
                              {done} of {total} reviewed
                            </span>
                            <span className="font-semibold text-primary">{pct}%</span>
                          </div>
                          <Progress value={pct} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          <section className="container pb-12">
            {/* Back button + service header */}
            <Button
              variant="ghost"
              onClick={() => setActiveService(null)}
              className="mb-4 -ml-2 text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all services
            </Button>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <div className={`p-3 rounded-lg shrink-0 ${active.color}`}>
                    <active.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl font-bold">{active.title} Privacy Audit</h2>
                    <p className="text-lg text-muted-foreground">{active.tagline}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-base mb-1">
                    <span className="text-muted-foreground">
                      {serviceProgress(active).done} of {serviceProgress(active).total} reviewed
                    </span>
                    <span className="font-semibold text-primary">
                      {serviceProgress(active).pct}%
                    </span>
                  </div>
                  <Progress value={serviceProgress(active).pct} className="h-3" />
                </div>
                {active.guide && (
                  <div className="mt-5">
                    <Button variant="outline" asChild>
                      <Link to={active.guide.to}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        {active.guide.label}
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Checklist */}
            <div className="space-y-4">
              {active.checks.map((check, i) => {
                const isDone = checked[check.id] ?? false;
                return (
                  <Card
                    key={check.id}
                    className={isDone ? 'border-green-500/40 bg-green-50/30 dark:bg-green-950/10' : ''}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={isDone}
                          onCheckedChange={() => toggle(check.id)}
                          className="mt-1.5 h-6 w-6 shrink-0 cursor-pointer"
                          id={`check-${check.id}`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-3">
                            <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-muted-foreground text-sm font-semibold mt-0.5">
                              {i + 1}
                            </span>
                            <label
                              htmlFor={`check-${check.id}`}
                              className={`text-lg md:text-xl font-semibold leading-snug cursor-pointer ${
                                isDone ? 'line-through text-muted-foreground' : 'text-foreground'
                              }`}
                            >
                              {check.label}
                            </label>
                          </div>

                          {/* Where to find it */}
                          <div className="ml-9 mb-3 p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm font-semibold text-muted-foreground mb-1">
                              Where to find it:
                            </p>
                            <p className="text-base font-mono text-foreground break-words">
                              {check.where}
                            </p>
                          </div>

                          {/* Why it matters */}
                          <div className="ml-9 mb-3 flex items-start gap-2">
                            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-muted-foreground mb-1">
                                Why it matters:
                              </p>
                              <p className="text-base leading-relaxed">{check.why}</p>
                            </div>
                          </div>

                          {/* Direct link */}
                          {check.link && (
                            <div className="ml-9 mt-3">
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={check.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Open this setting
                                  <ExternalLink className="w-3 h-3 ml-1.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Service-complete card */}
            {serviceProgress(active).pct === 100 && (
              <Card className="mt-6 bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-300" />
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200">
                      {active.title} is locked down!
                    </h3>
                  </div>
                  <p className="text-base text-green-700 dark:text-green-300 leading-relaxed">
                    Every setting reviewed. Set a reminder to come back every 6 months —
                    services change their defaults, so it is worth a quick re-check.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Continue to next service */}
            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Keep going</h3>
                <p className="text-base text-muted-foreground mb-4">
                  Audit another service — your progress on this one is saved.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.filter((s) => s.id !== active.id).map((s) => {
                    const { pct } = serviceProgress(s);
                    const Icon = s.icon;
                    return (
                      <Button
                        key={s.id}
                        variant="outline"
                        onClick={() => setActiveService(s.id)}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {s.title}
                        {pct > 0 && pct < 100 && (
                          <Badge variant="secondary" className="ml-2">
                            {pct}%
                          </Badge>
                        )}
                        {pct === 100 && (
                          <CheckCircle2 className="w-4 h-4 ml-2 text-green-600" />
                        )}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* ── Related tools ───────────────────── */}
        <section className="container pb-16">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Related privacy tools</h3>
              <div className="grid gap-2 md:grid-cols-2">
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/digital-footprint-scanner">
                    <ShieldCheck className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Digital Footprint Scanner — check what is public about you</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/data-breach-checker">
                    <Lock className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Data Breach Checker — has your email been leaked?</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/two-factor-setup">
                    <ShieldCheck className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">Two-Factor Setup — the single most important security step</span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start h-auto py-3">
                  <Link to="/tools/app-permissions">
                    <Smartphone className="w-5 h-5 mr-2 shrink-0" />
                    <span className="text-left">App Permissions — review what each app can see</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
