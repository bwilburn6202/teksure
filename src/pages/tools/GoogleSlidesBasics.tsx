import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Presentation } from 'lucide-react';

export default function GoogleSlidesBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Slides Basics for Seniors | TekSure" description="Make presentations. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Presentation className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Slides</h1>
          <p className="text-lg text-muted-foreground">Free PowerPoint. Make slideshows.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family photo slideshow.</li>
              <li>Vacation memories.</li>
              <li>Anniversary tribute.</li>
              <li>Memorial slideshow.</li>
              <li>Recipe cookbook.</li>
              <li>Volunteer presentations.</li>
              <li>Hobby club presentations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go to slides.google.com.</li>
              <li>Sign in with Google.</li>
              <li>Click &quot;Blank&quot; or pick template.</li>
              <li>Type title.</li>
              <li>Add new slide — left panel.</li>
              <li>Auto-saves.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add photos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Insert menu, then &quot;Image&quot;.</li>
              <li>&quot;Upload from computer&quot; — your photos.</li>
              <li>Or &quot;Photos&quot; — Google Photos.</li>
              <li>Drag corner to resize.</li>
              <li>Drag center to move.</li>
              <li>Right-click for more options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add text + style</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click text box.</li>
              <li>Type your text.</li>
              <li>Highlight to format.</li>
              <li>Bold, italic, font size buttons.</li>
              <li>Change color.</li>
              <li>Center, left, right align.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Show slideshow</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Click &quot;Slideshow&quot; top-right.</li>
              <li>Full screen.</li>
              <li>Spacebar — next slide.</li>
              <li>Backspace — previous.</li>
              <li>Esc — exit.</li>
              <li>Cast to TV via Chromecast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Templates available</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wedding — anniversary.</li>
              <li>Photo album.</li>
              <li>Yearbook.</li>
              <li>Family tree.</li>
              <li>Pitch presentation.</li>
              <li>Calendar.</li>
              <li>Newsletter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memorial slideshows</h3>
            <p className="text-sm text-muted-foreground">Memorial slideshows — most touching senior use. Photos through life. Music background. Show at funeral / reception. Save as link family can view forever. Library has slideshow help. Funeral homes may help. Or grandkid creates from your photos. Powerful tribute. Lifetime memory.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
