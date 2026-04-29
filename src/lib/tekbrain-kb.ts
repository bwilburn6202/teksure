/**
 * TekBrain shared knowledge base and utility functions.
 * Used by both the full-page TekBrain homepage and the floating TekBot widget.
 * No emojis anywhere in this file.
 */

import { guides, type Guide } from '@/data/guides';

/* ── Types ─────────────────────────────────────────────────── */

export type DeviceType = 'windows' | 'mac' | 'iphone' | 'android' | null;

export interface Message {
  role: 'user' | 'bot';
  content: string;
  relatedGuides?: Guide[];
}

interface KBEntry {
  keywords: string[];
  answer: string;
  deviceAnswers?: Partial<Record<NonNullable<DeviceType>, string>>;
  category?: string;
}

/* ── Device memory ─────────────────────────────────────────── */

const DEVICE_KEY = 'teksure_tekbot_device';

export function loadDevice(): DeviceType {
  if (typeof window === 'undefined') return null;
  return (localStorage.getItem(DEVICE_KEY) as DeviceType) ?? null;
}

export function saveDevice(d: DeviceType) {
  if (typeof window === 'undefined') return;
  if (d) localStorage.setItem(DEVICE_KEY, d);
  else localStorage.removeItem(DEVICE_KEY);
}

export const DEVICE_LABEL_MAP: Record<NonNullable<DeviceType>, string> = {
  windows: 'Windows PC',
  mac: 'Mac',
  iphone: 'iPhone',
  android: 'Android',
};

export function deviceLabel(d: DeviceType): string {
  return d ? DEVICE_LABEL_MAP[d] : 'All devices';
}

/** Auto-detect device from user message text */
export function detectDeviceFromText(text: string): DeviceType {
  const lower = text.toLowerCase();
  if (/\biphone\b|\bios\b|\bipad\b|\bapple phone\b/.test(lower)) return 'iphone';
  if (/\bmac\b|\bmacbook\b|\bmacos\b|\bapple (computer|laptop|desktop)\b/.test(lower)) return 'mac';
  if (/\bandroid\b|\bgalaxy\b|\bpixel\b|\bsamsung phone\b/.test(lower)) return 'android';
  if (/\bwindows\b|\bpc\b|\bdell\b|\bhp\b|\blenovo\b|\bwindows (computer|laptop|desktop)\b/.test(lower)) return 'windows';
  return null;
}

/* ── Knowledge base ────────────────────────────────────────── */

