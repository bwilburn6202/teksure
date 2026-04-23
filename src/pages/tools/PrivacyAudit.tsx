import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Shield, ChevronDown, ChevronUp, ExternalLink, Printer, CheckCircle } from 'lucide-react';

interface PrivacySetting {
  id: string;
  label: string;
  why: string;
  link?: string;
  linkLabel?: string;
}

interface Platform {
  id: string;
  name: string;
  icon: string;
  settings: PrivacySetting[];
}

const platforms: Platform[] = [
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

export default function PrivacyAudit() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  const toggleCheck = (settingId: string) => {
    setChecked(prev => ({ ...prev, [settingId]: !prev[settingId] }));
  };

  const activePlatforms = platforms.filter(p => selectedPlatforms.includes(p.id));
  const totalSettings = activePlatforms.reduce((sum, p) => sum + p.settings.length, 0);
  const checkedCount = activePlatforms.reduce((sum, p) => sum + p.settings.filter(s => checked[s.id]).length, 0);

  const score = useMemo(() => {
    if (totalSettings === 0) return 0;
    return Math.round((checkedCount / totalSettings) * 100);
  }, [checkedCount, totalSettings]);

  const scoreLabel = score >= 90 ? 'Excellent' : score >= 70 ? 'Good' : score >= 50 ? 'Fair' : score > 0 ? 'Needs Work' : 'Not Started';

  const handlePrint = () => window.print();

  return (
    <>
      <SEOHead title="Privacy Settings Audit — Check Your Privacy on Every Device | TekSure" description="Get a personalized privacy checklist for your phone, computer, and social media accounts. Step-by-step guide to tighten your privacy settings." path="/tools/privacy-audit" />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Privacy Audit' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Privacy Settings Audit</h1>
            <p className="text-muted-foreground text-lg">Select the devices and services you use, and we will give you a personalized checklist of privacy settings to review. Check off each one as you go and see your privacy score improve.</p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {!started ? (
            <>
              <h2 className="font-semibold text-lg mb-4">Which devices and services do you use?</h2>
              <p className="text-sm text-muted-foreground mb-6">Select all that apply. We will build your personalized privacy checklist.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {platforms.map(p => (
                  <button key={p.id} onClick={() => togglePlatform(p.id)} className={`p-4 rounded-2xl border-2 text-center transition-colors min-h-[44px] ${selectedPlatforms.includes(p.id) ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground/30'}`} aria-pressed={selectedPlatforms.includes(p.id)}>
                    <span className="text-2xl block mb-1">{p.icon}</span>
                    <span className="text-sm font-medium">{p.name}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => { if (selectedPlatforms.length > 0) setStarted(true); }} disabled={selectedPlatforms.length === 0} className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity min-h-[44px] disabled:opacity-40">
                Build My Privacy Checklist ({selectedPlatforms.length} selected)
              </button>
            </>
          ) : (
            <>
              {/* Score overview */}
              <div className="p-5 rounded-2xl border border-border bg-card mb-8">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h2 className="font-semibold text-lg">Privacy Score: {score}%</h2>
                    <p className="text-sm text-muted-foreground">{scoreLabel} — {checkedCount} of {totalSettings} settings checked</p>
                  </div>
                  <button onClick={handlePrint} className="p-2 rounded-lg border border-border hover:bg-muted transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Print checklist">
                    <Printer className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <Progress value={score} className="h-3" aria-label={`Privacy score: ${score} percent`} />
              </div>

              {/* Platform checklists */}
              <div className="space-y-4">
                {activePlatforms.map(platform => {
                  const isOpen = expandedPlatform === platform.id;
                  const platformChecked = platform.settings.filter(s => checked[s.id]).length;
                  return (
                    <div key={platform.id} className="rounded-2xl border border-border bg-card overflow-hidden">
                      <button className="w-full text-left p-5 flex items-center gap-4" onClick={() => setExpandedPlatform(isOpen ? null : platform.id)} aria-expanded={isOpen} aria-controls={`platform-${platform.id}`}>
                        <span className="text-2xl">{platform.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold">{platform.name}</h3>
                          <p className="text-sm text-muted-foreground">{platformChecked} of {platform.settings.length} checked</p>
                        </div>
                        {platformChecked === platform.settings.length && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-label="All settings checked" />}
                        {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" /> : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />}
                      </button>

                      {isOpen && (
                        <div id={`platform-${platform.id}`} className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                          {platform.settings.map(setting => (
                            <div key={setting.id} className="flex items-start gap-3">
                              <Checkbox id={setting.id} checked={!!checked[setting.id]} onCheckedChange={() => toggleCheck(setting.id)} className="mt-1" aria-label={setting.label} />
                              <div className="flex-1">
                                <label htmlFor={setting.id} className={`text-sm font-medium cursor-pointer ${checked[setting.id] ? 'line-through text-muted-foreground' : ''}`}>{setting.label}</label>
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{setting.why}</p>
                                {setting.link && (
                                  <a href={setting.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1 mt-1">
                                    <ExternalLink className="h-3 w-3" aria-hidden="true" /> {setting.linkLabel}
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <button onClick={() => setStarted(false)} className="px-4 py-2 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors min-h-[44px]">Change Devices</button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
