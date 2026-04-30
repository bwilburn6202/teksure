import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function GrandkidInternetSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandkid Internet Safety — What Grandparents Should Know | TekSure" description="Roblox, TikTok, Discord, predators. Plain-English guide for grandparents who want to know what platforms their grandkids use and how to keep them safe." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandkid Internet Safety</h1>
          <p className="text-lg text-muted-foreground">What you need to know about the apps grandkids use.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Your role</h2>
            <p className="text-sm">Parents set rules. You don\'t need to police, but you SHOULD know enough to:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li>Not let a 7-year-old freely use TikTok at your house.</li>
              <li>Recognize signs of online problems.</li>
              <li>Talk to grandkids in a way that earns their trust.</li>
              <li>Talk to your adult children if you see something concerning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major platforms in 2025</h2>
            <div className="space-y-3 text-sm">
              <div><p className="font-bold">Roblox</p><p className="text-muted-foreground">Game platform with millions of mini-games. Big with 7-14 year-olds. Strangers CAN message kids. Inappropriate content sometimes slips through. Set parental controls in account settings.</p></div>
              <div><p className="font-bold">Minecraft</p><p className="text-muted-foreground">Building game. Mostly safe in single-player. Public multiplayer servers can have inappropriate content.</p></div>
              <div><p className="font-bold">Fortnite</p><p className="text-muted-foreground">Competitive shooter. Cartoony but still violent. Voice chat with strangers possible — turn off in settings.</p></div>
              <div><p className="font-bold">TikTok</p><p className="text-muted-foreground">Endless short videos. Algorithm pushes whatever holds attention — can lead to dark or sexual content. Kids under 13 are technically not allowed.</p></div>
              <div><p className="font-bold">Instagram</p><p className="text-muted-foreground">Photos + DMs. Many teens use "finsta" (fake account) to say things they wouldn\'t on main account.</p></div>
              <div><p className="font-bold">Snapchat</p><p className="text-muted-foreground">Messages disappear after viewing. Used heavily by teens for daily communication. Stranger requests are common.</p></div>
              <div><p className="font-bold">Discord</p><p className="text-muted-foreground">Voice + text chat servers. Used for gaming friends — but predators use it too.</p></div>
              <div><p className="font-bold">YouTube</p><p className="text-muted-foreground">Mostly safe with kids using YouTube Kids app. Regular YouTube has unfiltered content.</p></div>
              <div><p className="font-bold">Random video chat (Omegle was shut down 2023)</p><p className="text-muted-foreground">Replacements like Monkey, Chat Roulette, Uhmegle are dangerous. Strangers, often inappropriate. Don\'t allow.</p></div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Talk-to-grandkid tips</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Ask "what\'s your favorite app?" not "do you use X?".</li>
              <li>Ask them to SHOW you. They love to teach.</li>
              <li>Don\'t panic-react. They\'ll just hide it next time.</li>
              <li>Talk about online strangers — anyone who asks for photos, money, or to meet alone is dangerous, no matter how nice they seem.</li>
              <li>Tell them they can ALWAYS come to you about anything they see, no consequences.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Warning signs</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Sudden secrecy with phone — face down, password change, hides screen.</li>
              <li>New friends or "older friend" they only know online.</li>
              <li>Big mood swings around screen time.</li>
              <li>Receiving expensive gifts they can\'t explain.</li>
              <li>Wanting to meet someone "from online" in person.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">If concerned, talk to the parent. Worst case — call <strong>CyberTipline at 1-800-843-5678</strong> (NCMEC).</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For parental controls when watching grandkids</h3>
            <p className="text-sm text-muted-foreground">See our "Childproof for Visits" tool. Set up Guided Access (iPhone) or Kids Mode (Android) on your devices BEFORE the visit. Saves headaches.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
