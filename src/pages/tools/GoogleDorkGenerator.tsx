import { useState, useMemo } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, Check, ExternalLink, AlertTriangle, FileText, Lock, FolderOpen, Database, Globe } from 'lucide-react';

interface DorkTemplate {
  id: string;
  name: string;
  description: string;
  template: string;
  placeholder: string;
  category: string;
}

const TEMPLATES: DorkTemplate[] = [
  // File Discovery
  { id: 'pdf', name: 'Find PDFs on a domain', description: 'Search for publicly accessible PDF documents on any website.', template: 'site:{domain} filetype:pdf', placeholder: 'example.com', category: 'files' },
  { id: 'doc', name: 'Find Word documents', description: 'Find publicly accessible Word docs on a website.', template: 'site:{domain} filetype:doc OR filetype:docx', placeholder: 'example.com', category: 'files' },
  { id: 'xls', name: 'Find spreadsheets', description: 'Find publicly accessible Excel files on a website.', template: 'site:{domain} filetype:xls OR filetype:xlsx OR filetype:csv', placeholder: 'example.com', category: 'files' },
  { id: 'ppt', name: 'Find presentations', description: 'Find PowerPoint files on a website.', template: 'site:{domain} filetype:ppt OR filetype:pptx', placeholder: 'example.com', category: 'files' },
  // Directory Listings
  { id: 'dir', name: 'Find open directories', description: 'Search for directory listings that expose file structures.', template: 'site:{domain} intitle:"index of"', placeholder: 'example.com', category: 'directories' },
  { id: 'parent', name: 'Find parent directories', description: 'Find pages showing a file/folder listing.', template: 'site:{domain} intitle:"parent directory"', placeholder: 'example.com', category: 'directories' },
  // Login & Admin Pages
  { id: 'login', name: 'Find login pages', description: 'Discover login and admin portals on a website.', template: 'site:{domain} inurl:login OR inurl:admin OR inurl:signin', placeholder: 'example.com', category: 'login' },
  { id: 'wp', name: 'Find WordPress admin', description: 'Discover WordPress admin pages on a website.', template: 'site:{domain} inurl:wp-admin OR inurl:wp-login', placeholder: 'example.com', category: 'login' },
  // Sensitive Info
  { id: 'email', name: 'Find email addresses', description: 'Search for email addresses mentioned on a website.', template: 'site:{domain} "@{domain}" email', placeholder: 'example.com', category: 'sensitive' },
  { id: 'passwd', name: 'Find exposed passwords', description: 'Search for accidentally exposed password files.', template: 'site:{domain} filetype:txt inurl:password OR inurl:passwd', placeholder: 'example.com', category: 'sensitive' },
  { id: 'config', name: 'Find configuration files', description: 'Search for exposed config files that may contain credentials.', template: 'site:{domain} filetype:env OR filetype:ini OR filetype:conf', placeholder: 'example.com', category: 'sensitive' },
  // General Research
  { id: 'cache', name: 'View cached version', description: 'See Google\'s cached version of a specific page.', template: 'cache:{domain}', placeholder: 'example.com/page', category: 'research' },
  { id: 'related', name: 'Find related sites', description: 'Discover websites similar to a given domain.', template: 'related:{domain}', placeholder: 'example.com', category: 'research' },
  { id: 'link', name: 'Find pages linking to a site', description: 'Find external pages that link to a specific website.', template: 'link:{domain}', placeholder: 'example.com', category: 'research' },
  { id: 'social', name: 'Find social media profiles', description: 'Find social media profiles for a person or brand.', template: 'site:linkedin.com OR site:twitter.com OR site:facebook.com "{query}"', placeholder: 'John Smith', category: 'research' },
  { id: 'exclude', name: 'Search excluding a site', description: 'Search for a topic while excluding results from a specific site.', template: '"{query}" -site:{domain}', placeholder: 'search term', category: 'research' },
  // Custom
  { id: 'custom', name: 'Custom dork builder', description: 'Build your own Google dork from scratch using operators.', template: '{query}', placeholder: 'site:example.com filetype:pdf', category: 'custom' },
];

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Globe },
  { id: 'files', label: 'File Discovery', icon: FileText },
  { id: 'directories', label: 'Directories', icon: FolderOpen },
  { id: 'login', label: 'Login Pages', icon: Lock },
  { id: 'sensitive', label: 'Sensitive Info', icon: Database },
  { id: 'research', label: 'Research', icon: Search },
];

