import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Eye,
  Smartphone,
  Tablet,
  Monitor,
  Laptop,
  Tv,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Printer,
  Lightbulb,
  Sun,
  HeartHandshake,
  Users,
  Glasses,
  Volume2,
  Phone,
  Building2,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Search,
  Contrast,
  Settings,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Low Vision Tech Hub
 * ------------------------------------------------------------
 * A senior-friendly, one-stop guide to making phones, tablets,
 * computers, TVs, and e-readers easier to see. Every built-in
 * setting, every helpful app, every free service — in plain
 * English, with extra-large text and very high contrast.
 * ────────────────────────────────────────────────────────────── */

type DeviceId = 'iphone' | 'android' | 'windows' | 'mac' | 'tv' | 'ereader';

interface DeviceCard {
  id: DeviceId;
  name: string;
  tagline: string;
  icon: LucideIcon;
}

const DEVICES: DeviceCard[] = [
  {
    id: 'iphone',
    name: 'iPhone / iPad',
    tagline: 'Apple has the most built-in low-vision tools of any phone.',
    icon: Smartphone,
  },
  {
    id: 'android',
    name: 'Android phone / tablet',
    tagline: 'Samsung, Google, Motorola, and more — all have strong vision helpers.',
    icon: Tablet,
  },
  {
    id: 'windows',
    name: 'Windows PC',
    tagline: 'Built-in Magnifier, large cursor, and Narrator on every Windows 10 and 11 computer.',
    icon: Monitor,
  },
  {
    id: 'mac',
    name: 'Mac (iMac, MacBook)',
    tagline: 'Zoom, VoiceOver, and the best screen reader in the business.',
    icon: Laptop,
  },
  {
    id: 'tv',
    name: 'Smart TV',
    tagline: 'Big captions, audio description, and voice guides on Samsung, LG, Sony, Roku, and Fire TV.',
    icon: Tv,
  },
  {
    id: 'ereader',
    name: 'E-reader (Kindle, Kobo)',
    tagline: 'Adjustable font, bolder letters, and built-in read-aloud.',
    icon: BookOpen,
  },
];

/* ── Walkthrough steps per device ─────────────────────────────── */

interface Walkthrough {
  title: string;
  path: string;
  why: string;
  steps: string[];
}

const IPHONE_WALKTHROUGHS: Walkthrough[] = [
  {
    title: 'Make everything bigger — Display Zoom',
    path: 'Settings → Display & Brightness → Display Zoom → Larger Text',
    why: 'Bumps every icon, button, and piece of text on the whole phone up a size — no app by app changes needed.',
    steps: [
      'Open the Settings app (gray gear icon).',
      'Tap Display & Brightness.',
      'Tap Display Zoom.',
      'Choose Larger Text.',
      'Tap Done, then Use Zoomed. Your phone restarts and everything looks bigger.',
    ],
  },
  {
    title: 'Bigger text + bolder letters everywhere',
    path: 'Settings → Accessibility → Display & Text Size',
    why: 'Works inside apps like Messages, Mail, and News — anywhere that supports Dynamic Type.',
    steps: [
      'Open Settings.',
      'Tap Accessibility.',
      'Tap Display & Text Size.',
      'Turn on Bold Text.',
      'Tap Larger Text, then drag the slider to the right.',
      'Turn on Larger Accessibility Sizes for even bigger text.',
    ],
  },
  {
    title: 'Sharper edges — Increase Contrast & Reduce Transparency',
    path: 'Settings → Accessibility → Display & Text Size',
    why: 'Removes the faded see-through effects in iOS and adds darker outlines to buttons so they pop.',
    steps: [
      'Open Settings → Accessibility → Display & Text Size.',
      'Turn on Increase Contrast.',
      'Turn on Reduce Transparency.',
      'Turn on Darker Colors if you want bolder blues and greens.',
      'Turn on Button Shapes — this adds underlines or boxes around tappable text.',
    ],
  },
  {
    title: 'Color filters for color blindness or eye strain',
    path: 'Settings → Accessibility → Display & Text Size → Color Filters',
    why: 'Helps with red-green, blue-yellow, or grayscale preferences. Also includes a color tint slider for comfort.',
    steps: [
      'Open Settings → Accessibility → Display & Text Size.',
      'Tap Color Filters.',
      'Turn it on.',
      'Pick Grayscale, Red/Green, Green/Red, Blue/Yellow, or Color Tint.',
      'Use the sliders to fine-tune intensity.',
    ],
  },
  {
    title: 'Invert Colors — white-on-black for reading',
    path: 'Settings → Accessibility → Display & Text Size',
    why: 'Smart Invert flips colors but keeps photos and videos normal. Classic Invert flips everything.',
    steps: [
      'Open Settings → Accessibility → Display & Text Size.',
      'Tap Smart Invert for a reader-friendly dark mode.',
      'Or tap Classic Invert to flip every color on the screen.',
    ],
  },
  {
    title: 'Zoom — magnify anything with three fingers',
    path: 'Settings → Accessibility → Zoom',
    why: 'A built-in screen magnifier. Great for small text in apps or tiny buttons.',
    steps: [
      'Open Settings → Accessibility → Zoom.',
      'Turn on Zoom.',
      'Triple-tap the screen with THREE fingers to zoom in.',
      'Drag with three fingers to move around.',
      'Triple-tap with three fingers again to turn zoom off.',
    ],
  },
  {
    title: 'VoiceOver — the screen reader for very low vision',
    path: 'Settings → Accessibility → VoiceOver',
    why: 'Reads the screen out loud. Powerful, but has its own gestures you must learn.',
    steps: [
      'Open Settings → Accessibility → VoiceOver.',
      'Turn it on. The phone starts reading what you tap.',
      'To tap something, touch it once (hear the name), then DOUBLE-tap to activate.',
      'Swipe right with one finger to move to the next item.',
      'To turn VoiceOver OFF if you did this by accident: triple-tap the side button (or home button on older iPhones).',
    ],
  },
  {
    title: 'Magnifier — turn your iPhone into a handheld magnifying glass',
    path: 'Control Center → Magnifier',
    why: 'Uses the camera to magnify small print, pill bottles, menus, and price tags.',
    steps: [
      'Open Settings → Control Center.',
      'Scroll to Magnifier and tap the green + to add it.',
      'Swipe down from the top-right corner to open Control Center.',
      'Tap the Magnifier icon.',
      'Hold the phone over what you want to read. Drag the slider to zoom in. Tap the flashlight for more light.',
    ],
  },
  {
    title: 'Speak Screen — read any page out loud',
    path: 'Settings → Accessibility → Spoken Content',
    why: 'Lets you swipe down with two fingers from the top to hear any page read aloud. Works in web pages, Mail, Notes, and most apps.',
    steps: [
      'Open Settings → Accessibility → Spoken Content.',
      'Turn on Speak Screen.',
      'Optional: turn on Highlight Content so the words light up as they\'re read.',
      'On any page, swipe down from the TOP of the screen with TWO fingers.',
      'A little control panel appears — tap play, pause, or change speed.',
    ],
  },
  {
    title: 'Point and Speak — read anything your camera sees',
    path: 'Magnifier → Detection Mode → Point and Speak',
    why: 'Point at a microwave button, thermostat, or mailbox number and the phone reads it out loud. Built-in, no extra app.',
    steps: [
      'Open Magnifier from Control Center.',
      'Tap the small square Detection icon (bottom right).',
      'Tap Point and Speak.',
      'Point the camera at the buttons. Slide your finger near a button in the preview — iPhone reads the text.',
    ],
  },
];

