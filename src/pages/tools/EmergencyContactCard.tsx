import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Printer, RotateCcw, Phone, User, Stethoscope, Shield } from 'lucide-react';

interface Field {
  id: string;
  label: string;
  placeholder: string;
  section: string;
}

const FIELDS: Field[] = [
  // Personal
  { id: 'name', label: 'Full Name', placeholder: 'Jane Smith', section: 'personal' },
  { id: 'dob', label: 'Date of Birth', placeholder: 'March 15, 1950', section: 'personal' },
  { id: 'address', label: 'Home Address', placeholder: '123 Main St, Springfield, IL 62701', section: 'personal' },
  { id: 'phone', label: 'My Cell Phone', placeholder: '(555) 123-4567', section: 'personal' },

  // Emergency contacts
  { id: 'ec1_name', label: 'Emergency Contact 1 — Name', placeholder: 'Susan Smith (daughter)', section: 'contacts' },
  { id: 'ec1_phone', label: 'Emergency Contact 1 — Phone', placeholder: '(555) 987-6543', section: 'contacts' },
  { id: 'ec2_name', label: 'Emergency Contact 2 — Name', placeholder: 'Robert Johnson (neighbor)', section: 'contacts' },
  { id: 'ec2_phone', label: 'Emergency Contact 2 — Phone', placeholder: '(555) 456-7890', section: 'contacts' },

  // Medical
  { id: 'blood_type', label: 'Blood Type', placeholder: 'O positive', section: 'medical' },
  { id: 'allergies', label: 'Allergies', placeholder: 'Penicillin, shellfish', section: 'medical' },
  { id: 'medications', label: 'Current Medications', placeholder: 'Lisinopril 10mg, Metformin 500mg', section: 'medical' },
  { id: 'conditions', label: 'Medical Conditions', placeholder: 'Type 2 diabetes, hypertension', section: 'medical' },
  { id: 'doctor_name', label: 'Primary Doctor', placeholder: 'Dr. Maria Garcia', section: 'medical' },
  { id: 'doctor_phone', label: 'Doctor\'s Phone', placeholder: '(555) 234-5678', section: 'medical' },

  // Insurance
  { id: 'insurance_name', label: 'Health Insurance', placeholder: 'Medicare + AARP Supplement Plan F', section: 'insurance' },
  { id: 'medicare_number', label: 'Medicare Number', placeholder: '1EG4-TE5-MK72', section: 'insurance' },
  { id: 'insurance_phone', label: 'Insurance Phone', placeholder: '1-800-633-4227 (Medicare)', section: 'insurance' },
];

const SECTIONS = [
  { id: 'personal', title: 'Personal Information', icon: User, color: 'text-blue-500' },
  { id: 'contacts', title: 'Emergency Contacts', icon: Phone, color: 'text-red-500' },
  { id: 'medical', title: 'Medical Information', icon: Stethoscope, color: 'text-green-500' },
  { id: 'insurance', title: 'Insurance & Medicare', icon: Shield, color: 'text-purple-500' },
];

