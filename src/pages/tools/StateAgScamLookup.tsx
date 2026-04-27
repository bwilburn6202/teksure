import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Gavel,
  MapPin,
  Phone,
  ExternalLink,
  Building2,
  Globe,
  ShieldAlert,
  ShieldCheck,
  Flag,
  ListChecks,
  FileText,
  Lock,
  HandHeart,
  Heart,
  Clock,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Users,
  HelpCircle,
  MessageSquare,
  ArrowUpRight,
  Landmark,
  CreditCard,
  FileSearch,
  Newspaper,
  Headphones,
  Siren,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';

/* ── Types ─────────────────────────────────────────────── */
interface ScamPage {
  label: string;
  url: string;
}

interface StateEntry {
  code: string;           // USPS abbreviation
  name: string;
  ag: string;             // Attorney General name — placeholder where uncertain
  agWebsite: string;      // homepage, no protocol
  hotline: string;        // Consumer Protection phone
  hotlineNote?: string;   // extra context for the phone number
  complaintForm: string;  // URL to online complaint form
  scamPages: ScamPage[];  // sub-pages for fraud, senior abuse, identity theft, robocalls
  stateDoNotCall?: string;// state-specific do-not-call registry URL (if different from federal)
  apsHotline: string;     // Adult Protective Services / elder abuse reporting
  has211: boolean;        // 211 available statewide
  smallClaimsMax: number; // dollar threshold
}

