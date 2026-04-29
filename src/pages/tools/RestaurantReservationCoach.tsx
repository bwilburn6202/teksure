import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function RestaurantReservationCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Restaurant Reservation Apps — OpenTable, Yelp, Resy | TekSure" description="Book a table from your phone in 30 seconds. Plain-English picks for OpenTable, Yelp, Resy — plus how to find the best restaurant nearby." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Restaurant Reservation Coach</h1>
          <p className="text-lg text-muted-foreground">Find a great spot. Book a table. No phone calls needed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📅 Reservation apps</h2>
            <ul className="space-y-3 text-sm">
              <li><strong>OpenTable</strong> (free) — biggest. Earn "points" toward gift cards as you dine. Best chain restaurants and casual spots.</li>
              <li><strong>Resy</strong> (free) — owned by American Express. Trendy and fine-dining spots. Often has reservations OpenTable doesn't.</li>
              <li><strong>Yelp Reservations</strong> (free) — built into the Yelp app. Less common, but works at some local spots.</li>
              <li><strong>Tock</strong> (free) — used by some upscale restaurants for prepaid prix fixe meals.</li>
              <li><strong>Restaurant's own app or website</strong> — sometimes the only way for popular places.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time setup (any app)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install the app from the App Store / Play Store.</li>
              <li>Make an account — name, email, phone.</li>
              <li>Add a credit card (some places hold a card for no-shows).</li>
              <li>Search for a restaurant by name or browse "Near Me".</li>
              <li>Pick a date and time. Choose how many people.</li>
              <li>Confirm. You'll get a text/email confirmation.</li>
              <li>Show the confirmation at the host stand — or just say your name.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🔍 Finding a great restaurant nearby</h2>
            <p className="font-semibold text-sm mt-2">Free apps to compare:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Google Maps</strong> — search "restaurants" → filter by cuisine, price ($, $$, $$$$). Reviews from millions of people, plus Google's "Reservation" button if available.</li>
              <li><strong>Yelp</strong> — opinionated reviews. Strong for breakfast spots, ethnic food, hidden gems.</li>
              <li><strong>TripAdvisor</strong> — better for restaurants while traveling. Tourist-skewed reviews, but the photos are useful.</li>
            </ul>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Trick:</strong> Sort by "Rating" but read the 3-star reviews — they\'re honest and balanced. 5-star reviews are often family. 1-star reviews are often disgruntled.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pro moves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Special occasion?</strong> Mention it in the "Notes" field when booking — anniversary, birthday. Many places do something nice (free dessert, card from the chef).</li>
              <li><strong>Dietary restrictions?</strong> Same — list "gluten free" or "vegetarian" so the kitchen plans.</li>
              <li><strong>Big group (8+)?</strong> Call the restaurant directly — apps often only book up to 6.</li>
              <li><strong>Cancellation:</strong> Almost every reservation has a cancel button right in the email. Use it — saves the restaurant a lost table and saves you a no-show fee.</li>
              <li><strong>Holiday and Valentine's:</strong> Book 2-4 weeks ahead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — calling still works</h3>
            <p className="text-sm text-muted-foreground">If an app shows "no tables available", calling the restaurant directly often finds one. They sometimes hold tables off the apps for walk-ins or regulars.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
