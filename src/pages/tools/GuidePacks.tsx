import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Printer, FileText, CheckCircle2, Lock } from 'lucide-react';
import { guides } from '@/data/guides';

const packs = [
  {
    id: 'getting-started',
    name: 'Getting Started Pack',
    emoji: '🔰',
    colour: 'from-green-400 to-emerald-500',
    desc: 'Everything a brand-new tech user needs — turning on devices, Wi-Fi, passwords, and email.',
    tags: ['beginner', 'wifi', 'password', 'email', 'startup'],
    guideCount: 8,
    free: true,
    pages: '~24',
  },
  {
    id: 'stay-safe-online',
    name: 'Stay Safe Online Pack',
    emoji: '🛡️',
    colour: 'from-blue-400 to-blue-600',
    desc: 'Scam awareness, strong passwords, two-factor auth, Wi-Fi security, and privacy basics.',
    tags: ['scam', 'password', 'phishing', 'privacy', 'two-factor'],
    guideCount: 7,
    free: true,
    pages: '~21',
  },
  {
    id: 'photos-memories',
    name: 'Photos & Memories Pack',
    emoji: '📸',
    colour: 'from-pink-400 to-rose-500',
    desc: 'Organising photos, iCloud, Google Photos, sharing with family, and backing up.',
    tags: ['photo', 'icloud', 'google photos', 'backup', 'share'],
    guideCount: 6,
    free: true,
    pages: '~18',
  },
  {
    id: 'windows-essentials',
    name: 'Windows Essentials Pack',
    emoji: '🖥️',
    colour: 'from-sky-400 to-cyan-500',
    desc: 'The most important Windows guides — files, updates, security, and shortcuts.',
    tags: ['windows', 'file', 'update', 'shortcut', 'security'],
    guideCount: 10,
    free: false,
    pages: '~30',
  },
  {
    id: 'mac-essentials',
    name: 'Mac Essentials Pack',
    emoji: '🍎',
    colour: 'from-gray-400 to-slate-600',
    desc: 'The most important Mac guides — Finder, shortcuts, iCloud, and maintenance.',
    tags: ['mac', 'finder', 'icloud', 'spotlight', 'macos'],
    guideCount: 10,
    free: false,
    pages: '~30',
  },
  {
    id: 'ai-beginners',
    name: 'AI for Beginners Pack',
    emoji: '🤖',
    colour: 'from-purple-400 to-violet-600',
    desc: 'Plain-English introduction to AI tools — ChatGPT, Gemini, image generators, and practical uses.',
    tags: ['ai', 'chatgpt', 'gemini', 'prompt', 'chatbot'],
    guideCount: 8,
    free: false,
    pages: '~24',
  },
];

