import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Brain,
  RotateCcw,
  Check,
  X,
  Star,
  TrendingUp,
  Printer,
  Plus,
  Sparkles,
  ArrowRight,
  BookOpen,
  Shield,
  Flame,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────────────────────── */

type CardCategory =
  | 'internet'
  | 'device'
  | 'security'
  | 'app'
  | 'storage'
  | 'accounts'
  | 'messaging';

type CardDifficulty = 'easy' | 'medium' | 'hard';

interface FlashCard {
  id: string;
  front: string;
  back: string;
  category: CardCategory;
  difficulty: CardDifficulty;
}

interface CardProgress {
  // last rating the user gave the card (1=stuck, 2=fuzzy, 3=knew it)
  lastRating?: 1 | 2 | 3;
  // streak of correct answers in a row (rating >= 2)
  streak: number;
  // total times the card was reviewed
  reviews: number;
  // epoch ms when the card is next due
  nextDue: number;
  // epoch ms of last review
  lastReviewed?: number;
  // gap in days that was used for the next review (for compounding)
  lastGapDays: number;
}

interface Progressa {
  cards: Record<string, CardProgress>;
  streakDays: number;
  longestStreak: number;
  lastSessionDay?: string; // YYYY-MM-DD
  dailyQuota: number;
  customCards: FlashCard[];
}

/* ──────────────────────────────────────────────────────────────────────────
   Card data — 108 terms
   ────────────────────────────────────────────────────────────────────────── */

