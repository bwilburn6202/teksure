import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Mail, Copy, CheckCircle2, Heart, Shield, UserPlus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useAuthContext } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const MAX_MEMBERS = 4;

interface Member { name: string; email: string; status: 'pending' | 'active'; added: string; }

export default function FamilySharing() {
  const { user } = useAuthContext();
  const [members, setMembers] = useState<Member[]>(() => {
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
    const m: Member = { name: name.trim(), email: email.trim().toLowerCase(), status: 'pending', added: new Date().toLocaleDateString('en-GB') };
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
          <h2 className="text-xl font-bold mb-2">Sign in to manage family sharing</h2>
          <p className="text-muted-foreground mb-6">Create an account or log in to share TekSure access with your family members.</p>
          <div className="flex gap-3 justify-center">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90"><Link to="/login">Log in</Link></Button>
            <Button asChild variant="outline"><Link to="/signup">Create account</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-2xl py-12">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
          <h1 className="text-3xl font-bold mb-2">Family Tech Sharing</h1>
          <p className="text-muted-foreground">Share your TekSure access with up to {MAX_MEMBERS} family members — each gets their own account and progress tracking.</p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Users, title: 'Shared access', desc: `Up to ${MAX_MEMBERS} family members on one plan`, colour: 'bg-blue-50 text-blue-600' },
            { icon: Heart, title: 'Individual progress', desc: 'Everyone tracks their own learning journey', colour: 'bg-pink-50 text-pink-600' },
            { icon: Shield, title: 'Keep it safe', desc: 'Separate logins — full privacy for each person', colour: 'bg-green-50 text-green-600' },
          ].map(b => (
            <Card key={b.title}>
              <CardContent className="pt-4 pb-4 text-center">
                <div className={`w-10 h-10 rounded-full ${b.colour} flex items-center justify-center mx-auto mb-2`}>
                  <b.icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-sm mb-1">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Invite link */}
        <Card className="mb-6">
          <CardContent className="pt-5 pb-4">
            <h2 className="font-semibold mb-3 flex items-center gap-2"><Mail className="h-4 w-4" /> Share invite link</h2>
            <div className="flex gap-2">
              <Input value={inviteLink} readOnly className="text-xs text-muted-foreground bg-muted" />
              <Button variant="outline" onClick={copyLink} className="shrink-0 gap-1.5">
                {copied ? <><CheckCircle2 className="h-4 w-4 text-green-500" />Copied</> : <><Copy className="h-4 w-4" />Copy</>}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Share this link with family members. They'll create their own free account and be linked to your family group.</p>
          </CardContent>
        </Card>

        {/* Add member form */}
        <Card className="mb-6">
          <CardContent className="pt-5 pb-5">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <UserPlus className="h-4 w-4" /> Invite by email
              <Badge variant="secondary" className="ml-auto">{members.length}/{MAX_MEMBERS} members</Badge>
            </h2>
            {members.length < MAX_MEMBERS ? (
              <form onSubmit={addMember} className="grid sm:grid-cols-2 gap-3">
                <div>
                  <Label className="mb-1.5 block text-sm">Their name</Label>
                  <Input placeholder="e.g. Mum" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <Label className="mb-1.5 block text-sm">Their email</Label>
                  <Input type="email" placeholder="mum@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <Button type="submit" className="sm:col-span-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
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
          <Card>
            <CardContent className="pt-5 pb-4">
              <h2 className="font-semibold mb-4">Your family group</h2>
              <div className="space-y-3">
                {members.map((m, i) => (
                  <motion.div key={m.email} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center text-lg font-bold text-secondary shrink-0">
                      {m.name[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{m.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{m.email}</p>
                    </div>
                    <Badge variant={m.status === 'active' ? 'secondary' : 'outline'} className="text-xs shrink-0">
                      {m.status === 'active' ? '✓ Active' : 'Pending'}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0" onClick={() => remove(i)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
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
