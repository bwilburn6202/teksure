/**
 * Site search that forgives everyday wording.
 *
 * People type what they see or feel ("my phone is talking to me", "facebook
 * hacked"), not the name of the setting. So the query is normalised, filler
 * words are dropped, common phrases and words are expanded into the words our
 * guides use, and a result only needs to match most of the query, not all of
 * it. Results that match every part of the query still rank first.
 */

export interface SearchFields {
  title: string;
  text: string;
}

/** Lowercase, join spelling variants, strip punctuation. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/wi-fi/g, 'wifi')
    .replace(/e-mail/g, 'email')
    .replace(/pop[- ]ups?/g, 'popup')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const STOP_WORDS = new Set(
  `a an and are am at be been but by can cant could did do does doesnt dont for from get got has have
  help how i im is isnt it its keep keeps me my of on or our please problem should so some someone
  something stop stopped that the then there this to up want was what when where which why will with
  wont would you your fix fixing not no work working works anymore again now just really very all fast quick
  quickly new old`
    .split(/\s+/)
    .filter(Boolean),
);

/** Phrases first: they replace their words with the words the guides use. */
const PHRASES: [RegExp, ...string[][]][] = [
  [/\b(talking|talks|reading|reads|speaking|speaks) (to me|out loud|aloud|everything)\b|\bwont stop talking\b/, ['voiceover', 'talkback', 'spoken', 'accessibility']],
  [/\b(bigger|larger|big|large) (text|letters|words|font|print)\b|\btext (is )?(too )?small\b|\bcant read\b/, ['font', 'text size', 'larger', 'zoom', 'display']],
  [/\bspam calls?\b|\bjunk calls?\b|\bscam calls?\b|\bunknown callers?\b/, ['robocall', 'spam call', 'block', 'call blocking']],
  [/\bforgot( my)? password\b/, ['password', 'passcode'], ['forgot', 'recovery', 'reset', 'locked']],
  [/\blocked out\b|\bcant (log|sign) in\b/, ['recovery', 'locked', 'forgot', 'password', 'sign in']],
  [/\bvideo (chat|calls?)\b/, ['video call', 'facetime', 'zoom', 'duo']],
  [/\btext messages?\b|\btexts\b/, ['text message', 'messages', 'imessage', 'sms']],
  [/\bfull storage\b|\bout of (space|storage)\b|\bno (space|storage)\b|\bstorage (is )?full\b/, ['storage', 'space', 'free up']],
  [/\bbattery (dies|drains|draining|dying)\b|\bdead battery\b/, ['battery', 'drain', 'battery life']],
  [/\bcell ?phone\b|\bmobile phone\b|\bsmart ?phone\b/, ['phone', 'iphone', 'android', 'smartphone']],
];

/** Single words: each becomes "this word, or any of these". */
const SYNONYMS: Record<string, string[]> = {
  hacked: ['hack', 'compromised', 'recover', 'recovery', 'stolen'],
  hack: ['hacked', 'compromised', 'recover', 'recovery'],
  hijacked: ['hack', 'compromised', 'recover'],
  virus: ['virus', 'malware', 'antivirus', 'scam'],
  viruses: ['virus', 'malware', 'antivirus'],
  popup: ['popup', 'pop up', 'ads', 'fake'],
  robocall: ['robocall', 'spam call', 'call blocking'],
  robocalls: ['robocall', 'spam call', 'call blocking'],
  fb: ['facebook'],
  insta: ['instagram'],
  gmail: ['gmail', 'email', 'google account'],
  email: ['email', 'gmail', 'outlook', 'inbox'],
  internet: ['internet', 'wifi', 'online', 'router'],
  wifi: ['wifi', 'internet', 'router', 'network'],
  wireless: ['wifi', 'wireless', 'bluetooth'],
  pictures: ['photo', 'picture'],
  pics: ['photo', 'picture'],
  picture: ['photo', 'picture'],
  pic: ['photo', 'picture'],
  laptop: ['laptop', 'computer', 'windows', 'mac'],
  pc: ['computer', 'windows', 'pc'],
  computer: ['computer', 'windows', 'mac', 'laptop', 'pc'],
  tablet: ['tablet', 'ipad', 'android'],
  apple: ['apple', 'iphone', 'ipad', 'mac'],
  slow: ['slow', 'speed', 'faster', 'storage'],
  frozen: ['frozen', 'freeze', 'restart', 'unresponsive'],
  freezes: ['frozen', 'freeze', 'restart'],
  font: ['font', 'text size', 'larger text'],
  bigger: ['bigger', 'larger', 'zoom', 'text size'],
  scammed: ['scam', 'fraud', 'scammer'],
  scammer: ['scam', 'fraud', 'scammer'],
  fraud: ['fraud', 'scam'],
  bank: ['bank', 'banking', 'money'],
  printer: ['printer', 'print', 'printing'],
  print: ['print', 'printer', 'printing'],
  update: ['update', 'upgrade'],
  backup: ['backup', 'back up', 'icloud', 'google one'],
  delete: ['delete', 'remove', 'clear'],
  remove: ['remove', 'delete', 'uninstall'],
  install: ['install', 'download', 'add'],
  download: ['download', 'install'],
  tv: ['tv', 'television', 'streaming', 'roku'],
  television: ['tv', 'television', 'streaming'],
  ai: ['ai', 'chatgpt', 'artificial intelligence'],
  chatgpt: ['chatgpt', 'ai'],
  doctor: ['doctor', 'telehealth', 'patient portal'],
  medicare: ['medicare'],
  ss: ['social security'],
  grandkids: ['grandkids', 'grandchildren', 'family'],
  grandchildren: ['grandchildren', 'grandkids', 'family'],
  kids: ['kids', 'children', 'family'],
  phone: ['phone', 'iphone', 'android', 'smartphone'],
};

