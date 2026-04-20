import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Scale } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────────

interface SourceEntry {
  name: string;
  url: string;
  displayUrl: string;
  description: string;
}

interface SourceSection {
  icon: string;
  title: string;
  sources: SourceEntry[];
}

// ── Data ───────────────────────────────────────────────────────────────────────

const sections: SourceSection[] = [
  {
    icon: '📚',
    title: 'Tech Support & How-To',
    sources: [
      {
        name: 'Apple Support',
        url: 'https://support.apple.com',
        displayUrl: 'support.apple.com',
        description: 'Official guides for iPhone, iPad, Mac, Apple Watch, and all Apple products.',
      },
      {
        name: 'Google Help Center',
        url: 'https://support.google.com',
        displayUrl: 'support.google.com',
        description: 'Official Android, Gmail, Chrome, and Google product support.',
      },
      {
        name: 'Microsoft Support',
        url: 'https://support.microsoft.com',
        displayUrl: 'support.microsoft.com',
        description: 'Official Windows, Office, Outlook, and Microsoft product guides.',
      },
      {
        name: 'Samsung Support',
        url: 'https://samsung.com/us/support',
        displayUrl: 'samsung.com/us/support',
        description: 'Official Samsung Galaxy phone and device support.',
      },
      {
        name: 'How-To Geek',
        url: 'https://howtogeek.com',
        displayUrl: 'howtogeek.com',
        description: 'Trusted step-by-step technology guides for everyday users.',
      },
      {
        name: 'GCF Global',
        url: 'https://gcfglobal.org',
        displayUrl: 'gcfglobal.org',
        description: 'Free digital literacy and technology education for all skill levels.',
      },
      {
        name: "Tom's Guide",
        url: 'https://tomsguide.com',
        displayUrl: 'tomsguide.com',
        description: 'Trusted consumer tech reviews and how-to guides.',
      },
    ],
  },
  {
    icon: '🛡️',
    title: 'Internet Safety & Cybersecurity',
    sources: [
      {
        name: 'Federal Trade Commission',
        url: 'https://consumer.ftc.gov',
        displayUrl: 'consumer.ftc.gov',
        description: 'Official US government consumer protection and scam alerts.',
      },
      {
        name: 'CISA — Cybersecurity & Infrastructure Security Agency',
        url: 'https://cisa.gov',
        displayUrl: 'cisa.gov',
        description: 'Federal cybersecurity guidance from the US government.',
      },
      {
        name: 'IC3 — Internet Crime Complaint Center',
        url: 'https://ic3.gov',
        displayUrl: 'ic3.gov',
        description: 'FBI cybercrime reporting and public awareness resources.',
      },
      {
        name: 'Have I Been Pwned',
        url: 'https://haveibeenpwned.com',
        displayUrl: 'haveibeenpwned.com',
        description: 'Data breach checking service by security researcher Troy Hunt.',
      },
      {
        name: 'Krebs on Security',
        url: 'https://krebsonsecurity.com',
        displayUrl: 'krebsonsecurity.com',
        description: 'Investigative cybersecurity journalism covering real-world threats.',
      },
      {
        name: 'National Cyber Security Alliance',
        url: 'https://staysafeonline.org',
        displayUrl: 'staysafeonline.org',
        description: 'Cybersecurity education resources for the general public.',
      },
    ],
  },
  {
    icon: '👴',
    title: 'Seniors & Digital Literacy',
    sources: [
      {
        name: 'AARP Technology',
        url: 'https://aarp.org/home-family/personal-technology',
        displayUrl: 'aarp.org/home-family/personal-technology',
        description: 'Technology guides written specifically for adults 50 and older.',
      },
      {
        name: 'Older Adults Technology Services (OATS)',
        url: 'https://oats.org',
        displayUrl: 'oats.org',
        description: 'Digital inclusion programs and resources for older adults.',
      },
      {
        name: 'Senior Planet',
        url: 'https://seniorplanet.org',
        displayUrl: 'seniorplanet.org',
        description: 'Technology education and community resources for older adults.',
      },
      {
        name: 'National Institute on Aging',
        url: 'https://nia.nih.gov',
        displayUrl: 'nia.nih.gov',
        description: 'Health technology information from the National Institutes of Health.',
      },
    ],
  },
  {
    icon: '🏛️',
    title: 'Government & Civic Resources',
    sources: [
      {
        name: 'USA.gov',
        url: 'https://usa.gov',
        displayUrl: 'usa.gov',
        description: 'Official US government services directory and information hub.',
      },
      {
        name: 'Social Security Administration',
        url: 'https://ssa.gov',
        displayUrl: 'ssa.gov',
        description: 'Social Security benefits information and online account services.',
      },
      {
        name: 'Medicare.gov',
        url: 'https://medicare.gov',
        displayUrl: 'medicare.gov',
        description: 'Official Medicare benefits and coverage information.',
      },
      {
        name: 'IRS.gov',
        url: 'https://irs.gov',
        displayUrl: 'irs.gov',
        description: 'Official US tax filing resources, free tools, and forms.',
      },
      {
        name: 'Benefits.gov',
        url: 'https://benefits.gov',
        displayUrl: 'benefits.gov',
        description: 'Federal benefits eligibility information across government programs.',
      },
    ],
  },
  {
    icon: '❤️',
    title: 'Health Technology',
    sources: [
      {
        name: 'HealthIT.gov',
        url: 'https://healthit.gov',
        displayUrl: 'healthit.gov',
        description: 'Health IT information and resources from the US Department of Health and Human Services.',
      },
      {
        name: 'MedlinePlus',
        url: 'https://medlineplus.gov',
        displayUrl: 'medlineplus.gov',
        description: 'Trusted health information from the National Library of Medicine.',
      },
      {
        name: 'Centers for Medicare & Medicaid Services',
        url: 'https://cms.gov',
        displayUrl: 'cms.gov',
        description: 'Medicare and Medicaid program information and resources.',
      },
    ],
  },
  {
    icon: '🎥',
    title: 'Video & Multimedia Tutorials',
    sources: [
      {
        name: 'Apple Support on YouTube',
        url: 'https://youtube.com/@AppleSupport',
        displayUrl: 'youtube.com/@AppleSupport',
        description: 'Official Apple tutorial and how-to videos for all Apple devices.',
      },
      {
        name: 'Google on YouTube',
        url: 'https://youtube.com/@Google',
        displayUrl: 'youtube.com/@Google',
        description: 'Official Google product tutorials and feature walkthroughs.',
      },
      {
        name: 'Microsoft on YouTube',
        url: 'https://youtube.com/@Microsoft',
        displayUrl: 'youtube.com/@Microsoft',
        description: 'Official Microsoft tutorials for Windows, Office, and more.',
      },
      {
        name: 'Samsung US on YouTube',
        url: 'https://youtube.com/@SamsungUS',
        displayUrl: 'youtube.com/@SamsungUS',
        description: 'Official Samsung device setup and feature tutorial videos.',
      },
      {
        name: 'AARP on YouTube',
        url: 'https://youtube.com/@AARPorg',
        displayUrl: 'youtube.com/@AARPorg',
        description: 'Senior-focused technology tutorials and digital literacy videos.',
      },
    ],
  },
  {
    icon: '🔧',
    title: 'Tools & Technical References',
    sources: [
      {
        name: 'Hacker News',
        url: 'https://news.ycombinator.com',
        displayUrl: 'news.ycombinator.com',
        description: 'Tech community news feed — used via the official HN API for our News page.',
      },
      {
        name: 'Bitwarden',
        url: 'https://bitwarden.com',
        displayUrl: 'bitwarden.com',
        description: 'Open-source password manager referenced in our security and password guides.',
      },
      {
        name: 'NIST Password Guidelines',
        url: 'https://pages.nist.gov/800-63-3',
        displayUrl: 'pages.nist.gov/800-63-3',
        description: 'Official federal password security standards (NIST SP 800-63B).',
      },
      {
        name: 'Common Weakness Enumeration (CWE)',
        url: 'https://cwe.mitre.org',
        displayUrl: 'cwe.mitre.org',
        description: 'Security vulnerability reference database maintained by MITRE.',
      },
    ],
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function Sources() {
  const totalSources = sections.reduce((sum, s) => sum + s.sources.length, 0);

  return (
    <>
      <SEOHead
        title="Sources & Credits — TekSure"
        description="TekSure is committed to accuracy and transparency. See the official sources we use to create and verify our guides, tools, and content."
        path="/sources"
      />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-background pb-16">

        {/* ── Page header ─────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-primary/5 to-transparent border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-10 sm:py-14">
            <PageBreadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Sources & Credits' },
              ]}
            />
            <div className="mt-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Sources &amp; Credits
              </h1>
              <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
                TekSure is committed to accuracy and transparency. Here are the official sources
                we use to create and verify our guides, tools, and content.
              </p>
              <div className="mt-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  {totalSources} trusted sources across {sections.length} categories
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sections ─────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 pt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={`section-${section.title.replace(/\s+/g, '-').toLowerCase()}`}>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle
                    id={`section-${section.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="flex items-center gap-2 text-xl"
                  >
                    <span aria-hidden="true" className="text-2xl leading-none">{section.icon}</span>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="divide-y divide-border" role="list">
                    {section.sources.map((source) => (
                      <li key={source.url} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                                aria-label={`${source.name} — opens in a new tab`}
                              >
                                {source.name}
                                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                              </a>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 mb-1 font-mono">
                              {source.displayUrl}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {source.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          ))}

          {/* ── Legal note ──────────────────────────────────────────── */}
          <div className="p-5 rounded-xl bg-muted/40 border border-border">
            <div className="flex items-start gap-3">
              <Scale className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                All external links and references are provided for informational purposes. TekSure
                does not have commercial relationships with the organizations listed above unless
                explicitly stated. Content derived from official sources has been rewritten in plain
                English for accessibility — we always link to the original source for accuracy.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
