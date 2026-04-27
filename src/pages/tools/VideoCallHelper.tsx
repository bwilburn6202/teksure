import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Video,
  Phone,
  MessageCircle,
  Users,
  Apple,
  Monitor,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Share2,
  Calendar,
  AlertTriangle,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Heart,
  Sparkles,
  Accessibility,
  BookOpen,
  Coffee,
  Utensils,
  Image as ImageIcon,
  Headphones,
  Sun,
  ExternalLink,
  Star,
  ArrowRight,
  Captions,
  type LucideIcon,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * Video Call Helper
 * ------------------------------------------------------------
 * A senior-friendly reference for setting up, troubleshooting,
 * and enjoying video calls on 7 popular platforms plus dedicated
 * senior-friendly devices. Built so you can pick a platform,
 * walk through the basics, and feel confident before your first
 * call with your grandkids.
 * ────────────────────────────────────────────────────────────── */

type PlatformId =
  | 'zoom'
  | 'facetime'
  | 'meet'
  | 'skype'
  | 'whatsapp'
  | 'messenger'
  | 'grandpad';

interface PlatformSection {
  title: string;
  body: string;
}

interface PlatformInfo {
  id: PlatformId;
  name: string;
  tagline: string;
  icon: LucideIcon;
  bestFor: string;
  price: string;
  needsAccount: string;
  worksOn: string;
  install: string;
  signIn: string;
  firstCall: string;
  answerCall: string;
  shareScreen: string;
  muteMic: string;
  cameraOnOff: string;
  captions: string;
  schedule: string;
  confusion: PlatformSection[];
  supportUrl: string;
  supportLabel: string;
}

/* ── Platform data ─────────────────────────────────────── */

const ZOOM: PlatformInfo = {
  id: 'zoom',
  name: 'Zoom',
  tagline: 'The most common platform for scheduled family calls, doctor visits, and classes.',
  icon: Video,
  bestFor: 'Scheduled calls with 3+ people, doctor visits, church groups, classes',
  price: 'Free for 40-minute group calls. Unlimited 1-on-1.',
  needsAccount: 'Free account to host. Guests can join with only a link.',
  worksOn: 'iPhone, iPad, Android, Windows, Mac, web browser, phone dial-in',
  install:
    'On your phone, open the App Store (iPhone) or Play Store (Android). Search "Zoom Workplace" and tap Install — it is free. On a computer, go to zoom.us/download and click "Download" under "Zoom Desktop Client". The icon is a white video camera in a blue circle.',
  signIn:
    'Open the Zoom app and tap "Sign Up" if you are new, or "Sign In" if you have an account. You can sign up with email, or with an existing Google or Apple account (those options are listed below the email field). Zoom will email you a confirmation link — open the email and tap the link to finish.',
  firstCall:
    'To start a call right now: open Zoom and tap the orange "New Meeting" button. Tap "Start a Meeting". A window opens with your camera view. To add someone, tap "Participants" at the bottom, then "Invite", then "Copy Invite Link" — paste that link into a text message or email to your grandkids. When they click it, they join your call.',
  answerCall:
    'When someone sends you a Zoom link, tap the link in the text or email. Zoom opens and asks "Join with Video?" — tap Join with Video. Next it asks "Join with Computer Audio?" or "Call using Internet Audio" — tap that too. You are now in the call.',
  shareScreen:
    'Tap the green "Share Screen" button at the bottom of the call. Pick what to share — "Screen" shows everything on your phone, or pick a specific photo or app. On iPhone, tap "Start Broadcast" and wait 3 seconds for the countdown. Great for showing your grandkid a photo of your garden, or reviewing a letter together.',
  muteMic:
    'Tap the microphone icon in the bottom-left of the call. Red line through it means you are muted — nobody can hear you. Tap again to unmute. Tip: if you see the red line and someone says "We cannot hear you," tap the microphone once.',
  cameraOnOff:
    'Tap the video camera icon next to the microphone. Red line means the camera is off — people see your name on a dark square. Tap again to turn it back on. Useful when you need a break but want to stay on the call.',
  captions:
    'Zoom now has free live captions (they renamed it from "CC" to "Live Transcript"). During a call, tap "More" (three dots), then "Captions", then "Show Captions". Words appear at the bottom of the screen as people speak.',
  schedule:
    'In the Zoom app, tap "Schedule". Enter a title like "Sunday Call with Grandkids", pick a date and time, and set "Recurrence" to Weekly. Tap Save. Zoom offers to add the event to your calendar — tap Yes. Copy the meeting link and text it to your family so they have it forever.',
  confusion: [
    {
      title: 'The "Leave Meeting" vs "End Meeting" button',
      body: 'The red button in the bottom-right can do two different things. If you started the call (you are the host), it says "End" and will kick everyone out. If you joined someone else\'s call, it says "Leave" and only removes you. When you see a pop-up asking "End Meeting for All?" — pick "Leave Meeting" if you want the rest of your family to stay on.',
    },
    {
      title: '"Raise Hand" is hidden under Reactions',
      body: 'To raise your hand in a big group, tap "Reactions" (the smiley face) at the bottom, then "Raise Hand". A yellow hand appears next to your name. Many seniors look for a direct button and miss it — remember: Reactions first, then Raise Hand.',
    },
    {
      title: 'The "Waiting Room" can be confusing',
      body: 'If you click a Zoom link and see "Please wait, the meeting host will let you in soon" — that is normal. The host has to accept you. It is a safety feature. Stay on that screen and the host will admit you within a minute.',
    },
  ],
  supportUrl: 'https://support.zoom.com/hc/en',
  supportLabel: 'Zoom Help Center',
};