export const KB: KBEntry[] = [
  {
    keywords: ['wifi', 'wi-fi', 'internet', 'connected', 'no internet', 'network', 'router', 'broadband', 'connection'],
    category: 'wifi',
    answer:
      "Here's how to fix most WiFi problems:\n\n1. Unplug your WiFi router from the wall.\n2. Wait 30 seconds, then plug it back in.\n3. Wait 2 minutes for it to restart.\n4. Try connecting again.\n\nIf it still doesn't work, move closer to the router and double-check the password.",
    deviceAnswers: {
      windows: "To fix WiFi on Windows:\n\n1. Click the WiFi icon in the bottom-right corner.\n2. Click on your network name, then 'Disconnect', then reconnect.\n3. If that doesn't work: Settings > Network & Internet > WiFi > 'Troubleshoot'.\n4. As a last resort, restart your router by unplugging it for 30 seconds.",
      mac: "To fix WiFi on Mac:\n\n1. Click the WiFi icon in the menu bar (top-right).\n2. Turn WiFi off, wait 5 seconds, then turn it back on.\n3. Click your network name and re-enter the password if asked.\n4. Still broken? Apple menu > System Settings > WiFi > click the 'Details' button next to your network > 'Forget this Network', then reconnect.",
      iphone: "To fix WiFi on iPhone:\n\n1. Go to Settings > WiFi.\n2. Tap the (i) next to your network name > 'Forget This Network'.\n3. Reconnect by tapping your network and entering the password.\n4. If that fails, Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings.",
      android: "To fix WiFi on Android:\n\n1. Go to Settings > Network & Internet (or Connections) > WiFi.\n2. Tap and hold your network name > 'Forget'.\n3. Reconnect and re-enter the password.\n4. Still not working? Try turning Airplane Mode on for 10 seconds, then off again.",
    },
  },
  {
    keywords: ['slow', 'computer slow', 'laptop slow', 'takes forever', 'freezing', 'frozen', 'sluggish', 'lagging', 'hanging'],
    category: 'performance',
    answer:
      "To speed things up:\n\n1. Close any apps or tabs you're not using.\n2. Restart the device — this clears temporary files.\n3. Make sure you have at least 10% free storage.\n4. Check for system updates.\n\nA restart fixes the majority of slowness issues!",
    deviceAnswers: {
      windows: "To speed up a slow Windows computer:\n\n1. Press Ctrl+Shift+Esc to open Task Manager.\n2. Click 'CPU' or 'Memory' to sort — close anything using a lot.\n3. Restart: Start > Power > Restart.\n4. Run Disk Cleanup: search 'Disk Cleanup' in the Start menu.\n5. Settings > Windows Update > install any pending updates.",
      mac: "To speed up a slow Mac:\n\n1. Click the Apple menu > Force Quit — close anything not responding.\n2. Check Activity Monitor (search with Spotlight Cmd+Space) for processes using lots of CPU.\n3. Restart: Apple menu > Restart.\n4. Free up space: Apple menu > About This Mac > Storage > Manage.",
      iphone: "To speed up a slow iPhone:\n\n1. Close all apps: swipe up from the bottom, then swipe apps away.\n2. Restart: hold the side button + volume down > 'Slide to Power Off', then turn back on.\n3. Free up space: Settings > General > iPhone Storage — delete large unused apps.\n4. Settings > General > Software Update — install the latest iOS.",
      android: "To speed up a slow Android phone:\n\n1. Close all recent apps: tap the square/recent apps button and swipe them away.\n2. Restart your phone: hold the power button > Restart.\n3. Clear app cache: Settings > Apps > [slow app] > Storage > Clear Cache.\n4. Free up space: Settings > Storage — delete photos, videos, or unused apps.",
    },
  },
  {
    keywords: ['password', 'forgot password', 'reset password', 'login', 'locked out', "can't log in", 'sign in', 'credentials'],
    category: 'account',
    answer:
      "To reset a forgotten password:\n\n1. Go to the login page.\n2. Click 'Forgot Password'.\n3. Enter your email address.\n4. Check your email for a reset link.\n5. Click the link and create a new password.\n\nTip: Use a password manager to remember passwords for you!",
  },
  {
    keywords: ['email', 'gmail', 'outlook', 'send email', 'check email', 'inbox', 'mail', 'attachment'],
    category: 'email',
    answer:
      "To check or send email:\n\n1. Open your browser and go to gmail.com or outlook.com.\n2. Sign in with your email and password.\n3. Your inbox shows new messages on the left.\n4. To send: click 'Compose' or 'New', type the recipient's address, write your message, then click Send.",
    deviceAnswers: {
      iphone: "On iPhone:\n\nGmail app: tap the pencil icon (bottom-right) to compose.\nApple Mail: tap the compose icon (bottom-right corner).\nTo add an attachment: tap the paperclip icon or press and hold in the message body.\n\nTip: Make sure your email account is added in Settings > Mail > Accounts.",
      android: "On Android:\n\nGmail app: tap the '+' or pencil icon to compose a new email.\nTo attach a file: tap the paperclip icon in the compose window.\nTo check settings: tap the three lines (menu) > Settings > your account.",
    },
  },
  {
    keywords: ['print', 'printer', 'printing', "won't print", 'paper jam', 'not printing', 'offline printer'],
    category: 'printer',
    answer:
      "To fix printing problems:\n\n1. Make sure the printer is turned on and has paper.\n2. Check it's connected (USB or WiFi).\n3. On your computer, go to Settings > Printers and set yours as default.\n4. Try printing a test page.\n\nFor paper jams, gently pull stuck paper straight out — never yank sideways.",
    deviceAnswers: {
      windows: "Printer fix on Windows:\n\n1. Settings > Bluetooth & devices > Printers & scanners.\n2. Click your printer > 'Open print queue' — cancel any stuck jobs.\n3. Right-click the printer > 'Set as default device'.\n4. Click 'Troubleshoot' if it shows as Offline.\n5. Restart the printer by turning it off and back on.",
      mac: "Printer fix on Mac:\n\n1. Apple menu > System Settings > Printers & Scanners.\n2. Select your printer — if it shows an error, click the 'x' to delete it, then add it again with '+'.\n3. Open any document > File > Print to test.\n4. If it says 'Offline': turn the printer off, wait 30 seconds, turn it back on.",
    },
  },
  {
    keywords: ['battery', 'phone battery', 'charging', 'dies fast', 'drain', 'charge', 'power', 'battery life'],
    category: 'battery',
    answer:
      "To extend battery life:\n\n1. Lower screen brightness.\n2. Turn off WiFi and Bluetooth when not in use.\n3. Close background apps.\n4. Enable Battery Saver mode.\n5. Avoid letting it drop below 20% regularly.",
    deviceAnswers: {
      iphone: "iPhone battery tips:\n\n1. Settings > Battery > turn on 'Low Power Mode'.\n2. Settings > Display & Brightness > lower brightness or enable Auto-Brightness.\n3. Settings > Battery > Battery Health — if below 80%, consider a replacement.\n4. Settings > Background App Refresh > turn it off to save power.\n5. Settings > Location Services > set apps to 'While Using' only.",
      android: "Android battery tips:\n\n1. Settings > Battery > turn on 'Battery Saver' or 'Power Saving Mode'.\n2. Lower screen brightness: swipe down the notification bar.\n3. Settings > Apps — check which apps are using the most battery and restrict them.\n4. Turn off 'Always On Display' if your phone has it.\n5. Settings > Location — set to 'Battery Saving' mode.",
      windows: "Laptop battery tips (Windows):\n\n1. Click the battery icon > drag the slider toward 'Best battery life'.\n2. Settings > System > Power & Sleep — set the screen to turn off sooner.\n3. Unplug accessories like external drives when not in use.\n4. Settings > Battery > Battery Saver — turn it on automatically at 20%.",
      mac: "MacBook battery tips:\n\n1. Apple menu > System Settings > Battery > enable 'Low Power Mode'.\n2. Reduce screen brightness with the F1 key.\n3. Quit apps you're not using (Cmd+Q, not just closing the window).\n4. System Settings > Battery > turn off 'Enable Power Nap'.",
    },
  },
  {
    keywords: ['virus', 'scam', 'hacked', 'malware', 'popup', 'pop-up', 'warning', 'suspicious', 'phishing', 'fake', 'microsoft called'],
    category: 'security',
    answer:
      "Stay safe from scams:\n\n1. NEVER click pop-ups saying 'Your computer has a virus' — those are scams.\n2. NEVER give your password or remote access to anyone who calls you out of the blue.\n3. Don't click links in unexpected emails or texts.\n4. If worried, close your browser and restart the device.\n5. Real companies like Microsoft and Apple NEVER call you unsolicited.",
  },
  {
    keywords: ['screenshot', 'screen shot', 'capture screen', 'print screen', 'snip', 'snipping tool'],
    category: 'howto',
    answer:
      "To take a screenshot:\n\niPhone: Press Side Button + Volume Up at the same time.\nAndroid: Press Power + Volume Down at the same time.\nWindows: Press Windows + Shift + S (select an area) or PrtSc (whole screen).\nMac: Press Command + Shift + 3 (whole screen) or Command + Shift + 4 (select area).",
    deviceAnswers: {
      windows: "Screenshot on Windows:\n\nWindows + Shift + S: drag to select an area (saved to clipboard and notifications).\nPrtSc: whole screen copied to clipboard (paste into Paint or Word).\nSnipping Tool (search in Start menu) for more options and annotations.",
      mac: "Screenshot on Mac:\n\nCmd + Shift + 3: full screen (saved to Desktop).\nCmd + Shift + 4: click and drag to select an area.\nCmd + Shift + 4, then Space: click a window to capture just that window.\nCmd + Shift + 5: screenshot toolbar with all options.",
      iphone: "Screenshot on iPhone:\n\nFace ID models: press Side button + Volume Up simultaneously.\nHome button models: press Side button + Home button simultaneously.\nThe screenshot appears briefly in the bottom-left — tap it to edit, or it saves to Photos.",
      android: "Screenshot on Android:\n\nMost phones: press Power + Volume Down at the same time.\nSamsung: swipe the edge of your hand across the screen (if enabled).\nSome phones: pull down the notification shade and tap 'Screenshot'.\nFind screenshots in Photos > Albums > Screenshots.",
    },
  },
  {
    keywords: ['copy', 'paste', 'copy paste', 'cut', 'clipboard', 'select all', 'ctrl c', 'ctrl v'],
    category: 'howto',
    answer:
      "Copy and Paste:\n\n1. Select text by clicking and dragging over it.\n2. Copy: Ctrl+C (Windows) or Command+C (Mac).\n3. Click where you want to paste.\n4. Paste: Ctrl+V (Windows) or Command+V (Mac).\n\nTip: Ctrl+A / Cmd+A selects everything at once.",
  },
  {
    keywords: ['update', 'updates', 'windows update', 'software update', 'upgrade', 'outdated', 'latest version'],
    category: 'updates',
    answer:
      "To check for updates:\n\nWindows: Start > Settings > Windows Update > Check for updates.\nMac: Apple menu > System Settings > General > Software Update.\niPhone: Settings > General > Software Update.\nAndroid: Settings > Software Update (or System > System Update).\n\nUpdates fix security holes and bugs — always worth doing!",
    deviceAnswers: {
      windows: "Windows Update steps:\n\n1. Click Start > Settings (gear icon).\n2. Click 'Windows Update' in the left panel.\n3. Click 'Check for updates'.\n4. If updates appear, click 'Download & install'.\n5. Restart when prompted — this is important to finish the install.",
      mac: "Mac Software Update:\n\n1. Click the Apple menu (top-left) > System Settings.\n2. Click 'General' > 'Software Update'.\n3. If an update is available, click 'Update Now'.\n4. Your Mac will restart — save any open work first.",
      iphone: "iPhone Update:\n\n1. Settings > General > Software Update.\n2. If an update is available, tap 'Download and Install'.\n3. Enter your passcode if asked.\n4. Keep your iPhone plugged in and on WiFi during the update.",
      android: "Android Update:\n\n1. Settings > About Phone (or General Management) > Software Update.\n2. Tap 'Download and Install'.\n3. Keep the phone plugged in during the update.\nNote: The exact location varies by manufacturer — search 'Software Update' in your Settings search bar.",
    },
  },
  {
    keywords: ['backup', 'back up', 'save files', 'lose data', 'lost files', 'recovery', 'restore'],
    category: 'backup',
    answer:
      "To back up your files:\n\n1. Windows: use File History or an external drive.\n2. Mac: use Time Machine with an external drive.\n3. Cloud: OneDrive (Windows) or iCloud (Mac/iPhone) automatically saves files online.\n\nAim for at least one backup — ideally keep a copy offsite too.",
    deviceAnswers: {
      windows: "Backup on Windows:\n\n1. Plug in an external hard drive.\n2. Settings > System > Storage > Advanced storage settings > Backup options.\n3. Turn on File History and select your drive.\n4. For cloud backup: search 'OneDrive' in the Start menu and sign in — it backs up your Desktop, Documents, and Pictures automatically.",
      mac: "Backup on Mac:\n\n1. Plug in an external drive.\n2. Apple menu > System Settings > General > Time Machine.\n3. Click 'Add Backup Disk' and select your drive.\n4. Time Machine backs up automatically every hour.\n5. For cloud: System Settings > Apple ID > iCloud > enable iCloud Drive.",
      iphone: "Backup iPhone:\n\n1. iCloud Backup (automatic): Settings > [your name] > iCloud > iCloud Backup > turn it on and tap 'Back Up Now'.\n2. Mac/PC Backup: connect your iPhone, open Finder (Mac) or iTunes (PC), click your device, then 'Back Up Now'.",
      android: "Backup Android:\n\n1. Settings > System > Backup > turn on 'Google One backup'.\n2. Tap 'Back up now' to do it immediately.\n3. This backs up apps, settings, call history, and SMS.\n4. For photos: install Google Photos and enable 'Backup & sync'.",
    },
  },
  {
    keywords: ['bluetooth', 'pair', 'headphones', 'speaker', 'connect device', 'airpods', 'earbuds', 'wireless'],
    category: 'bluetooth',
    answer:
      "To connect a Bluetooth device:\n\n1. Put the device (headphones, speaker) in pairing mode — usually hold the power button until a light flashes.\n2. On your phone/computer: Settings > Bluetooth > turn ON.\n3. Your device should appear in the list — tap it to connect.",
    deviceAnswers: {
      windows: "Bluetooth on Windows:\n\n1. Settings > Bluetooth & devices > turn Bluetooth ON.\n2. Click 'Add device' > 'Bluetooth'.\n3. Put your headphones/speaker in pairing mode (hold power button ~5 seconds until light flashes).\n4. Click the device name when it appears and follow any prompts.",
      mac: "Bluetooth on Mac:\n\n1. Apple menu > System Settings > Bluetooth > turn it ON.\n2. Put your device in pairing mode.\n3. It should appear under 'Nearby Devices' — click 'Connect'.\n4. For AirPods: open the case near your Mac — a connection prompt should appear automatically.",
      iphone: "Bluetooth on iPhone:\n\n1. Settings > Bluetooth > turn it ON.\n2. Put your device in pairing mode.\n3. It appears under 'Other Devices' — tap it to pair.\n4. For AirPods: open the case next to your iPhone and tap 'Connect' when the popup appears.",
      android: "Bluetooth on Android:\n\n1. Settings > Connections (or Network & Internet) > Bluetooth > turn it ON.\n2. Tap 'Scan' or 'Pair new device'.\n3. Put your device in pairing mode.\n4. Tap the device name when it appears and confirm the pairing.",
    },
  },
  {
    keywords: ['storage', 'disk full', 'no space', 'running out of space', 'delete files', 'free up', 'full storage'],
    category: 'storage',
    answer:
      "To free up storage:\n\n1. Empty the Recycle Bin / Trash.\n2. Delete apps you don't use.\n3. Move photos/videos to an external drive or cloud storage.\n4. Run built-in cleanup tools (Storage Sense on Windows, Manage on Mac).",
    deviceAnswers: {
      windows: "Free up space on Windows:\n\n1. Right-click the Recycle Bin on the desktop > 'Empty Recycle Bin'.\n2. Settings > System > Storage > 'Cleanup recommendations'.\n3. Settings > Apps > sort by size > uninstall what you don't need.\n4. Move photos to an external drive or turn on OneDrive backup.\n5. Run Disk Cleanup: search it in the Start menu.",
      mac: "Free up space on Mac:\n\n1. Apple menu > About This Mac > More Info > Storage > Manage.\n2. Click 'Recommendations' — follow the prompts to store files in iCloud.\n3. Applications folder > drag unused apps to Trash > empty Trash.\n4. Downloads folder is often full of forgotten files — clean it out.",
      iphone: "Free up space on iPhone:\n\n1. Settings > General > iPhone Storage.\n2. Review the list — tap any app to see its size and offload it if needed.\n3. Tap 'Photos' > enable 'Optimize iPhone Storage' to keep small versions locally.\n4. Scroll down to 'Recommendations' — iOS will suggest things to delete.",
      android: "Free up space on Android:\n\n1. Settings > Storage > see what's using the most space.\n2. Tap 'Apps' to remove unused ones.\n3. Google Photos > Library > Trash > empty it.\n4. Use Google Files app > 'Clean' tab — it finds junk files, duplicate photos, and large files automatically.",
    },
  },
  {
    keywords: ['zoom', 'video call', 'facetime', 'teams', 'video chat', 'camera', 'microphone', 'mic', 'webcam'],
    category: 'video',
    answer:
      "For video calls:\n\n1. Make sure your camera and microphone are enabled.\n2. Check the app has permission: Settings > Privacy > Camera and Microphone.\n3. Test audio/video inside the app before the call.\n4. Good lighting: face a window if possible.\n5. If muted, look for the microphone icon in the call and click it.",
  },
  {
    keywords: ['2fa', 'two factor', 'two-factor', 'authenticator', 'verification code', 'six digit code', '6 digit', 'security code'],
    category: 'security',
    answer:
      "Two-Factor Authentication (2FA) adds a second lock on your account:\n\n1. Go to your account settings (e.g. Google, Facebook).\n2. Find 'Security' > 'Two-Step Verification' or '2FA'.\n3. Choose to receive codes by text message or an authenticator app.\n4. Enter the code you receive to confirm it works.\n\nOnce on, you'll need your password + a code to log in — much safer!",
  },
  {
    keywords: ['apps', 'install app', 'download app', 'uninstall', 'remove app', 'app store', 'google play'],
    category: 'apps',
    answer:
      "To install or remove apps:\n\niPhone: use the App Store. Search for the app and tap 'Get' or the price.\nAndroid: use Google Play Store. Search and tap 'Install'.\nWindows: use the Microsoft Store, or download from the app's official website.\nMac: use the Mac App Store, or drag apps to Trash to uninstall them.",
    deviceAnswers: {
      iphone: "iPhone apps:\n\nInstall: App Store > search > tap 'Get' > enter your Apple ID password or use Face ID.\nDelete: press and hold any app icon > tap 'Remove App' > 'Delete App'.\nOffload (keeps data): Settings > General > iPhone Storage > tap the app > 'Offload App'.",
      android: "Android apps:\n\nInstall: Google Play Store > search > tap 'Install'.\nUninstall: press and hold the app icon > 'Uninstall', or Settings > Apps > select app > 'Uninstall'.\nUpdate all apps: Play Store > profile picture (top-right) > 'Manage apps & device' > 'Update all'.",
      windows: "Windows apps:\n\nInstall: Microsoft Store (Start menu > Store), or download .exe from the developer's official website.\nUninstall: Settings > Apps > Installed apps > find the app > three dots > 'Uninstall'.",
      mac: "Mac apps:\n\nInstall from Mac App Store: click 'Get' or the price button.\nInstall from web: open the .dmg file > drag the app icon to Applications.\nUninstall: Finder > Applications > drag the app to Trash > empty Trash.",
    },
  },
  {
    keywords: ['sound', 'audio', 'no sound', 'volume', 'speakers', 'muted', "can't hear", 'headphone jack'],
    category: 'audio',
    answer:
      "To fix sound problems:\n\n1. Check that the volume isn't turned all the way down or muted.\n2. Make sure headphones are plugged in fully (or disconnected if using speakers).\n3. Restart the device — this resets the audio driver.\n4. Check the app's own volume setting (some apps have separate volume).",
    deviceAnswers: {
      windows: "Fix sound on Windows:\n\n1. Click the speaker icon (bottom-right) — make sure it's not muted.\n2. Right-click the speaker icon > 'Open Sound settings' > make sure the right output device is selected.\n3. Right-click speaker icon > 'Troubleshoot sound problems'.\n4. Restart the computer — audio driver glitches often fix themselves.",
      mac: "Fix sound on Mac:\n\n1. Check the volume keys (F11/F12) or the volume slider in the menu bar.\n2. Apple menu > System Settings > Sound > Output — select the correct output device.\n3. Sometimes plugging and unplugging headphones resets the audio.\n4. Restart the Mac if nothing else works.",
    },
  },
  {
    keywords: ['screen', 'display', 'monitor', 'black screen', 'blank screen', 'flickering', 'resolution', 'too small', 'too big'],
    category: 'display',
    answer:
      "To fix display issues:\n\n1. Check all cables are firmly connected.\n2. Try pressing a key or moving the mouse (it may be sleeping).\n3. Adjust brightness — there may be a brightness button on the keyboard.\n4. For resolution: Settings > Display > Resolution.\n5. Restart the computer — this often fixes black or flickering screens.",
  },
  {
    keywords: ['restart', 'reboot', 'turn off', 'shut down', 'not turning on', "won't start", 'power button'],
    category: 'howto',
    answer:
      "To restart your device:\n\nWindows: Start > Power > Restart.\nMac: Apple menu > Restart.\niPhone: hold Side + Volume Down > 'Slide to Power Off'. Or go to Settings > General > Shut Down.\nAndroid: hold the power button > 'Restart'.\n\nA restart clears temporary files and fixes many common issues.",
  },
  {
    keywords: ['google', 'search', 'browser', 'chrome', 'safari', 'firefox', 'edge', 'not loading', 'website'],
    category: 'browser',
    answer:
      "To fix browser or website issues:\n\n1. Try refreshing the page (press F5, or the refresh arrow icon).\n2. Clear the browser cache: in Chrome, press Ctrl+Shift+Delete > clear Browsing data.\n3. Try opening the site in a different browser.\n4. Check your internet connection.\n5. If one website is down, others may be loading fine — the site itself may be having problems.",
  },
  {
    keywords: ['touchscreen', 'touch screen', 'screen not responding', 'tap not working', 'screen frozen', 'unresponsive'],
    category: 'touchscreen',
    answer:
      "If your touchscreen isn't responding:\n\n1. Make sure your fingers are dry and clean — the screen is capacitive.\n2. Remove any screen protector if it's causing issues.\n3. Restart the device — this almost always fixes unresponsive touch screens.\n4. If only part of the screen doesn't work, it may be a hardware issue — contact the manufacturer.",
  },
];

