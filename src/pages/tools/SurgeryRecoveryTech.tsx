import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bandage } from 'lucide-react';

export default function SurgeryRecoveryTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Surgery Recovery Tech for Seniors | TekSure" description="Get home + heal well. Plain-English picks for tech that helps post-surgery — pain meds, mobility, food, medication tracking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bandage className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Surgery Recovery Tech</h1>
          <p className="text-lg text-muted-foreground">Heal at home. Use the tools.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up BEFORE surgery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Echo / Google Home</strong> by bedside — hands-free help.</li>
              <li><strong>Echo Show</strong> with video calling — keep family in loop.</li>
              <li><strong>Mom&apos;s Meals or Magic Kitchen</strong> — pre-order 14 days of meals.</li>
              <li><strong>Medical alert button</strong> if living alone.</li>
              <li><strong>Pillpack delivery</strong> set up for new prescriptions.</li>
              <li><strong>Reacher / grabber tool</strong> — picks up dropped items.</li>
              <li><strong>Phone charger</strong> by bed.</li>
              <li><strong>Toilet riser / shower bench</strong> — borrow from PT or Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Voice commands during recovery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Alexa, call my daughter."</li>
              <li>"Alexa, set timer for next pain pill at 2 PM."</li>
              <li>"Hey Google, what time is it?"</li>
              <li>"Alexa, play classical music."</li>
              <li>"Hey Google, turn on bedroom light."</li>
              <li>"Alexa, drop in on living room" — see family camera.</li>
              <li>"Alexa, order more Tylenol."</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Track recovery</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medication app (Medisafe) for new pain meds.</li>
              <li>Apple Health — track walking, heart rate, sleep.</li>
              <li>Apple Watch detects falls — auto-calls 911.</li>
              <li>Patient portal (MyChart) — message surgeon between visits.</li>
              <li>Photo wound daily — show surgeon if concern.</li>
              <li>Physical therapy app for at-home exercises.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free + insurance-covered help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Home health aide</strong> — Medicare often covers post-hospital.</li>
              <li><strong>Physical therapy at home</strong> — Medicare covered with referral.</li>
              <li><strong>Mom&apos;s Meals</strong> — Medicare Advantage often covers 14-30 days post-hospital.</li>
              <li><strong>Medical equipment rental</strong> — Medicare covers walkers, commodes.</li>
              <li><strong>Senior companion volunteer</strong> — through AAA.</li>
              <li><strong>Family medical leave</strong> — 12 weeks unpaid for working family caregivers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t recover alone if avoidable</h3>
            <p className="text-sm text-muted-foreground">First 1-2 weeks are highest risk. Have someone stay overnight if possible. Hire night aide $20-30/hr. Worth it for peace of mind. Hospital re-admission is 30% in seniors recovering alone — half the cost of just having help.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