const FACETIME: PlatformInfo = {
  id: 'facetime',
  name: 'FaceTime',
  tagline: 'Built into every iPhone, iPad, and Mac — the simplest option if everyone in the family has Apple devices.',
  icon: Apple,
  bestFor: 'Families who all use iPhone/iPad/Mac. One-on-one calls, quick check-ins.',
  price: 'Free with any Apple device.',
  needsAccount: 'Apple ID (the email you use for the App Store). Already set up on your device.',
  worksOn: 'iPhone, iPad, Mac, Apple Watch. Android and Windows users can join links but cannot start FaceTime.',
  install:
    'FaceTime is already on your iPhone or iPad — look for the green video camera icon on your home screen. If you swiped it off the screen, open the App Store, search "FaceTime", and it brings you right to the built-in app.',
  signIn:
    'Open FaceTime. If it asks, sign in with your Apple ID (the same email and password you use for the App Store). That is it — no separate account.',
  firstCall:
    'Open FaceTime and tap the blue "New FaceTime" button at the top. Start typing your grandkid\'s name — FaceTime searches your contacts. Tap their name, then tap the green "FaceTime" button. Their device will ring. They can swipe to answer.',
  answerCall:
    'When your iPhone rings with a FaceTime call, you see a green video button. On a locked phone, swipe the green slider to the right. On an unlocked phone, tap the green video button. To answer without video, tap "Decline" first, then call them back using the phone icon.',
  shareScreen:
    'During a FaceTime call, tap the screen, then tap the "Share Content" icon (two overlapping squares with an arrow). Pick "Share My Screen". A 3-second countdown, then your grandkid sees what you see. Perfect for showing photos of the dog or reviewing a recipe together.',
  muteMic:
    'Tap the screen during the call to bring up the buttons. The microphone icon is on the left. Tap it once — when it has a line through it, you are muted. Tap again to unmute.',
  cameraOnOff:
    'Next to the microphone is the camera-flip icon. To turn off your video, tap the camera with a line through it (next to the End button). People will still hear you but see a black square.',
  captions:
    'On iPhone/iPad with iOS 16 or newer, FaceTime has live captions. Go to Settings → Accessibility → Live Captions → turn it ON. Then during a FaceTime call, a captions box appears at the top of the screen with what the other person is saying.',
  schedule:
    'FaceTime does not have built-in scheduling, but you can create a reusable "FaceTime Link" that works like a Zoom meeting. Open FaceTime, tap "Create Link", and a box pops up. Tap Messages or Mail to send the link. The link works any time you tap it.',
  confusion: [
    {
      title: 'The contact picker shows too many options',
      body: 'When you start typing a name, FaceTime shows every phone number and email for that person. Pick the one labeled FaceTime (often their iPhone). If you see a regular phone icon, that is a voice call — pick the video camera icon instead.',
    },
    {
      title: 'Calling non-Apple family members',
      body: 'If your grandkid has Android, regular FaceTime will not work. Instead, tap "Create Link" in FaceTime and text the link to them — they can open it in Chrome on their Android phone and join. The "Create Link" feature is a 2021 addition many seniors have not heard of.',
    },
    {
      title: '"Portrait Mode" and "Center Stage" surprises',
      body: 'FaceTime on newer iPhones may blur your background automatically (Portrait Mode) or follow you as you move (Center Stage). If you look blurry or the camera keeps moving when you do not want it to, tap the screen, tap your preview tile, and turn those OFF.',
    },
  ],
  supportUrl: 'https://support.apple.com/guide/facetime/welcome/mac',
  supportLabel: 'Apple FaceTime Support',
};

const GOOGLE_MEET: PlatformInfo = {
  id: 'meet',
  name: 'Google Meet',
  tagline: 'Works in any web browser, no install needed. Good if your family uses Gmail or Google Calendar.',
  icon: Monitor,
  bestFor: 'Quick calls from a computer, families on Gmail, work-style video meetings.',
  price: 'Free for 1-hour group calls.',
  needsAccount: 'Google account (Gmail). Free to make one.',
  worksOn: 'Any browser (Chrome works best), iPhone, iPad, Android, phone dial-in',
  install:
    'On a computer, no install — go to meet.google.com in any browser. On a phone, open the App Store or Play Store, search "Google Meet", and tap Install. The icon is a green video camera in a white circle.',
  signIn:
    'If you have a Gmail address, you already have a Google account. Open meet.google.com and it will use whichever Google account is signed in to your browser. On the mobile app, tap "Sign in" and pick your Gmail address.',
  firstCall:
    'Go to meet.google.com. Click "New meeting" → "Start an instant meeting". Click "Copy joining info" to get the link, then paste it into a text, email, or Messenger. When your grandkids tap the link, they can join in their browser without installing anything.',
  answerCall:
    'Google Meet does not ring like a phone — someone sends you a link. Tap the link. Your browser or the Meet app opens. You see a preview of your own camera — click "Ask to join". When the host lets you in, you are on the call.',
  shareScreen:
    'During a call, click "Present now" (the up-arrow icon at the bottom). Pick "Your entire screen" or "A window" to share only one app. Others see exactly what you see. Click "Stop presenting" at the top when done.',
  muteMic:
    'Click the microphone icon at the bottom. Red icon means muted. Click again to unmute. A keyboard shortcut: press and HOLD the spacebar to un-mute only while you talk (hands-free, like a walkie-talkie).',
  cameraOnOff:
    'Next to the microphone is the camera icon. Red means off. Click to toggle. When off, your Google profile photo or initial shows on a colored square.',
  captions:
    'Click the "CC" icon at the bottom of the call. Captions appear at the bottom of the screen in white text. Google Meet has some of the most accurate captions, and supports Spanish, French, German, Portuguese, and more — click the arrow next to CC to pick a language.',
  schedule:
    'Go to calendar.google.com, click Create → Event. Set a title, date, and time. Turn on "Add Google Meet video conferencing". To make it weekly, click "Does not repeat" and pick "Weekly on [day]". Save. Anyone you invite gets an email with the call link.',
  confusion: [
    {
      title: '"Ask to join" vs "Join now"',
      body: 'Sometimes you see "Join now" (go right in). Other times "Ask to join" (host approves you). Which one appears depends on whether you are signed in with a Google account that was invited. If you get "Ask to join", click it and wait — usually under a minute.',
    },
    {
      title: 'The 60-minute limit',
      body: 'The free version ends calls at 60 minutes. You will see a warning at the 55-minute mark. Save the link — you can rejoin immediately and pick up where you left off. If this happens often, consider Zoom or FaceTime instead.',
    },
    {
      title: 'Chrome vs Safari',
      body: 'Google Meet works best in the Chrome browser. If you use Safari on a Mac and hit a glitch (no sound, no camera), open Chrome instead and paste the link there.',
    },
  ],
  supportUrl: 'https://support.google.com/meet',
  supportLabel: 'Google Meet Help',
};

