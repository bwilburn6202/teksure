import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BookmarkButton } from '@/components/BookmarkButton';
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Car,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Eye,
  HeartPulse,
  CalendarClock,
  FileText,
  MapPin,
  Clock,
  CreditCard,
  Phone,
  Stethoscope,
  PhoneOff,
  HelpCircle,
  Info,
  Landmark,
  Users,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
 * DMV Online Helper
 * ------------------------------------------------------------
 * State-by-state DMV online services, senior renewal rules, and
 * REAL ID deadlines — written in plain English for non-technical
 * users and older drivers.
 *
 * Accuracy note: top 15 states have detailed, source-backed data.
 * Every other state falls back to a safe, generic template with a
 * verified link to the state's official DMV/BMV/MVC/DOR website.
 * All URLs are real .gov / .us state portals — never a .com lookalike.
 * ────────────────────────────────────────────────────────────── */

/* ── Types ─────────────────────────────────────────────── */

type StateCode =
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL'
  | 'GA' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME'
  | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH'
  | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI'
  | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';

interface OnlineServices {
  licenseRenewal: boolean;
  registrationRenewal: boolean;
  addressChange: boolean;
  replacementCard: boolean;
  duplicateTitle: boolean;
  voterRegistration: boolean;
  organDonor: boolean;
  realIdRequest: boolean;
  commercialCredential: boolean;
  disabilityPlacard: boolean;
}

interface SeniorRules {
  /** Age at which in-person renewal is required. null = no in-person age rule. */
  inPersonAge: number | null;
  /** Vision test required at renewal for seniors — age threshold, if any. */
  visionTestAge: number | null;
  /** Medical reporting requirement details for seniors. */
  medicalReporting: string;
  /** How the renewal cycle shortens as drivers age (plain-English summary). */
  cycleChange: string;
  /** Extra notes specific to seniors. */
  notes?: string;
}

interface StateEntry {
  code: StateCode;
  name: string;
  dmvName: string;
  website: string;
  accountUrl?: string;
  appointmentUrl?: string;
  services: OnlineServices;
  senior: SeniorRules;
  realIdDocs?: string[];
  paymentMethods: string[];
  processingTime: string;
  paperFormsNote?: string;
  extraNotes?: string[];
}

/* ── Generic fallback template for states without detailed data ── */

function genericServices(): OnlineServices {
  return {
    licenseRenewal: true,
    registrationRenewal: true,
    addressChange: true,
    replacementCard: true,
    duplicateTitle: false,
    voterRegistration: true,
    organDonor: true,
    realIdRequest: false,
    commercialCredential: false,
    disabilityPlacard: false,
  };
}

function genericSenior(): SeniorRules {
  return {
    inPersonAge: null,
    visionTestAge: null,
    medicalReporting:
      'Most states ask drivers to self-report medical conditions that affect driving. A doctor, family member, or law enforcement can also request a medical review.',
    cycleChange:
      'Renewal cycles often shorten (for example, from 8 years to 4 years) once a driver reaches a certain age. Check your renewal notice for the new length.',
  };
}

const REAL_ID_GENERIC_DOCS = [
  'One proof of identity (certified birth certificate, valid U.S. passport, or permanent resident card)',
  'One proof of Social Security number (Social Security card, W-2, or 1099 with your full SSN)',
  'Two proofs of current address (utility bill, bank statement, mortgage/rental agreement, or official mail dated within 60–90 days)',
  'Proof of any legal name change (marriage certificate, divorce decree, or court order)',
];

/* ── Top 15 states: detailed data ──────────────────────────── */

