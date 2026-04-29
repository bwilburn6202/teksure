import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function VideoMeetingHostCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Meeting Host Coach — Run Family Zoom Calls | TekSure" description="Hosting a family Zoom or Google Meet? Plain-English steps to schedule, start, manage, and avoid common pitfalls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Meeting Host Coach</h1>
          <p className="text-lg text-muted-foreground">Run a family Zoom call or book club meeting like a pro.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Best free options</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Zoom Free</strong> — up to 100 people, 40-minute limit per meeting (just rejoin if longer).</li>
              <li><strong>Google Meet Free</strong> — up to 100 people, 60-minute limit. Free with Gmail.</li>
              <li><strong>Microsoft Teams Free</strong> — up to 100 people, 60 minutes.</li>
              <li><strong>FaceTime</strong> — up to 32 people, no limit. iPhone/iPad/Mac only.</li>
              <li><strong>WhatsApp</strong> — up to 32 people, no limit. Cross-platform.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Schedule a Zoom meeting</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign in at zoom.us. Click "Schedule a Meeting".</li>
              <li>Topic ("Sunday Family Call"), date, time.</li>
              <li>Optional: Recurring meeting — "Every Sunday at 5 PM".</li>
              <li>Save. Zoom gives you a link.</li>
              <li>Email or text the link to family.</li>
              <li>Two minutes before the meeting, click "Start".</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During the meeting</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Mute people who aren\'t talking</strong> — tap their name → Mute. Stops echo.</li>
              <li><strong>Spotlight a speaker</strong> — pin on screen for everyone.</li>
              <li><strong>Screen share</strong> — show photos, recipes, or an article. Tap "Share screen".</li>
              <li><strong>Chat</strong> — type in the chat box for things you don\'t want to say out loud.</li>
              <li><strong>Record</strong> — Zoom can record the meeting. Useful for grandkids who couldn\'t make it.</li>
              <li><strong>Reactions</strong> — clapping or thumbs-up emoji without interrupting.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Managing chaos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Mute on entry"</strong> — Zoom setting that mutes everyone joining. Saves echo chaos.</li>
              <li><strong>Waiting room</strong> — you approve people one by one. Stops Zoom-bombing.</li>
              <li><strong>Co-host</strong> — promote one tech-savvy family member to help mute and manage.</li>
              <li><strong>"Speaker view" vs "Gallery view"</strong> — speaker view shows whoever\'s talking big. Gallery shows everyone.</li>
              <li><strong>Set a soft "wrap-up" time</strong> 10 min before the 40-min limit. Family hate it when calls cut off mid-conversation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For older relatives joining</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Send the link 5 minutes before, not days ahead — they\'ll lose it.</li>
              <li>Add a phone number they can call IN to (Zoom and Meet both have toll-free dial-in numbers).</li>
              <li>Walk them through joining once on a separate test call.</li>
              <li>Suggest they\'ll need to "Allow" microphone and camera the first time.</li>
              <li>If they freeze, ask them to leave the meeting and rejoin — fixes 80% of issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best practice for family rituals</h3>
            <p className="text-sm text-muted-foreground">Set a recurring weekly call — Sunday 5 PM family check-in. Use the same Zoom link every week. Family knows when to be there. Even 20-30 minutes a week keeps everyone connected.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
