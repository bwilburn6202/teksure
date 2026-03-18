import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Signup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const path = user.role === 'customer' ? '/customer' : user.role === 'tech' ? '/tech' : '/admin';
      navigate(path, { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  return null;
};

export default Signup;