const SKYPE: PlatformInfo = {
  id: 'skype',
  name: 'Skype',
  tagline: 'The classic — still reliable for international family and works on older computers.',
  icon: MessageCircle,
  bestFor: 'International calls, older Windows computers, family members who already use Skype.',
  price: 'Free for Skype-to-Skype calls. Low per-minute rate for calling regular phones internationally.',
  needsAccount: 'Microsoft account (same one you might use for Hotmail, Outlook, or Office). Free.',
  worksOn: 'Windows, Mac, iPhone, iPad, Android, Chromebook, web browser',
  install:
    'On a computer, go to skype.com and click "Download Skype". On a phone, search "Skype" in your app store. The icon is a white "S" on a blue cloud. It is made by Microsoft.',
  signIn:
    'Open Skype and sign in with your Microsoft account email and password. If you have Outlook.com, Hotmail, or have bought anything on a Windows computer, you already have a Microsoft account. Forgot the password? Click "Forgot my password" and Microsoft will email a reset link.',
  firstCall:
    'In Skype, click "Contacts" on the left. If your grandkid is not there, click the "+" at the top, then "Add Contact" — search by their Skype name, email, or phone number. Once added, click their name, then the blue video camera icon at the top right to call them.',
  answerCall:
    'When someone Skype-calls you, a window pops up with their name and two buttons: a green video camera (answer with video) and a green phone (answer with voice only). Click the one you want. A red phone icon declines the call.',
  shareScreen:
    'During a call, click the two-overlapping-squares icon at the bottom (Share Screen). Pick a window or your whole screen. Useful for helping your grandkid with homework or reviewing vacation photos together.',
  muteMic:
    'The microphone icon is on the bottom call bar. Click to mute (line through the icon). Click again to unmute.',
  cameraOnOff:
    'Next to the microphone, click the video camera icon to turn your camera on or off. When off, your profile photo or initial appears instead.',
  captions:
    'Skype has live captions and subtitles. Click the "..." (More) menu during the call, then "Turn subtitles on". Captions appear at the bottom. Skype can also translate subtitles in real time — useful for family who speak different languages.',
  schedule:
    'In Skype, click the Meetings icon, then "Create a Free Meeting". Copy the link and send it to your family. Skype does not have weekly-recurring meetings built in, so put it on your Google Calendar, Apple Calendar, or Outlook Calendar as a repeating event with the link in the notes.',
  confusion: [
    {
      title: 'Two kinds of Skype accounts',
      body: 'There is "Skype" (personal, free) and "Skype for Business" (older work version). Make sure your family is using the same one. The personal Skype has a white "S" on a blue cloud — that is the one most families use.',
    },
    {
      title: 'Skype credit vs Skype-to-Skype',
      body: 'Calls between two Skype users are free, even internationally. Calling someone\'s regular phone from Skype costs money ("Skype Credit"). If you only want to call your grandkids on their phones or computers, you never need to add credit.',
    },
    {
      title: 'Microsoft retiring parts of Skype',
      body: 'Microsoft announced they are winding down Skype for consumers. It still works as of 2026, but if Microsoft shuts it off, your calls will move to Microsoft Teams (the free personal version). Keep an eye on email from Microsoft.',
    },
  ],
  supportUrl: 'https://support.skype.com/',
  supportLabel: 'Skype Support',
};

const WHATSAPP: PlatformInfo = {
  id: 'whatsapp',
  name: 'WhatsApp',
  tagline: 'Owned by Meta. Very popular with grandkids and international family.',
  icon: MessageCircle,
  bestFor: 'International family, texting plus video, family group chats.',
  price: 'Free (uses your internet, not phone minutes).',
  needsAccount: 'Your phone number. WhatsApp sends a 6-digit code by text to verify.',
  worksOn: 'iPhone, Android, Windows, Mac, web browser (WhatsApp Web)',
  install:
    'On your phone, search "WhatsApp Messenger" in the App Store or Play Store. The icon is a green speech bubble with a white phone inside. Tap Install.',
  signIn:
    'Open WhatsApp. It asks for your phone number — type it in with country code (for US, that is +1). WhatsApp sends a 6-digit code to your phone by text. Type the code in. Add your name and an optional photo. You are done.',
  firstCall:
    'In WhatsApp, tap the Chats tab. Tap the speech-bubble-with-pencil icon to start a new chat. Pick your grandkid from your contacts (WhatsApp finds them if they also have WhatsApp). Once in their chat, tap the video camera icon at the top right to video call them.',
  answerCall:
    'When a WhatsApp call comes in, your phone screen looks similar to a regular phone call — a green "Answer" button on the right. Swipe or tap it to answer. To answer with video, make sure there is a small video camera icon on the button.',
  shareScreen:
    'In WhatsApp, during a video call, tap the screen to show buttons, then tap the phone/screen-share icon (it looks like a phone with an arrow). Pick a screen or app to share. Added in 2023 — make sure your app is up to date.',
  muteMic:
    'During a call, tap the screen, then tap the microphone icon (it shows a line through it when muted). Tap again to unmute.',
  cameraOnOff:
    'Also during a call, tap the video camera icon to turn your camera off. Your profile photo shows instead.',
  captions:
    'WhatsApp does not have built-in live captions yet. On iPhone, turn on system-wide live captions: Settings → Accessibility → Live Captions → turn ON. On Android, Settings → Accessibility → Live Caption. These work across any app including WhatsApp.',
  schedule:
    'WhatsApp has no built-in scheduler, but you can create a family group chat and pin it. Every Sunday at 6 pm, whoever is free opens the group and starts a video call — the rest of the family gets a notification and can join. Add the time to your phone calendar so you remember.',
  confusion: [
    {
      title: 'The verification code text',
      body: 'WhatsApp sends a 6-digit code by text once. If you never got it, wait 1 minute and tap "Resend". Never share this code with anyone — scammers have tricked seniors into sharing it to take over their WhatsApp account.',
    },
    {
      title: 'Group call vs one-on-one',
      body: 'To call more than one person at a time, start the call with one person first, then tap the "Add Person" icon (a person with a "+" sign) to add up to 8 total. You cannot start a group video call from the group chat on iPhone — add people one at a time.',
    },
    {
      title: 'Two-step verification',
      body: 'Turn ON two-step verification in WhatsApp to protect your account from scammers. Go to Settings → Account → Two-Step Verification → Enable. Pick a 6-digit PIN you will remember. This is the single best safety step you can take on WhatsApp.',
    },
  ],
  supportUrl: 'https://faq.whatsapp.com/',
  supportLabel: 'WhatsApp Help Center',
};

