import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  KeyRound,
  Lock,
  Shield,
  Copy,
  Eye,
  EyeOff,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

/* ──────────────────────────────────────────────────────────────────────────
 * Word list for the passphrase generator. ~200 common, everyday words —
 * no offensive or sensitive entries. Entropy: log2(200) ≈ 7.6 bits per word,
 * so a 4-word phrase ≈ 30 bits and a 5-word phrase ≈ 38 bits from this list.
 * For practice purposes, that is plenty — real managers use 7,000+ word lists.
 * ────────────────────────────────────────────────────────────────────────── */
const PHRASE_WORDS: string[] = [
  'anchor','apple','amber','arrow','autumn','beacon','beagle','biscuit','blanket','bramble',
  'breeze','bridge','bubble','bucket','cabin','cactus','candle','canvas','carrot','castle',
  'cedar','cherry','chowder','cinnamon','cloud','clover','comet','copper','cotton','coyote',
  'crayon','crystal','dandelion','desert','diamond','dolphin','dragon','dune','eagle','ember',
  'emerald','engine','evening','falcon','feather','festival','fiddle','firefly','flannel','forest',
  'fortune','foxglove','frost','garden','gazebo','ginger','glacier','glimmer','globe','gopher',
  'granite','grapefruit','hammock','harbor','harvest','hazel','helmet','heron','hickory','hollow',
  'honey','horizon','iceberg','igloo','indigo','island','ivory','jasmine','jester','journey',
  'juniper','kayak','kernel','kitten','lagoon','lantern','laurel','lavender','lemon','leopard',
  'library','lighthouse','lilac','lily','lobster','lotus','magnet','magnolia','maple','marble',
  'marigold','meadow','melon','mermaid','meteor','mitten','mocha','molasses','monarch','morning',
  'mountain','muffin','nectar','nickel','nutmeg','oatmeal','ocean','olive','onion','orchard',
  'orchid','otter','oyster','paisley','pantry','papaya','parade','parakeet','parcel','parlor',
  'peach','pebble','pelican','penguin','peppermint','piano','picnic','pinecone','pistachio','plateau',
  'pocket','polar','pomegranate','popcorn','porcelain','prairie','pumpkin','purple','quarry','quartz',
  'rabbit','radish','raindrop','rainbow','raspberry','reindeer','ribbon','rocket','rooster','rosemary',
  'saffron','sandal','sapphire','satin','scarlet','sparrow','spinach','spruce','squirrel','starfish',
  'sterling','stream','stumble','sunflower','sunset','sycamore','tangerine','thunder','tiger','toffee',
  'topaz','tortoise','tulip','tumbler','turnip','turquoise','twilight','umbrella','valley','vanilla',
  'velvet','village','violet','walnut','wander','waterfall','whistle','whisper','willow','wisdom',
  'yellow','yogurt','zephyr','zigzag','zucchini',
];

/* 100 of the most reused, most-cracked passwords — shown so users can see
 * how obvious these look, and check their own choices against the list. */
const COMMON_BAD: string[] = [
  '123456','password','123456789','12345678','12345','qwerty','abc123','111111','1234567','password1',
  'iloveyou','admin','welcome','monkey','login','starwars','dragon','master','qwerty123','letmein',
  'sunshine','princess','football','baseball','superman','trustno1','shadow','michael','jennifer','jordan',
  'hunter','buster','thomas','george','harley','ranger','tigger','robert','soccer','batman',
  'test','pass','killer','charlie','andrew','michelle','love','jessica','asshole','6969',
  'pepper','daniel','access','joshua','maggie','starwars1','silver','richard','orange','merlin',
  'rosebud','muffin','cookie','chocolate','password123','qwertyuiop','google','mustang','changeme','secret',
  'summer','winter','spring','autumn','qazwsx','zaq12wsx','asdfgh','zxcvbn','qwer1234','1q2w3e4r',
  'admin123','root','guest','demo','welcome1','pa55word','p@ssw0rd','letmein1','iloveyou1','football1',
  'baseball1','nothing','whatever','computer','internet','facebook','myspace','freedom','yankees','america',
];

/* ──────────────────────────────────────────────────────────────────────────
 * Strength estimator — deterministic and offline. Scores 0–100 based on
 * length, character diversity, and penalties for common patterns. We convert
 * that score into one of five bars and a plain-English label.
 * ────────────────────────────────────────────────────────────────────────── */
