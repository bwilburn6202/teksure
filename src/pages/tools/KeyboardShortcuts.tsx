import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Printer, Keyboard, Monitor, Globe, Mail, FileText, Sheet } from 'lucide-react';

interface Shortcut {
  keys: string;
  action: string;
}

interface Section {
  title: string;
  icon: React.ElementType;
  shortcuts: Shortcut[];
}

const sections: Section[] = [
  {
    title: 'Windows Shortcuts',
    icon: Monitor,
    shortcuts: [
      { keys: 'Ctrl + C', action: 'Copy selected item' },
      { keys: 'Ctrl + V', action: 'Paste copied item' },
      { keys: 'Ctrl + X', action: 'Cut selected item' },
      { keys: 'Ctrl + Z', action: 'Undo last action' },
      { keys: 'Ctrl + Y', action: 'Redo last action' },
      { keys: 'Ctrl + A', action: 'Select all items' },
      { keys: 'Alt + Tab', action: 'Switch between open apps' },
      { keys: 'Win + D', action: 'Show/hide desktop' },
      { keys: 'Win + L', action: 'Lock your computer' },
      { keys: 'Ctrl + Shift + Esc', action: 'Open Task Manager' },
      { keys: 'Win + E', action: 'Open File Explorer' },
      { keys: 'Ctrl + P', action: 'Print current page/document' },
    ],
  },
  {
    title: 'Mac Shortcuts',
    icon: Monitor,
    shortcuts: [
      { keys: '⌘ + C', action: 'Copy selected item' },
      { keys: '⌘ + V', action: 'Paste copied item' },
      { keys: '⌘ + X', action: 'Cut selected item' },
      { keys: '⌘ + Z', action: 'Undo last action' },
      { keys: '⌘ + Shift + Z', action: 'Redo last action' },
      { keys: '⌘ + A', action: 'Select all items' },
      { keys: '⌘ + Tab', action: 'Switch between open apps' },
      { keys: '⌘ + Space', action: 'Open Spotlight search' },
      { keys: '⌘ + Q', action: 'Quit the current app' },
      { keys: '⌘ + W', action: 'Close the current window' },
      { keys: '⌘ + Shift + 3', action: 'Take a screenshot' },
      { keys: '⌘ + P', action: 'Print current page/document' },
    ],
  },
  {
    title: 'Browser Shortcuts',
    icon: Globe,
    shortcuts: [
      { keys: 'Ctrl / ⌘ + T', action: 'Open a new tab' },
      { keys: 'Ctrl / ⌘ + W', action: 'Close the current tab' },
      { keys: 'Ctrl / ⌘ + Shift + T', action: 'Reopen last closed tab' },
      { keys: 'Ctrl / ⌘ + L', action: 'Jump to the address bar' },
      { keys: 'Ctrl / ⌘ + R', action: 'Refresh the page' },
      { keys: 'Ctrl / ⌘ + D', action: 'Bookmark the current page' },
      { keys: 'Ctrl / ⌘ + F', action: 'Find text on the page' },
      { keys: 'Ctrl / ⌘ + Shift + N', action: 'Open incognito/private window' },
      { keys: 'Ctrl / ⌘ + H', action: 'Open browsing history' },
      { keys: 'Ctrl / ⌘ + J', action: 'Open downloads' },
    ],
  },
  {
    title: 'Email Shortcuts',
    icon: Mail,
    shortcuts: [
      { keys: 'C', action: 'Compose a new email (Gmail)' },
      { keys: 'R', action: 'Reply to the current email' },
      { keys: 'A', action: 'Reply all' },
      { keys: 'F', action: 'Forward the current email' },
      { keys: 'E', action: 'Archive the email (Gmail)' },
      { keys: '#', action: 'Delete the email (Gmail)' },
      { keys: 'Ctrl / ⌘ + Enter', action: 'Send the email' },
      { keys: 'Ctrl / ⌘ + Shift + C', action: 'Add CC recipients' },
      { keys: 'G then I', action: 'Go to inbox (Gmail)' },
      { keys: '/ or ⌘ + F', action: 'Search your email' },
    ],
  },
  {
    title: 'Word / Docs Shortcuts',
    icon: FileText,
    shortcuts: [
      { keys: 'Ctrl / ⌘ + B', action: 'Bold selected text' },
      { keys: 'Ctrl / ⌘ + I', action: 'Italicise selected text' },
      { keys: 'Ctrl / ⌘ + U', action: 'Underline selected text' },
      { keys: 'Ctrl / ⌘ + S', action: 'Save the document' },
      { keys: 'Ctrl / ⌘ + Shift + V', action: 'Paste without formatting' },
      { keys: 'Ctrl / ⌘ + K', action: 'Insert a hyperlink' },
      { keys: 'Ctrl / ⌘ + E', action: 'Centre-align text' },
      { keys: 'Ctrl / ⌘ + L', action: 'Left-align text' },
      { keys: 'Ctrl / ⌘ + R', action: 'Right-align text' },
      { keys: 'Tab', action: 'Indent the current line' },
    ],
  },
  {
    title: 'Excel / Sheets Shortcuts',
    icon: Sheet,
    shortcuts: [
      { keys: 'Ctrl / ⌘ + C', action: 'Copy selected cells' },
      { keys: 'Ctrl / ⌘ + V', action: 'Paste into selected cells' },
      { keys: 'Ctrl / ⌘ + Z', action: 'Undo last action' },
      { keys: 'Ctrl / ⌘ + Shift + L', action: 'Toggle filters on/off' },
      { keys: 'Ctrl / ⌘ + ;', action: 'Insert today\'s date' },
      { keys: 'Alt + =', action: 'AutoSum selected cells' },
      { keys: 'Ctrl + Space', action: 'Select the entire column' },
      { keys: 'Shift + Space', action: 'Select the entire row' },
      { keys: 'F2', action: 'Edit the current cell' },
      { keys: 'Ctrl / ⌘ + Home', action: 'Jump to cell A1' },
    ],
  },
];

