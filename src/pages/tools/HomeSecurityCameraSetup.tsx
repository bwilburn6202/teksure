import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Camera,
  Shield,
  ShieldCheck,
  Home,
  DoorOpen,
  Trees,
  DollarSign,
  Battery,
  Plug,
  Cloud,
  HardDrive,
  Wifi,
  Bell,
  Volume2,
  Users,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  HelpCircle,
  ExternalLink,
  Sparkles,
  Star,
  Smartphone,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Home Security Camera Setup
 * ------------------------------------------------------------
 * A senior-friendly buyer's guide + setup wizard for the most
 * common home security camera brands. Compare Ring / Nest /
 * Arlo / Wyze / Eufy / Blink, take a 4-question quiz to get a
 * recommendation, then follow a step-by-step setup tailored
 * to your chosen brand.
 * ────────────────────────────────────────────────────────────── */

type BrandId = 'ring' | 'nest' | 'arlo' | 'wyze' | 'eufy' | 'blink';

/* ── Brand comparison data ────────────────────────────────────── */

interface BrandCard {
  id: BrandId;
  name: string;
  tagline: string;
  models: string;
  priceTier: string;
  subscription: string;
  storage: string;
  bestFor: string;
  strengths: string[];
  weaknesses: string[];
  companionApp: string;
  support: { label: string; url: string };
}

const BRANDS: BrandCard[] = [
  {
    id: 'ring',
    name: 'Ring',
    tagline: 'The doorbell camera almost everyone has heard of. Amazon-owned.',
    models: 'Video Doorbell · Doorbell Pro 2 · Stick Up Cam · Spotlight Cam',
    priceTier: '$60 – $250',
    subscription: 'Required to save video (Ring Protect, $4.99/mo Basic, $10/mo Plus)',
    storage: 'Cloud only (Amazon servers) — no SD card slot on most models',
    bestFor: 'People who want a front-door doorbell camera and are already in the Amazon ecosystem.',
    strengths: [
      'The most popular doorbell camera — easy to find help and accessories',
      'Very simple setup through the Ring app',
      'Works with Alexa — "Alexa, show me the front door" on Echo Show',
      'Neighbors app shares local activity (optional)',
    ],
    weaknesses: [
      'You must pay monthly to save or re-watch video',
      'Past account-breach news — treat the password seriously',
      'Cloud-only storage means no recording if Wi-Fi or internet is down',
    ],
    companionApp: 'Ring — Always Home',
    support: { label: 'Ring Help Center', url: 'https://support.ring.com/' },
  },
  {
    id: 'nest',
    name: 'Google Nest',
    tagline: 'Beautiful cameras that live inside Google Home. For Android and Google households.',
    models: 'Nest Doorbell (battery/wired) · Nest Cam (battery) · Nest Cam (wired)',
    priceTier: '$100 – $280',
    subscription: 'Optional — Nest Aware ($8/mo) unlocks full event history; 3 hours free without it',
    storage: 'Cloud — with a generous free tier (recent events for 3 hours)',
    bestFor: 'People with Android phones, a Google account, or a Nest Hub / Chromecast.',
    strengths: [
      'Free 3-hour event history without a subscription',
      'Excellent person/animal/vehicle alerts (no subscription needed)',
      'Works beautifully with Google Home and Nest Hub displays',
      'Solid image quality day and night',
    ],
    weaknesses: [
      'Does not integrate with Alexa',
      'Timeline history (the best feature) requires Nest Aware',
      'Wired Nest Cam needs an outdoor outlet or long cable run',
    ],
    companionApp: 'Google Home',
    support: { label: 'Google Nest Help', url: 'https://support.google.com/googlenest' },
  },
  {
    id: 'arlo',
    name: 'Arlo',
    tagline: 'Professional-grade outdoor cameras. Clearest video of the bunch.',
    models: 'Essential · Pro 5 · Ultra 2 · Video Doorbell',
    priceTier: '$100 – $350',
    subscription: 'Needed for most features — Arlo Secure ($7.99/mo single camera, $17.99/mo unlimited)',
    storage: 'Cloud (with subscription) or local USB on some hubs',
    bestFor: 'People who want the sharpest picture, outdoor coverage, and a truly wireless camera.',
    strengths: [
      'Top-tier 2K / 4K video quality on Pro and Ultra',
      'Long battery life (3–6 months typical)',
      'Color night vision on newer models',
      'Works with Alexa, Google, and Apple HomeKit',
    ],
    weaknesses: [
      'Without Arlo Secure, most smart features are locked',
      'Some models need a separate "SmartHub" plugged into your router',
      'Subscription can creep up in price each year',
    ],
    companionApp: 'Arlo Secure',
    support: { label: 'Arlo Support', url: 'https://www.arlo.com/en-us/support/' },
  },
  {
    id: 'wyze',
    name: 'Wyze',
    tagline: 'The budget pick. Very good cameras at a very low price.',
    models: 'Cam v3 · Cam Pan v3 · Video Doorbell v2 · Cam OG',
    priceTier: '$20 – $70',
    subscription: 'Optional — Cam Plus ($2.99/mo per camera) unlocks longer clips',
    storage: 'Free 12-second cloud clips, OR a microSD card in the camera (local)',
    bestFor: 'People on a budget, or anyone who wants to store video locally without paying monthly.',
    strengths: [
      'Cheapest name-brand option — often under $35 per camera',
      'MicroSD card slot — record 24/7 locally without a subscription',
      'Good image quality for the price',
      'Works with Alexa and Google',
    ],
    weaknesses: [
      'Short free clips (12 seconds) unless you subscribe',
      'Past security incidents — keep firmware updated, use 2FA',
      'Support is mostly email — no phone line',
    ],
    companionApp: 'Wyze',
    support: { label: 'Wyze Support', url: 'https://support.wyze.com/hc/en-us' },
  },
  {
    id: 'eufy',
    name: 'Eufy',
    tagline: 'No monthly fees. Footage stays in your house.',
    models: 'Solo IndoorCam · Solo E40 / S40 · eufyCam 3 · Video Doorbell',
    priceTier: '$60 – $400',
    subscription: 'Not required — most features work without a subscription',
    storage: 'Local — microSD in camera OR built-in storage on HomeBase hub',
    bestFor: 'People who want a one-time purchase, no subscription, and footage stored at home.',
    strengths: [
      'No required subscription — ever',
      'Local storage means your video never leaves your home (on most models)',
      'Very long battery life on eufyCam series',
      'Works with Alexa, Google, Apple HomeKit on select models',
    ],
    weaknesses: [
      'Some higher-end features (facial recognition) need the HomeBase hub',
      'Had a privacy incident in 2022 — now improved, but research before buying',
      'App has more settings — slightly more complex than Ring or Blink',
    ],
    companionApp: 'eufy Security',
    support: { label: 'eufy Support', url: 'https://support.eufy.com/' },
  },
  {
    id: 'blink',
    name: 'Blink',
    tagline: 'The cheapest wireless battery camera. Amazon-owned.',
    models: 'Blink Mini (wired indoor) · Blink Outdoor · Blink Video Doorbell',
    priceTier: '$35 – $100',
    subscription: 'Optional — Blink Subscription Plus ($10/mo), or use a Sync Module 2 for local storage',
    storage: 'Cloud (with subscription) or local USB drive via Sync Module 2',
    bestFor: 'People who want battery-powered outdoor cameras at the lowest possible price.',
    strengths: [
      'Batteries last up to 2 years on Blink Outdoor',
      'Very affordable — often under $60 per camera',
      'Sync Module 2 lets you skip the subscription',
      'Works with Alexa (natively)',
    ],
    weaknesses: [
      'Motion recording can feel a second slow to start',
      'Video quality is good, not great (1080p max)',
      'No Google Home or Apple HomeKit support',
    ],
    companionApp: 'Blink Home Monitor',
    support: { label: 'Blink Support', url: 'https://support.blinkforhome.com/en_US' },
  },
];

/* ── Quiz questions & recommendation logic ────────────────────── */

type CameraType = 'indoor' | 'outdoor' | 'doorbell' | 'all';
type StoragePref = 'cloud' | 'local' | 'either';
type PowerPref = 'wired' | 'battery' | 'either';
type SubPref = 'yes' | 'no' | 'maybe';

interface QuizAnswers {
  cameraType?: CameraType;
  storage?: StoragePref;
  power?: PowerPref;
  subscription?: SubPref;
}

