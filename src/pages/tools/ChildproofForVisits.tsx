import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function ChildproofForVisits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Childproof Tech for Grandkid Visits — iPad, iPhone, TV | TekSure" description="Grandkids visiting? Plain-English steps to lock down your iPad, iPhone, TV, and Wi-Fi so they can\'t accidentally buy things, see adult content, or rack up subscriptions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Childproof Tech for Grandkid Visits</h1>
          <p className="text-lg text-muted-foreground">No surprise $400 in-app purchases this Thanksgiving.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 iPad / iPhone — Guided Access</h2>
            <p className="text-sm mb-2">Locks the device into ONE app — they can\'t exit to your email or Facebook.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Settings → Accessibility → Guided Access → ON.</li>
              <li>Set a passcode (only you know it).</li>
              <li>Open the app you want them to use (PBS Kids, ABCmouse, a coloring app).</li>
              <li>Triple-click the side button → "Start".</li>
              <li>iPad locks them in. Triple-click + passcode to exit.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 iPad — Screen Time / Restrictions</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Settings → Screen Time → Content & Privacy Restrictions → ON.</li>
              <li>"App Store" → "Don\'t Allow" — no new app installs.</li>
              <li>"In-App Purchases" → Don\'t Allow — stops any purchase.</li>
              <li>"Web Content" → "Limit Adult Websites".</li>
              <li>"Music, Podcasts, News" → set to "Clean" only.</li>
              <li>Set a Screen Time passcode that ONLY you know.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 Android — Kids Mode / Restricted Profile</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Samsung Galaxy</strong> — Settings → Advanced features → Kids Mode (or "Kids Home"). Pre-built kid-friendly UI.</li>
              <li><strong>Other Android</strong> — Settings → Users → Add user → "Restricted profile". Lets you limit which apps appear.</li>
              <li><strong>Google Family Link</strong> — install on the kid\'s device + your phone — lets you see usage and set time limits remotely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📺 TV — protect the streaming subscriptions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Netflix Kids profile</strong> — main account → Manage Profiles → "Kids" toggle. PIN-lock adult profiles.</li>
              <li><strong>Disney+, Hulu, Max</strong> — all have Kids profiles too. Use them.</li>
              <li><strong>Roku PIN</strong> — Settings → Manage Account on roku.com → set a 4-digit PIN required to install ANY app or buy anything.</li>
              <li><strong>Amazon Prime Video</strong> — Settings → Parental Controls → require PIN for any rental or purchase.</li>
              <li><strong>Apple TV</strong> — Settings → Restrictions → require password for purchases, hide explicit content.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📡 Home Wi-Fi — guest network</h2>
            <p className="text-sm mb-2">Don\'t let visitors\' phones connect to the SAME network as your computer and printer.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open your router\'s app or web page (search "[brand] router login").</li>
              <li>Find "Guest network" → enable.</li>
              <li>Name it "GuestWiFi" with a different password.</li>
              <li>Give visitors that password — your main computers stay invisible to their phones.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📚 Best kids\' apps (free or cheap)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>PBS Kids</strong> — completely free. Hundreds of educational shows and games.</li>
              <li><strong>Khan Academy Kids</strong> — free. Math, reading, social skills.</li>
              <li><strong>ABCmouse</strong> — paid, but extensive. 30-day free trial.</li>
              <li><strong>Duolingo</strong> — free. Kids 8+ love it.</li>
              <li><strong>YouTube Kids</strong> — much safer than regular YouTube. Set time limits.</li>
              <li><strong>Endless Alphabet / Endless Reader</strong> — favorite reading apps for younger kids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gift for grandkids who visit often</h3>
            <p className="text-sm text-muted-foreground">A used Amazon Fire HD 8 ($60-90) set up just for them. Pre-load PBS Kids, Khan Academy Kids, and a coloring app. Charge it before they arrive. They have their own device, you don\'t worry about your iPad.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
