import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Mail, Copy, CheckCircle2, Heart, Shield, UserPlus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const MAX_MEMBERS = 4;

interface Member { name: string; email: string; status: 'pending' | 'active'; added: string; }

export default function FamilySharing() {
  const { user } = useAuth();
  const [members, setMembers] = useState<Member[]>(() => {
    if (typeof window === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem('teksure-family-members') ?? '[]'); } catch { return []; }
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const inviteLink = `https://teksure.com/join?ref=${user?.id ?? 'demo'}&type=family`;

  function save(m: Member[]) { setMembers(m); localStorage.setItem('teksure-family-members', JSON.stringify(m)); }

  function addMember(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { toast.error('Please enter a name and email.'); return; }
    if (members.length >= MAX_MEMBERS) { toast.error('Maximum 4 family members reached.'); return; }
    if (members.some(m => m.email.toLowerCase() === email.toLowerCase())) { toast.error('That email is already in your family group.'); return; }
    const m: Member = { name: name.trim(), email: email.trim().toLowerCase(), status: 'pending', added: new Date().toLocaleDateString('en-US') };
    save([...members, m]);
    setName(''); setEmail('');
    toast.success(`Invite sent to ${name}! They'll receive an email with instructions.`);
  }

  function remove(i: number) { save(members.filter((_, idx) => idx !== i)); }

  function copyLink() {
    navigator.clipboard.writeText(inviteLink).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); });
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container max-w-lg py-20 text-center">
          <Shield className="h-12 w-12 mx-auto text-muted-foreground opacity-30 mb-4" />
          <h2 className="text-xl font-bold mb-2 text-primary">Sign in to manage family sharing</h2>
          <p className="text-muted-foreground mb-6">Create an account or log in to share TekSure access with your family members.</p>
          <div className="flex gap-3 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"><Link to="/login">Log in</Link></Button>
            <Button asChild variant="outline" className="rounded-xl"><Link to="/signup">Create account</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Family Tech Sharing — Share TekSure with Up to 4 Family Members"
        description="Share your TekSure access with up to 4 family members. Each person gets their own account, progress tracking, and separate login."
        path="/family-sharing"
      />
      <Navbar />
      <main className="flex-1 container max-w-2xl py-12">
        <div className="border-b border-border pb-10 mb-10">
          <div className="text-center">
            <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">Family Tech Sharing</h1>
            <p className="text-muted-foreground">Share your TekSure access with up to {MAX_MEMBERS} family members — each gets their own account and progress tracking.</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Users, title: 'Shared access', desc: `Up to ${MAX_MEMBERS} family members on one plan`, color: 'bg-blue-50 text-blue-600' },
            { icon: Heart, title: 'Individual progress', desc: 'Everyone tracks their own learning journey', color: 'bg-pink-50 text-pink-600' },
            { icon: Shield, title: 'Keep it safe', desc: 'Separate logins — full privacy for each person', color: 'bg-green-50 text-green-600' },
          ].map(b => (
            <Card key={b.title} className="rounded-2xl border border-border bg-card">
              <CardContent className="pt-4 pb-4 text-center">
                <div className={`w-10 h-10 rounded-full ${b.color} flex items-center justify-center mx-auto mb-2`}>
                  <b.icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-sm mb-1">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Invite link */}
        <Card className="rounded-2xl border border-border bg-card mb-6">
          <CardContent className="pt-5 pb-4">
            <h2 className="font-semibold mb-3 flex items-center gap-2 text-primary"><Mail className="h-4 w-4" /> Share invite link</h2>
            <div className="flex gap-2">
              <Input value={inviteLink} readOnly className="text-xs text-muted-foreground bg-muted rounded-xl" />
              <Button variant="outline" onClick={copyLink} className="shrink-0 gap-1.5 rounded-xl">
                {copied ? <><CheckCircle2 className="h-4 w-4 text-green-500" />Copied</> : <><Copy className="h-4 w-4" />Copy</>}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Share this link with family members. They'll create their own free account and be linked to your family group.</p>
          </CardContent>
        </Card>

        {/* Add member form */}
        <Card className="rounded-2xl border border-border bg-card mb-6">
          <CardContent className="pt-5 pb-5">
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-primary">
              <UserPlus className="h-4 w-4" /> Invite by email
              <Badge variant="secondary" className="ml-auto">{members.length}/{MAX_MEMBERS} members</Badge>
            </h2>
            {members.length < MAX_MEMBERS ? (
              <form onSubmit={addMember} className="grid sm:grid-cols-2 gap-3">
                <div>
                  <Label className="mb-1.5 block text-sm">Their name</Label>
                  <Input placeholder="e.g. Mom" value={name} onChange={e => setName(e.target.value)} className="rounded-xl" />
                </div>
                <div>
                  <Label className="mb-1.5 block text-sm">Their email</Label>
                  <Input type="email" placeholder="mom@example.com" value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl" />
                </div>
                <Button type="submit" className="sm:col-span-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl gap-2">
                  <Mail className="h-4 w-4" /> Send Invite
                </Button>
              </form>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-3">Family group is full ({MAX_MEMBERS}/{MAX_MEMBERS}). Remove a member to add someone new.</p>
            )}
          </CardContent>
        </Card>

        {/* Members list */}
        {members.length > 0 && (
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="pt-5 pb-4">
              <h2 className="font-semibold mb-4 text-primary">Your family group</h2>
              <div className="space-y-3">
                {members.map((m, i) => (
                  <div key={m.email} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-lg font-bold text-primary shrink-0">
                      {m.name[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{m.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{m.email}</p>
                    </div>
                    <Badge variant={m.status === 'active' ? 'secondary' : 'outline'} className="text-xs shrink-0">
                      {m.status === 'active' ? '✓ Active' : 'Pending'}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0 rounded-lg" onClick={() => remove(i)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
}