function estimateStrength(pw: string): { score: number; label: string; bars: number; color: string } {
  if (!pw) return { score: 0, label: 'Type a password to see its strength', bars: 0, color: 'bg-slate-300' };

  let score = 0;
  const length = pw.length;

  // Length scoring
  if (length >= 8) score += 15;
  if (length >= 12) score += 15;
  if (length >= 16) score += 15;
  if (length >= 20) score += 10;

  // Variety
  if (/[a-z]/.test(pw)) score += 8;
  if (/[A-Z]/.test(pw)) score += 8;
  if (/[0-9]/.test(pw)) score += 8;
  if (/[^a-zA-Z0-9]/.test(pw)) score += 12;

  // Passphrase bonus — separators indicate a phrase
  if (/[-_ .]/.test(pw) && length >= 14) score += 8;

  // Penalties
  const lower = pw.toLowerCase();
  if (COMMON_BAD.includes(lower)) score = Math.min(score, 15);
  if (/^(.)\1+$/.test(pw)) score = Math.min(score, 10); // all same character
  if (/^(012|123|234|345|456|567|678|789|890|qwe|asd|zxc)/i.test(pw)) score -= 15;
  if (/(password|admin|welcome|letmein|qwerty|iloveyou)/i.test(pw)) score -= 20;

  score = Math.max(0, Math.min(100, score));

  let label = 'Very weak', bars = 1, color = 'bg-red-500';
  if (score >= 85) { label = 'Excellent'; bars = 5; color = 'bg-emerald-600'; }
  else if (score >= 70) { label = 'Strong'; bars = 4; color = 'bg-emerald-500'; }
  else if (score >= 50) { label = 'Good — could be better'; bars = 3; color = 'bg-amber-500'; }
  else if (score >= 30) { label = 'Weak'; bars = 2; color = 'bg-orange-500'; }

  return { score, label, bars, color };
}

/* Estimates how long offline cracking would take. Uses a rough guess of
 * the character space based on what kinds of characters are present. */
function estimateCrackTime(pw: string): string {
  if (!pw) return '—';
  let charset = 0;
  if (/[a-z]/.test(pw)) charset += 26;
  if (/[A-Z]/.test(pw)) charset += 26;
  if (/[0-9]/.test(pw)) charset += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) charset += 32;
  if (charset === 0) return '—';

  // Reuse / common-pattern shortcut
  if (COMMON_BAD.includes(pw.toLowerCase())) return 'Instantly (known bad password)';

  const combos = Math.pow(charset, pw.length);
  // Assume 100 billion guesses per second (modern GPU farm)
  const seconds = combos / 1e11;

  if (seconds < 1) return 'Less than a second';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000 * 1000) return `${Math.round(seconds / 31536000)} years`;
  if (seconds < 31536000 * 1e6) return `${Math.round(seconds / 31536000 / 1000)} thousand years`;
  if (seconds < 31536000 * 1e9) return `${Math.round(seconds / 31536000 / 1e6)} million years`;
  return 'Longer than the age of the universe';
}

/* ──────────────────────────────────────────────────────────────────────────
 * Secure random helpers. All generated values stay in memory only.
 * ────────────────────────────────────────────────────────────────────────── */
function randomIndex(max: number): number {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return arr[0] % max;
}

function generateSamplePassword(): string {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghjkmnpqrstuvwxyz';
  const digits = '23456789';
  const symbols = '!@#$%&*?';
  const all = upper + lower + digits + symbols;
  const length = 12 + randomIndex(3); // 12–14 chars
  let out = '';
  // Guarantee at least one of each
  out += upper[randomIndex(upper.length)];
  out += lower[randomIndex(lower.length)];
  out += digits[randomIndex(digits.length)];
  out += symbols[randomIndex(symbols.length)];
  for (let i = out.length; i < length; i++) out += all[randomIndex(all.length)];
  // Shuffle
  return out
    .split('')
    .map((c) => ({ c, k: randomIndex(1_000_000) }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.c)
    .join('');
}

function generatePassphrase(wordCount: number): string {
  const words: string[] = [];
  for (let i = 0; i < wordCount; i++) {
    const w = PHRASE_WORDS[randomIndex(PHRASE_WORDS.length)];
    words.push(w[0].toUpperCase() + w.slice(1));
  }
  const tail = randomIndex(100);
  const symbols = '!@#$%&*?';
  return words.join('-') + '-' + tail + symbols[randomIndex(symbols.length)];
}

/* ──────────────────────────────────────────────────────────────────────────
 * Streak tracking — the only thing we persist. We store a small JSON object
 * with session count, last date, and best typing accuracy. No passwords.
 * ────────────────────────────────────────────────────────────────────────── */
const STREAK_KEY = 'teksure-password-practice-streak-v1';
type Streak = { sessions: number; bestAccuracy: number; lastISO: string };

function loadStreak(): Streak {
  if (typeof window === 'undefined') return { sessions: 0, bestAccuracy: 0, lastISO: '' };
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { sessions: 0, bestAccuracy: 0, lastISO: '' };
    return JSON.parse(raw) as Streak;
  } catch {
    return { sessions: 0, bestAccuracy: 0, lastISO: '' };
  }
}

function saveStreak(s: Streak) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(s)); } catch { /* ignore quota errors */ }
}

/* ──────────────────────────────────────────────────────────────────────────
 * Main component
 * ────────────────────────────────────────────────────────────────────────── */
