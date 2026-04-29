import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightLeft } from 'lucide-react';

export default function SkypeReplacement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Skype Shut Down — What to Use Instead | TekSure" description="Microsoft retired Skype. Plain-English picks for the best replacements — Microsoft Teams, Google Meet, FaceTime, WhatsApp, and Zoom." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ArrowRightLeft className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Skype Replacement Coach</h1>
          <p className="text-lg text-muted-foreground">Skype is gone. Here\'s what to use now.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What happened to Skype</h2>
            <p className="text-sm">Microsoft retired Skype in 2025 after over 20 years. They\'re moving everyone to Microsoft Teams. Many people who relied on Skype for international calls or video chats are stuck. Below is what works.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best replacements by use case</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Calls to family abroad → WhatsApp</p>
                <p>Free voice and video over Wi-Fi or cellular. Works between iPhone and Android. The world\'s most popular replacement for Skype.</p>
              </div>
              <div>
                <p className="font-bold">Quick family video chat → FaceTime (if everyone has iPhone) or WhatsApp (mixed)</p>
                <p>FaceTime is built into iPhones and is excellent. WhatsApp is the fallback when not everyone has iPhone.</p>
              </div>
              <div>
                <p className="font-bold">Group meeting (4+ people) → Zoom or Google Meet</p>
                <p>Both free up to 40-60 minutes per meeting. Zoom is the most familiar; Google Meet is built into Gmail.</p>
              </div>
              <div>
                <p className="font-bold">Skype-style "Call any phone number" → Google Voice</p>
                <p>Free US calls. Some international calls cheap. Or buy Skype credit for as long as Microsoft still supports it.</p>
              </div>
              <div>
                <p className="font-bold">Microsoft fans → Microsoft Teams (Free)</p>
                <p>If you used Skype because of Outlook or Office, Teams is Microsoft\'s direct replacement. Same Microsoft account works.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Moving from Skype to a replacement</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick ONE app to replace Skype. Don\'t try to install three at once.</li>
              <li>Tell your contacts. Send a message: "Skype is closing — let\'s use WhatsApp instead, my number\'s the same."</li>
              <li>Most contacts already have one of the alternatives — they\'ll join you.</li>
              <li>Save your Skype contact list before Microsoft removes it. Sign in to skype.com → settings → "Export Contacts".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For paid Skype features (calling phones)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Voice</strong> — free US-to-US calls. Pay-as-you-go international rates.</li>
              <li><strong>WhatsApp</strong> — only calls other WhatsApp users (free). Doesn\'t call regular phone numbers.</li>
              <li><strong>Microsoft Teams (free)</strong> — has international calling minutes you can buy.</li>
              <li><strong>Just use your phone\'s minutes</strong> — many cell plans now include unlimited Mexico, Canada, Caribbean. Check your plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talking to family abroad: the cheap path</h3>
            <p className="text-sm text-muted-foreground">For most seniors, the answer is WhatsApp. It\'s free for any-to-any video and voice calls over Wi-Fi or cellular data, anywhere in the world. Tell whoever is overseas to install WhatsApp on their phone — and you do the same. Then you call each other free, forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
