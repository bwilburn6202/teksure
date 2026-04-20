import React from 'react';
import {
  Settings, Shield, Wifi, Download, FolderOpen, Monitor, Smartphone,
  MousePointer, Keyboard, Eye, Lock, Trash2, RefreshCw, Power,
  Search, Mail, Globe, Camera, Volume2, Bluetooth, HardDrive,
  ChevronRight, Copy, Printer, Users, Bell, Zap,
} from 'lucide-react';
import { CopyButton } from '@/components/CopyButton';
import {
  Tooltip, TooltipContent, TooltipTrigger,
} from '@/components/ui/tooltip';

/* ── Glossary ──────────────────────────────────────────────── */

const GLOSSARY: Record<string, string> = {
  'SSID': 'Your Wi-Fi network\'s name — it\'s what shows up when you search for Wi-Fi.',
  'PIN': 'A short number code (usually 4–6 digits) used to unlock your device.',
  'clipboard': 'A hidden holding area where your device stores anything you copy or cut.',
  'taskbar': 'The bar at the bottom of your Windows screen with the Start button and app icons.',
  'system tray': 'The small icons on the right side of the taskbar — Wi-Fi, volume, clock, etc.',
  'Dock': 'The row of app icons at the bottom (or side) of a Mac screen.',
  'Finder': 'The file manager on Mac — like File Explorer on Windows.',
  'Spotlight': 'Mac\'s built-in search tool. Press Cmd+Space to open it.',
  'File Explorer': 'The Windows app for browsing folders and files on your computer.',
  'browser': 'The app you use to visit websites — like Chrome, Safari, Edge, or Firefox.',
  'Bluetooth': 'A wireless way to connect nearby devices like headphones, keyboards, or speakers.',
  'iCloud': 'Apple\'s service that syncs your photos, contacts, and files across your Apple devices.',
  'two-factor authentication': 'An extra security step — after your password, you confirm with a code sent to your phone.',
  '2FA': 'Short for two-factor authentication — a second verification step beyond your password.',
  'VPN': 'A tool that encrypts your internet connection for privacy, especially on public Wi-Fi.',
  'phishing': 'A scam where someone pretends to be a trusted company to trick you into sharing personal info.',
  'malware': 'Bad software designed to harm your device or steal your data — includes viruses and spyware.',
  'firewall': 'A security barrier that blocks unauthorized access to your computer from the internet.',
  'encryption': 'Scrambling your data so only authorized people can read it.',
  'cache': 'Temporary files your device saves to load things faster next time.',
  'cookies': 'Small files websites save on your device to remember you — like staying logged in.',
  'URL': 'A web address — like google.com. It tells your browser where to go.',
  'router': 'The box that creates your Wi-Fi network and connects your devices to the internet.',
  'modem': 'The device that connects your home to your internet provider — often built into the router.',
  'bandwidth': 'How much data your internet connection can handle at once — more means faster.',
  'cloud storage': 'Saving your files online (like Google Drive or iCloud) instead of just on your device.',
  'Task Manager': 'A Windows tool that shows what\'s running and lets you close frozen programs.',
  'Recovery Mode': 'A special startup mode for fixing problems when your device won\'t start normally.',
  'Windows Hello': 'A Windows feature that lets you sign in with your face, fingerprint, or PIN.',
  'AirDrop': 'Apple\'s feature for wirelessly sharing files between nearby Apple devices.',
  'hotspot': 'Using your phone\'s data connection to give Wi-Fi to other devices.',
  'screenshot': 'A picture of what\'s currently on your screen.',
  'firmware': 'Built-in software on devices like routers — updating it fixes bugs and security holes.',
  'DNS': 'The internet\'s phone book — it translates website names into the addresses computers use.',
  'IP address': 'A number that identifies your device on a network — like a mailing address for data.',
};

/* ── Step Icon Mapping ─────────────────────────────────────── */

