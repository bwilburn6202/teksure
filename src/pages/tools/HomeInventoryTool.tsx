import { useState, useMemo } from 'react';
import { Home, Plus, Trash2, Printer, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

type RoomKey = 'living-room' | 'bedroom-1' | 'bedroom-2' | 'kitchen' | 'bathroom' | 'office' | 'garage' | 'outdoor' | 'other';
type ItemCategory = 'furniture' | 'electronics' | 'appliance' | 'jewelry' | 'art' | 'clothing' | 'tools' | 'other';

interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  value: string;
  notes: string;
}

const ROOMS: { key: RoomKey; label: string; emoji: string }[] = [
  { key: 'living-room', label: 'Living Room', emoji: '🛋️' },
  { key: 'bedroom-1', label: 'Master Bedroom', emoji: '🛏️' },
  { key: 'bedroom-2', label: 'Second Bedroom', emoji: '🛏️' },
  { key: 'kitchen', label: 'Kitchen', emoji: '🍳' },
  { key: 'bathroom', label: 'Bathroom', emoji: '🚿' },
  { key: 'office', label: 'Home Office', emoji: '💻' },
  { key: 'garage', label: 'Garage / Storage', emoji: '🔧' },
  { key: 'outdoor', label: 'Outdoor / Patio', emoji: '🌿' },
  { key: 'other', label: 'Other / Whole House', emoji: '📦' },
];

const CATEGORIES: { key: ItemCategory; label: string }[] = [
  { key: 'furniture', label: 'Furniture' },
  { key: 'electronics', label: 'Electronics' },
  { key: 'appliance', label: 'Appliance' },
  { key: 'jewelry', label: 'Jewelry / Valuables' },
  { key: 'art', label: 'Art / Collectibles' },
  { key: 'clothing', label: 'Clothing / Accessories' },
  { key: 'tools', label: 'Tools / Equipment' },
  { key: 'other', label: 'Other' },
];

function newItem(): Item {
  return { id: Math.random().toString(36).slice(2), name: '', category: 'furniture', value: '', notes: '' };
}

