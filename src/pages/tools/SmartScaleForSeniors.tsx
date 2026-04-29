import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown } from 'lucide-react';

export default function SmartScaleForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Scale for Seniors | TekSure" description="Smart bathroom scales that track weight trends for seniors. Which one to buy and how to use it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingDown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Scales</h1>
          <p className="text-lg text-muted-foreground">Track weight trends. Not just a number.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is a smart scale?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bathroom scale that connects to your phone.</li>
              <li>Records every weigh-in automatically.</li>
              <li>Shows weight trend over weeks + months.</li>
              <li>No more forgetting yesterday&apos;s number.</li>
              <li>Some measure body fat, muscle, water.</li>
              <li>Syncs to Apple Health, Google Fit, or its own app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why trends matter more than today&apos;s number</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Weight naturally fluctuates 2–5 lbs daily.</li>
              <li>Water, food, time of day all affect it.</li>
              <li>Weekly average is more meaningful.</li>
              <li>Smart scale does this math for you.</li>
              <li>Doctor cares about 3-month trend, not one day.</li>
              <li>Reduces anxiety about single high readings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best options for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Withings Body — $99, syncs Apple Health.</li>
              <li>Eufy Smart Scale P2 — $35, affordable + reliable.</li>
              <li>Fitbit Aria Air — $50, syncs Fitbit app.</li>
              <li>Renpho — $25, very popular budget option.</li>
              <li>All available at Amazon or Target.</li>
              <li>Simple Bluetooth setup — phone guides you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Set up basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download the scale&apos;s companion app.</li>
              <li>Create account — enter age, height, goal.</li>
              <li>Turn on scale Bluetooth — follow pairing steps.</li>
              <li>Step on scale — it sends data to phone.</li>
              <li>View charts in app.</li>
              <li>Scale remembers multiple family members.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Healthy habits with scale</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Weigh same time every day — morning, before eating.</li>
              <li>Same clothing (or none) each time.</li>
              <li>Don&apos;t obsess over daily number.</li>
              <li>Look at weekly + monthly trend instead.</li>
              <li>Share with doctor at checkup.</li>
              <li>Watch for unexplained significant loss — tell doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">No Bluetooth? Simple option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Not everyone wants Bluetooth scale.</li>
              <li>Regular scale + notebook log works fine.</li>
              <li>Write date + weight each morning.</li>
              <li>Or use Notes app on phone — manual entry.</li>
              <li>Google Sheets works for simple tracking too.</li>
              <li>Low tech is fine — consistency matters most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Alert for CHF and kidney patients</h3>
            <p className="text-sm text-muted-foreground">If you have congestive heart failure, kidney disease, or take water pills — daily weighing is medically important, not optional. Sudden weight gain of 2–3 lbs in a day often means fluid retention requiring medication adjustment. Many cardiologists say a smart scale that alerts you to sudden gain is one of the best investments their patients can make.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