const MESSENGER: PlatformInfo = {
  id: 'messenger',
  name: 'Facebook Messenger',
  tagline: 'If you already use Facebook, Messenger is the fastest way to video-call family.',
  icon: Users,
  bestFor: 'Families already on Facebook, quick spontaneous calls with people you see on your Facebook feed.',
  price: 'Free.',
  needsAccount: 'Facebook account. You can also sign up with only a phone number (no Facebook).',
  worksOn: 'iPhone, Android, Windows, Mac, web browser (facebook.com)',
  install:
    'On your phone, search "Messenger" in the App Store or Play Store. The icon is a white lightning bolt in a purple/blue gradient bubble. On a computer, it is built into facebook.com — click the Messenger icon in the top right.',
  signIn:
    'Open Messenger. Tap "Continue as [your name]" if you are signed in to Facebook, or sign in with your Facebook email and password. If you do not have Facebook, tap "Create new account" and you can use your phone number.',
  firstCall:
    'Open Messenger. Tap the Chats tab. Tap the pencil-and-paper icon to start a new message — search for your grandkid and tap their name. Once in the chat, tap the video camera icon at the top right. Their Messenger will ring.',
  answerCall:
    'When a Messenger call comes in, you see their photo with green "Answer" and red "Decline" buttons. Swipe or tap the green video camera to answer with video. Swipe the green phone to answer voice-only.',
  shareScreen:
    'During a Messenger call on a phone, tap the screen, then tap "..." (more), then "Share Screen". On a computer, the share-screen button is a monitor-with-arrow icon in the bottom bar. Useful for showing Facebook photos together.',
  muteMic:
    'Tap the microphone icon at the bottom of the call. Icon with a slash means muted. Tap again to unmute.',
  cameraOnOff:
    'Tap the camera icon to toggle your video on or off. When off, your Facebook profile photo appears.',
  captions:
    'Messenger has automatic captions during video calls. Tap the "..." menu during a call, then tap "Captions" (labeled "CC"). Available in English, Spanish, and several other languages.',
  schedule:
    'Messenger lets you create a Call Link that works any time. Open Messenger, tap "Calls" tab, tap "Create Call Link". Copy the link. Paste it into a family group chat, and everyone can click the same link every Sunday. No scheduling needed — the link works any time.',
  confusion: [
    {
      title: 'The "Rooms" feature',
      body: 'Messenger Rooms were a separate thing for group calls up to 50 people — but as of 2024 they merged into regular Messenger calls. If someone sends you a link that says "rooms.fb.com", it works the same as a regular call.',
    },
    {
      title: 'End-to-end encryption warning',
      body: 'Messenger rolled out end-to-end encryption (extra privacy) to all chats. The first time you call someone, you may see a one-time message asking you to set a PIN. Pick one you will remember. If you lose the PIN, you lose old messages but can still make new calls.',
    },
    {
      title: 'Accidental "Poke" or "Wave"',
      body: 'Messenger has small buttons like "Poke" or "Wave" that seniors sometimes tap by accident while trying to scroll. They only send a little notification to the other person. Harmless, but if your grandkid texts "What was the wave?" — that is why.',
    },
  ],
  supportUrl: 'https://www.facebook.com/help/messenger-app',
  supportLabel: 'Messenger Help',
};

const GRANDPAD: PlatformInfo = {
  id: 'grandpad',
  name: 'GrandPad',
  tagline: 'A tablet built specifically for seniors. No app stores, no passwords — video calls with one tap.',
  icon: Heart,
  bestFor: 'Seniors who find regular tablets too complex, families who want a "grandparent-proof" option, people with mild memory challenges.',
  price: 'About $79/month including cellular data and 24/7 support. No separate internet bill needed.',
  needsAccount: 'Family member sets it up online once. Senior never types a password.',
  worksOn: 'The GrandPad itself (a dedicated 8-inch tablet). Family members use the free GrandPad app on their phones.',
  install:
    'You do not install GrandPad on a regular device — it is its own tablet. A family member orders it at grandpad.net. It arrives ready to use, charged, and with a cellular connection built in (no WiFi needed). Turn it on and go.',
  signIn:
    'There is no password for the senior. A family member goes to my.grandpad.net on their computer, adds "trusted family members", and those people appear as photos on the senior\'s home screen. The senior only taps a face to call them.',
  firstCall:
    'On the GrandPad home screen, every family member appears as a photo with their name. Tap the photo of the person you want to call. Tap "Video Call" (the camera icon). That is the whole process — no contacts, no dialing.',
  answerCall:
    'When a family member calls, the GrandPad rings and shows their photo filling the screen with a big green "Answer" button. Tap it. Red "Decline" button is on the opposite side.',
  shareScreen:
    'GrandPad does not do traditional screen sharing, but it does something better for grandparents: the family member on the regular app can send a photo mid-call and it appears as a big picture on the GrandPad. So your grandkid can show you their artwork without anyone needing to figure out "Share Screen".',
  muteMic:
    'During a call on GrandPad, a microphone icon appears at the bottom. Tap once to mute (red line). Tap again to unmute.',
  cameraOnOff:
    'Tap the camera icon to turn your video off during a call. Your name shows on a colored square instead.',
  captions:
    'GrandPad supports Accessibility text size and has a hearing-aid-compatible speaker. Live captions during calls are not currently a built-in feature — call GrandPad support (24/7 at the number on the device) to check for updates.',
  schedule:
    'GrandPad does not have scheduled calls, but family members can set a reminder on their own phone. Every Sunday at 6, the reminder goes off on your phone, you open the GrandPad app, and tap Grandma — she picks up.',
  confusion: [
    {
      title: 'Only "trusted" family can call',
      body: 'GrandPad has no phone number — it cannot receive calls from strangers. Only family members set up through my.grandpad.net can call the GrandPad. This is on purpose — it blocks scam calls completely. The trade-off: if a new grandchild wants to call, someone has to add them through the family portal first.',
    },
    {
      title: '24/7 support button',
      body: 'There is a dedicated "Help" button on the GrandPad. Tapping it connects to a live human support person in the US. Free, no wait. Seniors can use this for any question — "How do I change my photo?" or "Why is my battery icon orange?" This is the reason many families pay the monthly fee.',
    },
    {
      title: 'Cellular, not WiFi',
      body: 'The GrandPad uses a cellular connection (like a phone) built into the device — so it works anywhere with a signal, even outside on the porch, without needing a WiFi password. This is why it is more expensive than a regular tablet but far more reliable.',
    },
  ],
  supportUrl: 'https://www.grandpad.net/support',
  supportLabel: 'GrandPad 24/7 Support',
};

const PLATFORMS: Record<PlatformId, PlatformInfo> = {
  zoom: ZOOM,
  facetime: FACETIME,
  meet: GOOGLE_MEET,
  skype: SKYPE,
  whatsapp: WHATSAPP,
  messenger: MESSENGER,
  grandpad: GRANDPAD,
};

