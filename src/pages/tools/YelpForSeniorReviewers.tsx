import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function YelpForSeniorReviewers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Yelp App for Senior Restaurant Reviewers | TekSure" description="Read + write Yelp reviews. Find senior-friendly restaurants nearby." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Yelp</h1>
          <p className="text-lg text-muted-foreground">Read reviews. Find restaurants.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Yelp does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app + website.</li>
              <li>Reviews of restaurants, services, businesses.</li>
              <li>Photos by patrons.</li>
              <li>Hours, phone, address.</li>
              <li>Filter by rating, distance, price.</li>
              <li>Most comprehensive review site.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Filter for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search &quot;senior friendly&quot; in reviews.</li>
              <li>Filter by 4+ stars.</li>
              <li>Check noise level reviews.</li>
              <li>Read about parking + accessibility.</li>
              <li>Browse photos before committing.</li>
              <li>Hours include holidays.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Write reviews</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap restaurant — Write Review.</li>
              <li>Honest experience helps others.</li>
              <li>Note senior-friendly aspects.</li>
              <li>Include accessibility details.</li>
              <li>Photos of food + space.</li>
              <li>5-star scale.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beyond restaurants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plumbers, electricians, contractors.</li>
              <li>Doctors + dentists.</li>
              <li>Auto repair shops.</li>
              <li>Hair salons + spa.</li>
              <li>All reviewed.</li>
              <li>Great for finding senior-friendly providers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read multiple reviews — extreme can mislead.</li>
              <li>Sort by &quot;newest&quot; — recent matters.</li>
              <li>3-4 stars often most accurate.</li>
              <li>Photos tell more than words.</li>
              <li>Check responses from owners.</li>
              <li>Verify hours before going.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yelp + Google Maps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Compare across both for fuller picture.</li>
              <li>Google often has more reviews.</li>
              <li>Yelp has more photos.</li>
              <li>Different reviewer demographics.</li>
              <li>Together better than either alone.</li>
              <li>Both free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Read 3-star reviews most</h3>
            <p className="text-sm text-muted-foreground">When researching, focus on 3-star reviews — they&apos;re often most balanced. 5-star reviews can be friends/family. 1-star reviews can be one bad day. 3-star reviews honestly describe pros + cons. Combine with photo browsing for accurate picture. Check hours just before going. Yelp transforms restaurant + service decisions.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
