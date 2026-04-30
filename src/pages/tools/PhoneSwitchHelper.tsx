import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Repeat } from 'lucide-react';

export default function PhoneSwitchHelper() {
  const [dir, setDir] = useState<'and-to-iph' | 'iph-to-and'>('and-to-iph');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Switching Phones — Move From iPhone to Android (or Back) | TekSure" description="Moving your contacts, photos, texts, and apps to a new phone. Step-by-step for switching between iPhone and Android — without losing anything." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Repeat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Switch Helper</h1>
          <p className="text-lg text-muted-foreground">Don't lose photos, contacts, or texts when you change brands.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setDir('and-to-iph')} className={`flex-1 p-3 rounded-lg border-2 ${dir === 'and-to-iph' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 → 📱 Android to iPhone</button>
          <button onClick={() => setDir('iph-to-and')} className={`flex-1 p-3 rounded-lg border-2 ${dir === 'iph-to-and' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 → 🤖 iPhone to Android</button>
        </div>

        {dir === 'and-to-iph' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Before you begin</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Both phones charged at least 50% (or plugged in).</li>
                  <li>Wi-Fi available — the transfer is large.</li>
                  <li>Allow about an hour. Don't transfer at bedtime.</li>
                  <li>Don't activate the new iPhone yet. Take it out of the box, but follow the steps below to set it up.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Use Apple's "Move to iOS" app — free</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>On your Android, install <strong>Move to iOS</strong> from the Play Store.</li>
                  <li>Turn on the new iPhone. Follow setup until you reach <strong>"Apps & Data"</strong>.</li>
                  <li>Tap <strong>"Move Data from Android"</strong>.</li>
                  <li>iPhone shows a 6 or 10-digit code.</li>
                  <li>Open Move to iOS on Android. Tap Continue → agree to terms → "Find Your Code" → enter the code from the iPhone.</li>
                  <li>Pick what to transfer: Contacts, Messages, Photos, Videos, Calendar, Mail, Free Apps.</li>
                  <li>Wait. Don't touch either phone. 30-90 minutes depending on photo size.</li>
                  <li>When the iPhone says "Transfer Complete" — finish setup, sign in to Apple ID, and you're done.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">After it's done</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Re-buy any paid Android apps</strong> — they don't transfer. iPhone has its own versions.</li>
                  <li><strong>WhatsApp</strong> — newer versions can transfer your chat history during this process. If yours didn't, open WhatsApp on iPhone first; it'll prompt you.</li>
                  <li><strong>Music and audiobooks</strong> — move via the Apple Music app or your purchased account on Spotify/Audible.</li>
                  <li><strong>Don't toss the Android yet.</strong> Keep it for 2 weeks until you're sure everything moved.</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        {dir === 'iph-to-and' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Before you begin</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>VERY important — turn off iMessage on the iPhone first</strong>. Otherwise your texts may keep going to Apple servers and you won't get them on Android. Settings → Messages → iMessage OFF. Also Settings → FaceTime → OFF.</li>
                  <li>If you've already given up the iPhone, go to <a href="https://selfsolve.apple.com/deregister-imessage" target="_blank" rel="noopener noreferrer" className="text-primary underline">selfsolve.apple.com/deregister-imessage</a> and enter your phone number to deregister.</li>
                  <li>Charge both phones. Get on Wi-Fi.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Best path — use a USB cable</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Turn on the new Android. When it asks "Copy data?" — say YES.</li>
                  <li>Choose "From an iPhone" or "iCloud" or "From a Cable".</li>
                  <li>Connect the two phones with the cable that came in the box (or use a Lightning-to-USB-C adapter).</li>
                  <li>Sign in to your Apple ID on the new Android — needed to pull from iCloud.</li>
                  <li>Pick what to copy: contacts, photos, calendar, messages.</li>
                  <li>Wait. 30-90 minutes.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Easier paths if cables don't work</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Photos:</strong> Install Google Photos on the iPhone. Sign in. Let it back up everything. On Android, sign in to the same Google account — photos appear.</li>
                  <li><strong>Contacts:</strong> On iPhone: Settings → Contacts → Accounts → Add Google account → turn on Contacts. iPhone uploads them. New Android with same Google account already has them.</li>
                  <li><strong>Calendar:</strong> Same as contacts — sync with Google Calendar.</li>
                  <li><strong>Texts:</strong> Hard to transfer. Most people leave old texts behind. (Take screenshots of important ones first.)</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">If something doesn't transfer</h3>
            <p className="text-sm text-muted-foreground">Don't panic. Both Apple and Google have free phone support. Apple: 1-800-MY-APPLE. Google Pixel: 1-855-836-3987. They walk you through it patiently.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
