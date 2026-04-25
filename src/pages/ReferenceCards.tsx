import { useState, type ReactNode } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import {
  Printer,
  ArrowLeft,
  AlertTriangle,
  Smartphone,
  Video,
  Heart,
  KeyRound,
  Wifi,
  Globe,
  FileText,
  Bot,
} from 'lucide-react';

/* ───────────────────────────── Types & Data ────────────────────────────── */

type CardId =
  | 'scam-red-flags'
  | 'iphone-essentials'
  | 'android-essentials'
  | 'video-calls'
  | 'emergency-contacts'
  | 'password-rules'
  | 'wifi-troubleshooting'
  | 'safe-browsing';

interface CardMeta {
  id: CardId;
  title: string;
  tagline: string;
  Icon: typeof AlertTriangle;
  /** Very light warm bg that prints cleanly in B&W */
  bg: string;
  accent: string;
  /** 3–4 short lines for the grid thumbnail preview */
  preview: string[];
  slug: string; // URL segment
}

const CARDS: CardMeta[] = [
  {
    id: 'scam-red-flags',
    title: '10 Scam Red Flags',
    tagline: 'If you see even one — stop and verify.',
    Icon: AlertTriangle,
    bg: '#FFF4E6',
    accent: '#B45309',
    preview: [
      'Urgent threats ("act now!")',
      'Asks for gift cards or wire transfer',
      'Sender address looks "almost" right',
      "Too good to be true",
    ],
    slug: 'scam-red-flags',
  },
  {
    id: 'iphone-essentials',
    title: 'iPhone Essentials',
    tagline: 'The gestures, buttons, and shortcuts that matter.',
    Icon: Smartphone,
    bg: '#EFF6FF',
    accent: '#1D4ED8',
    preview: [
      'Swipe up from bottom = Home',
      'Hold side button = Siri',
      'Press volume + side 5× = SOS',
      'Swipe down from top-right = Control Center',
    ],
    slug: 'iphone-essentials',
  },
  {
    id: 'android-essentials',
    title: 'Android Essentials',
    tagline: 'The gestures, buttons, and shortcuts that matter.',
    Icon: Bot,
    bg: '#F0FDF4',
    accent: '#15803D',
    preview: [
      'Swipe up from bottom = Home',
      '"Hey Google" = voice assistant',
      'Power button 5× = Emergency SOS',
      'Swipe from top = Quick Settings',
    ],
    slug: 'android-essentials',
  },
  {
    id: 'video-calls',
    title: 'Video Call Cheat Sheet',
    tagline: 'Zoom, FaceTime & Google Meet — the 4 buttons you need.',
    Icon: Video,
    bg: '#FEFCE8',
    accent: '#A16207',
    preview: [
      'Microphone icon = mute/unmute',
      'Camera icon = video on/off',
      'Red phone = leave call',
      'Arrow-up box = share screen',
    ],
    slug: 'video-calls',
  },
  {
    id: 'emergency-contacts',
    title: 'Emergency Contacts & Info',
    tagline: 'Fill it in. Keep it by the phone.',
    Icon: Heart,
    bg: '#FEF2F2',
    accent: '#B91C1C',
    preview: [
      'Doctor • Pharmacy • Family',
      'Allergies • Medications',
      'Emergency contact',
      'Insurance info',
    ],
    slug: 'emergency-contacts',
  },
  {
    id: 'password-rules',
    title: 'Password Rules',
    tagline: 'Strong, unique, never shared.',
    Icon: KeyRound,
    bg: '#F5F3FF',
    accent: '#6D28D9',
    preview: [
      '12+ characters',
      'Never reuse across sites',
      'Use a password manager',
      'Never share by email or text',
    ],
    slug: 'password-rules',
  },
  {
    id: 'wifi-troubleshooting',
    title: 'WiFi Troubleshooting',
    tagline: 'When the internet stops working — try these, in order.',
    Icon: Wifi,
    bg: '#ECFEFF',
    accent: '#0E7490',
    preview: [
      'Unplug router 30 seconds',
      'Check cables are snug',
      'Move closer to the router',
      'Still down? Call the ISP.',
    ],
    slug: 'wifi-troubleshooting',
  },
  {
    id: 'safe-browsing',
    title: 'Safe Browsing',
    tagline: 'Look before you click. Type before you trust.',
    Icon: Globe,
    bg: '#FDF4FF',
    accent: '#A21CAF',
    preview: [
      'Look for the  and "https"',
      'Never click unknown links',
      'Type the site yourself',
      'Use TekSure Link Checker',
    ],
    slug: 'safe-browsing',
  },
];

