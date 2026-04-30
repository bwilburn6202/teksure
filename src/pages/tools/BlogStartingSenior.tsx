import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Edit3 } from 'lucide-react';

const PLATFORMS = [
  { name: 'WordPress.com', cost: 'FREE / $5/mo', best: 'Most popular, big community.', good: 'Best WordPress.' },
  { name: 'Substack', cost: 'FREE', best: 'Email newsletter blog.', good: 'Best email.' },
  { name: 'Medium', cost: 'FREE', best: 'Built-in audience.', good: 'Best built-in audience.' },
  { name: 'Blogger', cost: 'FREE', best: 'Google-owned, simple.', good: 'Best simple free.' },
  { name: 'Squarespace', cost: '$16/mo', best: 'Beautiful templates.', good: 'Best beautiful.' },
];

export default function BlogStartingSenior() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blog Starting for Seniors | TekSure" description="Start a blog at any age. Plain-English senior beginner guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Edit3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Start a Blog</h1>
          <p className="text-lg text-muted-foreground">Share wisdom + experience. Free.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PLATFORMS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why blog?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Share life wisdom with strangers + family.</li>
              <li>Stay mentally sharp.</li>
              <li>Document family history.</li>
              <li>Connect with like-minded people.</li>
              <li>Possible side income.</li>
              <li>Therapy through writing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: Substack</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE to start.</li>
              <li>People sign up to email list.</li>
              <li>Write 1 email/week (or month).</li>
              <li>No tech setup needed.</li>
              <li>Can charge later.</li>
              <li>Larger audience than blog.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Topic ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family history + genealogy.</li>
              <li>Recipes from your kitchen.</li>
              <li>Career stories.</li>
              <li>Aging-in-place tips.</li>
              <li>Health journey.</li>
              <li>Hobbies — gardening, woodworking.</li>
              <li>Travel stories.</li>
              <li>Book reviews.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Writing basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Write what you know.</li>
              <li>500-1000 words/post good.</li>
              <li>Personal stories beat advice.</li>
              <li>Write, don&apos;t edit.</li>
              <li>Edit next day.</li>
              <li>Photos help.</li>
              <li>Stay consistent — weekly OK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build readership</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Share with family + friends first.</li>
              <li>Post on Facebook.</li>
              <li>Pinterest for photo content.</li>
              <li>Email signature link.</li>
              <li>Comment on similar blogs.</li>
              <li>Patience — years to grow.</li>
              <li>Consistency more than virality.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Famous senior bloggers</h3>
            <p className="text-sm text-muted-foreground">Examples: Ronni Bennett (Time Goes By), Sue Bock (Sue&apos;s Health Hub), Susan Sundwall. Many over 60. Some make $1,000+/mo. Most just enjoy connection. Library — books on blogging. Free templates. Just write. Start today. 100 posts in = real audience.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
