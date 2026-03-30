import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
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
  const { user, login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const message = (location.state as { message?: string })?.message;
  const from = (location.state as { from?: string })?.from || '/';

  useEffect(() => {
    if (user) {
      const path = user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin';
      navigate(from !== '/' ? from : path, { replace: true });
    }
  }, [user, navigate, from]);

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-lg bg-destructive/10 p-4 text-sm text-destructive"
                  >
                    {error}
                  </motion.div>
                )}

                <Tabs defaultValue="signin">
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
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
