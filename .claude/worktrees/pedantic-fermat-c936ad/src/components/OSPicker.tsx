import { Monitor, Laptop, Smartphone, Tablet } from 'lucide-react';

export type OSType = 'windows' | 'macos' | 'ios' | 'android';

interface OSOption {
  id: string;           // unique UI id
  osType: OSType;       // maps to DB enum
  label: string;
  subLabel: string;
  Icon: React.ElementType;
}

const OS_OPTIONS: OSOption[] = [
  { id: 'windows',        osType: 'windows', label: 'Windows PC',      subLabel: 'Desktop or laptop',   Icon: Monitor    },
  { id: 'macos',          osType: 'macos',   label: 'Mac',             subLabel: 'MacBook or iMac',     Icon: Laptop     },
  { id: 'iphone',         osType: 'ios',     label: 'iPhone',          subLabel: 'Any iPhone model',    Icon: Smartphone },
  { id: 'ipad',           osType: 'ios',     label: 'iPad',            subLabel: 'Any iPad model',      Icon: Tablet     },
  { id: 'android-phone',  osType: 'android', label: 'Android Phone',   subLabel: 'Samsung, Google, etc.', Icon: Smartphone },
  { id: 'android-tablet', osType: 'android', label: 'Android Tablet',  subLabel: 'Samsung Tab, etc.',   Icon: Tablet     },
];

interface OSPickerProps {
  onSelect: (os: OSType) => void;
  selected?: OSType | null;
}

export function OSPicker({ onSelect, selected }: OSPickerProps) {
  return (
    <div>
      <p className="text-base font-semibold text-foreground mb-1">
        What device are you using?
      </p>
      <p className="text-sm text-muted-foreground mb-4">
        We'll show you the right video for your device.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {OS_OPTIONS.map(opt => {
          const isActive = selected === opt.osType;
          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.osType)}
              aria-pressed={isActive}
              className={[
                'flex flex-col items-center justify-center gap-2 rounded-xl border-2 px-4 py-5',
                'min-h-[100px] text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                isActive
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border bg-muted/40 hover:border-primary/50 hover:bg-muted/70',
              ].join(' ')}
            >
              <opt.Icon
                className={`h-7 w-7 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                aria-hidden="true"
              />
              <span className={`text-sm font-semibold leading-tight ${isActive ? 'text-primary' : 'text-foreground'}`}>
                {opt.label}
              </span>
              <span className="text-xs text-muted-foreground leading-tight">{opt.subLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
