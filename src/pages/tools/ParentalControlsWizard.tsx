import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
export default function ParentalControlsWizard() {
  return (<><SEOHead title="Coming Soon" description="This tool is being built." path="/tools" /><Navbar /><main className="min-h-screen bg-background"><div className="container py-20 text-center"><h1 className="text-2xl font-bold mb-2">Coming Soon</h1><p className="text-muted-foreground">This tool is being built and will be available shortly.</p></div></main><Footer /></>);
}
