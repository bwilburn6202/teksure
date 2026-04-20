import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Plus, Trash2, Smartphone, Monitor, Tv, Speaker, Printer, Camera, Watch, Gamepad2, Lightbulb, Shield, AlertTriangle } from 'lucide-react';

type DeviceCategory = 'phone' | 'computer' | 'tv' | 'speaker' | 'printer' | 'camera' | 'watch' | 'gaming' | 'smart-home' | 'other';

interface NetworkDevice { id: string; name: string; category: DeviceCategory; secured: boolean; }

const CATEGORY_INFO: Record<DeviceCategory, { label: string; icon: typeof Smartphone; tips: string }> = {
  phone: { label: 'Phone / Tablet', icon: Smartphone, tips: 'Keep your phone updated. Enable Find My Phone. Use a screen lock.' },
  computer: { label: 'Computer / Laptop', icon: Monitor, tips: 'Enable firewall. Keep antivirus active. Use automatic updates.' },
  tv: { label: 'Smart TV', icon: Tv, tips: 'Smart TVs can be hacked. Disable voice listening when not in use. Update firmware regularly.' },
  speaker: { label: 'Smart Speaker', icon: Speaker, tips: 'Alexa and Google Home are always listening for wake words. Review and delete voice recordings periodically.' },
  printer: { label: 'Printer', icon: Printer, tips: 'Network printers can be accessed by anyone on your WiFi. Set a printer password if available.' },
  camera: { label: 'Security Camera', icon: Camera, tips: 'Change the default password immediately. Use a camera from a reputable brand (Ring, Nest, Arlo). Enable 2FA.' },
  watch: { label: 'Smartwatch', icon: Watch, tips: 'Keep paired to your phone. Enable wrist detection and passcode lock.' },
  gaming: { label: 'Gaming Console', icon: Gamepad2, tips: 'Enable parental controls if children use it. Use a strong account password with 2FA.' },
  'smart-home': { label: 'Smart Home Device', icon: Lightbulb, tips: 'Smart plugs, bulbs, and thermostats run on your WiFi. Change default passwords and keep firmware updated.' },
  other: { label: 'Other', icon: Wifi, tips: 'Any device on your WiFi network can potentially see other devices. Secure each one individually.' },
};

export default function HomeNetworkMap() {
  const [devices, setDevices] = useState<NetworkDevice[]>([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState<DeviceCategory>('phone');
  const addDevice = () => { if (!name.trim()) return; setDevices(d => [...d, { id: Date.now().toString(), name: name.trim(), category, secured: false }]); setName(''); };
  const removeDevice = (id: string) => setDevices(d => d.filter(x => x.id !== id));
  const toggleSecured = (id: string) => setDevices(d => d.map(x => x.id === id ? { ...x, secured: !x.secured } : x));
  const securedCount = devices.filter(d => d.secured).length;

  return (
    <>
      <SEOHead title="Home Network Map" description="Map every device on your home WiFi and get security recommendations for each one." path="/tools/home-network-map" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-3xl py-12 px-4">
        <div className="text-center mb-10"><Wifi className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Home Network Map</h1><p className="text-muted-foreground">Map your connected devices and get security tips for each one</p></div>

        <Card className="mb-6"><CardContent className="p-4">
          <h3 className="font-semibold text-sm mb-3">Add a device on your network</h3>
          <div className="flex gap-2 mb-3"><Input placeholder="Device name (e.g. Living Room TV)" value={name} onChange={e => setName(e.target.value)} className="flex-1" onKeyDown={e => e.key === 'Enter' && addDevice()} />
            <select value={category} onChange={e => setCategory(e.target.value as DeviceCategory)} className="rounded-md border bg-background px-3 text-sm">{Object.entries(CATEGORY_INFO).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}</select>
            <Button onClick={addDevice} size="sm" className="gap-1"><Plus className="h-4 w-4" /> Add</Button>
          </div>
        </CardContent></Card>

        {devices.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-4"><span className="text-sm font-medium">{devices.length} device{devices.length !== 1 ? 's' : ''} mapped</span>{devices.length > 0 && <Badge variant={securedCount === devices.length ? 'default' : 'secondary'} className="text-xs">{securedCount}/{devices.length} secured</Badge>}</div>
            <div className="space-y-2">{devices.map(dev => { const info = CATEGORY_INFO[dev.category]; return (
              <Card key={dev.id} className={dev.secured ? 'border-green-500/30' : 'border-amber-500/30'}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <info.icon className={`h-5 w-5 ${dev.secured ? 'text-green-500' : 'text-amber-500'}`} />
                    <div className="flex-1"><h3 className="font-medium text-sm">{dev.name}</h3><p className="text-xs text-muted-foreground">{info.label}</p></div>
                    <Button size="sm" variant={dev.secured ? 'default' : 'outline'} onClick={() => toggleSecured(dev.id)} className="gap-1 text-xs">{dev.secured ? <Shield className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}{dev.secured ? 'Secured' : 'Mark Secure'}</Button>
                    <Button size="sm" variant="ghost" onClick={() => removeDevice(dev.id)}><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
                  </div>
                  {!dev.secured && <div className="rounded-lg bg-amber-500/5 border border-amber-500/10 p-3 text-xs text-muted-foreground flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />{info.tips}</div>}
                </CardContent>
              </Card>
            ); })}</div>
          </>
        )}

        {devices.length === 0 && (
          <div className="text-center py-12 text-muted-foreground"><Wifi className="h-12 w-12 mx-auto mb-3 opacity-30" /><p className="text-sm">Start by adding the devices connected to your home WiFi.</p><p className="text-xs mt-1">Think about: phones, laptops, smart TVs, speakers, cameras, printers, game consoles, and smart home devices.</p></div>
        )}
      </div></main>
      <Footer />
    </>
  );
}
