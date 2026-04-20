import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Languages,
  Sparkles,
  BookOpen,
  Lightbulb,
  Eraser,
  Brain,
  ArrowRight,
  FileText,
} from 'lucide-react';

interface JargonEntry {
  term: string;
  category: string;
  plain: string;
}

// Comprehensive dictionary of 160+ jargon terms organized for longest-first matching.
const JARGON: JargonEntry[] = [
  // Security
  { term: 'two-factor authentication', category: 'Security', plain: 'a second way to prove it is you signing in, usually a code sent to your phone' },
  { term: 'multi-factor authentication', category: 'Security', plain: 'using more than one way to prove it is you signing in, like a password plus a code' },
  { term: 'end-to-end encryption', category: 'Security', plain: 'scrambling messages so only you and the person you are talking to can read them, not even the company in the middle' },
  { term: 'zero-day', category: 'Security', plain: 'a brand-new software flaw criminals found before the company could fix it' },
  { term: 'data breach', category: 'Security', plain: 'a company getting hacked and your information stolen' },
  { term: 'ransomware', category: 'Security', plain: 'a scam where criminals lock your files and demand payment to unlock them' },
  { term: 'phishing', category: 'Security', plain: 'tricking you into giving up passwords through fake emails or texts' },
  { term: 'smishing', category: 'Security', plain: 'phishing but through text messages' },
  { term: 'vishing', category: 'Security', plain: 'phishing but through phone calls' },
  { term: 'spoofing', category: 'Security', plain: 'faking a caller ID, email address, or website to pretend to be someone else' },
  { term: 'malware', category: 'Security', plain: 'any kind of bad software that harms your device' },
  { term: 'spyware', category: 'Security', plain: 'software that secretly watches what you do on your device' },
  { term: 'adware', category: 'Security', plain: 'software that floods your device with ads' },
  { term: 'trojan', category: 'Security', plain: 'a harmful program disguised as something useful' },
  { term: 'keylogger', category: 'Security', plain: 'a hidden program that records every key you press' },
  { term: 'firewall', category: 'Security', plain: 'a digital guard that blocks unwanted traffic from reaching your device' },
  { term: 'antivirus', category: 'Security', plain: 'software that scans for and removes harmful programs' },
  { term: 'encryption', category: 'Security', plain: 'scrambling information so only people with the key can read it' },
  { term: 'decryption', category: 'Security', plain: 'unscrambling encrypted information back to something you can read' },
  { term: 'passkey', category: 'Security', plain: 'a new kind of password replacement that uses your face, fingerprint, or PIN' },
  { term: 'password manager', category: 'Security', plain: 'a locked vault app that remembers all your passwords for you' },
  { term: 'brute force', category: 'Security', plain: 'a criminal guessing your password by trying millions of combinations' },
  { term: 'captcha', category: 'Security', plain: 'those "pick the traffic lights" puzzles that prove you are a real person, not a robot' },
  { term: 'biometric', category: 'Security', plain: 'using your body, like your face or fingerprint, to unlock something' },
  { term: 'identity theft', category: 'Security', plain: 'a criminal pretending to be you to open accounts or steal money' },
  { term: 'credential stuffing', category: 'Security', plain: 'criminals using passwords stolen from one site to break into your other accounts' },
  { term: 'social engineering', category: 'Security', plain: 'tricking a person into giving up information, instead of hacking a computer' },
  { term: 'SSL', category: 'Security', plain: 'the lock-icon encryption that protects web connections' },
  { term: 'TLS', category: 'Security', plain: 'the modern version of SSL encryption that protects websites' },
  { term: 'HTTPS', category: 'Security', plain: 'the secure version of a web address, shown by the lock icon' },
  { term: 'VPN', category: 'Security', plain: 'a tool that hides what you do online and makes it look like you are in a different place' },
  { term: '2FA', category: 'Security', plain: 'two-factor authentication, a second way to prove it is you signing in' },
  { term: 'MFA', category: 'Security', plain: 'multi-factor authentication, using more than one way to prove it is you' },

  // Networking
  { term: 'bandwidth', category: 'Networking', plain: 'how much data your internet can handle at once, like the width of a pipe' },
  { term: 'latency', category: 'Networking', plain: 'the delay between clicking something and it actually happening' },
  { term: 'throughput', category: 'Networking', plain: 'how much data actually gets through your internet connection' },
  { term: 'ping', category: 'Networking', plain: 'how fast your device can reach another computer, measured in milliseconds' },
  { term: 'router', category: 'Networking', plain: 'the box that sends internet from your wall to all your devices' },
  { term: 'modem', category: 'Networking', plain: 'the box that brings internet into your home from your internet company' },
  { term: 'mesh network', category: 'Networking', plain: 'several Wi-Fi units spread around your home that work together for better coverage' },
  { term: 'Wi-Fi 6', category: 'Networking', plain: 'a newer, faster kind of Wi-Fi that handles lots of devices at once' },
  { term: 'DNS', category: 'Networking', plain: 'the phone book of the internet that turns website names into numbers computers understand' },
  { term: 'IP address', category: 'Networking', plain: 'a unique number that identifies your device on the internet' },
  { term: 'MAC address', category: 'Networking', plain: 'a unique ID number built into your device for network identification' },
  { term: 'ethernet', category: 'Networking', plain: 'the cable you plug into a computer for a wired internet connection' },
  { term: 'packet', category: 'Networking', plain: 'a small chunk of data sent across the internet' },
  { term: 'ISP', category: 'Networking', plain: 'internet service provider, the company you pay for internet' },
  { term: 'SSID', category: 'Networking', plain: 'the name of your Wi-Fi network' },
  { term: 'hotspot', category: 'Networking', plain: 'using your phone to share its cellular internet with your laptop or tablet' },
  { term: 'tethering', category: 'Networking', plain: 'connecting your computer to your phone to use its internet' },
  { term: '5G', category: 'Networking', plain: 'the latest generation of cellular signal, faster than 4G' },
  { term: 'LTE', category: 'Networking', plain: 'a common type of 4G cellular signal' },

  // Cloud & Web
  { term: 'cloud storage', category: 'Cloud', plain: 'storing your files on a company\'s computers over the internet instead of on your device' },
  { term: 'cloud', category: 'Cloud', plain: 'files and services stored on someone else\'s computers, reached over the internet' },
  { term: 'SaaS', category: 'Cloud', plain: 'software you rent monthly over the internet instead of buying once' },
  { term: 'server', category: 'Cloud', plain: 'a powerful computer that delivers websites or data to other computers' },
  { term: 'data center', category: 'Cloud', plain: 'a huge warehouse full of computers that run the internet' },
  { term: 'uptime', category: 'Cloud', plain: 'how often a service is working and available' },
  { term: 'downtime', category: 'Cloud', plain: 'when a service is broken or not working' },
  { term: 'sync', category: 'Cloud', plain: 'keeping the same files up to date across all your devices automatically' },
  { term: 'backup', category: 'Cloud', plain: 'an extra copy of your files saved somewhere safe in case the originals are lost' },

  // Software / General
  { term: 'operating system', category: 'Software', plain: 'the main software that runs your device, like Windows, macOS, iOS, or Android' },
  { term: 'firmware', category: 'Software', plain: 'basic software inside a device that controls how the hardware works' },
  { term: 'driver', category: 'Software', plain: 'a small program that lets your computer talk to a piece of hardware, like a printer' },
  { term: 'patch', category: 'Software', plain: 'a small fix for a bug or security hole in a program' },
  { term: 'update', category: 'Software', plain: 'a newer version of an app or system, usually with fixes and improvements' },
  { term: 'upgrade', category: 'Software', plain: 'moving to a bigger or newer version of something' },
  { term: 'install', category: 'Software', plain: 'putting a program onto your device so you can use it' },
  { term: 'uninstall', category: 'Software', plain: 'removing a program from your device' },
  { term: 'cache', category: 'Software', plain: 'temporary storage so things load faster the next time you open them' },
  { term: 'bug', category: 'Software', plain: 'a mistake in a program that makes it behave incorrectly' },
  { term: 'crash', category: 'Software', plain: 'when a program unexpectedly stops working' },
  { term: 'reboot', category: 'Software', plain: 'turning your device off and back on again' },
  { term: 'restart', category: 'Software', plain: 'turning your device off and back on again' },
  { term: 'factory reset', category: 'Software', plain: 'wiping your device back to the way it was when you first bought it' },
  { term: 'kernel', category: 'Software', plain: 'the deepest core of an operating system that controls everything' },
  { term: 'bootloader', category: 'Software', plain: 'the first program that runs when you turn your device on' },
  { term: 'freemium', category: 'Software', plain: 'a service free to start, but with paid upgrades to unlock more' },
  { term: 'beta', category: 'Software', plain: 'an early test version of software that may still have bugs' },
  { term: 'open source', category: 'Software', plain: 'software whose instructions are public so anyone can see, use, or improve them' },

  // Web
  { term: 'browser', category: 'Web', plain: 'the app you use to visit websites, like Chrome, Safari, or Firefox' },
  { term: 'cookie', category: 'Web', plain: 'a tiny file a website saves on your device to remember you' },
  { term: 'URL', category: 'Web', plain: 'the address of a website' },
  { term: 'link', category: 'Web', plain: 'text or a button you click to go to another page' },
  { term: 'hyperlink', category: 'Web', plain: 'a clickable piece of text that takes you to another webpage' },
  { term: 'bookmark', category: 'Web', plain: 'a saved shortcut to a webpage you want to find again' },
  { term: 'incognito mode', category: 'Web', plain: 'a browser mode that does not save your history or cookies' },
  { term: 'pop-up', category: 'Web', plain: 'a small window that appears on top of a webpage, often an ad' },
  { term: 'third-party', category: 'Web', plain: 'a company other than the one you are dealing with directly, often getting your data' },
  { term: 'ad tracker', category: 'Web', plain: 'a hidden piece of code that follows you around the web to show you ads' },

  // Hardware
  { term: 'CPU', category: 'Hardware', plain: 'the brain of your computer that runs everything' },
  { term: 'GPU', category: 'Hardware', plain: 'a chip that draws graphics and handles video and games' },
  { term: 'RAM', category: 'Hardware', plain: 'short-term memory your computer uses to run open apps right now' },
  { term: 'SSD', category: 'Hardware', plain: 'a fast, modern kind of hard drive with no moving parts' },
  { term: 'HDD', category: 'Hardware', plain: 'an older kind of hard drive with spinning disks inside' },
  { term: 'USB-C', category: 'Hardware', plain: 'a small, oval, reversible plug used on most new phones and laptops' },
  { term: 'HDMI', category: 'Hardware', plain: 'the flat cable used to connect devices to a TV or monitor' },
  { term: 'dongle', category: 'Hardware', plain: 'a small adapter that plugs into a port to add a different kind of connection' },
  { term: 'peripheral', category: 'Hardware', plain: 'an extra device plugged into your computer, like a mouse or printer' },
  { term: 'thermal throttling', category: 'Hardware', plain: 'your device slowing itself down when it gets too hot' },
  { term: 'overheating', category: 'Hardware', plain: 'your device getting too hot to work properly' },

  // Mobile
  { term: 'push notification', category: 'Mobile', plain: 'a message an app sends to your phone even when you are not using it' },
  { term: 'app store', category: 'Mobile', plain: 'the place on your phone where you download apps' },
  { term: 'airplane mode', category: 'Mobile', plain: 'a setting that turns off all wireless signals on your device' },
  { term: 'in-app purchase', category: 'Mobile', plain: 'buying something from inside an app, like extra features or coins' },
  { term: 'sideloading', category: 'Mobile', plain: 'installing an app from outside the official app store' },
  { term: 'jailbreaking', category: 'Mobile', plain: 'removing built-in restrictions on an iPhone to install unofficial software' },
  { term: 'rooting', category: 'Mobile', plain: 'the Android version of jailbreaking, unlocking the phone\'s deepest controls' },

  // Email & messaging
  { term: 'spam', category: 'Email', plain: 'junk email you did not ask for' },
  { term: 'BCC', category: 'Email', plain: 'a hidden email recipient that other recipients cannot see' },
  { term: 'CC', category: 'Email', plain: 'including someone on an email so they can see it too' },
  { term: 'attachment', category: 'Email', plain: 'a file sent along with an email' },
  { term: 'forwarding', category: 'Email', plain: 'sending an email you received on to someone else' },
  { term: 'autoreply', category: 'Email', plain: 'an automatic response sent when you get an email, like an out-of-office notice' },
  { term: 'inbox', category: 'Email', plain: 'where your incoming emails land' },
  { term: 'archive', category: 'Email', plain: 'moving an email out of your inbox without deleting it' },

  // AI
  { term: 'large language model', category: 'AI', plain: 'an AI program trained on lots of text that can write, answer questions, and chat' },
  { term: 'machine learning', category: 'AI', plain: 'a way for computers to learn patterns from data, instead of being told exact rules' },
  { term: 'neural network', category: 'AI', plain: 'a type of computer program loosely inspired by how the brain works' },
  { term: 'generative AI', category: 'AI', plain: 'AI that creates new things, like text, images, or music' },
  { term: 'hallucination', category: 'AI', plain: 'when an AI confidently makes up something that is not true' },
  { term: 'prompt', category: 'AI', plain: 'the question or instruction you type into an AI chatbot' },
  { term: 'chatbot', category: 'AI', plain: 'a program you can chat with, like ChatGPT' },
  { term: 'deepfake', category: 'AI', plain: 'a fake video or audio made by AI that looks or sounds like a real person' },
  { term: 'training data', category: 'AI', plain: 'the examples an AI learned from before it was released' },
  { term: 'LLM', category: 'AI', plain: 'large language model, an AI trained on lots of text that can chat and write' },
  { term: 'AI', category: 'AI', plain: 'artificial intelligence, software that can do tasks that normally need human thinking' },

  // Programming (light)
  { term: 'API', category: 'Programming', plain: 'a way for two pieces of software to talk to each other' },
  { term: 'algorithm', category: 'Programming', plain: 'a set of step-by-step rules a computer follows to do a job' },
  { term: 'source code', category: 'Programming', plain: 'the human-readable instructions that make up a program' },
  { term: 'database', category: 'Databases', plain: 'an organized list where a program stores its information' },
  { term: 'query', category: 'Databases', plain: 'a request asking a database to give back certain information' },
  { term: 'metadata', category: 'Databases', plain: 'data about data, like the date a photo was taken or who sent a message' },
  { term: 'SDK', category: 'Programming', plain: 'software development kit, a bundle of tools for building apps' },

  // Passwords / accounts
  { term: 'single sign-on', category: 'Accounts', plain: 'signing into many services with one account, like using Google to log into other sites' },
  { term: 'OAuth', category: 'Accounts', plain: 'a standard way one service can log you in to another, without sharing your password' },
  { term: 'session', category: 'Accounts', plain: 'the time you are signed in to a website or app' },
  { term: 'log in', category: 'Accounts', plain: 'entering your details so a service knows it is you' },
  { term: 'log out', category: 'Accounts', plain: 'signing yourself out of a service for safety' },
  { term: 'credentials', category: 'Accounts', plain: 'your username and password used to prove who you are' },

  // Storage
  { term: 'gigabyte', category: 'Storage', plain: 'a unit of digital storage, about 250 songs or a short movie' },
  { term: 'terabyte', category: 'Storage', plain: 'a very large unit of storage, about 1,000 gigabytes' },
  { term: 'megabyte', category: 'Storage', plain: 'a small unit of storage, about the size of a minute of music' },

  // Misc modern terms
  { term: 'stream', category: 'Web', plain: 'watching or listening to something over the internet as it plays, not downloading it first' },
  { term: 'buffering', category: 'Web', plain: 'a video pausing to load more of itself so it can keep playing smoothly' },
  { term: 'live chat', category: 'Web', plain: 'a text conversation with a real person or bot on a website in real time' },
  { term: 'widget', category: 'Mobile', plain: 'a small app mini-window you can put on your home screen' },
  { term: 'plugin', category: 'Software', plain: 'an add-on that gives a program extra features' },
  { term: 'extension', category: 'Web', plain: 'a small add-on for your browser that adds new features' },
  { term: 'throttle', category: 'Networking', plain: 'deliberately slowing down your internet, often by your provider' },
  { term: 'bandwidth cap', category: 'Networking', plain: 'a monthly limit on how much internet data you can use' },
  { term: 'data cap', category: 'Networking', plain: 'a monthly limit on how much internet data you can use' },
  { term: 'NFC', category: 'Hardware', plain: 'a chip that lets phones pay or share by tapping close to another device' },
  { term: 'Bluetooth', category: 'Hardware', plain: 'short-range wireless used to connect things like headphones, keyboards, and speakers' },
  { term: 'GPS', category: 'Mobile', plain: 'satellite technology that tells your device where it is on the map' },
  { term: 'geolocation', category: 'Mobile', plain: 'figuring out where your device is based on GPS or nearby Wi-Fi' },
  { term: 'tracking pixel', category: 'Web', plain: 'a tiny invisible image in emails or web pages used to see if you opened them' },
  { term: 'user agent', category: 'Web', plain: 'a label your browser sends websites saying what kind of device you are using' },
  { term: 'thumbnail', category: 'Web', plain: 'a tiny preview image of a larger picture or video' },
  { term: 'resolution', category: 'Hardware', plain: 'how sharp a screen or image is, measured in pixels' },
  { term: 'pixel', category: 'Hardware', plain: 'one of the tiny dots that make up a picture on a screen' },
  { term: 'aspect ratio', category: 'Hardware', plain: 'the shape of a screen or picture, like wide vs. square' },
  { term: 'codec', category: 'Software', plain: 'a method for squeezing video or audio so it takes up less space' },
  { term: 'metadata scrubbing', category: 'Security', plain: 'removing hidden info from files before sharing them, like the location a photo was taken' },
  { term: 'burner account', category: 'Accounts', plain: 'a throwaway account you use once and abandon' },
  { term: 'data broker', category: 'Security', plain: 'a company that buys and sells personal information about people' },
  { term: 'third-party cookie', category: 'Web', plain: 'a cookie from a company other than the site you are visiting, often used to track you' },
];

