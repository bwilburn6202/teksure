import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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
  MonitorSmartphone,
  Settings,
  Power,
  Volume2,
  VolumeX,
  ArrowUp,
  ArrowLeft,
  CircleDot,
  Mic,
  Home,
  Menu,
  Play,
  SkipBack,
  Hash,
  Tv,
  Cable,
  Radio,
  Speaker,
  Asterisk,
  Info,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Search,
  Eye,
  Palette,
  Accessibility,
  Smartphone,
  RefreshCw,
  CheckCircle2,
  Circle,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Remote Control Decoder
 * ------------------------------------------------------------
 * Visual guide that helps users identify what every button does
 * on the most common TV, cable, streaming, and universal remotes.
 * Senior-friendly: plain English, large text, clear button
 * descriptions, common-confusion callouts, and a fix-it accordion.
 * ────────────────────────────────────────────────────────────── */

type RemoteId =
  | 'roku'
  | 'fire-tv'
  | 'apple-tv'
  | 'chromecast'
  | 'samsung-smart'
  | 'lg-magic'
  | 'sony-google-tv'
  | 'vizio-v'
  | 'xfinity-xr15'
  | 'spectrum-clikr'
  | 'directv'
  | 'dish-hopper'
  | 'logitech-harmony'
  | 'ge-universal'
  | 'rca-universal'
  | 'inteset-422'
  | 'bose-soundbar'
  | 'sonos';

type Category =
  | 'streaming'
  | 'smart-tv'
  | 'cable'
  | 'universal'
  | 'soundbar';

interface ButtonInfo {
  name: string;
  icon: LucideIcon;
  purpose: string;
  confusion?: string;
}

interface ButtonRegion {
  region: string;
  tint: string; // tailwind color classes for the region
  buttons: ButtonInfo[];
}

interface ProTip {
  title: string;
  body: string;
}

interface HiddenFeature {
  title: string;
  body: string;
}

interface Remote {
  id: RemoteId;
  name: string;
  brand: string;
  category: Category;
  tagline: string;
  buttonCount: string;
  hasMic: boolean;
  hasTouchpad: boolean;
  image: string; // descriptive placeholder
  regions: ButtonRegion[];
  proTips: ProTip[];
  hidden: HiddenFeature[];
}

/* ── Remote data ──────────────────────────────────────────────── */

