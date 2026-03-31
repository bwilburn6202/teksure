import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, MapPin, DollarSign, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';

const mockOffers = [
  { id: '1', job_id: 'j1', category: 'wifi', description: 'WiFi drops frequently', job_type: 'remote', status: 'offered' },
  { id: '2', job_id: 'j2', category: 'printer', description: 'Cannot connect to wireless printer', job_type: 'in_person', status: 'offered' },
];

const TechDashboard = () => {
  const [available, setAvailable] = useState(true);
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome, {user?.fullName}</h1>
            <p className="text-muted-foreground">Manage your profile and job offers</p>
          </div>
          <div className="flex items-center gap-3">
            <Label htmlFor="availability" className="text-sm">
              {available ? 'Available' : 'Offline'}
            </Label>
            <Switch id="availability" checked={available} onCheckedChange={setAvailable} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Star, label: 'Rating', value: '4.8' },
            { icon: Wrench, label: 'Jobs Done', value: '24' },
            { icon: DollarSign, label: 'Rate', value: '$75/hr' },
            { icon: MapPin, label: 'Radius', value: '25 mi' },
          ].map(stat => (
            <Card key={stat.label} className="rounded-2xl border border-border bg-card">
              <CardContent className="flex items-center gap-3 py-4">
                <stat.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="font-semibold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-4">Available Job Offers</h2>
        {mockOffers.length === 0 ? (
          <Card className="rounded-2xl border border-border bg-card text-center py-12">
            <CardContent>
              <p className="text-muted-foreground">No job offers right now. Check back soon!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {mockOffers.map(offer => (
              <Link to={`/tech/jobs/${offer.job_id}`} key={offer.id}>
                <Card className="rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center justify-between py-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium capitalize">{offer.category}</p>
                        <Badge variant="outline" className="text-xs">
                          {offer.job_type === 'remote' ? 'Remote' : 'In-Person'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{offer.description}</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TechDashboard;