/* ── Context hints by page route ───────────────────────────── */

export const PAGE_CONTEXT: Record<string, string> = {
  '/guides': 'the guides section',
  '/tools': 'the tools section',
  '/safety/scam-alerts': 'scam alerts and security',
  '/quick-fixes': 'quick fixes',
  '/get-help': 'getting tech help',
  '/book': 'booking a verified technician',
  '/glossary': 'tech terms',
  '/tips': 'tech tips',
  '/forum': 'the community forum',
  '/notifications': 'push notifications',
};

export function getPageContext(pathname: string): string | null {
  if (PAGE_CONTEXT[pathname]) return PAGE_CONTEXT[pathname];
  if (pathname.startsWith('/guides/')) return 'this guide';
  if (pathname.startsWith('/tools/')) return 'this tool';
  return null;
}

/* ── Continuation detection ────────────────────────────────── */

const CONTINUATION_PHRASES = [
  'what about', 'and also', 'also', 'another question', 'one more thing',
  'follow up', 'follow-up', 'additionally', 'furthermore', 'by the way',
  'while i', 'while we', 'speaking of', 'related to',
];

export function isContinuation(text: string): boolean {
  const lower = text.toLowerCase();
  return CONTINUATION_PHRASES.some(p => lower.startsWith(p) || lower.includes(` ${p} `));
}

