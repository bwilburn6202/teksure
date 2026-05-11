import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Printer } from "lucide-react";

interface Contact {
  role: string;
  name: string;
  phone: string;
  note: string;
}

const DEFAULT_CONTACTS: Contact[] = [
  { role: "Primary healthcare proxy", name: "", phone: "", note: "Decides for you when you cannot" },
  { role: "Backup healthcare proxy", name: "", phone: "", note: "If primary is unreachable" },
  { role: "Daily check-in person", name: "", phone: "", note: "Calls or texts every day" },
  { role: "Weekly check-in person", name: "", phone: "", note: "Stops by once a week" },
  { role: "Emergency neighbor", name: "", phone: "", note: "Has your house key" },
  { role: "Doctor (primary care)", name: "", phone: "", note: "" },
  { role: "Pharmacist (preferred)", name: "", phone: "", note: "" },
  { role: "Lawyer (estate / will)", name: "", phone: "", note: "" },
  { role: "Financial advisor / banker", name: "", phone: "", note: "" },
  { role: "Geriatric care manager", name: "", phone: "", note: "If hired" },
  { role: "Pastor / chaplain / spiritual contact", name: "", phone: "", note: "" },
  { role: "Pet caretaker (if anything happens to you)", name: "", phone: "", note: "" },
];

export default function SoloAgerPlan() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [keyLocation, setKeyLocation] = useState("");
  const [contacts, setContacts] = useState<Contact[]>(DEFAULT_CONTACTS);
  const [docNotes, setDocNotes] = useState("");
  const [wishes, setWishes] = useState("");

  function updateContact(i: number, field: keyof Contact, value: string) {
    setContacts(prev => prev.map((c, idx) => idx === i ? { ...c, [field]: value } : c));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Solo Ager Plan Worksheet | TekSure" description="A planning worksheet for aging without close family. Map your healthcare proxy, daily check-in person, key contacts, and what happens if anything goes wrong." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-7 w-7 text-indigo-700" />
            <h1 className="text-3xl font-bold text-gray-900">Solo Ager Plan</h1>
          </div>
          <p className="text-gray-600 text-lg">For older adults aging without a spouse, children, or close family. Build your chosen support circle one row at a time.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="py-4 px-4 space-y-3">
            <div>
              <label className="text-base font-medium">Your full name</label>
              <Input value={name} onChange={e => setName(e.target.value)} placeholder="Mary Smith" className="mt-1" />
            </div>
            <div>
              <label className="text-base font-medium">Your home address</label>
              <Input value={address} onChange={e => setAddress(e.target.value)} placeholder="123 Main St, Springfield" className="mt-1" />
            </div>
            <div>
              <label className="text-base font-medium">Where your spare house key is kept</label>
              <Input value={keyLocation} onChange={e => setKeyLocation(e.target.value)} placeholder="With Jane next door, in lockbox by back door, etc." className="mt-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your support circle</h2>
            <div className="space-y-3">
              {contacts.map((c, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white">
                  <p className="text-sm font-semibold text-gray-700">{c.role}</p>
                  {c.note && <p className="text-xs text-gray-500 italic">{c.note}</p>}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Input value={c.name} onChange={e => updateContact(i, "name", e.target.value)} placeholder="Name" />
                    <Input value={c.phone} onChange={e => updateContact(i, "phone", e.target.value)} placeholder="Phone" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <label className="text-base font-medium">Where your important documents are kept</label>
            <p className="text-xs text-gray-500">Will, advance directive, financial POA, deed, insurance policies, passport, etc.</p>
            <textarea value={docNotes} onChange={e => setDocNotes(e.target.value)} rows={3} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" placeholder="In the green file box on the top shelf of the bedroom closet. Spare set with attorney Jane Doe." />
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="py-4 px-4">
            <label className="text-base font-medium">Personal wishes and instructions</label>
            <p className="text-xs text-gray-500">Funeral preferences, who gets what, pets, favorite music, anything that matters to you.</p>
            <textarea value={wishes} onChange={e => setWishes(e.target.value)} rows={4} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white" />
          </CardContent>
        </Card>

        <Card className="mb-4 bg-indigo-50 border-indigo-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-indigo-900"><span className="font-semibold">Where to keep this plan:</span> Print three copies. Keep one in your home file. Give one to your primary healthcare proxy. Give one to your attorney or geriatric care manager. Update once a year.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
