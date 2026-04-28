import { useEffect, useState } from 'react';
import { Volume2, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ListenButtonProps {
  text: string;
  label?: string;
  className?: string;
}

/**
 * Small "Listen" button that reads a passage aloud using the browser's
 * built-in speech synthesis. Works offline, no server, no privacy concerns.
 */
export function ListenButton({ text, label = 'Listen', className }: ListenButtonProps) {
  const [speaking, setSpeaking] = useState(false);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => () => { if (supported) window.speechSynthesis.cancel(); }, [supported]);

  if (!supported) return null;

  const toggle = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  return (
    <Button variant="outline" size="sm" onClick={toggle} className={`gap-2 ${className ?? ''}`}>
      {speaking ? <><Square className="h-4 w-4" /> Stop</> : <><Volume2 className="h-4 w-4" /> {label}</>}
    </Button>
  );
}
