import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trash2, BookOpen } from 'lucide-react';
import { getFavorites, removeFavorite, type FavoriteGuide } from '@/lib/favorites';

export default function Favorites() {
  const [favs, setFavs] = useState<FavoriteGuide[]>(getFavorites);

  const handleRemove = (slug: string) => {
    removeFavorite(slug);
    setFavs(getFavorites());
  };

  return (
    <>
      <SEOHead
        title="My Favorites | TekSure"
        description="Your saved guides — quick access to the articles you've bookmarked."
        path="/favorites"
      />
      <Navbar />
      <main className="container py-16 min-h-[60vh]">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold">My Favorites</h1>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Guides you've bookmarked for quick access. Your favorites are saved in your browser.
        </p>

        {favs.length === 0 ? (
          <Card className="max-w-lg mx-auto">
            <CardContent className="py-12 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">No saved guides yet.</p>
              <p className="text-sm text-muted-foreground mb-6">
                Browse our guides and bookmark the ones you want to come back to.
              </p>
              <Button asChild>
                <Link to="/guides">Browse Guides</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favs.map((fav) => (
              <Card key={fav.slug} className="h-full flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{fav.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="flex-1 mb-4">{fav.excerpt}</CardDescription>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="gap-2 flex-1">
                      <Link to={`/guides/${fav.slug}`}>
                        <BookOpen className="h-4 w-4" /> View Guide
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleRemove(fav.slug)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