const CARDS: FlashCard[] = [
  { id: 'wifi', front: 'Wi-Fi', back: 'Wireless internet in your home or a cafe. Example: "Connect your phone to the home Wi-Fi so it does not use cellular data."', category: 'internet', difficulty: 'easy' },
  { id: 'bluetooth', front: 'Bluetooth', back: 'Short-range wireless that pairs two nearby devices. Example: "Turn on Bluetooth to connect your wireless headphones."', category: 'device', difficulty: 'easy' },
  { id: 'password', front: 'Password', back: 'A secret phrase used to unlock an account. Example: "Use a long password with letters, numbers, and symbols."', category: 'security', difficulty: 'easy' },
  { id: 'passkey', front: 'Passkey', back: 'A newer replacement for passwords that uses your face or fingerprint. Example: "Log in with a passkey — no typing required."', category: 'security', difficulty: 'medium' },
  { id: '2fa', front: '2FA (Two-Factor Authentication)', back: 'A second check after your password — usually a code texted to your phone. Example: "Turn on 2FA so a stranger with your password still cannot get in."', category: 'security', difficulty: 'medium' },
  { id: 'mfa', front: 'MFA (Multi-Factor Authentication)', back: 'Like 2FA but with two or more extra checks. Example: "Banks often require MFA: password plus a code plus a fingerprint."', category: 'security', difficulty: 'medium' },
  { id: 'captcha', front: 'CAPTCHA', back: 'Those puzzles that ask you to pick all the buses to prove you are human. Example: "Solve the CAPTCHA to continue to the site."', category: 'security', difficulty: 'easy' },
  { id: 'cookie', front: 'Cookie', back: 'A small file a website saves on your device to remember you. Example: "Cookies keep you signed in so you do not log in every visit."', category: 'internet', difficulty: 'easy' },
  { id: 'cache', front: 'Cache', back: 'A stash of saved data that helps apps load faster the next time. Example: "Clear the cache if a web page looks stuck on an old version."', category: 'storage', difficulty: 'medium' },
  { id: 'browser', front: 'Browser', back: 'The app you use to visit websites, like Chrome, Safari, Edge, or Firefox. Example: "Open your browser and type teksure.com."', category: 'internet', difficulty: 'easy' },
  { id: 'tab', front: 'Tab', back: 'A single web page open inside your browser. You can have many open at once. Example: "Open a new tab to search while keeping this page open."', category: 'internet', difficulty: 'easy' },
  { id: 'bookmark', front: 'Bookmark', back: 'A saved shortcut to a website. Example: "Bookmark your bank so you do not mistype the address."', category: 'internet', difficulty: 'easy' },
  { id: 'download', front: 'Download', back: 'Saving a file from the internet to your device. Example: "Download the photo to view it later, even without internet."', category: 'internet', difficulty: 'easy' },
  { id: 'upload', front: 'Upload', back: 'Sending a file from your device up to the internet or a cloud service. Example: "Upload the photo so your family can see it."', category: 'internet', difficulty: 'easy' },
  { id: 'streaming', front: 'Streaming', back: 'Watching or listening over the internet without keeping a copy. Example: "Netflix is streaming — the movie plays live from the internet."', category: 'internet', difficulty: 'easy' },
  { id: 'buffer', front: 'Buffer / Buffering', back: 'The pause when a video loads a little ahead so it plays smoothly. Example: "If your video keeps buffering, your internet is slow right now."', category: 'internet', difficulty: 'medium' },
  { id: 'megabyte', front: 'Megabyte (MB)', back: 'A unit for file size. Example: "A phone photo is about 3 MB — roughly one millionth of a gigabyte… no, one thousandth."', category: 'storage', difficulty: 'medium' },
  { id: 'gigabyte', front: 'Gigabyte (GB)', back: 'A bigger unit — 1,000 MB. Example: "A two-hour movie is about 4 GB."', category: 'storage', difficulty: 'medium' },
  { id: 'cloud', front: 'The Cloud', back: 'Online storage that lives on someone else\'s computers — you reach it over the internet. Example: "Your photos back up to the cloud so losing your phone does not lose them."', category: 'storage', difficulty: 'easy' },
  { id: 'sync', front: 'Sync', back: 'Keeping the same info matched across devices. Example: "When your email syncs, new messages appear on both your phone and laptop."', category: 'storage', difficulty: 'medium' },
  { id: 'backup', front: 'Backup', back: 'An extra copy of your files in a safe place. Example: "Back up your phone so a dead battery does not wipe out your photos."', category: 'storage', difficulty: 'easy' },
  { id: 'crash', front: 'Crash', back: 'When an app or computer suddenly stops working. Example: "The app crashed and closed by itself — reopen it."', category: 'device', difficulty: 'easy' },
  { id: 'freeze', front: 'Freeze', back: 'When the screen stops responding to taps or clicks. Example: "My phone froze — nothing moves when I tap."', category: 'device', difficulty: 'easy' },
  { id: 'restart', front: 'Restart', back: 'Turning a device off and back on to clear up problems. Example: "Restart your router — it fixes most internet hiccups."', category: 'device', difficulty: 'easy' },
  { id: 'software', front: 'Software', back: 'The programs and apps on a device — the instructions, not the physical parts. Example: "Update your software to stay safe from bugs."', category: 'device', difficulty: 'medium' },
  { id: 'hardware', front: 'Hardware', back: 'The physical parts of a device you can touch — screen, keyboard, camera. Example: "A cracked screen is a hardware problem, not a software one."', category: 'device', difficulty: 'medium' },
  { id: 'firmware', front: 'Firmware', back: 'The built-in software that runs a piece of hardware, like your router. Example: "A firmware update can patch security holes in your router."', category: 'device', difficulty: 'hard' },
  { id: 'os', front: 'OS (Operating System)', back: 'The main software that runs a device — iOS, Android, Windows, macOS. Example: "Keep your OS up to date for the newest safety fixes."', category: 'device', difficulty: 'medium' },
  { id: 'app', front: 'App', back: 'Short for "application" — a small program you install on a phone or computer. Example: "Download the weather app from the App Store."', category: 'app', difficulty: 'easy' },
  { id: 'widget', front: 'Widget', back: 'A mini-view of an app that sits on your home screen. Example: "Add a weather widget so you see the forecast without opening the app."', category: 'app', difficulty: 'medium' },
  { id: 'icon', front: 'Icon', back: 'The little picture that represents an app or file. Example: "Tap the Messages icon to open texts."', category: 'device', difficulty: 'easy' },
  { id: 'cursor', front: 'Cursor', back: 'The little arrow or blinking line on a computer screen. Example: "Move the cursor to the search box and click."', category: 'device', difficulty: 'easy' },
  { id: 'click', front: 'Click', back: 'Pressing the left mouse button once. Example: "Click the blue button to sign in."', category: 'device', difficulty: 'easy' },
  { id: 'tap', front: 'Tap', back: 'Briefly touching the screen with one finger. Example: "Tap the Home button to go back."', category: 'device', difficulty: 'easy' },
  { id: 'swipe', front: 'Swipe', back: 'Sliding your finger across the screen. Example: "Swipe up from the bottom to close an app."', category: 'device', difficulty: 'easy' },
  { id: 'pinch', front: 'Pinch', back: 'Using two fingers to zoom in or out on the screen. Example: "Pinch out to make text bigger in a photo."', category: 'device', difficulty: 'medium' },
  { id: 'scroll', front: 'Scroll', back: 'Moving up or down a long page. Example: "Scroll down to read the rest of the article."', category: 'device', difficulty: 'easy' },
  { id: 'notification', front: 'Notification', back: 'An alert your phone shows for news, texts, or app updates. Example: "Turn off notifications at night to sleep better."', category: 'device', difficulty: 'easy' },
  { id: 'popup', front: 'Popup', back: 'A small window that appears on top of what you are doing. Example: "Close the popup before you type in the form."', category: 'internet', difficulty: 'easy' },
  { id: 'ad', front: 'Ad (Advertisement)', back: 'Paid marketing that shows up on websites and apps. Example: "Scammy ads sometimes look like real buttons — read carefully."', category: 'internet', difficulty: 'easy' },
  { id: 'popup-blocker', front: 'Pop-up Blocker', back: 'A browser setting that stops popups from appearing. Example: "Turn on the pop-up blocker to cut down on distractions."', category: 'security', difficulty: 'medium' },
  { id: 'spam', front: 'Spam', back: 'Unwanted junk email, usually selling something or phishing. Example: "Move that message to the spam folder."', category: 'messaging', difficulty: 'easy' },
  { id: 'phishing', front: 'Phishing', back: 'A scam message pretending to be a real company to steal your info. Example: "Phishing emails often say your account will be closed — do not click the link."', category: 'security', difficulty: 'medium' },
  { id: 'malware', front: 'Malware', back: 'Any bad software that harms your device or steals data. Example: "Malware can hide in free downloads from shady sites."', category: 'security', difficulty: 'medium' },
  { id: 'virus', front: 'Virus', back: 'A type of malware that spreads from device to device. Example: "An antivirus program scans for viruses and removes them."', category: 'security', difficulty: 'easy' },
  { id: 'trojan', front: 'Trojan', back: 'Malware disguised as a helpful program. Example: "That fake "cleaner" app turned out to be a trojan."', category: 'security', difficulty: 'hard' },
  { id: 'firewall', front: 'Firewall', back: 'A digital gatekeeper that blocks risky internet traffic. Example: "Your router has a firewall built in."', category: 'security', difficulty: 'hard' },
  { id: 'vpn', front: 'VPN (Virtual Private Network)', back: 'A service that hides your internet activity and location. Example: "Use a VPN on public Wi-Fi so strangers cannot snoop."', category: 'security', difficulty: 'medium' },
  { id: 'ip-address', front: 'IP Address', back: 'A number that identifies your device on the internet, like a street address. Example: "Each device on your Wi-Fi has its own IP address."', category: 'internet', difficulty: 'hard' },
  { id: 'url', front: 'URL', back: 'A website address, like https://teksure.com. Example: "Type the URL into the address bar."', category: 'internet', difficulty: 'medium' },
  { id: 'hyperlink', front: 'Hyperlink', back: 'Clickable text or an image that takes you to another page. Example: "Tap the blue hyperlink to open the help article."', category: 'internet', difficulty: 'medium' },
  { id: 'https', front: 'HTTPS', back: 'A secure version of a web address — look for the lock icon. Example: "Your bank site should start with https, not http."', category: 'security', difficulty: 'medium' },
  { id: 'encryption', front: 'Encryption', back: 'Scrambling data so only the right person can read it. Example: "Text messages in iMessage use encryption end to end."', category: 'security', difficulty: 'hard' },
  { id: 'pin', front: 'PIN', back: 'A short code — usually 4 to 6 numbers — that unlocks a device or card. Example: "Never share your debit card PIN over the phone."', category: 'security', difficulty: 'easy' },
  { id: 'login', front: 'Login', back: 'The step of signing into an account with a username and password. Example: "Login to your email to read new messages."', category: 'accounts', difficulty: 'easy' },
  { id: 'username', front: 'Username', back: 'The name you use to sign into an account — often your email. Example: "Your username is the one you type before the password."', category: 'accounts', difficulty: 'easy' },
  { id: 'account', front: 'Account', back: 'Your personal space inside a website or app, tied to your login. Example: "Create an account so your notes save between visits."', category: 'accounts', difficulty: 'easy' },
  { id: 'profile', front: 'Profile', back: 'Your public info inside an app — name, photo, bio. Example: "Update your profile photo on Facebook."', category: 'accounts', difficulty: 'easy' },
  { id: 'subscription', front: 'Subscription', back: 'A recurring monthly or yearly charge for a service. Example: "Netflix is a subscription — cancel any time in your account settings."', category: 'accounts', difficulty: 'easy' },
  { id: 'trial', front: 'Trial', back: 'A free test period before a paid subscription kicks in. Example: "The 7-day trial will auto-charge your card unless you cancel."', category: 'accounts', difficulty: 'easy' },
  { id: 'premium', front: 'Premium', back: 'A paid upgrade with extra features. Example: "Spotify Premium removes ads and lets you download songs."', category: 'accounts', difficulty: 'easy' },
  { id: 'freemium', front: 'Freemium', back: 'Free to start, with paid add-ons. Example: "Most games are freemium — you can play for free but pay for power-ups."', category: 'accounts', difficulty: 'medium' },
  { id: 'open-source', front: 'Open Source', back: 'Software whose code is public and free to use or change. Example: "Firefox is an open-source browser — the code is public."', category: 'app', difficulty: 'hard' },
  { id: 'ai', front: 'AI (Artificial Intelligence)', back: 'Software that can answer questions, write text, or make pictures. Example: "AI tools like ChatGPT can help draft an email."', category: 'app', difficulty: 'medium' },
  { id: 'algorithm', front: 'Algorithm', back: 'A set of rules a computer follows. Example: "The Facebook algorithm decides which posts you see first."', category: 'app', difficulty: 'hard' },
  { id: 'search-engine', front: 'Search Engine', back: 'A website that finds other websites — Google, Bing, DuckDuckGo. Example: "Type your question into the search engine."', category: 'internet', difficulty: 'easy' },
  { id: 'hotspot', front: 'Hotspot', back: 'Using your phone\'s cellular data to create Wi-Fi for other devices. Example: "Turn on your hotspot so your laptop can get online."', category: 'internet', difficulty: 'medium' },
  { id: 'router', front: 'Router', back: 'The box in your home that creates your Wi-Fi network. Example: "Restart your router to fix spotty Wi-Fi."', category: 'internet', difficulty: 'medium' },
  { id: 'modem', front: 'Modem', back: 'The box that connects your home to your internet company. Example: "The modem is the one with the cable from the wall."', category: 'internet', difficulty: 'medium' },
  { id: 'ssid', front: 'SSID', back: 'The name of your Wi-Fi network. Example: "Pick your SSID from the list of nearby networks."', category: 'internet', difficulty: 'hard' },
  { id: 'ethernet', front: 'Ethernet', back: 'A wired internet connection using a cable. Example: "Ethernet is faster and steadier than Wi-Fi."', category: 'internet', difficulty: 'medium' },
  { id: 'usb', front: 'USB', back: 'A common plug and cable for charging and data. Example: "Charge your phone with the USB cable."', category: 'device', difficulty: 'easy' },
  { id: 'hdmi', front: 'HDMI', back: 'A cable that sends video and sound to a TV or monitor. Example: "Plug the HDMI cable from the laptop into the TV."', category: 'device', difficulty: 'medium' },
  { id: 'sd-card', front: 'SD Card', back: 'A tiny memory card, often used in cameras or some phones. Example: "The SD card holds extra photos the phone does not have room for."', category: 'storage', difficulty: 'medium' },
  { id: 'sim', front: 'SIM Card', back: 'A small card inside your phone that holds your number. Example: "If you switch phones, move the SIM over too."', category: 'device', difficulty: 'medium' },
  { id: 'esim', front: 'eSIM', back: 'A digital SIM built into the phone — no plastic card. Example: "Newer iPhones use eSIM only."', category: 'device', difficulty: 'hard' },
  { id: 'rom', front: 'ROM', back: 'Memory that stays even when the device is off — holds the operating system. Example: "ROM keeps your phone ready when you turn it back on."', category: 'device', difficulty: 'hard' },
  { id: 'ram', front: 'RAM', back: 'Short-term memory your device uses while running apps. Example: "More RAM means you can have more apps open without slowdown."', category: 'device', difficulty: 'medium' },
  { id: 'cpu', front: 'CPU', back: 'The main brain chip inside a computer or phone. Example: "A faster CPU runs apps more quickly."', category: 'device', difficulty: 'hard' },
  { id: 'gpu', front: 'GPU', back: 'A chip made for graphics, like games and video. Example: "A stronger GPU helps video editing run smoothly."', category: 'device', difficulty: 'hard' },
  { id: 'ssd', front: 'SSD (Solid-State Drive)', back: 'Fast, silent storage inside modern computers. Example: "Laptops with an SSD wake up in seconds."', category: 'storage', difficulty: 'hard' },
  { id: 'hard-drive', front: 'Hard Drive', back: 'Storage inside a computer that holds your files — older ones spin, newer ones are SSDs. Example: "The hard drive is full — time to clear out old files."', category: 'storage', difficulty: 'easy' },
  { id: 'megapixel', front: 'Megapixel (MP)', back: 'A measure of camera detail. More MP can mean sharper photos. Example: "The 12 MP camera takes great everyday shots."', category: 'device', difficulty: 'medium' },
  { id: 'resolution', front: 'Resolution', back: 'How many dots make up a screen or photo. Higher is sharper. Example: "Watch a higher resolution video for a clearer picture."', category: 'device', difficulty: 'medium' },
  { id: 'hd', front: 'HD (High Definition)', back: 'A sharp video quality — 720p or 1080p. Example: "Most YouTube videos stream in HD."', category: 'device', difficulty: 'easy' },
  { id: '4k', front: '4K', back: 'An even sharper video quality, four times HD. Example: "Many new TVs show 4K movies."', category: 'device', difficulty: 'medium' },
  { id: 'refresh-rate', front: 'Refresh Rate', back: 'How often a screen redraws per second — higher feels smoother. Example: "A 120Hz phone screen feels extra smooth when you scroll."', category: 'device', difficulty: 'hard' },
  { id: 'bt-pairing', front: 'Bluetooth Pairing', back: 'The first-time handshake between two Bluetooth devices. Example: "Pair your phone with the car stereo to take calls hands-free."', category: 'device', difficulty: 'medium' },
  { id: 'qr-code', front: 'QR Code', back: 'A square barcode you scan with a phone camera. Example: "Scan the QR code on the menu to see the food list."', category: 'device', difficulty: 'easy' },
  { id: 'emoji', front: 'Emoji', back: 'Little cartoon pictures you can add to messages. Example: "End your text with a 👍 emoji."', category: 'messaging', difficulty: 'easy' },
  { id: 'hashtag', front: 'Hashtag', back: 'A word with # in front used to group posts. Example: "Tap the #travel hashtag to see travel posts."', category: 'messaging', difficulty: 'easy' },
  { id: 'tag', front: 'Tag', back: 'Marking a photo or post with someone\'s name so they are linked. Example: "Tag your grandchild in the birthday photo."', category: 'messaging', difficulty: 'easy' },
  { id: 'at-mention', front: 'At-Mention (@name)', back: 'Typing @ and a username to ping someone. Example: "@Sara, look at this recipe!"', category: 'messaging', difficulty: 'medium' },
  { id: 'reply', front: 'Reply', back: 'Responding directly to a message. Example: "Reply to the email so it stays in the same thread."', category: 'messaging', difficulty: 'easy' },
  { id: 'forward', front: 'Forward', back: 'Sending someone else a copy of a message you got. Example: "Forward the concert invite to your spouse."', category: 'messaging', difficulty: 'easy' },
  { id: 'attachment', front: 'Attachment', back: 'A file clipped onto a message — a photo, a PDF, a document. Example: "Open the attachment to see the doctor\'s note."', category: 'messaging', difficulty: 'easy' },
  { id: 'draft', front: 'Draft', back: 'An unsent, saved message you can finish later. Example: "Save the email as a draft — finish it after dinner."', category: 'messaging', difficulty: 'easy' },
  { id: 'folder', front: 'Folder', back: 'A group of files bundled together. Example: "Put all the tax forms in one folder."', category: 'storage', difficulty: 'easy' },
  { id: 'file', front: 'File', back: 'A single piece of saved content — a photo, document, or song. Example: "Save the file before you close the window."', category: 'storage', difficulty: 'easy' },
  { id: 'shortcut', front: 'Shortcut', back: 'A quick way to open something — a tile on your home screen or desk. Example: "Add a shortcut to your bank app on the home screen."', category: 'device', difficulty: 'easy' },
  { id: 'desktop', front: 'Desktop', back: 'The main screen on a computer where files and shortcuts sit. Example: "Drag the photo onto the desktop to save a copy."', category: 'device', difficulty: 'easy' },
  { id: 'taskbar', front: 'Taskbar (Windows)', back: 'The bar at the bottom of Windows that shows open apps. Example: "Click the little arrow on the taskbar to show hidden icons."', category: 'device', difficulty: 'medium' },
  { id: 'dock', front: 'Dock (Mac)', back: 'The row of app icons at the bottom of a Mac screen. Example: "Drag an app to the dock to keep it handy."', category: 'device', difficulty: 'medium' },
  { id: 'start-menu', front: 'Start Menu (Windows)', back: 'The menu that opens when you click the Windows logo. Example: "Use the Start menu to find an app you installed."', category: 'device', difficulty: 'easy' },
  { id: 'finder', front: 'Finder (Mac)', back: 'The Mac app for browsing files — blue face icon in the dock. Example: "Open Finder to look at your downloads."', category: 'device', difficulty: 'medium' },
  { id: 'explorer', front: 'File Explorer (Windows)', back: 'The Windows app for browsing files — folder icon. Example: "Open File Explorer to copy photos from your camera."', category: 'device', difficulty: 'medium' },
  { id: 'control-panel', front: 'Control Panel (Windows)', back: 'The classic Windows screen for system settings. Example: "Uninstall an old program from the Control Panel."', category: 'device', difficulty: 'medium' },
  { id: 'settings', front: 'Settings', back: 'The app where you change how your device works — Wi-Fi, sound, screen. Example: "Open Settings to increase the text size."', category: 'device', difficulty: 'easy' },
];

