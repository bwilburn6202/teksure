import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function MemorialFacebookGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memorialize a Facebook Account | TekSure" description="When someone passes, you can memorialize or delete their Facebook. Plain-English steps and what each option means." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memorial Facebook Guide</h1>
          <p className="text-lg text-muted-foreground">For when a loved one has passed.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Two options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Memorialize</strong> — account stays, "Remembering" appears next to name. Friends/family can post tributes. Doesn&apos;t appear in birthday reminders or "people you may know".</li>
              <li><strong>Delete</strong> — account permanently removed. Posts, photos, profile gone. Cannot undo.</li>
            </ul>
            <p className="text-sm mt-3">If unsure — memorialize. You can delete later. You cannot undo deletion.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to request memorialization</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>facebook.com/help/contact/234739086860192</strong></li>
              <li>Or search Facebook Help Center for "memorialization request".</li>
              <li>Fill in the deceased&apos;s full name and Facebook profile URL.</li>
              <li>Upload proof: death certificate OR obituary OR news article.</li>
              <li>Submit. Facebook responds in 1-3 weeks.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you&apos;re the legacy contact</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You get notified after Facebook memorializes the account.</li>
              <li>You can pin a tribute post at the top.</li>
              <li>Update profile photo and cover.</li>
              <li>Accept new friend requests (for distant relatives finding the page).</li>
              <li>You CANNOT log in as them, read messages, or remove old posts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to request deletion</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Only an immediate family member or executor can request.</li>
              <li>Go to <strong>facebook.com/help/contact/228813257197480</strong></li>
              <li>Provide full name, profile URL, your relationship.</li>
              <li>Upload death certificate AND proof of authority (will, power of attorney, etc.).</li>
              <li>Account permanently removed in 1-3 weeks.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save photos before deletion</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>If you&apos;re the legacy contact, you can request a download of their photos and posts.</li>
              <li>Click "Manage Account" on the memorialized profile → "Request a copy".</li>
              <li>Facebook emails a download link in a few days.</li>
              <li>Save the file — it has every photo and post.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other accounts to handle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Instagram</strong> — same memorialize/delete process. Same Facebook help links.</li>
              <li><strong>Apple iCloud</strong> — Legacy Contact (if set up) or court order.</li>
              <li><strong>Google/Gmail</strong> — Inactive Account Manager OR family request to access.</li>
              <li><strong>LinkedIn</strong> — request memorialization or removal at linkedin.com/help.</li>
              <li><strong>Twitter/X</strong> — request removal with death certificate.</li>
              <li><strong>Bank, credit cards, utilities</strong> — call. They have death procedures.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Take your time</h3>
            <p className="text-sm text-muted-foreground">There&apos;s no rush. Many families wait 6-12 months before memorializing or deleting. Old posts and photos can be a comfort. Do what feels right for your family.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
