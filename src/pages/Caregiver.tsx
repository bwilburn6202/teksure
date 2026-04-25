import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, BookOpen, Phone, Users, ArrowRight, CheckCircle2, HelpCircle, Lock, Wifi, Ear, CalendarDays, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: BookOpen, title: 'Shared learning resources', desc: 'Share specific guides with the person you care for — they\'ll see them pinned at the top of their guides page.', status: 'live' },
  { icon: Phone, title: 'Book help on their behalf', desc: 'Request tech support for your loved one directly — ideal when they struggle to describe the problem themselves.', status: 'live' },
  { icon: Shield, title: 'Safety guide recommendations', desc: 'We\'ll suggest the most important safety guides based on their device and experience level.', status: 'live' },
  { icon: Users, title: 'Caregiver progress view', desc: 'See which guides your loved one has completed and what they\'re working on next.', status: 'coming-soon' },
  { icon: HelpCircle, title: 'Ask on their behalf', desc: 'Post forum questions or contact our team on behalf of the person you support.', status: 'coming-soon' },
];

const guides = [
  { icon: Shield, title: 'Recognising Online Scams', slug: 'recognizing-avoiding-scams' },
  { icon: Lock, title: 'Creating a Strong Password', slug: 'create-strong-password' },
  { icon: Wifi, title: 'Wi-Fi Troubleshooting Basics', slug: 'wifi-troubleshooting-basics' },
  { icon: Ear, title: 'Hearing Aid Bluetooth Setup', slug: 'hearing-aid-bluetooth' },
  { icon: CalendarDays, title: 'Calendar & Reminders', slug: 'calendar-reminders' },
  { icon: Video, title: 'Video Calling Mastery', slug: 'video-calling-mastery' },
];

const tips = [
  'Sit side-by-side rather than taking over — help them do it, don\'t do it for them.',
  'Celebrate small wins. "You connected to Wi-Fi by yourself!" matters a lot.',
  'Write down steps on a notepad in large writing and leave it by the device.',
  'Suggest they start with TekSure\'s Beginner Basics path — just 5 short guides.',
  'Patience is the most important skill. What takes you seconds may take them minutes — that\'s OK.',
  'Set up a regular "tech time" together — 30 minutes a week makes a huge difference.',
];

export default function Caregiver() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Caregiver Dashboard — Support Your Loved One with Technology | TekSure"
        description="As a caregiver, you can share guides, book tech support, and monitor progress for the person you support. Built for families helping older relatives with technology."
        path="/caregiver"
      />
      <main className="flex-1">
        <div className="border-b border-border py-14">
          <div className="container max-w-2xl text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">Caregiver Dashboard</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">Supporting a family member or friend with their technology? TekSure makes it easier to help without taking over.</p>
          </div>
        </div>

        <div className="container max-w-5xl py-12">
          {/* Feature cards */}
          <h2 className="text-xl font-bold text-primary mb-6">What you can do as a carer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {features.map((f, i) => (
              <div key={f.title}>
                <Card className={`rounded-2xl border border-border bg-card ${f.status === 'coming-soon' ? 'opacity-60' : ''}`}>
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="rounded-lg bg-primary/10 p-2"><f.icon className="h-4 w-4 text-primary" /></div>
                      {f.status === 'coming-soon' && <Badge variant="outline" className="text-xs">Coming soon</Badge>}
                      {f.status === 'live' && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Recommended guides to share */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-5">Guides to share with your loved one</h2>
              <div className="space-y-2">
                {guides.map(g => (
                  <Link key={g.slug} to={`/guides/${g.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 p-3 transition-all group">
                    <g.icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium flex-1 group-hover:text-primary transition-colors">{g.title}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Caring tips */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-5">Tips for supporting a tech learner</h2>
              <div className="space-y-3">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-2xl p-8 text-center border border-border">
            <Heart className="h-8 w-8 text-pink-400 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-primary mb-2">Book help for someone you care for</h2>
            <p className="text-muted-foreground mb-5 max-w-md mx-auto text-sm">You can book a TekSure technician session on behalf of a family member. Just mention in the notes that it's for someone else and we'll tailor our approach.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl gap-2">
                <Link to="/book"><Phone className="h-4 w-4" />Book Support for Them</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link to="/tech-anxiety">Tech Anxiety Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