/** Strip common endings so "printing" also finds "printer" and "passwords" finds "password". */
export function stem(w: string): string {
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}

/**
 * Turn a query into groups. A result matches a group when it contains any
 * term in it. Returns [] for an empty query.
 */
export function expandQuery(q: string): string[][] {
  let text = ` ${normalize(q)} `;
  const groups: string[][] = [];
  for (const [re, ...phraseGroups] of PHRASES) {
    if (re.test(text)) {
      groups.push(...phraseGroups);
      text = text.replace(new RegExp(re.source, 'g'), ' ');
    }
  }
  const raw = text.split(/\s+/).filter((w) => w.length > 1 || /\d/.test(w));
  const content = raw.filter((w) => !STOP_WORDS.has(w));
  // "help" on its own still means something: keep stop words if nothing else is left.
  const words = groups.length || content.length ? content : raw;
  for (const w of words) {
    const base = stem(w);
    const set = new Set([w, base, ...(SYNONYMS[w] ?? SYNONYMS[base] ?? [])]);
    groups.push([...set]);
  }
  return groups;
}

/**
 * Score one item. Title hits count more than excerpt/tag hits, and matching
 * every group earns a bonus so full matches always rank above partial ones.
 * An item must match at least half the groups (all of them for a one-group
 * query) or it scores 0.
 */
export function scoreItem(fields: SearchFields, groups: string[][]): number {
  if (!groups.length) return 0;
  const title = ` ${normalize(fields.title)} `;
  const text = ` ${normalize(fields.text)} `;
  let total = 0;
  let matched = 0;
  for (const group of groups) {
    let best = 0;
    for (const [i, term] of group.entries()) {
      // The word the person typed is worth a little more than a synonym.
      const weight = i === 0 ? 1 : 0.8;
      // Match at the start of a word ("hack" finds "hacked"); short terms
      // like "ai" or "tv" must be the whole word, or "ai" would match "email".
      const needle = term.length <= 3 ? ` ${term} ` : ` ${term}`;
      if (title.includes(needle)) best = Math.max(best, 10 * weight);
      else if (text.includes(needle)) best = Math.max(best, 3 * weight);
    }
    if (best > 0) matched += 1;
    total += best;
  }
  const needed = Math.max(1, Math.ceil(groups.length / 2));
  if (matched < needed) return 0;
  // Tie-break: a title that starts with what was typed reads as the best fit.
  const lead = groups[0].some((t) => title.startsWith(` ${t}`)) ? 2 : 0;
  return total + lead + (matched === groups.length ? 25 : 0);
}

/** Rank items, best first. */
export function rank<T>(items: T[], fields: (item: T) => SearchFields, q: string, limit = 40): T[] {
  const groups = expandQuery(q);
  if (!groups.length) return [];
  return items
    .map((item) => ({ item, s: scoreItem(fields(item), groups) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.item);
}
