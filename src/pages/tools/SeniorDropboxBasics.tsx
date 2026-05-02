import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FolderOpen } from 'lucide-react';

export default function SeniorDropboxBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dropbox for Seniors — TekSure" description="Dropbox basics for seniors — share files with family, sync across devices." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FolderOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dropbox for Seniors</h1>
          <p className="text-lg text-muted-foreground">Share big files easily.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free 2 GB</h2><p>Sign up at dropbox.com. Free version plenty for occasional use.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Plus 2 TB ($12/month)</h2><p>For lots of photos and videos. Used by many seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why use Dropbox</h2><p>Send big files (200 MB+) that email rejects. Family clicks link, downloads.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auto-sync</h2><p>Save to Dropbox folder. All devices sync automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family share</h2><p>Share folder with family. They add files. You see them.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alternatives</h2><p>WeTransfer free for one-time big sends. Google Drive does the same.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Use Dropbox for sharing large videos. Apple Mail rejects 25 MB+.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
