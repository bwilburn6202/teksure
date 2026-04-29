import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function MyChartHelper() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyChart Patient Portal Helper — Sign Up and Use It | TekSure" description="MyChart, FollowMyHealth, athenahealth — patient portals let you see test results, message your doctor, and book appointments online. Plain-English setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardList className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyChart Patient Portal Helper</h1>
          <p className="text-lg text-muted-foreground">See test results, message your doctor, refill meds — from your couch.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What is MyChart?</h2>
            <p className="text-sm mb-2">A free website and app from your doctor's office. Most US hospitals (Kaiser, Mayo, Cleveland Clinic, university hospitals, large local clinics) use MyChart or a similar portal like FollowMyHealth or athenahealth.</p>
            <p className="text-sm">With it, you can see lab results within hours, message your doctor without phone tag, refill prescriptions, schedule appointments, and view your full medical history.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time signup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>At your next doctor's visit, ask the front desk for an "activation code" or "MyChart sign-up letter". They print it for you.</li>
              <li>Or go to <strong>mychart.com</strong> → click "Sign Up Now" → search for your doctor's clinic.</li>
              <li>Enter the activation code, your date of birth, and your last 4 of Social Security to verify it's really you.</li>
              <li>Pick a username and password. Write them down somewhere safe.</li>
              <li>Add your phone number for two-factor codes.</li>
              <li>Install the free <strong>MyChart</strong> app from the App Store or Google Play.</li>
              <li>Sign in with your username and password. You're done.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do once signed in</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Test results</strong> — usually appear within hours of the lab finishing. (Tip: if a number worries you, message your doctor before Googling. Lots of "abnormal" labs are actually normal for your age.)</li>
              <li><strong>Message your doctor</strong> — replies in 1-3 business days. Faster than phone tag.</li>
              <li><strong>Refill prescriptions</strong> — tap the medication, "Refill", pick your pharmacy.</li>
              <li><strong>Schedule visits</strong> — see open slots and book in 60 seconds.</li>
              <li><strong>Video visits</strong> — many doctors do telehealth right inside MyChart.</li>
              <li><strong>Upload your blood pressure or weight</strong> — your doctor sees the trend.</li>
              <li><strong>Family access</strong> — set up "Proxy Access" so an adult child or spouse can help manage your care.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">When NOT to use the message feature</h3>
                <p className="text-sm text-muted-foreground">For chest pain, sudden weakness, fall with a head bump, severe shortness of breath, or any emergency — call <strong>911</strong>. Messages may take a day to be read. Don't wait.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other portals (same idea, different name)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>FollowMyHealth</strong> — used by many clinics. Sign up at followmyhealth.com.</li>
              <li><strong>athenahealth Patient Portal</strong> — your doctor sends an email invite.</li>
              <li><strong>Kaiser Permanente</strong> — kp.org or the Kaiser Permanente app.</li>
              <li><strong>VA Health</strong> — for veterans, use My HealtheVet at myhealth.va.gov.</li>
              <li><strong>Medicare</strong> — medicare.gov has its own portal for billing and benefits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Quick Tip — set up family access</h3>
                <p className="text-sm text-muted-foreground">If your spouse or adult child helps with appointments and meds, ask the front desk about "Proxy Access". You sign one form and they can see your portal too. Saves headaches and keeps everyone informed.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
