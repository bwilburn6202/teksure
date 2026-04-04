import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  MapPin, ExternalLink, Phone, Search, Building2, GraduationCap,
  Users, Wrench, ArrowRight, Heart, Smartphone, Apple, Shield,
  BookOpen, Laptop, HandHelping, CheckCircle2,
} from 'lucide-react';

const helpTypes = [
  {
    icon: Building2,
    label: 'Public Libraries',
    emoji: '📚',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    description: 'Most public libraries offer free digital literacy classes, one-on-one tech help sessions, and open computer labs. Library staff can help with email, internet basics, phones, printing, and more.',
    whatTheyHelp: 'Email setup, internet basics, phone questions, printing, e-books, video calls',
    cost: 'Free',
    searchTemplate: 'https://www.google.com/search?q=public+library+free+tech+classes+{location}',
    tip: 'Many libraries offer one-on-one appointments with tech helpers — ask at the reference desk or call ahead to schedule.',
  },
  {
    icon: Users,
    label: 'Senior Centers & Community Centers',
    emoji: '🏛️',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
    description: 'Local senior centers and community centers frequently host technology workshops, computer classes, and drop-in tech help sessions tailored for older adults.',
    whatTheyHelp: 'Smartphone basics, social media, video calling family, online safety, tablet help',
    cost: 'Free',
    searchTemplate: 'https://www.google.com/search?q=senior+center+technology+classes+{location}',
    tip: 'Call your local senior center and ask about their technology program. Many run weekly drop-in sessions where you can bring any device and get help.',
  },
  {
    icon: Heart,
    label: 'AARP TEK Programs',
    emoji: '❤️',
    color: 'bg-red-50 border-red-200 text-red-700',
    description: 'AARP TEK (Technology Education Knowledge) workshops are held across the country at libraries, community centers, and AARP offices. They cover tablets, smartphones, and staying safe online.',
    whatTheyHelp: 'Tablets, smartphones, online safety, social media, video calls, health apps',
    cost: 'Free for AARP members (membership is $16/year)',
    searchTemplate: 'https://www.google.com/search?q=AARP+TEK+technology+workshop+{location}',
    locatorUrl: 'https://local.aarp.org/',
    tip: 'AARP TEK workshops are hands-on and designed for beginners. You can borrow a tablet during the class if you do not have one.',
  },
  {
    icon: Shield,
    label: 'Best Buy Geek Squad',
    emoji: '🛡️',
    color: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    description: 'Best Buy stores offer free in-store consultations and tech support through their Geek Squad service. Walk in with your device and talk to a technician about your issue.',
    whatTheyHelp: 'Device setup, troubleshooting, data transfer, virus removal, product recommendations',
    cost: 'Free consultations in store; repairs and advanced help are paid',
    searchTemplate: 'https://www.google.com/search?q=Best+Buy+Geek+Squad+{location}',
    locatorUrl: 'https://www.bestbuy.com/site/store-locator',
    tip: 'Walk in and ask for a free consultation first. The staff will tell you upfront what is free and what would cost money before doing any work.',
  },
  {
    icon: Apple,
    label: 'Apple Store (Genius Bar & Today at Apple)',
    emoji: '🍎',
    color: 'bg-gray-50 border-gray-200 text-gray-700',
    description: 'If you use an iPhone, iPad, or Mac, Apple Stores offer free Genius Bar appointments for troubleshooting and "Today at Apple" classes that teach you how to use your device.',
    whatTheyHelp: 'iPhone, iPad, Mac troubleshooting, device setup, Apple ID help, learning classes',
    cost: 'Free (Genius Bar appointments and Today at Apple classes)',
    searchTemplate: 'https://www.google.com/search?q=Apple+Store+{location}',
    locatorUrl: 'https://www.apple.com/retail/',
    tip: 'Book your Genius Bar appointment online at apple.com/retail before visiting — walk-ins sometimes have long waits. "Today at Apple" sessions are free and do not require an appointment.',
  },
  {
    icon: Smartphone,
    label: 'Phone Carrier Stores (T-Mobile, Verizon, AT&T)',
    emoji: '📱',
    color: 'bg-pink-50 border-pink-200 text-pink-700',
    description: 'Your phone carrier\'s store can help with phone setup, transferring data from an old phone, connecting to Wi-Fi, setting up voicemail, and basic phone questions.',
    whatTheyHelp: 'Phone setup, data transfer, voicemail, Wi-Fi, account questions, new device orientation',
    cost: 'Free for customers of that carrier',
    searchTemplate: 'https://www.google.com/search?q=phone+carrier+store+T-Mobile+Verizon+ATT+{location}',
    tip: 'Bring your account PIN or ID when visiting. If the store is busy, ask if they offer appointments — many T-Mobile and Verizon stores let you book a time online.',
  },
  {
    icon: GraduationCap,
    label: 'Adult Education & Community College Classes',
    emoji: '🎓',
    color: 'bg-green-50 border-green-200 text-green-700',
    description: 'Community colleges and adult education centers offer beginner-friendly computer courses that cover everything from mouse basics to email, word processing, and internet safety.',
    whatTheyHelp: 'Computer basics, typing, email, word processing, internet safety, online banking',
    cost: 'Free to low-cost (many offer senior discounts or fee waivers)',
    searchTemplate: 'https://www.google.com/search?q=adult+education+computer+class+beginners+{location}',
    tip: 'Search your local community college website for "digital literacy" or "computer basics." Many programs let seniors audit classes for free.',
  },
  {
    icon: HandHelping,
    label: 'Volunteer Tech Help (Cyber Seniors & Senior Planet)',
    emoji: '🤝',
    color: 'bg-teal-50 border-teal-200 text-teal-700',
    description: 'Organizations like Cyber Seniors and Senior Planet connect older adults with trained volunteers who provide free, patient, one-on-one tech mentoring — by phone, video, or in person.',
    whatTheyHelp: 'Any tech question — smartphones, computers, tablets, apps, video calling, online safety',
    cost: 'Free',
    searchTemplate: 'https://cyberseniors.org/',
    locatorUrl: 'https://seniorplanet.org/locations/',
    tip: 'Cyber Seniors matches you with a personal tech mentor who will work with you at your own pace. Call 844-217-3057 to get started.',
  },
  {
    icon: Laptop,
    label: 'Goodwill Digital Career Accelerator',
    emoji: '💼',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    description: 'Many Goodwill locations run free digital skills programs that teach computer basics, internet skills, and how to use common software. Open to all adults, not limited to job seekers.',
    whatTheyHelp: 'Computer basics, internet skills, email, Microsoft Office, online safety',
    cost: 'Free',
    searchTemplate: 'https://www.google.com/search?q=Goodwill+digital+skills+program+{location}',
    locatorUrl: 'https://www.goodwill.org/locator/',
    tip: 'Even though the program name says "Career," these classes are open to anyone who wants to build digital skills — including retirees.',
  },
  {
    icon: Wrench,
    label: 'Repair Cafes',
    emoji: '🔧',
    color: 'bg-orange-50 border-orange-200 text-orange-700',
    description: 'Repair Cafes are free community events where skilled volunteers help fix broken devices — laptops, tablets, phones, and other electronics. They also answer tech questions while they work.',
    whatTheyHelp: 'Device repair, troubleshooting hardware problems, extending the life of your devices',
    cost: 'Free (donations welcome)',
    searchTemplate: 'https://www.repaircafe.org/en/visit/',
    locatorUrl: 'https://www.repaircafe.org/en/visit/',
    tip: 'Bring your device, its charger, and a written description of the problem. Repair Cafes often fill up, so arrive early.',
  },
];