const ANDROID_WALKTHROUGHS: Walkthrough[] = [
  {
    title: 'Display size — make icons and menus bigger',
    path: 'Settings → Display → Display size',
    why: 'Changes how big everything on the phone appears, without changing font size.',
    steps: [
      'Open the Settings app.',
      'Tap Display (or Display & Brightness on Samsung).',
      'Tap Display size.',
      'Drag the slider to the right.',
      'Tap Done. Some apps may need a quick restart to use the new size.',
    ],
  },
  {
    title: 'Font size and bold text',
    path: 'Settings → Display → Font size',
    why: 'Makes the letters themselves bigger and thicker. Works inside most apps.',
    steps: [
      'Open Settings → Display → Font size.',
      'Drag the slider to the right to increase size.',
      'On Samsung: also turn on Bold font for thicker letters.',
      'On Google Pixel: Settings → Accessibility → Text and display → Bold text.',
    ],
  },
  {
    title: 'High contrast text',
    path: 'Settings → Accessibility → Text and display',
    why: 'Adds a dark outline to white text and a white outline to dark text so letters stand out.',
    steps: [
      'Open Settings → Accessibility.',
      'Tap Text and display (or Visibility enhancements on Samsung).',
      'Turn on High contrast text.',
    ],
  },
  {
    title: 'Magnification gesture — triple-tap to zoom',
    path: 'Settings → Accessibility → Magnification',
    why: 'Triple-tap the screen anywhere to zoom in. Drag with two fingers to pan.',
    steps: [
      'Open Settings → Accessibility.',
      'Tap Magnification.',
      'Turn on Magnification shortcut.',
      'Choose Triple-tap screen.',
      'Now triple-tap anywhere to zoom in. Triple-tap again to zoom out.',
    ],
  },
  {
    title: 'Color correction for color blindness',
    path: 'Settings → Accessibility → Text and display → Color correction',
    why: 'Shifts colors to be easier to tell apart — works well for red-green or blue-yellow color blindness.',
    steps: [
      'Open Settings → Accessibility → Text and display.',
      'Tap Color correction.',
      'Turn it on and pick Deuteranomaly, Protanomaly, or Tritanomaly.',
      'Not sure which? Try each and pick the one that feels easiest.',
    ],
  },
  {
    title: 'TalkBack — the Android screen reader',
    path: 'Settings → Accessibility → TalkBack',
    why: 'Reads the screen out loud for people with very low vision. Like VoiceOver on iPhone.',
    steps: [
      'Open Settings → Accessibility → TalkBack.',
      'Turn it on.',
      'Touch something to hear it — then DOUBLE-tap to activate.',
      'Swipe right with one finger to move through items.',
      'To turn TalkBack OFF if you did this by accident: hold both volume keys together for 3 seconds.',
    ],
  },
  {
    title: 'Google Lens — digital magnifying glass',
    path: 'Google app → Lens icon → Camera',
    why: 'Uses your camera to enlarge and read text, translate menus, or identify objects.',
    steps: [
      'Open the Google app (colorful G icon).',
      'Tap the camera icon in the search bar (Lens).',
      'Point at the text you want to read.',
      'Tap the text — it enlarges on screen. Tap the speaker to hear it read aloud.',
    ],
  },
  {
    title: 'Camera Live View — read labels and signs',
    path: 'Camera app',
    why: 'Hold your phone over a pill bottle, thermostat, or price tag and zoom in to read.',
    steps: [
      'Open the Camera app.',
      'Pinch outward on the screen to zoom in (or drag the zoom slider).',
      'Hold steady over the small text.',
      'Tap the screen to focus. Take a picture if you want to save it.',
    ],
  },
  {
    title: 'Live Transcribe — for hearing plus vision (free from Google)',
    path: 'Install Live Transcribe from Play Store',
    why: 'Shows spoken words as large captions on your phone. Great for appointments, family gatherings, and the TV.',
    steps: [
      'Open the Play Store.',
      'Search for Live Transcribe and tap Install.',
      'Open it — it starts captioning anyone near you instantly.',
      'Tap the gear icon to make the text bigger or change the font.',
    ],
  },
];

const WINDOWS_WALKTHROUGHS: Walkthrough[] = [
  {
    title: 'Make everything bigger — Text size slider',
    path: 'Settings → Accessibility → Text size',
    why: 'Makes text in menus, apps, and web pages larger system-wide.',
    steps: [
      'Click Start → Settings (the gear icon).',
      'Click Accessibility.',
      'Click Text size.',
      'Drag the Text size slider to the right until the preview is comfortable.',
      'Click Apply.',
    ],
  },
  {
    title: 'Magnifier — zoom in with one keyboard shortcut',
    path: 'Windows key + Plus (+)',
    why: 'Instantly zooms the whole screen. Works like a digital magnifying glass.',
    steps: [
      'Press the Windows key and the Plus key (+) at the same time.',
      'Press Windows + Plus again to zoom in more.',
      'Press Windows + Minus (−) to zoom out.',
      'Press Windows + Escape to close Magnifier.',
      'In Magnifier, you can choose Full screen, Lens, or Docked mode.',
    ],
  },
  {
    title: 'Contrast themes — dark background, yellow or white text',
    path: 'Settings → Accessibility → Contrast themes',
    why: 'High-contrast colors help with cataracts, glare sensitivity, and most eye conditions. This is different from Dark mode — it is much higher contrast.',
    steps: [
      'Click Start → Settings → Accessibility.',
      'Click Contrast themes.',
      'Pick Aquatic, Desert, Dusk, or Night sky (Night sky is black background with white text — most popular for low vision).',
      'Click Apply.',
    ],
  },
  {
    title: 'Bigger mouse cursor',
    path: 'Settings → Accessibility → Mouse pointer and touch',
    why: 'The standard mouse arrow is tiny. Crank it up so you can see it move.',
    steps: [
      'Settings → Accessibility → Mouse pointer and touch.',
      'Drag the Size slider to the right.',
      'Pick a Mouse pointer style — white, black, inverted, or custom colored (bright yellow or pink are easiest to spot).',
    ],
  },
  {
    title: 'Text cursor thickness and color',
    path: 'Settings → Accessibility → Text cursor',
    why: 'Makes the blinking cursor in text boxes fatter and brighter so you can see where you are typing.',
    steps: [
      'Settings → Accessibility → Text cursor.',
      'Turn on Text cursor indicator.',
      'Pick a bright color (orange or red work well).',
      'Drag the Size slider to make it thicker.',
    ],
  },
  {
    title: 'Narrator — the Windows screen reader',
    path: 'Windows key + Control + Enter',
    why: 'Reads the screen out loud. Lighter-weight than JAWS or NVDA, but built right into Windows.',
    steps: [
      'Press Windows + Control + Enter to start Narrator.',
      'The first time, a welcome screen appears — click Skip or take the tutorial.',
      'Use Tab and arrow keys to move around.',
      'Press Windows + Control + Enter again to turn Narrator off.',
    ],
  },
  {
    title: 'ClearType Text Tuner — sharper letters',
    path: 'Start → search "ClearType" → Adjust ClearType text',
    why: 'Walks you through 5 short comparisons to sharpen text just for your eyes and monitor.',
    steps: [
      'Click Start and type ClearType.',
      'Click Adjust ClearType text.',
      'Make sure Turn on ClearType is checked.',
      'Click through the 5 comparisons, picking the clearest one each time.',
      'Click Finish.',
    ],
  },
];

