import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Users, Award, Target, Flame, Star, Zap } from "lucide-react";

const Seasons = () => {
  const { seasonId } = useParams();

  const seasonData = {
    "1": {
      year: "2023-24",
      winner: "Sunny Strikers",
      runnerUp: "NMCC Titans",
      teams: 6,
      matches: 19,
      status: "Completed",
      topScorer: { name: "Akshay Singh", runs: 252 },
      topWicketTaker: { name: "Manoj Mahato", wickets: 13 },
      bestMatch: "Neemtala Ninjas vs NMCC Titans",
      highlights: [
        "First ever NBPL season",
        "Record 252 runs by a single player",
        "Thrilling final decided in last over",
        "6 teams battled for glory"
      ]
    },
    "2": {
      year: "2024-25",
      winner: "NMCC Titans",
      runnerUp: "Ishan Mavericks",
      teams: 6,
      matches: 19,
      status: "Completed",
      topScorer: { name: "Aryan Hela", runs: 287 },
      topWicketTaker: { name: "Suraj Mondal", wickets: 16 },
      bestMatch: "Final - NMCC Titans vs Ishan Mavericks",
      highlights: [
        "Record-breaking viewership",
        "New tournament individual high score of 112",
        "The previous year’s runners-up made a strong comeback and claimed the championship",
        "Bigger and better rewards and recognition for top performers."
      ]
    },
    "3": {
      year: "2025-26",
      winner: "TBD",
      runnerUp: "TBD",
      teams: 8,
      matches: "TBA",
      status: "Upcoming",
      topScorer: { name: "—", runs: "—" },
      topWicketTaker: { name: "—", wickets: "—" },
      bestMatch: "Season not started",
      highlights: [
        "Expanded to 8 teams",
        "Bigger prize pool",
        "New teams being introduced",
        "Player auction in February 2026"
      ]
    },
  };

  const season = seasonData[seasonId as keyof typeof seasonData];

  const isUpcoming = season?.status === "Upcoming";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary/20 via-background to-cricket-orange/20 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              {season?.status}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-2">
              SEASON {seasonId}
            </h1>
            <p className="text-2xl text-muted-foreground font-medium">
              {season?.year} Edition
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:scale-105 transition-transform">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/20 p-3 rounded-full">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Champion</p>
                <p className="text-lg font-bold text-foreground">{season?.winner}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cricket-blue/10 to-cricket-blue/5 border-cricket-blue/30 hover:scale-105 transition-transform">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-cricket-blue/20 p-3 rounded-full">
                <Users className="h-8 w-8 text-cricket-blue" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Teams</p>
                <p className="text-lg font-bold text-foreground">{season?.teams}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cricket-orange/10 to-cricket-orange/5 border-cricket-orange/30 hover:scale-105 transition-transform">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-cricket-orange/20 p-3 rounded-full">
                <Calendar className="h-8 w-8 text-cricket-orange" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Matches</p>
                <p className="text-lg font-bold text-foreground">{season?.matches}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cricket-gold/10 to-cricket-gold/5 border-cricket-gold/30 hover:scale-105 transition-transform">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-cricket-gold/20 p-3 rounded-full">
                <Award className="h-8 w-8 text-cricket-gold" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Runner Up</p>
                <p className="text-lg font-bold text-foreground">{season?.runnerUp}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Top Performers */}
        {!isUpcoming && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-cricket-gold/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cricket-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex items-center gap-4">
                <div className="bg-gradient-to-br from-cricket-gold to-cricket-orange p-4 rounded-xl">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Orange Cap - Top Scorer</p>
                  <p className="text-2xl font-bold text-foreground">{season?.topScorer.name}</p>
                  <p className="text-cricket-gold font-semibold">{season?.topScorer.runs} Runs</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-primary/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary to-cricket-blue p-4 rounded-xl">
                  <Flame className="h-10 w-10 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Purple Cap - Top Wicket Taker</p>
                  <p className="text-2xl font-bold text-foreground">{season?.topWicketTaker.name}</p>
                  <p className="text-primary font-semibold">{season?.topWicketTaker.wickets} Wickets</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Highlights */}
        <Card className="p-8 bg-card border-border">
          <div className="flex items-center gap-3 mb-6">
            <Star className="h-6 w-6 text-cricket-gold" />
            <h2 className="text-2xl font-bold text-foreground">Season Highlights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {season?.highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50"
              >
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>

          {!isUpcoming && (
            <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-cricket-orange/10 rounded-xl border border-primary/20">
              <p className="text-sm text-muted-foreground mb-1">Match of the Season</p>
              <p className="text-lg font-semibold text-foreground">{season?.bestMatch}</p>
            </div>
          )}
        </Card>
      </div>

      <footer className="bg-card py-8 border-t border-border mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Narsingh Bandh Premier League. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Seasons;