function recommend(a: QuizAnswers): { id: BrandId; reason: string; model: string } {
  // Rule order matters — tighter matches first.
  // 1. No-subscription + local storage → Eufy
  if (a.subscription === 'no' && (a.storage === 'local' || a.storage === 'either')) {
    return {
      id: 'eufy',
      model: a.cameraType === 'doorbell' ? 'Eufy Video Doorbell 2K' : 'Eufy Solo E40 or eufyCam 3',
      reason:
        "You said no to a subscription and you're okay with local storage, so Eufy is the clear fit. Footage stays in your house and you never pay a monthly fee. The eufyCam 3 is a solid outdoor pick, or the Solo IndoorCam for indoors.",
    };
  }

  // 2. Budget + local/either → Wyze
  if (a.subscription === 'no' && a.cameraType === 'indoor') {
    return {
      id: 'wyze',
      model: 'Wyze Cam v3',
      reason:
        'You want indoor coverage without a subscription. The Wyze Cam v3 is about $35, can record to a microSD card 24/7 locally, and has surprisingly good picture quality. A great starter camera.',
    };
  }

  // 3. Doorbell + Amazon/Alexa household → Ring
  if (a.cameraType === 'doorbell' && a.subscription !== 'no') {
    return {
      id: 'ring',
      model: 'Ring Video Doorbell Pro 2',
      reason:
        "Doorbell-first is Ring's home turf. The Doorbell Pro 2 has the best package detection, head-to-toe view, and works flawlessly with Echo Show screens. Note: you'll need Ring Protect ($4.99/mo) to save footage.",
    };
  }

  // 4. Outdoor + battery + premium picture → Arlo
  if (a.cameraType === 'outdoor' && a.power === 'battery' && a.subscription !== 'no') {
    return {
      id: 'arlo',
      model: 'Arlo Essential (2nd Gen) or Pro 5',
      reason:
        'You want an outdoor battery camera with great picture quality. Arlo Essential is a reliable pick, or step up to the Pro 5 for sharper 2K video and color night vision. Arlo Secure ($7.99/mo) unlocks most features.',
    };
  }

  // 5. Battery + budget → Blink
  if (a.power === 'battery' && a.subscription === 'maybe') {
    return {
      id: 'blink',
      model: 'Blink Outdoor (4th Gen)',
      reason:
        'Blink Outdoor runs 2 years on AA batteries, costs about $100 for one, and you can add a Sync Module 2 ($35) to store video locally — no subscription required.',
    };
  }

  // 6. All-in-one Google household → Nest
  if (a.cameraType === 'all' || a.cameraType === 'outdoor') {
    return {
      id: 'nest',
      model: a.cameraType === 'doorbell' ? 'Nest Doorbell (battery)' : 'Nest Cam (battery) + Nest Doorbell',
      reason:
        'Nest gives you a solid free tier (3 hours of event history) and superb person/package alerts without a subscription. If you already use Google or have a Nest Hub, this is the smoothest experience.',
    };
  }

  // Fallback
  return {
    id: 'wyze',
    model: 'Wyze Cam v3',
    reason:
      "Based on your answers, a Wyze Cam v3 is a safe, inexpensive starting point. It's the easiest way to dip your toe in — under $40, works indoors or on a covered porch, and you can store video on a microSD card with no subscription.",
  };
}

/* ── Setup wizard types ───────────────────────────────────────── */

interface Step {
  title: string;
  instruction: string;
  stumble?: string;
  screenshot: string;
}

interface SetupInfo {
  id: BrandId;
  brandName: string;
  shortName: string;
  appName: string;
  estTime: string;
  steps: Step[];
  support: { label: string; url: string };
}

const RING_SETUP: SetupInfo = {
  id: 'ring',
  brandName: 'Ring',
  shortName: 'Ring Doorbell / Cam',
  appName: 'Ring — Always Home',
  estTime: '25 – 40 minutes',
  steps: [
    {
      title: 'Charge your camera fully before you start',
      instruction:
        'Plug the orange USB cable into the camera (or the removable battery pack) and into any USB wall charger. A solid green light means fully charged — usually 5 to 8 hours from empty. If your Ring is a hardwired doorbell, skip this and move on.',
      stumble:
        "Don't mount anything until charging is done. A half-charged battery will make setup confusing because the camera may reboot mid-process.",
      screenshot: 'Ring doorbell with orange charging cable plugged in',
    },
    {
      title: 'Download the Ring app and sign in',
      instruction:
        'On your phone, open the App Store (iPhone) or Play Store (Android). Search for "Ring — Always Home" — the blue icon with a white ring. Tap Install (free). Open it and either sign in with your Amazon account or tap "Create Account" and use your email. Turn on two-factor authentication when asked — this is the single best protection against hackers.',
      stumble:
        'Do not use the same password you use for email or banking. Make a unique one. If you skip two-factor, the app will keep nagging you — accept it and set it up.',
      screenshot: 'Ring app sign-in screen with two-factor prompt',
    },
    {
      title: 'Tap "Set Up a Device" and scan the QR code',
      instruction:
        'In the Ring app, tap "Set Up a Device" → pick "Doorbells" or "Security Cams" → point your phone camera at the QR code sticker (on the back of the camera or inside the box). The app confirms "Device found".',
      stumble:
        "If you can't find the QR code, there's usually a second one on the quick-start card in the box. If both are missing, tap 'Set up without QR code' and enter the serial number.",
      screenshot: 'Ring app camera viewfinder scanning a QR code on the back of a doorbell',
    },
    {
      title: 'Connect the camera to your Wi-Fi (must be 2.4 GHz)',
      instruction:
        'The Ring app will ask you to pick your home Wi-Fi network. Choose the one that does NOT have "5G" or "5GHz" at the end — Ring cameras only work on 2.4 GHz. Type your Wi-Fi password carefully. Wait for the camera to say "Setup complete".',
      stumble:
        'Most home routers have two networks: one ending in "2.4" and one ending in "5". Pick the 2.4 one. If you only see one network and it won\'t connect, log into your router and look for a "2.4 GHz" toggle.',
      screenshot: 'Ring app Wi-Fi network picker with 2.4 GHz network highlighted',
    },
    {
      title: 'Mount the doorbell or camera (angle matters)',
      instruction:
        'Use the included mounting bracket. For a doorbell: aim slightly down so it sees the person\'s face, not the ceiling. Mount about 48 inches (4 feet) above the ground — chest-height for most visitors. For a stick-up cam outside: avoid pointing it straight at the sun and avoid pointing it at a busy street if you don\'t want 500 motion alerts a day.',
      stumble:
        'If the existing doorbell chime sags or the bracket sits crooked, use a level. A tilted camera will constantly trigger on the wrong zone.',
      screenshot: 'Ring doorbell being mounted at chest height next to a front door',
    },
    {
      title: 'Set motion zones (so the mailman doesn\'t trigger you all day)',
      instruction:
        'In the app, tap your device → Motion Settings → Motion Zones. You\'ll see a live preview of the camera view. Drag the zones to cover only your walkway and porch — NOT the sidewalk or street. Save. Now you\'ll only be alerted when someone approaches your door.',
      stumble:
        'Less is more. Start with a small zone — you can always widen it. Every neighbor walking by = a notification on your phone.',
      screenshot: 'Ring app motion zone editor with walkway area highlighted',
    },
    {
      title: 'Set your notification schedule',
      instruction:
        'Still in the device settings, tap "Smart Alerts" → choose Person, Package, or All Motion. Then tap "Alert Schedule" to silence notifications at night if you\'d like. Many people set People → On all day, Motion → Off between 11pm and 6am.',
      stumble:
        'If you live on a busy street, turn off "Other Motion" entirely — keep only "Person" alerts. Otherwise your phone will buzz constantly.',
      screenshot: 'Ring app alert schedule with quiet hours slider',
    },
    {
      title: 'Test two-way audio',
      instruction:
        'In the app, tap your camera → tap the Live View button → tap the microphone icon. Say "Hello, this is a test." Someone standing near the camera should hear you clearly. Ring audio works in both directions — the visitor can speak back and you\'ll hear them through your phone.',
      stumble:
        "If audio sounds far away or echoey on your first test, that's normal on older models. Newer Ring doorbells (Pro 2, Plus) have much crisper audio.",
      screenshot: 'Ring app Live View with microphone button highlighted',
    },
    {
      title: 'Add to Alexa (optional)',
      instruction:
        'If you have an Echo or Echo Show, open the Alexa app → More → Skills → search "Ring" → Enable → sign in with the same Ring account. Now you can say, "Alexa, show the front door" on any Echo Show screen.',
      stumble:
        'This step is optional. Skip it if you don\'t own an Echo or Fire TV.',
      screenshot: 'Alexa app Ring skill enable screen',
    },
    {
      title: 'Share access with a family member',
      instruction:
        'In the Ring app, tap Settings (gear) → Users → "Invite a user". Enter a family member\'s email. They install the Ring app, accept the invite, and can see the camera — without knowing your password. You can revoke their access any time.',
      stumble:
        "Use Shared Users (the role that only sees cameras), NOT Owner. Owner can delete cameras and change the account.",
      screenshot: 'Ring app Shared Users invite screen',
    },
  ],
  support: { label: 'Ring Help Center', url: 'https://support.ring.com/' },
};

