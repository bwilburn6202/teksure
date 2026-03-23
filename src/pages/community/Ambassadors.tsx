import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Star, Heart, MessageSquare, Award, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Ambassador {
  name: string;
  location: string;
  bio: string;
  emoji: string;
  speciality: string;
  helpedCount: number;
  badges: string[];
  joinedYear: number;
}

const AMBASSADORS: Ambassador[] = [
  {
    name: 'Margaret T.',
    location: 'Manchester',
    bio: 'Retired teacher who discovered TekSure after struggling with her new smartphone. Now she helps others in her local community centre every Tuesday afternoon.',
    emoji: '👩‍🏫',
    speciality: 'Smartphones & Video Calls',
    helpedCount: 87,
    badges: ['Top Helper', '1 Year Member'],
    joinedYear: 2025,
  },
  {
    name: 'David K.',
    location: 'Edinburgh',
    bio: 'Former IT manager who retired early and wanted to give back. Runs free drop-in sessions at his local library and answers questions on the TekSure forum daily.',
    emoji: '👨‍💼',
    speciality: 'Windows & Security',
    helpedCount: 142,
    badges: ['Top Helper', 'Security Expert', 'Forum Star'],
    joinedYear: 2024,
  },
  {
    name: 'Priya S.',
    location: 'Birmingham',
    bio: 'University student studying Computer Science who wanted to make tech less intimidating for older family members. Now helps hundreds through the forum and local workshops.',
    emoji: '👩‍🎓',
    speciality: 'Android & Apps',
    helpedCount: 63,
    badges: ['Rising Star', 'Forum Star'],
    joinedYear: 2025,
  },
  {
    name: 'Robert H.',
    location: 'Bristol',
    bio: 'Passionate about keeping older people connected with their families. Specialises in video calling and social media — and runs a monthly "Tech Tea" meetup.',
    emoji: '👴',
    speciality: 'Video Calls & Social Media',
    helpedCount: 95,
    badges: ['Top Helper', 'Community Builder'],
    joinedYear: 2024,
  },
  {
    name: 'Celine O.',
    location: 'London',
    bio: 'Healthcare worker who noticed many of her patients couldn\'t access online services. Helps members navigate NHS apps, prescription services, and telehealth platforms.',
    emoji: '👩‍⚕️',
    speciality: 'Health Apps & Online Services',
    helpedCount: 54,
    badges: ['Rising Star', 'Health Tech'],
    joinedYear: 2025,
  },
  {
    name: 'Jim P.',
    location: 'Leeds',
    bio: 'Cybersecurity enthusiast who had a family member lose money to an online scam. Now dedicated to helping people recognise and avoid fraud.',
    emoji: '🛡️',
    speciality: 'Scam Prevention & Online Safety',
    helpedCount: 116,
    badges: ['Security Expert', 'Top Helper'],
    joinedYear: 2024,
  },
];

const BADGE_COLORS: Record<string, string> = {
  'Top Helper': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'Rising Star': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Security Expert': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'Forum Star': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Community Builder': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  'Health Tech': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  '1 Year Member': 'bg-muted text-muted-foreground',
};

const PERKS = [
  { emoji: '🏅', title: 'Official Ambassador Badge', desc: 'Show off your verified Ambassador status on your forum profile.' },
  { emoji: '📚', title: 'Early Access to Guides', desc: 'Get new guides before anyone else and help us improve them.' },
  { emoji: '🎓', title: 'Free Training Sessions', desc: 'Exclusive monthly training sessions on new tech topics.' },
  { emoji: '🤝', title: 'Private Ambassador Community', desc: 'Connect with other Ambassadors in a dedicated private forum.' },
  { emoji: '📣', title: 'Feature on TekSure', desc: 'Your profile featured on our Ambassadors page.' },
  { emoji: '💌', title: 'Monthly Newsletter', desc: 'Ambassador-only updates, tips, and previews.' },
];

const REQUIREMENTS = [
  'Be an active TekSure member for at least 3 months',
  'Have a genuine desire to help others learn about technology',
  'Be willing to answer questions on the community forum',
  'Agree to our Ambassador Code of Conduct (friendly, patient, jargon-free)',
];

export default function Ambassadors() {
  return (
    <>
      <SEOHead
        title="Community Ambassadors — TekSure"
        description="Meet the TekSure Community Ambassadors — real people dedicated to helping others learn technology. Find out how to become an Ambassador yourself."
      path="/community/ambassadors"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b border-border py-12 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Community Ambassadors</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our Ambassadors are everyday people who go the extra mile to help others feel confident with technology.
            </p>
            <div className="flex items-center justify-center gap-6 mt-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-500" /> {AMBASSADORS.length} Ambassadors</span>
              <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-red-500" /> {AMBASSADORS.reduce((s, a) => s + a.helpedCount, 0)}+ people helped</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-blue-500" /> 6 cities across the UK</span>
            </div>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-8">

          {/* Ambassador grid */}
          <h2 className="text-xl font-bold mb-5">Meet the Ambassadors</h2>
          <div className="grid gap-4 sm:grid-cols-2 mb-12">
            {AMBASSADORS.map((amb) => (
              <Card key={amb.name} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-3xl shrink-0">
                      {amb.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-semibold text-sm">{amb.name}</h3>
                        <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                          <MapPin className="h-3 w-3" /> {amb.location}
                        </span>
                      </div>
                      <p className="text-xs text-primary font-medium mb-2">{amb.speciality}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{amb.bio}</p>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {amb.badges.map(badge => (
                          <span key={badge} className={`text-xs px-2 py-0.5 rounded-full font-medium ${BADGE_COLORS[badge] || 'bg-muted text-muted-foreground'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{amb.helpedCount}</span> people helped · Member since {amb.joinedYear}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Become an Ambassador */}
          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            {/* Perks */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-amber-500" />
                  <h2 className="font-bold text-lg">Ambassador Perks</h2>
                </div>
                <div className="space-y-3">
                  {PERKS.map(perk => (
                    <div key={perk.title} className="flex gap-3">
                      <span className="text-xl shrink-0">{perk.emoji}</span>
                      <div>
                        <p className="text-sm font-medium">{perk.title}</p>
                        <p className="text-xs text-muted-foreground">{perk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements & Apply */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                  <h2 className="font-bold text-lg">Become an Ambassador</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  We're looking for people who love helping others and want to make technology more accessible. No qualifications needed — just patience and enthusiasm.
                </p>
                <div className="space-y-2 mb-5">
                  {REQUIREMENTS.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">{req}</p>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full gap-2">
                  <Link to="/get-help">
                    Apply to become an Ambassador <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">We review applications within 5 working days.</p>
              </CardContent>
            </Card>
          </div>

          {/* Forum CTA */}
          <Card className="border-dashed border-primary/30 bg-primary/5">
            <CardContent className="p-5 flex gap-4 items-center">
              <MessageSquare className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-sm">Have a question? Ask the community</p>
                <p className="text-xs text-muted-foreground mt-0.5">Our Ambassadors are active on the TekSure forum every day — ask anything and get a friendly, jargon-free answer.</p>
              </div>
              <Button asChild variant="outline" size="sm" className="shrink-0 ml-auto">
                <Link to="/forum">Go to Forum</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