/* ── State data (51 entries: 50 states + DC) ───────────── */
const STATES: StateEntry[] = [
  {
    code: 'AL',
    name: 'Alabama',
    ag: '<current AG>',
    agWebsite: 'alabamaag.gov',
    hotline: '1-800-392-5658',
    complaintForm: 'https://www.alabamaag.gov/consumer-complaint/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.alabamaag.gov/consumer-protection/' },
      { label: 'Identity Theft', url: 'https://www.alabamaag.gov/identity-theft/' },
      { label: 'Elder Abuse', url: 'https://www.alabamaag.gov/elder-abuse/' },
    ],
    apsHotline: '1-800-458-7214',
    has211: true,
    smallClaimsMax: 6000,
  },
  {
    code: 'AK',
    name: 'Alaska',
    ag: '<current AG>',
    agWebsite: 'law.alaska.gov',
    hotline: '1-888-576-2529',
    complaintForm: 'https://www.law.alaska.gov/department/civil/consumer/cpindex.html',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.law.alaska.gov/department/civil/consumer/cpindex.html' },
      { label: 'Senior Fraud', url: 'https://www.law.alaska.gov/department/civil/consumer/seniors.html' },
    ],
    apsHotline: '1-800-478-9996',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'AZ',
    name: 'Arizona',
    ag: '<current AG>',
    agWebsite: 'azag.gov',
    hotline: '1-800-352-8431',
    complaintForm: 'https://www.azag.gov/complaints/consumer',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.azag.gov/consumer' },
      { label: 'Senior Scams', url: 'https://www.azag.gov/seniors' },
      { label: 'Identity Theft', url: 'https://www.azag.gov/consumer/identity-theft' },
    ],
    apsHotline: '1-877-767-2385',
    has211: true,
    smallClaimsMax: 3500,
  },
  {
    code: 'AR',
    name: 'Arkansas',
    ag: '<current AG>',
    agWebsite: 'arkansasag.gov',
    hotline: '1-800-482-8982',
    complaintForm: 'https://arkansasag.gov/consumer-protection/file-a-consumer-complaint/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://arkansasag.gov/consumer-protection/' },
      { label: 'Senior Protection', url: 'https://arkansasag.gov/programs/senior-protection/' },
    ],
    apsHotline: '1-800-482-8049',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'CA',
    name: 'California',
    ag: 'Rob Bonta',
    agWebsite: 'oag.ca.gov',
    hotline: '1-800-952-5225',
    complaintForm: 'https://oag.ca.gov/contact/consumer-complaint-against-business-or-company',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://oag.ca.gov/consumers' },
      { label: 'Senior Scams', url: 'https://oag.ca.gov/seniors' },
      { label: 'Identity Theft', url: 'https://oag.ca.gov/idtheft' },
      { label: 'Privacy & Data', url: 'https://oag.ca.gov/privacy' },
    ],
    stateDoNotCall: undefined,
    apsHotline: '1-833-401-0832',
    has211: true,
    smallClaimsMax: 12500,
  },
  {
    code: 'CO',
    name: 'Colorado',
    ag: '<current AG>',
    agWebsite: 'coag.gov',
    hotline: '1-800-222-4444',
    complaintForm: 'https://coag.gov/file-complaint/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://coag.gov/office-sections/consumer-protection/' },
      { label: 'Stop Fraud Colorado', url: 'https://stopfraudcolorado.gov/' },
      { label: 'Identity Theft', url: 'https://stopfraudcolorado.gov/fraud-center/identity-theft.html' },
    ],
    stateDoNotCall: 'https://coloradonocall.com/',
    apsHotline: '1-844-264-5437',
    has211: true,
    smallClaimsMax: 7500,
  },
  {
    code: 'CT',
    name: 'Connecticut',
    ag: '<current AG>',
    agWebsite: 'portal.ct.gov/AG',
    hotline: '1-860-808-5318',
    complaintForm: 'https://portal.ct.gov/DCP/Complaint-Center/Complaint-Center',
    scamPages: [
      { label: 'Consumer Protection (DCP)', url: 'https://portal.ct.gov/DCP' },
      { label: 'Senior Resources', url: 'https://portal.ct.gov/AG/Seniors' },
    ],
    stateDoNotCall: 'https://portal.ct.gov/DCP/Trade-Practices-Division/Do-Not-Call-List',
    apsHotline: '1-888-385-4225',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'DE',
    name: 'Delaware',
    ag: '<current AG>',
    agWebsite: 'attorneygeneral.delaware.gov',
    hotline: '1-800-220-5424',
    complaintForm: 'https://attorneygeneral.delaware.gov/fraud/cpu/complaint/',
    scamPages: [
      { label: 'Consumer Protection Unit', url: 'https://attorneygeneral.delaware.gov/fraud/cpu/' },
      { label: 'Elder Abuse', url: 'https://attorneygeneral.delaware.gov/fraud/mfcu/' },
    ],
    apsHotline: '1-800-223-9074',
    has211: true,
    smallClaimsMax: 25000,
  },
  {
    code: 'DC',
    name: 'District of Columbia',
    ag: '<current AG>',
    agWebsite: 'oag.dc.gov',
    hotline: '1-202-442-9828',
    complaintForm: 'https://oag.dc.gov/consumer-protection/consumer-complaint-form',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://oag.dc.gov/consumer-protection' },
      { label: 'Seniors', url: 'https://oag.dc.gov/seniors' },
    ],
    apsHotline: '1-202-541-3950',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'FL',
    name: 'Florida',
    ag: '<current AG>',
    agWebsite: 'myfloridalegal.com',
    hotline: '1-866-966-7226',
    complaintForm: 'https://www.myfloridalegal.com/contact-us/file-a-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.myfloridalegal.com/consumer-protection' },
      { label: 'Senior Scams', url: 'https://www.myfloridalegal.com/consumer-protection/seniors-vs-crime' },
      { label: 'Identity Theft', url: 'https://www.myfloridalegal.com/consumer-protection/identity-theft' },
    ],
    stateDoNotCall: 'https://www.fdacs.gov/Consumer-Resources/Do-Not-Call',
    apsHotline: '1-800-962-2873',
    has211: true,
    smallClaimsMax: 8000,
  },
  {
    code: 'GA',
    name: 'Georgia',
    ag: '<current AG>',
    agWebsite: 'law.ga.gov',
    hotline: '1-404-651-8600',
    complaintForm: 'https://consumer.georgia.gov/consumer-complaints/file-consumer-complaint',
    scamPages: [
      { label: 'Consumer Protection Division', url: 'https://consumer.georgia.gov/' },
      { label: 'Senior Scams', url: 'https://consumer.georgia.gov/consumer-topics/scams-against-seniors' },
      { label: 'Identity Theft', url: 'https://consumer.georgia.gov/consumer-topics/identity-theft' },
    ],
    apsHotline: '1-866-552-4464',
    has211: true,
    smallClaimsMax: 15000,
  },
  {
    code: 'HI',
    name: 'Hawaii',
    ag: '<current AG>',
    agWebsite: 'ag.hawaii.gov',
    hotline: '1-808-587-4272',
    complaintForm: 'https://cca.hawaii.gov/ocp/consumer_complaint/',
    scamPages: [
      { label: 'Consumer Protection (OCP)', url: 'https://cca.hawaii.gov/ocp/' },
      { label: 'Elder Abuse', url: 'https://humanservices.hawaii.gov/ssd/home/adult-services/' },
    ],
    apsHotline: '1-808-832-5115',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'ID',
    name: 'Idaho',
    ag: '<current AG>',
    agWebsite: 'ag.idaho.gov',
    hotline: '1-800-432-3545',
    complaintForm: 'https://www.ag.idaho.gov/consumer-protection/file-a-complaint/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.ag.idaho.gov/consumer-protection/' },
      { label: 'Senior & Vulnerable Adults', url: 'https://www.ag.idaho.gov/consumer-protection/seniors/' },
    ],
    stateDoNotCall: 'https://www.ag.idaho.gov/consumer-protection/no-call-registry/',
    apsHotline: '1-208-334-3833',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'IL',
    name: 'Illinois',
    ag: '<current AG>',
    agWebsite: 'illinoisattorneygeneral.gov',
    hotline: '1-800-386-5438',
    complaintForm: 'https://illinoisattorneygeneral.gov/Consumer-Protection/Consumer-Complaint-Center',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://illinoisattorneygeneral.gov/Consumer-Protection' },
      { label: 'Senior Fraud Helpline', url: 'https://illinoisattorneygeneral.gov/Senior-Citizens' },
      { label: 'Identity Theft', url: 'https://illinoisattorneygeneral.gov/Identity-Theft' },
    ],
    apsHotline: '1-866-800-1409',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'IN',
    name: 'Indiana',
    ag: '<current AG>',
    agWebsite: 'in.gov/attorneygeneral',
    hotline: '1-800-382-5516',
    complaintForm: 'https://www.in.gov/attorneygeneral/consumer-protection-division/file-a-complaint/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.in.gov/attorneygeneral/consumer-protection-division/' },
      { label: 'Senior Consumer Fraud', url: 'https://www.in.gov/attorneygeneral/consumer-protection-division/consumer-resources/senior-consumer-fraud/' },
      { label: 'Identity Theft', url: 'https://www.in.gov/attorneygeneral/consumer-protection-division/id-theft/' },
    ],
    stateDoNotCall: 'https://www.in.gov/attorneygeneral/consumer-protection-division/consumer-resources/do-not-call-list/',
    apsHotline: '1-800-992-6978',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'IA',
    name: 'Iowa',
    ag: '<current AG>',
    agWebsite: 'iowaattorneygeneral.gov',
    hotline: '1-888-777-4590',
    complaintForm: 'https://www.iowaattorneygeneral.gov/for-consumers/file-a-consumer-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.iowaattorneygeneral.gov/for-consumers' },
      { label: 'Senior Scams', url: 'https://www.iowaattorneygeneral.gov/for-consumers/senior-and-elder-abuse' },
      { label: 'Identity Theft', url: 'https://www.iowaattorneygeneral.gov/for-consumers/identity-theft' },
    ],
    apsHotline: '1-800-362-2178',
    has211: true,
    smallClaimsMax: 6500,
  },
  {
    code: 'KS',
    name: 'Kansas',
    ag: '<current AG>',
    agWebsite: 'ag.ks.gov',
    hotline: '1-800-432-2310',
    complaintForm: 'https://ag.ks.gov/complaint-center',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://ag.ks.gov/public-safety/consumer-protection' },
      { label: 'Senior & Disabled', url: 'https://ag.ks.gov/public-safety/senior-disabled-victims' },
    ],
    stateDoNotCall: 'https://ag.ks.gov/public-safety/consumer-protection/no-call-list',
    apsHotline: '1-800-922-5330',
    has211: true,
    smallClaimsMax: 4000,
  },
  {
    code: 'KY',
    name: 'Kentucky',
    ag: '<current AG>',
    agWebsite: 'ag.ky.gov',
    hotline: '1-888-432-9257',
    complaintForm: 'https://ag.ky.gov/Protect%20Yourself/Consumer-Complaints/Pages/default.aspx',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://ag.ky.gov/Protect%20Yourself/Consumer-Protection/Pages/default.aspx' },
      { label: 'Scam Alerts', url: 'https://ag.ky.gov/Protect%20Yourself/Scam-Alerts/Pages/default.aspx' },
    ],
    apsHotline: '1-877-597-2331',
    has211: true,
    smallClaimsMax: 2500,
  },
  {
    code: 'LA',
    name: 'Louisiana',
    ag: '<current AG>',
    agWebsite: 'ag.louisiana.gov',
    hotline: '1-800-351-4889',
    complaintForm: 'https://www.ag.louisiana.gov/Files/fileacomplaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.ag.louisiana.gov/Section/ConsumerProtection' },
      { label: 'Senior Fraud', url: 'https://www.ag.louisiana.gov/Article/13' },
    ],
    stateDoNotCall: 'https://www.lpsc.louisiana.gov/2013/donotcall.aspx',
    apsHotline: '1-800-898-4910',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'ME',
    name: 'Maine',
    ag: '<current AG>',
    agWebsite: 'maine.gov/ag',
    hotline: '1-800-436-2131',
    complaintForm: 'https://www.maine.gov/ag/consumer/complaints/complaint_form.shtml',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.maine.gov/ag/consumer/index.shtml' },
      { label: 'Identity Theft', url: 'https://www.maine.gov/ag/consumer/identity_theft/index.shtml' },
    ],
    apsHotline: '1-800-624-8404',
    has211: true,
    smallClaimsMax: 6000,
  },
  {
    code: 'MD',
    name: 'Maryland',
    ag: '<current AG>',
    agWebsite: 'marylandattorneygeneral.gov',
    hotline: '1-888-743-0023',
    complaintForm: 'https://www.marylandattorneygeneral.gov/Pages/CPD/complaint.aspx',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.marylandattorneygeneral.gov/Pages/CPD/default.aspx' },
      { label: 'Senior Protection', url: 'https://www.marylandattorneygeneral.gov/Pages/CPD/Seniors.aspx' },
      { label: 'Identity Theft', url: 'https://www.marylandattorneygeneral.gov/Pages/IdentityTheft/default.aspx' },
    ],
    apsHotline: '1-800-917-7383',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'MA',
    name: 'Massachusetts',
    ag: '<current AG>',
    agWebsite: 'mass.gov/orgs/office-of-attorney-general',
    hotline: '1-617-727-8400',
    complaintForm: 'https://www.mass.gov/how-to/file-a-consumer-complaint',
    scamPages: [
      { label: 'Consumer Affairs', url: 'https://www.mass.gov/topics/consumer' },
      { label: 'Scams & Fraud', url: 'https://www.mass.gov/info-details/scams-fraud' },
      { label: 'Elder Abuse', url: 'https://www.mass.gov/how-to/report-elder-abuse' },
    ],
    stateDoNotCall: 'https://www.mass.gov/massachusetts-do-not-call-list',
    apsHotline: '1-800-922-2275',
    has211: true,
    smallClaimsMax: 7000,
  },
  {
    code: 'MI',
    name: 'Michigan',
    ag: '<current AG>',
    agWebsite: 'michigan.gov/ag',
    hotline: '1-877-765-8388',
    complaintForm: 'https://www.michigan.gov/ag/consumer-protection/consumer-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.michigan.gov/ag/consumer-protection' },
      { label: 'Elder Abuse Task Force', url: 'https://www.michigan.gov/ag/initiatives/elder-abuse' },
      { label: 'Identity Theft', url: 'https://www.michigan.gov/ag/consumer-protection/identity-theft' },
    ],
    apsHotline: '1-855-444-3911',
    has211: true,
    smallClaimsMax: 7000,
  },
  {
    code: 'MN',
    name: 'Minnesota',
    ag: '<current AG>',
    agWebsite: 'ag.state.mn.us',
    hotline: '1-800-657-3787',
    complaintForm: 'https://www.ag.state.mn.us/Office/Complaint.asp',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.ag.state.mn.us/Consumer/' },
      { label: 'Senior Fraud', url: 'https://www.ag.state.mn.us/Consumer/Publications/SeniorFraud.asp' },
    ],
    apsHotline: '1-844-880-1574',
    has211: true,
    smallClaimsMax: 15000,
  },
  {
    code: 'MS',
    name: 'Mississippi',
    ag: '<current AG>',
    agWebsite: 'attorneygeneral.ms.gov',
    hotline: '1-800-281-4418',
    complaintForm: 'https://www.ags.state.ms.us/ConsumerComplaint.aspx',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.ago.state.ms.us/divisions/consumer-protection/' },
      { label: 'Vulnerable Adults Unit', url: 'https://www.ago.state.ms.us/divisions/vulnerable-adults-unit/' },
    ],
    apsHotline: '1-844-437-6282',
    has211: true,
    smallClaimsMax: 3500,
  },
  {
    code: 'MO',
    name: 'Missouri',
    ag: '<current AG>',
    agWebsite: 'ago.mo.gov',
    hotline: '1-800-392-8222',
    complaintForm: 'https://ago.mo.gov/file-a-complaint/consumer',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://ago.mo.gov/home/consumer' },
      { label: 'Identity Theft', url: 'https://ago.mo.gov/home/consumer/identity-theft' },
    ],
    stateDoNotCall: 'https://ago.mo.gov/home/consumer/no-call',
    apsHotline: '1-800-392-0210',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'MT',
    name: 'Montana',
    ag: '<current AG>',
    agWebsite: 'dojmt.gov',
    hotline: '1-800-481-6896',
    complaintForm: 'https://dojmt.gov/consumer/consumer-complaint-information/',
    scamPages: [
      { label: 'Consumer Protection (OCP)', url: 'https://dojmt.gov/consumer/' },
      { label: 'Identity Theft', url: 'https://dojmt.gov/consumer/identity-theft/' },
    ],
    apsHotline: '1-844-277-9300',
    has211: true,
    smallClaimsMax: 7000,
  },
  {
    code: 'NE',
    name: 'Nebraska',
    ag: '<current AG>',
    agWebsite: 'ago.nebraska.gov',
    hotline: '1-800-727-6432',
    complaintForm: 'https://protectthegoodlife.nebraska.gov/file-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://protectthegoodlife.nebraska.gov/' },
      { label: 'Senior Protection', url: 'https://protectthegoodlife.nebraska.gov/senior-protection' },
    ],
    apsHotline: '1-800-652-1999',
    has211: true,
    smallClaimsMax: 3900,
  },
  {
    code: 'NV',
    name: 'Nevada',
    ag: '<current AG>',
    agWebsite: 'ag.nv.gov',
    hotline: '1-702-486-3132',
    complaintForm: 'https://ag.nv.gov/Complaints/File_Complaint/',
    scamPages: [
      { label: 'Consumer Protection (BCP)', url: 'https://ag.nv.gov/Hot_Topics/Consumer_Protection/' },
      { label: 'Senior Protection', url: 'https://ag.nv.gov/Hot_Topics/Senior_Protection/' },
    ],
    apsHotline: '1-888-729-0571',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'NH',
    name: 'New Hampshire',
    ag: '<current AG>',
    agWebsite: 'doj.nh.gov',
    hotline: '1-888-468-4454',
    complaintForm: 'https://www.doj.nh.gov/consumer/complaints.htm',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.doj.nh.gov/consumer/' },
      { label: 'Elderly, Disabled, & Veterans Unit', url: 'https://www.doj.nh.gov/criminal/edvu.htm' },
    ],
    apsHotline: '1-800-949-0470',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'NJ',
    name: 'New Jersey',
    ag: '<current AG>',
    agWebsite: 'njoag.gov',
    hotline: '1-800-242-5846',
    complaintForm: 'https://www.njconsumeraffairs.gov/Pages/Consumer-Complaint-Form.aspx',
    scamPages: [
      { label: 'Division of Consumer Affairs', url: 'https://www.njconsumeraffairs.gov/' },
      { label: 'Identity Theft', url: 'https://www.njconsumeraffairs.gov/identity-theft' },
    ],
    stateDoNotCall: 'https://www.njconsumeraffairs.gov/donotcall',
    apsHotline: '1-800-792-8820',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'NM',
    name: 'New Mexico',
    ag: '<current AG>',
    agWebsite: 'nmag.gov',
    hotline: '1-844-255-9210',
    complaintForm: 'https://nmag.gov/consumer-protection/file-a-consumer-complaint/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://nmag.gov/consumer-protection/' },
      { label: 'Senior Citizens', url: 'https://nmag.gov/consumer-protection/senior-citizens/' },
    ],
    apsHotline: '1-866-654-3219',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'NY',
    name: 'New York',
    ag: 'Letitia James',
    agWebsite: 'ag.ny.gov',
    hotline: '1-800-771-7755',
    complaintForm: 'https://ag.ny.gov/file-complaint',
    scamPages: [
      { label: 'Consumer Frauds Bureau', url: 'https://ag.ny.gov/consumer-frauds-bureau' },
      { label: 'Senior Scams', url: 'https://ag.ny.gov/resources/organizations/senior-fraud' },
      { label: 'Identity Theft', url: 'https://ag.ny.gov/identity-theft' },
    ],
    stateDoNotCall: 'https://dos.ny.gov/new-york-do-not-call-registry',
    apsHotline: '1-844-697-3505',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'NC',
    name: 'North Carolina',
    ag: '<current AG>',
    agWebsite: 'ncdoj.gov',
    hotline: '1-877-566-7226',
    complaintForm: 'https://ncdoj.gov/file-a-complaint/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://ncdoj.gov/protecting-consumers/' },
      { label: 'Scams & Identity Theft', url: 'https://ncdoj.gov/protecting-consumers/protecting-your-identity/' },
    ],
    stateDoNotCall: 'https://ncdoj.gov/protecting-consumers/protection-from-unwanted-calls-and-texts/',
    apsHotline: '1-919-855-4800',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'ND',
    name: 'North Dakota',
    ag: '<current AG>',
    agWebsite: 'attorneygeneral.nd.gov',
    hotline: '1-800-472-2600',
    complaintForm: 'https://attorneygeneral.nd.gov/consumer-resources/consumer-complaints/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://attorneygeneral.nd.gov/consumer-resources/' },
      { label: 'Elder Abuse', url: 'https://attorneygeneral.nd.gov/public-safety/vulnerable-adult-protective-services/' },
    ],
    stateDoNotCall: 'https://attorneygeneral.nd.gov/consumer-resources/no-call-list/',
    apsHotline: '1-855-462-5465',
    has211: true,
    smallClaimsMax: 15000,
  },
  {
    code: 'OH',
    name: 'Ohio',
    ag: '<current AG>',
    agWebsite: 'ohioattorneygeneral.gov',
    hotline: '1-800-282-0515',
    complaintForm: 'https://www.ohioattorneygeneral.gov/ConsumerComplaint.aspx',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.ohioattorneygeneral.gov/Individuals-and-Families/Consumers' },
      { label: 'Senior Resources', url: 'https://www.ohioattorneygeneral.gov/Individuals-and-Families/Seniors' },
      { label: 'Identity Theft', url: 'https://www.ohioattorneygeneral.gov/Individuals-and-Families/Consumers/Identity-Theft' },
    ],
    apsHotline: '1-855-644-6277',
    has211: true,
    smallClaimsMax: 6000,
  },
  {
    code: 'OK',
    name: 'Oklahoma',
    ag: '<current AG>',
    agWebsite: 'oag.ok.gov',
    hotline: '1-833-681-1895',
    complaintForm: 'https://oag.ok.gov/consumer-protection-unit',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://oag.ok.gov/consumer-protection-unit' },
      { label: 'Elder Abuse', url: 'https://oag.ok.gov/elder-abuse' },
    ],
    apsHotline: '1-800-522-3511',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'OR',
    name: 'Oregon',
    ag: '<current AG>',
    agWebsite: 'doj.state.or.us',
    hotline: '1-877-877-9392',
    complaintForm: 'https://justice.oregon.gov/consumercomplaints/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.doj.state.or.us/consumer-protection/' },
      { label: 'Scams A–Z', url: 'https://www.doj.state.or.us/consumer-protection/id-theft-data-breaches/' },
    ],
    stateDoNotCall: undefined,
    apsHotline: '1-855-503-7233',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'PA',
    name: 'Pennsylvania',
    ag: '<current AG>',
    agWebsite: 'attorneygeneral.gov',
    hotline: '1-800-441-2555',
    complaintForm: 'https://www.attorneygeneral.gov/submit-a-complaint/',
    scamPages: [
      { label: 'Consumer Protection Bureau', url: 'https://www.attorneygeneral.gov/protect-yourself/' },
      { label: 'Senior Protection', url: 'https://www.attorneygeneral.gov/protect-yourself/seniors/' },
      { label: 'Identity Theft', url: 'https://www.attorneygeneral.gov/protect-yourself/identity-theft/' },
    ],
    apsHotline: '1-800-490-8505',
    has211: true,
    smallClaimsMax: 12000,
  },
  {
    code: 'RI',
    name: 'Rhode Island',
    ag: '<current AG>',
    agWebsite: 'riag.ri.gov',
    hotline: '1-401-274-4400',
    complaintForm: 'https://riag.ri.gov/consumer-protection/file-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://riag.ri.gov/consumer-protection' },
      { label: 'Elder Abuse', url: 'https://oha.ri.gov/help-elderly-adults/elder-abuse-neglect-and-exploitation' },
    ],
    apsHotline: '1-401-462-0555',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'SC',
    name: 'South Carolina',
    ag: '<current AG>',
    agWebsite: 'scag.gov',
    hotline: '1-803-734-3970',
    complaintForm: 'https://consumer.sc.gov/consumer-complaints',
    scamPages: [
      { label: 'SC Dept of Consumer Affairs', url: 'https://consumer.sc.gov/' },
      { label: 'Identity Theft', url: 'https://consumer.sc.gov/consumer-services/id-theft-unit' },
    ],
    stateDoNotCall: undefined,
    apsHotline: '1-803-898-7318',
    has211: true,
    smallClaimsMax: 7500,
  },
  {
    code: 'SD',
    name: 'South Dakota',
    ag: '<current AG>',
    agWebsite: 'atg.sd.gov',
    hotline: '1-800-300-1986',
    complaintForm: 'https://consumer.sd.gov/fastcomplaint.aspx',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://consumer.sd.gov/' },
      { label: 'Senior Scams', url: 'https://consumer.sd.gov/seniorscams.aspx' },
    ],
    apsHotline: '1-866-854-5465',
    has211: true,
    smallClaimsMax: 12000,
  },
  {
    code: 'TN',
    name: 'Tennessee',
    ag: '<current AG>',
    agWebsite: 'tn.gov/attorneygeneral',
    hotline: '1-800-342-8385',
    complaintForm: 'https://www.tn.gov/commerce/consumer/file-consumer-complaint.html',
    scamPages: [
      { label: 'Consumer Affairs', url: 'https://www.tn.gov/commerce/section/consumer-affairs.html' },
      { label: 'Identity Theft', url: 'https://www.tn.gov/commerce/consumer/consumer-protection/identity-theft.html' },
    ],
    stateDoNotCall: 'https://www.tn.gov/tra/consumers/do-not-call.html',
    apsHotline: '1-888-277-8366',
    has211: true,
    smallClaimsMax: 25000,
  },
  {
    code: 'TX',
    name: 'Texas',
    ag: '<current AG>',
    agWebsite: 'texasattorneygeneral.gov',
    hotline: '1-800-621-0508',
    complaintForm: 'https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.texasattorneygeneral.gov/consumer-protection' },
      { label: 'Senior Texans', url: 'https://www.texasattorneygeneral.gov/consumer-protection/senior-texans' },
      { label: 'Identity Theft', url: 'https://www.texasattorneygeneral.gov/consumer-protection/identity-theft' },
    ],
    stateDoNotCall: 'https://www.texasnocall.com/',
    apsHotline: '1-800-252-5400',
    has211: true,
    smallClaimsMax: 20000,
  },
  {
    code: 'UT',
    name: 'Utah',
    ag: '<current AG>',
    agWebsite: 'attorneygeneral.utah.gov',
    hotline: '1-801-530-6601',
    complaintForm: 'https://consumerprotection.utah.gov/complaints/',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://consumerprotection.utah.gov/' },
      { label: 'Senior Fraud', url: 'https://attorneygeneral.utah.gov/protecting-seniors/' },
    ],
    stateDoNotCall: undefined,
    apsHotline: '1-800-371-7897',
    has211: true,
    smallClaimsMax: 15000,
  },
  {
    code: 'VT',
    name: 'Vermont',
    ag: '<current AG>',
    agWebsite: 'ago.vermont.gov',
    hotline: '1-800-649-2424',
    complaintForm: 'https://ago.vermont.gov/cap',
    scamPages: [
      { label: 'Consumer Assistance Program', url: 'https://ago.vermont.gov/cap' },
      { label: 'Scams', url: 'https://ago.vermont.gov/cap/scams' },
    ],
    apsHotline: '1-800-564-1612',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'VA',
    name: 'Virginia',
    ag: '<current AG>',
    agWebsite: 'oag.state.va.us',
    hotline: '1-800-552-9963',
    complaintForm: 'https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.oag.state.va.us/consumer-protection' },
      { label: 'Seniors', url: 'https://www.oag.state.va.us/consumer-protection/index.php/tips-and-information/sss' },
    ],
    stateDoNotCall: undefined,
    apsHotline: '1-888-832-3858',
    has211: true,
    smallClaimsMax: 5000,
  },
  {
    code: 'WA',
    name: 'Washington',
    ag: '<current AG>',
    agWebsite: 'atg.wa.gov',
    hotline: '1-800-551-4636',
    complaintForm: 'https://www.atg.wa.gov/file-complaint',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://www.atg.wa.gov/consumer-issues' },
      { label: 'Senior Scams', url: 'https://www.atg.wa.gov/seniors' },
      { label: 'Identity Theft', url: 'https://www.atg.wa.gov/recovering-identity-theft-fraud' },
    ],
    apsHotline: '1-866-363-4276',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'WV',
    name: 'West Virginia',
    ag: '<current AG>',
    agWebsite: 'ago.wv.gov',
    hotline: '1-800-368-8808',
    complaintForm: 'https://ago.wv.gov/consumerprotection/Pages/Complaint-Form.aspx',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://ago.wv.gov/consumerprotection/Pages/default.aspx' },
      { label: 'Senior Legal Aid', url: 'https://ago.wv.gov/consumerprotection/Pages/Seniors.aspx' },
    ],
    stateDoNotCall: 'https://ago.wv.gov/consumerprotection/Pages/Do-Not-Call.aspx',
    apsHotline: '1-800-352-6513',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'WI',
    name: 'Wisconsin',
    ag: '<current AG>',
    agWebsite: 'doj.state.wi.us',
    hotline: '1-800-422-7128',
    complaintForm: 'https://datcp.wi.gov/Pages/Programs_Services/FileAComplaint.aspx',
    scamPages: [
      { label: 'Consumer Protection (DATCP)', url: 'https://datcp.wi.gov/Pages/Programs_Services/ConsumerProtection.aspx' },
      { label: 'Senior Scams', url: 'https://datcp.wi.gov/Pages/Programs_Services/SeniorScams.aspx' },
      { label: 'Identity Theft', url: 'https://datcp.wi.gov/Pages/Programs_Services/IdentityTheft.aspx' },
    ],
    apsHotline: '1-833-586-0107',
    has211: true,
    smallClaimsMax: 10000,
  },
  {
    code: 'WY',
    name: 'Wyoming',
    ag: '<current AG>',
    agWebsite: 'ag.wyoming.gov',
    hotline: '1-800-438-5799',
    complaintForm: 'https://ag.wyoming.gov/law-office-division/consumer-protection-unit',
    scamPages: [
      { label: 'Consumer Protection', url: 'https://ag.wyoming.gov/law-office-division/consumer-protection-unit' },
    ],
    apsHotline: '1-800-457-3659',
    has211: true,
    smallClaimsMax: 6000,
  },
];

