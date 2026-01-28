import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Crown, Shield, Sparkles, HelpCircle } from "lucide-react";

const Teams = () => {
  const { seasonId } = useParams();

  // Placeholder team data - fictional but realistic
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
    "3": [],
  };

  const teams = teamsData[seasonId as keyof typeof teamsData] || [];
  const isUpcoming = seasonId === "3";

  // Season 3 teams and slots
  const upcomingTeamSlots = [
    { slot: 1, status: "New Team", name: "Ritesh Warriors", owner: "Naveen Gupta", color: "from-yellow-500 to-orange-500", confirmed: true },
    { slot: 2, status: "Returning", name: "Ishan Mavericks", owner: "Aman Mondal", color: "from-red-500 to-pink-500", confirmed: true },
    { slot: 3, status: "Returning", name: "Maa Janki's Publications", owner: "Abhinash Singh", color: "from-blue-500 to-cyan-500", confirmed: true },
    { slot: 4, status: "Returning", name: "Deep Dragons", owner: "Deep Singh", color: "from-purple-500 to-indigo-500", confirmed: true },
    { slot: 5, status: "New Team", name: "Rahul Strikers", owner: "Rahul Tiwari", color: "from-green-500 to-emerald-500", confirmed: false },
    { slot: 6, status: "New Team", name: "Prince XI", owner: "Prince", color: "from-gray-500 to-slate-500", confirmed: false },
    { slot: 7, status: "Returning", name: "NMCC Titans", owner: "Naresh and Gopi Hela", color: "from-teal-500 to-cyan-500", confirmed: false },
    { slot: 8, status: "New Team", name: "Abhinav Cricket Crushers", owner: "Rahul Nayak", color: "from-rose-500 to-red-500", confirmed: false },
  ];

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
              TEAMS & OWNERS
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              The Powerhouses of NBPL
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isUpcoming ? (
          /* Upcoming Season - Team Slots */
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                8 Teams Competing This Season!
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                For the first time ever, NBPL expands to 8 teams. 4 teams confirmed so far with 4 ownership slots still available!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingTeamSlots.map((slot) => (
                <Card 
                  key={slot.slot}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 overflow-hidden relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slot.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative text-center">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${slot.color} flex items-center justify-center`}>
                      {slot.confirmed ? (
                        slot.status === "New Team" ? (
                          <Sparkles className="h-10 w-10 text-white" />
                        ) : (
                          <Shield className="h-10 w-10 text-white" />
                        )
                      ) : (
                        <HelpCircle className="h-10 w-10 text-white" />
                      )}
                    </div>
                    
                    {slot.confirmed ? (
                      <>
                        <p className="text-xl font-black text-foreground mb-2">{slot.name}</p>
                        <Badge 
                          className={slot.status === "New Team" 
                            ? "bg-cricket-gold/20 text-cricket-gold border-cricket-gold/30 mb-3" 
                            : "bg-primary/20 text-primary border-primary/30 mb-3"
                          }
                        >
                          {slot.status}
                        </Badge>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <div className="flex items-center justify-center gap-2">
                            <Crown className="h-4 w-4 text-cricket-gold" />
                            <span className="text-sm font-medium text-foreground">{slot.owner}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-2xl font-black text-foreground mb-1">Team {slot.slot}</p>
                        <Badge className="bg-muted text-muted-foreground border-muted mb-3">
                          Slot Available
                        </Badge>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <HelpCircle className="h-4 w-4" />
                            <span className="text-sm">Owner TBA</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-cricket-orange/10 border-primary/30">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Crown className="h-12 w-12 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Want to Own a Team?
                  </h3>
                  <p className="text-muted-foreground">
                    Team ownership slots are still available for Season 3. Contact us to become a team owner and lead your squad to victory!
                  </p>
                </div>
              </div>
            </Card>
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
