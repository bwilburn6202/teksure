import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Smartphone,
  Apple,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Printer,
  Coffee,
  PhoneCall,
  MessageSquare,
  Camera,
  Wifi,
  Battery,
  Volume2,
  ShieldCheck,
  Siren,
  Hand,
  Power,
  Sparkles,
  HelpCircle,
  Home,
  Download,
  Bookmark,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * My First Smartphone
 * ------------------------------------------------------------
 * A guided, senior-friendly onboarding wizard for someone who
 * just got their very first smartphone (or is switching from a
 * flip phone). Picks iPhone or Android, then walks through 15
 * short steps with plain language, stumbling-block tips, and a
 * printable cheat sheet.
 * ────────────────────────────────────────────────────────────── */

type PhoneType = 'iphone' | 'android';

const STORAGE_KEY = 'teksure:my-first-smartphone';

interface SavedProgress {
  phone: PhoneType | null;
  stepIndex: number;
  completed: number[];
  savedAt: string;
}

interface WizardStep {
  title: string;
  oneLiner: string;
  icon: LucideIcon;
  actions: string[];
  stumble: string;
  why?: string;
  screenshot: string;
  cheatSheet: string;
}

/* ── iPhone steps ─────────────────────────────────────────────── */

const IPHONE_STEPS: WizardStep[] = [
  {
    title: 'Meet your iPhone',
    oneLiner: "Before you press a single button, let's find the important parts together.",
    icon: Smartphone,
    actions: [
      'Side button (right edge): turns the screen on and off, and powers the phone on or off.',
      'Volume buttons (left edge): the top one makes sound louder, the bottom one quieter.',
      'Charging port (bottom): where the charging cable plugs in.',
      'Speaker (bottom): where sound comes out for calls and music.',
      'Rear camera (back, top corner): for taking photos of things in front of you.',
      'Front camera (top of screen): for video calls and selfies.',
      'Screen (the glass front): you tap it with your finger to use the phone.',
    ],
    stumble:
      "Nothing to break here — point to each part on your actual phone while you read. If you're not sure which button is which, look for the small raised lines on the side: two buttons = volume, one button = power.",
    why:
      "Every single step after this assumes you know where these buttons are. Two minutes here saves thirty minutes of confusion later.",
    screenshot: 'Labeled diagram of an iPhone: side button, volume, port, speakers, cameras',
    cheatSheet: 'Side button = power. Two buttons on left = volume. Hole at bottom = charger.',
  },
  {
    title: 'Turn it on and unlock it',
    oneLiner: "Hold the side button until the Apple logo appears, then swipe up.",
    icon: Power,
    actions: [
      'Press and HOLD the side button on the right edge for about 3 seconds.',
      'You will see a white Apple logo on a black screen — this means the phone is starting up. It can take up to a minute.',
      'When the screen shows "Hello" (in many languages), swipe your finger from the bottom edge upward.',
      'To lock the phone later, give the side button ONE quick press — the screen goes dark.',
    ],
    stumble:
      "Nothing happens when you press the button? Plug the phone into a charger for 15 minutes and try again. Brand-new phones sometimes ship with almost no battery.",
    why:
      "That Apple logo is how you know the phone is healthy. No logo at all for more than a minute usually means the battery is dead.",
    screenshot: 'iPhone showing the Apple logo on a black startup screen',
    cheatSheet: 'Hold side button 3 seconds → Apple logo → swipe up from bottom.',
  },
  {
    title: 'Learn the 5 basic touch gestures',
    oneLiner: "Your finger replaces the mouse and keyboard. Here are the only 5 motions you need.",
    icon: Hand,
    actions: [
      'TAP: one quick touch. Like pressing a button. Used to open apps.',
      'DOUBLE-TAP: two quick touches in the same spot. Used to zoom in on photos or text.',
      'LONG-PRESS: hold your finger on one spot for 1 second. Used to move apps around or see more options.',
      'SWIPE: slide your finger across the screen. Up, down, left, right. Used to scroll and flip between screens.',
      'PINCH: two fingers come together or apart. Used to zoom in and out of maps, photos, and web pages.',
    ],
    stumble:
      "If the phone doesn't respond to your tap, try a slightly softer touch. You don't need to press hard — the screen is very sensitive. Wet fingers can confuse the screen, so dry your hands first.",
    why:
      "Almost every task on a smartphone uses one of these 5 motions. Once they feel natural, you've learned 80% of how to use the phone.",
    screenshot: 'Diagram showing the 5 gestures: tap, double-tap, long-press, swipe, pinch',
    cheatSheet: 'Tap = click. Swipe = scroll. Pinch = zoom. Hold 1 second = right-click.',
  },
  {
    title: 'Tour your Home Screen',
    oneLiner: "Every square picture on the screen is an app — a little program that does one thing.",
    icon: Home,
    actions: [
      'APPS are the small squares with pictures — Phone, Messages, Camera, Safari, and so on.',
      'The DOCK is the bottom row (usually Phone, Messages, Safari, and Music). It stays put when you swipe between screens.',
      'The STATUS BAR at the very top shows the time, the Wi-Fi signal (a fan shape), the cell signal (dots), and the battery.',
      'Swipe LEFT to see more app screens. Swipe RIGHT to go back.',
      'Swipe down from the middle of the screen to search for any app by name.',
    ],
    stumble:
      "Accidentally dragged an app somewhere? Tap and hold any blank spot, then tap Done — everything snaps back. You cannot truly break or lose an app by moving it.",
    screenshot: 'Home screen with apps, dock, status bar, and wallpaper labeled',
    cheatSheet: 'Apps = squares. Dock = bottom row. Status bar = top (time, Wi-Fi, battery).',
  },
  {
    title: 'Connect to your home Wi-Fi',
    oneLiner: "Wi-Fi is free internet at home — cell service costs money, Wi-Fi doesn't.",
    icon: Wifi,
    actions: [
      'Find the Settings app (grey gear icon). Tap it.',
      'Tap Wi-Fi at the top of the menu.',
      'Make sure the green switch is ON.',
      'Tap the name of YOUR home Wi-Fi from the list (it usually has your internet company name or the family name).',
      'Type the password exactly as printed on the back of your internet router (case matters — capital O is different from zero).',
      'Tap Join. A blue check mark next to the name means you are connected.',
    ],
    stumble:
      "Wi-Fi passwords are case-sensitive. The safest place to find yours is the sticker on the bottom or back of your internet router. If the password looks like gibberish, that's normal — type it exactly.",
    why:
      "Many things — video calls, app updates, watching shows — only work well on Wi-Fi. Connect once at home, and it remembers for next time.",
    screenshot: 'Settings → Wi-Fi menu with a network highlighted and password field showing',
    cheatSheet: 'Settings → Wi-Fi → pick network → type password → Join.',
  },
  {
    title: 'Set up Face ID',
    oneLiner: "Your face becomes your password. Look at the phone — it unlocks.",
    icon: ShieldCheck,
    actions: [
      'Open Settings (grey gear icon).',
      'Scroll down and tap Face ID & Passcode.',
      'Enter the 6-digit passcode you chose during setup.',
      'Tap Set Up Face ID, then Get Started.',
      'Hold the phone about 12 inches from your face and slowly roll your head in a circle. Do this twice.',
      'When the circle turns green, Face ID is ready.',
    ],
    stumble:
      "Take off glasses, hats, and masks during setup. You can add an alternate look later (with glasses, without glasses) in the same menu.",
    why:
      "Face ID is faster than typing a passcode, and harder for strangers to fake. Your face never leaves your phone — it's stored in a special secure chip.",
    screenshot: 'iPhone Face ID setup screen with face inside a circular guide',
    cheatSheet: 'Settings → Face ID & Passcode → Set Up Face ID → roll head twice.',
  },
  {
    title: 'Make your first phone call',
    oneLiner: "This part is the same as every phone you've ever used — just with a screen.",
    icon: PhoneCall,
    actions: [
      'Tap the green Phone app (a small white phone on a green background).',
      'Along the bottom you will see Favorites, Recents, Contacts, Keypad, and Voicemail.',
      'Tap Keypad to dial a number, or Contacts to pick a saved person.',
      'Tap the green circle with a phone to start the call.',
      'Hold the phone to your ear like any phone.',
      'When you want to hang up, tap the red circle with a phone at the bottom.',
    ],
    stumble:
      "The volume feels low? Press the top volume button on the left edge WHILE on the call — this is a different volume than the ringtone volume.",
    screenshot: 'iPhone Phone app keypad with a number dialed and green call button',
    cheatSheet: 'Phone app → Keypad or Contacts → green button to call → red to hang up.',
  },
  {
    title: 'Send your first text message',
    oneLiner: "Messages is for typing short notes to people — faster than a phone call for quick questions.",
    icon: MessageSquare,
    actions: [
      'Tap the green Messages app (a white speech bubble on a green background).',
      'Tap the pencil-and-square icon in the top right to start a new message.',
      'In the To field, type a name from your contacts OR a phone number.',
      'Tap the text box at the bottom that says iMessage.',
      'Type your message. A keyboard appears automatically.',
      'Tap the blue up-arrow next to your text to send.',
    ],
    stumble:
      "Auto-correct changed your word? Tap the X on the suggestion BEFORE you hit space to keep what you typed. You can also tap a word after sending to fix a typo in a follow-up.",
    screenshot: 'Messages app with a new conversation showing keyboard and send button',
    cheatSheet: 'Messages → pencil icon → pick contact → type → tap blue arrow to send.',
  },
  {
    title: 'Take a photo and a selfie',
    oneLiner: "Your iPhone is a very good camera. Here is how to use it.",
    icon: Camera,
    actions: [
      'Tap the Camera app (a grey camera icon).',
      'Hold the phone steady and point the back at what you want to photograph.',
      'Tap the large white circle at the bottom to take a photo.',
      'For a selfie (photo of yourself), tap the little camera-with-arrows icon near the shutter button — it flips to the front camera.',
      'Tap the shutter again, and smile.',
      'To see photos you took, open the Photos app (the colorful pinwheel icon).',
    ],
    stumble:
      "Photo came out blurry? Tap the part of the image you want to focus on before pressing the shutter — a yellow square appears, and that's what the camera will focus on.",
    screenshot: 'Camera app viewfinder with shutter and flip-camera buttons',
    cheatSheet: 'Camera app → white circle = photo. Flip arrows = selfie. Photos app shows them.',
  },
  {
    title: 'Install an app from the App Store',
    oneLiner: "The App Store is the ONLY safe place to install apps on iPhone.",
    icon: Download,
    actions: [
      'Tap the App Store (a blue "A" made of popsicle sticks).',
      'Tap Search at the bottom right.',
      'Type the name of the app you want — for example "FaceTime" or "YouTube".',
      'Tap the app in the results (check the name and maker match what you wanted).',
      'Tap Get, then confirm with Face ID.',
      'Wait for the progress circle to finish, then tap Open — or find the new app on your Home Screen.',
    ],
    stumble:
      "Never install apps from links in emails or text messages — only from the App Store. If an ad tries to push you to install something outside the store, close the ad and search for it in the App Store by name instead.",
    why:
      "Apple reviews every app in the App Store for safety. Apps from anywhere else are the #1 way scammers sneak onto phones.",
    screenshot: 'App Store search results with a "Get" button next to an app',
    cheatSheet: 'App Store (blue A) → Search → type name → Get → Face ID → Open.',
  },
  {
    title: 'Control Center: volume, brightness, airplane mode',
    oneLiner: "One swipe gives you the most-used settings in one place.",
    icon: Volume2,
    actions: [
      'Swipe DOWN from the TOP-RIGHT corner of the screen (near the battery icon).',
      'A box slides in with big round controls.',
      'The airplane icon turns off all signals (use on planes).',
      'The sun slider is screen brightness — drag up to brighten.',
      'The speaker slider is volume.',
      'The Wi-Fi fan icon and Bluetooth arrow can be tapped to turn those on or off.',
      'Swipe up or tap any empty spot to close Control Center.',
    ],
    stumble:
      "On older iPhones with a Home button, Control Center opens by swiping UP from the BOTTOM instead of down from the top.",
    screenshot: 'Control Center open with brightness, volume, airplane, and Wi-Fi visible',
    cheatSheet: 'Swipe from top-right corner. Brightness = sun. Volume = speaker.',
  },
  {
    title: 'Battery saver tips',
    oneLiner: "Phones lose battery all day. Here is how to make it last longer.",
    icon: Battery,
    actions: [
      'When your battery hits 20%, iPhone asks if you want Low Power Mode. Tap Yes — it dims the screen slightly and saves a lot of battery.',
      'You can turn Low Power Mode on any time: Settings → Battery → Low Power Mode (green switch).',
      'Charge overnight at the bedside — iPhones are designed for this and will stop charging when full.',
      "Screen brightness and video calls drain the most battery. Brightness at 50% usually looks great indoors.",
      "Don't worry about closing apps — iPhone handles that for you.",
    ],
    stumble:
      "If your phone is getting hot while charging, unplug it and put it on a hard flat surface (not a bed or couch). Heat is the single biggest enemy of battery health.",
    screenshot: 'Battery settings with Low Power Mode switch highlighted',
    cheatSheet: 'Settings → Battery → Low Power Mode. Charge overnight. 50% brightness indoors.',
  },
  {
    title: "If you get stuck: the three rescue moves",
    oneLiner: "Every smartphone user — including the pros — uses these three moves weekly.",
    icon: HelpCircle,
    actions: [
      'FORCE-QUIT AN APP: swipe up from the bottom and pause in the middle. You see cards for each open app. Flick the frozen one UP off the top of the screen — it closes.',
      'RESTART THE PHONE: hold the side button AND the volume-up button together until you see a "slide to power off" bar. Slide it, wait 10 seconds, then hold the side button again until the Apple logo appears.',
      'ASK SIRI: press and hold the side button for 1 second, then ask: "Hey Siri, how do I turn up my volume?" or "Hey Siri, open Messages."',
    ],
    stumble:
      "Restart fixes about 8 out of 10 phone problems. When in doubt, restart first. It cannot hurt anything — nothing you care about gets deleted.",
    why:
      "These three moves replace almost every complicated troubleshooting step. Learn them and you'll never feel helpless.",
    screenshot: 'App switcher showing card-stack of open apps ready to be swiped away',
    cheatSheet: 'Frozen app: swipe up, flick it away. Frozen phone: hold side + vol-up, slide off.',
  },
  {
    title: 'Emergency SOS and Medical ID',
    oneLiner: "Your phone can get help faster than any phone you've owned before. Set it up today.",
    icon: Siren,
    actions: [
      'Press and HOLD the side button and either volume button together for 5 seconds — a red SOS slider appears. Keep holding to auto-call 911.',
      'Set up Medical ID now: open the Health app (white heart on pink) → tap your photo → Medical ID → Edit.',
      'Fill in any medications, allergies, blood type, and emergency contacts.',
      'Turn ON "Show When Locked" and "Share During Emergency Call" so paramedics can see this info even if they cannot unlock your phone.',
      'If you have Apple Watch, it can also detect a hard fall and call 911 automatically.',
    ],
    stumble:
      "Accidentally triggered SOS? Let go of the buttons BEFORE the countdown finishes and tap Cancel. It is always better to trigger it accidentally than to hesitate in a real emergency.",
    why:
      "Medical ID has saved lives — paramedics know within seconds what medications you take and who to call.",
    screenshot: 'Health app Medical ID screen with emergency contact fields',
    cheatSheet: 'Hold side + volume 5 seconds = SOS. Health app → Medical ID.',
  },
  {
    title: "You did it! Here's what to explore next",
    oneLiner: "You just completed the hardest part. Everything from here is the fun stuff.",
    icon: Sparkles,
    actions: [
      "Practice calling and texting a family member today — muscle memory is everything.",
      "Try saying 'Hey Siri, set a timer for 10 minutes' — it's a fantastic kitchen helper.",
      "Take 3 photos of things you love — pets, family, a meal. It builds confidence.",
      "Bookmark this guide so you can come back to any step.",
      "When ready, explore more TekSure tools — linked below.",
    ],
    stumble:
      "Feeling overwhelmed is normal. You don't have to learn every feature today — come back to these steps any time. The phone isn't going anywhere.",
    screenshot: 'A friendly confetti graphic celebrating completion',
    cheatSheet: "You're done! Keep this cheat sheet near the phone for the first week.",
  },
];