/* ── Agency directory — which agency to file with ─────── */
interface AgencyEntry {
  id: string;
  name: string;
  icon: LucideIcon;
  useFor: string;
  phone?: string;
  website: string;
  details: string;
}

const AGENCIES: AgencyEntry[] = [
  {
    id: 'ag',
    name: 'Your State Attorney General (Consumer Protection)',
    icon: Gavel,
    useFor:
      'In-state merchant scams, price gouging, deceptive business practices, senior fraud, and local companies treating you unfairly.',
    website: 'See your state above',
    details:
      'Every state AG has a Consumer Protection office. They pursue civil cases against businesses, negotiate refunds, and publish scam alerts. Most do not chase individual criminal cases — but your complaint helps them build bigger ones.',
  },
  {
    id: 'ftc',
    name: 'FTC — Federal Trade Commission',
    icon: Flag,
    useFor:
      'National or online chains, identity theft, phone scams, robocalls, and anything that crossed state lines.',
    phone: '1-877-382-4357',
    website: 'https://reportfraud.ftc.gov',
    details:
      'The FTC runs ReportFraud.ftc.gov and IdentityTheft.gov. They feed data into Consumer Sentinel, a database used by 2,800+ law enforcement agencies nationwide.',
  },
  {
    id: 'ic3',
    name: 'FBI IC3 — Internet Crime Complaint Center',
    icon: ShieldAlert,
    useFor:
      'Internet crime, wire fraud, cryptocurrency loss, romance scams, business email compromise, and ransomware.',
    website: 'https://www.ic3.gov',
    details:
      'IC3 is the FBI\'s central intake for cyber-enabled fraud. File as soon as possible — recovery of wired money sometimes works in the first 72 hours.',
  },
  {
    id: 'police',
    name: 'Local Police',
    icon: Siren,
    useFor:
      'Threats, physical harassment, stolen property, stalking, and any in-person crime.',
    phone: 'Non-emergency line for your town',
    website: 'https://www.usa.gov/local-governments',
    details:
      'Police reports are also useful paperwork for banks and credit bureaus. Ask for a copy of the report number.',
  },
  {
    id: 'cfpb',
    name: 'CFPB — Consumer Financial Protection Bureau',
    icon: Landmark,
    useFor:
      'Banks, credit cards, mortgages, student loans, debt collectors, and credit reports.',
    phone: '1-855-411-2372',
    website: 'https://www.consumerfinance.gov/complaint/',
    details:
      'CFPB forwards your complaint to the company and usually gets a response within 15 days. Very effective for bank and credit disputes.',
  },
  {
    id: 'sec',
    name: 'SEC — Securities and Exchange Commission',
    icon: FileSearch,
    useFor:
      'Investment fraud, fake brokers, Ponzi schemes, unregistered securities.',
    phone: '1-800-732-0330',
    website: 'https://www.sec.gov/tcr',
    details:
      'The SEC also runs Investor.gov, which lets you check if someone is a registered broker before you send money.',
  },
  {
    id: 'irs',
    name: 'IRS — Internal Revenue Service',
    icon: FileText,
    useFor:
      'Tax scams, fake IRS calls, unauthorized returns filed in your name, stolen refunds.',
    phone: '1-800-908-4490',
    website: 'https://www.irs.gov/identity-theft-central',
    details:
      'Real IRS agents never call to demand immediate payment, threaten arrest, or ask for gift cards. Any of those is a scam — hang up.',
  },
  {
    id: 'medicare',
    name: 'Medicare Fraud Hotline',
    icon: HandHeart,
    useFor:
      'Fake Medicare cards, bogus medical equipment, billing for services never received.',
    phone: '1-800-447-8477',
    website: 'https://oig.hhs.gov/fraud/report-fraud/',
    details:
      'HHS Office of Inspector General investigates. You can also use 1-800-MEDICARE (1-800-633-4227) to report billing irregularities on your MSN (Medicare Summary Notice).',
  },
  {
    id: 'ssa',
    name: 'Social Security OIG',
    icon: CreditCard,
    useFor:
      'Fake SSA calls, benefit theft, stolen SSN used on work records, suspended-SSN scams.',
    phone: '1-800-269-0271',
    website: 'https://oig.ssa.gov/report/',
    details:
      'The Social Security Administration does not suspend numbers, threaten arrest, or demand gift cards. If you get a call that does, hang up and report it here.',
  },
  {
    id: 'insurance',
    name: 'State Insurance Department',
    icon: ShieldCheck,
    useFor:
      'Insurance claims denied unfairly, suspicious insurance offers, fake policies, agent misconduct.',
    website: 'https://content.naic.org/state-insurance-departments',
    details:
      'The NAIC directory links you straight to your state\'s insurance regulator. They can investigate carriers and agents licensed in your state.',
  },
  {
    id: 'pharmacy',
    name: 'State Board of Pharmacy',
    icon: FileSearch,
    useFor:
      'Fake online pharmacies, counterfeit prescriptions, medication diversion, prescription fraud.',
    website: 'https://nabp.pharmacy/about/boards-of-pharmacy/',
    details:
      'The National Association of Boards of Pharmacy (NABP) lists every state\'s board. They also run Safe.Pharmacy, which flags illegal online pharmacies.',
  },
];

