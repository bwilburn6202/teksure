import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Siren, Printer, RotateCcw } from "lucide-react";

interface Contact {
  name: string;
  relation: string;
  phone: string;
}

interface CardData {
  fullName: string;
  dob: string;
  bloodType: string;
  conditions: string;
  allergies: string;
  medications: string;
  doctorName: string;
  doctorPhone: string;
  insurance: string;
  policy: string;
  contact1: Contact;
  contact2: Contact;
  notes: string;
}

const EMPTY: CardData = {
  fullName: "",
  dob: "",
  bloodType: "",
  conditions: "",
  allergies: "",
  medications: "",
  doctorName: "",
  doctorPhone: "",
  insurance: "",
  policy: "",
  contact1: { name: "", relation: "", phone: "" },
  contact2: { name: "", relation: "", phone: "" },
  notes: "",
};

export default function WalletMedicalCard() {
  const [data, setData] = useState<CardData>(EMPTY);

  function update<K extends keyof CardData>(key: K, value: CardData[K]) {
    setData(prev => ({ ...prev, [key]: value }));
  }

  function updateContact(which: "contact1" | "contact2", field: keyof Contact, value: string) {
    setData(prev => ({ ...prev, [which]: { ...prev[which], [field]: value } }));
  }

  function reset() { setData(EMPTY); }

  const filled = (
    !!data.fullName.trim() ||
    !!data.dob ||
    !!data.bloodType.trim() ||
    !!data.conditions.trim() ||
    !!data.allergies.trim() ||
    !!data.medications.trim() ||
    !!data.contact1.name.trim()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Wallet Medical Card | TekSure"
        description="Build a printable wallet-sized medical ID card with emergency contacts, allergies, medications, and doctor info. Print, fold, carry."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-0 print:max-w-full">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Siren className="h-7 w-7 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Wallet Medical Card</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Fill in your details, then print and tuck the card in your wallet. First responders will be glad you did.
          </p>
        </div>

        {/* Form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl">Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="fullName" className="text-base font-medium">Full Name</Label>
                <Input id="fullName" placeholder="Mary Sue Johnson" value={data.fullName} onChange={e => update("fullName", e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="dob" className="text-base font-medium">Date of Birth</Label>
                <Input id="dob" type="date" value={data.dob} onChange={e => update("dob", e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="blood" className="text-base font-medium">Blood Type (optional)</Label>
                <Input id="blood" placeholder="O+" value={data.bloodType} onChange={e => update("bloodType", e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="insurance" className="text-base font-medium">Insurance / Plan</Label>
                <Input id="insurance" placeholder="Medicare / Aetna" value={data.insurance} onChange={e => update("insurance", e.target.value)} className="mt-1 text-base" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="policy" className="text-base font-medium">Policy / Member Number</Label>
                <Input id="policy" placeholder="123-45-6789-A" value={data.policy} onChange={e => update("policy", e.target.value)} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="conditions" className="text-base font-medium">Medical Conditions</Label>
              <Input id="conditions" placeholder="Diabetes, high blood pressure, etc." value={data.conditions} onChange={e => update("conditions", e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="allergies" className="text-base font-medium">Allergies (medications, food, etc.)</Label>
              <Input id="allergies" placeholder="Penicillin, peanuts, shellfish..." value={data.allergies} onChange={e => update("allergies", e.target.value)} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="meds" className="text-base font-medium">Current Medications</Label>
              <Input id="meds" placeholder="Lisinopril 10mg, Metformin 500mg, baby aspirin..." value={data.medications} onChange={e => update("medications", e.target.value)} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="docName" className="text-base font-medium">Primary Doctor</Label>
                <Input id="docName" placeholder="Dr. Patel" value={data.doctorName} onChange={e => update("doctorName", e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="docPhone" className="text-base font-medium">Doctor's Phone</Label>
                <Input id="docPhone" type="tel" placeholder="555-555-1234" value={data.doctorPhone} onChange={e => update("doctorPhone", e.target.value)} className="mt-1 text-base" />
              </div>
            </div>
            <div className="border-t pt-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">Emergency Contact 1</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Input placeholder="Name" value={data.contact1.name} onChange={e => updateContact("contact1", "name", e.target.value)} className="text-base" />
                <Input placeholder="Relation (son, daughter, etc.)" value={data.contact1.relation} onChange={e => updateContact("contact1", "relation", e.target.value)} className="text-base" />
                <Input type="tel" placeholder="Phone" value={data.contact1.phone} onChange={e => updateContact("contact1", "phone", e.target.value)} className="text-base" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Emergency Contact 2</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Input placeholder="Name" value={data.contact2.name} onChange={e => updateContact("contact2", "name", e.target.value)} className="text-base" />
                <Input placeholder="Relation" value={data.contact2.relation} onChange={e => updateContact("contact2", "relation", e.target.value)} className="text-base" />
                <Input type="tel" placeholder="Phone" value={data.contact2.phone} onChange={e => updateContact("contact2", "phone", e.target.value)} className="text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="notes" className="text-base font-medium">Other Notes</Label>
              <Input id="notes" placeholder="Pacemaker, hearing aid, anything else important" value={data.notes} onChange={e => update("notes", e.target.value)} className="mt-1 text-base" />
            </div>
          </CardContent>
        </Card>

        {/* Card preview */}
        {filled && (
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-600 mb-2 print:hidden">Preview (this is what will print):</p>
            <div className="border-2 border-red-500 rounded-lg overflow-hidden bg-white print:border-2 print:rounded-none" style={{ width: "100%", maxWidth: "640px" }}>
              <div className="bg-red-600 text-white px-3 py-2 flex items-center gap-2">
                <Siren className="h-5 w-5" />
                <span className="font-bold text-lg tracking-wide">EMERGENCY MEDICAL INFO</span>
              </div>
              <div className="p-3 text-sm space-y-2">
                {data.fullName && (
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span><span className="font-semibold">Name:</span> {data.fullName}</span>
                    {data.dob && <span><span className="font-semibold">DOB:</span> {data.dob}</span>}
                    {data.bloodType && <span><span className="font-semibold">Blood:</span> {data.bloodType}</span>}
                  </div>
                )}
                {(data.conditions || data.allergies) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {data.conditions && <div><span className="font-semibold text-red-700">Conditions: </span>{data.conditions}</div>}
                    {data.allergies && <div><span className="font-semibold text-red-700">Allergies: </span>{data.allergies}</div>}
                  </div>
                )}
                {data.medications && (
                  <div><span className="font-semibold">Meds: </span>{data.medications}</div>
                )}
                {(data.doctorName || data.insurance) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {data.doctorName && (
                      <div><span className="font-semibold">Doctor: </span>{data.doctorName} {data.doctorPhone && `(${data.doctorPhone})`}</div>
                    )}
                    {data.insurance && (
                      <div><span className="font-semibold">Insurance: </span>{data.insurance} {data.policy && `(${data.policy})`}</div>
                    )}
                  </div>
                )}
                {(data.contact1.name || data.contact2.name) && (
                  <div className="border-t pt-1 mt-1">
                    <p className="font-semibold text-red-700">In Emergency, Contact:</p>
                    {data.contact1.name && (
                      <div>{data.contact1.name}{data.contact1.relation && ` (${data.contact1.relation})`} — {data.contact1.phone}</div>
                    )}
                    {data.contact2.name && (
                      <div>{data.contact2.name}{data.contact2.relation && ` (${data.contact2.relation})`} — {data.contact2.phone}</div>
                    )}
                  </div>
                )}
                {data.notes && (
                  <div className="border-t pt-1 mt-1 text-xs italic">{data.notes}</div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} disabled={!filled} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Card
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Clear All
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Tip: </span>
              After printing, fold the card in half and place it in your wallet behind your ID. Tell a family member you carry it so they can mention it if you cannot.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
