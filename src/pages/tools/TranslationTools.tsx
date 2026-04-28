import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Languages, ChevronRight } from 'lucide-react';

type Use = 'travel' | 'menu' | 'live' | 'document';

const USES: { id: Use; label: string }[] = [
  { id: 'travel',   label: 'I am traveling abroad' },
  { id: 'menu',     label: 'A menu / sign / package' },
  { id: 'live',     label: 'A live conversation' },
  { id: 'document', label: 'A whole document or webpage' },
];

const GUIDES: Record<Use, { title: string; tools: { name: string; how: string[] }[] }> = {
  travel: {
    title: 'Translating while traveling',
    tools: [
      {
        name: 'Google Translate (free, iOS + Android)',
        how: [
          'Install Google Translate before you leave.',
          'Tap "Download languages" → download the languages of where you are going for offline use.',
          'On the trip, type or speak — works without internet for downloaded languages.',
          'Use "Conversation" mode to take turns with a local speaker — phone listens to both languages.',
        ],
      },
      {
        name: 'Apple Translate (built-in iPhone)',
        how: [
          'Already on iPhone — purple icon.',
          'Settings → Translate → Downloaded Languages → download Spanish, French, etc.',
          'Tap the microphone in the app, speak, get translated speech back.',
          'Available offline once languages are downloaded.',
        ],
      },
    ],
  },
  menu: {
    title: 'Translating a menu, sign, or label',
    tools: [
      {
        name: 'Google Translate camera',
        how: [
          'Open Google Translate → tap the camera icon.',
          'Point at the menu / sign / package.',
          'Foreign words on screen turn into English in real time.',
          'Works offline if the language is downloaded.',
        ],
      },
      {
        name: 'Apple Camera (iPhone, built-in)',
        how: [
          'Open the Camera app, point at foreign text.',
          'A small icon appears at bottom-right ("Live Text").',
          'Tap it — words highlight. Tap "Translate".',
          'Or in Photos: open any photo with foreign text → tap the Live Text icon.',
        ],
      },
    ],
  },
  live: {
    title: 'A live conversation',
    tools: [
      {
        name: 'Google Translate Conversation mode',
        how: [
          'Open Google Translate → tap "Conversation".',
          'Pick the two languages.',
          'You talk in English; phone speaks Spanish (or whatever) for you. Then the other person talks; phone speaks English back.',
          'Works in 70+ languages.',
        ],
      },
      {
        name: 'iPhone Translate app — Conversation tab',
        how: [
          'Translate app → "Conversation" → pick languages.',
          'Tap microphone, talk, see and hear translation immediately.',
          'Works offline if languages are downloaded.',
        ],
      },
      {
        name: 'Pixel Buds + Live Translate',
        how: [
          'Pixel Buds Pro can translate live conversations into your ear in real time when paired to a Pixel phone.',
          'Cool-tech option if you have it. About $200.',
        ],
      },
    ],
  },
  document: {
    title: 'A whole document or webpage',
    tools: [
      {
        name: 'Google Translate website',
        how: [
          'Go to translate.google.com on a computer.',
          'Paste text, or upload a Word/PDF/PowerPoint file.',
          'Pick languages → translates the whole document keeping formatting.',
        ],
      },
      {
        name: 'Translate any webpage in Chrome',
        how: [
          'Right-click any foreign-language webpage → "Translate to English".',
          'Or click the translate icon at the right of the address bar.',
          'Page swaps to English in seconds. Works on any computer.',
        ],
      },
      {
        name: 'Translate webpages on iPhone Safari',
        how: [
          'Open the foreign page in Safari → tap "AA" in the address bar.',
          '"Translate to English" → page is now in English.',
        ],
      },
    ],
  },
};

export default function TranslationTools() {
  const [use, setUse] = useState<Use>('travel');
  const guide = GUIDES[use];

  return (
    <>
      <SEOHead
        title="Translation Tools Setup"
        description="Translate foreign text, menus, conversations, or whole documents. Free apps built into iPhone and Android. Plain-English setup for travel, daily life, family."
        path="/tools/translation-tools"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Languages className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Translation Tools Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Translate menus, signs, conversations, whole documents — free, on the phone you already have.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Translation Tools' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">What do you need to translate?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {USES.map(o => (
                  <button key={o.id} onClick={() => setUse(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      use === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="font-semibold text-base mb-3">{guide.title}</p>
              <div className="space-y-3">
                {guide.tools.map((t, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border">
                    <p className="font-medium text-sm mb-2">{t.name}</p>
                    <ol className="space-y-1.5">
                      {t.how.map((h, j) => (
                        <li key={j} className="flex gap-2 text-xs">
                          <span className="text-primary font-semibold shrink-0">{j + 1}.</span>
                          <span className="text-muted-foreground">{h}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Translation accuracy in 2026</p>
              <p className="text-xs text-muted-foreground">
                Modern translation apps (Google, Apple, DeepL) are very accurate for everyday phrases — much better than 5 years ago. They still struggle with idioms and humor. For anything important (legal, medical), use a translation service or a bilingual friend rather than relying on an app alone.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/travel-tech-checklist" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Travel Tech Checklist</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pre-trip phone setup.</p>
              </Link>
              <Link to="/tools/dictation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Dictation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Speak instead of type.</p>
              </Link>
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner</p>
                <p className="text-xs text-muted-foreground mt-0.5">Scan + translate paper documents.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: download languages BEFORE you travel. Cell data is expensive abroad and offline works perfectly once installed.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