function generatePrintContent(packId: string) {
  const pack = packs.find(p => p.id === packId);
  if (!pack) return;
  const matchedGuides = guides.filter(g => pack.tags.some(tag => g.tags.some(t => t.toLowerCase().includes(tag)))).slice(0, pack.guideCount);
  const w = window.open('', '_blank');
  if (!w) return;
  const guideHTML = matchedGuides.map(g => `
    <div class="guide-card">
      <div class="guide-header">
        <span class="guide-emoji">${g.thumbnailEmoji}</span>
        <div>
          <h3>${g.title}</h3>
          <span class="guide-meta">${g.readTime} · ${g.difficulty ?? 'Beginner'}</span>
        </div>
      </div>
      <p>${g.excerpt}</p>
      ${g.steps ? g.steps.slice(0, 4).map((s, i) => `
        <div class="step">
          <span class="step-num">${i + 1}</span>
          <div>
            <strong>${s.title}</strong>
            <p>${s.content}</p>
            ${s.tip ? `<div class="tip">💡 ${s.tip}</div>` : ''}
          </div>
        </div>
      `).join('') : ''}
      ${g.steps && g.steps.length > 4 ? `<p class="more">…and ${g.steps.length - 4} more steps at teksure.com/guides/${g.slug}</p>` : ''}
    </div>
  `).join('');

  w.document.write(`<!DOCTYPE html><html><head><title>${pack.name} — TekSure</title>
<style>
  body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; font-size: 13px; }
  .cover { text-align: center; padding: 60px 20px; border-bottom: 3px solid #1a5f3f; margin-bottom: 30px; page-break-after: always; }
  .cover h1 { font-size: 2rem; color: #1a5f3f; margin: 16px 0 8px; }
  .cover p { color: #666; max-width: 400px; margin: 0 auto; }
  .cover .emoji { font-size: 3rem; }
  .guide-card { margin-bottom: 30px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; page-break-inside: avoid; }
  .guide-header { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px; }
  .guide-emoji { font-size: 2rem; line-height: 1; }
  h3 { margin: 0 0 4px; font-size: 1.1rem; color: #1a5f3f; }
  .guide-meta { font-size: 0.75rem; color: #9ca3af; }
  .step { display: flex; gap: 12px; margin: 10px 0; }
  .step-num { min-width: 24px; height: 24px; background: #1a5f3f; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: bold; flex-shrink: 0; margin-top: 2px; }
  .tip { background: #f0fdf4; border-left: 3px solid #22c55e; padding: 8px 12px; margin-top: 6px; font-size: 0.8rem; color: #166534; border-radius: 0 8px 8px 0; }
  .more { color: #9ca3af; font-style: italic; font-size: 0.8rem; margin-top: 8px; }
  .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 0.75rem; }
  @media print { @page { margin: 1.5cm; } }
</style></head><body>
<div class="cover">
  <div class="emoji">${pack.emoji}</div>
  <h1>${pack.name}</h1>
  <p>${pack.desc}</p>
  <p style="margin-top:16px;color:#9ca3af;font-size:0.8rem;">Printed from TekSure.com · ${new Date().toLocaleDateString('en-GB')}</p>
</div>
${guideHTML}
<div class="footer">TekSure.com — Making technology accessible for everyone · Find the full guides and hundreds more at teksure.com</div>
</body></html>`);
  w.document.close();
  setTimeout(() => w.print(), 500);
}

export default function GuidePacks() {
  const [printing, setPrinting] = useState<string | null>(null);

  function handlePrint(packId: string, free: boolean) {
    if (!free) return;
    setPrinting(packId);
    setTimeout(() => { generatePrintContent(packId); setPrinting(null); }, 100);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-secondary/10 to-background border-b border-border py-14 text-center">
          <div className="text-4xl mb-3">📦</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Printable Guide Packs</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Download themed collections of guides as a single print-ready document — perfect for keeping by the computer or sharing with someone who prefers paper.</p>
        </div>

        <div className="container max-w-5xl py-12">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <Printer className="h-5 w-5 text-blue-600 shrink-0" />
            <p className="text-sm text-blue-800">Free packs open a print-ready window — use your browser's Print function (Ctrl+P / Cmd+P) to save as PDF or print directly.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {packs.map((pack, i) => (
              <div key={pack.id}>
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-5 pb-4 flex flex-col flex-1">
                    <div className={`rounded-xl bg-gradient-to-br ${pack.colour} w-12 h-12 flex items-center justify-center text-2xl mb-3`}>{pack.emoji}</div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-base leading-snug flex-1">{pack.name}</h3>
                      {pack.free ? (
                        <Badge variant="secondary" className="text-xs ml-2 shrink-0">Free</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs ml-2 shrink-0 flex items-center gap-1"><Lock className="h-3 w-3" />Premium</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-1">{pack.desc}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><FileText className="h-3.5 w-3.5" />{pack.guideCount} guides</span>
                      <span>{pack.pages} pages</span>
                    </div>
                    <Button
                      onClick={() => handlePrint(pack.id, pack.free)}
                      disabled={!pack.free || printing === pack.id}
                      size="sm"
                      className={`w-full gap-2 ${pack.free ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'opacity-60 cursor-not-allowed'}`}
                    >
                      {printing === pack.id ? (
                        <><div className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Preparing…</>
                      ) : pack.free ? (
                        <><Download className="h-4 w-4" />Print / Download</>
                      ) : (
                        <><Lock className="h-4 w-4" />Premium Only</>
                      )}
                    </Button>
                    {pack.free && (
                      <p className="text-xs text-muted-foreground text-center mt-2 flex items-center justify-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500" />No sign-in required</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
