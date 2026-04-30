import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Table } from 'lucide-react';

export default function GoogleSheetsBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Sheets Basics for Seniors | TekSure" description="Free spreadsheets. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Table className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Sheets</h1>
          <p className="text-lg text-muted-foreground">Free Excel. Track + organize.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Google Sheets?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE forever.</li>
              <li>Auto-saves to cloud.</li>
              <li>Share with family.</li>
              <li>Works on any device.</li>
              <li>Phone, tablet, computer.</li>
              <li>Same as Excel mostly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Open + create</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to sheets.google.com.</li>
              <li>Sign in with Google account.</li>
              <li>Click &quot;Blank&quot; for new sheet.</li>
              <li>Or pick template.</li>
              <li>Type name top-left.</li>
              <li>Auto-saved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Track expenses.</li>
              <li>Medication schedule.</li>
              <li>Family contacts list.</li>
              <li>Christmas card list.</li>
              <li>Bill due dates.</li>
              <li>Doctor appointments.</li>
              <li>Tax preparation worksheet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click cell, type, press Enter.</li>
              <li>Bold = Ctrl+B (Cmd+B Mac).</li>
              <li>Make formulas: =SUM(A1:A10).</li>
              <li>=AVERAGE(B1:B10) for averages.</li>
              <li>Resize column — drag right edge.</li>
              <li>Add row — right-click row number.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Templates save time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>File &gt; New from template.</li>
              <li>Budget templates built-in.</li>
              <li>To-do list template.</li>
              <li>Calendar template.</li>
              <li>Travel planner.</li>
              <li>Inventory list.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with family</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click blue &quot;Share&quot; button.</li>
              <li>Type email address.</li>
              <li>Choose viewer or editor.</li>
              <li>They get email link.</li>
              <li>Edit together in real-time.</li>
              <li>See who&apos;s viewing now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Help available</h3>
            <p className="text-sm text-muted-foreground">YouTube — &quot;Google Sheets for beginners&quot;. Help menu in Sheets — top right. Google Help Center. Library has Sheets books. Senior centers offer classes. Cousin or grandkid can show in 30 minutes. Once basics learned — opens countless uses. Free + valuable senior skill.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