/* ──────────────────────────────────────────────────────────────────────────
   Storage helpers
   ────────────────────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'teksure:flashcard-progress';

const CATEGORY_LABEL: Record<CardCategory, string> = {
  internet: 'Internet',
  device: 'Device',
  security: 'Security',
  app: 'Apps',
  storage: 'Storage',
  accounts: 'Accounts',
  messaging: 'Messaging',
};

const CATEGORY_COLORS: Record<CardCategory, string> = {
  internet: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200',
  device: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200',
  security: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200',
  app: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
  storage: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  accounts: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200',
  messaging: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-200',
};

const DIFFICULTY_COLORS: Record<CardDifficulty, string> = {
  easy: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  medium: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
  hard: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200',
};

const DAY_MS = 24 * 60 * 60 * 1000;

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function loadProgress(): Progressa {
  if (typeof window === 'undefined') {
    return { cards: {}, streakDays: 0, longestStreak: 0, dailyQuota: 10, customCards: [] };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { cards: {}, streakDays: 0, longestStreak: 0, dailyQuota: 10, customCards: [] };
    }
    const parsed = JSON.parse(raw) as Partial<Progressa>;
    return {
      cards: parsed.cards ?? {},
      streakDays: parsed.streakDays ?? 0,
      longestStreak: parsed.longestStreak ?? 0,
      lastSessionDay: parsed.lastSessionDay,
      dailyQuota: parsed.dailyQuota ?? 10,
      customCards: parsed.customCards ?? [],
    };
  } catch {
    return { cards: {}, streakDays: 0, longestStreak: 0, dailyQuota: 10, customCards: [] };
  }
}

function saveProgress(p: Progressa) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // ignore storage errors
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   Spaced repetition helpers
   ────────────────────────────────────────────────────────────────────────── */

