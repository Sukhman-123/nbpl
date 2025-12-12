import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Flame, Star, TrendingUp, Award } from "lucide-react";

const Players = () => {
  const { seasonId } = useParams();

  // Placeholder player data - makes the page look complete
  const playersData: Record<string, { name: string; role: string; team: string; runs?: number; wickets?: number; isTopPerformer?: boolean; badge?: string }[]> = {
    "1": [
      { name: "Akshay Singh", role: "Batsman", team: "Sunny Strikers", runs: 252, isTopPerformer: true, badge: "Orange Cap" },
      { name: "Manoj Mahato", role: "Bowler", team: "NMCC Titans", wickets: 13, isTopPerformer: true, badge: "Purple Cap" },
      { name: "Manish Hari", role: "All-Rounder", team: "NMCC Titans", runs: 215, wickets: 13 },
      { name: "Ankit Yadav", role: "Batsman", team: "NMCC Titans", runs: 218 },
      { name: "Abhijeet Kewra", role: "Bowler", team: "Deep Dragons", wickets: 12 },
      { name: "Rahul Sharma", role: "Batsman", team: "Neemtala Ninjas", runs: 189 },
      { name: "Rounak", role: "Bowler", team: "Sunny Strikers", wickets: 12 },
      { name: "Rahul Shaw", role: "Batsman", team: "Aanvi Warriors", runs: 153 },
    ],
    "2": [
      { name: "Aryan Hela", role: "All-Rounder", team: "NMCC Titans", runs: 287, wickets: 16, isTopPerformer: true, badge: "Orange Cap" },
      { name: "Suraj Mondal", role: "Bowler", team: "Sunny Strikers", wickets: 16, isTopPerformer: true, badge: "Purple Cap" },
      { name: "Abid Hussain", role: "Batsman", team: "NMCC Titans", runs: 240 },
      { name: "Anand Chaudhary", role: "All-rounder", team: "Maa Janki XI", runs: 210, wickets: 2 },
      { name: "Subhankar Bauri", role: "Bowler", team: "Ishan Mavericks", wickets: 15 },
      { name: "Jhantu Chowbey", role: "Bowler", team: "Maa Janki XI", wickets: 15 },
      { name: "Amit Prasad (Bako)", role: "Batsman", team: "Ishan Mavericks", runs: 202 },
      { name: "Rahul Shaw", role: "Wicketkeeper", team: "Ishan Mavericks", runs: 200 },
    ],
    "3": [],
  };

  const players = playersData[seasonId as keyof typeof playersData] || [];
  const isUpcoming = seasonId === "3";

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Batsman": return "bg-cricket-orange/20 text-cricket-orange border-cricket-orange/30";
      case "Bowler": return "bg-primary/20 text-primary border-primary/30";
      case "All-Rounder": return "bg-cricket-gold/20 text-cricket-gold border-cricket-gold/30";
      case "Wicketkeeper": return "bg-cricket-blue/20 text-cricket-blue border-cricket-blue/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-cricket-orange/20 via-background to-primary/20 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--cricket-orange)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <Badge className="mb-4 bg-cricket-orange/20 text-cricket-orange border-cricket-orange/30">
              Season {seasonId}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-2">
              PLAYERS
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Heroes of the Tournament
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isUpcoming ? (
          /* Upcoming Season - Exciting Placeholder */
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-background border-primary/30 overflow-hidden relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cricket-orange/5 rounded-full" />
              
              <div className="relative text-center space-y-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-cricket-orange rounded-full mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-foreground">
                  Players to be Revealed Soon!
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  The auction for Season 3 is scheduled for February 2026. 
                  Stay tuned to see which stars will be picked by the 8 competing teams!
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <p className="text-3xl font-black text-primary">80+</p>
                    <p className="text-sm text-muted-foreground">Expected Players</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <p className="text-3xl font-black text-cricket-orange">8</p>
                    <p className="text-sm text-muted-foreground">Teams</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <p className="text-3xl font-black text-cricket-gold">₹10K+</p>
                    <p className="text-sm text-muted-foreground">Auction Pool</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <p className="text-3xl font-black text-cricket-blue">Feb</p>
                    <p className="text-sm text-muted-foreground">Auction Month</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <Badge className="px-4 py-2 bg-cricket-orange/20 text-cricket-orange border-cricket-orange/30">
                    <Target className="h-4 w-4 mr-2" />
                    Batsmen
                  </Badge>
                  <Badge className="px-4 py-2 bg-primary/20 text-primary border-primary/30">
                    <Flame className="h-4 w-4 mr-2" />
                    Bowlers
                  </Badge>
                  <Badge className="px-4 py-2 bg-cricket-gold/20 text-cricket-gold border-cricket-gold/30">
                    <Star className="h-4 w-4 mr-2" />
                    All-Rounders
                  </Badge>
                  <Badge className="px-4 py-2 bg-cricket-blue/20 text-cricket-blue border-cricket-blue/30">
                    <Award className="h-4 w-4 mr-2" />
                    Wicketkeepers
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          /* Past Seasons - Show Players */
          <>
            {/* Top Performers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-cricket-gold" />
                Top Performers
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {players.filter(p => p.isTopPerformer).map((player, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-to-br from-card to-background border-cricket-gold/30 overflow-hidden relative hover:scale-[1.02] transition-transform"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cricket-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cricket-gold to-cricket-orange rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-1 bg-cricket-gold/20 text-cricket-gold border-cricket-gold/30 text-xs">
                          {player.badge}
                        </Badge>
                        <p className="text-xl font-bold text-foreground">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.team}</p>
                        <div className="flex items-center gap-4 mt-2">
                          {player.runs && (
                            <span className="text-cricket-orange font-semibold">{player.runs} runs</span>
                          )}
                          {player.wickets && (
                            <span className="text-primary font-semibold">{player.wickets} wickets</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Players */}
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              All Players
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {players.map((player, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground truncate">{player.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{player.team}</p>
                      <Badge className={`mt-2 text-xs ${getRoleBadgeColor(player.role)}`}>
                        {player.role}
                      </Badge>
                      <div className="flex flex-wrap gap-2 mt-2 text-xs">
                        {player.runs && (
                          <span className="text-cricket-orange">{player.runs} runs</span>
                        )}
                        {player.wickets && (
                          <span className="text-primary">{player.wickets} wkts</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
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

export default Players;
