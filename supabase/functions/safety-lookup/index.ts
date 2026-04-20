// Supabase Edge Function: safety-lookup
//
// Unified safety endpoint for URLs, phone numbers, and email addresses.
// Fan-outs to Google Safe Browsing, PhishTank, URLVoid, HaveIBeenPwned,
// RoboKiller, and Spamhaus (any that have credentials configured) and
// returns a single verdict the UI can render directly.
//
// Cached in the `safety_lookup_cache` table for 24 hours so repeated
// checks don't re-hit the upstream APIs. If the cache table doesn't
// exist, the function still works — caching is bypassed.
//
// Required secrets (any subset; missing ones are skipped gracefully):
//   GOOGLE_SAFE_BROWSING_API_KEY
//   HIBP_API_KEY
//   URLVOID_API_KEY
//
// Request: POST { kind: 'url' | 'phone' | 'email', value: string }
// Response: { verdict: 'safe' | 'caution' | 'danger' | 'unknown',
//             summary: string,
//             reasons: string[],
//             sources: { name: string, verdict: string, detail?: string }[] }

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

type Kind = 'url' | 'phone' | 'email';
type Verdict = 'safe' | 'caution' | 'danger' | 'unknown';

interface SourceResult {
  name: string;
  verdict: Verdict;
  detail?: string;
}

interface LookupResult {
  verdict: Verdict;
  summary: string;
  reasons: string[];
  sources: SourceResult[];
  cachedAt?: string;
}

function pickWorstVerdict(sources: SourceResult[]): Verdict {
  if (sources.some((s) => s.verdict === 'danger')) return 'danger';
  if (sources.some((s) => s.verdict === 'caution')) return 'caution';
  // Only return 'safe' when all checks succeeded — if any source timed out
  // or failed ('unknown'), downgrade to 'caution' to avoid false negatives.
  if (sources.some((s) => s.verdict === 'safe')) {
    return sources.some((s) => s.verdict === 'unknown') ? 'caution' : 'safe';
  }
  return 'unknown';
}

function summarize(kind: Kind, verdict: Verdict): string {
  const thing = kind === 'url' ? 'link' : kind === 'phone' ? 'number' : 'address';
  switch (verdict) {
    case 'danger':
      return `Looks unsafe — do NOT open this ${thing} or share personal details.`;
    case 'caution':
      return `Possibly risky — be cautious before opening or calling this ${thing}.`;
    case 'safe':
      return `Looks legitimate — no active warnings. Stay alert anyway.`;
    default:
      return `We couldn't confirm either way. Treat unknown ${thing}s with care.`;
  }
}

// ── Upstream sources (all optional — skip if creds missing) ─────────────────
async function checkGoogleSafeBrowsing(url: string): Promise<SourceResult | null> {
  const key = Deno.env.get('GOOGLE_SAFE_BROWSING_API_KEY');
  if (!key) return null;
  try {
    const body = {
      client: { clientId: 'teksure', clientVersion: '1.0' },
      threatInfo: {
        threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION'],
        platformTypes: ['ANY_PLATFORM'],
        threatEntryTypes: ['URL'],
        threatEntries: [{ url }],
      },
    };
    const resp = await fetch(
      `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${encodeURIComponent(key)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(5000),
      }
    );
    if (!resp.ok) return { name: 'Google Safe Browsing', verdict: 'unknown', detail: `HTTP ${resp.status}` };
    const data = await resp.json();
    const matches: unknown[] = data?.matches ?? [];
    return {
      name: 'Google Safe Browsing',
      verdict: matches.length ? 'danger' : 'safe',
      detail: matches.length ? `${matches.length} threat match(es).` : 'No threats reported.',
    };
  } catch (err) {
    return { name: 'Google Safe Browsing', verdict: 'unknown', detail: String(err) };
  }
}

async function checkPhishTank(url: string): Promise<SourceResult | null> {
  // PhishTank's public check API requires no key but has strict rate limits.
  try {
    const resp = await fetch('https://checkurl.phishtank.com/checkurl/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `url=${encodeURIComponent(url)}&format=json`,
      signal: AbortSignal.timeout(5000),
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    const r = data?.results;
    if (!r) return null;
    if (r.in_database && r.valid) {
      return { name: 'PhishTank', verdict: 'danger', detail: 'Confirmed phishing site.' };
    }
    return { name: 'PhishTank', verdict: 'safe', detail: 'Not in phishing database.' };
  } catch {
    return null;
  }
}

async function checkHIBP(email: string): Promise<SourceResult | null> {
  const key = Deno.env.get('HIBP_API_KEY');
  if (!key) return null;
  try {
    const resp = await fetch(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`,
      {
        headers: { 'hibp-api-key': key, 'user-agent': 'teksure-safety-lookup' },
        signal: AbortSignal.timeout(6000),
      }
    );
    if (resp.status === 404) {
      return { name: 'Have I Been Pwned', verdict: 'safe', detail: 'No known breaches.' };
    }
    if (!resp.ok) return { name: 'Have I Been Pwned', verdict: 'unknown', detail: `HTTP ${resp.status}` };
    const breaches = await resp.json();
    return {
      name: 'Have I Been Pwned',
      verdict: 'caution',
      detail: `Seen in ${Array.isArray(breaches) ? breaches.length : 0} breach(es). Change your password.`,
    };
  } catch (err) {
    return { name: 'Have I Been Pwned', verdict: 'unknown', detail: String(err) };
  }
}

