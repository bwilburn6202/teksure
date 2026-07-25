import { useState } from 'react';
import { Pill, Plus, Trash2, Printer, User, Phone } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

interface Medication {
  id: string;
  name: string;
  dose: string;
  frequency: string;
  doctor: string;
  reason: string;
}

interface Allergy {
  id: string;
  substance: string;
  reaction: string;
}

function uid() { return Math.random().toString(36).slice(2); }
function newMed(): Medication { return { id: uid(), name: '', dose: '', frequency: '', doctor: '', reason: '' }; }
function newAllergy(): Allergy { return { id: uid(), substance: '', reaction: '' }; }

const FREQ_OPTIONS = [
  'Once daily', 'Twice daily', 'Three times daily', 'Four times daily',
  'Every morning', 'Every evening', 'At bedtime',
  'Every other day', 'Weekly', 'As needed', 'With meals',
];

export default function MedicationListBuilder() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [pharmacy, setPharmacy] = useState('');
  const [pharmacyPhone, setPharmacyPhone] = useState('');
  const [primaryDoctor, setPrimaryDoctor] = useState('');
  const [primaryDoctorPhone, setPrimaryDoctorPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [meds, setMeds] = useState<Medication[]>([newMed()]);
  const [allergies, setAllergies] = useState<Allergy[]>([newAllergy()]);
  const [conditions, setConditions] = useState('');

  const updateMed = (id: string, f: keyof Medication, v: string) =>
    setMeds(prev => prev.map(m => m.id === id ? { ...m, [f]: v } : m));
  const removeMed = (id: string) => setMeds(prev => prev.filter(m => m.id !== id));

  const updateAllergy = (id: string, f: keyof Allergy, v: string) =>
    setAllergies(prev => prev.map(a => a.id === id ? { ...a, [f]: v } : a));
  const removeAllergy = (id: string) => setAllergies(prev => prev.filter(a => a.id !== id));

  const filledMeds = meds.filter(m => m.name.trim());
  const filledAllergies = allergies.filter(a => a.substance.trim());

  const inputClass = 'w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 print:border-gray-400 print:bg-white print:text-black';
  const labelClass = 'block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 print:text-gray-600';

  return (
    <>
      <SEOHead
        title="Medication List Builder — TekSure"
        description="Create a printable medication list and wallet card with your drugs, doses, allergies, and emergency contacts — ready to hand to any doctor or emergency responder."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white print:py-2 print:px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6 print:hidden">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-950/60 mb-4">
              <Pill className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Medication List Builder</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build a complete medication list to share with doctors, carry in your wallet, and hand to emergency responders.
            </p>
          </div>

          {/* Print header */}
          <div className="hidden print:block mb-4 border-b-2 border-gray-800 pb-3">
            <h1 className="text-2xl font-bold text-black">Medication List</h1>
            <p className="text-sm text-gray-600">Printed {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Personal info */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 mb-4 print:border-gray-300 print:shadow-none print:rounded-none print:p-0 print:mb-3">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-3 flex items-center gap-2">
              <User className="w-5 h-5 text-teal-500 print:hidden" /> Patient Information
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className={labelClass}>Full name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Date of birth</label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Blood type (optional)</label>
                <select value={bloodType} onChange={e => setBloodType(e.target.value)} className={inputClass}>
                  <option value="">Unknown</option>
                  {['A+','A−','B+','B−','AB+','AB−','O+','O−'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Your phone number</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 555-1234" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Primary doctor</label>
                <input type="text" value={primaryDoctor} onChange={e => setPrimaryDoctor(e.target.value)} placeholder="Dr. Smith" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Doctor's phone</label>
                <input type="tel" value={primaryDoctorPhone} onChange={e => setPrimaryDoctorPhone(e.target.value)} placeholder="(555) 555-1234" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Pharmacy</label>
                <input type="text" value={pharmacy} onChange={e => setPharmacy(e.target.value)} placeholder="CVS, Walgreens, etc." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Pharmacy phone</label>
                <input type="tel" value={pharmacyPhone} onChange={e => setPharmacyPhone(e.target.value)} placeholder="(555) 555-1234" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Emergency contact */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 mb-4 print:border-gray-300 print:shadow-none print:rounded-none print:p-0 print:mb-3">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-500 print:hidden" /> Emergency Contact
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Contact name</label>
                <input type="text" value={emergencyName} onChange={e => setEmergencyName(e.target.value)} placeholder="Jane Smith (daughter)" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Contact phone</label>
                <input type="tel" value={emergencyPhone} onChange={e => setEmergencyPhone(e.target.value)} placeholder="(555) 555-1234" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Medical conditions */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 mb-4 print:border-gray-300 print:shadow-none print:rounded-none print:p-0 print:mb-3">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-3">Medical Conditions</p>
            <textarea
              value={conditions}
              onChange={e => setConditions(e.target.value)}
              placeholder="e.g. Type 2 diabetes, high blood pressure, atrial fibrillation, COPD..."
              rows={2}
              className={inputClass + ' resize-none'}
            />
          </div>

          {/* Allergies */}
          <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-800 shadow-sm p-5 mb-4 print:border-red-400 print:shadow-none print:rounded-none print:p-0 print:mb-3">
            <p className="font-bold text-red-800 dark:text-red-200 text-lg mb-3">⚠️ Allergies</p>
            <div className="space-y-2">
              {allergies.map((a, idx) => (
                <div key={a.id} className="flex gap-2 items-start">
                  <span className="text-xs font-bold text-gray-400 w-5 text-center mt-2.5">{idx + 1}</span>
                  <input
                    type="text"
                    value={a.substance}
                    onChange={e => updateAllergy(a.id, 'substance', e.target.value)}
                    placeholder="Substance (e.g. Penicillin, Sulfa, Aspirin, Shellfish)"
                    className={inputClass + ' flex-1'}
                  />
                  <input
                    type="text"
                    value={a.reaction}
                    onChange={e => updateAllergy(a.id, 'reaction', e.target.value)}
                    placeholder="Reaction (e.g. hives, anaphylaxis)"
                    className={inputClass + ' flex-1'}
                  />
                  <button onClick={() => removeAllergy(a.id)} className="text-gray-400 hover:text-red-500 p-2 flex-shrink-0 print:hidden mt-0.5">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setAllergies(prev => [...prev, newAllergy()])}
              className="mt-3 flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:underline print:hidden"
            >
              <Plus className="w-4 h-4" /> Add allergy
            </button>
            {filledAllergies.length === 0 && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-2 print:hidden">No known drug allergies — add any if they apply.</p>
            )}
          </div>

          {/* Medications */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 mb-4 print:border-gray-300 print:shadow-none print:rounded-none print:p-0 print:mb-3">
            <p className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-3">
              Medications ({filledMeds.length})
            </p>
            <div className="space-y-4">
              {meds.map((med, idx) => (
                <div key={med.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-3 print:border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400">Medication {idx + 1}</span>
                    <button onClick={() => removeMed(med.id)} className="text-gray-400 hover:text-red-500 p-1 print:hidden">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2">
                      <label className={labelClass}>Medication name</label>
                      <input
                        type="text"
                        value={med.name}
                        onChange={e => updateMed(med.id, 'name', e.target.value)}
                        placeholder="e.g. Metformin, Lisinopril, Atorvastatin"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Dose</label>
                      <input
                        type="text"
                        value={med.dose}
                        onChange={e => updateMed(med.id, 'dose', e.target.value)}
                        placeholder="e.g. 500 mg, 10 mg"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>How often</label>
                      <select
                        value={med.frequency}
                        onChange={e => updateMed(med.id, 'frequency', e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select...</option>
                        {FREQ_OPTIONS.map(f => <option key={f} value={f}>{f}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Prescribing doctor</label>
                      <input
                        type="text"
                        value={med.doctor}
                        onChange={e => updateMed(med.id, 'doctor', e.target.value)}
                        placeholder="Dr. name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Reason (optional)</label>
                      <input
                        type="text"
                        value={med.reason}
                        onChange={e => updateMed(med.id, 'reason', e.target.value)}
                        placeholder="e.g. blood pressure, diabetes"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setMeds(prev => [...prev, newMed()])}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/20 transition-colors text-sm font-medium print:hidden"
            >
              <Plus className="w-4 h-4" /> Add medication
            </button>
          </div>

          {/* Print button */}
          <button
            onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors print:hidden"
          >
            <Printer className="w-5 h-5" />
            Print Medication List
          </button>

          <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 print:hidden">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">How to use this list</p>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
              <li>Print it and fold it to wallet size — keep one copy in your wallet and one on your fridge.</li>
              <li>Bring a copy to every doctor visit and any hospital stay.</li>
              <li>Give a copy to your emergency contact.</li>
              <li>Update it whenever a medication changes.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