function nextReview(card: FlashCard, prior: CardProgress | undefined, rating: 1 | 2 | 3): CardProgress {
  const baseGapByDifficulty: Record<CardDifficulty, number> = { easy: 4, medium: 2, hard: 1 };
  const now = Date.now();
  const priorStreak = prior?.streak ?? 0;
  const priorGap = prior?.lastGapDays ?? 0;

  let gapDays: number;
  let newStreak: number;

  if (rating === 1) {
    // stuck — reset
    gapDays = 1;
    newStreak = 0;
  } else {
    newStreak = priorStreak + 1;
    // compound +50% on correct streaks; start from prior gap if we have one
    const base = priorGap > 0 ? priorGap : baseGapByDifficulty[card.difficulty];
    const multiplier = rating === 3 ? 1.5 : 1.2;
    gapDays = Math.max(1, Math.round(base * multiplier));
    // fuzzy answers cap the gap so we see it again soon
    if (rating === 2) gapDays = Math.min(gapDays, 3);
  }

  return {
    lastRating: rating,
    streak: newStreak,
    reviews: (prior?.reviews ?? 0) + 1,
    nextDue: now + gapDays * DAY_MS,
    lastReviewed: now,
    lastGapDays: gapDays,
  };
}

/* ──────────────────────────────────────────────────────────────────────────
   The page
   ────────────────────────────────────────────────────────────────────────── */

