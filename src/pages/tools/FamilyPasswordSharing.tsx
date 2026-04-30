import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function FamilyPasswordSharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Password Sharing — Safely | TekSure" description="Share Netflix, banking, and the wifi password with your spouse and kids — without texting passwords. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Password Sharing</h1>
          <p className="text-lg text-muted-foreground">Stop texting "what&apos;s the Netflix password again".</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stop doing this</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Texting passwords. Sits in chat history forever.</li>
              <li>Emailing passwords. Email gets hacked, all gone.</li>
              <li>Sticky notes on the fridge.</li>
              <li>One shared password used everywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best options (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1Password Families</strong> — $5/mo for 5 people. Shared vaults. Different vaults for "Streaming", "Bills", "Wifi". Best overall.</li>
              <li><strong>Bitwarden Family</strong> — $40/year for 6. Open-source. Cheaper.</li>
              <li><strong>Apple Passwords + Family Sharing</strong> — free for Apple families. Limited to iPhone/Mac users.</li>
              <li><strong>Google Family Group</strong> — free. Works well for Chrome/Android families.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Passwords sharing (FREE)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>iOS 17+ — open Passwords app (or Settings → Passwords).</li>
              <li>Tap "Get Started" under "Shared Group".</li>
              <li>Pick family members (must have iPhone with iOS 17+).</li>
              <li>Pick which passwords to share.</li>
              <li>Family members see + use them, can&apos;t change permission.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">1Password Families setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign up at <strong>1password.com</strong> for Family.</li>
              <li>Email invitations to family members.</li>
              <li>Each person creates their OWN master password.</li>
              <li>Each person has Personal vault (private) + Shared vault (everyone sees).</li>
              <li>Move shared things (streaming, wifi) into Shared vault.</li>
              <li>Keep bank/medical in Personal.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to share vs keep private</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Share</strong> — wifi, streaming (Netflix, Disney+), Costco/Amazon family account, Spotify Family, smart-home apps.</li>
              <li><strong>Don&apos;t share routinely</strong> — individual bank logins, credit cards, work email, medical portal.</li>
              <li><strong>Emergency-share</strong> — most managers let one trusted family member request emergency access. After waiting period, they get everything. Set this up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick win</h3>
            <p className="text-sm text-muted-foreground">Set up family password sharing for ONE thing first — the wifi password. Once that works, expand to streaming. Within a month, the whole family stops texting credentials. Marriage saver.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
