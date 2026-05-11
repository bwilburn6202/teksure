import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Tv, Trash2, Printer, PlusCircle, CheckCircle2, Star } from "lucide-react";

type Kind = "book" | "movie" | "show";
type Status = "want" | "started" | "finished";

interface Item {
  id: string;
  title: string;
  kind: Kind;
  by: string;
  status: Status;
  rating: number;
  notes: string;
}

const KIND_META: Record<Kind, { label: string; emoji: string }> = {
  book: { label: "Book", emoji: "📖" },
  movie: { label: "Movie", emoji: "🎬" },
  show: { label: "TV Show", emoji: "📺" },
};

const STATUS_META: Record<Status, { label: string; color: string }> = {
  want: { label: "Want to watch / read", color: "bg-blue-100 text-blue-800" },
  started: { label: "In progress", color: "bg-amber-100 text-amber-800" },
  finished: { label: "Finished", color: "bg-green-100 text-green-800" },
};

export default function BookMovieWatchlist() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState({
    title: "",
    kind: "book" as Kind,
    by: "",
    status: "want" as Status,
    notes: "",
  });
  const [filter, setFilter] = useState<"all" | Kind>("all");
  const [error, setError] = useState("");

  function add() {
    if (!form.title.trim()) { setError("Please enter a title."); return; }
    setError("");
    setItems(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: form.title.trim(),
        kind: form.kind,
        by: form.by.trim(),
        status: form.status,
        rating: 0,
        notes: form.notes.trim(),
      },
    ]);
    setForm({ title: "", kind: form.kind, by: "", status: "want", notes: "" });
  }

  function remove(id: string) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function setStatus(id: string, status: Status) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, status } : i));
  }

  function setRating(id: string, rating: number) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, rating: i.rating === rating ? 0 : rating } : i));
  }

  const filtered = filter === "all" ? items : items.filter(i => i.kind === filter);
  const sorted = [...filtered].sort((a, b) => {
    const order: Record<Status, number> = { want: 0, started: 1, finished: 2 };
    if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
    return a.title.localeCompare(b.title);
  });

  const counts = {
    book: items.filter(i => i.kind === "book").length,
    movie: items.filter(i => i.kind === "movie").length,
    show: items.filter(i => i.kind === "show").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Books & Movies Watchlist | TekSure"
        description="Keep a personal list of books to read and movies or shows to watch. Track progress, rate after finishing, print at any time."
      />

      <div className="max-w-2xl mx-auto px-4 py-8 print:p-4">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="h-7 w-7 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">My Reading &amp; Watch List</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Track books to read and movies or shows to watch. Mark them as finished and rate the ones you loved.
          </p>
        </div>

        {/* Add form */}
        <Card className="mb-6 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-indigo-600" />
              Add to Your List
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-base font-medium">Type</Label>
              <div className="flex gap-2 mt-1">
                {(["book", "movie", "show"] as Kind[]).map(k => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, kind: k }))}
                    className={`flex-1 px-3 py-2 rounded-md border text-sm font-medium ${
                      form.kind === k ? "bg-indigo-50 border-indigo-400 text-indigo-800" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {KIND_META[k].emoji} {KIND_META[k].label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="title" className="text-base font-medium">Title</Label>
              <Input id="title" placeholder={form.kind === "book" ? "e.g. Where the Crawdads Sing" : "e.g. The Crown"} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="by" className="text-base font-medium">{form.kind === "book" ? "Author" : "Director or Network"} (optional)</Label>
              <Input id="by" placeholder={form.kind === "book" ? "e.g. Delia Owens" : "e.g. Netflix"} value={form.by} onChange={e => setForm(f => ({ ...f, by: e.target.value }))} className="mt-1 text-base" />
            </div>
            <div>
              <Label htmlFor="status" className="text-base font-medium">Status</Label>
              <select id="status" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Status }))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                <option value="want">Want to {form.kind === "book" ? "read" : "watch"}</option>
                <option value="started">In progress</option>
                <option value="finished">Finished</option>
              </select>
            </div>
            <div>
              <Label htmlFor="notes" className="text-base font-medium">Notes (optional)</Label>
              <Input id="notes" placeholder="e.g. Recommended by Sarah" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className="mt-1 text-base" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button onClick={add} size="lg" className="w-full sm:w-auto text-base">
              Add to List
            </Button>
          </CardContent>
        </Card>

        {/* Filter chips */}
        {items.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 print:hidden">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-full text-sm font-medium ${filter === "all" ? "bg-indigo-600 text-white" : "bg-white border border-gray-200 text-gray-700"}`}
            >
              All ({items.length})
            </button>
            {(["book", "movie", "show"] as Kind[]).map(k => counts[k] > 0 && (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${filter === k ? "bg-indigo-600 text-white" : "bg-white border border-gray-200 text-gray-700"}`}
              >
                {KIND_META[k].emoji} {KIND_META[k].label}s ({counts[k]})
              </button>
            ))}
            <Button variant="outline" size="sm" onClick={() => window.print()} className="ml-auto gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
        )}

        {/* List */}
        {items.length === 0 ? (
          <Card className="print:hidden">
            <CardContent className="py-10 text-center text-gray-500">
              <Tv className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-lg">Your list is empty.</p>
              <p className="text-sm mt-1">Add your first book or movie above.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {sorted.map(item => (
              <Card key={item.id}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-2xl">{KIND_META[item.kind].emoji}</span>
                        <span className="font-semibold text-gray-900 text-base">{item.title}</span>
                        <Badge variant="secondary" className={`text-xs ${STATUS_META[item.status].color}`}>
                          {STATUS_META[item.status].label}
                        </Badge>
                      </div>
                      {item.by && <p className="text-sm text-gray-600 ml-9">by {item.by}</p>}
                      {item.notes && <p className="text-sm text-gray-500 italic ml-9 mt-1">{item.notes}</p>}

                      {/* Status buttons */}
                      <div className="flex gap-1 mt-2 ml-9 flex-wrap print:hidden">
                        {(["want", "started", "finished"] as Status[]).map(s => (
                          <button
                            key={s}
                            onClick={() => setStatus(item.id, s)}
                            className={`text-xs px-2 py-1 rounded border ${
                              item.status === s ? "bg-indigo-50 border-indigo-300 text-indigo-700 font-medium" : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
                            }`}
                          >
                            {s === "finished" ? "✓ Finished" : s === "started" ? "In progress" : "Want"}
                          </button>
                        ))}
                      </div>

                      {/* Rating only when finished */}
                      {item.status === "finished" && (
                        <div className="flex items-center gap-1 mt-2 ml-9 print:hidden">
                          {[1, 2, 3, 4, 5].map(n => (
                            <button
                              key={n}
                              onClick={() => setRating(item.id, n)}
                              aria-label={`Rate ${n} stars`}
                            >
                              <Star className={`h-5 w-5 ${n <= item.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                            </button>
                          ))}
                        </div>
                      )}
                      {item.status === "finished" && item.rating > 0 && (
                        <p className="text-xs text-amber-700 ml-9 mt-1 hidden print:block">
                          Rating: {item.rating} / 5 stars
                        </p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 text-red-400 hover:text-red-600 print:hidden"
                      onClick={() => remove(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {items.filter(i => i.status === "finished").length >= 5 && (
          <Card className="mt-6 bg-green-50 border-green-200 print:hidden">
            <CardContent className="py-3 px-4 flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-sm text-green-800">
                <span className="font-semibold">Look at that!</span> You have finished {items.filter(i => i.status === "finished").length} {items.filter(i => i.status === "finished").length === 1 ? "item" : "items"} so far. Keep it up.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
