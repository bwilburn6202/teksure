import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function EdXCoursesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="edX Courses for Senior Learners | TekSure" description="Free Harvard, MIT, Stanford courses on edX. Senior lifelong learning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">edX</h1>
          <p className="text-lg text-muted-foreground">University courses, often free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is edX?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Founded by Harvard + MIT.</li>
              <li>3,000+ university courses.</li>
              <li>Audit free for most courses.</li>
              <li>Pay $50-$300 for verified certificate.</li>
              <li>Senior-friendly — learn at your pace.</li>
              <li>30+ million students worldwide.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audit free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Watch all video lectures.</li>
              <li>Read course materials.</li>
              <li>Some quizzes free.</li>
              <li>No certificate without paying.</li>
              <li>Learn for love of learning.</li>
              <li>Stanford-quality at no cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-popular courses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HarvardX: The Civil War.</li>
              <li>MITx: Introduction to Philosophy.</li>
              <li>HarvardX: Justice with Michael Sandel.</li>
              <li>Genetics + Genealogy courses.</li>
              <li>Computer Science fundamentals.</li>
              <li>Hundreds of liberal arts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coursera alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Coursera — similar model.</li>
              <li>Free audit on most courses.</li>
              <li>$49/month for unlimited.</li>
              <li>Both excellent.</li>
              <li>Try both, pick favorite.</li>
              <li>Different course catalogs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior auditing tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start with one course.</li>
              <li>Don&apos;t commit to certificate first.</li>
              <li>Watch at your pace.</li>
              <li>Skip what doesn&apos;t interest.</li>
              <li>Take notes if helpful.</li>
              <li>No pressure — for joy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find courses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit edX.org.</li>
              <li>Browse by subject.</li>
              <li>Filter by free.</li>
              <li>Read course description.</li>
              <li>Check time commitment.</li>
              <li>Most courses 4-12 weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free Harvard courses</h3>
            <p className="text-sm text-muted-foreground">Many seniors don&apos;t realize they can audit Harvard, MIT, Stanford courses for FREE on edX. The same lectures, same readings as on-campus students. Skip certificate, get full education. Many seniors report this is the most stimulating retirement activity. CS50 (intro to computer science) is most popular — even at 70+ many enjoy it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