const MAC_WALKTHROUGHS: Walkthrough[] = [
  {
    title: 'Make everything bigger — Display scaling',
    path: 'System Settings → Displays → Larger Text',
    why: 'One click scales the whole screen up — icons, menus, windows, everything.',
    steps: [
      'Click the Apple menu → System Settings.',
      'Click Displays.',
      'Under Resolution, click Larger Text.',
      'Click Done.',
    ],
  },
  {
    title: 'Zoom — keyboard and scroll-wheel magnifier',
    path: 'System Settings → Accessibility → Zoom',
    why: 'The cleanest screen magnifier on any computer. Two great options: full screen or a small floating lens.',
    steps: [
      'Open System Settings → Accessibility → Zoom.',
      'Turn on Use keyboard shortcuts to zoom.',
      'Press Option + Command + 8 to turn Zoom on or off.',
      'Press Option + Command + = to zoom in, Option + Command + − to zoom out.',
      'Or turn on Use scroll gesture with modifier keys, then hold Control and scroll your mouse/trackpad to zoom.',
    ],
  },
  {
    title: 'Increase Contrast and Reduce Transparency',
    path: 'System Settings → Accessibility → Display',
    why: 'Sharpens edges on windows and buttons, removes see-through effects that can be confusing.',
    steps: [
      'System Settings → Accessibility → Display.',
      'Turn on Increase contrast.',
      'Turn on Reduce transparency.',
      'Optional: turn on Differentiate without color (adds shapes and text labels for colorblindness).',
    ],
  },
  {
    title: 'Bigger mouse cursor',
    path: 'System Settings → Accessibility → Display → Pointer',
    why: 'Apple\'s cursor is tiny by default. Bump it up to avoid losing it on big screens.',
    steps: [
      'System Settings → Accessibility → Display.',
      'Scroll down to Pointer.',
      'Drag the Pointer size slider to the right.',
      'Pick a Pointer outline color and Pointer fill color — try black outline + yellow fill for maximum visibility.',
    ],
  },
  {
    title: 'Hover Text — big pop-up of what\'s under the mouse',
    path: 'System Settings → Accessibility → Hover Text',
    why: 'Hold Command and point at any word — a huge pop-up shows that word in extra-large text.',
    steps: [
      'System Settings → Accessibility → Hover Text.',
      'Turn it on.',
      'Pick the font size, text color, and background color.',
      'Now, hold Command and point at any text — a magnified pop-up appears.',
    ],
  },
  {
    title: 'VoiceOver — the best screen reader in the business',
    path: 'Command + F5',
    why: 'Reads everything on screen. Widely considered the best built-in screen reader of any operating system.',
    steps: [
      'Press Command + F5 (or Command + Touch ID on MacBook Pro).',
      'The VoiceOver tutorial starts — it walks you through the gestures.',
      'Use the Control + Option keys plus arrow keys to move around.',
      'Press Command + F5 again to turn VoiceOver off.',
    ],
  },
  {
    title: 'Speak Selection — hear any text read aloud',
    path: 'System Settings → Accessibility → Spoken Content',
    why: 'Highlight any text and press a keyboard shortcut to hear it read aloud.',
    steps: [
      'System Settings → Accessibility → Spoken Content.',
      'Turn on Speak selection.',
      'Click the i next to it — set the shortcut (Option + Esc is the default).',
      'Highlight any text on a web page, in Mail, or in Notes, then press Option + Escape.',
    ],
  },
];

const TV_WALKTHROUGHS: Walkthrough[] = [
  {
    title: 'Audio description — hear what\'s happening on screen',
    path: 'Netflix / Hulu / Disney+ / Prime Video audio settings',
    why: 'A narrator describes the action between dialogue — who\'s on screen, what they\'re doing. Available on most major streaming services.',
    steps: [
      'Start any show. Pause it.',
      'Look for the speech bubble or audio icon (usually bottom of screen).',
      'Pick the audio track that says English – Audio Description.',
      'Not every title has it — but most big Netflix originals, Disney+ titles, and Apple TV+ shows do.',
    ],
  },
  {
    title: 'Enlarge captions',
    path: 'TV or streaming app caption settings',
    why: 'Default captions are often tiny. Every major streaming service lets you make them much bigger.',
    steps: [
      'On Netflix: during playback, open subtitles → Subtitle Appearance → pick Large or Extra Large.',
      'On Disney+: Account → Subtitle and Audio → Style.',
      'On Prime Video: Settings → Subtitles → Text size.',
      'On Roku: Settings → Accessibility → Captions → Text style.',
      'On Samsung/LG TV: Settings → Accessibility → Subtitles → Caption size.',
    ],
  },
  {
    title: 'Menu font size — make the TV\'s own menus bigger',
    path: 'Varies by brand',
    why: 'Samsung, LG, Sony, and Vizio each have ways to enlarge their on-screen text.',
    steps: [
      'Samsung: Settings → General → Accessibility → High Contrast + Enlarge.',
      'LG: Settings → Accessibility → High Contrast + Larger Text.',
      'Sony: Settings → Accessibility → Font size.',
      'Vizio: Menu → System → Accessibility.',
    ],
  },
  {
    title: 'Voice Guide — the TV reads menus out loud',
    path: 'Accessibility menu',
    why: 'Like VoiceOver but for your TV. The TV narrates what you\'re selecting.',
    steps: [
      'Samsung: Settings → General → Accessibility → Voice Guide.',
      'LG: Settings → Accessibility → Audio Guidance.',
      'Sony: Settings → Accessibility → Screen reader.',
      'Apple TV: Settings → Accessibility → VoiceOver.',
      'Roku: Settings → Accessibility → Screen Reader.',
    ],
  },
  {
    title: 'High contrast mode for TV menus',
    path: 'Accessibility menu',
    why: 'Makes TV menus black-on-white or white-on-black so they are easier to see from the couch.',
    steps: [
      'Samsung: Settings → General → Accessibility → High Contrast.',
      'LG: Settings → Accessibility → High Contrast.',
      'Roku: Settings → Accessibility → High Contrast.',
    ],
  },
];

