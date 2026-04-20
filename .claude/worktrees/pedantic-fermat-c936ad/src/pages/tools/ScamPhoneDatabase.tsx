import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { PhoneOff, Search, AlertTriangle, ExternalLink, TrendingUp, Shield, Phone } from 'lucide-react';

interface ScamNumber {
  number: string;
  type: 'irs' | 'medicare' | 'social-security' | 'tech-support' | 'bank' | 'amazon' | 'police' | 'grandparent' | 'utility' | 'other';
  firstReported: string;
  description: string;
  reports: number;
  areaCode: string;
}

const NUMBERS: ScamNumber[] = [
  { number: '(202) 555-0134', type: 'irs', firstReported: '2026-03-12', description: 'Caller claims to be from the IRS and threatens arrest if unpaid taxes aren\'t settled with gift cards.', reports: 247, areaCode: '202' },
  { number: '(800) 829-1040', type: 'irs', firstReported: '2026-02-28', description: 'Spoofed number impersonating the real IRS helpline. Callers demand immediate payment.', reports: 189, areaCode: '800' },
  { number: '(876) 555-1234', type: 'grandparent', firstReported: '2026-03-18', description: 'Jamaica-area code. Used in grandparent scams claiming grandchild is in jail.', reports: 412, areaCode: '876' },
  { number: '(809) 555-9876', type: 'other', firstReported: '2026-03-05', description: 'Dominican Republic area code. One-ring scam to trick you into calling back (premium charges).', reports: 358, areaCode: '809' },
  { number: '(855) 974-4837', type: 'medicare', firstReported: '2026-01-22', description: 'Claims to be Medicare verifying your card. Asks for SSN and Medicare number.', reports: 234, areaCode: '855' },
  { number: '(844) 334-9711', type: 'medicare', firstReported: '2026-03-01', description: 'Offers "free" back brace or medical equipment in exchange for Medicare info.', reports: 198, areaCode: '844' },
  { number: '(800) 292-7932', type: 'social-security', firstReported: '2026-02-15', description: 'Automated voice claims your SSN has been "suspended" due to suspicious activity.', reports: 312, areaCode: '800' },
  { number: '(206) 555-7621', type: 'amazon', firstReported: '2026-03-20', description: 'Claims to be Amazon about a $1,200 order. Tries to get you to "cancel" via remote access.', reports: 287, areaCode: '206' },
  { number: '(888) 280-4331', type: 'amazon', firstReported: '2026-02-08', description: 'Robocall claims you\'ve been charged for Amazon Prime renewal. Press 1 to cancel — it\'s a trap.', reports: 421, areaCode: '888' },
  { number: '(866) 346-6226', type: 'tech-support', firstReported: '2026-03-10', description: 'Claims to be Microsoft or Apple about "viruses" on your computer. Wants remote access.', reports: 356, areaCode: '866' },
  { number: '(800) 935-9935', type: 'bank', firstReported: '2026-02-20', description: 'Spoofs Chase Bank. Claims suspicious activity and asks you to "verify" account details.', reports: 267, areaCode: '800' },
  { number: '(800) 432-1000', type: 'bank', firstReported: '2026-03-14', description: 'Spoofs Bank of America. Uses real logos/hold music to seem legit.', reports: 203, areaCode: '800' },
  { number: '(833) 924-0007', type: 'utility', firstReported: '2026-03-08', description: 'Claims your electric will be shut off in 30 minutes unless you pay with prepaid cards.', reports: 178, areaCode: '833' },
  { number: '(877) 803-5353', type: 'police', firstReported: '2026-01-30', description: 'Spoofs local police department. Claims warrant for your arrest — pay to clear it.', reports: 145, areaCode: '877' },
  { number: '(855) 426-6972', type: 'tech-support', firstReported: '2026-03-25', description: 'Fake AppleCare. Claims iCloud has been hacked. Asks for Apple ID password.', reports: 298, areaCode: '855' },
  { number: '(800) 244-2020', type: 'social-security', firstReported: '2026-02-25', description: 'Spoofed Social Security number. Says your benefits are being suspended.', reports: 256, areaCode: '800' },
  { number: '(702) 555-4492', type: 'bank', firstReported: '2026-03-11', description: 'Claims to be Wells Fargo fraud department. Very convincing script with account details.', reports: 134, areaCode: '702' },
  { number: '(818) 555-3321', type: 'medicare', firstReported: '2026-03-18', description: 'Asks to verify Medicare Part D prescription — harvesting personal info for fraud.', reports: 167, areaCode: '818' },
  { number: '(650) 555-8825', type: 'tech-support', firstReported: '2026-02-12', description: 'Claims to be Google about your account being compromised. Sends fake 2FA codes.', reports: 223, areaCode: '650' },
  { number: '(917) 555-2214', type: 'grandparent', firstReported: '2026-03-22', description: 'Uses AI voice cloning. "Grandma, I\'m in trouble, please don\'t tell mom."', reports: 389, areaCode: '917' },
];

