import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { SEOHead } from '@/components/SEOHead';

const Signup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const path = user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin';
      navigate(path, { replace: true });
    } else {
      navigate('/login', { replace: true, state: { defaultTab: 'create' } });
    }
  }, [user, navigate]);

  // Renders nothing for a visitor, but the prerenderer still writes this file.
  // Without a SEOHead, react-helmet emits an empty <title> and the shell's
  // fallback title is stripped, so /signup shipped with no title, description
  // or canonical. It is an auth redirect, so noindex is the honest answer.
  return (
    <SEOHead
      title="Create Your TekSure Account"
      description="Create a free TekSure account to save guides, track your progress, and ask the community a question."
      noindex
    />
  );
};

export default Signup;

