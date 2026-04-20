import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import {
  Search, ExternalLink, Shield, AlertTriangle, Eye, Smartphone,
  Globe, Mail, Phone, Settings, ChevronDown, ChevronUp,
  CheckCircle2, Fingerprint, Lock, UserX
} from 'lucide-react';

/* ── Section data ───────────────────────────── */
interface CheckItem {
  id: string;
  label: string;
  detail?: string;
}

interface ScannerSection {
  id: string;
  title: string;
  icon: React.ElementType;
  risk: 'Low' | 'Medium' | 'High';
  whyItMatters: string;
  steps: string[];
  checklist: CheckItem[];
  externalLinks?: { label: string; url: string }[];
}

const SECTIONS: ScannerSection[] = [
  {
    id: 'google-yourself',
    title: '1. Google Yourself',
    icon: Search,
    risk: 'High',
    whyItMatters:
      'When someone looks you up — a new neighbor, a potential employer, or a scammer — Google is the first place they go. You need to know what they find.',
    steps: [
      'Open Google.com in your web browser.',
      'Type your full name in quotes, like "Jane Smith" and press Enter.',
      'Look through the first 3 pages of results.',
      'Note anything that shows your address, phone number, workplace, or photos.',
      'Try adding your city, like "Jane Smith Dallas" to narrow results.',
      'Check Google Images too — search your name and click "Images" at the top.',
    ],
    checklist: [
      { id: 'google-searched', label: 'I searched my name on Google' },
      { id: 'google-images', label: 'I checked Google Images for my name' },
      { id: 'google-reviewed', label: 'I reviewed the first 3 pages of results' },
    ],
    externalLinks: [
      { label: 'Open Google', url: 'https://www.google.com' },
      { label: 'Request removal from Google', url: 'https://support.google.com/websearch/troubleshooter/9685456' },
    ],
  },
  {
    id: 'social-media-privacy',
    title: '2. Check Your Social Media Privacy',
    icon: Eye,
    risk: 'High',
    whyItMatters:
      'Social media profiles often reveal your birthday, location, family members, workplace, and daily habits. Scammers use this information to make their attacks more convincing.',
    steps: [
      'Facebook: Go to Settings > Privacy. Set "Who can see your future posts?" to "Friends."',
      'Facebook: Under "How people find and contact you," limit who can look you up by email or phone number.',
      'Facebook: Use the "View As" feature (Settings > Timeline) to see what strangers see.',
      'Instagram: Go to Settings > Privacy > Account Privacy and turn on "Private Account."',
      'X (Twitter): Go to Settings > Privacy and Safety > Protect your Tweets.',
      'LinkedIn: Go to Settings > Visibility and review who can see your connections and email.',
    ],
    checklist: [
      { id: 'fb-privacy', label: 'I checked my Facebook privacy settings' },
      { id: 'fb-view-as', label: 'I used "View As" to see my public Facebook profile' },
      { id: 'ig-private', label: 'I reviewed my Instagram privacy settings' },
      { id: 'linkedin-visibility', label: 'I reviewed my LinkedIn visibility settings' },
    ],
    externalLinks: [
      { label: 'Facebook Privacy Settings', url: 'https://www.facebook.com/settings?tab=privacy' },
      { label: 'Instagram Privacy Settings', url: 'https://www.instagram.com/accounts/privacy_and_security/' },
      { label: 'LinkedIn Visibility Settings', url: 'https://www.linkedin.com/mypreferences/d/categories/visibility' },
    ],
  },
  {
    id: 'data-brokers',
    title: '3. Check Data Broker Sites',
    icon: UserX,
    risk: 'High',
    whyItMatters:
      'Data broker websites collect and publish your name, address, phone number, age, relatives, and more — all publicly searchable by anyone. These are the biggest sources of exposed personal information.',
    steps: [
      'Visit each site below and search for your name.',
      'If you find yourself listed, use the "Opt Out" link to request removal.',
      'Most removals take 2–4 weeks to process.',
      'Check back in 3–6 months — your data often reappears and you may need to opt out again.',
      'Consider a paid removal service (DeleteMe, Incogni, Kanary) if you want ongoing protection.',
    ],
    checklist: [
      { id: 'spokeo-check', label: 'I checked Spokeo', detail: 'One of the largest people-search engines' },
      { id: 'whitepages-check', label: 'I checked WhitePages', detail: 'Shows address history and relatives' },
      { id: 'beenverified-check', label: 'I checked BeenVerified', detail: 'Background check aggregator' },
      { id: 'truepeoplesearch-check', label: 'I checked TruePeopleSearch', detail: 'Completely free — often very detailed' },
      { id: 'radaris-check', label: 'I checked Radaris', detail: 'Often has property and relative data' },
      { id: 'opted-out', label: 'I submitted opt-out requests for sites that had my info' },
    ],
    externalLinks: [
      { label: 'Spokeo (search)', url: 'https://www.spokeo.com' },
      { label: 'Spokeo (opt out)', url: 'https://www.spokeo.com/optout' },
      { label: 'WhitePages (search)', url: 'https://www.whitepages.com' },
      { label: 'WhitePages (opt out)', url: 'https://www.whitepages.com/suppression-requests' },
      { label: 'BeenVerified (opt out)', url: 'https://www.beenverified.com/app/optout/search' },
      { label: 'TruePeopleSearch (removal)', url: 'https://www.truepeoplesearch.com/removal' },
      { label: 'Radaris (opt out)', url: 'https://radaris.com/control/privacy' },
    ],
  },
  {
    id: 'email-breaches',
    title: '4. Review Your Email Breach History',
    icon: Mail,
    risk: 'High',
    whyItMatters:
      'Billions of passwords and email addresses have been stolen in data breaches over the years. If your email was in a breach, hackers may have your old passwords — and many people reuse the same password on multiple sites.',
    steps: [
      'Go to haveibeenpwned.com (this is a trusted, free security tool run by a respected researcher).',
      'Type your email address and click "pwned?"',
      'Review the list of breaches your email appeared in.',
      'For each breached site: change your password immediately if you still use it.',
      'If you use the same password on multiple sites, change all of them.',
      'Consider using a password manager to create strong, unique passwords.',
    ],
    checklist: [
      { id: 'hibp-checked', label: 'I checked my primary email on Have I Been Pwned' },
      { id: 'hibp-secondary', label: 'I checked any secondary or older email addresses too' },
      { id: 'passwords-changed', label: 'I changed passwords for any breached accounts I still use' },
    ],
    externalLinks: [
      { label: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/' },
      { label: 'Firefox Monitor (alternative)', url: 'https://monitor.firefox.com/' },
    ],
  },
  {
    id: 'phone-exposure',
    title: '5. Check Your Phone Number Exposure',
    icon: Phone,
    risk: 'Medium',
    whyItMatters:
      'If your phone number is publicly available, scammers can use it for robocalls, phishing texts, and SIM-swap attacks (where they take over your phone number to access your bank accounts).',
    steps: [
      'Search your phone number (with area code) on Google in quotes, like "(555) 123-4567".',
      'Check if your number appears on any people-search sites (from Step 3).',
      'Review who has your phone number: is it listed on any social media profiles?',
      'Check if your number is on the National Do Not Call Registry.',
      'Consider using a Google Voice number for public-facing registrations instead of your real number.',
    ],
    checklist: [
      { id: 'phone-googled', label: 'I searched my phone number on Google' },
      { id: 'phone-social', label: 'I checked if my number is visible on social media' },
      { id: 'phone-dncr', label: 'I verified my number is on the Do Not Call Registry' },
    ],
    externalLinks: [
      { label: 'Do Not Call Registry', url: 'https://www.donotcall.gov/' },
      { label: 'Google Voice (free number)', url: 'https://voice.google.com/' },
    ],
  },
  {
    id: 'app-permissions',
    title: '6. Review App Permissions on Your Phone',
    icon: Smartphone,
    risk: 'Medium',
    whyItMatters:
      'Many apps request access to your camera, microphone, contacts, and location — even when they don\'t need it. A flashlight app doesn\'t need your contacts list. Reviewing permissions helps you limit who has access to your personal data.',
    steps: [
      'iPhone: Go to Settings > Privacy & Security. Tap each category (Location, Contacts, Photos, etc.) to see which apps have access.',
      'iPhone: Turn off access for any app that doesn\'t need it.',
      'Android: Go to Settings > Privacy > Permission Manager. Review each category.',
      'Android: For each permission, tap it to see which apps have access and revoke unnecessary ones.',
      'Pay special attention to: Location, Camera, Microphone, Contacts, and Photos.',
      'If an app stops working after you remove a permission, you can always turn it back on.',
    ],
    checklist: [
      { id: 'perms-location', label: 'I reviewed which apps have location access' },
      { id: 'perms-camera', label: 'I reviewed camera and microphone permissions' },
      { id: 'perms-contacts', label: 'I reviewed contacts and photos permissions' },
      { id: 'perms-revoked', label: 'I turned off permissions for apps that don\'t need them' },
    ],
    externalLinks: [],
  },
  {
    id: 'google-account',
    title: '7. Check What Google Knows About You',
    icon: Globe,
    risk: 'Medium',
    whyItMatters:
      'If you use Google (Gmail, Google Maps, Chrome, YouTube, or an Android phone), Google has been collecting data about your searches, location history, YouTube watches, and more — often for years. You can see and delete this data.',
    steps: [
      'Go to myaccount.google.com and sign in.',
      'Click "Data & Privacy" in the left menu.',
      'Under "History settings," click "Web & App Activity" — this shows everything you\'ve searched.',
      'Click "Location History" to see everywhere Google has tracked you.',
      'Click "YouTube History" to see your watch and search history.',
      'To delete old data: click "Auto-delete" and set it to delete after 3 months or 18 months.',
      'Under "Ads personalization," you can see the profile Google has built about you.',
    ],
    checklist: [
      { id: 'google-activity', label: 'I reviewed my Google Web & App Activity' },
      { id: 'google-location', label: 'I checked my Google Location History' },
      { id: 'google-autodelete', label: 'I set up auto-delete for old activity' },
      { id: 'google-ads', label: 'I reviewed my Google ad personalization profile' },
    ],
    externalLinks: [
      { label: 'Google My Account', url: 'https://myaccount.google.com/' },
      { label: 'Google Activity Controls', url: 'https://myaccount.google.com/activitycontrols' },
      { label: 'Google Ad Settings', url: 'https://adssettings.google.com/' },
    ],
  },
];

/* ── Risk badge colors ──────────────────────── */
function riskColor(risk: 'Low' | 'Medium' | 'High') {
  switch (risk) {
    case 'High':
      return 'bg-red-100 text-red-800 border-red-300 dark:bg-red-950 dark:text-red-300 dark:border-red-800';
    case 'Medium':
      return 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800';
    case 'Low':
      return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-950 dark:text-green-300 dark:border-green-800';
  }
}

function riskIcon(risk: 'Low' | 'Medium' | 'High') {
  switch (risk) {
    case 'High':
      return <AlertTriangle className="w-4 h-4" />;
    case 'Medium':
      return <Shield className="w-4 h-4" />;
    case 'Low':
      return <CheckCircle2 className="w-4 h-4" />;
  }
}

/* ── Component ──────────────────────────────── */
export default function DigitalFootprintScanner() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ 'google-yourself': true });

  const allCheckItems = useMemo(
    () => SECTIONS.flatMap((s) => s.checklist.map((c) => c.id)),
    []
  );
  const totalItems = allCheckItems.length;
  const completedItems = allCheckItems.filter((id) => checked[id]).length;
  const progressPct = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const sectionCompletion = (section: ScannerSection) => {
    const ids = section.checklist.map((c) => c.id);
    const done = ids.filter((id) => checked[id]).length;
    return { done, total: ids.length, complete: done === ids.length && ids.length > 0 };
  };

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleSection = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  /* Summary recommendations based on what's NOT checked */
  const getRecommendations = () => {
    const recs: string[] = [];
    if (!checked['google-searched']) recs.push('Search your name on Google to see what\'s publicly visible about you.');
    if (!checked['fb-privacy']) recs.push('Lock down your Facebook privacy settings — they\'re often set to "Public" by default.');
    if (!checked['spokeo-check'] || !checked['whitepages-check'])
      recs.push('Check the major data broker sites and submit opt-out requests to remove your personal information.');
    if (!checked['hibp-checked']) recs.push('Check if your email has been in any data breaches at haveibeenpwned.com.');
    if (!checked['phone-googled']) recs.push('Search your phone number on Google to see if it\'s publicly listed anywhere.');
    if (!checked['perms-location']) recs.push('Review the app permissions on your phone — many apps have access they don\'t need.');
    if (!checked['google-activity']) recs.push('Review what Google has collected about your activity and set up auto-delete.');
    if (recs.length === 0) recs.push('Great work! You\'ve completed all the checks. Consider revisiting every 3–6 months, as data brokers often re-list your information.');
    return recs;
  };

  return (
    <>
      <SEOHead
        title="Digital Footprint Scanner — Check What's Public About You Online"
        description="Free guided checklist that walks you through checking your online exposure. Find out what personal information is publicly available and learn how to remove it."
        path="/tools/digital-footprint-scanner"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ── Header ──────────────────────────── */}
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <Fingerprint className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Privacy</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Digital Footprint Scanner</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              This guided checklist walks you through checking what personal information is publicly
              available about you online — and shows you how to remove it. Work through each section
              at your own pace.
            </p>
          </div>
        </section>

        {/* ── Important notice ────────────────── */}
        <section className="container pt-8 pb-2">
          <Card className="border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20">
            <CardContent className="p-5 flex items-start gap-3">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg mb-1">This is an educational tool — not an actual scanner</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We don't collect or scan any of your data. This checklist gives you step-by-step
                  instructions to check your own exposure on real websites. Your progress is saved
                  only in your browser and is never sent anywhere.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Progress bar ────────────────────── */}
        <section className="container py-6">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Your Progress</h2>
                <span className="text-lg font-bold text-primary">
                  {completedItems} / {totalItems} checks completed
                </span>
              </div>
              <Progress value={progressPct} className="h-4 mb-2" />
              <p className="text-sm text-muted-foreground">
                {progressPct === 100
                  ? 'All done! Scroll down for your personalized recommendations.'
                  : progressPct > 50
                    ? 'You\'re more than halfway there — keep going!'
                    : 'Take your time. Each section helps protect your privacy.'}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ── Sections ────────────────────────── */}
        <section className="container pb-10 space-y-4">
          {SECTIONS.map((section) => {
            const { done, total, complete } = sectionCompletion(section);
            const isExpanded = expanded[section.id] ?? false;
            const Icon = section.icon;

            return (
              <Card
                key={section.id}
                className={complete ? 'border-green-500/40 bg-green-50/30 dark:bg-green-950/10' : ''}
              >
                <CardContent className="p-0">
                  {/* Section header — clickable to expand/collapse */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/30 transition-colors rounded-t-lg"
                  >
                    <div
                      className={`p-3 rounded-lg shrink-0 ${
                        complete
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {complete ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium border ${riskColor(section.risk)}`}
                        >
                          {riskIcon(section.risk)}
                          {section.risk} Risk
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {done} of {total} checks completed
                      </p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-border">
                      {/* Why it matters */}
                      <div className="mt-5 mb-5 p-4 bg-muted/40 rounded-lg">
                        <h4 className="font-semibold text-base mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                          Why This Matters
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {section.whyItMatters}
                        </p>
                      </div>

                      {/* Step-by-step instructions */}
                      <div className="mb-5">
                        <h4 className="font-semibold text-base mb-3">Step-by-Step Instructions</h4>
                        <ol className="space-y-2">
                          {section.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                                {i + 1}
                              </span>
                              <p className="text-base leading-relaxed">{step}</p>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* External links */}
                      {section.externalLinks && section.externalLinks.length > 0 && (
                        <div className="mb-5 flex flex-wrap gap-2">
                          {section.externalLinks.map((link) => (
                            <Button key={link.url} variant="outline" size="sm" asChild>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                                <ExternalLink className="w-3 h-3 ml-1.5" />
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}

                      {/* Checklist */}
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          Mark What You've Checked
                        </h4>
                        <div className="space-y-3">
                          {section.checklist.map((item) => (
                            <label
                              key={item.id}
                              className="flex items-start gap-3 cursor-pointer group"
                            >
                              <Checkbox
                                checked={checked[item.id] ?? false}
                                onCheckedChange={() => toggle(item.id)}
                                className="mt-1 h-5 w-5"
                              />
                              <div>
                                <span
                                  className={`text-base leading-relaxed ${
                                    checked[item.id]
                                      ? 'line-through text-muted-foreground'
                                      : 'text-foreground'
                                  }`}
                                >
                                  {item.label}
                                </span>
                                {item.detail && (
                                  <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                                )}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}

          {/* ── Summary / Recommendations ──── */}
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Your Personalized Recommendations
              </h2>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                Based on the checks you haven't completed yet, here's what to focus on:
              </p>
              <div className="space-y-3">
                {getRecommendations().map((rec, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>

              {progressPct === 100 && (
                <div className="mt-6 p-4 bg-green-100 dark:bg-green-950 border border-green-300 dark:border-green-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-300" />
                    <h3 className="font-semibold text-green-800 dark:text-green-200">
                      All Checks Complete!
                    </h3>
                  </div>
                  <p className="text-base text-green-700 dark:text-green-300 leading-relaxed">
                    You've gone through every section of the Digital Footprint Scanner. Set a
                    reminder to come back and check again in 3–6 months — data brokers often
                    re-list your information over time.
                  </p>
                </div>
              )}

              <div className="mt-6 p-4 bg-muted/40 rounded-lg">
                <h4 className="font-semibold mb-2">Want ongoing protection?</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Going through each data broker site manually takes 3–5 hours and needs to be
                  repeated every few months. Paid removal services handle this automatically:
                  DeleteMe ($129/year), Kanary ($100/year), or Incogni ($6.50/month). These
                  services are not affiliated with TekSure.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