function fmt(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function HomeInventoryTool() {
  const [rooms, setRooms] = useState<Record<RoomKey, Item[]>>(() => {
    const init = {} as Record<RoomKey, Item[]>;
    ROOMS.forEach(r => { init[r.key] = []; });
    return init;
  });
  const [activeRoom, setActiveRoom] = useState<RoomKey>('living-room');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const addItem = (room: RoomKey) => {
    setRooms(prev => ({ ...prev, [room]: [...prev[room], newItem()] }));
  };

  const updateItem = (room: RoomKey, id: string, field: keyof Item, value: string) => {
    setRooms(prev => ({
      ...prev,
      [room]: prev[room].map(item => item.id === id ? { ...item, [field]: value } : item),
    }));
  };

  const removeItem = (room: RoomKey, id: string) => {
    setRooms(prev => ({ ...prev, [room]: prev[room].filter(item => item.id !== id) }));
  };

  const roomTotal = (room: RoomKey) =>
    rooms[room].reduce((s, item) => s + (parseFloat(item.value) || 0), 0);

  const grandTotal = useMemo(() =>
    ROOMS.reduce((s, r) => s + roomTotal(r.key), 0),
    [rooms]
  );

  const totalItems = useMemo(() =>
    ROOMS.reduce((s, r) => s + rooms[r.key].length, 0),
    [rooms]
  );

  const resetAll = () => {
    if (window.confirm('Clear all items and start over?')) {
      const init = {} as Record<RoomKey, Item[]>;
      ROOMS.forEach(r => { init[r.key] = []; });
      setRooms(init);
    }
  };

  const activeItems = rooms[activeRoom];

  return (
    <>
      <SEOHead
        title="Home Inventory Tool — TekSure"
        description="Document your belongings room by room for insurance purposes. Add items, estimate values, and print a summary to keep on file."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 print:bg-white">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6 print:mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 mb-4 print:hidden">
              <Home className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Home Inventory Tool</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              List your belongings room by room so you have a record for your insurance company if anything is ever lost, stolen, or damaged.
            </p>
          </div>

          {/* Summary bar */}
          {totalItems > 0 && (
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">Total items documented</p>
                <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">Estimated total value</p>
                <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">{fmt(grandTotal)}</p>
              </div>
            </div>
          )}

          {/* Room tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4 print:hidden">
            {ROOMS.map(room => {
              const count = rooms[room.key].length;
              return (
                <button
                  key={room.key}
                  onClick={() => setActiveRoom(room.key)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeRoom === room.key
                      ? 'bg-amber-600 text-white'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400'
                  }`}
                >
                  <span>{room.emoji}</span>
                  <span>{room.label}</span>
                  {count > 0 && (
                    <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold ${
                      activeRoom === room.key ? 'bg-amber-500 text-white' : 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300'
                    }`}>{count}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active room editor */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 mb-4 print:hidden">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                {ROOMS.find(r => r.key === activeRoom)?.emoji}{' '}
                {ROOMS.find(r => r.key === activeRoom)?.label}
              </h2>
              {roomTotal(activeRoom) > 0 && (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Room total: <span className="text-gray-900 dark:text-gray-100 font-bold">{fmt(roomTotal(activeRoom))}</span>
                </span>
              )}
            </div>

            {activeItems.length === 0 && (
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">No items yet. Click the button below to add one.</p>
            )}

            <div className="space-y-3">
              {activeItems.map((item, idx) => (
                <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 w-5 text-center">{idx + 1}</span>
                    <input
                      type="text"
                      value={item.name}
                      onChange={e => updateItem(activeRoom, item.id, 'name', e.target.value)}
                      placeholder="Item name (e.g. Living room sofa)"
                      className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <button
                      onClick={() => removeItem(activeRoom, item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex gap-2 pl-7">
                    <select
                      value={item.category}
                      onChange={e => updateItem(activeRoom, item.id, 'category', e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {CATEGORIES.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
                    </select>
                    <div className="relative w-32">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        value={item.value}
                        onChange={e => updateItem(activeRoom, item.id, 'value', e.target.value)}
                        placeholder="Value"
                        className="w-full pl-6 pr-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm text-right focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>
                  <div className="pl-7">
                    <input
                      type="text"
                      value={item.notes}
                      onChange={e => updateItem(activeRoom, item.id, 'notes', e.target.value)}
                      placeholder="Notes — brand, model, serial number, color (optional)"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => addItem(activeRoom)}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add item to {ROOMS.find(r => r.key === activeRoom)?.label}
            </button>
          </div>

          {/* Print summary — shown always, styled for print */}
          {totalItems > 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 mb-4">
              <button
                onClick={() => setCollapsed(p => ({ ...p, summary: !p.summary }))}
                className="w-full flex items-center justify-between text-left print:hidden"
              >
                <p className="font-bold text-gray-900 dark:text-gray-100">Full inventory summary</p>
                {collapsed.summary ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronUp className="w-5 h-5 text-gray-400" />}
              </button>
              {!collapsed.summary && (
                <div className="mt-4 space-y-4">
                  {ROOMS.filter(r => rooms[r.key].length > 0).map(room => (
                    <div key={room.key}>
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                          {room.emoji} {room.label}
                        </h3>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{fmt(roomTotal(room.key))}</span>
                      </div>
                      <div className="space-y-1">
                        {rooms[room.key].map(item => (
                          <div key={item.id} className="flex items-start justify-between text-sm gap-2">
                            <div className="flex-1 min-w-0">
                              <span className="text-gray-800 dark:text-gray-200">{item.name || '(unnamed)'}</span>
                              {item.notes && <span className="text-gray-400 ml-1 text-xs">— {item.notes}</span>}
                            </div>
                            <span className="text-gray-600 dark:text-gray-400 flex-shrink-0 font-medium">
                              {item.value ? fmt(parseFloat(item.value)) : '—'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between font-bold text-gray-900 dark:text-gray-100">
                    <span>Grand Total ({totalItems} items)</span>
                    <span>{fmt(grandTotal)}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors"
            >
              <Printer className="w-5 h-5" />
              Print Inventory
            </button>
            {totalItems > 0 && (
              <button
                onClick={resetAll}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {/* Tip */}
          <div className="mt-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 print:hidden">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Tips for a good home inventory</p>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
              <li>Write down serial numbers for electronics — you will need them for insurance claims.</li>
              <li>Take photos of valuable items and store them in the cloud (Google Photos or iCloud) so they survive a house fire.</li>
              <li>Print this list and store one copy off-site — at a family member's home, in a safe deposit box, or email it to yourself.</li>
              <li>Update your inventory once a year or after major purchases.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
