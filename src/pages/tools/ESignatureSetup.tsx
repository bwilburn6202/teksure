import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PenTool, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

type Service = 'docusign' | 'adobe' | 'dropbox-sign' | 'free';

interface SignService {
  name: string;
  who: string;
  freeTier: string;
  setup: string[];
  send: string[];
  notes: string[];
  link: string;
}

const SERVICES: Record<Service, SignService> = {
  'docusign': {
    name: 'DocuSign',
    who: 'Best for: the most widely used e-signature service in the US. If your bank, lawyer, or landlord sends a signature request, the chances are very high it comes from DocuSign.',
    freeTier: '3 free signature requests per month on a personal plan.',
    setup: [
      'Go to docusign.com and click "Free Trial" or "Sign Up".',
      'Enter your email and pick a password.',
      'Verify your email address through the link they send.',
      'Add your full legal name and a saved signature style.',
    ],
    send: [
      'From your dashboard, click "Start" then "Send an envelope".',
      'Upload the PDF or Word document you need signed.',
      'Add the recipient\'s name and email address.',
      'Drag a signature box onto the page where they should sign.',
      'Click "Send" — they will get an email with a secure link.',
    ],
    notes: [
      'Real DocuSign emails come from an address ending in docusign.net or docusign.com. Anything else is a scam.',
      'Recipients do not need a DocuSign account to sign — they only sign through the email link.',
      'Every signed document is stored in your account and emailed as a PDF to all parties.',
    ],
    link: 'https://support.docusign.com',
  },
  'adobe': {
    name: 'Adobe Acrobat Sign',
    who: 'Best for: people who already pay for Adobe Acrobat or Creative Cloud. The signing tool is built into Acrobat, so there is nothing extra to install.',
    freeTier: 'Included with paid Acrobat plans (Standard, Pro, or Creative Cloud). Free 7-day trial available.',
    setup: [
      'Open Adobe Acrobat (the paid version, not the free Reader).',
      'Sign in with your Adobe ID.',
      'Open the PDF you need signed.',
      'Click the "Sign" or "E-Sign" tool in the right-hand panel.',
    ],
    send: [
      'In Acrobat, open the document and click "Request E-Signatures".',
      'Add the recipient\'s name and email.',
      'Drop signature fields onto the page.',
      'Click "Send" — Adobe handles the email and tracking.',
    ],
    notes: [
      'Real Adobe Sign emails come from echosign.com or adobesign.com. Verify the sender domain before clicking.',
      'You can sign documents you receive without any paid plan — only the sender needs to pay.',
      'Saved signed documents go straight into your Adobe Document Cloud account.',
    ],
    link: 'https://helpx.adobe.com/sign/using/sign-document.html',
  },
  'dropbox-sign': {
    name: 'Dropbox Sign (formerly HelloSign)',
    who: 'Best for: people who already use Dropbox for files, or who want a simple, no-frills sender experience. Owned by Dropbox now, but it works whether you use Dropbox storage or not.',
    freeTier: '3 free signature requests per month on a free account.',
    setup: [
      'Go to sign.dropbox.com and click "Sign up free".',
      'Enter your email and pick a password.',
      'Verify your email through the link they send.',
      'Add your name and create a saved signature.',
    ],
    send: [
      'Click "Sign or send" from your dashboard.',
      'Upload your document (PDF, Word, or image).',
      'Add the recipient\'s name and email.',
      'Drag signature and date fields onto the page.',
      'Click "Send for signature".',
    ],
    notes: [
      'Real Dropbox Sign emails come from hellosign.com or dropboxsign.com.',
      'The free plan is one of the most generous of the big three services.',
      'Signed PDFs are emailed back automatically and saved in your account.',
    ],
    link: 'https://help.dropbox.com/sign',
  },
  'free': {
    name: 'Free options for occasional signing',
    who: 'Best for: people who only need to sign one document a year and do not want to create another account.',
    freeTier: 'Truly free, no account required for many of these.',
    setup: [
      'Open the PDF on your computer or phone.',
      'On a Mac: open in Preview, click the marker icon, then the signature icon.',
      'On Windows: open in Microsoft Edge or the free Adobe Acrobat Reader, click "Sign yourself".',
      'On iPhone or iPad: open in Files, tap the markup pen, tap "+" then "Signature".',
      'On Android: open in Google Drive or Adobe Reader and use the signature tool.',
    ],
    send: [
      'Add your saved signature to the document.',
      'Save the file with a new name (so the original stays intact).',
      'Email the signed PDF back to whoever asked for it.',
    ],
    notes: [
      'These methods are perfectly legal under US federal law for most documents.',
      'There is no signed audit trail (timestamps, IP address, etc.) — fine for casual forms, weaker for high-stakes contracts.',
      'For real estate, legal, or major financial documents, a paid service like DocuSign is a safer paper trail.',
    ],
    link: 'https://support.apple.com/guide/preview/sign-pdfs-prvw11793/mac',
  },
};

