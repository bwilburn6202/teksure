import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function AppleWatchFacesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Watch Faces for Seniors | TekSure" description="Best watch faces for senior visibility. Customize your Apple Watch." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch Faces</h1>
          <p className="text-lg text-muted-foreground">Senior-friendly setup.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best for seniors</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>X-Large face — biggest digits.</li><li>California — clear analog.</li><li>Modular Large — info-rich.</li><li>Solar Dial — sunny.</li><li>Senior visibility.</li><li>Try a few.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Add complications</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mini-widgets on face.</li><li>Battery, weather, calendar.</li><li>Heart rate, activity.</li><li>Customize per face.</li><li>Tap to launch.</li><li>Senior quick access.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Switch face</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Long-press face.</li><li>Swipe between.</li><li>Tap Edit to customize.</li><li>Add new from gallery.</li><li>Save favorites.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Always On</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Series 5+.</li><li>Time visible always.</li><li>No raise wrist.</li><li>Senior dignified.</li><li>Slight battery use.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Activity tracking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stand, Move, Exercise rings.</li><li>Senior daily goals.</li><li>Heart rate continuous.</li><li>Steps automatic.</li><li>Workout button easy.</li><li>Motivating.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Make text large.</li><li>Bold text on.</li><li>Large complications.</li><li>Brightness max.</li><li>Senior glance friendly.</li><li>iPhone Watch app to customize.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">X-Large face = senior eye relief</h3><p className="text-sm text-muted-foreground">Apple Watch X-Large face shows time in massive digits. Senior glance-friendly. Add complications for weather, battery, heart rate. Always On means time visible 24/7. Most under-customized senior watch feature. Take 5 minutes to set up.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
