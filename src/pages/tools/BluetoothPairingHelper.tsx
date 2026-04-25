import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Bluetooth, ArrowRight, ArrowLeft, RotateCcw, HelpCircle,
  CheckCircle, PartyPopper, ChevronDown, ChevronUp, Info,
  Ear, Headphones, Speaker, Keyboard, Car, Watch, Activity, Tv,
  Volume2, X,
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

type DeviceType =
  | 'hearing-aids'
  | 'earbuds'
  | 'speaker'
  | 'keyboard-mouse'
  | 'car'
  | 'smart-watch'
  | 'fitness-tracker'
  | 'tv-soundbar';

type PhoneOS = 'iphone' | 'android';

type DeviceSubtype = string; // e.g. 'mfi', 'mfa', 'le-audio', 'airpods', 'galaxy-buds', 'generic', 'apple-watch', 'fitbit', 'garmin', 'carplay', 'android-auto', 'bluetooth-car'

interface PairingStep {
  title: string;
  instructions: string[];
  stuckTips?: string[];
}

interface TroubleshootingItem {
  problem: string;
  fix: string[];
}

interface PairingFlow {
  // label for header Badge
  label: string;
  steps: PairingStep[];
  troubleshooting: TroubleshootingItem[];
  // How to forget/disconnect this device on this OS
  forget: string[];
  // Suggested ways to test sound after pairing
  testSound?: string[];
}

// For device types where the subtype depends on brand/protocol, list choices.
interface SubtypeOption {
  id: DeviceSubtype;
  label: string;
  description?: string;
}

// ── Device options (top level) ────────────────────────────────────────────────

const deviceOptions: {
  type: DeviceType;
  label: string;
  description: string;
  icon: typeof Bluetooth;
  color: string;
  bg: string;
}[] = [
  {
    type: 'hearing-aids',
    label: 'Hearing aids',
    description: 'Made for iPhone, Made for Android, Bluetooth LE Audio',
    icon: Ear,
    color: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
  },
  {
    type: 'earbuds',
    label: 'Wireless earbuds',
    description: 'AirPods, Samsung Galaxy Buds, or generic',
    icon: Headphones,
    color: 'text-violet-600',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
  },
  {
    type: 'speaker',
    label: 'Bluetooth speaker',
    description: 'Portable or home speaker',
    icon: Speaker,
    color: 'text-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
  },
  {
    type: 'keyboard-mouse',
    label: 'Keyboard or mouse',
    description: 'Wireless keyboard, mouse, or trackpad',
    icon: Keyboard,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    type: 'car',
    label: 'Car / CarPlay / Android Auto',
    description: 'Vehicle audio system or smart dash',
    icon: Car,
    color: 'text-orange-600',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
  },
  {
    type: 'smart-watch',
    label: 'Smart watch',
    description: 'Apple Watch, Fitbit, Garmin, or other',
    icon: Watch,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    type: 'fitness-tracker',
    label: 'Fitness tracker',
    description: 'Step counter, heart-rate band',
    icon: Activity,
    color: 'text-rose-600',
    bg: 'bg-rose-50 dark:bg-rose-950/30',
  },
  {
    type: 'tv-soundbar',
    label: 'TV or soundbar',
    description: 'Smart TV, Roku, Fire TV, or soundbar',
    icon: Tv,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
  },
];

// ── Subtype options for devices that need them ────────────────────────────────

const deviceSubtypes: Partial<Record<DeviceType, SubtypeOption[]>> = {
  'hearing-aids': [
    { id: 'mfi', label: 'Made for iPhone (MFi)', description: 'Designed specifically for iPhone' },
    { id: 'mfa', label: 'Made for Android (ASHA)', description: 'Designed for Android phones' },
    { id: 'le-audio', label: 'Bluetooth LE Audio', description: 'Newer standard — works with either' },
  ],
  earbuds: [
    { id: 'airpods', label: 'Apple AirPods', description: 'Including AirPods Pro and Max' },
    { id: 'galaxy-buds', label: 'Samsung Galaxy Buds', description: 'Galaxy Buds, Buds+, Buds Pro, Buds Live' },
    { id: 'generic', label: 'Other earbuds', description: 'Sony, Bose, JBL, Jabra, Beats, and others' },
  ],
  car: [
    { id: 'carplay', label: 'Apple CarPlay', description: 'Apple interface in the dash' },
    { id: 'android-auto', label: 'Android Auto', description: 'Google interface in the dash' },
    { id: 'bluetooth-car', label: 'Standard Bluetooth', description: 'Older car or no CarPlay / Auto' },
  ],
  'smart-watch': [
    { id: 'apple-watch', label: 'Apple Watch' },
    { id: 'fitbit', label: 'Fitbit' },
    { id: 'garmin', label: 'Garmin' },
    { id: 'generic-watch', label: 'Other smart watch', description: 'Samsung, Wear OS, or others' },
  ],
};

// ── Helper: flow keys are `${deviceType}:${subtype || '_'}:${os}` ────────────

function flowKey(type: DeviceType, subtype: DeviceSubtype | null, os: PhoneOS) {
  return `${type}:${subtype ?? '_'}:${os}`;
}

// ── Common troubleshooting items that apply to most flows ─────────────────────

const universalTroubleshooting: TroubleshootingItem[] = [
  {
    problem: 'My device does not appear in the list',
    fix: [
      'Move closer — stay within 3 feet of your phone while pairing.',
      'Make sure the device is in pairing mode (LED usually flashes blue or blue/red).',
      'Turn Bluetooth off on your phone, wait 10 seconds, turn it back on.',
      'Restart the Bluetooth device by turning it off, waiting 10 seconds, then on again.',
      'If you paired it to another phone nearby, that phone may be grabbing it — turn off that other phone\'s Bluetooth.',
    ],
  },
  {
    problem: 'It pairs but I hear no sound',
    fix: [
      'Check the volume on both your phone and the device — both need to be turned up.',
      'Make sure your phone is playing audio "through" the Bluetooth device. On iPhone, swipe down from the top-right and tap the AirPlay icon in the music box. On Android, check the audio output picker in your notification shade.',
      'Some devices have separate "Call" and "Media" audio — in Bluetooth settings, tap the (i) or gear icon next to the device name and enable both.',
      'Try playing a YouTube video or making a test call to confirm.',
    ],
  },
  {
    problem: 'Only one side works (earbuds or hearing aids)',
    fix: [
      'Put both earpieces back in the charging case, close the lid for 15 seconds, then open.',
      'Take both out at the same time and let them find each other before putting them in your ears.',
      'If still only one side: "Forget" the device in Bluetooth settings, then pair again from scratch.',
      'Check that both earpieces are charged — a dead one will simply not connect.',
    ],
  },
  {
    problem: 'The connection keeps dropping',
    fix: [
      'Stay within 10–30 feet of your phone, without walls between you and it.',
      'Move away from microwaves, baby monitors, and crowded Wi-Fi areas — they share the same radio frequency.',
      'Keep the Bluetooth device charged above 20%.',
      'If the device has firmware updates (check its companion app), install them — they often fix dropouts.',
      'As a last resort, forget the device and re-pair.',
    ],
  },
];

// ── Forget / disconnect blocks per phone OS ───────────────────────────────────

const forgetIphone = [
  'Open Settings on your iPhone.',
  'Tap Bluetooth.',
  'Find your device in the list and tap the blue (i) icon next to its name.',
  'Tap "Forget This Device", then confirm.',
];

