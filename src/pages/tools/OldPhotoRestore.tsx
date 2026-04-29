import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

export default function OldPhotoRestore() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Restore Old Photos — Free Apps That Bring Memories Back | TekSure" description="Faded family photos, scratches, missing color — modern AI apps fix them all from your phone. Plain-English guide to the best free options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ImageIcon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Restore Old Photos</h1>
          <p className="text-lg text-muted-foreground">Bring faded family pictures back to life. Free apps. Real results.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What modern apps can do</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Sharpen blurry photos.</li>
              <li>Fix scratches, water spots, and torn corners.</li>
              <li>Add realistic color to black-and-white photos.</li>
              <li>Brighten faded photos.</li>
              <li>Remove people you don't want in the photo (or fix one closed eye).</li>
            </ul>
            <p className="text-sm mt-2">All from a snapshot you take of the original photo with your phone.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Get a clean photo of the photo</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Lay the old photo flat on a table near a window — daylight is best, no flash.</li>
              <li>Hold your phone directly over the photo (not at an angle).</li>
              <li>Take the picture. Or — even better — use the free <strong>"PhotoScan by Google Photos"</strong> app. It does the lining-up automatically and removes glare.</li>
              <li>Make sure the photo on your phone is in focus and you can see all the corners.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Pick a free restoration app</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">Google Photos (free, built in)</p>
                <p className="text-sm text-muted-foreground">Open the photo → tap "Edit" → tap "Tools" → "Photo Unblur" or "Colorize". Works well, no extra app.</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">Remini (free with limits)</p>
                <p className="text-sm text-muted-foreground">Famous for sharpening blurry old photos. Free with a daily limit and a "watch ad" option for more.</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">MyHeritage In Color</p>
                <p className="text-sm text-muted-foreground">Adds color to black-and-white photos. Free for a few photos; paid plan for unlimited.</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">Apple Photos (built in to iPhone/Mac)</p>
                <p className="text-sm text-muted-foreground">Edit → tap the wand. Modern iPhones automatically improve faded photos.</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">Photomyne</p>
                <p className="text-sm text-muted-foreground">Scans multiple old photos at once (great for an album). Then you can colorize and enhance.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — Save and share</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Save BOTH the original and the restored version. AI restoration is impressive but not always 100% accurate to the real moment.</li>
              <li>Back up to Google Photos or iCloud — that way grandkids will see them too.</li>
              <li>Print the restored version. Walgreens, CVS, and Walmart all have $0.30 photo prints. Many offer free same-day pickup if you order from their app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For BIG batches — let the pros do it</h2>
            <p className="text-sm mb-2">Got a shoebox of 500 old photos? Send them out:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Legacybox</strong> — mail in photos, slides, VHS tapes; they digitize everything.</li>
              <li><strong>ScanCafe</strong> — competing service, often cheaper.</li>
              <li><strong>Local options</strong> — Costco, FedEx Office, and many camera stores offer scanning.</li>
            </ul>
            <p className="text-sm mt-2">Look for sales — Black Friday and Mother's Day usually have 40-60% off promotions.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Privacy note</h3>
            <p className="text-sm text-muted-foreground">When you upload a photo to an AI app, the app's company can see it. Don't upload photos with sensitive content (driver's license info, medical records) to free apps. For family photos, it's generally fine — but read the app's privacy policy if you're unsure.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