// Sort descending by length so "two-factor authentication" matches before "authentication".
const SORTED_JARGON = [...JARGON].sort((a, b) => b.term.length - a.term.length);

const EXAMPLE_TEXTS: { label: string; text: string }[] = [
  {
    label: 'Apple iCloud terms snippet',
    text: `By using iCloud, you acknowledge that Apple uses end-to-end encryption for certain data classes. Your credentials, metadata, and backup data may be stored on Apple\'s servers in the cloud. Enabling two-factor authentication is recommended to protect your account from phishing and credential stuffing attacks.`,
  },
  {
    label: 'Internet bill description',
    text: `Your monthly invoice includes bandwidth up to 500 Mbps, router rental, and a data cap of 1.2 TB. Additional ISP fees cover regional infrastructure. Late payments may cause temporary throttling. For support, log in to your account using your credentials.`,
  },
  {
    label: 'Website privacy policy',
    text: `We use cookies and tracking pixels to personalize your experience. Third-party partners, including data brokers, may receive metadata about your device. You may opt out in settings. Our site uses HTTPS with TLS encryption for all sessions.`,
  },
  {
    label: 'Tech support email',
    text: `Please reboot your device, clear the browser cache, and ensure your firmware is up to date. If issues continue, we may need to factory reset the modem. Make sure 2FA is enabled on your account to prevent phishing attempts.`,
  },
  {
    label: 'Phone carrier upgrade offer',
    text: `Upgrade to our 5G plan with unlimited LTE data, mobile hotspot, and a new SSID for your home Wi-Fi router. No data cap, no throttling. Biometric login via passkey supported in our app.`,
  },
  {
    label: 'Software update notice',
    text: `This patch fixes several bugs including a zero-day vulnerability, reduces thermal throttling on the CPU, and improves sync performance across the cloud. A reboot is required after install.`,
  },
];

