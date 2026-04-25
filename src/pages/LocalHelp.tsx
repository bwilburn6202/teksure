import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, Phone, Search, Building2, GraduationCap, Users, Wrench } from 'lucide-react';

const helpTypes = [
  {
    icon: Building2, label: 'Libraries', color: 'bg-blue-50 border-blue-200 text-blue-700',
    description: 'Most public libraries offer free digital literacy classes and one-on-one tech help. Staff can assist with email, internet, phones, and basic computing.',
    searchTemplate: 'https://www.google.com/search?q=free+digital+skills+help+{location}+library',
    tip: 'Many libraries offer one-on-one appointments — ask at the reference desk.',
  },
  {
    icon: GraduationCap, label: 'Adult Education', color: 'bg-green-50 border-green-200 text-green-700',
    description: 'Community colleges and adult learning centers offer beginner computer courses, often free or low-cost for seniors.',
    searchTemplate: 'https://www.google.com/search?q=beginner+computer+course+adult+education+{location}',
    tip: 'Search your local community college website for "digital literacy" or "computer basics."',
  },
  {
    icon: Users, label: 'Community Groups', color: 'bg-purple-50 border-purple-200 text-purple-700',
    description: 'Organizations like AARP, Senior Planet, and local senior centers run free tech help sessions and workshops.',
    searchTemplate: 'https://www.google.com/search?q=tech+help+seniors+{location}+senior+center',
    tip: 'Senior Planet offers a free tech helpline at 888-713-3495 (Mon-Sat, English, Spanish, and Mandarin).',
  },
  {
    icon: Wrench, label: 'Repair Cafes', color: 'bg-orange-50 border-orange-200 text-orange-700',
    description: 'Community-run events where volunteers help fix devices and answer tech questions for free.',
    searchTemplate: 'https://www.repaircafe.org/en/visit/',
    tip: 'Bring your device, any chargers, and a description of the problem.',
  },
];

const nationalResources = [
  { name: 'AARP Tech Support', desc: 'Free technology resources and guides designed for adults 50+.', url: 'https://www.aarp.org/home-family/personal-technology/', phone: '1-888-687-2277' },
  { name: 'Senior Planet', desc: 'Free tech classes, a helpline, and online courses for older adults nationwide.', url: 'https://seniorplanet.org/', phone: '888-713-3495' },
  { name: 'Cyber-Seniors', desc: 'Free one-on-one tech mentoring by trained volunteers — phone and video.', url: 'https://cyberseniors.org/', phone: '844-217-3057' },
  { name: 'GetSetUp', desc: 'Free live interactive classes on technology, health, and more for older adults.', url: 'https://www.getsetup.io/', phone: null },
  { name: 'EveryoneOn', desc: 'Find low-cost internet and free digital literacy resources in your area.', url: 'https://www.everyoneon.org/', phone: null },
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
    return template.replace('{location}', encodeURIComponent(searched || 'USA'));
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Find Local Tech Help — Libraries, Classes & Community Support | TekSure"
        description="Find free local tech help near you — libraries, adult education, community groups, repair cafes, and senior centers offering digital skills support."
        path="/local-help"
      />
      <main className="flex-1">
        <div className="border-b border-border py-14">
          <div className="container max-w-2xl text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">Find Local Tech Help</h1>
            <p className="text-muted-foreground mb-6">Find trusted tech support near you — libraries, community groups, courses, and one-to-one help.</p>
            <form onSubmit={handleSearch} className="flex gap-2 max-w-sm mx-auto">
              <Input placeholder="Enter your city or zip code..." value={location} onChange={e => setLocation(e.target.value)} className="flex-1 rounded-xl" />
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
              <div key={type.label}>
                <Card className="h-full rounded-2xl border border-border bg-card">
                  <CardContent className="pt-5 pb-4">
                    <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 mb-3 ${type.color}`}>
                      <type.icon className="h-4 w-4" />
                      <span className="font-semibold text-sm">{type.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{type.description}</p>
                    <p className="text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2 mb-3 italic">{type.tip}</p>
                    <Button variant="outline" size="sm" className="gap-1.5 rounded-lg" asChild>
                      <a href={buildUrl(type.searchTemplate)} target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-3.5 w-3.5" /> Find {type.label} near {searched || 'me'}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-primary mb-6">National organizations that can help</h2>
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
    </div>
  );
}