/* ── Decision tree — 5-question wizard ────────────────── */
interface WizardQ {
  id: string;
  question: string;
  options: { label: string; next?: string; result?: string[] }[];
}

const WIZARD: Record<string, WizardQ> = {
  start: {
    id: 'start',
    question: 'What kind of loss are you reporting?',
    options: [
      { label: 'Money loss (charged, wire, gift card, crypto)', next: 'q_money' },
      { label: 'My personal info was stolen (SSN, account)', next: 'q_identity' },
      { label: 'A scam attempt — I did not lose anything', result: ['ag', 'ftc'] },
      { label: 'Threats, harassment, or stalking', result: ['police', 'ftc'] },
      { label: 'Fraud involving a deceased loved one', next: 'q_deceased' },
    ],
  },
  q_money: {
    id: 'q_money',
    question: 'How did the money move?',
    options: [
      { label: 'Credit card, debit card, or bank wire', result: ['cfpb', 'ag', 'ftc'] },
      { label: 'Cryptocurrency or online wire transfer', result: ['ic3', 'ftc'] },
      { label: 'Gift card, money order, cash app', result: ['ftc', 'ic3', 'police'] },
      { label: 'Investment (stocks, crypto fund, forex)', result: ['sec', 'ic3', 'ag'] },
      { label: 'Medicare, Medicaid, or health billing', result: ['medicare', 'ag'] },
      { label: 'Tax-related (fake IRS, refund theft)', result: ['irs', 'ftc'] },
      { label: 'Insurance-related (fake policy, denied claim)', result: ['insurance', 'ag'] },
    ],
  },
  q_identity: {
    id: 'q_identity',
    question: 'What was taken or opened?',
    options: [
      { label: 'My SSN was used (work, benefits, tax return)', result: ['ssa', 'irs', 'ftc'] },
      { label: 'A credit card or loan was opened in my name', result: ['ftc', 'cfpb', 'police'] },
      { label: 'A bank account was drained', result: ['cfpb', 'police', 'ftc'] },
      { label: 'Only my email/password leaked in a breach', result: ['ftc', 'ag'] },
    ],
  },
  q_deceased: {
    id: 'q_deceased',
    question: 'What kind of fraud after the death?',
    options: [
      { label: 'Obituary scam, inheritance scam, fake funeral charges', result: ['ag', 'ftc'] },
      { label: 'Benefit fraud (Social Security, Medicare)', result: ['ssa', 'medicare'] },
      { label: 'Identity theft using the deceased\'s info', result: ['ftc', 'irs', 'ssa'] },
    ],
  },
};