const EREADER_WALKTHROUGHS: Walkthrough[] = [
  {
    title: 'Kindle — bigger, bolder, more readable',
    path: 'Aa button on any book',
    why: 'The single most powerful setting on a Kindle. Touch Aa for every reading control.',
    steps: [
      'Open any book on your Kindle.',
      'Tap the top of the screen. Tap the Aa icon.',
      'Font → pick OpenDyslexic or Amazon Ember Bold for thicker letters.',
      'Size → drag the slider until letters feel comfortable (size 6-8 is common for seniors).',
      'Bold → drag it up 1 or 2 notches.',
      'Spacing → wider line spacing helps stop skipping lines.',
      'Margins → set wider margins so fewer words per line.',
    ],
  },
  {
    title: 'Kobo — change font, weight, and spacing',
    path: 'Tap middle of book → Aa or Settings',
    why: 'Kobo lets you adjust everything Kindle does, plus sharpness and boldness sliders.',
    steps: [
      'Open any book.',
      'Tap near the middle of the page.',
      'Tap the Aa icon.',
      'Pick a font like Malabar Bold or Georgia.',
      'Drag Font Size to the right.',
      'Drag Line Spacing to widen the lines.',
      'Drag Weight to bold the letters.',
    ],
  },
  {
    title: 'Read aloud on Kindle',
    path: 'Bluetooth headphones + VoiceView',
    why: 'Kindles can read books out loud if you pair Bluetooth headphones or a speaker.',
    steps: [
      'Kindle Settings → Accessibility → VoiceView Screen Reader.',
      'Turn it on — you may need to hold the power button + tap screen to confirm.',
      'Pair Bluetooth headphones or a speaker.',
      'Open any book. The Kindle reads aloud as you turn pages.',
    ],
  },
  {
    title: 'Kobo read aloud',
    path: 'TTS via Bluetooth',
    why: 'Most Kobo e-readers also support text-to-speech through a Bluetooth speaker or headphones.',
    steps: [
      'Settings → Accessibility → TTS.',
      'Pair your Bluetooth speaker or headphones.',
      'Open a book. Tap the read-aloud icon in the toolbar.',
    ],
  },
];

const WALKTHROUGHS: Record<DeviceId, Walkthrough[]> = {
  iphone: IPHONE_WALKTHROUGHS,
  android: ANDROID_WALKTHROUGHS,
  windows: WINDOWS_WALKTHROUGHS,
  mac: MAC_WALKTHROUGHS,
  tv: TV_WALKTHROUGHS,
  ereader: EREADER_WALKTHROUGHS,
};

/* ── Standalone low-vision tech ─────────────────────────────── */

interface StandaloneTool {
  name: string;
  what: string;
  who: string;
  price: string;
  link?: { label: string; url: string };
}

