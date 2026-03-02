import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StatusBadge } from '@/components/StatusBadge';
import { Shield, AlertTriangle, Users } from 'lucide-react';

const mockJobs = [
  { id: '1', category: 'wifi', customer: 'John D.', tech: 'Alex M.', status: 'in_progress', created: '2024-01-15' },
  { id: '2', category: 'printer', customer: 'Sarah K.', tech: 'Mike R.', status: 'completed', created: '2024-01-14' },
  { id: '3', category: 'virus', customer: 'Tom B.', tech: null, status: 'disputed', created: '2024-01-13' },
  { id: '4', category: 'setup', customer: 'Lisa W.', tech: 'Alex M.', status: 'offered', created: '2024-01-12' },
];

const mockTechs = [
  { id: '1', name: 'Alex M.', verification_level: 'background', jobs: 24, rating: 4.8 },
  { id: '2', name: 'Mike R.', verification_level: 'id', jobs: 12, rating: 4.5 },
  { id: '3', name: 'Chris P.', verification_level: 'none', jobs: 0, rating: 0 },
];

const AdminConsole = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-2">Admin Console</h1>
      <p className="text-muted-foreground mb-8">Manage jobs, disputes, and tech verification</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="flex items-center gap-3 py-4">
            <Users className="h-5 w-5 text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Total Jobs</p>
              <p className="text-xl font-bold">{mockJobs.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 py-4">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <div>
              <p className="text-xs text-muted-foreground">Disputes</p>
              <p className="text-xl font-bold">{mockJobs.filter(j => j.status === 'disputed').length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 py-4">
            <Shield className="h-5 w-5 text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Pending Verify</p>
              <p className="text-xl font-bold">{mockTechs.filter(t => t.verification_level === 'none').length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="jobs">
        <TabsList>
          <TabsTrigger value="jobs">All Jobs</TabsTrigger>
          <TabsTrigger value="disputes">Disputes</TabsTrigger>
          <TabsTrigger value="techs">Tech Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Tech</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockJobs.map(job => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium capitalize">{job.category}</TableCell>
                    <TableCell>{job.customer}</TableCell>
                    <TableCell>{job.tech || '—'}</TableCell>
                    <TableCell><StatusBadge status={job.status} /></TableCell>
                    <TableCell className="text-muted-foreground">{job.created}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="disputes">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Tech</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockJobs.filter(j => j.status === 'disputed').map(job => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium capitalize">{job.category}</TableCell>
                    <TableCell>{job.customer}</TableCell>
                    <TableCell>{job.tech || '—'}</TableCell>
                    <TableCell className="text-muted-foreground">{job.created}</TableCell>
                    <TableCell><Button variant="outline" size="sm">Review</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="techs">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Verification</TableHead>
                  <TableHead>Jobs</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTechs.map(tech => (
                  <TableRow key={tech.id}>
                    <TableCell className="font-medium">{tech.name}</TableCell>
                    <TableCell>
                      <Badge variant={tech.verification_level === 'none' ? 'destructive' : 'secondary'} className="capitalize">
                        {tech.verification_level}
                      </Badge>
                    </TableCell>
                    <TableCell>{tech.jobs}</TableCell>
                    <TableCell>{tech.rating > 0 ? tech.rating : '—'}</TableCell>
                    <TableCell>
                      {tech.verification_level === 'none' && (
                        <Button variant="outline" size="sm">Verify</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
);

export default AdminConsole;
