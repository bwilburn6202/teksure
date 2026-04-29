import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircleQuestion } from 'lucide-react';

const APPS = [
  { name: 'Snapchat', icon: '👻', what: 'Messaging app. Pictures and short videos disappear after viewing. Streaks count consecutive days messaging. Heavily used by teens.' },
  { name: 'Discord', icon: '🎮', what: '"Group chat" app — text, voice, video. Originally for gamers; now used for school clubs, fan communities, friend groups. Servers can be public or invite-only.' },
  { name: 'TikTok', icon: '🎵', what: 'Short videos endlessly scrolled. Algorithm shows whatever holds attention. Mostly entertainment; some educational; some unsafe content slips through.' },
  { name: 'BeReal', icon: '📷', what: 'Random daily prompt — take a photo NOW. Both selfie and back camera. Trying to be "authentic" — less filtered than Instagram.' },
  { name: 'Roblox', icon: '🟥', what: 'Game platform with millions of user-made games. Players can chat with each other. Big with kids 7-14.' },
  { name: 'Minecraft', icon: '⛏️', what: 'Block-building game. Single-player or multiplayer servers. Mostly creative.' },
  { name: 'Twitch', icon: '🎮', what: 'Live streaming. Kids watch other people play games. Like sports broadcasts but for video games.' },
  { name: 'Reddit', icon: '👽', what: 'Forums for any topic. Not like Facebook — more anonymous.' },
  { name: 'WhatsApp', icon: '💬', what: 'Cross-platform messaging. Big internationally. Family group chats and friend groups.' },
  { name: 'iMessage / Messages', icon: '💬', what: 'Apple\'s built-in texting. iPhone-to-iPhone is iMessage (blue). To Android is regular SMS (green).' },
  { name: 'YouTube Shorts', icon: '▶️', what: 'YouTube\'s answer to TikTok. Same short scroll format.' },
  { name: 'Twitch / Kick', icon: '📡', what: 'Live game streaming.' },
];

export default function AppsGrandkidsUseExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apps Grandkids Use, Explained for Grandparents | TekSure" description="Snapchat, Discord, BeReal, Roblox — what they actually do, in plain English. So you can have real conversations with grandkids about technology." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MessageCircleQuestion className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apps Grandkids Use, Explained</h1>
          <p className="text-lg text-muted-foreground">Speak grandkid. Have real conversations.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">Knowing what these apps actually do — even briefly — earns grandkid respect. They\'re shocked that grandparents know what TikTok is. It opens conversations they\'d otherwise dismiss.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{a.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{a.name}</h3>
                    <p className="text-sm text-muted-foreground">{a.what}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Words grandkids use that confuse</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>"Streak"</strong> — sending a Snapchat photo to someone every day in a row.</li>
              <li><strong>"DM"</strong> — direct message (private message in any app).</li>
              <li><strong>"Slid in DMs"</strong> — sent someone a private message, often flirting.</li>
              <li><strong>"Sus"</strong> — suspicious. From the game Among Us.</li>
              <li><strong>"FOMO"</strong> — Fear Of Missing Out.</li>
              <li><strong>"Lit / Fire"</strong> — really good.</li>
              <li><strong>"Mid"</strong> — mediocre, not great.</li>
              <li><strong>"Goated"</strong> — Greatest Of All Time.</li>
              <li><strong>"Bet"</strong> — okay / agreed.</li>
              <li><strong>"No cap"</strong> — no lie / I\'m being serious.</li>
              <li><strong>"Lowkey / highkey"</strong> — slightly / really.</li>
              <li><strong>"Salty"</strong> — bitter or upset.</li>
              <li><strong>"Cringe"</strong> — embarrassing.</li>
              <li><strong>"GOAT"</strong> — best ever.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Conversation opener that always works</h3>
            <p className="text-sm text-muted-foreground">"Show me a funny TikTok / video / meme you saw this week." They\'ll dive into their phone. You get a tour of their world for 5 minutes. Way more than asking "what apps do you use?".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