export default function PasswordPractice() {
  /* ── Build drill state ─── */
  const [basePhrase, setBasePhrase] = useState('');
  const [builderShow, setBuilderShow] = useState(true);
  const [siteName, setSiteName] = useState('');
  const strength = useMemo(() => estimateStrength(basePhrase), [basePhrase]);
  const crackTime = useMemo(() => estimateCrackTime(basePhrase), [basePhrase]);

  // Shortened version: take first letter of each word and keep digits/symbols intact.
  const shortened = useMemo(() => {
    if (!basePhrase.trim()) return '';
    const parts = basePhrase.trim().split(/\s+/);
    return parts
      .map((p) => {
        const letter = (p.match(/[a-zA-Z]/)?.[0] ?? p[0]).toUpperCase();
        const nums = p.match(/\d+/g)?.join('') ?? '';
        const sym = p.match(/[^a-zA-Z0-9]/g)?.join('') ?? '';
        return letter + nums + sym;
      })
      .join('');
  }, [basePhrase]);

  const perSiteTweak = useMemo(() => {
    if (!shortened || !siteName.trim()) return '';
    const tag = siteName.trim().slice(0, 3).toLowerCase();
    return `${shortened}-${tag[0]?.toUpperCase() ?? ''}${tag.slice(1) ?? ''}`;
  }, [shortened, siteName]);

  /* ── Type drill state ─── */
  const [sample, setSample] = useState<string>(() => generateSamplePassword());
  const [sampleVisible, setSampleVisible] = useState(true);
  const [attemptInput, setAttemptInput] = useState('');
  const [attempts, setAttempts] = useState<{ ok: boolean; accuracy: number; seconds: number }[]>([]);
  const startRef = useRef<number>(0);
  const attemptInputRef = useRef<HTMLInputElement | null>(null);

  const beginAttempt = useCallback(() => {
    setAttemptInput('');
    startRef.current = Date.now();
    setTimeout(() => attemptInputRef.current?.focus(), 40);
  }, []);

  const submitAttempt = useCallback(() => {
    if (!attemptInput) return;
    const seconds = Math.max(0.5, (Date.now() - startRef.current) / 1000);
    let matches = 0;
    const len = Math.max(attemptInput.length, sample.length);
    for (let i = 0; i < Math.min(attemptInput.length, sample.length); i++) {
      if (attemptInput[i] === sample[i]) matches++;
    }
    const accuracy = Math.round((matches / len) * 100);
    const ok = attemptInput === sample;
    setAttempts((prev) => [...prev, { ok, accuracy, seconds }]);
    if (ok) {
      const s = loadStreak();
      const today = new Date().toISOString().slice(0, 10);
      const updated: Streak = {
        sessions: s.sessions + 1,
        bestAccuracy: Math.max(s.bestAccuracy, accuracy),
        lastISO: today,
      };
      saveStreak(updated);
      setStreak(updated);
    }
    setAttemptInput('');
    startRef.current = Date.now();
  }, [attemptInput, sample]);

  const resetTypeDrill = () => {
    setSample(generateSamplePassword());
    setAttempts([]);
    setAttemptInput('');
    startRef.current = 0;
  };

  /* ── Passphrase generator ─── */
  const [phrase, setPhrase] = useState<string>('');
  const [phraseWords, setPhraseWords] = useState<4 | 5>(4);
  const rollPhrase = () => setPhrase(generatePassphrase(phraseWords));

  /* ── Reuse check ─── */
  const [reuseCheck, setReuseCheck] = useState('');
  const reuseMatch = useMemo(
    () => (reuseCheck ? COMMON_BAD.includes(reuseCheck.toLowerCase()) : null),
    [reuseCheck],
  );

  /* ── Streak ─── */
  const [streak, setStreak] = useState<Streak>({ sessions: 0, bestAccuracy: 0, lastISO: '' });
  useEffect(() => { setStreak(loadStreak()); }, []);

  /* ── Copy ─── */
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (text: string, tag: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(tag);
      setTimeout(() => setCopied(null), 1800);
    } catch { /* ignore */ }
  };

  /* ── Render helpers ─── */
  const StrengthBars = ({ filled, color }: { filled: number; color: string }) => (
    <div className="flex gap-1.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className={`h-2.5 flex-1 rounded-full ${n <= filled ? color : 'bg-slate-200 dark:bg-slate-800'}`}
        />
      ))}
    </div>
  );

  return (
    <>
      <SEOHead
        title="Password Practice — Build, Type, Remember"
        description="An interactive drill for making strong passwords, typing them from memory, and learning password manager basics. Your real passwords never go here."
        path="/practice/password-practice"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: 'Password Practice' },
            ]}
          />
        </div>

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="relative border-b border-border overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950"
            aria-hidden="true"
          />
          <div className="container relative py-12 md:py-16 text-white">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="password-practice"
                title="Password Practice"
                url="/practice/password-practice"
              />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <KeyRound className="h-7 w-7" aria-hidden="true" />
              </div>
              <Badge variant="secondary" className="bg-white/15 text-white border-0 text-base">
                Safety · Practice Sandbox
              </Badge>
              <Badge className="bg-emerald-500 text-white border-0 text-base">New</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Password Practice</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Practice making and remembering strong passwords — in a safe sandbox. Your real passwords never go here.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-4xl space-y-8">
          {/* ── PRIVACY CALLOUT ───────────────────────────── */}
          <Alert className="border-emerald-500/60 bg-emerald-50 dark:bg-emerald-950/30">
            <Shield className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100 text-lg font-semibold">
              Nothing here is saved. Nothing is sent anywhere.
            </AlertTitle>
            <AlertDescription className="text-emerald-900/90 dark:text-emerald-100/90 text-base mt-1">
              This is practice only. <strong>Never type your real passwords here.</strong> Everything runs in your
              browser. Only your practice streak is kept on this device — no password text is ever stored.
            </AlertDescription>
          </Alert>

          {/* ── STREAK PILL ───────────────────────────────── */}
          {streak.sessions > 0 && (
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                <CheckCircle2 className="h-4 w-4 mr-1.5 text-emerald-600" aria-hidden="true" />
                {streak.sessions} practice {streak.sessions === 1 ? 'session' : 'sessions'} completed
              </Badge>
              <Badge variant="secondary" className="text-base min-h-[2rem] px-3 py-1">
                Best typing accuracy: {streak.bestAccuracy}%
              </Badge>
            </div>
          )}

          {/* ── THE 4 DRILLS ──────────────────────────────── */}
          <Tabs defaultValue="build" className="space-y-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto w-full gap-1 p-1">
              <TabsTrigger value="build" className="min-h-14 text-base">1. Build</TabsTrigger>
              <TabsTrigger value="type" className="min-h-14 text-base">2. Type Drill</TabsTrigger>
              <TabsTrigger value="manager" className="min-h-14 text-base">3. Managers</TabsTrigger>
              <TabsTrigger value="redteam" className="min-h-14 text-base">4. Red Team</TabsTrigger>
            </TabsList>

            {/* ── DRILL 1: BUILD A STRONG ONE ──────────────── */}
            <TabsContent value="build" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Step 1. Pick a memorable base phrase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-muted-foreground">
                    Think of a short sentence <em>only you</em> would say — a line from a song, a story about your
                    dog, a favorite meal from a trip. Example: <code className="rounded bg-muted px-1.5 py-0.5">My beagle Sam ate 3 tacos in 2019!</code>
                  </p>
                  <div className="flex items-center gap-2">
                    <Input
                      value={basePhrase}
                      onChange={(e) => setBasePhrase(e.target.value)}
                      placeholder="Type a made-up practice sentence (not real)"
                      className="min-h-14 text-lg"
                      type={builderShow ? 'text' : 'password'}
                      aria-label="Practice base phrase"
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setBuilderShow((v) => !v)}
                      className="min-h-14"
                      aria-label={builderShow ? 'Hide phrase' : 'Show phrase'}
                    >
                      {builderShow ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </Button>
                  </div>

                  {/* Strength meter */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-base">
                      <span className="font-medium">Strength</span>
                      <span className="font-semibold">{strength.label}</span>
                    </div>
                    <StrengthBars filled={strength.bars} color={strength.color} />
                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      <div className="rounded-xl border bg-muted/30 p-3">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Length</div>
                        <div className="text-lg font-semibold">{basePhrase.length} characters</div>
                      </div>
                      <div className="rounded-xl border bg-muted/30 p-3">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">
                          Time to crack (offline GPU guess)
                        </div>
                        <div className="text-lg font-semibold">{crackTime}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Step 2. Shorten to a code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base text-muted-foreground">
                    Take the first letter of every word. Keep any numbers and symbols as-is. Add something personal
                    that only you know — a number of steps your dog takes, the year you got married, a favorite
                    emoji-like symbol.
                  </p>
                  <div className="rounded-xl border-2 border-dashed p-4 min-h-20 flex items-center bg-muted/20">
                    <code className="text-xl font-mono break-all">
                      {shortened || <span className="text-muted-foreground text-base">Your short code will appear here</span>}
                    </code>
                  </div>
                  {shortened && (
                    <Button variant="outline" size="sm" onClick={() => copy(shortened, 'shortened')} className="min-h-12">
                      <Copy className="h-4 w-4 mr-2" />
                      {copied === 'shortened' ? 'Copied!' : 'Copy (practice only)'}
                    </Button>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Step 3. Make a per-site variation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base text-muted-foreground">
                    Never reuse the same password on two sites. A small tweak per site — the first three letters of
                    the site name — means one leak won't expose every account. A password manager does this
                    automatically with random values; this is the manual fallback.
                  </p>
                  <Input
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    placeholder="Which site? (e.g. bank, email, shopping)"
                    className="min-h-14 text-lg"
                    aria-label="Site name for variation"
                    autoComplete="off"
                  />
                  <div className="rounded-xl border-2 border-dashed p-4 min-h-20 flex items-center bg-muted/20">
                    <code className="text-xl font-mono break-all">
                      {perSiteTweak || <span className="text-muted-foreground text-base">Per-site variation will appear here</span>}
                    </code>
                  </div>
                </CardContent>
              </Card>

              {/* Flags */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-red-200 dark:border-red-900/40">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 dark:text-red-300">Red flags</CardTitle>
                  </CardHeader>
                  <CardContent className="text-base text-muted-foreground space-y-2">
                    <div>• Under 12 characters total</div>
                    <div>• Uses a dictionary word with no changes</div>
                    <div>• Includes your name, birthday, or pet's name alone</div>
                    <div>• Has been used somewhere else already</div>
                    <div>• Is on any "top 100 common passwords" list</div>
                  </CardContent>
                </Card>
                <Card className="border-emerald-200 dark:border-emerald-900/40">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-700 dark:text-emerald-300">Green flags</CardTitle>
                  </CardHeader>
                  <CardContent className="text-base text-muted-foreground space-y-2">
                    <div>• 16 or more characters</div>
                    <div>• Mix of UPPER and lower letters, numbers, symbols</div>
                    <div>• A passphrase of 4+ unrelated words</div>
                    <div>• A small per-site tweak so it's unique</div>
                    <div>• Stored in a manager, not sticky-noted to a monitor</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* ── DRILL 2: TYPE DRILL ──────────────────────── */}
            <TabsContent value="type" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Type drill — build muscle memory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-muted-foreground">
                    Here's a freshly-generated practice password. Type it 3 times to train your fingers. This
                    password is thrown away when you leave — it's not for any real account.
                  </p>

                  <div className="rounded-xl bg-slate-900 text-white p-5 flex items-center gap-3">
                    <Lock className="h-6 w-6 text-emerald-400 shrink-0" aria-hidden="true" />
                    <code className="flex-1 text-2xl font-mono break-all tracking-wide">
                      {sampleVisible ? sample : '•'.repeat(sample.length)}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSampleVisible((v) => !v)}
                      aria-label={sampleVisible ? 'Hide sample' : 'Show sample'}
                      className="min-h-12 min-w-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      {sampleVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetTypeDrill}
                      className="min-h-12 bg-white/10 border-white/20 text-white hover:bg-white/20"
                      aria-label="New sample password"
                    >
                      <RefreshCw className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Attempts */}
                  <div className="space-y-3">
                    {[0, 1, 2].map((i) => {
                      const a = attempts[i];
                      const active = attempts.length === i;
                      const done = !!a;
                      return (
                        <div
                          key={i}
                          className={`rounded-xl border p-4 ${
                            done ? (a.ok ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/20' : 'border-amber-400 bg-amber-50 dark:bg-amber-950/20') : active ? 'border-primary' : 'opacity-60'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-base font-semibold">Attempt {i + 1}</div>
                            {done && (
                              <div className="text-sm font-medium">
                                {a.ok ? '✓ Match' : `${a.accuracy}% match`} · {a.seconds.toFixed(1)}s
                              </div>
                            )}
                          </div>
                          {active ? (
                            <form
                              onSubmit={(e) => { e.preventDefault(); submitAttempt(); }}
                              className="flex items-center gap-2"
                            >
                              <Input
                                ref={i === attempts.length ? attemptInputRef : undefined}
                                value={attemptInput}
                                onChange={(e) => {
                                  if (startRef.current === 0) startRef.current = Date.now();
                                  setAttemptInput(e.target.value);
                                }}
                                onFocus={() => { if (startRef.current === 0) startRef.current = Date.now(); }}
                                placeholder="Type the sample password above"
                                className="min-h-14 text-lg font-mono"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                                aria-label={`Attempt ${i + 1} input`}
                              />
                              <Button type="submit" className="min-h-14">Check</Button>
                            </form>
                          ) : done ? (
                            <div className="text-base text-muted-foreground font-mono break-all">
                              {a.ok ? 'Matched exactly.' : 'Close — try to nail each character next time.'}
                            </div>
                          ) : (
                            <div className="text-base text-muted-foreground">Waiting…</div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Completed state */}
                  {attempts.length >= 3 && (
                    <Alert className="border-emerald-500/60 bg-emerald-50 dark:bg-emerald-950/30">
                      <CheckCircle2 className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                      <AlertTitle className="text-emerald-900 dark:text-emerald-100 text-lg">
                        Round complete
                      </AlertTitle>
                      <AlertDescription className="text-emerald-900/90 dark:text-emerald-100/90 text-base">
                        Muscle memory builds in 3–7 repetitions. If you just learned a real password, type it a few
                        times in a row — but in your actual login page, not here. Your streak: {streak.sessions}{' '}
                        session{streak.sessions === 1 ? '' : 's'}.
                      </AlertDescription>
                    </Alert>
                  )}

                  {attempts.length === 0 && (
                    <Button onClick={beginAttempt} className="min-h-14 text-base w-full">
                      Start typing
                    </Button>
                  )}
                  {attempts.length >= 3 && (
                    <Button onClick={resetTypeDrill} variant="outline" className="min-h-14 text-base w-full">
                      <RefreshCw className="h-4 w-4 mr-2" /> Try another sample
                    </Button>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── DRILL 3: MANAGER INTRO ───────────────────── */}
            <TabsContent value="manager" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why a password manager matters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>
                    Most people reuse the same password 3–7 times across different sites. One data breach then
                    unlocks every account that shares it. A password manager fixes this by making — and remembering —
                    a unique random password for every site you use.
                  </p>
                  <p>
                    You only have to remember <strong>one</strong> strong master password. The manager handles the
                    rest, autofills login pages, and warns you if a site you use has been breached.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Top managers worth looking at</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base">
                  {[
                    { name: '1Password', note: 'Paid. Very polished. Strong family-sharing features.' },
                    { name: 'Bitwarden', note: 'Free for personal use and open-source. Great first pick if cost is a concern.' },
                    { name: 'Apple Passwords', note: 'Built into iPhone, iPad, Mac. Free. Works across Apple devices automatically.' },
                    { name: 'Google Password Manager', note: 'Built into Chrome and Android. Free. Syncs through your Google account.' },
                    { name: 'Dashlane', note: 'Paid. Good VPN bundle and dark-web monitoring.' },
                    { name: 'LastPass', note: 'Caveat: had serious breaches in 2022. If you use it, change every stored password and consider moving to another option.' },
                  ].map((m) => (
                    <div key={m.name} className="rounded-xl border p-4">
                      <div className="font-semibold text-lg">{m.name}</div>
                      <div className="text-muted-foreground mt-1">{m.note}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Getting started — a 5-step path</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <div><strong>1. Pick one.</strong> For most people starting out, Bitwarden (free) or Apple Passwords (if all your devices are Apple) is the right first move.</div>
                  <div><strong>2. Install it.</strong> Add the app on your phone and the browser extension on your computer.</div>
                  <div><strong>3. Make a master password.</strong> Use a 4–5 word passphrase from the generator below. Drill it with the type drill on this page until you know it by heart.</div>
                  <div><strong>4. Import what's saved in your browser.</strong> Chrome, Safari, and Edge can export saved logins into a file your new manager reads.</div>
                  <div><strong>5. Change the worst 5 first.</strong> Email, bank, phone carrier, main shopping, and anything that stores your credit card. Let the manager generate new strong ones.</div>
                  <div className="pt-3">
                    <Link
                      to="/tools/password-strength"
                      className="inline-flex items-center gap-2 min-h-14 px-5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Test password strength →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ── DRILL 4: RED TEAM MODE ───────────────────── */}
            <TabsContent value="redteam" className="space-y-6">
              <Alert className="border-red-500/60 bg-red-50 dark:bg-red-950/30">
                <Shield className="h-5 w-5 text-red-700" aria-hidden="true" />
                <AlertTitle className="text-red-900 dark:text-red-100 text-lg">
                  How scammers actually steal passwords
                </AlertTitle>
                <AlertDescription className="text-red-900/90 dark:text-red-100/90 text-base mt-1">
                  Knowing the attacks makes the defenses obvious. None of these are theoretical — every one happens
                  to real people every day.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Phishing pages',
                    how: 'Fake login pages sent by text or email. You type your real password into a lookalike site.',
                    defense: 'Never log in from a link in a message. Type the site address yourself or use a bookmark.',
                  },
                  {
                    name: 'Keyloggers',
                    how: 'Malicious software records every key you press and sends it to a stranger.',
                    defense: 'Keep your device updated and avoid pirated software. A manager auto-fills without typing, which sidesteps many keyloggers.',
                  },
                  {
                    name: 'Shoulder surfing',
                    how: 'Someone watches you type in a cafe, on a plane, or over a video call screen-share.',
                    defense: 'Shield your screen. Use a privacy screen filter on laptops. Close password apps before sharing your screen.',
                  },
                  {
                    name: 'Public Wi-Fi snooping',
                    how: 'On an unsecured network, an attacker can sometimes read the traffic between your device and a site.',
                    defense: 'Stick to HTTPS sites (the lock icon), and use a trusted VPN on open Wi-Fi if you must log in.',
                  },
                  {
                    name: 'Password reuse',
                    how: 'One leaked password is tried against every site you use — called "credential stuffing".',
                    defense: 'Unique password per site. This is the #1 reason to use a manager.',
                  },
                  {
                    name: 'Brute force & dictionary',
                    how: 'Computers guess passwords from common lists and tweaks (P@ssword123 and friends).',
                    defense: 'Length beats complexity. A 16+ character passphrase resists all known brute force tools.',
                  },
                  {
                    name: 'SIM swap',
                    how: 'An attacker tricks your phone carrier into moving your number to their SIM, then takes over text-based 2FA.',
                    defense: 'Set a carrier PIN. Switch from SMS 2FA to an authenticator app or hardware key for your most important accounts.',
                  },
                  {
                    name: 'Recovery question abuse',
                    how: 'Your mother\'s maiden name and first pet are often public on social media.',
                    defense: 'Treat recovery questions like passwords — use fake answers you store in your manager.',
                  },
                ].map((t) => (
                  <Card key={t.name} className="border-red-200 dark:border-red-900/30">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-700 dark:text-red-300">{t.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-base">
                      <div><span className="font-semibold">How it works: </span><span className="text-muted-foreground">{t.how}</span></div>
                      <div><span className="font-semibold">Defense: </span><span className="text-muted-foreground">{t.defense}</span></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* ── PASSPHRASE GENERATOR ─────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                Passphrase generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-muted-foreground">
                Tap the button for a random multi-word passphrase. Long and memorable beats short and cryptic every
                time. <strong>Practice only</strong> — don't reuse a phrase you generate here for a real account.
              </p>
              <div className="flex gap-2">
                <Button
                  variant={phraseWords === 4 ? 'default' : 'outline'}
                  onClick={() => setPhraseWords(4)}
                  className="min-h-12 flex-1"
                >
                  4 words
                </Button>
                <Button
                  variant={phraseWords === 5 ? 'default' : 'outline'}
                  onClick={() => setPhraseWords(5)}
                  className="min-h-12 flex-1"
                >
                  5 words
                </Button>
              </div>
              <Button onClick={rollPhrase} className="min-h-14 text-base w-full">
                <RefreshCw className="h-5 w-5 mr-2" /> Generate
              </Button>
              {phrase && (
                <div className="rounded-xl border-2 border-dashed p-4 flex items-center gap-3 bg-muted/20">
                  <code className="flex-1 text-lg md:text-xl font-mono break-all select-all">{phrase}</code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copy(phrase, 'phrase')}
                    aria-label="Copy passphrase"
                    className="min-h-12 min-w-12"
                  >
                    <Copy className="h-5 w-5" />
                    <span className="sr-only">{copied === 'phrase' ? 'Copied' : 'Copy'}</span>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* ── REUSE CHECK ──────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Is it on a common-passwords list?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-muted-foreground">
                Type a practice password to see if it matches our 100-entry sample of the most-reused passwords.
                Real managers like Bitwarden integrate with "Have I Been Pwned," which checks your password against
                hundreds of millions of real leaks without ever sending it over the internet.
              </p>
              <Input
                type="text"
                value={reuseCheck}
                onChange={(e) => setReuseCheck(e.target.value)}
                placeholder="Type a practice password (never a real one)"
                className="min-h-14 text-lg font-mono"
                autoComplete="off"
                aria-label="Reuse check input"
              />
              {reuseMatch === true && (
                <Alert className="border-red-500/60 bg-red-50 dark:bg-red-950/30">
                  <AlertTitle className="text-red-900 dark:text-red-100 text-lg">Found on the common list</AlertTitle>
                  <AlertDescription className="text-red-900/90 dark:text-red-100/90 text-base">
                    This password is in the top 100 most-leaked set. Attackers try these in the first second of any
                    guessing attempt. Pick something longer and less common.
                  </AlertDescription>
                </Alert>
              )}
              {reuseMatch === false && reuseCheck && (
                <Alert className="border-emerald-500/60 bg-emerald-50 dark:bg-emerald-950/30">
                  <AlertTitle className="text-emerald-900 dark:text-emerald-100 text-lg">Not on our sample list</AlertTitle>
                  <AlertDescription className="text-emerald-900/90 dark:text-emerald-100/90 text-base">
                    Our 100-password list is tiny though — a real check happens inside your password manager against
                    hundreds of millions of leaked records. Always prefer a manager for that verification.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* ── 2FA EXPLAINER ────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Two-factor authentication (2FA) — a second lock</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base">
              <p className="text-muted-foreground">
                Even a perfect password can leak. 2FA asks for something else — a code, a tap, a physical key — so
                a stolen password alone is not enough to log in.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="rounded-xl border p-4">
                  <div className="font-semibold text-lg mb-1">Authenticator apps</div>
                  <div className="text-muted-foreground">
                    Google Authenticator, Microsoft Authenticator, Authy. Shows a 6-digit code that changes every
                    30 seconds. Strong, free, and the recommended default.
                  </div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="font-semibold text-lg mb-1">Text message (SMS)</div>
                  <div className="text-muted-foreground">
                    A code sent to your phone. Better than nothing, but weaker — attackers can SIM-swap your number.
                    Avoid SMS-only 2FA on your most sensitive accounts.
                  </div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="font-semibold text-lg mb-1">Hardware keys</div>
                  <div className="text-muted-foreground">
                    A small USB/NFC key like YubiKey. Tap or insert it to approve a login. The gold standard — nearly
                    impossible to phish. Worth it for email, finance, and work accounts.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── BREACH EMAIL ─────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What to do if you get a breach email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-base text-muted-foreground">
              <div><strong className="text-foreground">1. Don't click links in the email.</strong> The email itself could be a phish pretending to be a breach notice.</div>
              <div><strong className="text-foreground">2. Go to the real site directly.</strong> Type the web address or use your bookmark.</div>
              <div><strong className="text-foreground">3. Log in and change your password.</strong> Make the new one unique — don't reuse it anywhere else.</div>
              <div><strong className="text-foreground">4. Turn on 2FA</strong> while you're there, if it's not on already.</div>
              <div><strong className="text-foreground">5. Check every site that used the old password.</strong> This is another reason to lean on a manager — it tracks which sites shared which password.</div>
            </CardContent>
          </Card>

          {/* ── STICKY NOTE REALITY CHECK ─────────────────── */}
          <Card className="border-amber-300 dark:border-amber-900/40">
            <CardHeader>
              <CardTitle className="text-xl">Sticky-note reality check</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-base text-muted-foreground">
              <p>
                Writing passwords down is fine — a password manager is better, but a notebook beats reusing
                "sunshine123" on every site. If you do write them down:
              </p>
              <div>• Keep the notebook in a <strong className="text-foreground">locked drawer at home</strong> — never at work, never in a bag.</div>
              <div>• Use <strong className="text-foreground">hints, not the full password</strong>. "Dog year + favorite song + !" is enough to jog your memory without being useful to a burglar.</div>
              <div>• Treat the notebook <strong className="text-foreground">like cash</strong>. If it goes missing, change everything in it, right away.</div>
              <div>• Never label it "Passwords" on the cover.</div>
            </CardContent>
          </Card>

          {/* ── FAQ ──────────────────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Frequently asked</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <div>
                <div className="font-semibold text-lg">Is it safe to type here?</div>
                <p className="text-muted-foreground">
                  Yes, for practice values you make up or that are generated on this page. Nothing is sent to a
                  server, and nothing is stored other than your streak counter. Still — don't type your real, active
                  passwords into any website that isn't the actual login page.
                </p>
              </div>
              <div>
                <div className="font-semibold text-lg">Should I use a password manager?</div>
                <p className="text-muted-foreground">
                  For almost everyone, yes. Even a free one like Bitwarden or Apple Passwords is a major upgrade
                  over writing passwords in a notebook or reusing the same one. The one master password you still
                  have to remember — that's the one worth drilling here.
                </p>
              </div>
              <div>
                <div className="font-semibold text-lg">What's a passphrase?</div>
                <p className="text-muted-foreground">
                  Several unrelated words strung together, sometimes with a number or symbol. Example:
                  <code className="mx-1 rounded bg-muted px-1.5 py-0.5">Lantern-Copper-Otter-Glacier-17!</code>
                  Longer than most "complex" short passwords, and far easier to remember.
                </p>
              </div>
              <div>
                <div className="font-semibold text-lg">What about passkeys?</div>
                <p className="text-muted-foreground">
                  Passkeys are a newer replacement for passwords entirely. Your device proves who you are with a
                  fingerprint or face, and there's no password to steal or phish. More and more sites support them —
                  turn them on when the option appears. They work alongside your existing password, not instead of it.
                </p>
              </div>
              <div>
                <div className="font-semibold text-lg">Can I print my passwords?</div>
                <p className="text-muted-foreground">
                  A printed emergency sheet kept in a safe or locked drawer is a reasonable backup — especially for
                  your master password and recovery codes. Shred old copies. Never leave it in a car, laptop bag,
                  or desk at work.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ── FOOTER LINKS ─────────────────────────────── */}
          <div className="grid sm:grid-cols-3 gap-3">
            <Link
              to="/tools/password-strength"
              className="rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors block"
            >
              <p className="font-semibold text-base">Password Strength Tester →</p>
              <p className="text-sm text-muted-foreground mt-1">Check any password's strength.</p>
            </Link>
            <Link
              to="/tools/password-leak-checker"
              className="rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors block"
            >
              <p className="font-semibold text-base">Password Leak Checker →</p>
              <p className="text-sm text-muted-foreground mt-1">See if yours is in a known breach.</p>
            </Link>
            <Link
              to="/tools/two-factor-setup"
              className="rounded-xl border p-4 hover:border-primary hover:bg-muted/50 transition-colors block"
            >
              <p className="font-semibold text-base">Turn on 2FA →</p>
              <p className="text-sm text-muted-foreground mt-1">Step-by-step for each account type.</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