const REMOTES: Remote[] = [
  /* STREAMING STICKS / BOXES ─────────────────────────────────── */
  {
    id: 'roku',
    name: 'Roku Voice Remote',
    brand: 'Roku',
    category: 'streaming',
    tagline: 'Short, chubby, purple back. The most common streaming remote in US homes.',
    buttonCount: 'About 11 buttons',
    hasMic: true,
    hasTouchpad: false,
    image: 'Roku Voice Remote with purple back, microphone hole at top, four shortcut buttons in a row at the bottom',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          {
            name: 'Power (top corner, on newer Voice Remote Pro)',
            icon: Power,
            purpose: 'Turns your TV on and off. Only on the newer Voice Remote Pro — basic Roku remotes skip this entirely and rely on the TV remote for power.',
          },
          {
            name: 'Microphone / Voice',
            icon: Mic,
            purpose: 'Press and hold to search by voice. Say things like "Find free comedies" or "Play CBS News."',
            confusion: 'On basic Roku remotes the microphone button is on the LEFT SIDE of the remote, not the top — people often miss it.',
          },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Direction pad (up / down / left / right)', icon: CircleDot, purpose: 'Moves the highlight around the screen. Think of it like a mouse pointer.' },
          { name: 'OK', icon: CheckCircle2, purpose: 'The round button in the middle — picks what you have highlighted.' },
          { name: 'Back', icon: ArrowLeft, purpose: 'Goes back one screen. Press again to keep going back.' },
          { name: 'Home', icon: Home, purpose: 'Jumps straight to the Roku Home screen no matter where you are.' },
        ],
      },
      {
        region: 'Playback',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Rewind / Fast-forward', icon: SkipBack, purpose: 'Skips back or ahead by about 10 seconds each press. Hold for longer skip.' },
          { name: 'Play / Pause', icon: Play, purpose: 'One button does both — pauses if playing, plays if paused.' },
        ],
      },
      {
        region: 'Special',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          {
            name: 'Asterisk ( * ) — Options',
            icon: Asterisk,
            purpose: 'Opens a hidden menu for the thing you are looking at — rename a channel, see captions, change video settings.',
            confusion: 'The * button on Roku is NOT for passwords. It is the Options button — the most underused button on the remote.',
          },
          { name: 'Volume + / −', icon: Volume2, purpose: 'On newer Roku remotes — side buttons control your TV or soundbar volume. Needs a one-time pairing walkthrough.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silences the TV. Press again to un-mute.' },
          { name: 'Shortcut buttons (Netflix, Disney+, Hulu, Apple TV+)', icon: Tv, purpose: 'Launches that app in one press. These are printed, not programmable.' },
        ],
      },
    ],
    proTips: [
      { title: 'Hold Home for 5 seconds', body: 'Opens secret settings on some models. If your Roku acts slow, try the secret menu → System restart.' },
      { title: 'Press OK on a movie in your Home row', body: 'Shows details, similar titles, and where it streams free — not only on paid services.' },
    ],
    hidden: [
      { title: 'Private Listening', body: 'In the Roku mobile app, tap the headphones icon — your TV sound plays through headphones plugged into your phone. Best feature for late-night TV.' },
      { title: 'Find Lost Remote', body: 'Some Roku TV models have a button on the back of the TV. Press it and the remote beeps for 60 seconds to help you find it.' },
    ],
  },
  {
    id: 'fire-tv',
    name: 'Amazon Fire TV Remote (Alexa)',
    brand: 'Amazon',
    category: 'streaming',
    tagline: 'Thin black remote with a round navigation ring at the top. Alexa voice built in.',
    buttonCount: 'About 9 buttons on the basic model, 13 on the Pro with backlit keys',
    hasMic: true,
    hasTouchpad: false,
    image: 'Amazon Fire TV Remote — slim black wand with a round navigation disc at the top and volume rocker on the right side',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns your TV on and off. Only works after a one-time setup walkthrough.' },
          {
            name: 'Microphone (Alexa)',
            icon: Mic,
            purpose: 'Press and hold, then say what you want: "Play Blue Bloods on Paramount+" or "Show me news."',
            confusion: 'Tap-release does nothing. You have to HOLD the button the whole time you are speaking, like a walkie-talkie.',
          },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Navigation ring (up / down / left / right)', icon: CircleDot, purpose: 'The big round disc — moves the highlight. The outer ring is one piece of plastic but has four press zones.' },
          { name: 'Select (center)', icon: CheckCircle2, purpose: 'Picks what you have highlighted.' },
          { name: 'Back', icon: ArrowLeft, purpose: 'Goes back one screen.' },
          { name: 'Home', icon: Home, purpose: 'Jumps to the Fire TV home screen.' },
          { name: 'Menu (three lines)', icon: Menu, purpose: 'Opens options for whatever is on screen — similar to Roku\'s * button.' },
        ],
      },
      {
        region: 'Playback',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Rewind / Fast-forward', icon: SkipBack, purpose: 'Skips back or ahead about 10 seconds.' },
          { name: 'Play / Pause', icon: Play, purpose: 'One button, two jobs.' },
        ],
      },
      {
        region: 'Volume & power (Pro and newer)',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / − (side rocker)', icon: Volume2, purpose: 'Controls your TV or soundbar volume once paired.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silences TV audio.' },
          { name: 'Channel up/down (Pro only)', icon: ArrowUp, purpose: 'Flips live TV channels if you use Fire TV\'s live guide or an antenna.' },
        ],
      },
    ],
    proTips: [
      { title: 'Hold Home for 5 seconds', body: 'Opens the quick menu — Sleep, Settings, Mirror Phone. Fastest way to put the device to sleep without fighting with the TV.' },
      { title: 'Press Home twice', body: 'Some Fire TVs jump straight to your Apps row — handy if your Home screen is cluttered.' },
    ],
    hidden: [
      { title: 'Voice opens apps by name', body: 'Press and hold the microphone and say "Open Hulu" — it launches the app without any menu digging.' },
      { title: 'Find my remote', body: 'On the Fire TV app on your phone, tap the remote icon → menu → "Find remote." The remote beeps for 30 seconds.' },
    ],
  },
  {
    id: 'apple-tv',
    name: 'Apple TV Siri Remote (3rd gen)',
    brand: 'Apple',
    category: 'streaming',
    tagline: 'Short aluminum wand with a touch-sensitive ring at the top. Minimal buttons on purpose.',
    buttonCount: '6 buttons plus a touch ring',
    hasMic: true,
    hasTouchpad: true,
    image: 'Apple TV Siri Remote — silver aluminum remote with a circular touch ring at the top and six clearly labeled buttons below',
    regions: [
      {
        region: 'Top',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          {
            name: 'Touch ring (Clickpad)',
            icon: CircleDot,
            purpose: 'Slide your thumb around the ring to scroll. Click the edges (up, down, left, right) for arrow keys. Click the center to select.',
            confusion: 'People do not realize the center is clickable. Press it like a button — it will click.',
          },
          { name: 'Siri (side button)', icon: Mic, purpose: 'On the RIGHT SIDE of the remote. Press and hold to talk to Siri.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Back', icon: ArrowLeft, purpose: 'Goes back one screen. Hold to go to Home.' },
          { name: 'TV / Home', icon: Tv, purpose: 'One press goes to the Apple TV app. Two presses show all open apps (like alt-tab on a computer).' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silences your TV. Works with most TVs after first-run setup.' },
          { name: 'Play / Pause', icon: Play, purpose: 'Pauses or plays the current video or music.' },
        ],
      },
      {
        region: 'Power & volume',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Power (top right corner)', icon: Power, purpose: 'Turns your TV on and off.' },
          { name: 'Volume + / − (side rocker)', icon: Volume2, purpose: 'On the RIGHT SIDE. Controls your TV volume.' },
        ],
      },
    ],
    proTips: [
      { title: 'Circle your thumb around the ring', body: 'Fast-forward and rewind scrub. Slide clockwise to go forward, counter-clockwise to go back.' },
      { title: 'Double-press TV button', body: 'Shows every open app. Swipe left/right on the ring to pick one. Swipe up to close an app (same as on an iPhone).' },
    ],
    hidden: [
      { title: 'Siri gets oddly specific', body: 'Ask things like "Skip forward 90 seconds" or "What did she say?" — Siri jumps back 15 seconds and turns on captions for a moment.' },
      { title: 'Control Center on the remote', body: 'Hold the TV button for 2 seconds — opens Control Center for quick Sleep, user switch, and audio output.' },
    ],
  },
  {
    id: 'chromecast',
    name: 'Chromecast with Google TV Remote',
    brand: 'Google',
    category: 'streaming',
    tagline: 'Small oval remote in chalk, charcoal, or sky blue. Google Assistant button built in.',
    buttonCount: 'About 10 buttons',
    hasMic: true,
    hasTouchpad: false,
    image: 'Chromecast with Google TV Remote — rounded oval remote with a navigation disc and two colored shortcut buttons for YouTube and Netflix',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns your TV on and off after one-time setup.' },
          { name: 'Assistant (colorful dot)', icon: Mic, purpose: 'Press and HOLD, then speak. Say "Open YouTube" or "Play something funny."' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Navigation disc', icon: CircleDot, purpose: 'Up / down / left / right — moves the highlight.' },
          { name: 'OK (center)', icon: CheckCircle2, purpose: 'Selects what you have highlighted.' },
          { name: 'Back', icon: ArrowLeft, purpose: 'Goes back one screen.' },
          { name: 'Home', icon: Home, purpose: 'Returns to the Google TV home screen.' },
        ],
      },
      {
        region: 'Volume & inputs',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / − (side rocker)', icon: Volume2, purpose: 'Controls your TV audio.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silence the TV.' },
          { name: 'Input / Source (on newer models)', icon: Cable, purpose: 'Switches the TV to another HDMI input without hunting for the TV remote.' },
          { name: 'YouTube shortcut', icon: Play, purpose: 'Jumps straight to YouTube.' },
          { name: 'Netflix shortcut', icon: Play, purpose: 'Jumps straight to Netflix.' },
        ],
      },
    ],
    proTips: [
      { title: 'Long-press Home', body: 'Some firmware versions open a user-switch menu — handy in a household with separate Google accounts.' },
      { title: 'Back is also "up one level"', body: 'Instead of mashing Home, use Back to climb out of a menu one step at a time.' },
    ],
    hidden: [
      { title: 'Ask the Assistant to dim lights', body: 'If you have Google Home smart lights, the remote controls them too. "Hey Google, dim the living room."' },
      { title: 'Press Assistant without the TV on', body: 'The remote still answers questions — it uses the Chromecast and TV speakers, but you can ask it things while the screen is off.' },
    ],
  },

  /* SMART TV REMOTES ─────────────────────────────────────────── */
  {
    id: 'samsung-smart',
    name: 'Samsung Smart Remote (One Remote)',
    brand: 'Samsung',
    category: 'smart-tv',
    tagline: 'Thin black or silver wand. Samsung\'s goal: one remote for everything plugged into the TV.',
    buttonCount: 'About 15 buttons',
    hasMic: true,
    hasTouchpad: false,
    image: 'Samsung Smart Remote (One Remote) — slim black wand with a circular navigation ring and colored shortcut buttons',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns the TV on and off.' },
          { name: 'Microphone (Bixby / voice)', icon: Mic, purpose: 'Press and hold to talk. Search for shows, change inputs, ask for weather.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Four-way directional ring', icon: CircleDot, purpose: 'Moves the on-screen highlight.' },
          { name: 'Select (center)', icon: CheckCircle2, purpose: 'Picks the highlighted item.' },
          { name: 'Return', icon: ArrowLeft, purpose: 'Back one screen.' },
          { name: 'Home (house icon)', icon: Home, purpose: 'Opens the Smart Hub (Samsung\'s home screen).' },
        ],
      },
      {
        region: 'Playback & colored buttons',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Play / Pause', icon: Play, purpose: 'Plays or pauses whatever is on screen.' },
          {
            name: 'Colored buttons (red / green / yellow / blue)',
            icon: Palette,
            purpose: 'Leftover from European broadcast TV. In the US they mostly open menu shortcuts inside Samsung apps.',
            confusion: 'These are rarely needed in the US. Do not worry if you never press them.',
          },
        ],
      },
      {
        region: 'Volume & channel',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / − (side rocker — press center to mute)', icon: Volume2, purpose: 'Controls sound. Click the middle of the rocker to mute.' },
          { name: 'Channel up/down (opposite rocker)', icon: ArrowUp, purpose: 'Changes antenna channels. Press the center for a channel list.' },
          { name: 'Apps shortcut buttons (Netflix, Prime, Disney+, Samsung TV+)', icon: Tv, purpose: 'Jump into the labeled app in one press.' },
        ],
      },
    ],
    proTips: [
      { title: 'Press and hold Home (house icon)', body: 'Opens the TV settings menu directly — much faster than scrolling through Smart Hub.' },
      { title: 'Press mic twice', body: 'Some Samsung TVs do "live captions" on voice — ask the TV to turn on captions without digging through settings.' },
    ],
    hidden: [
      { title: 'Ambient mode', body: 'A little cloud or picture icon shows beautiful artwork when the TV is "off." Press the Home button and scroll left to find it.' },
      { title: 'Universal remote setup for your cable box', body: 'Settings → General → External Device Manager → Universal Remote Setup. Samsung walks you through pairing the cable box so you stop using two remotes.' },
    ],
  },
  {
    id: 'lg-magic',
    name: 'LG Magic Remote',
    brand: 'LG',
    category: 'smart-tv',
    tagline: 'Curved white remote with a scroll wheel and a pointer you aim at the screen.',
    buttonCount: 'About 20 buttons plus a point-and-click pointer',
    hasMic: true,
    hasTouchpad: false,
    image: 'LG Magic Remote — curved white remote with a scroll wheel in the middle and a pointer that appears on screen when you aim the remote at the TV',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns the TV on and off.' },
          { name: 'Microphone', icon: Mic, purpose: 'Press and hold to ask for shows or settings.' },
        ],
      },
      {
        region: 'Navigation — unique to LG',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          {
            name: 'Pointer (aim the remote at the TV)',
            icon: CircleDot,
            purpose: 'Shake the remote and a cursor appears on the TV. Move it around like a mouse. Click the scroll wheel to select.',
            confusion: 'If the pointer "dances" or disappears, rest the remote flat for two seconds to re-calibrate.',
          },
          { name: 'Scroll wheel (click to select)', icon: CircleDot, purpose: 'Scrolls long lists. Click down to select.' },
          { name: 'Back', icon: ArrowLeft, purpose: 'Goes back one screen.' },
          { name: 'Home (house icon)', icon: Home, purpose: 'Opens the LG home bar at the bottom of the screen.' },
        ],
      },
      {
        region: 'Volume & channel',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / −', icon: Volume2, purpose: 'Controls TV sound.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silences TV audio.' },
          { name: 'Channel up / down', icon: ArrowUp, purpose: 'Flips antenna channels.' },
          { name: 'Input', icon: Cable, purpose: 'Switches between HDMI 1, HDMI 2, antenna, etc.' },
        ],
      },
      {
        region: 'Streaming shortcuts',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Netflix, Prime Video, Disney+ (dedicated buttons)', icon: Tv, purpose: 'Launch the app in one press. Cannot be remapped.' },
          { name: 'Number buttons', icon: Hash, purpose: 'Type a channel number directly for antenna or cable.' },
        ],
      },
    ],
    proTips: [
      { title: 'Press and hold 7 or 8', body: 'Some LG TVs have a hidden shortcut — hold a number for 3 seconds to launch that app as a shortcut.' },
      { title: 'Accessibility ring', body: 'Press and hold Mute for 3 seconds — turns audio descriptions on and off.' },
    ],
    hidden: [
      { title: 'Use your voice for typing', body: 'On any on-screen keyboard, press the mic and dictate the text instead of picking letters one at a time.' },
      { title: 'Point-and-click works in apps too', body: 'Inside Netflix and YouTube the pointer still moves — you can click thumbnails directly like a mouse.' },
    ],
  },
  {
    id: 'sony-google-tv',
    name: 'Sony Google TV Remote',
    brand: 'Sony',
    category: 'smart-tv',
    tagline: 'Matte black, backlit keys on newer Bravia models. Google Assistant mic on top.',
    buttonCount: 'About 16 buttons',
    hasMic: true,
    hasTouchpad: false,
    image: 'Sony Bravia Google TV Remote — matte black remote with Google Assistant mic at the top and shortcut buttons along the bottom',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns the TV on and off.' },
          { name: 'Google Assistant (mic)', icon: Mic, purpose: 'Press and hold to search or control the TV by voice.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Navigation ring', icon: CircleDot, purpose: 'Up / down / left / right.' },
          { name: 'OK (center)', icon: CheckCircle2, purpose: 'Select.' },
          { name: 'Back', icon: ArrowLeft, purpose: 'Back one screen.' },
          { name: 'Home', icon: Home, purpose: 'Opens the Google TV home screen.' },
          { name: 'Action Menu (three dots)', icon: Menu, purpose: 'Opens picture and sound settings for the current input.' },
        ],
      },
      {
        region: 'Playback & inputs',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Play / Pause', icon: Play, purpose: 'Plays or pauses video.' },
          { name: 'Channel + / −', icon: ArrowUp, purpose: 'Changes antenna/cable channels.' },
          { name: 'TV (live TV)', icon: Tv, purpose: 'Jumps to live TV if you have an antenna or cable box connected.' },
          { name: 'Input', icon: Cable, purpose: 'Switches HDMI sources.' },
          { name: 'Netflix / Disney+ / YouTube shortcuts', icon: Play, purpose: 'One-press app launch.' },
        ],
      },
      {
        region: 'Volume',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / −', icon: Volume2, purpose: 'Adjusts TV or soundbar sound.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silence.' },
        ],
      },
    ],
    proTips: [
      { title: 'Find-my-remote', body: 'The Google TV home screen has a "Find remote" option — press the hidden button under the Sony logo on the TV itself to make the remote beep.' },
      { title: 'Action Menu is a shortcut', body: 'Tap the three-dot button while watching anything for picture mode, sleep timer, and audio options without leaving the show.' },
    ],
    hidden: [
      { title: 'Backlit keys come on when you move the remote', body: 'Newer models use a motion sensor. No need to hunt for a light button — it lights up on its own when you pick it up.' },
      { title: 'Dolby Vision auto-switch', body: 'Voice-search for a Dolby Vision title and the TV switches picture mode automatically if supported.' },
    ],
  },
  {
    id: 'vizio-v',
    name: 'Vizio V-Remote (SmartCast)',
    brand: 'Vizio',
    category: 'smart-tv',
    tagline: 'Basic stick remote with app shortcuts and a SmartCast home button.',
    buttonCount: 'About 18 buttons',
    hasMic: false,
    hasTouchpad: false,
    image: 'Vizio V-Remote — long black wand with number pad at the bottom and streaming app shortcut buttons in the middle',
    regions: [
      {
        region: 'Power & home',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns the TV on and off.' },
          { name: 'V (SmartCast Home)', icon: Home, purpose: 'Opens SmartCast — Vizio\'s smart-TV home screen.' },
          { name: 'Input', icon: Cable, purpose: 'Switches between HDMI 1, HDMI 2, antenna, etc.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Directional pad', icon: CircleDot, purpose: 'Moves the highlight on screen.' },
          { name: 'OK', icon: CheckCircle2, purpose: 'Select.' },
          { name: 'Back', icon: ArrowLeft, purpose: 'Back one screen.' },
          { name: 'Exit', icon: ArrowLeft, purpose: 'Closes menus and returns to what you were watching.' },
          { name: 'Menu', icon: Menu, purpose: 'Opens the TV settings menu.' },
        ],
      },
      {
        region: 'Channel & number pad',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Number buttons 0–9', icon: Hash, purpose: 'Direct channel entry on antenna TV.' },
          { name: 'Dash ( − )', icon: Circle, purpose: 'Used for sub-channels on antenna TV, like 6-1 or 11-2.' },
          { name: 'Channel + / −', icon: ArrowUp, purpose: 'Next / previous channel.' },
          { name: 'Last / Prev.Ch', icon: RefreshCw, purpose: 'Jumps back to the previous channel you were on.' },
        ],
      },
      {
        region: 'Volume & shortcuts',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / −', icon: Volume2, purpose: 'Adjust sound.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silence.' },
          { name: 'Netflix, Prime, Vudu, Crackle, WatchFree+ shortcuts', icon: Tv, purpose: 'One-press app launch.' },
        ],
      },
    ],
    proTips: [
      { title: 'Press and hold Input', body: 'Some Vizio TVs rename inputs based on what they detect (Xbox, Roku, etc.) when you hold Input for 5 seconds.' },
      { title: 'Use the SmartCast app on your phone', body: 'If a button sticks or breaks, install the Vizio SmartCast Mobile app — it works as a full remote with a keyboard.' },
    ],
    hidden: [
      { title: 'SmartCast lets you cast from your phone', body: 'Press V → Cast icon. Photos, YouTube, or music from your phone show up on the TV without any setup.' },
      { title: 'Sleep timer', body: 'Menu → Timers → Sleep Timer. TV turns off on its own — handy for falling asleep watching the news.' },
    ],
  },

  /* CABLE / SATELLITE ────────────────────────────────────────── */
  {
    id: 'xfinity-xr15',
    name: 'Xfinity XR15 Voice Remote',
    brand: 'Xfinity (Comcast)',
    category: 'cable',
    tagline: 'The newer Xfinity remote with a mic button and fewer colored buttons.',
    buttonCount: 'About 20 buttons',
    hasMic: true,
    hasTouchpad: false,
    image: 'Xfinity XR15 Voice Remote — black wand with a circular navigation pad, microphone on top, and number keys along the bottom',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power (top left)', icon: Power, purpose: 'Turns your TV and Xfinity box on and off together.' },
          { name: 'Microphone (top center)', icon: Mic, purpose: 'Press and hold and say "HBO", "PBS Kids", or "Find a scary movie."' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Directional pad', icon: CircleDot, purpose: 'Up / down / left / right to move around menus.' },
          { name: 'OK (center)', icon: CheckCircle2, purpose: 'Select.' },
          { name: 'Xfinity (diamond-shaped)', icon: Home, purpose: 'Opens the Xfinity main menu — "Home" for cable.' },
          { name: 'Last (curved arrow)', icon: RefreshCw, purpose: 'Jumps back to the previous channel.' },
          { name: 'Info', icon: Info, purpose: 'Shows details about the current show — cast, rating, how much time is left.' },
          { name: 'Guide', icon: Menu, purpose: 'Opens the live TV grid guide.' },
          { name: 'Exit', icon: ArrowLeft, purpose: 'Closes menus and returns to watching.' },
        ],
      },
      {
        region: 'Playback',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Play / Pause', icon: Play, purpose: 'Pause live TV (Xfinity auto-records the current channel so you can rewind).' },
          { name: 'Rewind / Fast-forward', icon: SkipBack, purpose: 'Each press moves another "speed" — up to 4× on live TV or DVR recordings.' },
          { name: 'Record (red circle)', icon: CircleDot, purpose: 'Records the show you are watching. Press twice to record the whole series.' },
        ],
      },
      {
        region: 'Volume & channel',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / −', icon: Volume2, purpose: 'Adjusts your TV volume — not the cable box.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silence.' },
          { name: 'Channel up / down', icon: ArrowUp, purpose: 'Changes channels.' },
          { name: 'Number pad 0–9', icon: Hash, purpose: 'Type a channel number directly.' },
        ],
      },
    ],
    proTips: [
      { title: 'Voice works for apps too', body: '"Open Netflix" or "Open YouTube" launches the app through Xfinity — no need to switch inputs.' },
      { title: 'Hold the mic and say "captions on"', body: 'Turns on closed captions without digging through menus.' },
    ],
    hidden: [
      { title: 'Voice Guidance for low vision', body: 'Say "Xfinity Voice Guidance on" — the remote and menus start speaking out loud.' },
      { title: 'Accessibility shortcut', body: 'Press and hold A on the side (some models) for a quick toggle of high-contrast captions.' },
    ],
  },
  {
    id: 'spectrum-clikr',
    name: 'Spectrum ClikR-5 Universal Remote',
    brand: 'Spectrum (Charter)',
    category: 'cable',
    tagline: 'The newer gray Spectrum remote that also runs your TV and audio.',
    buttonCount: 'About 24 buttons',
    hasMic: false,
    hasTouchpad: false,
    image: 'Spectrum ClikR-5 remote — gray wand with labeled device buttons (TV, DVD, AUX) at the top and a full number pad at the bottom',
    regions: [
      {
        region: 'Device keys',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          {
            name: 'TV / CBL / AUX / DVD',
            icon: Cable,
            purpose: 'Tells the remote which device your next press controls. Press TV first to control the TV, CBL for the cable box, and so on.',
            confusion: 'If volume is not working, you probably forgot to press TV first — the remote is still in CBL mode.',
          },
          { name: 'Power', icon: Power, purpose: 'Turns on whichever device you picked with the device key above.' },
          { name: 'All Power (if present)', icon: Power, purpose: 'Turns everything off at once.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Arrow keys', icon: CircleDot, purpose: 'Move around menus.' },
          { name: 'OK (center)', icon: CheckCircle2, purpose: 'Select.' },
          { name: 'Menu / Guide / Info / Exit', icon: Menu, purpose: 'Same as other cable remotes.' },
          { name: 'Last', icon: RefreshCw, purpose: 'Previous channel.' },
        ],
      },
      {
        region: 'Playback & DVR',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Play / Pause / Stop', icon: Play, purpose: 'For DVR recordings and live pause.' },
          { name: 'Record (red)', icon: CircleDot, purpose: 'Record the current show.' },
        ],
      },
      {
        region: 'Volume & channel',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / −', icon: Volume2, purpose: 'Controls TV sound even when remote is in CBL mode (pre-configured that way).' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silence.' },
          { name: 'Channel up / down', icon: ArrowUp, purpose: 'Change channels.' },
          { name: 'Number pad 0–9', icon: Hash, purpose: 'Direct channel entry.' },
        ],
      },
    ],
    proTips: [
      { title: 'Re-pair if volume quits', body: 'Hold TV and OK for 3 seconds — the TV key light blinks twice. Then enter your TV\'s code from the Spectrum code sheet.' },
      { title: 'Contact Spectrum for a free replacement', body: 'If the remote breaks, call Spectrum — they mail a free one or have it at any Spectrum store.' },
    ],
    hidden: [
      { title: 'Favorites list', body: 'Hold "FAV" to set the current channel as a favorite, then press FAV to scroll only favorites.' },
      { title: 'Keypad-lock', body: 'Keep the dog or a toddler from changing the channel — Menu → Parental Controls → Lock.' },
    ],
  },
  {
    id: 'directv',
    name: 'DIRECTV Genie Remote (RC73/RC71)',
    brand: 'DIRECTV',
    category: 'cable',
    tagline: 'White or gray remote with a clear mode switch on top.',
    buttonCount: 'About 26 buttons',
    hasMic: false,
    hasTouchpad: false,
    image: 'DIRECTV Genie remote — white and gray wand with a four-position slider switch at the top for TV / DIRECTV / AV1 / AV2',
    regions: [
      {
        region: 'Device switch & power',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          {
            name: 'Mode slider (TV / DIRECTV / AV1 / AV2)',
            icon: Cable,
            purpose: 'A physical slider at the top. Slide to "TV" to control your TV, "DIRECTV" for the satellite box, AV1 / AV2 for DVD or soundbar.',
            confusion: 'The slider is small and easy to bump by accident — if nothing is working, check the slider position first.',
          },
          { name: 'Power (top right)', icon: Power, purpose: 'Turns on whichever device the slider points at.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silences the TV.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Directional pad', icon: CircleDot, purpose: 'Move around the on-screen guide.' },
          { name: 'Select', icon: CheckCircle2, purpose: 'Picks the highlighted item.' },
          { name: 'Menu / Guide / List / Info', icon: Menu, purpose: 'Menu = settings, Guide = live channel grid, List = your recordings, Info = show details.' },
          { name: 'Back / Exit', icon: ArrowLeft, purpose: 'Back one screen or exit menus.' },
        ],
      },
      {
        region: 'Playback',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Play / Pause / Stop / Record', icon: Play, purpose: 'Standard DVR controls.' },
          { name: 'Rewind / Fast-forward', icon: SkipBack, purpose: 'Speed steps up each press.' },
          { name: 'Skip back (−) / Skip forward (+)', icon: ArrowLeft, purpose: 'Jumps 6 seconds back or 30 seconds forward — perfect for commercial skipping.' },
        ],
      },
      {
        region: 'Channel & colors',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Channel up / down', icon: ArrowUp, purpose: 'Changes channels.' },
          { name: 'Prev / Last', icon: RefreshCw, purpose: 'Previous channel.' },
          { name: 'Number pad', icon: Hash, purpose: 'Direct channel number entry.' },
          { name: 'Colored buttons (red / green / yellow / blue)', icon: Palette, purpose: 'Shortcuts inside DIRECTV\'s on-screen guide and DVR — for example, yellow often deletes a recording.' },
        ],
      },
    ],
    proTips: [
      { title: 'Hold Select for 3 seconds', body: 'Opens the closed-captions toggle directly — no menu digging.' },
      { title: 'Set a dim light with MUTE + SELECT', body: 'Some models — hold these two together to adjust how bright the remote\'s backlight shines.' },
    ],
    hidden: [
      { title: 'Backlit keys on newer Genie remotes', body: 'Pick up the remote and keys light up. No light button needed.' },
      { title: '"DIRECTV" voice shortcut through Google Home', body: 'If you have a Google speaker, say "Hey Google, pause my DIRECTV" — it works once you link your account.' },
    ],
  },
  {
    id: 'dish-hopper',
    name: 'DISH Hopper 54.0 Voice Remote',
    brand: 'DISH',
    category: 'cable',
    tagline: 'Curved gray remote with a mic button and a "Hopper" Home key.',
    buttonCount: 'About 20 buttons',
    hasMic: true,
    hasTouchpad: false,
    image: 'DISH Hopper voice remote — curved gray wand with microphone on top and a Hopper menu button in the center',
    regions: [
      {
        region: 'Power & voice',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns the TV and Hopper on.' },
          { name: 'Microphone', icon: Mic, purpose: 'Press and hold to say a channel or show name.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Directional pad', icon: CircleDot, purpose: 'Move around menus.' },
          { name: 'Select', icon: CheckCircle2, purpose: 'Picks the highlighted item.' },
          { name: 'Home / Hopper (blue hexagon)', icon: Home, purpose: 'Opens the Hopper main menu.' },
          { name: 'Guide / DVR / Info / Options', icon: Menu, purpose: 'Standard cable navigation buttons.' },
          { name: 'Back', icon: ArrowLeft, purpose: 'Back one screen.' },
        ],
      },
      {
        region: 'Playback',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Play / Pause / Stop / Record', icon: Play, purpose: 'DVR controls.' },
          { name: 'Skip forward / back', icon: ArrowLeft, purpose: 'Jumps 30 seconds forward, 10 seconds back by default.' },
        ],
      },
      {
        region: 'Volume & channel',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / −', icon: Volume2, purpose: 'Controls TV sound.' },
          { name: 'Mute', icon: VolumeX, purpose: 'Silence.' },
          { name: 'Channel up / down', icon: ArrowUp, purpose: 'Change channels.' },
          { name: 'Number pad', icon: Hash, purpose: 'Type a channel number.' },
        ],
      },
    ],
    proTips: [
      { title: 'Say "Show me kids shows"', body: 'The Hopper filters live and on-demand in one voice command.' },
      { title: 'Hold the blue Hopper button', body: 'Opens the Quick Menu — a shorter one-screen summary of recordings and favorites.' },
    ],
    hidden: [
      { title: 'PrimeTime Anytime', body: 'Hopper records the major networks every night automatically (ABC, NBC, CBS, Fox). Look for a "PrimeTime Anytime" row you did not know existed.' },
      { title: 'AutoHop', body: 'Skip commercials on recorded prime-time network shows with one press. Ask DISH support to enable it if you do not see the option.' },
    ],
  },

  /* UNIVERSAL ─────────────────────────────────────────────────── */
  {
    id: 'logitech-harmony',
    name: 'Logitech Harmony (legacy)',
    brand: 'Logitech',
    category: 'universal',
    tagline: 'Hub-based universal remote. Discontinued in 2021 — still works with existing accounts.',
    buttonCount: 'Varies by model — Harmony 665, Elite, Companion all differ',
    hasMic: false,
    hasTouchpad: false,
    image: 'Logitech Harmony remote with a small color screen at the top showing Activities like "Watch TV" and "Listen to Music"',
    regions: [
      {
        region: 'Activities (the Harmony idea)',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          {
            name: 'Activity buttons (Watch TV, Listen to Music, etc.)',
            icon: Play,
            purpose: 'One press turns on every device needed for that activity. "Watch TV" turns on the TV, cable box, and soundbar in the right order.',
            confusion: 'If you press individual device keys (like Power) during an Activity, the remote gets confused. Always press "Off" (house icon) before starting a new Activity.',
          },
          { name: 'Off (house)', icon: Power, purpose: 'Ends the current Activity and turns everything off.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Directional pad + OK', icon: CircleDot, purpose: 'Standard navigation.' },
          { name: 'Menu / Guide / Info / Exit', icon: Menu, purpose: 'Tied to whichever device is active.' },
        ],
      },
      {
        region: 'Volume & playback',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / − / Mute', icon: Volume2, purpose: 'Sends volume to whichever device the active Activity says handles audio.' },
          { name: 'Play / Pause / Rewind / FF', icon: Play, purpose: 'Sent to the active playback device.' },
        ],
      },
    ],
    proTips: [
      { title: 'MyHarmony app still works', body: 'The desktop software and mobile app continue to function for current Harmony owners even though Logitech stopped selling the remotes.' },
      { title: 'Hub-based remotes work through walls', body: 'Unlike infrared, the Harmony hub talks to devices using RF — you can hide all the gear in a closet.' },
    ],
    hidden: [
      { title: 'If your Harmony dies, the Hub app is a backup', body: 'Install "Harmony" on your phone — it becomes a full remote if you lose the physical one.' },
      { title: 'Smart home control', body: 'Harmony hubs can control Hue lights, Nest thermostat, and other smart gear — set up under Devices → Add Device → Smart Home.' },
    ],
  },
  {
    id: 'ge-universal',
    name: 'GE Universal Remote (4-device / 6-device / 8-device)',
    brand: 'GE / Jasco',
    category: 'universal',
    tagline: 'The cheap universal remote from Walmart, Target, and drug stores. Runs on a code book.',
    buttonCount: 'About 30 buttons',
    hasMic: false,
    hasTouchpad: false,
    image: 'GE Universal Remote — black remote with labeled device keys (TV, DVD, CBL, AUD) along the top and a full number pad',
    regions: [
      {
        region: 'Device keys',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'TV / DVD / CBL / STB / AUD', icon: Cable, purpose: 'Picks which device the next press will control. Press one before anything else.' },
          { name: 'Setup (small button)', icon: Settings, purpose: 'Hold it until the red light stays on — that means you are in programming mode.' },
          { name: 'Power', icon: Power, purpose: 'Turns on the device the device key above points to.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Directional pad + OK', icon: CircleDot, purpose: 'Standard menu navigation on whichever device is active.' },
          { name: 'Menu / Guide / Info / Exit', icon: Menu, purpose: 'Works on devices that support these commands.' },
        ],
      },
      {
        region: 'Volume & channel',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / − / Mute', icon: Volume2, purpose: 'Default sends volume to the TV even when another device is selected.' },
          { name: 'Channel + / −', icon: ArrowUp, purpose: 'Changes channels on cable/antenna.' },
          { name: 'Number pad', icon: Hash, purpose: 'Direct channel entry.' },
        ],
      },
      {
        region: 'Smart features',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          {
            name: 'Smart / Apps (Roku-ish icons)',
            icon: Play,
            purpose: 'On the 7+ device GE models, dedicated buttons for Netflix, Hulu, Prime — but only work if your TV supports them and is set up correctly.',
            confusion: 'If "Netflix" does nothing, it is because your TV does not respond to that specific infrared command. The key did not break.',
          },
        ],
      },
    ],
    proTips: [
      { title: 'Keep the code booklet', body: 'The paper booklet that came with the remote lists brand codes. Without it, you\'re stuck using Auto Code Search — much slower.' },
      { title: 'If batteries die, the codes stay', body: 'The GE remote remembers your programming even when batteries are pulled, up to about 10 minutes. Swap them quickly.' },
    ],
    hidden: [
      { title: 'Direct Code vs. Auto Code Search', body: 'Direct is fastest if you know the 3- or 4-digit code for your brand. Auto Search tries codes one at a time — works but takes up to 20 minutes.' },
      { title: 'Learning mode (not on all models)', body: 'Some GE remotes can learn from another working remote — look for a "Learn" button or "Key Magic" feature in the manual.' },
    ],
  },
  {
    id: 'rca-universal',
    name: 'RCA Universal Remote (RCR series)',
    brand: 'RCA',
    category: 'universal',
    tagline: 'Similar to GE — black slab remote with a brand code book.',
    buttonCount: 'About 30 buttons',
    hasMic: false,
    hasTouchpad: false,
    image: 'RCA RCR universal remote — black rectangle with device keys on top and a number pad',
    regions: [
      {
        region: 'Device keys',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'TV / VCR / DVD / SAT·CBL / AUX', icon: Cable, purpose: 'Pick the device to control before any other button.' },
          { name: 'Code Search', icon: Search, purpose: 'Hold until the red light stays on — now you can enter a brand code.' },
          { name: 'Power', icon: Power, purpose: 'Turns on the selected device.' },
        ],
      },
      {
        region: 'Navigation',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Directional pad + OK', icon: CircleDot, purpose: 'Standard navigation.' },
          { name: 'Menu / Guide / Info / Exit', icon: Menu, purpose: 'Send the common menu commands.' },
        ],
      },
      {
        region: 'Volume & channel',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / − / Mute', icon: Volume2, purpose: 'Volume default goes to the TV.' },
          { name: 'Channel + / − / Number pad', icon: Hash, purpose: 'Channel selection.' },
        ],
      },
    ],
    proTips: [
      { title: 'Quick-find code', body: 'RCA\'s support site at rcahelp.com has a code finder — type your TV brand and model and it gives the exact code to enter.' },
      { title: 'Volume lock', body: 'Most RCA remotes let you lock the volume to the TV so it stays on the TV even when you switch to cable box — Setup → 993 → TV. Check the manual.' },
    ],
    hidden: [
      { title: 'Punch-through commands', body: 'Some models keep Channel Up / Down sent to the cable box even when the remote is set to TV — this is by design.' },
      { title: 'LED flash indicates errors', body: 'If the red light flashes 4 times during setup, your code was wrong. Try the next code in the list.' },
    ],
  },
  {
    id: 'inteset-422',
    name: 'Inteset INT-422 4-in-1 Universal',
    brand: 'Inteset',
    category: 'universal',
    tagline: 'The streamer-friendly universal remote — has built-in codes for Apple TV, Roku, Fire TV, and Nvidia Shield.',
    buttonCount: 'About 40 buttons',
    hasMic: false,
    hasTouchpad: false,
    image: 'Inteset INT-422 4-in-1 remote — medium-size black remote with streaming device shortcut buttons and a full transport row',
    regions: [
      {
        region: 'Device keys',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'TV / STR / AUX / AMP', icon: Cable, purpose: 'STR is labeled "Streamer" — pre-configured for Apple TV, Roku, Fire TV, or Shield.' },
          { name: 'Power', icon: Power, purpose: 'Turns the selected device on or off.' },
          { name: 'All Off', icon: Power, purpose: 'Powers everything down in one press after setup.' },
        ],
      },
      {
        region: 'Streaming-specific',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Home / Menu / Back', icon: Home, purpose: 'Mapped to the correct streamer button no matter which streamer you use.' },
          { name: 'Instant replay / jump forward', icon: ArrowLeft, purpose: 'Some streamers support 10-second jumps — Inteset maps these to the bottom of the remote.' },
        ],
      },
      {
        region: 'Volume & number',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'Volume + / − / Mute', icon: Volume2, purpose: 'Sent to your TV or AVR by default.' },
          { name: 'Number pad', icon: Hash, purpose: 'For antenna or cable channels, and for entering codes during setup.' },
        ],
      },
    ],
    proTips: [
      { title: 'Great for Apple TV non-touch users', body: 'If you dislike the Apple TV\'s touch ring, the INT-422 gives you real up / down / left / right buttons while still controlling the Apple TV.' },
      { title: 'Learning feature', body: 'Can "learn" commands from another remote if a code is missing. Point the two remotes nose-to-nose and follow the manual.' },
    ],
    hidden: [
      { title: 'Macros', body: 'Chain up to 15 button presses into one key — press "A" and the remote runs your whole "start movie night" sequence.' },
      { title: 'Backlit on newer revisions', body: 'Shake or tap any key and the whole remote lights up for a few seconds.' },
    ],
  },

  /* SOUNDBAR / ACCESSORY ─────────────────────────────────────── */
  {
    id: 'bose-soundbar',
    name: 'Bose Soundbar Remote (Universal)',
    brand: 'Bose',
    category: 'soundbar',
    tagline: 'Slim aluminum stick that came with Bose Soundbar 500, 700, 900 — also runs your TV and cable box.',
    buttonCount: 'About 12 buttons',
    hasMic: false,
    hasTouchpad: false,
    image: 'Bose soundbar remote — slim silver wand with power, source, and Bose shortcut buttons',
    regions: [
      {
        region: 'Power & source',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Power', icon: Power, purpose: 'Turns on the soundbar — and the TV and cable box once set up.' },
          { name: 'TV / BT (Bluetooth) / other source', icon: Cable, purpose: 'Picks where sound comes from — HDMI from the TV, Bluetooth from your phone, Aux, etc.' },
        ],
      },
      {
        region: 'Navigation & dialog',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Volume + / − / Mute', icon: Volume2, purpose: 'Controls soundbar volume.' },
          {
            name: 'Dialogue Mode / Voice (on Bose 700/900)',
            icon: Mic,
            purpose: 'Boosts the center channel so conversations in movies and news become clearer.',
            confusion: 'This is not a voice-search button. It is a built-in audio setting, not a microphone.',
          },
          { name: 'Bluetooth pair (press and hold BT)', icon: Speaker, purpose: 'Connect your phone to the soundbar for music.' },
        ],
      },
      {
        region: 'Presets (numbered 1–6 on some models)',
        tint: 'bg-purple-50 dark:bg-purple-950/20 border-purple-500/30',
        buttons: [
          { name: 'Presets 1–6', icon: Hash, purpose: 'Each preset can be a radio station or Spotify playlist — set up in the Bose Music app.' },
        ],
      },
    ],
    proTips: [
      { title: 'Set HDMI-CEC on your TV', body: 'Then your TV remote also controls soundbar volume, and you only need the Bose remote for source changes and presets.' },
      { title: 'The Bose Music app replaces the remote', body: 'If you lose it, the phone app is a full remote with more features than the physical stick.' },
    ],
    hidden: [
      { title: 'Voice control through Alexa', body: 'Bose 700/900 soundbars have Alexa built in. Say "Alexa, volume up" from across the room.' },
      { title: 'Latency mode', body: 'If sound is out of sync with the picture, the Bose Music app has a lip-sync slider — fix it without new cables.' },
    ],
  },
  {
    id: 'sonos',
    name: 'Sonos (no remote — uses the app or your TV remote)',
    brand: 'Sonos',
    category: 'soundbar',
    tagline: 'Sonos does not ship a remote. It relies on your TV remote (HDMI-CEC) and the Sonos app.',
    buttonCount: '0 physical buttons — app-controlled',
    hasMic: false,
    hasTouchpad: false,
    image: 'An iPhone running the Sonos app next to a Sonos Beam soundbar — no physical remote present',
    regions: [
      {
        region: 'Touch controls on the soundbar itself',
        tint: 'bg-red-50 dark:bg-red-950/20 border-red-500/30',
        buttons: [
          { name: 'Play / Pause (touch)', icon: Play, purpose: 'Tap the top of the soundbar to pause music.' },
          { name: 'Volume swipe', icon: Volume2, purpose: 'Swipe left or right across the top of the Sonos Beam to change volume.' },
          { name: 'Mic mute (Beam/Arc with voice)', icon: Mic, purpose: 'Physically disconnects the microphone when you do not want voice control active.' },
        ],
      },
      {
        region: 'Sonos app (your real remote)',
        tint: 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/30',
        buttons: [
          { name: 'Now Playing', icon: Play, purpose: 'Shows and controls whatever is playing — music from Apple Music, Spotify, radio, and TV audio.' },
          { name: 'Home → Rooms', icon: Home, purpose: 'Group and ungroup speakers. Pick which room plays what.' },
          { name: 'Settings → System → Sonos app', icon: Settings, purpose: 'Update firmware, run TrueTune room calibration, and set up a TV setup wizard.' },
        ],
      },
      {
        region: 'Your TV remote',
        tint: 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30',
        buttons: [
          { name: 'TV volume buttons control Sonos', icon: Volume2, purpose: 'Once HDMI-CEC is on, TV volume up / down directly controls the Sonos soundbar.' },
        ],
      },
    ],
    proTips: [
      { title: 'Check HDMI-CEC if the TV remote does not control Sonos', body: 'Each TV brand names HDMI-CEC differently — Samsung Anynet+, LG SimpLink, Sony Bravia Sync, Vizio CEC.' },
      { title: 'Use the TruePlay tuning', body: 'In the Sonos app, walk around the room with your phone while it plays a tone. The soundbar adjusts itself to the room.' },
    ],
    hidden: [
      { title: 'Sonos Voice Control', body: 'On Beam / Arc / Era speakers: "Hey Sonos, play some jazz" — no Alexa or Google account required.' },
      { title: 'Night Sound', body: 'In the Sonos app, turn on Night Sound to lower loud explosions and raise quiet dialog — very popular with seniors watching movies after 9 p.m.' },
    ],
  },
];

