import { useState } from 'react';
import { ExternalLink, Wifi, Monitor, BookOpen, Heart, Shield, Library, Info } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ── Types ──────────────────────────────────────────────────────────────────────

type Category = 'All' | 'Internet & Phone' | 'Devices' | 'Training & Classes' | 'Senior Programs' | 'Veterans';

interface Resource {
  name: string;
  url: string;
  category: Category;
  description: string;
  eligibility: string;
  note?: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const resources: Resource[] = [
  // Internet & Phone
  {
    name: 'FCC Lifeline Program',
    url: 'https://lifeline.universalservice.org',
    category: 'Internet & Phone',
    description:
      'A federal program that reduces your monthly internet or phone bill by up to $9.25. One benefit per household — available from hundreds of participating providers nationwide.',
    eligibility:
      'Qualify if you receive Medicaid, SNAP, SSI, Federal Public Housing Assistance, or if your income is at or below 135% of the federal poverty line.',
  },
  {
    name: 'Affordable Connectivity Program (ACP)',
    url: 'https://www.fcc.gov/acp',
    category: 'Internet & Phone',
    description:
      'A federal benefit that discounts home internet service by up to $30/month ($75/month on qualifying Tribal lands). Check the FCC site for current program status.',
    eligibility:
      'Qualify via Lifeline eligibility, Pell Grant, free/reduced school lunch, or income at or below 200% of the federal poverty line.',
    note: 'Program currently paused — visit fcc.gov/acp for the latest status.',
  },
  {
    name: 'Comcast Internet Essentials',
    url: 'https://www.internetessentials.com',
    category: 'Internet & Phone',
    description:
      'Reliable home internet for just $9.95/month in areas served by Comcast. Includes free or low-cost laptop offers and free digital literacy training.',
    eligibility:
      'Available to households with at least one student on free/reduced lunch, or families receiving public assistance programs. Comcast service area required.',
  },
  {
    name: 'AT&T Access',
    url: 'https://www.att.com/internet/access/',
    category: 'Internet & Phone',
    description:
      'AT&T offers home internet for $10/month for qualifying households. Speed options depend on what is available at your address.',
    eligibility:
      'Must participate in SNAP, SSI, Medicaid, or be enrolled in the National School Lunch Program. Must live in an AT&T service area.',
  },
  {
    name: 'T-Mobile Connect',
    url: 'https://www.t-mobile.com/isp/low-income',
    category: 'Internet & Phone',
    description:
      'T-Mobile offers low-cost home internet and phone plans for qualifying households. Rates and availability vary — check T-Mobile\'s site for current offers.',
    eligibility:
      'Eligibility tied to income or participation in qualifying government assistance programs. Check T-Mobile\'s site for current requirements.',
  },

  // Devices
  {
    name: 'PCs for People',
    url: 'https://www.pcsforpeople.org',
    category: 'Devices',
    description:
      'Provides professionally refurbished desktop and laptop computers at very low cost, along with low-cost mobile internet service. Operates locations in many US cities and ships nationally.',
    eligibility:
      'Income must be at or below 200% of the federal poverty line, or you must be enrolled in a qualifying government assistance program. Income verification required.',
  },
  {
    name: 'Computers with Causes',
    url: 'https://www.computerswithcauses.org',
    category: 'Devices',
    description:
      'Accepts donated computers and redistributes them to nonprofits, qualifying individuals, and families in need. Applications reviewed on a case-by-case basis.',
    eligibility:
      'Open to individuals who cannot afford a computer. Submit an application explaining your need — approved applicants receive a refurbished computer at no cost.',
  },
  {
    name: 'Human-I-T',
    url: 'https://www.human-i-t.org',
    category: 'Devices',
    description:
      'Delivers refurbished devices, affordable internet access, and one-on-one tech training to low-income individuals. Operates in California and ships devices to some other states.',
    eligibility:
      'Available to individuals and families with income at or below 200% of the federal poverty line. Check their website for current device availability and service areas.',
  },
  {
    name: 'EveryoneOn',
    url: 'https://www.everyoneon.org',
    category: 'Devices',
    description:
      'Connects low-income Americans to low-cost internet plans, affordable devices, and free digital skills training. Acts as a clearinghouse to find local offers near you.',
    eligibility:
      'Programs vary by location and provider. Enter your zip code on their site to see what internet, device, and training programs are available in your area.',
  },

  // Training & Classes
  {
    name: 'Senior Planet',
    url: 'https://seniorplanet.org',
    category: 'Training & Classes',
    description:
      'Free tech classes for adults 60 and older — both in-person at Senior Planet centers and online via live Zoom sessions. Topics include smartphones, video calling, social media, online safety, and more. Part of AARP Foundation.',
    eligibility:
      'Open to any adult age 60 or older. No prior tech experience needed. Many classes are also available in Spanish.',
  },
  {
    name: 'AARP TEK (Technology Education & Knowledge)',
    url: 'https://www.aarp.org/home-family/personal-technology/tek/',
    category: 'Training & Classes',
    description:
      'Free online tutorials and workshops designed specifically for older adults. Covers smartphones, tablets, video chatting, online safety, and staying connected with family.',
    eligibility:
      'Free and open to everyone — no AARP membership required. Available online at any time, at your own pace.',
  },
  {
    name: 'GCFGlobal',
    url: 'https://edu.gcfglobal.org',
    category: 'Training & Classes',
    description:
      'Completely free online lessons on computer basics, using the internet, email, Google Docs, Microsoft Office, and more. Great starting point for anyone new to technology.',
    eligibility:
      'No account required. All lessons are free, self-paced, and available online 24/7 in English and Spanish.',
  },
  {
    name: 'DigitalLearn',
    url: 'https://digitallearn.org',
    category: 'Training & Classes',
    description:
      'Free online courses on computer and internet basics, created by the Public Library Association. Courses include using a mouse, browsing the internet, staying safe online, and using email.',
    eligibility:
      'Completely free and open to anyone. No account needed to access most courses. Often used in public library programs.',
  },
  {
    name: 'Northstar Digital Literacy',
    url: 'https://www.digitalliteracyassessment.org',
    category: 'Training & Classes',
    description:
      'Free online assessments and learning modules to build and verify your digital literacy skills. Covers basic computer use, internet, email, and using common software.',
    eligibility:
      'Open to anyone. Many public libraries and community organizations use Northstar to help learners earn a digital literacy certificate at no cost.',
  },
  {
    name: 'GetSetUp',
    url: 'https://www.getsetup.io',
    category: 'Training & Classes',
    description:
      'Live online classes led by older adult instructors, covering smartphones, tablets, video calling, health topics, and life skills. Offers both free and paid classes.',
    eligibility:
      'Designed for adults 60 and older. Many classes are free; some require a paid membership. Check the site for current free offerings.',
  },
  {
    name: 'Khan Academy',
    url: 'https://www.khanacademy.org',
    category: 'Training & Classes',
    description:
      'Free, world-class education including courses on computer basics, the internet, and how computers work. Also covers math, finance, and other subjects that can help with digital tasks.',
    eligibility:
      'Completely free. Available to learners of all ages. Create a free account to track your progress.',
  },

  // Senior Programs
  {
    name: 'Cyber Seniors',
    url: 'https://cyberseniors.org',
    category: 'Senior Programs',
    description:
      'Pairs older adults with young volunteers for free one-on-one tech mentorship. Available by phone helpline and through in-person programs at senior centers and libraries.',
    eligibility:
      'Open to seniors who need tech help. The phone helpline is available to any older adult in the US and Canada who needs assistance with a device or app.',
  },
  {
    name: 'Find Local Senior Centers',
    url: 'https://eldercare.acl.gov',
    category: 'Senior Programs',
    description:
      'Most local senior centers offer free tech help, computer access, and classes. Use the Eldercare Locator (eldercare.acl.gov) to find the nearest senior center and Area Agency on Aging in your community.',
    eligibility:
      'Senior center programs are generally open to adults age 60 and older. Services and programs vary by location.',
  },
  {
    name: 'AARP Foundation Connect2Affect',
    url: 'https://connect2affect.org',
    category: 'Senior Programs',
    description:
      'Resources and tools to help older adults use technology to stay connected, reduce isolation, and find local support. Includes a resource finder for tech help in your community.',
    eligibility:
      'Open to all older adults. No cost to use the resource finder or access the tools and information on the site.',
  },
  {
    name: 'Older Adults Technology Services (OATS)',
    url: 'https://oats.org',
    category: 'Senior Programs',
    description:
      'Offers digital literacy programs for older adults in New York City and through national partnerships. Programs include Senior Planet classes, community workshops, and advocate training.',
    eligibility:
      'In-person programs focused on NYC; Senior Planet online classes (seniorplanet.org) available nationally to adults 60+.',
  },

  // Veterans
  {
    name: 'VA Telehealth Services',
    url: 'https://telehealth.va.gov',
    category: 'Veterans',
    description:
      'The VA provides free telehealth appointments, video visit technology, and tech support so veterans can meet with their care team from home. Includes setup help for VA Video Connect.',
    eligibility:
      'Available to veterans enrolled in VA health care. Contact your local VA facility or call 1-866-606-8198 to get started with telehealth.',
  },
  {
    name: 'DAV (Disabled American Veterans)',
    url: 'https://www.dav.org',
    category: 'Veterans',
    description:
      'DAV offers a range of services for disabled veterans, including assistance navigating VA benefits and connecting to technology and support programs. Free DAV claims agents available at no cost.',
    eligibility:
      'Open to veterans with service-connected disabilities. DAV services are free — they never charge veterans for claims assistance.',
  },
  {
    name: 'VFW Tech Assistance',
    url: 'https://www.vfw.org',
    category: 'Veterans',
    description:
      'VFW posts across the country provide assistance connecting veterans to benefits, services, and technology resources. Many posts offer in-person help navigating digital services and VA benefits portals.',
    eligibility:
      'Open to eligible veterans and service members. Visit vfw.org to find your nearest VFW post.',
  },

  // Library (treated as its own entry under Training & Classes)
  {
    name: 'Your Local Public Library',
    url: 'https://www.imls.gov/research-evaluation/data-collection/public-libraries-survey',
    category: 'Training & Classes',
    description:
      'Most public libraries offer free WiFi, computer access, one-on-one tech help appointments, digital literacy classes, and even free WiFi hotspot lending — all at no cost with a library card.',
    eligibility:
      'Free to anyone with a library card. Cards are free with proof of address. Use the IMLS library finder to locate your nearest branch.',
  },
];

// ── Badge config ───────────────────────────────────────────────────────────────

const categoryConfig: Record<Exclude<Category, 'All'>, { color: string; icon: React.ReactNode }> = {
  'Internet & Phone': {
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    icon: <Wifi className="w-3 h-3 inline mr-1" />,
  },
  Devices: {
    color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    icon: <Monitor className="w-3 h-3 inline mr-1" />,
  },
  'Training & Classes': {
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
    icon: <BookOpen className="w-3 h-3 inline mr-1" />,
  },
  'Senior Programs': {
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
    icon: <Heart className="w-3 h-3 inline mr-1" />,
  },
  Veterans: {
    color: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
    icon: <Shield className="w-3 h-3 inline mr-1" />,
  },
};

const tabs: Category[] = ['All', 'Internet & Phone', 'Devices', 'Training & Classes', 'Senior Programs', 'Veterans'];

// ── Component ──────────────────────────────────────────────────────────────────

const FreeResources = () => {
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filtered = activeTab === 'All' ? resources : resources.filter((r) => r.category === activeTab);

  return (
    <>
      <SEOHead
        title="Free Tech Programs & Resources — Internet, Devices & Training | TekSure"
        description="Find free and discounted internet, devices, and tech training for seniors, low-income Americans, veterans, and rural residents. Real programs, real eligibility, no cost to apply."
        path="/free-resources"
      />
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

        {/* Hero */}
        <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Updated April 2026
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Free Technology Help Is Available
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Millions of Americans qualify for free or deeply discounted internet, computers, and tech training — but most people never hear about these programs. This page lists real programs with real eligibility requirements so you can find what you qualify for today.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* How to Apply callout */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5 mb-8 flex gap-4 items-start">
            <div className="flex-shrink-0 mt-0.5">
              <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">Before you apply — have these documents ready</p>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Most programs require proof that you qualify. Common documents accepted: a Medicaid card, SNAP/EBT card, SSI award letter, proof that a child in your household receives free/reduced school lunch, or recent pay stubs showing income below 200% of the federal poverty line (about $30,120/year for a single person in 2026). Having these ready before you apply speeds things up.
              </p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400'
                }`}
              >
                {tab === 'Internet & Phone' && <Wifi className="w-3.5 h-3.5 inline mr-1.5" />}
                {tab === 'Devices' && <Monitor className="w-3.5 h-3.5 inline mr-1.5" />}
                {tab === 'Training & Classes' && <BookOpen className="w-3.5 h-3.5 inline mr-1.5" />}
                {tab === 'Senior Programs' && <Heart className="w-3.5 h-3.5 inline mr-1.5" />}
                {tab === 'Veterans' && <Shield className="w-3.5 h-3.5 inline mr-1.5" />}
                {tab === 'All' && <Library className="w-3.5 h-3.5 inline mr-1.5" />}
                {tab}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Showing {filtered.length} program{filtered.length !== 1 ? 's' : ''}
            {activeTab !== 'All' ? ` in ${activeTab}` : ' across all categories'}
          </p>

          {/* Resource cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((resource) => {
              const config = categoryConfig[resource.category as Exclude<Category, 'All'>];
              return (
                <Card
                  key={resource.name}
                  className="flex flex-col bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={`text-xs font-medium border-0 ${config.color}`}>
                        {config.icon}
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                      {resource.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 pt-0">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                      {resource.description}
                    </p>
                    {resource.note && (
                      <p className="text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-md px-3 py-2 mb-3 border border-amber-200 dark:border-amber-800">
                        <strong>Note:</strong> {resource.note}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      <span className="font-semibold text-gray-600 dark:text-gray-300">Who qualifies: </span>
                      {resource.eligibility}
                    </p>
                    <div className="mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400 font-medium"
                      >
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply / Learn More
                          <ExternalLink className="w-3.5 h-3.5 ml-2 flex-shrink-0" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              TekSure does not administer any of these programs and cannot process applications on your behalf. Contact each organization directly to apply. Program availability, eligibility rules, and funding levels may change — always check the program's official website for the most current information.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default FreeResources;