const NEST_SETUP: SetupInfo = {
  id: 'nest',
  brandName: 'Google Nest',
  shortName: 'Nest Cam / Doorbell',
  appName: 'Google Home',
  estTime: '20 – 35 minutes',
  steps: [
    {
      title: 'Charge the camera (battery models only)',
      instruction:
        'Plug the USB-C cable into the bottom of the camera and into any USB-C wall charger. A small white light turns green when full (about 3 hours from empty). Wired Nest Cam: skip this step.',
      stumble:
        'The Nest Cam needs a specific USB-C charger — a cheap phone cable often works but a low-wattage charger (5W or less) will charge very slowly. Use at least 7.5W.',
      screenshot: 'Nest Cam with USB-C charging cable and green indicator light',
    },
    {
      title: 'Download the Google Home app and sign in',
      instruction:
        'Open the App Store (iPhone) or Play Store (Android). Search for "Google Home" — the colorful little house icon. Install and open it. Sign in with your Gmail. Turn on two-factor authentication for your Google account at myaccount.google.com → Security if you haven\'t already.',
      stumble:
        'Use your main, daily-driver Google account — that\'s the one your family\'s calendars, reminders, and Chromecast are probably on. Making a new account just for the camera will cause confusion later.',
      screenshot: 'Google Home app sign-in screen on a phone',
    },
    {
      title: 'Tap "+" → Set up device → New device',
      instruction:
        'In Google Home, tap the "+" at the top left → "Set up device" → "New device". Pick your home. The app scans for nearby Nest cameras using Bluetooth — your camera should appear on screen within 15 seconds.',
      stumble:
        'Bluetooth must be ON on your phone for this step. If no device is found, double-check Bluetooth and stand within 10 feet of the camera.',
      screenshot: 'Google Home app scanning for new devices',
    },
    {
      title: 'Scan the QR code',
      instruction:
        'The app prompts you to scan a QR code. On battery Nest Cam: it\'s on the back of the camera. On Nest Doorbell: it\'s on the back too, visible only before mounting. Frame it in the phone\'s camera and wait for the beep.',
      stumble:
        "If you've already mounted the doorbell and can't see the QR code, tap 'I don't have a QR code' and enter the setup code printed in the Quick Start Guide.",
      screenshot: 'Google Home QR code scanner with QR code in frame',
    },
    {
      title: 'Connect to 2.4 GHz Wi-Fi',
      instruction:
        'Pick your Wi-Fi network. Important: Nest cameras connect to 2.4 GHz, NOT 5 GHz. If your network has both, pick the 2.4 one (usually has "2.4" or no suffix). Enter your Wi-Fi password. The camera takes about 2 minutes to finish setting up.',
      stumble:
        'Your phone may be on 5 GHz while the camera needs 2.4 GHz — that\'s fine, they talk to each other through the router. Just make sure you pick the 2.4 network when the app asks.',
      screenshot: 'Google Home Wi-Fi picker with 2.4 GHz network option',
    },
    {
      title: 'Pick a room and name the camera',
      instruction:
        'The app asks "Where is this camera?" Pick a room (Front Door, Backyard, Living Room). Then give it a short name like "Front Door Cam". This makes voice commands easier later — "Hey Google, show the front door."',
      stumble:
        'Keep the name short and specific. "Camera 1" is forgettable. "Front Door" is useful.',
      screenshot: 'Google Home room and device name selection screen',
    },
    {
      title: 'Mount it at the right height',
      instruction:
        'Doorbell: mount 48 inches above the ground, angled slightly down. Battery Nest Cam: use the magnetic mount — the camera clicks onto a metal plate screwed to your wall, and you can rotate it easily. Outside cameras should be at least 7 feet off the ground to prevent tampering.',
      stumble:
        'Don\'t point it at a window or mirror from inside your home — the reflection will cause infrared night vision to blind itself.',
      screenshot: 'Nest Cam on magnetic wall mount aimed at front porch',
    },
    {
      title: 'Set activity zones',
      instruction:
        'In the Google Home app, tap your camera → Settings (gear) → "Events" → "Activity Zones" → Add Zone. Draw a box around just your porch or walkway. Save. Now only motion in that zone will alert you.',
      stumble:
        'On free (no-Nest-Aware) accounts, you can create activity zones but you won\'t get a full timeline — only event clips. That\'s fine for most people.',
      screenshot: 'Google Home activity zone editor with drawn rectangle',
    },
    {
      title: 'Test two-way talk',
      instruction:
        'Open the camera → tap Live View → tap and HOLD the microphone icon (it\'s a push-to-talk button). Say "testing". Someone near the camera should hear you. Release the button to hear them back.',
      stumble:
        "Nest is push-to-talk by default. You have to hold the mic button — it's not a phone call. This is intentional to prevent accidentally broadcasting private conversations.",
      screenshot: 'Nest Cam live view with push-to-talk button held down',
    },
    {
      title: 'Share with a family member',
      instruction:
        'Google Home app → tap your home name (top left) → Household → "Invite home member". Enter their Gmail. They get an email, open Google Home, and now see your cameras. They do NOT need your password.',
      stumble:
        'Household members can see all devices in the home. If you want to share just ONE camera, you\'d need a separate Google Home — most people just add the person to the whole home.',
      screenshot: 'Google Home Household members screen with invite button',
    },
  ],
  support: { label: 'Google Nest Help', url: 'https://support.google.com/googlenest' },
};

const ARLO_SETUP: SetupInfo = {
  id: 'arlo',
  brandName: 'Arlo',
  shortName: 'Arlo Camera',
  appName: 'Arlo Secure',
  estTime: '25 – 45 minutes',
  steps: [
    {
      title: 'Fully charge the camera batteries',
      instruction:
        'Plug the included USB-C cable into the camera. An amber light means charging, solid green means full. Arlo Essential and Pro 5 cameras take 2–4 hours. Arlo Ultra 2 takes about 5 hours.',
      stumble:
        'Arlo batteries sometimes arrive partially charged but never fully. Always top them off before mounting — otherwise you\'ll be back on the ladder within a week.',
      screenshot: 'Arlo camera charging with amber light on',
    },
    {
      title: 'Download the Arlo Secure app and create an account',
      instruction:
        'In the App Store or Play Store, search for "Arlo Secure" — the dark blue icon with a white "a" (not plain "Arlo", which is the older app). Open it and tap "Create Account". Use a real email. Set a strong, unique password and turn on two-step verification when prompted.',
      stumble:
        'Arlo has two apps in the store — Arlo Secure (new, recommended) and Arlo (older, being retired). Use Arlo Secure.',
      screenshot: 'Arlo Secure account creation screen with two-step verification toggle',
    },
    {
      title: '(If you have one) Plug in the Arlo SmartHub',
      instruction:
        'Some Arlo kits come with a small white "SmartHub" box. Plug it into a wall outlet AND into your router with the included Ethernet cable. A solid white light on top means it\'s ready. If your kit didn\'t include a hub, skip this step — newer Arlo cameras work without one.',
      stumble:
        'The hub needs an Ethernet port on your router. If your router is in a closet with no free ports, a $15 Ethernet switch fixes that.',
      screenshot: 'Arlo SmartHub plugged into a router and wall outlet',
    },
    {
      title: 'Add the camera in the app',
      instruction:
        'In Arlo Secure, tap "+" → "Add New Device" → pick your camera model. The app asks if you have a SmartHub; say yes or no. Scan the QR code on the back of the camera OR enter the serial number from the Quick Start card.',
      stumble:
        "If the scan fails, manually type the serial number — it's on the sticker right next to the QR code.",
      screenshot: 'Arlo Secure app device selection screen',
    },
    {
      title: 'Connect to 2.4 GHz Wi-Fi',
      instruction:
        'Pick your Wi-Fi network (the 2.4 GHz one — Arlo cameras do NOT work on 5 GHz). Type your password. The camera will beep a melody when it connects. If nothing happens after 3 minutes, the app offers a "Retry" button.',
      stumble:
        "Arlo setup via Bluetooth sometimes fails on the first try. A retry almost always works. If it still won't connect, temporarily move the phone and camera within 3 feet of the router.",
      screenshot: 'Arlo Wi-Fi picker showing 2.4 GHz networks',
    },
    {
      title: 'Mount outside (tips for battery life)',
      instruction:
        'Use the magnetic ball mount or the screw-in bracket. Mount 7–9 feet off the ground, angled slightly down. Face AWAY from direct sun (morning or afternoon sunlight blasting into the lens will wash out the image). Avoid pointing at busy streets — every car = battery drain.',
      stumble:
        'The magnetic mount is quick but sags in high wind. For permanent mounting, use the screw-in bracket.',
      screenshot: 'Arlo camera on outdoor wall mount tilted downward',
    },
    {
      title: 'Set activity zones to save battery',
      instruction:
        'In the app, tap your camera → Settings → Activity Zones → Add. Draw a box around just your walkway and porch. Save. This single step will double or triple your battery life because the camera won\'t wake up for trees, cars, or shadows.',
      stumble:
        'Arlo Secure (the subscription) is required to use activity zones on most models. Without it, you\'ll get every motion event. Consider starting a free trial to see if the feature matters to you.',
      screenshot: 'Arlo activity zone editor showing walkway rectangle',
    },
    {
      title: 'Set notification schedule',
      instruction:
        'Settings → Notifications. Choose which events send push alerts: People, Vehicles, Packages, Animals, Other motion. On Pro 5 and Ultra 2, you can schedule quiet hours like 10pm–6am.',
      stumble:
        'Most seniors turn off "Other motion" — it\'s the category that catches leaves, light changes, and shadows.',
      screenshot: 'Arlo notification settings with motion categories and schedule',
    },
    {
      title: 'Test two-way audio and siren',
      instruction:
        'Tap the camera → Live → the microphone icon (push to talk) and the siren icon (sounds a loud alarm). Test both with someone outside. The siren is useful if you see a stranger on your property and want to scare them off.',
      stumble:
        "Don't accidentally trigger the siren — it's painfully loud. There's a confirmation popup.",
      screenshot: 'Arlo live view with microphone and siren buttons',
    },
    {
      title: 'Add to Alexa, Google, or HomeKit',
      instruction:
        'Arlo works with all three. Alexa: open Alexa app → Skills → search "Arlo" → Enable. Google Home: "+" → Set up device → Works with Google → Arlo. Apple Home (HomeKit): Arlo Secure → Settings → My Devices → Connect to Apple Home → scan the HomeKit code.',
      stumble:
        'Apple HomeKit is only supported on some Arlo models (Ultra, Pro). Check your manual if you\'re not sure.',
      screenshot: 'Arlo Secure settings with "Connect to Apple Home" button',
    },
  ],
  support: { label: 'Arlo Support', url: 'https://www.arlo.com/en-us/support/' },
};