const CATEGORY_LABEL: Record<Category, string> = {
  streaming: 'Streaming stick or box',
  'smart-tv': 'Smart TV built-in',
  cable: 'Cable or satellite',
  universal: 'Universal remote',
  soundbar: 'Soundbar or speaker',
};

/* ── Fix-it accordion data ────────────────────────────────────── */

interface FixIt {
  question: string;
  answer: string;
}

const FIXES: FixIt[] = [
  {
    question: 'My remote stopped working — nothing happens when I press buttons',
    answer:
      'Start with the simplest check: batteries. Swap in two fresh AA or AAA (whichever your remote takes) and try again — old batteries are the #1 cause. If that does not fix it, check the front tip of the remote for a tiny bulb (the infrared emitter). If it is dusty, wipe it with a dry cloth. Also check that nothing is blocking the IR sensor on your TV or cable box — many people hide it behind a soundbar or decoration without realizing.',
  },
  {
    question: 'My remote buttons feel sticky or one button always repeats',
    answer:
      'Sticky buttons are usually from a spill — soda or juice dried under the key. Pop out the batteries first. Mix a small amount of dish soap with warm water, dip a cotton swab, and gently work the sticky key. A dab of rubbing alcohol on a second swab cleans any residue. Never spray liquid directly on the remote — let the swab do the work.',
  },
  {
    question: 'How do I pair a new Roku or Fire TV remote?',
    answer:
      'Roku: Open the battery compartment. Hold the small pair button (looks like a circle with a dot) for 5 seconds. The light on the remote flashes, and within 30 seconds your Roku shows a "Remote paired" message on screen. Fire TV: Point the remote at the Fire TV. Hold Home for 10 seconds. The remote\'s LED flashes blue, and a "Remote Found" message appears on your TV. If you already had an old remote, Fire TV and Roku support up to 2–3 remotes at once.',
  },
  {
    question: 'The voice button on my remote is not doing anything',
    answer:
      'Three common causes: First, the remote might be out of Bluetooth range — voice needs a direct Bluetooth link, usually 15–30 feet. Move closer. Second, the microphone might be muted in settings — check your streaming device\'s remote settings. Third, press-and-HOLD the mic button through the whole sentence, like a walkie-talkie. Tap-release does nothing on most voice remotes.',
  },
  {
    question: 'My remote controls the wrong device (neighbor\'s TV, etc.)',
    answer:
      'Older remotes used infrared — which bounces around walls — and that cannot control a neighbor\'s TV through drywall. But infrared CAN reflect off windows. If your neighbor\'s TV is visible through your window, it can happen. More often, the issue is two devices in YOUR house responding to the same brand code (for example, both a TV and a Blu-ray player made by Samsung). Solution: look in your TV or remote settings for a "remote code" option and change it to a different code number — some brands offer 2–4 codes so remotes do not confuse each other.',
  },
  {
    question: 'My remote works intermittently — sometimes fine, sometimes not',
    answer:
      'Usually weak batteries. Even if a battery shows "OK" on a tester, infrared remotes draw more current than a simple meter measures. Fresh batteries fix this about 80% of the time. Other causes: direct sunlight on the TV\'s IR sensor (sunlight contains infrared and drowns out the remote), or a nearby fluorescent or LED bulb that flickers in the IR range. Turn off the suspected light and see if the remote wakes up.',
  },
  {
    question: 'How do I clean sticky or dirty remote buttons safely?',
    answer:
      'Remove batteries first. Dampen a cotton swab with a little dish soap and warm water and clean around each button. For deep grime, use a swab lightly moistened with rubbing alcohol (70% isopropyl). Do not let liquid pool — a wet swab is enough. Let the remote air-dry for 30 minutes before putting batteries back in. Avoid bleach, acetone, or hand sanitizer — they eat the paint off button labels.',
  },
  {
    question: 'Phone-as-remote vs. physical remote — which should I use?',
    answer:
      'Physical remotes are faster, do not need Wi-Fi, and their batteries last months. Phone apps are great for typing (passwords, usernames) and when the real remote is lost. Our recommendation: keep the physical remote for everyday use. Install the phone app too — it is a free backup and an excellent keyboard when the TV asks you to sign in.',
  },
];

