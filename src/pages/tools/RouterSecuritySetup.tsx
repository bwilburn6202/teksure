import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function RouterSecuritySetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Router Security for Seniors | TekSure" description="Lock down your home WiFi router. 5-minute security setup for senior homeowners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Router Security</h1>
          <p className="text-lg text-muted-foreground">Lock down your home WiFi.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Change default passwords</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Default router admin password = unsafe.</li>
              <li>Open browser, type 192.168.1.1.</li>
              <li>Login (default usually admin/admin).</li>
              <li>Change admin password to strong unique.</li>
              <li>Change WiFi password too.</li>
              <li>Save in password manager.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Enable WPA3 encryption</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Latest WiFi security standard.</li>
              <li>In router settings — Security mode.</li>
              <li>Pick WPA3 if available.</li>
              <li>WPA2 if older router.</li>
              <li>NEVER use WEP or no security.</li>
              <li>WPA3 protects from brute-force.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Update firmware</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Router updates patch security holes.</li>
              <li>Check router admin panel.</li>
              <li>Or use ISP&apos;s app to update.</li>
              <li>Set auto-update if available.</li>
              <li>Outdated firmware = security risk.</li>
              <li>Check yearly minimum.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Guest network</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Separate WiFi for visitors.</li>
              <li>They can use internet.</li>
              <li>Can&apos;t access your devices.</li>
              <li>Different password from main.</li>
              <li>Most newer routers have this.</li>
              <li>Enable in admin panel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disable WPS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>WPS button has security weaknesses.</li>
              <li>Turn off in router settings.</li>
              <li>Use WiFi password instead.</li>
              <li>Slightly less convenient, much safer.</li>
              <li>Recommended by security experts.</li>
              <li>Old routers especially vulnerable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If router is 5+ years old</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace it.</li>
              <li>Newer routers more secure.</li>
              <li>Better range too.</li>
              <li>$80–$200 for good home router.</li>
              <li>TP-Link, Asus, Netgear good options.</li>
              <li>Mesh systems for whole-home coverage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Just call ISP for help</h3>
            <p className="text-sm text-muted-foreground">If router admin panels intimidate you, call your internet provider. Comcast, Verizon, AT&amp;T all offer free phone support to help you change passwords and enable security features. Tell them: &quot;I want to change my WiFi password, change admin password, and turn off WPS.&quot; They&apos;ll walk you through it. Or stop by their store.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