const nationalHelplines = [
  {
    name: 'AARP',
    phone: '1-888-OUR-AARP (1-888-687-2277)',
    url: 'https://www.aarp.org/home-family/personal-technology/',
    description: 'Free technology resources, guides, and a helpline for adults 50 and older. AARP members get access to additional tech support tools.',
  },
  {
    name: 'Cyber Seniors',
    phone: '1-844-217-3057',
    url: 'https://cyberseniors.org/',
    description: 'Free one-on-one tech mentoring from trained volunteers. Call to be matched with a mentor who will help at your pace — by phone or video.',
  },
  {
    name: 'Senior Planet',
    phone: '1-888-713-3495',
    url: 'https://seniorplanet.org/',
    description: 'Free online and in-person technology classes for older adults. Their helpline is available Monday through Saturday in English, Spanish, and Mandarin.',
  },
  {
    name: 'TechBoomers',
    phone: null,
    url: 'https://techboomers.com/',
    description: 'A free educational website with written and video tutorials on popular apps, websites, and devices — all explained in plain language.',
  },
  {
    name: 'EveryoneOn',
    phone: null,
    url: 'https://www.everyoneon.org/',
    description: 'Helps you find low-cost internet service and free digital literacy resources in your area. Great if cost is a barrier.',
  },
  {
    name: 'GetSetUp',
    phone: null,
    url: 'https://www.getsetup.io/',
    description: 'Free live interactive classes on technology, health, and more — taught by older adults, for older adults.',
  },
];