/* ── FAQ data ─────────────────────────────────────────────────── */

const FAQS: FixIt[] = [
  {
    question: 'Can I use my phone as a remote?',
    answer:
      'Yes — almost every modern TV, streamer, and soundbar has a free phone app. Roku has the "Roku Mobile" app, Fire TV has "Amazon Fire TV", Apple TV is built into your iPhone\'s Control Center, Samsung uses "SmartThings", LG uses "LG ThinQ", and Sonos uses the "Sonos" app. Your phone needs to be on the same Wi-Fi as the TV.',
  },
  {
    question: 'Do I really need a universal remote?',
    answer:
      'Probably not if you only have a TV and a streaming stick — one remote already controls both once set up. A universal remote is worth it if you have 3+ devices (TV + cable box + soundbar + Blu-ray) and want ONE remote on the coffee table. If you fit that picture, a GE 8-device or Inteset INT-422 is a good place to start.',
  },
  {
    question: 'Why does my remote stop working in sunlight?',
    answer:
      'Sunlight contains infrared light. If direct sun hits the front of your TV or cable box where the sensor is, the sensor gets "blinded" — like trying to hear a whisper at a loud concert. Close the blinds or move the device out of direct sun and the remote wakes up immediately.',
  },
  {
    question: 'My remote beeps — what does that mean?',
    answer:
      'A few possibilities. A single short beep usually means a button press was received. Repeated beeps often mean "low battery" — swap batteries first. On some cable remotes, beeps during setup confirm that a brand code was accepted (or rejected, if the pattern is three short beeps). Check your model\'s manual under "Audible signals" for a full list.',
  },
  {
    question: 'Can I pair a Fire TV remote to a different Fire TV?',
    answer:
      'Yes. On the new Fire TV, go to Settings → Controllers & Bluetooth → Amazon Fire TV Remotes → Add New Remote. Hold the Home button on the remote for 10 seconds. It will show up as "Remote Found." Each Fire TV can have up to seven remotes paired, so you do not have to un-pair from the old one.',
  },
  {
    question: 'What batteries does my remote take, and how long should they last?',
    answer:
      'Most TV, cable, and streaming remotes use two AA or AAA alkaline batteries. Expect 6–12 months of life with average use. Voice-capable remotes (Fire TV, Roku Voice, Xfinity XR15) use batteries faster — closer to 3–6 months — because Bluetooth stays awake. Rechargeable batteries (Apple TV, some Harmony) last 1–2 months between charges.',
  },
];

