import { useState } from 'react';
import { FileText, Printer, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface DocEntry {
  id: string;
  name: string;
  location: string;
  notes: string;
  found: boolean;
}

interface DocCategory {
  id: string;
  title: string;
  icon: string;
  why: string;
  docs: Array<{ id: string; name: string; hint: string }>;
}

const CATEGORIES: DocCategory[] = [
  {
    id: 'identity',
    title: 'Identity & Legal',
    icon: '🪪',
    why: 'These documents prove who you are. Keep originals in a fireproof safe and copies with a trusted person.',
    docs: [
      { id: 'sscard', name: 'Social Security Card', hint: 'Original — keep in fireproof safe, not wallet' },
      { id: 'passport', name: 'Passport', hint: 'Check expiration date — renew at least 6 months before travel' },
      { id: 'birthcert', name: 'Birth Certificate', hint: 'Official copy with raised seal' },
      { id: 'driverlic', name: 'Driver\'s License / State ID', hint: 'In wallet — note expiration date' },
      { id: 'marriage', name: 'Marriage Certificate', hint: 'May be needed for benefits, name changes' },
      { id: 'divorce', name: 'Divorce Decree', hint: 'If applicable — affects benefits and estate' },
      { id: 'naturalize', name: 'Naturalization Certificate', hint: 'If applicable — store with birth certificate' },
    ],
  },
  {
    id: 'legal',
    title: 'Estate & Legal Planning',
    icon: '⚖️',
    why: 'These documents tell family members and doctors what you want if you cannot speak for yourself. Tell at least one trusted person where these are stored.',
    docs: [
      { id: 'will', name: 'Will (Last Will & Testament)', hint: 'Tell your executor exactly where this is kept' },
      { id: 'trust', name: 'Living Trust Documents', hint: 'If applicable — keep with will' },
      { id: 'poa', name: 'Power of Attorney (Financial)', hint: 'Names who handles finances if you cannot' },
      { id: 'hcpoa', name: 'Healthcare Power of Attorney', hint: 'Names who makes medical decisions for you' },
      { id: 'livingwill', name: 'Living Will / Advance Directive', hint: 'Your wishes for end-of-life medical care' },
      { id: 'dnr', name: 'DNR Order', hint: 'If applicable — must be accessible in an emergency' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Accounts',
    icon: '💳',
    why: 'Keep a list of accounts so family can locate them. Never store PINs or passwords with this document.',
    docs: [
      { id: 'checking', name: 'Checking Account Info', hint: 'Bank name, account number, branch location' },
      { id: 'savings', name: 'Savings Account Info', hint: 'Include online banking access instructions' },
      { id: 'ira', name: 'IRA / Retirement Accounts', hint: 'Brokerage name, account numbers, beneficiaries' },
      { id: 'pension', name: 'Pension Documents', hint: 'Contact info for pension administrator' },
      { id: 'ssa', name: 'Social Security Award Letter', hint: 'Shows your monthly benefit amount' },
      { id: 'safedep', name: 'Safe Deposit Box Key & Location', hint: 'Note the bank name and box number' },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance Policies',
    icon: '🛡️',
    why: 'After a death or major event, family needs to find these quickly. Keep the policy number and company phone number handy.',
    docs: [
      { id: 'medicare', name: 'Medicare Card', hint: 'Protect the Medicare number — treat it like SSN' },
      { id: 'medsupply', name: 'Medicare Supplement / Medigap Policy', hint: 'Company name, policy number, phone' },
      { id: 'partd', name: 'Medicare Part D Drug Plan Card', hint: 'Needed at pharmacy for prescriptions' },
      { id: 'life', name: 'Life Insurance Policy', hint: 'Name of insurer, policy number, beneficiary' },
      { id: 'homeins', name: 'Homeowner\'s / Renter\'s Insurance', hint: 'Needed after fire, flood, theft' },
      { id: 'autoins', name: 'Auto Insurance Card', hint: 'Keep one copy in car glove box' },
      { id: 'ltc', name: 'Long-Term Care Insurance', hint: 'Policy details, waiting period, benefit amount' },
    ],
  },
  {
    id: 'property',
    title: 'Property & Vehicles',
    icon: '🏠',
    why: 'Needed for taxes, refinancing, selling, or estate settlement.',
    docs: [
      { id: 'deed', name: 'Home Deed', hint: 'Recorded deed — county recorder\'s office has a copy' },
      { id: 'mortgage', name: 'Mortgage Documents', hint: 'Loan servicer name, account number, payoff amount' },
      { id: 'title', name: 'Vehicle Title(s)', hint: 'One per vehicle — keep in fireproof safe, not in car' },
      { id: 'carins', name: 'Vehicle Registration', hint: 'Keep current copy in glove box' },
    ],
  },
  {
    id: 'medical',
    title: 'Medical Records',
    icon: '🏥',
    why: 'A quick-reference medical summary helps any provider treat you correctly in an emergency.',
    docs: [
      { id: 'medlist', name: 'Current Medication List', hint: 'Drug name, dose, prescribing doctor — update every visit' },
      { id: 'allergies', name: 'Allergy List', hint: 'Medications, foods, materials — include reaction type' },
      { id: 'medhistory', name: 'Major Medical History Summary', hint: 'Past surgeries, hospitalizations, diagnoses' },
      { id: 'primarydoc', name: 'Primary Care Doctor Contact', hint: 'Name, address, phone, fax' },
      { id: 'specialists', name: 'Specialist Contacts', hint: 'Cardiologist, oncologist, etc.' },
      { id: 'vaccinerecord', name: 'Vaccination Records', hint: 'COVID, flu, shingles, tetanus, pneumonia dates' },
    ],
  },
];

const ALL_DOCS = CATEGORIES.flatMap(c => c.docs.map(d => ({ catId: c.id, ...d })));

function makeInitialEntries(): Record<string, DocEntry> {
  const map: Record<string, DocEntry> = {};
  ALL_DOCS.forEach(d => {
    map[d.id] = { id: d.id, name: d.name, location: '', notes: '', found: false };
  });
  return map;
}

export default function ImportantDocumentsOrganizer() {
  const [entries, setEntries] = useState<Record<string, DocEntry>>(makeInitialEntries);
  const [expanded, setExpanded] = useState<string | null>('identity');

  const toggle = (id: string) => setExpanded(prev => (prev === id ? null : id));

  const update = (id: string, field: keyof DocEntry, value: string | boolean) => {
    setEntries(prev => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const totalDocs = ALL_DOCS.length;
  const locatedDocs = Object.values(entries).filter(e => e.location.trim().length > 0).length;
  const foundDocs = Object.values(entries).filter(e => e.found).length;
  const pct = Math.round((locatedDocs / totalDocs) * 100);

  return (
    <>
      <SEOHead
        title="Important Documents Organizer — TekSure"
        description="Track where your vital documents are stored — will, power of attorney, Medicare card, insurance policies, and more. Print a reference sheet for your family."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white print:py-2">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 print:mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100 dark:bg-sky-950/60 mb-4 print:hidden">
              <FileText className="w-8 h-8 text-sky-600 dark:text-sky-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Important Documents Organizer
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 print:hidden">
              Record where each important document is stored so your family can find them when
              they need to. Print when done and keep a copy with a trusted person.
            </p>
            <p className="hidden print:block text-sm text-gray-600 mt-1">
              Prepared on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Privacy notice */}
          <div className="flex gap-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-5 print:hidden">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Private:</strong> Nothing is saved online. All information stays on this page only. Use "Print" to save a copy — do not store account numbers or passwords here.
            </p>
          </div>

          {/* Progress */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 mb-5 shadow-sm print:hidden">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Documents located</span>
              <span className="text-sm font-bold text-sky-600 dark:text-sky-400">{locatedDocs} of {totalDocs} ({pct}%)</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5">
              <div
                className="bg-sky-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
            {pct === 100 && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">
                All documents accounted for — print this page and share with a trusted family member!
              </p>
            )}
          </div>

          {/* Important warning */}
          <div className="flex gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-5 print:hidden">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Quick Tip:</strong> Record only document locations — not passwords, PINs, or full account numbers. Keep this completed sheet in a fireproof safe or with your attorney.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            {CATEGORIES.map(cat => {
              const isOpen = expanded === cat.id;
              const catDocs = cat.docs;
              const catLocated = catDocs.filter(d => entries[d.id]?.location.trim()).length;

              return (
                <div key={cat.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">

                  {/* Print header */}
                  <div className="hidden print:block px-5 pt-4 pb-2 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900">{cat.icon} {cat.title}</h2>
                  </div>

                  {/* Screen toggle */}
                  <button
                    onClick={() => toggle(cat.id)}
                    className="print:hidden w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{cat.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {catLocated} of {catDocs.length} located
                      </p>
                    </div>
                    {catLocated === catDocs.length
                      ? <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      : isOpen
                        ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    }
                  </button>

                  {/* Expanded content */}
                  {(isOpen || true) && (
                    <div className={`${isOpen ? '' : 'print:block hidden'} border-t border-gray-100 dark:border-gray-800`}>
                      <div className="px-5 py-3 print:hidden">
                        <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{cat.why}</span>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-50 dark:divide-gray-800/50">
                        {catDocs.map(doc => {
                          const entry = entries[doc.id];
                          return (
                            <div key={doc.id} className="px-5 py-3">
                              {/* Print row */}
                              <div className="hidden print:block">
                                <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                                <div className="flex gap-6 mt-0.5">
                                  <div className="flex-1">
                                    <span className="text-xs text-gray-500">Location: </span>
                                    <span className="text-sm text-gray-800">{entry.location || '________________________________'}</span>
                                  </div>
                                  {entry.notes && (
                                    <div className="flex-1">
                                      <span className="text-xs text-gray-500">Notes: </span>
                                      <span className="text-sm text-gray-800">{entry.notes}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* Screen row */}
                              <div className={`${isOpen ? 'block' : 'hidden'} print:hidden`}>
                                <div className="flex items-start gap-3">
                                  <input
                                    type="checkbox"
                                    checked={entry.found}
                                    onChange={e => update(doc.id, 'found', e.target.checked)}
                                    className="mt-1 rounded"
                                    title="Mark as confirmed located"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-0.5">{doc.name}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">{doc.hint}</p>
                                    <input
                                      type="text"
                                      placeholder="Where is it stored? (e.g. fireproof safe in bedroom closet)"
                                      value={entry.location}
                                      onChange={e => update(doc.id, 'location', e.target.value)}
                                      className="w-full text-sm rounded-lg px-3 py-1.5 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:border-sky-400 mb-1.5"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Notes (optional)"
                                      value={entry.notes}
                                      onChange={e => update(doc.id, 'notes', e.target.value)}
                                      className="w-full text-sm rounded-lg px-3 py-1.5 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 outline-none focus:border-sky-400"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Print button */}
          <div className="mt-6 flex gap-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400 dark:text-gray-600 print:hidden">
            After printing, store one copy in your fireproof safe and give a second copy to a trusted family member or your attorney.
          </p>
        </div>
      </div>
    </>
  );
}
