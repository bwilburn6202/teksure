import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Smartphone, Tablet, Printer, Wifi, Tv, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { guides, categoryLabels, type GuideCategory } from '@/data/guides';

interface DeviceType {
  id: string;
  name: string;
  icon: typeof Monitor;
  bgClass: string;
  guideCount: string;
  keywords: string[];
}

const devices: DeviceType[] = [
  { id: 'desktop', name: 'Desktop PC', icon: Monitor, bgClass: 'bg-secondary', guideCount: '152 guides', keywords: ['windows', 'pc', 'desktop', 'computer', 'taskbar', 'start menu'] },
  { id: 'laptop', name: 'Laptop', icon: Laptop, bgClass: 'bg-primary', guideCount: '98 guides', keywords: ['laptop', 'windows', 'mac', 'battery', 'portable'] },
  { id: 'iphone', name: 'iPhone', icon: Smartphone, bgClass: 'bg-secondary', guideCount: '87 guides', keywords: ['iphone', 'ios', 'apple', 'icloud', 'siri'] },
  { id: 'android', name: 'Android Phone', icon: Smartphone, bgClass: 'bg-primary', guideCount: '74 guides', keywords: ['android', 'phone', 'google', 'samsung'] },
  { id: 'tablet', name: 'Tablet / iPad', icon: Tablet, bgClass: 'bg-secondary', guideCount: '45 guides', keywords: ['tablet', 'ipad', 'surface'] },
  { id: 'printer', name: 'Printer', icon: Printer, bgClass: 'bg-primary', guideCount: '38 guides', keywords: ['printer', 'print', 'scanner', 'ink'] },
  { id: 'wifi', name: 'Wi-Fi / Router', icon: Wifi, bgClass: 'bg-secondary', guideCount: '52 guides', keywords: ['wifi', 'wi-fi', 'router', 'network', 'internet', 'modem', 'ethernet'] },
  { id: 'tv', name: 'Smart TV', icon: Tv, bgClass: 'bg-primary', guideCount: '29 guides', keywords: ['tv', 'streaming', 'hdmi', 'chromecast', 'firestick'] },
];

const DeviceHub = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const filteredGuides = useMemo(() => {
    if (!selectedDevice) return [];
    const device = devices.find(d => d.id === selectedDevice);
    if (!device) return [];
    return guides.filter(g =>
      device.keywords.some(kw =>
        g.title.toLowerCase().includes(kw) ||
        g.excerpt.toLowerCase().includes(kw) ||
        g.tags.some(t => t.toLowerCase().includes(kw)) ||
        (kw === 'windows' && g.category === 'windows-guides') ||
        (kw === 'mac' && g.category === 'mac-guides') ||
        (kw === 'apple' && g.category === 'mac-guides')
      )
    ).slice(0, 12);
  }, [selectedDevice]);

  const selectedDeviceData = devices.find(d => d.id === selectedDevice);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-sm mb-6">
              <BookOpen className="h-4 w-4 text-secondary" />
              <span>Guides organized by device</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Device Hub
            </h1>
            <p className="text-lg opacity-80">
              Select your device to find guides specific to it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Device Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {devices.map((device, i) => {
            const isSelected = selectedDevice === device.id;
            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  onClick={() => setSelectedDevice(isSelected ? null : device.id)}
                  className="w-full text-left"
                >
                  <Card className={`h-full transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1 ${
                    isSelected ? 'ring-2 ring-secondary shadow-lg' : ''
                  }`}>
                    <CardContent className="pt-6 pb-5 text-center">
                      <div className={`w-16 h-16 rounded-2xl ${device.bgClass} flex items-center justify-center mx-auto mb-3`}>
                        <device.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-sm mb-1">{device.name}</h3>
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
        <section className="bg-muted py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                {selectedDeviceData && (
                  <div className={`w-10 h-10 rounded-xl ${selectedDeviceData.bgClass} flex items-center justify-center`}>
                    <selectedDeviceData.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    {selectedDeviceData?.name} Guides
                  </h2>
                  <p className="text-sm text-muted-foreground">{filteredGuides.length} guides found</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link to="/guides">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            {filteredGuides.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-4xl mb-4">📭</p>
                  <p className="font-medium mb-2">No guides yet for this device</p>
                  <p className="text-sm text-muted-foreground">We're adding guides regularly. Check back soon!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredGuides.map((guide, i) => (
                  <motion.div
                    key={guide.slug}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link to={`/guides/${guide.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 group">
                        <CardContent className="pt-6">
                          <div className="text-3xl mb-3">{guide.thumbnailEmoji}</div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {categoryLabels[guide.category]}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                          </div>
                          <h3 className="font-semibold text-sm mb-1 group-hover:text-secondary transition-colors leading-snug line-clamp-2">
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

      {/* CTA */}
      {!selectedDevice && (
        <section className="container py-12 text-center">
          <p className="text-muted-foreground mb-4">👆 Select a device above to see relevant guides</p>
          <Button asChild variant="outline">
            <Link to="/guides">Or browse all {guides.length}+ guides <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DeviceHub;
