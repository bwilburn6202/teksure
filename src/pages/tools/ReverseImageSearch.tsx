import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageIcon, ExternalLink, Search, Eye, ZoomIn, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const ENGINES = [
  { name: 'Google Images', url: 'https://images.google.com/', description: 'The most comprehensive — finds exact matches, similar images, and pages containing the image.', strength: 'Best for: finding where an image appears online', free: true },
  { name: 'TinEye', url: 'https://tineye.com/', description: 'Oldest reverse image search. Shows when an image first appeared online — great for finding the original.', strength: 'Best for: finding the oldest/original version of an image', free: true },
  { name: 'Yandex Images', url: 'https://yandex.com/images/', description: 'Russian search engine with excellent face and scene recognition. Often finds results Google misses.', strength: 'Best for: face matching and Eastern European/Asian content', free: true },
  { name: 'Bing Visual Search', url: 'https://www.bing.com/visualsearch', description: 'Microsoft\'s reverse image search with object detection and shopping integration.', strength: 'Best for: identifying products and shopping', free: true },
  { name: 'Baidu Images', url: 'https://image.baidu.com/', description: 'China\'s largest search engine. Essential for finding images originating from Chinese websites.', strength: 'Best for: Chinese and East Asian content', free: true },
  { name: 'Sogou Images', url: 'https://pic.sogou.com/', description: 'Chinese search engine with reverse image capability — complements Baidu.', strength: 'Best for: additional Chinese source coverage', free: true },
  { name: 'lenso.ai', url: 'https://lenso.ai/', description: 'AI-powered reverse image search with face, place, and duplicate detection.', strength: 'Best for: AI-enhanced analysis and face detection', free: true },
  { name: 'PimEyes', url: 'https://pimeyes.com/', description: 'Facial recognition search engine — finds where a face appears across the internet.', strength: 'Best for: finding all occurrences of a specific face', free: false },
];

const FACE_ENGINES = [
  { name: 'PimEyes', url: 'https://pimeyes.com/', description: 'Upload a face photo to find where it appears online. Results include social media, news, and blogs.', pricing: 'Freemium (limited free searches)' },
  { name: 'FaceCheck.ID', url: 'https://facecheck.id/', description: 'Search the internet by face — finds social media profiles, news articles, and public appearances.', pricing: 'Freemium' },
  { name: 'Search4faces', url: 'https://search4faces.com/', description: 'Search VK and Odnoklassniki (Russian social networks) by face.', pricing: 'Free' },
  { name: 'PicTriev', url: 'http://www.pictriev.com/', description: 'Analyzes faces for similarity to celebrities and estimates age/gender.', pricing: 'Free' },
];

const UPSCALE = [
  { name: 'upscale.media', url: 'https://www.upscale.media/', description: 'Increase image resolution up to 4x with AI.', pricing: 'Freemium' },
  { name: 'Let\'s Enhance', url: 'https://letsenhance.io/', description: 'AI upscaling with noise reduction and color correction.', pricing: 'Freemium' },
  { name: 'Remini', url: 'https://www.remini.ai/', description: 'Specializes in restoring blurry face photos.', pricing: 'Freemium' },
  { name: 'Bigjpg', url: 'https://bigjpg.com/', description: 'AI upscaler — up to 16x enlargement.', pricing: 'Freemium' },
];

const HOW_TO_STEPS = [
  { title: 'Save the image to your device', desc: 'Right-click (or long-press on mobile) the image and select "Save image as" or "Download image."' },
  { title: 'Go to a reverse image search engine', desc: 'Visit images.google.com, tineye.com, or yandex.com/images. Click the camera icon in the search bar.' },
  { title: 'Upload your image', desc: 'Click "Upload an image" or drag and drop your saved image. Some engines also accept a URL.' },
  { title: 'Review the results', desc: 'The engine will show visually similar images, pages containing the image, and different sizes. Look for the oldest result to find the original source.' },
  { title: 'Try multiple engines', desc: 'No single engine finds everything. If Google does not find a match, try Yandex and TinEye — they use different databases and algorithms.' },
];

