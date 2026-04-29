import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function GroupChatTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Group Chat Tips for Seniors | TekSure" description="Family + friend group chats. Plain-English etiquette + senior-friendly tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Group Chat Tips</h1>
          <p className="text-lg text-muted-foreground">Family chats can be wonderful.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group chat platforms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iMessage</strong> — if everyone has iPhone. Built-in.</li>
              <li><strong>WhatsApp</strong> — works iPhone + Android. Free worldwide.</li>
              <li><strong>Facebook Messenger</strong> — for Facebook families.</li>
              <li><strong>Marco Polo</strong> — video clip messages.</li>
              <li>Match what family already uses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group chat etiquette</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reply to ONE person — don&apos;t blast group.</li>
              <li>"Tapback" reactions instead of "Yes ok thanks Bill."</li>
              <li>Mute notifications during sleep.</li>
              <li>Birthday + photos welcome. News debates not.</li>
              <li>If conversation drifts political — change topic OR exit.</li>
              <li>Don&apos;t add people to chat without asking first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manage the noise</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone: Tap chat → "Hide Alerts" — silences notifications.</li>
              <li>Android: Mute notifications per chat.</li>
              <li>Keep checking on YOUR schedule.</li>
              <li>Multiple chats? Star important ones, mute rest.</li>
              <li>Delete chats you don&apos;t engage in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family chat for: photos, scheduling, daily updates.</li>
              <li>Friend chat for: planning meetups, sharing recipes.</li>
              <li>NEVER use group chat for: serious health news, big arguments, gossip.</li>
              <li>If too noisy — leave gracefully + use one-on-one texts.</li>
              <li>Voice memos when typing is slow.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to leave</h3>
            <p className="text-sm text-muted-foreground">If group chat causes more stress than joy — leave it. "Just stepping back from the chat — call me anytime!" No drama needed. Everyone has limits with notifications.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
