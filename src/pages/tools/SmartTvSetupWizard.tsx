import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Tv,
  Play,
  Apple,
  Cast,
  Monitor,
  Flame,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Smart TV Setup Wizard
 * ------------------------------------------------------------
 * A true step-by-step walkthrough for seniors setting up a new
 * streaming device or smart TV. Each step shows ONE clear
 * instruction, a common stumbling block, and a visual
 * placeholder. Back/Next navigation — not a checklist.
 *
 * Flow:
 *   Screen 0  Pick device (Roku / Fire TV / Apple TV /
 *             Chromecast / Built-in Smart TV)
 *   Screens 1..N  One step per screen
 *   Final screen  "You're all set!" summary
 * ────────────────────────────────────────────────────────────── */

type DeviceId = 'roku' | 'firetv' | 'appletv' | 'chromecast' | 'smarttv';

interface Step {
  title: string;
  instruction: string;      // main paragraph
  stumble?: string;         // "If you see X, do Y"
  screenshot: string;       // label for visual placeholder
}

interface DeviceInfo {
  id: DeviceId;
  name: string;
  shortName: string;
  tagline: string;
  icon: LucideIcon;
  cost: string;
  remote: string;
  voiceAssistant: string;
  estTime: string;
  steps: Step[];
  freeApps: string[];
  paidApps: string[];
  support: { label: string; url: string };
}

/* ── Device + step definitions ───────────────────────────────── */

const ROKU: DeviceInfo = {
  id: 'roku',
  name: 'Roku (Streaming Stick, Express, or Ultra)',
  shortName: 'Roku',
  tagline: 'Simple, affordable, works with almost every streaming service.',
  icon: Play,
  cost: '$30 – $100 one-time',
  remote: 'Physical remote with four purple buttons, plus a free phone app',
  voiceAssistant: 'Roku Voice (built into the remote on most models)',
  estTime: '20 – 30 minutes',
  steps: [
    {
      title: 'Plug the Roku into your TV',
      instruction:
        'Push the small HDMI connector on the Roku into any empty HDMI port on the back or side of your TV. Write down the number next to that port (HDMI 1, HDMI 2, etc.) — you will need it in the next step. Then plug the power cable into a wall outlet.',
      stumble:
        'If the Roku will not fit behind your TV, use the small black HDMI extender that came in the box. And do NOT plug the power into the TV\'s USB port — it is not strong enough and can cause the Roku to restart randomly.',
      screenshot: 'Roku Streaming Stick plugged into the back of a TV with power to the wall',
    },
    {
      title: 'Turn on your TV and switch to that HDMI input',
      instruction:
        'Pick up your TV\'s remote (not the Roku remote). Press the button that says "Input", "Source", or looks like a rectangle with an arrow going into it. A list of HDMI ports will appear. Select the same HDMI number you wrote down. You should see the purple Roku logo appear on the screen.',
      stumble:
        'If your TV still shows "No Signal", double-check you picked the right HDMI number. Some TVs label them HDMI 1 / HDMI 2 / HDMI 3 / HDMI (ARC). Try each one until you see the purple Roku logo.',
      screenshot: 'TV remote "Input" menu with HDMI 1, HDMI 2, HDMI 3 highlighted',
    },
    {
      title: 'Put batteries in the remote and pick your language',
      instruction:
        'Open the back of the Roku remote and insert the two AAA batteries (usually included in the box). The remote pairs automatically — give it 30 seconds. Then use the arrow pad to highlight "English" and press OK. On the next screen, pick your country and press OK.',
      stumble:
        'If the remote does not respond at all, hold down the pairing button inside the battery compartment for 5 seconds. A pairing light should blink on the front of the remote.',
      screenshot: 'Roku welcome screen with "English" selected and remote pointing at the TV',
    },
    {
      title: 'Connect to your home Wi-Fi',
      instruction:
        'Roku will show a list of nearby Wi-Fi networks. Use the arrow pad to pick yours (often named something like "ATT-A8B1C2" or your last name) and press OK. An on-screen keyboard appears — use the arrow pad to spell out your Wi-Fi password letter by letter, then highlight "Connect".',
      stumble:
        'Your Wi-Fi password is case-sensitive. The letter "O" and the number "0" are different. To switch between UPPERCASE, lowercase, and numbers, look for the A/a/1 button at the bottom-left of the on-screen keyboard.',
      screenshot: 'Roku Wi-Fi password entry screen with on-screen keyboard',
    },
    {
      title: 'Let it update the software (5 – 10 minutes)',
      instruction:
        'Roku will now download the latest software. This takes 5 to 10 minutes and the screen may go black or restart a few times. This is completely normal — do not unplug anything. Just go get a cup of coffee.',
      stumble:
        'If the progress bar seems frozen at the same percentage for more than 15 minutes, unplug the power cable, wait 30 seconds, plug it back in, and let it try again.',
      screenshot: 'Roku "Updating your Roku player" progress screen with spinning logo',
    },
    {
      title: 'Create a free Roku account (the easy way)',
      instruction:
        'Roku will show a short code like "ABCDEF". Grab your phone or tablet, open a web browser, and go to roku.com/link. Type in that code. You\'ll be asked to enter your email and make a password on your phone — much easier than typing with the remote. When it says "Account linked", go back to your TV.',
      stumble:
        'If Roku asks for a credit card on the "Billing Information" page, look carefully — there is always a small link that says "Start without entering a payment method" or "Skip". You do NOT need a credit card to use free apps.',
      screenshot: 'TV showing roku.com/link with a 6-character pairing code',
    },
    {
      title: 'Pick a few free channels to add',
      instruction:
        'Roku now shows a list of popular apps — called "channels" on Roku. Highlight the ones you want (use the arrow pad) and press OK to add a green check mark. The Roku Channel, YouTube, Pluto TV, Tubi, and PBS are all free. If you already pay for Netflix or Disney+, add those too. Highlight "Continue" when done.',
      stumble:
        'Don\'t worry about picking the wrong ones — you can always add or remove channels later from Home → Streaming Channels.',
      screenshot: 'Roku "Choose your streaming channels" screen with checkmarks',
    },
    {
      title: 'Open your first channel and start watching',
      instruction:
        'You\'re now on the Roku Home screen. Use the arrow pad to highlight YouTube (or Pluto TV, or any free channel you added) and press OK. Give it a moment to open. Browse the menus and press OK to play something. Use the Back button (top-left of the remote) to return.',
      stumble:
        'If the channel asks you to "Sign in" and you do not have an account with them, look for a "Continue as Guest", "Browse" or "Skip" option. YouTube and Pluto TV never require an account to watch free videos.',
      screenshot: 'Roku home screen with YouTube tile selected',
    },
  ],
  freeApps: ['The Roku Channel', 'YouTube', 'Pluto TV', 'Tubi', 'Freevee', 'PBS'],
  paidApps: ['Netflix', 'Hulu', 'Disney+', 'Max', 'Prime Video', 'Apple TV+'],
  support: { label: 'Roku Support', url: 'https://support.roku.com/' },
};

