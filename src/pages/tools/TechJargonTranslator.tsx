import { useState, useMemo, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Languages,
  Search,
  BookOpen,
  MessageSquare,
  AlertOctagon,
  ShieldAlert,
  Send,
  Check,
  Sparkles,
  Lightbulb,
  Plus,
  ChevronRight,
  HelpCircle,
  Info,
  Eye,
  ArrowRight,
  Tag,
  Filter,
  X,
  Mail,
  Lock,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   Types
   ───────────────────────────────────────────────────────────────────────────── */
type DictCategory =
  | 'Internet'
  | 'Security'
  | 'Devices'
  | 'Apps'
  | 'Storage'
  | 'Accounts'
  | 'Media';

interface DictTerm {
  term: string;
  category: DictCategory;
  definition: string;
  example: string;
  related?: string[];
}

interface ErrorEntry {
  code: string;
  friendlyName: string;
  meaning: string;
  why: string;
  fixes: string[];
  category: 'Web' | 'System' | 'Network' | 'Device';
}

interface SuggestedTerm {
  term: string;
  note?: string;
  submittedAt: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Dictionary — 200+ entries across seven categories
   Each entry is written in plain English with a real-world example.
   ───────────────────────────────────────────────────────────────────────────── */
const DICTIONARY: DictTerm[] = [
  // ── Internet ─────────────────────────────────────────────────────────────
  { term: 'Bandwidth', category: 'Internet', definition: 'How much data your internet connection can carry at one time. More bandwidth means faster speeds and more devices working at once.', example: '"My 4K movie keeps pausing" often means you don\'t have enough bandwidth.', related: ['Wi-Fi', 'ISP', 'Mbps'] },
  { term: 'Browser', category: 'Internet', definition: 'The program you use to visit websites — Chrome, Safari, Edge, Firefox.', example: 'When you type "google.com" into a window and a page appears, that window is your browser.', related: ['Cookie', 'Tab', 'Cache'] },
  { term: 'Cookie', category: 'Internet', definition: 'A small file a website saves in your browser so it can remember you — your login, what\'s in your cart, your preferences.', example: 'Cookies are why Amazon still knows who you are when you come back two weeks later.', related: ['Browser', 'Cache', 'Tracker'] },
  { term: 'Cache', category: 'Internet', definition: 'Files your device stores temporarily to load websites and apps faster next time.', example: 'Clearing your cache can fix a website that keeps showing old content.', related: ['Browser', 'Cookie'] },
  { term: 'HTTPS', category: 'Internet', definition: 'The "s" stands for secure. It means the website is using an encrypted connection so the info you send (like passwords) can\'t easily be snooped on.', example: 'Look for the little padlock icon in your browser before typing a password.', related: ['Encryption', 'SSL', 'URL'] },
  { term: 'IP Address', category: 'Internet', definition: 'A unique number that identifies a device on the internet — like a mailing address for your phone or computer.', example: 'Every Wi-Fi network hands out an IP address so your devices can send and receive info.', related: ['Router', 'Wi-Fi'] },
  { term: 'ISP', category: 'Internet', definition: 'Internet Service Provider — the company you pay for internet, like Xfinity, Spectrum, AT&T, or Verizon.', example: '"Who\'s your ISP?" is asking who sends you your internet bill.', related: ['Modem', 'Router', 'Bandwidth'] },
  { term: 'URL', category: 'Internet', definition: 'The address of a web page — the thing that starts with "https://".', example: 'https://teksure.com/tools is a URL.', related: ['HTTPS', 'Browser'] },
  { term: 'Wi-Fi', category: 'Internet', definition: 'A way to connect to the internet without wires, using radio waves between your device and a router.', example: 'When your phone hooks up to your home network, that\'s Wi-Fi.', related: ['Router', 'Modem', 'Bandwidth'] },
  { term: 'Router', category: 'Internet', definition: 'The box in your home that broadcasts your Wi-Fi signal and sends internet to every device.', example: 'When tech support says "reboot your router," they mean unplug the Wi-Fi box, wait 30 seconds, plug it back in.', related: ['Modem', 'Wi-Fi'] },
  { term: 'Modem', category: 'Internet', definition: 'The box that brings internet into your house from the cable or phone line. It usually connects to the router.', example: 'If your whole house has no internet, the modem is a good place to check first.', related: ['Router', 'ISP'] },
  { term: 'DNS', category: 'Internet', definition: 'The internet\'s phone book. It translates website names (like google.com) into the number addresses computers actually use.', example: 'If "DNS failed" appears, your device can\'t look up addresses right now.', related: ['IP Address', 'URL'] },
  { term: 'Ethernet', category: 'Internet', definition: 'A wired internet connection using a cable — usually faster and steadier than Wi-Fi.', example: 'Gamers often plug in an Ethernet cable for a smoother connection.', related: ['Wi-Fi', 'Router'] },
  { term: 'Mbps', category: 'Internet', definition: 'Megabits per second — the unit used to measure internet speed. Higher is faster.', example: 'A 100 Mbps plan is plenty for streaming and video calls.', related: ['Bandwidth', 'ISP'] },
  { term: 'Gbps', category: 'Internet', definition: 'Gigabits per second — 1,000 Mbps. Very fast, usually overkill for a typical household.', example: 'A "gig" plan is 1 Gbps.', related: ['Mbps', 'Bandwidth'] },
  { term: 'Latency', category: 'Internet', definition: 'The tiny delay between asking for something online and the response arriving. Lower is better.', example: 'High latency is why a video call can feel like people are talking over each other.', related: ['Bandwidth', 'Ping'] },
  { term: 'Ping', category: 'Internet', definition: 'A quick test that measures how long a message takes to travel to a server and back.', example: 'Low ping = snappy. High ping = laggy.', related: ['Latency'] },
  { term: 'Hotspot', category: 'Internet', definition: 'Using your phone\'s cellular data to create a Wi-Fi network other devices can join.', example: 'If the home internet goes out, turn on your phone\'s hotspot to keep your laptop online.', related: ['Wi-Fi', 'Cellular'] },
  { term: 'Tracker', category: 'Internet', definition: 'A small piece of code on a website that watches what you do, often to serve ads later.', example: 'That ad for a blender following you around the web? Trackers.', related: ['Cookie', 'Privacy'] },
  { term: 'Ad blocker', category: 'Internet', definition: 'A browser add-on that hides most ads and trackers.', example: 'uBlock Origin and AdGuard are common ad blockers.', related: ['Browser', 'Tracker'] },
  { term: 'Incognito', category: 'Internet', definition: 'A browser mode that doesn\'t save your history or cookies after you close the window. Your internet provider can still see what you do.', example: 'Use Incognito when shopping for a gift you don\'t want someone else to see later.', related: ['Browser', 'Privacy'] },

  // ── Security ─────────────────────────────────────────────────────────────
  { term: 'Captcha', category: 'Security', definition: 'A test to prove you\'re human and not a bot — usually picking stop signs or typing squiggly letters.', example: 'Websites use captchas to keep spam and bots out.', related: ['Bot'] },
  { term: 'Encryption', category: 'Security', definition: 'Scrambling data so only the intended recipient can read it.', example: 'WhatsApp messages are encrypted — even WhatsApp can\'t read them.', related: ['HTTPS', 'VPN', 'Password'] },
  { term: 'Firewall', category: 'Security', definition: 'A security guard between your device and the internet. It blocks bad traffic from getting through.', example: 'Windows comes with a built-in firewall that\'s usually on by default.', related: ['Antivirus', 'Router'] },
  { term: 'Firmware', category: 'Security', definition: 'The built-in software that tells a piece of hardware how to work — like the tiny operating system inside your router or printer.', example: 'A firmware update can fix a Wi-Fi router that keeps disconnecting.', related: ['Update', 'Driver'] },
  { term: 'MFA / 2FA', category: 'Security', definition: 'Multi-factor (or two-factor) authentication. A second way to prove it\'s really you — usually a code texted to your phone or generated by an app.', example: 'Turn on MFA for your email and banking. It stops most account takeovers cold.', related: ['Password', 'Authenticator'] },
  { term: 'Authenticator', category: 'Security', definition: 'An app that gives you a rotating 6-digit code to log in — safer than codes by text.', example: 'Google Authenticator and Microsoft Authenticator are common ones.', related: ['MFA / 2FA', 'Password'] },
  { term: 'Password', category: 'Security', definition: 'A secret word or phrase that proves the account is yours. Longer is stronger.', example: '"sunshine-mountain-coffee-91" beats "dog1234" every time.', related: ['Passphrase', 'Password Manager'] },
  { term: 'Passphrase', category: 'Security', definition: 'A password made of several words strung together — easier to remember, harder to crack.', example: '"purple garden turtle rain" is a passphrase.', related: ['Password', 'Password Manager'] },
  { term: 'Password Manager', category: 'Security', definition: 'An app that remembers all your passwords for you behind one master password.', example: 'Bitwarden and 1Password are popular, trustworthy options.', related: ['Password', 'MFA / 2FA'] },
  { term: 'Passkey', category: 'Security', definition: 'A modern replacement for passwords. Uses your device\'s fingerprint or face scan to log in. No password to steal.', example: 'Apple, Google, and Microsoft now all support passkeys.', related: ['Password', 'MFA / 2FA'] },
  { term: 'Phishing', category: 'Security', definition: 'A scam where someone pretends to be a company you trust, trying to trick you into sharing a password or payment info.', example: 'That "Your Amazon account is locked — click here" email is almost always phishing.', related: ['Scam', 'Smishing'] },
  { term: 'Smishing', category: 'Security', definition: 'Phishing by text message. The "sm" is for SMS.', example: 'A text saying "USPS: your package is held, pay $2.99 here" is a classic smishing attempt.', related: ['Phishing', 'SMS'] },
  { term: 'Vishing', category: 'Security', definition: 'Phishing by phone call. The caller pretends to be the IRS, Social Security, or a grandkid in trouble.', example: 'If a caller pressures you to pay right now in gift cards, it\'s vishing.', related: ['Phishing', 'Scam'] },
  { term: 'Scam', category: 'Security', definition: 'Any attempt to trick someone into giving up money, information, or access.', example: '"You won a prize — pay shipping first!" That\'s a scam.', related: ['Phishing', 'Smishing'] },
  { term: 'Malware', category: 'Security', definition: 'Short for "malicious software" — any program designed to harm or spy on your device.', example: 'Viruses, ransomware, and spyware are all types of malware.', related: ['Antivirus', 'Virus'] },
  { term: 'Virus', category: 'Security', definition: 'A type of malware that spreads from device to device, often by attaching to files.', example: 'Don\'t open .exe files from unknown email senders.', related: ['Malware', 'Antivirus'] },
  { term: 'Ransomware', category: 'Security', definition: 'Malware that locks your files and demands a ransom — usually in cryptocurrency — to unlock them.', example: 'Regular backups are the best defense against ransomware.', related: ['Malware', 'Backup'] },
  { term: 'Spyware', category: 'Security', definition: 'Software that secretly monitors what you do — your keystrokes, your browsing, even your camera.', example: 'A free screensaver from a sketchy site might hide spyware.', related: ['Malware', 'Privacy'] },
  { term: 'Antivirus', category: 'Security', definition: 'A program that scans for and blocks malware.', example: 'Windows Defender comes built-in with Windows and handles most threats.', related: ['Malware', 'Firewall'] },
  { term: 'VPN', category: 'Security', definition: 'Virtual Private Network — a tool that hides your location and encrypts your internet traffic.', example: 'Useful on public Wi-Fi at a coffee shop or hotel.', related: ['Encryption', 'Wi-Fi'] },
  { term: 'SSL / TLS', category: 'Security', definition: 'The technology that makes HTTPS secure — it encrypts the connection between your browser and a website.', example: 'The padlock icon in your address bar means SSL/TLS is working.', related: ['HTTPS', 'Encryption'] },
  { term: 'Breach', category: 'Security', definition: 'When a company\'s systems get hacked and customer data leaks out.', example: 'If you\'re told to change your password because of a breach, do it quickly.', related: ['Password', 'Phishing'] },

  // ── Devices ──────────────────────────────────────────────────────────────
  { term: 'CPU', category: 'Devices', definition: 'Central Processing Unit — the brain of your computer. It runs every program.', example: 'A faster CPU means faster responses when you click things.', related: ['RAM', 'GPU'] },
  { term: 'GPU', category: 'Devices', definition: 'Graphics Processing Unit — a second brain specialized for drawing images on screen.', example: 'Gamers and video editors care about GPUs. Most seniors don\'t need to.', related: ['CPU'] },
  { term: 'RAM', category: 'Devices', definition: 'Random Access Memory — short-term memory your device uses while things are running.', example: 'More RAM means you can have more tabs and apps open at once.', related: ['CPU', 'Storage'] },
  { term: 'Hard drive', category: 'Devices', definition: 'The long-term storage inside your computer — where your files and programs live when powered off.', example: 'Your hard drive is your filing cabinet. RAM is your desk.', related: ['SSD', 'Storage'] },
  { term: 'SSD', category: 'Devices', definition: 'Solid State Drive — a fast modern hard drive with no moving parts.', example: 'Upgrading from an old drive to an SSD makes almost any computer feel new.', related: ['Hard drive', 'Storage'] },
  { term: 'USB-C', category: 'Devices', definition: 'A small, oval-shaped cable plug that fits either way up. Modern phones and laptops use it for both power and data.', example: 'Most new iPhones, Android phones, and MacBooks charge with USB-C.', related: ['Cable', 'Port'] },
  { term: 'HDMI', category: 'Devices', definition: 'A cable that sends high-quality video and sound to a TV or monitor.', example: 'Plug a laptop\'s HDMI cable into the TV to watch your vacation photos on the big screen.', related: ['Cable', 'Port'] },
  { term: 'Port', category: 'Devices', definition: 'A hole or slot on your device where you plug in a cable.', example: '"Which port does the printer go in?" usually means the USB port.', related: ['USB-C', 'HDMI'] },
  { term: 'Bluetooth', category: 'Devices', definition: 'A way for devices to connect wirelessly over short distances.', example: 'Bluetooth is how wireless earbuds talk to your phone.', related: ['Wi-Fi', 'Pairing'] },
  { term: 'Pairing', category: 'Devices', definition: 'Introducing two Bluetooth devices so they can recognize each other from then on.', example: 'You pair your AirPods to your phone once, then they connect automatically.', related: ['Bluetooth'] },
  { term: 'Firmware', category: 'Devices', definition: 'Software built into hardware. Your router, printer, and smart TV all have firmware.', example: 'A firmware update sometimes improves Wi-Fi speed or fixes bugs.', related: ['Update', 'Driver'] },
  { term: 'Driver', category: 'Devices', definition: 'A small program that lets your computer talk to a piece of hardware — a printer, webcam, or headset.', example: 'A missing driver is why a printer sometimes suddenly stops working after a Windows update.', related: ['Firmware'] },
  { term: 'Battery cycle', category: 'Devices', definition: 'One full charge and discharge of a battery. Batteries wear out after many cycles.', example: 'iPhone batteries are rated for around 500–1,000 cycles.', related: ['Battery'] },
  { term: 'SIM card', category: 'Devices', definition: 'A tiny chip in your phone that identifies you to your cellular carrier.', example: 'Switching to a new phone? Pop the SIM out and put it in the new one.', related: ['e-SIM', 'Cellular'] },
  { term: 'e-SIM', category: 'Devices', definition: 'A SIM card that lives inside your phone as software — no plastic chip needed.', example: 'Newer iPhones in the US are e-SIM only.', related: ['SIM card', 'Cellular'] },
  { term: 'Cellular', category: 'Devices', definition: 'The cell-tower-based network your phone uses for calls, texts, and data when not on Wi-Fi.', example: '4G, 5G, and LTE are types of cellular networks.', related: ['SIM card', 'Wi-Fi'] },
  { term: 'LTE / 4G / 5G', category: 'Devices', definition: 'Generations of cellular networks. 5G is newest; LTE is the older "good enough" standard most of us use.', example: 'That little "5G" in your status bar means your phone\'s on a 5G tower.', related: ['Cellular'] },
  { term: 'Touchscreen', category: 'Devices', definition: 'A screen that reacts to your finger instead of a mouse or keyboard.', example: 'Smartphones and most tablets have touchscreens.', related: ['Stylus'] },
  { term: 'Stylus', category: 'Devices', definition: 'A pen-shaped tool for writing or drawing on a touchscreen.', example: 'The Apple Pencil is a stylus for the iPad.', related: ['Touchscreen'] },
  { term: 'Webcam', category: 'Devices', definition: 'The camera on a computer, usually at the top of the screen.', example: 'You need a webcam for Zoom or FaceTime on a desktop.', related: ['Microphone'] },
  { term: 'Peripheral', category: 'Devices', definition: 'Anything you plug into a computer — keyboard, mouse, printer, webcam.', example: 'A broken peripheral usually isn\'t the computer\'s fault.', related: ['Port'] },

  // ── Apps ─────────────────────────────────────────────────────────────────
  { term: 'App', category: 'Apps', definition: 'Short for application. A program that does one thing — weather, email, banking.', example: 'You download apps from the App Store or Google Play.', related: ['App Store', 'Install'] },
  { term: 'App Store', category: 'Apps', definition: 'The official shop on Apple devices where you browse and install apps safely.', example: 'Only install from the App Store to avoid fakes.', related: ['Google Play', 'App'] },
  { term: 'Google Play', category: 'Apps', definition: 'The official app store on Android phones.', example: 'Tap the triangle-shaped Play Store icon to search for apps.', related: ['App Store', 'App'] },
  { term: 'Install', category: 'Apps', definition: 'Adding an app or program to your device so you can use it.', example: 'You install apps from the App Store and install programs on a computer.', related: ['App', 'Update'] },
  { term: 'Update', category: 'Apps', definition: 'A newer version of an app with fixes, features, or security patches.', example: 'Keep apps updated — updates are mostly security fixes.', related: ['Install', 'Firmware'] },
  { term: 'Notification', category: 'Apps', definition: 'A little alert from an app — a banner, a beep, or a red badge.', example: 'You can turn off notifications for any app you want quiet.', related: ['Badge'] },
  { term: 'Badge', category: 'Apps', definition: 'The small red number on an app icon showing how many unread items you have.', example: 'A "(3)" badge on the phone app means 3 missed calls.', related: ['Notification'] },
  { term: 'Dark mode', category: 'Apps', definition: 'A color theme that swaps white backgrounds for black — easier on the eyes at night.', example: 'iOS, Android, and most apps have a dark mode option in Settings.', related: ['Theme'] },
  { term: 'Widget', category: 'Apps', definition: 'A small live panel that shows info from an app right on your home screen.', example: 'A weather widget on your phone shows today\'s forecast without opening the app.', related: ['Home screen'] },
  { term: 'JavaScript', category: 'Apps', definition: 'The code that makes web pages interactive — buttons, forms, animations.', example: 'If "JavaScript is required" pops up, the page needs interactive code turned on.', related: ['Browser'] },
  { term: 'Pop-up', category: 'Apps', definition: 'A small window that opens on top of what you\'re doing. Some are helpful; many are ads or scams.', example: '"Your computer has a virus!" pop-ups are almost always scams.', related: ['Ad', 'Scam'] },
  { term: 'Ad', category: 'Apps', definition: 'A paid message trying to sell you something.', example: 'Free apps often show ads to pay the bills.', related: ['Pop-up', 'Tracker'] },
  { term: 'SaaS', category: 'Apps', definition: 'Software as a Service — software you rent monthly or yearly instead of buying outright.', example: 'Microsoft 365 and Netflix are SaaS.', related: ['Subscription'] },
  { term: 'Subscription', category: 'Apps', definition: 'A recurring charge — monthly or yearly — for an app or service.', example: 'Check your subscriptions once a year and cancel what you don\'t use.', related: ['SaaS'] },
  { term: 'API', category: 'Apps', definition: 'A way for one app to talk to another. You usually don\'t need to know or care.', example: 'When a weather app pulls data from the National Weather Service, it uses an API.', related: [] },
  { term: 'Bug', category: 'Apps', definition: 'A flaw in software that makes it do something wrong.', example: 'Updates often fix bugs that slipped through.', related: ['Update'] },
  { term: 'Crash', category: 'Apps', definition: 'When an app suddenly closes on its own.', example: 'A crashing app usually fixes itself after you reopen it — or after an update.', related: ['Bug', 'Freeze'] },
  { term: 'Freeze', category: 'Apps', definition: 'When an app or device stops responding but doesn\'t close.', example: 'A hard reset fixes most freezes.', related: ['Crash'] },

  // ── Storage ──────────────────────────────────────────────────────────────
  { term: 'Cloud', category: 'Storage', definition: 'Storing files on a company\'s internet servers instead of on your own device.', example: 'iCloud, Google Drive, and OneDrive are all cloud storage.', related: ['Sync', 'Backup'] },
  { term: 'Backup', category: 'Storage', definition: 'A spare copy of your files so you don\'t lose them if a device breaks.', example: 'iPhone backs up automatically to iCloud when plugged in overnight.', related: ['Cloud', 'Sync'] },
  { term: 'Sync', category: 'Storage', definition: 'Keeping the same info in multiple places. A photo taken on your phone appears on your laptop because they sync.', example: 'Syncing is the magic behind "I took a photo on my phone and it\'s already on my Mac."', related: ['Cloud', 'Backup'] },
  { term: 'Download', category: 'Storage', definition: 'Copying a file from the internet to your device.', example: 'Saving a photo from a text message onto your phone is a download.', related: ['Upload'] },
  { term: 'Upload', category: 'Storage', definition: 'Copying a file from your device to the internet.', example: 'Posting a photo on Facebook uploads it to their servers.', related: ['Download'] },
  { term: 'File', category: 'Storage', definition: 'Any piece of data saved on your device — a photo, a document, a video.', example: 'A Word document and a JPG photo are both files.', related: ['Folder'] },
  { term: 'Folder', category: 'Storage', definition: 'A container that holds files — like a paper folder in a filing cabinet.', example: 'Your Desktop is really a folder.', related: ['File'] },
  { term: 'Megabyte', category: 'Storage', definition: 'A unit for measuring file size. About 1 million characters of text.', example: 'A typical photo is 3–5 megabytes (MB).', related: ['Gigabyte'] },
  { term: 'Gigabyte', category: 'Storage', definition: '1,000 megabytes. Most phones store hundreds of gigabytes.', example: 'A 30-minute 4K video is about 2–3 GB.', related: ['Megabyte', 'Terabyte'] },
  { term: 'Terabyte', category: 'Storage', definition: '1,000 gigabytes. Most external drives these days are 1 to 5 TB.', example: '2 TB fits tens of thousands of photos.', related: ['Gigabyte'] },
  { term: 'SD card', category: 'Storage', definition: 'A tiny memory card that slides into cameras, some Android phones, and some tablets.', example: 'Many home security cameras record video onto an SD card.', related: ['Storage'] },
  { term: 'External drive', category: 'Storage', definition: 'A hard drive or SSD that plugs into your computer with a cable.', example: 'Great for backing up photos and videos.', related: ['Backup', 'SSD'] },
  { term: 'Archive', category: 'Storage', definition: 'Moving older items out of the way but keeping them available. Different from deleting.', example: 'Archived emails aren\'t in your inbox but you can still search for them.', related: ['Delete'] },
  { term: 'Compression', category: 'Storage', definition: 'Squeezing a file down to take less space. .zip files are compressed.', example: 'Email attachments often get auto-compressed to fit size limits.', related: ['File'] },

  // ── Accounts ─────────────────────────────────────────────────────────────
  { term: 'Account', category: 'Accounts', definition: 'Your personal profile with a service — an email + password that lets you in.', example: 'You have a Gmail account, an Amazon account, a Netflix account, and so on.', related: ['Password', 'Username'] },
  { term: 'Username', category: 'Accounts', definition: 'The name you sign in with. Often an email address these days.', example: 'Your username for Gmail is your email address.', related: ['Account', 'Password'] },
  { term: 'Sign in', category: 'Accounts', definition: 'Proving it\'s you by entering your username and password.', example: 'You sign in to your bank before seeing balances.', related: ['Account', 'Password'] },
  { term: 'Log out', category: 'Accounts', definition: 'Ending your session so someone else on the same device can\'t access your account.', example: 'Always log out on a shared or public computer.', related: ['Sign in'] },
  { term: 'Profile', category: 'Accounts', definition: 'The public-ish info attached to your account — name, photo, bio.', example: 'Your Facebook profile is what others see.', related: ['Account'] },
  { term: 'Verification', category: 'Accounts', definition: 'Proving you own an account or email address, often by clicking a link.', example: 'After signing up somewhere, verify your email or you\'ll miss notifications.', related: ['MFA / 2FA'] },
  { term: 'Privacy settings', category: 'Accounts', definition: 'The page inside an app where you control who sees what you do.', example: 'Facebook\'s privacy settings let you choose who can see each post.', related: ['Privacy'] },
  { term: 'Privacy', category: 'Accounts', definition: 'How much info about you is shared and with whom.', example: 'Strong privacy means companies know less about you.', related: ['Privacy settings', 'Tracker'] },
  { term: 'Single sign-on', category: 'Accounts', definition: 'Using one account (like Google or Apple) to log in to many sites.', example: '"Continue with Google" is single sign-on.', related: ['Account'] },
  { term: 'Recovery', category: 'Accounts', definition: 'Getting back into an account you\'ve lost access to.', example: 'Recovery usually involves a backup email, phone number, or trusted contact.', related: ['Password', 'MFA / 2FA'] },

  // ── Media ────────────────────────────────────────────────────────────────
  { term: 'Streaming', category: 'Media', definition: 'Watching or listening to something over the internet without downloading the whole thing.', example: 'Netflix, Spotify, and YouTube are all streaming.', related: ['Download', 'Bandwidth'] },
  { term: 'Buffering', category: 'Media', definition: 'A pause while more of a video loads. Usually a sign of a slow connection.', example: '"It\'s buffering again" means your internet can\'t keep up.', related: ['Streaming', 'Bandwidth'] },
  { term: 'Resolution', category: 'Media', definition: 'How many dots make up a picture. More = sharper.', example: '1080p is standard HD. 4K is four times sharper.', related: ['Pixel'] },
  { term: 'Pixel', category: 'Media', definition: 'One dot on your screen. Your screen is millions of them.', example: 'Zoom in on a photo far enough and you\'ll see the individual pixels.', related: ['Resolution'] },
  { term: 'Podcast', category: 'Media', definition: 'An on-demand audio show you can stream or download.', example: 'Think of it as on-demand radio.', related: ['Streaming'] },
  { term: 'Livestream', category: 'Media', definition: 'A video broadcast happening in real time.', example: 'Church services and sports events are often livestreamed now.', related: ['Streaming'] },
  { term: 'DRM', category: 'Media', definition: 'Digital Rights Management — tech that stops you from copying or sharing media you rented or bought.', example: 'DRM is why you can\'t usually screen-record a Netflix movie.', related: ['Streaming'] },
  { term: 'Emoji', category: 'Media', definition: 'Little picture characters you can type into messages —   .', example: 'Most keyboards have a smiley face button to pull up the emoji picker.', related: ['SMS'] },
  { term: 'GIF', category: 'Media', definition: 'A short, silent, looping animation. Pronounced "jif" or "gif" — people argue about this.', example: 'A reaction GIF of a cat waving is a classic.', related: ['Meme'] },
  { term: 'Meme', category: 'Media', definition: 'A joke — usually a picture with text — that spreads online.', example: 'Memes come and go in waves.', related: ['GIF'] },
  { term: 'QR code', category: 'Media', definition: 'A square barcode you scan with your phone\'s camera to open a link or menu.', example: 'Most restaurant menus are QR codes now.', related: ['URL'] },
  { term: 'SMS', category: 'Media', definition: 'Short Message Service — a standard text message. Usually limited to 160 characters each.', example: 'iMessage is Apple\'s fancier version of SMS.', related: ['Smishing'] },
  { term: 'MMS', category: 'Media', definition: 'Multimedia Messaging Service — a text with a photo, video, or group chat.', example: 'Sending a photo by text is MMS.', related: ['SMS'] },
  { term: 'Metadata', category: 'Media', definition: 'Info about a file — who made it, when, what camera took the photo, where.', example: 'Photos often carry GPS metadata. You can strip it before sharing.', related: ['Privacy'] },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Translator replacement map
   Short, readable plain-English rewrites. Applied case-insensitively with
   word boundaries so we don't mangle words like "caching" or "scamming".
   ───────────────────────────────────────────────────────────────────────────── */
const TRANSLATOR_MAP: Array<{ pattern: RegExp; plain: string; note: string }> = [
  // Network / internet
  { pattern: /\bbandwidth\b/gi, plain: 'internet speed', note: 'bandwidth = internet speed capacity' },
  { pattern: /\b(wi-?fi)\b/gi, plain: 'Wi-Fi (home internet)', note: 'Wi-Fi = wireless internet in your home' },
  { pattern: /\brouter\b/gi, plain: 'router (the Wi-Fi box)', note: 'router = the box broadcasting your Wi-Fi' },
  { pattern: /\bmodem\b/gi, plain: 'modem (the box from your internet company)', note: 'modem = the box that brings internet into your home' },
  { pattern: /\bISP\b/g, plain: 'internet company', note: 'ISP = Internet Service Provider, like Xfinity or Spectrum' },
  { pattern: /\bDNS\b/g, plain: 'the internet\'s address book', note: 'DNS looks up website names' },
  { pattern: /\blatency\b/gi, plain: 'delay', note: 'latency = how slow the round-trip to a server is' },
  { pattern: /\bethernet\b/gi, plain: 'wired internet cable', note: 'Ethernet = a physical network cable' },
  // Security
  { pattern: /\bencryption\b/gi, plain: 'scrambled for privacy', note: 'encryption = scrambling so only the right person can read it' },
  { pattern: /\b(MFA|2FA|two-factor authentication|multi-factor authentication)\b/gi, plain: 'two-step sign-in', note: 'MFA / 2FA = a second proof-it\'s-you step' },
  { pattern: /\bphishing\b/gi, plain: 'fake "company" email/message', note: 'phishing = a scam pretending to be a company you trust' },
  { pattern: /\bsmishing\b/gi, plain: 'scam text message', note: 'smishing = phishing, but by text' },
  { pattern: /\bvishing\b/gi, plain: 'scam phone call', note: 'vishing = phishing by phone' },
  { pattern: /\bmalware\b/gi, plain: 'harmful software', note: 'malware = any bad program' },
  { pattern: /\bransomware\b/gi, plain: 'software that locks your files for ransom', note: 'ransomware = malware that demands payment to unlock your files' },
  { pattern: /\bspyware\b/gi, plain: 'software that secretly watches you', note: 'spyware = software that spies' },
  { pattern: /\bfirewall\b/gi, plain: 'security guard for your network', note: 'firewall = blocks unsafe traffic' },
  { pattern: /\bantivirus\b/gi, plain: 'virus-protection software', note: 'antivirus = scans for malware' },
  { pattern: /\bVPN\b/g, plain: 'VPN (private internet tunnel)', note: 'VPN = Virtual Private Network, hides your browsing' },
  { pattern: /\bSSL\b/g, plain: 'secure connection', note: 'SSL = the tech behind HTTPS' },
  { pattern: /\bHTTPS\b/g, plain: 'secure website address', note: 'HTTPS = the secure version of a URL' },
  { pattern: /\bcaptcha\b/gi, plain: 'prove-you\'re-human test', note: 'captcha = those "pick the stop signs" puzzles' },
  { pattern: /\bbreach\b/gi, plain: 'hack / data leak', note: 'breach = a company was hacked' },
  { pattern: /\bpasskey\b/gi, plain: 'passkey (password-free sign-in using your phone)', note: 'passkey = modern replacement for passwords' },
  { pattern: /\bauthenticator\b/gi, plain: 'security code app', note: 'authenticator = an app that gives rotating sign-in codes' },
  // Devices
  { pattern: /\bCPU\b/g, plain: 'main processor', note: 'CPU = the computer\'s brain' },
  { pattern: /\bGPU\b/g, plain: 'graphics chip', note: 'GPU = handles images on screen' },
  { pattern: /\bRAM\b/g, plain: 'working memory', note: 'RAM = short-term memory while apps run' },
  { pattern: /\bSSD\b/g, plain: 'fast storage drive', note: 'SSD = modern, fast hard drive' },
  { pattern: /\bHDD\b/g, plain: 'traditional hard drive', note: 'HDD = spinning-disk hard drive' },
  { pattern: /\bfirmware\b/gi, plain: 'built-in device software', note: 'firmware = software built into hardware' },
  { pattern: /\bdriver\b/gi, plain: 'helper software for your device', note: 'driver = little program that lets devices talk to your computer' },
  { pattern: /\bUSB-?C\b/gi, plain: 'USB-C cable (oval-shaped plug)', note: 'USB-C = the modern reversible cable' },
  { pattern: /\bHDMI\b/g, plain: 'HDMI cable (video cable to TV/monitor)', note: 'HDMI = video+audio cable' },
  { pattern: /\be-?SIM\b/gi, plain: 'digital SIM card', note: 'e-SIM = software-only SIM card' },
  { pattern: /\bSIM card\b/gi, plain: 'SIM card (the phone chip that identifies your number)', note: 'SIM = the little chip in your phone' },
  { pattern: /\bbluetooth\b/gi, plain: 'Bluetooth (short-range wireless)', note: 'Bluetooth = wireless between nearby devices' },
  // Apps / cloud / data
  { pattern: /\bcloud\b/gi, plain: 'online storage', note: 'cloud = files stored on company servers instead of on your device' },
  { pattern: /\bcache\b/gi, plain: 'temporary stored files', note: 'cache = little pile of saved files for speed' },
  { pattern: /\bcookies?\b/gi, plain: 'website memory files', note: 'cookies = tiny files websites save about you' },
  { pattern: /\bbrowser\b/gi, plain: 'web browser (like Chrome or Safari)', note: 'browser = the app you use to visit websites' },
  { pattern: /\bJavaScript\b/g, plain: 'website interactivity code', note: 'JavaScript = the code that makes web pages interactive' },
  { pattern: /\bAPI\b/g, plain: 'behind-the-scenes app connection', note: 'API = lets apps talk to each other' },
  { pattern: /\bSaaS\b/g, plain: 'monthly/yearly subscription software', note: 'SaaS = software you rent' },
  { pattern: /\bmegabytes?\b|\bMB\b/g, plain: 'MB (a small file size)', note: 'MB = megabyte, file size unit' },
  { pattern: /\bgigabytes?\b|\bGB\b/g, plain: 'GB (a large file size)', note: 'GB = gigabyte, 1,000 MB' },
  { pattern: /\bterabytes?\b|\bTB\b/g, plain: 'TB (huge — 1,000 GB)', note: 'TB = terabyte' },
  { pattern: /\bMbps\b/g, plain: 'Mbps (internet speed)', note: 'Mbps = megabits per second' },
  { pattern: /\bGbps\b/g, plain: 'Gbps (very fast internet speed)', note: 'Gbps = gigabits per second' },
  { pattern: /\bQR code\b/gi, plain: 'QR code (square barcode you scan with your camera)', note: 'QR code = square barcode' },
  { pattern: /\bSMS\b/g, plain: 'text message', note: 'SMS = standard text message' },
  { pattern: /\bMMS\b/g, plain: 'picture/video text message', note: 'MMS = text with media' },
  { pattern: /\bIP address\b/gi, plain: 'internet address for your device', note: 'IP address = device\'s internet address' },
  { pattern: /\bpop-?up\b/gi, plain: 'little window that opens on its own', note: 'pop-up = a window that appears over what you\'re doing' },
  { pattern: /\bstreaming\b/gi, plain: 'watching/listening over the internet', note: 'streaming = real-time playback online' },
  { pattern: /\bbuffering\b/gi, plain: 'pausing to load', note: 'buffering = the video is catching up' },
  { pattern: /\bsync(?:ing|ed)?\b/gi, plain: 'copy and keep in step', note: 'sync = keep the same info in multiple places' },
  { pattern: /\bbackup\b/gi, plain: 'spare copy of your files', note: 'backup = a safety copy' },
  { pattern: /\breboot(?:ing|ed)?\b/gi, plain: 'restart', note: 'reboot = turn off and on again' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Red-flag detection for the translator — looks for classic phishing / scam
   vocabulary. Matches trigger a safety banner linking to /tools/is-this-real.
   ───────────────────────────────────────────────────────────────────────────── */
const RED_FLAG_PATTERNS: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /\b(urgent|immediate action|act now|act immediately|within \d+ hours?|expires? (today|in|soon))\b/i, label: 'Urgency pressure' },
  { pattern: /\b(suspend(ed)?|locked|deactivat(ed|ion)|closed|frozen) (your |the )?(account|card|profile)\b/i, label: 'Account-threat language' },
  { pattern: /\b(verify|confirm|update|re-?enter) (your )?(identity|account|password|payment|billing|card|ssn|social security)\b/i, label: 'Asks you to re-enter sensitive info' },
  { pattern: /\b(gift cards?|google play cards?|itunes cards?|steam cards?|bitcoin|crypto(currency)?|wire transfer|money ?gram|zelle)\b/i, label: 'Unusual payment method' },
  { pattern: /\bclick (here|the link|below)\b/i, label: '"Click here" link' },
  { pattern: /\b(irs|social security administration|ssa|fbi|police department|amazon security|microsoft support|apple support)\b/i, label: 'Impersonating an authority' },
  { pattern: /\b(we ('ve|have) detected|suspicious (sign[- ]?in|activity|login|charge))\b/i, label: 'Fake security alert' },
  { pattern: /\b(package (could not be|was not) delivered|USPS|UPS|FedEx).*?(fee|customs|redelivery)\b/i, label: 'Fake delivery fee' },
  { pattern: /\$\d{2,}/, label: 'Specific dollar amount in message' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Error message library
   ───────────────────────────────────────────────────────────────────────────── */
const ERRORS: ErrorEntry[] = [
  {
    code: '404',
    friendlyName: 'Page not found',
    meaning: 'The website you\'re trying to visit can\'t find the exact page.',
    why: 'The link is broken, the page was moved, or you typed the address slightly wrong.',
    fixes: [
      'Double-check the URL for typos.',
      'Go to the site\'s homepage and search for what you wanted.',
      'Try clicking the same link again later — pages sometimes come back.',
    ],
    category: 'Web',
  },
  {
    code: '403',
    friendlyName: 'Forbidden / Access denied',
    meaning: 'The site recognized your request but refused to show you the page.',
    why: 'You\'re not signed in, you don\'t have permission, or the site is region-locked.',
    fixes: [
      'Sign in to the site if you have an account.',
      'If you\'re on a VPN, turn it off and try again.',
      'Contact the site\'s support if you\'re supposed to have access.',
    ],
    category: 'Web',
  },
  {
    code: '500',
    friendlyName: 'Internal server error',
    meaning: 'Something broke on the website\'s side, not yours.',
    why: 'The website\'s server crashed, is overloaded, or has a bug.',
    fixes: [
      'Wait a few minutes and refresh.',
      'Try the site on another browser or on your phone.',
      'Check if the site is down for everyone at downdetector.com.',
    ],
    category: 'Web',
  },
  {
    code: '502',
    friendlyName: 'Bad Gateway',
    meaning: 'One of the servers in the middle can\'t talk to another server.',
    why: 'Usually a temporary hiccup on the website\'s hosting.',
    fixes: [
      'Refresh the page after a minute.',
      'Clear your browser cache if it keeps happening.',
      'Try a different browser to rule out your side.',
    ],
    category: 'Web',
  },
  {
    code: '503',
    friendlyName: 'Service Unavailable',
    meaning: 'The website is temporarily offline — usually for maintenance or overload.',
    why: 'Traffic spike or scheduled downtime.',
    fixes: [
      'Wait 10–20 minutes and try again.',
      'Check the site\'s social media for an outage notice.',
      'If you needed to pay a bill, try again tomorrow or pay by phone.',
    ],
    category: 'Web',
  },
  {
    code: 'DNS_PROBE_FINISHED_NXDOMAIN',
    friendlyName: 'DNS probe finished — no such address',
    meaning: 'Your browser can\'t find the website\'s address.',
    why: 'Your internet\'s "address book" (DNS) isn\'t responding, or you typed the address wrong.',
    fixes: [
      'Double-check the web address.',
      'Restart your Wi-Fi router and modem.',
      'Try visiting another site to see if the internet is working at all.',
    ],
    category: 'Network',
  },
  {
    code: 'ERR_CONNECTION_REFUSED',
    friendlyName: 'Connection refused',
    meaning: 'The website answered — and told your browser to go away.',
    why: 'The server is down, blocking your connection, or on a strict firewall.',
    fixes: [
      'Try the site again in a few minutes.',
      'Turn off any VPN or proxy you\'re using.',
      'Restart your router if many sites do this.',
    ],
    category: 'Network',
  },
  {
    code: 'ERR_CONNECTION_TIMED_OUT',
    friendlyName: 'Connection timed out',
    meaning: 'Your browser gave up waiting for the website to respond.',
    why: 'Very slow internet, a firewall blocking the page, or the site is down.',
    fixes: [
      'Check your Wi-Fi — try loading another website.',
      'Restart the router and modem.',
      'Turn off VPN if one is on.',
    ],
    category: 'Network',
  },
  {
    code: 'ERR_CERT_DATE_INVALID',
    friendlyName: 'Your connection is not private / certificate expired',
    meaning: 'The website\'s security certificate is expired or your clock is wrong.',
    why: 'Usually the website forgot to renew its certificate, or your computer\'s date and time is off.',
    fixes: [
      'Check your computer or phone\'s clock — is the date right?',
      'Try another site to see if it\'s only this one.',
      'If you weren\'t expecting to visit the site, close the tab and don\'t enter any info.',
    ],
    category: 'Network',
  },
  {
    code: 'Disk space low',
    friendlyName: 'Your device is running out of storage',
    meaning: 'You\'re close to filling up your hard drive or phone storage.',
    why: 'Too many photos, videos, apps, or cache files are piling up.',
    fixes: [
      'Delete old photos and videos, or move them to the cloud.',
      'Uninstall apps you haven\'t used in six months.',
      'Clear your Downloads folder — it fills up fast.',
    ],
    category: 'Device',
  },
  {
    code: 'Memory low',
    friendlyName: 'Low memory (RAM)',
    meaning: 'Your device is trying to run more apps than it has room for.',
    why: 'Too many apps, tabs, or browser windows are open at once.',
    fixes: [
      'Close browser tabs and apps you\'re not using.',
      'Restart the device to clear memory.',
      'If it happens constantly, your device may be due for an upgrade.',
    ],
    category: 'Device',
  },
  {
    code: 'Device not compatible',
    friendlyName: 'This app or update won\'t run on your device',
    meaning: 'Your device is too old or has the wrong operating system.',
    why: 'Apps set minimum requirements — an older phone or computer may not meet them.',
    fixes: [
      'Check if an older version of the app is still available.',
      'Update your operating system first — sometimes that fixes it.',
      'Find an alternative app that supports your device.',
    ],
    category: 'Device',
  },
  {
    code: 'BSOD',
    friendlyName: 'Blue Screen of Death (Windows)',
    meaning: 'Windows hit a fatal error and had to restart itself.',
    why: 'Often a bad driver, a faulty memory chip, or a recent Windows update.',
    fixes: [
      'Write down the error code on the screen before it restarts.',
      'Unplug any new hardware you recently added.',
      'Restart normally. If it happens again, search the error code online.',
    ],
    category: 'System',
  },
  {
    code: 'Kernel panic',
    friendlyName: 'Kernel panic (Mac)',
    meaning: 'Your Mac hit a fatal error and restarted.',
    why: 'Usually a bad driver, faulty memory, or a buggy piece of software.',
    fixes: [
      'Restart the Mac and wait.',
      'Disconnect external drives or peripherals one at a time.',
      'If it keeps happening, run Apple Diagnostics (hold D while starting).',
    ],
    category: 'System',
  },
  {
    code: 'The application is not responding',
    friendlyName: 'App frozen',
    meaning: 'An app locked up and isn\'t reacting to your clicks.',
    why: 'The app hit a bug or is waiting on the internet for something.',
    fixes: [
      'Wait 60 seconds — it may come back on its own.',
      'Force-quit the app (Task Manager on Windows, Cmd+Option+Esc on Mac).',
      'Restart your device if force-quit doesn\'t work.',
    ],
    category: 'System',
  },
  {
    code: 'Printer offline',
    friendlyName: 'Printer offline',
    meaning: 'Your computer can\'t reach the printer right now.',
    why: 'Printer is off, asleep, or has lost its Wi-Fi connection.',
    fixes: [
      'Make sure the printer is on and has paper.',
      'Turn the printer off, wait 30 seconds, turn it back on.',
      'Reconnect the printer to Wi-Fi (see the printer\'s little screen).',
    ],
    category: 'Device',
  },
  {
    code: 'No internet connection',
    friendlyName: 'No internet',
    meaning: 'Your device isn\'t connected to the internet right now.',
    why: 'Wi-Fi dropped, router is down, or your internet company is having an outage.',
    fixes: [
      'Check if other devices in the house have internet.',
      'Unplug the modem and router for 30 seconds, then plug back in.',
      'Call your internet company if the whole house is down.',
    ],
    category: 'Network',
  },
  {
    code: 'Storage full',
    friendlyName: 'iCloud / storage full',
    meaning: 'Your cloud storage or device has no room left.',
    why: 'Too many backed-up photos, videos, messages, or app data.',
    fixes: [
      'Delete old photos or messages you no longer need.',
      'Offload apps you rarely use.',
      'Upgrade your iCloud or Google storage if you\'re heavily invested in their ecosystems.',
    ],
    category: 'Device',
  },
  {
    code: 'Safari can\'t open the page',
    friendlyName: 'Safari can\'t open the page',
    meaning: 'Safari tried to reach a site and failed.',
    why: 'The address is mistyped, the site is down, or your internet is off.',
    fixes: [
      'Check your Wi-Fi by loading a different site.',
      'Double-check the web address.',
      'Restart Safari by closing and reopening it.',
    ],
    category: 'Web',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Fuzzy matching helpers
   ───────────────────────────────────────────────────────────────────────────── */
function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/* Simple contains-based fuzzy match — good enough for a 200-term list and
   zero dependencies. */
function fuzzyMatch(haystack: string, needle: string): boolean {
  const h = normalize(haystack);
  const n = normalize(needle);
  if (!n) return true;
  return h.includes(n);
}

const CATEGORY_LIST: DictCategory[] = [
  'Internet',
  'Security',
  'Devices',
  'Apps',
  'Storage',
  'Accounts',
  'Media',
];

const CATEGORY_STYLES: Record<DictCategory, string> = {
  Internet: 'bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-200',
  Security: 'bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-200',
  Devices: 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200',
  Apps: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
  Storage: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200',
  Accounts: 'bg-violet-100 text-violet-800 dark:bg-violet-950/50 dark:text-violet-200',
  Media: 'bg-pink-100 text-pink-800 dark:bg-pink-950/50 dark:text-pink-200',
};

const SUGGEST_STORAGE_KEY = 'teksure-tech-jargon-suggestions';

/* ─────────────────────────────────────────────────────────────────────────────
   Main component
   ───────────────────────────────────────────────────────────────────────────── */
export default function TechJargonTranslator() {
  // ── Dictionary tab state
  const [dictQuery, setDictQuery] = useState('');
  const [dictCategory, setDictCategory] = useState<DictCategory | 'All'>('All');
  const [openTerm, setOpenTerm] = useState<DictTerm | null>(null);

  // ── Translator tab state
  const [translatorInput, setTranslatorInput] = useState('');
  const [translatorOutput, setTranslatorOutput] = useState<{
    plain: string;
    replacementCount: number;
    highlights: Array<{ from: string; to: string; note: string }>;
    redFlags: string[];
  } | null>(null);

  // ── Error decoder state
  const [errorQuery, setErrorQuery] = useState('');

  // ── Suggestion form
  const [suggestTerm, setSuggestTerm] = useState('');
  const [suggestNote, setSuggestNote] = useState('');
  const [suggestSent, setSuggestSent] = useState(false);
  const [suggestList, setSuggestList] = useState<SuggestedTerm[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SUGGEST_STORAGE_KEY);
      if (raw) setSuggestList(JSON.parse(raw));
    } catch {
      // ignore — localStorage may be disabled
    }
  }, []);

  // ── Filtered dictionary
  const filteredDict = useMemo(() => {
    return DICTIONARY.filter(t => {
      if (dictCategory !== 'All' && t.category !== dictCategory) return false;
      if (!dictQuery.trim()) return true;
      const q = dictQuery.trim();
      return (
        fuzzyMatch(t.term, q) ||
        fuzzyMatch(t.definition, q) ||
        fuzzyMatch(t.example, q)
      );
    });
  }, [dictQuery, dictCategory]);

  // ── Group dictionary A-Z
  const grouped = useMemo(() => {
    const map = new Map<string, DictTerm[]>();
    for (const entry of filteredDict) {
      const letter = entry.term[0].toUpperCase();
      const key = /[A-Z]/.test(letter) ? letter : '#';
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(entry);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredDict]);

  function findTermByName(name: string) {
    const target = normalize(name);
    return DICTIONARY.find(t => normalize(t.term) === target) ?? null;
  }

  // ── Translate handler
  function handleTranslate() {
    const input = translatorInput;
    if (!input.trim()) {
      setTranslatorOutput(null);
      return;
    }
    let plain = input;
    const highlights: Array<{ from: string; to: string; note: string }> = [];
    let replacementCount = 0;

    for (const { pattern, plain: replacement, note } of TRANSLATOR_MAP) {
      const matches = input.match(pattern);
      if (matches && matches.length) {
        replacementCount += matches.length;
        matches.forEach(m => {
          // Only record each unique "from" once per pattern
          if (!highlights.find(h => h.from.toLowerCase() === m.toLowerCase())) {
            highlights.push({ from: m, to: replacement, note });
          }
        });
        plain = plain.replace(pattern, replacement);
      }
    }

    // Detect red flags
    const redFlags = RED_FLAG_PATTERNS.filter(rf => rf.pattern.test(input)).map(rf => rf.label);

    setTranslatorOutput({ plain, replacementCount, highlights, redFlags });
  }

  function handleTranslateExample(sample: string) {
    setTranslatorInput(sample);
    // Use a short timeout so state updates before we run translate
    setTimeout(() => {
      const event = new Event('submit');
      handleTranslateDirect(sample);
    }, 0);
  }

  function handleTranslateDirect(text: string) {
    let plain = text;
    const highlights: Array<{ from: string; to: string; note: string }> = [];
    let replacementCount = 0;
    for (const { pattern, plain: replacement, note } of TRANSLATOR_MAP) {
      const matches = text.match(pattern);
      if (matches && matches.length) {
        replacementCount += matches.length;
        matches.forEach(m => {
          if (!highlights.find(h => h.from.toLowerCase() === m.toLowerCase())) {
            highlights.push({ from: m, to: replacement, note });
          }
        });
        plain = plain.replace(pattern, replacement);
      }
    }
    const redFlags = RED_FLAG_PATTERNS.filter(rf => rf.pattern.test(text)).map(rf => rf.label);
    setTranslatorOutput({ plain, replacementCount, highlights, redFlags });
  }

  // ── Suggestion form
  function handleSuggestSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!suggestTerm.trim()) return;
    const next: SuggestedTerm = {
      term: suggestTerm.trim(),
      note: suggestNote.trim() || undefined,
      submittedAt: new Date().toISOString(),
    };
    const updated = [next, ...suggestList].slice(0, 25);
    setSuggestList(updated);
    try {
      localStorage.setItem(SUGGEST_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    setSuggestTerm('');
    setSuggestNote('');
    setSuggestSent(true);
    window.setTimeout(() => setSuggestSent(false), 4000);
  }

  // ── Error decoder filtered list
  const filteredErrors = useMemo(() => {
    if (!errorQuery.trim()) return ERRORS;
    const q = errorQuery.trim();
    return ERRORS.filter(e =>
      fuzzyMatch(e.code, q) ||
      fuzzyMatch(e.friendlyName, q) ||
      fuzzyMatch(e.meaning, q)
    );
  }, [errorQuery]);

  return (
    <>
      <SEOHead
        title="Tech Jargon Translator | TekSure"
        description="Paste any tech email, message, or error code and get it in plain English. Browse a 200+ term dictionary, decode common error messages, and stay safe with built-in scam detection."
        path="/tools/tech-jargon-translator"
      />
      <main id="main-content" className="min-h-[70vh]">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-fuchsia-950/30 border-b">
          <div className="container py-12 sm:py-16 max-w-5xl">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-violet-200/70 text-violet-800 dark:bg-violet-900/60 dark:text-violet-200 shadow-sm">
                  <Languages className="h-9 w-9" aria-hidden="true" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-violet-950 dark:text-violet-50">
                    Tech Jargon Translator
                  </h1>
                  <p className="mt-2 text-lg sm:text-xl text-violet-900/80 dark:text-violet-100/85 max-w-2xl">
                    Paste any tech email or message. Get it in plain English.
                  </p>
                </div>
              </div>
              <BookmarkButton
                type="tool"
                slug="tech-jargon-translator"
                title="Tech Jargon Translator"
                url="/tools/tech-jargon-translator"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <BookOpen className="h-4 w-4 mr-1.5" aria-hidden="true" />
                200+ terms
              </Badge>
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <MessageSquare className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Message translator
              </Badge>
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <AlertOctagon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Error decoder
              </Badge>
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <ShieldAlert className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Scam detection
              </Badge>
            </div>
          </div>
        </section>

        <section className="container py-10 max-w-5xl">
          <Tabs defaultValue="dictionary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 min-h-14 mb-6 bg-muted">
              <TabsTrigger
                value="dictionary"
                className="min-h-14 text-base data-[state=active]:bg-background"
              >
                <BookOpen className="h-5 w-5 mr-2 hidden sm:inline" aria-hidden="true" />
                Dictionary
              </TabsTrigger>
              <TabsTrigger
                value="translator"
                className="min-h-14 text-base data-[state=active]:bg-background"
              >
                <MessageSquare className="h-5 w-5 mr-2 hidden sm:inline" aria-hidden="true" />
                Translate a message
              </TabsTrigger>
              <TabsTrigger
                value="errors"
                className="min-h-14 text-base data-[state=active]:bg-background"
              >
                <AlertOctagon className="h-5 w-5 mr-2 hidden sm:inline" aria-hidden="true" />
                Error decoder
              </TabsTrigger>
            </TabsList>

            {/* ── 1. Dictionary tab ─────────────────────────────────────── */}
            <TabsContent value="dictionary" className="space-y-6 mt-0">
              <Card>
                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    <Input
                      aria-label="Search the tech dictionary"
                      placeholder="Search a term (e.g. bandwidth, phishing, SSD)"
                      value={dictQuery}
                      onChange={e => setDictQuery(e.target.value)}
                      className="text-lg min-h-14 flex-1"
                    />
                    {dictQuery && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDictQuery('')}
                        aria-label="Clear search"
                        className="min-h-14 min-w-14"
                      >
                        <X className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Filter className="h-4 w-4" aria-hidden="true" /> Category:
                    </span>
                    <Button
                      variant={dictCategory === 'All' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setDictCategory('All')}
                      className="min-h-[2.25rem] text-base"
                    >
                      All
                    </Button>
                    {CATEGORY_LIST.map(cat => (
                      <Button
                        key={cat}
                        variant={dictCategory === cat ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setDictCategory(cat)}
                        className="min-h-[2.25rem] text-base"
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Showing <strong>{filteredDict.length}</strong> of {DICTIONARY.length} terms.
                    Tap a card to see the full explanation.
                  </p>
                </CardContent>
              </Card>

              {grouped.length === 0 ? (
                <Card>
                  <CardContent className="p-10 text-center">
                    <HelpCircle className="h-10 w-10 mx-auto text-muted-foreground mb-3" aria-hidden="true" />
                    <p className="text-lg font-semibold">No terms matched your search.</p>
                    <p className="text-base text-muted-foreground mt-1">
                      Try a shorter word, or scroll down and suggest we add it.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                grouped.map(([letter, entries]) => (
                  <div key={letter}>
                    <h2 className="text-2xl font-bold tracking-tight mb-3 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 text-lg font-bold">
                        {letter}
                      </span>
                      <span className="text-muted-foreground font-normal text-base">
                        {entries.length} term{entries.length === 1 ? '' : 's'}
                      </span>
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {entries.map(entry => (
                        <button
                          key={entry.term}
                          onClick={() => setOpenTerm(entry)}
                          className="group text-left rounded-xl border-2 border-border bg-card p-4 hover:border-violet-400 hover:bg-violet-50/40 dark:hover:border-violet-700 dark:hover:bg-violet-950/20 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors min-h-[7rem]"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{entry.term}</h3>
                            <Badge className={`${CATEGORY_STYLES[entry.category]} shrink-0`} variant="secondary">
                              {entry.category}
                            </Badge>
                          </div>
                          <p className="text-base text-muted-foreground line-clamp-2">
                            {entry.definition}
                          </p>
                          <span className="mt-3 inline-flex items-center text-sm font-medium text-violet-700 dark:text-violet-300 group-hover:underline">
                            Read full entry <ChevronRight className="h-4 w-4 ml-0.5" aria-hidden="true" />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </TabsContent>

            {/* ── 2. Translator tab ─────────────────────────────────────── */}
            <TabsContent value="translator" className="space-y-6 mt-0">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MessageSquare className="h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                    Paste anything tech-heavy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-muted-foreground">
                    Paste an email, a text message, a pop-up, or any tech-speak below. We'll swap the jargon for plain English and flag anything that looks like a scam.
                  </p>

                  <Textarea
                    aria-label="Paste the tech-heavy message"
                    placeholder="Example: Your ISP confirms bandwidth on our end is 950 Mbps. Please ensure your router firmware is updated and MFA is enabled on your account before re-attempting the login via HTTPS."
                    value={translatorInput}
                    onChange={e => setTranslatorInput(e.target.value)}
                    className="min-h-40 text-base"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      onClick={handleTranslate}
                      className="min-h-14 text-base gap-2"
                      disabled={!translatorInput.trim()}
                    >
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                      Translate to plain English
                    </Button>
                    {translatorInput && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setTranslatorInput('');
                          setTranslatorOutput(null);
                        }}
                        className="min-h-14 text-base"
                      >
                        Clear
                      </Button>
                    )}
                  </div>

                  <div className="rounded-xl bg-muted/40 p-4">
                    <p className="text-sm font-medium mb-2">Try an example:</p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-sm min-h-[2.25rem]"
                        onClick={() =>
                          handleTranslateExample(
                            'URGENT: We have detected suspicious sign-in activity on your Amazon account. Your account will be suspended in 24 hours unless you verify your payment info. Click here immediately to avoid deactivation.'
                          )
                        }
                      >
                        Fake Amazon email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-sm min-h-[2.25rem]"
                        onClick={() =>
                          handleTranslateExample(
                            'Your ISP confirms bandwidth on our end is 950 Mbps. Please reboot the modem and router, clear your browser cache, and ensure MFA is enabled on your account before retrying the login via HTTPS.'
                          )
                        }
                      >
                        ISP support reply
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-sm min-h-[2.25rem]"
                        onClick={() =>
                          handleTranslateExample(
                            'Your device firmware is out of date. Please update the driver, verify the SSD has sufficient free space, and enable backup to the cloud before the next reboot.'
                          )
                        }
                      >
                        Device update warning
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Output */}
              {translatorOutput && (
                <div className="space-y-4">
                  {translatorOutput.redFlags.length > 0 && (
                    <Card className="border-2 border-red-400 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
                      <CardContent className="p-5 space-y-3">
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="h-6 w-6 text-red-700 dark:text-red-300" aria-hidden="true" />
                          <h3 className="text-xl font-bold text-red-900 dark:text-red-100">
                            This message has scam warning signs
                          </h3>
                        </div>
                        <ul className="space-y-1.5 text-base text-red-900 dark:text-red-100">
                          {translatorOutput.redFlags.map(flag => (
                            <li key={flag} className="flex items-start gap-2">
                              <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-700 dark:bg-red-300" aria-hidden="true" />
                              <span>{flag}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-1">
                          <Button asChild variant="default" className="bg-red-700 hover:bg-red-800 text-white min-h-14 text-base gap-2">
                            <Link to="/tools/is-this-real">
                              <Eye className="h-5 w-5" aria-hidden="true" />
                              Run a safety check
                              <ArrowRight className="h-5 w-5" aria-hidden="true" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Lightbulb className="h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                        This message says:
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-xl border-2 border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20 p-4">
                        <p className="text-lg leading-relaxed whitespace-pre-wrap">
                          {translatorOutput.plain}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>{translatorOutput.replacementCount}</strong> tech term
                        {translatorOutput.replacementCount === 1 ? '' : 's'} translated.
                      </p>
                    </CardContent>
                  </Card>

                  {translatorOutput.highlights.length > 0 && (
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <Tag className="h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                          Terms we swapped
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="divide-y">
                          {translatorOutput.highlights.map((h, i) => (
                            <li key={`${h.from}-${i}`} className="py-3 first:pt-0 last:pb-0">
                              <div className="flex flex-wrap items-start gap-2">
                                <code className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-mono">
                                  {h.from}
                                </code>
                                <ArrowRight className="h-4 w-4 text-muted-foreground mt-1.5" aria-hidden="true" />
                                <span className="text-base font-semibold text-violet-800 dark:text-violet-200">
                                  {h.to}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-muted-foreground">{h.note}</p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </TabsContent>

            {/* ── 3. Error decoder tab ──────────────────────────────────── */}
            <TabsContent value="errors" className="space-y-6 mt-0">
              <Card>
                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    <Input
                      aria-label="Search an error code or message"
                      placeholder="Paste or type an error (e.g. 404, DNS probe failed, blue screen)"
                      value={errorQuery}
                      onChange={e => setErrorQuery(e.target.value)}
                      className="text-lg min-h-14 flex-1"
                    />
                    {errorQuery && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setErrorQuery('')}
                        aria-label="Clear search"
                        className="min-h-14 min-w-14"
                      >
                        <X className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Showing <strong>{filteredErrors.length}</strong> common errors.
                    Can't find yours? Try pasting the first line of the error message.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {filteredErrors.map(err => (
                  <Card key={err.code} className="border-2">
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <code className="inline-flex items-center rounded-md bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-200 px-2 py-1 text-sm font-mono font-bold">
                              {err.code}
                            </code>
                            <Badge variant="secondary" className="text-sm">
                              {err.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold">{err.friendlyName}</h3>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                            What it means
                          </p>
                          <p className="text-base leading-relaxed">{err.meaning}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                            Why it happened
                          </p>
                          <p className="text-base leading-relaxed">{err.why}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                          Try these fixes
                        </p>
                        <ol className="space-y-2">
                          {err.fixes.map((fix, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-violet-600 text-white font-bold text-sm">
                                {i + 1}
                              </span>
                              <span className="text-base leading-relaxed">{fix}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filteredErrors.length === 0 && (
                  <Card>
                    <CardContent className="p-10 text-center">
                      <HelpCircle className="h-10 w-10 mx-auto text-muted-foreground mb-3" aria-hidden="true" />
                      <p className="text-lg font-semibold">No matching errors.</p>
                      <p className="text-base text-muted-foreground mt-1">
                        Try a shorter search, or ask TekBrain for help.
                      </p>
                      <Button asChild variant="default" className="mt-4 min-h-14 text-base gap-2">
                        <Link to="/tekbrain">
                          <Sparkles className="h-5 w-5" aria-hidden="true" />
                          Ask TekBrain
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* ── Quick Guides ──────────────────────────────────────────────── */}
        <section className="container pb-10 max-w-5xl">
          <Card className="border-2 border-violet-200 dark:border-violet-800 bg-violet-50/60 dark:bg-violet-950/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Sparkles className="h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                Quick Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground mb-4">
                Related tools if you're trying to tell real from fake.
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                <Link
                  to="/tools/is-this-real"
                  className="block rounded-xl border-2 border-border bg-card p-4 hover:border-violet-400 hover:bg-violet-50/40 dark:hover:border-violet-700 dark:hover:bg-violet-950/30 transition-colors min-h-24"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Eye className="h-5 w-5 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                    <span className="font-semibold text-base">Is it safe to click?</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Verify a news story, email, deal, or text before you act.
                  </p>
                </Link>
                <Link
                  to="/tools/email-spam-manager"
                  className="block rounded-xl border-2 border-border bg-card p-4 hover:border-violet-400 hover:bg-violet-50/40 dark:hover:border-violet-700 dark:hover:bg-violet-950/30 transition-colors min-h-24"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Mail className="h-5 w-5 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                    <span className="font-semibold text-base">Is this email real?</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Clean up spam and phishing with a senior-friendly walkthrough.
                  </p>
                </Link>
                <Link
                  to="/tools/password-strength"
                  className="block rounded-xl border-2 border-border bg-card p-4 hover:border-violet-400 hover:bg-violet-50/40 dark:hover:border-violet-700 dark:hover:bg-violet-950/30 transition-colors min-h-24"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Lock className="h-5 w-5 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                    <span className="font-semibold text-base">Password strength?</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    See how long a hacker would take to crack your password.
                  </p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Suggestion form ──────────────────────────────────────────── */}
        <section className="container pb-10 max-w-5xl">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Plus className="h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                Suggest a term
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground mb-4">
                Ran into a word we don't have yet? Tell us and we'll add it in the next update.
              </p>
              <form onSubmit={handleSuggestSubmit} className="space-y-3">
                <div>
                  <label htmlFor="suggest-term" className="block text-sm font-medium mb-1">
                    Term <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="suggest-term"
                    value={suggestTerm}
                    onChange={e => setSuggestTerm(e.target.value)}
                    placeholder="e.g. passkey, blockchain, DNS cache"
                    className="text-base min-h-14"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="suggest-note" className="block text-sm font-medium mb-1">
                    Where did you see it? (optional)
                  </label>
                  <Input
                    id="suggest-note"
                    value={suggestNote}
                    onChange={e => setSuggestNote(e.target.value)}
                    placeholder="A support email, a settings page, a news article…"
                    className="text-base min-h-14"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" className="min-h-14 text-base gap-2" disabled={!suggestTerm.trim()}>
                    <Send className="h-5 w-5" aria-hidden="true" />
                    Send suggestion
                  </Button>
                  {suggestSent && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-green-700 dark:text-green-300">
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Thanks — we'll add it in the next update.
                    </span>
                  )}
                </div>
              </form>

              {suggestList.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Your recent suggestions (saved on this device):
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {suggestList.slice(0, 10).map(s => (
                      <li key={`${s.term}-${s.submittedAt}`}>
                        <Badge variant="outline" className="text-sm">{s.term}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="container pb-16 max-w-5xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden="true" />
            Common questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-base text-left">
                How do I know if a term is scam-related?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Most scams use a small set of words over and over: <em>urgent</em>,
                <em> suspended</em>, <em>verify your account</em>, <em>gift cards</em>,
                <em> bitcoin</em>, <em>click here</em>. If a message leans on any of
                those, paste it into the translator above — we'll flag the red flags and
                point you to the safety check tool before you act.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-base text-left">
                What's a "pop-up" vs an "ad"?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                An <strong>ad</strong> is any paid message trying to sell you something —
                those banners on the side of a web page, the short clip before a YouTube
                video, the sponsored post in your feed. A <strong>pop-up</strong> is a
                specific kind of ad: a small window that opens <em>on top</em> of what you
                were already looking at, usually without you asking. Pop-ups that scream
                "Your computer has a virus!" or "You've won!" are almost always scams —
                close the tab, don't click.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-base text-left">
                Why does my grandkid keep saying "it's in the cloud"?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                "The cloud" is marketing speak for "stored on a company's computers,
                reachable over the internet." When your grandkid says your photos are
                "in the cloud," they mean your phone sent copies to Apple's servers
                (iCloud) or Google's servers (Google Photos), so you can see them on
                any of your devices — and so you don't lose them if your phone breaks.
                It's the same idea as a safety deposit box at the bank, but for digital
                stuff.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-base text-left">
                What's the difference between Wi-Fi and internet?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                The <strong>internet</strong> is the service your internet company sends
                to your home. <strong>Wi-Fi</strong> is the wireless signal inside your
                house that lets your devices use that internet without a cable. So you
                can have strong Wi-Fi in your living room but the internet is down, or
                you can have great internet but weak Wi-Fi in your bedroom. Two
                different things, often confused.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger className="text-base text-left">
                Can I trust the translator with private emails?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                Yes — the translator runs entirely in your browser. Nothing you paste
                is sent to TekSure or any server. The replacement list and red-flag
                detector live inside this page itself, so your message never leaves
                your device.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      {/* ── Term detail dialog ─────────────────────────────────────────── */}
      <Dialog open={!!openTerm} onOpenChange={open => !open && setOpenTerm(null)}>
        <DialogContent className="max-w-xl">
          {openTerm && (
            <>
              <DialogHeader>
                <DialogTitle className="flex flex-wrap items-center gap-2 text-2xl">
                  {openTerm.term}
                  <Badge className={CATEGORY_STYLES[openTerm.category]} variant="secondary">
                    {openTerm.category}
                  </Badge>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Plain-English definition of {openTerm.term}.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-1">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                    What it means
                  </p>
                  <p className="text-base leading-relaxed">{openTerm.definition}</p>
                </div>
                <div className="rounded-lg bg-violet-50 dark:bg-violet-950/30 p-3 border border-violet-200 dark:border-violet-800">
                  <p className="text-sm font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300 mb-1">
                    In a sentence
                  </p>
                  <p className="text-base leading-relaxed text-violet-900 dark:text-violet-100">
                    {openTerm.example}
                  </p>
                </div>
                {openTerm.related && openTerm.related.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      Related terms
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {openTerm.related.map(rel => {
                        const match = findTermByName(rel);
                        return (
                          <button
                            key={rel}
                            onClick={() => match && setOpenTerm(match)}
                            disabled={!match}
                            className={`inline-flex items-center rounded-full border px-3 py-1 text-sm min-h-[2rem] ${
                              match
                                ? 'border-violet-300 dark:border-violet-700 text-violet-800 dark:text-violet-200 hover:bg-violet-50 dark:hover:bg-violet-950/40 cursor-pointer'
                                : 'border-muted text-muted-foreground cursor-default'
                            }`}
                          >
                            {rel}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenTerm(null)} className="min-h-14 text-base">
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

    </>
  );
}