/* ── Response engine ───────────────────────────────────────── */

export function buildContextualQuery(input: string, pathname: string): string {
  if (pathname.startsWith('/guides/')) {
    const slug = pathname.replace('/guides/', '').replace(/-/g, ' ');
    return `${slug} ${input}`;
  }
  if (pathname.startsWith('/tools/')) {
    const tool = pathname.replace('/tools/', '').replace(/-/g, ' ');
    return `${tool} ${input}`;
  }
  const contextWord = PAGE_CONTEXT[pathname];
  if (contextWord) return `${contextWord} ${input}`;
  return input;
}

export function getResponse(input: string, device: DeviceType): string {
  const lower = input.toLowerCase();
  for (const entry of KB) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      if (device && entry.deviceAnswers?.[device]) {
        return entry.deviceAnswers[device]!;
      }
      return entry.answer;
    }
  }
  return "I'm not sure about that one yet, but I'm always learning!\n\nYou might find the answer in our step-by-step guides, or try asking a different way. For tricky issues, you can also book a real technician for hands-on help.";
}

/* ── Guide matching ────────────────────────────────────────── */

export function findRelatedGuides(query: string, limit = 3): Guide[] {
  const words = query.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const scored = guides.map(g => {
    const haystack = `${g.title} ${g.excerpt} ${g.tags.join(' ')} ${g.category ?? ''}`.toLowerCase();
    let score = words.reduce((acc, w) => acc + (haystack.includes(w) ? 1 : 0), 0);
    for (const entry of KB) {
      if (entry.category && haystack.includes(entry.category)) {
        if (entry.keywords.some(kw => query.toLowerCase().includes(kw))) score += 2;
      }
    }
    return { guide: g, score };
  });
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.guide);
}