const SERVICE_OPTIONS: { id: Service; label: string }[] = [
  { id: 'docusign',     label: 'DocuSign' },
  { id: 'adobe',        label: 'Adobe Acrobat Sign' },
  { id: 'dropbox-sign', label: 'Dropbox Sign (HelloSign)' },
  { id: 'free',         label: 'Free, no-account options' },
];

export default function ESignatureSetup() {
  const [service, setService] = useState<Service>('docusign');
  const s = SERVICES[service];

  return (
    <>
      <SEOHead
        title="E-Signature Setup"
        description="Sign documents online safely. Compare DocuSign, Adobe Acrobat Sign, and Dropbox Sign, plus free options. Includes how to receive a signature request and avoid fake DocuSign scams."
        path="/tools/e-signature-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <PenTool className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">E-Signature Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Sign legal documents from your couch. A plain-English walkthrough of receiving a signature request, sending one yourself, and spotting the fake ones.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'E-Signature Setup' }]} />

          <Card className="border-emerald-300 bg-emerald-50 dark:bg-emerald-950/20 mb-6">
            <CardContent className="p-5">
              <p className="font-semibold mb-1 text-sm">Is this legally valid?</p>
              <p className="text-sm text-muted-foreground">
                Yes. Under the federal ESIGN Act of 2000, an electronic signature carries the same legal weight as a pen-and-paper signature for most documents — leases, real estate offers, work contracts, healthcare forms, and tax paperwork. A small number of items still need a wet signature (wills, some court filings, certain notarized documents). When in doubt, ask the person who sent the request.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                What makes a signature valid? Three things: you intended to sign, you agreed to use an electronic method, and the document keeps a record showing who signed and when. The big services handle all three for you.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-xl font-bold mb-3">Part 1 — Receiving an e-sign request</h2>
          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground mb-4">
                Most of the time, you will be on the receiving end. Here is what to expect when a real estate agent, lawyer, or HR person sends you a document to sign.
              </p>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Step by step</p>
              <ol className="space-y-1.5 mb-4">
                <li className="flex gap-2 text-sm">
                  <span className="text-primary font-semibold shrink-0">1.</span>
                  <span>You get an email titled something like "Please DocuSign: Lease agreement.pdf". The sender is the person you expected (your agent, your boss, your bank).</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-primary font-semibold shrink-0">2.</span>
                  <span>Check the sender domain first. A real DocuSign email comes from an address ending in <strong>docusign.net</strong>. If the email comes from "docu-sign.co" or "docusign.support-portal.com", stop — that is a phishing scam.</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-primary font-semibold shrink-0">3.</span>
                  <span>Click the "Review Document" button in the email. It opens in your web browser. You do not need to install anything or create an account.</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-primary font-semibold shrink-0">4.</span>
                  <span>Read the document. Use the scroll bar or arrow buttons to move through every page. Take your time.</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-primary font-semibold shrink-0">5.</span>
                  <span>When you reach the signature line, click the yellow "Sign" tag. A pop-up will ask you to type your full name and pick a signature style — or draw your own with your finger or mouse.</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-primary font-semibold shrink-0">6.</span>
                  <span>Click "Adopt and Sign", then "Finish" at the top. Done. You will get a copy of the fully signed document by email within a minute or two.</span>
                </li>
              </ol>

              <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
                <CardContent className="p-4 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Always download and save a copy</p>
                    <p className="text-muted-foreground">
                      Once a document is signed, download the PDF and save it to your computer or a cloud folder. Email links can expire after 90-180 days. Keeping your own copy means you always have the proof, even if the sender's account closes years later.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <h2 className="text-xl font-bold mb-3">Part 2 — Sending a signature request</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Need someone else to sign? Pick a service below to see how to set it up and send your first request.
          </p>

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Which service do you want to use?</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {SERVICE_OPTIONS.map(o => (
                  <button key={o.id} onClick={() => setService(o.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      service === o.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}>
                    <p className="font-medium text-sm">{o.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <Badge variant="outline" className="mb-2">{s.name}</Badge>
              <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {s.who}</p>
              <div className="grid sm:grid-cols-1 gap-2 mb-3">
                <Badge variant="outline" className="text-xs justify-start">Free tier: {s.freeTier}</Badge>
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Setup</p>
              <ol className="space-y-1.5 mb-4">
                {s.setup.map((step, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Send a request</p>
              <ol className="space-y-1.5 mb-4">
                {s.send.map((step, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Worth knowing</p>
              <ul className="space-y-1">
                {s.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm"><span className="text-primary shrink-0">•</span><span>{n}</span></li>
                ))}
              </ul>

              <a href={s.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                Official help <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 dark:bg-red-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out for fake DocuSign emails</p>
                <p className="text-muted-foreground mb-2">
                  Scammers send fake DocuSign emails by the millions, hoping you will click and hand over your password or download malware. Real signature emails follow a few clear rules:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-red-600 shrink-0">•</span><span>The sender address ends in <strong>docusign.net</strong> or <strong>docusign.com</strong>. Look at the full email address, not the display name.</span></li>
                  <li className="flex gap-2"><span className="text-red-600 shrink-0">•</span><span>The email mentions a specific document and a specific person you know.</span></li>
                  <li className="flex gap-2"><span className="text-red-600 shrink-0">•</span><span>It does NOT pressure you with threats like "sign in 24 hours or your account closes".</span></li>
                  <li className="flex gap-2"><span className="text-red-600 shrink-0">•</span><span>If you were not expecting a document, do not click. Call the person who supposedly sent it on a phone number you already know.</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Prefer paper? Print and mail still works</p>
              <p className="text-sm text-muted-foreground mb-2">
                You are never required to sign electronically. Federal law gives you the right to opt out and use a wet signature. If you would rather print and mail:
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Reply to the sender and ask them to email you a plain PDF.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Print the document, sign in blue or black ink, and date every page they request.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Scan it back to PDF (use a phone scanner app like Adobe Scan) or mail the paper copy with tracking.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Keep the original in a folder labeled by year. Paper copies do not expire.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Five habits that keep e-signing safe</p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span><span>Always read every page before signing — yes, even the long ones.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Verify the sender domain matches the real service (docusign.net, adobesign.com, dropboxsign.com).</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Download a PDF copy of the signed document and save it where you can find it later.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>Turn on two-factor authentication for any signing account you create.</span></li>
                <li className="flex gap-2"><span className="text-primary">•</span><span>If a request feels rushed or unexpected, call the sender on a number you already have.</span></li>
              </ul>
              <Button asChild variant="outline" size="sm" className="mt-3">
                <a href="https://www.ftc.gov/business-guidance/resources/electronic-signatures-global-and-national-commerce-act" target="_blank" rel="noreferrer">
                  FTC: ESIGN Act overview <ChevronRight className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check that suspicious DocuSign email before clicking.</p>
              </Link>
              <Link to="/tools/document-scanner-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Document Scanner Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Turn paper documents into clean PDFs with your phone.</p>
              </Link>
              <Link to="/tools/online-forms-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Forms Helper</p>
                <p className="text-xs text-muted-foreground mt-0.5">Walk through tricky online forms field by field.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
