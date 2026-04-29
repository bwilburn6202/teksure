import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="WhatsApp Coach — The World's Easiest Family App | TekSure" description="Free messaging and video calls between iPhone and Android. Setup, group chats, voice notes, and safety tips for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">WhatsApp Coach</h1>
          <p className="text-lg text-muted-foreground">Free chats and video calls between iPhone and Android. The world\'s favorite app.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why WhatsApp</h2>
            <p className="text-sm">Used by over 2 billion people worldwide. Free messaging, voice calls, and video calls between any phone — iPhone OR Android. Owned by Meta (Facebook). Texts and calls are encrypted (end-to-end).</p>
            <p className="text-sm mt-2">If your family or friends include international relatives, WhatsApp is often the only thing everyone uses.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (5 minutes)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install <strong>WhatsApp</strong> from the App Store or Play Store. Free.</li>
              <li>Open it. Verify with your phone number — they text you a 6-digit code.</li>
              <li>Add your name and (optionally) a photo. People will see this.</li>
              <li>Allow access to Contacts when asked — WhatsApp shows you who from your contacts is already on it.</li>
              <li>Tap a contact name and send a "Hi" — see if it shows two blue checkmarks (means they read it).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Text any contact</strong> — same as Messages, but works between iPhone and Android with no extra cost (even internationally).</li>
              <li><strong>Voice notes</strong> — press and hold the microphone icon, talk, release. Faster than typing for long messages. Family loves these.</li>
              <li><strong>Voice calls</strong> — tap phone icon. Free anywhere in the world over Wi-Fi.</li>
              <li><strong>Video calls</strong> — tap video icon. Up to 32 people in one group video call.</li>
              <li><strong>Photos & videos</strong> — share full-quality photos (better than text messages).</li>
              <li><strong>Status</strong> — like a daily story, disappears after 24 hours. Optional, ignore if not interested.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group chats — the real magic</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>In the chat list, tap the pencil/new chat icon → "New Group".</li>
              <li>Pick contacts. Tap "Next".</li>
              <li>Name the group ("Family", "Bridge Club", "Garden Crew").</li>
              <li>Tap Create.</li>
              <li>Whole family sees every message and photo. Replace the awkward "iMessage with green bubbles" mess.</li>
            </ol>
            <p className="text-sm mt-2">For very chatty groups, mute notifications: tap group name → "Mute". You\'ll still see messages when you open the app, but no buzzes.</p>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Watch for scams</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Number you don\'t recognize messages you</strong> claiming to be a relative whose phone "broke" — scam. Verify by calling the real person\'s normal number.</li>
              <li><strong>"Win a prize" links</strong> — never tap.</li>
              <li><strong>Random WhatsApp video calls from unknown numbers</strong> — don\'t answer.</li>
              <li>Real WhatsApp will NEVER ask you for your verification code. If anyone asks for it, they\'re trying to take over your account.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy settings to check</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Settings → Privacy.</li>
              <li>"Last Seen & Online" — set to "My Contacts" or "Nobody" if you don\'t want others knowing when you\'re online.</li>
              <li>"Profile Photo" — "My Contacts" only.</li>
              <li>"Status" — "My Contacts" only.</li>
              <li>"Read Receipts" — leave on for one-on-one chats; consider off if you feel pressure to reply instantly.</li>
              <li>Settings → Account → Two-Step Verification → ON. Adds a 6-digit PIN extra layer.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for keeping in touch with</h3>
            <p className="text-sm text-muted-foreground">Adult kids in different countries. Grandkids who use Android. Bridge club, golf buddies. International friends. Old college roommates. Anyone you want to call without paying long-distance.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
