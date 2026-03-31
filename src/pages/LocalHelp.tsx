import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, Phone, Search, Building2, GraduationCap, Users, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const helpTypes = [
  {
    icon: Building2, label: 'Libraries', colour: 'bg-blue-50 border-blue-200 text-blue-700',
    description: 'Most public libraries offer free digital skills help sessions. Staff can help with emails, internet, phones, and basic computing.',
    searchTemplate: 'https://www.google.com/search?q=digital+skills+help+{location}+library',
    tip: 'Many libraries offer one-to-one appointments — ask at the desk.',
  },
  {
    icon: GraduationCap, label: 'Adult Education', colour: 'bg-green-50 border-green-200 text-green-700',
    description: 'Local colleges and adult learning centres offer beginner IT courses, often free or subsidised for over-60s.',
    searchTemplate: 'https://www.google.com/search?q=beginner+IT+course+adult+education+{location}',
    tip: 'Search your local council\'s website for "digital skills" or "adult learning."',
  },
  {
    icon: Users, label: 'Community Groups', colour: 'bg-purple-50 border-purple-200 text-purple-700',
    description: 'Charities like Age UK, Good Things Foundation, and local digital hubs run free tech help sessions.',
    searchTemplate: 'https://www.google.com/search?q=tech+help+seniors+{location}+Age+UK',
    tip: 'Age UK has local branches across the UK — call 0800 678 1602 to find one near you.',
  },
  {
    icon: Wrench, label: 'Repair Cafes', colour: 'bg-orange-50 border-orange-200 text-orange-700',
    description: 'Community-run events where volunteers help fix devices and answer tech questions for free.',
    searchTemplate: 'https://www.repaircafe.org/en/visit/',
    tip: 'Bring your device, any leads, and a description of the problem.',
  },
];

const nationalResources = [
  { name: 'Age UK Digital Support', desc: 'Free one-to-one digital help for older adults — telephone and in-person.', url: 'https://www.ageuk.org.uk/information-advice/work-learning/technology-internet/', phone: '0800 678 1602' },
  { name: 'Good Things Foundation', desc: 'Network of 5,000+ community spaces offering free digital skills help.', url: 'https://www.goodthingsfoundation.org/find-a-network-partner/', phone: null },
  { name: 'Citizens Advice', desc: 'Free advice on all topics including digital access and online services.', url: 'https://www.citizensadvice.org.uk/', phone: '0800 144 8848' },
  { name: 'RNIB Tech Helpline', desc: 'Technology support for people with sight loss, including smartphone setup.', url: 'https://www.rnib.org.uk/living-with-sight-loss/assistive-aids-and-technology/', phone: '0303 123 9999' },
  { name: 'Barclays Digital Eagles', desc: 'Free tech help sessions at many Barclays branches — open to all, not just customers.', url: 'https://home.barclays/who-we-are/our-suppliers-and-partners/digital-eagles/', phone: null },
  { name: 'TekSure Technicians', desc: 'Book a TekSure-vetted local technician for in-home or video support.', url: '/technicians', phone: null },
];

export default function LocalHelp() {
  const [location, setLocation] = useState('');
  const [searched, setSearched] = useState('');

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearched(location.trim());
  }

  function buildUrl(template: string) {
    return template.replace('{location}', encodeURIComponent(searched || 'UK'));
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="border-b border-border py-14">
          <div className="container max-w-2xl text-center">
            <div className="text-4xl mb-3">📍</div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">Find Local Tech Help</h1>
            <p className="text-muted-foreground mb-6">Find trusted tech support near you — libraries, community groups, courses, and one-to-one help.</p>
            <form onSubmit={handleSearch} className="flex gap-2 max-w-sm mx-auto">
              <Input placeholder="Enter your town or postcode…" value={location} onChange={e => setLocation(e.target.value)} className="flex-1 rounded-xl" />
              <Button type="submit" className="bg-primary text-primary-foreground rounded-xl gap-1.5">
                <Search className="h-4 w-4" /> Search
              </Button>
            </form>
            {searched && <p className="text-sm text-muted-foreground mt-3">Showing resources for: <strong>{searched}</strong></p>}
          </div>
        </div>

        <div className="container max-w-5xl py-12">
          <h2 className="text-xl font-bold text-primary mb-6">Types of local help available</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {helpTypes.map((type, i) => (
              <motion.div key={type.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
                <Card className="h-full rounded-2xl border border-border bg-card">
                  <CardContent className="pt-5 pb-4">
                    <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 mb-3 ${type.colour}`}>
                      <type.icon className="h-4 w-4" />
                      <span className="font-semibold text-sm">{type.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{type.description}</p>
                    <p className="text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2 mb-3 italic">💡 {type.tip}</p>
                    <Button variant="outline" size="sm" className="gap-1.5 rounded-lg" asChild>
                      <a href={buildUrl(type.searchTemplate)} target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-3.5 w-3.5" /> Find {type.label} near {searched || 'me'}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-primary mb-6">National organisations that can help</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {nationalResources.map(r => (
              <Card key={r.name} className="rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-5 pb-4">
                  <h3 className="font-semibold mb-1 text-primary">{r.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.phone && (
                      <Badge variant="outline" className="gap-1 text-xs">
                        <Phone className="h-3 w-3" /> {r.phone}
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm" className="h-7 px-2 gap-1 text-xs text-primary rounded-lg" asChild>
                      <a href={r.url.startsWith('http') ? r.url : r.url} target={r.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        Visit website <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
