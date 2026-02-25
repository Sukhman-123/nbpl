import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Crown, Shield, Sparkles } from "lucide-react";
import { season3Results } from "@/data/season3Results";

const Teams = () => {
  const { seasonId } = useParams();

  // Placeholder team data for past seasons
  const teamsData: Record<string, { name: string; owner: string; color: string; wins: number; losses: number; isChampion?: boolean; isRunnerUp?: boolean }[]> = {
    "1": [
      { name: "Sunny Strikers", owner: "Sunny Shaw", color: "from-yellow-500 to-orange-500", wins: 4, losses: 1, isChampion: true },
      { name: "NMCC Titans", owner: "Manish Hari", color: "from-red-500 to-pink-500", wins: 4, losses: 1, isRunnerUp: true },
      { name: "Neemtala Ninjas", owner: "Kaifi", color: "from-blue-500 to-cyan-500", wins: 3, losses: 2 },
      { name: "Aanvi Warriors", owner: "Nicky", color: "from-purple-500 to-indigo-500", wins: 2, losses: 3 },
      { name: "Deep Dragons", owner: "Deep Singh", color: "from-green-500 to-emerald-500", wins: 2, losses: 3 },
      { name: "Trademax Thunder", owner: "Pathak", color: "from-gray-500 to-slate-500", wins: 0, losses: 5 },
    ],
    "2": [
      { name: "NMCC Titans", owner: "Manish Hari", color: "from-blue-500 to-cyan-500", wins: 3, losses: 2, isChampion: true },
      { name: "Ishan Mavericks", owner: "Aman Mondal", color: "from-yellow-500 to-orange-500", wins: 4, losses: 1, isRunnerUp: true },
      { name: "Sunny Strikers", owner: "Sunny Shaw", color: "from-red-500 to-pink-500", wins: 4, losses: 1 },
      { name: "Maa Janki XI", owner: "Deepak", color: "from-purple-500 to-indigo-500", wins: 2, losses: 3 },
      { name: "Neemtala Ninjas", owner: "Kaifi", color: "from-green-500 to-emerald-500", wins: 2, losses: 3 },
      { name: "Deep Dragons", owner: "Deep Singh", color: "from-gray-500 to-slate-500", wins: 0, losses: 5 },
    ],
  };

  const isSeason3 = seasonId === "3";
  const teams = teamsData[seasonId as keyof typeof teamsData] || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-cricket-blue/20 via-background to-cricket-gold/20 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--cricket-blue)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <Badge className="mb-4 bg-cricket-blue/20 text-cricket-blue border-cricket-blue/30">
              Season {seasonId}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-2">
              TEAMS & SQUADS
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              {isSeason3 ? "Auction Results — 14 Feb 2026" : "The Powerhouses of NBPL"}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isSeason3 ? (
          /* Season 3 - Show full auction rosters */
          <div className="space-y-10">
            {season3Results.map((team) => (
              <Card key={team.teamId} className="overflow-hidden border-border">
                {/* Team Header */}
                <div 
                  className="p-6 flex flex-col sm:flex-row items-center gap-4"
                  style={{ backgroundColor: `${team.color}15` }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: team.color }}
                  >
                    <span className="text-white font-black text-lg">{team.shortName}</span>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h2 className="text-2xl font-black text-foreground">{team.teamName}</h2>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Crown className="h-3.5 w-3.5" /> {team.owner}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {team.players.length} Players
                      </Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-foreground">₹{team.totalSpent.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Total Spent</p>
                  </div>
                </div>

                {/* Players Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-4 py-3 font-semibold text-muted-foreground">#</th>
                        <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Player</th>
                        <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Role</th>
                        <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Category</th>
                        <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Base</th>
                        <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Sold</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.players
                        .sort((a, b) => b.soldPrice - a.soldPrice)
                        .map((player, idx) => (
                          <tr key={player.playerNo} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                            <td className="px-4 py-3 text-muted-foreground">{idx + 1}</td>
                            <td className="px-4 py-3 font-medium text-foreground">{player.name}</td>
                            <td className="px-4 py-3">
                              <Badge 
                                variant="outline" 
                                className={
                                  player.style === "Batsman" 
                                    ? "border-cricket-blue/50 text-cricket-blue" 
                                    : player.style === "Bowler" 
                                    ? "border-cricket-orange/50 text-cricket-orange" 
                                    : "border-primary/50 text-primary"
                                }
                              >
                                {player.style}
                              </Badge>
                            </td>
                            <td className="px-4 py-3">
                              <Badge 
                                variant="secondary"
                                className={
                                  player.address === "Foreign" 
                                    ? "bg-cricket-gold/20 text-cricket-gold" 
                                    : "bg-muted text-muted-foreground"
                                }
                              >
                                {player.address}
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-right text-muted-foreground">₹{player.basePrice}</td>
                            <td className="px-4 py-3 text-right font-bold text-foreground">₹{player.soldPrice.toLocaleString()}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* Past Seasons - Show Teams */
          <>
            {/* Champion & Runner Up */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {teams.filter(t => t.isChampion || t.isRunnerUp).map((team, index) => (
                <Card 
                  key={index}
                  className={`p-6 overflow-hidden relative hover:scale-[1.02] transition-transform ${
                    team.isChampion ? "border-cricket-gold/50" : "border-muted"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-10`} />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${team.color} flex items-center justify-center`}>
                        {team.isChampion ? (
                          <Trophy className="h-8 w-8 text-white" />
                        ) : (
                          <Shield className="h-8 w-8 text-white" />
                        )}
                      </div>
                      <div>
                        <Badge className={team.isChampion 
                          ? "bg-cricket-gold/20 text-cricket-gold border-cricket-gold/30 mb-1" 
                          : "bg-muted text-muted-foreground mb-1"
                        }>
                          {team.isChampion ? "🏆 Champions" : "Runner Up"}
                        </Badge>
                        <p className="text-2xl font-bold text-foreground">{team.name}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-background/50 rounded-lg">
                        <p className="text-2xl font-bold text-primary">{team.wins}</p>
                        <p className="text-xs text-muted-foreground">Wins</p>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded-lg">
                        <p className="text-2xl font-bold text-destructive">{team.losses}</p>
                        <p className="text-xs text-muted-foreground">Losses</p>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded-lg">
                        <Crown className="h-5 w-5 mx-auto text-cricket-gold mb-1" />
                        <p className="text-xs text-muted-foreground">{team.owner}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* All Teams */}
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              All Teams
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team, index) => (
                <Card 
                  key={index}
                  className="p-5 bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02] overflow-hidden relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-5`} />
                  <div className="relative flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${team.color} flex items-center justify-center flex-shrink-0`}>
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-foreground truncate">{team.name}</p>
                        {team.isChampion && <Trophy className="h-4 w-4 text-cricket-gold flex-shrink-0" />}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Crown className="h-3 w-3" />
                        <span>{team.owner}</span>
                      </div>
                      <div className="flex gap-3 mt-2 text-sm">
                        <span className="text-primary font-medium">{team.wins}W</span>
                        <span className="text-destructive font-medium">{team.losses}L</span>
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

export default Teams;
