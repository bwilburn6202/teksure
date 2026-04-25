import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * Standard public layout — every public page gets Navbar + content + Footer
 * from this single component. Pages do NOT need to import or render Navbar/Footer.
 */
export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
