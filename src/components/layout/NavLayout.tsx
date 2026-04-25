import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

/**
 * Nav-only layout — used for full-screen pages that supply their own footer
 * or need no footer (e.g. the TekBrain chat interface).
 */
export function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