const PLATFORM_ORDER: PlatformId[] = [
  'zoom',
  'facetime',
  'meet',
  'skype',
  'whatsapp',
  'messenger',
  'grandpad',
];

/* ── Etiquette tips ────────────────────────────────────── */

interface EtiquetteItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

const ETIQUETTE: EtiquetteItem[] = [
  {
    icon: Sun,
    title: 'Face the window, not your back to it',
    body: 'Put the light IN FRONT of you. A window or lamp behind you turns your face into a dark shadow on camera. If daylight is bright behind you, close the blinds and turn on a lamp in front.',
  },
  {
    icon: Camera,
    title: 'Camera at eye level',
    body: 'Prop your phone or laptop so the camera is level with your eyes. Looking DOWN at a camera on the table gives an unflattering angle and makes you look tired. A stack of books, a tablet stand, or a cookbook holder works well.',
  },
  {
    icon: Headphones,
    title: 'Headphones kill echo',
    body: 'Wired earbuds or Bluetooth headphones stop the other person from hearing themselves echo back. If your grandkid says "I keep hearing myself", headphones fix it instantly. Any pair works — even the old wired ones that came with your phone.',
  },
  {
    icon: MicOff,
    title: 'Mute when others are talking in a group call',
    body: 'Background noise (a barking dog, the TV in the kitchen, a spouse on the phone) travels loud on a group call. When you are not speaking, tap the microphone icon to mute. Tap again when it is your turn. Your family will thank you.',
  },
  {
    icon: ImageIcon,
    title: 'Background: tidy, not fancy',
    body: 'A plain wall, a bookshelf, or a plant behind you looks great. A pile of laundry is distracting. Most platforms also let you blur your background — look for "Background Effects" or "Blur".',
  },
  {
    icon: Sparkles,
    title: 'Test the camera before the call',
    body: 'Five minutes before a scheduled call, open the camera app on your phone (or the Photo Booth app on Mac) to check how you look. Lighting? Background? Hair? Do a quick fix now instead of on camera.',
  },
];

/* ── Accessibility ─────────────────────────────────────── */

interface AccessFeature {
  platform: string;
  captions: string;
  otherFeatures: string;
}

const ACCESSIBILITY_TABLE: AccessFeature[] = [
  {
    platform: 'Zoom',
    captions: 'FREE live captions. More (three dots) → Captions → Show Captions.',
    otherFeatures: 'Phone dial-in (no video needed), large font in chat, screen reader support.',
  },
  {
    platform: 'FaceTime',
    captions: 'iPhone/iPad live captions via Settings → Accessibility → Live Captions.',
    otherFeatures: 'VoiceOver screen reader, Zoom magnifier, Dynamic Type for larger text.',
  },
  {
    platform: 'Google Meet',
    captions: 'Best-quality captions. Click CC icon. Supports 10+ languages.',
    otherFeatures: 'Phone dial-in, keyboard shortcuts, Chromevox screen reader.',
  },
  {
    platform: 'Skype',
    captions: 'Live subtitles during calls, plus real-time translation.',
    otherFeatures: 'Large text option, screen reader compatible.',
  },
  {
    platform: 'WhatsApp',
    captions: 'No native captions — use phone-level live captions (iOS/Android settings).',
    otherFeatures: 'Voice messages, call-waiting, works on slow internet.',
  },
  {
    platform: 'Messenger',
    captions: 'Automatic captions (CC button in call menu).',
    otherFeatures: 'High-contrast mode, text size in chats, Voice messages.',
  },
  {
    platform: 'GrandPad',
    captions: 'Hearing-aid-compatible speaker; captions vary by model.',
    otherFeatures: 'Very large icons, 24/7 human help button, no passwords.',
  },
];

/* ── Grandkid-specific tips ────────────────────────────── */

interface GrandkidTip {
  icon: LucideIcon;
  title: string;
  body: string;
}

const GRANDKID_TIPS: GrandkidTip[] = [
  {
    icon: BookOpen,
    title: 'Bedtime story over video',
    body: 'Pick a favorite picture book. Open a scheduled video call with your grandchild at 7:30 pm (their bedtime). Hold the book so the pages face the camera. Read slow, point to pictures, ask "What do you see?". Even ages 2 to 4 will sit still for this. Keep a small stack of 3 or 4 books by your video-call spot.',
  },
  {
    icon: Coffee,
    title: 'Virtual tea time',
    body: 'Set up your camera on the kitchen table. Make yourself a cup of tea and a cookie. Your grandchild does the same on their end (or juice and graham crackers). Chat for 20 minutes like you are sitting across from each other. Works beautifully for kids 5 and up who want "grown-up time".',
  },
  {
    icon: Utensils,
    title: 'Dinner together',
    body: 'Prop the phone or tablet at one end of the dining table, like it is another seat. Have dinner at the same time. Talk about your day. Kids love feeling like grandparents are "at the table". Good for Sunday night family dinners — use WhatsApp so the whole family can pop in.',
  },
  {
    icon: ImageIcon,
    title: 'Show their art on screen',
    body: 'Ask their parent to point the phone camera at a drawing, painting, or craft project. You see it full-screen, you can point to specific parts and ask questions. For older grandkids (7+), you can do the opposite: they watch while you garden, bake, or fix something — a live "Mr. Rogers" tour from your home.',
  },
  {
    icon: Heart,
    title: 'Play peekaboo or "I Spy"',
    body: 'For babies and toddlers, hold up a stuffed animal, cover the camera with your hand, uncover and say "peekaboo". They laugh, you laugh. For kids 4+, "I spy with my little eye" works great — pick items in your room and give clues. Short attention spans mean 10-15 minute calls are better than an hour.',
  },
  {
    icon: Calendar,
    title: 'Set a weekly standing call',
    body: 'Pick one day a week and stick to it — Sunday dinner, Saturday morning, Wednesday after school. Kids remember it, look forward to it, and "Grandma time" becomes a tradition. Consistency matters more than length.',
  },
];

/* ── Scheduling recurring calls ────────────────────────── */

interface ScheduleStep {
  platform: string;
  steps: string;
  addToCalendar: string;
}

