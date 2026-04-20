import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { guides } from '@/data/guides';

// Spanish category labels
const ES_CATEGORY_LABELS: Record<string, string> = {
  'windows-guides': 'Windows',
  'mac-guides': 'Mac',
  'essential-skills': 'Habilidades Esenciales',
  'tips-tricks': 'Consejos y Trucos',
  'ai-guides': 'Inteligencia Artificial',
  'safety-guides': 'Seguridad',
  'how-to': 'Cómo Hacerlo',
  'app-guides': 'Aplicaciones',
  'health-tech': 'Tecnología de Salud',
  'phone-guides': 'Teléfonos',
  'social-media': 'Redes Sociales',
  'government-civic': 'Gobierno y Beneficios',
  'financial-tech': 'Finanzas',
  'smart-home': 'Hogar Inteligente',
  'entertainment': 'Entretenimiento',
  'communication': 'Comunicación',
  'life-transitions': 'Cambios de Vida',
  'internet-connectivity': 'Internet y WiFi',
};

export default function GuidesEspanol() {
  const [search, setSearch] = useState('');

  const spanishGuides = useMemo(
    () => guides.filter(g => g.slug.startsWith('es-')),
    []
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return spanishGuides;
    const q = search.toLowerCase();
    return spanishGuides.filter(
      g =>
        g.title.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q) ||
        g.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [search, spanishGuides]);

  // Group by category
  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const g of filtered) {
      if (!map[g.category]) map[g.category] = [];
      map[g.category].push(g);
    }
    return map;
  }, [filtered]);

  return (
    <>
      <SEOHead
        title="Guías de Tecnología en Español — TekSure"
        description="Guías paso a paso de tecnología en español — sin tecnicismos, solo respuestas claras. Gratis para todos."
        path="/guias"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="border-b border-border py-16 text-center">
          <div className="container max-w-2xl">
            <div className="text-4xl mb-4">🇪🇸</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Guías de Tecnología en Español</h1>
            <p className="text-muted-foreground text-lg mb-8">
              {spanishGuides.length} guías paso a paso — sin tecnicismos, solo respuestas claras. Totalmente gratis.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                placeholder="Buscar guías en español..."
                className="pl-11 h-12 rounded-2xl"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="container max-w-4xl py-12 px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-3xl mb-3">🔍</p>
              <p className="font-medium mb-1">No se encontraron guías</p>
              <p className="text-sm text-muted-foreground">Intenta con otras palabras clave.</p>
            </div>
          ) : search.trim() ? (
            // Flat list when searching
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-6">{filtered.length} resultado{filtered.length !== 1 ? 's' : ''}</p>
              {filtered.map(guide => (
                <Link key={guide.slug} to={`/guides/${guide.slug}`} className="group block">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all">
                    <div className="text-2xl shrink-0">{guide.thumbnailEmoji}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">{guide.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{guide.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{guide.readTime}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            // Grouped by category when browsing
            <div className="space-y-10">
              {Object.entries(grouped).map(([category, catGuides]) => (
                <div key={category}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      {ES_CATEGORY_LABELS[category] || category}
                    </h2>
                    <Badge variant="secondary" className="text-xs">{catGuides.length} guías</Badge>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {catGuides.map(guide => (
                      <Link key={guide.slug} to={`/guides/${guide.slug}`} className="group block">
                        <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all h-full">
                          <div className="text-2xl shrink-0 mt-0.5">{guide.thumbnailEmoji}</div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm group-hover:text-primary transition-colors leading-snug mb-1">{guide.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{guide.excerpt}</p>
                            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                              <Clock className="h-3 w-3" />{guide.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center p-10 rounded-2xl bg-primary/[0.04] border border-primary/10">
            <p className="text-2xl mb-3">🌎</p>
            <h2 className="text-lg font-bold mb-2">¿Buscas ayuda en inglés también?</h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto">
              TekSure tiene más de {guides.filter(g => !g.slug.startsWith('es-')).length.toLocaleString()} guías en inglés disponibles gratis.
            </p>
            <Button asChild variant="outline" className="rounded-xl gap-2">
              <Link to="/guides"><BookOpen className="h-4 w-4" /> Ver guías en inglés</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