const forgetAndroid = [
  'Open Settings on your Android phone.',
  'Tap "Connected devices" (or "Bluetooth", depending on phone).',
  'Find your device and tap the gear icon next to its name.',
  'Tap "Unpair" or "Forget", then confirm.',
];

// ── Test sound suggestions ────────────────────────────────────────────────────

const testSoundSuggestions = [
  'Play a YouTube video with clear speech.',
  'Make a quick test call to a friend or voicemail.',
  'Play a song you know well in your music app.',
  'For hearing aids and earbuds: listen separately to each side to confirm both work.',
];

// ── Pairing flows ─────────────────────────────────────────────────────────────

const flows: Record<string, PairingFlow> = {
  // ── Hearing aids — Made for iPhone ───────────────────────────────────────────
  [flowKey('hearing-aids', 'mfi', 'iphone')]: {
    label: 'Hearing aids (MFi) + iPhone',
    steps: [
      {
        title: 'Put the hearing aids in their charging case and close it',
        instructions: [
          'Place both hearing aids into their charging case.',
          'Close the lid completely for at least 10 seconds.',
          'This makes sure they start fresh when you take them out.',
        ],
        stuckTips: [
          'No charging case? Turn both hearing aids off and back on — many have a tiny power button or you open and close the battery door.',
        ],
      },
      {
        title: 'Open Settings on your iPhone',
        instructions: [
          'Find the gray gear-shaped Settings icon on your home screen.',
          'Tap it to open.',
        ],
      },
      {
        title: 'Go to Accessibility > Hearing Devices',
        instructions: [
          'Scroll down in Settings and tap "Accessibility".',
          'Scroll to the "Hearing" section and tap "Hearing Devices".',
          'Make sure Bluetooth is turned on — you will see a "Searching…" spinner.',
        ],
        stuckTips: [
          'If Bluetooth is off, go back to Settings > Bluetooth and turn it on first.',
          'Older iPhones may show "MFi Hearing Devices" — same thing.',
        ],
      },
      {
        title: 'Take the hearing aids OUT of the case',
        instructions: [
          'Open the charging case lid and take out both hearing aids.',
          'Do NOT put them in your ears yet.',
          'Hold them near your iPhone — they should enter pairing mode automatically.',
        ],
        stuckTips: [
          'Some models need you to press and hold a button for 3–5 seconds to enter pairing mode. Check the quick-start card that came with your hearing aids.',
        ],
      },
      {
        title: 'Tap your hearing aids when they appear',
        instructions: [
          'Wait 10–30 seconds — the name of your hearing aids will appear under "Devices".',
          'Tap the name to start pairing.',
          'You may see TWO pairing requests (one for each ear) — tap "Pair" on both.',
        ],
        stuckTips: [
          'Not showing up? Go back, close the case for 15 seconds, then open it again near the phone.',
          'Move to a quieter Bluetooth area — turn off nearby devices that might interfere.',
        ],
      },
      {
        title: 'iPhone automatically detects Left and Right',
        instructions: [
          'Your iPhone will label each hearing aid as "Left" or "Right" automatically.',
          'If the labels look wrong, you can tap each one later and rename.',
        ],
      },
      {
        title: 'Test each ear',
        instructions: [
          'Put both hearing aids in your ears.',
          'Play a short audio clip (voicemail greeting, YouTube, or a song).',
          'Cover one ear at a time to confirm sound comes from the correct side.',
          'Use the volume buttons on your iPhone to adjust — they now control the hearing aids.',
        ],
        stuckTips: [
          'Only hearing one side? See the troubleshooting section below.',
          'Sound too quiet? Tap Settings > Accessibility > Hearing Devices > your device name, and adjust Left and Right levels separately.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },

  // ── Hearing aids — Made for Android (ASHA) ───────────────────────────────────
  [flowKey('hearing-aids', 'mfa', 'android')]: {
    label: 'Hearing aids (Made for Android) + Android',
    steps: [
      {
        title: 'Put the hearing aids in their charging case and close it',
        instructions: [
          'Place both hearing aids in the charging case.',
          'Close the lid for 10 seconds to reset them.',
        ],
      },
      {
        title: 'Open Settings on your Android phone',
        instructions: [
          'Pull down from the top of the screen twice to see the quick-settings panel.',
          'Tap the gear icon to open Settings.',
        ],
      },
      {
        title: 'Go to Connected devices > Bluetooth',
        instructions: [
          'Tap "Connected devices".',
          'Tap "Pair new device" (or "+ Add device" on some phones).',
          'Bluetooth turns on automatically and starts scanning.',
        ],
        stuckTips: [
          'On Samsung: Settings > Connections > Bluetooth > Scan.',
          'If you do not see "Connected devices", search for "Bluetooth" in the Settings search bar.',
        ],
      },
      {
        title: 'Take both hearing aids out of the case',
        instructions: [
          'Open the lid and remove both hearing aids.',
          'Hold them close to the phone.',
          'They should enter pairing mode automatically — you might hear a beep.',
        ],
      },
      {
        title: 'Tap your hearing aids when they appear',
        instructions: [
          'The device name appears under "Available devices" after 10–30 seconds.',
          'Tap the name to pair.',
          'Approve any pairing request that pops up.',
        ],
      },
      {
        title: 'Open the hearing aid app (if you have one)',
        instructions: [
          'Most brands have a companion app (ReSound Smart 3D, Phonak myPhonak, Starkey Thrive, etc.).',
          'Install it from the Play Store and sign in.',
          'The app gives you fine volume, program, and balance control.',
        ],
        stuckTips: [
          'No app yet? You can skip this step — the hearing aids still work for calls and media.',
        ],
      },
      {
        title: 'Test each ear',
        instructions: [
          'Put both hearing aids in your ears.',
          'Play a song or YouTube video.',
          'Cover one ear at a time to confirm sound in each side.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Hearing aids — LE Audio (iPhone) ─────────────────────────────────────────
  [flowKey('hearing-aids', 'le-audio', 'iphone')]: {
    label: 'Hearing aids (LE Audio) + iPhone',
    steps: [
      {
        title: 'Make sure your iPhone supports LE Audio',
        instructions: [
          'LE Audio needs iPhone 11 or newer, running iOS 17.4 or later.',
          'Go to Settings > General > Software Update and install any pending updates.',
        ],
        stuckTips: [
          'Older iPhone? Use the Made for iPhone (MFi) option instead — it is just as reliable.',
        ],
      },
      {
        title: 'Put both hearing aids in pairing mode',
        instructions: [
          'Place them in the case and close the lid for 10 seconds, then open.',
          'Some models need you to hold a button for 3–5 seconds — check your quick-start guide.',
        ],
      },
      {
        title: 'Open Settings > Bluetooth on your iPhone',
        instructions: [
          'Tap Settings, then Bluetooth.',
          'Make sure the switch is green (on).',
          'Wait — your hearing aids should appear under "Other Devices".',
        ],
      },
      {
        title: 'Tap the name and pair',
        instructions: [
          'Tap the device name.',
          'Approve any pairing prompts (there may be two — one per ear).',
        ],
      },
      {
        title: 'Test calls and media',
        instructions: [
          'Play music or a video.',
          'Make a quick test call.',
          'On LE Audio, both call and media go through the hearing aids — no extra setup needed.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },

  // ── Hearing aids — LE Audio (Android) ────────────────────────────────────────
  [flowKey('hearing-aids', 'le-audio', 'android')]: {
    label: 'Hearing aids (LE Audio) + Android',
    steps: [
      {
        title: 'Make sure your phone supports LE Audio',
        instructions: [
          'Android 13 or newer, and a fairly recent phone (Pixel 7+, Samsung S23+, etc.).',
          'Settings > About phone > Software info to check your Android version.',
        ],
      },
      {
        title: 'Put both hearing aids in pairing mode',
        instructions: [
          'Place them in the case, close for 10 seconds, then open.',
          'Or hold the button per your manual.',
        ],
      },
      {
        title: 'Open Settings > Connected devices > Pair new device',
        instructions: [
          'The phone begins scanning automatically.',
          'Hold the hearing aids within 2 feet of the phone.',
        ],
      },
      {
        title: 'Tap your hearing aids',
        instructions: [
          'When they appear, tap to pair.',
          'Approve any prompts.',
        ],
      },
      {
        title: 'Test calls and media',
        instructions: [
          'Play a video, then try a phone call.',
          'Use the volume buttons — they now control the hearing aids.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── AirPods + iPhone ──────────────────────────────────────────────────────────
  [flowKey('earbuds', 'airpods', 'iphone')]: {
    label: 'AirPods + iPhone',
    steps: [
      {
        title: 'Unlock your iPhone and wake the screen',
        instructions: [
          'Bring your iPhone out of standby so the home screen is visible.',
          'Make sure Bluetooth is ON (Settings > Bluetooth).',
        ],
      },
      {
        title: 'Hold the AirPods case next to your iPhone',
        instructions: [
          'Keep both AirPods inside the case.',
          'Hold the case within 2 inches of your iPhone.',
          'Open the case lid — do NOT take the AirPods out yet.',
        ],
      },
      {
        title: 'Tap Connect on the popup card',
        instructions: [
          'A large card slides up from the bottom of the iPhone showing your AirPods.',
          'Tap "Connect".',
          'Follow the on-screen animation — it takes about 10 seconds.',
        ],
        stuckTips: [
          'No card? Close the lid, wait 10 seconds, and try again with the phone unlocked.',
          'If still nothing: hold the small button on the back of the case until the light flashes white, then try again.',
        ],
      },
      {
        title: 'Sign in with Apple ID (if asked)',
        instructions: [
          'On newer AirPods, you may be asked to link to your Apple ID for iCloud.',
          'Tap "Done" or "Use Apple ID".',
        ],
      },
      {
        title: 'Test by playing something',
        instructions: [
          'Put the AirPods in your ears.',
          'Play a video or song — sound should come through both sides.',
          'Say "Hey Siri, what time is it?" to test the microphone.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },

  // ── AirPods + Android (yes, they work!) ──────────────────────────────────────
  [flowKey('earbuds', 'airpods', 'android')]: {
    label: 'AirPods + Android',
    steps: [
      {
        title: 'Open Settings > Connected devices on your Android',
        instructions: [
          'Swipe down from the top, tap the gear icon.',
          'Tap "Connected devices" (or "Bluetooth").',
          'Tap "Pair new device".',
        ],
      },
      {
        title: 'Put the AirPods in pairing mode',
        instructions: [
          'Put both AirPods in the case.',
          'Open the case lid (leave AirPods inside).',
          'Press and hold the small round button on the BACK of the case for 5–8 seconds, until the light inside flashes white.',
        ],
        stuckTips: [
          'The button is a tiny circle — you have to press firmly. If nothing happens, hold longer.',
        ],
      },
      {
        title: 'Tap AirPods when they appear',
        instructions: [
          'The Android shows "AirPods" (or the model name) under Available devices.',
          'Tap to pair.',
        ],
      },
      {
        title: 'Install an AirPods-for-Android app (optional)',
        instructions: [
          'AirPods work on Android for music and calls out of the box.',
          'For battery display and custom controls, search the Play Store for "AirBattery" or "Assistant Trigger".',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Put them in and play a video.',
          'Both sides should work immediately.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Galaxy Buds + Android ────────────────────────────────────────────────────
  [flowKey('earbuds', 'galaxy-buds', 'android')]: {
    label: 'Galaxy Buds + Android',
    steps: [
      {
        title: 'Install the Galaxy Wearable app',
        instructions: [
          'Open the Play Store.',
          'Search "Galaxy Wearable" and install the official Samsung app.',
          'Open the app when it finishes installing.',
        ],
      },
      {
        title: 'Put the Buds in the case and close the lid',
        instructions: [
          'Place both earbuds in the case.',
          'Close the lid for 5 seconds.',
        ],
      },
      {
        title: 'Open the case near your phone',
        instructions: [
          'Hold the case within a few inches of your phone and open the lid.',
          'A Samsung popup appears on your phone asking to pair.',
          'Tap "Connect" or "Pair".',
        ],
        stuckTips: [
          'If no popup: open Galaxy Wearable app and tap "Start" — it searches for the buds.',
          'Still nothing? Hold both buds in the case and press-and-hold the touch pads on both buds for 7 seconds to reset.',
        ],
      },
      {
        title: 'Follow the app setup',
        instructions: [
          'The app guides you through gesture tutorial, noise cancelling, and fit check.',
          'Take your time — skip anything that feels confusing.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Play a video or song.',
          'Use the touch pads on the buds: double-tap for play/pause.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Galaxy Buds + iPhone ─────────────────────────────────────────────────────
  [flowKey('earbuds', 'galaxy-buds', 'iphone')]: {
    label: 'Galaxy Buds + iPhone',
    steps: [
      {
        title: 'Open Settings > Bluetooth on your iPhone',
        instructions: [
          'Make sure Bluetooth is ON (green switch).',
          'Keep this screen open — you will need it in a moment.',
        ],
      },
      {
        title: 'Put the Buds in pairing mode',
        instructions: [
          'Place both buds in the case.',
          'Close the lid for 5 seconds.',
          'Open the lid — they broadcast for about 3 minutes.',
        ],
        stuckTips: [
          'If they do not appear, press and hold the touch pads on BOTH earbuds (while still in the case) for 7 seconds.',
        ],
      },
      {
        title: 'Tap the Buds when they appear on iPhone',
        instructions: [
          'Under "Other Devices", you will see the model name like "Galaxy Buds Pro".',
          'Tap to pair and approve the prompt.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Put them in and play a song.',
          'Note: advanced features like custom EQ only work on Samsung phones.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },

  // ── Generic earbuds ───────────────────────────────────────────────────────────
  [flowKey('earbuds', 'generic', 'iphone')]: {
    label: 'Earbuds + iPhone',
    steps: [
      {
        title: 'Charge the earbuds for at least 15 minutes',
        instructions: [
          'Put both earbuds in the case.',
          'Plug the case into a USB charger.',
          'Wait until you see a charging light.',
        ],
      },
      {
        title: 'Put the earbuds in pairing mode',
        instructions: [
          'Method depends on brand — try these in order:',
          '• Open the case lid with earbuds inside.',
          '• Or hold the button on the case for 5–7 seconds until the LED flashes blue (sometimes blue/red).',
          '• Or take both earbuds out and hold the touch pads for 7 seconds.',
        ],
        stuckTips: [
          'Check the quick-start card — most show the pairing steps with pictures.',
        ],
      },
      {
        title: 'Open Settings > Bluetooth on iPhone',
        instructions: [
          'Make sure Bluetooth is on.',
          'Look under "Other Devices" for the earbuds name.',
        ],
      },
      {
        title: 'Tap the earbuds and pair',
        instructions: [
          'Tap the name.',
          'Approve any prompts.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Put them in and play a video.',
          'If sound only comes from one side, see troubleshooting.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },
  [flowKey('earbuds', 'generic', 'android')]: {
    label: 'Earbuds + Android',
    steps: [
      {
        title: 'Charge the earbuds for at least 15 minutes',
        instructions: [
          'Put both earbuds in the case and plug the case into power.',
          'Wait for the charging light.',
        ],
      },
      {
        title: 'Put the earbuds in pairing mode',
        instructions: [
          'Open the case lid with earbuds inside.',
          'Or hold the case button for 5–7 seconds until a blue light flashes.',
        ],
      },
      {
        title: 'Open Settings > Connected devices > Pair new device',
        instructions: [
          'Phone starts scanning automatically.',
        ],
      },
      {
        title: 'Tap the earbuds name',
        instructions: [
          'Approve any prompts.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Put them in and play something.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Bluetooth speaker + iPhone ───────────────────────────────────────────────
  [flowKey('speaker', null, 'iphone')]: {
    label: 'Bluetooth speaker + iPhone',
    steps: [
      {
        title: 'Power on the speaker',
        instructions: [
          'Press and hold the power button until you hear a chime or see a light.',
          'Make sure the battery is charged — low battery often blocks pairing.',
        ],
      },
      {
        title: 'Put the speaker in pairing mode',
        instructions: [
          'Look for a Bluetooth symbol button.',
          'Hold it for 3–5 seconds until the LED flashes rapidly or you hear "ready to pair".',
        ],
        stuckTips: [
          'If the speaker was paired to another phone before, it may auto-connect to that phone. Turn that phone\'s Bluetooth off.',
        ],
      },
      {
        title: 'Open Settings > Bluetooth on iPhone',
        instructions: [
          'Make sure Bluetooth is on.',
          'Your speaker appears under "Other Devices".',
        ],
      },
      {
        title: 'Tap the speaker to connect',
        instructions: [
          'You\'ll hear a "connected" chime from the speaker.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Play a song on your iPhone.',
          'Sound should come from the speaker, not the phone.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },
  [flowKey('speaker', null, 'android')]: {
    label: 'Bluetooth speaker + Android',
    steps: [
      {
        title: 'Power on the speaker',
        instructions: [
          'Press and hold the power button until you hear a chime or see a light.',
        ],
      },
      {
        title: 'Put the speaker in pairing mode',
        instructions: [
          'Hold the Bluetooth button for 3–5 seconds until LED flashes rapidly.',
        ],
      },
      {
        title: 'Open Settings > Connected devices > Pair new device',
        instructions: [
          'Android starts scanning.',
        ],
      },
      {
        title: 'Tap the speaker name',
        instructions: [
          'Confirm pairing if asked.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Play a song from your phone.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Keyboard / mouse ─────────────────────────────────────────────────────────
  [flowKey('keyboard-mouse', null, 'iphone')]: {
    label: 'Keyboard or mouse + iPhone',
    steps: [
      {
        title: 'Install fresh batteries or charge fully',
        instructions: [
          'Low battery is the #1 cause of pairing problems.',
          'Install new batteries or charge the device to full.',
        ],
      },
      {
        title: 'Turn on the keyboard or mouse',
        instructions: [
          'Look for a power switch on the bottom or side — slide it to ON.',
          'A light usually turns on briefly.',
        ],
      },
      {
        title: 'Put it in pairing mode',
        instructions: [
          'Find the Bluetooth button — often labeled with a Bluetooth symbol.',
          'Hold it for 3–5 seconds until an LED flashes.',
          'Some keyboards have numbered channels (1, 2, 3) — hold the channel you want to use.',
        ],
      },
      {
        title: 'Open Settings > Bluetooth on iPhone',
        instructions: [
          'Make sure Bluetooth is on.',
          'Your device appears under "Other Devices".',
        ],
      },
      {
        title: 'Tap the device and follow prompts',
        instructions: [
          'A 6-digit code may appear on screen — type it on the keyboard and press Enter.',
          'For a mouse, just tap to pair.',
        ],
      },
      {
        title: 'Test it',
        instructions: [
          'Open the Notes app and try typing or moving the mouse cursor.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
  },
  [flowKey('keyboard-mouse', null, 'android')]: {
    label: 'Keyboard or mouse + Android',
    steps: [
      {
        title: 'Install fresh batteries or fully charge',
        instructions: [
          'Most pairing issues on keyboards are low battery.',
        ],
      },
      {
        title: 'Turn it on',
        instructions: [
          'Slide the power switch to ON.',
        ],
      },
      {
        title: 'Put it in pairing mode',
        instructions: [
          'Hold the Bluetooth key for 3–5 seconds until the LED flashes.',
        ],
      },
      {
        title: 'Open Settings > Connected devices > Pair new device',
        instructions: [
          'Android scans automatically.',
        ],
      },
      {
        title: 'Tap the device name',
        instructions: [
          'For keyboards: type any code shown on screen and press Enter.',
          'For mice: just tap to pair.',
        ],
      },
      {
        title: 'Test it',
        instructions: [
          'Open a text app and try typing, or move the mouse.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
  },

  // ── Car — Apple CarPlay ──────────────────────────────────────────────────────
  [flowKey('car', 'carplay', 'iphone')]: {
    label: 'Apple CarPlay + iPhone',
    steps: [
      {
        title: 'Start your car',
        instructions: [
          'Turn the key or press the start button — the infotainment screen needs to be on.',
          'Put it in Park.',
        ],
      },
      {
        title: 'Enable CarPlay in your car\'s settings',
        instructions: [
          'On your car\'s touchscreen, find Settings > Bluetooth, or look for a CarPlay logo.',
          'Tap "Add new device" or "Pair new phone".',
          'Check your car manual if you can\'t find it — it\'s different on every make.',
        ],
      },
      {
        title: 'Turn on Bluetooth and Wi-Fi on your iPhone',
        instructions: [
          'Settings > Bluetooth — make sure it\'s on.',
          'CarPlay uses both Bluetooth and Wi-Fi for wireless setup, so turn on Wi-Fi too.',
          'Keep your iPhone unlocked during setup.',
        ],
      },
      {
        title: 'Select your car on the iPhone',
        instructions: [
          'Your car\'s name (often like "MyCar Bluetooth" or the make/model) appears under Bluetooth.',
          'Tap it and confirm the 4- or 6-digit code matches on both screens.',
        ],
      },
      {
        title: 'Choose "Use CarPlay"',
        instructions: [
          'After pairing, iPhone asks if you want to use CarPlay with this car.',
          'Tap "Use CarPlay".',
          'The car screen loads the CarPlay interface — this can take 10–30 seconds.',
        ],
      },
      {
        title: 'Test navigation and music',
        instructions: [
          'Tap Maps on the car screen — see if it shows your location.',
          'Tap Music and play a song.',
          'Try saying "Hey Siri, call Mom" to test voice commands.',
        ],
      },
    ],
    troubleshooting: [
      {
        problem: 'CarPlay does not appear after pairing',
        fix: [
          'Turn off the car, open/close the door, wait 2 minutes, then restart.',
          'Unplug the USB cable (for wired CarPlay) and plug it into a different USB port — use a data cable, not a charge-only cable.',
          'iPhone: Settings > General > CarPlay > select your car > "Forget This Car". Then pair again.',
        ],
      },
      ...universalTroubleshooting,
    ],
    forget: [
      'On iPhone: Settings > General > CarPlay.',
      'Tap your car name.',
      'Tap "Forget This Car".',
      'Also remove it from Settings > Bluetooth to fully clear.',
    ],
    testSound: testSoundSuggestions,
  },

  // ── Car — Android Auto ───────────────────────────────────────────────────────
  [flowKey('car', 'android-auto', 'android')]: {
    label: 'Android Auto + Android',
    steps: [
      {
        title: 'Install or update the Android Auto app',
        instructions: [
          'Open the Play Store on your phone.',
          'Search "Android Auto" and install or update.',
          'Open the app once to accept permissions.',
        ],
        stuckTips: [
          'On Android 10 and newer, Android Auto is built in — you only need to run through its setup.',
        ],
      },
      {
        title: 'Start the car and put it in Park',
        instructions: [
          'The infotainment screen should be on.',
        ],
      },
      {
        title: 'Put your car in pairing mode',
        instructions: [
          'In the car\'s menu: Settings > Bluetooth > "Add a device" (or similar).',
        ],
      },
      {
        title: 'Connect your Android phone via Bluetooth',
        instructions: [
          'Settings > Connected devices > Pair new device.',
          'Tap your car when it appears.',
          'Confirm the matching code on both screens.',
        ],
      },
      {
        title: 'Android Auto launches automatically',
        instructions: [
          'After pairing, the car screen switches to the Android Auto interface.',
          'If not, tap the Android Auto icon on the car screen.',
        ],
        stuckTips: [
          'Wireless Android Auto requires a compatible phone (Pixel, Samsung S/Note, etc.) and a compatible car — otherwise plug in a USB data cable.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Open Google Maps on the car screen.',
          'Play a song through your music app.',
          'Try "Hey Google, call John" for voice commands.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: [
      'On your phone: Settings > Connected devices.',
      'Tap the gear icon next to your car and tap Unpair.',
      'Open the Android Auto app > Settings > Previously connected cars > tap your car > Forget.',
    ],
    testSound: testSoundSuggestions,
  },

  // ── Standard Bluetooth car (no CarPlay/Auto) ─────────────────────────────────
  [flowKey('car', 'bluetooth-car', 'iphone')]: {
    label: 'Bluetooth car audio + iPhone',
    steps: [
      {
        title: 'Start your car',
        instructions: [
          'Turn on the ignition and put it in Park.',
          'The audio system needs to be on.',
        ],
      },
      {
        title: 'Put the car into pairing mode',
        instructions: [
          'On the car screen, find Bluetooth or Phone settings.',
          'Choose "Add Device" or "Pair Phone".',
          'The car may show a code.',
        ],
      },
      {
        title: 'Open Settings > Bluetooth on iPhone',
        instructions: [
          'Make sure it\'s on.',
          'Your car appears under "Other Devices".',
        ],
      },
      {
        title: 'Tap the car and confirm the code',
        instructions: [
          'Both the car and phone show a 4- or 6-digit code.',
          'Tap Pair on your phone if they match.',
        ],
      },
      {
        title: 'Enable contacts and call sync',
        instructions: [
          'iPhone asks if the car should see your contacts — tap Allow.',
          'This lets the car show the name of who\'s calling.',
        ],
      },
      {
        title: 'Test calls and music',
        instructions: [
          'Play a song on your phone — sound should come through the car speakers.',
          'Make a short test call.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },
  [flowKey('car', 'bluetooth-car', 'android')]: {
    label: 'Bluetooth car audio + Android',
    steps: [
      {
        title: 'Start your car',
        instructions: [
          'Turn on the ignition and put in Park.',
        ],
      },
      {
        title: 'Put the car in pairing mode',
        instructions: [
          'On the car screen: Bluetooth > Add Device or Pair Phone.',
        ],
      },
      {
        title: 'Open Settings > Connected devices > Pair new device',
        instructions: [
          'Phone scans automatically.',
        ],
      },
      {
        title: 'Tap the car and confirm the code',
        instructions: [
          'Verify the 4- or 6-digit code matches on both screens.',
        ],
      },
      {
        title: 'Allow contacts sync',
        instructions: [
          'A prompt asks to share contacts with the car — tap Allow.',
        ],
      },
      {
        title: 'Test calls and music',
        instructions: [
          'Play a song — sound should come through the car.',
          'Make a short test call.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Apple Watch + iPhone ─────────────────────────────────────────────────────
  [flowKey('smart-watch', 'apple-watch', 'iphone')]: {
    label: 'Apple Watch + iPhone',
    steps: [
      {
        title: 'Power on the Apple Watch',
        instructions: [
          'Hold the side button (below the Digital Crown) for 3 seconds.',
          'The Apple logo appears — release the button.',
        ],
        stuckTips: [
          'If it won\'t turn on, place it on the charging puck for 30 minutes first.',
        ],
      },
      {
        title: 'Open the Watch app on your iPhone',
        instructions: [
          'Find the black app with the Watch icon on your iPhone.',
          'Tap it to open.',
          'Tap "Start Pairing".',
        ],
      },
      {
        title: 'Aim your iPhone camera at the Watch',
        instructions: [
          'Hold the iPhone about 6 inches above the Watch.',
          'Align the swirling animation on the Watch inside the yellow box on your iPhone.',
          'Wait for "Your Apple Watch is Paired" message.',
        ],
        stuckTips: [
          'If the camera won\'t focus, tap "Pair Apple Watch Manually" and follow the numeric code method.',
        ],
      },
      {
        title: 'Choose setup as new or restore',
        instructions: [
          'For a brand new Watch: tap "Set Up for Myself" then "New Apple Watch".',
          'If replacing an old one: tap "Restore from Backup".',
        ],
      },
      {
        title: 'Follow the setup wizard',
        instructions: [
          'Set up a 4-digit passcode — write it down.',
          'Choose apps to install (you can change this later).',
          'Wait for the sync to finish — can take 10–20 minutes.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Raise your wrist — the watch face should light up.',
          'Press the Digital Crown to see apps.',
          'Ask Siri the time, or send a test message.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: [
      'Open the Watch app on iPhone.',
      'Go to My Watch > All Watches.',
      'Tap the (i) next to your Watch.',
      'Tap "Unpair Apple Watch" and confirm.',
    ],
    testSound: testSoundSuggestions,
  },

  // ── Fitbit + iPhone ──────────────────────────────────────────────────────────
  [flowKey('smart-watch', 'fitbit', 'iphone')]: {
    label: 'Fitbit + iPhone',
    steps: [
      {
        title: 'Install the Fitbit app',
        instructions: [
          'Open the App Store on iPhone.',
          'Search "Fitbit" and install the official app.',
          'Open it and sign in or create a free account.',
        ],
      },
      {
        title: 'Charge the Fitbit at least 30 minutes',
        instructions: [
          'Clip it to the charger — a battery icon appears.',
          'Leave it plugged in while you finish setup.',
        ],
      },
      {
        title: 'Tap "Set Up Your Fitbit"',
        instructions: [
          'In the Fitbit app, tap your profile icon.',
          'Tap "Set Up a Device".',
          'Choose your model from the list.',
        ],
      },
      {
        title: 'Follow the on-screen prompts',
        instructions: [
          'The app searches via Bluetooth — keep the Fitbit nearby.',
          'A 4-digit code flashes on the Fitbit screen — type it in the app.',
        ],
      },
      {
        title: 'Update the Fitbit',
        instructions: [
          'The app may install a firmware update — keep the Fitbit charging and the app open.',
          'This can take 10–30 minutes.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Tap the screen to wake it.',
          'Take a few steps — the step count should go up in the app.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },
  [flowKey('smart-watch', 'fitbit', 'android')]: {
    label: 'Fitbit + Android',
    steps: [
      {
        title: 'Install the Fitbit app',
        instructions: [
          'Open Play Store, search "Fitbit", install.',
          'Sign in or create a free account.',
        ],
      },
      {
        title: 'Charge the Fitbit',
        instructions: [
          'Plug it into the charger for at least 30 minutes.',
        ],
      },
      {
        title: 'In the app: Profile > Set Up a Device',
        instructions: [
          'Choose your model.',
          'Approve Bluetooth and Location permissions when prompted.',
        ],
      },
      {
        title: 'Enter the 4-digit code from the Fitbit screen',
        instructions: [
          'The Fitbit shows a 4-digit code — type it in the app.',
        ],
      },
      {
        title: 'Wait for updates',
        instructions: [
          'Keep it charging — firmware can take 15–30 minutes.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Walk around and watch the step count update in the app.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Garmin ──────────────────────────────────────────────────────────────────
  [flowKey('smart-watch', 'garmin', 'iphone')]: {
    label: 'Garmin + iPhone',
    steps: [
      {
        title: 'Install Garmin Connect',
        instructions: [
          'App Store > search "Garmin Connect" > install the official app.',
          'Open it and sign in or create an account.',
        ],
      },
      {
        title: 'Charge the Garmin watch',
        instructions: [
          'Plug it in for 30 minutes if low.',
        ],
      },
      {
        title: 'Tap "Add a Device" in the app',
        instructions: [
          'On first launch, the app prompts you.',
          'Or tap Menu (≡) > Garmin Devices > Add Device.',
        ],
      },
      {
        title: 'Select your model and follow prompts',
        instructions: [
          'The watch shows a pairing code.',
          'Type it in the app.',
        ],
      },
      {
        title: 'Wait for the first sync',
        instructions: [
          'Takes 5–10 minutes.',
          'Keep the watch close and the app open.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Walk around — step count should update.',
          'Try pressing the buttons to see menus.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },
  [flowKey('smart-watch', 'garmin', 'android')]: {
    label: 'Garmin + Android',
    steps: [
      {
        title: 'Install Garmin Connect',
        instructions: [
          'Play Store > "Garmin Connect" > Install.',
          'Sign in.',
        ],
      },
      {
        title: 'Charge the watch',
        instructions: [
          'Plug it in for 30 minutes.',
        ],
      },
      {
        title: 'Tap Add a Device',
        instructions: [
          'Menu > Garmin Devices > Add Device.',
        ],
      },
      {
        title: 'Enter the pairing code',
        instructions: [
          'The watch shows a code — type it in the app.',
        ],
      },
      {
        title: 'First sync',
        instructions: [
          'Wait 5–10 minutes.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Walk and confirm step count updates.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Generic smart watch ──────────────────────────────────────────────────────
  [flowKey('smart-watch', 'generic-watch', 'iphone')]: {
    label: 'Smart watch + iPhone',
    steps: [
      {
        title: 'Install the watch\'s companion app',
        instructions: [
          'Check the box or manual for the app name (e.g. "Galaxy Wearable", "Wear OS", "Amazfit", "Mi Fit").',
          'Install it from the App Store.',
        ],
      },
      {
        title: 'Charge the watch',
        instructions: [
          'At least 30 minutes.',
        ],
      },
      {
        title: 'Open the app and tap Add/Pair Device',
        instructions: [
          'The app searches via Bluetooth.',
        ],
      },
      {
        title: 'Tap the watch when it appears',
        instructions: [
          'Confirm the code on the watch matches.',
        ],
      },
      {
        title: 'Finish setup in the app',
        instructions: [
          'Follow any prompts to allow notifications, health data, etc.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Raise your wrist — the face should light up.',
          'Walk and check the step count.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },
  [flowKey('smart-watch', 'generic-watch', 'android')]: {
    label: 'Smart watch + Android',
    steps: [
      {
        title: 'Install the watch\'s companion app',
        instructions: [
          'Check box or manual (Galaxy Wearable, Wear OS, Mi Fit, Amazfit, etc.).',
          'Install from the Play Store.',
        ],
      },
      {
        title: 'Charge the watch',
        instructions: [
          'At least 30 minutes.',
        ],
      },
      {
        title: 'Open the app and tap Add Device',
        instructions: [
          'The app searches via Bluetooth.',
        ],
      },
      {
        title: 'Tap the watch and confirm the code',
        instructions: [
          'Verify the code matches.',
        ],
      },
      {
        title: 'Finish setup in the app',
        instructions: [
          'Allow notifications and health data.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Raise wrist, walk, confirm step count.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },

  // ── Fitness tracker (no subtype) ─────────────────────────────────────────────
  [flowKey('fitness-tracker', null, 'iphone')]: {
    label: 'Fitness tracker + iPhone',
    steps: [
      {
        title: 'Install the app',
        instructions: [
          'Check the box for the app name (Fitbit, Mi Fit, Zepp, Garmin Connect, etc.).',
          'Install from the App Store.',
        ],
      },
      {
        title: 'Charge the tracker',
        instructions: [
          'Clip it to the charger for 30 minutes.',
        ],
      },
      {
        title: 'Open the app and create an account',
        instructions: [
          'Enter your email and a password.',
          'Write both down.',
        ],
      },
      {
        title: 'Tap "Add Device" and follow prompts',
        instructions: [
          'The app finds the tracker via Bluetooth.',
          'Confirm the 4-digit code shown on the tracker in the app.',
        ],
      },
      {
        title: 'Wait for the first sync',
        instructions: [
          '5–10 minutes. Keep the tracker close.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Walk a few steps.',
          'Confirm the step count updates in the app within 1–2 minutes.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
  },
  [flowKey('fitness-tracker', null, 'android')]: {
    label: 'Fitness tracker + Android',
    steps: [
      {
        title: 'Install the app',
        instructions: [
          'Check the box for the app name.',
          'Install from the Play Store.',
        ],
      },
      {
        title: 'Charge the tracker',
        instructions: [
          'At least 30 minutes.',
        ],
      },
      {
        title: 'Create an account in the app',
        instructions: [
          'Email + password. Write both down.',
        ],
      },
      {
        title: 'Tap Add Device and follow prompts',
        instructions: [
          'App finds it via Bluetooth.',
          'Approve any location and Bluetooth permissions.',
        ],
      },
      {
        title: 'Wait for first sync',
        instructions: [
          '5–10 minutes.',
        ],
      },
      {
        title: 'Test',
        instructions: [
          'Walk a few steps and confirm in the app.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
  },

  // ── TV / Soundbar ────────────────────────────────────────────────────────────
  [flowKey('tv-soundbar', null, 'iphone')]: {
    label: 'TV or soundbar + iPhone',
    steps: [
      {
        title: 'Turn on the TV or soundbar',
        instructions: [
          'Use the remote to power it on.',
          'If it\'s a soundbar, switch to Bluetooth input (usually a button labeled "BT" or "Input").',
        ],
      },
      {
        title: 'Put the TV or soundbar in Bluetooth pairing mode',
        instructions: [
          'On a Smart TV: Settings > Sound > Sound Output > Bluetooth Speaker List > Scan.',
          'On a soundbar: hold the Bluetooth or Source button until a light flashes.',
        ],
        stuckTips: [
          'Check your TV/soundbar manual — wording varies. Search YouTube for "pair Bluetooth [your TV model]" for a video walkthrough.',
        ],
      },
      {
        title: 'Open Settings > Bluetooth on iPhone',
        instructions: [
          'Your TV/soundbar appears under Other Devices.',
          'Tap its name to connect.',
        ],
        stuckTips: [
          'Note: Some TVs only accept Bluetooth headphones or soundbars, not phones — check if yours supports phone input first.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Play a song on your iPhone.',
          'Sound should come from the TV or soundbar.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetIphone,
    testSound: testSoundSuggestions,
  },
  [flowKey('tv-soundbar', null, 'android')]: {
    label: 'TV or soundbar + Android',
    steps: [
      {
        title: 'Turn on the TV or soundbar',
        instructions: [
          'Use the remote. For soundbars, switch to Bluetooth input.',
        ],
      },
      {
        title: 'Put the TV or soundbar in Bluetooth pairing mode',
        instructions: [
          'On Smart TV: Settings > Sound > Sound Output > Bluetooth Speaker List > Scan.',
          'On soundbar: hold the Bluetooth or Source button until a light flashes.',
        ],
      },
      {
        title: 'Open Settings > Connected devices > Pair new device',
        instructions: [
          'Tap the TV or soundbar when it appears.',
        ],
      },
      {
        title: 'Test sound',
        instructions: [
          'Play a song on your phone.',
        ],
      },
    ],
    troubleshooting: universalTroubleshooting,
    forget: forgetAndroid,
    testSound: testSoundSuggestions,
  },
};

// ── Component ────────────────────────────────────────────────────────────────

export default function BluetoothPairingHelper() {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);
  const [subtype, setSubtype] = useState<DeviceSubtype | null>(null);
  const [phoneOS, setPhoneOS] = useState<PhoneOS | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showStuck, setShowStuck] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showWhyFinicky, setShowWhyFinicky] = useState(false);

  const needsSubtype = deviceType ? deviceSubtypes[deviceType] !== undefined : false;

  // Resolve the right flow — fall back to a sensible default when a specific
  // (subtype, os) combo isn't defined (e.g. Apple Watch on Android).
  const resolveFlow = (): PairingFlow | null => {
    if (!deviceType || !phoneOS) return null;
    if (needsSubtype && !subtype) return null;

    const primary = flows[flowKey(deviceType, subtype, phoneOS)];
    if (primary) return primary;

    // Fallbacks for partial coverage (e.g. Apple Watch only on iPhone).
    if (deviceType === 'smart-watch' && subtype === 'apple-watch' && phoneOS === 'android') {
      return {
        label: 'Apple Watch + Android',
        steps: [
          {
            title: 'Apple Watch does not work with Android',
            instructions: [
              'Apple Watch requires an iPhone — it will not pair with an Android phone.',
              'If you have an Android, consider a Samsung Galaxy Watch, Google Pixel Watch, Fitbit, or Garmin instead.',
              'We have flows for all of those — tap "Change device" below and pick the right category.',
            ],
          },
        ],
        troubleshooting: [],
        forget: [],
      };
    }
    if (deviceType === 'car' && subtype === 'android-auto' && phoneOS === 'iphone') {
      return {
        label: 'Android Auto + iPhone',
        steps: [
          {
            title: 'Android Auto does not work with iPhone',
            instructions: [
              'Android Auto is only for Android phones.',
              'For iPhone, use Apple CarPlay instead — tap "Change device" and pick "Apple CarPlay".',
              'Or use plain Bluetooth audio if your car is older.',
            ],
          },
        ],
        troubleshooting: [],
        forget: [],
      };
    }
    if (deviceType === 'car' && subtype === 'carplay' && phoneOS === 'android') {
      return {
        label: 'Apple CarPlay + Android',
        steps: [
          {
            title: 'Apple CarPlay does not work with Android',
            instructions: [
              'CarPlay is iPhone only.',
              'For Android, use Android Auto — tap "Change device" and pick it.',
              'Or use regular Bluetooth audio for music and calls.',
            ],
          },
        ],
        troubleshooting: [],
        forget: [],
      };
    }
    return null;
  };

  const flow = resolveFlow();
  const step = flow?.steps[currentStep];
  const totalSteps = flow?.steps.length ?? 0;
  const progressPercent =
    totalSteps > 0 ? Math.round(((currentStep + (finished ? 1 : 0)) / totalSteps) * 100) : 0;

  const handleDeviceSelect = (t: DeviceType) => {
    setDeviceType(t);
    setSubtype(null);
    setPhoneOS(null);
    setCurrentStep(0);
    setShowStuck(false);
    setFinished(false);
  };

  const handleReset = () => {
    setDeviceType(null);
    setSubtype(null);
    setPhoneOS(null);
    setCurrentStep(0);
    setShowStuck(false);
    setFinished(false);
  };

  const markNext = () => {
    setShowStuck(false);
    if (currentStep + 1 >= totalSteps) {
      setFinished(true);
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  const goPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setShowStuck(false);
    }
  };

  const changeDevice = () => {
    setDeviceType(null);
    setSubtype(null);
    setPhoneOS(null);
    setCurrentStep(0);
    setShowStuck(false);
    setFinished(false);
  };

  const deviceOpt = deviceOptions.find((d) => d.type === deviceType);

  return (
    <>
      <SEOHead
        title="Help Me Pair My Bluetooth Device — Step-by-Step Guide | TekSure"
        description="Pair hearing aids, earbuds, speakers, keyboards, and more with your iPhone or Android phone. Clear, senior-friendly step-by-step instructions with troubleshooting."
        path="/tools/bluetooth-pairing-helper"
      />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Bluetooth Pairing Helper' },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center flex-shrink-0">
                <Bluetooth className="h-6 w-6 text-sky-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Help Me Pair My Bluetooth Device
            </h1>
            <p className="text-muted-foreground text-lg">
              Step-by-step for hearing aids, earbuds, speakers, and more.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl">
          {/* ── Picker: device type ────────────────────────────────────────── */}
          {!deviceType && (
            <div>
              <h2 className="font-semibold text-xl mb-2">What are you trying to pair?</h2>
              <p className="text-base text-muted-foreground mb-6">
                Tap the type of device you want to connect.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {deviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.type}
                      onClick={() => handleDeviceSelect(opt.type)}
                      className="p-5 rounded-2xl border-2 border-border hover:border-primary transition-colors text-left min-h-[44px]"
                      aria-label={`Pair ${opt.label}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${opt.bg}`}
                        >
                          <Icon className={`h-6 w-6 ${opt.color}`} aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-lg">{opt.label}</div>
                          <div className="text-sm text-muted-foreground">{opt.description}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Why Bluetooth is finicky */}
              <div className="mt-10 p-5 rounded-2xl border border-border bg-muted/40">
                <button
                  onClick={() => setShowWhyFinicky((v) => !v)}
                  className="w-full flex items-center gap-2 text-left font-medium"
                  aria-expanded={showWhyFinicky}
                >
                  <Info className="h-5 w-5 text-sky-600" aria-hidden="true" />
                  <span>Why is Bluetooth so finicky? (Read this first)</span>
                  {showWhyFinicky ? (
                    <ChevronUp className="h-5 w-5 ml-auto" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 ml-auto" aria-hidden="true" />
                  )}
                </button>
                {showWhyFinicky && (
                  <ul className="mt-4 space-y-3 text-base">
                    <li className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong>Bluetooth needs close proximity.</strong> Stay within 10–30 feet, and ideally within 3 feet during first-time pairing.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong>Both devices must be in "pairing mode" at the same time.</strong> Your phone is ready when the Bluetooth settings screen is open and scanning. Your device is ready when its LED is flashing quickly.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong>Most Bluetooth devices only connect to one phone at a time.</strong> If your earbuds are already paired to a tablet, turn the tablet off so they can connect to your phone.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong>Low battery breaks pairing.</strong> A Bluetooth device below 20% battery often won't pair reliably — charge it first.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong>It's not you — it's the technology.</strong> Bluetooth is finicky for everyone. If a step doesn't work the first time, try again.
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* ── Picker: subtype (if applicable) and phone OS ───────────────── */}
          {deviceType && (!phoneOS || (needsSubtype && !subtype)) && (
            <div>
              <button
                onClick={changeDevice}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Change device type
              </button>
              <div className="flex items-center gap-3 mb-6">
                {deviceOpt && (() => {
                  const DeviceIcon = deviceOpt.icon;
                  return (
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${deviceOpt.bg}`}
                    >
                      <DeviceIcon className={`h-5 w-5 ${deviceOpt.color}`} aria-hidden="true" />
                    </div>
                  );
                })()}
                <h2 className="font-semibold text-xl">{deviceOpt?.label}</h2>
              </div>

              {/* Subtype picker */}
              {needsSubtype && !subtype && (
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-2">Which kind?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pick the closest match — we'll tailor the steps.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {deviceSubtypes[deviceType]!.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSubtype(s.id)}
                        className="p-4 rounded-2xl border-2 border-border hover:border-primary transition-colors text-left min-h-[44px]"
                      >
                        <div className="font-semibold">{s.label}</div>
                        {s.description && (
                          <div className="text-sm text-muted-foreground mt-1">{s.description}</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Phone OS picker (after subtype if any) */}
              {(!needsSubtype || subtype) && !phoneOS && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">What phone are you using?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The steps are a little different for each.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setPhoneOS('iphone')}
                      className="p-6 rounded-2xl border-2 border-border hover:border-primary transition-colors text-center min-h-[44px]"
                    >
                      <span className="text-4xl block mb-2" role="img" aria-label="Apple">
                        &#x1F34E;
                      </span>
                      <div className="font-semibold text-lg">iPhone</div>
                      <div className="text-sm text-muted-foreground">Apple phone</div>
                    </button>
                    <button
                      onClick={() => setPhoneOS('android')}
                      className="p-6 rounded-2xl border-2 border-border hover:border-primary transition-colors text-center min-h-[44px]"
                    >
                      <span className="text-4xl block mb-2" role="img" aria-label="Android robot">
                        &#x1F916;
                      </span>
                      <div className="font-semibold text-lg">Android</div>
                      <div className="text-sm text-muted-foreground">
                        Samsung, Pixel, Motorola, or other
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Flow: step-by-step ─────────────────────────────────────────── */}
          {flow && step && !finished && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={changeDevice}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Change device
                </button>
                <Badge variant="outline" className="text-xs">
                  {flow.label}
                </Badge>
              </div>

              {/* Progress */}
              <div className="mb-6 p-4 rounded-2xl border border-border bg-card">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">
                    Step {currentStep + 1} of {totalSteps}
                  </span>
                  <span className="font-medium">{progressPercent}%</span>
                </div>
                <Progress
                  value={progressPercent}
                  className="h-2"
                  aria-label={`Pairing progress: ${progressPercent} percent`}
                />
              </div>

              {/* Step card */}
              <div className="rounded-2xl border border-border bg-card overflow-hidden mb-6">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary font-bold text-base flex-shrink-0">
                      {currentStep + 1}
                    </span>
                    <h2 className="font-semibold text-xl">{step.title}</h2>
                  </div>

                  <ol className="space-y-3 mb-4">
                    {step.instructions.map((instruction, i) => (
                      <li key={i} className="flex gap-3 text-base leading-relaxed">
                        <span className="font-medium text-muted-foreground flex-shrink-0 w-6">
                          {i + 1}.
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {step.stuckTips && step.stuckTips.length > 0 && (
                  <div className="border-t border-border">
                    <button
                      onClick={() => setShowStuck(!showStuck)}
                      className="w-full p-4 flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-colors min-h-[44px]"
                      aria-expanded={showStuck}
                    >
                      <HelpCircle className="h-4 w-4" aria-hidden="true" />
                      I am stuck on this step
                      {showStuck ? (
                        <ChevronUp className="h-4 w-4 ml-auto" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-auto" aria-hidden="true" />
                      )}
                    </button>
                    {showStuck && (
                      <div className="px-5 pb-5 space-y-2">
                        {step.stuckTips.map((tip, i) => (
                          <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <ArrowRight
                              className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap justify-between gap-3">
                <button
                  onClick={goPrevious}
                  disabled={currentStep === 0}
                  className="px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors disabled:opacity-30 min-h-[44px] inline-flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Previous
                </button>
                <button
                  onClick={markNext}
                  className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity min-h-[44px] inline-flex items-center gap-2"
                >
                  {currentStep + 1 >= totalSteps ? 'Finish' : 'Done — Next Step'}{' '}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {/* ── Finished screen with troubleshooting + test + forget ────── */}
          {flow && finished && (
            <div>
              <div className="text-center py-8">
                <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center mx-auto mb-6">
                  <PartyPopper className="h-10 w-10 text-green-600" aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">You're paired!</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-6 text-base">
                  Nice work. Your device should now be connected and ready to use. If something feels off, the sections below can help.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity min-h-[44px]"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" /> Pair another device
                  </button>
                  <button
                    onClick={() => {
                      setCurrentStep(0);
                      setFinished(false);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors min-h-[44px]"
                  >
                    Review steps again
                  </button>
                </div>
              </div>

              {/* Test sound */}
              {flow.testSound && flow.testSound.length > 0 && (
                <div className="mt-6 p-6 rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center flex-shrink-0">
                      <Volume2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg">Test your sound</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Easy ways to confirm everything's working:
                  </p>
                  <ul className="space-y-2">
                    {flow.testSound.map((tip, i) => (
                      <li key={i} className="flex gap-2 text-base">
                        <CheckCircle
                          className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Troubleshooting */}
              {flow.troubleshooting.length > 0 && (
                <div className="mt-6 p-6 rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-amber-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg">Common problems</h3>
                  </div>
                  <div className="space-y-4">
                    {flow.troubleshooting.map((item, i) => (
                      <details key={i} className="rounded-xl border border-border bg-background p-4">
                        <summary className="font-medium cursor-pointer list-none flex items-center gap-2">
                          <ChevronDown className="h-4 w-4 transition-transform details-chevron" aria-hidden="true" />
                          <span>{item.problem}</span>
                        </summary>
                        <ul className="mt-3 space-y-2 pl-6 text-sm text-muted-foreground">
                          {item.fix.map((f, j) => (
                            <li key={j} className="list-disc">
                              {f}
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Forget / disconnect */}
              {flow.forget.length > 0 && (
                <div className="mt-6 p-6 rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center flex-shrink-0">
                      <X className="h-5 w-5 text-rose-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg">
                      How to disconnect or forget this device
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    On {phoneOS === 'iphone' ? 'iPhone' : 'Android'}:
                  </p>
                  <ol className="space-y-2">
                    {flow.forget.map((line, i) => (
                      <li key={i} className="flex gap-3 text-base">
                        <span className="font-medium text-muted-foreground flex-shrink-0 w-6">
                          {i + 1}.
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