/* ── Accessibility remote data ────────────────────────────────── */

interface BigRemote {
  name: string;
  summary: string;
  bestFor: string;
  price: string;
}

const ACCESSIBILITY_REMOTES: BigRemote[] = [
  {
    name: 'Flipper Big Button Universal Remote',
    summary: 'Only 6 buttons total. Designed specifically for low vision — volume, channel, power, mute. Sleek and modern.',
    bestFor: 'Vision loss, glaucoma, macular degeneration.',
    price: 'Around $30 – $40',
  },
  {
    name: 'Tek Pal Remote (Tek Partner)',
    summary: 'Giant round buttons and a backlight. Works as a universal remote with simple programming.',
    bestFor: 'Arthritis, tremors, Parkinson\'s, limited hand dexterity.',
    price: 'Around $30 – $50',
  },
  {
    name: 'SRC Big Button 6-Button Universal',
    summary: 'Six huge squishy buttons. Remembers one TV and one cable box.',
    bestFor: 'Memory challenges, dementia. Removes the confusion of a button-covered remote.',
    price: 'Around $25 – $35',
  },
  {
    name: 'Solo Remote (by FIA Zubler)',
    summary: 'Only 2 buttons — power and channel. Almost nothing to get wrong.',
    bestFor: 'Mid- to late-stage dementia where even 6 buttons is overwhelming.',
    price: 'Around $80 – $120',
  },
  {
    name: 'Apple TV Remote with "Hey Siri"',
    summary: 'Hands-free: say "Hey Siri, pause" or "Play the news" without touching a remote at all.',
    bestFor: 'Mobility loss, arthritis, anyone who prefers voice over buttons.',
    price: 'The remote comes with the Apple TV 4K — no extra purchase.',
  },
];

