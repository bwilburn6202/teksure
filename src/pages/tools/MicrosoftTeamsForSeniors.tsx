import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function MicrosoftTeamsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Microsoft Teams for Seniors | TekSure" description="Teams basics for seniors. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Microsoft Teams</h1>
          <p className="text-lg text-muted-foreground">Video calls + chat. Free option.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Teams?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free for personal use.</li>
              <li>Video + audio + chat.</li>
              <li>Up to 100 people.</li>
              <li>Used by many businesses.</li>
              <li>Doctor offices use it.</li>
              <li>Volunteer groups.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install Teams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download from teams.microsoft.com.</li>
              <li>Or App Store / Google Play.</li>
              <li>Sign in with Microsoft account.</li>
              <li>Or create free one.</li>
              <li>Test camera + mic.</li>
              <li>Adjust volume.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Join a meeting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click link in email/text.</li>
              <li>Or open Teams &gt; &quot;Join a meeting&quot;.</li>
              <li>Type meeting ID.</li>
              <li>Test camera + mic in waiting room.</li>
              <li>Click &quot;Join&quot;.</li>
              <li>Wait for host to admit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During meeting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bottom toolbar: mute, video, share.</li>
              <li>Mute when not speaking.</li>
              <li>Raise hand button.</li>
              <li>Chat panel — type messages.</li>
              <li>Reactions emoji.</li>
              <li>Leave button bottom-right.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior comforts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Background blur — privacy.</li>
              <li>Live captions for hearing.</li>
              <li>Make text larger.</li>
              <li>Spotlight a speaker.</li>
              <li>Pin participant.</li>
              <li>Together mode (fun view).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Teams vs Zoom</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Both excellent.</li>
              <li>Teams — Microsoft account.</li>
              <li>Zoom — separate account.</li>
              <li>Teams free up to 100 ppl.</li>
              <li>Zoom free 40 min limit.</li>
              <li>Doctor / business uses Teams more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test before important call</h3>
            <p className="text-sm text-muted-foreground">First time? Schedule test with family. 5 minutes verifies all working. Better than embarrassed at real meeting. Volume, camera, microphone test. Good lighting matters. Sit facing window — natural light. Headphones reduce echo. Doctor visits typical — practice first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