/* ── Android steps ────────────────────────────────────────────── */

const ANDROID_STEPS: WizardStep[] = [
  {
    title: 'Meet your Android phone',
    oneLiner: "Before you press a single button, let's find the important parts together.",
    icon: Smartphone,
    actions: [
      'Power button (right edge, higher up): turns the screen on and off.',
      'Volume buttons (right edge, just above or below the power button, OR on the left): up for louder, down for quieter.',
      'Charging port (bottom): where the cable plugs in (usually USB-C — an oval shape).',
      'Speakers (bottom edge and earpiece at top): where sound comes out.',
      'Rear camera (back, top): one, two, or three round lenses for photos.',
      'Front camera (tiny dot or notch in the top of the screen): for selfies and video calls.',
      'Screen (the glass front): you tap to use the phone.',
    ],
    stumble:
      "Exact button placement varies slightly between Samsung, Google Pixel, and other brands — but every Android phone has the same 7 parts. Feel for the raised lines.",
    why:
      "Every step after this assumes you know where these buttons are. Two minutes here saves thirty minutes of confusion later.",
    screenshot: 'Labeled diagram of an Android phone: power, volume, port, speakers, cameras',
    cheatSheet: 'Right edge buttons: power + volume. Bottom: charging port. Top tiny dot: selfie cam.',
  },
  {
    title: 'Turn it on and unlock it',
    oneLiner: "Hold the power button until you see the logo, then swipe up.",
    icon: Power,
    actions: [
      'Press and HOLD the power button on the right edge for about 3 seconds.',
      'You will see a logo — Samsung, Google, Pixel, Motorola, or the Android robot — on a dark screen. This means the phone is starting up. It can take up to a minute.',
      'When the lock screen appears, swipe your finger UPWARD from the bottom of the screen.',
      'To lock the phone later, give the power button ONE quick press — the screen goes dark.',
    ],
    stumble:
      "Nothing happens when you press the button? Plug the phone into a charger for 15 minutes and try again. New phones sometimes ship with very low battery.",
    why:
      "The logo tells you the phone is healthy. If you see nothing after a full minute, the battery is likely dead.",
    screenshot: 'Android phone showing the Samsung or Google logo on a startup screen',
    cheatSheet: 'Hold power button 3 seconds → logo → swipe up from bottom.',
  },
  {
    title: 'Learn the 5 basic touch gestures',
    oneLiner: "Your finger replaces the mouse and keyboard. Here are the only 5 motions you need.",
    icon: Hand,
    actions: [
      'TAP: one quick touch. Like pressing a button. Used to open apps.',
      'DOUBLE-TAP: two quick touches in the same spot. Used to zoom in on photos or text.',
      'LONG-PRESS: hold your finger on one spot for 1 second. Used to move apps around or see more options.',
      'SWIPE: slide your finger across the screen. Up, down, left, right. Used to scroll and flip between screens.',
      'PINCH: two fingers come together or apart. Used to zoom in and out of maps, photos, and web pages.',
    ],
    stumble:
      "If the phone doesn't respond, try a slightly softer touch. The screen is very sensitive — no need to press hard. Wet fingers can confuse the screen, so dry your hands first.",
    why:
      "Almost every task on a smartphone uses one of these 5 motions. Once they feel natural, you've learned 80% of how to use the phone.",
    screenshot: 'Diagram showing the 5 gestures: tap, double-tap, long-press, swipe, pinch',
    cheatSheet: 'Tap = click. Swipe = scroll. Pinch = zoom. Hold 1 second = more options.',
  },
  {
    title: 'Tour your Home Screen',
    oneLiner: "Every square picture on the screen is an app — a little program that does one thing.",
    icon: Home,
    actions: [
      'APPS are the square icons — Phone, Messages, Camera, Chrome, and so on.',
      'The DOCK is the bottom row (usually Phone, Messages, Chrome, and Camera). It stays put as you swipe.',
      'The STATUS BAR at the top shows the time, Wi-Fi (a fan shape), cell signal (bars), and the battery.',
      'Swipe LEFT or RIGHT to see more app screens.',
      'Swipe UP from the middle to see ALL installed apps in one big grid (the App Drawer).',
    ],
    stumble:
      "Accidentally moved an app? Long-press it, drag it back, or drag it to the Remove area at the top. Removing from home screen does NOT uninstall — the app is still in the App Drawer.",
    screenshot: 'Android home screen with apps, dock, status bar, and wallpaper labeled',
    cheatSheet: 'Apps = squares. Dock = bottom row. Swipe up = all apps drawer.',
  },
  {
    title: 'Connect to your home Wi-Fi',
    oneLiner: "Wi-Fi is free internet at home — cell service costs money, Wi-Fi doesn't.",
    icon: Wifi,
    actions: [
      'Find the Settings app (grey gear icon). Tap it.',
      'Tap Connections (Samsung) or Network & internet (Google Pixel).',
      'Tap Wi-Fi and make sure the switch at the top is ON.',
      'Tap the name of YOUR home Wi-Fi (it usually has your internet company name or the family name).',
      'Type the password exactly as printed on the back of your internet router (case matters — capital O is different from zero).',
      'Tap Connect. A blue check or "Connected" label means you are online.',
    ],
    stumble:
      "Wi-Fi passwords are case-sensitive. The safest place to find yours is the sticker on the bottom or back of your router. If the password looks like gibberish, that's normal — type it exactly.",
    why:
      "Video calls, app updates, and watching shows work much better on Wi-Fi. Connect once at home, and the phone remembers.",
    screenshot: 'Settings → Wi-Fi menu with a network and password field showing',
    cheatSheet: 'Settings → Wi-Fi → pick network → type password → Connect.',
  },
  {
    title: 'Set up fingerprint unlock',
    oneLiner: "Your fingerprint becomes your password. Touch a sensor — it unlocks.",
    icon: ShieldCheck,
    actions: [
      'Open Settings (grey gear icon).',
      'Tap Security (Samsung) or Security & privacy (Pixel).',
      'Tap Fingerprints (or "Fingerprint Unlock") and enter your PIN.',
      'Tap Add fingerprint.',
      'Follow the on-screen guide — press your finger repeatedly on the sensor (often in the screen itself, or on the back, or on the power button).',
      'Lift and re-press several times until the progress circle is full.',
    ],
    stumble:
      "Some Android phones also support face unlock — but fingerprint is more secure. Register 2 different fingers (both thumbs or thumb + index) so you can unlock with either hand.",
    why:
      "Fingerprint unlock is faster than typing a PIN and much harder for strangers to fake. Your fingerprint is stored in a secure chip — it never leaves the phone.",
    screenshot: 'Android fingerprint setup screen with a fingerprint progress circle',
    cheatSheet: 'Settings → Security → Fingerprints → Add. Repeat-press the sensor until full.',
  },
  {
    title: 'Make your first phone call',
    oneLiner: "This part is the same as every phone you've ever used — just with a screen.",
    icon: PhoneCall,
    actions: [
      'Tap the Phone app (a white phone on a blue or green background).',
      'Along the bottom (or top) you will see Favorites, Recents, Contacts, and Keypad.',
      'Tap Keypad to dial a number, or Contacts to pick a saved person.',
      'Tap the green circle with a phone icon to start the call.',
      'Hold the phone to your ear like any phone.',
      'When you want to hang up, tap the red circle with a phone at the bottom.',
    ],
    stumble:
      "The volume feels low? Press the top volume button WHILE on the call — this is a different volume than the ringtone volume.",
    screenshot: 'Android Phone app keypad with a number dialed and green call button',
    cheatSheet: 'Phone app → Keypad or Contacts → green button to call → red to hang up.',
  },
  {
    title: 'Send your first text message',
    oneLiner: "Messages is for short notes to people — faster than a phone call for quick questions.",
    icon: MessageSquare,
    actions: [
      'Tap the Messages app (often a white speech bubble on a blue background — "Messages by Google" on Pixel).',
      'Tap Start chat (Pixel) or the pencil icon (Samsung) in the bottom right.',
      'Type a name from your contacts OR a phone number.',
      'Tap the text box at the bottom.',
      'Type your message. A keyboard appears automatically.',
      'Tap the blue or green arrow to send.',
    ],
    stumble:
      "Auto-correct changed your word? Tap the X on the suggestion BEFORE you hit space to keep what you typed. Or tap a word after sending to follow up with a fix.",
    screenshot: 'Android Messages app with a new chat showing keyboard and send button',
    cheatSheet: 'Messages → pencil or Start chat → pick contact → type → tap arrow.',
  },
  {
    title: 'Take a photo and a selfie',
    oneLiner: "Your phone is a great camera. Here is how to use it.",
    icon: Camera,
    actions: [
      'Tap the Camera app (usually a camera icon).',
      'Hold the phone steady and point the back at what you want to photograph.',
      'Tap the large white circle at the bottom to take a photo.',
      'For a selfie (photo of yourself), tap the little camera-with-arrows icon near the shutter — it flips to the front camera.',
      'Tap the shutter again, and smile.',
      'To see photos you took, open the Gallery app (Samsung) or Google Photos (Pixel).',
    ],
    stumble:
      "Photo came out blurry? Tap the part of the image you want to focus on before pressing the shutter — a yellow or white square appears, and that's what the camera focuses on.",
    screenshot: 'Android Camera app viewfinder with shutter and flip-camera buttons',
    cheatSheet: 'Camera → white circle = photo. Flip arrows = selfie. Gallery/Photos shows them.',
  },
  {
    title: 'Install an app from the Play Store',
    oneLiner: "The Google Play Store is the ONLY safe place to install apps on Android.",
    icon: Download,
    actions: [
      'Tap the Play Store (a colorful triangle — looks like a "play" button).',
      'Tap the search bar at the top.',
      'Type the name of the app you want — for example "FaceTime" or "YouTube".',
      'Tap the app in the results (check the name and developer match what you wanted — look for "Offered by").',
      'Tap Install.',
      'Wait for the progress circle to finish, then tap Open — or find the new app in the App Drawer.',
    ],
    stumble:
      "Never install apps from links in emails or text messages — only from the Play Store. If a website offers an APK file to download, close that page. Real apps live only in the Play Store.",
    why:
      "Google scans every app in the Play Store for malware. Apps installed from websites are the #1 way scammers sneak onto Android phones.",
    screenshot: 'Play Store search results with an "Install" button next to an app',
    cheatSheet: 'Play Store (triangle) → Search → type name → Install → Open.',
  },
  {
    title: 'Quick Settings: volume, brightness, airplane mode',
    oneLiner: "One swipe gives you the most-used settings in one place.",
    icon: Volume2,
    actions: [
      'Swipe DOWN once from the TOP of the screen — you see a small row of tiles.',
      'Swipe DOWN a second time from the top — the tiles expand into a bigger panel.',
      'The airplane icon turns off all signals (use on planes).',
      'The sun slider is screen brightness — drag right to brighten.',
      'Tap the speaker or "Sound" tile to jump to volume controls.',
      'The Wi-Fi and Bluetooth tiles can be tapped to turn those on or off.',
      'Swipe up or tap anywhere below the panel to close it.',
    ],
    stumble:
      "Can't find airplane mode? Tap the pencil or edit icon in Quick Settings — you can drag tiles around and add the airplane tile to the top for easy access.",
    screenshot: 'Quick Settings panel open with brightness, Wi-Fi, and airplane tiles visible',
    cheatSheet: 'Swipe down from top — twice for full panel. Brightness = sun slider.',
  },
  {
    title: 'Battery saver tips',
    oneLiner: "Phones lose battery all day. Here is how to make it last longer.",
    icon: Battery,
    actions: [
      'When your battery hits 20%, Android asks if you want Battery Saver. Tap Turn on.',
      'You can turn Battery Saver on any time: Settings → Battery → Battery Saver → Turn on now.',
      'Charge overnight — Android phones are designed for this and stop charging when full.',
      "Screen brightness and video calls drain the most battery. Brightness at 50% usually looks great indoors.",
      "Adaptive Battery (Settings → Battery) learns which apps you use and slows down the ones you don't. Leave it on.",
    ],
    stumble:
      "If your phone is getting hot while charging, unplug it and put it on a hard flat surface (not a bed or couch). Heat is the biggest enemy of battery life.",
    screenshot: 'Android Battery settings with Battery Saver switch highlighted',
    cheatSheet: 'Settings → Battery → Battery Saver. Charge overnight. 50% brightness indoors.',
  },
  {
    title: "If you get stuck: the three rescue moves",
    oneLiner: "Every smartphone user — including the pros — uses these three moves weekly.",
    icon: HelpCircle,
    actions: [
      'FORCE-QUIT AN APP: swipe up from the bottom and pause (or tap the Recent Apps button — three lines or a square). You see cards for each open app. Flick the frozen one UP off the top of the screen — it closes.',
      'RESTART THE PHONE: hold the power button for 3 seconds. Tap Restart (or Power off, wait 10 seconds, then press the power button again until the logo appears).',
      'ASK GOOGLE: say "Hey Google, how do I turn up my volume?" or "Hey Google, open Messages." You may need to set this up first in Settings → Google → Google Assistant.',
    ],
    stumble:
      "Restart fixes about 8 out of 10 phone problems. When in doubt, restart first. It cannot hurt anything — nothing you care about gets deleted.",
    why:
      "These three moves replace almost every complicated troubleshooting step. Learn them and you'll never feel helpless.",
    screenshot: 'Recent Apps view showing card-stack of open apps ready to be swiped away',
    cheatSheet: 'Frozen app: swipe up, flick away. Frozen phone: hold power 3 sec, Restart.',
  },
  {
    title: 'Emergency call and Medical ID',
    oneLiner: "Your phone can get help faster than any phone you've owned before. Set it up today.",
    icon: Siren,
    actions: [
      'Press the power button 5 times quickly — this starts an Emergency SOS countdown on most Samsung and Pixel phones.',
      'On many phones you can also swipe UP on the lock screen and tap Emergency — you can call 911 without unlocking.',
      'Set up Emergency information: Settings → Safety & emergency → Medical info.',
      'Fill in medications, allergies, blood type, and emergency contacts.',
      'Turn ON "Show on lock screen" so paramedics can see this info even if they cannot unlock your phone.',
      'Samsung Galaxy phones: look for the SOS feature in Settings → Safety and emergency → Emergency SOS.',
    ],
    stumble:
      "Triggered SOS by accident? Tap Cancel before the countdown ends. It is always better to trigger accidentally than to hesitate in a real emergency.",
    why:
      "Medical info on the lock screen has saved lives — paramedics know within seconds what medications you take and who to call.",
    screenshot: 'Android Safety & emergency settings screen with Medical info field',
    cheatSheet: 'Power button 5x = SOS. Settings → Safety & emergency → Medical info.',
  },
  {
    title: "You did it! Here's what to explore next",
    oneLiner: "You just completed the hardest part. Everything from here is the fun stuff.",
    icon: Sparkles,
    actions: [
      "Practice calling and texting a family member today — muscle memory is everything.",
      "Try saying 'Hey Google, set a timer for 10 minutes' — it's a fantastic kitchen helper.",
      "Take 3 photos of things you love — pets, family, a meal. It builds confidence.",
      "Bookmark this guide so you can come back to any step.",
      "When ready, explore more TekSure tools — linked below.",
    ],
    stumble:
      "Feeling overwhelmed is normal. You don't have to learn every feature today — come back to these steps any time. The phone isn't going anywhere.",
    screenshot: 'A friendly confetti graphic celebrating completion',
    cheatSheet: "You're done! Keep this cheat sheet near the phone for the first week.",
  },
];