const SCHEDULE_STEPS: ScheduleStep[] = [
  {
    platform: 'Zoom',
    steps: 'Open Zoom → Schedule → title it "Sunday Call" → pick date/time → set Recurrence to Weekly → Save.',
    addToCalendar: 'Zoom offers to add to your calendar automatically after you save.',
  },
  {
    platform: 'FaceTime',
    steps: 'FaceTime → Create Link → Messages or Mail → send to family. Link reusable any time.',
    addToCalendar: 'Add the link to a recurring event in Apple Calendar: Weekly, time, paste link in Notes field.',
  },
  {
    platform: 'Google Meet',
    steps: 'calendar.google.com → Create → Event → Add Google Meet video → Repeat Weekly → Save.',
    addToCalendar: 'Already on Google Calendar — your family gets an email invite with the link.',
  },
  {
    platform: 'Skype',
    steps: 'Skype → Meetings → Create Free Meeting → copy link.',
    addToCalendar: 'Open your calendar app (Google, Apple, Outlook) and make a weekly event. Paste the Skype link in the notes.',
  },
  {
    platform: 'WhatsApp',
    steps: 'No built-in scheduler. Create a family group chat and agree on a time.',
    addToCalendar: 'Add "Sunday 6 pm — WhatsApp with family" as a weekly reminder on your phone.',
  },
  {
    platform: 'Messenger',
    steps: 'Messenger → Calls tab → Create Call Link → share with family. Link works every week.',
    addToCalendar: 'Make it a recurring event in your phone calendar and paste the Messenger link in the notes.',
  },
  {
    platform: 'GrandPad',
    steps: 'No scheduled calls — family members tap the senior\'s photo in their GrandPad app at the agreed time.',
    addToCalendar: 'Each family member sets a weekly phone reminder so they remember to call.',
  },
];

/* ── Troubleshooting ───────────────────────────────────── */

interface TroubleshootItem {
  title: string;
  body: string;
  icon: LucideIcon;
}

const TROUBLESHOOT: TroubleshootItem[] = [
  {
    icon: CameraOff,
    title: 'They cannot see me (no video)',
    body: 'Three things to check in this order: (1) Is the camera icon in the call showing a red slash? Tap it to turn the camera back on. (2) Is a sticker or piece of tape covering the camera lens? (3) Did the app get camera permission? Go to Settings → Privacy → Camera on iPhone, or Settings → Apps → [app name] → Permissions on Android, and make sure it is ON.',
  },
  {
    icon: MicOff,
    title: 'They cannot hear me (no sound)',
    body: 'Check the microphone icon — red slash means muted, tap to unmute. Still no sound? The app may not have microphone permission. iPhone: Settings → Privacy → Microphone. Android: Settings → Apps → [app] → Permissions. Still nothing? Try unplugging any headphones — the mic may be routing to an old Bluetooth earpiece in a drawer.',
  },
  {
    icon: Mic,
    title: 'Loud echo or feedback',
    body: 'Echo means the sound from your speaker is going back into your microphone. Put on headphones or wired earbuds — fixes it immediately. If you do not have headphones, move the microphone further from the speaker, or turn down your speaker volume.',
  },
  {
    icon: Video,
    title: 'Video keeps freezing or looks pixelated',
    body: 'This is almost always a slow internet connection. Move closer to your WiFi router. Close other apps that use internet (streaming, downloads). Turn off your own camera — video off uses much less internet, and the other person still hears you clearly.',
  },
  {
    icon: AlertTriangle,
    title: 'The call keeps dropping',
    body: 'If the call drops every few minutes, your internet is likely the problem. Restart your WiFi router (unplug for 30 seconds, plug back in). Move closer to the router. If the problem continues, call your internet provider — you may need a plan with more bandwidth, especially if others in your home stream video at the same time.',
  },
  {
    icon: Camera,
    title: 'Camera permission denied (keeps asking)',
    body: 'You may have accidentally tapped "Do Not Allow" when the app asked for camera access. iPhone: Settings → Privacy & Security → Camera → find the app → turn ON. Android: Settings → Apps → find the app → Permissions → Camera → Allow. Restart the app after.',
  },
  {
    icon: Mic,
    title: 'Microphone permission denied',
    body: 'Same fix path as camera, but under Microphone instead. iPhone: Settings → Privacy & Security → Microphone → app → ON. Android: Settings → Apps → app → Permissions → Microphone → Allow.',
  },
  {
    icon: Monitor,
    title: 'I can see them but they cannot see me',
    body: 'This usually means your camera is off on your end. Tap the camera icon in the call — red slash means off. If that is fine, the app may not have camera permission (see above). Sometimes restarting the app fixes it.',
  },
];

/* ── FAQ ───────────────────────────────────────────────── */

interface FaqItem {
  q: string;
  a: string;
}

const FAQ: FaqItem[] = [
  {
    q: 'Which platform is best for calling my grandkids?',
    a: 'The best platform is whichever one their parents use most. Ask the parent directly: "Which do you prefer — FaceTime, Zoom, WhatsApp, or Messenger?" If everyone has iPhones, FaceTime is the simplest. If the family uses Gmail a lot, Google Meet. If they are international, WhatsApp. If they are on Facebook often, Messenger. Zoom is the safest "everyone can use it" choice across devices.',
  },
  {
    q: 'Can I video call without a smartphone?',
    a: 'Yes — three good options. GrandPad is a senior-specific tablet with cellular built in (no internet bill needed). Amazon Echo Show has a large screen and Alexa can make Echo-to-Echo calls on voice command. Meta Portal was discontinued but used units still work for Messenger calls. Any modern TV with a USB camera attached can also run Zoom or Meet through a browser.',
  },
  {
    q: 'Is video calling private? Can strangers listen in?',
    a: 'All 7 platforms encrypt video calls, meaning the service cannot easily listen in. FaceTime and WhatsApp use end-to-end encryption (strongest — even the company cannot listen). Zoom and Meet encrypt in transit but have more access. For extra safety: do not share the meeting link on public social media. If you are hosting Zoom, turn ON "Waiting Room" so you approve who joins.',
  },
  {
    q: 'Do I need a separate microphone or fancy webcam?',
    a: 'No. The microphone and camera built into any smartphone, tablet, or laptop from the past 10 years is plenty. A $25 pair of wired earbuds will improve audio more than any fancy webcam. Only if you do a lot of professional calls or podcasting should you consider upgrading.',
  },
  {
    q: 'How much data does a video call use?',
    a: 'About 500 MB to 1 GB per hour. On unlimited home WiFi, this is never a problem. On a cellular data plan, a full hour-long video call can use a big chunk of a monthly data allowance. If you are on cellular, use WiFi when possible, or turn off your video (voice-only uses only 30-60 MB per hour).',
  },
  {
    q: 'Why do I look orange or washed out on camera?',
    a: 'Most likely a lighting issue. Overhead lights cast shadows under your eyes. Warm bulbs make skin look orange. Sit by a window with daylight, or get a cheap "ring light" (about $15 on Amazon) to put behind your camera. Also check the camera app settings — some apps have a "Portrait Lighting" toggle that helps.',
  },
  {
    q: 'My grandkid sent me a "Zoom link" but I do not have Zoom — what now?',
    a: 'Tap the link anyway. Zoom will ask if you want to "Join from Browser" — tap that. You can join any Zoom call from Chrome, Safari, or Edge without installing the app. Same is true for Google Meet and Messenger call links.',
  },
  {
    q: 'Can I join a Zoom call using only my regular phone (no video)?',
    a: 'Yes. Every Zoom invitation includes a phone dial-in number. Tap the phone number in the invite — your phone dials in, you type the meeting ID, and you are in the call by voice only. Useful when your internet is spotty, or you are driving (only hands-free, please).',
  },
  {
    q: 'Is there a way to record a call as a keepsake?',
    a: 'Yes, on most platforms — BUT always ASK the other person first. Zoom: click Record (host permission needed). FaceTime: screen record the whole thing (iPhone Control Center → red circle). Meet: paid plans only. Skype: built-in recorder. WhatsApp/Messenger: use your phone\'s screen recorder. Saving and sharing a call without consent is illegal in many states — always ask first.',
  },
  {
    q: 'Can I use two devices at once (phone for video, speaker for audio)?',
    a: 'On Zoom and Meet, yes — the "companion device" feature lets your phone show video while a Bluetooth speaker plays audio. For most seniors, the easier answer is: use one device (the one with the biggest screen you can) and pair it with a Bluetooth speaker for louder sound.',
  },
];