const ICON_RULES: Array<{ test: RegExp; icon: React.ElementType }> = [
  { test: /\b(settings?|preferences?|configure|system settings)\b/i, icon: Settings },
  { test: /\b(security|antivirus|protect|firewall|Windows Security)\b/i, icon: Shield },
  { test: /\b(wi-?fi|network|internet|connect|SSID|router)\b/i, icon: Wifi },
  { test: /\b(download|install|update|app store|play store|get the app)\b/i, icon: Download },
  { test: /\b(folder|file|document|explorer|finder|save)\b/i, icon: FolderOpen },
  { test: /\b(desktop|monitor|screen|display)\b/i, icon: Monitor },
  { test: /\b(phone|iphone|android|smartphone|mobile)\b/i, icon: Smartphone },
  { test: /\b(click|tap|select|right-click|double-click|button)\b/i, icon: MousePointer },
  { test: /\b(keyboard|shortcut|ctrl|cmd|alt|key|type|press)\b/i, icon: Keyboard },
  { test: /\b(password|pin|sign.?in|log.?in|account|credential)\b/i, icon: Lock },
  { test: /\b(privacy|hidden|incognito|private)\b/i, icon: Eye },
  { test: /\b(delete|remove|uninstall|trash|recycle)\b/i, icon: Trash2 },
  { test: /\b(restart|reboot|refresh)\b/i, icon: RefreshCw },
  { test: /\b(power|shut.?down|turn off|sleep|hibernate)\b/i, icon: Power },
  { test: /\b(search|find|spotlight|look for)\b/i, icon: Search },
  { test: /\b(email|mail|inbox|gmail|outlook|send)\b/i, icon: Mail },
  { test: /\b(browser|safari|chrome|edge|firefox|website|url)\b/i, icon: Globe },
  { test: /\b(screenshot|capture|snipping|photo|camera|picture)\b/i, icon: Camera },
  { test: /\b(volume|sound|audio|speaker|mute)\b/i, icon: Volume2 },
  { test: /\b(bluetooth|pair|headphone|airpod)\b/i, icon: Bluetooth },
  { test: /\b(storage|drive|disk|backup|space)\b/i, icon: HardDrive },
  { test: /\b(copy|paste|clipboard|cut)\b/i, icon: Copy },
  { test: /\b(print|printer)\b/i, icon: Printer },
  { test: /\b(share|send|airdrop|transfer)\b/i, icon: Users },
  { test: /\b(notification|alert|remind)\b/i, icon: Bell },
  { test: /\b(performance|speed|fast|slow|optimize)\b/i, icon: Zap },
];

export function getStepIcon(title: string, content: string): React.ElementType | null {
  const text = `${title} ${content}`;
  for (const rule of ICON_RULES) {
    if (rule.test.test(text)) return rule.icon;
  }
  return null;
}

/* ── Keyboard Shortcut Renderer ────────────────────────────── */

const KEY_ALIASES: Record<string, string> = {
  'Ctrl': 'Ctrl',
  'Control': 'Ctrl',
  'Alt': 'Alt',
  'Option': '⌥',
  'Shift': 'Shift',
  'Win': '⊞ Win',
  'Windows': '⊞ Win',
  'Cmd': '⌘',
  'Command': '⌘',
  'Cmd+Space': '⌘ Space',
  'Tab': 'Tab',
  'Enter': 'Enter ↵',
  'Return': 'Enter ↵',
  'Esc': 'Esc',
  'Escape': 'Esc',
  'Delete': 'Del',
  'Backspace': '⌫',
  'Space': 'Space',
  'PrtScn': 'PrtSc',
  'Print Screen': 'PrtSc',
};

function normalizeKey(key: string): string {
  return KEY_ALIASES[key] || key;
}

function KeyCap({ label }: { label: string }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-1.5 rounded-md border border-border bg-muted/80 text-xs font-semibold font-mono text-foreground shadow-[0_1px_0_1px_hsl(var(--border))] select-none">
      {label}
    </kbd>
  );
}

function KeyboardShortcut({ keys }: { keys: string[] }) {
  return (
    <span className="inline-flex items-center gap-0.5 mx-0.5">
      {keys.map((key, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-muted-foreground text-xs mx-0.5">+</span>}
          <KeyCap label={normalizeKey(key)} />
        </React.Fragment>
      ))}
    </span>
  );
}

/* ── Menu Path Renderer ────────────────────────────────────── */

