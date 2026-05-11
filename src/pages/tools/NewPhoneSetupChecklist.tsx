import { useState } from 'react';
import { Smartphone, Check, RotateCcw, Printer, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type PhoneType = 'iphone' | 'android';

interface CheckItem {
  id: string;
  label: string;
  detail: string;
  where?: string;
}

interface Section {
  title: string;
  emoji: string;
  items: CheckItem[];
}

const IPHONE_SECTIONS: Section[] = [
  {
    title: 'First 5 Minutes',
    emoji: '🚀',
    items: [
      { id: 'i-power', label: 'Turn on the phone', detail: 'Press and hold the side button until the Apple logo appears.', where: 'Side button (right edge)' },
      { id: 'i-language', label: 'Choose your language and country', detail: 'Select "English" and "United States."', where: 'Setup screen' },
      { id: 'i-wifi', label: 'Connect to your home Wi-Fi', detail: 'Tap your Wi-Fi network name and enter the password. This avoids using cellular data during setup.', where: 'Setup screen → Wi-Fi' },
      { id: 'i-transfer', label: 'Transfer data or set up as new', detail: 'If you have an old iPhone nearby, use Quick Start. If starting fresh, tap "Set Up Manually."', where: 'Setup screen' },
      { id: 'i-appleid', label: 'Sign in with your Apple ID', detail: 'Use the same email and password you used on your old iPhone. If you don\'t have one, create one — it\'s free.', where: 'Setup screen → Apple ID' },
    ],
  },
  {
    title: 'Security Setup',
    emoji: '🔒',
    items: [
      { id: 'i-faceid', label: 'Set up Face ID or Touch ID', detail: 'Follow the on-screen instructions to scan your face or fingerprint. This lets you unlock the phone and approve purchases.', where: 'Settings → Face ID & Passcode' },
      { id: 'i-passcode', label: 'Create a 6-digit passcode', detail: 'This is your backup if Face ID or Touch ID doesn\'t work. Write it down and keep it somewhere safe.', where: 'Settings → Face ID & Passcode' },
      { id: 'i-findmy', label: 'Turn on Find My iPhone', detail: 'Go to Settings → your name → Find My → Find My iPhone → ON. Also turn on "Send Last Location." This lets you find a lost phone.', where: 'Settings → [Your Name] → Find My' },
    ],
  },
  {
    title: 'Backup & iCloud',
    emoji: '☁️',
    items: [
      { id: 'i-icloud', label: 'Turn on iCloud backup', detail: 'Settings → your name → iCloud → iCloud Backup → Back Up Now. Your phone will back up automatically every night when charging.', where: 'Settings → [Your Name] → iCloud' },
      { id: 'i-photos', label: 'Turn on iCloud Photos', detail: 'Settings → your name → iCloud → Photos → iCloud Photos ON. Your photos are automatically saved to the cloud.', where: 'Settings → [Your Name] → iCloud → Photos' },
      { id: 'i-contacts', label: 'Confirm contacts are syncing', detail: 'Settings → your name → iCloud → toggle Contacts to ON. Your contacts will be backed up and available on all your Apple devices.', where: 'Settings → [Your Name] → iCloud' },
    ],
  },
  {
    title: 'Personalization',
    emoji: '🎨',
    items: [
      { id: 'i-text-size', label: 'Make text bigger if needed', detail: 'Settings → Display & Brightness → Text Size → drag the slider to the right for larger text.', where: 'Settings → Display & Brightness' },
      { id: 'i-display-zoom', label: 'Make icons bigger (Display Zoom)', detail: 'Settings → Display & Brightness → Display Zoom → tap Larger → Set. Everything on screen gets bigger.', where: 'Settings → Display & Brightness → Display Zoom' },
      { id: 'i-volume', label: 'Set a comfortable ringtone volume', detail: 'Use the volume buttons on the left side, or Settings → Sounds & Haptics → Ringer and Alerts slider.', where: 'Left side buttons or Settings → Sounds' },
      { id: 'i-brightness', label: 'Adjust screen brightness', detail: 'Swipe down from the top-right corner to open Control Center → drag the sun icon up or down.', where: 'Control Center (swipe from top-right)' },
    ],
  },
  {
    title: 'Essential Apps',
    emoji: '📱',
    items: [
      { id: 'i-appstore', label: 'Open the App Store and install your apps', detail: 'Tap the blue App Store icon → search for the app name → tap Get → authenticate with Face ID or passcode.', where: 'App Store (blue icon)' },
      { id: 'i-email', label: 'Set up your email', detail: 'Settings → Mail → Accounts → Add Account → choose your email provider (Gmail, Yahoo, Outlook).', where: 'Settings → Mail → Accounts' },
      { id: 'i-wallet', label: 'Add a card to Apple Wallet (optional)', detail: 'Open the Wallet app → tap + → Add Credit or Debit Card → follow the steps.', where: 'Wallet app' },
      { id: 'i-emergency', label: 'Set up Medical ID and emergency contacts', detail: 'Open Health app → your profile photo → Medical ID → Edit → fill in your conditions, allergies, emergency contact.', where: 'Health app → Medical ID' },
    ],
  },
  {
    title: 'Final Checks',
    emoji: '✅',
    items: [
      { id: 'i-update', label: 'Check for software updates', detail: 'Settings → General → Software Update. Install any available updates.', where: 'Settings → General → Software Update' },
      { id: 'i-do-not-disturb', label: 'Set up Do Not Disturb for nighttime', detail: 'Settings → Focus → Do Not Disturb → Add Schedule → set your bedtime hours.', where: 'Settings → Focus → Do Not Disturb' },
      { id: 'i-old-phone', label: 'Keep your old phone for 2 weeks', detail: 'Don\'t wipe or sell your old phone until you\'ve confirmed everything transferred and the new phone works for daily use.', where: 'N/A' },
    ],
  },
];

const ANDROID_SECTIONS: Section[] = [
  {
    title: 'First 5 Minutes',
    emoji: '🚀',
    items: [
      { id: 'a-power', label: 'Turn on the phone', detail: 'Press and hold the power button (usually on the right side) until the screen lights up.', where: 'Power button (right side)' },
      { id: 'a-language', label: 'Choose your language', detail: 'Select "English (United States)" from the list.', where: 'Setup screen' },
      { id: 'a-wifi', label: 'Connect to your home Wi-Fi', detail: 'Tap your Wi-Fi network name and enter the password. Wi-Fi is needed for the quickest setup.', where: 'Setup screen → Wi-Fi' },
      { id: 'a-google', label: 'Sign in with your Google account', detail: 'Enter your Gmail address and password. This is how your apps, contacts, and photos are backed up.', where: 'Setup screen → Google account' },
      { id: 'a-copy', label: 'Copy data from your old phone', detail: 'When asked, select "Copy your data." Hold your old phone nearby — Android can transfer wirelessly. Or select "Restore from Google backup."', where: 'Setup screen → Copy data' },
    ],
  },
  {
    title: 'Security Setup',
    emoji: '🔒',
    items: [
      { id: 'a-fingerprint', label: 'Set up fingerprint or face unlock', detail: 'Settings → Security → Fingerprint (or Biometrics on Samsung) → follow the scan instructions.', where: 'Settings → Security → Biometrics' },
      { id: 'a-pin', label: 'Create a 6-digit PIN as backup', detail: 'Settings → Security → Screen Lock → PIN → enter a 6-digit number twice. Write it down safely.', where: 'Settings → Security → Screen Lock' },
      { id: 'a-findmy', label: 'Turn on Find My Device', detail: 'Settings → Google → Find My Device → turn ON. Go to android.com/find to locate your phone if it\'s ever lost.', where: 'Settings → Google → Find My Device' },
    ],
  },
  {
    title: 'Backup & Google',
    emoji: '☁️',
    items: [
      { id: 'a-backup', label: 'Turn on Google backup', detail: 'Settings → Google → Backup → Back up to Google Drive → turn ON. Tap "Back up now" for your first backup.', where: 'Settings → Google → Backup' },
      { id: 'a-photos', label: 'Set up Google Photos backup', detail: 'Open Google Photos app → your profile photo → Photos settings → Back up → turn ON. Your photos upload to Google automatically.', where: 'Google Photos app → Settings' },
      { id: 'a-contacts', label: 'Confirm contacts are syncing', detail: 'Settings → Accounts → Google → tap your account → make sure Contacts sync is on.', where: 'Settings → Accounts → Google' },
    ],
  },
  {
    title: 'Personalization',
    emoji: '🎨',
    items: [
      { id: 'a-text-size', label: 'Make text bigger', detail: 'Settings → Display → Font size → drag to Large or Largest.', where: 'Settings → Display → Font size' },
      { id: 'a-display-size', label: 'Make everything on screen bigger', detail: 'Settings → Display → Display size → drag right to make icons and content larger.', where: 'Settings → Display → Display size' },
      { id: 'a-volume', label: 'Set ringtone volume', detail: 'Press the volume up button → tap the three dots or settings icon → adjust Ringtone volume separately.', where: 'Volume buttons on side' },
      { id: 'a-brightness', label: 'Adjust screen brightness', detail: 'Swipe down from the top of the screen → drag the brightness bar.', where: 'Notification panel (swipe down)' },
    ],
  },
  {
    title: 'Essential Apps',
    emoji: '📱',
    items: [
      { id: 'a-playstore', label: 'Install your apps from Google Play', detail: 'Open the Play Store → search for the app → tap Install.', where: 'Google Play Store' },
      { id: 'a-email', label: 'Set up your email', detail: 'If you use Gmail, it\'s already set up. For other email: Settings → Accounts → Add account → Email.', where: 'Gmail app or Settings → Accounts' },
      { id: 'a-wallet', label: 'Set up Google Wallet (optional)', detail: 'Open Google Wallet app → Add to Wallet → Credit or debit card → follow the steps to tap and pay.', where: 'Google Wallet app' },
      { id: 'a-emergency', label: 'Add emergency information', detail: 'Settings → Safety & Emergency (or About Phone → Emergency Information on some phones) → add contacts and medical info.', where: 'Settings → Safety & Emergency' },
    ],
  },
  {
    title: 'Final Checks',
    emoji: '✅',
    items: [
      { id: 'a-update', label: 'Check for software updates', detail: 'Settings → System → System update. Install any available updates.', where: 'Settings → System → System update' },
      { id: 'a-dnd', label: 'Set up Do Not Disturb', detail: 'Settings → Sound → Do Not Disturb → set your sleep hours so calls don\'t wake you at night.', where: 'Settings → Sound → Do Not Disturb' },
      { id: 'a-old-phone', label: 'Keep your old phone for 2 weeks', detail: 'Don\'t factory reset or sell the old phone until you\'ve confirmed everything moved over correctly.', where: 'N/A' },
    ],
  },
];

export default function NewPhoneSetupChecklist() {
  const [phoneType, setPhoneType] = useState<PhoneType | null>(null);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setChecked(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const toggleSection = (title: string) =>
    setCollapsed(prev => { const n = new Set(prev); n.has(title) ? n.delete(title) : n.add(title); return n; });

  const sections = phoneType === 'iphone' ? IPHONE_SECTIONS : ANDROID_SECTIONS;
  const allItems = sections.flatMap(s => s.items);
  const doneCount = allItems.filter(i => checked.has(i.id)).length;
  const pct = allItems.length > 0 ? Math.round((doneCount / allItems.length) * 100) : 0;

  return (
    <>
      <SEOHead
        title="New Phone Setup Checklist — TekSure"
        description="Step-by-step checklist for setting up a new iPhone or Android phone. Tick off each task as you go — from security and backup to apps and personalization."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-6 print:hidden">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950/60 mb-4">
              <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">New Phone Setup Checklist</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Setting up a new phone? Work through this checklist step by step so nothing gets missed.
            </p>
          </div>

          {/* Phone picker */}
          {!phoneType ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
              <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-4 text-center">What kind of phone are you setting up?</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPhoneType('iphone')}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all"
                >
                  <span className="text-5xl">🍎</span>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-gray-100">iPhone</p>
                    <p className="text-xs text-gray-500">Apple iOS</p>
                  </div>
                </button>
                <button
                  onClick={() => setPhoneType('android')}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all"
                >
                  <span className="text-5xl">🤖</span>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-gray-100">Android</p>
                    <p className="text-xs text-gray-500">Samsung, Pixel, etc.</p>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-4 mb-4 print:hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{phoneType === 'iphone' ? '🍎' : '🤖'}</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {phoneType === 'iphone' ? 'iPhone' : 'Android'} Setup
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{doneCount}/{allItems.length} done</span>
                    {pct === 100 && <span className="text-green-600 dark:text-green-400 font-bold text-sm">All done! 🎉</span>}
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              {/* Sections */}
              {sections.map(section => {
                const sectionDone = section.items.filter(i => checked.has(i.id)).length;
                const isCollapsed = collapsed.has(section.title);
                return (
                  <div key={section.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm mb-3 overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex items-center justify-between p-4 text-left print:hidden"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{section.emoji}</span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">{section.title}</span>
                        {sectionDone === section.items.length && (
                          <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">Done</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{sectionDone}/{section.items.length}</span>
                        {isCollapsed ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronUp className="w-4 h-4 text-gray-400" />}
                      </div>
                    </button>
                    {!isCollapsed && (
                      <div className="px-4 pb-4 pt-1 space-y-2 border-t border-gray-100 dark:border-gray-800">
                        {section.items.map(item => {
                          const done = checked.has(item.id);
                          return (
                            <button
                              key={item.id}
                              onClick={() => toggle(item.id)}
                              className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                                done ? 'bg-green-50 dark:bg-green-950/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-all ${
                                done ? 'bg-green-500 border-green-500' : 'border-gray-300 dark:border-gray-600'
                              }`}>
                                {done && <Check className="w-3.5 h-3.5 text-white" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`font-semibold text-sm ${done ? 'text-green-800 dark:text-green-200 line-through opacity-70' : 'text-gray-900 dark:text-gray-100'}`}>
                                  {item.label}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.detail}</p>
                                {item.where && item.where !== 'N/A' && (
                                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5 font-medium">📍 {item.where}</p>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex gap-3 mt-2 print:hidden">
                <button
                  onClick={() => window.print()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                >
                  <Printer className="w-5 h-5" /> Print Checklist
                </button>
                <button
                  onClick={() => { setPhoneType(null); setChecked(new Set()); setCollapsed(new Set()); }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
