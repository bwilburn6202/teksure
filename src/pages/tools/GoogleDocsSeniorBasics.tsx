import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function GoogleDocsSeniorBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Docs Basics for Seniors | TekSure" description="Free word processor in your browser. Plain-English step-by-step for Google Docs, sharing, and collaboration." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Docs for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free Word — works anywhere.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <p className="text-sm">Free word processor in your browser. Works like Microsoft Word but free + auto-saves to cloud. Use on phone, iPad, computer — same document everywhere.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>docs.google.com</strong>.</li>
              <li>Sign in with Google account (Gmail = same).</li>
              <li>Click "+ Blank" to start new doc.</li>
              <li>Type — auto-saves every few seconds.</li>
              <li>Find document later at docs.google.com.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>View → Zoom → bigger text on screen.</li>
              <li>Format → Text → Size → 14 or 16pt.</li>
              <li>Use Title + Heading styles — auto-formats nicely.</li>
              <li>Voice typing — Tools → Voice typing — speak instead of type.</li>
              <li>Spellcheck on by default.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with family</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Click "Share" button (top right).</li>
              <li>Type their email address.</li>
              <li>Pick: Viewer, Commenter, OR Editor.</li>
              <li>Click Send.</li>
              <li>They get email with link.</li>
              <li>Multiple people can edit AT SAME TIME — see each other typing.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Memoir — write your story over years, family helps edit.</li>
              <li>Recipe collection — share with grandkids.</li>
              <li>Family genealogy notes — collaborative.</li>
              <li>Letters — drafts saved automatically.</li>
              <li>Annual letters — easy template.</li>
              <li>Family tree research notes.</li>
              <li>Estate planning summary for executor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sister apps</h3>
            <p className="text-sm text-muted-foreground"><strong>Google Sheets</strong> — free Excel. <strong>Google Slides</strong> — free PowerPoint. <strong>Google Forms</strong> — free polls + surveys. ALL free, all linked to your Google account. Use 1 — easier to use rest.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