const WYZE_SETUP: SetupInfo = {
  id: 'wyze',
  brandName: 'Wyze',
  shortName: 'Wyze Cam',
  appName: 'Wyze',
  estTime: '15 – 25 minutes',
  steps: [
    {
      title: 'Plug in the Wyze Cam',
      instruction:
        'Wyze cameras need a wall outlet — they\'re not battery powered (except the Wyze Cam Outdoor model). Plug the USB cable into the camera and the included USB-A brick into the wall. A yellow light on the camera means it\'s booting. Wait for it to flash yellow — that means it\'s in setup mode.',
      stumble:
        "If the light is solid blue, it's already on a Wi-Fi network. Hold the setup button on the bottom for 10 seconds to reset it back to yellow flash.",
      screenshot: 'Wyze Cam v3 with flashing yellow light on front',
    },
    {
      title: 'Download the Wyze app and sign up',
      instruction:
        'Install "Wyze" from the App Store or Play Store (purple-and-blue icon). Open it, tap "Sign Up", enter an email and password. Turn on two-step verification in Account → Security — Wyze has had breaches in the past and 2FA is the real protection.',
      stumble:
        'Wyze emails a 6-digit code to verify your email — check spam if you don\'t see it within 30 seconds.',
      screenshot: 'Wyze app sign-up screen with 2-step verification highlighted',
    },
    {
      title: 'Insert a microSD card (optional but highly recommended)',
      instruction:
        'Take a microSD card (32 GB is plenty — about $8 at Target or Amazon) and push it into the slot on the bottom of the camera until it clicks. This lets the camera record 24/7 locally without a subscription. If you don\'t add one, you still get free 12-second motion clips in the cloud.',
      stumble:
        'The microSD slot is tiny — use a fingernail. Don\'t force it the wrong way. It only clicks in one direction.',
      screenshot: 'Hand inserting microSD card into Wyze Cam v3 bottom',
    },
    {
      title: 'Tap "Add Device" and pick your Wyze model',
      instruction:
        'In the Wyze app, tap "+" → "Add Device" → Cameras → pick your model (Cam v3, Cam Pan v3, Cam OG, etc.). Follow the prompts. When asked to "press the setup button", it\'s the one on the bottom of the camera, next to the microSD slot.',
      stumble:
        "Press and hold the setup button for 3–5 seconds until a voice says 'Ready to connect'. If you don't hold long enough, nothing happens.",
      screenshot: 'Wyze app camera model picker screen',
    },
    {
      title: 'Connect to Wi-Fi (2.4 GHz only)',
      instruction:
        'Pick your 2.4 GHz Wi-Fi network. Type the password. The app then shows a QR code on your phone screen — hold your phone about 5 inches from the camera so the camera can see and scan the QR code. You\'ll hear "QR code scanned" when it works.',
      stumble:
        'Direct sunlight on your phone screen can wash out the QR code. Do this step in a shaded spot or hold your hand above the screen to cast a shadow.',
      screenshot: 'Phone showing QR code being scanned by a Wyze Cam',
    },
    {
      title: 'Name and place the camera',
      instruction:
        'The app asks for a name like "Front Porch" or "Back Yard". Pick the group (default is "Home") and tap Finish. You\'ll see a live view within seconds.',
      stumble:
        "Don't leave the name as 'Wyze Cam v3' — you\'ll forget which one it is when you add a second camera.",
      screenshot: 'Wyze app camera naming screen',
    },
    {
      title: 'Mount and aim it',
      instruction:
        'The magnetic base sticks to the metal backplate (included — peel and stick). Wyze Cam v3 is rated for outdoor use under a covered porch. Aim it at chest height for people, or angled down for a walkway. Night vision reaches about 25 feet.',
      stumble:
        'The magnetic base is NOT strong enough for high wind outside. For outdoors, use the screw-in bracket in the box.',
      screenshot: 'Wyze Cam v3 mounted under porch eave with magnetic mount',
    },
    {
      title: 'Set detection zone and notifications',
      instruction:
        'Tap the camera → Settings (gear) → Detection Settings → "Detection Zone". Drag the green rectangle around just your porch. Save. Then Notifications → turn on "Smart Detection" for Person-only alerts.',
      stumble:
        'Cam Plus (the subscription) unlocks Person detection, package detection, and longer event clips. The free tier gives motion-based clips only, capped at 12 seconds.',
      screenshot: 'Wyze app detection zone editor with green rectangle',
    },
    {
      title: 'Test two-way audio',
      instruction:
        'From the live view, tap the microphone icon and hold. Speak. Release to hear. If you want a full phone-call-style chat, tap Settings → Advanced Settings → Sound Recording: On.',
      stumble:
        'Outdoor wind noise can be harsh on Wyze mics. Point the camera slightly downward away from prevailing wind.',
      screenshot: 'Wyze live view with hold-to-talk microphone button',
    },
    {
      title: 'Add to Alexa or Google (optional)',
      instruction:
        'Alexa: open Alexa app → Skills → search "Wyze" → Enable. Google Home: "+" → Works with Google → Wyze. Now you can say "Alexa, show the porch on my Echo Show".',
      stumble:
        'Voice-assistant integration only shows live view — you still need the Wyze app for playback of saved clips.',
      screenshot: 'Alexa app Wyze skill enable button',
    },
  ],
  support: { label: 'Wyze Support', url: 'https://support.wyze.com/hc/en-us' },
};

const EUFY_SETUP: SetupInfo = {
  id: 'eufy',
  brandName: 'Eufy',
  shortName: 'Eufy Camera',
  appName: 'eufy Security',
  estTime: '25 – 40 minutes',
  steps: [
    {
      title: 'Charge the camera and (if included) plug in the HomeBase',
      instruction:
        'Plug the camera into the USB cable and charger. Solid green light = full. If your kit came with a "HomeBase" (a small white box), plug it into a wall outlet AND into your router with the Ethernet cable.',
      stumble:
        "Eufy cameras with a HomeBase only work with that HomeBase. If you buy a 'add-on' camera without a HomeBase, it won't work on its own — double-check the product page before ordering.",
      screenshot: 'Eufy camera charging and HomeBase plugged into router',
    },
    {
      title: 'Download the eufy Security app',
      instruction:
        'Install "eufy Security" from the App Store or Play Store (white icon with a shield). Open it, tap Sign Up, use a real email, create a strong unique password. Turn on two-step verification in Me → Account → Security.',
      stumble:
        "There's also a generic 'eufy' app for vacuums and other products. Make sure you install eufy Security — it's the one with the shield icon.",
      screenshot: 'eufy Security app sign-up screen',
    },
    {
      title: 'Tap "+" → Add Device → pick the camera',
      instruction:
        'In the app, tap "+" at the top right → Add Device → pick your exact model (Solo E40, eufyCam 3, etc.). The app will walk you through turning on the camera — usually holding a small button on the back until you hear a beep or see a flashing blue light.',
      stumble:
        "Eufy models look similar but the setup steps differ. Pick the exact model — even 'eufyCam 2C' and 'eufyCam 3' have different setup flows.",
      screenshot: 'eufy Security app model picker',
    },
    {
      title: 'Sync the camera to the HomeBase (if you have one)',
      instruction:
        'Hold the SYNC button on top of the HomeBase for 2 seconds. It\'ll beep. Then press the small button on the back of the camera. The HomeBase and camera shake hands. The app shows "Device connected".',
      stumble:
        'If the sync fails, the camera and HomeBase must be within 3 feet of each other DURING setup. You can move them apart after.',
      screenshot: 'Hand pressing SYNC button on top of eufy HomeBase',
    },
    {
      title: 'Connect to 2.4 GHz Wi-Fi',
      instruction:
        'Pick your 2.4 GHz Wi-Fi network. Type the password. For HomeBase models, only the HomeBase connects to Wi-Fi — the cameras talk to the HomeBase, not directly to your router. For solo cameras, the camera itself joins Wi-Fi.',
      stumble:
        "Eufy HomeBase uses Ethernet OR Wi-Fi — wired is more reliable. If your router is in a distant room, a $15 Ethernet switch or powerline adapter is worth it.",
      screenshot: 'eufy Security app Wi-Fi picker',
    },
    {
      title: 'Mount the camera',
      instruction:
        'eufyCam 3 uses a screw-in wall mount with a built-in solar panel option. Indoor Solo cameras have a flat base. Outdoor: 8–10 feet off the ground, angled 15–30 degrees downward. The solar panel (if you add one) needs direct sunlight at least 3 hours a day.',
      stumble:
        'The solar panel cable is short. Plan your mounting spot so the solar panel can reach the camera — or buy a longer cable before installing.',
      screenshot: 'eufyCam 3 mounted outside with solar panel above',
    },
    {
      title: 'Set Activity Zones',
      instruction:
        'In the app, tap your camera → Motion Detection → Activity Zone → Draw. Make a shape around just your porch or walkway (not the road). Save.',
      stumble:
        "eufy\'s on-device AI only checks these zones — so a well-drawn zone dramatically cuts down on false alerts.",
      screenshot: 'eufy activity zone editor with polygon around walkway',
    },
    {
      title: 'Turn on Human Detection',
      instruction:
        'Still under Motion Detection → "Detection Type" → "Human Only" (or "All Motion" if you want everything). Human Only uses the camera\'s AI locally — no subscription needed.',
      stumble:
        "eufy does AI on the camera itself, not in the cloud. This is a big privacy advantage but means it won't learn faces or packages as well as Nest.",
      screenshot: 'eufy detection type settings with Human Only selected',
    },
    {
      title: 'Test two-way audio',
      instruction:
        'Live view → tap the microphone (hold to talk). Speak. Release to hear. You can enable full-duplex (phone-call style) in Camera Settings → General → Audio Mode.',
      stumble:
        'Some Eufy models default to push-to-talk. If you prefer full two-way conversation, change the audio mode.',
      screenshot: 'eufy Security live view with microphone button',
    },
    {
      title: 'Share with a family member',
      instruction:
        'Me tab (bottom right) → Family & Guests → "+ Add Member" → enter their email. They install eufy Security and accept. You can limit them to specific cameras and prevent them from changing settings.',
      stumble:
        "Guest users can't delete cameras, which is exactly what you want. Never share your main eufy password — always use the invite flow.",
      screenshot: 'eufy Security Family & Guests screen with Add button',
    },
  ],
  support: { label: 'eufy Support', url: 'https://support.eufy.com/' },
};