const FIRETV: DeviceInfo = {
  id: 'firetv',
  name: 'Amazon Fire TV Stick',
  shortName: 'Fire TV',
  tagline: 'Great if you already have Amazon Prime. Alexa is built in.',
  icon: Flame,
  cost: '$30 – $60 one-time',
  remote: 'Alexa voice remote with a round microphone button',
  voiceAssistant: 'Alexa',
  estTime: '20 – 30 minutes',
  steps: [
    {
      title: 'Plug the Fire Stick into your TV',
      instruction:
        'Push the Fire Stick into any empty HDMI port on the back or side of your TV. Write down the HDMI number next to the port. Plug the power cable into a wall outlet — not the TV\'s USB port.',
      stumble:
        'If the Fire Stick will not fit flat against the TV, use the black HDMI extender cable from the box. Cramming it in can damage the port.',
      screenshot: 'Fire TV Stick plugged into an HDMI port on the back of a TV',
    },
    {
      title: 'Turn on your TV and switch inputs',
      instruction:
        'Pick up your TV remote and press "Input" or "Source". Pick the HDMI number you wrote down. You should see an orange Amazon logo appear, followed by "Press the Home button on your remote".',
      stumble:
        'If you see "No Signal" after a minute, make sure the Fire Stick\'s tiny power light is on. If it is not, the USB port you picked is under-powered — switch to the included wall adapter.',
      screenshot: 'TV input menu showing HDMI 1, 2, 3 options',
    },
    {
      title: 'Pair the Alexa remote',
      instruction:
        'Put the two AAA batteries into the Fire TV remote. Press and hold the round Home button (the one with a small house icon) for about 10 seconds. A message on screen will confirm the remote is paired.',
      stumble:
        'If the remote does not pair, remove one battery, wait 30 seconds, and put it back in. Then try holding Home again for 10 seconds.',
      screenshot: 'Fire TV pairing screen with "Hold the Home button" instruction',
    },
    {
      title: 'Pick a language and connect to Wi-Fi',
      instruction:
        'Use the arrow pad to highlight "English" and press the round center button. Fire TV will scan for nearby Wi-Fi networks — pick yours from the list. Use the on-screen keyboard to type in your Wi-Fi password and highlight "Connect".',
      stumble:
        'Remember passwords are case-sensitive. Use the "A/a" toggle button on the keyboard to switch between uppercase, lowercase, and numbers.',
      screenshot: 'Fire TV Wi-Fi network list with password entry field',
    },
    {
      title: 'Sign in to your Amazon account',
      instruction:
        'Use the same email and password you use to shop on Amazon. The easiest way is to pick "Sign in on another device" — Fire TV shows a code, you go to amazon.com/code on your phone, type the code, and sign in there.',
      stumble:
        'If you don\'t have an Amazon account yet, create one for free at amazon.com on your phone — you don\'t need to pay for Prime. Having an Amazon account is required to use a Fire Stick.',
      screenshot: 'Fire TV "Enter code at amazon.com/code" sign-in screen',
    },
    {
      title: 'Let it install updates and pre-installed apps',
      instruction:
        'Fire TV will now update itself and install Netflix, Hulu, Disney+, and a few other popular apps. This takes 5 to 10 minutes. Just wait — the TV may flash black or restart once. Do not unplug it.',
      stumble:
        'If you see "Download stopped" or an error code, check that your Wi-Fi is still working (try it on your phone). If Wi-Fi is fine, press OK to retry.',
      screenshot: 'Fire TV "Preparing your Fire TV Stick" progress screen',
    },
    {
      title: 'Set up parental controls (optional — good if kids visit)',
      instruction:
        'Fire TV asks if you want a PIN. If grandkids or other children use the TV, say Yes and pick an easy 5-digit PIN. This blocks purchases and adult content. If only adults use this TV, you can skip it by pressing the Back button or "No Thanks".',
      stumble:
        'Write the PIN on a sticky note and put it somewhere safe. If you forget it later, you have to reset the whole Fire Stick to remove it.',
      screenshot: 'Fire TV "Set a Parental Controls PIN" screen',
    },
    {
      title: 'Try Alexa — say "Alexa, open YouTube"',
      instruction:
        'You\'re done with setup! Press and hold the microphone button (top of the remote, round button). Say "Open YouTube" or "Play the news" and release the button. Alexa will open the app for you. Without Alexa, just use the arrow pad to highlight an app tile on the home screen and press the center button.',
      stumble:
        'If Alexa does nothing, make sure you are HOLDING the microphone button while you speak — like a walkie-talkie. Also check that the remote is about 10 feet or closer to the Fire Stick.',
      screenshot: 'Fire TV home screen with app tiles — YouTube, Netflix, Prime Video',
    },
  ],
  freeApps: ['Freevee', 'YouTube', 'Pluto TV', 'Tubi', 'IMDb TV', 'Newsy'],
  paidApps: ['Prime Video', 'Netflix', 'Disney+', 'Hulu', 'Max', 'Apple TV+'],
  support: { label: 'Amazon Fire TV Help', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GZNVS8V2XDKYCT5Y' },
};

const APPLETV: DeviceInfo = {
  id: 'appletv',
  name: 'Apple TV 4K',
  shortName: 'Apple TV',
  tagline: 'Premium streaming box — the easiest choice if you already use an iPhone.',
  icon: Apple,
  cost: '$129 – $149 one-time',
  remote: 'Siri Remote with touch pad and a dedicated Siri button',
  voiceAssistant: 'Siri',
  estTime: '15 – 25 minutes',
  steps: [
    {
      title: 'Connect Apple TV to your TV with HDMI',
      instruction:
        'Plug an HDMI cable into the back of the Apple TV box and then into any empty HDMI port on your TV. Write down the HDMI number. Note: Apple does NOT include an HDMI cable in the box — any standard HDMI cable from a store works.',
      stumble:
        'You do not need an expensive "4K HDMI" cable unless you specifically have a 4K HDR television. A normal $10 HDMI cable is fine for most people.',
      screenshot: 'Apple TV 4K box connected to a TV with an HDMI cable',
    },
    {
      title: 'Plug in power and switch TV inputs',
      instruction:
        'Plug the Apple TV\'s power cable into a wall outlet. Apple TV cannot run on USB power. Pick up your TV remote, press "Input" or "Source", and pick the HDMI number you wrote down.',
      stumble:
        'If the screen stays black for more than a minute, make sure the small white light on the front of the Apple TV is glowing. No light means it\'s not getting power — try a different outlet.',
      screenshot: 'Apple TV setup wait screen with Apple logo',
    },
    {
      title: 'Wake up the Siri Remote',
      instruction:
        'Pick up the shiny silver Siri Remote. Press the round center touch-pad once to wake it. The remote is already paired from the factory. A welcome screen slides in from the left.',
      stumble:
        'If the remote feels dead, hold the Back button (top-right) + the Volume Up button for 5 seconds to force-pair. The remote needs a USB-C charge if it has been sitting for months — plug it into a phone charger for a few minutes.',
      screenshot: 'Siri Remote next to Apple TV welcome screen',
    },
    {
      title: 'Bring your iPhone close for auto-setup',
      instruction:
        'If you own an iPhone that\'s already signed in to iCloud, unlock it and hold it within a few inches of your Apple TV box. A pop-up appears on your iPhone asking "Set up Apple TV?" — tap it. Apple TV will automatically copy your Apple ID, Wi-Fi password, and iCloud settings. This takes about 60 seconds.',
      stumble:
        'No iPhone? Or is the auto-setup not working? Just pick "Set Up Manually" on the TV. You will need to spell out your Wi-Fi password and your Apple ID email with the remote\'s touch pad.',
      screenshot: 'iPhone showing "Set Up Apple TV?" prompt next to Apple TV box',
    },
    {
      title: 'Confirm Wi-Fi and sign in to your Apple ID',
      instruction:
        'If you did auto-setup, Apple TV already knows your Wi-Fi password — just confirm. If manual, pick your Wi-Fi network and spell out the password. Then sign in with your Apple ID (the same email you use for iPhone, Mac, or the App Store).',
      stumble:
        'Forgot your Apple ID password? You can reset it at iforgot.apple.com on your phone — much easier than tapping it out with the Siri Remote touch pad.',
      screenshot: 'Apple TV "Sign in with your Apple ID" screen',
    },
    {
      title: 'Agree to a few settings screens',
      instruction:
        'Apple TV asks a few yes/no questions: Enable Siri? (Say Yes — it\'s helpful.) Share analytics with Apple? (Your choice.) Enable Screen Saver aerial videos? (Yes — they\'re beautiful.) Pick a home screen layout (One Home Screen is simplest).',
      stumble:
        'Don\'t worry about picking perfectly — every one of these can be changed later in Settings → General.',
      screenshot: 'Apple TV "Enable Siri?" agreement screen',
    },
    {
      title: 'Let it install apps',
      instruction:
        'Apple TV will download the most popular streaming apps — Apple TV+, Netflix, YouTube, Disney+, and others are included or easy one-click installs. Wait about 3 – 5 minutes for everything to finish.',
      stumble:
        'An app you want (like Max or Hulu) missing from the home screen? Open the App Store (blue "A" icon), search for it, and press "Get". Apps on Apple TV are free to download — you still need a paid account to actually watch.',
      screenshot: 'Apple TV home screen with app rows — Apple TV+, Netflix, YouTube',
    },
    {
      title: 'Try Siri — hold the microphone button',
      instruction:
        'Press and hold the small microphone button on the side of the Siri Remote. Say "Play the news" or "Open YouTube" or "Find a comedy on Netflix". Release the button. Siri opens the right app or plays the right thing.',
      stumble:
        'If Siri does nothing, check Settings → General → Siri → make sure it\'s turned ON. Also, your TV must be on the Apple TV input for Siri to work — it does not work through the iPhone.',
      screenshot: 'Apple TV Siri listening animation at the bottom of the screen',
    },
  ],
  freeApps: ['YouTube', 'Pluto TV', 'Tubi', 'PBS', 'Freevee'],
  paidApps: ['Apple TV+', 'Netflix', 'Disney+', 'Hulu', 'Max', 'Prime Video'],
  support: { label: 'Apple TV Support', url: 'https://support.apple.com/apple-tv' },
};

const CHROMECAST: DeviceInfo = {
  id: 'chromecast',
  name: 'Google Chromecast / Google TV',
  shortName: 'Chromecast',
  tagline: 'Built on Android. Setup happens mostly on your phone.',
  icon: Cast,
  cost: '$30 – $50 one-time',
  remote: 'Voice remote with a Google Assistant button (newer models) or phone-only (older Chromecasts)',
  voiceAssistant: 'Google Assistant',
  estTime: '15 – 25 minutes',
  steps: [
    {
      title: 'Plug Chromecast into your TV',
      instruction:
        'Plug the small round Chromecast into any empty HDMI port. Write down the HDMI number. Plug the power cable into a wall outlet — Chromecast needs more power than a TV\'s USB port can reliably give.',
      stumble:
        'If the Chromecast will not fit flat behind the TV, the box comes with a short HDMI extender cable — use it. A tight fit can cause the Chromecast to overheat.',
      screenshot: 'Chromecast plugged into TV HDMI with power cable to wall outlet',
    },
    {
      title: 'Switch your TV to the Chromecast input',
      instruction:
        'Press "Input" or "Source" on your TV remote and pick the HDMI number you wrote down. You will see a colorful "Set me up" screen with the words "Chromecast" and instructions to download the Google Home app.',
      stumble:
        'If you see "No Signal" for more than a minute, make sure the Chromecast\'s tiny LED light is on. No light means it\'s not getting power — try a different wall outlet.',
      screenshot: 'Chromecast setup screen showing "Get the Google Home app"',
    },
    {
      title: 'Install the Google Home app on your phone',
      instruction:
        'On your iPhone or Android phone, open the App Store (iPhone) or Play Store (Android). Search for "Google Home" and tap Install. It\'s free. When it finishes, open the app.',
      stumble:
        'Important: the app is "Google Home" (a little house icon with colored dots) — not "Google Nest" or "Google TV". Only Google Home does the setup.',
      screenshot: 'Google Home app icon in the App Store',
    },
    {
      title: 'Set up the Chromecast through your phone',
      instruction:
        'In the Google Home app, tap the big "+" at the top-left, pick "Set up device", then "New device". The app finds the Chromecast over Bluetooth automatically. Your phone and TV will show a matching code — tap "Yes" on the phone to confirm it\'s the right one.',
      stumble:
        'If the app says "No devices found", make sure Bluetooth is turned on in your phone\'s Settings. Also make sure your phone is on the same Wi-Fi you want to connect the Chromecast to.',
      screenshot: 'Google Home app "Set up new device" screen with Chromecast detected',
    },
    {
      title: 'Sign in to your Google account and choose apps',
      instruction:
        'The app asks which Google account to use (pick your main Gmail). Pick a room like "Living Room". Confirm your Wi-Fi password. Then pick your streaming services — YouTube, Netflix, Disney+, etc. Google Home installs them all at once.',
      stumble:
        'No Google account? Tap "Create account" inside the Google Home app — it\'s free. You need one to use a Chromecast.',
      screenshot: 'Google Home "Pick your services" app selection screen',
    },
    {
      title: 'Try the voice remote (or cast from your phone)',
      instruction:
        'If your Chromecast came with a voice remote, hold the Google Assistant button and say "Play YouTube" or "Open Netflix". If you have the older cast-only Chromecast, open a streaming app on your phone (like YouTube), tap the Cast icon (a small screen with Wi-Fi waves), and pick your Chromecast. The video jumps to your TV.',
      stumble:
        'If the Cast icon is missing from the YouTube app, close the app fully and reopen it. Make sure your phone is on the same Wi-Fi as the Chromecast.',
      screenshot: 'Chromecast home screen with voice remote and Cast icon on phone',
    },
  ],
  freeApps: ['YouTube', 'Pluto TV', 'Tubi', 'Google TV free movies', 'Freevee'],
  paidApps: ['Netflix', 'Disney+', 'Max', 'Hulu', 'Prime Video', 'Apple TV+'],
  support: { label: 'Chromecast / Google TV Support', url: 'https://support.google.com/googletv' },
};

const SMARTTV: DeviceInfo = {
  id: 'smarttv',
  name: 'Built-in Smart TV (Samsung, LG, Sony, Vizio, etc.)',
  shortName: 'Smart TV',
  tagline: 'No extra device — streaming apps are built right into the TV.',
  icon: Monitor,
  cost: 'No extra cost — built in',
  remote: 'The remote that came with your TV',
  voiceAssistant: 'Varies — Bixby (Samsung), LG ThinQ, or Google Assistant',
  estTime: '15 – 30 minutes',
  steps: [
    {
      title: 'Turn on the TV for the first time',
      instruction:
        'Plug the TV into the wall and press the power button on the remote. Most smart TVs show a welcome screen right away — Samsung has a blue/purple screen, LG has a rainbow circle, Sony shows a "Welcome to BRAVIA" screen, Vizio shows "Welcome to SmartCast".',
      stumble:
        'If you see a regular cable TV channel instead of a setup screen, your TV has already been set up by the store. To start fresh, go to Settings → General → Reset (Samsung) or System → Reset (LG, Sony).',
      screenshot: 'TV welcome screen on a Samsung Smart TV',
    },
    {
      title: 'Pick your language, country, and time zone',
      instruction:
        'Use the arrow pad on your TV remote to highlight "English" (or your preferred language) and press OK. Then pick your country. Then pick your time zone — if you\'re not sure, pick the closest big city (e.g., New York for the east coast).',
      stumble:
        'If you pick the wrong country by mistake, press the Back button to return to the previous screen. You can also change it later in Settings → General → System → Language.',
      screenshot: 'TV setup "Select your language" screen',
    },
    {
      title: 'Connect to your home Wi-Fi',
      instruction:
        'The TV shows a list of Wi-Fi networks. Pick yours and type your password using the on-screen keyboard and arrow pad. Most remotes have a small microphone button — pressing it lets you dictate the password instead of typing.',
      stumble:
        'The on-screen keyboard usually starts in lowercase. Look for the "A/a" or "Shift" button to switch to UPPERCASE and numbers. Passwords are case-sensitive.',
      screenshot: 'Smart TV Wi-Fi selection screen with networks list',
    },
    {
      title: 'Let it download the latest software',
      instruction:
        'The TV will check for software updates and install them. This takes 5 to 15 minutes and the screen may go black or restart a few times. Go grab some water and come back. Do NOT unplug the TV.',
      stumble:
        'If the progress bar is stuck for 20+ minutes, unplug the TV, wait 30 seconds, plug it back in, and it will resume.',
      screenshot: 'Smart TV "Checking for updates" progress screen',
    },
    {
      title: 'Sign in with the TV manufacturer\'s account',
      instruction:
        'You\'ll be asked to create (or sign in to) a free account — Samsung Account for Samsung, LG Account for LG, Google Account for Sony or Vizio. This lets you download apps. You can also skip this step and still watch — most streaming apps are pre-installed.',
      stumble:
        'If signing up is confusing, just pick "Skip" or "Set up later". The big streaming apps (Netflix, YouTube, Prime) work without a manufacturer account — you\'ll only be asked later if you want to download more apps.',
      screenshot: 'Samsung Account sign-in screen with QR code option',
    },
    {
      title: 'Agree to terms and configure voice (if offered)',
      instruction:
        'Tap Agree on the Terms of Service (needed to use Smart features). If your remote has a microphone button, set up voice: Samsung asks about Bixby, LG asks about ThinQ, Sony and Vizio use Google Assistant. Follow the short voice-training prompts, or pick "Skip" if you\'d rather use the arrow pad.',
      stumble:
        'You don\'t have to agree to optional "Sync Plus" (Samsung), "Home Dashboard" (LG), or similar data-collection features. Saying No just means the TV doesn\'t track what you watch.',
      screenshot: 'Smart TV Terms of Service / Voice Assistant setup screen',
    },
    {
      title: 'Open your streaming apps and sign in',
      instruction:
        'Press the Home button on your remote (usually a house icon). You\'ll see a row of app tiles — Netflix, YouTube, Prime Video, Disney+, etc. Highlight the one you want, press OK to open, and sign in with your streaming account (or pick "Sign in on a browser" for an easier phone-based sign-in).',
      stumble:
        'An app you want is missing? Look for the TV\'s own App Store: Samsung calls it "Apps", LG calls it "Content Store", Sony uses "Google Play Store", Vizio shows everything on its home row already. Search for the app name and tap Install.',
      screenshot: 'Smart TV home screen with Netflix, YouTube, Prime Video tiles',
    },
  ],
  freeApps: ['YouTube', 'Pluto TV', 'Tubi', 'Samsung TV Plus / LG Channels / Vizio WatchFree+', 'Freevee'],
  paidApps: ['Netflix', 'Disney+', 'Max', 'Hulu', 'Prime Video', 'Apple TV+'],
  support: { label: 'Find your TV brand\'s help site', url: 'https://www.teksure.com/tools/troubleshooter' },
};

const DEVICES: Record<DeviceId, DeviceInfo> = {
  roku: ROKU,
  firetv: FIRETV,
  appletv: APPLETV,
  chromecast: CHROMECAST,
  smarttv: SMARTTV,
};

/* ── Troubleshooting snippets shown at the bottom of each step ── */

interface TroubleItem {
  title: string;
  body: string;
}

const TROUBLESHOOTING: TroubleItem[] = [
  {
    title: 'The remote isn\'t working',
    body:
      'First, check the batteries — try a fresh pair even if the old ones seem fine. Next, re-pair the remote: Roku (press the pairing button inside the battery compartment for 5 seconds), Fire TV (hold Home for 10 seconds), Apple TV (hold Back + Volume Up for 5 seconds). Make sure the remote has a clear line of sight to the streaming device — heavy objects can block the signal.',
  },
  {
    title: 'My TV is stuck on the setup / welcome screen',
    body:
      'Unplug the streaming device (or TV) from the wall, wait 30 seconds, plug it back in. If it\'s still frozen, hold the TV\'s physical power button for 10 seconds until the screen goes black, then turn it back on. As a last resort, go to Settings → System → Reset to start the setup fresh.',
  },
  {
    title: 'I can\'t find the app I want',
    body:
      'Every device has a search function — look for a magnifying-glass icon on the home screen. Type the app name (Netflix, Hulu, etc.) and press Install. If the app simply doesn\'t exist for your device (rare but possible for older smart TVs), a cheap $30 Roku or Fire Stick will give you every streaming service.',
  },
  {
    title: 'The picture looks blurry or the sound is off',
    body:
      'Check that your HDMI cable is pushed in all the way on BOTH ends (TV side and device side). Try a different HDMI port on the TV. In Settings, look for "Display" or "Picture Mode" — change it from "Dynamic" or "Vivid" to "Movie" or "Standard" for a more natural look.',
  },
  {
    title: 'It keeps asking for a Wi-Fi password that I thought was right',
    body:
      'Passwords are case-sensitive — capital O and number 0 are different; lowercase L and number 1 look identical. The safest way to find your Wi-Fi password is to look on the sticker on the back or bottom of your router, or open Settings → Wi-Fi on a phone that is already connected and tap your network name for a "Share Password" option.',
  },
];

/* ── Final "All done" screen ─────────────────────────────────── */

function DoneScreen({
  device,
  completedCount,
  totalSteps,
  onRestart,
}: {
  device: DeviceInfo;
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
            <h2 className="text-2xl md:text-3xl font-bold">You&apos;re all set!</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Your {device.shortName} is ready to watch. You finished {completedCount} of {totalSteps} steps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Totally free apps to try first</h3>
              </div>
              <ul className="space-y-2">
                {device.freeApps.map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <Badge className="bg-green-600 hover:bg-green-600 text-xs">Free</Badge>
                    <span className="text-base">{app}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                These apps have thousands of free movies, TV shows, and live channels with no subscription needed. They show ads — that&apos;s how they stay free.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Tv className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Paid services — sign in or add later</h3>
              </div>
              <ul className="space-y-2">
                {device.paidApps.map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Paid</Badge>
                    <span className="text-base">{app}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Already subscribed? Open the app and sign in. Not sure which to pay for? Use our Streaming TV Guide (below) to compare.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-xl bg-background border p-5 space-y-3">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            What to do next
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>
              Not sure which streaming services are worth paying for?{' '}
              <Link to="/tools/streaming-calculator" className="text-primary underline font-medium">
                Use the Streaming TV Guide
              </Link>{' '}
              to pick the right mix.
            </li>
            <li>
              Want to save money?{' '}
              <Link to="/tools/subscription-auditor" className="text-primary underline font-medium">
                Check for streaming services you forgot you were paying for
              </Link>.
            </li>
            <li>
              For detailed model-specific help, visit{' '}
              <a href={device.support.url} target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium inline-flex items-center gap-1">
                {device.support.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>.
            </li>
            <li>
              Need hands-on help?{' '}
              <Link to="/get-help" className="text-primary underline font-medium">
                Book a TekSure technician
              </Link>{' '}
              for a guided video session.
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" onClick={onRestart} className="gap-2 text-base">
            <RotateCcw className="w-5 h-5" />
            Set up a different device
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link to="/tools/streaming-calculator">Streaming TV Guide</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link to="/tools">Back to all tools</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ── Troubleshooting accordion (collapsible section) ─────────── */

function TroubleshootingSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-10 border-t border-border pt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-primary" aria-hidden="true" />
          <span className="text-lg md:text-xl font-semibold text-left">
            Stuck? Open the troubleshooting guide
          </span>
        </span>
        <span className="text-sm text-muted-foreground">{open ? 'Hide' : 'Show'}</span>
      </button>

      {open && (
        <div className="mt-4 space-y-3">
          {TROUBLESHOOTING.map((item) => (
            <Card key={item.title}>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400" aria-hidden="true" />
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────── */

export default function SmartTvSetupWizard() {
  const [selectedId, setSelectedId] = useState<DeviceId | null>(null);
  // stepIndex 0..(steps.length-1) = setup steps, stepIndex === steps.length = done screen
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const device = useMemo<DeviceInfo | null>(
    () => (selectedId ? DEVICES[selectedId] : null),
    [selectedId],
  );

  const totalSteps = device?.steps.length ?? 0;
  const isDone = device ? stepIndex === totalSteps : false;
  const current: Step | null = device && !isDone ? device.steps[stepIndex] ?? null : null;
  const progress = device ? Math.round((stepIndex / totalSteps) * 100) : 0;

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
  };

  /* ── Landing: device picker ─── */
  if (!device) {
    return (
      <>
        <SEOHead
          title="Smart TV Setup Wizard — Roku, Fire Stick, Apple TV, Chromecast, Smart TV"
          description="A senior-friendly step-by-step wizard to set up your new streaming device or smart TV. Clear instructions, big buttons, and troubleshooting built in."
          path="/tools/smart-tv-setup"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          <section className="border-b border-border bg-muted/30">
            <div className="container py-10 md:py-14 relative">
              <div className="absolute top-6 right-6">
                <BookmarkButton
                  type="tool"
                  slug="smart-tv-setup"
                  title="Smart TV Setup Wizard"
                  url="/tools/smart-tv-setup"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Tv className="w-5 h-5 text-primary" />
                <Badge variant="outline" className="text-xs">Entertainment · Step-by-step</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">Smart TV Setup Wizard</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                New streaming device or smart TV? We&apos;ll walk you through every single step — plugging it in, connecting to Wi-Fi, making an account, and finding something to watch. No rushing, no skipping.
              </p>
            </div>
          </section>

          <section className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Which device did you get?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {(Object.values(DEVICES)).map((d) => (
                <Card
                  key={d.id}
                  onClick={() => {
                    setSelectedId(d.id);
                    setStepIndex(0);
                    setCompleted(new Set());
                  }}
                  className="cursor-pointer hover:border-primary transition-colors"
                >
                  <CardContent className="p-6 md:p-7 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <d.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">{d.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-3">{d.tagline}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{d.steps.length} steps</Badge>
                        <Badge variant="outline">{d.estTime}</Badge>
                        <Badge variant="outline">{d.cost}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
              <CardContent className="p-5 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-base mb-1">Not sure which you have?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Check the box it came in or the small logo on the device itself. If the streaming apps are already built into the TV (no extra box or stick), pick <strong>Built-in Smart TV</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>

            <TroubleshootingSection />
          </section>
        </main>
        <Footer />
      </>
    );
  }

  /* ── Wizard view ─── */
  return (
    <>
      <SEOHead
        title={`Smart TV Setup — ${device.shortName} step-by-step`}
        description={`Step-by-step walkthrough to set up your ${device.name}. Designed for seniors and first-time users.`}
        path="/tools/smart-tv-setup"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <device.icon className="w-5 h-5 text-primary" />
                <span className="text-base md:text-lg font-medium">
                  Setting up · {device.name}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={restart} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Pick a different device
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {isDone ? 'All done' : `Step ${stepIndex + 1} of ${totalSteps}`}
              </span>
              <span className="text-sm md:text-base text-muted-foreground">·</span>
              <span className="text-sm md:text-base text-muted-foreground">
                {completed.size} completed
              </span>
            </div>
            <Progress value={isDone ? 100 : progress} className="h-3" aria-label="Setup progress" />
          </div>
        </section>

        <section className="container py-8 md:py-12 max-w-4xl">
          {isDone ? (
            <DoneScreen
              device={device}
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
                    {device.shortName}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {current.title}
                </h1>
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
                      <h3 className="font-semibold text-base md:text-lg mb-1">
                        Common stumbling block
                      </h3>
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
                  className="gap-2 text-base"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>

                <Button size="lg" onClick={markDoneAndNext} className="gap-2 text-base">
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
                <h2 className="text-base font-semibold mb-3 text-muted-foreground">
                  All steps
                </h2>
                <div className="flex flex-wrap gap-2">
                  {device.steps.map((s, i) => {
                    const done = completed.has(i);
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
                            : done
                              ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border-green-600/40'
                              : 'bg-background text-foreground border-border hover:border-primary/40',
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

              {/* Troubleshooting */}
              <TroubleshootingSection />
            </article>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}
