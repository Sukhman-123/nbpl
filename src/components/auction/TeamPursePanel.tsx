import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Team, INITIAL_PURSE } from "@/data/auctionData";
import { Wallet, Users, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TeamPursePanelProps {
  teams: Team[];
  expanded?: boolean;
}

export const TeamPursePanel = ({ teams, expanded = false }: TeamPursePanelProps) => {
  const sortedTeams = [...teams].sort((a, b) => b.purse - a.purse);

  if (expanded) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teams.map((team) => {
          const pursePercentage = (team.purse / INITIAL_PURSE) * 100;
          const spent = INITIAL_PURSE - team.purse;

          return (
            <Card
              key={team.id}
              className="p-4 border-2"
              style={{ borderColor: team.color + '40' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: team.color }}
                >
                  {team.shortName}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{team.name}</h3>
                  <p className="text-xs text-muted-foreground">{team.players.length} players</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Purse Remaining</span>
                  <span className="font-bold text-foreground">₹{team.purse.toLocaleString()}</span>
                </div>
                <Progress value={pursePercentage} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Spent: ₹{spent.toLocaleString()}</span>
                  <span>{pursePercentage.toFixed(0)}% left</span>
                </div>
              </div>

              {team.players.length > 0 && (
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">SQUAD</p>
                  <ScrollArea className="h-40">
                    <div className="space-y-2">
                      {team.players.map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-2 bg-muted/50 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                              <img
                                src={player.photoUrl}
                                alt={player.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                            <div>
                              <p className="text-xs font-medium text-foreground truncate max-w-[100px]">
                                {player.name}
                              </p>
                              <p className="text-[10px] text-muted-foreground">{player.style}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            ₹{player.soldPrice}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-foreground">Team Purses</h3>
      </div>

      <div className="space-y-3">
        {sortedTeams.map((team) => {
          const pursePercentage = (team.purse / INITIAL_PURSE) * 100;

          return (
            <div key={team.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: team.color }}
                  />
                  <span className="text-sm font-medium text-foreground">{team.shortName}</span>
                  <span className="text-xs text-muted-foreground">
                    ({team.players.length})
                  </span>
                </div>
                <span className="text-sm font-bold text-foreground">
                  ₹{team.purse.toLocaleString()}
                </span>
              </div>
              <Progress value={pursePercentage} className="h-1.5" />
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total Remaining</span>
          <span className="font-bold text-primary">
            ₹{teams.reduce((sum, t) => sum + t.purse, 0).toLocaleString()}
          </span>
        </div>
      </div>
    </Card>
  );
};
