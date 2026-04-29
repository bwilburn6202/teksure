import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function GroupTextCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Group Text Coach — Mute, Leave, and Reply Right | TekSure" description="Family group texts driving you crazy? Plain-English steps to mute, leave, or reply to one person. iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageSquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Group Text Coach</h1>
          <p className="text-lg text-muted-foreground">Family chat blowing up? Take back control.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 iPhone (Messages app)</h2>
            <div className="space-y-3 text-sm">
              <div><strong>Mute the dings (still see messages later):</strong> Open the group chat → tap the names at the top → scroll down → turn ON <strong>"Hide Alerts"</strong>.</div>
              <div><strong>Leave the group:</strong> Open the chat → tap names at top → scroll down → tap <strong>"Leave this Conversation"</strong>. (Only works if everyone has iMessage. If it's "green bubble" texts with Android people, you can't leave — just turn on Hide Alerts.)</div>
              <div><strong>Reply to one person privately:</strong> Press and hold the message you want to reply to → tap "Reply" — it sends to the whole group. To text one person privately, exit the group and tap their name in your contacts to start a separate text.</div>
              <div><strong>Reply to a specific message:</strong> Press and hold the message → "Reply" — your reply will be tied to that message in the chat.</div>
              <div><strong>Change the group name:</strong> Tap names at top → tap "Change Name and Photo" → type a new name. Everyone sees it.</div>
              <div><strong>Add or remove people:</strong> Tap names at top → "Add Contact" or swipe left on a name → "Remove". Only works in iMessage groups.</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🤖 Android (Google Messages)</h2>
            <div className="space-y-3 text-sm">
              <div><strong>Mute the dings:</strong> Open the group chat → tap the three dots top right → <strong>"Notifications"</strong> → "Silent". Or: Details → "Notifications" → off.</div>
              <div><strong>Leave the group:</strong> Open chat → three dots → "Group details" → "Leave group". (Works for RCS group chats; older "MMS" groups can't be left — just mute.)</div>
              <div><strong>Reply to a specific message:</strong> Press and hold the message → tap the reply arrow icon.</div>
              <div><strong>Change group name:</strong> Three dots → "Group details" → tap the group name to edit.</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group text etiquette (and your sanity)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Reply All" sends to everyone. If you only want to tell one person something, start a one-on-one text instead.</li>
              <li>Photos go to everyone. Think before sending — Aunt Carol probably doesn't need the X-ray of your knee.</li>
              <li>Late at night, a message to a 12-person family chat dings 12 phones. Save personal rambles for morning.</li>
              <li>Mute groups you don't follow closely. You can still scroll through later. Your phone stays quiet.</li>
              <li>If a chat is mostly drama you don't need — leave. It's not rude. Lots of people do it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When iPhone and Android mix</h3>
            <p className="text-sm text-muted-foreground">If your family has both iPhones and Android phones, the group becomes "MMS" — bubbles look green and some features (typing dots, read receipts, leaving the group) won't work. Newer phones use "RCS" which fixes most of this. Or move the family to <strong>WhatsApp</strong> or <strong>Signal</strong> — both are free and work the same on every phone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
