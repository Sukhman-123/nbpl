import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gavel, Users, Wallet, Trophy, Flame, Zap } from "lucide-react";
import { players, teams, INITIAL_PURSE } from "@/data/auctionData";

interface AuctionHeroProps {
  onStart: () => void;
}

export const AuctionHero = ({ onStart }: AuctionHeroProps) => {
  const foreignPlayers = players.filter(p => p.category === "Foreign").length;
  const localPlayers = players.filter(p => p.category === "Ward - 77").length;
  const batsmen = players.filter(p => p.style === "Batsman").length;
  const bowlers = players.filter(p => p.style === "Bowler").length;
  const allRounders = players.filter(p => p.style === "All rounder").length;

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-cricket-orange/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--cricket-orange)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.15),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cricket-orange/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cricket-gold/10 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <Badge className="px-6 py-2 text-lg bg-gradient-to-r from-cricket-orange/20 to-primary/20 border-cricket-orange/30 text-cricket-orange">
            <Flame className="w-5 h-5 mr-2" />
            SEASON 3 • FEBRUARY 2026
          </Badge>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-cricket-orange to-cricket-gold bg-clip-text text-transparent">
                MEGA
              </span>
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground">
              AUCTION
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Where legends are made and teams are built. 
            <span className="text-primary font-semibold"> 108 players</span>, 
            <span className="text-cricket-orange font-semibold"> 8 teams</span>, 
            <span className="text-cricket-gold font-semibold"> 1 champion</span>.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-4xl font-black text-foreground">{players.length}</p>
              <p className="text-sm text-muted-foreground">Total Players</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cricket-orange/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <Trophy className="h-8 w-8 text-cricket-orange mx-auto mb-2" />
              <p className="text-4xl font-black text-foreground">{teams.length}</p>
              <p className="text-sm text-muted-foreground">Teams</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cricket-gold/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <Wallet className="h-8 w-8 text-cricket-gold mx-auto mb-2" />
              <p className="text-4xl font-black text-foreground">₹{(INITIAL_PURSE * teams.length / 1000).toFixed(0)}K</p>
              <p className="text-sm text-muted-foreground">Total Pool</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cricket-green/30 rounded-2xl p-6 hover:scale-105 transition-transform">
              <Gavel className="h-8 w-8 text-cricket-green mx-auto mb-2" />
              <p className="text-4xl font-black text-foreground">₹{INITIAL_PURSE.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Per Team</p>
            </div>
          </div>

          {/* Player Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 bg-primary/10">
              {foreignPlayers} Foreign Players • ₹300 Base
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-cricket-orange/50 bg-cricket-orange/10">
              {localPlayers} Ward-77 Players • ₹100 Base
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-3 py-1.5 text-xs">
              🏏 {batsmen} Batsmen
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5 text-xs">
              🎯 {bowlers} Bowlers
            </Badge>
            <Badge variant="outline" className="px-3 py-1.5 text-xs">
              ⭐ {allRounders} All-Rounders
            </Badge>
          </div>

          {/* Team Names Ticker */}
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-4 animate-marquee">
              {[...teams, ...teams].map((team, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-4 py-2 bg-card/50 border border-border rounded-lg"
                  style={{ borderLeftColor: team.color, borderLeftWidth: '4px' }}
                >
                  <span className="font-semibold text-foreground">{team.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={onStart}
            className="px-12 py-8 text-xl font-bold bg-gradient-to-r from-primary via-cricket-orange to-cricket-gold hover:opacity-90 shadow-2xl hover:shadow-primary/25 transition-all hover:scale-105"
          >
            <Zap className="h-6 w-6 mr-3" />
            START AUCTION
          </Button>

          <p className="text-sm text-muted-foreground">
            Click to begin the live auction management system
          </p>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
