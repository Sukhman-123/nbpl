import { useEffect, useState, useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { Player, Team, players, INITIAL_PURSE } from "@/data/auctionData";
import { Gavel, User, Users, Wallet, Trophy, Clock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TeamPurse {
  team_id: number;
  team_name: string;
  short_name: string;
  color: string;
  purse: number;
}

interface SoldPlayerDB {
  player_id: number;
  player_name: string;
  category: string;
  base_price: number;
  style: string;
  photo_url: string | null;
  sold_price: number;
  team_id: number;
  team_name: string;
  sold_at: string;
}

const PublicAuction = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string>("not_started");
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [teamPurses, setTeamPurses] = useState<TeamPurse[]>([]);
  const [soldPlayers, setSoldPlayers] = useState<SoldPlayerDB[]>([]);

  const fetchData = useCallback(async () => {
    try {
      // Fetch auction state
      const { data: auctionState } = await supabase
        .from("auction_state")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (auctionState) {
        setStatus(auctionState.status);
        if (auctionState.current_player_id) {
          const player = players.find(p => p.id === auctionState.current_player_id);
          setCurrentPlayer(player || null);
        } else {
          setCurrentPlayer(null);
        }
      }

      // Fetch team purses
      const { data: purses } = await supabase
        .from("team_purses")
        .select("*")
        .order("team_id");

      if (purses) {
        setTeamPurses(purses);
      }

      // Fetch sold players
      const { data: sold } = await supabase
        .from("sold_players")
        .select("*")
        .order("sold_at", { ascending: false });

      if (sold) {
        setSoldPlayers(sold);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();

    const channel = supabase
      .channel("public-auction-updates")
      .on("postgres_changes", { event: "*", schema: "public", table: "auction_state" }, fetchData)
      .on("postgres_changes", { event: "*", schema: "public", table: "team_purses" }, fetchData)
      .on("postgres_changes", { event: "*", schema: "public", table: "sold_players" }, fetchData)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchData]);

  const getStyleColor = (style: string) => {
    switch (style) {
      case "Batsman": return "bg-cricket-orange/20 text-cricket-orange";
      case "Bowler": return "bg-primary/20 text-primary";
      case "All rounder": return "bg-cricket-gold/20 text-cricket-gold";
      default: return "bg-muted";
    }
  };

  const getCategoryColor = (category: string) => {
    return category === "Foreign" 
      ? "bg-purple-500/20 text-purple-400"
      : "bg-cyan-500/20 text-cyan-400";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="animate-pulse text-primary text-xl">Loading auction data...</div>
        </div>
      </div>
    );
  }

  // Auction not started
  if (status === "not_started") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center h-[80vh]">
          <Card className="p-12 text-center max-w-lg">
            <Clock className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-black text-foreground mb-4">
              Auction Has Not Started Yet
            </h1>
            <p className="text-muted-foreground text-lg">
              The NBPL Season 3 Mega Auction will begin soon. Please check back later or refresh this page to see live updates.
            </p>
            <Badge className="mt-6 px-4 py-2 text-lg bg-primary/20 text-primary">
              SEASON 3 • FEBRUARY 2026
            </Badge>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Live Status Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
          <h1 className="text-2xl font-bold text-foreground">LIVE AUCTION</h1>
          <Badge className="bg-cricket-orange/20 text-cricket-orange">
            {status === "paused" ? "PAUSED" : "IN PROGRESS"}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Current Player - Left Column */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-to-br from-card to-background border-2 border-primary/20">
              <h2 className="text-lg font-bold text-muted-foreground mb-4 flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                CURRENTLY ON BLOCK
              </h2>

              {currentPlayer ? (
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Large Player Photo */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-cricket-orange/20 border-4 border-primary/30">
                    <img
                      src={currentPlayer.photoUrl}
                      alt={currentPlayer.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full flex items-center justify-center">
                      <User className="w-32 h-32 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground">
                      {currentPlayer.name}
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <Badge className={`px-4 py-2 text-lg ${getStyleColor(currentPlayer.style)}`}>
                        {currentPlayer.style}
                      </Badge>
                      <Badge className={`px-4 py-2 text-lg ${getCategoryColor(currentPlayer.category)}`}>
                        {currentPlayer.category}
                      </Badge>
                    </div>
                    <p className="text-2xl text-muted-foreground">
                      Base Price: <span className="text-primary font-bold">₹{currentPlayer.basePrice}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <Gavel className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">Waiting for Next Player</h3>
                  <p className="text-muted-foreground">The auctioneer is selecting the next player...</p>
                </div>
              )}
            </Card>

            {/* Sold Players Table */}
            <Card className="mt-6 p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-cricket-green" />
                SOLD PLAYERS ({soldPlayers.length})
              </h2>

              {soldPlayers.length > 0 ? (
                <ScrollArea className="h-[400px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Player</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {soldPlayers.map((sp) => {
                        const team = teamPurses.find(t => t.team_id === sp.team_id);
                        return (
                          <TableRow key={sp.player_id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                                  <img
                                    src={sp.photo_url || ""}
                                    alt={sp.player_name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                  />
                                </div>
                                <span className="font-medium">{sp.player_name}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={`text-xs ${getStyleColor(sp.style)}`}>
                                {sp.style}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {sp.category}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <span 
                                className="font-semibold"
                                style={{ color: team?.color || "#666" }}
                              >
                                {team?.short_name || sp.team_name}
                              </span>
                            </TableCell>
                            <TableCell className="text-right font-bold text-primary">
                              ₹{sp.sold_price.toLocaleString()}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ScrollArea>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No players sold yet
                </div>
              )}
            </Card>
          </div>

          {/* Team Purses - Right Column */}
          <div>
            <Card className="p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Wallet className="h-5 w-5 text-cricket-gold" />
                TEAM PURSES
              </h2>

              <div className="space-y-4">
                {teamPurses.map((team) => {
                  const pursePercentage = (team.purse / INITIAL_PURSE) * 100;
                  const soldByTeam = soldPlayers.filter(sp => sp.team_id === team.team_id);
                  
                  return (
                    <div key={team.team_id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: team.color }}
                          />
                          <span className="font-semibold text-foreground">{team.short_name}</span>
                          <span className="text-xs text-muted-foreground">
                            ({soldByTeam.length} players)
                          </span>
                        </div>
                        <span className="font-bold text-foreground">
                          ₹{team.purse.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={pursePercentage} className="h-2" />
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="mt-6 pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Players Sold</span>
                  <span className="font-bold text-primary">{soldPlayers.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Amount Spent</span>
                  <span className="font-bold text-cricket-gold">
                    ₹{soldPlayers.reduce((sum, sp) => sum + sp.sold_price, 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Purse Remaining</span>
                  <span className="font-bold text-cricket-green">
                    ₹{teamPurses.reduce((sum, t) => sum + t.purse, 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="p-4 bg-gradient-to-br from-primary/10 to-background">
                <Trophy className="h-6 w-6 text-primary mb-2" />
                <p className="text-2xl font-black text-primary">{teamPurses.length}</p>
                <p className="text-xs text-muted-foreground">Teams</p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-cricket-orange/10 to-background">
                <Users className="h-6 w-6 text-cricket-orange mb-2" />
                <p className="text-2xl font-black text-cricket-orange">
                  {players.length - soldPlayers.length}
                </p>
                <p className="text-xs text-muted-foreground">Remaining</p>
              </Card>
            </div>
          </div>
        </div>
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

export default PublicAuction;
