import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Printer, RotateCcw } from "lucide-react";

export default function LargePrintRecipeCard() {
  const [title, setTitle] = useState("");
  const [servings, setServings] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");

  function reset() {
    setTitle(""); setServings(""); setPrepTime(""); setCookTime("");
    setIngredients(""); setInstructions(""); setNotes("");
  }

  const ingredientLines = ingredients.split("\n").map(l => l.trim()).filter(Boolean);
  const instructionLines = instructions.split("\n").map(l => l.trim()).filter(Boolean);
  const filled = !!(title || ingredients || instructions);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Large-Print Recipe Card | TekSure"
        description="Make a clean, large-print recipe card you can read while cooking. Easy on the eyes, perfect for the kitchen."
      />

      <div className="max-w-3xl mx-auto px-4 py-8 print:p-0 print:max-w-full">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <ChefHat className="h-7 w-7 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Large-Print Recipe Card</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Type in your favorite family recipe. Print a large-text card to keep in the kitchen.
          </p>
        </div>

        {/* Form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl">Recipe Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label htmlFor="title" className="text-base font-medium">Recipe Title</Label>
              <Input id="title" placeholder="Grandma's Banana Bread" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 text-base" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label htmlFor="servings" className="text-base font-medium">Servings</Label>
                <Input id="servings" placeholder="6" value={servings} onChange={e => setServings(e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="prep" className="text-base font-medium">Prep time</Label>
                <Input id="prep" placeholder="15 minutes" value={prepTime} onChange={e => setPrepTime(e.target.value)} className="mt-1 text-base" />
              </div>
              <div>
                <Label htmlFor="cook" className="text-base font-medium">Cook time</Label>
                <Input id="cook" placeholder="45 minutes" value={cookTime} onChange={e => setCookTime(e.target.value)} className="mt-1 text-base" />
              </div>
            </div>
            <div>
              <Label htmlFor="ing" className="text-base font-medium">Ingredients (one per line)</Label>
              <textarea
                id="ing"
                rows={6}
                placeholder={"2 cups flour\n1 cup sugar\n3 ripe bananas, mashed\n1/2 cup butter, softened\n2 eggs\n1 tsp baking soda"}
                value={ingredients}
                onChange={e => setIngredients(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white"
              />
            </div>
            <div>
              <Label htmlFor="inst" className="text-base font-medium">Instructions (one step per line)</Label>
              <textarea
                id="inst"
                rows={8}
                placeholder={"Heat oven to 350°F.\nGrease a loaf pan.\nMix flour, sugar, and baking soda.\nIn another bowl, mash bananas, then add butter and eggs.\nCombine wet and dry ingredients.\nPour into pan and bake 45 minutes."}
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white"
              />
            </div>
            <div>
              <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="notes" placeholder="From Mom's recipe box, add walnuts if desired" value={notes} onChange={e => setNotes(e.target.value)} className="mt-1 text-base" />
            </div>
          </CardContent>
        </Card>

        {/* Preview / printable card */}
        {filled && (
          <div className="border-2 border-orange-400 rounded-2xl bg-white p-8 print:border-2 print:rounded-none print:p-6 print:break-inside-avoid">
            {title && <h2 className="text-4xl font-bold text-orange-700 mb-4 print:text-5xl">{title}</h2>}
            {(servings || prepTime || cookTime) && (
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-base mb-5 pb-3 border-b border-gray-200">
                {servings && <span><span className="font-semibold">Serves:</span> {servings}</span>}
                {prepTime && <span><span className="font-semibold">Prep:</span> {prepTime}</span>}
                {cookTime && <span><span className="font-semibold">Cook:</span> {cookTime}</span>}
              </div>
            )}
            {ingredientLines.length > 0 && (
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 print:text-3xl">Ingredients</h3>
                <ul className="list-disc pl-6 space-y-1.5 text-xl print:text-2xl">
                  {ingredientLines.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
              </div>
            )}
            {instructionLines.length > 0 && (
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 print:text-3xl">Instructions</h3>
                <ol className="list-decimal pl-6 space-y-2 text-xl print:text-2xl">
                  {instructionLines.map((line, i) => <li key={i}>{line}</li>)}
                </ol>
              </div>
            )}
            {notes && (
              <div className="mt-4 pt-3 border-t border-gray-200 text-base italic text-gray-600">
                {notes}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-4 print:hidden">
          <Button variant="outline" onClick={() => window.print()} disabled={!filled} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Recipe Card
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2 text-gray-500">
            <RotateCcw className="h-4 w-4" />
            Clear
          </Button>
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200 print:hidden">
          <CardContent className="py-3 px-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Quick Tip: </span>
              Slip the printed card into a clear plastic sleeve to keep splatters off. You can wipe it clean and reuse it for years.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