/* ── FAQ ──────────────────────────────────────────────── */
const FAQ = [
  {
    q: 'Does filing a complaint really help?',
    a: 'Usually not in the single-case, you-get-a-call-back-next-week sense. Most complaints go into databases that agencies use to build larger cases. But enough complaints against the same company can trigger a real investigation, a settlement, and sometimes refunds to everyone who reported.',
  },
  {
    q: 'Can I stay anonymous?',
    a: 'You can often file anonymously with the FTC and IC3, but your report carries less weight. State AGs generally want to contact you for follow-up — your name stays with the agency and is not shared publicly without your consent.',
  },
  {
    q: 'What if I am not 100% sure it is a scam?',
    a: 'File anyway if you think something is off. Agencies would rather see a pattern of concerned reports than miss a real scheme. You will not get in trouble for reporting in good faith.',
  },
  {
    q: 'How long does it take?',
    a: 'The online forms usually take 10–20 minutes. Responses vary: CFPB is fast (15-day rule). State AGs take a few weeks. FTC and IC3 rarely respond individually — your report fuels broader action.',
  },
  {
    q: 'Will I get my money back?',
    a: 'Sometimes, but no one can promise it. Credit card disputes have the highest recovery rate. Wire transfers and gift cards have the lowest. Act fast — the first 72 hours matter most for wires and crypto.',
  },
  {
    q: 'Should I report to more than one agency?',
    a: 'Yes. Each agency tracks different things and has different powers. A common combo is your State AG plus the FTC plus local police. For internet fraud, add IC3. For bank issues, add CFPB.',
  },
  {
    q: 'What if the scammer is in another country?',
    a: 'Report to IC3 (FBI) and the FTC. They coordinate with international partners on cross-border cases. Also freeze your credit and change passwords on any affected accounts.',
  },
];

