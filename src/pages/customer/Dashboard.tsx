import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/layout/Navbar';
import { StatusBadge } from '@/components/StatusBadge';
import { useAuth } from '@/contexts/AuthContext';

const mockJobs = [
  { id: '1', category: 'wifi', description: 'WiFi keeps dropping', status: 'offered', job_type: 'remote', created_at: '2024-01-15' },
  { id: '2', category: 'printer', description: 'Printer not connecting', status: 'in_progress', job_type: 'in_person', created_at: '2024-01-14' },
  { id: '3', category: 'pc_slow', description: 'Computer very slow after update', status: 'completed', job_type: 'remote', created_at: '2024-01-10' },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user?.fullName}</h1>
            <p className="text-muted-foreground">Manage your tech support requests</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4" /> New Request</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Job Request</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select issue type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wifi">WiFi Issues</SelectItem>
                      <SelectItem value="printer">Printer Problems</SelectItem>
                      <SelectItem value="pc_slow">Slow Computer</SelectItem>
                      <SelectItem value="virus">Virus / Malware</SelectItem>
                      <SelectItem value="setup">Device Setup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Remote or In-Person" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="in_person">In-Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="Describe your issue in detail..." />
                </div>
                <div className="space-y-2">
                  <Label>Address (for in-person)</Label>
                  <Input placeholder="123 Main St, City, State" />
                </div>
                <Button type="button" className="w-full" onClick={() => setOpen(false)}>
                  Submit Request
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {mockJobs.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground mb-4">No job requests yet</p>
              <Button onClick={() => setOpen(true)}>Create Your First Request</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {mockJobs.map(job => (
              <Link to={`/customer/jobs/${job.id}`} key={job.id}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center justify-between py-4">
                    <div>
                      <p className="font-medium capitalize">{job.category.replace('_', ' ')}</p>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </div>
                    <StatusBadge status={job.status} />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
