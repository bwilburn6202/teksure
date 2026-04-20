import { Navigate, useLocation } from 'react-router-dom';

export default function Book() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  search.set('mode', 'schedule');
  return <Navigate to={`/get-help?${search.toString()}`} replace />;
}
