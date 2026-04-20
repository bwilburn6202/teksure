import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Info,
  MapPin,
  Clock,
  Sparkles,
  Mail,
  Heart,
  ArrowRight,
} from 'lucide-react';

interface Tool {
  label: string;
  href: string;
}

interface Story {
  name: string;
  age: number;
  location: string;
  title: string;
  paragraphs: string[];
  tools: Tool[];
  timeInvested: string;
  emoji: string;
}

const STORIES: Story[] = [
  {
    name: 'Dorothy',
    age: 72,
    location: 'Ohio',
    title: 'From scared of email to teaching her grandkids',
    emoji: '📧',
    paragraphs: [
      'Dorothy avoided email for years because she was worried she would "break something" or click the wrong link. Her daughter finally sat her down and walked her through our Internet Basics course.',
      'Six months later, Dorothy sends her grandchildren weekly emails with photos from her garden. Last Thanksgiving, she taught her 9-year-old grandson how to attach a photo — a reversal she still laughs about.',
    ],
    tools: [
      { label: 'Internet Basics course', href: '/courses/internet-basics' },
      { label: 'Email guides', href: '/category/email' },
    ],
    timeInvested: 'About 3 hours over 4 weeks',
  },
  {
    name: 'Miguel',
    age: 68,
    location: 'Arizona',
    title: 'Spotted a bank scam before losing a dime',
    emoji: '🛡️',
    paragraphs: [
      'Miguel got a text saying his bank account was locked and he needed to click a link to verify his identity. Something felt off, so he opened the TekSure "Is This a Scam?" tool and pasted the message in.',
      'The tool immediately flagged it as a phishing attempt. Miguel deleted the text and called his bank directly using the number on the back of his debit card. Nothing was actually wrong with his account.',
    ],
    tools: [
      { label: 'Is This a Scam? tool', href: '/tools/is-this-a-scam' },
      { label: 'Scam Defense Center', href: '/scam-defense' },
    ],
    timeInvested: 'Under 5 minutes',
  },
  {
    name: 'Patricia',
    age: 64,
    location: 'Maine',
    title: 'Finally understands her new smart thermostat',
    emoji: '🌡️',
    paragraphs: [
      'When Patricia moved into a senior community, her new apartment came with a smart thermostat she was afraid to touch. She kept it at one temperature all winter because she worried she would break it.',
      'She browsed our Smart Home category and found a step-by-step walkthrough for her exact thermostat model. Now she sets schedules, checks the temperature from her phone, and has saved about $40 a month on her utility bill.',
    ],
    tools: [
      { label: 'Smart Home guides', href: '/category/smart-home' },
      { label: 'Device Hub', href: '/devices' },
    ],
    timeInvested: '45 minutes to learn the basics',
  },
  {
    name: 'James',
    age: 75,
    location: 'Texas',
    title: 'Retired teacher becomes his community tech helper',
    emoji: '🎓',
    paragraphs: [
      'James spent 40 years teaching high school history. When he retired, he missed having a way to help people. He started working through TekSure guides to brush up on his own tech skills.',
      'Within a year, he was running a weekly "tech coffee hour" at his community center — no formal training, just patience and our guides pulled up on his tablet. He estimates he has helped over 60 neighbors with phones, printers, and streaming services.',
    ],
    tools: [
      { label: 'Senior tech guides', href: '/category/seniors' },
      { label: 'Printable cheat sheets', href: '/free-resources' },
    ],
    timeInvested: '2-3 hours per week, ongoing',
  },
  {
    name: 'Ruby',
    age: 81,
    location: 'California',
    title: 'Video-calls her great-grandkids twice a week',
    emoji: '👵',
    paragraphs: [
      "Ruby hadn't spoken face-to-face with her great-grandchildren since 2023. They lived in another state, and she found phones confusing and overwhelming.",
      'Her granddaughter helped her follow our FaceTime setup guide, and within 20 minutes they had a practice call working. Ruby now video-calls the kids every Tuesday and Saturday. She keeps a printed step-by-step sheet next to her iPad just in case.',
    ],
    tools: [
      { label: 'FaceTime setup guide', href: '/guide/how-to-use-facetime' },
      { label: 'Video calling basics', href: '/category/video-calling' },
    ],
    timeInvested: '20 minutes to set up, 2 weeks to feel confident',
  },
  {
    name: 'Hector',
    age: 59,
    location: 'Florida',
    title: 'Removed his mother from data broker sites',
    emoji: '🔐',
    paragraphs: [
      "Hector's elderly mother kept getting suspicious calls from people who seemed to know too much about her. He suspected her personal info was on data broker sites, but the removal process looked overwhelming.",
      'He used our Data Broker Removal walkthrough to submit opt-out requests to the top 15 sites over a weekend. Within two months, the suspicious calls dropped dramatically.',
    ],
    tools: [
      { label: 'Data Broker Removal', href: '/data-broker-removal' },
      { label: 'Privacy guides', href: '/category/privacy' },
    ],
    timeInvested: '1 weekend + follow-up checks',
  },
  {
    name: 'Delores',
    age: 69,
    location: 'Georgia',
    title: 'Canceled 7 forgotten subscriptions, saved $840 a year',
    emoji: '💸',
    paragraphs: [
      'Delores suspected she was paying for things she no longer used, but her bank statement was a sea of small charges she could not identify. A friend told her about our subscription audit walkthrough.',
      'Following the checklist, she found 7 active subscriptions she had forgotten about — including a free trial from 2021 that had quietly rolled into $19.99 a month. Total annual savings: $840.',
    ],
    tools: [
      { label: 'Subscription Audit guide', href: '/guide/audit-your-subscriptions' },
      { label: 'Money-saving tools', href: '/tools/money' },
    ],
    timeInvested: 'One afternoon',
  },
  {
    name: 'Frank',
    age: 77,
    location: 'New York',
    title: 'Learned his iPhone was too old to be safe',
    emoji: '📱',
    paragraphs: [
      'Frank had been using the same iPhone for 7 years and never thought twice about it. Our Device Age Checker revealed his model no longer received security updates from Apple.',
      'He upgraded to a refurbished model from a reputable seller — following our guide to buying used phones safely — and feels much better knowing his banking app is on a supported device.',
    ],
    tools: [
      { label: 'Device Age Checker', href: '/tools/device-age-checker' },
      { label: 'Buying used devices safely', href: '/guide/buy-used-phones-safely' },
    ],
    timeInvested: 'A few evenings of research',
  },
  {
    name: 'Angela',
    age: 62,
    location: 'Illinois',
    title: 'Uses Medicare online — no more driving for small things',
    emoji: '🏥',
    paragraphs: [
      'Angela had been driving 45 minutes each way to her Medicare office for routine paperwork. She had a Medicare.gov account but was too nervous to use it on her own.',
      'Our Medicare.gov walkthrough took her through logging in, finding her plan, ordering a new card, and printing a summary of benefits. She has not had to drive to the office in four months.',
    ],
    tools: [
      { label: 'Medicare.gov guide', href: '/guide/use-medicare-online' },
      { label: 'Government services', href: '/category/government' },
    ],
    timeInvested: '30 minutes the first time',
  },
  {
    name: 'Roberto',
    age: 70,
    location: 'Nevada',
    title: 'Helped a neighbor avoid a grandparent scam',
    emoji: '🚨',
    paragraphs: [
      "Roberto's neighbor came to him in tears — she had gotten a call claiming her grandson was in jail and needed bail money sent by gift cards.",
      'Roberto had read our Grandparent Scam alert the week before and recognized every warning sign. He helped her call the grandson directly (he was fine, at work), then walked her through reporting the scam to the FTC.',
    ],
    tools: [
      { label: 'Grandparent Scam guide', href: '/guide/grandparent-scam' },
      { label: 'Scam Defense Center', href: '/scam-defense' },
    ],
    timeInvested: '2 hours of reading, used in the moment',
  },
  {
    name: 'Theresa',
    age: 58,
    location: 'Pennsylvania',
    title: 'Organized her late husband\u2019s digital accounts',
    emoji: '📋',
    paragraphs: [
      "After Theresa's husband passed away, she was left with a tangle of unknown passwords, email accounts, and subscriptions she did not know existed. The estate paperwork was overwhelming.",
      'She used our digital will template and account inventory checklist to work through everything systematically. Over a few weeks, she closed dormant accounts, transferred shared ones, and put together a guide for her own kids someday.',
    ],
    tools: [
      { label: 'Digital will template', href: '/resources/digital-will' },
      { label: 'Account inventory checklist', href: '/free-resources' },
    ],
    timeInvested: 'A few weekends',
  },
  {
    name: 'Walter',
    age: 66,
    location: 'Washington',
    title: 'Switched phone plans and saves $50 a month',
    emoji: '📶',
    paragraphs: [
      'Walter had been with the same phone carrier for 18 years and assumed switching was complicated. He used our Phone Plan Comparator to see what else was out there.',
      'The tool showed him a plan with the same coverage for $50 less per month. He followed our switching guide, kept his number, and was done in under an hour.',
    ],
    tools: [
      { label: 'Phone Plan Comparator', href: '/tools/phone-plan-comparator' },
      { label: 'How to switch carriers', href: '/guide/switch-phone-carrier' },
    ],
    timeInvested: 'About 1 hour total',
  },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <SEOHead
        title="TekSure Success Stories — Real People, Real Wins | TekSure"
        description="Representative examples of how everyday people use TekSure to solve tech problems, avoid scams, and feel more confident with technology."
        path="/success-stories"
      />
      <Navbar />

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Disclaimer (at top) */}
        <div className="max-w-4xl mx-auto mb-10">
          <Card className="border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
            <CardContent className="p-5 flex gap-3 items-start">
              <Info className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                These stories are representative examples inspired by common situations, not actual user testimonials. Names and details are fictional. We don't collect or publish real user stories without explicit consent.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-5 text-sm px-3 py-1">
            <Sparkles className="w-4 h-4 mr-1.5" />
            Representative examples
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Real Stories from Real People
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Twelve scenarios that reflect the kinds of wins people have with TekSure every week.
            Meet some neighbors who turned things around.
          </p>
        </section>

        {/* Stories Grid */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORIES.map((story) => (
              <Card
                key={story.name}
                className="border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{story.emoji}</div>
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {story.location}
                    </Badge>
                  </div>

                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Meet {story.name}, {story.age}
                  </p>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                    {story.title}
                  </h2>

                  <div className="space-y-3 mb-6 flex-grow">
                    {story.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                        Tools they used
                      </p>
                      <ul className="space-y-1.5">
                        {story.tools.map((tool) => (
                          <li key={tool.href}>
                            <Link
                              to={tool.href}
                              className="text-sm text-amber-700 dark:text-amber-400 hover:underline inline-flex items-center group"
                            >
                              {tool.label}
                              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      <span>Time invested: {story.timeInvested}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Submit Your Story */}
        <section className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-amber-50 to-rose-50 dark:from-amber-950/40 dark:to-rose-950/40 border-amber-200 dark:border-amber-900">
            <CardContent className="p-10 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Have a story to share?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                If TekSure has helped you or someone you love, we'd love to hear about it.
                With your permission, we may share your story (anonymously or with your name — your choice) to encourage others.
              </p>
              <Button asChild size="lg" className="text-lg py-6 bg-amber-600 hover:bg-amber-700 text-white">
                <a href="mailto:stories@teksure.com?subject=My%20TekSure%20Story">
                  <Mail className="w-5 h-5 mr-2" />
                  Email us at stories@teksure.com
                </a>
              </Button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                We will never publish anything without your explicit written consent.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
