import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Printer, Trash2 } from "lucide-react";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Note {
  id: string;
  day: number;
  text: string;
}

export default function PrintableMonthlyCalendar() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [notes, setNotes] = useState<Note[]>([]);
  const [form, setForm] = useState({ day: "1", text: "" });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function addNote() {
    const d = parseInt(form.day, 10);
    if (!d || d < 1 || d > daysInMonth || !form.text.trim()) return;
    setNotes(prev => [...prev, { id: Date.now().toString() + Math.random(), day: d, text: form.text.trim() }]);
    setForm({ day: "1", text: "" });
  }

  function remove(id: string) {
    setNotes(prev => prev.filter(n => n.id !== id));
  }

  function notesForDay(d: number) {
    return notes.filter(n => n.day === d);
  }

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Printable Monthly Calendar | TekSure" description="Build a monthly calendar with your appointments and birthdays, then print on letter-size paper to hang on the wall." />
      <div className="max-w-4xl mx-auto px-4 py-8 print:p-0">
        <div className="mb-6 print:hidden">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-7 w-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Printable Calendar</h1>
          </div>
          <p className="text-gray-600 text-lg">Add birthdays, appointments, anything. Print it for the fridge or your office wall.</p>
        </div>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-3 px-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-base font-medium text-gray-700">Month</label>
              <select value={month} onChange={e => setMonth(parseInt(e.target.value))} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-base bg-white">
                {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="text-base font-medium text-gray-700">Year</label>
              <Input type="number" min="2000" max="2099" value={year} onChange={e => setYear(parseInt(e.target.value) || today.getFullYear())} className="mt-1 text-base" />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 print:hidden">
          <CardContent className="py-3 px-4 flex flex-col sm:flex-row gap-2">
            <Input type="number" min="1" max={daysInMonth} value={form.day} onChange={e => setForm({ ...form, day: e.target.value })} className="w-24" placeholder="Day" />
            <Input value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} placeholder="e.g. Doctor at 2pm, Sarah's birthday" className="flex-1" onKeyDown={e => { if (e.key === "Enter") addNote(); }} />
            <Button onClick={addNote}>Add Note</Button>
          </CardContent>
        </Card>

        <div className="mb-3 flex items-center justify-between print:hidden">
          <p className="text-sm text-gray-500">{notes.length} note{notes.length !== 1 ? "s" : ""}</p>
          <Button variant="outline" onClick={() => window.print()} className="gap-2">
            <Printer className="h-4 w-4" />
            Print Calendar
          </Button>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center mb-3">{MONTHS[month]} {year}</h2>
          <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200">
            {DAYS_OF_WEEK.map(d => (
              <div key={d} className="bg-blue-100 p-2 text-center font-semibold text-sm">{d}</div>
            ))}
            {cells.map((d, i) => (
              <div key={i} className="bg-white p-1 min-h-[80px] print:min-h-[80px] text-xs">
                {d && (
                  <>
                    <div className="font-bold text-gray-700">{d}</div>
                    <div className="space-y-0.5 mt-1">
                      {notesForDay(d).map(n => (
                        <div key={n.id} className="bg-yellow-100 rounded px-1 py-0.5 text-[10px] flex items-start justify-between gap-1">
                          <span>{n.text}</span>
                          <button onClick={() => remove(n.id)} className="text-red-400 hover:text-red-600 print:hidden">
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