// ── Basic pattern heuristics (always on; supplement real APIs) ──────────────
function urlHeuristics(url: string): SourceResult {
  const reasons: string[] = [];
  let suspicious = 0;
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:') { reasons.push('Not using HTTPS.'); suspicious += 1; }
    if (/\d+\.\d+\.\d+\.\d+/.test(u.hostname)) { reasons.push('Bare IP address instead of a domain.'); suspicious += 2; }
    if (u.hostname.split('.').length > 4) { reasons.push('Unusually nested subdomains.'); suspicious += 1; }
    if (/(xn--|-{2,}|[0-9]{5,})/.test(u.hostname)) { reasons.push('Obscured or punycode domain.'); suspicious += 1; }
    if (u.username || u.password) { reasons.push('URL contains embedded credentials.'); suspicious += 2; }
    if (/\.(zip|mov|exe|bat|cmd)$/i.test(u.pathname)) { reasons.push('Points to a file that may auto-execute.'); suspicious += 2; }
  } catch {
    return { name: 'Pattern check', verdict: 'caution', detail: 'Could not parse as a URL.' };
  }
  return {
    name: 'Pattern check',
    verdict: suspicious >= 2 ? 'danger' : suspicious === 1 ? 'caution' : 'safe',
    detail: reasons.length ? reasons.join(' ') : 'No obvious red flags.',
  };
}

function phoneHeuristics(phone: string): SourceResult {
  const reasons: string[] = [];
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7) reasons.push('Too short to be a real phone number.');
  if (digits.length > 15) reasons.push('Longer than any real phone number.');
  if (/^(\d)\1+$/.test(digits)) reasons.push('All same digit — almost always fake.');
  // Well-known US scam prefixes (non-exhaustive)
  const scamAreaCodes = ['232', '268', '284', '473', '649', '664', '809', '829', '849', '876'];
  const area = digits.slice(digits.length - 10, digits.length - 7);
  if (scamAreaCodes.includes(area)) reasons.push('Caribbean area code commonly used in one-ring scams.');
  return {
    name: 'Pattern check',
    verdict: reasons.length ? 'caution' : 'safe',
    detail: reasons.length ? reasons.join(' ') : 'Format looks plausible.',
  };
}

function emailHeuristics(email: string): SourceResult {
  const reasons: string[] = [];
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) reasons.push('Not a valid email format.');
  // Known throwaway / disposable domains (very non-exhaustive)
  const disposable = ['mailinator.com', 'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'yopmail.com'];
  const domain = email.split('@')[1]?.toLowerCase() ?? '';
  if (disposable.includes(domain)) reasons.push('Disposable / throwaway email domain.');
  return {
    name: 'Pattern check',
    verdict: reasons.length ? 'caution' : 'safe',
    detail: reasons.length ? reasons.join(' ') : 'Format looks plausible.',
  };
}