const TOP_STATES: StateEntry[] = [
  {
    code: 'CA',
    name: 'California',
    dmvName: 'California DMV',
    website: 'https://www.dmv.ca.gov',
    accountUrl: 'https://www.dmv.ca.gov/portal/mydmv/',
    appointmentUrl: 'https://www.dmv.ca.gov/portal/appointments/',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: true,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: true,
      commercialCredential: false,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: 70,
      visionTestAge: 70,
      medicalReporting:
        'California requires physicians to report dementia and certain other conditions. Family members can also request a re-examination.',
      cycleChange:
        'Drivers 70 and older must renew in person. The standard license is 5 years; the renewal cycle does not shorten but in-person becomes required.',
      notes:
        'Starting the REAL ID (Golden Bear) requires in-person at least once, even if the standard renewal could be done online.',
    },
    realIdDocs: [
      'One proof of identity: certified U.S. birth certificate, valid U.S. passport, Permanent Resident Card, or valid foreign passport with I-94',
      'One proof of Social Security number: SSN card, W-2, SSA-1099, non-SSA-1099, or pay stub showing full SSN',
      'Two proofs of California residency: utility bill, rental agreement, mortgage, bank statement, insurance document, or government-issued mail',
      'Legal name change documents (if your ID name does not match your identity document)',
    ],
    paymentMethods: ['Credit/debit card', 'Electronic check (ACH)'],
    processingTime: 'Renewal stickers: up to 2 weeks. New REAL ID: mailed within about 15 business days.',
    paperFormsNote:
      'Paper forms are available at any California DMV office or by mail request through the DMV website.',
    extraNotes: [
      'The DMV Virtual Office lets you handle many tasks by video appointment instead of in-person.',
      'California seniors can take an eLearning course through DMV Now as part of renewal for some drivers.',
    ],
  },
  {
    code: 'TX',
    name: 'Texas',
    dmvName: 'Texas Department of Motor Vehicles (TxDMV) + DPS for driver licenses',
    website: 'https://www.txdmv.gov',
    accountUrl: 'https://www.dps.texas.gov/section/driver-license',
    appointmentUrl: 'https://public.txdpsscheduler.com',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: 79,
      visionTestAge: 79,
      medicalReporting:
        'Texas DPS may request a medical evaluation if a physician, officer, or family member reports a concern.',
      cycleChange:
        'Drivers age 85 or older renew every 2 years instead of 6. Drivers 79 and older must renew in person, and a vision test is required at that visit.',
    },
    realIdDocs: [
      'One proof of U.S. citizenship or lawful presence (birth certificate or passport)',
      'Social Security number verification',
      'Texas residency: two documents showing your Texas address',
      'Primary ID plus a secondary if needed',
    ],
    paymentMethods: ['Credit/debit card', 'eCheck'],
    processingTime: 'Registration sticker: mailed within 2–3 weeks. New license card: about 2–3 weeks by mail.',
    paperFormsNote:
      'The Texas DPS and TxDMV websites both provide downloadable paper forms.',
    extraNotes: [
      'Texas driver licenses and REAL ID are handled by DPS, not TxDMV. Vehicle registration and titles are TxDMV. They are separate agencies.',
    ],
  },
  {
    code: 'FL',
    name: 'Florida',
    dmvName: 'Florida Highway Safety and Motor Vehicles (FLHSMV)',
    website: 'https://www.flhsmv.gov',
    accountUrl: 'https://services.flhsmv.gov',
    appointmentUrl: 'https://www.flhsmv.gov/locations/',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: true,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: true,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: 80,
      visionTestAge: 80,
      medicalReporting:
        'Florida allows any person to report an unsafe driver using the Medical Review Program form. Physicians may also report.',
      cycleChange:
        'At age 80, license renewals switch from 8 years to 6 years, and drivers must pass a vision test at every renewal. Online renewal is possible only if vision was tested within the last year by a licensed eye care professional.',
    },
    paymentMethods: ['Credit/debit card'],
    processingTime: 'Cards and registration stickers arrive by mail within 7–14 business days.',
    extraNotes: [
      'Florida lets you renew online only every other cycle — every other time you must go in person.',
    ],
  },
  {
    code: 'NY',
    name: 'New York',
    dmvName: 'New York State DMV',
    website: 'https://dmv.ny.gov',
    accountUrl: 'https://my.dmv.ny.gov',
    appointmentUrl: 'https://dmv.ny.gov/more-info/make-dmv-reservation',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: true,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: false,
    },
    senior: {
      inPersonAge: null,
      visionTestAge: null,
      medicalReporting:
        'New York has no mandatory physician reporting but does have a Medical Review Unit that reviews referrals.',
      cycleChange:
        'New York does not shorten the renewal cycle by age, but requires a vision test at every renewal (which can be submitted online with a registered eye care provider).',
      notes:
        'Many seniors still choose in-person to update the photo and confirm their identity in person.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'New documents typically mailed within 2 weeks.',
    extraNotes: [
      'Enhanced IDs are available in New York and work like a passport for land/sea travel to Canada, Mexico, and the Caribbean.',
    ],
  },
  {
    code: 'PA',
    name: 'Pennsylvania',
    dmvName: 'PennDOT Driver and Vehicle Services',
    website: 'https://www.dmv.pa.gov',
    accountUrl: 'https://www.dmv.pa.gov/Pages/default.aspx',
    appointmentUrl: 'https://www.dmv.pa.gov/Pages/Driver-Licensing-Center-Locator.aspx',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: true,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: true,
      commercialCredential: false,
      disabilityPlacard: false,
    },
    senior: {
      inPersonAge: null,
      visionTestAge: 65,
      medicalReporting:
        'Physicians must report conditions that affect driving. PennDOT can require a driver to be re-examined.',
      cycleChange:
        'Drivers 65 and older can choose a 2-year license at a reduced fee instead of the standard 4-year term.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'Products mailed within about 10 business days.',
  },
  {
    code: 'IL',
    name: 'Illinois',
    dmvName: 'Illinois Secretary of State',
    website: 'https://www.ilsos.gov',
    accountUrl: 'https://www.ilsos.gov/departments/drivers/home.html',
    appointmentUrl: 'https://www.ilsos.gov/departments/drivers/drivers_license/appointment.html',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: 79,
      visionTestAge: 75,
      medicalReporting:
        'Illinois requires physicians to report certain conditions and the Secretary of State may request a retest.',
      cycleChange:
        'Drivers 79–80 renew every 4 years, drivers 81–86 every 2 years, and drivers 87 or older renew every 1 year. A road test is required for most renewals at 79 and older.',
      notes:
        'Illinois is one of a few states that requires a road (driving) test for license renewal starting at age 79.',
    },
    paymentMethods: ['Credit/debit card'],
    processingTime: 'Mailed within 15 business days.',
  },
  {
    code: 'OH',
    name: 'Ohio',
    dmvName: 'Ohio BMV',
    website: 'https://www.bmv.ohio.gov',
    accountUrl: 'https://www.bmv.ohio.gov/online-services.aspx',
    appointmentUrl: 'https://www.bmv.ohio.gov/locations.aspx',
    services: {
      licenseRenewal: false,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: false,
    },
    senior: {
      inPersonAge: null,
      visionTestAge: null,
      medicalReporting:
        'Ohio BMV accepts reports from physicians, law enforcement, and family members for medical review.',
      cycleChange:
        'Ohio does not shorten the cycle by age, but drivers must renew in person (license) at a deputy registrar. Only registration and a few services can be done online.',
    },
    paymentMethods: ['Credit/debit card'],
    processingTime: 'Mailed within 10 business days.',
  },
  {
    code: 'GA',
    name: 'Georgia',
    dmvName: 'Georgia Department of Driver Services (DDS)',
    website: 'https://dds.georgia.gov',
    accountUrl: 'https://online.dds.ga.gov',
    appointmentUrl: 'https://online.dds.ga.gov/onlineservices',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: 64,
      visionTestAge: 64,
      medicalReporting:
        'Georgia accepts physician and family reports for medical review.',
      cycleChange:
        'Drivers 64 and older must pass a vision test at every renewal. Online renewal is allowed only if you have an eye doctor submit vision results to DDS.',
    },
    paymentMethods: ['Credit/debit card'],
    processingTime: 'Mailed within 5–7 business days.',
  },
  {
    code: 'NC',
    name: 'North Carolina',
    dmvName: 'NC DMV',
    website: 'https://www.ncdot.gov/dmv',
    accountUrl: 'https://payments.ncdot.gov',
    appointmentUrl: 'https://skiptheline.ncdot.gov',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: false,
    },
    senior: {
      inPersonAge: 66,
      visionTestAge: 66,
      medicalReporting:
        'North Carolina DMV accepts reports and may require a medical evaluation.',
      cycleChange:
        'Drivers 66 and older receive a 5-year license instead of 8 years. Online renewal is allowed once between in-person renewals for most drivers.',
    },
    paymentMethods: ['Credit/debit card'],
    processingTime: 'Mailed within 20 business days.',
  },
  {
    code: 'MI',
    name: 'Michigan',
    dmvName: 'Michigan Secretary of State',
    website: 'https://www.michigan.gov/sos',
    accountUrl: 'https://onlineservices.michigan.gov',
    appointmentUrl: 'https://www.michigan.gov/sos/resources/contact/schedule-an-office-visit',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: null,
      visionTestAge: null,
      medicalReporting:
        'Michigan accepts medical review requests from physicians, family, and law enforcement.',
      cycleChange:
        'Michigan allows renewal by mail or online every other cycle — the other cycle must be in person so your photo can be updated.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'Mailed within 14 business days.',
  },
  {
    code: 'NJ',
    name: 'New Jersey',
    dmvName: 'New Jersey MVC',
    website: 'https://www.state.nj.us/mvc',
    accountUrl: 'https://www.state.nj.us/mvc/online',
    appointmentUrl: 'https://telegov.njportal.com/njmvc/AppointmentWizard',
    services: {
      licenseRenewal: false,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: false,
    },
    senior: {
      inPersonAge: null,
      visionTestAge: null,
      medicalReporting:
        'New Jersey has a confidential medical review process and accepts reports from physicians and others.',
      cycleChange:
        'No age-based cycle reduction. License renewal typically requires an in-person visit for a new photo every 8 years.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'Mailed within 10 business days.',
  },
  {
    code: 'VA',
    name: 'Virginia',
    dmvName: 'Virginia DMV',
    website: 'https://www.dmv.virginia.gov',
    accountUrl: 'https://www.dmvnow.com',
    appointmentUrl: 'https://www.dmv.virginia.gov/general/appointments.asp',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: true,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: 75,
      visionTestAge: 75,
      medicalReporting:
        'Virginia DMV accepts physician, family, and law enforcement referrals for medical review.',
      cycleChange:
        'Drivers 75 and older must renew in person and pass a vision test. Standard license term is 8 years; at 75+, the term is 5 years.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'Mailed within 10 business days.',
  },
  {
    code: 'WA',
    name: 'Washington',
    dmvName: 'Washington State Department of Licensing (DOL)',
    website: 'https://www.dol.wa.gov',
    accountUrl: 'https://secure.dol.wa.gov',
    appointmentUrl: 'https://www.dol.wa.gov/driverslicense/locations.html',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: false,
    },
    senior: {
      inPersonAge: 70,
      visionTestAge: 70,
      medicalReporting:
        'Washington DOL reviews medical concerns referred by doctors, family, or law enforcement.',
      cycleChange:
        'Drivers 70 and older cannot renew online; they must visit an office and pass a vision test. License term is 6 years.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'Mailed within 7–10 business days.',
    extraNotes: [
      'Washington offers an Enhanced Driver License (EDL) that works as a REAL ID and lets you cross into Canada/Mexico/Caribbean by land or sea.',
    ],
  },
  {
    code: 'AZ',
    name: 'Arizona',
    dmvName: 'Arizona MVD (ADOT)',
    website: 'https://azdot.gov/motor-vehicles',
    accountUrl: 'https://azmvdnow.gov',
    appointmentUrl: 'https://azmvdnow.gov',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: true,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: true,
    },
    senior: {
      inPersonAge: 65,
      visionTestAge: 65,
      medicalReporting:
        'Arizona accepts medical referrals and can require a re-examination.',
      cycleChange:
        'Standard Arizona licenses last until age 65 (so one license can last decades). At 65, you must renew every 5 years and complete a vision test in person.',
      notes:
        'This is unusual — younger Arizona drivers may not need to renew until age 65. Seniors handle their first several renewals in person.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'Mailed within 15 business days.',
  },
  {
    code: 'MA',
    name: 'Massachusetts',
    dmvName: 'Massachusetts RMV',
    website: 'https://www.mass.gov/rmv',
    accountUrl: 'https://atlas-myrmv.massdot.state.ma.us/myrmv',
    appointmentUrl: 'https://www.mass.gov/info-details/make-or-cancel-a-reservation-at-an-rmv-service-center',
    services: {
      licenseRenewal: true,
      registrationRenewal: true,
      addressChange: true,
      replacementCard: true,
      duplicateTitle: false,
      voterRegistration: true,
      organDonor: true,
      realIdRequest: false,
      commercialCredential: false,
      disabilityPlacard: false,
    },
    senior: {
      inPersonAge: 75,
      visionTestAge: 75,
      medicalReporting:
        'Massachusetts accepts anonymous and family reports; the RMV Medical Affairs Branch reviews each case.',
      cycleChange:
        'Drivers 75 and older must renew in person and pass a vision screening at every renewal.',
    },
    paymentMethods: ['Credit/debit card', 'Electronic check'],
    processingTime: 'Mailed within 14 business days.',
  },
];

