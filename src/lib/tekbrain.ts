/**
 * Shared TekBrain response engine — used by TekBrain.tsx and AiTutor.tsx
 */

interface KBEntry {
  keywords: string[];
  answer: string;
}

const KB: KBEntry[] = [
  {
    keywords: ['wifi', 'wi-fi', 'internet', 'connected', 'no internet', 'network', 'router', 'broadband', 'connection'],
    answer: "Here's how to fix most WiFi problems:\n\n1. Unplug your WiFi router from the wall.\n2. Wait 30 seconds, then plug it back in.\n3. Wait 2 minutes for it to restart.\n4. Try connecting again.\n\nIf it still doesn't work, move closer to the router and double-check the password.",
  },
  {
    keywords: ['slow', 'computer slow', 'laptop slow', 'takes forever', 'freezing', 'frozen', 'sluggish', 'lagging', 'hanging'],
    answer: "To speed things up:\n\n1. Close any apps or tabs you're not using.\n2. Restart the device — this clears temporary files.\n3. Make sure you have at least 10% free storage.\n4. Check for system updates.\n\nA restart fixes the majority of slowness issues!",
  },
  {
    keywords: ['password', 'forgot password', 'reset password', 'login', 'locked out', "can't log in", 'sign in', 'credentials'],
    answer: "To reset a forgotten password:\n\n1. Go to the login page.\n2. Click 'Forgot Password'.\n3. Enter your email address.\n4. Check your email for a reset link.\n5. Click the link and create a new password.\n\nTip: Use a password manager to remember passwords for you!",
  },
  {
    keywords: ['email', 'gmail', 'outlook', 'send email', 'check email', 'inbox', 'mail', 'attachment'],
    answer: "To check or send email:\n\n1. Open your browser and go to gmail.com or outlook.com.\n2. Sign in with your email and password.\n3. Your inbox shows new messages on the left.\n4. To send: click 'Compose', type the recipient's address, write your message, then click Send.",
  },
  {
    keywords: ['print', 'printer', 'printing', "won't print", 'paper jam', 'not printing', 'offline printer'],
    answer: "To fix printing problems:\n\n1. Make sure the printer is turned on and has paper.\n2. Check it's connected (USB or WiFi).\n3. On your computer, go to Settings → Printers and set yours as default.\n4. Try printing a test page.\n\nFor paper jams, gently pull stuck paper straight out.",
  },
  {
    keywords: ['battery', 'charging', 'dies fast', 'drain', 'charge', 'power', 'battery life'],
    answer: "To extend battery life:\n\n1. Lower screen brightness.\n2. Turn off WiFi and Bluetooth when not in use.\n3. Close background apps.\n4. Enable Battery Saver mode.\n5. Avoid letting it drop below 20% regularly.",
  },
  {
    keywords: ['virus', 'scam', 'hacked', 'malware', 'popup', 'pop-up', 'warning', 'suspicious', 'phishing', 'fake'],
    answer: "⚠️ Stay safe from scams:\n\n1. NEVER click pop-ups saying 'Your computer has a virus' — those are scams!\n2. NEVER give your password to anyone who calls you out of the blue.\n3. Don't click links in unexpected emails or texts.\n4. If worried, close your browser and restart the device.\n5. Real companies like Microsoft and Apple NEVER call you unsolicited.",
  },
  {
    keywords: ['screenshot', 'screen shot', 'capture screen', 'print screen', 'snip'],
    answer: "To take a screenshot:\n\n📱 iPhone: press Side Button + Volume Up at the same time.\n📱 Android: press Power + Volume Down at the same time.\n💻 Windows: press Windows + Shift + S (select an area).\n🍎 Mac: press Command + Shift + 3 (whole screen) or Command + Shift + 4 (select area).",
  },
  {
    keywords: ['copy', 'paste', 'copy paste', 'cut', 'clipboard', 'select all'],
    answer: "Copy and Paste:\n\n1. Select text by clicking and dragging over it.\n2. Copy: Ctrl+C (Windows) or Command+C (Mac).\n3. Click where you want to paste.\n4. Paste: Ctrl+V (Windows) or Command+V (Mac).\n\nTip: Ctrl+A / Cmd+A selects everything at once.",
  },
  {
    keywords: ['update', 'updates', 'windows update', 'software update', 'upgrade', 'outdated'],
    answer: "To check for updates:\n\n💻 Windows: Start → Settings → Windows Update → Check for updates.\n🍎 Mac: Apple menu → System Settings → General → Software Update.\n📱 iPhone: Settings → General → Software Update.\n📱 Android: Settings → Software Update.\n\nUpdates fix security holes and bugs — always worth doing!",
  },
  {
    keywords: ['backup', 'back up', 'save files', 'lose data', 'lost files', 'recovery', 'restore'],
    answer: "To back up your files:\n\n1. Windows: use File History or an external drive.\n2. Mac: use Time Machine with an external drive.\n3. Cloud: OneDrive (Windows) or iCloud (Mac/iPhone) automatically saves files online.\n\nAim for at least one backup — ideally keep a copy offsite too.",
  },
  {
    keywords: ['bluetooth', 'pair', 'headphones', 'speaker', 'connect device', 'airpods', 'earbuds', 'wireless'],
    answer: "To connect a Bluetooth device:\n\n1. Put the device in pairing mode — usually hold the power button until a light flashes.\n2. On your phone/computer: Settings → Bluetooth → turn ON.\n3. Your device should appear in the list — tap it to connect.",
  },
  {
    keywords: ['storage', 'disk full', 'no space', 'running out of space', 'free up', 'full storage'],
    answer: "To free up storage:\n\n1. Empty the Recycle Bin / Trash.\n2. Delete apps you don't use.\n3. Move photos/videos to an external drive or cloud storage.\n4. Run built-in cleanup tools (Storage Sense on Windows, Manage on Mac).",
  },
  {
    keywords: ['zoom', 'video call', 'facetime', 'teams', 'video chat', 'camera', 'microphone', 'webcam'],
    answer: "For video calls:\n\n1. Make sure your camera and microphone are enabled.\n2. Check the app has permission: Settings → Privacy → Camera and Microphone.\n3. Test audio/video inside the app before the call.\n4. Good lighting: face a window if possible.\n5. If muted, look for the microphone icon and click it.",
  },
  {
    keywords: ['2fa', 'two factor', 'two-factor', 'authenticator', 'verification code', 'security code'],
    answer: "Two-Factor Authentication (2FA) adds a second lock on your account:\n\n1. Go to your account settings (e.g. Google, Facebook).\n2. Find 'Security' → 'Two-Step Verification'.\n3. Choose to receive codes by text or an authenticator app.\n4. Enter the code to confirm it works.\n\nOnce on, you'll need your password + a code to log in — much safer!",
  },
  {
    keywords: ['sound', 'audio', 'no sound', 'volume', 'speakers', 'muted', "can't hear"],
    answer: "To fix sound problems:\n\n1. Check that the volume isn't turned all the way down or muted.\n2. Make sure headphones are plugged in fully (or disconnected if using speakers).\n3. Restart the device — this resets the audio driver.\n4. Check the app's own volume setting.",
  },
  {
    keywords: ['restart', 'reboot', 'turn off', 'shut down', 'not turning on', "won't start"],
    answer: "To restart your device:\n\n💻 Windows: Start → Power → Restart.\n🍎 Mac: Apple menu → Restart.\n📱 iPhone: hold Side + Volume Down → 'Slide to Power Off'.\n📱 Android: hold the power button → 'Restart'.\n\nA restart clears temporary files and fixes many common issues.",
  },
  {
    keywords: ['google', 'search', 'browser', 'chrome', 'safari', 'firefox', 'not loading', 'website'],
    answer: "To fix browser or website issues:\n\n1. Try refreshing the page (press F5).\n2. Clear the browser cache: in Chrome, press Ctrl+Shift+Delete.\n3. Try opening the site in a different browser.\n4. Check your internet connection.\n5. The website itself may be temporarily down.",
  },
];

const FALLBACK = "That's a great question! I don't have a specific answer for that yet, but here are some tips:\n\n• Try searching our step-by-step guides for help\n• Check the Quick Fixes section for common issues\n• If you're still stuck, you can book a verified technician for hands-on help\n\nIs there something more specific I can help you with?";

export async function getResponse(input: string): Promise<string> {
  const lower = input.toLowerCase();
  for (const entry of KB) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.answer;
    }
  }
  return FALLBACK;
}
