import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Printer, Trash2 } from "lucide-react";

interface Addr {
  id: string;
  name: string;
  line1: string;
  line2: string;
  cityStateZip: string;
}

export default function MailAddressLabelMaker() {
  const [addrs, setAddrs] = useState<Addr[]>([]);
  const [form, setForm] = useState({ name: "", line1: "", line2: "", cityStateZip: "" });

  function add() {
    if (!form.name.trim() || !form.line1.trim()) return;
    setAddrs(prev => [...prev, { id: Date.now().toString() + Math.random(), ...form }]);
    setForm({ name: "", line1: "", line2: "", cityStateZip: "" });
  }

  function remove(id: string) {
    setAddrs(prev => prev.filter(a => a.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Mail Address Label Maker | TekSure" description="Type addresses and print clean mailing labels. 10 per page on standard 8.5×11 paper." />
      <div className="max-w-3xl mx-auto px-4 py-8 print:p-0 print:max-w-full">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Mail className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Mail Label Maker</h1>
          </div>
          <p className="text-gray-600 text-lg">Type each address. When you have your set, click Print — addresses lay out in a clean grid on letter-size paper.</p>
        </div>

        <Card className="mb-6 print:hidden">
          <CardContent className="py-4 px-4 space-y-3">
            <Input placeholder="Recipient name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="text-base" />
            <Input placeholder="Street address" value={form.line1} onChange={e => setForm({ ...form, line1: e.target.value })} className="text-base" />
            <Input placeholder="Apt / Suite (optional)" value={form.line2} onChange={e => setForm({ ...form, line2: e.target.value })} className="text-base" />
            <Input placeholder="City, State ZIP" value={form.cityStateZip} onChange={e => setForm({ ...form, cityStateZip: e.target.value })} className="text-base" />
            <Button onClick={add} disabled={!form.name.trim() || !form.line1.trim()} className="w-full sm:w-auto">Add Label</Button>
          </CardContent>
        </Card>

        {addrs.length > 0 && (
          <div className="mb-3 flex items-center justify-between print:hidden">
            <p className="text-sm text-gray-500">{addrs.length} label{addrs.length !== 1 ? "s" : ""}</p>
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Labels
            </Button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 print:gap-0">
          {addrs.map(a => (
            <div key={a.id} className="border border-gray-300 rounded p-3 bg-white text-sm relative print:border-black print:rounded-none print:break-inside-avoid">
              <p className="font-semibold">{a.name}</p>
              <p>{a.line1}</p>
              {a.line2 && <p>{a.line2}</p>}
              <p>{a.cityStateZip}</p>
              <Button variant="ghost" size="icon" onClick={() => remove(a.id)} className="absolute top-1 right-1 h-6 w-6 text-red-400 hover:text-red-600 print:hidden">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>

        {addrs.length === 0 && (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Mail className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No labels yet.</p>
              <p className="text-sm mt-1">Add an address above to get started.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
