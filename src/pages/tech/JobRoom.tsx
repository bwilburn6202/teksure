import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send, Paperclip, CheckCircle, XCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatusBadge } from '@/components/StatusBadge';
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const TechJobRoom = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<string>('offered');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 max-w-4xl">
        <Link to="/tech" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">WiFi Issue</h1>
            <p className="text-muted-foreground">WiFi keeps dropping every few minutes. Already tried restarting the router.</p>
            <p className="text-sm text-muted-foreground mt-1">📍 123 Main St, Springfield</p>
          </div>
          <StatusBadge status={status} />
        </div>

        {/* Actions */}
        {status === 'offered' && (
          <Card className="rounded-2xl border border-border bg-card mb-6">
            <CardContent className="flex gap-3 py-4">
              <Button onClick={() => setStatus('accepted')} className="flex-1">
                <CheckCircle className="mr-2 h-4 w-4" /> Accept Job
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    <XCircle className="mr-2 h-4 w-4" /> Decline
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Decline this job?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => setStatus('cancelled')}>Decline</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        )}

        {status === 'accepted' && (
          <Card className="rounded-2xl border border-border bg-card mb-6">
            <CardContent className="py-4">
              <Button onClick={() => setStatus('in_progress')}>
                <Play className="mr-2 h-4 w-4" /> Start Job
              </Button>
            </CardContent>
          </Card>
        )}

        {status === 'in_progress' && (
          <Card className="rounded-2xl border border-border bg-card mb-6">
            <CardContent className="py-4">
              <Button onClick={() => setStatus('completed')}>
                <CheckCircle className="mr-2 h-4 w-4" /> Mark Complete
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Chat */}
        <Card className="rounded-2xl border border-border bg-card">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="min-h-[200px] flex items-center justify-center text-muted-foreground text-sm">
              {status === 'offered' ? 'Accept the job to start messaging.' : 'No messages yet. Start the conversation.'}
            </div>
            <Separator className="my-4" />
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" disabled={status === 'offered'}><Paperclip className="h-4 w-4" /></Button>
              <Input placeholder="Type a message..." className="flex-1" disabled={status === 'offered'} />
              <Button size="icon" disabled={status === 'offered'}><Send className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default TechJobRoom;