const BLINK_SETUP: SetupInfo = {
  id: 'blink',
  brandName: 'Blink',
  shortName: 'Blink Camera',
  appName: 'Blink Home Monitor',
  estTime: '15 – 30 minutes',
  steps: [
    {
      title: 'Install the AA lithium batteries',
      instruction:
        'Open the back panel of the Blink Outdoor camera (small screw or slide-off cover). Install 2 AA lithium batteries — NOT regular alkaline. Lithium lasts up to 2 years; alkaline dies in a few months and can leak. Included batteries are lithium.',
      stumble:
        "Never mix old and new batteries. Always replace both at the same time. If the camera keeps going offline, the batteries are usually the cause.",
      screenshot: 'Back of Blink Outdoor camera with AA lithium batteries being installed',
    },
    {
      title: 'Download the Blink Home Monitor app',
      instruction:
        'Install "Blink Home Monitor" (blue eye icon) from the App Store or Play Store. Open it, sign in with your Amazon account OR create a new Blink account with email. Turn on two-factor authentication — it\'s in Account Settings.',
      stumble:
        'Blink is owned by Amazon — signing in with your Amazon account is fine and actually easier (one less password to remember).',
      screenshot: 'Blink Home Monitor sign-in screen',
    },
    {
      title: 'Plug in the Sync Module 2 (if you have one)',
      instruction:
        'Most Blink kits include a Sync Module 2 — a small white box. Plug it into a wall outlet with the included cable. A solid blue light on top plus a solid green light = ready. If your kit is "just the camera" with no module, skip this — you\'ll be using cloud-only.',
      stumble:
        "A Sync Module 2 is what lets you insert a USB flash drive (up to 256 GB) and skip the Blink subscription. Without it, you need a subscription to save clips beyond the 60-minute rolling buffer.",
      screenshot: 'Blink Sync Module 2 with blue and green lights on',
    },
    {
      title: 'Add the Sync Module',
      instruction:
        'In the Blink app, tap "+" at the top → Sync Module → scan the QR code on the bottom of the Sync Module. Connect it to your Wi-Fi (2.4 GHz only — Blink does not work on 5 GHz).',
      stumble:
        'If the QR code sticker is damaged, tap "Enter Serial Number Manually" and type it — it\'s also printed on the Sync Module.',
      screenshot: 'Blink app scanning QR code on Sync Module',
    },
    {
      title: 'Add the camera',
      instruction:
        'Tap "+" again → pick your camera model (Blink Outdoor, Mini, Video Doorbell). Scan the QR code on the back of the camera. The app detects the camera in about 30 seconds.',
      stumble:
        'If the camera doesn\'t appear, make sure the batteries are in correctly (check the + / − marks inside the battery compartment) and try again.',
      screenshot: 'Blink app device type picker',
    },
    {
      title: 'Connect the camera to the Sync Module',
      instruction:
        'The app does this automatically. You\'ll see "Connecting…" for about a minute, then "Camera added" with a thumbnail snapshot. If you don\'t have a Sync Module, the app has you connect the camera directly to Wi-Fi instead.',
      stumble:
        'The camera stays in low-power sleep mode — it only wakes for motion or live view. This is why batteries last years but also why there\'s a tiny delay when you open the live view.',
      screenshot: 'Blink app showing camera thumbnail and "Online" status',
    },
    {
      title: 'Mount and aim',
      instruction:
        'Blink Outdoor uses a ball-and-socket mount — two screws into a wall or post. Aim the lens at chest height for people, or angled down 20–30 degrees for a walkway. Don\'t aim at busy traffic — motion events drain batteries.',
      stumble:
        'The mount\'s ball joint can loosen over time. Tighten the thumb screw firmly when you get the angle right.',
      screenshot: 'Blink Outdoor mounted on exterior wall with ball mount',
    },
    {
      title: 'Set activity zones and motion sensitivity',
      instruction:
        'In the app, tap the camera → Motion Settings → Activity Zones. Tap squares to DISABLE parts of the view (this is reversed from other brands). Save. Then adjust Sensitivity to about 5 — a good starting point.',
      stumble:
        'Blink activity zones work by toggling OFF the squares you don\'t want. Grey = ignored, blue = active. Takes a moment to get used to.',
      screenshot: 'Blink app activity zone grid with some squares disabled',
    },
    {
      title: 'Add to Alexa (Blink plays very well with Echo)',
      instruction:
        'Open the Alexa app → Skills → search "Blink SmartHome" → Enable → sign in with your Blink account. Now you can say "Alexa, show the backyard" on any Echo Show. You can also arm/disarm Blink from Alexa.',
      stumble:
        'Blink does NOT work with Google Home or Apple HomeKit. If that\'s a dealbreaker, look at Arlo, Nest, or Eufy instead.',
      screenshot: 'Alexa app Blink SmartHome skill enable button',
    },
    {
      title: 'Share with a family member',
      instruction:
        'In the Blink app, tap Account → Manage Account → "Add Account Member". Invite by email. They install Blink Home Monitor, accept, and can see the cameras.',
      stumble:
        'Account Members can view cameras but can\'t delete the system or change the main account. This is a good middle ground.',
      screenshot: 'Blink app Account Members invitation screen',
    },
  ],
  support: { label: 'Blink Support', url: 'https://support.blinkforhome.com/en_US' },
};

const SETUPS: Record<BrandId, SetupInfo> = {
  ring: RING_SETUP,
  nest: NEST_SETUP,
  arlo: ARLO_SETUP,
  wyze: WYZE_SETUP,
  eufy: EUFY_SETUP,
  blink: BLINK_SETUP,
};

/* ── Troubleshooting accordion data ───────────────────────────── */

interface IssueItem {
  title: string;
  body: string;
}