interface Match {
  start: number;
  end: number;
  entry: JargonEntry;
}

function findMatches(text: string): Match[] {
  if (!text) return [];
  const lower = text.toLowerCase();
  const taken: boolean[] = new Array(text.length).fill(false);
  const matches: Match[] = [];

  for (const entry of SORTED_JARGON) {
    const needle = entry.term.toLowerCase();
    let from = 0;
    while (from <= lower.length - needle.length) {
      const idx = lower.indexOf(needle, from);
      if (idx === -1) break;

      // Word boundary check
      const before = idx === 0 ? ' ' : lower[idx - 1];
      const afterIdx = idx + needle.length;
      const after = afterIdx >= lower.length ? ' ' : lower[afterIdx];
      const isWordChar = (c: string) => /[a-z0-9]/.test(c);
      const boundaryOK = !isWordChar(before) && !isWordChar(after);

      // Overlap check
      let overlap = false;
      for (let i = idx; i < afterIdx; i++) {
        if (taken[i]) { overlap = true; break; }
      }

      if (boundaryOK && !overlap) {
        for (let i = idx; i < afterIdx; i++) taken[i] = true;
        matches.push({ start: idx, end: afterIdx, entry });
      }
      from = idx + needle.length;
    }
  }

  return matches.sort((a, b) => a.start - b.start);
}

