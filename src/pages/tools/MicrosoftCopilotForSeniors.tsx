import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function MicrosoftCopilotForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Microsoft Copilot for Seniors | TekSure" description="Free AI in Windows + Office. Microsoft Copilot senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Microsoft Copilot</h1>
          <p className="text-lg text-muted-foreground">Free AI for Windows.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Microsoft&apos;s AI assistant.</li><li>Built into Windows 11.</li><li>Free version available.</li><li>Microsoft 365 Copilot $30/mo.</li><li>Senior alternative.</li><li>Powered by GPT.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free Copilot</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Copilot.microsoft.com.</li><li>Same as ChatGPT mostly.</li><li>Image generation free.</li><li>Bing search integrated.</li><li>Senior accessible.</li><li>Microsoft account.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">In Word/Excel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Microsoft 365 Copilot $30/mo.</li><li>Write documents for you.</li><li>Summarize email.</li><li>Excel formulas.</li><li>Senior power user.</li><li>Add to existing 365.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Write difficult letters.</li><li>Summarize long docs.</li><li>Spreadsheet help.</li><li>PowerPoint creation.</li><li>Email drafting.</li><li>Senior productivity huge.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free is plenty</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Most seniors use free.</li><li>Office Copilot expensive.</li><li>Free version answers questions.</li><li>Free image creation.</li><li>Free voice chat.</li><li>$30/mo overkill for most.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs ChatGPT, Gemini</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>All free, all good.</li><li>Different ecosystems.</li><li>Try all 3.</li><li>Senior pick favorite.</li><li>Use Bing if Windows.</li><li>Tools, not religion.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Copilot button on Windows 11</h3><p className="text-sm text-muted-foreground">Windows 11 has Copilot button on taskbar. Free AI assistant always available. Ask questions, write emails, summarize. Same power as ChatGPT. Microsoft Office 365 Copilot $30/mo only worth for heavy Office users. Free version covers senior needs.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