const TROUBLESHOOTING: IssueItem[] = [
  {
    title: 'My camera keeps going offline',
    body:
      "Nine times out of ten, this is the Wi-Fi signal being too weak where the camera lives. Stand where the camera is and check the bars on your phone — if you're below 2 bars, that's the problem. Fixes, in order: unplug your router for 30 seconds and plug back in; move the camera 5–10 feet closer to the router; add a Wi-Fi extender or mesh point for the dead zone. Batteries can also cause offline drops — if it's a battery camera, check battery level in the app.",
  },
  {
    title: 'I get motion alerts every time a leaf blows',
    body:
      'Go into the app, open your camera, and shrink the activity zone so it only covers your porch or walkway — not the lawn or street. Turn sensitivity down by about 25%. Most brands also let you turn on "Person only" or "Smart alerts" — pick that instead of "All motion". Blink users: reduce motion sensitivity to 4 or 5, not 9.',
  },
  {
    title: 'Night vision is too dark (or too bright / washed out)',
    body:
      'Too dark: the camera\'s infrared light is being absorbed by nearby surfaces, or something is blocking it. Clean the lens, and make sure no spider webs or branches are within 2 feet. Too bright/washed out: a porch light or street lamp is shining into the camera. Turn off the porch light at night, or angle the camera slightly away from the light source. Some cameras (Arlo, Nest) have "Auto" night mode — switch to "IR" only if a streetlight is causing the trouble.',
  },
  {
    title: 'My doorbell lags — someone rings and my phone takes 30 seconds',
    body:
      "This is almost always a Wi-Fi issue at the doorbell spot. Front doors are often the farthest point from the router. Try: 1) Move your router closer to the front of the house, 2) Add a Wi-Fi extender about halfway between the router and the doorbell, 3) Check your internet upload speed at speedtest.net — if upload is below 3 Mbps, your internet itself is the bottleneck.",
  },
  {
    title: 'Battery drains fast on my wireless camera',
    body:
      "The #1 cause is too many motion events. Shrink your activity zones, lower sensitivity, and turn off 'Other motion' so only People trigger recordings. The #2 cause is weak Wi-Fi — the camera burns power re-connecting all day. Check signal bars where the camera is. The #3 cause is cold weather — batteries drain up to 50% faster below freezing. In winter, consider switching to a wired setup for the cold months.",
  },
  {
    title: 'Video is choppy or won\'t load in the app',
    body:
      'First, try closing the app fully and reopening it. Second, test on another device (tablet, computer browser) — if it works there, your phone is the issue. Third, if you\'re away from home on cellular data, the camera needs good upload speed AT the house — log into your router and check. Last resort: unplug the camera (or remove and reinsert batteries) for 30 seconds and let it reconnect.',
  },
];

/* ── FAQ accordion data ───────────────────────────────────────── */

const FAQ: IssueItem[] = [
  {
    title: 'Do I really need a subscription?',
    body:
      'Depends on the brand. Ring basically requires it ($4.99/mo) to save any video. Arlo locks most smart features behind Arlo Secure ($7.99/mo). Wyze and Blink are optional — you can use them free or add a subscription later. Eufy is truly free — no subscription needed. Nest gives you 3 free hours of event history; Nest Aware ($8/mo) unlocks the full timeline. If you hate subscriptions, start with Eufy or a Wyze Cam with a microSD card.',
  },
  {
    title: 'Can someone hack my camera?',
    body:
      'It\'s possible, but the overwhelming majority of "hacks" are actually cases where someone reused a weak password that was already leaked in another breach. Three steps reduce risk to near-zero: (1) Use a unique, long password for your camera account — never the same one you use for email or banking. (2) Turn on two-factor authentication in the camera app. (3) Keep the camera\'s firmware updated — the app will prompt you. If you want, you can run your password through our Password Strength Tester.',
  },
  {
    title: 'What about hardwired cameras or NVR systems?',
    body:
      "Those are the big professional setups with a black box in a closet and wires running through the walls. They\'re very reliable and have no subscription, but they\'re expensive ($600–$2,000), require a technician for installation, and the software is clunky. For 95% of seniors, a name-brand Wi-Fi camera (Ring, Nest, Arlo, Eufy) is simpler, cheaper, and easier to troubleshoot. We recommend starting with Wi-Fi cameras and only looking at NVR if you need 8+ cameras or are covering a business property.",
  },
  {
    title: 'Can the police access my recordings?',
    body:
      "Only with your permission, or with a warrant. If you want to share footage, every app has a 'Share' or 'Download' button — use it to send a clip to the officer. Ring has a feature called 'Request for Assistance' that lets local police ASK for footage via the Neighbors app — you can accept, decline, or ignore any request. Amazon has said they won\'t hand over footage without a warrant unless there\'s an emergency involving potential danger to life. Nest, Arlo, Wyze, Eufy, and Blink all have similar warrant-required policies. You\'re always in control of the Share button.",
  },
  {
    title: 'What if my Wi-Fi is slow in the area where I want the camera?',
    body:
      "First run a speed test on a phone standing where the camera will go. You want at least 2 bars and 3 Mbps upload. If you\'re below that, you have a few options: 1) Move the router closer (easiest if the router is in a bad spot). 2) Add a Wi-Fi extender or mesh point — a $70–$150 investment that fixes most dead zones. 3) For far-away spots, pick a camera brand that uses a base station (Arlo SmartHub, Eufy HomeBase, Blink Sync Module) because the base sits near the router and the cameras talk to the base. 4) Hardwire an outdoor camera with an Ethernet (PoE) cable for the most reliable connection.",
  },
  {
    title: 'Do I need a smart display like an Echo Show or Nest Hub?',
    body:
      'Nice to have, but not required. A smart display lets you say "Alexa, show the front door" and see the live camera on a screen — great for the kitchen or next to your chair. A $50 Echo Show 5 is the cheapest option if you have Ring or Blink. A Nest Hub works with Nest cameras. Your phone already does everything the display does, so skip it if you\'re trying to save money.',
  },
  {
    title: 'Will a camera work during a power outage?',
    body:
      "Only battery-powered cameras, and only if your Wi-Fi router also has a battery backup. During a power outage, your router usually shuts off too — which means even a battery camera can't send video to the cloud or to your phone. Most cameras just record locally (if they have local storage) until power returns. A $50 UPS battery backup for your router is the real upgrade if power reliability matters to you.",
  },
];

/* ── Away-from-home checklist data ────────────────────────────── */

const AWAY_CHECKLIST: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: 'Share access with a trusted neighbor or family member',
    body: 'Use the Share feature in the app (not your password). They get their own login, can see live view, and can check in if an alert goes off while you\'re away.',
  },
  {
    icon: Home,
    title: 'Turn on Away / Vacation mode',
    body: 'Most apps have an "Armed Away" or "Vacation" mode that turns on recording 24/7, increases sensitivity, and can send every alert to a backup family member.',
  },
  {
    icon: Bell,
    title: 'Make sure notifications actually reach your phone',
    body: 'Before you leave, test this: have someone walk in front of the camera and confirm your phone buzzes within a few seconds. Check Do Not Disturb isn\'t silencing the camera app.',
  },
  {
    icon: Eye,
    title: 'Test the camera the day before you leave',
    body: 'Open the live view, play a clip, try the two-way talk. If anything is weird, you have 24 hours to fix it — not while you\'re 800 miles away on vacation.',
  },
  {
    icon: Plug,
    title: 'Check battery levels (if battery camera)',
    body: 'Don\'t leave with a battery camera at 15%. Fully charge or swap batteries within a day of departure.',
  },
  {
    icon: Wifi,
    title: 'Plug your router into a battery backup (UPS)',
    body: 'A $50 UPS keeps your router alive through most short power cuts. Without this, a 2-hour outage means 2 hours of blind camera.',
  },
];

/* ── Wizard "Done" screen ─────────────────────────────────────── */

