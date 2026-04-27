/**
 * Per-guide "Learn More" resource resolver.
 *
 * Given a guide's slug, category, and tags, returns a curated list of
 * authoritative external links (Apple Support, Google, Microsoft, FTC, etc.)
 * without requiring per-guide manual editing.
 */

export type OfficialResource = {
  title: string;
  url: string;
  source: string;
};

type GuideLike = { slug: string; category: string; tags?: string[] };

type ResourceRule = {
  keywords: string[];
  resources: OfficialResource[];
};

/**
 * Keyword-based rules. First matching rule is used; up to 5 resources returned.
 * Keywords are matched against slug + tags after lowercasing.
 */
const RULES: ResourceRule[] = [
  // --- Apple ecosystem ---
  {
    keywords: ['iphone', 'ios', 'facetime', 'imessage', 'airdrop', 'apple-id', 'apple-watch', 'apple-pay', 'icloud', 'apple-music', 'mac-guides', 'macos', 'airpods', 'ipad', 'ipados', 'siri', 'handoff', 'continuity'],
    resources: [
      { title: `Apple Support`, url: `https://support.apple.com/`, source: `support.apple.com` },
      { title: `iPhone User Guide`, url: `https://support.apple.com/guide/iphone/welcome/ios`, source: `support.apple.com` },
      { title: `AppleCare contact options`, url: `https://getsupport.apple.com/`, source: `support.apple.com` },
    ],
  },
  // --- Google ecosystem ---
  {
    keywords: ['gmail', 'google-drive', 'google-docs', 'google-sheets', 'google-photos', 'google-meet', 'google-calendar', 'chromebook', 'chrome-os', 'android', 'pixel', 'google-home', 'google-pay', 'google-wallet', 'youtube', 'google-family-link'],
    resources: [
      { title: `Google Help Center`, url: `https://support.google.com/`, source: `support.google.com` },
      { title: `Android Help`, url: `https://support.google.com/android/`, source: `support.google.com` },
      { title: `Google Account help`, url: `https://support.google.com/accounts/`, source: `support.google.com` },
    ],
  },
  // --- Microsoft ecosystem ---
  {
    keywords: ['windows', 'microsoft-365', 'outlook', 'word', 'excel', 'powerpoint', 'onenote', 'bitlocker', 'powershell', 'windows-defender', 'teams', 'onedrive', 'clipchamp', 'edge-browser', 'windows-hello', 'microsoft-designer'],
    resources: [
      { title: `Microsoft Support`, url: `https://support.microsoft.com/`, source: `support.microsoft.com` },
      { title: `Windows Help`, url: `https://support.microsoft.com/windows`, source: `support.microsoft.com` },
      { title: `Microsoft 365 Help`, url: `https://support.microsoft.com/office`, source: `support.microsoft.com` },
    ],
  },
  // --- Samsung ---
  {
    keywords: ['samsung-galaxy', 'samsung-health', 'samsung-pay', 'samsung-dex', 'galaxy-watch', 'bixby', 'samsung'],
    resources: [
      { title: `Samsung Support`, url: `https://www.samsung.com/us/support/`, source: `samsung.com` },
      { title: `Galaxy User Manuals`, url: `https://www.samsung.com/us/support/owners/manuals/`, source: `samsung.com` },
    ],
  },
  // --- Online privacy / security ---
  {
    keywords: ['phishing', 'scam', 'fraud', 'identity-theft', 'dark-web', 'data-breach', 'sim-swap', 'social-engineering', 'scams', 'online-privacy'],
    resources: [
      { title: `FTC Consumer Advice`, url: `https://consumer.ftc.gov/`, source: `consumer.ftc.gov` },
      { title: `IdentityTheft.gov`, url: `https://www.identitytheft.gov/`, source: `identitytheft.gov` },
      { title: `CISA — Stop.Think.Connect.`, url: `https://www.cisa.gov/stopthinkconnect`, source: `cisa.gov` },
      { title: `Have I Been Pwned`, url: `https://haveibeenpwned.com/`, source: `haveibeenpwned.com` },
    ],
  },
  // --- Credit & banking ---
  {
    keywords: ['credit-report', 'credit-freeze', 'credit-score', 'fraud-alert', 'annualcreditreport'],
    resources: [
      { title: `AnnualCreditReport.com (official)`, url: `https://www.annualcreditreport.com/`, source: `annualcreditreport.com` },
      { title: `Experian Credit Freeze`, url: `https://www.experian.com/freeze/`, source: `experian.com` },
      { title: `Equifax Credit Report Services`, url: `https://www.equifax.com/personal/credit-report-services/`, source: `equifax.com` },
      { title: `TransUnion Credit Freeze`, url: `https://www.transunion.com/credit-freeze`, source: `transunion.com` },
    ],
  },
  {
    keywords: ['bank', 'banking', 'online-banking', 'fdic', 'routing-number', 'wire-transfer', 'mobile-deposit', 'bill-pay'],
    resources: [
      { title: `FDIC BankFind (check your bank)`, url: `https://banks.data.fdic.gov/bankfind-suite/bankfind`, source: `fdic.gov` },
      { title: `Consumer Financial Protection Bureau`, url: `https://www.consumerfinance.gov/`, source: `consumerfinance.gov` },
    ],
  },
  // --- Government ---
  {
    keywords: ['medicare', 'medicaid', 'social-security', 'irs', 'va-', 'veterans', 'government-civic', 'recreation-gov', 'america-beautiful', 'ssa', 'irs-'],
    resources: [
      { title: `Medicare.gov`, url: `https://www.medicare.gov/`, source: `medicare.gov` },
      { title: `SSA.gov`, url: `https://www.ssa.gov/`, source: `ssa.gov` },
      { title: `IRS.gov`, url: `https://www.irs.gov/`, source: `irs.gov` },
      { title: `USA.gov`, url: `https://www.usa.gov/`, source: `usa.gov` },
    ],
  },
  // --- Social media ---
  {
    keywords: ['facebook', 'messenger', 'instagram', 'whatsapp'],
    resources: [
      { title: `Facebook Help Center`, url: `https://www.facebook.com/help`, source: `facebook.com` },
      { title: `Instagram Help`, url: `https://help.instagram.com/`, source: `instagram.com` },
    ],
  },
  {
    keywords: ['tiktok'],
    resources: [
      { title: `TikTok Support`, url: `https://support.tiktok.com/`, source: `tiktok.com` },
    ],
  },
  // --- Streaming ---
  {
    keywords: ['netflix'],
    resources: [
      { title: `Netflix Help Center`, url: `https://help.netflix.com/`, source: `help.netflix.com` },
    ],
  },
  {
    keywords: ['spotify'],
    resources: [
      { title: `Spotify Support`, url: `https://support.spotify.com/`, source: `support.spotify.com` },
    ],
  },
  // --- Accessibility ---
  {
    keywords: ['accessibility', 'voice-over', 'talkback', 'live-captions', 'magnifier', 'switch-access', 'assistive-access', 'personal-voice', 'sound-recognition'],
    resources: [
      { title: `Apple Accessibility`, url: `https://www.apple.com/accessibility/`, source: `apple.com` },
      { title: `Google Accessibility`, url: `https://www.google.com/accessibility/`, source: `google.com` },
      { title: `Microsoft Accessibility`, url: `https://www.microsoft.com/en-us/accessibility`, source: `microsoft.com` },
      { title: `AARP Tech & Accessibility`, url: `https://www.aarp.org/home-family/personal-technology/`, source: `aarp.org` },
    ],
  },
  // --- Health & telehealth ---
  {
    keywords: ['telehealth', 'telemedicine', 'mychart', 'patient-portal', 'health-tech'],
    resources: [
      { title: `HealthIT.gov — Patient Portals`, url: `https://www.healthit.gov/topic/patient-engagement/patient-portals`, source: `healthit.gov` },
      { title: `MedlinePlus (NIH)`, url: `https://medlineplus.gov/`, source: `medlineplus.gov` },
    ],
  },
  // --- AI ---
  {
    keywords: ['chatgpt', 'openai'],
    resources: [
      { title: `OpenAI Help Center`, url: `https://help.openai.com/`, source: `help.openai.com` },
    ],
  },
  {
    keywords: ['claude-ai', 'anthropic'],
    resources: [
      { title: `Anthropic Support`, url: `https://support.anthropic.com/`, source: `support.anthropic.com` },
    ],
  },
  {
    keywords: ['gemini', 'google-ai'],
    resources: [
      { title: `Gemini Help`, url: `https://support.google.com/gemini/`, source: `support.google.com` },
    ],
  },
  // --- AARP / senior-focused ---
  {
    keywords: ['senior', 'older-adult', 'aarp', 'jitterbug'],
    resources: [
      { title: `AARP — Personal Technology`, url: `https://www.aarp.org/home-family/personal-technology/`, source: `aarp.org` },
      { title: `AARP — Scams & Fraud`, url: `https://www.aarp.org/money/scams-fraud/`, source: `aarp.org` },
    ],
  },
];