/* ── Replacement guide ────────────────────────────────────────── */

interface ReplacementInfo {
  device: string;
  icon: LucideIcon;
  ifLost: string;
  whereToBuy: string;
}

const REPLACEMENTS: ReplacementInfo[] = [
  {
    device: 'Roku',
    icon: Tv,
    ifLost: 'Install the free "Roku" app on your iPhone or Android. It acts as a full remote on the same Wi-Fi, with a keyboard for typing.',
    whereToBuy: 'Order a replacement on roku.com (around $20) or Amazon. Match your Roku model before buying — Voice Remote Pro pairs with any newer Roku, but some old sticks need older remotes.',
  },
  {
    device: 'Apple TV',
    icon: Tv,
    ifLost: 'Swipe down from the top right of your iPhone to open Control Center. Tap the Apple TV Remote icon (a remote shape). Pick your Apple TV and use your phone as a remote.',
    whereToBuy: 'Apple.com or any Apple Store. The Siri Remote costs around $59. Certified-refurbished saves about $10.',
  },
  {
    device: 'Fire TV',
    icon: Tv,
    ifLost: 'Install the free "Amazon Fire TV" app on your iPhone or Android. Open it, pick your Fire TV, and use phone as remote.',
    whereToBuy: 'Amazon.com — the replacement remote is around $30. Look for "Alexa Voice Remote 3rd Gen" (the current version).',
  },
  {
    device: 'Samsung TV',
    icon: Tv,
    ifLost: 'Install the "SmartThings" app. Link your TV and use it as a touch remote with a keyboard.',
    whereToBuy: 'Samsung parts store at samsung.com or Amazon. Universal replacements from GE or RCA work too for basic TV control.',
  },
  {
    device: 'LG TV',
    icon: Tv,
    ifLost: 'Install the "LG ThinQ" app. Works as a remote with a keyboard.',
    whereToBuy: 'LG parts online or Amazon. The full Magic Remote with pointer runs around $45 — standard LG remotes are $20–30.',
  },
  {
    device: 'Xfinity / Spectrum / DIRECTV',
    icon: Cable,
    ifLost: 'Call your cable provider — they mail free replacement remotes, or you can pick one up at a local store.',
    whereToBuy: 'Also available on Amazon for a few dollars more than the provider will charge (or for free from the provider).',
  },
];

