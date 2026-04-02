import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, CheckCircle2, Shield, Award, ArrowRight, ChevronLeft } from 'lucide-react';

interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
}

interface Technician {
  id: string;
  name: string;
  emoji: string;
  title: string;
  location: string;
  bio: string;
  specialities: string[];
  rating: number;
  reviewCount: number;
  jobsCompleted: number;
  responseTime: string;
  memberSince: string;
  verified: boolean;
  badges: string[];
  reviews: Review[];
}

const TECHNICIANS: Technician[] = [
  {
    id: 'tech-james-r',
    name: 'James R.',
    emoji: '👨‍💻',
    title: 'Windows & Home Network Specialist',
    location: 'Manchester',
    bio: 'I\'ve been helping people with their computers for over 12 years, first as an in-house IT technician and now independently through TekSure. I specialise in making technology less stressful — whether that\'s fixing a slow PC, getting your Wi-Fi working properly, or cleaning a virus off your computer.',
    specialities: ['Windows 10 & 11', 'Wi-Fi & Router Setup', 'Virus Removal', 'Printer Problems', 'New Device Setup'],
    rating: 4.9,
    reviewCount: 87,
    jobsCompleted: 112,
    responseTime: 'Usually replies within 2 hours',
    memberSince: 'January 2024',
    verified: true,
    badges: ['Top Rated', 'ID Verified', '100+ Jobs'],
    reviews: [
      { author: 'Patricia W.', rating: 5, date: '2026-03-15', text: 'James was absolutely wonderful. He arrived on time, sorted my Wi-Fi problem in under an hour, and explained everything in plain English. Would recommend to anyone.' },
      { author: 'Derek H.', rating: 5, date: '2026-03-02', text: 'My computer had been running terribly for months. James came round, cleared out the viruses, and it\'s running like new. Very professional and friendly.' },
      { author: 'Margaret S.', rating: 5, date: '2026-02-18', text: 'I\'d been struggling with my new laptop for weeks. James set everything up perfectly and showed me how to use it. Patient, kind, and very knowledgeable.' },
      { author: 'Tony B.', rating: 4, date: '2026-02-05', text: 'Sorted out my printer connection issues quickly. Very helpful and reasonably priced.' },
    ],
  },
  {
    id: 'tech-sarah-k',
    name: 'Sarah K.',
    emoji: '👩‍💻',
    title: 'iPhone, iPad & Mac Expert',
    location: 'London (South)',
    bio: 'As a former Apple Store employee, I know Apple products inside and out. I help people get the most from their iPhones, iPads, and Macs — from setting up a new phone to recovering lost photos, sorting out iCloud problems, and teaching people how to use their devices confidently.',
    specialities: ['iPhone & iPad Setup', 'iCloud & Photo Library', 'macOS Help', 'App Problems', 'Data Transfer & Backup'],
    rating: 4.8,
    reviewCount: 63,
    jobsCompleted: 79,
    responseTime: 'Usually replies within 3 hours',
    memberSince: 'March 2024',
    verified: true,
    badges: ['Top Rated', 'ID Verified', 'Apple Specialist'],
    reviews: [
      { author: 'Linda C.', rating: 5, date: '2026-03-18', text: 'Sarah transferred all my photos from my old phone to my new one and showed me how iCloud works. She was so patient and explained everything perfectly. Amazing service.' },
      { author: 'Robert P.', rating: 5, date: '2026-03-05', text: 'Had a problem with my MacBook not connecting to the internet. Sarah diagnosed it remotely within minutes and talked me through the fix. Brilliant.' },
      { author: 'Claire M.', rating: 4, date: '2026-02-22', text: 'Very helpful and knowledgeable. Sorted my iCloud storage problem and showed me how to free up space properly.' },
    ],
  },
  {
    id: 'tech-hassan-m',
    name: 'Hassan M.',
    emoji: '🧑‍💻',
    title: 'Security & Scam Recovery Specialist',
    location: 'Birmingham',
    bio: 'I\'m passionate about keeping people safe online. I\'ve helped dozens of people recover from scams, secure their accounts, and protect themselves in the future. I also help set up two-factor authentication, secure email, and safe browsing on all devices.',
    specialities: ['Scam Recovery', 'Account Security', 'Two-Factor Authentication', 'Virus & Malware Removal', 'Online Safety Setup'],
    rating: 5.0,
    reviewCount: 41,
    jobsCompleted: 54,
    responseTime: 'Usually replies within 1 hour',
    memberSince: 'June 2024',
    verified: true,
    badges: ['Top Rated', 'ID Verified', 'Security Expert'],
    reviews: [
      { author: 'Joan A.', rating: 5, date: '2026-03-20', text: 'I was scammed online and was in a panic. Hassan responded immediately, helped me change all my passwords, contacted my bank, and made me feel safe again. Incredible support.' },
      { author: 'Peter N.', rating: 5, date: '2026-03-08', text: 'Hassan set up two-factor authentication on all my accounts and explained why it\'s so important. I feel so much more confident about my security now.' },
      { author: 'Anne F.', rating: 5, date: '2026-02-14', text: 'Turned up within an hour, removed the ransomware from my PC and recovered my files. Cannot recommend highly enough.' },
    ],
  },
];

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const sz = size === 'lg' ? 'h-5 w-5' : 'h-3.5 w-3.5';
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(n => (
        <Star
          key={n}
          className={`${sz} ${n <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`}
        />
      ))}
    </span>
  );
}

