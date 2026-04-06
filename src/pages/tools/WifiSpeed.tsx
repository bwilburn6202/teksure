import { Link } from 'react-router-dom';
import { Wifi, ExternalLink, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { SafeLink } from '@/components/SafeLink';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const tips = [
  { emoji: '📡', title: 'Move closer to your router', desc: 'Walls and distance weaken Wi-Fi signals significantly.' },
  { emoji: '🔄', title: 'Restart your router', desc: 'Unplug for 30 seconds, then plug back in. Fixes most slowdowns.' },
  { emoji: '📺', title: 'Reduce active devices', desc: 'Too many devices streaming or downloading can slow everyone down.' },
  { emoji: '🔌', title: 'Use an Ethernet cable', desc: 'A wired connection is always faster and more reliable than Wi-Fi.' },
  { emoji: '⚙️', title: 'Switch to 5GHz band', desc: 'If your router supports it, 5GHz is faster (but shorter range) than 2.4GHz.' },
  { emoji: '🛡️', title: 'Check for interference', desc: 'Microwaves, baby monitors, and other electronics can interfere with Wi-Fi.' },
];

const WifiSpeed = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="WiFi Speed Test — Check Your Internet Speed | TekSure"
        description="Test your internet speed instantly and get tips to improve slow Wi-Fi. No app download needed."
        path="/tools/wifi-speed"
      />
      <Navbar />

      <div className="container pt-4">
        <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Wi-Fi Speed Test' }]} />
      </div>

      <section className="border-b">
        <div className="container py-16 md:py-20">
          <div className="max-w-xl mx-auto text-center">
            <Wifi className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">WiFi Speed Test</h1>
            <p className="text-lg opacity-80">Check your internet speed instantly — no app needed.</p>
          </div>
        </div>
      </section>

      <section className="container py-12 max-w-2xl">
        {/* Speed test embed */}
        <Card className="mb-10 overflow-hidden">
          <CardContent className="pt-6 text-center space-y-4">
            <p className="text-muted-foreground text-sm">
              Click the button below to test your internet speed using Fast.com (powered by Netflix).
            </p>
            <Button asChild size="lg" className="gap-2">
              <SafeLink to="https://fast.com" target="_blank" rel="noopener noreferrer">
                Test Your Speed <ExternalLink className="h-4 w-4" />
              </SafeLink>
            </Button>
            <p className="text-xs text-muted-foreground">Opens in a new tab. Free, no sign-up required.</p>
          </CardContent>
        </Card>

        {/* Tips */}
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Tips for Improving Slow WiFi
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {tips.map((tip, i) => (
            <div
              key={i}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-5">
                  <span className="text-2xl mb-2 block">{tip.emoji}</span>
                  <h3 className="font-semibold text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Card className="border-b overflow-hidden">
          <CardContent className="py-8 text-center">
            <h2 className="text-xl font-bold mb-2">Still having WiFi issues?</h2>
            <p className="opacity-80 mb-4 text-sm">Our verified techs can diagnose and fix your network.</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/signup">Get Expert Help <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default WifiSpeed;
