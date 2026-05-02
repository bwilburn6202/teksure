import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function SeniorTaskApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="To-Do List Apps for Seniors — TekSure" description="Best free to-do apps for seniors — Apple Reminders, Google Tasks, Todoist." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CheckCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">To-Do List Apps</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t forget anything.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Reminders</h2><p>FREE on iPhone. Voice add: &ldquo;Hey Siri, remind me to take pills at 8.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Tasks</h2><p>FREE. Built into Gmail and Google Calendar.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Todoist</h2><p>Free version plenty. Best for cross-platform users.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microsoft To Do</h2><p>FREE. Best for Outlook users. Daily Suggestions feature.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Location reminders</h2><p>iPhone: &ldquo;Remind me to buy milk when I get to Walmart.&rdquo; Magic.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share lists</h2><p>Share with spouse. Both edit. Saves grocery list arguments.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add &ldquo;Reminders&rdquo; widget to home screen. See today&apos;s tasks at a glance.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
