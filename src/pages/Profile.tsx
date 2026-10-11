import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const roleLabels: Record<string, string> = {
  customer: 'Customer',
  tech: 'Tech Support',
  admin: 'Admin',
};

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('saving');
    const { error } = await supabase.from('profiles').update({ full_name: fullName.trim() }).eq('id', user.id);
    setStatus(error ? 'error' : 'saved');
  };

  const field = 'mt-2 h-12 w-full rounded-md border-2 border-input bg-background px-4 text-lg';

  return (
    <>
      <SEOHead title="My Profile — TekSure" description="Manage your TekSure account details." path="/profile" noindex />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-xl px-4 pt-10 min-h-[60vh] outline-none">
        <h1 className="text-4xl font-bold">My profile</h1>

        <form onSubmit={handleSave} className="mt-8 space-y-6">
          <div>
            <label htmlFor="fullName" className="text-lg font-semibold">Full name</label>
            <input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className={field} />
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-semibold">Email address</label>
            <input id="email" value={user.email} disabled className={`${field} opacity-70`} />
            <p className="mt-1 text-base text-muted-foreground">Your email address cannot be changed here.</p>
          </div>
          <p className="text-lg">Account type: {roleLabels[user.role] || user.role}</p>

          {status === 'error' && <p role="alert" className="text-lg text-destructive">Could not save changes. Please try again.</p>}
          {status === 'saved' && <p role="status" className="text-lg">Saved.</p>}

          <button
            type="submit"
            disabled={status === 'saving'}
            className="min-h-[48px] rounded-md bg-primary px-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {status === 'saving' ? 'Saving…' : 'Save changes'}
          </button>
        </form>

        <ul className="mt-10 space-y-3 text-lg">
          <li><Link to="/my-requests" className="text-primary underline underline-offset-4">My help requests</Link></li>
          <li><Link to="/guides" className="text-primary underline underline-offset-4">Browse guides</Link></li>
          <li>
            <button
              onClick={async () => {
                await logout();
                navigate('/');
              }}
              className="text-primary underline underline-offset-4"
            >
              Sign out
            </button>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
