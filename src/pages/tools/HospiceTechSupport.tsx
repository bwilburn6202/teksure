import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function HospiceTechSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hospice Tech Support for Family | TekSure" description="Hospice care setup. Plain-English picks for tech that helps families through end-of-life — communication, memorials, grief support." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hospice Tech Support</h1>
          <p className="text-lg text-muted-foreground">For families navigating end-of-life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What hospice covers (Medicare)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% covered for terminal illness with 6-month prognosis.</li>
              <li>Nurse visits, aide bathing, meds related to terminal illness.</li>
              <li>Hospital bed, oxygen, supplies.</li>
              <li>Spiritual + grief counseling.</li>
              <li>Bereavement support 13+ months after.</li>
              <li>Inpatient respite — 5 days for caregiver break.</li>
              <li>Choose any Medicare-certified hospice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family communication tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CaringBridge</strong> (free) — share updates so family doesn&apos;t need 20 calls.</li>
              <li><strong>Lotsa Helping Hands</strong> — coordinate visitors, meals, errands.</li>
              <li><strong>Group text</strong> — for closest family.</li>
              <li><strong>Echo Show in patient&apos;s room</strong> — easy video calls from family.</li>
              <li><strong>Hospital chaplain / hospice spiritual care</strong> — free, all faiths.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Capture stories + voice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Voice memos</strong> — record stories while you can.</li>
              <li><strong>StoryCorps</strong> — interview, archived in Library of Congress.</li>
              <li><strong>Storyworth</strong> — too late if patient is non-verbal, but for early hospice can capture stories.</li>
              <li><strong>Photo book</strong> — together review old photos, label, store.</li>
              <li><strong>Voicemail recordings</strong> — save voicemails BEFORE phone is closed.</li>
              <li>Family treasures these decades later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After death — practical tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Legacy Contact</strong> — pre-set up for digital assets.</li>
              <li><strong>Google Inactive Account Manager</strong>.</li>
              <li><strong>Facebook Memorial</strong> — see /tools/memorial-facebook-guide.</li>
              <li><strong>Cancel Apple subscriptions, Netflix</strong> — use account.</li>
              <li><strong>Voicemail download</strong> — preserve voice.</li>
              <li><strong>Photo backup</strong> — preserve all family photos before phone returned.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grief support (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hospice bereavement program</strong> — free 13+ months after.</li>
              <li><strong>GriefShare</strong> — faith-based groups.</li>
              <li><strong>Compassionate Friends</strong> — for parental loss.</li>
              <li><strong>WidowsHope.org</strong> — for spouses.</li>
              <li><strong>Therapy</strong> — Medicare covers.</li>
              <li>988 Crisis Line — 24/7 free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Take care of yourself</h3>
            <p className="text-sm text-muted-foreground">Caregiving + grief is exhausting. 40% of family caregivers die before patient — from stress. Use respite. Accept help. Therapy is appropriate, not weakness. Sleep. Eat. The best gift you give your loved one is YOU staying present + healthy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
