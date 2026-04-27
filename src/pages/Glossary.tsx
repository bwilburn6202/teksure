import { useState, useMemo, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight, Languages } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

/**
 * Tech Glossary (A–Z) — browse-first reference.
 *
 * This complements the Jargon Translator (/tools/jargon-translator), which is
 * search-first. The Glossary is for readers who want to skim, scroll, and
 * browse 150+ plain-English tech terms — the Jargon Translator is where they
 * go if they want a fuller example and context for a single word.
 *
 * Content rules:
 *   • No jargon inside a definition — if you reference another term, it
 *     should be one that's also in the glossary (so readers can jump to it).
 *   • 1–2 sentence definitions. Keep it senior-friendly.
 *   • Related terms are only chips for other terms that actually exist in
 *     this glossary — so every chip scrolls to a real entry.
 */

interface GlossaryTerm {
  term: string;
  definition: string;
  /** Related term names — must match `term` on another entry exactly. */
  related?: string[];
}

const GLOSSARY: GlossaryTerm[] = [
  // ── A ─────────────────────────────────────────────────────────────────────
  {
    term: 'Adware',
    definition:
      'Software that shows you unwanted ads — sometimes installed quietly alongside a free program. Usually annoying rather than dangerous, but a sign something was installed without your knowledge.',
    related: ['Malware', 'Spyware', 'Pop-up'],
  },
  {
    term: 'Algorithm',
    definition:
      'A set of step-by-step instructions a computer follows to finish a task, like sorting your email or choosing which video to show next.',
    related: ['Software', 'App'],
  },
  {
    term: 'Alpha',
    definition:
      'An early, rough version of software given to a small group to test. Things break, and that is expected — feedback helps the builders fix problems before a wider release.',
    related: ['Beta', 'Release', 'Bug'],
  },
  {
    term: 'Antivirus',
    definition:
      'A program that watches for and removes harmful software on your device. Most phones and tablets already have built-in protection, so you rarely need extra antivirus on those.',
    related: ['Malware', 'Virus', 'Firewall'],
  },
  {
    term: 'API',
    definition:
      'A set of rules that lets one program talk to another — for example, how your weather app pulls the forecast from a weather service.',
    related: ['Software', 'App'],
  },
  {
    term: 'App',
    definition:
      'Short for "application" — a program you open to get something done, like email, maps, banking, or games.',
    related: ['Software', 'Plugin', 'Extension'],
  },
  {
    term: 'Archive',
    definition:
      'A single file that bundles many files together — often shrunk in size. You "unzip" or "extract" it to get the files back out.',
    related: ['Zip File', 'Compression', 'Backup'],
  },
  {
    term: 'Authentication',
    definition:
      'The process of proving you are who you say you are — typing a password, entering a code from a text, or using your fingerprint.',
    related: ['Two-Factor Authentication (2FA)', 'Password Manager', 'PIN'],
  },

  // ── B ─────────────────────────────────────────────────────────────────────
  {
    term: 'Backup',
    definition:
      'A spare copy of your files kept somewhere safe, so you can get them back if your device is lost, stolen, or broken.',
    related: ['Cloud', 'Sync', 'Archive'],
  },
  {
    term: 'Bandwidth',
    definition:
      'How much data your internet connection can handle at once. Think of it like lanes on a highway — more bandwidth means more traffic can flow without slowing down.',
    related: ['Mbps', 'Latency', 'Streaming'],
  },
  {
    term: 'Beta',
    definition:
      'A mostly-finished version of software shared publicly for testing. It usually works, but you may still run into bugs before the final release.',
    related: ['Alpha', 'Release', 'Bug'],
  },
  {
    term: 'Binary',
    definition:
      'The two-symbol language (0s and 1s) that computers use to store and process everything — text, photos, music, anything.',
    related: ['Bit', 'Byte'],
  },
  {
    term: 'BIOS',
    definition:
      'The very first software that runs when you press the power button on a computer — it wakes up the hardware before the operating system loads.',
    related: ['Firmware', 'Boot', 'Operating System (OS)'],
  },
  {
    term: 'Bit',
    definition:
      'The smallest unit of digital information — a single 0 or 1. Eight bits make one byte.',
    related: ['Byte', 'Binary', 'Mbps'],
  },
  {
    term: 'Bluetooth',
    definition:
      'A wireless way for nearby devices to talk to each other — like your phone connecting to wireless headphones, a car, or a speaker.',
    related: ['Wi-Fi', 'Hotspot', 'Wireless'],
  },
  {
    term: 'Bookmark',
    definition:
      'A saved shortcut to a website inside your browser, so you do not have to type the address again.',
    related: ['Browser', 'URL', 'Link'],
  },
  {
    term: 'Boot',
    definition:
      'The process of turning on a computer or phone and loading the operating system so you can use it. "Rebooting" just means turning it off and on again.',
    related: ['BIOS', 'Reboot', 'Operating System (OS)'],
  },
  {
    term: 'Browser',
    definition:
      'The app you use to visit websites — Chrome, Safari, Firefox, or Edge are the most common ones.',
    related: ['Browser Engine', 'Cookie', 'Extension'],
  },
  {
    term: 'Browser Engine',
    definition:
      'The part of a browser that reads a website and turns it into what you actually see — text, buttons, images, colors.',
    related: ['Browser', 'Rendering', 'HTML'],
  },
  {
    term: 'Bug',
    definition:
      'A mistake in software that makes it behave in a way the builders did not intend — like a button that does nothing, or a page that crashes.',
    related: ['Crash', 'Update', 'Beta'],
  },
  {
    term: 'Buffering',
    definition:
      'When a video or song pauses to load more of itself before continuing. Usually caused by a slow internet connection.',
    related: ['Streaming', 'Bandwidth', 'Latency'],
  },
  {
    term: 'Byte',
    definition:
      'A small unit of digital storage made of 8 bits. File sizes are measured in bigger chunks of bytes (kilobyte, megabyte, gigabyte).',
    related: ['Bit', 'Megabyte', 'Gigabyte'],
  },

  // ── C ─────────────────────────────────────────────────────────────────────
  {
    term: 'Cache',
    definition:
      'A stash of temporary files your device keeps so things load faster the next time you open them. Clearing the cache sometimes fixes broken pages.',
    related: ['Browser', 'Cookie'],
  },
  {
    term: 'CAPTCHA',
    definition:
      'A quick test — like picking all the traffic lights in a grid, or typing wobbly letters — that proves you are a real person and not a bot.',
    related: ['Authentication', 'Spam'],
  },
  {
    term: 'Catfish',
    definition:
      'Someone online pretending to be a different person, often to trick you into a relationship or into sending money. Reverse-searching their photos can help you spot one.',
    related: ['Phishing', 'Social Engineering', 'Spoofing'],
  },
  {
    term: 'Cellular Data',
    definition:
      'Internet you get from your phone carrier (like Verizon or AT&T) through cell towers — the kind that works when you are away from Wi-Fi.',
    related: ['Wi-Fi', 'Hotspot', 'SIM Card'],
  },
  {
    term: 'Chatbot',
    definition:
      'A program you type or speak to that answers back in plain language. Useful for simple customer service questions, but not always right.',
    related: ['App', 'API'],
  },
  {
    term: 'Cloud',
    definition:
      'Storing your photos, files, or email on computers owned by a company (like Google, Apple, or Microsoft) instead of only on your own device — so you can reach them from anywhere.',
    related: ['Backup', 'Sync', 'Server'],
  },
  {
    term: 'Codec',
    definition:
      'The recipe a device uses to shrink a video or audio file so it can be sent or stored, then un-shrink it for you to watch or listen to.',
    related: ['Compression', 'Format', 'Streaming'],
  },
  {
    term: 'Compression',
    definition:
      'Shrinking a file to take up less space — like folding up a big map so it fits in your pocket, then unfolding it later.',
    related: ['Archive', 'Zip File', 'Codec'],
  },
  {
    term: 'Cookie',
    definition:
      'A tiny file a website saves in your browser to remember things like your login, your cart, or your language choice.',
    related: ['Browser', 'Cache', 'Incognito Mode'],
  },
  {
    term: 'CPU',
    definition:
      'The "brain" of your computer or phone that handles almost everything you do, one instruction at a time (but extremely fast).',
    related: ['GPU', 'RAM', 'GHz'],
  },
  {
    term: 'Crash',
    definition:
      'When an app or device suddenly stops working and closes, freezes, or restarts on its own.',
    related: ['Bug', 'Reboot', 'Crash Dump'],
  },
  {
    term: 'Crash Dump',
    definition:
      'A file your device saves when something crashes — it helps technicians figure out what went wrong. You usually never need to open it yourself.',
    related: ['Crash', 'Stack Trace', 'Bug'],
  },
  {
    term: 'Crypto Wallet',
    definition:
      'An app or small device that stores the secret keys you need to use cryptocurrency like Bitcoin. Lose the keys and you lose the money.',
    related: ['Encryption', 'NFT'],
  },
  {
    term: 'Cybersecurity',
    definition:
      'The practice of keeping your devices, accounts, and personal information safe from criminals online.',
    related: ['Encryption', 'Firewall', 'Malware'],
  },

  // ── D ─────────────────────────────────────────────────────────────────────
  {
    term: 'Dark Web',
    definition:
      'A hidden part of the internet that requires special software to visit. Most everyday people never need to go there; it is known for illegal activity and stolen data.',
    related: ['Tor', 'VPN', 'Cybersecurity'],
  },
  {
    term: 'Data',
    definition:
      'Any information stored on a device or sent over the internet — photos, messages, passwords, everything.',
    related: ['Database', 'Metadata', 'Backup'],
  },
  {
    term: 'Database',
    definition:
      'An organized collection of information a computer can search quickly — like a giant, searchable filing cabinet.',
    related: ['Data', 'Server'],
  },
  {
    term: 'Desktop',
    definition:
      'Either (1) a regular non-portable computer that sits on a desk, or (2) the main screen of a computer where your icons and wallpaper live.',
    related: ['Operating System (OS)', 'Icon'],
  },
  {
    term: 'Developer Console',
    definition:
      'A hidden panel inside a browser that shows the behind-the-scenes code and errors of a website. Builders use it to hunt down bugs.',
    related: ['Browser', 'Bug', 'Stack Trace'],
  },
  {
    term: 'DNS',
    definition:
      'The internet\'s phone book — it turns friendly names like teksure.com into the numeric addresses computers use to find each other.',
    related: ['IP Address', 'Domain', 'Gateway'],
  },
  {
    term: 'Domain',
    definition:
      'The name part of a web address, like teksure.com or nytimes.com. Every domain is registered to someone.',
    related: ['DNS', 'URL', 'HTTP/HTTPS'],
  },
  {
    term: 'Download',
    definition:
      'Copying a file from the internet onto your device so you can use it — the opposite of upload.',
    related: ['Upload', 'Archive', 'Cloud'],
  },
  {
    term: 'DPI',
    definition:
      'Dots Per Inch — how many tiny dots make up a printed page or screen image. Higher DPI means sharper detail.',
    related: ['Pixel', 'Resolution'],
  },
  {
    term: 'Driver',
    definition:
      'A small program that lets your computer talk to a specific piece of hardware, like a printer or webcam. An out-of-date driver is a common cause of printer trouble.',
    related: ['Firmware', 'Hardware', 'Update'],
  },

  // ── E ─────────────────────────────────────────────────────────────────────
  {
    term: 'Email Client',
    definition:
      'The app you use to read and send email — Gmail, Apple Mail, and Outlook are common email clients.',
    related: ['App', 'Spam'],
  },
  {
    term: 'Emulator',
    definition:
      'Software that pretends to be a different device or system, so you can run programs that were not built for what you have.',
    related: ['Virtual Machine', 'Sandbox'],
  },
  {
    term: 'Encryption',
    definition:
      'Scrambling information so only the right person can read it. Your bank\'s website, messaging apps, and Wi-Fi password all use encryption.',
    related: ['Cybersecurity', 'VPN', 'HTTP/HTTPS'],
  },
  {
    term: 'Ethernet',
    definition:
      'A wired way to connect a computer to the internet using a network cable. It is usually faster and more stable than Wi-Fi.',
    related: ['Wi-Fi', 'Router', 'LAN'],
  },
  {
    term: 'Extension',
    definition:
      'A small add-on you install in your browser to give it extra features, like blocking ads or saving passwords.',
    related: ['Browser', 'Plugin', 'App'],
  },

  // ── F ─────────────────────────────────────────────────────────────────────
  {
    term: 'File Extension',
    definition:
      'The three or four letters at the end of a file name (like .pdf, .jpg, .docx) that tell your computer what kind of file it is.',
    related: ['Format', 'File System'],
  },
  {
    term: 'File System',
    definition:
      'The way your device organizes files into folders so it — and you — can find them again.',
    related: ['File Extension', 'Data'],
  },
  {
    term: 'Firewall',
    definition:
      'A security guard for your network that blocks unwanted traffic from coming in or going out. Most home routers already have one turned on.',
    related: ['Router', 'Cybersecurity', 'Port'],
  },
  {
    term: 'Firmware',
    definition:
      'The built-in software that runs inside a piece of hardware — your router, printer, or camera all have firmware. Updating it can fix bugs and add features.',
    related: ['Driver', 'Update', 'BIOS'],
  },
  {
    term: 'Fork',
    definition:
      'When someone takes a copy of an existing software project and takes it in a new direction of their own.',
    related: ['Open Source', 'Release'],
  },
  {
    term: 'Format',
    definition:
      '(1) The type of a file (like JPEG or PDF), or (2) wiping a drive clean to start fresh.',
    related: ['File Extension', 'Codec'],
  },

  // ── G ─────────────────────────────────────────────────────────────────────
  {
    term: 'Gateway',
    definition:
      'The device (usually your router) that connects your home network to the wider internet — the doorway your data walks through.',
    related: ['Router', 'Modem', 'IP Address'],
  },
  {
    term: 'GHz',
    definition:
      'Gigahertz — how many billion instructions per second a processor can handle. Higher is generally faster.',
    related: ['CPU', 'GPU'],
  },
  {
    term: 'Gigabyte',
    definition:
      'A unit of storage roughly equal to a billion bytes. A 64 GB phone can hold around 15,000 photos.',
    related: ['Byte', 'Megabyte'],
  },
  {
    term: 'GPS',
    definition:
      'A free satellite service that tells your device exactly where it is on Earth — the foundation of maps, rideshare, and location tracking.',
    related: ['Cellular Data', 'App'],
  },
  {
    term: 'GPU',
    definition:
      'A specialized chip that draws everything you see on screen — great at handling video, games, and graphics work faster than the main processor could.',
    related: ['CPU', 'Pixel', 'Rendering'],
  },

  // ── H ─────────────────────────────────────────────────────────────────────
  {
    term: 'Hard Drive (HDD)',
    definition:
      'An older style of storage that uses spinning magnetic disks. Cheaper but slower and more fragile than a solid-state drive.',
    related: ['SSD', 'Hardware'],
  },
  {
    term: 'Hardware',
    definition:
      'The physical parts of a device you can actually touch — the screen, keyboard, battery, cables, and so on.',
    related: ['Software', 'Driver'],
  },
  {
    term: 'Hash',
    definition:
      'A unique "fingerprint" calculated from a file or password. Change even one letter and the hash changes completely — useful for checking nothing was tampered with.',
    related: ['Encryption', 'Password Manager'],
  },
  {
    term: 'HDMI',
    definition:
      'The most common cable today for sending video and sound from one device to another — like a laptop to a TV or monitor.',
    related: ['USB', 'Hardware'],
  },
  {
    term: 'Hotspot',
    definition:
      'A feature that turns your phone into a temporary Wi-Fi source so your laptop or tablet can get online through its cellular connection.',
    related: ['Wi-Fi', 'Cellular Data', 'Router'],
  },
  {
    term: 'HTML',
    definition:
      'The behind-the-scenes code that tells a browser how a webpage should be structured — headings here, paragraphs there, images in this spot.',
    related: ['Browser', 'Rendering', 'URL'],
  },
  {
    term: 'HTTP/HTTPS',
    definition:
      'The rules browsers and websites follow to send data back and forth. HTTPS is the secure, encrypted version — look for the padlock in the address bar.',
    related: ['Encryption', 'URL', 'Browser'],
  },
  {
    term: 'HTTP 404',
    definition:
      'The "page not found" error. The website exists, but the specific page you asked for does not — maybe the address is mistyped or the page was moved.',
    related: ['HTTP/HTTPS', 'URL', 'Browser'],
  },
  {
    term: 'HTTP 500',
    definition:
      'A "something broke on the website\'s end" error. Nothing is wrong with your device — the site itself has a problem. Try again in a few minutes.',
    related: ['HTTP/HTTPS', 'Server', 'Crash'],
  },
  {
    term: 'HTTP 503',
    definition:
      'A "website temporarily unavailable" error, usually because it is overloaded or being worked on. Try again later.',
    related: ['HTTP 500', 'HTTP/HTTPS', 'Server'],
  },

  // ── I ─────────────────────────────────────────────────────────────────────
  {
    term: 'Icon',
    definition:
      'The little picture on your desktop or phone screen that you tap or click to open an app.',
    related: ['App', 'Desktop'],
  },
  {
    term: 'Incognito Mode',
    definition:
      'A private browsing window that does not save your history, cookies, or what you typed — but it does not hide you from your employer, school, or internet provider.',
    related: ['Browser', 'Cookie', 'VPN'],
  },
  {
    term: 'IP Address',
    definition:
      'A unique number assigned to each device on a network — like a home address so data knows where to go.',
    related: ['DNS', 'Gateway', 'Router'],
  },
  {
    term: 'ISP',
    definition:
      'Internet Service Provider — the company that brings the internet into your home. Comcast, Xfinity, AT&T, and Verizon are common ISPs.',
    related: ['Modem', 'Bandwidth', 'Router'],
  },

  // ── J ─────────────────────────────────────────────────────────────────────
  {
    term: 'JavaScript',
    definition:
      'A programming language that powers the interactive bits of websites — pop-ups, animations, forms that check your answers as you type.',
    related: ['Browser', 'HTML', 'Developer Console'],
  },
  {
    term: 'JPEG',
    definition:
      'A very common photo file format (.jpg or .jpeg). Great for photos because it makes file sizes small, at a tiny cost to quality.',
    related: ['File Extension', 'Format', 'Compression'],
  },

  // ── K ─────────────────────────────────────────────────────────────────────
  {
    term: 'Kernel',
    definition:
      'The deepest, most important part of an operating system. It manages the hardware and lets everything else run. You never interact with it directly.',
    related: ['Operating System (OS)', 'Driver'],
  },
  {
    term: 'Keyboard Shortcut',
    definition:
      'Pressing a combination of keys to do something faster than clicking — like Ctrl+C to copy or Ctrl+V to paste.',
    related: ['Multitasking'],
  },
  {
    term: 'Keylogger',
    definition:
      'Sneaky software that secretly records every key you type — often used by criminals to steal passwords and bank details.',
    related: ['Malware', 'Spyware', 'Password Manager'],
  },

  // ── L ─────────────────────────────────────────────────────────────────────
  {
    term: 'LAN',
    definition:
      'Local Area Network — the network inside a single home, office, or building that connects your devices to each other and to the internet.',
    related: ['Wi-Fi', 'Ethernet', 'Router'],
  },
  {
    term: 'Latency',
    definition:
      'The tiny delay between asking for something online and getting a response. Lower is better — high latency feels like "lag".',
    related: ['Bandwidth', 'Ping', 'Buffering'],
  },
  {
    term: 'Link',
    definition:
      'Clickable text or an image that sends you to another webpage. Hovering over one shows you where it actually goes — worth checking before you click.',
    related: ['URL', 'Bookmark', 'Phishing'],
  },
  {
    term: 'Linux',
    definition:
      'A free, open-source operating system family. It runs most of the internet\'s servers and many smart devices behind the scenes.',
    related: ['Operating System (OS)', 'Open Source', 'Server'],
  },
  {
    term: 'Login',
    definition:
      'The step where you prove who you are to use an account — usually a username and password.',
    related: ['Authentication', 'Password Manager', 'Two-Factor Authentication (2FA)'],
  },

  // ── M ─────────────────────────────────────────────────────────────────────
  {
    term: 'MAC Address',
    definition:
      'A permanent ID built into every piece of network hardware. Your Wi-Fi router uses it to tell your devices apart. Not the same thing as a Mac computer.',
    related: ['IP Address', 'Router'],
  },
  {
    term: 'Malware',
    definition:
      'A catch-all word for any software made to harm you — viruses, spyware, ransomware, and more.',
    related: ['Virus', 'Spyware', 'Ransomware'],
  },
  {
    term: 'Mbps',
    definition:
      'Megabits per second — the unit used to describe internet speed. 100 Mbps is plenty for most homes; 25 Mbps is the bare minimum for streaming.',
    related: ['Bandwidth', 'Streaming', 'ISP'],
  },
  {
    term: 'Megabyte',
    definition:
      'A unit of storage. One megabyte (MB) is a bit more than a long email with photos attached. 1,000 megabytes make a gigabyte.',
    related: ['Byte', 'Gigabyte'],
  },
  {
    term: 'Metadata',
    definition:
      'Hidden "data about data" attached to files — like when a photo was taken, what camera made it, and sometimes even where.',
    related: ['Data', 'JPEG'],
  },
  {
    term: 'Migration',
    definition:
      'Moving your stuff — contacts, photos, apps, settings — from an old device or service to a new one.',
    related: ['Backup', 'Sync', 'Cloud'],
  },
  {
    term: 'Modem',
    definition:
      'The box that connects your home to your internet provider. It is often combined with a router into one unit.',
    related: ['Router', 'ISP', 'Gateway'],
  },
  {
    term: 'Multitasking',
    definition:
      'Running several apps at once. Modern phones and computers do this smoothly, but too many open apps can still slow things down.',
    related: ['RAM', 'Task Manager'],
  },

  // ── N ─────────────────────────────────────────────────────────────────────
  {
    term: 'Network',
    definition:
      'Any group of devices connected together to share things — your home Wi-Fi is a network, and so is the whole internet.',
    related: ['LAN', 'WAN', 'Router'],
  },
  {
    term: 'NFT',
    definition:
      'Non-Fungible Token — a digital receipt stored on a public ledger that says you "own" a particular digital item, like an image or video.',
    related: ['Crypto Wallet'],
  },
  {
    term: 'Notification',
    definition:
      'A pop-up or banner from an app that wants your attention — a text, a calendar reminder, breaking news. You can turn any of them off in Settings.',
    related: ['App', 'Pop-up'],
  },

  // ── O ─────────────────────────────────────────────────────────────────────
  {
    term: 'Offline',
    definition:
      'Not connected to the internet right now. Some apps still work offline using what they already have saved.',
    related: ['Cloud', 'Sync', 'Cache'],
  },
  {
    term: 'Open Source',
    definition:
      'Software whose code is public so anyone can read it, change it, or share it. Firefox, Linux, and VLC are famous examples.',
    related: ['Software', 'Fork', 'Linux'],
  },
  {
    term: 'Operating System (OS)',
    definition:
      'The main software that runs your device and lets everything else run on top of it — Windows, macOS, iPhone\'s iOS, and Android are all operating systems.',
    related: ['Kernel', 'Software', 'Update'],
  },

  // ── P ─────────────────────────────────────────────────────────────────────
  {
    term: 'Password Manager',
    definition:
      'An app that remembers all your passwords for you behind one master password. Makes strong, unique passwords for every account effortless.',
    related: ['Authentication', 'Two-Factor Authentication (2FA)', 'Encryption'],
  },
  {
    term: 'PDF',
    definition:
      'A universal document file (.pdf) that looks the same on every device. Good for things that should not be easily edited, like contracts and receipts.',
    related: ['File Extension', 'Format'],
  },
  {
    term: 'Permissions',
    definition:
      'The rules your device follows about what an app is allowed to access — your location, contacts, camera, microphone. You can change these anytime in Settings.',
    related: ['App', 'Cybersecurity'],
  },
  {
    term: 'Phishing',
    definition:
      'A scam where someone pretends to be a trusted company (your bank, Amazon, the IRS) in an email or text to trick you into handing over passwords or money.',
    related: ['Smishing', 'Vishing', 'Spoofing'],
  },
  {
    term: 'PIN',
    definition:
      'A short numeric password — usually 4 to 6 digits — often used to unlock phones and bank cards.',
    related: ['Authentication', 'Password Manager'],
  },
  {
    term: 'Ping',
    definition:
      'A quick test that measures how long it takes to reach a server and get an answer back. Low ping means a snappy connection.',
    related: ['Latency', 'Bandwidth'],
  },
  {
    term: 'Pixel',
    definition:
      'One of the tiny dots of color that make up everything on a screen. More pixels packed in means a sharper image.',
    related: ['Resolution', 'DPI', 'GPU'],
  },
  {
    term: 'Platform',
    definition:
      'A system that apps and services are built on top of — iOS is a platform, Facebook is a platform, Windows is a platform.',
    related: ['Operating System (OS)', 'App'],
  },
  {
    term: 'Plugin',
    definition:
      'A small add-on that gives a program extra abilities. Very similar to a browser extension, but for any kind of software.',
    related: ['Extension', 'App', 'Software'],
  },
  {
    term: 'Pop-up',
    definition:
      'A small window that jumps on top of whatever you were looking at. Some are useful; many are ads or scams, especially the ones that shout about "viruses".',
    related: ['Adware', 'Notification', 'Spam'],
  },
  {
    term: 'Port',
    definition:
      'Either (1) the physical socket you plug a cable into, or (2) a numbered channel your device uses to sort different kinds of internet traffic.',
    related: ['USB', 'HDMI', 'Firewall'],
  },

  // ── Q ─────────────────────────────────────────────────────────────────────
  {
    term: 'QR Code',
    definition:
      'A square black-and-white pattern you scan with your phone\'s camera. It opens a link, adds a contact, or joins a Wi-Fi network.',
    related: ['URL', 'App', 'Link'],
  },

  // ── R ─────────────────────────────────────────────────────────────────────
  {
    term: 'RAM',
    definition:
      'Your device\'s short-term memory. It holds whatever you are working on right now. More RAM means more apps can stay open without slowing down.',
    related: ['CPU', 'Multitasking', 'SSD'],
  },
  {
    term: 'Ransomware',
    definition:
      'Nasty malware that locks up your files and demands payment to unlock them. Never pay — restore from a backup instead.',
    related: ['Malware', 'Backup', 'Cybersecurity'],
  },
  {
    term: 'Reboot',
    definition:
      'Turning a device fully off and back on again. It fixes more problems than almost any other trick.',
    related: ['Boot', 'Crash', 'Update'],
  },
  {
    term: 'Refresh',
    definition:
      'Asking your browser or app to reload a page to get the latest version. On a desktop, press F5 or Ctrl+R.',
    related: ['Browser', 'Cache'],
  },
  {
    term: 'Release',
    definition:
      'The final, polished version of software made available to the public, after alpha and beta testing.',
    related: ['Alpha', 'Beta', 'Update'],
  },
  {
    term: 'Rendering',
    definition:
      'The work your device does to turn code and data into the actual image you see on screen — from a webpage to a 3D movie scene.',
    related: ['Browser Engine', 'GPU', 'Pixel'],
  },
  {
    term: 'Resolution',
    definition:
      'How many pixels are in a screen or picture, usually written like 1920×1080. Higher resolution means a sharper image.',
    related: ['Pixel', 'DPI', 'GPU'],
  },
  {
    term: 'Router',
    definition:
      'The device in your home that shares one internet connection with all your Wi-Fi devices and manages the traffic between them.',
    related: ['Modem', 'Wi-Fi', 'Gateway'],
  },

  // ── S ─────────────────────────────────────────────────────────────────────
  {
    term: 'Safe Mode',
    definition:
      'A stripped-down way of starting your computer or phone, with only the essentials. Useful for troubleshooting when something is making the device misbehave.',
    related: ['Boot', 'Reboot', 'Crash'],
  },
  {
    term: 'Sandbox',
    definition:
      'A walled-off space where an app can run without being allowed to touch the rest of your device. Keeps anything risky contained.',
    related: ['Virtual Machine', 'Emulator', 'Permissions'],
  },
  {
    term: 'Screenshot',
    definition:
      'A snapshot of whatever is currently on your screen, saved as an image. Great for showing someone exactly what you\'re seeing.',
    related: ['File Extension', 'JPEG'],
  },
  {
    term: 'Search Engine',
    definition:
      'A website that finds other websites for you based on what you type — Google, Bing, and DuckDuckGo are the best known.',
    related: ['Browser', 'URL'],
  },
  {
    term: 'Server',
    definition:
      'A powerful computer whose job is to send websites, videos, emails, or files to other devices that ask for them.',
    related: ['Cloud', 'Database', 'Network'],
  },
  {
    term: 'SIM Card',
    definition:
      'The small chip inside your phone that tells the cell network your phone number and plan. Can usually be moved to another phone to move service with it.',
    related: ['Cellular Data'],
  },
  {
    term: 'Smishing',
    definition:
      'Phishing by text message. "Your package could not be delivered, click here" is a classic example — always a scam.',
    related: ['Phishing', 'Vishing', 'Social Engineering'],
  },
  {
    term: 'Social Engineering',
    definition:
      'Tricking a person — rather than hacking a computer — into giving up information or doing something they should not. Most scams are really social engineering.',
    related: ['Phishing', 'Catfish', 'Vishing'],
  },
  {
    term: 'Software',
    definition:
      'The programs, apps, and operating systems that run on your device — anything you cannot physically touch.',
    related: ['Hardware', 'App', 'Operating System (OS)'],
  },
  {
    term: 'Spam',
    definition:
      'Unwanted messages sent in bulk, usually by email or text. Some is just annoying ads; some is dangerous phishing.',
    related: ['Phishing', 'Email Client'],
  },
  {
    term: 'Spoofing',
    definition:
      'Faking the "from" name of a call, text, or email to look like someone you trust. Never trust who an email says it is from — check how it is written and what it asks you to do.',
    related: ['Phishing', 'Social Engineering', 'Catfish'],
  },
  {
    term: 'Spyware',
    definition:
      'Software that secretly watches what you do — keystrokes, websites, even your microphone — and reports it back to someone else.',
    related: ['Malware', 'Keylogger', 'Adware'],
  },
  {
    term: 'SSD',
    definition:
      'Solid State Drive — a fast, modern type of storage with no moving parts. Switching from an old hard drive to an SSD is the single biggest speed boost for an aging computer.',
    related: ['Hard Drive (HDD)', 'Hardware'],
  },
  {
    term: 'SSID',
    definition:
      'The name of a Wi-Fi network — the thing you pick from the list of networks on your phone or laptop.',
    related: ['Wi-Fi', 'Router'],
  },
  {
    term: 'Stack Trace',
    definition:
      'A list that shows the chain of steps software was doing when it crashed. Developers read it to figure out what went wrong.',
    related: ['Crash', 'Crash Dump', 'Bug'],
  },
  {
    term: 'Streaming',
    definition:
      'Watching or listening to something over the internet in real time without saving the whole thing to your device first — Netflix, Spotify, YouTube.',
    related: ['Bandwidth', 'Buffering', 'Codec'],
  },
  {
    term: 'Subnet',
    definition:
      'A smaller network inside a bigger one. Your home network is a subnet inside your internet provider\'s network.',
    related: ['LAN', 'IP Address', 'Network'],
  },
  {
    term: 'Sync',
    definition:
      'Keeping the same information up to date across several devices automatically — like photos that appear on your phone, tablet, and computer at the same time.',
    related: ['Cloud', 'Backup', 'Migration'],
  },

  // ── T ─────────────────────────────────────────────────────────────────────
  {
    term: 'Task Manager',
    definition:
      'A tool that lists everything running on your computer and lets you force-close something that is stuck. On Windows, press Ctrl+Shift+Esc.',
    related: ['Multitasking', 'Crash'],
  },
  {
    term: 'Terminal',
    definition:
      'A typing-only window where you can give your computer commands directly. Powerful, but not something most people ever need to touch.',
    related: ['Operating System (OS)', 'Developer Console'],
  },
  {
    term: 'Tor',
    definition:
      'A free network that bounces your internet traffic through several computers around the world to keep you anonymous. Used for privacy — and for the dark web.',
    related: ['Dark Web', 'VPN', 'Encryption'],
  },
  {
    term: 'Touchscreen',
    definition:
      'A screen you interact with by tapping, swiping, and pinching instead of using a mouse. Found on almost every phone and tablet.',
    related: ['Hardware'],
  },
  {
    term: 'Troubleshoot',
    definition:
      'The process of figuring out why something is not working by testing one thing at a time until you find the cause.',
    related: ['Bug', 'Safe Mode', 'Reboot'],
  },
  {
    term: 'Two-Factor Authentication (2FA)',
    definition:
      'A second check, in addition to your password, to prove it is really you — usually a code texted to your phone or generated by an app.',
    related: ['Authentication', 'Password Manager', 'Login'],
  },

  // ── U ─────────────────────────────────────────────────────────────────────
  {
    term: 'Update',
    definition:
      'A new version of software that fixes bugs, patches security holes, or adds features. Ignoring updates is one of the biggest risks to your online safety.',
    related: ['Firmware', 'Operating System (OS)', 'Cybersecurity'],
  },
  {
    term: 'Upload',
    definition:
      'Sending a file from your device to the internet or another device — the opposite of download.',
    related: ['Download', 'Cloud'],
  },
  {
    term: 'URL',
    definition:
      'A web address — the thing you type into a browser, like https://teksure.com. Always check it matches what you expect before you type in a password.',
    related: ['Domain', 'HTTP/HTTPS', 'Link'],
  },
  {
    term: 'USB',
    definition:
      'The standard connector for plugging things into a computer — flash drives, mice, keyboards, chargers. USB-C is the newer, smaller oval-shaped version.',
    related: ['Port', 'Hardware', 'HDMI'],
  },

  // ── V ─────────────────────────────────────────────────────────────────────
  {
    term: 'Verification Code',
    definition:
      'A short one-time code (often six digits) sent to your phone or email to confirm it is really you logging in. Never share it, no matter who asks.',
    related: ['Two-Factor Authentication (2FA)', 'Authentication', 'Phishing'],
  },
  {
    term: 'Virtual Machine',
    definition:
      'A pretend computer running inside your real one. Handy for testing risky software without putting your real device at risk.',
    related: ['Emulator', 'Sandbox'],
  },
  {
    term: 'Virus',
    definition:
      'A type of malware that spreads from file to file or device to device, often causing damage along the way.',
    related: ['Malware', 'Antivirus', 'Spyware'],
  },
  {
    term: 'Vishing',
    definition:
      'Phishing by voice call. Someone pretending to be Social Security, the IRS, or your bank tries to scare you into giving up money or information. Hang up.',
    related: ['Phishing', 'Smishing', 'Social Engineering'],
  },
  {
    term: 'Voice Assistant',
    definition:
      'An app that listens for commands and replies out loud — like Siri, Alexa, or Google Assistant.',
    related: ['App', 'Chatbot'],
  },
  {
    term: 'VPN',
    definition:
      'Virtual Private Network — a paid service that scrambles your internet traffic and hides your location. Useful for privacy on public Wi-Fi.',
    related: ['Encryption', 'Cybersecurity', 'Wi-Fi'],
  },

  // ── W ─────────────────────────────────────────────────────────────────────
  {
    term: 'WAN',
    definition:
      'Wide Area Network — a network that stretches across a big distance. The internet itself is the biggest WAN of all.',
    related: ['LAN', 'Network', 'ISP'],
  },
  {
    term: 'Webcam',
    definition:
      'The camera built into your laptop or monitor, used for video calls. A small sliding cover or piece of tape is an easy privacy upgrade.',
    related: ['Hardware', 'Permissions'],
  },
  {
    term: 'Widget',
    definition:
      'A small interactive box you can place on your home screen or desktop — a weather forecast, calendar, or quick calculator.',
    related: ['App', 'Desktop'],
  },
  {
    term: 'Wi-Fi',
    definition:
      'Wireless internet inside your home or a shop, sent out by a router. Public Wi-Fi is convenient but not private — use a VPN for anything sensitive.',
    related: ['Router', 'Hotspot', 'Bluetooth'],
  },
  {
    term: 'Windows',
    definition:
      'Microsoft\'s operating system for most personal computers. Not the same as browser windows.',
    related: ['Operating System (OS)', 'Desktop'],
  },

  // ── X ─────────────────────────────────────────────────────────────────────
  {
    term: 'XML',
    definition:
      'A way to store information in plain text using labeled tags. You almost never see it, but lots of apps use it behind the scenes to talk to each other.',
    related: ['API', 'Data'],
  },

  // ── Z ─────────────────────────────────────────────────────────────────────
  {
    term: 'Zero-Day',
    definition:
      'A security hole in software that the people who made it don\'t know about yet — meaning there is no fix available yet. Very valuable to criminals, and dangerous to everyone else.',
    related: ['Malware', 'Update', 'Cybersecurity'],
  },
  {
    term: 'Zip File',
    definition:
      'A file (ending in .zip) that bundles several files together and shrinks them, so they\'re easier to email or download.',
    related: ['Archive', 'Compression', 'File Extension'],
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────
const termToSlug = (term: string) =>
  'term-' +
  term
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Glossary = () => {
  const [search, setSearch] = useState('');
  const letterRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const termRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Terms alphabetized, case-insensitive. Memoized because the list is big.
  const sortedTerms = useMemo(
    () => [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' })),
    [],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sortedTerms;
    return sortedTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    );
  }, [search, sortedTerms]);

  // Group filtered terms by their starting letter.
  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    }
    return map;
  }, [filtered]);

  const activeLetters = useMemo(
    () => Object.keys(grouped).sort(),
    [grouped],
  );

  // Fast lookup: does a related-term name actually exist in our glossary?
  const termIndex = useMemo(() => {
    const map: Record<string, GlossaryTerm> = {};
    for (const t of GLOSSARY) map[t.term.toLowerCase()] = t;
    return map;
  }, []);

  const scrollToLetter = useCallback((letter: string) => {
    letterRefs.current[letter]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const scrollToTerm = useCallback((term: string) => {
    const slug = termToSlug(term);
    const el = termRefs.current[slug];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Briefly highlight so readers can see where they landed.
      el.classList.add('ring-2', 'ring-primary/60');
      window.setTimeout(() => {
        el.classList.remove('ring-2', 'ring-primary/60');
      }, 1400);
    }
  }, []);

  const onSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Pressing Enter jumps straight to the first matching term.
    if (e.key === 'Enter' && filtered.length > 0) {
      scrollToTerm(filtered[0].term);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tech Glossary A–Z — Every Tech Word Explained in Plain English | TekSure"
        description="Browse 150+ tech terms explained in plain English — from Wi-Fi to phishing, algorithm to zero-day. A senior-friendly A–Z dictionary for anyone who wants to understand technology without the jargon."
        path="/glossary"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          name: 'TekSure Technology Glossary',
          description:
            'A browse-first A–Z glossary of 150+ technology terms with plain-English definitions, for seniors, beginners, and anyone who prefers answers without jargon.',
          url: 'https://teksure.com/glossary',
          inDefinedTermSet: 'https://teksure.com/glossary',
          hasDefinedTerm: GLOSSARY.map((t) => ({
            '@type': 'DefinedTerm',
            name: t.term,
            description: t.definition,
            inDefinedTermSet: 'https://teksure.com/glossary',
          })),
        }}
      />

      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">

      <div className="max-w-4xl mx-auto pt-4 px-4">
        <PageBreadcrumb segments={[{ label: 'Glossary' }]} />
      </div>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto py-14 md:py-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            {GLOSSARY.length} terms
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Tech Glossary A–Z
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Every word we&rsquo;ve decoded, in one place.
          </p>

          <div className="relative max-w-lg mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60"
              aria-hidden="true"
            />
            <label htmlFor="glossary-search" className="sr-only">
              Search glossary terms
            </label>
            <Input
              id="glossary-search"
              placeholder="Search… (e.g. Wi-Fi, phishing, VPN)"
              className="pl-11 h-12 text-base bg-card rounded-2xl border-border shadow-sm focus:border-primary/40 focus:shadow-md transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={onSearchKeyDown}
              autoComplete="off"
              aria-describedby="glossary-search-help"
            />
            <p
              id="glossary-search-help"
              className="mt-2 text-xs text-muted-foreground"
            >
              Press <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px] font-mono">Enter</kbd> to jump to the first match.
            </p>
          </div>

          {/* Pointer to the complementary tool */}
          <div className="mt-6 text-sm text-muted-foreground">
            Looking for a single word with an example?{' '}
            <Link
              to="/tools/jargon-translator"
              className="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
            >
              <Languages className="h-3.5 w-3.5" aria-hidden="true" />
              Try the Jargon Translator
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky A–Z jump nav */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <nav aria-label="Jump to letter" className="flex flex-wrap gap-1 justify-center">
            {ALL_LETTERS.map((letter) => {
              const isActive = activeLetters.includes(letter);
              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => isActive && scrollToLetter(letter)}
                  disabled={!isActive}
                  aria-label={
                    isActive
                      ? `Jump to terms starting with ${letter}`
                      : `No terms starting with ${letter}`
                  }
                  className={`min-w-[32px] h-8 px-2 rounded-lg text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer'
                      : 'text-muted-foreground/40 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Terms */}
      <section className="py-16 md:py-20 px-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4"></p>
            <p className="text-lg font-medium mb-2">No terms found</p>
            <p className="text-muted-foreground">Try a different search term.</p>
          </div>
        ) : (
          <div className="space-y-12 max-w-3xl mx-auto">
            {activeLetters.map(letter => (
              <div
                key={letter}
                ref={el => { sectionRefs.current[letter] = el; }}
                className="scroll-mt-32"
              >
                <Languages className="h-4 w-4" aria-hidden="true" />
                Ask the Jargon Translator instead
              </Link>
            </div>
          ) : (
            <div className="space-y-14">
              {activeLetters.map((letter) => (
                <div
                  key={letter}
                  ref={(el) => {
                    letterRefs.current[letter] = el;
                  }}
                  className="scroll-mt-40"
                >
                  {/* Letter header */}
                  <div className="flex items-center gap-4 mb-6 pb-3 border-b border-border">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary leading-none">
                      {letter}
                    </h2>
                    <Badge variant="outline" className="text-xs rounded-full">
                      {grouped[letter].length}{' '}
                      {grouped[letter].length === 1 ? 'term' : 'terms'}
                    </Badge>
                  </div>

                <div className="space-y-3">
                  {grouped[letter].map((item, i) => (
                    <div
                      key={item.term}
                    >
                      <div className="glow-card">
                        <h3 className="font-semibold text-base text-foreground mb-2">{item.term}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.definition}</p>
                        {item.analogy && (
                          <p className="text-xs text-primary flex items-start gap-2">
                            <span className="shrink-0 mt-0.5"></span>
                            <span className="italic">{item.analogy}</span>
                          </p>

                          {/* Related chips */}
                          {chips.length > 0 && (
                            <div className="mt-4 flex flex-wrap items-center gap-1.5">
                              <span className="text-xs uppercase tracking-wider text-muted-foreground/80 font-semibold mr-1">
                                Related:
                              </span>
                              {chips.map((name) => (
                                <button
                                  key={name}
                                  type="button"
                                  onClick={() => scrollToTerm(name)}
                                  className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted hover:bg-primary/10 text-xs font-medium text-foreground/75 hover:text-primary border border-transparent hover:border-primary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                  {name}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Deep-dive link to the Jargon Translator */}
                          <div className="mt-4 pt-3 border-t border-border/60">
                            <Link
                              to="/tools/jargon-translator"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                              aria-label={`Deep dive into ${item.term} in the Jargon Translator`}
                            >
                              <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                              Deep dive in the Jargon Translator
                              <ArrowRight
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default Glossary;
