import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, Mail, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import type { UserRole } from '@/types/database';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupRole, setSignupRole] = useState<UserRole>('customer');
  const [error, setError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetStatus, setResetStatus] = useState<'idle' | 'loading' | 'sent'>('idle');
  const [oauthLoading, setOauthLoading] = useState<'google' | 'apple' | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordUpdateStatus, setPasswordUpdateStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { user, login, signup, loginWithProvider, isLoading, passwordRecoveryMode, clearPasswordRecoveryMode } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const message = (location.state as { message?: string })?.message;
  const from = (location.state as { from?: string })?.from || '/';
  const defaultTab = (location.state as { defaultTab?: string })?.defaultTab || 'signin';

  // Don't redirect while the user is in the middle of setting a new password
  useEffect(() => {
    if (user && !passwordRecoveryMode) {
      const path = user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin';
      navigate(from !== '/' ? from : path, { replace: true });
    }
  }, [user, navigate, from, passwordRecoveryMode]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await login(loginEmail, loginPassword);
    if (result.error) setError(result.error);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await signup(signupEmail, signupPassword, signupRole, signupName);
    if (result.error) {
      setError(result.error);
    } else if (result.needsConfirmation) {
      setShowConfirmation(true);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail.trim()) return;
    setResetStatus('loading');
    setError('');
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(resetEmail.trim(), {
      redirectTo: `${window.location.origin}/login`,
    });
    if (resetError) {
      setError(resetError.message);
      setResetStatus('idle');
    } else {
      setResetStatus('sent');
    }
  };

  const handleSetNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setPasswordUpdateStatus('loading');
    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
    if (updateError) {
      setError(updateError.message);
      setPasswordUpdateStatus('idle');
    } else {
      setPasswordUpdateStatus('success');
      clearPasswordRecoveryMode();
    }
  };

  // ── Password Recovery Screen ─────────────────────────────────────────────────
  // Shown when user arrives via a password-reset email link.
  // Supabase fires PASSWORD_RECOVERY → AuthContext sets passwordRecoveryMode = true.
  if (passwordRecoveryMode) {
    return (
      <>
        <SEOHead title="Set New Password — TekSure" description="Create a new password for your TekSure account" path="/login" />
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 max-w-sm py-20 flex items-center justify-center">
            <div className="w-full">
              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="p-8 text-center">
                  {passwordUpdateStatus === 'success' ? (
                    <>
                      <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h2 className="text-2xl font-bold tracking-tight mb-2">Password updated!</h2>
                      <p className="text-muted-foreground mb-6">Your new password has been saved. You're still signed in.</p>
                      <Button
                        className="w-full"
                        onClick={() => {
                          const path = user?.role === 'tech' ? '/tech' : user?.role === 'admin' ? '/admin' : '/customer';
                          navigate(path, { replace: true });
                        }}
                      >
                        Go to my dashboard
                      </Button>
                    </>
                  ) : (
                    <>
                      <KeyRound className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h2 className="text-2xl font-bold tracking-tight mb-2">Set your new password</h2>
                      <p className="text-muted-foreground mb-6">Choose a strong password — at least 6 characters.</p>
                      {error && (
                        <div className="mb-4 rounded-lg bg-destructive/10 p-4 text-sm text-destructive text-left">
                          {error}
                        </div>
                      )}
                      <form onSubmit={handleSetNewPassword} className="space-y-5 text-left">
                        <div className="space-y-2">
                          <Label htmlFor="new-password" className="text-sm font-medium">New password</Label>
                          <Input
                            id="new-password"
                            type="password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            className="h-11 rounded-lg border border-border bg-background"
                            required
                            minLength={6}
                            autoFocus
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password" className="text-sm font-medium">Confirm new password</Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="h-11 rounded-lg border border-border bg-background"
                            required
                            minLength={6}
                          />
                        </div>
                        <Button type="submit" className="w-full h-11" disabled={passwordUpdateStatus === 'loading'}>
                          {passwordUpdateStatus === 'loading' ? 'Saving...' : 'Save new password'}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (showResetForm) {
    return (
      <>
        <SEOHead title="Reset Password — TekSure" description="Reset your TekSure account password" path="/login" />
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 max-w-sm py-20 flex items-center justify-center">
            <div className="w-full">
              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="p-8 text-center">
                  {resetStatus === 'sent' ? (
                    <>
                      <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h2 className="text-2xl font-bold tracking-tight mb-2">Check your email</h2>
                      <p className="text-muted-foreground mb-6">
                        We sent a password reset link to <strong className="text-foreground">{resetEmail}</strong>. Click the link in your email to set a new password.
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">Don't see it? Check your spam folder.</p>
                      <Button onClick={() => { setShowResetForm(false); setResetStatus('idle'); }} className="w-full">
                        Back to Sign In
                      </Button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold tracking-tight mb-2">Forgot your password?</h2>
                      <p className="text-muted-foreground mb-6">
                        No worries — enter your email and we'll send you a link to reset it.
                      </p>
                      {error && (
                        <div className="mb-4 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                          {error}
                        </div>
                      )}
                      <form onSubmit={handleResetPassword} className="space-y-5 text-left">
                        <div className="space-y-2">
                          <Label htmlFor="reset-email" className="text-sm font-medium">Email address</Label>
                          <Input
                            id="reset-email"
                            type="email"
                            placeholder="you@example.com"
                            value={resetEmail}
                            onChange={e => setResetEmail(e.target.value)}
                            className="h-11 rounded-lg border border-border bg-background"
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full h-11" disabled={resetStatus === 'loading'}>
                          {resetStatus === 'loading' ? 'Sending...' : 'Send Reset Link'}
                        </Button>
                      </form>
                      <button
                        onClick={() => { setShowResetForm(false); setError(''); }}
                        className="mt-4 text-sm text-primary hover:underline"
                      >
                        Back to Sign In
                      </button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (showConfirmation) {
    return (
      <>
        <SEOHead
          title="Verify Your Email — TekSure"
          description="Check your email to verify your TekSure account"
          path="/login"
        />
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 max-w-sm py-20 flex items-center justify-center">
            <div
              className="w-full"
            >
              <Card className="rounded-2xl border border-border bg-card">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold tracking-tight mb-2">Check your email</h2>
                  <p className="text-muted-foreground mb-6">
                    We sent a confirmation link to{' '}
                    <strong className="text-foreground">{signupEmail}</strong>. Click the link in your email to activate your account.
                  </p>
                  <Button
                    onClick={() => setShowConfirmation(false)}
                    className="w-full"
                  >
                    Back to Sign In
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Sign In — TekSure"
        description="Sign in to your TekSure account or create a free account"
        path="/login"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 max-w-sm py-20 flex items-center justify-center">
          <div
            className="w-full"
          >
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Welcome to TekSure</h1>
              {message ? (
                <p className="text-destructive font-medium">{message}</p>
              ) : (
                <p className="text-muted-foreground">Sign in or create a free account</p>
              )}
            </div>

            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="p-8">
                {error && (
                  <div
                    className="mb-6 rounded-lg bg-destructive/10 p-4 text-sm text-destructive"
                  >
                    {error}
                  </div>
                )}

                {/* Social sign-in buttons */}
                <div className="space-y-3 mb-6">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 rounded-lg border border-border bg-background hover:bg-muted gap-3 font-medium"
                    disabled={oauthLoading !== null}
                    onClick={async () => {
                      setOauthLoading('google');
                      setError('');
                      const result = await loginWithProvider('google');
                      if (result.error) { setError(result.error); setOauthLoading(null); }
                    }}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    {oauthLoading === 'google' ? 'Connecting...' : 'Continue with Google'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 rounded-lg border border-border bg-background hover:bg-muted gap-3 font-medium"
                    disabled={oauthLoading !== null}
                    onClick={async () => {
                      setOauthLoading('apple');
                      setError('');
                      const result = await loginWithProvider('apple');
                      if (result.error) { setError(result.error); setOauthLoading(null); }
                    }}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    {oauthLoading === 'apple' ? 'Connecting...' : 'Continue with Apple'}
                  </Button>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">or continue with email</span>
                  </div>
                </div>

                <Tabs defaultValue={defaultTab}>
                  <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted/50">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="create">Create Account</TabsTrigger>
                  </TabsList>

                  <TabsContent value="signin">
                    <form onSubmit={handleLogin} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="login-email" className="text-sm font-medium">Email</Label>
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="you@example.com"
                          value={loginEmail}
                          onChange={e => setLoginEmail(e.target.value)}
                          className="h-11 rounded-lg border border-border bg-background"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="login-password" className="text-sm font-medium">Password</Label>
                        <Input
                          id="login-password"
                          type="password"
                          value={loginPassword}
                          onChange={e => setLoginPassword(e.target.value)}
                          className="h-11 rounded-lg border border-border bg-background"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full h-11" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign In'}
                      </Button>
                      <div className="text-center mt-3">
                        <button
                          type="button"
                          onClick={() => { setShowResetForm(true); setResetEmail(loginEmail); setError(''); }}
                          className="text-sm text-primary hover:underline"
                        >
                          Forgot your password?
                        </button>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="create">
                    <form onSubmit={handleSignup} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name" className="text-sm font-medium">Full Name</Label>
                        <Input
                          id="signup-name"
                          value={signupName}
                          onChange={e => setSignupName(e.target.value)}
                          className="h-11 rounded-lg border border-border bg-background"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-sm font-medium">Email</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          value={signupEmail}
                          onChange={e => setSignupEmail(e.target.value)}
                          className="h-11 rounded-lg border border-border bg-background"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-sm font-medium">Password</Label>
                        <Input
                          id="signup-password"
                          type="password"
                          value={signupPassword}
                          onChange={e => setSignupPassword(e.target.value)}
                          className="h-11 rounded-lg border border-border bg-background"
                          required
                          minLength={6}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">I am a...</Label>
                        <Select value={signupRole} onValueChange={(v) => setSignupRole(v as UserRole)}>
                          <SelectTrigger className="h-11 rounded-lg border border-border bg-background">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="customer">Customer — I need tech help</SelectItem>
                            <SelectItem value="tech">Technician — I provide tech support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" className="w-full h-11" disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Create Account'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
