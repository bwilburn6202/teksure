import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/layout/Navbar';
import type { UserRole } from '@/types/database';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupRole, setSignupRole] = useState<UserRole>('customer');
  const { user, login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const message = (location.state as { message?: string })?.message;
  const from = (location.state as { from?: string })?.from || '/';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(loginEmail, loginPassword);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(signupEmail, signupPassword, signupRole, signupName);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container flex items-center justify-center py-20">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
            <CardTitle>Welcome to TekSure</CardTitle>
            {message ? (
              <CardDescription className="text-destructive font-medium">{message}</CardDescription>
            ) : (
              <CardDescription>Sign in or create a free account</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="create">Create Account</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" type="email" placeholder="you@example.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input id="login-password" type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Demo: use <span className="font-mono text-foreground">tech@</span> or <span className="font-mono text-foreground">admin@</span> in email to switch roles
                </p>
              </TabsContent>

              <TabsContent value="create">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input id="signup-name" value={signupName} onChange={e => setSignupName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label>I am a...</Label>
                    <Select value={signupRole} onValueChange={(v) => setSignupRole(v as UserRole)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer">Customer — I need tech help</SelectItem>
                        <SelectItem value="tech">Technician — I provide tech support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
