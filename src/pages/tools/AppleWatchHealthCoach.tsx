import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function AppleWatchHealthCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Health Coach — Heart, EKG, Falls, Medications | TekSure" description="The Apple Watch quietly watches your heart, falls, and meds. Setup walkthrough so you actually use these features — they save lives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch Health Coach</h1>
          <p className="text-lg text-muted-foreground">The quietly best part of an Apple Watch. Set it up properly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">❤️ Heart rate notifications</h2>
            <p className="text-sm mb-2">Watch alerts you if your heart rate is unusually high or low while you\'re resting.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>iPhone: open the <strong>Watch</strong> app → "Heart" → "High Heart Rate".</li>
              <li>Set the threshold (default 120 BPM is fine).</li>
              <li>Same for "Low Heart Rate" (default 40 BPM).</li>
              <li>"Irregular Rhythm Notifications" — turn ON. Detects possible AFib.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded">There are documented cases of the watch catching AFib that no one knew about. Worth setting up even if your heart "feels fine".</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📈 EKG (Series 4 and newer)</h2>
            <p className="text-sm mb-2">Take a 30-second medical-grade EKG anytime — useful when you feel "off".</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>iPhone Watch app → "Heart" → "ECG App" → set up (asks your age).</li>
              <li>Open the ECG app on the watch face.</li>
              <li>Hold a finger on the digital crown (the round button) for 30 seconds.</li>
              <li>Result: "Sinus Rhythm" (good), "AFib", or "Inconclusive".</li>
              <li>Save the PDF to share with your doctor.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🚶 Fall detection (Series 4 and newer)</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>iPhone Watch app → "Emergency SOS" → "Fall Detection" → "Always On".</li>
              <li>If the watch detects a hard fall and you don\'t move for 1 minute, it auto-calls 911 AND your emergency contacts.</li>
              <li>If you fall but you\'re fine — watch shows a button to cancel. Tap it.</li>
            </ol>
            <p className="text-sm mt-2 text-muted-foreground">For older adults living alone, this feature alone makes the watch worthwhile.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">💊 Medication reminders</h2>
            <p className="text-sm mb-2">The watch can remind you to take meds AND track that you actually did.</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>On iPhone: open the <strong>Health</strong> app.</li>
              <li>Tap "Browse" → "Medications".</li>
              <li>Tap "Add Medication" → type the name. App auto-finds it in the database.</li>
              <li>Set time(s) of day and frequency.</li>
              <li>The watch buzzes at the right time. Tap "Logged" or "Skipped".</li>
              <li>Over time, you see how consistently you\'re taking each med.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">😴 Sleep & breathing tracking</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Sleep stages</strong> — watch tracks REM, deep, light sleep nightly.</li>
              <li><strong>Resting heart rate</strong> — long-term trend is meaningful. A rising RHR can be an early sign of illness or stress.</li>
              <li><strong>Sleep apnea detection</strong> (Series 9+) — Watch + iPhone now detects breathing disturbances during sleep that suggest sleep apnea. Worth checking out if you snore loudly.</li>
              <li><strong>Walking steadiness</strong> — tracks balance trends over time. Decline can be an early warning of fall risk.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🩺 Sharing with your doctor</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Health app → tap your photo → "Sharing" → "Share with Your Doctor".</li>
              <li>If your doctor uses MyChart and Apple Health integration, you can share heart rate, blood pressure, and EKG directly.</li>
              <li>Or export as a PDF — Health app → tap a metric → tap "..." → Export.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don\'t skip the setup</h3>
            <p className="text-sm text-muted-foreground">Most Apple Watch owners only use 20% of the health features because the prompts are easy to dismiss during initial setup. Walk through these one by one — even if it takes 30 minutes. If you ever need them, you\'ll be glad they\'re configured.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
