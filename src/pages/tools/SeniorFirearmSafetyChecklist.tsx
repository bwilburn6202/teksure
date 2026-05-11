import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Printer } from "lucide-react";

interface Item {
  id: string;
  title: string;
  detail: string;
  category: "Storage basics" | "If memory concerns exist" | "Estate planning" | "Crisis resources";
}

const ITEMS: Item[] = [
  { id: "a1", category: "Storage basics", title: "Firearms stored in a locked safe", detail: "Quick-access biometric or electronic safes ($150-$400) allow the owner to access quickly while preventing anyone else. Mounted to the wall or floor for theft resistance." },
  { id: "a2", category: "Storage basics", title: "Ammunition stored separately from firearms", detail: "Different cabinet, different room, or locked separately. Reduces both accidental discharge risk and burglary value." },
  { id: "a3", category: "Storage basics", title: "Trigger locks on any firearm outside the safe", detail: "Inexpensive ($10-$30 each). Many county sheriff's offices give them free. Walmart and Cabela's stock them." },
  { id: "a4", category: "Storage basics", title: "Combination/code not written on or near the safe", detail: "Memorize it. Tell one trusted person (spouse, adult child, attorney) for emergencies. Don't keep it in the same drawer as the safe key." },

  { id: "b1", category: "If memory concerns exist", title: "Have the conversation while everyone is calm", detail: "Don't wait for a crisis. The Alzheimer's Association and the Veterans Administration both have scripts. Frame it as planning, not taking — the gun owner stays in control of the decision." },
  { id: "b2", category: "If memory concerns exist", title: "Voluntary out-of-home storage during cognitive decline", detail: "HoldMyGuns.org connects you with gun shops and FFLs that store firearms during family crises, often free for 90 days. Some sheriff's offices also offer this." },
  { id: "b3", category: "If memory concerns exist", title: "Change the combination ONLY the caregiver knows", detail: "When dementia progresses, an honest move: change the safe combination. Storage stays in the home; access changes. No firearms get taken away." },
  { id: "b4", category: "If memory concerns exist", title: "Remove firing pins or disable instead of remove", detail: "Some families prefer to keep firearms in place for the dignity of the owner but disable them. A gunsmith can remove and store firing pins for $20-$50/gun." },

  { id: "c1", category: "Estate planning", title: "List each firearm in your will or trust", detail: "Make and model, serial number, intended recipient. Some firearms (NFA items like suppressors, short-barreled rifles) require a Gun Trust to legally transfer." },
  { id: "c2", category: "Estate planning", title: "Verify recipient is legally allowed to inherit", detail: "Felony conviction, dishonorable discharge, domestic violence misdemeanor — any of these disqualifies. Federal law 18 U.S.C. § 922(g). An FFL transfer dealer can run a background check." },
  { id: "c3", category: "Estate planning", title: "Gun Trust ($300-$800)", detail: "Allows multiple authorized users, simplifies inheritance, especially valuable for NFA items. Worth consulting an estate attorney familiar with firearms law." },
  { id: "c4", category: "Estate planning", title: "Out-of-state transfers require an FFL", detail: "You cannot mail a firearm directly to a relative across state lines. It must go FFL-to-FFL. Cost: $25-$75 per transfer at the receiving end." },

  { id: "d1", category: "Crisis resources", title: "Suicide concerns - 988 (then press 1 for veterans)", detail: "Free, 24/7, confidential. Trained counselors. The phone call alone is the intervention. Veterans get specialized support after pressing 1." },
  { id: "d2", category: "Crisis resources", title: "Temporary storage during crisis", detail: "HoldMyGuns.org and Walk the Talk America have national directories of voluntary storage partners. No questions asked. Often free for 90 days during a mental health crisis." },
  { id: "d3", category: "Crisis resources", title: "Alzheimer's Association - 1-800-272-3900 (24/7)", detail: "Trained on the firearm-and-dementia conversation. Walks family members through scripts. Free." },
  { id: "d4", category: "Crisis resources", title: "AFSP firearm-and-suicide resources", detail: "AFSP.org has free brochures co-developed with the National Shooting Sports Foundation. Designed for gun-owning families. Respectful of the gun culture." },
];

const CATEGORIES: Item["category"][] = ["Storage basics", "If memory concerns exist", "Estate planning", "Crisis resources"];

export default function SeniorFirearmSafetyChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setDone(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const completedCount = Object.values(done).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Senior Firearm Safety Checklist | TekSure" description="Compassionate firearm safety and estate-planning checklist for older adults and families navigating cognitive decline. Respectful of gun owners, focused on planning." />
      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="h-7 w-7 text-slate-700" />
            <h1 className="text-3xl font-bold text-gray-900">Firearm Safety for Seniors</h1>
          </div>
          <p className="text-gray-600 text-lg">For senior gun owners and families planning ahead. Respect for ownership combined with safety as cognitive health changes.</p>
        </div>

        {completedCount > 0 && (
          <Card className="mb-4 bg-slate-50 border-slate-200">
            <CardContent className="py-3 px-4 text-center">
              <p className="text-slate-900 font-semibold">{completedCount} of {ITEMS.length} done</p>
            </CardContent>
          </Card>
        )}

        {CATEGORIES.map(cat => (
          <Card key={cat} className="mb-4">
            <CardContent className="py-4 px-4">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{cat}</h2>
              <div className="space-y-3">
                {ITEMS.filter(i => i.category === cat).map(i => (
                  <div key={i.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 bg-white">
                    <Checkbox checked={!!done[i.id]} onCheckedChange={() => toggle(i.id)} className="mt-1 print:hidden" />
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold ${done[i.id] ? "line-through text-gray-400" : "text-gray-900"}`}>{i.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{i.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-900"><span className="font-semibold">Crisis line:</span> If you or a loved one is in immediate danger, call <span className="font-bold">988</span> (Suicide and Crisis Lifeline). Veterans press 1 after calling. Free, 24/7, trained crisis counselors. Your firearm staying safely stored — even temporarily — is the single most effective suicide prevention measure researchers have studied.</p>
          </CardContent>
        </Card>

        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />Print Checklist
          </Button>
        </div>
      </div>
    </div>
  );
}
