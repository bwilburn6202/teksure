import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Trash2, Printer, PlusCircle, AlertTriangle } from "lucide-react";

type Category = "Email" | "Banking & Money" | "Social Media" | "Shopping" | "Streaming" | "Bills / Utility" | "Cloud / Storage" | "Other";
type WhenIDie = "Keep open" | "Memorialize" | "Close / delete" | "Decide later";

interface Account {
  id: string;
  service: string;
  category: Category;
  username: string;
  recovery: string;
  whenIDie: WhenIDie;
  notes: string;
}

const CATEGORIES: Category[] = ["Email", "Banking & Money", "Social Media", "Shopping", "Streaming", "Bills / Utility", "Cloud / Storage", "Other"];
const WHEN_OPTIONS: WhenIDie[] = ["Keep open", "Memorialize", "Close / delete", "Decide later"];

export default function DigitalAccountInventory() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [form, setForm] = useState({
    service: "",
    category: "Email" as Category,
    username: "",
    recovery: "",
    whenIDie: "Decide later" as WhenIDie,
    notes: "",
  });
  const [error, setError] = useState("");

  function add() {
    if (!form.service.trim()) { setError("Please enter the service name."); return; }
    setError("");
    setAccounts(prev => [...prev, { id: Date.now().toString() + Math.random(), service: form.service.trim(), category: form.category, username: form.username.trim(), recovery: form.recovery.trim(), whenIDie: form.whenIDie, notes: form.notes.trim() }]);
    setForm(f => ({ ...f, service: "", username: "", recovery: "", notes: "" }));
  }

  function remove(id: string) {
    setAccounts(prev => prev.filter(a => a.id !== id));
  }

  // Group by category
  const grouped = CATEGORIES.reduce<Record<Category, Account[]>>((acc, c) => {
    const items = accounts.filter(a => a.category === c);
    if (items.length > 0) acc[c] = items;
    return acc;
  }, {} as Record<Category, Account[]>);

  return (
    <main className="min-h-screen bg-muted">
      <SEOHead
        title="Digital Account Inventory | TekSure"
        description="Build a list of your online accounts (no passwords). Helps family find what exists if you cannot help. Group by category, mark wishes per account."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="h-7 w-7 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Digital Account Inventory</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            A directory of your online accounts — without passwords. So family knows what to keep, close, or memorialize.
          </p>
        </div>

        {/* Important warning */}
        <Card className="mb-4 bg-warn border-warn-foreground/25 print:hidden">
          <CardContent className="py-3 px-4 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-warn-foreground mt-0.5 shrink-0" />
            <p className="text-base text-warn-foreground">
              <span className="font-semibold">Do NOT type passwords into this tool.</span> Only the service name, username, and notes. Use a real password manager (Bitwarden, 1Password, Apple Passwords) for actual passwords.
            </p>
          </CardContent>
        </Card>

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-primary" />
              Add an Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="service" className="text-base font-medium">Service / Site</Label>
              <Input id="service" placeholder="e.g. Gmail, Bank of America, Facebook" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="cat" className="text-base font-medium">Category</Label>
              <select id="cat" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as Category }))} className="mt-1 w-full border border-border rounded-md px-3 py-2 text-base bg-card">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="username" className="text-base font-medium">Username or Email</Label>
              <Input id="username" placeholder="e.g. mary.johnson@gmail.com" value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="recovery" className="text-base font-medium">Recovery method (where to find help)</Label>
              <Input id="recovery" placeholder="e.g. Recovery email is mary.recovery@gmail.com, phone 555-555-1234" value={form.recovery} onChange={e => setForm(f => ({ ...f, recovery: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="when" className="text-base font-medium">If I cannot manage this account, please...</Label>
              <select id="when" value={form.whenIDie} onChange={e => setForm(f => ({ ...f, whenIDie: e.target.value as WhenIDie }))} className="mt-1 w-full border border-border rounded-md px-3 py-2 text-base bg-card">
                {WHEN_OPTIONS.map(w => <option key={w}>{w}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="acc-notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="acc-notes" placeholder="e.g. Auto-pays utility bill, has photos from 1980s" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-danger-foreground text-base">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">Add Account</Button>
          </CardContent>
        </Card>

        {accounts.length > 0 && (
          <div className="mb-3 flex items-center justify-end print:hidden">
            <Button variant="outline" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" />
              Print Directory
            </Button>
          </div>
        )}

        {accounts.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-muted-foreground">
              <Lock className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-lg">No accounts in your directory yet.</p>
              <p className="text-base mt-1">Start with your main email — most other accounts can be recovered through it.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {Object.entries(grouped).map(([cat, items]) => (
              <Card key={cat} className="print:break-inside-avoid">
                <CardHeader className="pb-2 pt-3 bg-primary/10">
                  <CardTitle className="text-base text-primary">{cat} ({items.length})</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="divide-y">
                    {items.map(a => (
                      <div key={a.id} className="py-2 flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground">{a.service}</p>
                          {a.username && <p className="text-sm text-muted-foreground truncate">{a.username}</p>}
                          {a.recovery && <p className="text-sm text-muted-foreground mt-0.5"><span className="font-semibold">Recovery:</span> {a.recovery}</p>}
                          <Badge variant="secondary" className="text-xs mt-1">If incapacitated: {a.whenIDie}</Badge>
                          {a.notes && <p className="text-sm text-muted-foreground italic mt-0.5">{a.notes}</p>}
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => remove(a.id)} className="h-7 w-7 text-danger-foreground hover:text-danger-foreground print:hidden">
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

        <Card className="mt-6 bg-info border-info-foreground/25 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-base text-info-foreground">
              <span className="font-semibold">Where to keep this: </span>
              Print and put it in a safe deposit box, fireproof safe, or with your will. Tell one trusted person where it is. Update it once a year — not more.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