/* ── Universal remote setup steps ─────────────────────────────── */

const UNIVERSAL_STEPS: { title: string; body: string }[] = [
  {
    title: '1. Find the code list',
    body:
      'Open the paper booklet that came with the remote. Find the page for TVs, then the row for your TV brand (Samsung, LG, Vizio, etc.). Write down the first code — for example "0178" for Samsung.',
  },
  {
    title: '2. Put the remote into programming mode',
    body:
      'Press the device key (TV, CBL, DVD, etc.) once. Then hold the "Setup" or "Code Search" button until the red LED on the remote stops blinking and stays solid. You are now in programming mode.',
  },
  {
    title: '3. Enter the brand code',
    body:
      'While the LED is solid, type the code from step 1 on the number pad — for example 0, 1, 7, 8. If the code is accepted, the LED blinks twice. If it is rejected, the LED blinks 4 times — try the next code on the list for that brand.',
  },
  {
    title: '4. Test the power',
    body:
      'Point the remote at the TV and press Power. If the TV turns off, you got the right code. If not, repeat steps 2–3 with the next code in the list.',
  },
  {
    title: '5. If no code works — try Auto Code Search',
    body:
      'Turn your TV ON manually. Hold Setup until the LED stays solid, then press and release "Power" over and over. The remote cycles through every code in its memory about once per second. When the TV shuts off, press Setup one more time to lock in the code. This takes up to 15 minutes.',
  },
];

/* ── Color legend data ────────────────────────────────────────── */

const COLOR_LEGEND: { color: string; meaning: string; swatch: string }[] = [
  {
    color: 'Red',
    meaning: 'Usually Record or Power-off. On colored-button remotes, red often deletes a DVR recording.',
    swatch: 'bg-red-500',
  },
  {
    color: 'Green',
    meaning: 'Often Info, Menu, or "start/go". On some cable guides, green jumps to the next time slot.',
    swatch: 'bg-green-500',
  },
  {
    color: 'Yellow',
    meaning: 'Leftover from European broadcast TV. Rarely used in the US — occasionally favorites or shortcuts.',
    swatch: 'bg-yellow-400',
  },
  {
    color: 'Blue',
    meaning: 'Leftover from European teletext. In the US, usually tied to apps or accessibility menus.',
    swatch: 'bg-blue-500',
  },
];

/* ── Main component ───────────────────────────────────────────── */

