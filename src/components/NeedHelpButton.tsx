import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export function NeedHelpButton() {
  return (
    <Link
      to="/pricing"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      style={{
        backgroundColor: 'hsl(172 50% 40%)',
        color: 'white',
        minHeight: '48px',
      }}
    >
      <HelpCircle className="h-5 w-5" />
      <span className="font-semibold text-sm">Need Help?</span>
    </Link>
  );
}
