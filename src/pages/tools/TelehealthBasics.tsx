import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function TelehealthBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Telehealth Basics — See a Doctor on Your Phone | TekSure" description="How video doctor visits work, what they cost with Medicare, and the best apps for prescription refills, urgent care, and dermatology." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Telehealth Basics</h1>
          <p className="text-lg text-muted-foreground">See a doctor without leaving home.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do on telehealth</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cold, flu, sinus, UTI — get a prescription.</li>
              <li>Skin issues — rash, mole, acne (send a photo).</li>
              <li>Mental health — therapy, anxiety/depression med management.</li>
              <li>Refills, follow-ups for chronic conditions.</li>
              <li>Diabetes management, blood pressure check-ins.</li>
              <li>NOT for: chest pain, broken bones, severe symptoms, anything urgent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Your own doctor&apos;s portal (MyChart, FollowMyHealth)</strong> — best option. Same doctor, video visit. Often free with insurance.</li>
              <li><strong>Teladoc</strong> — biggest. Often included free with employer or Medicare Advantage plans.</li>
              <li><strong>Amwell</strong> — same idea. Visit fee around $79 without insurance.</li>
              <li><strong>MDLIVE</strong> — same idea. Often free through Medicare Advantage.</li>
              <li><strong>Doctor on Demand</strong> — therapy and psychiatry strong.</li>
              <li><strong>K Health</strong> — $40/visit. Strong on chronic care.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medicare Part B covers telehealth as of 2025 — same as in-person visit (~$0-30 copay).</li>
              <li>You must use a doctor enrolled with Medicare.</li>
              <li>Medicare Advantage often INCLUDES Teladoc/MDLIVE for free.</li>
              <li>Prescription drug coverage works the same as in-person.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How a visit works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open the app or website. Pick a doctor or take "next available".</li>
              <li>Wait 5-30 minutes (like a waiting room).</li>
              <li>Video call starts. Doctor asks questions. Listens to symptoms.</li>
              <li>If needed, asks you to point camera at the rash, throat, etc.</li>
              <li>Diagnosis. Prescription sent to your pharmacy electronically.</li>
              <li>Pick up at CVS/Walgreens/Costco usually within an hour.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for a smooth visit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Test the camera/microphone 10 minutes before.</li>
              <li>Sit in good light, near a window.</li>
              <li>Have a list of medications ready.</li>
              <li>Have temperature and blood pressure if relevant.</li>
              <li>Have your pharmacy name and address ready.</li>
              <li>Headphones reduce echo and improve audio.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best use</h3>
            <p className="text-sm text-muted-foreground">Telehealth is fastest for: prescription refills, simple infections, and a same-day urgent question. Saves a 90-minute trip to urgent care. Not a replacement for an annual physical or your primary doctor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
