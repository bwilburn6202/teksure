import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export default function KeyboardShortcutsCheatsheet() {
  const [tab, setTab] = useState<'mac' | 'windows'>('mac');

  const macShortcuts = [
    { keys: '⌘ + C / V / X', what: 'Copy / Paste / Cut' },
    { keys: '⌘ + Z / ⌘ + Shift + Z', what: 'Undo / Redo' },
    { keys: '⌘ + S', what: 'Save' },
    { keys: '⌘ + F', what: 'Find on this page' },
    { keys: '⌘ + Tab', what: 'Switch between open apps' },
    { keys: '⌘ + Q', what: 'Quit current app' },
    { keys: '⌘ + W', what: 'Close current window' },
    { keys: '⌘ + N / T', what: 'New window / new tab' },
    { keys: '⌘ + +/-', what: 'Zoom in / out (browsers)' },
    { keys: '⌘ + Space', what: 'Spotlight search (find anything)' },
    { keys: 'Shift + ⌘ + 4', what: 'Screenshot (drag area)' },
    { keys: 'Shift + ⌘ + 5', what: 'Screenshot menu (with options)' },
    { keys: '⌘ + Up / Down arrow', what: 'Top / bottom of page' },
  ];

  const winShortcuts = [
    { keys: 'Ctrl + C / V / X', what: 'Copy / Paste / Cut' },
    { keys: 'Ctrl + Z / Ctrl + Y', what: 'Undo / Redo' },
    { keys: 'Ctrl + S', what: 'Save' },
    { keys: 'Ctrl + F', what: 'Find on this page' },
    { keys: 'Alt + Tab', what: 'Switch between open apps' },
    { keys: 'Alt + F4', what: 'Close current window' },
    { keys: 'Ctrl + N / T', what: 'New window / new tab' },
    { keys: 'Ctrl + W', what: 'Close current tab' },
    { keys: 'Ctrl + +/-', what: 'Zoom in / out (browsers)' },
    { keys: 'Win key', what: 'Open Start menu' },
    { keys: 'Win + S', what: 'Search the computer' },
    { keys: 'Win + PrtSc', what: 'Screenshot the whole screen' },
    { keys: 'Win + Shift + S', what: 'Screenshot (drag area)' },
    { keys: 'Win + L', what: 'Lock screen' },
    { keys: 'Win + D', what: 'Show desktop' },
    { keys: 'Ctrl + Home / End', what: 'Top / bottom of page' },
  ];

  const shortcuts = tab === 'mac' ? macShortcuts : winShortcuts;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Keyboard Shortcuts Cheat Sheet — Mac & Windows | TekSure" description="The 15 keyboard shortcuts that save the most time. Plain-English guide for Mac and Windows — print and tape to your monitor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Keyboard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Keyboard Shortcuts Cheat Sheet</h1>
          <p className="text-lg text-muted-foreground">Print this. Tape it to your monitor. Save hours.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('mac')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'mac' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🍎 Mac</button>
          <button onClick={() => setTab('windows')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'windows' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🪟 Windows</button>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 pr-4 font-bold">Press these keys</th>
                  <th className="text-left py-2 font-bold">It does this</th>
                </tr>
              </thead>
              <tbody>
                {shortcuts.map((s, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 pr-4"><kbd className="bg-muted px-2 py-1 rounded text-xs">{s.keys}</kbd></td>
                    <td className="py-2">{s.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top 5 most useful</h2>
            <p className="text-sm">If you only learn 5 shortcuts, learn these:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mt-2">
              <li><strong>Copy/Paste</strong> — daily.</li>
              <li><strong>Undo</strong> — saves you from typos.</li>
              <li><strong>Find on page</strong> — Ctrl/⌘+F. Instantly locate any word.</li>
              <li><strong>Switch apps</strong> — Alt+Tab (Win) or ⌘+Tab (Mac).</li>
              <li><strong>Save</strong> — Ctrl/⌘+S. Press it constantly while working.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best way to learn</h3>
            <p className="text-sm text-muted-foreground">Pick ONE shortcut a week. Use it every chance. Once it\'s automatic, learn the next. After 10 weeks, you\'ll be twice as fast at the computer.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