function MenuPath({ segments }: { segments: string[] }) {
  return (
    <span className="inline-flex items-center gap-0.5 mx-0.5 flex-wrap">
      {segments.map((seg, i) => (
        <React.Fragment key={i}>
          {i > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground shrink-0" />}
          <span className="inline-flex items-center gap-1 bg-accent/60 text-accent-foreground px-2 py-0.5 rounded-md text-sm font-medium whitespace-nowrap">
            {i === 0 && <Settings className="h-3 w-3 opacity-60" />}
            {seg.trim()}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
}

/* ── Glossary Tooltip ──────────────────────────────────────── */

function GlossaryTerm({ term, definition }: { term: string; definition: string }) {
  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <span className="underline decoration-dotted decoration-primary/40 underline-offset-2 cursor-help text-foreground">
          {term}
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs text-sm leading-relaxed">
        <p><span className="font-semibold">{term}:</span> {definition}</p>
      </TooltipContent>
    </Tooltip>
  );
}

/* ── Main Content Renderer ─────────────────────────────────── */

// Regex patterns
const SHORTCUT_RE = /\b(Ctrl|Control|Alt|Option|Shift|Win|Windows|Cmd|Command)(\+\w+){1,3}\b/g;
const MENU_PATH_RE = /(?:(?:Click|Go to|Open|Navigate to|Tap)\s+)?(?:[A-Z][\w\s]*(?:\s*→\s*)){1,}[A-Z][\w\s.]*/g;
const CODE_RE = /`([^`]+)`/g;

interface ContentSegment {
  type: 'text' | 'shortcut' | 'menu' | 'code' | 'glossary';
  value: string;
  keys?: string[];
  segments?: string[];
  definition?: string;
}

function tokenize(text: string): ContentSegment[] {
  const tokens: ContentSegment[] = [];
  const remaining = text;

  // First pass: split by backtick code spans
  const codeParts = remaining.split(CODE_RE);
  const codeSegments: ContentSegment[] = [];
  for (let i = 0; i < codeParts.length; i++) {
    if (i % 2 === 1) {
      codeSegments.push({ type: 'code', value: codeParts[i] });
    } else if (codeParts[i]) {
      codeSegments.push({ type: 'text', value: codeParts[i] });
    }
  }

  // Second pass: process text segments for shortcuts, menus, glossary
  for (const seg of codeSegments) {
    if (seg.type !== 'text') {
      tokens.push(seg);
      continue;
    }

    const str = seg.value;
    const parts: ContentSegment[] = [];
    let lastIndex = 0;

    // Find keyboard shortcuts
    const shortcutMatches: Array<{ index: number; length: number; token: ContentSegment }> = [];
    SHORTCUT_RE.lastIndex = 0;
    let m;
    while ((m = SHORTCUT_RE.exec(str)) !== null) {
      const keys = m[0].split('+');
      shortcutMatches.push({
        index: m.index,
        length: m[0].length,
        token: { type: 'shortcut', value: m[0], keys },
      });
    }

    // Find menu paths (→ separated)
    const menuMatches: Array<{ index: number; length: number; token: ContentSegment }> = [];
    MENU_PATH_RE.lastIndex = 0;
    while ((m = MENU_PATH_RE.exec(str)) !== null) {
      const raw = m[0];
      // Must have at least one → to be a menu path
      if (!raw.includes('→')) continue;
      // Extract just the path portion (after action verb if present)
      const pathMatch = raw.match(/((?:[^→]+→\s*)+[^→,.']+)/);
      if (!pathMatch) continue;
      const pathStr = pathMatch[1].trim();
      const segs = pathStr.split('→').map(s => s.trim()).filter(Boolean);
      if (segs.length < 2) continue;

      menuMatches.push({
        index: m.index + (raw.indexOf(pathStr)),
        length: pathStr.length,
        token: { type: 'menu', value: pathStr, segments: segs },
      });
    }

    // Merge all matches, sorted by index, no overlaps
    const allMatches = [...shortcutMatches, ...menuMatches].sort((a, b) => a.index - b.index);
    const nonOverlapping: typeof allMatches = [];
    let maxEnd = 0;
    for (const match of allMatches) {
      if (match.index >= maxEnd) {
        nonOverlapping.push(match);
        maxEnd = match.index + match.length;
      }
    }

    // Build output
    lastIndex = 0;
    for (const match of nonOverlapping) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', value: str.slice(lastIndex, match.index) });
      }
      parts.push(match.token);
      lastIndex = match.index + match.length;
    }
    if (lastIndex < str.length) {
      parts.push({ type: 'text', value: str.slice(lastIndex) });
    }

    // Third pass: scan text parts for glossary terms
    for (const part of parts) {
      if (part.type !== 'text') {
        tokens.push(part);
        continue;
      }

      const partStr = part.value;
      const glossaryMatches: Array<{ index: number; length: number; term: string; definition: string }> = [];

      for (const [term, definition] of Object.entries(GLOSSARY)) {
        // Match whole word, case-insensitive, but only the first occurrence
        const re = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        const gm = re.exec(partStr);
        if (gm) {
          glossaryMatches.push({ index: gm.index, length: gm[0].length, term: gm[0], definition });
        }
      }

      if (glossaryMatches.length === 0) {
        tokens.push(part);
        continue;
      }

      // Sort by index, take non-overlapping
      glossaryMatches.sort((a, b) => a.index - b.index);
      let gi = 0;
      let gMaxEnd = 0;
      for (const gm of glossaryMatches) {
        if (gm.index >= gMaxEnd) {
          if (gm.index > gi) {
            tokens.push({ type: 'text', value: partStr.slice(gi, gm.index) });
          }
          tokens.push({ type: 'glossary', value: gm.term, definition: gm.definition });
          gi = gm.index + gm.length;
          gMaxEnd = gi;
        }
      }
      if (gi < partStr.length) {
        tokens.push({ type: 'text', value: partStr.slice(gi) });
      }
    }
  }

  return tokens;
}

export function StepContent({ text }: { text: string }) {
  const tokens = tokenize(text);

  return (
    <>
      {tokens.map((token, i) => {
        switch (token.type) {
          case 'shortcut':
            return <KeyboardShortcut key={i} keys={token.keys!} />;
          case 'menu':
            return <MenuPath key={i} segments={token.segments!} />;
          case 'code':
            return (
              <span key={i} className="inline-flex items-center gap-1 bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
                {token.value}
                <CopyButton text={token.value} />
              </span>
            );
          case 'glossary':
            return <GlossaryTerm key={i} term={token.value} definition={token.definition!} />;
          case 'text':
          default:
            return <span key={i}>{token.value}</span>;
        }
      })}
    </>
  );
}
