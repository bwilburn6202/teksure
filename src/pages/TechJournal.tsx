import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Plus, Trash2, Save, Calendar, Clock } from 'lucide-react';

interface JournalEntry {
  id: string;
  guideSlug: string;
  guideTitle: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = 'teksure_journal';

export function TechJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newNote, setNewNote] = useState('');
  const [selectedGuide, setSelectedGuide] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editNote, setEditNote] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const saveEntries = (newEntries: JournalEntry[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newEntries));
    setEntries(newEntries);
  };

  const addEntry = () => {
    if (!newNote.trim() || !selectedGuide) return;
    
    const entry: JournalEntry = {
      id: Date.now().toString(),
      guideSlug: selectedGuide,
      guideTitle: selectedGuide.replace(/-/g, ' '),
      note: newNote,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    saveEntries([entry, ...entries]);
    setNewNote('');
    setSelectedGuide('');
  };

  const updateEntry = (id: string) => {
    const updated = entries.map(e => 
      e.id === id ? { ...e, note: editNote, updatedAt: new Date().toISOString() } : e
    );
    saveEntries(updated);
    setEditingId(null);
    setEditNote('');
  };

  const deleteEntry = (id: string) => {
    if (confirm('Delete this note?')) {
      saveEntries(entries.filter(e => e.id !== id));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const groupedEntries = entries.reduce((acc, entry) => {
    const date = new Date(entry.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (!acc[date]) acc[date] = [];
    acc[date].push(entry);
    return acc;
  }, {} as Record<string, JournalEntry[]>);

  return (
    <>
      <SEOHead
        title="Tech Journal | TekSure"
        description="Save personal notes and reflections as you learn new technology skills."
        path="/journal"
      />
      <div className="print:hidden">
        <Navbar />
      </div>

      <main id="main-content" className="container py-12 min-h-[70vh]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Tech Journal</h1>
              <p className="text-muted-foreground">Save notes and reflections as you learn new technology skills.</p>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Notes</TabsTrigger>
              <TabsTrigger value="add">Add New</TabsTrigger>
            </TabsList>

            <TabsContent value="add" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Add a New Note
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">What are you learning about?</label>
                    <Input
                      placeholder="e.g., How to set up two-factor authentication"
                      value={selectedGuide}
                      onChange={(e) => setSelectedGuide(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Or paste the guide URL slug, like: "two-factor-authentication"
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your notes</label>
                    <Textarea
                      placeholder="What did you learn? What was confusing? What will you remember?"
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      rows={5}
                    />
                  </div>
                  <Button onClick={addEntry} disabled={!newNote.trim() || !selectedGuide.trim()}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Note
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="all" className="mt-6">
              {entries.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No notes yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Start keeping track of what you learn! Switch to the "Add New" tab to create your first note.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {Object.entries(groupedEntries).map(([monthYear, monthEntries]) => (
                    <div key={monthYear}>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {monthYear}
                      </h3>
                      <div className="space-y-3">
                        {monthEntries.map((entry) => (
                          <Card key={entry.id}>
                            <CardContent className="pt-4">
                              {editingId === entry.id ? (
                                <div className="space-y-3">
                                  <Textarea
                                    value={editNote}
                                    onChange={(e) => setEditNote(e.target.value)}
                                    rows={4}
                                  />
                                  <div className="flex gap-2">
                                    <Button size="sm" onClick={() => updateEntry(entry.id)}>
                                      Save Changes
                                    </Button>
                                    <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                                      Cancel
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <a 
                                        href={`/guides/${entry.guideSlug}`}
                                        className="font-medium text-primary hover:underline"
                                      >
                                        {entry.guideTitle}
                                      </a>
                                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                        <span className="flex items-center gap-1">
                                          <Clock className="h-3 w-3" />
                                          Added {formatDate(entry.createdAt)}
                                        </span>
                                        {entry.updatedAt !== entry.createdAt && (
                                          <span>Edited {formatDate(entry.updatedAt)}</span>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex gap-1">
                                      <Button 
                                        size="sm" 
                                        variant="ghost"
                                        onClick={() => {
                                          setEditingId(entry.id);
                                          setEditNote(entry.note);
                                        }}
                                      >
                                        Edit
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="ghost"
                                        onClick={() => deleteEntry(entry.id)}
                                        className="text-destructive hover:text-destructive"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                  <p className="text-sm whitespace-pre-wrap">{entry.note}</p>
                                </>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}

export default TechJournal;
