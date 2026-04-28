import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Vote, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface StateInfo {
  abbr: string;
  name: string;
  registerUrl: string;
  verifyUrl: string;
  pollingPlaceUrl: string;
}

const STATES: StateInfo[] = [
  { abbr: 'AL', name: 'Alabama',       registerUrl: 'https://www.alabamavotes.gov/olvr/', verifyUrl: 'https://myinfo.alabamavotes.gov/VoterView/RegistrantSearch.do', pollingPlaceUrl: 'https://myinfo.alabamavotes.gov/VoterView/PollingPlaceSearch.do' },
  { abbr: 'AK', name: 'Alaska',        registerUrl: 'https://voterregistration.alaska.gov', verifyUrl: 'https://myvoterinformation.alaska.gov', pollingPlaceUrl: 'https://myvoterinformation.alaska.gov' },
  { abbr: 'AZ', name: 'Arizona',       registerUrl: 'https://servicearizona.com/VoterRegistration/selectLanguage', verifyUrl: 'https://my.arizona.vote/Default.aspx', pollingPlaceUrl: 'https://my.arizona.vote/PollingPlace.aspx' },
  { abbr: 'AR', name: 'Arkansas',      registerUrl: 'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-application', verifyUrl: 'https://www.voterview.ar-nova.org/voterview', pollingPlaceUrl: 'https://www.voterview.ar-nova.org/voterview' },
  { abbr: 'CA', name: 'California',    registerUrl: 'https://registertovote.ca.gov', verifyUrl: 'https://voterstatus.sos.ca.gov', pollingPlaceUrl: 'https://www.sos.ca.gov/elections/polling-place' },
  { abbr: 'CO', name: 'Colorado',      registerUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml', verifyUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml', pollingPlaceUrl: 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml' },
  { abbr: 'CT', name: 'Connecticut',   registerUrl: 'https://voterregistration.ct.gov/OLVR/welcome.do', verifyUrl: 'https://portaldir.ct.gov/sots/LookUp.aspx', pollingPlaceUrl: 'https://portaldir.ct.gov/sots/LookUp.aspx' },
  { abbr: 'DE', name: 'Delaware',      registerUrl: 'https://ivote.de.gov', verifyUrl: 'https://ivote.de.gov/VoterView', pollingPlaceUrl: 'https://ivote.de.gov/VoterView' },
  { abbr: 'FL', name: 'Florida',       registerUrl: 'https://registertovoteflorida.gov', verifyUrl: 'https://registration.elections.myflorida.com/CheckVoterStatus', pollingPlaceUrl: 'https://registration.elections.myflorida.com/CheckVoterStatus' },
  { abbr: 'GA', name: 'Georgia',       registerUrl: 'https://registertovote.sos.ga.gov', verifyUrl: 'https://mvp.sos.ga.gov', pollingPlaceUrl: 'https://mvp.sos.ga.gov' },
  { abbr: 'HI', name: 'Hawaii',        registerUrl: 'https://olvr.hawaii.gov', verifyUrl: 'https://olvr.hawaii.gov', pollingPlaceUrl: 'https://elections.hawaii.gov/voters/early-walk-in-voting/' },
  { abbr: 'ID', name: 'Idaho',         registerUrl: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ApplicationInstructions.aspx', verifyUrl: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/VoterSearch.aspx', pollingPlaceUrl: 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/VoterSearch.aspx' },
  { abbr: 'IL', name: 'Illinois',      registerUrl: 'https://ova.elections.il.gov', verifyUrl: 'https://ova.elections.il.gov/RegistrationLookup.aspx', pollingPlaceUrl: 'https://ova.elections.il.gov/RegistrationLookup.aspx' },
  { abbr: 'IN', name: 'Indiana',       registerUrl: 'https://indianavoters.in.gov', verifyUrl: 'https://indianavoters.in.gov', pollingPlaceUrl: 'https://indianavoters.in.gov' },
  { abbr: 'IA', name: 'Iowa',          registerUrl: 'https://sos.iowa.gov/elections/voterreg/index.html', verifyUrl: 'https://sos.iowa.gov/elections/voterreg/regtovote/search.aspx', pollingPlaceUrl: 'https://sos.iowa.gov/elections/voterreg/pollingplace/search.aspx' },
  { abbr: 'KS', name: 'Kansas',        registerUrl: 'https://www.kdor.ks.gov/apps/voterreg/default.aspx', verifyUrl: 'https://myvoteinfo.voteks.org/VoterView', pollingPlaceUrl: 'https://myvoteinfo.voteks.org/VoterView' },
  { abbr: 'KY', name: 'Kentucky',      registerUrl: 'https://vrsws.sos.ky.gov/ovrweb', verifyUrl: 'https://vrsws.sos.ky.gov/vic', pollingPlaceUrl: 'https://vrsws.sos.ky.gov/vic' },
  { abbr: 'LA', name: 'Louisiana',     registerUrl: 'https://voterportal.sos.la.gov', verifyUrl: 'https://voterportal.sos.la.gov', pollingPlaceUrl: 'https://voterportal.sos.la.gov' },
  { abbr: 'ME', name: 'Maine',         registerUrl: 'https://www.maine.gov/sos/cec/elec/voter-info/votreg.html', verifyUrl: 'https://www.maine.gov/cgi-bin/online/AbsenteeBallot/index.pl', pollingPlaceUrl: 'https://www.maine.gov/portal/government/edemocracy/voter_lookup.php' },
  { abbr: 'MD', name: 'Maryland',      registerUrl: 'https://elections.maryland.gov/voter_registration/application.html', verifyUrl: 'https://voterservices.elections.maryland.gov/VoterSearch', pollingPlaceUrl: 'https://voterservices.elections.maryland.gov/PollingPlaceSearch' },
  { abbr: 'MA', name: 'Massachusetts', registerUrl: 'https://www.sec.state.ma.us/ovr/', verifyUrl: 'https://www.sec.state.ma.us/wheredoivotema/bal/myelectioninfo.aspx', pollingPlaceUrl: 'https://www.sec.state.ma.us/wheredoivotema/bal/myelectioninfo.aspx' },
  { abbr: 'MI', name: 'Michigan',      registerUrl: 'https://mvic.sos.state.mi.us/RegisterVoter', verifyUrl: 'https://mvic.sos.state.mi.us', pollingPlaceUrl: 'https://mvic.sos.state.mi.us' },
  { abbr: 'MN', name: 'Minnesota',     registerUrl: 'https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationMain.aspx', verifyUrl: 'https://mnvotes.sos.state.mn.us/VoterStatus.aspx', pollingPlaceUrl: 'https://pollfinder.sos.state.mn.us' },
  { abbr: 'MS', name: 'Mississippi',   registerUrl: 'https://www.sos.ms.gov/Elections-Voting/Pages/Voter-Registration-Information.aspx', verifyUrl: 'https://www.msegov.com/sos/voter_registration/amiregistered/Search', pollingPlaceUrl: 'https://www.msegov.com/sos/voter_registration/amiregistered/Search' },
  { abbr: 'MO', name: 'Missouri',      registerUrl: 'https://s1.sos.mo.gov/elections/voterregistration/', verifyUrl: 'https://voteroutreach.sos.mo.gov/portal/', pollingPlaceUrl: 'https://voteroutreach.sos.mo.gov/portal/' },
  { abbr: 'MT', name: 'Montana',       registerUrl: 'https://sosmt.gov/elections/vote/', verifyUrl: 'https://app.mt.gov/voterinfo', pollingPlaceUrl: 'https://app.mt.gov/voterinfo' },
  { abbr: 'NE', name: 'Nebraska',      registerUrl: 'https://www.nebraska.gov/apps-sos-voter-registration/', verifyUrl: 'https://www.votercheck.necvr.ne.gov/voterview', pollingPlaceUrl: 'https://www.votercheck.necvr.ne.gov/voterview' },
  { abbr: 'NV', name: 'Nevada',        registerUrl: 'https://www.nvsos.gov/sosvoterservices/Registration/Step0.aspx', verifyUrl: 'https://www.nvsos.gov/votersearch', pollingPlaceUrl: 'https://www.nvsos.gov/votersearch' },
  { abbr: 'NH', name: 'New Hampshire', registerUrl: 'https://www.sos.nh.gov/elections/voters/register-vote', verifyUrl: 'https://app.sos.nh.gov/Public/PartyInfo.aspx', pollingPlaceUrl: 'https://app.sos.nh.gov/Public/PollingPlaceSearch.aspx' },
  { abbr: 'NJ', name: 'New Jersey',    registerUrl: 'https://voter.svrs.nj.gov/register', verifyUrl: 'https://voter.svrs.nj.gov/registration-check', pollingPlaceUrl: 'https://voter.svrs.nj.gov/polling-place-search' },
  { abbr: 'NM', name: 'New Mexico',    registerUrl: 'https://portal.sos.state.nm.us/OVR/WebPages/InstructionsStep1.aspx', verifyUrl: 'https://voterportal.servis.sos.state.nm.us', pollingPlaceUrl: 'https://voterportal.servis.sos.state.nm.us' },
  { abbr: 'NY', name: 'New York',      registerUrl: 'https://dmv.ny.gov/more-info/electronic-voter-registration-application', verifyUrl: 'https://voterlookup.elections.ny.gov', pollingPlaceUrl: 'https://voterlookup.elections.ny.gov' },
  { abbr: 'NC', name: 'North Carolina',registerUrl: 'https://www.ncsbe.gov/registering/how-register', verifyUrl: 'https://vt.ncsbe.gov/RegLkup/', pollingPlaceUrl: 'https://vt.ncsbe.gov/PPLkup/' },
  { abbr: 'ND', name: 'North Dakota',  registerUrl: 'https://www.sos.nd.gov/elections/voter/register-vote', verifyUrl: 'https://vip.sos.nd.gov', pollingPlaceUrl: 'https://vip.sos.nd.gov' },
  { abbr: 'OH', name: 'Ohio',          registerUrl: 'https://olvr.ohiosos.gov', verifyUrl: 'https://voterlookup.ohiosos.gov', pollingPlaceUrl: 'https://lookup.boe.ohio.gov/vtrapp/' },
  { abbr: 'OK', name: 'Oklahoma',      registerUrl: 'https://oklahoma.gov/elections/voter-registration.html', verifyUrl: 'https://okvoterportal.okelections.us/', pollingPlaceUrl: 'https://okvoterportal.okelections.us/' },
  { abbr: 'OR', name: 'Oregon',        registerUrl: 'https://sos.oregon.gov/voting/Pages/registration.aspx', verifyUrl: 'https://secure.sos.state.or.us/orestar/vr/showVoterSearch.do', pollingPlaceUrl: 'https://sos.oregon.gov/voting/Pages/drop-box-locator.aspx' },
  { abbr: 'PA', name: 'Pennsylvania',  registerUrl: 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx', verifyUrl: 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationStatus.aspx', pollingPlaceUrl: 'https://www.pavoterservices.pa.gov/Pages/PollingPlaceInfo.aspx' },
  { abbr: 'RI', name: 'Rhode Island',  registerUrl: 'https://vote.sos.ri.gov/Home/RegisterToVote', verifyUrl: 'https://vote.sos.ri.gov/Home/Voter', pollingPlaceUrl: 'https://vote.sos.ri.gov/Home/Voter' },
  { abbr: 'SC', name: 'South Carolina',registerUrl: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx', verifyUrl: 'https://info.scvotes.sc.gov/eng/voterinquiry/voterinformationrequest.aspx', pollingPlaceUrl: 'https://info.scvotes.sc.gov/eng/voterinquiry/voterinformationrequest.aspx' },
  { abbr: 'SD', name: 'South Dakota',  registerUrl: 'https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx', verifyUrl: 'https://vip.sdsos.gov', pollingPlaceUrl: 'https://vip.sdsos.gov' },
  { abbr: 'TN', name: 'Tennessee',     registerUrl: 'https://ovr.govote.tn.gov', verifyUrl: 'https://tnmap.tn.gov/voterlookup/', pollingPlaceUrl: 'https://tnmap.tn.gov/voterlookup/' },
  { abbr: 'TX', name: 'Texas',         registerUrl: 'https://www.votetexas.gov/register-to-vote/', verifyUrl: 'https://teamrv-mvp.sos.texas.gov/MVP/mvp.do', pollingPlaceUrl: 'https://teamrv-mvp.sos.texas.gov/MVP/mvp.do' },
  { abbr: 'UT', name: 'Utah',          registerUrl: 'https://secure.utah.gov/voterreg/index.html', verifyUrl: 'https://votesearch.utah.gov/voter-search/search/search-by-voter/voter-info', pollingPlaceUrl: 'https://votesearch.utah.gov/voter-search/search/search-by-voter/voter-info' },
  { abbr: 'VT', name: 'Vermont',       registerUrl: 'https://olvr.vermont.gov', verifyUrl: 'https://mvp.vermont.gov', pollingPlaceUrl: 'https://mvp.vermont.gov' },
  { abbr: 'VA', name: 'Virginia',      registerUrl: 'https://www.elections.virginia.gov/registration/how-to-register/', verifyUrl: 'https://www.elections.virginia.gov/registration/view-your-info/', pollingPlaceUrl: 'https://www.elections.virginia.gov/casting-a-ballot/polling-place/' },
  { abbr: 'WA', name: 'Washington',    registerUrl: 'https://voter.votewa.gov/WhereToVote.aspx', verifyUrl: 'https://voter.votewa.gov', pollingPlaceUrl: 'https://voter.votewa.gov' },
  { abbr: 'WV', name: 'West Virginia', registerUrl: 'https://ovr.sos.wv.gov', verifyUrl: 'https://services.sos.wv.gov/Elections/Voter/AmIRegisteredToVote', pollingPlaceUrl: 'https://services.sos.wv.gov/Elections/Voter/FindMyPollingPlace' },
  { abbr: 'WI', name: 'Wisconsin',     registerUrl: 'https://myvote.wi.gov/en-us/RegisterToVote', verifyUrl: 'https://myvote.wi.gov/en-us/MyVoterInfo', pollingPlaceUrl: 'https://myvote.wi.gov/en-us/FindMyPollingPlace' },
  { abbr: 'WY', name: 'Wyoming',       registerUrl: 'https://sos.wyo.gov/Elections/State/RegisteringToVote.aspx', verifyUrl: 'https://soswy.state.wy.us/Elections/VR/RegistrationSearch.aspx', pollingPlaceUrl: 'https://soswy.state.wy.us/Elections/VR/RegistrationSearch.aspx' },
  { abbr: 'DC', name: 'District of Columbia', registerUrl: 'https://www.vote4dc.com', verifyUrl: 'https://www.vote4dc.com/ApplyInstructions/Lookup', pollingPlaceUrl: 'https://www.vote4dc.com/ApplyInstructions/Lookup' },
];

export default function VoterInfoVerifier() {
  const [stateAbbr, setStateAbbr] = useState('');

  const state = STATES.find(s => s.abbr === stateAbbr);

  return (
    <>
      <SEOHead
        title="Voter Info Verifier"
        description="Verify your voter registration, find your polling place, and register to vote — through your state's official .gov portal. No third-party sites, no data collection."
        path="/tools/voter-info-verifier"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-red-50 dark:from-blue-950/20 dark:to-red-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Vote className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Voter Info Verifier</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick your state. We will give you the official .gov links — register, check your registration, find your polling place. No middleman.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Voter Info Verifier' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <label htmlFor="state" className="text-sm font-semibold mb-2 block">Pick your state</label>
              <select id="state" value={stateAbbr} onChange={(e) => setStateAbbr(e.target.value)}
                className="w-full max-w-sm rounded-md border border-border bg-background px-3 py-2 text-sm">
                <option value="">— Select a state —</option>
                {STATES.map(s => (
                  <option key={s.abbr} value={s.abbr}>{s.name}</option>
                ))}
              </select>
            </CardContent>
          </Card>

          {state && (
            <>
              <Card className="border-border mb-4">
                <CardContent className="p-5">
                  <Badge className="mb-2">{state.name}</Badge>
                  <p className="text-sm font-semibold mb-1">Register to vote</p>
                  <p className="text-xs text-muted-foreground mb-3">Online, free, official Secretary of State or election division.</p>
                  <a href={state.registerUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
                    {state.registerUrl} <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border mb-4">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-1">Verify you are registered</p>
                  <p className="text-xs text-muted-foreground mb-3">Make sure your registration is current and your address is right. Do this 30 days before any election.</p>
                  <a href={state.verifyUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
                    {state.verifyUrl} <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold mb-1">Find your polling place</p>
                  <p className="text-xs text-muted-foreground mb-3">Polling places change. Confirm yours a few days before, especially in primaries.</p>
                  <a href={state.pollingPlaceUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
                    {state.pollingPlaceUrl} <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </>
          )}

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch out for fake voter sites</p>
                <p className="text-muted-foreground">
                  Around election season, scammers spin up sites that look official to harvest your data or swing fees from "voter registration assistance". The only sites you should trust end in <strong>.gov</strong>. If a site asks for a Social Security Number, a credit card, or a fee — close it.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check election-season scam texts.</p>
              </Link>
              <Link to="/tools/government-benefits-portal" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Government Benefits Portal</p>
                <p className="text-xs text-muted-foreground mt-0.5">Other official .gov resources.</p>
              </Link>
              <Link to="/tools/ai-image-spotter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">AI Image Spotter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Check viral political images.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: bookmark your state\'s verify link. You will use it every couple of years.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
