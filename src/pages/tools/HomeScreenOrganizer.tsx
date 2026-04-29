import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid } from 'lucide-react';

export default function HomeScreenOrganizer() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Screen Organizer — Folders, Widgets, Less Clutter | TekSure" description="Phone screen full of apps you don't use? Plain-English steps to make folders, add widgets, and clean up your home screen." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LayoutGrid className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Screen Organizer</h1>
          <p className="text-lg text-muted-foreground">Less clutter. Easier to find the apps you actually use.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">📁 Make a folder</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Press and hold any app — wait until everything wiggles.</li>
                  <li>Drag the app on top of another app. They merge into a folder.</li>
                  <li>Tap the folder name and rename it ("Banking", "Health", "Family").</li>
                  <li>Drag more apps into the folder.</li>
                  <li>Tap "Done" (top right) when finished.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">📰 Add a widget</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Long-press the home screen until apps wiggle.</li>
                  <li>Tap the "+" in the top left.</li>
                  <li>Pick a widget — Weather, Calendar, Photos, Battery, Reminders.</li>
                  <li>Pick the size (small, medium, large).</li>
                  <li>Tap "Add Widget" and place it.</li>
                </ol>
                <p className="text-sm mt-2 text-muted-foreground">Useful widgets for seniors: Weather (current temp big and clear), Calendar (today\'s appointments), Battery (so you never get stranded with a dead phone), Photos (random family photo daily).</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">🚫 Hide apps you never use</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Long-press an app → "Remove App" → "Move to App Library".</li>
                  <li>It\'s removed from the home screen but still installed (in App Library).</li>
                  <li>To find it later — swipe right on the home screen all the way → search.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'android' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">📁 Make a folder</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Press and hold an app icon.</li>
                  <li>Drag it on top of another app.</li>
                  <li>A folder appears with both apps.</li>
                  <li>Tap "Edit name" and call it "Health" or whatever.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">📰 Add a widget</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Long-press an empty area of the home screen.</li>
                  <li>Tap "Widgets".</li>
                  <li>Scroll through the list — Weather, Clock, Photos, Calendar.</li>
                  <li>Long-press a widget → drag to your home screen.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">🚫 Remove unused apps</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Long-press app → "Uninstall" (removes completely) or "Remove" (just hides from home screen, still in app drawer).</li>
                  <li>For pre-installed bloatware that won\'t uninstall: Settings → Apps → tap the app → "Disable".</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Suggested layout for seniors</h2>
            <p className="text-sm mb-2">A simple home screen most seniors love:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Bottom dock</strong> (4 apps): Phone, Messages, Camera, Mail.</li>
              <li><strong>Top of page 1:</strong> Weather widget, Calendar widget.</li>
              <li><strong>Page 1 apps:</strong> Maps, Photos, FaceTime/WhatsApp, Settings, Banking app, Pharmacy app, Notes.</li>
              <li><strong>Page 2 (folder per category):</strong> Family, Health, Finance, Shopping, Entertainment.</li>
              <li>Hide everything else in App Library / app drawer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Photos of your family on the lock screen</h3>
            <p className="text-sm text-muted-foreground">Both iPhone and Android let you set the background to a rotating album of family photos. Hugely cheerful — every glance shows a grandkid. iPhone: Settings → Wallpaper → "Photo Shuffle". Android: Wallpapers → "Featured photos".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
