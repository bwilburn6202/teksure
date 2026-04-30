import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function SeniorTutoringIncomeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Tutoring Income for Senior Teachers | TekSure" description="Earn through Wyzant, VIPKid, Tutor.com. Senior tutors share knowledge online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Tutoring</h1>
          <p className="text-lg text-muted-foreground">Teach what you know. Get paid.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wyzant</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest tutoring platform.</li>
              <li>Set your own rate.</li>
              <li>$25-$100+/hour typical.</li>
              <li>Math, English, music, languages.</li>
              <li>Online or in-person.</li>
              <li>Free to join, 25% fee.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tutor.com</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>School + library partnerships.</li>
              <li>Hourly pay, scheduled.</li>
              <li>$20-$30/hour.</li>
              <li>Many subjects.</li>
              <li>Reliable income.</li>
              <li>Background check + interview.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VIPKid alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Teach English to Chinese kids.</li>
              <li>Late-night/early-morning hours.</li>
              <li>$15-$25/hour.</li>
              <li>Time zone challenge.</li>
              <li>Fun for retired teachers.</li>
              <li>Schedule flexible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for retired teachers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use existing teaching skills.</li>
              <li>Subject expertise leverages.</li>
              <li>Flexibility of retirement.</li>
              <li>Helping students rewarding.</li>
              <li>Set hours that fit you.</li>
              <li>Mix passion + income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior expertise areas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Long-known subjects (math, history).</li>
              <li>Foreign language native speakers.</li>
              <li>Specialized fields — science, business.</li>
              <li>Music lessons.</li>
              <li>Art instruction.</li>
              <li>Test prep (SAT, ACT, etc.).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apply to Wyzant — verify subjects.</li>
              <li>Get profile photographed.</li>
              <li>Build profile + background.</li>
              <li>First students slow.</li>
              <li>Reviews build over months.</li>
              <li>Eventually steady stream.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Helping students = meaningful work</h3>
            <p className="text-sm text-muted-foreground">Many retired teachers + professionals miss working. Online tutoring on Wyzant lets you keep teaching from home. Set your own hours + rate. Many seniors earn $20K-$60K+/year part-time. Combined with the joy of helping students succeed — this is high-meaning retirement work.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