/* ── Quick "which platform" picker ─────────────────────── */

interface PickerItem {
  id: PlatformId;
  reason: string;
}

const PICKER_GUIDE: PickerItem[] = [
  { id: 'facetime', reason: 'Everyone in the family has iPhone/iPad/Mac' },
  { id: 'zoom', reason: 'A mix of devices (some iPhone, some Android, some computer)' },
  { id: 'meet', reason: 'The family is on Gmail and uses Google Calendar' },
  { id: 'whatsapp', reason: 'International family, or family already texts on WhatsApp' },
  { id: 'messenger', reason: 'You already use Facebook every day' },
  { id: 'skype', reason: 'Calling someone\'s regular landline internationally' },
  { id: 'grandpad', reason: 'A grandparent who finds regular tablets too complicated' },
];

/* ── Main component ────────────────────────────────────── */

export default function VideoCallHelper() {
  const [selectedId, setSelectedId] = useState<PlatformId | null>(null);

  const platform = useMemo<PlatformInfo | null>(
    () => (selectedId ? PLATFORMS[selectedId] : null),
    [selectedId],
  );

  const pick = (id: PlatformId) => {
    setSelectedId(id);
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const el = document.getElementById('platform-detail');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      <SEOHead
        title="Video Call Helper — Zoom, FaceTime, Google Meet, WhatsApp & More"
        description="A senior-friendly guide to setting up and using video calls on Zoom, FaceTime, Google Meet, Skype, WhatsApp, Facebook Messenger, and GrandPad. Plain-English step-by-step."
        path="/tools/video-call-helper"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14 relative">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="video-call-helper"
                title="Video Call Helper"
                url="/tools/video-call-helper"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Video Calls · Setup & Troubleshooting</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14">
              Video Call Helper
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Zoom, FaceTime, Google Meet, Skype, WhatsApp, Messenger, or GrandPad — pick your platform and
              follow a plain-English setup so your next call with the grandkids goes smoothly.
            </p>
          </div>
        </section>

        {/* Quick picker */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Which platform should I use?</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Short answer: the one your family already uses. If you are starting from scratch, pick based on
            what devices your grandkids and their parents have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {PICKER_GUIDE.map((p) => {
              const info = PLATFORMS[p.id];
              const Icon = info.icon;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => pick(p.id)}
                  className="text-left rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-colors p-5 min-h-14 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">{info.name}</div>
                    <div className="text-base text-muted-foreground leading-relaxed">{p.reason}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                </button>
              );
            })}
          </div>
        </section>

        {/* Platform picker tabs */}
        <section className="border-t border-border bg-muted/30" id="platform-detail">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Pick your platform</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Tap a platform below for step-by-step setup, how to make a call, share your screen, and the
              confusing parts most seniors hit.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {PLATFORM_ORDER.map((id) => {
                const info = PLATFORMS[id];
                const Icon = info.icon;
                const active = selectedId === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => pick(id)}
                    className={[
                      'px-4 py-3 min-h-14 rounded-xl border-2 text-base font-medium transition-colors flex items-center gap-2',
                      active
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:border-primary/40',
                    ].join(' ')}
                  >
                    <Icon className="w-5 h-5" />
                    {info.name}
                  </button>
                );
              })}
            </div>

            {platform ? (
              <PlatformDetail info={platform} />
            ) : (
              <Card>
                <CardContent className="p-6 md:p-8 text-center space-y-3">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary">
                    <Video className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Pick any platform above to get started</h3>
                  <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Each walkthrough covers the same things in the same order, so once you learn one, the
                    others will feel familiar.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Etiquette */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-primary" />
            Video call etiquette — the basics that make you look great
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            A few small choices about lighting, camera angle, and audio will make every call more pleasant
            for you and everyone on the other end.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ETIQUETTE.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1.5">{item.title}</h3>
                      <p className="text-base leading-relaxed">{item.body}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Accessibility */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Accessibility className="w-7 h-7 text-primary" />
              Accessibility — captions, hearing aids, and more
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Hard of hearing? Prefer to read? Most platforms now have live captions — here is where to turn
              them on for each one.
            </p>

            <Card>
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-4 font-semibold">Platform</th>
                      <th className="text-left p-4 font-semibold">
                        <span className="inline-flex items-center gap-1.5">
                          <Captions className="w-4 h-4" />
                          Live Captions
                        </span>
                      </th>
                      <th className="text-left p-4 font-semibold">Other accessibility features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ACCESSIBILITY_TABLE.map((row) => (
                      <tr key={row.platform} className="border-b border-border last:border-0">
                        <td className="p-4 font-semibold align-top">{row.platform}</td>
                        <td className="p-4 align-top leading-relaxed">{row.captions}</td>
                        <td className="p-4 align-top leading-relaxed">{row.otherFeatures}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-primary/5 border-primary/30">
              <CardContent className="p-5 flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-1.5">No video? Join by phone instead.</h3>
                  <p className="text-base leading-relaxed">
                    Zoom and Google Meet both have a phone dial-in option — every invitation includes a
                    regular phone number. Dial it, type the meeting ID, and you are on the call by voice
                    only. Handy for days when your WiFi is acting up or you are away from home.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Grandkid tips */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <Heart className="w-7 h-7 text-primary" />
            Video call ideas for grandparents
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            A video call does not have to be "What did you do today?" for five minutes. These activity
            ideas turn a call into something kids and grandkids look forward to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GRANDKID_TIPS.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card key={tip.title} className="border-primary/30">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1.5">{tip.title}</h3>
                      <p className="text-base leading-relaxed">{tip.body}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Recurring scheduling */}
        <section className="border-t border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
              <Calendar className="w-7 h-7 text-primary" />
              Set a standing weekly call
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              The single best way to build a video-call habit: pick one day and time each week, send the
              calendar invite, and stick to it. Here is how on each platform.
            </p>

            <Card>
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-4 font-semibold">Platform</th>
                      <th className="text-left p-4 font-semibold">Create the recurring meeting</th>
                      <th className="text-left p-4 font-semibold">Add to your calendar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCHEDULE_STEPS.map((row) => (
                      <tr key={row.platform} className="border-b border-border last:border-0">
                        <td className="p-4 font-semibold align-top">{row.platform}</td>
                        <td className="p-4 align-top leading-relaxed">{row.steps}</td>
                        <td className="p-4 align-top leading-relaxed">{row.addToCalendar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="container py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-3">
            <HelpCircle className="w-7 h-7 text-primary" />
            Troubleshooting — the usual suspects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            If something is off, the fix is usually one of these eight issues. Start at the top and work
            down.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TROUBLESHOOT.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1.5">{item.title}</h3>
                      <p className="text-base leading-relaxed">{item.body}</p>
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
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Frequently asked questions</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Answers to what seniors actually ask when they are getting started with video calls.
            </p>

            <div className="space-y-4 max-w-4xl">
              {FAQ.map((item) => (
                <Card key={item.q}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                    <p className="text-base leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="container py-10 md:py-14">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                <Star className="w-7 h-7 text-primary" />
                What to do next
              </h2>
              <ul className="space-y-3 text-base md:text-lg leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    Pick one platform from above and do a five-minute test call with a family member
                    BEFORE your scheduled call with the grandkids.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    Test your lighting and camera angle — make a quick selfie video in your phone camera
                    to see how your face looks on screen.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    Set a standing weekly call on the calendar. Consistency matters more than length — 15
                    minutes every Sunday beats an hour once a month.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    Explore related tools:{' '}
                    <Link to="/tools/meeting-setup" className="text-primary underline font-medium">
                      Meeting Setup Helper
                    </Link>
                    ,{' '}
                    <Link to="/tools/voice-assistant-setup" className="text-primary underline font-medium">
                      Voice Assistant Setup
                    </Link>
                    , or{' '}
                    <Link to="/tools/hearing-aid-tech-helper" className="text-primary underline font-medium">
                      Hearing Aid Tech Helper
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    Still stuck?{' '}
                    <Link to="/get-help" className="text-primary underline font-medium">
                      Book a 1-on-1 session with a TekSure technician
                    </Link>{' '}
                    for a guided walkthrough.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ── Platform detail component ─────────────────────────── */

function PlatformDetail({ info }: { info: PlatformInfo }) {
  const Icon = info.icon;

  const sections: { title: string; body: string; icon: LucideIcon }[] = [
    { title: 'Install the app', body: info.install, icon: Monitor },
    { title: 'Sign in', body: info.signIn, icon: CheckCircle2 },
    { title: 'Make your first call', body: info.firstCall, icon: Video },
    { title: 'Answer an incoming call', body: info.answerCall, icon: Phone },
    { title: 'Share your screen', body: info.shareScreen, icon: Share2 },
    { title: 'Mute and unmute your microphone', body: info.muteMic, icon: Mic },
    { title: 'Turn the camera on or off', body: info.cameraOnOff, icon: Camera },
    { title: 'Turn on live captions', body: info.captions, icon: Captions },
    { title: 'Schedule a recurring call', body: info.schedule, icon: Calendar },
  ];

  return (
    <Card className="border-primary/30">
      <CardContent className="p-6 md:p-8 space-y-6">
        <header className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1">{info.name}</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{info.tagline}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-lg bg-muted/40 p-4">
            <div className="text-sm font-medium text-muted-foreground mb-1">Best for</div>
            <div className="text-base leading-relaxed">{info.bestFor}</div>
          </div>
          <div className="rounded-lg bg-muted/40 p-4">
            <div className="text-sm font-medium text-muted-foreground mb-1">Price</div>
            <div className="text-base leading-relaxed">{info.price}</div>
          </div>
          <div className="rounded-lg bg-muted/40 p-4">
            <div className="text-sm font-medium text-muted-foreground mb-1">Account needed</div>
            <div className="text-base leading-relaxed">{info.needsAccount}</div>
          </div>
          <div className="rounded-lg bg-muted/40 p-4">
            <div className="text-sm font-medium text-muted-foreground mb-1">Works on</div>
            <div className="text-base leading-relaxed">{info.worksOn}</div>
          </div>
        </div>

        <div className="space-y-5 pt-2">
          {sections.map((s) => {
            const SIcon = s.icon;
            return (
              <div key={s.title} className="border-l-4 border-primary/40 pl-4 md:pl-5">
                <h4 className="font-semibold text-lg md:text-xl mb-2 flex items-center gap-2">
                  <SIcon className="w-5 h-5 text-primary shrink-0" />
                  {s.title}
                </h4>
                <p className="text-base md:text-lg leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-border">
          <h4 className="font-semibold text-lg md:text-xl mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-600" />
            Common confusion on {info.name}
          </h4>
          <div className="space-y-3">
            {info.confusion.map((c) => (
              <Card key={c.title} className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/40">
                <CardContent className="p-4 md:p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-base md:text-lg mb-1">{c.title}</h5>
                    <p className="text-base leading-relaxed">{c.body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <a
            href={info.supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary underline font-medium text-base"
          >
            Official {info.supportLabel}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
