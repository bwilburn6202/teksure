import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Trash2, Printer, PlusCircle } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  notes: string;
}

const EMPTY: Omit<Contact, "id"> = { name: "", address: "", city: "", state: "", zip: "", phone: "", email: "", notes: "" };

export default function PrintableAddressBook() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");

  function addContact() {
    if (!form.name.trim()) { setError("Please enter a name."); return; }
    setError("");
    setContacts(prev => [...prev, { ...form, id: Date.now().toString() + Math.random(), name: form.name.trim() }]);
    setForm(EMPTY);
  }

  function removeContact(id: string) {
    setContacts(prev => prev.filter(c => c.id !== id));
  }

  function lastName(c: Contact): string {
    const parts = c.name.trim().split(/\s+/);
    return parts.length > 1 ? parts[parts.length - 1] : c.name;
  }

  // Group by first letter of last name
  const sorted = [...contacts].sort((a, b) => lastName(a).localeCompare(lastName(b)));
  const grouped = sorted.reduce<Record<string, Contact[]>>((acc, c) => {
    const letter = (lastName(c)[0] || "?").toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(c);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Printable Address Book | TekSure"
        description="Build a tidy printable address book sorted by last name. Includes name, address, phone, email, and notes for each contact."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6 print:mb-3">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="h-7 w-7 text-rose-600" />
            <h1 className="text-3xl font-bold text-gray-900">Printable Address Book</h1>
          </div>
          <p className="text-gray-600 text-lg print:hidden">
            Add the people in your life. Print a tidy book sorted by last name to keep by the phone.
          </p>
        </div>

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-rose-600" />
              Add a Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
              <Input id="name" placeholder="Jane Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2">
                <Label htmlFor="address" className="text-base font-medium">Street Address</Label>
                <Input id="address" placeholder="123 Maple Lane" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="city" className="text-base font-medium">City</Label>
                <Input id="city" placeholder="Springfield" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="state" className="text-base font-medium">State</Label>
                  <Input id="state" placeholder="OH" value={form.state} maxLength={2} onChange={e => setForm(f => ({ ...f, state: e.target.value.toUpperCase() }))} className="mt-1 text-base" />
                </div>
                <div>
                  <Label htmlFor="zip" className="text-base font-medium">ZIP</Label>
                  <Input id="zip" placeholder="45503" value={form.zip} onChange={e => setForm(f => ({ ...f, zip: e.target.value }))} className="mt-1 text-base" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="text-base font-medium">Phone</Label>
                <Input id="phone" type="tel" placeholder="555-555-1234" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="email" className="text-base font-medium">Email</Label>
                <Input id="email" type="email" placeholder="jane@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="mt-1 text-base" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
                <Input id="notes" placeholder="e.g. Birthday June 5, golf buddy" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
              </div>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={addContact} size="lg" className="w-full sm:w-auto text-base">
              Add Contact
            </Button>
          </CardContent>
        </Card>

        {/* Stats */}
        {contacts.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">{contacts.length}</span> contact{contacts.length !== 1 ? "s" : ""}
            </p>
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Address Book
            </Button>
          </div>
        )}

        {/* Print header */}
        <div className="hidden print:block mb-3 text-center border-b pb-2">
          <h2 className="text-xl font-bold">My Address Book</h2>
          <p className="text-xs text-gray-500">Printed {new Date().toLocaleDateString("en-US")}</p>
        </div>

        {/* List */}
        {contacts.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <BookOpen className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">No contacts yet.</p>
              <p className="text-sm mt-1">Add your first contact above.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {Object.keys(grouped).sort().map(letter => (
              <Card key={letter} className="print:break-inside-avoid">
                <CardHeader className="pb-1 pt-2 bg-rose-50">
                  <CardTitle className="text-2xl text-rose-700 font-bold">{letter}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-3">
                  <div className="divide-y">
                    {grouped[letter].map(c => (
                      <div key={c.id} className="py-2 flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-base">{c.name}</p>
                          {c.address && (
                            <p className="text-sm text-gray-700">
                              {c.address}{c.city && `, ${c.city}`}{c.state && `, ${c.state}`} {c.zip}
                            </p>
                          )}
                          {(c.phone || c.email) && (
                            <p className="text-sm text-gray-600">
                              {c.phone}{c.phone && c.email && " · "}{c.email}
                            </p>
                          )}
                          {c.notes && <p className="text-xs text-gray-500 italic mt-0.5">{c.notes}</p>}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0 h-7 w-7 text-red-400 hover:text-red-600 print:hidden"
                          onClick={() => removeContact(c.id)}
                          aria-label="Remove contact"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Print two copies. Keep one by the phone and one in your travel bag — you will be glad you have addresses handy when you need to send a card or birthday gift.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