export default function ReverseImageSearch() {
  return (
    <>
      <SEOHead title="Reverse Image Search Hub" description="Search by image across 8+ engines. Find where photos come from, verify identities, and detect fakes." path="/tools/reverse-image-search" />
      <Navbar />
      <main className="min-h-screen bg-background"><div className="container max-w-4xl py-12 px-4">
        <div className="text-center mb-10"><ImageIcon className="h-12 w-12 text-primary mx-auto mb-4" /><h1 className="text-3xl font-bold mb-2">Reverse Image Search Hub</h1><p className="text-muted-foreground max-w-lg mx-auto">Find where an image comes from, verify if a photo is real, or discover if someone is using a stolen picture.</p></div>

        <Tabs defaultValue="engines">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="engines" className="gap-1.5"><Search className="h-3.5 w-3.5" /> Search Engines</TabsTrigger>
            <TabsTrigger value="face" className="gap-1.5"><Users className="h-3.5 w-3.5" /> Face Search</TabsTrigger>
            <TabsTrigger value="enhance" className="gap-1.5"><ZoomIn className="h-3.5 w-3.5" /> Enhance Images</TabsTrigger>
            <TabsTrigger value="howto" className="gap-1.5"><Eye className="h-3.5 w-3.5" /> How To</TabsTrigger>
          </TabsList>

          <TabsContent value="engines">
            <div className="grid sm:grid-cols-2 gap-3">{ENGINES.map(e => (
              <Card key={e.name}><CardContent className="p-4">
                <div className="flex items-start justify-between mb-2"><h3 className="font-semibold text-sm">{e.name}</h3><Badge variant={e.free ? 'default' : 'secondary'} className="text-xs">{e.free ? 'Free' : 'Paid'}</Badge></div>
                <p className="text-xs text-muted-foreground mb-2">{e.description}</p>
                <p className="text-xs font-medium text-primary mb-3">{e.strength}</p>
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">Open <ExternalLink className="h-3 w-3" /></a>
              </CardContent></Card>
            ))}</div>
          </TabsContent>

          <TabsContent value="face">
            <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4 mb-6 flex gap-3"><AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /><div className="text-sm"><strong>Privacy notice.</strong> Facial recognition tools are powerful but raise serious privacy concerns. Only search for faces with good reason and never use them to stalk, harass, or discriminate against anyone.</div></div>
            <div className="grid sm:grid-cols-2 gap-3">{FACE_ENGINES.map(e => (
              <Card key={e.name}><CardContent className="p-4"><h3 className="font-semibold text-sm mb-1">{e.name}</h3><p className="text-xs text-muted-foreground mb-2">{e.description}</p><div className="flex items-center justify-between"><Badge variant="outline" className="text-xs">{e.pricing}</Badge><a href={e.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">Visit <ExternalLink className="h-3 w-3" /></a></div></CardContent></Card>
            ))}</div>
          </TabsContent>

          <TabsContent value="enhance">
            <p className="text-sm text-muted-foreground mb-4">Low-quality images can be enhanced with AI before running a reverse search. These tools increase resolution and clarity.</p>
            <div className="grid sm:grid-cols-2 gap-3">{UPSCALE.map(e => (
              <Card key={e.name}><CardContent className="p-4"><h3 className="font-semibold text-sm mb-1">{e.name}</h3><p className="text-xs text-muted-foreground mb-2">{e.description}</p><div className="flex items-center justify-between"><Badge variant="outline" className="text-xs">{e.pricing}</Badge><a href={e.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">Visit <ExternalLink className="h-3 w-3" /></a></div></CardContent></Card>
            ))}</div>
          </TabsContent>

          <TabsContent value="howto">
            <Card><CardContent className="p-6"><h2 className="text-lg font-semibold mb-4">How to Do a Reverse Image Search</h2>
              <div className="space-y-4">{HOW_TO_STEPS.map((step, i) => (
                <div key={i} className="flex gap-4"><div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div><div><h3 className="font-medium text-sm">{step.title}</h3><p className="text-xs text-muted-foreground mt-1">{step.desc}</p></div></div>
              ))}</div>
              <div className="mt-6 p-4 rounded-lg bg-muted"><h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> When to use reverse image search</h3>
                <ul className="space-y-1 text-xs text-muted-foreground">{['Verify if a social media profile photo is real or stolen', 'Find the original source of an image', 'Check if a product photo is legitimate or copied from another site', 'Identify a landmark, plant, or animal in a photo', 'Find higher-resolution versions of an image'].map((t, i) => <li key={i} className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-500 shrink-0" />{t}</li>)}</ul>
              </div>
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </div></main>
      <Footer />
    </>
  );
}
