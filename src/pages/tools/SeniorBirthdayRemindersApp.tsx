import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeniorBirthdayRemindersApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Birthday Reminders | TekSure" description="Never forget family birthdays. Senior reminder apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Birthday Reminders</h1>
          <p className="text-lg text-muted-foreground">Senior never forget.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone built-in</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add birthday to Contacts.</li><li>Calendar shows.</li><li>Senior auto-recurring.</li><li>Free.</li><li>Set 1-week reminder.</li><li>Best simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Birthday app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free.</li><li>Pulls from Contacts + Facebook.</li><li>Senior comprehensive.</li><li>Card reminders.</li><li>Worth installing.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Card services</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Punkpost handwritten.</li><li>Greeting Island.</li><li>Senior personalized.</li><li>Mailed for you.</li><li>$5-$10 each.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Amazon birthday list</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set up wishlist.</li><li>Family knows what to get.</li><li>Senior simplifies.</li><li>Free.</li><li>Plus get reminders.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Calendar widget</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add Calendar widget home screen.</li><li>Senior daily glance.</li><li>Today + upcoming.</li><li>Birthdays visible.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior connection</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Birthday call/text means lots.</li><li>Family loves.</li><li>Senior thoughtful.</li><li>Worth effort.</li><li>Maintains relationships.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Add birthdays to Contacts = senior never forget</h3><p className="text-sm text-muted-foreground">Senior add all family birthdays to iPhone Contacts — Calendar auto-shows. Set 1-week reminders. Or Birthday app pulls from Facebook too. Punkpost handwritten cards $10. Family loves birthday call. Free + thoughtful relationship maintenance.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
