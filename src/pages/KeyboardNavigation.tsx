import { Keyboard, Monitor, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

interface ShortcutItem {
  keys: string[];
  description: string;
}

interface ShortcutSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  shortcuts: ShortcutItem[];
}

const sections: ShortcutSection[] = [
  {
    title: 'General Navigation',
    icon: <Keyboard className="h-6 w-6 text-primary" aria-hidden="true" />,
    description:
      'These keyboard shortcuts work in most web browsers and on most websites. They help you move around a page without using a mouse.',
    shortcuts: [
      { keys: ['Tab'], description: 'Move focus to the next clickable item (link, button, or form field) on the page.' },
      { keys: ['Shift', 'Tab'], description: 'Move focus back to the previous clickable item.' },
      { keys: ['Enter'], description: 'Activate the item that is currently highlighted (same as clicking it).' },
      { keys: ['Escape'], description: 'Close a pop-up window, menu, or dialog box.' },
      { keys: ['Space'], description: 'Scroll down the page, or check/uncheck a checkbox when one is focused.' },
      { keys: ['Arrow Keys'], description: 'Scroll up, down, left, or right on the page, or move between menu options.' },
      { keys: ['Home'], description: 'Jump to the very top of the page.' },
      { keys: ['End'], description: 'Jump to the very bottom of the page.' },
    ],
  },
  {
    title: 'TekSure Shortcuts',
    icon: <Monitor className="h-6 w-6 text-primary" aria-hidden="true" />,
    description:
      'These shortcuts are built into TekSure to help you find information and get around the site faster.',
    shortcuts: [
      {
        keys: ['Ctrl', 'K'],
        description:
          'Open the search box so you can look up guides, tools, or topics. On a Mac, use Cmd + K instead.',
      },
      {
        keys: ['↑', '↓'],
        description: 'When the search box is open, use the up and down arrow keys to move through the list of results.',
      },
      {
        keys: ['Enter'],
        description: 'When a search result is highlighted, press Enter to open it.',
      },
      {
        keys: ['Escape'],
        description: 'Close the search box and return to whatever you were doing before.',
      },
    ],
  },
  {
    title: 'Tips for Screen Readers',
    icon: <Eye className="h-6 w-6 text-primary" aria-hidden="true" />,
    description:
      'A screen reader is software that reads what is on the screen out loud. If you or someone you know uses a screen reader, these tips can help navigate TekSure more easily.',
    shortcuts: [
      {
        keys: ['H'],
        description:
          'Jump to the next heading on the page. This is the fastest way to skim through a page and find the section you need.',
      },
      {
        keys: ['Shift', 'H'],
        description: 'Jump back to the previous heading.',
      },
      {
        keys: ['D'],
        description:
          'Jump to the next landmark region (like the main content area, navigation bar, or footer). Landmarks help you skip large sections of a page quickly.',
      },
      {
        keys: ['K'],
        description: 'Jump to the next link on the page.',
      },
      {
        keys: ['F'],
        description: 'Jump to the next form field, such as a text box, dropdown, or button.',
      },
      {
        keys: ['Insert', 'F7'],
        description:
          'Open a list of all links on the page (in JAWS and NVDA screen readers). This helps you find a specific link without reading the whole page.',
      },
    ],
  },
];

function KeyCombo({ keys }: { keys: string[] }) {
  return (
    <span className="flex flex-wrap items-center gap-1">
      {keys.map((key, i) => (
        <span key={key} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground text-sm">+</span>}
          <kbd className="inline-flex items-center justify-center min-w-[2rem] px-2 py-1 text-sm font-semibold rounded-md border border-border bg-muted text-foreground shadow-sm">
            {key}
          </kbd>
        </span>
      ))}
    </span>
  );
}

export default function KeyboardNavigation() {
  return (
    <>
      <SEOHead
        title="Keyboard Navigation Guide | TekSure"
        description="Learn how to navigate websites and TekSure using only your keyboard. This accessibility guide covers shortcuts, screen reader tips, and navigation basics for all skill levels."
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        <div className="container max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <PageBreadcrumb segments={[{ label: 'Keyboard Navigation' }]} />

          {/* Hero section */}
          <section className="mb-10 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Keyboard className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Keyboard Navigation Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              You do not need a mouse to use a website. This guide shows you how to get around
              TekSure — and the web in general — using only your keyboard. Whether you prefer
              keyboard shortcuts for speed, or you rely on them for accessibility, you will find
              helpful tips here.
            </p>
          </section>

          {/* Quick Tip */}
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 mb-10" role="note">
            <p className="text-sm font-medium text-primary mb-1">Quick Tip</p>
            <p className="text-sm text-muted-foreground">
              When you press the <kbd className="px-1.5 py-0.5 text-xs font-semibold rounded border border-border bg-muted">Tab</kbd> key,
              watch for a colored outline that appears around buttons and links. That outline shows
              you which item is currently selected. Press <kbd className="px-1.5 py-0.5 text-xs font-semibold rounded border border-border bg-muted">Enter</kbd> to
              activate it.
            </p>
          </div>

          {/* Shortcut sections */}
          {sections.map((section) => (
            <section key={section.title} className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                {section.icon}
                <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{section.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.shortcuts.map((shortcut) => (
                  <Card key={shortcut.description} className="border border-border">
                    <CardContent className="flex flex-col gap-2 p-4">
                      <KeyCombo keys={shortcut.keys} />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {shortcut.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          {/* Closing note */}
          <section className="rounded-lg border bg-card p-6 text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">Need More Help?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about navigating TekSure or need assistance with accessibility
              features, our{' '}
              <a href="/get-help" className="text-primary underline hover:text-primary/80">
                Get Help
              </a>{' '}
              page is always available. You can also open TekBot (the chat icon in the bottom-right
              corner) and ask any question in plain language.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