/**
 * Category-level default resources used when no rule matches.
 */
const CATEGORY_DEFAULTS: Record<string, OfficialResource[]> = {
  'safety-guides': [
    { title: `FTC Consumer Advice`, url: `https://consumer.ftc.gov/`, source: `consumer.ftc.gov` },
    { title: `CISA — Cybersecurity Basics`, url: `https://www.cisa.gov/cybersecurity-basics`, source: `cisa.gov` },
  ],
  'online-privacy': [
    { title: `FTC Online Privacy`, url: `https://consumer.ftc.gov/identity-theft-and-online-security`, source: `consumer.ftc.gov` },
    { title: `Privacy Rights Clearinghouse`, url: `https://privacyrights.org/`, source: `privacyrights.org` },
  ],
  'online-banking': [
    { title: `Consumer Financial Protection Bureau`, url: `https://www.consumerfinance.gov/`, source: `consumerfinance.gov` },
    { title: `FDIC Consumer Resources`, url: `https://www.fdic.gov/consumers/`, source: `fdic.gov` },
  ],
  'government-civic': [
    { title: `USA.gov`, url: `https://www.usa.gov/`, source: `usa.gov` },
  ],
  'tech-explained': [
    { title: `How-To Geek (explainers)`, url: `https://www.howtogeek.com/`, source: `howtogeek.com` },
  ],
  'buying-guides': [
    { title: `Consumer Reports`, url: `https://www.consumerreports.org/`, source: `consumerreports.org` },
    { title: `Wirecutter`, url: `https://www.nytimes.com/wirecutter/`, source: `nytimes.com` },
  ],
  'troubleshooting': [
    { title: `How-To Geek`, url: `https://www.howtogeek.com/`, source: `howtogeek.com` },
  ],
  'work-from-home': [
    { title: `OSHA — Home Office Ergonomics`, url: `https://www.osha.gov/etools/computer-workstations`, source: `osha.gov` },
  ],
};

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/**
 * Returns up to 5 authoritative "Learn More" links for a guide.
 */
export function getGuideResources(guide: GuideLike): OfficialResource[] {
  const haystack = [guide.slug, guide.category, ...(guide.tags ?? []).map(normalize)].join(' ');
  for (const rule of RULES) {
    if (rule.keywords.some((kw) => haystack.includes(kw))) {
      return rule.resources.slice(0, 5);
    }
  }
  const fallback = CATEGORY_DEFAULTS[guide.category];
  if (fallback) return fallback.slice(0, 5);
  return [];
}
