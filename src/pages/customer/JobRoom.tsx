import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/layout/Navbar';
import { StatusBadge } from '@/components/StatusBadge';
import { Separator } from '@/components/ui/separator';

const mockJob = {
  id: '1',
  category: 'wifi',
  description: 'WiFi keeps dropping every few minutes. Already tried restarting the router.',
  status: 'in_progress',
  job_type: 'remote',
  created_at: '2024-01-15T10:30:00Z',
};

const mockEvents = [
  { id: '1', event_type: 'created', created_at: '2024-01-15T10:30:00Z' },
  { id: '2', event_type: 'offered', created_at: '2024-01-15T10:31:00Z' },
  { id: '3', event_type: 'tech_assigned', created_at: '2024-01-15T10:35:00Z' },
  { id: '4', event_type: 'in_progress', created_at: '2024-01-15T10:40:00Z' },
];

const mockMessages = [
  { id: '1', sender_id: 'tech-1', message: "Hi! I've reviewed your issue. Let's run some diagnostics.", created_at: '2024-01-15T10:41:00Z' },
  { id: '2', sender_id: 'me', message: 'Sounds good, ready when you are.', created_at: '2024-01-15T10:42:00Z' },
];

const CustomerJobRoom = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-8 max-w-4xl">
        <Link to="/customer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold capitalize">{mockJob.category} Issue</h1>
            <p className="text-muted-foreground">{mockJob.description}</p>
          </div>
          <StatusBadge status={mockJob.status} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Timeline */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockEvents.map((event, i) => (
                  <div key={event.id} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                      {i < mockEvents.length - 1 && <div className="w-px flex-1 bg-border" />}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-medium capitalize">{event.event_type.replace('_', ' ')}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(event.created_at).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4 min-h-[200px]">
                {mockMessages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender_id === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] rounded-lg px-4 py-2 text-sm ${
                      msg.sender_id === 'me' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex gap-2">
                <Button variant="ghost" size="icon"><Paperclip className="h-4 w-4" /></Button>
                <Input placeholder="Type a message..." className="flex-1" />
                <Button size="icon"><Send className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerJobRoom;
