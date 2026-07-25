import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Trash2, Printer, RotateCcw, CheckCircle2, Circle } from "lucide-react";

type Category = "Produce" | "Dairy & Eggs" | "Meat & Fish" | "Bakery" | "Pantry" | "Frozen" | "Beverages" | "Household" | "Other";

interface ListItem {
  id: string;
  name: string;
  category: Category;
  qty: string;
  bought: boolean;
}

const CATEGORIES: Category[] = ["Produce", "Dairy & Eggs", "Meat & Fish", "Bakery", "Pantry", "Frozen", "Beverages", "Household", "Other"];

const COMMON: Record<Category, string[]> = {
  "Produce": ["Bananas", "Apples", "Lettuce", "Tomatoes", "Onions", "Carrots", "Potatoes", "Berries"],
  "Dairy & Eggs": ["Milk", "Eggs", "Butter", "Cheese", "Yogurt"],
  "Meat & Fish": ["Chicken breast", "Ground beef", "Salmon", "Turkey lunchmeat"],
  "Bakery": ["Bread", "Bagels", "Rolls", "English muffins"],
  "Pantry": ["Cereal", "Oatmeal", "Pasta", "Rice", "Peanut butter", "Coffee", "Olive oil", "Soup"],
  "Frozen": ["Frozen vegetables", "Ice cream", "Frozen pizza"],
  "Beverages": ["Bottled water", "Orange juice", "Tea bags"],
  "Household": ["Paper towels", "Toilet paper", "Dish soap", "Trash bags", "Laundry detergent"],
  "Other": [],
};

const CATEGORY_COLOR: Record<Category, string> = {
  "Produce": "text-green-700 bg-green-50",
  "Dairy & Eggs": "text-blue-700 bg-blue-50",
  "Meat & Fish": "text-red-700 bg-red-50",
  "Bakery": "text-amber-700 bg-amber-50",
  "Pantry": "text-orange-700 bg-orange-50",
  "Frozen": "text-cyan-700 bg-cyan-50",
  "Beverages": "text-purple-700 bg-purple-50",
  "Household": "text-gray-700 bg-gray-50",
  "Other": "text-pink-700 bg-pink-50",
};

export default function GroceryListBuilder() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>("Produce");
  const [qty, setQty] = useState("");
  const [showCommonFor, setShowCommonFor] = useState<Category | null>(null);

  function add(itemName?: string, itemCategory?: Category) {
    const finalName = (itemName ?? name).trim();
    if (!finalName) return;
    setItems(prev => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        name: finalName,
        category: itemCategory ?? category,
        qty: qty.trim(),
        bought: false,
      },
    ]);
    if (!itemName) {
      setName("");
      setQty("");
    }
  }

  function toggle(id: string) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, bought: !i.bought } : i));
  }

  function remove(id: string) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function clearAll() {
    setItems([]);
  }

  function clearBought() {
    setItems(prev => prev.filter(i => !i.bought));
  }

  const grouped = CATEGORIES.reduce<Record<Category, ListItem[]>>((acc, cat) => {
    acc[cat] = items.filter(i => i.category === cat).sort((a, b) => Number(a.bought) - Number(b.bought));
    return acc;
  }, {} as Record<Category, ListItem[]>);

  const total = items.length;
  const bought = items.filter(i => i.bought).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Grocery List Builder | TekSure"
        description="Build a sorted grocery list by category. Quick-add common items, check them off as you shop, and print the list."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ShoppingCart className="h-7 w-7 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Grocery List Builder</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Build a tidy grocery list sorted by section. Use the quick-add buttons or type your own items.
          </p>
        </div>

        {/* Add form */}
        <Card className="mb-4 print:hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Add an item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <select value={category} onChange={e => setCategory(e.target.value as Category)} className="sm:col-span-4 border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <Input placeholder="Item name" value={name} onChange={e => setName(e.target.value)} onKeyDown={e => { if (e.key === "Enter") add(); }} className="sm:col-span-5 text-base" />
              <Input placeholder="Qty" value={qty} onChange={e => setQty(e.target.value)} className="sm:col-span-2 text-base" />
              <Button onClick={() => add()} className="sm:col-span-1 text-base">Add</Button>
            </div>
            <button
              type="button"
              onClick={() => setShowCommonFor(showCommonFor === category ? null : category)}
              className="text-xs text-blue-600 underline"
            >
              {showCommonFor === category ? "Hide" : "Show"} common {category} items
            </button>
            {showCommonFor === category && COMMON[category].length > 0 && (
              <div className="flex flex-wrap gap-1">
                {COMMON[category].map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => add(c, category)}
                    className="text-xs px-2 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                  >
                    + {c}
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Status */}
        {total > 0 && (
          <div className="flex items-center justify-between mb-3 print:hidden">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">{bought} of {total}</span> items checked off
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-1">
                <Printer className="h-3 w-3" />
                Print
              </Button>
              {bought > 0 && (
                <Button variant="ghost" size="sm" onClick={clearBought} className="gap-1 text-gray-500">
                  Clear bought
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={clearAll} className="gap-1 text-red-500">
                <RotateCcw className="h-3 w-3" />
                Clear all
              </Button>
            </div>
          </div>
        )}

        {/* List */}
        {total === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <ShoppingCart className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">Your list is empty.</p>
              <p className="text-sm mt-1">Add your first item above.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {CATEGORIES.map(cat => {
              const list = grouped[cat];
              if (list.length === 0) return null;
              return (
                <Card key={cat} className="print:break-inside-avoid">
                  <CardHeader className={`pb-2 pt-3 ${CATEGORY_COLOR[cat].split(" ")[1]}`}>
                    <CardTitle className={`text-base ${CATEGORY_COLOR[cat].split(" ")[0]}`}>
                      {cat} <span className="text-sm font-normal text-gray-500">({list.length})</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 pb-3">
                    <div className="space-y-1">
                      {list.map(item => (
                        <div key={item.id} className="flex items-start gap-2 py-1">
                          <button
                            onClick={() => toggle(item.id)}
                            className="mt-0.5 shrink-0"
                            aria-label={item.bought ? "Mark as not bought" : "Mark as bought"}
                          >
                            {item.bought
                              ? <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                              : <Circle className="h-5 w-5 text-gray-400" />}
                          </button>
                          <div className="flex-1 flex items-center gap-2">
                            <span className={`text-base ${item.bought ? "line-through text-gray-400" : "text-gray-900"}`}>
                              {item.name}
                            </span>
                            {item.qty && <Badge variant="secondary" className="text-xs">{item.qty}</Badge>}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-red-400 hover:text-red-600 print:hidden"
                            onClick={() => remove(item.id)}
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              The list groups items by store section automatically — produce together, dairy together, and so on. That makes shopping faster.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
