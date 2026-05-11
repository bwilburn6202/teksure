import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Printer, RotateCcw, ChefHat } from "lucide-react";

type Meal = "breakfast" | "lunch" | "dinner";
type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

const DAYS: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MEALS: { id: Meal; label: string; emoji: string; color: string }[] = [
  { id: "breakfast", label: "Breakfast", emoji: "🍳", color: "text-amber-700" },
  { id: "lunch", label: "Lunch", emoji: "🥗", color: "text-green-700" },
  { id: "dinner", label: "Dinner", emoji: "🍽️", color: "text-purple-700" },
];

const SUGGESTIONS: Record<Meal, string[]> = {
  breakfast: ["Oatmeal with berries", "Eggs and toast", "Yogurt and granola", "Cereal and banana", "Pancakes", "Fruit and cottage cheese"],
  lunch: ["Turkey sandwich", "Tuna salad", "Tomato soup and grilled cheese", "Chicken salad", "Leftovers from dinner", "Veggie wrap"],
  dinner: ["Roast chicken", "Spaghetti", "Salmon and vegetables", "Beef stew", "Tacos", "Stir-fry", "Meatloaf", "Soup and salad"],
};

export default function WeeklyMealPlanner() {
  const [plan, setPlan] = useState<Record<string, string>>({});
  const [grocery, setGrocery] = useState("");
  const [weekStart, setWeekStart] = useState("");

  function key(day: Day, meal: Meal) { return `${day}-${meal}`; }
  function setMeal(day: Day, meal: Meal, value: string) {
    setPlan(prev => ({ ...prev, [key(day, meal)]: value }));
  }

  function reset() {
    setPlan({});
    setGrocery("");
    setWeekStart("");
  }

  function pickSuggestion(day: Day, meal: Meal) {
    const opts = SUGGESTIONS[meal];
    const current = plan[key(day, meal)] || "";
    const idx = opts.indexOf(current);
    const next = opts[(idx + 1) % opts.length];
    setMeal(day, meal, next);
  }

  const filledCount = Object.values(plan).filter(v => v.trim()).length;
  const totalSlots = DAYS.length * MEALS.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Weekly Meal Planner | TekSure"
        description="Plan a full week of meals in a simple grid. Tap suggestions, jot down a grocery list, and print the whole thing for the fridge."
      />

      <div className="max-w-3xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <ChefHat className="h-7 w-7 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Weekly Meal Planner</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Plan a full week of breakfast, lunch, and dinner. Tap the suggestion button to fill in ideas, then customize.
          </p>
        </div>

        {/* Header info */}
        <Card className="mb-4 print:shadow-none">
          <CardContent className="py-3 px-4 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex items-center gap-2">
              <label htmlFor="week-start" className="text-sm font-medium text-gray-700">Week of:</label>
              <Input id="week-start" type="date" value={weekStart} onChange={e => setWeekStart(e.target.value)} className="text-base w-44" />
            </div>
            <span className="text-sm text-gray-500 print:hidden">
              {filledCount} of {totalSlots} meals planned
            </span>
          </CardContent>
        </Card>

        {/* Plan grid */}
        <div className="space-y-3 mb-6">
          {DAYS.map(day => (
            <Card key={day} className="print:break-inside-avoid">
              <CardHeader className="pb-2 pt-3">
                <CardTitle className="text-lg text-gray-800">{day}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {MEALS.map(m => {
                    const v = plan[key(day, m.id)] || "";
                    return (
                      <div key={m.id} className="border border-gray-200 rounded-md p-2 bg-white">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold ${m.color}`}>{m.emoji} {m.label}</span>
                          <button
                            type="button"
                            onClick={() => pickSuggestion(day, m.id)}
                            className="text-xs text-blue-600 underline print:hidden"
                            aria-label={`Suggest a ${m.label.toLowerCase()} idea`}
                          >
                            Suggest
                          </button>
                        </div>
                        <Input
                          placeholder="What is on the menu?"
                          value={v}
                          onChange={e => setMeal(day, m.id, e.target.value)}
                          className="mt-1 text-sm h-8 print:border-0 print:shadow-none print:px-0"
                        />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Grocery list */}
        <Card className="mb-4 print:break-inside-avoid">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-lg flex items-center gap-2 text-emerald-700">
              <Utensils className="h-5 w-5" />
              Grocery List for This Week
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 pb-3">
            <textarea
              placeholder="One item per line — eggs, milk, bread, chicken, lettuce..."
              value={grocery}
              onChange={e => setGrocery(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white min-h-[140px] print:border-0 print:px-0"
            />
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Meal Plan
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Start Over
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Pick one or two days to cook bigger meals — those leftovers become tomorrow's lunch and stretch your time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
