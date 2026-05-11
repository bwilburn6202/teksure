import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Siren, Printer } from "lucide-react";

const NATIONAL = [
  { label: "Emergency", number: "911", note: "Police, fire, ambulance" },
  { label: "Suicide & Crisis Lifeline", number: "988", note: "24/7 free, confidential" },
  { label: "Poison Control", number: "1-800-222-1222", note: "24/7 free" },
  { label: "SAMHSA Mental Health", number: "1-800-662-4357", note: "Substance use, mental health" },
  { label: "Eldercare Locator", number: "1-800-677-1116", note: "Aging services in your area" },
  { label: "Adult Protective Services", number: "Call local PD non-emergency", note: "Suspected elder abuse" },
  { label: "Medicare", number: "1-800-MEDICARE (633-4227)", note: "" },
  { label: "Social Security", number: "1-800-772-1213", note: "" },
  { label: "AARP Fraud Watch", number: "1-877-908-3360", note: "Report scams" },
];

export default function EmergencyContactQuickDial() {
  const [personal, setPersonal] = useState({ doctor: "", doctorPhone: "", pharm: "", pharmPhone: "", emergencyContact: "", emergencyContactPhone: "", neighbor: "", neighborPhone: "" });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Emergency Quick Dial Card | TekSure" description="Print a fridge card with national emergency numbers plus your doctor, pharmacy, neighbor, and emergency contact." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:mb-2">
          <div className="flex items-center gap-2 mb-1">
            <Siren className="h-7 w-7 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Emergency Quick Dial Card</h1>
          </div>
          <p className="text-gray-600 text-lg print:hidden">Fill in your personal contacts, then print and tape it to the fridge or near your phone.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2"><CardTitle className="text-lg">Your Personal Contacts</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Doctor name" value={personal.doctor} onChange={e => setPersonal({ ...personal, doctor: e.target.value })} />
              <Input placeholder="Doctor phone" value={personal.doctorPhone} onChange={e => setPersonal({ ...personal, doctorPhone: e.target.value })} />
              <Input placeholder="Pharmacy name" value={personal.pharm} onChange={e => setPersonal({ ...personal, pharm: e.target.value })} />
              <Input placeholder="Pharmacy phone" value={personal.pharmPhone} onChange={e => setPersonal({ ...personal, pharmPhone: e.target.value })} />
              <Input placeholder="Emergency contact name" value={personal.emergencyContact} onChange={e => setPersonal({ ...personal, emergencyContact: e.target.value })} />
              <Input placeholder="Emergency contact phone" value={personal.emergencyContactPhone} onChange={e => setPersonal({ ...personal, emergencyContactPhone: e.target.value })} />
              <Input placeholder="Neighbor name" value={personal.neighbor} onChange={e => setPersonal({ ...personal, neighbor: e.target.value })} />
              <Input placeholder="Neighbor phone" value={personal.neighborPhone} onChange={e => setPersonal({ ...personal, neighborPhone: e.target.value })} />
            </div>
            <Button onClick={() => window.print()} variant="outline" className="gap-2 mt-3">
              <Printer className="h-4 w-4" />
              Print Card
            </Button>
          </CardContent>
        </Card>

        <div className="border-2 border-red-500 rounded-lg bg-white p-4 print:border-2 print:rounded-none">
          <div className="bg-red-600 text-white -mx-4 -mt-4 px-4 py-2 mb-3 flex items-center gap-2">
            <Siren className="h-5 w-5" />
            <span className="font-bold text-lg tracking-wide">EMERGENCY NUMBERS</span>
          </div>
          {(personal.doctor || personal.pharm || personal.emergencyContact || personal.neighbor) && (
            <div className="mb-3 pb-3 border-b border-dashed border-gray-300">
              <p className="text-xs font-semibold text-red-700 mb-1">MY PEOPLE:</p>
              {personal.doctor && <p className="text-sm"><span className="font-semibold">Doctor:</span> {personal.doctor} — {personal.doctorPhone}</p>}
              {personal.pharm && <p className="text-sm"><span className="font-semibold">Pharmacy:</span> {personal.pharm} — {personal.pharmPhone}</p>}
              {personal.emergencyContact && <p className="text-sm"><span className="font-semibold">Emergency:</span> {personal.emergencyContact} — {personal.emergencyContactPhone}</p>}
              {personal.neighbor && <p className="text-sm"><span className="font-semibold">Neighbor:</span> {personal.neighbor} — {personal.neighborPhone}</p>}
            </div>
          )}
          <p className="text-xs font-semibold text-red-700 mb-1">NATIONAL:</p>
          <div className="space-y-0.5">
            {NATIONAL.map(n => (
              <div key={n.label} className="flex justify-between items-baseline text-sm">
                <span className="font-medium">{n.label}</span>
                <span className="font-mono font-bold">{n.number}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3 italic">Tape near your phone or on the fridge. Update once a year.</p>
        </div>
      </div>
    </div>
  );
}