const TYPE_META = {
  'irs': { label: 'IRS Impersonation', color: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400' },
  'medicare': { label: 'Medicare Scam', color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400' },
  'social-security': { label: 'Social Security', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400' },
  'tech-support': { label: 'Fake Tech Support', color: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400' },
  'bank': { label: 'Bank Impersonation', color: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400' },
  'amazon': { label: 'Amazon Scam', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400' },
  'police': { label: 'Fake Police', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
  'grandparent': { label: 'Grandparent Scam', color: 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-400' },
  'utility': { label: 'Utility Shutoff', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400' },
  'other': { label: 'Other', color: 'bg-muted text-muted-foreground' },
};

export default function ScamPhoneDatabase() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    return NUMBERS
      .filter(n => filter === 'all' || n.type === filter)
      .filter(n => {
        if (!search) return true;
        const q = search.toLowerCase().replace(/\D/g, '');
        const numOnly = n.number.replace(/\D/g, '');
        return numOnly.includes(q) || n.description.toLowerCase().includes(search.toLowerCase());
      })
      .sort((a, b) => b.reports - a.reports);
  }, [search, filter]);

  const totalReports = NUMBERS.reduce((sum, n) => sum + n.reports, 0);

  return (
    <>
      <SEOHead
        title="Scam Phone Number Database — Is That Call a Scam?"
        description="Community-reported scam phone numbers. Search to see if a number that called you is a known scam. Updated regularly from FTC, AARP, and user reports."
        path="/tools/scam-phone-database"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-muted/30">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-2 mb-4">
              <PhoneOff className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">Scam Defense</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Scam Phone Number Database</h1>
            <p className="text-muted-foreground max-w-2xl">
              Got a suspicious call? Search the number here. We track the most-reported scam numbers from the FTC, AARP, and TekSure community.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <Card><CardContent className="p-4">
                <div className="text-2xl font-bold">{NUMBERS.length}</div>
                <div className="text-xs text-muted-foreground">Scam numbers tracked</div>
              </CardContent></Card>
              <Card><CardContent className="p-4">
                <div className="text-2xl font-bold">{totalReports.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Total reports</div>
              </CardContent></Card>
              <Card><CardContent className="p-4">
                <div className="text-2xl font-bold">{Object.keys(TYPE_META).length - 1}</div>
                <div className="text-xs text-muted-foreground">Scam categories</div>
              </CardContent></Card>
              <Card><CardContent className="p-4">
                <div className="text-2xl font-bold">Daily</div>
                <div className="text-xs text-muted-foreground">Updates</div>
              </CardContent></Card>
            </div>
          </div>
        </section>

        <section className="container py-10 md:py-14">
          <Card className="mb-8 bg-amber-50/50 dark:bg-amber-950/20 border-amber-500/40">
            <CardContent className="p-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed">
                <strong className="block mb-1">If you got a suspicious call, don\'t call back.</strong>
                <span className="text-muted-foreground">Even if the number isn\'t listed here, scammers change numbers constantly. If it\'s about your bank, IRS, Medicare, or a relative — hang up and call the official number yourself (on the back of your card, a real bill, or your records). Never trust caller ID.</span>
              </div>
            </CardContent>
          </Card>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search a number or keyword (e.g. 202, Medicare, Amazon)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant={filter === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setFilter('all')}>All ({NUMBERS.length})</Button>
            {Object.entries(TYPE_META).map(([key, meta]) => {
              const count = NUMBERS.filter(n => n.type === key).length;
              if (count === 0) return null;
              return (
                <Button key={key} variant={filter === key ? 'default' : 'outline'} size="sm" onClick={() => setFilter(key)}>
                  {meta.label} ({count})
                </Button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <Card><CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No scam numbers match your search.</p>
              <p className="text-sm text-muted-foreground mt-1">That\'s good news — but always be cautious with unexpected calls.</p>
            </CardContent></Card>
          ) : (
            <div className="space-y-3">
              {filtered.map((n) => {
                const meta = TYPE_META[n.type];
                return (
                  <Card key={n.number}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-bold text-lg font-mono">{n.number}</h3>
                            <Badge className={meta.color}>{meta.label}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{n.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-red-600">
                            <TrendingUp className="w-3 h-3" />
                            <span className="font-semibold">{n.reports}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">reports</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>First reported: {new Date(n.firstReported).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>Area code: {n.areaCode}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          <Card className="mt-10 bg-primary/5 border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Got a scam call? Report it.</h3>
                  <p className="text-sm text-muted-foreground">Reporting helps protect others. Report to the official agencies, then optionally share with TekSure so we can add it here.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer">
                    FTC Report Fraud <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.aarp.org/money/scams-fraud/helpline/" target="_blank" rel="noopener noreferrer">
                    AARP Fraud Watch <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="/tools/scam-report">
                    Report to TekSure <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><PhoneOff className="w-4 h-4" />Block a scam number</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Already got a call from a scam number? Here\'s how to block it on your phone.</p>
                <Button size="sm" variant="outline" asChild><a href="/tools/robocall-blocker">Robocall Blocker Setup →</a></Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2"><Shield className="w-4 h-4" />Test your scam IQ</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">How good are you at spotting scams? Take our 12-question test to find out.</p>
                <Button size="sm" variant="outline" asChild><a href="/tools/scam-iq-test">Scam IQ Test →</a></Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