/* ── Quick prompts ─────────────────────────────────────────── */

export const DEVICE_PROMPTS: Record<NonNullable<DeviceType>, string[]> = {
  windows: ['My Windows PC is slow', 'Fix WiFi on Windows', 'Windows Update help', 'Printer not working'],
  mac: ['My Mac is running slow', 'Fix WiFi on Mac', 'Mac Software Update', 'Back up my Mac'],
  iphone: ['iPhone battery drains fast', 'Fix WiFi on iPhone', 'Update iOS', 'iPhone storage full'],
  android: ['Android phone is slow', 'Fix WiFi on Android', 'Android update', 'Free up Android space'],
};

export const DEFAULT_PROMPTS = ['My WiFi is slow', 'Reset a password', 'Computer is frozen', 'Got a scam pop-up'];

export const PAGE_PROMPTS: Record<string, string[]> = {
  '/guides': ['Find a WiFi guide', 'How do I back up my files?', 'Password help', 'What guides suit beginners?'],
  '/tools': ['Which tool should I use?', 'How do I check my storage?', 'Test my WiFi speed', 'Check my password strength'],
  '/forum': ['How do I post a question?', 'Browse WiFi help threads', 'Password advice', 'Find tech tips'],
  '/book': ['What does a technician visit cost?', 'How long does a visit take?', 'What can a technician fix?', 'Can I get remote help?'],
  '/get-help': ['What info do I need to share?', 'How quickly will I get help?', 'Is my problem urgent?', 'Can you help with a scam?'],
  '/safety/scam-alerts': ['How do I spot a scam?', 'Got a suspicious email', 'Scam phone call help', 'My account was hacked'],
  '/glossary': ['What does WiFi mean?', 'Explain "cloud storage"', 'What is two-factor auth?', 'What does "update" mean?'],
  '/quick-fixes': ['My screen is frozen', 'WiFi not working', 'Computer running slow', 'Printer not responding'],
  '/tips': ['Best tip for beginners?', 'How to stay safe online?', 'Speed up my device', 'Save battery life'],
};

export function getPagePrompts(pathname: string, device: DeviceType): string[] {
  if (pathname.startsWith('/guides/')) {
    if (device) return DEVICE_PROMPTS[device].slice(0, 4);
    const slug = pathname.replace('/guides/', '');
    const words = slug.replace(/-/g, ' ');
    return [`Tell me more about ${words}`, 'I have a related question', 'Show me similar guides', 'I need extra help with this'];
  }
  if (pathname.startsWith('/tools/')) {
    const tool = pathname.replace('/tools/', '').replace(/-/g, ' ');
    return [`How do I use the ${tool}?`, 'What does this tool check?', 'I got an unexpected result', 'Explain what this means'];
  }
  if (PAGE_PROMPTS[pathname]) return PAGE_PROMPTS[pathname];
  if (device) return DEVICE_PROMPTS[device].slice(0, 4);
  return DEFAULT_PROMPTS;
}
