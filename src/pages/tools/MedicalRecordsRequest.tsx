import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileHeart } from 'lucide-react';

export default function MedicalRecordsRequest() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Get Your Medical Records | TekSure" description="HIPAA gives you the right to copies of all your records. Plain-English steps to download from MyChart, request from old providers, and bring everything to a new doctor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Records Request</h1>
          <p className="text-lg text-muted-foreground">Federal law — they MUST give you copies.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Your rights (HIPAA)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal law guarantees access to YOUR records.</li>
              <li>Provider must respond in 30 days (one 30-day extension allowed).</li>
              <li>Can charge a "reasonable fee" — usually $0-50 for digital, $50-200 for paper.</li>
              <li>Free to send to another doctor.</li>
              <li>You can request errors corrected (Right to Amend).</li>
              <li>Refusal = file complaint at HHS.gov/HIPAA — they investigate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easiest method — patient portals</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>MyChart</strong> (Epic) — used by 60%+ of US hospitals. Free.</li>
              <li><strong>FollowMyHealth</strong> — second biggest portal.</li>
              <li><strong>HealtheLife / NextGen</strong> — other common portals.</li>
              <li>Most show: visit notes, lab results, imaging, medications, immunizations.</li>
              <li>Download PDF or share with another doctor with one click.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Request paper records (old providers)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Find provider&apos;s "Records" or "Release of Information" department.</li>
              <li>Fill out HIPAA Authorization form (download from their website).</li>
              <li>Specify: dates, types of records, how to send (digital, paper, fax).</li>
              <li>Mail or fax form. Keep a copy.</li>
              <li>Provider sends in 30 days.</li>
              <li>Templates at HHS.gov/HIPAA/for-individuals/medical-records.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Combine portals into one app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Health</strong> (iPhone) — connects to most US hospital portals. View all records in one place.</li>
              <li><strong>Google Health (limited)</strong> — Android partial support.</li>
              <li><strong>Healow</strong> — combines multiple portals.</li>
              <li><strong>MyMedicalLocker</strong> — paper-and-digital combiner.</li>
            </ul>
            <p className="text-sm mt-3">In Apple Health: Browse → Medical Records → Add Account → search for hospital → log in.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why bother</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>New doctor sees your full history → better diagnoses.</li>
              <li>Avoid duplicate tests ($300-3,000 each).</li>
              <li>Catch errors in records (15% have errors).</li>
              <li>Disability + insurance applications.</li>
              <li>Family members can access via "proxy" if you allow.</li>
              <li>Medication reconciliation (avoid bad interactions).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Build your own health folder</h3>
            <p className="text-sm text-muted-foreground">Once a year — download 12 months of records from each portal. Save in a folder labeled "[Year] Medical Records" on iCloud or Google Drive. Share access with spouse + adult kids. If something happens, family can hand records to ER doctor in 30 seconds.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