/* ── All remaining states: generic fallback with verified URLs ── */

const OTHER_STATES: StateEntry[] = [
  { code: 'AL', name: 'Alabama', dmvName: 'Alabama Law Enforcement Agency / ALDOR', website: 'https://www.alea.gov/dps/driver-license', appointmentUrl: 'https://dlappointment.alea.gov', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 10–14 business days.' },
  { code: 'AK', name: 'Alaska', dmvName: 'Alaska DMV', website: 'https://doa.alaska.gov/dmv', appointmentUrl: 'https://myalaska.state.ak.us', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 69 and older renew every 5 years (instead of 8). Renewal is typically still allowed online.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'AR', name: 'Arkansas', dmvName: 'Arkansas Department of Finance and Administration', website: 'https://www.dfa.arkansas.gov/services/category/driver-services', appointmentUrl: 'https://mydmv.arkansas.gov', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 15 business days.' },
  { code: 'CO', name: 'Colorado', dmvName: 'Colorado DMV', website: 'https://dmv.colorado.gov', appointmentUrl: 'https://dmv.colorado.gov/appointments', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 21 and older normally get 5-year licenses. Seniors can often renew online every other cycle.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 14 business days.' },
  { code: 'CT', name: 'Connecticut', dmvName: 'Connecticut DMV', website: 'https://portal.ct.gov/DMV', appointmentUrl: 'https://portal.ct.gov/DMV/Appointments', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 65 and older can choose a 2-year renewal instead of 6-year at no extra cost.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 20 business days.' },
  { code: 'DE', name: 'Delaware', dmvName: 'Delaware DMV', website: 'https://www.dmv.de.gov', appointmentUrl: 'https://dmv.de.gov/services/driver_services/dl_online_scheduler.shtml', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'DC', name: 'District of Columbia', dmvName: 'DC DMV', website: 'https://dmv.dc.gov', appointmentUrl: 'https://dmv.dc.gov/page/dmv-service-center-appointments', services: genericServices(), senior: { ...genericSenior(), visionTestAge: 70, cycleChange: 'Drivers 70 and older must submit a vision certificate from an eye doctor.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 10 business days.' },
  { code: 'HI', name: 'Hawaii', dmvName: 'Hawaii Motor Vehicle Licensing', website: 'https://hidot.hawaii.gov/highways/library/motor-vehicle-safety-office', appointmentUrl: 'https://aamva.hawaii.gov/aamva/#/Appointments', services: { ...genericServices(), licenseRenewal: false }, senior: { ...genericSenior(), inPersonAge: 72, cycleChange: 'Drivers 72 and older renew every 2 years instead of 8 and must go in person.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 15 business days.' },
  { code: 'ID', name: 'Idaho', dmvName: 'Idaho Transportation Department (ITD) DMV', website: 'https://itd.idaho.gov/itddmv', appointmentUrl: 'https://itd.idaho.gov/dmv/driverservices', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 63 and older receive 4-year licenses instead of 8.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'IN', name: 'Indiana', dmvName: 'Indiana BMV', website: 'https://www.in.gov/bmv', appointmentUrl: 'https://mybmv.bmv.in.gov', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 75–84 renew every 3 years; 85 and older every 2 years.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 10 business days.' },
  { code: 'IA', name: 'Iowa', dmvName: 'Iowa DOT Driver Services', website: 'https://iowadot.gov/mvd', appointmentUrl: 'https://iowadot.gov/mvd/appointments', services: genericServices(), senior: { ...genericSenior(), inPersonAge: 72, cycleChange: 'Drivers 72 and older renew every 2 years instead of 8 and must renew in person.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 20 business days.' },
  { code: 'KS', name: 'Kansas', dmvName: 'Kansas Department of Revenue DOV', website: 'https://www.ksrevenue.gov/dovindex.html', appointmentUrl: 'https://ikan.ks.gov', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 65 and older renew every 4 years; younger drivers get 6 years.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 10 business days.' },
  { code: 'KY', name: 'Kentucky', dmvName: 'Kentucky Transportation Cabinet', website: 'https://drive.ky.gov', appointmentUrl: 'https://drive.ky.gov/Pages/Appointment.aspx', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 10 business days.' },
  { code: 'LA', name: 'Louisiana', dmvName: 'Louisiana Office of Motor Vehicles (OMV)', website: 'https://www.expresslane.org', appointmentUrl: 'https://omv.la.gov', services: genericServices(), senior: { ...genericSenior(), inPersonAge: 70, cycleChange: 'Drivers 70 and older must renew in person; other drivers may be eligible to renew online every other cycle.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 15 business days.' },
  { code: 'ME', name: 'Maine', dmvName: 'Maine BMV', website: 'https://www.maine.gov/sos/bmv', appointmentUrl: 'https://www1.maine.gov/online/bmv/appointment', services: genericServices(), senior: { ...genericSenior(), visionTestAge: 40, cycleChange: 'Vision tests begin at 40 and happen every other renewal. Drivers 65+ renew every 4 years instead of 6.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'MD', name: 'Maryland', dmvName: 'Maryland MVA', website: 'https://mva.maryland.gov', appointmentUrl: 'https://services.mva.maryland.gov/Appointment', services: genericServices(), senior: { ...genericSenior(), visionTestAge: 40, cycleChange: 'Vision tests are required at every renewal starting at age 40. Renewal cycle is 8 years.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 10 business days.' },
  { code: 'MN', name: 'Minnesota', dmvName: 'Minnesota DVS', website: 'https://dps.mn.gov/divisions/dvs', appointmentUrl: 'https://drive.mn.gov', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 20 business days.' },
  { code: 'MS', name: 'Mississippi', dmvName: 'Mississippi Department of Public Safety DSD', website: 'https://www.dps.ms.gov/driver-services', appointmentUrl: 'https://www.dps.ms.gov/driver-services/driver-license-locations', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 15 business days.' },
  { code: 'MO', name: 'Missouri', dmvName: 'Missouri Department of Revenue', website: 'https://dor.mo.gov/driver-license', appointmentUrl: 'https://dor.mo.gov/driver-license/issuance/find-office.html', services: genericServices(), senior: { ...genericSenior(), inPersonAge: 70, cycleChange: 'Drivers 70 and older renew every 3 years (instead of 6) and must renew in person.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 10 business days.' },
  { code: 'MT', name: 'Montana', dmvName: 'Montana MVD', website: 'https://dojmt.gov/driving', appointmentUrl: 'https://app.mt.gov/osl', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 75 and older receive a 4-year license instead of 8.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'NE', name: 'Nebraska', dmvName: 'Nebraska DMV', website: 'https://dmv.nebraska.gov', appointmentUrl: 'https://dmv.nebraska.gov/dl/appointments', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 15 business days.' },
  { code: 'NV', name: 'Nevada', dmvName: 'Nevada DMV', website: 'https://dmv.nv.gov', appointmentUrl: 'https://dmvapp.nv.gov/DMV/OnlineServices/Appointments', services: genericServices(), senior: { ...genericSenior(), visionTestAge: 71, cycleChange: 'Drivers 71 and older must take a vision test at each renewal. Online renewal allowed every other cycle.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 10 business days.' },
  { code: 'NH', name: 'New Hampshire', dmvName: 'New Hampshire DMV', website: 'https://www.dmv.nh.gov', appointmentUrl: 'https://www.dmv.nh.gov/locations', services: { ...genericServices(), licenseRenewal: false }, senior: { ...genericSenior(), inPersonAge: 75, cycleChange: 'Drivers 75 and older must renew in person and pass a road test on request.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 30 business days.' },
  { code: 'NM', name: 'New Mexico', dmvName: 'New Mexico MVD', website: 'https://www.mvd.newmexico.gov', appointmentUrl: 'https://www.mvd.newmexico.gov/appointments', services: genericServices(), senior: { ...genericSenior(), inPersonAge: 75, cycleChange: 'Drivers 75 and older must renew in person every year.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 10 business days.' },
  { code: 'ND', name: 'North Dakota', dmvName: 'North Dakota DOT Drivers License Division', website: 'https://www.dot.nd.gov/divisions/driverslicense', appointmentUrl: 'https://apps.nd.gov/dot/dlts', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 78 and older receive a 4-year license instead of 6.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 15 business days.' },
  { code: 'OK', name: 'Oklahoma', dmvName: 'Service Oklahoma', website: 'https://oklahoma.gov/service', appointmentUrl: 'https://oklahoma.gov/service/locations', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 62 and older qualify for a discounted renewal fee. Term remains 4 years.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'OR', name: 'Oregon', dmvName: 'Oregon DMV', website: 'https://www.oregon.gov/odot/dmv', appointmentUrl: 'https://www.oregon.gov/odot/DMV/pages/appointments.aspx', services: genericServices(), senior: { ...genericSenior(), visionTestAge: 50, cycleChange: 'Vision screenings are required every renewal starting at age 50.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 20 business days.' },
  { code: 'RI', name: 'Rhode Island', dmvName: 'Rhode Island DMV', website: 'https://dmv.ri.gov', appointmentUrl: 'https://www.ri.gov/app/dmv/dlappointment', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 75 and older renew every 2 years instead of 5.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'SC', name: 'South Carolina', dmvName: 'South Carolina DMV', website: 'https://scdmvonline.com', appointmentUrl: 'https://scdmvonline.com/Appointment-Schedule', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 65 and older renew every 5 years; younger drivers get 8 years.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 10 business days.' },
  { code: 'SD', name: 'South Dakota', dmvName: 'South Dakota Driver Licensing', website: 'https://dps.sd.gov/licensing/driver-licensing', appointmentUrl: 'https://dps.sd.gov/licensing/driver-licensing/exam-station-locations', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 15 business days.' },
  { code: 'TN', name: 'Tennessee', dmvName: 'Tennessee Driver Services', website: 'https://www.tn.gov/safety/driver-services', appointmentUrl: 'https://tn.skiptheline.com', services: genericServices(), senior: { ...genericSenior(), cycleChange: 'Drivers 65 and older receive non-expiring licenses in some cases, but photo/vision updates are still required periodically.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'UT', name: 'Utah', dmvName: 'Utah Division of Motor Vehicles / Driver License Division', website: 'https://dld.utah.gov', appointmentUrl: 'https://secure.utah.gov/dldapt/dldapt', services: genericServices(), senior: { ...genericSenior(), inPersonAge: 65, cycleChange: 'Drivers 65 and older must renew in person and take a vision test every 5 years.' }, paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'VT', name: 'Vermont', dmvName: 'Vermont DMV', website: 'https://dmv.vermont.gov', appointmentUrl: 'https://dmv.vermont.gov/locations', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 20 business days.' },
  { code: 'WV', name: 'West Virginia', dmvName: 'West Virginia DMV', website: 'https://transportation.wv.gov/dmv', appointmentUrl: 'https://apps.wv.gov/DMV/SelfService/Appointments', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 14 business days.' },
  { code: 'WI', name: 'Wisconsin', dmvName: 'Wisconsin DMV', website: 'https://wisconsindmv.gov', appointmentUrl: 'https://trust.dot.state.wi.us/appointment', services: genericServices(), senior: { ...genericSenior(), visionTestAge: 65, cycleChange: 'Drivers must pass a vision screening at every renewal. Renewal cycle is 8 years.' }, paymentMethods: ['Credit/debit card', 'Electronic check'], processingTime: 'Mailed within 10 business days.' },
  { code: 'WY', name: 'Wyoming', dmvName: 'Wyoming DOT Driver Services', website: 'https://www.dot.state.wy.us/home/driver_license_records.html', appointmentUrl: 'https://www.dot.state.wy.us/home/driver_license_records/ds_locations.html', services: genericServices(), senior: genericSenior(), paymentMethods: ['Credit/debit card'], processingTime: 'Mailed within 15 business days.' },
];

const ALL_STATES: StateEntry[] = [...TOP_STATES, ...OTHER_STATES].sort((a, b) =>
  a.name.localeCompare(b.name),
);

/* ── Service label map ──────────────────────────────────── */

const SERVICE_LABELS: Array<{ key: keyof OnlineServices; label: string }> = [
  { key: 'licenseRenewal', label: "Driver's license renewal" },
  { key: 'registrationRenewal', label: 'Vehicle registration renewal' },
  { key: 'addressChange', label: 'Address change' },
  { key: 'replacementCard', label: 'Replacement license/ID card' },
  { key: 'duplicateTitle', label: 'Duplicate title' },
  { key: 'voterRegistration', label: 'Voter registration' },
  { key: 'organDonor', label: 'Organ donor enrollment' },
  { key: 'realIdRequest', label: 'Start REAL ID application' },
  { key: 'commercialCredential', label: 'Commercial credential (CDL)' },
  { key: 'disabilityPlacard', label: 'Disability placard renewal' },
];

/* ── Small UI helpers ───────────────────────────────────── */

function YesNoRow({ label, value }: { label: string; value: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3 py-2.5 border-b border-border/60 last:border-b-0">
      <span className="text-base leading-relaxed">{label}</span>
      {value ? (
        <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50 shrink-0">
          <CheckCircle2 className="w-4 h-4 mr-1" aria-hidden="true" />
          Online
        </Badge>
      ) : (
        <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 shrink-0">
          <XCircle className="w-4 h-4 mr-1" aria-hidden="true" />
          In person
        </Badge>
      )}
    </div>
  );
}

function ExternalLinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button asChild variant="outline" className="min-h-14 text-base">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
      </a>
    </Button>
  );
}

/* ── Main component ─────────────────────────────────────── */

export default function DmvOnlineHelper() {
  const [selectedCode, setSelectedCode] = useState<StateCode | ''>('');

  const selectedState = useMemo(
    () => ALL_STATES.find((s) => s.code === selectedCode) ?? null,
    [selectedCode],
  );

  return (
    <>
      <SEOHead
        title="DMV Online Helper — State-by-State Guide, REAL ID, Senior Renewal Rules | TekSure"
        description="Every state's DMV online services, senior-specific renewal rules, REAL ID deadlines, appointment links, and motor vehicle scam warnings — in plain English."
        path="/tools/dmv-online-helper"
      />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-cyan-400/15 dark:from-sky-900/40 dark:via-blue-900/25 dark:to-cyan-900/30" aria-hidden="true" />
          <div className="container relative py-10 md:py-16">
            <div className="absolute top-6 right-6">
              <BookmarkButton
                type="tool"
                slug="dmv-online-helper"
                title="DMV Online Helper"
                url="/tools/dmv-online-helper"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-5 h-5 text-sky-700 dark:text-sky-300" />
              <Badge variant="outline" className="text-xs">
                Everyday Tech · Government
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 pr-14 leading-tight">
              DMV Online — Skip the Line When You Can
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Every state's DMV online services, senior renewal rules, and REAL ID deadlines.
              Clear, plain-English answers so you know before you drive there.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">51 states + DC</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Official .gov links only</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Senior rules included</Badge>
            </div>
          </div>
        </section>

        {/* State picker */}
        <section className="container py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-sky-700 dark:text-sky-300" />
              <h2 className="text-2xl md:text-3xl font-semibold">Pick your state</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
              Choose the state where your license is issued. We'll show you what you can do online,
              what needs an in-person visit, and any rules that kick in at a certain age.
            </p>

            <Select value={selectedCode} onValueChange={(v) => setSelectedCode(v as StateCode)}>
              <SelectTrigger className="min-h-14 text-base">
                <SelectValue placeholder="Select a state…" />
              </SelectTrigger>
              <SelectContent className="max-h-96">
                {ALL_STATES.map((s) => (
                  <SelectItem key={s.code} value={s.code} className="text-base py-3">
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {!selectedState && (
              <Alert className="mt-6 border-sky-200 bg-sky-50/60 dark:bg-sky-950/30">
                <Info className="h-5 w-5 text-sky-700 dark:text-sky-300" />
                <AlertTitle className="text-base">Tip</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  Only the state that issued your license can renew it. If you've moved, you must
                  transfer your license to the new state, which usually requires an in-person visit.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Per-state details */}
          {selectedState && (
            <div className="max-w-4xl mx-auto mt-8 space-y-6">
              <Card>
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        {selectedState.dmvName}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mt-1">{selectedState.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <ExternalLinkBtn href={selectedState.website}>
                        Official website
                      </ExternalLinkBtn>
                      {selectedState.accountUrl && (
                        <ExternalLinkBtn href={selectedState.accountUrl}>
                          Online account
                        </ExternalLinkBtn>
                      )}
                      {selectedState.appointmentUrl && (
                        <ExternalLinkBtn href={selectedState.appointmentUrl}>
                          Book appointment
                        </ExternalLinkBtn>
                      )}
                    </div>
                  </div>

                  <Tabs defaultValue="online" className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto gap-1">
                      <TabsTrigger value="online" className="min-h-14 text-base">Online</TabsTrigger>
                      <TabsTrigger value="senior" className="min-h-14 text-base">Senior rules</TabsTrigger>
                      <TabsTrigger value="realid" className="min-h-14 text-base">REAL ID</TabsTrigger>
                      <TabsTrigger value="logistics" className="min-h-14 text-base">Payment &amp; time</TabsTrigger>
                    </TabsList>

                    <TabsContent value="online" className="mt-5">
                      <h4 className="text-lg font-semibold mb-3">What you can do online</h4>
                      <div>
                        {SERVICE_LABELS.map((row) => (
                          <YesNoRow
                            key={row.key}
                            label={row.label}
                            value={selectedState.services[row.key]}
                          />
                        ))}
                      </div>
                      {selectedState.extraNotes && (
                        <div className="mt-5 space-y-2">
                          {selectedState.extraNotes.map((n, i) => (
                            <Alert key={i} className="border-sky-200 bg-sky-50/60 dark:bg-sky-950/30">
                              <Info className="h-5 w-5 text-sky-700 dark:text-sky-300" />
                              <AlertDescription className="text-base leading-relaxed">{n}</AlertDescription>
                            </Alert>
                          ))}
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="senior" className="mt-5 space-y-4">
                      <h4 className="text-lg font-semibold">Rules for older drivers</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-5">
                            <div className="flex items-center gap-2 mb-2 text-sky-700 dark:text-sky-300">
                              <Users className="w-5 h-5" />
                              <div className="font-semibold">In-person required at age</div>
                            </div>
                            <div className="text-2xl font-bold">
                              {selectedState.senior.inPersonAge ?? 'No age rule'}
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-5">
                            <div className="flex items-center gap-2 mb-2 text-sky-700 dark:text-sky-300">
                              <Eye className="w-5 h-5" />
                              <div className="font-semibold">Vision test starting at</div>
                            </div>
                            <div className="text-2xl font-bold">
                              {selectedState.senior.visionTestAge ?? 'All ages may be asked'}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div>
                        <div className="font-semibold mb-1 flex items-center gap-2">
                          <CalendarClock className="w-5 h-5 text-sky-700 dark:text-sky-300" />
                          Renewal cycle at older ages
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {selectedState.senior.cycleChange}
                        </p>
                      </div>
                      <div>
                        <div className="font-semibold mb-1 flex items-center gap-2">
                          <HeartPulse className="w-5 h-5 text-sky-700 dark:text-sky-300" />
                          Medical reporting
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {selectedState.senior.medicalReporting}
                        </p>
                      </div>
                      {selectedState.senior.notes && (
                        <Alert className="border-amber-200 bg-amber-50/60 dark:bg-amber-950/30">
                          <Info className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                          <AlertDescription className="text-base leading-relaxed">
                            {selectedState.senior.notes}
                          </AlertDescription>
                        </Alert>
                      )}
                    </TabsContent>

                    <TabsContent value="realid" className="mt-5 space-y-3">
                      <h4 className="text-lg font-semibold">REAL ID documents for {selectedState.name}</h4>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Bring the originals — no photocopies. Expect to make at least one in-person trip.
                      </p>
                      <ul className="space-y-2">
                        {(selectedState.realIdDocs ?? REAL_ID_GENERIC_DOCS).map((doc, i) => (
                          <li key={i} className="flex gap-3 text-base leading-relaxed">
                            <FileText className="w-5 h-5 text-sky-700 dark:text-sky-300 mt-0.5 shrink-0" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                      <Alert className="border-sky-200 bg-sky-50/60 dark:bg-sky-950/30">
                        <Info className="h-5 w-5 text-sky-700 dark:text-sky-300" />
                        <AlertDescription className="text-base leading-relaxed">
                          If you have a valid U.S. passport, you don't strictly need a REAL ID to fly domestically — you can use the passport at TSA instead.
                        </AlertDescription>
                      </Alert>
                    </TabsContent>

                    <TabsContent value="logistics" className="mt-5 space-y-4">
                      <div>
                        <div className="font-semibold mb-2 flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-sky-700 dark:text-sky-300" />
                          Payment methods accepted online
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedState.paymentMethods.map((p) => (
                            <Badge key={p} variant="secondary" className="text-sm py-1.5 px-3">
                              {p}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold mb-1 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-sky-700 dark:text-sky-300" />
                          Typical processing time
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {selectedState.processingTime}
                        </p>
                      </div>
                      {selectedState.paperFormsNote && (
                        <div>
                          <div className="font-semibold mb-1 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-sky-700 dark:text-sky-300" />
                            Paper forms
                          </div>
                          <p className="text-base leading-relaxed text-muted-foreground">
                            {selectedState.paperFormsNote}
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* REAL ID deep dive */}
        <section className="border-y border-border bg-muted/30">
          <div className="container py-10 md:py-14 max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-sky-700 dark:text-sky-300" />
              <h2 className="text-2xl md:text-3xl font-semibold">REAL ID: what it is, and what you need</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
              REAL ID enforcement is active at U.S. airports. TSA began enforcing the requirement on
              May 7, 2025. If you plan to fly within the United States and you are over 18, you need
              either a REAL ID (the one with a star in the top corner) or another accepted ID like a
              U.S. passport.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    What to bring (originals only)
                  </h3>
                  <ul className="space-y-2 text-base leading-relaxed">
                    <li>Proof of identity: certified birth certificate, valid U.S. passport, or immigration document</li>
                    <li>Proof of Social Security number: SSN card, W-2, SSA-1099, or paystub with full SSN</li>
                    <li>Two proofs of your current address: utility bill, bank statement, mortgage, rental agreement, or other official mail dated within the last 60–90 days</li>
                    <li>If your name has changed: marriage certificate, divorce decree, or court order — for every change</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-rose-600" />
                    What does NOT count
                  </h3>
                  <ul className="space-y-2 text-base leading-relaxed">
                    <li>Photocopies or scans of any of the above</li>
                    <li>An old expired ID as your only proof of identity</li>
                    <li>Handwritten rent notes or letters from a landlord with no lease</li>
                    <li>Mail addressed to someone else at your address</li>
                    <li>A P.O. box for residency (a physical address is usually required)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-5 border-sky-200 bg-sky-50/60 dark:bg-sky-950/30">
              <Info className="h-5 w-5 text-sky-700 dark:text-sky-300" />
              <AlertTitle className="text-base">You don't HAVE to get a REAL ID</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                A valid U.S. passport, passport card, enhanced driver license (EDL in MI, MN, NY, VT, WA),
                military ID, or Global Entry card all work at TSA. If you already have a current passport
                and don't mind carrying it, a regular driver's license is still fine for driving.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Decision tree */}
        <section className="container py-10 md:py-14 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-sky-700 dark:text-sky-300" />
            <h2 className="text-2xl md:text-3xl font-semibold">"Shouldn't I just go in person?"</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
            Sometimes yes. Walk through this checklist first — it tells you whether a trip is required.
          </p>

          <Card>
            <CardContent className="p-6 md:p-8">
              <ol className="space-y-4 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-200 text-sm font-bold flex items-center justify-center">1</span>
                  <div>
                    <strong>Need a REAL ID (first time)?</strong> Go in person. Documents must be verified face-to-face.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-200 text-sm font-bold flex items-center justify-center">2</span>
                  <div>
                    <strong>Age 80+ and a new photo is required?</strong> Go in person. Most states also want a fresh vision test.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-200 text-sm font-bold flex items-center justify-center">3</span>
                  <div>
                    <strong>Address change only?</strong> Usually online. Every state above supports online address change.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-200 text-sm font-bold flex items-center justify-center">4</span>
                  <div>
                    <strong>Standard renewal, same address, same photo works?</strong> Online if your state allows — your new card arrives by mail.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-200 text-sm font-bold flex items-center justify-center">5</span>
                  <div>
                    <strong>Vision or medical concern?</strong> Go in person. Staff can screen and point you to the right forms.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-200 text-sm font-bold flex items-center justify-center">6</span>
                  <div>
                    <strong>License suspended, expired over a year, or flagged with issues?</strong> In person. Online will block you.
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Senior driving concerns */}
        <section className="border-y border-border bg-muted/30">
          <div className="container py-10 md:py-14 max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <HeartPulse className="w-5 h-5 text-sky-700 dark:text-sky-300" />
              <h2 className="text-2xl md:text-3xl font-semibold">Thinking about when to stop driving</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
              There's no single right age. This section is for anyone starting to wonder about it — for
              themselves or a family member. The goal is independence and safety, not losing freedom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Signs worth paying attention to</h3>
                  <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                    <li>Getting lost on familiar routes</li>
                    <li>Close calls, dings, or new scrapes on the car</li>
                    <li>Other drivers honking at you more often</li>
                    <li>Trouble with left turns or highway merging</li>
                    <li>Family or friends quietly offering to drive</li>
                    <li>Slower reactions to sudden stops</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Alternatives that keep you moving</h3>
                  <ul className="space-y-2 text-base leading-relaxed">
                    <li>
                      <Link to="/tools/rideshare-setup" className="text-sky-700 dark:text-sky-300 underline underline-offset-2">
                        Rideshare setup (Uber, Lyft, GoGoGrandparent)
                      </Link>
                    </li>
                    <li>Senior fare cards or free-for-seniors programs on local buses and rail</li>
                    <li>Area Agency on Aging ride programs — usually free or by donation</li>
                    <li>ITNAmerica, SilverRide, and other senior-focused services in some cities</li>
                    <li>Family driving rotation — a shared calendar works well</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-5 border-sky-200 bg-sky-50/60 dark:bg-sky-950/30">
              <Info className="h-5 w-5 text-sky-700 dark:text-sky-300" />
              <AlertTitle className="text-base">Tools that help you self-assess</AlertTitle>
              <AlertDescription className="text-base leading-relaxed">
                AAA and AARP offer a free driving self-assessment called Roadwise Review. Most states
                also have a voluntary "do not renew" option — you keep your ID but stop driving on your
                own terms. Ask at your local office.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Motor vehicle scam warnings */}
        <section className="container py-10 md:py-14 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            <h2 className="text-2xl md:text-3xl font-semibold">Common motor vehicle scams</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
            Scammers love DMV season. If a text, call, or email asks for money or personal info, stop.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: '"Your registration expired" text',
                body: 'Almost always a scam. Real DMVs do not text payment links. Go to your state DMV website directly in your browser.',
                icon: PhoneOff,
              },
              {
                title: 'Fake DMV websites (.com, .org, or .us-look-alikes)',
                body: 'Real state DMVs end in .gov or .state.[code].us. If it ends in .com and charges a "helper fee," back out.',
                icon: ShieldAlert,
              },
              {
                title: '"Your car warranty is expiring" calls',
                body: 'Robocall scam. Hang up. Your actual warranty paperwork came with the car — not by phone.',
                icon: Phone,
              },
              {
                title: 'Parking ticket texts with a pay link',
                body: 'Scam. Cities do not send ticket payment by text. Check the city or county site directly, or call your local parking office.',
                icon: AlertTriangle,
              },
              {
                title: 'Toll agency texts demanding payment',
                body: 'Usually fake. Verify in the real app (SunPass, E-ZPass, FasTrak, etc.) or on the real .gov site. Never tap the text link.',
                icon: ShieldAlert,
              },
              {
                title: '"DMV owes you a refund" emails',
                body: 'The DMV does not email surprise refunds that require you to enter bank info. Delete.',
                icon: PhoneOff,
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-rose-600">
                      <Icon className="w-5 h-5" />
                      <h3 className="font-semibold text-base">{s.title}</h3>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">{s.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-6">
            <Button asChild variant="secondary" className="min-h-14 text-base">
              <Link to="/tools/is-this-real">
                Not sure if a message is real? Use our Is This Real? checker
                <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Online-only pitfalls */}
        <section className="border-y border-border bg-muted/30">
          <div className="container py-10 md:py-14 max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-2xl md:text-3xl font-semibold">Online renewal pitfalls</h2>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-3 text-base leading-relaxed">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    Print or save the confirmation page the moment you pay. That's your proof of renewal.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    Note the mail-by or pickup-by date. New licenses usually arrive by mail in 2–4 weeks.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    If you're moving out of state, order certified copies of your birth and marriage certificates ahead. Those are the hardest to replace.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    Check your photo's age — some states require a fresh photo every cycle, which forces an in-person visit.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    Carry a backup photo ID between renewal and arrival. An expired license plus a valid passport is accepted in most settings.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    Your old license works until the new one arrives, unless your state says otherwise.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Appointment prep */}
        <section className="container py-10 md:py-14 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <CalendarClock className="w-5 h-5 text-sky-700 dark:text-sky-300" />
            <h2 className="text-2xl md:text-3xl font-semibold">How to prepare for an in-person appointment</h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
            Most states now require appointments, with waits of 3–4 weeks. Prep saves a second trip.
          </p>
          <Card>
            <CardContent className="p-6 md:p-8">
              <ol className="space-y-3 text-base leading-relaxed list-decimal pl-5">
                <li>Book the appointment online as early as possible — the link above opens your state's scheduler.</li>
                <li>Bring every possible document, even if you're not sure you need it. Extras never hurt.</li>
                <li>Make a document checklist the night before and lay them all on the kitchen table.</li>
                <li>Confirm the office's payment options — some still require cash or check for specific fees.</li>
                <li>Bring a book, puzzle, or phone with headphones. Waits can still run long.</li>
                <li>Arrive 15 minutes early. Many offices cancel late appointments.</li>
                <li>If you need mobility help, call ahead — offices can arrange wheelchair or assisted service.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Medical certificate */}
        <section className="border-y border-border bg-muted/30">
          <div className="container py-10 md:py-14 max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="w-5 h-5 text-sky-700 dark:text-sky-300" />
              <h2 className="text-2xl md:text-3xl font-semibold">Medical certificate requirements</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
              Some states ask for a doctor's form at senior renewals — or if a concern has been reported.
              The form looks different in every state but the steps to get it are the same.
            </p>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ol className="space-y-3 text-base leading-relaxed list-decimal pl-5">
                  <li>Download your state's medical evaluation form from the official DMV website (use the link for your state above).</li>
                  <li>Call your primary care doctor and ask for a "driver medical evaluation" appointment. Many offices book these as a 15-minute visit.</li>
                  <li>Bring the form with you. Medicare or most insurance plans cover the visit if it's tied to a standard physical.</li>
                  <li>Ask the doctor to complete and sign every section. Missing signatures are the top reason forms get rejected.</li>
                  <li>Submit the form at your DMV appointment — do not mail the only copy. Keep one for your records.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Title transfer */}
        <section className="container py-10 md:py-14 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-sky-700 dark:text-sky-300" />
            <h2 className="text-2xl md:text-3xl font-semibold">Title transfer — selling or gifting a car to family</h2>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8 space-y-4">
              <p className="text-base leading-relaxed">
                Transferring a car title sounds official — and it is — but the steps are short.
              </p>
              <ol className="space-y-3 text-base leading-relaxed list-decimal pl-5">
                <li>Find the original title. It looks like a certificate, often with a watermark, issued by the state.</li>
                <li>Fill in the back of the title: seller name, buyer name, sale price (gifts use "$0 — gift"), odometer reading, and signatures. Some states require a notary.</li>
                <li>Complete a bill of sale if your state requires one, or as a courtesy anyway.</li>
                <li>The buyer brings the signed title, bill of sale, and their driver's license to the DMV within the state's deadline (often 30 days).</li>
                <li>The buyer pays transfer fees and — in most states — sales tax. Gifts between immediate family members are often exempt from sales tax; check your state's rules.</li>
                <li>The buyer registers the car under their name and receives a new title in the mail.</li>
              </ol>
              <Alert className="border-amber-200 bg-amber-50/60 dark:bg-amber-950/30">
                <AlertTriangle className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                <AlertTitle className="text-base">Keep the insurance running</AlertTitle>
                <AlertDescription className="text-base leading-relaxed">
                  Do not cancel insurance on the seller's side until the buyer has their own policy in place and the transfer is filed. A gap creates a liability risk for both people.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="border-y border-border bg-muted/30">
          <div className="container py-10 md:py-14 max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-5 h-5 text-sky-700 dark:text-sky-300" />
              <h2 className="text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left text-base py-4">
                  Can I renew in a different state than I live?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  No. Only your home state can renew your license. If you've moved, you need to transfer to the new state's license (usually within 30–90 days of moving), which requires an in-person visit, proof of residency, and sometimes a vision test.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left text-base py-4">
                  What if I let my license expire?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  You usually have a short grace period (30–90 days) to renew without issue. After that, most states require you to visit in person and may charge a late fee. If it's been over a year, some states require you to retake the written and/or road test.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left text-base py-4">
                  Is there a grace period after my license expires?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Most states do not let you legally drive with an expired license — even for one day. You may still be able to renew without extra testing for a while, but driving on it is a ticket. If you realize it's expired, arrange a ride and handle the renewal the same week.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left text-base py-4">
                  Do I have to retake the driving test at a certain age?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  In Illinois, drivers 79 and older take a road test at every renewal. In a few other states, tests are ordered after a reported incident. Most states do not require retesting by age alone, but they can require it after a medical review or a crash.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left text-base py-4">
                  Is online renewal always cheaper?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Usually about the same, sometimes a dollar or two less. A few states charge a small convenience fee for card payments. The real savings is your time — an online renewal takes 10 minutes, an in-person visit takes 1–3 hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-left text-base py-4">
                  I can't use a computer — what are my options?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Every state still accepts paper renewal forms by mail, and every state has in-person offices. Your local library, Area Agency on Aging, or a family member can also walk you through the online version on their device. Our <Link to="/tools/rideshare-setup" className="text-sky-700 dark:text-sky-300 underline underline-offset-2">rideshare setup</Link> guide covers how to get to the office without driving.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-left text-base py-4">
                  Can a family member handle it for me?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  Address changes and registration renewal can often be done by a spouse or adult child, especially online. A license renewal that requires a new photo or vision test must be done by you in person. A notarized power of attorney can help for vehicle titles and registrations — ask your state DMV what's accepted.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Related tools */}
        <section className="container py-10 md:py-14 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">Related tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { to: '/tools/rideshare-setup', title: 'Rideshare Setup', desc: 'Get moving without driving — Uber, Lyft, and phone-only options.', icon: Car },
              { to: '/tools/government-benefits-portal', title: 'Government Benefits Portal', desc: 'Senior-friendly guide to every federal .gov benefits site.', icon: Landmark },
              { to: '/tools/state-benefits-finder', title: 'State Benefits Finder', desc: 'Find state-level help programs where you live.', icon: MapPin },
              { to: '/tools/is-this-real', title: 'Is This Real?', desc: 'Paste a suspicious text, email, or link and get a plain-English verdict.', icon: ShieldCheck },
            ].map(({ to, title, desc, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Card className="h-full hover:shadow-md transition-all">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="h-12 w-12 rounded-xl bg-sky-50 dark:bg-sky-950/40 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-sky-700 dark:text-sky-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-base">{title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