/* ── Main component ───────────────────────────────────── */
export default function StateAgScamLookup() {
  const [selectedCode, setSelectedCode] = useState<string>('CA');
  const [wizardStep, setWizardStep] = useState<string>('start');
  const [wizardResult, setWizardResult] = useState<string[] | null>(null);
  const [wizardHistory, setWizardHistory] = useState<string[]>([]);

  const state = useMemo(
    () => STATES.find(s => s.code === selectedCode) ?? STATES[0],
    [selectedCode],
  );

  const currentQ = WIZARD[wizardStep];
  const resultAgencies = wizardResult
    ? AGENCIES.filter(a => wizardResult.includes(a.id))
    : [];

  function handleAnswer(opt: WizardQ['options'][0]) {
    if (opt.result) {
      setWizardResult(opt.result);
      setWizardHistory(prev => [...prev, wizardStep]);
    } else if (opt.next) {
      setWizardHistory(prev => [...prev, wizardStep]);
      setWizardStep(opt.next);
    }
  }

  function handleWizardBack() {
    const prev = wizardHistory[wizardHistory.length - 1];
    if (!prev) return;
    setWizardHistory(h => h.slice(0, -1));
    if (wizardResult) {
      setWizardResult(null);
    } else {
      setWizardStep(prev);
    }
  }

  function handleWizardReset() {
    setWizardStep('start');
    setWizardHistory([]);
    setWizardResult(null);
  }

  return (
    <>
      <SEOHead
        title="State Attorney General Scam Lookup | TekSure"
        description="Find your state's Attorney General consumer protection office, scam reporting hotline, online complaint form, and elder abuse resources. Plus: which federal agency to file with and a 5-question decision tree."
        path="/tools/state-ag-scam-lookup"
      />
      <Navbar />
      <main id="main-content" className="container py-10 min-h-[80vh] max-w-4xl mx-auto">
        {/* ── Hero ── */}
        <div className="relative rounded-3xl overflow-hidden mb-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-xl">
          <div className="absolute top-4 right-4 z-10">
            <BookmarkButton
              type="tool"
              slug="state-ag-scam-lookup"
              title="State AG Scam Lookup"
              url="/tools/state-ag-scam-lookup"
            />
          </div>
          <div className="px-6 py-12 sm:px-10 sm:py-16 text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-white/10 backdrop-blur text-white mb-5 ring-1 ring-white/20">
              <Gavel className="h-12 w-12" aria-hidden="true" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
              Report a Scam in Your State
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Every state has a Consumer Protection office. Find yours and report fast.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Badge className="bg-white/15 text-white border-white/20 text-base px-3 py-1">
                51 states + DC
              </Badge>
              <Badge className="bg-white/15 text-white border-white/20 text-base px-3 py-1">
                11 federal agencies
              </Badge>
              <Badge className="bg-emerald-500/80 text-white border-transparent text-base px-3 py-1">
                Free · No signup
              </Badge>
            </div>
          </div>
        </div>

        {/* ── Freeze credit first callout ── */}
        <Alert className="mb-8 border-2 border-red-300 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
          <Lock className="h-5 w-5 text-red-700 dark:text-red-300" aria-hidden="true" />
          <AlertTitle className="text-lg font-bold text-red-900 dark:text-red-100">
            Identity theft? Freeze your credit first — before you file anything.
          </AlertTitle>
          <AlertDescription className="text-base text-red-900 dark:text-red-100 mt-2 space-y-2">
            <p>
              A credit freeze blocks new accounts from being opened in your name. It is free at all
              three bureaus and takes a few minutes each.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://www.equifax.com/personal/credit-report-services/credit-freeze/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 underline font-semibold hover:no-underline"
              >
                Equifax <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.experian.com/freeze/center.html"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 underline font-semibold hover:no-underline"
              >
                Experian <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.transunion.com/credit-freeze"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 underline font-semibold hover:no-underline"
              >
                TransUnion <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.annualcreditreport.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 underline font-semibold hover:no-underline"
              >
                annualcreditreport.com <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </AlertDescription>
        </Alert>

        {/* ── Decision tree wizard ── */}
        <Card className="mb-8 border-2 border-blue-300 bg-blue-50/60 dark:bg-blue-950/30 dark:border-blue-800">
          <CardContent className="p-5 sm:p-7">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-900 dark:text-blue-100">
                <HelpCircle className="h-6 w-6" aria-hidden="true" />
                I was scammed — where do I report?
              </h2>
              {(wizardStep !== 'start' || wizardResult) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleWizardReset}
                  className="text-base min-h-14"
                >
                  <RotateCcw className="h-4 w-4 mr-1.5" aria-hidden="true" />
                  Start over
                </Button>
              )}
            </div>
            <p className="text-base text-blue-900/80 dark:text-blue-100/80 mb-5">
              Answer a couple of questions and we will point you at the agencies most likely to help.
            </p>

            {!wizardResult && currentQ && (
              <div>
                <p className="text-lg sm:text-xl font-semibold mb-4 text-foreground">
                  {currentQ.question}
                </p>
                <div className="grid gap-2">
                  {currentQ.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      className="text-left w-full rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors px-4 py-3 min-h-14 flex items-center justify-between gap-3"
                    >
                      <span className="text-base sm:text-lg">{opt.label}</span>
                      <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                    </button>
                  ))}
                </div>
                {wizardHistory.length > 0 && (
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handleWizardBack}
                    className="mt-3 gap-2 text-base"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </Button>
                )}
              </div>
            )}

            {wizardResult && (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100 font-semibold text-sm mb-4">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  File with these agencies
                </div>
                <ul className="space-y-3">
                  {resultAgencies.map(a => {
                    const Icon = a.icon;
                    return (
                      <li
                        key={a.id}
                        className="rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold">{a.name}</h4>
                            <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                              {a.details}
                            </p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
                              {a.phone && (
                                <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                                  <Phone className="h-4 w-4" aria-hidden="true" />
                                  {a.phone}
                                </span>
                              )}
                              {a.website.startsWith('http') && (
                                <a
                                  href={a.website}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="inline-flex items-center gap-1 text-primary underline font-semibold hover:no-underline"
                                >
                                  Open site <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-blue-100/60 dark:bg-blue-900/30 text-sm text-blue-900 dark:text-blue-100">
                  <strong>Tip:</strong> File with all of the above — each agency tracks different
                  things. Your State AG (pick it below) also belongs on most lists.
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ── State picker ── */}
        <Card className="mb-8 border-2">
          <CardContent className="p-5 sm:p-7">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              Pick your state
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              All 50 states plus Washington, DC. Each entry has the Consumer Protection hotline,
              complaint form, scam sub-pages, Adult Protective Services line, and small-claims
              limit.
            </p>
            <Select value={selectedCode} onValueChange={setSelectedCode}>
              <SelectTrigger className="min-h-14 text-base">
                <SelectValue placeholder="Choose a state…" />
              </SelectTrigger>
              <SelectContent className="max-h-80">
                {STATES.map(s => (
                  <SelectItem key={s.code} value={s.code} className="text-base">
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* ── Per-state card ── */}
        <Card className="mb-8 border-2 border-primary/30 bg-primary/5">
          <CardContent className="p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
                  State of {state.name}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                  <Building2 className="h-7 w-7 text-primary" aria-hidden="true" />
                  Attorney General · {state.ag}
                </h3>
                <p className="text-base text-muted-foreground mt-1">
                  If the AG name looks out of date, check{' '}
                  <a
                    href={`https://${state.agWebsite}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline font-semibold hover:no-underline inline-flex items-center gap-1"
                  >
                    {state.agWebsite}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>{' '}
                  for the current office holder.
                </p>
              </div>
            </div>

            {/* Key contacts */}
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              <a
                href={`tel:${state.hotline.replace(/\D/g, '')}`}
                className="rounded-xl border-2 border-border bg-background hover:border-primary p-4 min-h-14 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Consumer Protection hotline
                  </p>
                  <p className="text-lg font-bold">{state.hotline}</p>
                  {state.hotlineNote && (
                    <p className="text-sm text-muted-foreground">{state.hotlineNote}</p>
                  )}
                </div>
              </a>
              <a
                href={state.complaintForm}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-xl border-2 border-border bg-background hover:border-primary p-4 min-h-14 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-300">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Online complaint form
                  </p>
                  <p className="text-lg font-bold inline-flex items-center gap-1">
                    File a complaint <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </p>
                </div>
              </a>
              <a
                href={`tel:${state.apsHotline.replace(/\D/g, '')}`}
                className="rounded-xl border-2 border-border bg-background hover:border-primary p-4 min-h-14 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 h-10 w-10 rounded-lg bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-700 dark:text-rose-300">
                  <HandHeart className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Adult Protective Services (elder abuse)
                  </p>
                  <p className="text-lg font-bold">{state.apsHotline}</p>
                </div>
              </a>
              <a
                href={`https://${state.agWebsite}`}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-xl border-2 border-border bg-background hover:border-primary p-4 min-h-14 flex items-start gap-3 transition-colors"
              >
                <div className="shrink-0 h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-300">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground">AG homepage</p>
                  <p className="text-lg font-bold inline-flex items-center gap-1">
                    {state.agWebsite} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </p>
                </div>
              </a>
            </div>

            {/* Scam sub-pages */}
            {state.scamPages.length > 0 && (
              <div className="mb-5">
                <p className="text-base font-bold mb-2 flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-primary" aria-hidden="true" />
                  Scam topics on {state.name}&apos;s AG site
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {state.scamPages.map((p, i) => (
                    <li key={i}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-base text-primary underline hover:no-underline inline-flex items-center gap-1"
                      >
                        {p.label}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Extras */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-border p-3 bg-background">
                <p className="text-sm font-semibold text-muted-foreground mb-0.5">
                  State Do-Not-Call registry
                </p>
                {state.stateDoNotCall ? (
                  <a
                    href={state.stateDoNotCall}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-bold text-primary underline hover:no-underline inline-flex items-center gap-1"
                  >
                    State list <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="text-base">
                    Use federal list at{' '}
                    <a
                      href="https://www.donotcall.gov"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-bold text-primary underline hover:no-underline"
                    >
                      donotcall.gov
                    </a>
                  </p>
                )}
              </div>
              <div className="rounded-lg border border-border p-3 bg-background">
                <p className="text-sm font-semibold text-muted-foreground mb-0.5">
                  2-1-1 help line
                </p>
                <p className="text-base">
                  {state.has211 ? (
                    <span className="font-bold">
                      Available — dial <span className="text-primary">2-1-1</span>
                    </span>
                  ) : (
                    'Limited coverage'
                  )}
                </p>
              </div>
              <div className="rounded-lg border border-border p-3 bg-background">
                <p className="text-sm font-semibold text-muted-foreground mb-0.5">
                  Small claims limit
                </p>
                <p className="text-base font-bold">
                  ${state.smallClaimsMax.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── AARP Fraud Watch Helpline ── */}
        <Card className="mb-8 border-2 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800">
          <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
            <div className="shrink-0 h-14 w-14 rounded-xl bg-amber-200 dark:bg-amber-900/50 flex items-center justify-center text-amber-800 dark:text-amber-200">
              <Headphones className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-1">
                AARP Fraud Watch Helpline — 1-877-908-3360
              </h3>
              <p className="text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
                Free to anyone (you do not need to be an AARP member). Real people talk you through
                what happened, help you identify the scam, and point you at the right reporting
                channels. Open weekdays, 8 a.m.–8 p.m. ET.
              </p>
              <a
                href="https://www.aarp.org/money/scams-fraud/helpline/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 mt-2 text-amber-900 dark:text-amber-100 font-semibold underline hover:no-underline"
              >
                AARP Fraud Watch Network <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* ── Which agency — full directory ── */}
        <Card className="mb-8">
          <CardContent className="p-5 sm:p-7">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <ListChecks className="h-6 w-6 text-primary" aria-hidden="true" />
              Which agency handles what
            </h2>
            <p className="text-base text-muted-foreground mb-5">
              A cheat sheet for when the wizard above is not enough. File with the ones that fit
              your situation — usually two or three.
            </p>
            <ul className="space-y-3">
              {AGENCIES.map(a => {
                const Icon = a.icon;
                return (
                  <li
                    key={a.id}
                    className="rounded-xl border-2 border-border bg-card p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold">{a.name}</h4>
                        <p className="text-base mt-1 leading-relaxed">
                          <span className="font-semibold">File when:</span> {a.useFor}
                        </p>
                        <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                          {a.details}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
                          {a.phone && (
                            <span className="inline-flex items-center gap-1 font-semibold">
                              <Phone className="h-4 w-4" aria-hidden="true" />
                              {a.phone}
                            </span>
                          )}
                          {a.website.startsWith('http') && (
                            <a
                              href={a.website}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1 text-primary underline font-semibold hover:no-underline"
                            >
                              Visit site <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        {/* ── Multi-agency strategy ── */}
        <Card className="mb-8 border-2 border-indigo-300 bg-indigo-50/60 dark:bg-indigo-950/30 dark:border-indigo-800">
          <CardContent className="p-5 sm:p-7">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
              <Users className="h-6 w-6" aria-hidden="true" />
              Why report to more than one agency
            </h2>
            <p className="text-base text-indigo-900/90 dark:text-indigo-100/90 mb-4 leading-relaxed">
              Most people should file three places, not one. Each agency tracks different data and
              has different powers — criminal vs. civil, state vs. federal, complaint-based vs.
              pattern-based.
            </p>
            <ul className="space-y-3 text-base text-indigo-900 dark:text-indigo-100">
              <li className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-600 text-white font-bold text-sm">
                  1
                </span>
                <span>
                  <strong>Your State AG</strong> — civil action against in-state businesses, refund
                  negotiation, state-level scam alerts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-600 text-white font-bold text-sm">
                  2
                </span>
                <span>
                  <strong>FTC (or IC3 for online fraud)</strong> — federal databases feeding
                  nationwide investigations and international coordination.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-600 text-white font-bold text-sm">
                  3
                </span>
                <span>
                  <strong>Local police</strong> — creates a paper trail you need for banks, credit
                  bureaus, and insurance claims. Ask for the report number.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-600 text-white font-bold text-sm">
                  +
                </span>
                <span>
                  <strong>Add a topic-specific one</strong> when relevant: CFPB for banks, SSA OIG
                  for SSN misuse, Medicare hotline for health billing, SEC for investments.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── What happens after I file ── */}
        <Card className="mb-8">
          <CardContent className="p-5 sm:p-7">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
              What actually happens after you file
            </h2>
            <div className="space-y-3 text-base leading-relaxed">
              <p>
                Most complaints do not turn into an individual investigation. That is not a failure
                — it is how the system works. Your report goes into a database that agencies use to
                spot patterns, and when enough people report the same scheme, a case opens.
              </p>
              <p>
                <strong>Expect:</strong> a confirmation number, maybe a standard letter, and in
                some cases (especially CFPB bank disputes) a formal response from the company.
              </p>
              <p>
                <strong>Do not expect:</strong> a phone call the next day, a private investigator
                on your case, or a dramatic arrest. Occasionally a State AG investigator does call
                back for more info — pick up if a number you do not recognize calls from your AG
                office area.
              </p>
              <p>
                <strong>The biggest return on your time:</strong> freezing credit, disputing
                charges with your bank or card issuer (act within 60 days), and sharing what you
                learned so someone else does not fall for it.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ── Keep records ── */}
        <Card className="mb-8 border-2 border-slate-300 bg-slate-50 dark:bg-slate-900/50 dark:border-slate-700">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FileText className="h-6 w-6 text-slate-700 dark:text-slate-300" aria-hidden="true" />
              Keep records — at least 3 years
            </h3>
            <p className="text-base mb-3 leading-relaxed">
              A scam complaint is only as strong as your paper trail. Save everything, even if it
              feels like too much. Banks and agencies will ask for specifics months later.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-base">
              {[
                'Screenshots of texts, emails, and chat messages',
                'Caller ID numbers and call times',
                'Receipts, invoices, and order confirmations',
                'Bank and credit card statements showing the charges',
                'Copies of any checks or money orders',
                'The URL and screenshots of any scam website',
                'Names, titles, and badge numbers anyone gave you',
                'A written timeline of what happened, while it is fresh',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="shrink-0 mt-1 inline-block h-2 w-2 rounded-full bg-slate-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ── Deceased loved one ── */}
        <Card className="mb-8 border-2 border-violet-300 bg-violet-50 dark:bg-violet-950/30 dark:border-violet-800">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-violet-200 dark:bg-violet-900/50 flex items-center justify-center text-violet-800 dark:text-violet-200">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-violet-900 dark:text-violet-100 mb-1">
                  Fraud against a deceased relative
                </h3>
                <p className="text-base text-violet-900/90 dark:text-violet-100/90 leading-relaxed mb-3">
                  Scammers watch obituaries. Common hits: fake inheritance letters, forged life
                  insurance claims, bogus funeral-bill collections, and identity theft using a
                  deceased person&apos;s SSN. Report to the State AG + FTC + SSA OIG, and ask the
                  three credit bureaus to flag the file as &quot;deceased.&quot;
                </p>
                <Link
                  to="/tools/grief-tech-helper"
                  className="inline-flex items-center gap-1 text-violet-900 dark:text-violet-100 font-semibold underline hover:no-underline"
                >
                  Open Grief &amp; Digital Aftercare guide
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Scam of the moment ── */}
        <Card className="mb-8 border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-800">
          <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
            <div className="shrink-0 h-14 w-14 rounded-xl bg-orange-200 dark:bg-orange-900/50 flex items-center justify-center text-orange-800 dark:text-orange-200">
              <Newspaper className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-1">
                Scam of the moment
              </h3>
              <p className="text-base text-orange-900/90 dark:text-orange-100/90 leading-relaxed">
                Before you call anyone, check what is trending right now. We track active scams
                week by week with plain-language warnings and official source links.
              </p>
              <Link
                to="/scam-alerts"
                className="inline-flex items-center gap-1 mt-2 text-orange-900 dark:text-orange-100 font-semibold underline hover:no-underline"
              >
                Open the scam alerts feed <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* ── FAQ ── */}
        <Card className="mb-8">
          <CardContent className="p-5 sm:p-7">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />
              Questions people ask
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold min-h-14">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* ── Related tools ── */}
        <Card className="mb-10 border-2 border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/30 dark:border-emerald-800">
          <CardContent className="p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
              <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
              Related TekSure tools
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                to="/scam-alerts"
                className="rounded-xl border-2 border-border bg-background hover:border-emerald-500 p-4 min-h-14 transition-colors"
              >
                <p className="font-bold text-base mb-1 inline-flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                  Scam Alerts
                </p>
                <p className="text-sm text-muted-foreground">
                  The latest scams circulating, with plain-language warnings.
                </p>
              </Link>
              <Link
                to="/tools/is-this-real"
                className="rounded-xl border-2 border-border bg-background hover:border-emerald-500 p-4 min-h-14 transition-colors"
              >
                <p className="font-bold text-base mb-1 inline-flex items-center gap-2">
                  <FileSearch className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                  Is This Real?
                </p>
                <p className="text-sm text-muted-foreground">
                  Verify a news story, email, deal, or photo before you share or act.
                </p>
              </Link>
              <Link
                to="/tools/refund-and-return-helper"
                className="rounded-xl border-2 border-border bg-background hover:border-emerald-500 p-4 min-h-14 transition-colors"
              >
                <p className="font-bold text-base mb-1 inline-flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                  Refund &amp; Return Helper
                </p>
                <p className="text-sm text-muted-foreground">
                  Step-by-step walkthroughs for getting charges reversed or money back.
                </p>
              </Link>
              <Link
                to="/tools/government-benefits-portal"
                className="rounded-xl border-2 border-border bg-background hover:border-emerald-500 p-4 min-h-14 transition-colors"
              >
                <p className="font-bold text-base mb-1 inline-flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                  Government Benefits Portal
                </p>
                <p className="text-sm text-muted-foreground">
                  Official benefits, forms, and agency phone numbers — no middlemen.
                </p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* ── Disclaimer ── */}
        <Alert className="mb-8 border border-border bg-muted/40">
          <AlertCircle className="h-5 w-5" aria-hidden="true" />
          <AlertTitle className="text-base font-bold">A note on accuracy</AlertTitle>
          <AlertDescription className="text-sm leading-relaxed mt-1">
            Contact info is compiled from publicly-available Attorney General sites as of 2026.
            Officials and phone numbers occasionally change — always verify on the state&apos;s
            official AG homepage before acting on anything urgent. TekSure is not a law firm and
            this is not legal advice.
          </AlertDescription>
        </Alert>
      </main>
      <Footer />
    </>
  );
}
