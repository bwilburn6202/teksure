/**
 * One-off migration: PrivacyAudit.tsx data was written in a different shape
 * than the component renders. The UI maps `service.checks` and reads
 * `service.title` / `service.tagline` / `service.color`, but the data supplied
 * `name`, `settings`, and an empty `icon` string — so the page threw
 * "Cannot read properties of undefined (reading 'map')" and never rendered.
 *
 * This rewrites each service header to the shape the component expects.
 */
import { readFileSync, writeFileSync } from 'fs';

const FILE = new URL('../src/pages/tools/PrivacyAudit.tsx', import.meta.url);
let src = readFileSync(FILE, 'utf8');

const META = {
  iphone:    { title: 'iPhone',     icon: 'Smartphone', color: 'bg-slate-100 dark:bg-slate-800',   tagline: 'Lock down location, tracking, and ads on your iPhone.' },
  android:   { title: 'Android',    icon: 'Smartphone', color: 'bg-green-100 dark:bg-green-900/40', tagline: 'Control what Google and your apps collect on Android.' },
  facebook:  { title: 'Facebook',   icon: 'Facebook',   color: 'bg-blue-100 dark:bg-blue-900/40',   tagline: 'Decide who sees your posts and stop off-Facebook tracking.' },
  google:    { title: 'Google',     icon: 'Globe',      color: 'bg-red-100 dark:bg-red-900/40',     tagline: 'Turn off search, location, and YouTube history you do not want kept.' },
  instagram: { title: 'Instagram',  icon: 'Camera',     color: 'bg-pink-100 dark:bg-pink-900/40',   tagline: 'Make your account private and limit who can message you.' },
  amazon:    { title: 'Amazon',     icon: 'ShoppingCart', color: 'bg-amber-100 dark:bg-amber-900/40', tagline: 'Stop ad targeting and manage what Alexa keeps.' },
  whatsapp:  { title: 'WhatsApp',   icon: 'MessageCircle', color: 'bg-emerald-100 dark:bg-emerald-900/40', tagline: 'Control your last-seen, profile photo, and group invites.' },
  windows:   { title: 'Windows PC', icon: 'Laptop',     color: 'bg-sky-100 dark:bg-sky-900/40',     tagline: 'Turn off advertising IDs and diagnostic data on Windows.' },
  mac:       { title: 'Mac',        icon: 'Apple',      color: 'bg-zinc-100 dark:bg-zinc-800',      tagline: 'Review app permissions and analytics sharing on your Mac.' },
};

// Rewrite each `id: 'x', name: 'Y', icon: '',` header line.
src = src.replace(
  /id: '([a-z]+)', name: '[^']*', icon: '',/g,
  (whole, id) => {
    const m = META[id];
    if (!m) return whole;
    return `id: '${id}',\n    title: '${m.title}',\n    tagline: '${m.tagline}',\n    icon: ${m.icon},\n    color: '${m.color}',`;
  }
);

// The data calls the list `settings`; the component maps `checks`.
src = src.replace(/^(\s*)settings: \[$/gim, '$1checks: [');

// Widen the id union to every service present in the data.
src = src.replace(
  /id: 'facebook' \| 'google' \| 'apple' \| 'iphone' \| 'android';/,
  "id: 'facebook' | 'google' | 'apple' | 'iphone' | 'android' | 'instagram' | 'amazon' | 'whatsapp' | 'windows' | 'mac';"
);

// `where` is absent on the newer entries — make it optional.
src = src.replace(
  /^(\s*)where: string;(\s*\/\/.*)?$/m,
  '$1where?: string;$2'
);
// ...and add the optional link label the data supplies.
src = src.replace(
  /^(\s*)why: string;(\s*\/\/.*)?$/m,
  '$1why: string;$2\n$1linkLabel?: string;'
);

// Import the icons the metadata now references.
src = src.replace(
  /(\n  Facebook, Apple, Smartphone, Globe, Info, BookOpen,)/,
  '\n  Facebook, Apple, Smartphone, Globe, Info, BookOpen,\n  Camera, ShoppingCart, MessageCircle, Laptop,'
);

writeFileSync(FILE, src);
console.log('[fix-privacy-audit] aligned service data with the component contract');