export default function KeyboardShortcuts() {
  const handlePrint = () => window.print();

  return (
    <>
      <SEOHead
        title="Keyboard Shortcuts Cheat Sheet | TekSure"
        description="Essential keyboard shortcuts for Windows, Mac, browsers, email, Word/Docs, and Excel/Sheets — all in one printable page."
        path="/tools/keyboard-shortcuts"
      />
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="container py-16 min-h-[60vh] print:py-4 print:min-h-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 print:mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Keyboard className="h-8 w-8 text-primary print:hidden" />
              <h1 className="text-3xl font-bold print:text-2xl">Keyboard Shortcuts</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl print:text-sm">
              The most useful shortcuts for everyday computing. Bookmark this page or print it out and stick it next to your screen.
            </p>
          </div>
          <Button onClick={handlePrint} className="print:hidden gap-2 shrink-0">
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 print:grid-cols-2 print:gap-4">
          {sections.map((section) => (
            <Card key={section.title} className="print:shadow-none print:border">
              <CardHeader className="pb-2 print:pb-1 print:pt-2">
                <div className="flex items-center gap-2">
                  <section.icon className="h-5 w-5 text-primary print:h-4 print:w-4" />
                  <CardTitle className="text-lg print:text-sm">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="print:pt-0 print:pb-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[45%] print:text-xs print:py-1">Shortcut</TableHead>
                      <TableHead className="print:text-xs print:py-1">What It Does</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.shortcuts.map((s) => (
                      <TableRow key={s.keys}>
                        <TableCell className="font-mono text-sm print:text-xs print:py-0.5">
                          <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs print:border-0 print:bg-transparent print:px-0">
                            {s.keys}
                          </kbd>
                        </TableCell>
                        <TableCell className="print:text-xs print:py-0.5">{s.action}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
