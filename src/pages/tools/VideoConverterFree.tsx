import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function VideoConverterFree() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Video Converters That Don&apos;t Have Malware | TekSure" description="Convert old VHS files, MOV to MP4, or shrink video size. Plain-English picks for safe, free video converter apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Video Converters</h1>
          <p className="text-lg text-muted-foreground">No sketchy downloads. Tested safe.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these</h2>
            <p className="text-sm">Many "free video converter" search results are loaded with malware, browser hijackers, and pop-ups. Stick to the trusted apps below.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trusted free converters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>HandBrake</strong> — handbrake.fr. Free, open-source, no ads. Mac/Windows. Best overall.</li>
              <li><strong>VLC Player</strong> — videolan.org. Mostly a video player, but converts under "Convert/Save" menu. Free.</li>
              <li><strong>Apple iMovie</strong> (Mac/iPad/iPhone) — free, built in. Export in any format.</li>
              <li><strong>Microsoft Clipchamp</strong> — built into Windows 11. Free for basic exports.</li>
              <li><strong>CloudConvert.com</strong> — browser-only. No download. 25 free conversions/day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common needs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MOV (iPhone) → MP4 (universal)</strong> — HandBrake or VLC. Most TVs and Windows want MP4.</li>
              <li><strong>Big file → smaller file</strong> — HandBrake "Web Optimized" preset. Cuts size 60-80%.</li>
              <li><strong>VHS digitization output → MP4</strong> — most converters output AVI; HandBrake makes them shareable.</li>
              <li><strong>YouTube upload prep</strong> — already accepts most formats. Just upload directly.</li>
              <li><strong>Email a video</strong> — must be under 25MB. HandBrake "Email" preset.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HandBrake step-by-step</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download from <strong>handbrake.fr</strong> only (no other sites).</li>
              <li>Install. Open.</li>
              <li>Click "Open Source" → pick your video file.</li>
              <li>Pick a preset — "Fast 1080p30" works for most.</li>
              <li>Choose where to save the new file ("Browse").</li>
              <li>Click "Start Encode".</li>
              <li>Wait 1-15 minutes depending on video length.</li>
              <li>Done. New MP4 ready.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For phone-only users</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone Photos app</strong> — share or export. Choose "Most Compatible" for MP4.</li>
              <li><strong>iMovie on iPhone</strong> — drop in video, tap share, pick size.</li>
              <li><strong>Google Photos</strong> — does basic compress on share.</li>
              <li><strong>WhatsApp</strong> — auto-compresses videos when you send. Good enough for grandkids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free service warning</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t upload sensitive videos (medical, legal, personal) to unknown free converter websites — they may keep a copy. Stick to HandBrake (runs on your computer, never uploads) for anything private.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