export default function PlainEnglishTranslator() {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  const matches = useMemo(() => findMatches(submitted), [submitted]);

  const uniqueTerms = useMemo(() => {
    const seen = new Set<string>();
    const out: JargonEntry[] = [];
    for (const m of matches) {
      const key = m.entry.term.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        out.push(m.entry);
      }
    }
    return out;
  }, [matches]);

  const highlighted = useMemo(() => {
    if (!submitted) return null;
    const parts: Array<{ type: 'text' | 'term'; content: string; entry?: JargonEntry }> = [];
    let cursor = 0;
    for (const m of matches) {
      if (m.start > cursor) {
        parts.push({ type: 'text', content: submitted.slice(cursor, m.start) });
      }
      parts.push({ type: 'term', content: submitted.slice(m.start, m.end), entry: m.entry });
      cursor = m.end;
    }
    if (cursor < submitted.length) {
      parts.push({ type: 'text', content: submitted.slice(cursor) });
    }
    return parts;
  }, [submitted, matches]);

  const plainVersion = useMemo(() => {
    if (!submitted) return '';
    let cursor = 0;
    let out = '';
    for (const m of matches) {
      out += submitted.slice(cursor, m.start);
      out += `${submitted.slice(m.start, m.end)} (${m.entry.plain})`;
      cursor = m.end;
    }
    out += submitted.slice(cursor);
    return out;
  }, [submitted, matches]);

  const handleTranslate = () => {
    setSubmitted(input);
  };

  const handleClear = () => {
    setInput('');
    setSubmitted('');
  };

  const handleExample = (text: string) => {
    setInput(text);
    setSubmitted(text);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Tech Jargon Translator — Explain It Like I'm 80 | TekSure"
        description="Paste any confusing tech text and get a plain-English translation. Over 160 tech terms explained in simple language anyone can understand."
      />
      <Navbar />

      <main className="flex-1">
        <PageBreadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Plain English Translator' }]} />

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Languages className="h-4 w-4" />
              Jargon → Plain English
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Paste Any Tech-Speak. Get Plain English Back.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tech companies love to hide behind big words. Paste any confusing text below and
              we will translate every jargon term into something anyone can understand.
            </p>
          </div>
        </section>

        {/* Translator */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
              <label htmlFor="jargon-input" className="block text-sm font-semibold mb-2">
                Paste confusing tech text here
              </label>
              <Textarea
                id="jargon-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Example: Your ISP throttles bandwidth after you exceed the data cap unless you enable 2FA on a premium account..."
                className="min-h-[180px] text-base"
              />
              <div className="flex flex-wrap gap-3 mt-4">
                <Button onClick={handleTranslate} size="lg" className="gap-2" disabled={!input.trim()}>
                  <Sparkles className="h-4 w-4" />
                  Translate
                </Button>
                <Button onClick={handleClear} variant="outline" size="lg" className="gap-2">
                  <Eraser className="h-4 w-4" />
                  Clear
                </Button>
              </div>
            </div>

            {/* Examples */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Not sure where to start? Try one of these:
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {EXAMPLE_TEXTS.map((ex) => (
                  <button
                    key={ex.label}
                    onClick={() => handleExample(ex.text)}
                    className="text-left p-4 border rounded-lg hover:bg-muted/50 hover:border-primary transition-colors"
                  >
                    <div className="font-semibold text-sm mb-1">{ex.label}</div>
                    <div className="text-sm text-muted-foreground line-clamp-2">{ex.text}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            {submitted && (
              <div className="mt-10 space-y-8">
                {/* Highlighted text */}
                <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Your text with jargon highlighted
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Terms highlighted in yellow are explained below.
                  </p>
                  <div className="text-base leading-relaxed whitespace-pre-wrap">
                    {highlighted?.map((part, i) =>
                      part.type === 'term' ? (
                        <mark
                          key={i}
                          className="bg-yellow-200 dark:bg-yellow-800/60 text-foreground px-1 rounded"
                          title={part.entry?.plain}
                        >
                          {part.content}
                        </mark>
                      ) : (
                        <span key={i}>{part.content}</span>
                      )
                    )}
                  </div>
                </div>

                {/* Glossary */}
                <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    What each term means
                  </h2>
                  {uniqueTerms.length === 0 ? (
                    <p className="text-muted-foreground">
                      We did not spot any jargon terms in your text. Try pasting something denser — a bill, privacy policy, or tech support email.
                    </p>
                  ) : (
                    <ul className="space-y-4">
                      {uniqueTerms.map((t) => (
                        <li key={t.term} className="border-l-4 border-primary pl-4 py-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-bold text-lg">{t.term}</span>
                            <Badge variant="secondary">{t.category}</Badge>
                          </div>
                          <p className="text-muted-foreground">{t.plain}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Plain version */}
                {uniqueTerms.length > 0 && (
                  <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Languages className="h-5 w-5 text-primary" />
                      Plain-English version
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Each jargon term now has a plain-English explanation right next to it in parentheses.
                    </p>
                    <div className="text-base leading-relaxed whitespace-pre-wrap bg-muted/50 p-4 rounded-lg">
                      {plainVersion}
                    </div>
                  </div>
                )}

                {/* Still not clear */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
                  <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Still not clear?</h3>
                  <p className="text-muted-foreground mb-4">
                    Ask TekSure Brain — our AI assistant trained on plain-language tech help.
                  </p>
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/brain">
                      Ask TekSure Brain
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Dictionary stats */}
            <div className="mt-10 text-center text-sm text-muted-foreground">
              Our dictionary covers <strong>{JARGON.length}</strong> tech terms across networking,
              security, AI, hardware, software, cloud, web, mobile, email, passwords, storage,
              and databases.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
