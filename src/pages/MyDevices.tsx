import { useState, useEffect } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Trash2, Smartphone, Laptop, Tablet, Tv, Watch, Router, SmartphoneNfc, Edit2, Check } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  type: DeviceType;
  brand: string;
  model: string;
  purchaseDate?: string;
  notes: string;
  addedAt: string;
}

type DeviceType = 'desktop' | 'laptop' | 'tablet' | 'phone' | 'smartwatch' | 'smart-tv' | 'router' | 'other';

const DEVICE_TYPES: { value: DeviceType; label: string; icon: typeof Smartphone }[] = [
  { value: 'desktop', label: 'Desktop Computer', icon: Laptop },
  { value: 'laptop', label: 'Laptop', icon: Laptop },
  { value: 'tablet', label: 'Tablet / iPad', icon: Tablet },
  { value: 'phone', label: 'Smartphone', icon: Smartphone },
  { value: 'smartwatch', label: 'Smartwatch / Wearable', icon: Watch },
  { value: 'smart-tv', label: 'Smart TV', icon: Tv },
  { value: 'router', label: 'WiFi Router', icon: Router },
  { value: 'other', label: 'Other Device', icon: SmartphoneNfc },
];

const STORAGE_KEY = 'teksure_devices';

export function DeviceInventory() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [newDevice, setNewDevice] = useState({
    name: '',
    type: 'laptop' as DeviceType,
    brand: '',
    model: '',
    purchaseDate: '',
    notes: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setDevices(JSON.parse(stored));
    }
  }, []);

  const saveDevices = (newDevices: Device[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newDevices));
    setDevices(newDevices);
  };

  const addDevice = () => {
    if (!newDevice.name.trim()) return;
    
    const device: Device = {
      id: Date.now().toString(),
      ...newDevice,
      addedAt: new Date().toISOString(),
    };
    
    saveDevices([device, ...devices]);
    setNewDevice({ name: '', type: 'laptop', brand: '', model: '', purchaseDate: '', notes: '' });
    setIsDialogOpen(false);
  };

  const updateDevice = (id: string) => {
    const updated = devices.map(d => 
      d.id === id ? { ...d, ...newDevice } : d
    );
    saveDevices(updated);
    setEditingId(null);
    setNewDevice({ name: '', type: 'laptop', brand: '', model: '', purchaseDate: '', notes: '' });
  };

  const deleteDevice = (id: string) => {
    if (confirm('Remove this device from your inventory?')) {
      saveDevices(devices.filter(d => d.id !== id));
    }
  };

  const getDeviceIcon = (type: DeviceType) => {
    const deviceType = DEVICE_TYPES.find(t => t.value === type);
    const Icon = deviceType?.icon || SmartphoneNfc;
    return <Icon className="h-5 w-5" />;
  };

  const getTypeLabel = (type: DeviceType) => {
    return DEVICE_TYPES.find(t => t.value === type)?.label || type;
  };

  const groupedDevices = devices.reduce((acc, device) => {
    if (!acc[device.type]) acc[device.type] = [];
    acc[device.type].push(device);
    return acc;
  }, {} as Record<DeviceType, Device[]>);

  return (
    <>
      <SEOHead
        title="My Devices | TekSure"
        description="Keep track of all your technology devices in one place."
        path="/my-devices"
      />
      <div className="print:hidden">
      </div>

      <main className="container py-12 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Smartphone className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">My Devices</h1>
                <p className="text-muted-foreground">Keep track of all your technology devices.</p>
              </div>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Device
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a New Device</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Device Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g., My iPhone 14"
                      value={newDevice.name}
                      onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Device Type</Label>
                    <Select 
                      value={newDevice.type} 
                      onValueChange={(value) => setNewDevice({ ...newDevice, type: value as DeviceType })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {DEVICE_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <span className="flex items-center gap-2">
                              {<type.icon className="h-4 w-4" />}
                              {type.label}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand</Label>
                      <Input
                        id="brand"
                        placeholder="e.g., Apple, Samsung"
                        value={newDevice.brand}
                        onChange={(e) => setNewDevice({ ...newDevice, brand: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Input
                        id="model"
                        placeholder="e.g., iPhone 14 Pro"
                        value={newDevice.model}
                        onChange={(e) => setNewDevice({ ...newDevice, model: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="purchaseDate">Purchase Date</Label>
                    <Input
                      id="purchaseDate"
                      type="date"
                      value={newDevice.purchaseDate}
                      onChange={(e) => setNewDevice({ ...newDevice, purchaseDate: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Input
                      id="notes"
                      placeholder="Any additional notes..."
                      value={newDevice.notes}
                      onChange={(e) => setNewDevice({ ...newDevice, notes: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={addDevice} disabled={!newDevice.name.trim()}>
                      Add Device
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {devices.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Smartphone className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No devices added yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start by adding your devices. This helps us give you better, more relevant advice.
                </p>
                <Button onClick={() => setIsDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Device
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedDevices).map(([type, typeDevices]) => (
                <div key={type}>
                  <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                    {getDeviceIcon(type as DeviceType)}
                    {getTypeLabel(type as DeviceType)}s
                    <Badge variant="secondary">{typeDevices.length}</Badge>
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {typeDevices.map((device) => (
                      <Card key={device.id}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {getDeviceIcon(device.type)}
                              <CardTitle className="text-base">{device.name}</CardTitle>
                            </div>
                            <div className="flex gap-1">
                              <Button 
                                size="sm" 
                                variant="ghost"
                                onClick={() => {
                                  setEditingId(device.id);
                                  setNewDevice({
                                    name: device.name,
                                    type: device.type,
                                    brand: device.brand,
                                    model: device.model,
                                    purchaseDate: device.purchaseDate || '',
                                    notes: device.notes,
                                  });
                                }}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost"
                                onClick={() => deleteDevice(device.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground space-y-1">
                            {device.brand && <p><span className="font-medium">Brand:</span> {device.brand}</p>}
                            {device.model && <p><span className="font-medium">Model:</span> {device.model}</p>}
                            {device.purchaseDate && <p><span className="font-medium">Purchased:</span> {new Date(device.purchaseDate).toLocaleDateString()}</p>}
                            {device.notes && <p className="mt-2">{device.notes}</p>}
                          </div>
                          {editingId === device.id && (
                            <div className="mt-4 pt-4 border-t space-y-3">
                              <Input
                                placeholder="Device Name"
                                value={newDevice.name}
                                onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
                              />
                              <div className="flex gap-2">
                                <Button size="sm" onClick={() => updateDevice(device.id)}>
                                  <Check className="h-4 w-4 mr-1" />
                                  Save
                                </Button>
                                <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Card className="mt-8 bg-muted/50">
            <CardContent className="py-6">
              <h3 className="font-medium mb-2">Why track your devices?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Get personalized help faster when you need support</li>
                <li>• Remember which devices you have when setting up new services</li>
                <li>• Keep track of warranty information and purchase dates</li>
                <li>• Help family members understand your tech setup</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="print:hidden">
      </div>
    </>
  );
}

export default DeviceInventory;
