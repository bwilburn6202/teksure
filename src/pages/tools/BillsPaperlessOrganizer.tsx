import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function BillsPaperlessOrganizer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bills & Paperless Organizer — Stop the Mountain of Paper | TekSure" description="Drowning in bills, statements, and account paperwork? Plain-English steps to go paperless safely — and how to organize digital bills." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bills & Paperless Organizer</h1>
          <p className="text-lg text-muted-foreground">Stop the paper mountain. Pay on time. Find everything.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Go paperless safely</h2>
            <p className="text-sm mb-2">For each bill (electric, gas, water, internet, phone, insurance, credit cards, banks):</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Sign in to your account at the company\'s website.</li>
              <li>Look for "Settings", "Statements", or "Communications".</li>
              <li>Switch to "Email statements" or "Paperless billing".</li>
              <li>Many companies give you $5-10 credit just for switching.</li>
            </ol>
            <p className="text-sm mt-2 text-muted-foreground">Keep paper for: tax-related (statements you\'d need for taxes), legal documents, deeds, original wills.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — One inbox folder for bills</h2>
            <p className="text-sm mb-2">Inside Gmail or Outlook, make a folder called "Bills". Set up rules so every bill email auto-files there:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Open an email from your electric company.</li>
              <li>Click "Filter messages like this" or "Create rule".</li>
              <li>Action: "Move to folder Bills".</li>
              <li>Now every future bill from that company auto-files. Once a week, open the folder, pay each.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — AutoPay for predictable bills</h2>
            <p className="text-sm">Set autopay for fixed-amount bills:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Internet, mortgage, insurance — same every month.</li>
              <li>Credit card minimum payment as a safety net (so you never miss a payment).</li>
            </ul>
            <p className="text-sm mt-2">Don\'t autopay variable bills you want to review (electric, water) — just calendar a "pay bills" hour each month.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4 — Save records you might need</h2>
            <p className="text-sm mb-2">Make a "Tax 2025" folder in iCloud, Google Drive, or OneDrive. Throughout the year, drop in:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>1099s, W-2s, SSA statements (when they arrive in January).</li>
              <li>Charity donation receipts.</li>
              <li>Property tax bill.</li>
              <li>Mortgage 1098.</li>
              <li>Medical expense receipts (if you might itemize).</li>
            </ul>
            <p className="text-sm mt-2">Come tax time — open the folder, all there.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps that organize bills for you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rocket Money / Truebill (free)</strong> — finds every subscription, alerts on price changes.</li>
              <li><strong>Prism Bills</strong> — pulls bills from 11,000+ companies into one inbox.</li>
              <li><strong>Mint replacement (Monarch, Copilot)</strong> — sees all your accounts.</li>
              <li><strong>Your bank\'s "Bill Pay"</strong> — schedule payments to anyone, including landlords or contractors who don\'t accept online payments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Shred everything paper</h3>
            <p className="text-sm text-muted-foreground">Once you have the digital version, shred the paper bill (account number on it = ID-theft risk). $40 cross-cut shredder lasts years. Most senior centers also have free shred days a few times a year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
