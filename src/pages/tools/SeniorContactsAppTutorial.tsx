import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus } from 'lucide-react';

export default function SeniorContactsAppTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Contacts App for Seniors | TekSure" description="Organize phone contacts. Photos, emergency contacts, family groups." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserPlus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contacts</h1>
          <p className="text-lg text-muted-foreground">Organize your contact list.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add contacts properly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap + to add new contact.</li>
              <li>Full name + nickname.</li>
              <li>Multiple phone numbers.</li>
              <li>Email + address.</li>
              <li>Photo (helpful at glance).</li>
              <li>Notes — relationship, medications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photos help memory</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add photos to all contacts.</li>
              <li>Photo shows on incoming calls.</li>
              <li>Easy identification at glance.</li>
              <li>Helpful for senior memory.</li>
              <li>Use family member photos.</li>
              <li>Logo for businesses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Emergency contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mark as ICE (In Case of Emergency).</li>
              <li>Add &quot;ICE&quot; before name.</li>
              <li>First responders look for ICE entries.</li>
              <li>Set up Medical ID also.</li>
              <li>Multiple ICE contacts ideal.</li>
              <li>Critical for solo seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family group.</li>
              <li>Doctors group.</li>
              <li>Friends group.</li>
              <li>Easy to find by category.</li>
              <li>Group text via group.</li>
              <li>Better than scrolling whole list.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Backup contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone — iCloud syncs automatically.</li>
              <li>Android — Google syncs.</li>
              <li>Lost phone won&apos;t lose contacts.</li>
              <li>New phone — sign in, contacts return.</li>
              <li>Verify backup turned on.</li>
              <li>Critical safeguard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share contact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap contact → Share Contact.</li>
              <li>Send via text or email.</li>
              <li>Recipient gets full contact info.</li>
              <li>Faster than reading number.</li>
              <li>Family shares doctor info.</li>
              <li>Saves phone tag.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Spend hour cleaning contacts</h3>
            <p className="text-sm text-muted-foreground">Most senior contact lists are messy — duplicate entries, old numbers, no photos. Spend one hour cleaning. Add photos to family. Mark ICE contacts. Group by category. Delete old/unused. Set up iCloud/Google backup. Result: easier-to-use phone, emergency-ready, organized. Worth the time.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