const STEPS: Record<PhoneType, WizardStep[]> = {
  iphone: IPHONE_STEPS,
  android: ANDROID_STEPS,
};

/* ── Cheat-sheet print window ─────────────────────────────────── */

function openPrintableCheatSheet(phone: PhoneType) {
  const brand = phone === 'iphone' ? 'iPhone' : 'Android';
  const steps = STEPS[phone];
  const rows = steps
    .map(
      (s, i) =>
        `<tr><td class="num">${i + 1}</td><td class="title">${escapeHtml(
          s.title,
        )}</td><td class="cheat">${escapeHtml(s.cheatSheet)}</td></tr>`,
    )
    .join('');
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>My First Smartphone — ${brand} Cheat Sheet (TekSure)</title>
<style>
  @page { margin: 0.6in; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #111; margin: 0; padding: 0; line-height: 1.4; }
  h1 { font-size: 22pt; margin: 0 0 4pt 0; }
  .sub { font-size: 11pt; color: #555; margin-bottom: 12pt; }
  table { width: 100%; border-collapse: collapse; margin-top: 6pt; font-size: 11pt; }
  th, td { text-align: left; padding: 6pt 8pt; border-bottom: 1px solid #ddd; vertical-align: top; }
  th { background: #f5f5f5; font-size: 10pt; text-transform: uppercase; letter-spacing: 0.04em; }
  td.num { width: 32pt; font-weight: 700; color: #e07856; }
  td.title { width: 34%; font-weight: 600; }
  td.cheat { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10.5pt; }
  .foot { margin-top: 14pt; font-size: 9.5pt; color: #666; }
  .brand { color: #e07856; font-weight: 700; }
</style>
</head>
<body>
  <h1>My First <span class="brand">${brand}</span> — Cheat Sheet</h1>
  <div class="sub">From TekSure · teksure.com/tools/my-first-smartphone · Keep this near your phone for the first week.</div>
  <table>
    <thead><tr><th>#</th><th>Step</th><th>One-line reminder</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="foot">You're doing great. Take your time. No question is silly. — The TekSure team</div>
  <script>window.addEventListener('load', function(){ setTimeout(function(){ window.print(); }, 300); });<\/script>
</body>
</html>`;
  const w = window.open('', '_blank', 'noopener,noreferrer,width=800,height=900');
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Main component ───────────────────────────────────────────── */

export default function MyFirstSmartphone() {
  const [phone, setPhone] = useState<PhoneType | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [resumeOffer, setResumeOffer] = useState<SavedProgress | null>(null);

  /* ── Load saved progress on mount ── */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as SavedProgress;
      if (
        saved &&
        (saved.phone === 'iphone' || saved.phone === 'android') &&
        typeof saved.stepIndex === 'number'
      ) {
        setResumeOffer(saved);
      }
    } catch {
      // ignore corrupted data
    }
  }, []);

  /* ── Save progress whenever state changes ── */
  const saveNow = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!phone) return;
    const payload: SavedProgress = {
      phone,
      stepIndex,
      completed: Array.from(completed),
      savedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // storage may be full or disabled — silently ignore
    }
  }, [phone, stepIndex, completed]);

  useEffect(() => {
    saveNow();
  }, [saveNow]);

  /* ── Wizard navigation helpers ── */
  const steps = phone ? STEPS[phone] : [];
  const totalSteps = steps.length;
  const current: WizardStep | null = phone ? steps[stepIndex] ?? null : null;
  const progress = phone ? Math.round(((stepIndex + 1) / totalSteps) * 100) : 0;

  const pickPhone = (p: PhoneType) => {
    setPhone(p);
    setStepIndex(0);
    setCompleted(new Set());
    setResumeOffer(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goNext = () => {
    setCompleted((prev) => new Set(prev).add(stepIndex));
    setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const jumpTo = (i: number) => {
    setStepIndex(i);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setPhone(null);
    setStepIndex(0);
    setCompleted(new Set());
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const takeABreak = () => {
    saveNow();
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-alert
      window.alert(
        "Your progress has been saved. You can close this page and come back any time — we'll remember where you left off.",
      );
    }
  };

  const resumeFromOffer = () => {
    if (!resumeOffer) return;
    setPhone(resumeOffer.phone);
    setStepIndex(resumeOffer.stepIndex);
    setCompleted(new Set(resumeOffer.completed));
    setResumeOffer(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dismissResume = () => {
    setResumeOffer(null);
    if (typeof window !== 'undefined') window.localStorage.removeItem(STORAGE_KEY);
  };

  /* ── Shared senior-friendly shell (hero) ── */
  const Hero = useMemo(
    () => (
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-rose-50 to-amber-50 dark:from-orange-950/40 dark:via-rose-950/30 dark:to-amber-950/20" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.25),transparent_60%)]" />
        <div className="container relative py-10 md:py-14">
          <div className="absolute top-6 right-6">
            <BookmarkButton
              type="tool"
              slug="my-first-smartphone"
              title="My First Smartphone"
              url="/tools/my-first-smartphone"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Smartphone className="w-5 h-5 text-orange-700 dark:text-orange-300" />
            <Badge variant="outline" className="text-xs border-orange-300 text-orange-800 dark:text-orange-200">
              First-time smartphone · Guided walkthrough
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 leading-tight">
            Your First Smartphone — Let&apos;s Do This Together
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            One step at a time. No question is silly.
          </p>
        </div>
      </section>
    ),
    [],
  );

  /* ── LANDING: device picker + helper ── */
  if (!phone) {
    return (
      <>
        <SEOHead
          title="My First Smartphone — A Guided Walkthrough for First-Time Users"
          description="Just got your first smartphone, or switching from a flip phone? Follow a warm, step-by-step walkthrough for iPhone or Android. 15 short steps, plain English, no jargon."
          path="/tools/my-first-smartphone"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          {Hero}

          {/* Resume banner */}
          {resumeOffer && (
            <section className="container pt-6">
              <Alert className="border-orange-400/60 bg-orange-50 dark:bg-orange-950/30">
                <Bookmark className="h-5 w-5 text-orange-700 dark:text-orange-300" />
                <AlertTitle className="text-base">Welcome back!</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  You were on step {resumeOffer.stepIndex + 1} of your{' '}
                  <strong>{resumeOffer.phone === 'iphone' ? 'iPhone' : 'Android'}</strong> walkthrough.
                  Want to pick up where you left off?
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button size="lg" className="min-h-14 text-base" onClick={resumeFromOffer}>
                      Yes, continue where I left off
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="min-h-14 text-base" onClick={dismissResume}>
                      Start fresh
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            </section>
          )}

          {/* Device picker */}
          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Pick your phone</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Tap the card that matches the phone in your hand. If you&apos;re not sure which you have, check the
              &quot;Which one do I have?&quot; card below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* iPhone card */}
              <button
                type="button"
                onClick={() => pickPhone('iphone')}
                className="group text-left rounded-2xl border-2 border-border hover:border-orange-500 focus-visible:border-orange-500 focus-visible:outline-none bg-card hover:bg-orange-50/60 dark:hover:bg-orange-950/20 transition-all p-6 md:p-8 min-h-14"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 shrink-0">
                    <Apple className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">I have an iPhone</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Made by Apple. Back of phone has the Apple logo. About 15 steps.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-orange-700 dark:text-orange-300 font-semibold text-base md:text-lg">
                      Start the iPhone walkthrough
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </button>

              {/* Android card */}
              <button
                type="button"
                onClick={() => pickPhone('android')}
                className="group text-left rounded-2xl border-2 border-border hover:border-rose-500 focus-visible:border-rose-500 focus-visible:outline-none bg-card hover:bg-rose-50/60 dark:hover:bg-rose-950/20 transition-all p-6 md:p-8 min-h-14"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 shrink-0">
                    <Smartphone className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">I have an Android</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Made by Samsung, Google Pixel, Motorola, OnePlus, and others. About 15 steps.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-rose-700 dark:text-rose-300 font-semibold text-base md:text-lg">
                      Start the Android walkthrough
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* "Which one do I have?" */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
              <Card className="border-orange-300/50 bg-orange-50/40 dark:bg-orange-950/10">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange-700 dark:text-orange-300" />
                    Do I have an iPhone or an Android?
                  </h3>
                  <p className="text-base leading-relaxed">
                    Flip the phone over and look at the back:
                  </p>
                  <ul className="space-y-2 text-base leading-relaxed">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                      <span>
                        You see a <strong>shiny Apple logo</strong> (an apple with a bite out of it) →{' '}
                        <strong>iPhone</strong>.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                      <span>
                        You see a word like <strong>Samsung</strong>, <strong>Pixel</strong>, <strong>Google</strong>,{' '}
                        <strong>Motorola</strong>, <strong>OnePlus</strong>, or <strong>Galaxy</strong> →{' '}
                        <strong>Android</strong>.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-0.5" />
                      <span>
                        You see any <strong>other brand name</strong> (TCL, Nokia, LG, etc.) → almost always{' '}
                        <strong>Android</strong>.
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                    Note: some Samsung and Pixel phones show the brand name instead of &quot;Android&quot; — that&apos;s still
                    Android under the hood.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted/40">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Printer className="w-5 h-5 text-primary" />
                    Prefer paper? Print a cheat sheet
                  </h3>
                  <p className="text-base leading-relaxed">
                    One page, big text, the 15 steps summarized as single lines. Tape it to the fridge or keep it next
                    to your phone for the first week.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Button
                      size="lg"
                      variant="outline"
                      className="min-h-14 text-base gap-2"
                      onClick={() => openPrintableCheatSheet('iphone')}
                    >
                      <Printer className="w-5 h-5" />
                      Print iPhone cheat sheet
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="min-h-14 text-base gap-2"
                      onClick={() => openPrintableCheatSheet('android')}
                    >
                      <Printer className="w-5 h-5" />
                      Print Android cheat sheet
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    A print window will open. If nothing happens, check that your browser allows pop-ups from teksure.com.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What to expect FAQ */}
          <section className="border-t border-border bg-muted/30">
            <div className="container py-10 md:py-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">What to expect</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                A few friendly answers before we begin.
              </p>
              <div className="max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="how-long">
                    <AccordionTrigger className="text-base md:text-lg text-left">
                      How long does this take?
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      Most people finish in 30–60 minutes. Go at your own pace. There is no timer — and every step is
                      saved, so you can close the page and come back any time.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="can-i-break">
                    <AccordionTrigger className="text-base md:text-lg text-left">
                      Can I break my phone by doing this wrong?
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      No. Every step in this walkthrough is safe. Nothing here deletes data, locks you out, or costs
                      money. The worst that can happen is you tap the wrong thing and need to tap again.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="do-i-need">
                    <AccordionTrigger className="text-base md:text-lg text-left">
                      Do I need anything before starting?
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      Three things help: your phone charged at least 30%, your home Wi-Fi password (on the back of the
                      router), and a quiet 30 minutes. That&apos;s it.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="stuck">
                    <AccordionTrigger className="text-base md:text-lg text-left">
                      What if I get stuck on a step?
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      Every step has a &quot;Common stumbling block&quot; tip — read that first. If you&apos;re still
                      stuck, tap &quot;Take a break&quot; at the bottom of any step and come back later with fresh eyes.
                      You can also{' '}
                      <Link to="/get-help" className="text-primary underline font-medium">
                        book a TekSure technician
                      </Link>{' '}
                      for hands-on help over video.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ── WIZARD view ── */
  const isLastStep = stepIndex === totalSteps - 1;
  const StepIcon = current?.icon ?? Smartphone;

  return (
    <>
      <SEOHead
        title={`My First Smartphone — ${phone === 'iphone' ? 'iPhone' : 'Android'} step-by-step`}
        description={`A gentle, step-by-step walkthrough for your first ${phone === 'iphone' ? 'iPhone' : 'Android phone'}. 15 short steps in plain English. Designed for seniors and first-time users.`}
        path="/tools/my-first-smartphone"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Progress header */}
        <section className="border-b border-border bg-gradient-to-br from-orange-50 via-rose-50/60 to-amber-50 dark:from-orange-950/30 dark:via-rose-950/20 dark:to-amber-950/10">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <StepIcon className="w-5 h-5 text-orange-700 dark:text-orange-300" />
                <span className="text-base md:text-lg font-medium">
                  {phone === 'iphone' ? 'iPhone' : 'Android'} walkthrough
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={takeABreak}
                  className="gap-2 min-h-11 text-base"
                >
                  <Coffee className="w-4 h-4" />
                  Take a break
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openPrintableCheatSheet(phone)}
                  className="gap-2 min-h-11 text-base"
                >
                  <Printer className="w-4 h-4" />
                  Print cheat sheet
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={restart}
                  className="gap-2 min-h-11 text-base"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start over
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <span className="text-sm md:text-base font-medium">
                Step {stepIndex + 1} of {totalSteps}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                You&apos;re doing great — take your time.
              </span>
            </div>
            <Progress value={progress} className="h-3" aria-label="Walkthrough progress" />
          </div>
        </section>

        {current && (
          <section className="container py-8 md:py-12 max-w-4xl">
            <article className="space-y-6">
              {/* Step header */}
              <header className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="text-sm bg-orange-600 hover:bg-orange-600 text-white">
                    Step {stepIndex + 1} / {totalSteps}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {phone === 'iphone' ? 'iPhone' : 'Android'}
                  </Badge>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 shrink-0">
                    <StepIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
                      {current.oneLiner}
                    </p>
                  </div>
                </div>
              </header>

              {/* Screenshot placeholder */}
              <div
                role="img"
                aria-label={`Screenshot placeholder: ${current.screenshot}`}
                className="relative aspect-video rounded-xl border-2 border-dashed border-muted-foreground/30 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-950/30 dark:to-rose-950/20 flex flex-col items-center justify-center text-center gap-3 p-6"
              >
                <div className="p-3 rounded-full bg-background border">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Screenshot: {phone === 'iphone' ? 'iPhone' : 'Android'}
                </div>
                <div className="text-base md:text-lg font-medium max-w-md">{current.screenshot}</div>
              </div>

              {/* Actions list */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">What to do</h2>
                  <ol className="space-y-3">
                    {current.actions.map((action, i) => (
                      <li key={i} className="flex gap-3 text-base md:text-lg leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-200 font-bold flex items-center justify-center text-base"
                        >
                          {i + 1}
                        </span>
                        <span className="pt-1">{action}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Stumbling block */}
              <Alert className="border-amber-400/60 bg-amber-50 dark:bg-amber-950/30">
                <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <AlertTitle className="text-base md:text-lg">Common stumbling block</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  {current.stumble}
                </AlertDescription>
              </Alert>

              {/* Why this matters (optional) */}
              {current.why && (
                <Alert className="border-primary/40 bg-primary/5">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <AlertTitle className="text-base md:text-lg">Why this matters</AlertTitle>
                  <AlertDescription className="text-base leading-relaxed">
                    {current.why}
                  </AlertDescription>
                </Alert>
              )}

              {/* Quick cheat-sheet line */}
              <Card className="bg-muted/40">
                <CardContent className="p-5 flex items-start gap-3">
                  <Bookmark className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-base mb-1">One-line reminder</h3>
                    <p className="text-base md:text-lg font-mono leading-relaxed">
                      {current.cheatSheet}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Nav */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                  className="gap-2 min-h-14 text-base"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>

                {isLastStep ? (
                  <Button size="lg" onClick={goNext} className="gap-2 min-h-14 text-base bg-green-600 hover:bg-green-700">
                    I&apos;m finished!
                    <CheckCircle2 className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button size="lg" onClick={goNext} className="gap-2 min-h-14 text-base">
                    {completed.has(stepIndex) ? 'Next step' : 'Got it — next step'}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                )}
              </div>

              {/* "Done!" final-step follow-ups */}
              {isLastStep && completed.has(stepIndex) && (
                <Card className="border-green-600/40 bg-green-50/40 dark:bg-green-950/20">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-7 h-7 text-green-700 dark:text-green-400" />
                      You did it!
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      You finished all {totalSteps} steps. Here are a few next tools that build on what you just
                      learned.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed">
                      <li>
                        <Link to="/tools/voice-assistant-setup" className="text-primary underline font-medium">
                          Voice Assistant Setup
                        </Link>{' '}
                        — teach Siri or Google to help hands-free.
                      </li>
                      <li>
                        <Link to="/tools/medication-reminder-setup" className="text-primary underline font-medium">
                          Medication Reminder Setup
                        </Link>{' '}
                        — never miss a dose again.
                      </li>
                      <li>
                        <Link to="/tools/scam-simulator" className="text-primary underline font-medium">
                          Scam Simulator
                        </Link>{' '}
                        — practice spotting fake texts and calls.
                      </li>
                      <li>
                        <Link to="/guides?category=phone-guides" className="text-primary underline font-medium">
                          All phone guides
                        </Link>{' '}
                        — deeper how-tos once you&apos;re ready.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Step-jump grid */}
              <div className="pt-4">
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">All steps</h2>
                <div className="flex flex-wrap gap-2">
                  {steps.map((s, i) => {
                    const done = completed.has(i);
                    const active = i === stepIndex;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => jumpTo(i)}
                        aria-current={active ? 'step' : undefined}
                        className={[
                          'px-3 py-2 rounded-lg text-sm font-medium transition-colors border min-h-11',
                          active
                            ? 'bg-orange-600 text-white border-orange-600'
                            : done
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-orange-400',
                        ].join(' ')}
                      >
                        {done && !active ? (
                          <CheckCircle2 className="w-4 h-4 inline mr-1.5 align-[-2px]" />
                        ) : null}
                        {i + 1}. {s.title.split(' ').slice(0, 4).join(' ')}
                        {s.title.split(' ').length > 4 ? '…' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reassurance footer */}
              <Card className="bg-muted/30">
                <CardContent className="p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-base leading-relaxed">
                    <strong>Can&apos;t break your phone here.</strong> Every step in this walkthrough is safe.
                    If something looks different on your screen, take a photo and{' '}
                    <Link to="/get-help" className="text-primary underline font-medium">
                      book a TekSure technician
                    </Link>{' '}
                    for a short video session.
                  </div>
                </CardContent>
              </Card>
            </article>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
