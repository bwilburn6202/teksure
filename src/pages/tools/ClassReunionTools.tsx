import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function ClassReunionTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plan a Class Reunion | TekSure" description="High school + college reunions. Plain-English picks for planning tools, finding lost classmates." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Class Reunion Tools</h1>
          <p className="text-lg text-muted-foreground">Find them. Reconnect.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find lost classmates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Classmates.com</strong> — biggest US site. $40/yr Plus.</li>
              <li><strong>Facebook search</strong> — most found here, free.</li>
              <li><strong>LinkedIn</strong> — for career connections.</li>
              <li><strong>Spokeo / BeenVerified</strong> — last names + age + state.</li>
              <li><strong>Reunion Planner</strong> — planning tool.</li>
              <li><strong>Alumni associations</strong> — class lists.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Planning tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Eventbrite</strong> — sell tickets, manage RSVPs, send updates.</li>
              <li><strong>Facebook Event</strong> — for casual reunions.</li>
              <li><strong>Reunion Planner / Reunion Manager</strong> — purpose-built.</li>
              <li><strong>SignUpGenius</strong> — for potlucks + volunteers.</li>
              <li><strong>Google Forms</strong> — free survey for venue, dates, food.</li>
              <li><strong>Venmo / PayPal</strong> — collect ticket money.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plan 12-18 months ahead.</li>
              <li>Form 4-5 person committee.</li>
              <li>Hotel room block early.</li>
              <li>Build memorial section — list classmates who passed.</li>
              <li>Photo slideshow — yearbook + recent photos.</li>
              <li>Quiet area for hearing-aid users.</li>
              <li>Wheelchair accessibility check.</li>
              <li>Name tags WITH yearbook photo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Virtual reunion</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Zoom Meeting — up to 100 free for 40 min.</li>
              <li>Zoom Webinar — for larger groups.</li>
              <li>Pre-recorded video tributes from those who can&apos;t attend.</li>
              <li>Mix in-person + virtual = "hybrid".</li>
              <li>50%+ of reunions virtual / hybrid since 2020.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memory book</h3>
            <p className="text-sm text-muted-foreground">Compile reunion memory book — Storyworth, Shutterfly, or Google Docs. Each classmate writes 1 page. Photo + bio + favorite memory. Print + bind. Decades-treasured keepsake. Better than just a meal + drinks.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
