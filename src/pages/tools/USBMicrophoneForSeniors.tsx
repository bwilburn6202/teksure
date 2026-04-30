import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function USBMicrophoneForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="USB Microphone for Seniors | TekSure" description="Better audio on Zoom + FaceTime. Senior USB mic guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">USB Microphones</h1>
          <p className="text-lg text-muted-foreground">Be heard clearly.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why upgrade</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Laptop mic muffled.</li><li>USB mic = pro audio.</li><li>Senior soft voice helps.</li><li>Family hears clearly.</li><li>Doctor calls clear.</li><li>$50-$100 investment.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best picks</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Blue Yeti — $130.</li><li>Samson Q2U — $70.</li><li>FIFINE K669 — $40.</li><li>Senior pick budget.</li><li>USB plug + play.</li><li>Quality jump huge.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>USB into computer.</li><li>System Settings → Audio.</li><li>Select new mic.</li><li>Test in Zoom.</li><li>Senior 2-min done.</li><li>Free apps work.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Headset mic</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Headset combo.</li><li>$30-$80.</li><li>Mic close to mouth.</li><li>No room echo.</li><li>Senior hands-free hearing aid.</li><li>Affordable upgrade.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Or AirPods</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AirPods Pro $249.</li><li>Built-in mic decent.</li><li>Bluetooth wireless.</li><li>Senior multi-purpose.</li><li>Phone calls + Zoom.</li><li>Hearing aid mode too.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior priority</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Family struggles hear you?</li><li>USB mic immediately.</li><li>$40 transforms calls.</li><li>Avoid &quot;What did you say?&quot;</li><li>Senior dignity preserved.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$40 mic = senior heard</h3><p className="text-sm text-muted-foreground">Many seniors complain &quot;family hears me badly on Zoom.&quot; $40 FIFINE K669 USB mic transforms audio. Plug + play. Family no more &quot;What?&quot; Doctor visits clearer. Best small video call upgrade. Worth more than $100 webcam.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