export default function EmergencyContactCard() {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(FIELDS.map((f) => [f.id, ''])),
  );
  const [showCard, setShowCard] = useState(false);

  const set = (id: string, val: string) => {
    setValues((prev) => ({ ...prev, [id]: val }));
    setShowCard(false);
  };

  const filledCount = Object.values(values).filter((v) => v.trim()).length;

  const handleReset = () => {
    setValues(Object.fromEntries(FIELDS.map((f) => [f.id, ''])));
    setShowCard(false);
  };

  const fieldsBySection = (sectionId: string) =>
    FIELDS.filter((f) => f.section === sectionId);

  return (
    <>
      <SEOHead
        title="Emergency Contact Card | TekSure"
        description="Create a printable emergency contact card with your medical info, contacts, and insurance details. Nothing is saved or sent anywhere."
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
        <div className="max-w-2xl mx-auto px-4 pt-6">
          <PageBreadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'Emergency Contact Card' },
            ]}
          />

          <div className="text-center mb-8 mt-4 print:hidden">
            <div className="text-5xl mb-3">🆘</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Emergency Contact Card
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Fill in your information below, then print a wallet card or full sheet for first responders and family.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Nothing is sent anywhere — all information stays on your device.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4 mb-6 print:hidden">
            {SECTIONS.map(({ id, title, icon: Icon, color }) => (
              <Card key={id}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={18} className={color} />
                    <h2 className="font-bold text-gray-900 dark:text-white">{title}</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {fieldsBySection(id).map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {field.label}
                        </label>
                        <Input
                          id={field.id}
                          value={values[field.id]}
                          onChange={(e) => set(field.id, e.target.value)}
                          placeholder={field.placeholder}
                          className="text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filledCount >= 4 && !showCard && (
            <div className="flex gap-3 mb-6 print:hidden">
              <Button
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setShowCard(true)}
              >
                <Heart size={16} className="mr-2" />
                Preview My Card
              </Button>
              <Button variant="outline" onClick={handleReset} aria-label="Start over">
                <RotateCcw size={15} />
              </Button>
            </div>
          )}

          {/* Preview / Printable Card */}
          {showCard && (
            <div className="space-y-4">
              <div className="print:hidden flex gap-3 mb-2">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.print()}
                >
                  <Printer size={16} className="mr-2" />
                  Print This Card
                </Button>
                <Button variant="outline" onClick={() => setShowCard(false)}>
                  ← Edit
                </Button>
              </div>

              {/* Full sheet card — shows on screen and prints */}
              <Card className="border-2 border-red-200 dark:border-red-800 print:border-2 print:border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-100 dark:border-red-900">
                    <Heart size={20} className="text-red-500" />
                    <h2 className="text-xl font-bold text-red-700 dark:text-red-400">
                      Emergency Information — {values['name'] || 'Unknown'}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal */}
                    <section>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5 text-sm uppercase tracking-wide">
                        <User size={14} className="text-blue-500" /> Personal
                      </h3>
                      <dl className="space-y-1 text-sm">
                        {fieldsBySection('personal').filter(f => values[f.id]).map(f => (
                          <div key={f.id} className="flex gap-2">
                            <dt className="text-gray-500 dark:text-gray-400 shrink-0 min-w-[80px]">{f.label}:</dt>
                            <dd className="text-gray-900 dark:text-white font-medium">{values[f.id]}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>

                    {/* Emergency Contacts */}
                    <section>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5 text-sm uppercase tracking-wide">
                        <Phone size={14} className="text-red-500" /> Emergency Contacts
                      </h3>
                      <dl className="space-y-1 text-sm">
                        {values['ec1_name'] && (
                          <div>
                            <dd className="text-gray-900 dark:text-white font-medium">{values['ec1_name']}</dd>
                            {values['ec1_phone'] && (
                              <dd className="text-blue-600 dark:text-blue-400">{values['ec1_phone']}</dd>
                            )}
                          </div>
                        )}
                        {values['ec2_name'] && (
                          <div className="mt-2">
                            <dd className="text-gray-900 dark:text-white font-medium">{values['ec2_name']}</dd>
                            {values['ec2_phone'] && (
                              <dd className="text-blue-600 dark:text-blue-400">{values['ec2_phone']}</dd>
                            )}
                          </div>
                        )}
                      </dl>
                    </section>

                    {/* Medical */}
                    <section>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5 text-sm uppercase tracking-wide">
                        <Stethoscope size={14} className="text-green-500" /> Medical
                      </h3>
                      <dl className="space-y-1 text-sm">
                        {fieldsBySection('medical').filter(f => values[f.id]).map(f => (
                          <div key={f.id} className="flex gap-2">
                            <dt className="text-gray-500 dark:text-gray-400 shrink-0 min-w-[80px]">{f.label.replace("Primary ", "").replace("Doctor's ", "Dr. ")}:</dt>
                            <dd className="text-gray-900 dark:text-white font-medium">{values[f.id]}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>

                    {/* Insurance */}
                    <section>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5 text-sm uppercase tracking-wide">
                        <Shield size={14} className="text-purple-500" /> Insurance
                      </h3>
                      <dl className="space-y-1 text-sm">
                        {fieldsBySection('insurance').filter(f => values[f.id]).map(f => (
                          <div key={f.id} className="flex gap-2">
                            <dt className="text-gray-500 dark:text-gray-400 shrink-0 min-w-[80px]">{f.label}:</dt>
                            <dd className="text-gray-900 dark:text-white font-medium">{values[f.id]}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                    Printed from TekSure.com — Emergency Contact Card tool. Keep a copy in your wallet, on your refrigerator, and share with family.
                  </div>
                </CardContent>
              </Card>

              <div className="print:hidden bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-200 space-y-1">
                <p className="font-semibold">Suggested places to keep printed copies:</p>
                <ul className="list-disc list-inside space-y-0.5 ml-1">
                  <li>Your wallet or purse</li>
                  <li>On the refrigerator (first responders always check there)</li>
                  <li>In the glove compartment of your car</li>
                  <li>With a trusted neighbor or family member</li>
                </ul>
              </div>
            </div>
          )}

          {filledCount < 4 && (
            <div className="text-center text-gray-400 dark:text-gray-600 py-6 print:hidden">
              <Heart size={36} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">Fill in at least 4 fields above to preview your card.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
