import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, Calendar, Clock, Users, CheckCircle2, ChevronDown, ExternalLink, Bell, Lock, Smartphone, Bot, AlertTriangle, Cloud, Play, type LucideIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Webinar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  icon: LucideIcon;
  category: string;
  spots?: number;
  spotsLeft?: number;
  status: 'upcoming' | 'live' | 'recorded';
  recordingUrl?: string;
  topics: string[];
  host: string;
}

const WEBINARS: Webinar[] = [
  {
    id: 1,
    title: 'Stay Safe Online: A Beginner\'s Guide to Cybersecurity',
    description: 'Join us for a friendly, jargon-free session covering the most important things you can do to protect yourself online — from passwords and scams to safe browsing and Wi-Fi security.',
    date: '2026-04-02',
    time: '10:00',
    duration: '60 min',
    icon: Lock,
    category: 'Security',
    spots: 50,
    spotsLeft: 23,
    status: 'upcoming',
    host: 'TekSure Team',
    topics: ['Creating strong passwords', 'Recognising scam emails and texts', 'Safe browsing habits', 'Q&A session'],
  },
  {
    id: 2,
    title: 'Getting the Most from Your Smartphone',
    description: 'Whether you\'re on iPhone or Android, this webinar covers the features most people don\'t know about — from hidden shortcuts to useful settings that make your phone work better for you.',
    date: '2026-04-09',
    time: '14:00',
    duration: '60 min',
    icon: Smartphone,
    category: 'Devices',
    spots: 50,
    spotsLeft: 38,
    status: 'upcoming',
    host: 'TekSure Team',
    topics: ['iPhone & Android tips comparison', 'Accessibility settings walkthrough', 'Storage management', 'Battery life tips', 'Live Q&A'],
  },
  {
    id: 3,
    title: 'Understanding AI Tools: ChatGPT, Copilot & Siri Explained',
    description: 'AI is everywhere now — but what does it actually do and how can it help you? This plain-English session demystifies AI assistants and shows you practical ways to use them safely.',
    date: '2026-04-16',
    time: '10:00',
    duration: '60 min',
    icon: Bot,
    category: 'AI',
    spots: 50,
    spotsLeft: 41,
    status: 'upcoming',
    host: 'TekSure Team',
    topics: ['What AI can and can\'t do', 'Live ChatGPT demonstration', 'Voice assistants (Siri, Google Assistant)', 'Privacy and what to avoid sharing', 'Q&A'],
  },
  {
    id: 4,
    title: 'Video Calls Made Easy: Zoom, WhatsApp & FaceTime',
    description: 'A practical, hands-on session to help you feel confident on video calls — from setting up your camera and microphone to joining a call for the first time.',
    date: '2026-03-12',
    time: '14:00',
    duration: '45 min',
    icon: Video,
    category: 'Communication',
    status: 'recorded',
    recordingUrl: '#',
    host: 'TekSure Team',
    topics: ['Setting up Zoom', 'WhatsApp video calls on mobile', 'FaceTime basics', 'Troubleshooting common issues'],
  },
  {
    id: 5,
    title: 'Protecting Yourself from Online Scams',
    description: 'Scams are more convincing than ever. In this recorded session, we walk through real examples of the most common scams targeting people today — and exactly what to look for.',
    date: '2026-02-26',
    time: '10:00',
    duration: '55 min',
    icon: AlertTriangle,
    category: 'Security',
    status: 'recorded',
    recordingUrl: '#',
    host: 'TekSure Team',
    topics: ['Delivery scam texts', 'Fake HMRC calls', 'Romance scams', 'Investment fraud', 'What to do if you\'ve been scammed'],
  },
  {
    id: 6,
    title: 'Cloud Storage & Backing Up Your Photos',
    description: 'Never lose precious photos again. This session covers Google Photos, iCloud, and external drives — and how to set up automatic backups so everything is safe.',
    date: '2026-02-12',
    time: '14:00',
    duration: '50 min',
    icon: Cloud,
    category: 'Storage',
    status: 'recorded',
    recordingUrl: '#',
    host: 'TekSure Team',
    topics: ['Google Photos setup', 'iCloud on iPhone & Mac', 'External hard drive basics', 'Organising photo albums'],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Devices: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  AI: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  Communication: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  Storage: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
};

const FILTERS = ['All', 'Upcoming', 'Recorded'];

export default function Webinars() {
  const [filter, setFilter] = useState('All');
  const [registered, setRegistered] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  const filtered = WEBINARS.filter(w => {
    if (filter === 'Upcoming') return w.status === 'upcoming' || w.status === 'live';
    if (filter === 'Recorded') return w.status === 'recorded';
    return true;
  });

  const upcoming = WEBINARS.filter(w => w.status === 'upcoming');
  const recorded = WEBINARS.filter(w => w.status === 'recorded');

  const handleRegister = (webinar: Webinar) => {
    setRegistered(prev => new Set([...prev, webinar.id]));
    toast({
      title: 'You\'re registered! ',
      description: `We\'ll send a reminder to your email before "${webinar.title}" starts.`,
    });
  };

  return (
    <>
      <SEOHead
        title="Free Tech Webinars — TekSure"
        description="Join free online webinars hosted by TekSure. Learn about cybersecurity, smartphones, AI tools, and more in friendly, beginner-friendly sessions."
        path="/webinars"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border py-10 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Video className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-primary">Free Tech Webinars</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Live and recorded online sessions on the topics that matter most — all free, all beginner-friendly.
            </p>
            <div className="flex items-center justify-center gap-6 mt-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-green-500" /> Always free</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-green-500" /> No jargon</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-green-500" /> Live Q&A</span>
            </div>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  filter === f
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-muted border-border hover:bg-accent'
                }`}
              >
                {f === 'Upcoming' ? <><Calendar className="h-3.5 w-3.5 inline-block mr-1" />Upcoming ({upcoming.length})</> : f === 'Recorded' ? <><Play className="h-3.5 w-3.5 inline-block mr-1" />Recorded ({recorded.length})</> : 'All webinars'}
              </button>
            ))}
          </div>

          {/* Webinar list */}
          <div className="space-y-4">
            {filtered.map(webinar => (
              <Card key={webinar.id} className={`rounded-2xl border-border hover:shadow-md transition-shadow ${webinar.status === 'live' ? 'border-red-400 ring-1 ring-red-400/50' : ''}`}>
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    <webinar.icon className="h-9 w-9 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      {/* Header row */}
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[webinar.category] || 'bg-muted text-muted-foreground'}`}>
                          {webinar.category}
                        </span>
                        {webinar.status === 'live' && (
                          <Badge className="bg-red-500 text-white text-xs animate-pulse">LIVE NOW</Badge>
                        )}
                        {webinar.status === 'recorded' && (
                          <Badge variant="secondary" className="text-xs rounded-full inline-flex items-center gap-1"><Play className="h-3 w-3" /> Recorded</Badge>
                        )}
                        {webinar.status === 'upcoming' && (
                          <Badge variant="outline" className="text-xs text-primary border-primary/40 rounded-full inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> Upcoming</Badge>
                        )}
                      </div>

                      <h2 className="font-semibold text-base leading-snug mb-1 text-primary">{webinar.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{webinar.description}</p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(webinar.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {webinar.time} · {webinar.duration}
                        </span>
                        {webinar.spotsLeft !== undefined && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {webinar.spotsLeft} spots left
                          </span>
                        )}
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {webinar.topics.map(t => (
                          <span key={t} className="text-xs bg-muted rounded-full px-2 py-0.5 text-muted-foreground">{t}</span>
                        ))}
                      </div>

                      {/* CTA */}
                      {webinar.status === 'upcoming' && (
                        registered.has(webinar.id) ? (
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <CheckCircle2 className="h-4 w-4" /> Registered! We\'ll remind you before it starts.
                          </div>
                        ) : (
                          <Button size="sm" onClick={() => handleRegister(webinar)} className="gap-2 rounded-xl">
                            <Bell className="h-3.5 w-3.5" /> Register for free
                          </Button>
                        )
                      )}
                      {webinar.status === 'live' && (
                        <Button size="sm" className="gap-2 bg-red-500 hover:bg-red-600 rounded-xl">
                          <Video className="h-3.5 w-3.5" /> Join live now
                        </Button>
                      )}
                      {webinar.status === 'recorded' && webinar.recordingUrl && (
                        <Button size="sm" variant="outline" asChild className="gap-2 rounded-xl">
                          <a href={webinar.recordingUrl} target="_blank" rel="noopener noreferrer">
                            <Video className="h-3.5 w-3.5" /> Watch recording <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No webinars in this category.</p>
          )}

          {/* Newsletter sign-up CTA */}
          <Card className="mt-8 rounded-2xl border border-border bg-card bg-primary/5">
            <CardContent className="p-6 text-center">
              <Bell className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-1 text-primary">Don't miss a webinar</h3>
              <p className="text-sm text-muted-foreground mb-4">We run new sessions every two weeks. Register above for upcoming ones, or check back here for new dates.</p>
              <p className="text-xs text-muted-foreground">All webinars are free. No spam, ever.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