// Directory page listing all technicians
function TechnicianDirectory() {
  return (
    <>
      <SEOHead
        title="Our Technicians — TekSure"
        description="Browse TekSure's vetted, friendly technicians. Each one is ID-verified and rated by real customers."
      path="/technicians"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border py-10 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-primary">Our Technicians</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every TekSure technician is ID-verified, background-checked, and rated by real customers.
            </p>
          </div>
        </section>

        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNICIANS.map(tech => (
              <Card key={tech.id} className="rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                      {tech.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-semibold text-sm">{tech.name}</h3>
                        {tech.verified && <span title="ID Verified"><Shield className="h-3 w-3 text-blue-500 shrink-0" aria-label="ID Verified" /></span>}
                      </div>
                      <p className="text-xs text-muted-foreground">{tech.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <StarRating rating={tech.rating} />
                        <span className="text-xs text-muted-foreground">{tech.rating} ({tech.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3" /> {tech.location}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tech.specialities.slice(0, 3).map(s => (
                      <span key={s} className="text-xs bg-muted rounded-full px-2 py-0.5 text-muted-foreground">{s}</span>
                    ))}
                    {tech.specialities.length > 3 && (
                      <span className="text-xs bg-muted rounded-full px-2 py-0.5 text-muted-foreground">+{tech.specialities.length - 3} more</span>
                    )}
                  </div>
                  <Button asChild size="sm" className="w-full gap-2 rounded-xl">
                    <Link to={`/technicians/${tech.id}`}>View profile <ArrowRight className="h-3 w-3" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm mb-3">Ready to book?</p>
            <Button asChild size="lg" className="gap-2 rounded-xl">
              <Link to="/book">Book a Technician <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function TechnicianProfile() {
  const { id } = useParams<{ id: string }>();
  const tech = TECHNICIANS.find(t => t.id === id);

  if (!id || !tech) {
    return <TechnicianDirectory />;
  }

  return (
    <>
      <SEOHead
        title={`${tech.name} — TekSure Technician`}
        description={`${tech.title} in ${tech.location}. ${tech.rating} stars from ${tech.reviewCount} reviews.`}
      path={`/technicians/${tech.id}`}
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <Link
            to="/technicians"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> All technicians
          </Link>

          {/* Profile header */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-6">
              <div className="flex gap-5">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl shrink-0">
                  {tech.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h1 className="text-xl font-bold">{tech.name}</h1>
                    {tech.verified && (
                      <span className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                        <Shield className="h-3 w-3" /> ID Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{tech.title}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <StarRating rating={tech.rating} size="lg" />
                    <span className="font-semibold">{tech.rating}</span>
                    <span className="text-sm text-muted-foreground">({tech.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {tech.location}
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tech.badges.map(badge => (
                  <Badge key={badge} variant="secondary" className="gap-1">
                    <Award className="h-3 w-3" /> {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-3 mb-6">
            {[
              { label: 'Jobs completed', value: tech.jobsCompleted.toString(), icon: CheckCircle2 },
              { label: 'Average rating', value: `${tech.rating} / 5`, icon: Star },
              { label: 'Response time', value: tech.responseTime, icon: Clock },
            ].map(stat => (
              <Card key={stat.label} className="rounded-2xl border border-border bg-card">
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-1.5" />
                  <p className="font-bold text-sm">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-5">
              <h2 className="font-semibold mb-3">About {tech.name.split(' ')[0]}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{tech.bio}</p>
              <p className="text-xs text-muted-foreground mt-3">TekSure member since {tech.memberSince}</p>
            </CardContent>
          </Card>

          {/* Specialities */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-5">
              <h2 className="font-semibold mb-3">Specialities</h2>
              <div className="flex flex-wrap gap-2">
                {tech.specialities.map(s => (
                  <span key={s} className="flex items-center gap-1.5 text-sm bg-primary/5 border border-primary/20 rounded-full px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {s}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card className="mb-6 rounded-2xl border border-border bg-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Customer Reviews</h2>
                <div className="flex items-center gap-1.5">
                  <StarRating rating={tech.rating} />
                  <span className="text-sm font-medium">{tech.rating}</span>
                  <span className="text-xs text-muted-foreground">({tech.reviewCount})</span>
                </div>
              </div>
              <div className="space-y-4">
                {tech.reviews.map((review, i) => (
                  <div key={i} className={`pb-4 ${i < tech.reviews.length - 1 ? 'border-b border-border' : ''}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{review.author}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Book CTA */}
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-5 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <p className="font-semibold">Book {tech.name.split(' ')[0]} for your problem</p>
                <p className="text-sm text-muted-foreground mt-0.5">From $49 for the first hour. No fix, no charge.</p>
              </div>
              <Button asChild className="gap-2 shrink-0 rounded-xl">
                <Link to="/book">Book now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