const visitPreparationSteps = [
  {
    emoji: '📱',
    title: 'Bring your device and charger',
    description: 'Always bring the device you need help with, along with its charging cable. If the device runs out of battery during your visit, the helper will need the charger.',
  },
  {
    emoji: '📝',
    title: 'Write down your questions beforehand',
    description: 'Before you go, jot down what you need help with. It is normal to forget things in the moment, so having a written list makes sure you cover everything.',
  },
  {
    emoji: '🔑',
    title: 'Bring any account passwords you might need',
    description: 'If your question involves email, apps, or accounts, bring the usernames and passwords. Write them on paper and keep them in your pocket — do not share them with anyone you do not trust.',
  },
  {
    emoji: '🔍',
    title: 'Know your device model',
    description: 'Helpers will often ask what device you have. On an iPhone, go to Settings, then General, then About — your model name is listed there. On Android, go to Settings, then About Phone. On a Windows computer, press the Windows key and type "About your PC."',
  },
  {
    emoji: '⏰',
    title: 'Give yourself plenty of time',
    description: 'Tech questions can take a while to work through. Do not rush — allow at least 30 to 60 minutes so your helper can walk through solutions with you thoroughly.',
  },
  {
    emoji: '🗣️',
    title: 'Ask questions — there are no silly ones',
    description: 'If something does not make sense, say so. A good tech helper will be happy to explain things differently. You are there to learn, and every question is a good one.',
  },
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
        title="Find Local Tech Help Near You — Free & Paid Options | TekSure"
        description="Find trusted in-person tech help near you — libraries, senior centers, Apple Stores, phone carrier stores, and free volunteer programs. Designed for seniors and non-technical users."
        path="/local-help"
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero / Search */}
        <div className="border-b border-border py-14">
          <div className="container max-w-2xl text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">
              Find Local Tech Help
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              You do not have to figure out technology alone. There are people near you who are ready to help — many of them for free.
            </p>
            <p className="text-muted-foreground mb-6">
              Enter your city or zip code below to find in-person tech support near you.
            </p>
            <form onSubmit={handleSearch} className="flex gap-2 max-w-sm mx-auto">
              <Input
                placeholder="Enter your city or zip code..."
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="flex-1 rounded-xl"
              />
              <Button type="submit" className="bg-primary text-primary-foreground rounded-xl gap-1.5">
                <Search className="h-4 w-4" /> Search
              </Button>
            </form>
            {searched && (
              <p className="text-sm text-muted-foreground mt-3">
                Showing resources near: <strong>{searched}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="container max-w-5xl py-12">
          {/* ── Help Types Section ── */}
          <h2 className="text-2xl font-bold text-primary mb-2">Places you can get tech help in person</h2>
          <p className="text-muted-foreground mb-8">
            Each of these organizations offers a different kind of help. Browse the list to find what fits your needs, then click "Find near me" to search for locations in your area.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {helpTypes.map((type) => (
              <Card key={type.label} className="h-full rounded-2xl border border-border bg-card">
                <CardContent className="pt-5 pb-4">
                  <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 mb-3 ${type.color}`}>
                    <type.icon className="h-4 w-4" />
                    <span className="font-semibold text-sm">{type.label}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {type.description}
                  </p>

                  <div className="space-y-2 mb-3">
                    <div className="text-xs">
                      <span className="font-semibold text-foreground">What they help with: </span>
                      <span className="text-muted-foreground">{type.whatTheyHelp}</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold text-foreground">Cost: </span>
                      <Badge variant="outline" className="text-xs rounded-full ml-1">
                        {type.cost}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2 mb-3">
                    <span className="font-semibold text-foreground">Quick Tip:</span>{' '}
                    <span className="italic">{type.tip}</span>
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5 rounded-lg" asChild>
                      <a
                        href={buildUrl(type.searchTemplate)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-3.5 w-3.5" /> Find near {searched || 'me'}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                    {type.locatorUrl && (
                      <Button variant="ghost" size="sm" className="gap-1.5 rounded-lg text-primary" asChild>
                        <a
                          href={type.locatorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Official locator <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ── How to Prepare Section ── */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 mb-16">
            <div className="text-center mb-8">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-primary mb-2">How to Prepare for Your Visit</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                A little preparation goes a long way. Here is what to bring and do before you visit any tech help location.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {visitPreparationSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{step.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── National Helplines Section ── */}
          <h2 className="text-2xl font-bold text-primary mb-2">National helplines and online resources</h2>
          <p className="text-muted-foreground mb-8">
            These organizations offer free help by phone, video call, or online — no matter where you live in the United States.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {nationalHelplines.map((r) => (
              <Card key={r.name} className="rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-5 pb-4">
                  <h3 className="font-semibold mb-1 text-primary text-base">{r.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{r.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.phone && (
                      <Badge variant="outline" className="gap-1 text-xs">
                        <Phone className="h-3 w-3" /> {r.phone}
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm" className="h-7 px-2 gap-1 text-xs text-primary rounded-lg" asChild>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit website <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ── TekSure CTA ── */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Want help from the comfort of home?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              TekSure connects you with a vetted, friendly technician who can help over video call or visit you in person. No confusing menus, no long waits.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/technicians">
                  Find a TekSure Technician <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/quick-fixes">
                  Try a Quick Fix First <CheckCircle2 className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
