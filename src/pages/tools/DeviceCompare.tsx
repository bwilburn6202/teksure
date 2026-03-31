import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface DeviceData {
  priceRange: string;
  bestFor: string;
  batteryLife: string;
  easeOfUse: string;
  storage: string;
  internetNeeded: string;
  verdict: string;
}

const devices: Record<string, DeviceData> = {
  'iPhone': {
    priceRange: '£699 – £1,599',
    bestFor: 'People who want a simple, reliable smartphone with great cameras',
    batteryLife: 'All-day (10–15 hrs screen time)',
    easeOfUse: '⭐⭐⭐⭐⭐ Very easy',
    storage: '128 GB – 1 TB',
    internetNeeded: 'Yes (Wi-Fi or mobile data)',
    verdict: 'Premium, polished, and beginner-friendly. Best if you already use other Apple devices.',
  },
  'Android Phone': {
    priceRange: '£100 – £1,400',
    bestFor: 'People who want more choice in price, size, and features',
    batteryLife: 'All-day (8–14 hrs screen time)',
    easeOfUse: '⭐⭐⭐⭐ Easy',
    storage: '32 GB – 1 TB',
    internetNeeded: 'Yes (Wi-Fi or mobile data)',
    verdict: 'Huge variety from budget to flagship. Great flexibility and customisation.',
  },
  'iPad': {
    priceRange: '£349 – £1,499',
    bestFor: 'Browsing, reading, video calls, and light creative work',
    batteryLife: '10+ hours',
    easeOfUse: '⭐⭐⭐⭐⭐ Very easy',
    storage: '64 GB – 2 TB',
    internetNeeded: 'Yes (Wi-Fi; some models have cellular)',
    verdict: 'The best tablet experience. Perfect as a first device for seniors or kids.',
  },
  'Windows Laptop': {
    priceRange: '£300 – £2,500',
    bestFor: 'Work, browsing, gaming, and general everyday use',
    batteryLife: '5–12 hours depending on model',
    easeOfUse: '⭐⭐⭐ Moderate',
    storage: '128 GB – 2 TB',
    internetNeeded: 'Recommended but works offline',
    verdict: 'Most versatile option. Runs the widest range of software. Learning curve for beginners.',
  },
  'Mac': {
    priceRange: '£999 – £3,499',
    bestFor: 'Creative professionals, students, and Apple ecosystem users',
    batteryLife: '12–22 hours (Apple Silicon)',
    easeOfUse: '⭐⭐⭐⭐ Easy',
    storage: '256 GB – 8 TB',
    internetNeeded: 'Recommended but works offline',
    verdict: 'Fast, reliable, and long-lasting. Premium price but excellent build quality.',
  },
  'Chromebook': {
    priceRange: '£150 – £600',
    bestFor: 'Browsing, email, video calls — simple everyday tasks',
    batteryLife: '8–12 hours',
    easeOfUse: '⭐⭐⭐⭐⭐ Very easy',
    storage: '32 GB – 128 GB (cloud-focused)',
    internetNeeded: 'Yes — most features need internet',
    verdict: 'Cheapest laptop option. Great for people who mainly use a browser. Limited offline use.',
  },
  'Smart TV': {
    priceRange: '£150 – £2,000+',
    bestFor: 'Streaming Netflix, YouTube, and live TV from the sofa',
    batteryLife: 'N/A — mains powered',
    easeOfUse: '⭐⭐⭐⭐ Easy (with remote)',
    storage: '8 – 32 GB (for apps)',
    internetNeeded: 'Yes (Wi-Fi)',
    verdict: 'No computer skills needed. Just connect to Wi-Fi and start streaming.',
  },
  'Amazon Echo / Alexa': {
    priceRange: '£25 – £250',
    bestFor: 'Voice-controlled music, timers, reminders, smart home control',
    batteryLife: 'N/A — mains powered (most models)',
    easeOfUse: '⭐⭐⭐⭐⭐ Very easy',
    storage: 'Cloud-based',
    internetNeeded: 'Yes (Wi-Fi required)',
    verdict: 'Hands-free and simple. Perfect for people who prefer talking over typing.',
  },
};

const deviceNames = Object.keys(devices);

const comparisonFields: { key: keyof DeviceData; label: string }[] = [
  { key: 'priceRange', label: 'Price Range' },
  { key: 'bestFor', label: 'Best For' },
  { key: 'batteryLife', label: 'Battery Life' },
  { key: 'easeOfUse', label: 'Ease of Use' },
  { key: 'storage', label: 'Storage' },
  { key: 'internetNeeded', label: 'Internet Needed' },
  { key: 'verdict', label: 'Verdict' },
];

export default function DeviceCompare() {
  const [device1, setDevice1] = useState('');
  const [device2, setDevice2] = useState('');

  const d1 = device1 ? devices[device1] : null;
  const d2 = device2 ? devices[device2] : null;

  return (
    <div className="min-h-screen">
      <SEOHead title="Device Comparison Tool | TekSure" description="Compare two devices side by side — price, battery, ease of use, and more." path="/tools/device-compare" />
      <Navbar />

      <section className="border-b">
        <div className="container py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto text-center">
            <ArrowLeftRight className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Device Comparison</h1>
            <p className="text-lg opacity-80">Pick two devices and compare them side by side.</p>
          </motion.div>
        </div>
      </section>

      <section className="container py-12 max-w-3xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/tools">Tools</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Device Comparison</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="text-sm font-medium mb-2 block">Device 1</label>
            <Select value={device1} onValueChange={setDevice1}>
              <SelectTrigger><SelectValue placeholder="Select a device..." /></SelectTrigger>
              <SelectContent>
                {deviceNames.filter((n) => n !== device2).map((n) => (
                  <SelectItem key={n} value={n}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Device 2</label>
            <Select value={device2} onValueChange={setDevice2}>
              <SelectTrigger><SelectValue placeholder="Select a device..." /></SelectTrigger>
              <SelectContent>
                {deviceNames.filter((n) => n !== device1).map((n) => (
                  <SelectItem key={n} value={n}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        {d1 && d2 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[140px]">Feature</TableHead>
                      <TableHead>{device1}</TableHead>
                      <TableHead>{device2}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonFields.map((f) => (
                      <TableRow key={f.key}>
                        <TableCell className="font-medium text-sm">{f.label}</TableCell>
                        <TableCell className="text-sm">{d1[f.key]}</TableCell>
                        <TableCell className="text-sm">{d2[f.key]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <Card>
            <CardContent className="py-16 text-center text-muted-foreground">
              <ArrowLeftRight className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p>Select two devices above to see a side-by-side comparison.</p>
            </CardContent>
          </Card>
        )}
      </section>

      <Footer />
    </div>
  );
}