function DoneScreen({
  setup,
  completedCount,
  totalSteps,
  onRestart,
}: {
  setup: SetupInfo;
  completedCount: number;
  totalSteps: number;
  onRestart: () => void;
}) {
  return (
    <Card className="border-green-600/40 bg-green-50/40 dark:bg-green-950/20">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-green-600/10 text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Your {setup.brandName} camera is ready.</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              You finished {completedCount} of {totalSteps} steps.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-background border p-5 space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            What to do in the first week
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>Review alerts for 3 days, then tighten motion zones if you&apos;re getting too many.</li>
            <li>Share access with one family member (there&apos;s an &quot;Invite&quot; button in the app settings).</li>
            <li>
              Run a{' '}
              <Link to="/tools/password-strength-tester" className="text-primary underline font-medium">
                password strength check
              </Link>{' '}
              on your camera account password.
            </li>
            <li>
              Test your Wi-Fi at the camera with our{' '}
              <Link to="/tools/wifi-speed-doctor" className="text-primary underline font-medium">
                Wi-Fi Speed Doctor
              </Link>.
            </li>
            <li>
              For manufacturer help, visit{' '}
              <a
                href={setup.support.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-medium inline-flex items-center gap-1"
              >
                {setup.support.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>.
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" onClick={onRestart} className="gap-2 text-base">
            <RotateCcw className="w-5 h-5" />
            Compare a different brand
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link to="/tools">Back to all tools</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Quiz component ───────────────────────────────────────────── */

function QuizSection({ onPick }: { onPick: (id: BrandId) => void }) {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const result = useMemo(() => (done ? recommend(answers) : null), [done, answers]);

  const Questions = [
    {
      q: 'What kind of camera do you need?',
      options: [
        { label: 'Indoor only (living room, bedroom, hallway)', value: 'indoor' as CameraType, icon: Home },
        { label: 'Outdoor — backyard, driveway, or porch', value: 'outdoor' as CameraType, icon: Trees },
        { label: 'Doorbell at my front door', value: 'doorbell' as CameraType, icon: DoorOpen },
        { label: 'A little of everything', value: 'all' as CameraType, icon: Camera },
      ],
      set: (v: CameraType) => setAnswers((a) => ({ ...a, cameraType: v })),
    },
    {
      q: 'Where would you like video stored?',
      options: [
        { label: 'In the cloud — I\'m okay paying a small monthly fee', value: 'cloud' as StoragePref, icon: Cloud },
        { label: 'On a local memory card at home — no cloud', value: 'local' as StoragePref, icon: HardDrive },
        { label: 'Either is fine, whichever is easier', value: 'either' as StoragePref, icon: CheckCircle2 },
      ],
      set: (v: StoragePref) => setAnswers((a) => ({ ...a, storage: v })),
    },
    {
      q: 'Can you run power to where the camera will go?',
      options: [
        { label: 'Yes — there\'s an outlet nearby', value: 'wired' as PowerPref, icon: Plug },
        { label: 'No — I need battery-powered', value: 'battery' as PowerPref, icon: Battery },
        { label: 'Either works', value: 'either' as PowerPref, icon: CheckCircle2 },
      ],
      set: (v: PowerPref) => setAnswers((a) => ({ ...a, power: v })),
    },
    {
      q: 'How do you feel about a monthly subscription?',
      options: [
        { label: 'Fine — a few dollars a month is worth it', value: 'yes' as SubPref, icon: DollarSign },
        { label: 'I want to pay ONCE and never again', value: 'no' as SubPref, icon: XCircle },
        { label: 'Not sure yet — show me both', value: 'maybe' as SubPref, icon: HelpCircle },
      ],
      set: (v: SubPref) => setAnswers((a) => ({ ...a, subscription: v })),
    },
  ];

  if (done && result) {
    const brand = BRANDS.find((b) => b.id === result.id)!;
    return (
      <Card className="border-primary/40 bg-primary/5">
        <CardContent className="p-6 md:p-8 space-y-5">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <Star className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm md:text-base font-medium text-muted-foreground mb-1">Your recommendation</div>
              <h3 className="text-2xl md:text-3xl font-bold">{brand.name}</h3>
              <p className="text-base md:text-lg text-muted-foreground mt-1">Suggested model: <strong>{result.model}</strong></p>
            </div>
          </div>

          <p className="text-base md:text-lg leading-relaxed">{result.reason}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" onClick={() => onPick(result.id)} className="gap-2 text-base min-h-14">
              Walk me through setting up {brand.name}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setAnswers({});
                setStep(0);
                setDone(false);
              }}
              className="gap-2 text-base min-h-14"
            >
              <RotateCcw className="w-5 h-5" />
              Start over
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const current = Questions[step];

  return (
    <Card>
      <CardContent className="p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            Question {step + 1} of {Questions.length}
          </Badge>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold leading-tight">{current.q}</h3>

        <div className="grid grid-cols-1 gap-3">
          {current.options.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => {
                  (current.set as (v: string) => void)(opt.value);
                  if (step < Questions.length - 1) {
                    setStep(step + 1);
                  } else {
                    setDone(true);
                  }
                }}
                className="text-left p-4 md:p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors text-base md:text-lg font-medium flex items-center gap-3 min-h-14"
              >
                <Icon className="w-6 h-6 text-primary shrink-0" aria-hidden="true" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {step > 0 && (
          <div className="pt-2">
            <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ── Main component ───────────────────────────────────────────── */

export default function HomeSecurityCameraSetup() {
  const [selectedId, setSelectedId] = useState<BrandId | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const setup = useMemo<SetupInfo | null>(
    () => (selectedId ? SETUPS[selectedId] : null),
    [selectedId],
  );

  const totalSteps = setup?.steps.length ?? 0;
  const isDone = setup ? stepIndex === totalSteps : false;
  const current: Step | null = setup && !isDone ? setup.steps[stepIndex] ?? null : null;
  const progress = setup ? Math.round((stepIndex / totalSteps) * 100) : 0;

  const markDoneAndNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setSelectedId(null);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pickBrand = (id: BrandId) => {
    setSelectedId(id);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Landing page ─────────────────────────────────────────── */
  if (!setup) {
    return (
      <>
        <SEOHead
          title="Home Security Cameras — Pick One and Set It Up"
          description="A plain-English buyer's guide and step-by-step setup wizard for Ring, Nest, Arlo, Wyze, Eufy, and Blink home security cameras. Built for seniors and first-time users."
          path="/tools/home-security-camera-setup"
        />
        <main className="min-h-screen bg-background">
          {/* Hero — cool blue/slate gradient */}
          <section className="border-b border-border bg-gradient-to-br from-sky-50 via-slate-50 to-blue-100 dark:from-sky-950/40 dark:via-slate-900 dark:to-blue-950/40">
            <div className="container py-10 md:py-14 relative">
              <div className="absolute top-6 right-6">
                <BookmarkButton
                  type="tool"
                  slug="home-security-camera-setup"
                  title="Home Security Cameras — Pick One and Set It Up"
                  url="/tools/home-security-camera-setup"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-sky-500/15 text-sky-700 dark:text-sky-300">
                  <Shield className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-xs">Home Safety · Compare & Set Up</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">
                Home Security Cameras — Pick One and Set It Up
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
                We'll help you choose, install, and understand what the camera actually sees — in plain English, with no jargon.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild size="lg" className="text-base min-h-14">
                  <a href="#quiz">Take the 4-question quiz</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                  <a href="#compare">Compare brands</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Quiz */}
          <section id="quiz" className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Not sure which camera to get? Take the 4-question quiz</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Answer four quick questions and we'll recommend a brand and a specific model that fits your home.
            </p>
            <div className="max-w-3xl">
              <QuizSection onPick={pickBrand} />
            </div>
          </section>

          {/* Brand comparison */}
          <section id="compare" className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">The six brands worth knowing</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                These are the brands you'll see most often at Best Buy, Costco, Amazon, and Target. Each has clear strengths and trade-offs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {BRANDS.map((b) => (
                  <Card key={b.id} className="flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-3 rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-300 shrink-0">
                          <Camera className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold mb-1">{b.name}</h3>
                          <p className="text-base text-muted-foreground leading-relaxed">{b.tagline}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-sm"><DollarSign className="w-3 h-3 mr-1" />{b.priceTier}</Badge>
                        <Badge variant="outline" className="text-sm">
                          {b.subscription.startsWith('Not') || b.subscription.startsWith('Optional') ? (
                            <>No sub required</>
                          ) : (
                            <>Subscription needed</>
                          )}
                        </Badge>
                        <Badge variant="outline" className="text-sm">App: {b.companionApp}</Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="grid grid-cols-1 gap-2 text-base">
                          <div className="flex gap-2">
                            <Camera className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                            <span><strong>Models:</strong> {b.models}</span>
                          </div>
                          <div className="flex gap-2">
                            <Cloud className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                            <span><strong>Storage:</strong> {b.storage}</span>
                          </div>
                          <div className="flex gap-2">
                            <DollarSign className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                            <span><strong>Subscription:</strong> {b.subscription}</span>
                          </div>
                          <div className="flex gap-2">
                            <Star className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                            <span><strong>Best for:</strong> {b.bestFor}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-green-800 dark:text-green-400 mb-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            Strengths
                          </h4>
                          <ul className="space-y-1.5">
                            {b.strengths.map((s) => (
                              <li key={s} className="text-base leading-relaxed flex gap-2">
                                <span className="text-green-700 dark:text-green-400 shrink-0" aria-hidden="true">+</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                            <XCircle className="w-4 h-4" />
                            Weaknesses
                          </h4>
                          <ul className="space-y-1.5">
                            {b.weaknesses.map((w) => (
                              <li key={w} className="text-base leading-relaxed flex gap-2">
                                <span className="text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true">−</span>
                                <span>{w}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-2 mt-auto flex flex-wrap gap-2">
                        <Button
                          size="lg"
                          className="flex-1 min-w-[200px] gap-2 text-base min-h-14"
                          onClick={() => pickBrand(b.id)}
                        >
                          Set up a {b.name} camera
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-base min-h-14">
                          <a href={b.support.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                            Help <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Privacy & Safety */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Lock className="w-7 h-7 text-primary" />
              Privacy &amp; safety — the honest answer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              A camera records a lot more than most people realize. Here's what you need to know before you press record.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    What the camera records
                  </h3>
                  <p className="text-base leading-relaxed">
                    Every modern camera records <strong>video and audio</strong> by default. That means you&apos;re capturing the voices of anyone who walks by — including conversations happening on a sidewalk or in a neighbor&apos;s yard.
                  </p>
                  <p className="text-base leading-relaxed">
                    Depending on the brand, video is stored either in the cloud (the company&apos;s servers), locally on a memory card at your home, or both. Subscription plans usually mean cloud.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Who can see it
                  </h3>
                  <p className="text-base leading-relaxed">
                    The <strong>account owner</strong> (you), <strong>shared users</strong> (family, neighbors you invite), and, in very limited cases, the camera company&apos;s support team when you request help. Law enforcement only gets footage with your permission or a court warrant.
                  </p>
                  <p className="text-base leading-relaxed">
                    Employees of the camera company generally cannot watch your video, but past incidents (Ring 2019, ADT 2020) prove it&apos;s possible with bad actors. That&apos;s why password strength and 2FA matter so much.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    Sharing footage safely
                  </h3>
                  <p className="text-base leading-relaxed">
                    If police, a delivery company, or a neighbor needs a clip, use the <strong>&quot;Share&quot; button</strong> inside the camera&apos;s app. It generates a secure link that expires after a few days. Never email a raw video file unless someone specifically asks — it&apos;s bigger, slower, and easier to misdirect.
                  </p>
                  <p className="text-base leading-relaxed">
                    In Ring&apos;s app, the share is called <em>&quot;Share Video&quot;</em>; Nest calls it <em>&quot;Download clip&quot;</em>; Arlo and Eufy just say <em>&quot;Share&quot;</em>.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                    Recording audio — know your state
                  </h3>
                  <p className="text-base leading-relaxed">
                    Video in public view is generally legal. <strong>Audio is trickier.</strong> Twelve U.S. states require ALL parties in a conversation to consent to being recorded — California, Florida, Illinois, Maryland, Massachusetts, Michigan, Montana, Nevada, New Hampshire, Pennsylvania, Vermont, and Washington.
                  </p>
                  <p className="text-base leading-relaxed">
                    Translation: in those states, a doorbell camera that records the voices of people walking by may violate local law. The simplest fix is to turn off audio recording in the app (Ring → Settings → Audio Streaming &amp; Recording → Off). Check with local rules if you&apos;re unsure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <EyeOff className="w-6 h-6 text-primary" />
                    Turning off recording when guests visit
                  </h3>
                  <p className="text-base leading-relaxed">
                    Indoor cameras especially — most brands let you toggle recording off with one tap. In Ring, it&apos;s the <em>&quot;Modes&quot;</em> switch at the top of the app. In Nest, tap the camera → <em>&quot;Camera off&quot;</em>. In Arlo and Eufy, tap <em>&quot;Disarm&quot;</em>. Remember to turn it back on after your guests leave.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950/20 border-red-500/40">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <KeyRound className="w-6 h-6 text-red-700 dark:text-red-400" />
                    The single most important thing — your password
                  </h3>
                  <p className="text-base leading-relaxed">
                    Most &quot;hacked camera&quot; stories are not hacks at all. They&apos;re cases of <strong>reused passwords</strong>. Someone&apos;s email password was leaked in a breach years ago. They used the same password on their camera account. A thief bought that leaked password for $2 and walked right in.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-base leading-relaxed">
                    <li>Use a <strong>unique password</strong> for your camera account — never the same as email, Amazon, or bank.</li>
                    <li>Turn on <strong>two-factor authentication (2FA)</strong> — yes, it&apos;s one extra step, and yes, it stops 99% of attacks.</li>
                    <li>
                      Check your password strength with our{' '}
                      <Link to="/tools/password-strength-tester" className="text-primary underline font-medium">
                        Password Strength Tester
                      </Link>.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Troubleshooting accordion */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                Troubleshooting — the fixes that work 90% of the time
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                Tap any issue to expand. Most problems take under 5 minutes to sort out.
              </p>

              <Accordion type="multiple" className="max-w-3xl bg-background rounded-xl border">
                {TROUBLESHOOTING.map((item, i) => (
                  <AccordionItem key={item.title} value={`trouble-${i}`}>
                    <AccordionTrigger className="px-5 py-4 text-left text-base md:text-lg font-medium">
                      <span className="flex items-start gap-2 text-left">
                        <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-1" aria-hidden="true" />
                        <span>{item.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-base leading-relaxed text-muted-foreground">
                      {item.body}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Away-from-home checklist */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <MapPin className="w-7 h-7 text-primary" />
              When you're not home — your vacation checklist
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Before you leave for more than a day, run through these. Two minutes of prep prevents most &quot;my camera didn&apos;t work while I was gone&quot; problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {AWAY_CHECKLIST.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title}>
                    <CardContent className="p-5 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-300 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                Frequently asked questions
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                The real questions we hear most often from families and seniors setting up their first camera.
              </p>

              <Accordion type="single" collapsible className="max-w-3xl bg-background rounded-xl border">
                {FAQ.map((item, i) => (
                  <AccordionItem key={item.title} value={`faq-${i}`}>
                    <AccordionTrigger className="px-5 py-4 text-left text-base md:text-lg font-medium">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-base leading-relaxed text-muted-foreground">
                      {item.body}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Related links */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-primary" />
              Keep going — related TekSure tools
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              These pair nicely with home security cameras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              <Card>
                <CardContent className="p-5 flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      <Link to="/tools/wifi-speed-doctor" className="hover:underline">Wi-Fi Speed Doctor</Link>
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Check that your Wi-Fi is strong enough where your camera will live. Almost every camera problem starts here.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      <Link to="/tools/router-setup-wizard" className="hover:underline">Router Setup Wizard</Link>
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      If your Wi-Fi is weak, fix the router first. This wizard walks through the real fixes — no jargon.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 flex items-start gap-3">
                  <Volume2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      <Link to="/tools/voice-assistant-setup" className="hover:underline">Voice Assistant Setup</Link>
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Set up Alexa or Google so you can say &quot;Show the front door&quot; and see your camera on an Echo Show or Nest Hub.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      <Link to="/guides?category=Safety" className="hover:underline">Safety guides</Link>
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Browse every TekSure guide on home safety, online safety, scam defense, and privacy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </>
    );
  }

  /* ── Wizard view ──────────────────────────────────────────── */
  return (
    <>
      <SEOHead
        title={`${setup.brandName} Camera Setup — Step-by-Step for Seniors`}
        description={`Follow a plain-English walkthrough to set up your ${setup.brandName} security camera. Designed for seniors and first-time users.`}
        path="/tools/home-security-camera-setup"
      />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-gradient-to-br from-sky-50 via-slate-50 to-blue-100 dark:from-sky-950/40 dark:via-slate-900 dark:to-blue-950/40">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-sky-700 dark:text-sky-300" />
                <span className="text-base md:text-lg font-medium">
                  Setting up · {setup.brandName}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={restart} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Pick a different brand
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {isDone ? 'All done' : `Step ${stepIndex + 1} of ${totalSteps}`}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                App: <strong>{setup.appName}</strong>
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                About {setup.estTime}
              </span>
            </div>
            <Progress value={isDone ? 100 : progress} className="h-3" aria-label="Setup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          {isDone ? (
            <DoneScreen
              setup={setup}
              completedCount={completed.size}
              totalSteps={totalSteps}
              onRestart={restart}
            />
          ) : current ? (
            <article className="space-y-6">
              {/* Step header */}
              <header className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-sm">
                    Step {stepIndex + 1} / {totalSteps}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {setup.shortName}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
              </header>

              {/* Screenshot placeholder */}
              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshot}`}
                className="rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/40 p-8 md:p-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground">Visual coming soon</div>
                <div className="text-base md:text-lg font-medium">{current.screenshot}</div>
              </div>

              {/* Main instruction */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">What to do</h2>
                  <p className="text-lg leading-relaxed">{current.instruction}</p>
                </CardContent>
              </Card>

              {/* Stumbling block */}
              {current.stumble && (
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                  <CardContent className="p-5 flex items-start gap-3">
                    <Lightbulb
                      className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Common stumbling block</h3>
                      <p className="text-base leading-relaxed">{current.stumble}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Nav */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="gap-2 text-base min-h-14"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>

                <Button size="lg" onClick={markDoneAndNext} className="gap-2 text-base min-h-14">
                  {stepIndex === totalSteps - 1
                    ? 'Finish'
                    : completed.has(stepIndex)
                      ? 'Done — next step'
                      : 'Next step'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Step overview */}
              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
                <div className="flex flex-wrap gap-2">
                  {setup.steps.map((s, i) => {
                    const isStepDone = completed.has(i);
                    const active = i === stepIndex;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setStepIndex(i);
                          if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        aria-current={active ? 'step' : undefined}
                        className={[
                          'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                          active
                            ? 'bg-primary text-primary-foreground border-primary'
                            : isStepDone
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-primary/40',
                        ].join(' ')}
                      >
                        {isStepDone && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                        {s.title.split(' ').length > 4 ? '…' : ''}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      setStepIndex(totalSteps);
                      if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={[
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors border',
                      isDone
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/40',
                    ].join(' ')}
                  >
                    All done
                  </button>
                </div>
              </div>

              {/* Helpful reminders */}
              <Card className="mt-6 bg-muted/30">
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    While you&apos;re here
                  </h3>
                  <p className="text-sm leading-relaxed">
                    <strong>2.4 GHz Wi-Fi:</strong> Almost every security camera uses the 2.4 GHz Wi-Fi band. If setup keeps failing, that&apos;s the first thing to check.
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Two-factor authentication:</strong> Turn it on the moment you create the account. It&apos;s the single biggest protection against a hacked camera.
                  </p>
                  <p className="text-sm leading-relaxed">
                    <strong>Official help:</strong>{' '}
                    <a
                      href={setup.support.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline inline-flex items-center gap-1"
                    >
                      {setup.support.label} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                </CardContent>
              </Card>
            </article>
          ) : null}
        </section>
      </main>
    </>
  );
}