const MAGNIFY_APPS: StandaloneTool[] = [
  {
    name: 'Seeing AI (Apple)',
    what: 'Free Microsoft app that reads text, describes scenes, identifies money, and reads product barcodes — all with your phone\'s camera.',
    who: 'iPhone and iPad users with any level of vision loss.',
    price: 'Free',
    link: { label: 'App Store', url: 'https://apps.apple.com/us/app/seeing-ai/id999062298' },
  },
  {
    name: 'Supersense',
    what: 'AI-powered reader that speaks out text from anything your camera sees — labels, signs, mail.',
    who: 'Android or iPhone users who want a one-tap reader.',
    price: 'Free, with paid Pro tier',
    link: { label: 'Supersense site', url: 'https://supersense.app/' },
  },
  {
    name: 'Envision AI',
    what: 'Reads text in 60+ languages, identifies objects and faces, and can describe scenes in front of you.',
    who: 'People who want the most feature-rich reader.',
    price: 'Free for basic; paid upgrade for extras',
    link: { label: 'Envision site', url: 'https://www.letsenvision.com/' },
  },
  {
    name: 'Google Lookout',
    what: 'Google\'s free Android app that reads text and describes your surroundings out loud.',
    who: 'Android users who want a free alternative to Seeing AI.',
    price: 'Free',
    link: { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal' },
  },
];

const SCREEN_READERS: StandaloneTool[] = [
  {
    name: 'JAWS (Windows)',
    what: 'The most powerful Windows screen reader. Full-featured, but expensive.',
    who: 'Power users who use computers all day and need best-in-class support.',
    price: '$95/year or $1,110 perpetual',
    link: { label: 'JAWS site', url: 'https://www.freedomscientific.com/products/software/jaws/' },
  },
  {
    name: 'NVDA (Windows)',
    what: 'Free, open-source, and nearly as good as JAWS. Works right out of the box.',
    who: 'Anyone on Windows who wants a great screen reader for $0.',
    price: 'Free',
    link: { label: 'NVDA download', url: 'https://www.nvaccess.org/download/' },
  },
  {
    name: 'VoiceOver (Mac and iOS)',
    what: 'Built into every Mac, iPhone, and iPad. Turn it on with Command + F5 or Settings → Accessibility.',
    who: 'Apple users — no install, no cost.',
    price: 'Free (built in)',
  },
  {
    name: 'TalkBack (Android)',
    what: 'Google\'s screen reader built into every Android phone.',
    who: 'Android users.',
    price: 'Free (built in)',
  },
];

const HARDWARE: StandaloneTool[] = [
  {
    name: 'Explore 5',
    what: 'Handheld electronic magnifier with a bright screen. Lets you snap a photo and zoom in.',
    who: 'People who read a lot of paper — mail, recipes, medication bottles.',
    price: 'Around $595',
    link: { label: 'HumanWare site', url: 'https://store.humanware.com/hus/explore-5.html' },
  },
  {
    name: 'Optelec Traveller',
    what: 'Portable electronic magnifier with a tilting screen. Great for restaurants and events.',
    who: 'People on the go who still want more magnification than a phone.',
    price: 'Around $995',
    link: { label: 'Optelec site', url: 'https://us.optelec.com/' },
  },
  {
    name: 'ClearView One',
    what: 'Desktop video magnifier (a CCTV). Sit a book or paper under the camera and read it huge on a built-in screen.',
    who: 'Anyone who reads mail, books, or photos daily at home.',
    price: '$2,500 – $3,500',
  },
  {
    name: 'Envision Glasses',
    what: 'Smart glasses that read text aloud, describe scenes, and recognize faces as you look around.',
    who: 'Hands-free users who want their assistant to come with them.',
    price: 'About $3,500',
    link: { label: 'Envision site', url: 'https://www.letsenvision.com/glasses' },
  },
  {
    name: 'OrCam Read',
    what: 'Handheld camera you point at printed text — it reads out loud instantly.',
    who: 'People who want a simple, single-purpose reader with no phone.',
    price: 'About $1,990',
    link: { label: 'OrCam site', url: 'https://www.orcam.com/en-us/orcam-read' },
  },
];

const HELP_SERVICES: StandaloneTool[] = [
  {
    name: 'Be My Eyes (free)',
    what: 'Free app that connects you to a sighted volunteer via video call. They help you read, identify things, or navigate. Always free.',
    who: 'Everyone — this is one of the most helpful free apps ever made.',
    price: 'Free forever',
    link: { label: 'Be My Eyes site', url: 'https://www.bemyeyes.com/' },
  },
  {
    name: 'Aira',
    what: 'Professional visual interpreter — trained agents help over video call. Higher quality than volunteer, with a subscription.',
    who: 'People who need reliable professional help on a schedule.',
    price: '5 free minutes in most airports, stores, and pharmacies; subscriptions from $29/month',
    link: { label: 'Aira site', url: 'https://aira.io/' },
  },
];

/* ── Lighting & environment tips ───────────────────────────── */

const LIGHTING_TIPS = [
  {
    title: 'Warm white over cool blue',
    body: 'A 2700-3000K warm-white bulb is easier on aging eyes than cool daylight (5000K+). Most older adults find warm light less glaring and more comfortable for reading.',
  },
  {
    title: '500 lux for reading',
    body: 'Older eyes need about 3 times more light than younger eyes to read comfortably. Aim for 500 lux at the page — a dedicated reading lamp makes a big difference.',
  },
  {
    title: 'Kill the glare',
    body: 'Position screens and reading lamps so light does not bounce directly into your eyes. Matte screen protectors, curtains, and anti-glare lamp shades all help.',
  },
  {
    title: 'Light the task, not the room',
    body: 'Instead of one bright ceiling light, use a small lamp near where you\'re reading or working. This reduces eye strain and keeps pupils happy.',
  },
  {
    title: 'Screen brightness should match the room',
    body: 'A dim screen in a bright room is hard on the eyes. A bright screen in a dark room is also hard. Match them — or use Auto-Brightness.',
  },
];

/* ── Organization helpers ───────────────────────────────────── */

const ORGANIZATION_TIPS = [
  {
    title: 'iOS Control Center → Magnifier shortcut',
    body: 'Add Magnifier to Control Center so you can swipe down and tap to magnify anything in 1 second.',
  },
  {
    title: 'Color-coded folders + tactile stickers',
    body: 'Put a bright sticker (bumpy dot, foam shape) on the case of each device — red for phone, green for tablet, blue for remote. Feel, do not look.',
  },
  {
    title: 'Night Shift / Night Light on a schedule',
    body: 'iOS: Settings → Display & Brightness → Night Shift. Windows: Settings → System → Display → Night light. Schedule it from sunset to sunrise for warmer tones after dark.',
  },
  {
    title: 'Voice-first home',
    body: 'Put an Alexa, Google Nest, or Siri HomePod in your most-used room. Ask it to set timers, read the news, and call family — zero screen time required.',
  },
];

/* ── Eye condition quick fits ───────────────────────────────── */

interface ConditionFit {
  condition: string;
  plain: string;
  suggestions: string[];
  icon: LucideIcon;
}

const CONDITIONS: ConditionFit[] = [
  {
    condition: 'Macular degeneration',
    plain: 'Central vision fades. You can often see out the sides but not straight ahead.',
    icon: Eye,
    suggestions: [
      'Zoom + look slightly off-center (eccentric viewing).',
      'Turn ON VoiceOver (iPhone/Mac) or TalkBack (Android) and learn the basics.',
      'Move app icons to the edges of the screen where your side vision is strongest.',
      'Use Speak Screen instead of reading.',
      'Consider Envision Glasses or OrCam Read for hands-free help.',
    ],
  },
  {
    condition: 'Glaucoma',
    plain: 'Peripheral (side) vision shrinks. Like looking through a tunnel or straw.',
    icon: Eye,
    suggestions: [
      'Smaller text held closer is often OK — you do not need giant text.',
      'Maximum contrast — black on white or white on black is critical.',
      'Remove visual clutter — hide or delete apps you do not use.',
      'Do not zoom too far in. You will lose your place in the tunnel.',
      'Night Shift / warm tones reduce glare that can narrow your usable view.',
    ],
  },
  {
    condition: 'Cataracts',
    plain: 'Cloudy or blurry vision, plus extra sensitivity to glare. Like looking through a foggy window.',
    icon: Eye,
    suggestions: [
      'Anti-glare screens (matte protectors) and adjust your sitting angle.',
      'Warm white light everywhere, not cool blue.',
      'Increased contrast settings on every device.',
      'Bigger, bolder fonts.',
      'Book a cataract evaluation — cataract surgery is one of the most effective fixes in medicine.',
    ],
  },
  {
    condition: 'Diabetic retinopathy',
    plain: 'Blurry or dark patches that change from day to day. Often in both central and peripheral vision.',
    icon: Eye,
    suggestions: [
      'Screen readers (VoiceOver, TalkBack) so you do not depend on seeing text.',
      'Voice-first home (Alexa, Google, Siri) for reminders and questions.',
      'Regular diabetic eye exams — catching changes early is critical.',
      'Always-on contrast + bigger text as a baseline.',
      'Good lighting — changes in vision mean your eyes need every advantage.',
    ],
  },
];

/* ── Free services ──────────────────────────────────────────── */

interface ResourceLink {
  name: string;
  what: string;
  url: string;
}

const FREE_SERVICES: ResourceLink[] = [
  {
    name: 'National Library Service for the Blind',
    what: 'Free audiobooks and Braille books mailed to your door. Run by the Library of Congress.',
    url: 'https://www.loc.gov/nls/',
  },
  {
    name: 'Bookshare',
    what: 'Over 1 million books in large print, audio, and Braille — free for qualified users.',
    url: 'https://www.bookshare.org/',
  },
  {
    name: 'Learning Ally',
    what: 'Audiobooks for people with print disabilities. Free membership for qualifying students; low-cost for adults.',
    url: 'https://learningally.org/',
  },
  {
    name: 'Hadley',
    what: 'Free online classes for people with vision loss and their families. Daily living, tech, and emotional support.',
    url: 'https://hadley.edu/',
  },
  {
    name: 'American Printing House (APH)',
    what: 'Large print, Braille materials, and low-cost adaptive tools. Many services free for eligible users.',
    url: 'https://www.aph.org/',
  },
  {
    name: 'Be My Eyes',
    what: 'Free app that connects you to a sighted volunteer via video call for instant help.',
    url: 'https://www.bemyeyes.com/',
  },
  {
    name: 'Aira — free minutes',
    what: 'Professional visual help by video. The first 5 minutes are free in thousands of public places (airports, Target, Walgreens, and more).',
    url: 'https://aira.io/',
  },
];

const INSURANCE_INFO = [
  {
    title: 'Medicare Part B — Low Vision evaluation',
    body: 'If you have a doctor\'s order, Medicare Part B covers a low-vision evaluation from a qualified ophthalmologist or optometrist. You usually pay 20% after your deductible.',
  },
  {
    title: 'Medicare — rehabilitation training',
    body: 'Orientation and mobility training and vision rehabilitation therapy may be covered as outpatient therapy when prescribed by a doctor.',
  },
  {
    title: 'VA benefits for veterans',
    body: 'The VA Blind Rehabilitation Service offers assessments, training, and sometimes hardware at no cost to eligible veterans. Call 1-877-222-8387.',
  },
  {
    title: 'State Commission for the Blind',
    body: 'Every state has a commission or agency for the blind and visually impaired. They can connect you to free training, job support, and sometimes equipment.',
  },
  {
    title: 'CCTV magnifier coverage',
    body: 'Electronic magnifiers are rarely covered by Medicare, but some private insurance, vocational rehab programs, and state agencies do cover them. Ask.',
  },
];

/* ── Caregiver tips ─────────────────────────────────────────── */

const CAREGIVER_TIPS = [
  {
    title: 'Register your face with Be My Eyes',
    body: 'Install Be My Eyes on BOTH phones and add yourself as a helper. Now your family member can ring you directly instead of a stranger.',
  },
  {
    title: 'Shared iCloud Photos album',
    body: 'Create a shared album called "Mail to read" or "Labels". Your loved one snaps a photo; you see it instantly and can read it to them.',
  },
  {
    title: 'FaceTime for on-the-spot help',
    body: 'FaceTime has a special accessibility mode — if your family member holds their phone up, you can see what they\'re seeing and talk them through it.',
  },
  {
    title: 'TeamViewer or Apple Remote Desktop',
    body: 'Free remote-support apps let you see their screen from your own computer. Perfect for fixing email, banking, or Wi-Fi without driving over.',
  },
  {
    title: 'Set up a 3-person group text',
    body: 'You, your loved one, and one other helper. Photos and questions go into the group so whoever is free answers first.',
  },
];

/* ── FAQ ────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: 'Why can\'t I just get bigger reading glasses?',
    a: 'Reading glasses help the eye focus, but screens hold far more tools than paper ever could — zoom, contrast, colors, voice, and built-in magnifiers. Glasses correct your eyes; tech settings correct your device. You get better results when both work together.',
  },
  {
    q: 'Will a tablet be easier than a phone?',
    a: 'Usually yes. A tablet has a screen 2 to 3 times bigger and runs the same operating system as your phone — so every tool here works identically. An iPad or Galaxy Tab is often the single best upgrade for low-vision users.',
  },
  {
    q: 'Is the iPhone or Android better for low vision?',
    a: 'Both are excellent. The iPhone edges ahead because Magnifier, VoiceOver, Speak Screen, and Point and Speak are the most integrated — they work together without setup. Android is a close second, especially on Samsung (Galaxy) phones with "Visibility enhancements".',
  },
  {
    q: 'What if I can\'t see the keyboard?',
    a: 'You have three strong options. One — voice-to-text. Hold the microphone on your keyboard, speak, and it types. Two — ask Siri or Google: "Hey Siri, text my daughter I\'m on my way." Three — a tactile keyboard with raised dots on the F and J keys so you can orient by feel.',
  },
  {
    q: 'Does Medicare cover any of this?',
    a: 'Yes for the medical side: low-vision evaluations, doctor visits, and vision rehabilitation therapy are covered under Part B with a doctor\'s order. No for the hardware side: Medicare does not cover iPads, iPhones, smart speakers, or most electronic magnifiers. The VA and state commissions for the blind sometimes do.',
  },
];

/* ── Printable cheat sheet content ──────────────────────────── */

const CHEAT_SHEET_TITLE = 'Top 5 Low-Vision Quick Fixes';

/* ── Main component ─────────────────────────────────────────── */

export default function LowVisionTechHub() {
  const [selectedId, setSelectedId] = useState<DeviceId | null>(null);
  const [activeCondition, setActiveCondition] = useState<string | null>(null);

  const walks = useMemo<Walkthrough[] | null>(
    () => (selectedId ? WALKTHROUGHS[selectedId] : null),
    [selectedId],
  );

  const selectedDevice = useMemo<DeviceCard | null>(
    () => DEVICES.find((d) => d.id === selectedId) ?? null,
    [selectedId],
  );

  const pickDevice = (id: DeviceId) => {
    setSelectedId(id);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearDevice = () => {
    setSelectedId(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const printCheatSheet = () => {
    if (typeof window === 'undefined') return;
    const w = window.open('', '_blank', 'width=900,height=1100');
    if (!w) return;
    w.document.write(`<!DOCTYPE html><html><head><title>${CHEAT_SHEET_TITLE}</title>
<style>
  @page { margin: 0.5in; }
  body { font-family: Georgia, serif; font-size: 16pt; line-height: 1.5; color: #111; max-width: 7in; margin: 0 auto; padding: 20pt; }
  h1 { font-size: 28pt; border-bottom: 3pt solid #111; padding-bottom: 8pt; margin-bottom: 16pt; }
  h2 { font-size: 20pt; margin-top: 20pt; margin-bottom: 8pt; color: #1e3a8a; }
  ol { margin: 0 0 0 24pt; padding: 0; }
  li { margin-bottom: 8pt; font-size: 16pt; }
  .tagline { font-size: 14pt; color: #555; margin-bottom: 24pt; }
  .footer { margin-top: 36pt; font-size: 12pt; color: #555; border-top: 1pt solid #999; padding-top: 12pt; }
</style></head><body>
<h1>${CHEAT_SHEET_TITLE}</h1>
<p class="tagline">Keep this by your devices. Large print, plain English, built-in settings only.</p>

<h2>iPhone / iPad</h2>
<ol>
  <li><strong>Display Zoom:</strong> Settings &rarr; Display &amp; Brightness &rarr; Display Zoom &rarr; Larger Text.</li>
  <li><strong>Bold + Larger Text:</strong> Settings &rarr; Accessibility &rarr; Display &amp; Text Size.</li>
  <li><strong>Zoom:</strong> Settings &rarr; Accessibility &rarr; Zoom, then triple-tap with 3 fingers.</li>
  <li><strong>Speak Screen:</strong> Settings &rarr; Accessibility &rarr; Spoken Content &rarr; Speak Screen. Swipe down with 2 fingers.</li>
  <li><strong>Magnifier:</strong> Add to Control Center; swipe down from top-right.</li>
</ol>

<h2>Android</h2>
<ol>
  <li><strong>Display size:</strong> Settings &rarr; Display &rarr; Display size.</li>
  <li><strong>Font size:</strong> Settings &rarr; Display &rarr; Font size.</li>
  <li><strong>Magnification:</strong> Settings &rarr; Accessibility &rarr; Magnification &rarr; triple-tap screen.</li>
  <li><strong>High contrast text:</strong> Settings &rarr; Accessibility &rarr; Text and display.</li>
  <li><strong>Camera magnifier:</strong> Open Camera, pinch to zoom over small text.</li>
</ol>

<h2>Windows PC</h2>
<ol>
  <li><strong>Text size:</strong> Settings &rarr; Accessibility &rarr; Text size.</li>
  <li><strong>Magnifier:</strong> Windows + Plus (+). Windows + Minus (-) to zoom out.</li>
  <li><strong>Contrast themes:</strong> Settings &rarr; Accessibility &rarr; Contrast themes &rarr; Night sky.</li>
  <li><strong>Bigger cursor:</strong> Settings &rarr; Accessibility &rarr; Mouse pointer and touch.</li>
  <li><strong>ClearType:</strong> Start &rarr; search "ClearType" &rarr; Adjust ClearType text.</li>
</ol>

<h2>Mac</h2>
<ol>
  <li><strong>Larger Text:</strong> System Settings &rarr; Displays &rarr; Larger Text.</li>
  <li><strong>Zoom:</strong> Option + Command + 8. Option + Command + = to zoom in.</li>
  <li><strong>Increase Contrast:</strong> System Settings &rarr; Accessibility &rarr; Display.</li>
  <li><strong>Bigger cursor:</strong> System Settings &rarr; Accessibility &rarr; Display &rarr; Pointer.</li>
  <li><strong>Hover Text:</strong> System Settings &rarr; Accessibility &rarr; Hover Text. Hold Command, point at any word.</li>
</ol>

<div class="footer">Printed from TekSure.com &mdash; free tech help for seniors and everyday users. Visit teksure.com/tools/low-vision-tech-hub for the full guide.</div>

</body></html>`);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 400);
  };

  /* ── Walkthrough view (single device) ───────────────────── */
  if (walks && selectedDevice) {
    return (
      <>
        <SEOHead
          title={`${selectedDevice.name} — Low Vision Setup Guide`}
          description={`Every built-in setting on ${selectedDevice.name} to make the screen easier to see. Plain English, step-by-step, designed for seniors.`}
          path="/tools/low-vision-tech-hub"
        />
        <main className="min-h-screen bg-background">
          <section className="border-b border-border bg-gradient-to-br from-violet-50 to-amber-50 dark:from-violet-950/30 dark:to-amber-950/20">
            <div className="container py-8 md:py-10">
              <Button variant="ghost" size="lg" onClick={clearDevice} className="gap-2 mb-4 text-base min-h-12">
                <ArrowLeft className="w-5 h-5" />
                Back to all devices
              </Button>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-violet-600/10 text-violet-700 dark:text-violet-300">
                  <selectedDevice.icon className="w-8 h-8" />
                </div>
                <Badge variant="outline" className="text-sm">
                  {walks.length} settings walkthroughs
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-50">
                {selectedDevice.name}
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 max-w-3xl leading-relaxed">
                {selectedDevice.tagline}
              </p>
            </div>
          </section>

          <section className="container py-10 md:py-14 max-w-4xl">
            <Accordion type="multiple" className="space-y-4">
              {walks.map((w, i) => (
                <AccordionItem
                  key={w.title}
                  value={`item-${i}`}
                  className="border-2 border-violet-200 dark:border-violet-800 rounded-xl bg-card px-2"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <div className="flex items-start gap-3 pr-4">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-base">
                        {i + 1}
                      </span>
                      <span className="text-lg md:text-2xl font-semibold leading-tight">{w.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 px-2 space-y-4">
                    <div className="rounded-xl bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-600 p-4">
                      <p className="text-base md:text-lg leading-relaxed">
                        <strong>Where:</strong> {w.path}
                      </p>
                      <p className="text-base md:text-lg leading-relaxed mt-2">
                        <strong>Why it helps:</strong> {w.why}
                      </p>
                    </div>
                    <ol className="space-y-3">
                      {w.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold flex items-center justify-center text-base">
                            {idx + 1}
                          </span>
                          <span className="text-base md:text-lg leading-relaxed pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" onClick={clearDevice} className="gap-2 text-base min-h-14">
                <ArrowLeft className="w-5 h-5" />
                Pick another device
              </Button>
              <Button size="lg" variant="outline" onClick={printCheatSheet} className="gap-2 text-base min-h-14">
                <Printer className="w-5 h-5" />
                Print the cheat sheet
              </Button>
            </div>
          </section>
        </main>
      </>
    );
  }

  /* ── Landing view (hero + everything) ───────────────────── */
  return (
    <>
      <SEOHead
        title="Low Vision Tech Hub — Tech You Can Actually See"
        description="Every setting, every trick, every tool to make your phone, tablet, computer, TV, and e-reader easier to see. Plain English guides for macular degeneration, glaucoma, cataracts, and more."
        path="/tools/low-vision-tech-hub"
      />
      <main className="min-h-screen bg-background">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-br from-violet-50 via-violet-100 to-amber-50 dark:from-violet-950/40 dark:via-violet-900/30 dark:to-amber-950/20">
          <div className="container py-12 md:py-16 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="low-vision-tech-hub"
                title="Low Vision Tech Hub"
                url="/tools/low-vision-tech-hub"
              />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-violet-600 text-white shadow-lg">
                <Eye className="w-8 h-8" />
              </div>
              <Badge variant="outline" className="text-sm md:text-base border-violet-300 dark:border-violet-700">
                Accessibility · For everyday vision challenges
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-slate-900 dark:text-slate-50 pr-14">
              Tech You Can Actually See
            </h1>
            <p className="text-xl md:text-3xl text-slate-800 dark:text-slate-100 max-w-3xl leading-relaxed font-medium">
              Every setting, every trick, every tool to make your devices easier to see.
            </p>
            <p className="text-base md:text-xl text-slate-700 dark:text-slate-200 max-w-3xl leading-relaxed mt-4">
              Built for macular degeneration, glaucoma, cataracts, diabetic retinopathy, and just plain aging eyes. No jargon. No assumptions. Start wherever makes sense.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" onClick={printCheatSheet} className="gap-2 text-base md:text-lg min-h-14 bg-violet-700 hover:bg-violet-800 text-white">
                <Printer className="w-5 h-5" />
                Print the quick-fix cheat sheet
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base md:text-lg min-h-14 border-2">
                <a href="#eye-conditions">
                  <Eye className="w-5 h-5 mr-2" />
                  Match my eye condition
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Device picker ─────────────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-slate-50">
            Start with your device
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
            Pick the thing you use most. Every option below opens a full step-by-step walkthrough.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEVICES.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => pickDevice(d.id)}
                className="group text-left p-6 rounded-2xl border-2 border-violet-200 dark:border-violet-800 bg-card hover:border-violet-600 dark:hover:border-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 transition-all min-h-40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 group-hover:bg-violet-600 group-hover:text-white transition-colors shrink-0">
                    <d.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-50">
                      {d.name}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                      {d.tagline}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-violet-700 dark:text-violet-300 font-semibold text-base">
                  Open walkthrough
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── Standalone low-vision tech ────────────────────── */}
        <section className="border-t border-border bg-slate-50 dark:bg-slate-900/40">
          <div className="container py-10 md:py-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
              <Sparkles className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              Tools beyond the built-in settings
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
              These apps and pieces of hardware go further than anything built into your phone or computer.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-50">
              <Search className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              Magnifying &amp; reading apps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MAGNIFY_APPS.map((t) => (
                <Card key={t.name} className="border-2">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50">{t.name}</h4>
                      <Badge variant="secondary" className="text-sm shrink-0">{t.price}</Badge>
                    </div>
                    <p className="text-base leading-relaxed">{t.what}</p>
                    <p className="text-base leading-relaxed text-muted-foreground"><strong>Best for:</strong> {t.who}</p>
                    {t.link && (
                      <a href={t.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violet-700 dark:text-violet-300 underline font-semibold text-base">
                        {t.link.label} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-50">
              <Volume2 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              Screen readers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SCREEN_READERS.map((t) => (
                <Card key={t.name} className="border-2">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50">{t.name}</h4>
                      <Badge variant="secondary" className="text-sm shrink-0">{t.price}</Badge>
                    </div>
                    <p className="text-base leading-relaxed">{t.what}</p>
                    <p className="text-base leading-relaxed text-muted-foreground"><strong>Best for:</strong> {t.who}</p>
                    {t.link && (
                      <a href={t.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violet-700 dark:text-violet-300 underline font-semibold text-base">
                        {t.link.label} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-50">
              <Glasses className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              Electronic magnifiers &amp; smart glasses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HARDWARE.map((t) => (
                <Card key={t.name} className="border-2">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50">{t.name}</h4>
                      <Badge variant="secondary" className="text-sm shrink-0">{t.price}</Badge>
                    </div>
                    <p className="text-base leading-relaxed">{t.what}</p>
                    <p className="text-base leading-relaxed text-muted-foreground"><strong>Best for:</strong> {t.who}</p>
                    {t.link && (
                      <a href={t.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violet-700 dark:text-violet-300 underline font-semibold text-base">
                        {t.link.label} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-50">
              <HeartHandshake className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              Visual help on demand
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HELP_SERVICES.map((t) => (
                <Card key={t.name} className="border-2 border-violet-300 dark:border-violet-700">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50">{t.name}</h4>
                      <Badge variant="secondary" className="text-sm shrink-0">{t.price}</Badge>
                    </div>
                    <p className="text-base leading-relaxed">{t.what}</p>
                    <p className="text-base leading-relaxed text-muted-foreground"><strong>Best for:</strong> {t.who}</p>
                    {t.link && (
                      <a href={t.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violet-700 dark:text-violet-300 underline font-semibold text-base">
                        {t.link.label} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lighting & environment ─────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
            <Sun className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            Lighting &amp; your space
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
            Tech settings matter, but the room around you matters too. Small changes here often do more than any screen setting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LIGHTING_TIPS.map((tip) => (
              <Card key={tip.title} className="border-2 border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/10">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{tip.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed">{tip.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Organization helpers ───────────────────────────── */}
        <section className="border-t border-border bg-slate-50 dark:bg-slate-900/40">
          <div className="container py-10 md:py-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
              <Settings className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              Organization helpers
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
              A few setup choices up front save hours of squinting later.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ORGANIZATION_TIPS.map((tip) => (
                <Card key={tip.title} className="border-2">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400" />
                      {tip.title}
                    </h3>
                    <p className="text-base leading-relaxed">{tip.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Eye condition quick-fit ────────────────────────── */}
        <section id="eye-conditions" className="container py-10 md:py-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
            <Eye className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            Match your eye condition
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
            Different conditions benefit from different settings. Tap the one that sounds like your situation for a tailored plan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {CONDITIONS.map((c) => {
              const active = activeCondition === c.condition;
              return (
                <button
                  key={c.condition}
                  type="button"
                  onClick={() => setActiveCondition(active ? null : c.condition)}
                  className={[
                    'text-left p-5 rounded-2xl border-2 transition-all min-h-32',
                    active
                      ? 'border-violet-600 bg-violet-50 dark:bg-violet-950/40 shadow-lg'
                      : 'border-violet-200 dark:border-violet-800 bg-card hover:border-violet-400',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-3">
                    <c.icon className={['w-7 h-7 shrink-0 mt-1', active ? 'text-violet-700 dark:text-violet-300' : 'text-violet-500 dark:text-violet-400'].join(' ')} />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">{c.condition}</h3>
                      <p className="text-base leading-relaxed">{c.plain}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {activeCondition && (
            <Alert className="border-2 border-violet-400 dark:border-violet-700 bg-violet-50/60 dark:bg-violet-950/30">
              <Sparkles className="h-5 w-5 text-violet-700 dark:text-violet-300" />
              <AlertTitle className="text-xl md:text-2xl font-bold mb-2 text-slate-900 dark:text-slate-50">
                Suggestions for {activeCondition}
              </AlertTitle>
              <AlertDescription>
                <ul className="space-y-2 mt-2">
                  {CONDITIONS.find((c) => c.condition === activeCondition)?.suggestions.map((s) => (
                    <li key={s} className="flex gap-2 text-base md:text-lg leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-green-400 shrink-0 mt-1" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
        </section>

        {/* ── Free services & orgs ──────────────────────────── */}
        <section className="border-t border-border bg-slate-50 dark:bg-slate-900/40">
          <div className="container py-10 md:py-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
              <HeartHandshake className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              Free services &amp; organizations
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
              These groups offer free audiobooks, training, classes, and visual help. They are all legitimate nonprofits or government programs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FREE_SERVICES.map((r) => (
                <Card key={r.name} className="border-2">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50">{r.name}</h3>
                    <p className="text-base leading-relaxed mb-3">{r.what}</p>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violet-700 dark:text-violet-300 underline font-semibold text-base min-h-10">
                      Visit website <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Insurance & Medicare ──────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
            <ShieldCheck className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            Insurance &amp; Medicare
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
            Low-vision care is covered more than people realize. Here is what you can ask about.
          </p>

          <div className="space-y-4">
            {INSURANCE_INFO.map((item) => (
              <Card key={item.title} className="border-2 border-violet-200 dark:border-violet-800">
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="mt-6 border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/20">
            <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-400" />
            <AlertTitle className="text-lg md:text-xl font-bold">A note on benefits</AlertTitle>
            <AlertDescription className="text-base md:text-lg leading-relaxed mt-1">
              Coverage varies by state and plan. Call your insurance company directly — or ask your eye doctor&apos;s office to help check — before assuming something isn&apos;t covered.
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Caregiver section ─────────────────────────────── */}
        <section className="border-t border-border bg-slate-50 dark:bg-slate-900/40">
          <div className="container py-10 md:py-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
              <Users className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              Helping a family member with vision loss
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 max-w-3xl leading-relaxed">
              If you&apos;re the one helping a parent, spouse, or friend, these are the setups that save everyone time and frustration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CAREGIVER_TIPS.map((tip) => (
                <Card key={tip.title} className="border-2">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50">{tip.title}</h3>
                    <p className="text-base leading-relaxed">{tip.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Printable cheat sheet ─────────────────────────── */}
        <section className="container py-10 md:py-14">
          <Card className="border-4 border-violet-600 bg-gradient-to-br from-violet-50 to-amber-50 dark:from-violet-950/40 dark:to-amber-950/20">
            <CardContent className="p-6 md:p-10 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-violet-600 text-white">
                <Printer className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
                Print the Quick-Fix Cheat Sheet
              </h2>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed">
                One page. Extra-large print. The top 5 low-vision settings for iPhone, Android, Windows, and Mac. Keep it by your TV or desk.
              </p>
              <Button size="lg" onClick={printCheatSheet} className="gap-2 text-lg min-h-14 bg-violet-700 hover:bg-violet-800 text-white mt-2">
                <Printer className="w-5 h-5" />
                Open the printable cheat sheet
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section className="border-t border-border bg-slate-50 dark:bg-slate-900/40">
          <div className="container py-10 md:py-14 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-slate-50">
              <HelpCircle className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              Questions people ask
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              Straight answers to the most common low-vision tech questions.
            </p>

            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="border-2 border-violet-200 dark:border-violet-800 rounded-xl bg-card px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-lg md:text-2xl font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base md:text-lg leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Related links ─────────────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-slate-50">Keep going</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/accessibility"
              className="p-5 rounded-xl border-2 border-violet-200 dark:border-violet-800 bg-card hover:border-violet-600 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 transition-all flex items-center justify-between gap-3 min-h-16"
            >
              <div className="flex items-center gap-3">
                <Contrast className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                <span className="text-lg font-semibold">Accessibility Hub — all senses covered</span>
              </div>
              <ArrowRight className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </Link>
            <Link
              to="/tools/my-first-smartphone"
              className="p-5 rounded-xl border-2 border-violet-200 dark:border-violet-800 bg-card hover:border-violet-600 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 transition-all flex items-center justify-between gap-3 min-h-16"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                <span className="text-lg font-semibold">My First Smartphone</span>
              </div>
              <ArrowRight className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </Link>
            <Link
              to="/tools/ipad-for-seniors"
              className="p-5 rounded-xl border-2 border-violet-200 dark:border-violet-800 bg-card hover:border-violet-600 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 transition-all flex items-center justify-between gap-3 min-h-16"
            >
              <div className="flex items-center gap-3">
                <Tablet className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                <span className="text-lg font-semibold">iPad for Seniors</span>
              </div>
              <ArrowRight className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </Link>
            <Link
              to="/guides"
              className="p-5 rounded-xl border-2 border-violet-200 dark:border-violet-800 bg-card hover:border-violet-600 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 transition-all flex items-center justify-between gap-3 min-h-16"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                <span className="text-lg font-semibold">All TekSure guides</span>
              </div>
              <ArrowRight className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
