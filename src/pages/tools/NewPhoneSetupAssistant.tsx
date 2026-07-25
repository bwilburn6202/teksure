import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  Printer,
  Shield,
  Heart,
  Cloud,
  Settings,
  Users,
} from 'lucide-react';

type PhoneType = 'iphone' | 'android' | null;

interface CheckItem {
  id: string;
  label: string;
  detail: string;
  tip?: string;
  iphoneOnly?: boolean;
  androidOnly?: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  items: CheckItem[];
}

const SECTIONS: Section[] = [
  {
    id: 'basics',
    title: 'Basic Setup',
    icon: Settings,
    color: 'text-blue-500',
    items: [
      {
        id: 'passcode',
        label: 'Set a PIN or passcode',
        detail:
          'A 6-digit PIN keeps strangers out of your phone if it is lost or stolen. On iPhone: Settings → Face ID & Passcode (or Touch ID & Passcode) → Turn Passcode On. On Android: Settings → Security → Screen Lock → PIN.',
        tip: 'Choose a PIN you will remember but is not your birthday — that is the first thing thieves guess.',
      },
      {
        id: 'faceid',
        label: 'Set up Face ID or fingerprint unlock',
        detail:
          'This lets you unlock your phone and pay for apps without typing your PIN every time. On iPhone: Settings → Face ID & Passcode → Set Up Face ID. On Android: Settings → Security → Fingerprint or Face Unlock.',
        tip: 'You still keep your PIN as a backup — Face ID and fingerprint are optional but very convenient.',
      },
      {
        id: 'wifi',
        label: 'Connect to your home Wi-Fi',
        detail:
          'On iPhone: Settings → Wi-Fi → tap your network name → enter password. On Android: Settings → Network → Wi-Fi → tap your network. Your Wi-Fi password is on the sticker on your router.',
      },
      {
        id: 'textsize',
        label: 'Set text size to a comfortable level',
        detail:
          'On iPhone: Settings → Display & Brightness → Text Size → drag the slider right to make text larger. Also check Settings → Accessibility → Display & Text Size → Bold Text. On Android: Settings → Display → Font Size → drag to Large or Largest.',
      },
      {
        id: 'brightness',
        label: 'Adjust screen brightness',
        detail:
          'On iPhone: swipe down from the top right corner of the screen to open Control Center, then drag the brightness slider. On Android: swipe down from the top of the screen. Keeping brightness at 70–80% makes the screen easy to see without draining the battery too quickly.',
      },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency Information',
    icon: Heart,
    color: 'text-red-500',
    items: [
      {
        id: 'emergency_contacts',
        label: 'Add emergency contacts',
        detail:
          'On iPhone: Open the Health app → tap your profile picture in the top right → Medical ID → Edit → scroll to Emergency Contacts. On Android: Open Contacts → your own contact → Edit → scroll to "Add relationship." Or open Emergency SOS in Settings to add contacts.',
        tip: 'Emergency contacts can be seen from the lock screen without unlocking — first responders can access them.',
      },
      {
        id: 'medical_id',
        label: 'Fill in your Medical ID',
        detail:
          'Medical ID stores your blood type, allergies, medications, and conditions. It can be accessed from the lock screen in an emergency without unlocking the phone. On iPhone: Health app → your profile picture → Medical ID → Edit. On Android: Settings → About Phone → Emergency Information.',
        iphoneOnly: false,
      },
      {
        id: 'sos',
        label: 'Learn how to call emergency SOS',
        detail:
          'On iPhone: press and hold the side button + either volume button until the SOS slider appears. Or press side button 5 times quickly. On Android: press the power button 5 times quickly, or Settings → Emergency SOS to set up. This calls 911 and texts your emergency contacts your location.',
      },
    ],
  },
  {
    id: 'backup',
    title: 'Backup Your Photos and Contacts',
    icon: Cloud,
    color: 'text-cyan-500',
    items: [
      {
        id: 'icloud_backup',
        label: 'Turn on iCloud backup (iPhone)',
        detail:
          'iCloud automatically backs up your photos, contacts, and settings over Wi-Fi. Settings → [your name] → iCloud → iCloud Backup → turn on Back Up This iPhone. Backups happen automatically when your phone is plugged in and on Wi-Fi.',
        iphoneOnly: true,
      },
      {
        id: 'google_photos',
        label: 'Set up Google Photos backup (Android)',
        detail:
          'Install Google Photos from the Play Store (free). Open it, sign in with your Gmail account, tap your profile picture → Photos settings → Backup → turn on Backup. Your photos automatically upload to Google\'s servers for free (up to 15 GB).',
        androidOnly: true,
      },
      {
        id: 'icloud_photos',
        label: 'Turn on iCloud Photos (iPhone)',
        detail:
          'Settings → [your name] → iCloud → Photos → turn on Sync This iPhone. Your photos upload to iCloud and can be seen from any device or at icloud.com. Free storage: 5 GB. Upgrade to 50 GB for $1/month if you have many photos.',
        iphoneOnly: true,
      },
      {
        id: 'contacts_backup',
        label: 'Make sure contacts are synced to the cloud',
        detail:
          'On iPhone: Settings → [your name] → iCloud → Contacts → turn on. On Android: Settings → Accounts → Google → your Gmail account → make sure Contacts is toggled on. This means if you lose your phone, you get all contacts back automatically on a new one.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security Settings',
    icon: Shield,
    color: 'text-purple-500',
    items: [
      {
        id: 'account_2fa',
        label: 'Turn on 2-step verification for your email',
        detail:
          'Visit myaccount.google.com (Gmail) or appleid.apple.com (iPhone Apple ID) → Security → 2-Step Verification (Google) or Two-Factor Authentication (Apple) → turn it on. This means your password alone cannot unlock your accounts.',
        tip: '2-step verification is one of the most important security steps — do not skip it.',
      },
      {
        id: 'auto_update',
        label: 'Turn on automatic software updates',
        detail:
          'On iPhone: Settings → General → Software Update → Automatic Updates → turn on both options. On Android: Settings → System → Software Update → turn on automatic updates. Updates fix security holes — automatic updates mean you never have to remember.',
      },
      {
        id: 'find_my',
        label: 'Turn on Find My Phone',
        detail:
          'If your phone is lost or stolen, Find My Phone shows its location on a map. On iPhone: Settings → [your name] → Find My → Find My iPhone → turn on. On Android: Settings → Security → Find My Device — make sure it is on. Sign in to find.apple.com or android.com/find to locate it.',
      },
      {
        id: 'lock_screen',
        label: 'Check your lock screen settings',
        detail:
          'Make sure personal notifications do not show on the locked screen. On iPhone: Settings → Notifications → Show Previews → change to "When Unlocked." On Android: Settings → Notifications → Sensitive Notifications → turn off "Show sensitive content on lock screen."',
      },
    ],
  },
  {
    id: 'apps',
    title: 'Essential Apps to Install',
    icon: Smartphone,
    color: 'text-green-500',
    items: [
      {
        id: 'app_maps',
        label: 'Maps: Google Maps or Apple Maps',
        detail:
          'Apple Maps is already on iPhone. For Android, install Google Maps from the Play Store. Both are free. Download your area for offline use: in Google Maps, tap your profile picture → Offline Maps → Select Your Own Map.',
      },
      {
        id: 'app_camera',
        label: 'Learn the camera app',
        detail:
          'Open the Camera app and take a few test photos. Tap the screen where you want to focus before shooting. Use the + and - buttons or pinch to zoom in and out. Find your photos in the Photos app (iPhone) or Gallery app (Android).',
      },
      {
        id: 'app_video',
        label: 'Video calling: FaceTime (iPhone) or Google Meet / Zoom (Android)',
        detail:
          'FaceTime is already installed on iPhones — no setup needed. For Android, download the free Zoom or Google Meet app. Install it and create a free account so family can call you on video.',
      },
      {
        id: 'app_weather',
        label: 'Check your weather app',
        detail:
          'The built-in Weather app on iPhone and Android is excellent. Open it once and allow your location so it shows local weather. For more detail, the free Weather Channel app and AccuWeather are both highly rated.',
      },
      {
        id: 'app_notes',
        label: 'Notes app for quick reminders',
        detail:
          'The Notes app (iPhone) and Keep app (Android) are free and great for shopping lists, reminders, and anything you want to write down quickly. You can also ask Siri or Google Assistant: "Remind me to call Dr. Smith tomorrow at 2 PM."',
      },
    ],
  },
  {
    id: 'contacts',
    title: 'Family & Support Contacts',
    icon: Users,
    color: 'text-orange-500',
    items: [
      {
        id: 'family_contacts',
        label: 'Add your important contacts',
        detail:
          'Open the Contacts app and add the people you call most: family members, your doctor, your pharmacy, your bank\'s customer service number. Include at least one emergency contact who is not in the same household.',
      },
      {
        id: 'favorite_contacts',
        label: 'Set favorites for one-tap calling',
        detail:
          'On iPhone: open a contact → tap the star (☆) → they appear at the top of your Contacts as Favorites. On Android: open a contact → tap the star icon. This makes calling your most important people much faster.',
      },
      {
        id: 'tech_support',
        label: 'Save a tech support contact',
        detail:
          'Add a contact called "Tech Help" with the number of whoever helps you with tech (family member, Apple Store, etc.). Also save: Apple Support 1-800-275-2273 (iPhone) or the manufacturer support line for your Android phone. This way, when something goes wrong, you know who to call.',
      },
    ],
  },
];

export default function NewPhoneSetupAssistant() {
  const [phoneType, setPhoneType] = useState<PhoneType>(null);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['basics']));

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleSection = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const visibleSections = SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) => {
      if (item.iphoneOnly && phoneType === 'android') return false;
      if (item.androidOnly && phoneType === 'iphone') return false;
      return true;
    }),
  }));

  const totalItems = visibleSections.reduce((sum, s) => sum + s.items.length, 0);
  const checkedCount = [...checked].filter((id) =>
    visibleSections.some((s) => s.items.some((i) => i.id === id)),
  ).length;
  const pct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <>
      <SEOHead
        title="New Phone Setup Assistant | TekSure"
        description="A step-by-step checklist to set up your new iPhone or Android phone the right way — backup, emergency info, security, and more."
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
        <div className="max-w-xl mx-auto px-4 pt-6">
          <PageBreadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'New Phone Setup Assistant' },
            ]}
          />

          <div className="text-center mb-8 mt-4">
            <div className="text-5xl mb-3">📱</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              New Phone Setup Assistant
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              A personalized checklist to set up your new phone the right way — step by step.
            </p>
          </div>

          {/* Phone type selector */}
          {!phoneType && (
            <Card className="mb-6">
              <CardContent className="p-6 text-center space-y-4">
                <p className="font-semibold text-gray-900 dark:text-white text-lg">
                  What kind of phone do you have?
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={() => setPhoneType('iphone')}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white h-14 text-base"
                  >
                    📱 iPhone
                  </Button>
                  <Button
                    onClick={() => setPhoneType('android')}
                    className="flex-1 bg-green-700 hover:bg-green-800 text-white h-14 text-base"
                  >
                    🤖 Android
                  </Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  iPhone is made by Apple. Android phones include Samsung Galaxy, Pixel, Motorola, and most others.
                </p>
              </CardContent>
            </Card>
          )}

          {phoneType && (
            <>
              {/* Phone type badge + progress */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      phoneType === 'iphone'
                        ? 'bg-gray-900 text-white'
                        : 'bg-green-700 text-white'
                    }
                  >
                    {phoneType === 'iphone' ? '📱 iPhone' : '🤖 Android'}
                  </Badge>
                  <button
                    onClick={() => { setPhoneType(null); setChecked(new Set()); }}
                    className="text-xs text-blue-500 hover:underline"
                  >
                    Change
                  </button>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {checkedCount}/{totalItems} done ({pct}%)
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>

              {/* Sections */}
              <div className="space-y-3 mb-6">
                {visibleSections.map((section) => {
                  const sectionChecked = section.items.filter((i) => checked.has(i.id)).length;
                  const isOpen = expanded.has(section.id);
                  const allDone = sectionChecked === section.items.length && section.items.length > 0;
                  const Icon = section.icon;

                  return (
                    <Card key={section.id} className={allDone ? 'border-green-200 dark:border-green-800' : ''}>
                      <CardContent className="p-0">
                        <button
                          className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                          onClick={() => toggleSection(section.id)}
                          aria-expanded={isOpen}
                        >
                          <div className={`p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 ${section.color}`}>
                            <Icon size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {section.title}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {sectionChecked}/{section.items.length} completed
                            </div>
                          </div>
                          {allDone && (
                            <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                          )}
                          {isOpen ? (
                            <ChevronUp size={16} className="text-gray-400 shrink-0" />
                          ) : (
                            <ChevronDown size={16} className="text-gray-400 shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                            {section.items.map((item) => {
                              const isDone = checked.has(item.id);
                              return (
                                <div key={item.id} className="p-4">
                                  <button
                                    className="w-full flex items-start gap-3 text-left"
                                    onClick={() => toggle(item.id)}
                                  >
                                    {isDone ? (
                                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                                    ) : (
                                      <Circle size={20} className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5" />
                                    )}
                                    <div className="flex-1">
                                      <div
                                        className={`font-medium text-sm ${
                                          isDone
                                            ? 'text-gray-400 dark:text-gray-500 line-through'
                                            : 'text-gray-900 dark:text-white'
                                        }`}
                                      >
                                        {item.label}
                                      </div>
                                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                        {item.detail}
                                      </div>
                                      {item.tip && (
                                        <div className="mt-2 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 text-xs rounded p-2">
                                          💡 {item.tip}
                                        </div>
                                      )}
                                    </div>
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {pct === 100 && (
                <Card className="mb-4 border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20">
                  <CardContent className="p-5 text-center">
                    <div className="text-3xl mb-2">🎉</div>
                    <p className="font-bold text-green-800 dark:text-green-200 text-lg">
                      Your phone is all set up!
                    </p>
                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                      You have covered all the important steps. Your phone is secured, backed up, and ready to use.
                    </p>
                  </CardContent>
                </Card>
              )}

              <Button
                variant="outline"
                className="w-full print:hidden"
                onClick={() => window.print()}
              >
                <Printer size={16} className="mr-2" />
                Print This Checklist
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
