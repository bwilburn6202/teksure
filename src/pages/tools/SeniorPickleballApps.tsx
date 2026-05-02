import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorPickleballApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pickleball Apps for Seniors — Senior Guide" description="Find courts, leagues, and tutorials." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pickleball Apps</h1>
          <p className="text-lg text-muted-foreground">Find courts and partners.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pickleheads</h2><p>Free. Find courts near you. See who's playing right now.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Court Reserve</h2><p>Many clubs use this to book courts. Reserve from the app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. DUPR rating</h2><p>Free rating system. Track skill level. Match with players at your level.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. YouTube tutorials</h2><p>Search Pickleball drills senior. Free coaches with thousands of helpful videos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Tournament finder</h2><p>Pickleball Brackets app. Find tournaments by age and skill.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Pickle pals</h2><p>Local Facebook groups. Search Pickleball + your city. Find regular games fast.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pickleball is the fastest-growing sport for ages 55+. Easier on knees than tennis.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
