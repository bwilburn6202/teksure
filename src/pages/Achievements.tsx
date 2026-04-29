import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, Shield, Smartphone, BookOpen, Award, CheckCircle2, Lock, Zap, Target } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: typeof Star;
  category: 'completion' | 'category' | 'streak' | 'special';
  requirement: string;
  earned: boolean;
  earnedAt?: string;
}

interface AchievementStats {
  guidesCompleted: number;
  categoriesExplored: number;
  currentStreak: number;
  longestStreak: number;
  totalBadges: number;
  totalPossible: number;
}

const BADGES: Omit<Badge, 'earned' | 'earnedAt'>[] = [
  { id: 'first-guide', name: 'First Step', description: 'Complete your first guide', icon: Star, category: 'completion', requirement: 'Complete 1 guide' },
  { id: 'five-guides', name: 'Getting Started', description: 'Complete 5 guides', icon: Target, category: 'completion', requirement: 'Complete 5 guides' },
  { id: 'ten-guides', name: 'Tech Explorer', description: 'Complete 10 guides', icon: Zap, category: 'completion', requirement: 'Complete 10 guides' },
  { id: 'twenty-five-guides', name: 'Digital Learner', description: 'Complete 25 guides', icon: BookOpen, category: 'completion', requirement: 'Complete 25 guides' },
  { id: 'fifty-guides', name: 'Tech Champion', description: 'Complete 50 guides', icon: Trophy, category: 'completion', requirement: 'Complete 50 guides' },
  { id: 'windows-badge', name: 'Windows Master', description: 'Complete all Windows guides', icon: Shield, category: 'category', requirement: 'Complete 5 Windows guides' },
  { id: 'mac-badge', name: 'Mac Expert', description: 'Complete all Mac guides', icon: Shield, category: 'category', requirement: 'Complete 5 Mac guides' },
  { id: 'phone-badge', name: 'Phone Pro', description: 'Complete 5 phone/tablet guides', icon: Smartphone, category: 'category', requirement: 'Complete 5 phone guides' },
  { id: 'safety-badge', name: 'Safety Champion', description: 'Complete 3 safety guides', icon: Shield, category: 'category', requirement: 'Complete 3 safety guides' },
  { id: 'week-streak', name: 'Week Warrior', description: 'Use TekSure for 7 days in a row', icon: Award, category: 'streak', requirement: '7-day streak' },
  { id: 'month-streak', name: 'Monthly Master', description: 'Use TekSure for 30 days in a row', icon: Award, category: 'streak', requirement: '30-day streak' },
  { id: 'first-tool', name: 'Tool User', description: 'Try your first interactive tool', icon: Target, category: 'special', requirement: 'Use 1 tool' },
];

const STORAGE_KEYS = {
  completedGuides: 'teksure_completed_guides',
  streak: 'teksure_streak',
  lastVisit: 'teksure_last_visit',
  earnedBadges: 'teksure_earned_badges',
};

export function Achievements() {
  const [stats, setStats] = useState<AchievementStats>({
    guidesCompleted: 0,
    categoriesExplored: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalBadges: 0,
    totalPossible: BADGES.length,
  });
  const [badges, setBadges] = useState<Badge[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const completedRaw = localStorage.getItem(STORAGE_KEYS.completedGuides);
    const completedGuides: string[] = completedRaw ? JSON.parse(completedRaw) : [];
    
    const streakRaw = localStorage.getItem(STORAGE_KEYS.streak);
    const streakData = streakRaw ? JSON.parse(streakRaw) : { current: 0, longest: 0, dates: [] };
    
    const earnedRaw = localStorage.getItem(STORAGE_KEYS.earnedBadges);
    const earnedBadges: string[] = earnedRaw ? JSON.parse(earnedRaw) : [];

    const categoriesExplored = new Set<string>();
    completedGuides.forEach(slug => {
      if (slug.includes('windows')) categoriesExplored.add('windows');
      if (slug.includes('mac')) categoriesExplored.add('mac');
      if (slug.includes('phone') || slug.includes('iphone') || slug.includes('android')) categoriesExplored.add('phone');
      if (slug.includes('safety') || slug.includes('scam') || slug.includes('security')) categoriesExplored.add('safety');
    });

    const badgesWithStatus: Badge[] = BADGES.map(badge => ({
      ...badge,
      earned: earnedBadges.includes(badge.id),
    }));

    setStats({
      guidesCompleted: completedGuides.length,
      categoriesExplored: categoriesExplored.size,
      currentStreak: streakData.current,
      longestStreak: streakData.longest,
      totalBadges: earnedBadges.length,
      totalPossible: BADGES.length,
    });

    setBadges(badgesWithStatus);
  };

  const completionBadges = badges.filter(b => b.category === 'completion');
  const categoryBadges = badges.filter(b => b.category === 'category');
  const streakBadges = badges.filter(b => b.category === 'streak');
  const specialBadges = badges.filter(b => b.category === 'special');

  const progressPercent = Math.round((stats.totalBadges / stats.totalPossible) * 100);

  return (
    <>
      <SEOHead
        title="Achievements | TekSure"
        description="Track your progress and earn badges as you learn new technology skills."
        path="/achievements"
      />
      <div className="print:hidden">
        <Navbar />
      </div>

      <main id="main-content" className="container py-12 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold">Your Achievements</h1>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Track your progress as you learn new technology skills. Complete guides and use TekSure daily to earn badges!
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Overall Progress</span>
                <Badge variant="outline">{stats.totalBadges} / {stats.totalPossible} badges</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progressPercent} className="h-3 mb-4" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{stats.guidesCompleted}</div>
                  <div className="text-sm text-muted-foreground">Guides Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stats.categoriesExplored}</div>
                  <div className="text-sm text-muted-foreground">Categories Explored</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stats.currentStreak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stats.longestStreak}</div>
                  <div className="text-sm text-muted-foreground">Best Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {completionBadges.length > 0 && (
              <div>
                <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Completion Badges
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {completionBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            )}

            {categoryBadges.length > 0 && (
              <div>
                <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Category Badges
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            )}

            {streakBadges.length > 0 && (
              <div>
                <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Streak Badges
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {streakBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            )}

            {specialBadges.length > 0 && (
              <div>
                <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Special Badges
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {specialBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <Card className="mt-8 bg-muted/50">
            <CardContent className="py-6">
              <h3 className="font-medium mb-2">How to earn badges</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Completion badges:</strong> Complete guides to earn these</li>
                <li>• <strong>Category badges:</strong> Complete multiple guides in the same category</li>
                <li>• <strong>Streak badges:</strong> Visit TekSure every day to build your streak</li>
                <li>• <strong>Special badges:</strong> Try out different features and tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}

function BadgeCard({ badge }: { badge: Badge }) {
  const Icon = badge.icon;
  
  return (
    <Card className={badge.earned ? 'border-primary bg-primary/5' : 'opacity-60'}>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className={`rounded-full p-4 mb-3 ${badge.earned ? 'bg-primary/10' : 'bg-muted'}`}>
            {badge.earned ? (
              <Icon className="h-8 w-8 text-primary" />
            ) : (
              <Lock className="h-8 w-8 text-muted-foreground" />
            )}
          </div>
          <h3 className="font-medium mb-1">{badge.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
          {badge.earned ? (
            <Badge className="bg-primary">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Earned!
            </Badge>
          ) : (
            <Badge variant="outline">{badge.requirement}</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Achievements;
