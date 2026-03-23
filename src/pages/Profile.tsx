import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Shield, Save, Loader2, CheckCircle, ArrowRight, MessageSquare, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const roleColors: Record<string, string> = {
  customer: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  tech: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  admin: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
};

const roleLabels: Record<string, string> = {
  customer: 'Customer',
  tech: 'Tech Support',
  admin: 'Admin',
};

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSaved(false);

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ full_name: fullName.trim() })
      .eq('id', user.id);

    setSaving(false);

    if (updateError) {
      setError('Could not save changes. Please try again.');
      return;
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const initials = fullName
    ? fullName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : (user.email?.[0]?.toUpperCase() || '?');

  return (
    <>
      <SEOHead
        title="My Profile — TekSure"
        description="Manage your TekSure account details."
        path="/profile"
      />
      <Navbar />
      <main className="container max-w-xl py-16 min-h-[60vh]">

        <div className="flex items-center gap-3 mb-8">
          <User className="h-7 w-7 text-secondary" />
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>

        {/* Avatar + summary */}
        <div className="flex items-center gap-5 mb-8">
          <div className="h-20 w-20 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold text-secondary">{initials}</span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-lg truncate">{fullName || 'No name set'}</p>
            <p className="text-sm text-muted-foreground truncate">{user.email}</p>
            {user.role && (
              <Badge className={`mt-1.5 text-xs font-normal ${roleColors[user.role] || ''}`}>
                {roleLabels[user.role] || user.role}
              </Badge>
            )}
          </div>
        </div>

        {/* Edit details */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Account Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">

              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Your name"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email Address
                </Label>
                <Input
                  value={user.email}
                  disabled
                  className="h-11 opacity-60 cursor-not-allowed"
                />
                <p className="text-xs text-muted-foreground">Email address cannot be changed here.</p>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  Account Type
                </Label>
                <Input
                  value={roleLabels[user.role] || user.role}
                  disabled
                  className="h-11 opacity-60 cursor-not-allowed"
                />
              </div>

              {error && (
                <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={saving} className="w-full h-11 gap-2">
                {saving ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Saving...</>
                ) : saved ? (
                  <><CheckCircle className="h-4 w-4" /> Saved!</>
                ) : (
                  <><Save className="h-4 w-4" /> Save Changes</>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick links */}
        <Card>
          <CardContent className="pt-5 pb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Quick Links
            </p>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-between h-11"
                onClick={() => navigate('/my-requests')}
              >
                <span className="flex items-center gap-2 text-sm">
                  <MessageSquare className="h-4 w-4 text-secondary" />
                  My Help Requests
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-between h-11"
                onClick={() => navigate('/guides')}
              >
                <span className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-secondary" />
                  Browse Free Guides
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-between h-11"
                onClick={() => navigate('/get-help')}
              >
                <span className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-secondary" />
                  Get Tech Help
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </CardContent>
        </Card>

      </main>
      <Footer />
    </>
  );
}
