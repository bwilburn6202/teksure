import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Copy, Download, Sparkles, Workflow, Wrench } from 'lucide-react';

const sourceOptions = [
  'Web articles',
  'Research papers',
  'GitHub repositories',
  'Datasets',
  'Images & screenshots',
  'Internal notes',
];

const outputOptions = ['Markdown answer docs', 'Marp slide decks', 'CSV summaries', 'Matplotlib/PNG charts'];

function toggleItem(items: string[], value: string) {
  return items.includes(value) ? items.filter((item) => item !== value) : [...items, value];
}

export default function LlmKnowledgeBase() {
  const [projectName, setProjectName] = useState('TekSure Research OS');
  const [domain, setDomain] = useState('Consumer tech support, digital safety, and learning');
  const [selectedSources, setSelectedSources] = useState<string[]>(['Web articles', 'Research papers', 'GitHub repositories']);
  const [selectedOutputs, setSelectedOutputs] = useState<string[]>(['Markdown answer docs', 'Marp slide decks']);
  const [targetUsers, setTargetUsers] = useState('Content team, support specialists, and AI agents');

  const blueprint = useMemo(() => {
    const sourceList = selectedSources.length > 0 ? selectedSources.join(', ') : 'No sources selected yet';
    const outputList = selectedOutputs.length > 0 ? selectedOutputs.join(', ') : 'No outputs selected yet';

    return `# ${projectName}\n\n## 1) Product Goal\nBuild an LLM-powered knowledge base system for ${domain}.\nPrimary users: ${targetUsers}.\n\n## 2) Source Ingest\n- Enabled sources: ${sourceList}.\n- Ingest into /raw with metadata (source URL, author, date, tags, trust score).\n- Store local copies of key images for grounded visual references.\n\n## 3) Wiki Compilation\n- Compile /raw into /wiki markdown pages.\n- Auto-generate: summaries, backlinks, topic indexes, and concept pages.\n- Keep a compact registry file so agents can quickly locate relevant pages.\n\n## 4) Agentic Q&A + Outputs\n- Use the wiki as the operating context for deep research queries.\n- Preferred outputs: ${outputList}.\n- Save generated outputs back into /wiki/outputs so each query improves future context.\n\n## 5) Health Checks\n- Detect missing citations and stale facts.\n- Suggest new candidate pages from unlinked concepts.\n- Run scheduled integrity checks and produce a weekly report.\n\n## 6) Delivery Plan\n### Week 1-2\n- Build source ingestion adapters and raw metadata schema.\n- Implement initial wiki compiler with backlinks + taxonomy.\n\n### Week 3-4\n- Add CLI tools for Q&A, report generation, and slide export.\n- Add knowledge linting for consistency, freshness, and coverage.\n\n### Week 5+\n- Add governance workflow (approve/reject AI edits).\n- Track trust + drift metrics by topic.\n`;
  }, [domain, projectName, selectedOutputs, selectedSources, targetUsers]);

  const healthChecks = [
    `Coverage: ${selectedSources.length}/6 ingest channels selected`,
    selectedOutputs.length > 1 ? 'Output strategy: diversified' : 'Output strategy: add at least one secondary format',
    targetUsers.trim().length > 0 ? 'Personas: defined' : 'Personas: missing',
    domain.trim().length > 0 ? 'Domain scope: defined' : 'Domain scope: missing',
  ];

  const copyBlueprint = async () => {
    await navigator.clipboard.writeText(blueprint);
  };

  const downloadBlueprint = () => {
    const blob = new Blob([blueprint], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${projectName.toLowerCase().replace(/\s+/g, '-')}-blueprint.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="LLM Knowledge Base Studio | TekSure"
        description="Configure and generate an implementation-ready LLM knowledge base blueprint for TekSure."
        path="/llm-knowledge-base"
      />
      <Navbar />

      <main className="flex-1 container py-10 md:py-14 space-y-8">
        <header className="max-w-3xl">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">Implementation Studio</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">LLM Knowledge Base Builder</h1>
          <p className="text-muted-foreground leading-relaxed">
            This is now an interactive implementation workspace: set your inputs, generate a concrete markdown blueprint,
            and export it directly into your repo/Obsidian workflow.
          </p>
        </header>

        <section className="grid lg:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary"><Workflow className="h-5 w-5" /> Project configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project name</label>
                <Input value={projectName} onChange={(e) => setProjectName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Domain scope</label>
                <Input value={domain} onChange={(e) => setDomain(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Primary users</label>
                <Input value={targetUsers} onChange={(e) => setTargetUsers(e.target.value)} />
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Enabled source channels</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {sourceOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedSources((current) => toggleItem(current, option))}
                      className={`text-left rounded-xl border px-3 py-2 text-sm transition-colors ${
                        selectedSources.includes(option) ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:bg-accent'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Preferred output formats</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {outputOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedOutputs((current) => toggleItem(current, option))}
                      className={`text-left rounded-xl border px-3 py-2 text-sm transition-colors ${
                        selectedOutputs.includes(option) ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:bg-accent'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary"><Wrench className="h-5 w-5" /> Generated markdown blueprint</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea value={blueprint} readOnly rows={20} className="font-mono text-xs" />
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={copyBlueprint}><Copy className="h-4 w-4 mr-1" /> Copy</Button>
                <Button onClick={downloadBlueprint}><Download className="h-4 w-4 mr-1" /> Download .md</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary"><CheckCircle2 className="h-5 w-5" /> Health-check preview</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {healthChecks.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-primary text-primary-foreground border-primary/40">
            <CardContent className="py-8 text-center">
              <Sparkles className="h-8 w-8 mx-auto mb-3" />
              <h2 className="text-2xl font-semibold mb-2">Next step: wire this into automation</h2>
              <p className="text-primary-foreground/90 mb-5">
                Use this page as the product-facing config layer, then attach backend jobs for ingest, compile, and scheduled linting.
              </p>
              <Button asChild variant="secondary">
                <Link to="/get-help">Start implementation sprint</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