/* ────────────────────────── Print Layout Frame ─────────────────────────── */

/**
 * A full US-Letter (8.5"×11") printable page frame.
 * Renders at real-world dimensions on screen (for preview) and prints
 * edge-to-edge with its own @page rule. Footer shows TekSure + online URL.
 */
function PrintFrame({
  card,
  children,
}: {
  card: CardMeta;
  children: ReactNode;
}) {
  const onlineUrl = `teksure.com/reference-cards/${card.slug}`;
  return (
    <div className="ref-card-outer">
      {/* Scoped CSS: sizes in inches/pt → true to print. */}
      <style>{`
        .ref-card-outer { display: flex; justify-content: center; padding: 24px 12px 48px; }
        .ref-card-page {
          width: 8.5in;
          min-height: 11in;
          padding: 0.6in 0.7in 0.5in;
          box-sizing: border-box;
          position: relative;
          color: #0f172a;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.25);
          border-radius: 4px;
          overflow: hidden;
        }
        .ref-card-page h1 { font-size: 34pt; line-height: 1.05; margin: 0 0 6pt; font-weight: 800; letter-spacing: -0.02em; }
        .ref-card-page .tagline { font-size: 16pt; margin: 0 0 18pt; font-weight: 500; opacity: 0.85; }
        .ref-card-page h2 { font-size: 18pt; margin: 14pt 0 6pt; font-weight: 700; }
        .ref-card-page p, .ref-card-page li, .ref-card-page td {
          font-size: 13.5pt;
          line-height: 1.45;
          font-weight: 500;
        }
        .ref-card-page ol, .ref-card-page ul { padding-left: 22pt; margin: 4pt 0 10pt; }
        .ref-card-page li { margin-bottom: 5pt; }
        .ref-card-page .num-list { list-style: none; padding-left: 0; }
        .ref-card-page .num-list li {
          display: grid;
          grid-template-columns: 30pt 1fr;
          align-items: baseline;
          column-gap: 10pt;
          padding: 4pt 0;
          border-top: 0.75pt solid rgba(15,23,42,0.14);
        }
        .ref-card-page .num-list li:first-child { border-top: 0; }
        .ref-card-page .num-list .num {
          font-size: 20pt;
          font-weight: 800;
          line-height: 1;
        }
        .ref-card-page .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14pt 22pt; }
        .ref-card-page .tile {
          background: rgba(255,255,255,0.55);
          border: 1pt solid rgba(15,23,42,0.18);
          border-radius: 8pt;
          padding: 10pt 12pt;
        }
        .ref-card-page .tile h3 { font-size: 15pt; margin: 0 0 4pt; font-weight: 800; }
        .ref-card-page .tile p { font-size: 12.5pt; margin: 0; }
        .ref-card-page .fill-row {
          display: grid;
          grid-template-columns: 150pt 1fr;
          align-items: end;
          column-gap: 10pt;
          padding: 8pt 0;
        }
        .ref-card-page .fill-line {
          border-bottom: 1pt solid rgba(15,23,42,0.45);
          min-height: 22pt;
        }
        .ref-card-page .fill-label { font-size: 13pt; font-weight: 700; }
        .ref-card-page .kbd {
          display: inline-block;
          border: 1pt solid rgba(15,23,42,0.35);
          border-radius: 4pt;
          padding: 1pt 6pt;
          font-size: 12pt;
          font-weight: 700;
          background: rgba(255,255,255,0.7);
        }
        .ref-card-page header.card-head {
          display: flex;
          align-items: center;
          gap: 12pt;
          margin-bottom: 10pt;
        }
        .ref-card-page header.card-head .chip {
          font-size: 10pt;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          padding: 4pt 10pt;
          border-radius: 999pt;
          border: 1pt solid currentColor;
        }
        .ref-card-page .rule { height: 2pt; background: currentColor; opacity: 0.85; margin: 0 0 14pt; border-radius: 2pt; }
        .ref-card-page .foot {
          position: absolute;
          left: 0.7in;
          right: 0.7in;
          bottom: 0.4in;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 10pt;
          color: rgba(15,23,42,0.7);
          border-top: 0.75pt solid rgba(15,23,42,0.25);
          padding-top: 6pt;
        }
        .ref-card-page .foot .brand { font-weight: 800; letter-spacing: 0.02em; color: #0f172a; }

        @page { size: letter; margin: 0; }
        @media print {
          html, body { background: #fff !important; }
          .no-print { display: none !important; }
          .ref-card-outer { padding: 0 !important; }
          .ref-card-page {
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            min-height: 100vh !important;
            page-break-after: always;
          }
        }
      `}</style>

      <div
        className="ref-card-page"
        style={{ backgroundColor: card.bg, color: card.accent }}
      >
        <header className="card-head">
          <card.Icon style={{ width: 36, height: 36 }} aria-hidden />
          <span className="chip">TekSure Reference Card</span>
        </header>

        <h1 style={{ color: '#0f172a' }}>{card.title}</h1>
        <p className="tagline" style={{ color: '#0f172a' }}>
          {card.tagline}
        </p>
        <div className="rule" />

        <div style={{ color: '#0f172a' }}>{children}</div>

        <div className="foot">
          <span className="brand">TekSure</span>
          <span>
            Online version: <strong>{onlineUrl}</strong>
          </span>
          <span>Print &amp; keep — no jargon.</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Card Content Renderers ──────────────────────── */

function ScamRedFlagsContent() {
  const flags: [string, string][] = [
    ['Urgency', '"Act now or your account will be closed." Real companies give you time.'],
    ['Threats', 'Police, IRS, or Social Security will never call and threaten arrest.'],
    ['Gift cards', 'No real business or agency asks to be paid in gift cards. Ever.'],
    ['Wire transfers', 'Once you wire money, it is gone. Treat wire requests as a red flag.'],
    ['Strange sender', 'Hover over the email address. "support@amaz0n-billing.com" is not Amazon.'],
    ['Unexpected links', "Don't click. Open a new tab and type the site name yourself."],
    ['Asks for passwords', 'Nobody legitimate will ever ask for your password.'],
    ['Too good to be true', "You didn't win a lottery you didn't enter. It's bait."],
    ['Poor grammar', 'Real companies proofread. Odd phrasing or typos are a warning.'],
    ['"Don\'t tell anyone"', 'Secrecy is a scam tell. Tell a trusted person before you act.'],
  ];
  return (
    <>
      <ol className="num-list">
        {flags.map(([title, desc], i) => (
          <li key={title}>
            <span className="num">{i + 1}</span>
            <span>
              <strong>{title}.</strong> {desc}
            </span>
          </li>
        ))}
      </ol>
      <h2>If in doubt — do this</h2>
      <p>
        <strong>Hang up. Close the email.</strong> Call the company or person back using a number
        you already trust (from the back of your card or your own contacts). Ask one other person
        before sending money or clicking a link.
      </p>
    </>
  );
}

function IPhoneEssentialsContent() {
  return (
    <>
      <h2>Buttons &amp; gestures</h2>
      <div className="grid-2">
        <div className="tile">
          <h3>Go home</h3>
          <p>Swipe up from the bottom edge of the screen.</p>
        </div>
        <div className="tile">
          <h3>Wake Siri</h3>
          <p>Hold the <span className="kbd">Side</span> button, or say "Hey Siri".</p>
        </div>
        <div className="tile">
          <h3>Emergency SOS</h3>
          <p>Press <span className="kbd">Side</span> + either <span className="kbd">Vol</span> button, hold, and slide "Emergency SOS".</p>
        </div>
        <div className="tile">
          <h3>Take a screenshot</h3>
          <p>Press <span className="kbd">Side</span> + <span className="kbd">Vol Up</span> at the same time.</p>
        </div>
        <div className="tile">
          <h3>Volume</h3>
          <p>Buttons on the left side. Up is louder, down is quieter.</p>
        </div>
        <div className="tile">
          <h3>Brightness</h3>
          <p>Swipe down from the top-right → drag the sun slider.</p>
        </div>
        <div className="tile">
          <h3>Flashlight</h3>
          <p>Swipe down from top-right → tap the flashlight icon.</p>
        </div>
        <div className="tile">
          <h3>Switch apps</h3>
          <p>Swipe up from bottom and pause halfway. Swipe left/right.</p>
        </div>
      </div>
      <h2>Useful Siri commands</h2>
      <ul>
        <li>"Call <em>[name]</em>."</li>
        <li>"Set a timer for 10 minutes."</li>
        <li>"Remind me to take pills at 8 pm."</li>
        <li>"What's the weather tomorrow?"</li>
      </ul>
    </>
  );
}

function AndroidEssentialsContent() {
  return (
    <>
      <h2>Buttons &amp; gestures</h2>
      <div className="grid-2">
        <div className="tile">
          <h3>Go home</h3>
          <p>Swipe up from the bottom edge (or tap the circle, older phones).</p>
        </div>
        <div className="tile">
          <h3>Voice assistant</h3>
          <p>Say "Hey Google" or hold the <span className="kbd">Home</span> button.</p>
        </div>
        <div className="tile">
          <h3>Emergency SOS</h3>
          <p>Press the <span className="kbd">Power</span> button 5 times quickly.</p>
        </div>
        <div className="tile">
          <h3>Take a screenshot</h3>
          <p>Press <span className="kbd">Power</span> + <span className="kbd">Vol Down</span> together.</p>
        </div>
        <div className="tile">
          <h3>Volume</h3>
          <p>Buttons on the side. Tap the gear icon for ringer vs. media.</p>
        </div>
        <div className="tile">
          <h3>Brightness</h3>
          <p>Swipe down from the top twice → drag the brightness slider.</p>
        </div>
        <div className="tile">
          <h3>Flashlight</h3>
          <p>Swipe down from top → tap the flashlight tile.</p>
        </div>
        <div className="tile">
          <h3>Switch apps</h3>
          <p>Swipe up from bottom and pause, or tap the square "recents" button.</p>
        </div>
      </div>
      <h2>Useful "Hey Google" commands</h2>
      <ul>
        <li>"Call <em>[name]</em>."</li>
        <li>"Set a timer for 10 minutes."</li>
        <li>"Remind me to take pills at 8 pm."</li>
        <li>"What's the weather tomorrow?"</li>
      </ul>
    </>
  );
}

function VideoCallContent() {
  const Block = ({
    title,
    join,
    mute,
    video,
    share,
    leave,
  }: {
    title: string;
    join: string;
    mute: string;
    video: string;
    share: string;
    leave: string;
  }) => (
    <div className="tile">
      <h3>{title}</h3>
      <p>
        <strong>Join:</strong> {join}
      </p>
      <p>
        <strong>Mute:</strong> {mute}
      </p>
      <p>
        <strong>Video on/off:</strong> {video}
      </p>
      <p>
        <strong>Share screen:</strong> {share}
      </p>
      <p>
        <strong>Leave:</strong> {leave}
      </p>
    </div>
  );
  return (
    <>
      <h2>The four buttons on every call</h2>
      <p>
        They sit at the bottom of the screen. Tap the mic to mute. Tap the camera to turn video on
        or off. Tap the arrow-up box to share what's on your screen. Tap the <strong>red phone</strong> to leave.
      </p>
      <h2>App by app</h2>
      <div className="grid-2">
        <Block
          title="Zoom"
          join={'Open the emailed link → "Join with Computer Audio."'}
          mute="Mic icon, bottom-left."
          video="Camera icon, next to mic."
          share={'Green "Share Screen" button, center.'}
          leave={'Red "Leave," bottom-right → "Leave Meeting."'}
        />
        <Block
          title="FaceTime (iPhone/iPad/Mac)"
          join={'Open link → "Join." In the app: tap contact → green camera.'}
          mute="Mic icon at the bottom."
          video="Camera icon at the bottom."
          share={'Tap screen → "Share" → "Share My Screen."'}
          leave="Red X at the bottom."
        />
        <Block
          title="Google Meet"
          join={'Open link → "Join now." Allow camera & mic when asked.'}
          mute="Mic icon, bottom-center."
          video="Camera icon, bottom-center."
          share={'Arrow-up box → "Your entire screen" or "A tab."'}
          leave="Red phone, bottom-center."
        />
        <Block
          title="If you can't hear"
          join="Check volume. Unplug & replug headphones."
          mute={"Make sure the mic icon isn't red (crossed out)."}
          video="Make sure the camera icon isn't red."
          share={'Click "Stop sharing" at the top if you\'re stuck.'}
          leave="Hang up and rejoin — works 9 times out of 10."
        />
      </div>
    </>
  );
}

function EmergencyContactsContent() {
  const Row = ({ label }: { label: string }) => (
    <div className="fill-row">
      <div className="fill-label">{label}</div>
      <div className="fill-line" />
    </div>
  );
  return (
    <>
      <h2>Fill this in by hand. Keep by the phone.</h2>
      <p style={{ marginTop: 0 }}>
        In an emergency, dial <strong>911</strong> first. Everything else below is for after.
      </p>

      <h2 style={{ marginTop: '8pt' }}>People</h2>
      <Row label="Primary emergency contact" />
      <Row label="Their phone" />
      <Row label="Second contact (family)" />
      <Row label="Their phone" />
      <Row label="Neighbor / friend nearby" />
      <Row label="Their phone" />

      <h2>Medical</h2>
      <Row label="Primary doctor" />
      <Row label="Doctor's phone" />
      <Row label="Pharmacy" />
      <Row label="Pharmacy phone" />
      <Row label="Health insurance" />
      <Row label="Member ID" />

      <h2>Health info (if EMTs need it)</h2>
      <Row label="Allergies" />
      <Row label="Medications" />
      <Row label="Medical conditions" />
      <Row label="Blood type (if known)" />
    </>
  );
}

function PasswordRulesContent() {
  return (
    <>
      <h2>What makes a good password</h2>
      <div className="grid-2">
        <div className="tile">
          <h3>At least 12 characters</h3>
          <p>Longer is stronger. A short phrase works great: "BlueCoffee!Mornings42".</p>
        </div>
        <div className="tile">
          <h3>Unique per site</h3>
          <p>Never reuse a password. If one site is hacked, the rest stay safe.</p>
        </div>
        <div className="tile">
          <h3>Mix it up</h3>
          <p>Use upper, lower, a number, and a symbol. Avoid names and birthdays.</p>
        </div>
        <div className="tile">
          <h3>Use a password manager</h3>
          <p>Bitwarden, 1Password, or Apple Keychain. It remembers them for you.</p>
        </div>
      </div>

      <h2>Never, ever</h2>
      <ul>
        <li>
          <strong>Never share your password</strong> by phone, email, or text — not even with "support".
        </li>
        <li>
          <strong>Never write passwords on a sticky note</strong> on your monitor. Use a password manager or a locked notebook at home.
        </li>
        <li>
          <strong>Never use the same password</strong> for email and banking. Your email resets everything — keep it unique.
        </li>
        <li>
          <strong>Turn on two-factor</strong> (a code by text or app) for email and banking. It's the single biggest safety boost.
        </li>
      </ul>
    </>
  );
}

function WifiTroubleshootingContent() {
  const steps: [string, string][] = [
    ['Check your other devices', 'Is just one device offline, or all of them? One = the device. All = the WiFi.'],
    ['Restart the device', 'Turn off your phone or computer fully, wait 10 seconds, turn it back on.'],
    ['Unplug the router 30 seconds', 'Pull the power from the box with blinking lights. Count to 30. Plug it back in. Wait 2 full minutes.'],
    ['Check the cables', 'Make sure all cables are fully seated. Look for a loose coax or ethernet.'],
    ['Move closer to the router', 'Walls and floors weaken the signal. Try the same room as the router.'],
    ['Forget and rejoin the WiFi', 'On your phone: Settings → WiFi → tap your network → "Forget." Rejoin with the password.'],
    ['Check for an outage', 'From cellular data, search: "[your ISP] outage near me." If it\'s them, just wait.'],
    ['Call the ISP', 'Have your account number ready. Tell them: "I\'ve restarted the router and still have no internet."'],
  ];
  return (
    <>
      <h2>Try these — in order</h2>
      <ol className="num-list">
        {steps.map(([title, desc], i) => (
          <li key={title}>
            <span className="num">{i + 1}</span>
            <span>
              <strong>{title}.</strong> {desc}
            </span>
          </li>
        ))}
      </ol>
      <h2>Good to know</h2>
      <p>
        The "router" is the box with blinking lights. The "modem" is the box the cable plugs into
        from the wall. They're often the same box these days. A full restart means{' '}
        <strong>unplug both, 30 seconds, plug modem first, wait 2 minutes, then router</strong>.
      </p>
    </>
  );
}

function SafeBrowsingContent() {
  return (
    <>
      <h2>Before you click anything</h2>
      <div className="grid-2">
        <div className="tile">
          <h3>Look for the lock</h3>
          <p>The address bar should show a  and start with <strong>https://</strong>. No lock = don't enter info.</p>
        </div>
        <div className="tile">
          <h3>Check the address</h3>
          <p>"amaz0n.com" or "paypa1.com" are fakes. One wrong letter = a scam.</p>
        </div>
        <div className="tile">
          <h3>Don't click unknown links</h3>
          <p>Email, text, DM — if you weren't expecting it, don't click. Type the site yourself.</p>
        </div>
        <div className="tile">
          <h3>Use the TekSure Link Checker</h3>
          <p>Paste any suspicious link at <strong>teksure.com/tools/link-checker</strong> before you click.</p>
        </div>
      </div>

      <h2>Card &amp; password rules</h2>
      <ul>
        <li>
          <strong>Don't enter card info unless you started the purchase.</strong> Pop-ups asking for a
          card are almost always a scam.
        </li>
        <li>
          <strong>Never enter your password</strong> after clicking an email link. Open a new tab and
          type the site yourself.
        </li>
        <li>
          <strong>If a site asks you to install something to continue</strong> (a "plugin," a "codec,"
          or a video player) — close the tab. That's how viruses get in.
        </li>
        <li>
          <strong>Back button is your friend.</strong> If something feels off, back out. You don't owe
          any website your attention.
        </li>
      </ul>
    </>
  );
}

/* ─────────────────────────── Thumbnail Preview ─────────────────────────── */

function CardThumb({
  card,
  onOpen,
}: {
  card: CardMeta;
  onOpen: () => void;
}) {
  const { Icon } = card;
  return (
    <div
      className="group relative rounded-2xl border overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col"
      style={{ backgroundColor: card.bg, borderColor: `${card.accent}33` }}
    >
      {/* Simulated "page" preview */}
      <div className="p-5 flex-1">
        <div
          className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-bold"
          style={{ color: card.accent }}
        >
          <Icon className="h-4 w-4" />
          Reference Card
        </div>
        <h3 className="text-lg font-extrabold leading-tight mb-1 text-slate-900">
          {card.title}
        </h3>
        <p className="text-sm text-slate-700 mb-4">{card.tagline}</p>
        <ul className="space-y-1.5">
          {card.preview.map((line, i) => (
            <li key={i} className="flex gap-2 text-xs text-slate-700">
              <span
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: card.accent }}
              />
              {line}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-2 p-3 border-t bg-white/60 backdrop-blur-sm">
        <span className="text-xs text-slate-600">8.5 × 11 • Prints clean in B&amp;W</span>
        <Button
          size="sm"
          onClick={onOpen}
          className="gap-1.5"
          style={{ backgroundColor: card.accent, color: 'white' }}
        >
          <Printer className="h-3.5 w-3.5" />
          Print this card
        </Button>
      </div>
    </div>
  );
}

/* ────────────────────────────── The Page ───────────────────────────────── */

export default function ReferenceCards() {
  const [selectedId, setSelectedId] = useState<CardId | null>(null);
  const selected = selectedId ? CARDS.find((c) => c.id === selectedId) ?? null : null;

  const handlePrint = () => window.print();

  const renderContent = (id: CardId) => {
    switch (id) {
      case 'scam-red-flags':
        return <ScamRedFlagsContent />;
      case 'iphone-essentials':
        return <IPhoneEssentialsContent />;
      case 'android-essentials':
        return <AndroidEssentialsContent />;
      case 'video-calls':
        return <VideoCallContent />;
      case 'emergency-contacts':
        return <EmergencyContactsContent />;
      case 'password-rules':
        return <PasswordRulesContent />;
      case 'wifi-troubleshooting':
        return <WifiTroubleshootingContent />;
      case 'safe-browsing':
        return <SafeBrowsingContent />;
    }
  };

  return (
    <>
      <SEOHead
        title="Print & Keep — Quick Reference Cards | TekSure"
        description="Free, beautifully laid out one-page tech reference cards. Pin to the fridge, keep by the computer, give to a family member. No jargon."
        path="/reference-cards"
      />

      {/* Nav hidden when printing */}
      <div className="print:hidden">
      </div>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb (non-print) */}
        <div className="container max-w-6xl pt-4 px-4 print:hidden">
          <PageBreadcrumb segments={[{ label: 'Reference Cards' }]} />
        </div>

        {selected ? (
          <>
            {/* Toolbar — hidden on print */}
            <div className="print:hidden sticky top-0 z-10 bg-background/90 backdrop-blur border-b">
              <div className="container max-w-5xl flex items-center justify-between py-3 px-4">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedId(null)}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All cards
                </Button>
                <div className="text-sm text-muted-foreground hidden md:block">
                  Preview at real size — looks exactly like the printed page.
                </div>
                <Button onClick={handlePrint} className="gap-2">
                  <Printer className="h-4 w-4" />
                  Print this page
                </Button>
              </div>
            </div>

            {/* The printable page */}
            <PrintFrame card={selected}>{renderContent(selected.id)}</PrintFrame>

            <p className="print:hidden text-center text-sm text-muted-foreground pb-8">
              Tip: in the print dialog, choose <strong>Letter</strong>, margins{' '}
              <strong>None</strong>, and enable <strong>Background graphics</strong> to keep the
              color tint. Or uncheck it for a pure black-and-white copy.
            </p>
          </>
        ) : (
          <>
            {/* Hero */}
            <section className="border-b py-14 print:hidden">
              <div className="container max-w-3xl text-center px-4">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                  Print &amp; Keep — Quick Reference Cards
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
                  One page. No jargon. Keep it handy.
                </p>
                <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
                  Pin one to the fridge. Keep one by the computer. Print an extra for your mom.
                </p>
              </div>
            </section>

            {/* Grid */}
            <section className="container max-w-6xl py-12 px-4 print:hidden">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CARDS.map((card) => (
                  <CardThumb
                    key={card.id}
                    card={card}
                    onOpen={() => setSelectedId(card.id)}
                  />
                ))}
              </div>

              <div className="mt-12 rounded-2xl border bg-muted/40 p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-2">Why these exist</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Most tech help lives on a screen — right where you need it least. These cards are
                  designed to live on paper: large, readable type, warm backgrounds that still print
                  cleanly in black and white, and a URL at the bottom so anyone holding the page can
                  find the online version. Free forever. Share freely.
                </p>
              </div>
            </section>
          </>
        )}
      </main>

      <div className="print:hidden">
      </div>
    </>
  );
}