export default function RemoteControlDecoder() {
  const [selectedId, setSelectedId] = useState<RemoteId | null>(null);

  const selected = useMemo<Remote | null>(
    () => REMOTES.find((r) => r.id === selectedId) ?? null,
    [selectedId],
  );

  const groupedRemotes = useMemo(() => {
    const groups: Record<Category, Remote[]> = {
      streaming: [],
      'smart-tv': [],
      cable: [],
      universal: [],
      soundbar: [],
    };
    REMOTES.forEach((r) => groups[r.category].push(r));
    return groups;
  }, []);

  const pick = (id: RemoteId) => {
    setSelectedId(id);
    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        const el = document.getElementById('remote-detail');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      <SEOHead
        title="Remote Control Decoder — What Does That Button Do?"
        description="A senior-friendly visual guide to every button on common TV, cable, streaming, and universal remotes. Find what each button does in plain English."
        path="/tools/remote-control-decoder"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="border-b border-border bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-800">
          <div className="container py-10 md:py-16 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="remote-control-decoder"
                title="Remote Control Decoder"
                url="/tools/remote-control-decoder"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-3 rounded-xl bg-slate-900/10 dark:bg-slate-100/10 text-slate-900 dark:text-slate-100">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <Badge variant="outline" className="text-xs">Entertainment · Every button explained</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 text-slate-900 dark:text-slate-100">
              What Does That Button Do?
            </h1>
            <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
              Identify every button on your remote. No more guessing. Pick your remote below and we&apos;ll walk through each key in plain English.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">
                <Settings className="w-4 h-4 mr-1.5" />
                18 common remotes
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">
                <Lightbulb className="w-4 h-4 mr-1.5" />
                Hidden features revealed
              </Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">
                <HelpCircle className="w-4 h-4 mr-1.5" />
                Fix-it tips included
              </Badge>
            </div>
          </div>
        </section>

        {/* ── Remote picker ────────────────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Pick your remote</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Not sure which one you have? Jump to the &ldquo;Which remote is which?&rdquo; section below for a quick check.
          </p>

          {(Object.keys(CATEGORY_LABEL) as Category[]).map((cat) => (
            <div key={cat} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
                {cat === 'streaming' && <Tv className="w-5 h-5 text-primary" />}
                {cat === 'smart-tv' && <Tv className="w-5 h-5 text-primary" />}
                {cat === 'cable' && <Cable className="w-5 h-5 text-primary" />}
                {cat === 'universal' && <Settings className="w-5 h-5 text-primary" />}
                {cat === 'soundbar' && <Speaker className="w-5 h-5 text-primary" />}
                {CATEGORY_LABEL[cat]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {groupedRemotes[cat].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => pick(r.id)}
                    aria-pressed={selectedId === r.id}
                    className={[
                      'text-left rounded-xl border-2 transition-colors p-5 min-h-14',
                      selectedId === r.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-card hover:border-primary/40 hover:bg-muted/40',
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                        <MonitorSmartphone className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg leading-tight mb-1">{r.name}</div>
                        <div className="text-sm text-muted-foreground mb-2">{r.brand} · {r.buttonCount}</div>
                        <p className="text-base leading-relaxed">{r.tagline}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {r.hasMic && (
                            <Badge variant="outline" className="text-xs">
                              <Mic className="w-3 h-3 mr-1" />
                              Voice
                            </Badge>
                          )}
                          {r.hasTouchpad && (
                            <Badge variant="outline" className="text-xs">
                              <CircleDot className="w-3 h-3 mr-1" />
                              Touch ring
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Per-remote detail ────────────────────────────────── */}
        {selected && (
          <section
            id="remote-detail"
            className="border-t border-border bg-muted/30"
          >
            <div className="container py-10 md:py-14">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-sm">
                  {CATEGORY_LABEL[selected.category]}
                </Badge>
                {selected.hasMic && (
                  <Badge variant="outline" className="text-sm">
                    <Mic className="w-3.5 h-3.5 mr-1" />
                    Voice-enabled
                  </Badge>
                )}
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{selected.name}</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">
                {selected.tagline}
              </p>

              {/* Remote picture placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                <div className="md:col-span-2">
                  <div
                    role="img"
                    aria-label={selected.image}
                    className="relative aspect-[3/4] rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-background/60 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                      <MonitorSmartphone className="w-12 h-12" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Remote diagram</div>
                    <p className="text-base font-medium leading-relaxed">{selected.image}</p>

                    {/* Placeholder hotspot circles — ready for future image overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute top-[12%] left-[45%] w-6 h-6 rounded-full border-2 border-primary/60 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary"
                    >
                      1
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute top-[28%] left-[45%] w-6 h-6 rounded-full border-2 border-primary/60 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary"
                    >
                      2
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute top-[48%] left-[45%] w-6 h-6 rounded-full border-2 border-primary/60 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary"
                    >
                      3
                    </div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="md:col-span-3 space-y-4">
                  <Card>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-primary" />
                        Quick facts
                      </h3>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-base">
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Brand</dt>
                          <dd className="font-medium">{selected.brand}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Category</dt>
                          <dd className="font-medium">{CATEGORY_LABEL[selected.category]}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Button count</dt>
                          <dd className="font-medium">{selected.buttonCount}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Voice / mic</dt>
                          <dd className="font-medium">{selected.hasMic ? 'Yes' : 'No'}</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  {selected.proTips.length > 0 && (
                    <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                          Quick Tips
                        </h3>
                        <ul className="space-y-3">
                          {selected.proTips.map((t) => (
                            <li key={t.title} className="text-base leading-relaxed">
                              <strong className="text-emerald-900 dark:text-emerald-200">{t.title}.</strong> {t.body}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Button regions */}
              <div className="space-y-5">
                {selected.regions.map((region) => (
                  <Card key={region.region} className={`${region.tint} border-2`}>
                    <CardContent className="p-5 md:p-6">
                      <h3 className="text-xl md:text-2xl font-semibold mb-4">{region.region}</h3>
                      <ul className="space-y-4">
                        {region.buttons.map((b) => (
                          <li key={b.name} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                            <div className="p-2 rounded-lg bg-background border shrink-0">
                              <b.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                            </div>
                            <div>
                              <div className="font-semibold text-lg mb-1">{b.name}</div>
                              <p className="text-base leading-relaxed">{b.purpose}</p>
                              {b.confusion && (
                                <div className="mt-2 rounded-lg border border-amber-500/40 bg-amber-50 dark:bg-amber-950/30 p-3 flex items-start gap-2">
                                  <AlertTriangle
                                    className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5"
                                    aria-hidden="true"
                                  />
                                  <div className="text-sm md:text-base leading-relaxed">
                                    <strong>Common confusion:</strong> {b.confusion}
                                  </div>
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Hidden features */}
              {selected.hidden.length > 0 && (
                <Card className="mt-6 bg-violet-50 dark:bg-violet-950/20 border-violet-500/40">
                  <CardContent className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2">
                      <Eye className="w-6 h-6 text-violet-700 dark:text-violet-400" />
                      Hidden features most people miss
                    </h3>
                    <ul className="space-y-3">
                      {selected.hidden.map((h) => (
                        <li key={h.title} className="text-base leading-relaxed">
                          <strong className="text-violet-900 dark:text-violet-200">{h.title}.</strong> {h.body}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" variant="outline" onClick={() => setSelectedId(null)} className="text-base">
                  Pick a different remote
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* ── Which remote is which? decoder ──────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Search className="w-7 h-7 text-primary" />
            Not sure which remote you have?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Here are four quick checks to identify your remote in under a minute.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-primary" />
                  1. Flip it over
                </h3>
                <p className="text-base leading-relaxed">
                  The brand name is almost always printed on the back or under the battery cover. Look for &ldquo;Roku&rdquo;, &ldquo;Amazon&rdquo;, &ldquo;Samsung&rdquo;, &ldquo;LG&rdquo;, or a cable provider&rsquo;s logo.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Hash className="w-5 h-5 text-primary" />
                  2. Count the buttons
                </h3>
                <p className="text-base leading-relaxed">
                  Roku ~11 buttons · Fire TV ~9 · Apple TV only 6 plus a touch ring · Samsung Smart ~15 · Cable remotes 20+ · Universal remotes 30+.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Mic className="w-5 h-5 text-primary" />
                  3. Look for a microphone dot
                </h3>
                <p className="text-base leading-relaxed">
                  Voice-enabled remotes have a tiny pinhole near the top. If you see one, the remote supports voice — press and hold that button to talk.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <CircleDot className="w-5 h-5 text-primary" />
                  4. Check for a ring
                </h3>
                <p className="text-base leading-relaxed">
                  Apple TV&rsquo;s Siri Remote has a unique touch ring at the top — round and matte. LG&rsquo;s Magic Remote has a scroll wheel in the middle. Rings and wheels are brand-specific clues.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Remote replacement guide ─────────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Smartphone className="w-7 h-7 text-primary" />
              Lost or broken remote — what to do
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Almost every modern TV, streamer, and soundbar has a free phone app that works as a backup remote. Here&rsquo;s the quick list.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REPLACEMENTS.map((r) => (
                <Card key={r.device}>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <r.icon className="w-5 h-5 text-primary" />
                      {r.device}
                    </h3>
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        If you lost the remote
                      </div>
                      <p className="text-base leading-relaxed">{r.ifLost}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Where to order a replacement
                      </div>
                      <p className="text-base leading-relaxed">{r.whereToBuy}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Universal remote setup steps ─────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Settings className="w-7 h-7 text-primary" />
            Program a GE or RCA universal remote to your TV
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Follow these 5 steps in order. If Direct Code does not work, fall back to Auto Code Search in the last step.
          </p>
          <ol className="space-y-4">
            {UNIVERSAL_STEPS.map((s, i) => (
              <li key={s.title}>
                <Card>
                  <CardContent className="p-5 flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                      <p className="text-base leading-relaxed">{s.body}</p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
          <Alert className="mt-6">
            <Lightbulb className="w-5 h-5" />
            <AlertTitle>Quick Tip</AlertTitle>
            <AlertDescription>
              If you lost the paper code book, visit your remote maker&rsquo;s website — GE codes live at{' '}
              <a
                href="https://www.jascoproducts.com/customer-care/code-lookup-support-ge-remotes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline inline-flex items-center gap-1"
              >
                jascoproducts.com <ExternalLink className="w-3.5 h-3.5" />
              </a>{' '}
              and RCA codes at{' '}
              <a
                href="https://rcaav.com/remote-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline inline-flex items-center gap-1"
              >
                rcaav.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
              .
            </AlertDescription>
          </Alert>
        </section>

        {/* ── Fix-it accordion ─────────────────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Fix-it: 8 common remote problems
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Most remote problems are fixed in under two minutes once you know what to try.
            </p>
            <Accordion type="single" collapsible className="space-y-2">
              {FIXES.map((f, i) => (
                <AccordionItem
                  key={f.question}
                  value={`fix-${i}`}
                  className="border rounded-xl bg-background px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed pb-4">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Color coding legend ──────────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Palette className="w-7 h-7 text-primary" />
            The colored buttons — what they mean
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Every remote color-codes buttons a little differently. These are the common meanings, but honestly — learn your specific remote&rsquo;s logic from the button guides above rather than memorizing colors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COLOR_LEGEND.map((c) => (
              <Card key={c.color}>
                <CardContent className="p-5 flex items-start gap-4">
                  <div
                    className={`${c.swatch} w-10 h-10 rounded-lg shrink-0 border border-black/10`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{c.color}</h3>
                    <p className="text-base leading-relaxed">{c.meaning}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Accessibility remotes ────────────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Accessibility className="w-7 h-7 text-primary" />
              Big-button remotes for vision or dexterity challenges
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              If the standard remote has too many buttons or the labels are hard to read, one of these specialty remotes may help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACCESSIBILITY_REMOTES.map((ar) => (
                <Card key={ar.name}>
                  <CardContent className="p-5 space-y-2">
                    <h3 className="font-semibold text-lg">{ar.name}</h3>
                    <p className="text-base leading-relaxed">{ar.summary}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Badge variant="outline" className="text-sm">
                        <Accessibility className="w-3.5 h-3.5 mr-1" />
                        {ar.bestFor}
                      </Badge>
                      <Badge variant="secondary" className="text-sm">{ar.price}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <HelpCircle className="w-7 h-7 text-primary" />
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((q, i) => (
              <AccordionItem
                key={q.question}
                value={`faq-${i}`}
                className="border rounded-xl bg-background px-4"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed pb-4">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* ── Related ──────────────────────────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Keep going</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Related tools and guides that pair well with this one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/tools/smart-tv-setup"
                className="block rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 p-5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Tv className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">Smart TV Setup Wizard</div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Step-by-step setup for Samsung, LG, Sony, Vizio, and Roku TVs.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to="/tools/voice-assistant-setup"
                className="block rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 p-5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Mic className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">Voice Assistants Made Simple</div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Alexa vs. Google vs. Siri — pick one and walk through setup.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to="/tools/bluetooth-pairing-helper"
                className="block rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 p-5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Speaker className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">Bluetooth Pairing Helper</div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Pair headphones, speakers, and hearing aids step-by-step.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to="/guides?category=entertainment"
                className="block rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 p-5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Radio className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">Entertainment guides</div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Browse every guide on TVs, streaming, soundbars, and DVD.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
