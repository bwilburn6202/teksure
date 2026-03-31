import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Tablet, Printer, Wifi, Tv, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides, categoryLabels } from '@/data/guides';

interface DeviceType {
  id: string;
  name: string;
  icon: typeof Monitor;
  bgClass: string;
  guideCount: string;
  keywords: string[];
  suggestedGuides: string[];
}

const devices: DeviceType[] = [
  {
    id: 'desktop', name: 'Windows PC', icon: Monitor, bgClass: 'bg-primary', guideCount: '152 guides',
    keywords: ['windows', 'pc', 'desktop', 'computer', 'taskbar', 'start menu'],
    suggestedGuides: ['turn-pc-on-and-off', 'connect-wifi-windows', 'restart-pc-windows', 'manage-storage-windows', 'use-windows-security-antivirus', 'take-screenshot-windows'],
  },
  {
    id: 'laptop', name: 'Laptop', icon: Laptop, bgClass: 'bg-primary', guideCount: '98 guides',
    keywords: ['laptop', 'windows', 'battery', 'portable', 'brightness'],
    suggestedGuides: ['adjust-brightness-windows', 'connect-wifi-windows', 'manage-storage-windows', 'restart-pc-windows', 'take-screenshot-windows', 'connect-bluetooth-windows'],
  },
  {
    id: 'iphone', name: 'iPhone', icon: Smartphone, bgClass: 'bg-primary', guideCount: '87 guides',
    keywords: ['iphone', 'ios', 'apple', 'icloud', 'siri', 'face id'],
    suggestedGuides: ['use-icloud-mac', 'create-strong-password', 'setup-two-factor-any-account'],
  },
  {
    id: 'android', name: 'Android Phone', icon: Smartphone, bgClass: 'bg-primary', guideCount: '74 guides',
    keywords: ['android', 'phone', 'google', 'samsung'],
    suggestedGuides: ['create-strong-password', 'setup-two-factor-any-account'],
  },
  {
    id: 'tablet', name: 'Tablet / iPad', icon: Tablet, bgClass: 'bg-primary', guideCount: '45 guides',
    keywords: ['tablet', 'ipad', 'surface'],
    suggestedGuides: ['use-icloud-mac', 'create-strong-password'],
  },
  {
    id: 'printer', name: 'Printer', icon: Printer, bgClass: 'bg-primary', guideCount: '38 guides',
    keywords: ['printer', 'print', 'scanner', 'ink', 'spooler'],
    suggestedGuides: [],
  },
  {
    id: 'wifi', name: 'Wi-Fi & Router', icon: Wifi, bgClass: 'bg-primary', guideCount: '52 guides',
    keywords: ['wifi', 'wi-fi', 'router', 'network', 'internet', 'modem', 'ethernet', 'dns'],
    suggestedGuides: ['connect-wifi-windows'],
  },
  {
    id: 'tv', name: 'Smart TV', icon: Tv, bgClass: 'bg-primary', guideCount: '29 guides',
    keywords: ['tv', 'streaming', 'hdmi', 'chromecast', 'firestick', 'roku'],
    suggestedGuides: [],
  },
];

const DeviceHub = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>('desktop');

  const filteredGuides = useMemo(() => {
    if (!selectedDevice) return [];
    const device = devices.find(d => d.id === selectedDevice);
    if (!device) return [];

    // Prioritize suggested guides, then keyword matches
    const suggested = device.suggestedGuides
      .map(slug => guides.find(g => g.slug === slug))
      .filter(Boolean) as typeof guides;

    const keywordMatches = guides.filter(g =>
      !device.suggestedGuides.includes(g.slug) &&
      device.keywords.some(kw =>
        g.title.toLowerCase().includes(kw) ||
        g.excerpt.toLowerCase().includes(kw) ||
        g.tags.some(t => t.toLowerCase().includes(kw)) ||
        (kw === 'windows' && g.category === 'windows-guides') ||
        (kw === 'mac' && g.category === 'mac-guides') ||
        (kw === 'apple' && g.category === 'mac-guides')
      )
    );

    return [...suggested, ...keywordMatches].slice(0, 12);
  }, [selectedDevice]);

  const selectedDeviceData = devices.find(d => d.id === selectedDevice);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Device Help Hub — Find Guides by Device | TekSure"
        description="Select your device — Windows PC, Mac, iPhone, Android, tablet, printer, or router — and find the right tech guides instantly."
        path="/device-hub"
      />
      <Navbar />

      {/* Header */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Device Hub
            </h1>
            <p className="text-lg text-muted-foreground">
              Select your device to find the right guides instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Device Grid */}
      <section className="container py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {devices.map((device, i) => {
            const isSelected = selectedDevice === device.id;
            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setSelectedDevice(isSelected ? null : device.id)}
                  className="w-full text-left"
                >
                  <Card className={`h-full rounded-2xl border border-border bg-card transition-all cursor-pointer hover:border-primary/30 hover:shadow-sm ${
                    isSelected ? 'border-primary bg-primary/5' : ''
                  }`}>
                    <CardContent className="pt-6 pb-5 text-center">
                      <div className={`w-14 h-14 rounded-xl ${device.bgClass} flex items-center justify-center mx-auto mb-3`}>
                        <device.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-sm mb-0.5">{device.name}</h3>
                      <p className="text-xs text-muted-foreground">{device.guideCount}</p>
                    </CardContent>
                  </Card>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Filtered Guides */}
      {selectedDevice && (
        <section className="border-t border-border py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                {selectedDeviceData && (
                  <div className={`w-10 h-10 rounded-lg ${selectedDeviceData.bgClass} flex items-center justify-center`}>
                    <selectedDeviceData.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{selectedDeviceData?.name} Guides</h2>
                  <p className="text-sm text-muted-foreground">{filteredGuides.length} guides found</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link to="/guides">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            {filteredGuides.length === 0 ? (
              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="py-12 text-center">
                  <p className="text-4xl mb-4">📭</p>
                  <p className="font-medium mb-2">No guides yet for this device</p>
                  <p className="text-sm text-muted-foreground">We're adding new guides regularly. Check back soon!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map((guide, i) => (
                  <motion.div
                    key={guide.slug}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link to={`/guides/${guide.slug}`}>
                      <Card className="h-full rounded-2xl border border-border bg-card hover:border-primary/30 transition-all hover:shadow-sm group">
                        <CardContent className="pt-6 pb-5">
                          <div className="text-3xl mb-3">{guide.thumbnailEmoji}</div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-xs rounded-lg">
                              {categoryLabels[guide.category]}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {guide.readTime}
                            </span>
                          </div>
                          <h3 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {guide.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">{guide.excerpt}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {!selectedDevice && (
        <section className="container py-16 text-center">
          <p className="text-muted-foreground mb-6">👆 Select a device above to see relevant guides</p>
          <Button asChild variant="outline" className="rounded-xl">
            <Link to="/guides">Or browse all {guides.length}+ guides <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DeviceHub;
