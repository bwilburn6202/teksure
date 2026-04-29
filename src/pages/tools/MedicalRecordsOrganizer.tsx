import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileHeart } from 'lucide-react';

export default function MedicalRecordsOrganizer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Records Organizer — Doctors, Meds, History | TekSure" description="Keep all your medical info in one safe place — accessible to family in emergencies. Plain-English organizer with printable templates." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileHeart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Records Organizer</h1>
          <p className="text-lg text-muted-foreground">Every doctor visit, every med, in one place — and family can find it.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">In an emergency, paramedics or ER staff need to know your meds, allergies, and conditions in seconds. Family caregivers need to be able to find this info if you can\'t communicate. A simple, organized record can be life-saving.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to include</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Doctors\' list</strong> — name, specialty, phone, address. Primary care first.</li>
              <li><strong>Insurance</strong> — Medicare card numbers, supplement plan, prescription plan, medical insurance card front/back photos.</li>
              <li><strong>Pharmacy</strong> — name, phone, address.</li>
              <li><strong>Medications</strong> — every drug, dose, how often, what for.</li>
              <li><strong>Supplements</strong> — vitamins and OTC.</li>
              <li><strong>Allergies</strong> — drug allergies and food.</li>
              <li><strong>Conditions</strong> — diagnoses (high BP, diabetes, AFib, etc.).</li>
              <li><strong>Surgeries / hospitalizations</strong> — date, procedure, hospital.</li>
              <li><strong>Vaccinations</strong> — flu, pneumonia, shingles, COVID, RSV, tetanus.</li>
              <li><strong>Implants</strong> — pacemaker, joint replacements (model + serial).</li>
              <li><strong>Emergency contacts</strong> — spouse, kids, healthcare proxy.</li>
              <li><strong>Advance directive</strong> — DNR/DNI status, living will location.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to keep it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Health Medical ID</strong> — on your iPhone lock screen. Paramedics check this first. (See our Medical ID Setup tool.)</li>
              <li><strong>Free app: My Medical Info</strong>, MedHelper, or CareZone — store more detail than Medical ID allows.</li>
              <li><strong>Printed copy</strong> — kept on the fridge, in your wallet, in your spouse\'s wallet, with your healthcare proxy.</li>
              <li><strong>Cloud (Google Drive / iCloud)</strong> — PDF you can email to a new doctor in seconds.</li>
              <li><strong>MyChart / patient portals</strong> — your doctor\'s office already has most of this; add your data through their messaging.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Printable template idea</h2>
            <p className="text-sm mb-2">Open a Google Doc or Word document. Header it "Medical Information for [Your Name]". Print 3 copies:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>One for your fridge (in a clear plastic sleeve).</li>
              <li>One for your wallet (folded small).</li>
              <li>One for your spouse / healthcare proxy.</li>
            </ul>
            <p className="text-sm mt-2">Update once a year — birthday or January 1st. Throw out old copies.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"In Case of Emergency" envelope</h2>
            <p className="text-sm">A clearly labeled envelope on the kitchen counter with:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Your printed medical info sheet.</li>
              <li>Photocopy of insurance cards.</li>
              <li>Phone numbers of close family.</li>
              <li>Healthcare proxy paperwork.</li>
              <li>Living will / advance directive.</li>
              <li>List of all online accounts and where the password manager is.</li>
            </ul>
            <p className="text-sm mt-2">If you collapse and paramedics enter the kitchen — they\'ll find this. Saves hours of family panic.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tell people where it is</h3>
            <p className="text-sm text-muted-foreground">No use organizing all this if no one knows where to find it. Tell your spouse, your adult children, and your healthcare proxy. Show them. Repeat at the next family dinner.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