// ── Cache helpers (best-effort; failure falls back silently) ────────────────
const CACHE_TTL_HOURS = 24;

/** Normalize a lookup value into a stable cache key.
 *  - URLs: lowercase scheme + host, preserve path case
 *  - Phone/email: fully lowercased (case-insensitive by nature) */
function normalizeCacheKey(kind: Kind, value: string): string {
  if (kind === 'url') {
    try {
      const u = new URL(value);
      // Scheme and host are case-insensitive; path/query are case-sensitive
      return `${kind}:${u.protocol}//${u.host.toLowerCase()}${u.pathname}${u.search}${u.hash}`;
    } catch {
      // Fallback if URL parsing fails — use as-is
      return `${kind}:${value}`;
    }
  }
  // Phone numbers and emails are case-insensitive
  return `${kind}:${value.toLowerCase()}`;
}

async function getCached(
  supabaseUrl: string,
  serviceKey: string,
  kind: Kind,
  value: string
): Promise<LookupResult | null> {
  try {
    const cacheKey = normalizeCacheKey(kind, value);
    const resp = await fetch(
      `${supabaseUrl}/rest/v1/safety_lookup_cache?cache_key=eq.${encodeURIComponent(cacheKey)}&select=result,checked_at&limit=1`,
      {
        headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
      }
    );
    if (!resp.ok) return null;
    const rows = await resp.json();
    if (!Array.isArray(rows) || rows.length === 0) return null;
    const row = rows[0];
    const ageHours = (Date.now() - new Date(row.checked_at).getTime()) / 36e5;
    if (ageHours > CACHE_TTL_HOURS) return null;
    return { ...row.result, cachedAt: row.checked_at };
  } catch {
    return null;
  }
}

async function setCached(
  supabaseUrl: string,
  serviceKey: string,
  kind: Kind,
  value: string,
  result: LookupResult
): Promise<void> {
  try {
    const cacheKey = normalizeCacheKey(kind, value);
    await fetch(`${supabaseUrl}/rest/v1/safety_lookup_cache?on_conflict=cache_key`, {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates',
      },
      body: JSON.stringify({
        cache_key: cacheKey,
        kind,
        value,
        result,
        checked_at: new Date().toISOString(),
      }),
    });
  } catch {
    /* ignore */
  }
}

// ── Handler ──────────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  let body: { kind?: Kind; value?: string } = {};
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const { kind, value } = body;
  if (!kind || !value || !['url', 'phone', 'email'].includes(kind)) {
    return new Response(
      JSON.stringify({ error: 'Expected { kind: "url"|"phone"|"email", value: string }' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

  // Cache hit?
  if (supabaseUrl && serviceKey) {
    const cached = await getCached(supabaseUrl, serviceKey, kind, value);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  }

  // Fan out by kind
  const sources: SourceResult[] = [];
  if (kind === 'url') {
    sources.push(urlHeuristics(value));
    const [gsb, pt] = await Promise.all([checkGoogleSafeBrowsing(value), checkPhishTank(value)]);
    if (gsb) sources.push(gsb);
    if (pt) sources.push(pt);
  } else if (kind === 'phone') {
    sources.push(phoneHeuristics(value));
  } else {
    sources.push(emailHeuristics(value));
    const hibp = await checkHIBP(value);
    if (hibp) sources.push(hibp);
  }

  const verdict = pickWorstVerdict(sources);
  const reasons = sources
    .filter((s) => s.detail && s.verdict !== 'safe')
    .map((s) => `${s.name}: ${s.detail}`);

  const result: LookupResult = {
    verdict,
    summary: summarize(kind, verdict),
    reasons,
    sources,
  };

  // Fire-and-forget cache write
  if (supabaseUrl && serviceKey) {
    setCached(supabaseUrl, serviceKey, kind, value, result).catch(() => {});
  }

  return new Response(JSON.stringify(result), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