const OPERATORS = [
  { op: 'site:', desc: 'Search within a specific website', example: 'site:example.com' },
  { op: 'filetype:', desc: 'Search for specific file types', example: 'filetype:pdf' },
  { op: 'intitle:', desc: 'Search for words in the page title', example: 'intitle:"index of"' },
  { op: 'inurl:', desc: 'Search for words in the URL', example: 'inurl:admin' },
  { op: 'intext:', desc: 'Search for words in the page body', example: 'intext:password' },
  { op: 'cache:', desc: 'View Google\'s cached version of a page', example: 'cache:example.com' },
  { op: 'related:', desc: 'Find sites similar to a domain', example: 'related:example.com' },
  { op: '-', desc: 'Exclude a word or site from results', example: '-site:pinterest.com' },
  { op: 'OR', desc: 'Match either term', example: 'cat OR dog' },
  { op: '""', desc: 'Exact phrase match', example: '"exact phrase"' },
  { op: 'before:/after:', desc: 'Filter by date', example: 'after:2024-01-01' },
];

export default function GoogleDorkGenerator() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<DorkTemplate | null>(null);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(() =>
    activeCategory === 'all' ? TEMPLATES : TEMPLATES.filter(t => t.category === activeCategory),
    [activeCategory]
  );

  const generatedDork = useMemo(() => {
    if (!selectedTemplate || !input.trim()) return '';
    return selectedTemplate.template
      .replace(/{domain}/g, input.trim())
      .replace(/{query}/g, input.trim());
  }, [selectedTemplate, input]);

  const googleUrl = generatedDork ? `https://www.google.com/search?q=${encodeURIComponent(generatedDork)}` : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDork).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <>
      <SEOHead title="Google Dork Generator" description="Build advanced Google search queries to find specific files, pages, and information on any website." path="/tools/google-dork-generator" />
      <main className="min-h-screen bg-background">
        <div className="container max-w-4xl py-12 px-4">
          <div className="text-center mb-10">
            <Search className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Google Dork Generator</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Build advanced Google search queries to find specific files, directories, and information on any website.</p>
          </div>

          {/* Ethics Warning */}
          <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4 mb-8 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-sm"><strong>Use responsibly.</strong> Google dorking is a legitimate research technique, but accessing private systems without permission is illegal. Only use these queries on websites you own or have permission to test.</div>
          </div>

          <Tabs defaultValue="builder">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="builder">Dork Builder</TabsTrigger>
              <TabsTrigger value="reference">Operator Reference</TabsTrigger>
            </TabsList>

            <TabsContent value="builder">
              {/* Category Filter */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {CATEGORIES.map(cat => (
                  <Button key={cat.id} size="sm" variant={activeCategory === cat.id ? 'default' : 'outline'} onClick={() => { setActiveCategory(cat.id); setSelectedTemplate(null); setInput(''); }} className="gap-1.5 text-xs whitespace-nowrap">
                    <cat.icon className="h-3.5 w-3.5" /> {cat.label}
                  </Button>
                ))}
              </div>

              {/* Template Grid */}
              {!selectedTemplate ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {filtered.map(t => (
                    <Card key={t.id} className="cursor-pointer hover:border-primary/40 transition-all" onClick={() => setSelectedTemplate(t)}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-sm mb-1">{t.name}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{t.description}</p>
                        <code className="text-xs bg-muted px-2 py-1 rounded font-mono">{t.template}</code>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{selectedTemplate.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedTemplate.description}</p>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => { setSelectedTemplate(null); setInput(''); }}>Change</Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-1.5">Enter your target:</label>
                        <Input value={input} onChange={e => setInput(e.target.value)} placeholder={selectedTemplate.placeholder} className="font-mono" />
                      </div>

                      {generatedDork && (
                        <div className="rounded-lg bg-muted p-4">
                          <label className="text-xs font-medium text-muted-foreground block mb-2">Generated query:</label>
                          <code className="text-sm font-mono break-all block mb-3">{generatedDork}</code>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={handleCopy} variant="outline" className="gap-1.5">
                              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                              {copied ? 'Copied!' : 'Copy'}
                            </Button>
                            <Button size="sm" asChild className="gap-1.5">
                              <a href={googleUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3.5 w-3.5" /> Search Google
                              </a>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="reference">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Google Search Operators</h3>
                  <div className="space-y-3">
                    {OPERATORS.map(op => (
                      <div key={op.op} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50">
                        <code className="text-sm font-mono font-bold text-primary whitespace-nowrap min-w-[100px]">{op.op}</code>
                        <div className="flex-1">
                          <p className="text-sm">{op.desc}</p>
                          <code className="text-xs text-muted-foreground font-mono">{op.example}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
