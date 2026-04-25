import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Search,
  Compass,
  ChevronRight,
  Clock,
  Smartphone,
  Apple,
  Monitor,
  Laptop,
  MessageCircle,
  X,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Settings database
// Each entry contains the setting name, a plain-English description of what it
// does, and the exact path on each supported OS. Paths use "→" as the visual
// breadcrumb separator — we split on it for rendering later.
// ─────────────────────────────────────────────────────────────────────────────

type OS = 'ios' | 'androidPixel' | 'androidSamsung' | 'mac' | 'windows';

interface SettingEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  paths: Partial<Record<OS, string>>;
  keywords?: string[];
  related?: string[];
}

const SETTINGS: SettingEntry[] = [
  // ── Volume / Sound ────────────────────────────────────────────────────────
  {
    id: 'ringer-volume',
    name: 'Ringer volume',
    category: 'Volume & Sound',
    description: 'How loud the phone rings when someone calls.',
    paths: {
      ios: 'Settings → Sounds & Haptics → Ringtone and Alerts',
      androidPixel: 'Settings → Sound & vibration → Ring & notification volume',
      androidSamsung: 'Settings → Sounds and vibration → Volume → Ringtone',
    },
    keywords: ['ring', 'loud', 'call volume', 'phone volume'],
    related: ['media-volume', 'notification-volume', 'ringtone'],
  },
  {
    id: 'media-volume',
    name: 'Media volume',
    category: 'Volume & Sound',
    description: 'How loud music, videos and games play.',
    paths: {
      ios: 'Settings → Sounds & Haptics (use Volume buttons while media plays)',
      androidPixel: 'Settings → Sound & vibration → Media volume',
      androidSamsung: 'Settings → Sounds and vibration → Volume → Media',
      mac: 'System Settings → Sound → Output volume',
      windows: 'Settings → System → Sound → Volume',
    },
    keywords: ['music', 'video', 'audio', 'speaker'],
    related: ['ringer-volume', 'notification-volume'],
  },
  {
    id: 'notification-volume',
    name: 'Notification volume',
    category: 'Volume & Sound',
    description: 'How loud alerts sound when apps send you a notification.',
    paths: {
      ios: 'Settings → Sounds & Haptics → Ringtone and Alerts',
      androidPixel: 'Settings → Sound & vibration → Ring & notification volume',
      androidSamsung: 'Settings → Sounds and vibration → Volume → Notifications',
    },
    keywords: ['alerts', 'beep', 'ding', 'sound'],
    related: ['ringer-volume', 'notifications-per-app'],
  },
  {
    id: 'alarm-volume',
    name: 'Alarm volume',
    category: 'Volume & Sound',
    description: 'How loud your alarm sounds in the morning.',
    paths: {
      ios: 'Settings → Sounds & Haptics → Ringtone and Alerts (separate Alarm setting in Clock app)',
      androidPixel: 'Settings → Sound & vibration → Alarm volume',
      androidSamsung: 'Settings → Sounds and vibration → Volume → Alarm',
    },
    keywords: ['clock', 'morning', 'wake up'],
  },
  {
    id: 'ringtone',
    name: 'Ringtone',
    category: 'Volume & Sound',
    description: 'The sound your phone plays when someone calls.',
    paths: {
      ios: 'Settings → Sounds & Haptics → Ringtone',
      androidPixel: 'Settings → Sound & vibration → Phone ringtone',
      androidSamsung: 'Settings → Sounds and vibration → Ringtone',
    },
    keywords: ['tone', 'ring sound'],
    related: ['ringer-volume'],
  },
  {
    id: 'silent-mode',
    name: 'Silent mode / Mute',
    category: 'Volume & Sound',
    description: 'Silences the ringer so your phone only vibrates or stays quiet.',
    paths: {
      ios: 'Flip the silent switch on the side of your iPhone (or use Control Center)',
      androidPixel: 'Press Volume Down until it shows Silent, or Settings → Sound & vibration',
      androidSamsung: 'Settings → Sounds and vibration → Sound mode → Mute',
    },
    keywords: ['mute', 'quiet', 'do not ring'],
    related: ['do-not-disturb'],
  },

  // ── Display ───────────────────────────────────────────────────────────────
  {
    id: 'brightness',
    name: 'Brightness',
    category: 'Display',
    description: 'How bright your screen is.',
    paths: {
      ios: 'Settings → Display & Brightness → Brightness slider',
      androidPixel: 'Settings → Display → Brightness level',
      androidSamsung: 'Settings → Display → Brightness',
      mac: 'System Settings → Displays → Brightness',
      windows: 'Settings → System → Display → Brightness',
    },
    keywords: ['screen', 'bright', 'dim', 'dark screen'],
    related: ['auto-brightness', 'night-mode'],
  },
  {
    id: 'auto-brightness',
    name: 'Auto-brightness',
    category: 'Display',
    description: 'Lets the phone adjust screen brightness automatically based on the light around you.',
    paths: {
      ios: 'Settings → Accessibility → Display & Text Size → Auto-Brightness',
      androidPixel: 'Settings → Display → Adaptive brightness',
      androidSamsung: 'Settings → Display → Adaptive brightness',
      mac: 'System Settings → Displays → Automatically adjust brightness',
      windows: 'Settings → System → Display → Change brightness automatically',
    },
    keywords: ['adaptive', 'automatic brightness'],
    related: ['brightness'],
  },
  {
    id: 'night-mode',
    name: 'Night mode / Night Shift',
    category: 'Display',
    description: 'Warms the screen colors in the evening to make it easier on your eyes before bed.',
    paths: {
      ios: 'Settings → Display & Brightness → Night Shift',
      androidPixel: 'Settings → Display → Night Light',
      androidSamsung: 'Settings → Display → Eye comfort shield',
      mac: 'System Settings → Displays → Night Shift',
      windows: 'Settings → System → Display → Night light',
    },
    keywords: ['blue light', 'night shift', 'night light', 'warm colors'],
    related: ['dark-mode', 'brightness'],
  },
  {
    id: 'dark-mode',
    name: 'Dark mode',
    category: 'Display',
    description: 'Switches the phone to a dark color scheme — easier on the eyes at night.',
    paths: {
      ios: 'Settings → Display & Brightness → Dark',
      androidPixel: 'Settings → Display → Dark theme',
      androidSamsung: 'Settings → Display → Dark mode',
      mac: 'System Settings → Appearance → Dark',
      windows: 'Settings → Personalization → Colors → Choose your mode → Dark',
    },
    keywords: ['dark theme', 'black mode', 'night theme'],
    related: ['night-mode'],
  },
  {
    id: 'text-size',
    name: 'Text size',
    category: 'Display',
    description: 'Makes the text on your screen larger or smaller.',
    paths: {
      ios: 'Settings → Display & Brightness → Text Size',
      androidPixel: 'Settings → Display → Display size and text → Font size',
      androidSamsung: 'Settings → Display → Font size and style',
      mac: 'System Settings → Accessibility → Display → Text size',
      windows: 'Settings → Accessibility → Text size',
    },
    keywords: ['font size', 'bigger text', 'larger text', 'readable'],
    related: ['bold-text', 'zoom'],
  },
  {
    id: 'bold-text',
    name: 'Bold text',
    category: 'Display',
    description: 'Makes text thicker and easier to read.',
    paths: {
      ios: 'Settings → Accessibility → Display & Text Size → Bold Text',
      androidPixel: 'Settings → Display → Display size and text → Bold text',
      androidSamsung: 'Settings → Accessibility → Visibility enhancements → Bold font',
    },
    keywords: ['heavy font', 'thick text'],
    related: ['text-size'],
  },
  {
    id: 'zoom',
    name: 'Zoom / Magnifier',
    category: 'Display',
    description: 'Magnifies the screen so you can see small things more clearly.',
    paths: {
      ios: 'Settings → Accessibility → Zoom',
      androidPixel: 'Settings → Accessibility → Magnification',
      androidSamsung: 'Settings → Accessibility → Visibility enhancements → Magnification',
      mac: 'System Settings → Accessibility → Zoom',
      windows: 'Settings → Accessibility → Magnifier',
    },
    keywords: ['magnify', 'zoom in', 'enlarge'],
    related: ['text-size'],
  },
  {
    id: 'wallpaper',
    name: 'Wallpaper',
    category: 'Display',
    description: 'The picture you see behind your apps on the home screen and lock screen.',
    paths: {
      ios: 'Settings → Wallpaper',
      androidPixel: 'Settings → Wallpaper & style',
      androidSamsung: 'Settings → Wallpaper and style',
      mac: 'System Settings → Wallpaper',
      windows: 'Settings → Personalization → Background',
    },
    keywords: ['background', 'lock screen photo', 'home screen'],
    related: ['dark-mode'],
  },

  // ── Wi-Fi ─────────────────────────────────────────────────────────────────
  {
    id: 'connect-wifi',
    name: 'Connect to a Wi-Fi network',
    category: 'Wi-Fi',
    description: 'Join a wireless network so your device can use the internet without cellular data.',
    paths: {
      ios: 'Settings → Wi-Fi → tap a network name',
      androidPixel: 'Settings → Network & internet → Internet → tap a network',
      androidSamsung: 'Settings → Connections → Wi-Fi → tap a network',
      mac: 'System Settings → Wi-Fi → choose a network',
      windows: 'Settings → Network & internet → Wi-Fi → Show available networks',
    },
    keywords: ['join wifi', 'new network', 'wireless internet'],
    related: ['forget-wifi', 'wifi-password', 'tethering'],
  },
  {
    id: 'forget-wifi',
    name: 'Forget a Wi-Fi network',
    category: 'Wi-Fi',
    description: 'Makes your device stop connecting automatically to a network you no longer want to use.',
    paths: {
      ios: 'Settings → Wi-Fi → tap (i) next to network → Forget This Network',
      androidPixel: 'Settings → Network & internet → Internet → gear next to network → Forget',
      androidSamsung: 'Settings → Connections → Wi-Fi → tap network → Forget',
      mac: 'System Settings → Wi-Fi → Details next to network → Forget This Network',
      windows: 'Settings → Network & internet → Wi-Fi → Manage known networks → Forget',
    },
    keywords: ['remove wifi', 'delete network', 'stop connecting'],
    related: ['connect-wifi'],
  },
  {
    id: 'wifi-password',
    name: 'View / share Wi-Fi password',
    category: 'Wi-Fi',
    description: 'See or share the password for a Wi-Fi network you\'re connected to.',
    paths: {
      ios: 'Settings → Wi-Fi → tap (i) next to connected network → tap Password',
      androidPixel: 'Settings → Network & internet → Internet → tap connected network → Share → shows QR + password',
      androidSamsung: 'Settings → Connections → Wi-Fi → gear next to network → QR code',
      mac: 'System Settings → Wi-Fi → Details → show password (requires Mac login)',
      windows: 'Settings → Network & internet → Wi-Fi → Hardware properties (view via Control Panel)',
    },
    keywords: ['password', 'share wifi', 'qr code'],
    related: ['connect-wifi'],
  },
  {
    id: 'tethering',
    name: 'Personal hotspot / Tethering',
    category: 'Wi-Fi',
    description: 'Shares your phone\'s internet connection with other devices over Wi-Fi.',
    paths: {
      ios: 'Settings → Personal Hotspot',
      androidPixel: 'Settings → Network & internet → Hotspot & tethering → Wi-Fi hotspot',
      androidSamsung: 'Settings → Connections → Mobile Hotspot and Tethering',
    },
    keywords: ['hotspot', 'share internet', 'tether'],
    related: ['connect-wifi'],
  },

  // ── Bluetooth ─────────────────────────────────────────────────────────────
  {
    id: 'bluetooth-pair',
    name: 'Pair a Bluetooth device',
    category: 'Bluetooth',
    description: 'Connect headphones, speakers, a car, or other accessories wirelessly.',
    paths: {
      ios: 'Settings → Bluetooth → turn on → tap a nearby device',
      androidPixel: 'Settings → Connected devices → Pair new device',
      androidSamsung: 'Settings → Connections → Bluetooth → tap a nearby device',
      mac: 'System Settings → Bluetooth → Connect next to device',
      windows: 'Settings → Bluetooth & devices → Add device → Bluetooth',
    },
    keywords: ['connect headphones', 'earbuds', 'speaker', 'bluetooth connect'],
    related: ['bluetooth-unpair'],
  },
  {
    id: 'bluetooth-unpair',
    name: 'Unpair / Forget a Bluetooth device',
    category: 'Bluetooth',
    description: 'Removes a Bluetooth device so it won\'t reconnect automatically.',
    paths: {
      ios: 'Settings → Bluetooth → tap (i) → Forget This Device',
      androidPixel: 'Settings → Connected devices → gear next to device → Forget',
      androidSamsung: 'Settings → Connections → Bluetooth → gear → Unpair',
      mac: 'System Settings → Bluetooth → right-click device → Forget',
      windows: 'Settings → Bluetooth & devices → device → Remove',
    },
    keywords: ['disconnect', 'remove bluetooth', 'forget device'],
    related: ['bluetooth-pair'],
  },
  {
    id: 'bluetooth-discoverable',
    name: 'Make device discoverable',
    category: 'Bluetooth',
    description: 'Lets other nearby devices find your device to pair with it.',
    paths: {
      ios: 'Settings → Bluetooth (your iPhone is discoverable while this screen is open)',
      androidPixel: 'Settings → Connected devices → Pair new device (discoverable while screen is open)',
      androidSamsung: 'Settings → Connections → Bluetooth (discoverable while screen is open)',
    },
    keywords: ['visible', 'find my device', 'discoverable'],
    related: ['bluetooth-pair'],
  },

  // ── Notifications ─────────────────────────────────────────────────────────
  {
    id: 'notifications-per-app',
    name: 'Notifications (per app)',
    category: 'Notifications',
    description: 'Turn alerts on or off for a specific app.',
    paths: {
      ios: 'Settings → Notifications → tap an app',
      androidPixel: 'Settings → Notifications → App notifications → tap app',
      androidSamsung: 'Settings → Notifications → App notifications → tap app',
      mac: 'System Settings → Notifications → select app',
      windows: 'Settings → System → Notifications → Notifications from apps',
    },
    keywords: ['app alerts', 'turn off notifications', 'app badge'],
    related: ['do-not-disturb', 'focus-mode', 'lock-screen-notifications'],
  },
  {
    id: 'do-not-disturb',
    name: 'Do Not Disturb',
    category: 'Notifications',
    description: 'Silences calls and notifications so you\'re not interrupted.',
    paths: {
      ios: 'Settings → Focus → Do Not Disturb',
      androidPixel: 'Settings → Notifications → Do Not Disturb',
      androidSamsung: 'Settings → Notifications → Do not disturb',
      mac: 'System Settings → Focus → Do Not Disturb',
      windows: 'Settings → System → Notifications → Do not disturb',
    },
    keywords: ['silence', 'quiet hours', 'sleep'],
    related: ['focus-mode', 'silent-mode'],
  },
  {
    id: 'focus-mode',
    name: 'Focus modes',
    category: 'Notifications',
    description: 'Custom profiles (Sleep, Work, Personal) that let only certain apps or people reach you.',
    paths: {
      ios: 'Settings → Focus',
      androidPixel: 'Settings → Digital Wellbeing & parental controls → Focus mode',
      androidSamsung: 'Settings → Digital Wellbeing and parental controls → Focus mode',
      mac: 'System Settings → Focus',
    },
    keywords: ['focus', 'work mode', 'sleep mode'],
    related: ['do-not-disturb', 'screen-time'],
  },
  {
    id: 'lock-screen-notifications',
    name: 'Lock screen notifications',
    category: 'Notifications',
    description: 'Controls whether alerts appear on the lock screen before you unlock.',
    paths: {
      ios: 'Settings → Notifications → Show Previews',
      androidPixel: 'Settings → Display → Lock screen → Privacy',
      androidSamsung: 'Settings → Lock screen → Notifications',
      windows: 'Settings → System → Notifications → Show notifications on the lock screen',
    },
    keywords: ['lock screen', 'preview', 'privacy'],
    related: ['notifications-per-app'],
  },

  // ── Privacy ───────────────────────────────────────────────────────────────
  {
    id: 'location-services',
    name: 'Location services',
    category: 'Privacy',
    description: 'Controls which apps can use your location (GPS).',
    paths: {
      ios: 'Settings → Privacy & Security → Location Services',
      androidPixel: 'Settings → Location',
      androidSamsung: 'Settings → Location',
      mac: 'System Settings → Privacy & Security → Location Services',
      windows: 'Settings → Privacy & security → Location',
    },
    keywords: ['gps', 'location', 'tracking', 'maps permission'],
    related: ['tracking', 'camera-permission', 'microphone-permission'],
  },
  {
    id: 'tracking',
    name: 'App tracking',
    category: 'Privacy',
    description: 'Stops apps from following what you do across other apps and websites.',
    paths: {
      ios: 'Settings → Privacy & Security → Tracking → Allow Apps to Request to Track',
      androidPixel: 'Settings → Privacy → Ads → Delete advertising ID',
      androidSamsung: 'Settings → Privacy → Ads → Delete advertising ID',
    },
    keywords: ['ad tracking', 'advertising id', 'app tracking transparency'],
    related: ['location-services', 'analytics'],
  },
  {
    id: 'analytics',
    name: 'Analytics / Diagnostics',
    category: 'Privacy',
    description: 'Controls whether your device sends anonymous usage data to help fix bugs.',
    paths: {
      ios: 'Settings → Privacy & Security → Analytics & Improvements',
      androidPixel: 'Settings → Privacy → Usage & diagnostics',
      androidSamsung: 'Settings → Privacy → Customization Service / Diagnostic data',
      mac: 'System Settings → Privacy & Security → Analytics & Improvements',
      windows: 'Settings → Privacy & security → Diagnostics & feedback',
    },
    keywords: ['telemetry', 'usage data', 'diagnostic'],
    related: ['tracking'],
  },
  {
    id: 'camera-permission',
    name: 'Camera permissions',
    category: 'Privacy',
    description: 'Controls which apps are allowed to use your camera.',
    paths: {
      ios: 'Settings → Privacy & Security → Camera',
      androidPixel: 'Settings → Security & privacy → Privacy → Permission manager → Camera',
      androidSamsung: 'Settings → Security and privacy → Permission manager → Camera',
      mac: 'System Settings → Privacy & Security → Camera',
      windows: 'Settings → Privacy & security → Camera',
    },
    keywords: ['camera access', 'webcam', 'app permissions'],
    related: ['microphone-permission', 'app-permissions'],
  },
  {
    id: 'microphone-permission',
    name: 'Microphone permissions',
    category: 'Privacy',
    description: 'Controls which apps are allowed to use your microphone.',
    paths: {
      ios: 'Settings → Privacy & Security → Microphone',
      androidPixel: 'Settings → Security & privacy → Privacy → Permission manager → Microphone',
      androidSamsung: 'Settings → Security and privacy → Permission manager → Microphone',
      mac: 'System Settings → Privacy & Security → Microphone',
      windows: 'Settings → Privacy & security → Microphone',
    },
    keywords: ['mic', 'microphone access', 'recording'],
    related: ['camera-permission', 'app-permissions'],
  },
  {
    id: 'app-permissions',
    name: 'App permissions review',
    category: 'Privacy',
    description: 'See every permission each app has (camera, mic, contacts, location, etc.) and turn off anything you don\'t like.',
    paths: {
      ios: 'Settings → Privacy & Security (each category lists apps)',
      androidPixel: 'Settings → Security & privacy → Privacy → Permission manager',
      androidSamsung: 'Settings → Security and privacy → Permission manager',
    },
    keywords: ['permissions', 'app access'],
    related: ['camera-permission', 'microphone-permission', 'location-services'],
  },

  // ── Security ──────────────────────────────────────────────────────────────
  {
    id: 'face-id',
    name: 'Face ID / Face unlock',
    category: 'Security',
    description: 'Unlocks your device by scanning your face.',
    paths: {
      ios: 'Settings → Face ID & Passcode',
      androidPixel: 'Settings → Security & privacy → Device unlock → Face & Fingerprint Unlock',
      androidSamsung: 'Settings → Security and privacy → Biometrics → Face recognition',
    },
    keywords: ['face unlock', 'biometrics'],
    related: ['fingerprint', 'passcode'],
  },
  {
    id: 'fingerprint',
    name: 'Fingerprint / Touch ID',
    category: 'Security',
    description: 'Unlocks your device with your fingerprint.',
    paths: {
      ios: 'Settings → Touch ID & Passcode (older iPhones)',
      androidPixel: 'Settings → Security & privacy → Device unlock → Face & Fingerprint Unlock → Fingerprint',
      androidSamsung: 'Settings → Security and privacy → Biometrics → Fingerprints',
      mac: 'System Settings → Touch ID & Password',
      windows: 'Settings → Accounts → Sign-in options → Fingerprint recognition',
    },
    keywords: ['touch id', 'fingerprint unlock', 'biometric'],
    related: ['face-id', 'passcode'],
  },
  {
    id: 'passcode',
    name: 'Passcode / PIN',
    category: 'Security',
    description: 'The number or password you enter to unlock your device.',
    paths: {
      ios: 'Settings → Face ID & Passcode → Change Passcode',
      androidPixel: 'Settings → Security & privacy → Device unlock → Screen lock',
      androidSamsung: 'Settings → Lock screen → Screen lock type',
      mac: 'System Settings → Touch ID & Password → Change Password',
      windows: 'Settings → Accounts → Sign-in options → PIN',
    },
    keywords: ['pin', 'unlock code', 'password'],
    related: ['face-id', 'fingerprint', 'auto-lock'],
  },
  {
    id: 'auto-lock',
    name: 'Auto-lock / Screen timeout',
    category: 'Security',
    description: 'How long your screen stays on before locking itself.',
    paths: {
      ios: 'Settings → Display & Brightness → Auto-Lock',
      androidPixel: 'Settings → Display → Screen timeout',
      androidSamsung: 'Settings → Display → Screen timeout',
      mac: 'System Settings → Lock Screen → Turn display off on battery when inactive',
      windows: 'Settings → System → Power & battery → Screen and sleep',
    },
    keywords: ['screen timeout', 'sleep', 'lock screen timer'],
    related: ['passcode'],
  },
  {
    id: 'two-factor',
    name: 'Two-factor authentication (2FA)',
    category: 'Security',
    description: 'Extra security that asks for a code from your phone when you sign in.',
    paths: {
      ios: 'Settings → [your name] → Sign-In & Security → Two-Factor Authentication',
      androidPixel: 'Settings → Google → Manage your Google Account → Security → 2-Step Verification',
      androidSamsung: 'Settings → Samsung account → Password and security → Two-step verification',
    },
    keywords: ['2fa', 'two step', 'verification code', 'authenticator'],
    related: ['passcode'],
  },

  // ── Accessibility ─────────────────────────────────────────────────────────
  {
    id: 'voiceover',
    name: 'VoiceOver / TalkBack (screen reader)',
    category: 'Accessibility',
    description: 'Reads everything on the screen out loud for people who can\'t see well.',
    paths: {
      ios: 'Settings → Accessibility → VoiceOver',
      androidPixel: 'Settings → Accessibility → TalkBack',
      androidSamsung: 'Settings → Accessibility → TalkBack',
      mac: 'System Settings → Accessibility → VoiceOver',
      windows: 'Settings → Accessibility → Narrator',
    },
    keywords: ['screen reader', 'talkback', 'narrator', 'read aloud'],
    related: ['voice-control', 'live-captions'],
  },
  {
    id: 'voice-control',
    name: 'Voice Control',
    category: 'Accessibility',
    description: 'Lets you control the device entirely with your voice.',
    paths: {
      ios: 'Settings → Accessibility → Voice Control',
      androidPixel: 'Settings → Accessibility → Voice Access',
      androidSamsung: 'Settings → Accessibility → Voice Access',
      mac: 'System Settings → Accessibility → Voice Control',
      windows: 'Settings → Accessibility → Speech → Voice access',
    },
    keywords: ['voice commands', 'hands free'],
    related: ['voiceover'],
  },
  {
    id: 'magnifier',
    name: 'Magnifier',
    category: 'Accessibility',
    description: 'Uses the camera as a magnifying glass to zoom in on small text around you.',
    paths: {
      ios: 'Settings → Accessibility → Magnifier',
      androidPixel: 'Settings → Accessibility → Magnification',
      androidSamsung: 'Settings → Accessibility → Visibility enhancements → Magnifier window',
      mac: 'System Settings → Accessibility → Zoom',
      windows: 'Settings → Accessibility → Magnifier',
    },
    keywords: ['magnifying glass', 'read small print'],
    related: ['zoom', 'text-size'],
  },
  {
    id: 'live-captions',
    name: 'Live Captions',
    category: 'Accessibility',
    description: 'Shows real-time captions for any audio playing on your device.',
    paths: {
      ios: 'Settings → Accessibility → Live Captions',
      androidPixel: 'Settings → Accessibility → Live Caption',
      androidSamsung: 'Settings → Accessibility → Hearing enhancements → Live Caption',
      mac: 'System Settings → Accessibility → Live Captions',
      windows: 'Settings → Accessibility → Captions → Live captions',
    },
    keywords: ['captions', 'subtitles', 'hearing'],
    related: ['voiceover'],
  },
  {
    id: 'reduce-motion',
    name: 'Reduce Motion',
    category: 'Accessibility',
    description: 'Cuts down on animated effects if they make you feel dizzy or motion sick.',
    paths: {
      ios: 'Settings → Accessibility → Motion → Reduce Motion',
      androidPixel: 'Settings → Accessibility → Color and motion → Remove animations',
      androidSamsung: 'Settings → Accessibility → Visibility enhancements → Remove animations',
      mac: 'System Settings → Accessibility → Display → Reduce motion',
      windows: 'Settings → Accessibility → Visual effects → Animation effects',
    },
    keywords: ['animations', 'motion sickness'],
  },

  // ── Storage ───────────────────────────────────────────────────────────────
  {
    id: 'storage-free',
    name: 'Free up space / Manage storage',
    category: 'Storage',
    description: 'See what\'s taking up space on your device and clear out what you don\'t need.',
    paths: {
      ios: 'Settings → General → iPhone Storage',
      androidPixel: 'Settings → Storage',
      androidSamsung: 'Settings → Battery and device care → Storage',
      mac: 'System Settings → General → Storage',
      windows: 'Settings → System → Storage',
    },
    keywords: ['free space', 'full storage', 'delete files', 'storage full'],
    related: ['clear-cache', 'photo-backup'],
  },
  {
    id: 'clear-cache',
    name: 'Clear app cache',
    category: 'Storage',
    description: 'Deletes temporary files an app has built up — frees space and can fix misbehaving apps.',
    paths: {
      ios: 'Settings → General → iPhone Storage → tap app → Offload App (iOS has no per-app cache clear)',
      androidPixel: 'Settings → Apps → tap app → Storage & cache → Clear cache',
      androidSamsung: 'Settings → Apps → tap app → Storage → Clear cache',
      windows: 'Settings → Apps → Installed apps → tap app → Advanced options → Reset',
    },
    keywords: ['cache', 'clear data', 'app storage'],
    related: ['storage-free'],
  },
  {
    id: 'manage-photos',
    name: 'Manage / delete photos',
    category: 'Storage',
    description: 'Review and delete photos and videos to free up space.',
    paths: {
      ios: 'Open Photos app → Albums → Recently Deleted (empty to recover space) or Settings → General → iPhone Storage → Photos',
      androidPixel: 'Open Google Photos → Library → Utilities → Free up space on device',
      androidSamsung: 'Open Gallery → Albums → Trash → Empty',
    },
    keywords: ['photos', 'pictures', 'free up photos'],
    related: ['storage-free', 'photo-backup'],
  },

  // ── Battery ───────────────────────────────────────────────────────────────
  {
    id: 'low-power',
    name: 'Low Power Mode / Battery Saver',
    category: 'Battery',
    description: 'Reduces activity to make a low battery last longer.',
    paths: {
      ios: 'Settings → Battery → Low Power Mode',
      androidPixel: 'Settings → Battery → Battery Saver',
      androidSamsung: 'Settings → Battery and device care → Battery → Power saving',
      mac: 'System Settings → Battery → Low Power Mode',
      windows: 'Settings → System → Power & battery → Energy saver',
    },
    keywords: ['battery saver', 'save battery', 'power save'],
    related: ['optimized-charging'],
  },
  {
    id: 'optimized-charging',
    name: 'Optimized battery charging',
    category: 'Battery',
    description: 'Slows down charging near 100% to protect your battery over the long term.',
    paths: {
      ios: 'Settings → Battery → Battery Health & Charging → Optimized Battery Charging',
      androidPixel: 'Settings → Battery → Adaptive preferences',
      androidSamsung: 'Settings → Battery and device care → Battery → More battery settings → Protect battery',
      mac: 'System Settings → Battery → Optimized battery charging',
    },
    keywords: ['battery health', 'slow charging', 'protect battery'],
    related: ['low-power'],
  },
  {
    id: 'battery-usage',
    name: 'Battery usage by app',
    category: 'Battery',
    description: 'See which apps are using the most battery.',
    paths: {
      ios: 'Settings → Battery (scroll to "Battery Usage by App")',
      androidPixel: 'Settings → Battery → Battery usage',
      androidSamsung: 'Settings → Battery and device care → Battery → Background usage limits',
      windows: 'Settings → System → Power & battery → Battery usage',
    },
    keywords: ['battery drain', 'what\'s using battery'],
    related: ['low-power'],
  },

  // ── Date & Time ───────────────────────────────────────────────────────────
  {
    id: 'time-zone',
    name: 'Time zone',
    category: 'Date & Time',
    description: 'Which part of the world your device uses for setting the time.',
    paths: {
      ios: 'Settings → General → Date & Time → Time Zone',
      androidPixel: 'Settings → System → Date & time → Time zone',
      androidSamsung: 'Settings → General management → Date and time → Time zone',
      mac: 'System Settings → General → Date & Time → Time Zone',
      windows: 'Settings → Time & language → Date & time → Time zone',
    },
    keywords: ['timezone', 'travel time', 'wrong time'],
    related: ['auto-time'],
  },
  {
    id: 'auto-time',
    name: 'Auto-update time',
    category: 'Date & Time',
    description: 'Lets the device set the time automatically based on your location or carrier.',
    paths: {
      ios: 'Settings → General → Date & Time → Set Automatically',
      androidPixel: 'Settings → System → Date & time → Set time automatically',
      androidSamsung: 'Settings → General management → Date and time → Automatic date and time',
      mac: 'System Settings → General → Date & Time → Set time and date automatically',
      windows: 'Settings → Time & language → Date & time → Set time automatically',
    },
    keywords: ['set time', 'clock wrong', 'automatic time'],
    related: ['time-zone'],
  },

  // ── Keyboard ──────────────────────────────────────────────────────────────
  {
    id: 'autocorrect',
    name: 'Autocorrect',
    category: 'Keyboard',
    description: 'Automatically fixes typos as you type.',
    paths: {
      ios: 'Settings → General → Keyboard → Auto-Correction',
      androidPixel: 'Settings → System → Languages & input → On-screen keyboard → Gboard → Text correction → Auto-correction',
      androidSamsung: 'Settings → General management → Samsung Keyboard settings → Auto replace',
    },
    keywords: ['spell check', 'auto correct', 'correction'],
    related: ['predictive-text', 'dictation'],
  },
  {
    id: 'predictive-text',
    name: 'Predictive text',
    category: 'Keyboard',
    description: 'Suggests the next word you might want to type.',
    paths: {
      ios: 'Settings → General → Keyboard → Predictive',
      androidPixel: 'Settings → System → Languages & input → On-screen keyboard → Gboard → Text correction → Show suggestion strip',
      androidSamsung: 'Settings → General management → Samsung Keyboard settings → Suggest text corrections',
    },
    keywords: ['word suggestions', 'predictions'],
    related: ['autocorrect'],
  },
  {
    id: 'dictation',
    name: 'Dictation / Voice typing',
    category: 'Keyboard',
    description: 'Lets you speak instead of type — the device writes down what you say.',
    paths: {
      ios: 'Settings → General → Keyboard → Enable Dictation',
      androidPixel: 'Gboard → tap microphone icon (or Settings → System → Languages & input → Voice typing)',
      androidSamsung: 'Samsung Keyboard → tap microphone (or Settings → General management → Samsung Keyboard settings → Voice input)',
      mac: 'System Settings → Keyboard → Dictation',
      windows: 'Press Windows + H to start voice typing',
    },
    keywords: ['voice type', 'speech to text'],
    related: ['voice-control'],
  },

  // ── Digital Wellbeing / Screen Time ───────────────────────────────────────
  {
    id: 'screen-time',
    name: 'Screen Time / Digital Wellbeing',
    category: 'Wellbeing',
    description: 'See how much you use your phone and set limits for apps.',
    paths: {
      ios: 'Settings → Screen Time',
      androidPixel: 'Settings → Digital Wellbeing & parental controls',
      androidSamsung: 'Settings → Digital Wellbeing and parental controls',
    },
    keywords: ['phone time', 'app limits', 'wellbeing'],
    related: ['focus-mode'],
  },

  // ── Find My ───────────────────────────────────────────────────────────────
  {
    id: 'find-my',
    name: 'Find My iPhone / Find My Device',
    category: 'Security',
    description: 'Locate your device on a map if it\'s lost or stolen, and remotely lock or erase it.',
    paths: {
      ios: 'Settings → [your name] → Find My → Find My iPhone',
      androidPixel: 'Settings → Security & privacy → Device finders → Find My Device',
      androidSamsung: 'Settings → Security and privacy → Find My Mobile',
      mac: 'System Settings → [your name] → iCloud → Find My Mac',
      windows: 'Settings → Privacy & security → Find my device',
    },
    keywords: ['lost phone', 'track device', 'find device'],
    related: ['location-services'],
  },

  // ── Accounts ──────────────────────────────────────────────────────────────
  {
    id: 'apple-id',
    name: 'Apple ID / Google account sign-in',
    category: 'Accounts',
    description: 'The account that keeps your apps, photos, mail and purchases in sync.',
    paths: {
      ios: 'Settings → [your name] (top of the Settings list)',
      androidPixel: 'Settings → Passwords & accounts → Google',
      androidSamsung: 'Settings → Accounts and backup → Manage accounts → Google / Samsung account',
      mac: 'System Settings → [your name] (top of the Settings list)',
      windows: 'Settings → Accounts → Your info',
    },
    keywords: ['apple id', 'google account', 'sign in', 'icloud', 'login'],
    related: ['two-factor', 'email-account'],
  },
  {
    id: 'email-account',
    name: 'Email account setup',
    category: 'Accounts',
    description: 'Add your email (Gmail, Outlook, Yahoo) to the Mail app so you can read it on your device.',
    paths: {
      ios: 'Settings → Mail → Accounts → Add Account',
      androidPixel: 'Settings → Passwords & accounts → Add account',
      androidSamsung: 'Settings → Accounts and backup → Manage accounts → Add account',
      mac: 'System Settings → Internet Accounts → Add Account',
      windows: 'Settings → Accounts → Email & accounts → Add an account',
    },
    keywords: ['add email', 'gmail setup', 'outlook', 'mail setup'],
    related: ['apple-id'],
  },

  // ── Power / Restart ───────────────────────────────────────────────────────
  {
    id: 'restart',
    name: 'Restart / Power off',
    category: 'System',
    description: 'Turn your device off and back on — often fixes glitches.',
    paths: {
      ios: 'Settings → General → Shut Down (or hold Side button + Volume Up)',
      androidPixel: 'Hold Power + Volume Up → Restart / Power off',
      androidSamsung: 'Hold Side key + Volume Down → Power off / Restart',
      mac: 'Apple menu () → Restart / Shut Down',
      windows: 'Start menu → Power → Restart / Shut down',
    },
    keywords: ['reboot', 'turn off', 'power down', 'reset'],
  },

  // ── Emergency ─────────────────────────────────────────────────────────────
  {
    id: 'emergency-sos',
    name: 'Emergency SOS',
    category: 'Safety',
    description: 'Quickly call for help by pressing hardware buttons; alerts your emergency contacts.',
    paths: {
      ios: 'Settings → Emergency SOS',
      androidPixel: 'Settings → Safety & emergency → Emergency SOS',
      androidSamsung: 'Settings → Safety and emergency → Emergency SOS',
    },
    keywords: ['sos', '911', 'emergency call', 'help'],
    related: ['medical-id'],
  },
  {
    id: 'medical-id',
    name: 'Medical ID',
    category: 'Safety',
    description: 'Shows important medical info (allergies, meds, contacts) on the lock screen during emergencies.',
    paths: {
      ios: 'Health app → your profile → Medical ID → Edit',
      androidPixel: 'Settings → Safety & emergency → Medical information',
      androidSamsung: 'Settings → Safety and emergency → Medical information',
    },
    keywords: ['medical info', 'allergies', 'emergency contact'],
    related: ['emergency-sos'],
  },

  // ── Messages ──────────────────────────────────────────────────────────────
  {
    id: 'text-forwarding',
    name: 'Text message forwarding',
    category: 'Messages',
    description: 'Sends your iPhone texts to your iPad or Mac so you can reply from any device.',
    paths: {
      ios: 'Settings → Messages → Text Message Forwarding',
    },
    keywords: ['sms forwarding', 'texts on mac', 'messages on ipad'],
    related: ['imessage'],
  },
  {
    id: 'imessage',
    name: 'iMessage / RCS',
    category: 'Messages',
    description: 'Turns on Apple\'s iMessage or Android\'s RCS so texts use internet and support typing dots, read receipts, etc.',
    paths: {
      ios: 'Settings → Messages → iMessage',
      androidPixel: 'Messages app → menu → Settings → RCS chats',
      androidSamsung: 'Messages app → menu → Settings → Chat settings → Enable RCS',
    },
    keywords: ['imessage', 'rcs', 'blue bubbles', 'read receipts'],
    related: ['text-forwarding'],
  },

  // ── Photo backup ──────────────────────────────────────────────────────────
  {
    id: 'photo-backup',
    name: 'Photo backup',
    category: 'Storage',
    description: 'Automatically saves your photos to the cloud so you never lose them.',
    paths: {
      ios: 'Settings → [your name] → iCloud → Photos → Sync this iPhone',
      androidPixel: 'Google Photos app → your profile → Photos settings → Backup',
      androidSamsung: 'Gallery app → menu → Settings → Sync with OneDrive (or Google Photos backup)',
    },
    keywords: ['icloud photos', 'google photos backup', 'save photos'],
    related: ['manage-photos', 'apple-id'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Small helpers
// ─────────────────────────────────────────────────────────────────────────────

const OS_META: { key: OS; label: string; icon: typeof Apple }[] = [
  { key: 'ios', label: 'iPhone', icon: Apple },
  { key: 'androidPixel', label: 'Android (Pixel)', icon: Smartphone },
  { key: 'androidSamsung', label: 'Android (Samsung)', icon: Smartphone },
  { key: 'mac', label: 'Mac', icon: Laptop },
  { key: 'windows', label: 'Windows', icon: Monitor },
];

function Breadcrumb({ path }: { path: string }) {
  const parts = path.split(/→/).map((p) => p.trim());
  return (
    <div className="flex flex-wrap items-center gap-1 text-sm">
      {parts.map((part, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          <span className="font-medium text-foreground">{part}</span>
          {i < parts.length - 1 && (
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" aria-hidden="true" />
          )}
        </span>
      ))}
    </div>
  );
}

function SettingCard({
  setting,
  onRelatedClick,
}: {
  setting: SettingEntry;
  onRelatedClick: (id: string) => void;
}) {
  const related = (setting.related ?? [])
    .map((id) => SETTINGS.find((s) => s.id === id))
    .filter((s): s is SettingEntry => Boolean(s));

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{setting.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {setting.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground pt-1">{setting.description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2.5">
          {OS_META.map(({ key, label, icon: Icon }) => {
            const path = setting.paths[key];
            if (!path) return null;
            return (
              <div key={key} className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{label}</span>
                </div>
                <div className="pl-5">
                  <Breadcrumb path={path} />
                </div>
              </div>
            );
          })}
        </div>

        {related.length > 0 && (
          <div className="pt-2 border-t">
            <p className="text-xs font-medium text-muted-foreground mb-2">Related settings</p>
            <div className="flex flex-wrap gap-1.5">
              {related.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => onRelatedClick(r.name)}
                  className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

const RECENT_KEY = 'teksure-settings-finder-recent';
const MAX_RECENT = 6;

function loadRecent(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_RECENT) : [];
  } catch {
    return [];
  }
}

function saveRecent(list: string[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, MAX_RECENT)));
  } catch {
    /* ignore quota errors */
  }
}

function matchScore(setting: SettingEntry, q: string): number {
  const lower = q.toLowerCase();
  if (setting.name.toLowerCase() === lower) return 100;
  if (setting.name.toLowerCase().startsWith(lower)) return 80;
  if (setting.name.toLowerCase().includes(lower)) return 60;
  if (setting.category.toLowerCase().includes(lower)) return 40;
  if (setting.keywords?.some((k) => k.toLowerCase().includes(lower))) return 30;
  if (setting.description.toLowerCase().includes(lower)) return 20;
  return 0;
}

export default function SettingsFinder() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recent, setRecent] = useState<string[]>(() => loadRecent());
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close suggestion dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const trimmed = query.trim();

  const results = useMemo(() => {
    if (!trimmed) return SETTINGS;
    return SETTINGS
      .map((s) => ({ s, score: matchScore(s, trimmed) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.s);
  }, [trimmed]);

  const suggestions = useMemo(() => {
    if (!trimmed) return [];
    return results.slice(0, 6);
  }, [results, trimmed]);

  const commitSearch = (term: string) => {
    setQuery(term);
    setShowSuggestions(false);
    const next = [term, ...recent.filter((r) => r.toLowerCase() !== term.toLowerCase())].slice(0, MAX_RECENT);
    setRecent(next);
    saveRecent(next);
    inputRef.current?.blur();
  };

  const clearRecent = () => {
    setRecent([]);
    saveRecent([]);
  };

  // Group results by category for nicer browse-all view
  const grouped = useMemo(() => {
    const map = new Map<string, SettingEntry[]>();
    results.forEach((s) => {
      const list = map.get(s.category) ?? [];
      list.push(s);
      map.set(s.category, list);
    });
    return Array.from(map.entries());
  }, [results]);

  return (
    <>
      <SEOHead
        title="Where's That Setting? | TekSure"
        description="Type what you want to change on your iPhone, Android, Mac or Windows — we'll show you exactly where to tap."
        path="/tools/settings-finder"
      />
      <main className="container py-16 min-h-[60vh]">
        {/* Hero */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <Compass className="h-8 w-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold">Where's That Setting?</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Type what you want to change. We'll show you where.
          </p>
        </div>

        {/* Search */}
        <div ref={containerRef} className="relative max-w-xl mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          <Input
            ref={inputRef}
            placeholder="Try &quot;dark mode&quot;, &quot;wifi password&quot;, or &quot;brightness&quot;..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                if (trimmed) commitSearch(trimmed);
              }
              if (e.key === 'Escape') setShowSuggestions(false);
            }}
            className="pl-11 pr-10 h-12 text-base"
            aria-label="Search for a setting"
            aria-autocomplete="list"
            aria-expanded={showSuggestions && suggestions.length > 0}
            aria-controls="settings-finder-suggestions"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {/* Autocomplete dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              id="settings-finder-suggestions"
              role="listbox"
              className="absolute z-20 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md overflow-hidden"
            >
              {suggestions.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="option"
                  aria-selected="false"
                  onClick={() => commitSearch(s.name)}
                  className="w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors border-b last:border-b-0"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0">{s.category}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{s.description}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Recent searches */}
        {recent.length > 0 && !trimmed && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2 max-w-2xl">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Recent searches</span>
              </div>
              <Button variant="ghost" size="sm" onClick={clearRecent} className="h-auto py-1 text-xs">
                Clear
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recent.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setQuery(r)}
                  className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* No results fallback */}
        {trimmed && results.length === 0 && (
          <Card className="max-w-2xl">
            <CardContent className="py-8 text-center space-y-4">
              <p className="text-lg font-medium">
                Hmm, we couldn't find "{trimmed}" in our setting list.
              </p>
              <p className="text-muted-foreground">
                Try a simpler word (for example "brightness" instead of "how to make the screen brighter"),
                or ask TekBrain — our AI helper knows about many more settings.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <Button asChild variant="default">
                  <Link to="/tekbrain">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Ask TekBrain
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => setQuery('')}>
                  Clear search
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-10">
            {trimmed && (
              <p className="text-sm text-muted-foreground">
                Showing {results.length} {results.length === 1 ? 'match' : 'matches'} for "{trimmed}"
              </p>
            )}
            {grouped.map(([category, items]) => (
              <section key={category}>
                <h2 className="text-xl font-semibold mb-4">{category}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <SettingCard key={s.id} setting={s} onRelatedClick={commitSearch} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Footer help */}
        <div className="mt-16 rounded-xl border bg-muted/40 p-6 max-w-3xl">
          <h3 className="font-semibold mb-1">Can't find what you're looking for?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Settings menus change between software updates and phone brands. If the path here
            doesn't match what you see, ask TekBrain for step-by-step help with your exact device.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link to="/tekbrain">
              <MessageCircle className="mr-2 h-4 w-4" />
              Ask TekBrain
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