export default function VocabFlashcards() {
  const [progress, setProgress] = useState<Progressa>(() => loadProgress());
  const [tab, setTab] = useState<'session' | 'browse' | 'progress' | 'add'>('session');
  const [filterCategory, setFilterCategory] = useState<CardCategory | 'all'>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<CardDifficulty | 'all'>('all');
  const [flipped, setFlipped] = useState(false);
  const [sessionIdx, setSessionIdx] = useState(0);
  const [newFront, setNewFront] = useState('');
  const [newBack, setNewBack] = useState('');
  const [newCategory, setNewCategory] = useState<CardCategory>('device');
  const [newDifficulty, setNewDifficulty] = useState<CardDifficulty>('medium');

  const allCards = useMemo(() => [...CARDS, ...progress.customCards], [progress.customCards]);

  // Build today's deck: due cards + new cards up to the daily quota.
  const todayDeck = useMemo(() => {
    const now = Date.now();
    const due = allCards.filter((c) => {
      const prog = progress.cards[c.id];
      return prog && prog.nextDue <= now;
    });
    const fresh = allCards.filter((c) => !progress.cards[c.id]);

    const ordered = [...due, ...fresh];
    // Filter by category if set for session view
    const filtered = filterCategory === 'all' ? ordered : ordered.filter((c) => c.category === filterCategory);
    return filtered.slice(0, progress.dailyQuota);
  }, [allCards, progress.cards, progress.dailyQuota, filterCategory]);

  // Browse list with filters
  const browseList = useMemo(() => {
    return allCards.filter((c) => {
      if (filterCategory !== 'all' && c.category !== filterCategory) return false;
      if (filterDifficulty !== 'all' && c.difficulty !== filterDifficulty) return false;
      return true;
    });
  }, [allCards, filterCategory, filterDifficulty]);

  const currentCard = todayDeck[sessionIdx];
  const sessionDone = sessionIdx >= todayDeck.length;

  // Persist progress whenever it changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Reset flip state when the current card changes
  useEffect(() => {
    setFlipped(false);
  }, [sessionIdx]);

  function handleRating(rating: 1 | 2 | 3) {
    if (!currentCard) return;
    const prior = progress.cards[currentCard.id];
    const updated = nextReview(currentCard, prior, rating);

    setProgress((prev) => {
      // update streak: if last session day was yesterday, +1; if today, keep; else reset to 1
      const today = todayKey();
      let streak = prev.streakDays;
      let longest = prev.longestStreak;
      if (prev.lastSessionDay !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const y = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
        streak = prev.lastSessionDay === y ? prev.streakDays + 1 : 1;
        longest = Math.max(longest, streak);
      }
      return {
        ...prev,
        cards: { ...prev.cards, [currentCard.id]: updated },
        streakDays: streak,
        longestStreak: longest,
        lastSessionDay: today,
      };
    });
    setSessionIdx((i) => i + 1);
  }

  function resetSession() {
    setSessionIdx(0);
    setFlipped(false);
  }

  function setQuota(q: number) {
    setProgress((p) => ({ ...p, dailyQuota: q }));
    resetSession();
  }

  function addCustomCard() {
    const front = newFront.trim();
    const back = newBack.trim();
    if (!front || !back) return;
    const custom: FlashCard = {
      id: `custom-${Date.now()}`,
      front,
      back,
      category: newCategory,
      difficulty: newDifficulty,
    };
    setProgress((p) => ({ ...p, customCards: [...p.customCards, custom] }));
    setNewFront('');
    setNewBack('');
  }

  function removeCustomCard(id: string) {
    setProgress((p) => ({
      ...p,
      customCards: p.customCards.filter((c) => c.id !== id),
      cards: Object.fromEntries(Object.entries(p.cards).filter(([k]) => k !== id)),
    }));
  }

  // Stats
  const stats = useMemo(() => {
    const learned = Object.keys(progress.cards).length;
    const learnedByCategory: Record<CardCategory, number> = {
      internet: 0, device: 0, security: 0, app: 0, storage: 0, accounts: 0, messaging: 0,
    };
    const totalByCategory: Record<CardCategory, number> = {
      internet: 0, device: 0, security: 0, app: 0, storage: 0, accounts: 0, messaging: 0,
    };
    allCards.forEach((c) => {
      totalByCategory[c.category] += 1;
      if (progress.cards[c.id]) learnedByCategory[c.category] += 1;
    });
    return { learned, learnedByCategory, totalByCategory };
  }, [allCards, progress.cards]);

  const percentDone = todayDeck.length === 0 ? 0 : Math.round((sessionIdx / todayDeck.length) * 100);

  return (
    <>
      <SEOHead
        title="Tech Vocab Flashcards | TekSure"
        description="Learn tech words that show up in emails, apps, and scam warnings. Spaced-repetition flashcards for 100+ everyday tech terms, built for beginners and seniors."
        path="/practice/vocab-flashcards"
      />
      <Navbar />

      {/* Print styles — used by the "Print deck" button */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .print-deck, .print-deck * { visibility: visible !important; }
          .print-deck { position: absolute; left: 0; top: 0; width: 100%; }
          .print-card {
            break-inside: avoid;
            page-break-inside: avoid;
            border: 1px solid #333;
            padding: 12px;
            margin: 0;
            height: 3.2in;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .print-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 8px;
          }
          @page { size: letter; margin: 0.5in; }
        }
        .flip-card { perspective: 1000px; }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.5s;
          transform-style: preserve-3d;
        }
        .flip-inner.flipped { transform: rotateY(180deg); }
        .flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 0.75rem;
          padding: 1.5rem;
        }
        .flip-back { transform: rotateY(180deg); }
      `}</style>

      <main id="main-content" className="min-h-[70vh]">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-fuchsia-950/30 border-b">
          <div className="container py-12 sm:py-16 max-w-5xl">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-violet-200/70 text-violet-800 dark:bg-violet-900/60 dark:text-violet-200 shadow-sm">
                  <Brain className="h-9 w-9" aria-hidden="true" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-violet-950 dark:text-violet-50">
                    Tech Vocab Flashcards
                  </h1>
                  <p className="mt-2 text-lg sm:text-xl text-violet-900/80 dark:text-violet-100/85 max-w-2xl">
                    Learn 10 new tech words a day. Spaced repetition builds memory.
                  </p>
                </div>
              </div>
              <BookmarkButton
                type="tool"
                slug="vocab-flashcards"
                title="Tech Vocab Flashcards"
                url="/practice/vocab-flashcards"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <BookOpen className="h-4 w-4 mr-1.5" aria-hidden="true" />
                {allCards.length}+ cards
              </Badge>
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <Flame className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Streak: {progress.streakDays} {progress.streakDays === 1 ? 'day' : 'days'}
              </Badge>
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <TrendingUp className="h-4 w-4 mr-1.5" aria-hidden="true" />
                {stats.learned} learned
              </Badge>
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <Sparkles className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Quota: {progress.dailyQuota}/day
              </Badge>
            </div>
          </div>
        </section>

        <section className="container py-8 max-w-5xl">
          <Alert className="mb-6 border-violet-200 dark:border-violet-900 bg-violet-50/60 dark:bg-violet-950/40">
            <Shield className="h-5 w-5 text-violet-700 dark:text-violet-300" />
            <AlertTitle className="text-base">Why bother?</AlertTitle>
            <AlertDescription className="text-base">
              Every word you learn = one less scam that can confuse you.
            </AlertDescription>
          </Alert>

          <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="session" className="text-base min-h-14 py-3">
                Today
              </TabsTrigger>
              <TabsTrigger value="browse" className="text-base min-h-14 py-3">
                Browse All
              </TabsTrigger>
              <TabsTrigger value="progress" className="text-base min-h-14 py-3">
                Progress
              </TabsTrigger>
              <TabsTrigger value="add" className="text-base min-h-14 py-3">
                Add Card
              </TabsTrigger>
            </TabsList>

            {/* ── Session tab ──────────────────────────────────────────────── */}
            <TabsContent value="session" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <CardTitle className="text-xl">Today's deck</CardTitle>
                    <div className="flex items-center gap-3">
                      <label className="text-base text-muted-foreground">Daily quota</label>
                      <Select value={String(progress.dailyQuota)} onValueChange={(v) => setQuota(Number(v))}>
                        <SelectTrigger className="w-24 min-h-14 text-base">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="20">20</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <label className="text-base text-muted-foreground">Focus on</label>
                    <Select
                      value={filterCategory}
                      onValueChange={(v) => {
                        setFilterCategory(v as CardCategory | 'all');
                        resetSession();
                      }}
                    >
                      <SelectTrigger className="w-48 min-h-14 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All categories</SelectItem>
                        {Object.entries(CATEGORY_LABEL).map(([k, label]) => (
                          <SelectItem key={k} value={k}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      onClick={resetSession}
                      className="min-h-14 text-base"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" aria-hidden="true" />
                      Restart
                    </Button>
                  </div>

                  {todayDeck.length > 0 && !sessionDone && (
                    <>
                      <div className="flex items-center justify-between text-base text-muted-foreground">
                        <span>
                          {sessionIdx + 1} of {todayDeck.length} today
                        </span>
                        <span>{percentDone}%</span>
                      </div>
                      <Progress value={percentDone} className="h-3" />
                    </>
                  )}

                  {/* Card */}
                  {todayDeck.length === 0 && (
                    <div className="rounded-lg border bg-muted/30 p-8 text-center">
                      <p className="text-lg">No cards match that filter. Try a different category.</p>
                    </div>
                  )}

                  {!sessionDone && currentCard && (
                    <div className="flex flex-col items-center">
                      <div
                        className="flip-card w-full max-w-xl h-64 cursor-pointer"
                        onClick={() => setFlipped((f) => !f)}
                        role="button"
                        tabIndex={0}
                        aria-label={flipped ? 'Show front of card' : 'Show back of card'}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setFlipped((f) => !f);
                          }
                        }}
                      >
                        <div className={`flip-inner ${flipped ? 'flipped' : ''}`}>
                          <div className="flip-face bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/60 dark:to-fuchsia-900/40 border shadow-sm">
                            <Badge className={`${CATEGORY_COLORS[currentCard.category]} mb-3 text-sm`}>
                              {CATEGORY_LABEL[currentCard.category]}
                            </Badge>
                            <div className="text-3xl font-bold text-center text-violet-950 dark:text-violet-50">
                              {currentCard.front}
                            </div>
                            <p className="mt-3 text-base text-muted-foreground">Tap card to reveal</p>
                          </div>
                          <div className="flip-face flip-back bg-white dark:bg-slate-900 border shadow-sm">
                            <p className="text-lg leading-relaxed text-center">
                              {currentCard.back}
                            </p>
                          </div>
                        </div>
                      </div>

                      {flipped && (
                        <div className="mt-6 w-full max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <Button
                            onClick={() => handleRating(1)}
                            variant="outline"
                            className="min-h-14 text-base border-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                          >
                            <X className="h-5 w-5 mr-2 text-rose-600" aria-hidden="true" />
                            Stuck
                            <Star className="h-4 w-4 ml-2 fill-rose-500 text-rose-500" aria-hidden="true" />
                          </Button>
                          <Button
                            onClick={() => handleRating(2)}
                            variant="outline"
                            className="min-h-14 text-base border-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40"
                          >
                            Fuzzy
                            <span className="ml-2 flex">
                              <Star className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
                              <Star className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
                            </span>
                          </Button>
                          <Button
                            onClick={() => handleRating(3)}
                            className="min-h-14 text-base bg-emerald-600 hover:bg-emerald-700"
                          >
                            <Check className="h-5 w-5 mr-2" aria-hidden="true" />
                            Knew it
                            <span className="ml-2 flex">
                              <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                              <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                              <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                            </span>
                          </Button>
                        </div>
                      )}

                      <div className="mt-4">
                        <Link
                          to={`/tools/tech-jargon-translator?term=${encodeURIComponent(currentCard.front)}`}
                          className="inline-flex items-center gap-1 text-base text-violet-700 dark:text-violet-300 hover:underline"
                        >
                          Learn this word better
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {sessionDone && todayDeck.length > 0 && (
                    <div className="rounded-lg border bg-emerald-50 dark:bg-emerald-950/30 p-8 text-center space-y-3">
                      <div className="text-2xl font-semibold text-emerald-900 dark:text-emerald-100">
                        You're done for today!
                      </div>
                      <p className="text-lg text-emerald-800 dark:text-emerald-200">
                        Come back tomorrow. Streak: {progress.streakDays} {progress.streakDays === 1 ? 'day' : 'days'}.
                      </p>
                      <Button
                        onClick={resetSession}
                        variant="outline"
                        className="min-h-14 text-base"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" aria-hidden="true" />
                        Review again
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() => window.print()}
                  className="min-h-14 text-base"
                >
                  <Printer className="h-4 w-4 mr-2" aria-hidden="true" />
                  Print deck (3×3 per page)
                </Button>
              </div>
            </TabsContent>

            {/* ── Browse tab ───────────────────────────────────────────────── */}
            <TabsContent value="browse" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Select value={filterCategory} onValueChange={(v) => setFilterCategory(v as CardCategory | 'all')}>
                      <SelectTrigger className="w-48 min-h-14 text-base">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All categories</SelectItem>
                        {Object.entries(CATEGORY_LABEL).map(([k, label]) => (
                          <SelectItem key={k} value={k}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={filterDifficulty} onValueChange={(v) => setFilterDifficulty(v as CardDifficulty | 'all')}>
                      <SelectTrigger className="w-48 min-h-14 text-base">
                        <SelectValue placeholder="Difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All difficulties</SelectItem>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                    <Badge variant="secondary" className="min-h-[2rem] px-3 py-1 text-base">
                      {browseList.length} cards
                    </Badge>
                  </div>

                  <Accordion type="multiple" className="w-full">
                    {browseList.map((c) => (
                      <AccordionItem key={c.id} value={c.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-lg font-medium">{c.front}</span>
                            <Badge className={`${CATEGORY_COLORS[c.category]} text-sm`}>
                              {CATEGORY_LABEL[c.category]}
                            </Badge>
                            <Badge className={`${DIFFICULTY_COLORS[c.difficulty]} text-sm`}>
                              {c.difficulty}
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-base leading-relaxed">{c.back}</p>
                          <Link
                            to={`/tools/tech-jargon-translator?term=${encodeURIComponent(c.front)}`}
                            className="inline-flex items-center gap-1 mt-3 text-base text-violet-700 dark:text-violet-300 hover:underline"
                          >
                            Learn this word better
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── Progress tab ─────────────────────────────────────────────── */}
            <TabsContent value="progress" className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-muted-foreground">Cards learned</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">{stats.learned}</div>
                    <p className="text-base text-muted-foreground">of {allCards.length}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-muted-foreground">Current streak</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">{progress.streakDays}</div>
                    <p className="text-base text-muted-foreground">days in a row</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-muted-foreground">Longest streak</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">{progress.longestStreak}</div>
                    <p className="text-base text-muted-foreground">days</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Knowledge heatmap</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(CATEGORY_LABEL).map(([k, label]) => {
                    const cat = k as CardCategory;
                    const learned = stats.learnedByCategory[cat];
                    const total = stats.totalByCategory[cat];
                    const pct = total === 0 ? 0 : Math.round((learned / total) * 100);
                    return (
                      <div key={k} className="space-y-1">
                        <div className="flex items-center justify-between text-base">
                          <span className="font-medium">{label}</span>
                          <span className="text-muted-foreground">
                            {learned}/{total} · {pct}%
                          </span>
                        </div>
                        <Progress value={pct} className="h-3" />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── Add tab ──────────────────────────────────────────────────── */}
            <TabsContent value="add" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Add your own card</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-base font-medium" htmlFor="front">Term</label>
                    <Input
                      id="front"
                      value={newFront}
                      onChange={(e) => setNewFront(e.target.value)}
                      placeholder="e.g., Two-step verification"
                      className="text-base min-h-14"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-base font-medium" htmlFor="back">Plain-English definition</label>
                    <Input
                      id="back"
                      value={newBack}
                      onChange={(e) => setNewBack(e.target.value)}
                      placeholder="What it means, plus a short example."
                      className="text-base min-h-14"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-base font-medium">Category</label>
                      <Select value={newCategory} onValueChange={(v) => setNewCategory(v as CardCategory)}>
                        <SelectTrigger className="text-base min-h-14">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(CATEGORY_LABEL).map(([k, label]) => (
                            <SelectItem key={k} value={k}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-base font-medium">Difficulty</label>
                      <Select value={newDifficulty} onValueChange={(v) => setNewDifficulty(v as CardDifficulty)}>
                        <SelectTrigger className="text-base min-h-14">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    onClick={addCustomCard}
                    disabled={!newFront.trim() || !newBack.trim()}
                    className="min-h-14 text-base"
                  >
                    <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                    Add card
                  </Button>
                </CardContent>
              </Card>

              {progress.customCards.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Your cards ({progress.customCards.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {progress.customCards.map((c) => (
                      <div key={c.id} className="flex items-start justify-between gap-3 border rounded-md p-3">
                        <div>
                          <div className="font-medium text-lg">{c.front}</div>
                          <div className="text-base text-muted-foreground">{c.back}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCustomCard(c.id)}
                          aria-label={`Remove ${c.front}`}
                          className="min-h-14"
                        >
                          <X className="h-4 w-4" aria-hidden="true" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* ── FAQ ────────────────────────────────────────────────────────── */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Common questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="hard">
                <AccordionTrigger className="text-lg text-left">Is this hard?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  No. You see one word at a time. Tap the card to flip it, read the definition, and rate how well you knew it. That's it — a whole round is 10 cards and takes about five minutes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="behind">
                <AccordionTrigger className="text-lg text-left">What if I fall behind?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Nothing bad happens. Cards you miss will come back sooner next time. Pick up where you left off — your progress stays in this browser until you clear it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="share">
                <AccordionTrigger className="text-lg text-left">Can I share this with a friend?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Yes. Send them the page link. You can also tap "Print deck" to make paper flashcards — 9 cards per page — to practice with a grandchild or friend.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="why-flashcards">
                <AccordionTrigger className="text-lg text-left">Why flashcards instead of a list?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Reading a list once rarely sticks. Flashcards show the word, wait for your brain to try, then reveal the answer. Seeing the same word a few days later — right when you are about to forget — is what builds real memory.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </section>

        {/* ── Printable deck (only visible when printing) ─────────────────── */}
        <div className="print-deck hidden print:block">
          <div className="print-grid">
            {allCards.map((c) => (
              <div key={c.id} className="print-card">
                <div>
                  <div style={{ fontSize: '14px', color: '#666' }}>{CATEGORY_LABEL[c.category]}</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, marginTop: 6 }}>{c.front}</div>
                </div>
                <div style={{ fontSize: '12px', lineHeight: 1.3 }}>{c.back}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
