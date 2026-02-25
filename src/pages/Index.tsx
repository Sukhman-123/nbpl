import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import nbplLogo from "@/assets/nbpl-logo.png";
import cricketHero from "@/assets/cricket-hero.jpg";
import { Trophy, Users, Calendar, MapPin, Mail, Gavel, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { season3Results, topAuctionPicks } from "@/data/season3Results";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${cricketHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col items-center text-center space-y-6">
            <img 
              src={nbplLogo} 
              alt="NBPL Logo" 
              className="w-32 h-32 md:w-44 md:h-44 animate-pulse"
            />
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-tight">
                NARSINGH BANDH<br />PREMIER LEAGUE
              </h1>
              <div className="inline-block bg-cricket-gold px-6 py-2 rounded-lg shadow-glow-secondary">
                <p className="text-2xl md:text-4xl font-bold text-background">SEASON 3</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1.5">
                <Gavel className="w-4 h-4 mr-1.5" />
                Auction Completed — 14 Feb 2026
              </Badge>
              <Badge className="bg-cricket-orange/20 text-cricket-orange border-cricket-orange/30 text-sm px-4 py-1.5">
                <Users className="w-4 h-4 mr-1.5" />
                8 Teams • 112 Players
              </Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Link to="/teams/3">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-cricket-orange">
                  View Team Squads
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/seasons/3">
                <Button size="lg" variant="outline" className="gap-2">
                  Season 3 Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top Auction Picks */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Star className="w-6 h-6 text-cricket-gold" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Top Auction Picks
          </h2>
          <Star className="w-6 h-6 text-cricket-gold" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topAuctionPicks.slice(0, 5).map((player, idx) => (
            <Card 
              key={player.playerNo}
              className="p-4 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="text-center space-y-2">
                <div 
                  className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-black text-lg"
                  style={{ backgroundColor: player.teamColor }}
                >
                  {idx + 1}
                </div>
                <p className="font-bold text-foreground text-sm">{player.name}</p>
                <Badge variant="outline" className="text-xs">
                  {player.style}
                </Badge>
                <p className="text-2xl font-black text-primary">₹{player.soldPrice.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{player.teamName}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Tournament Details */}
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Tournament Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-primary/20 p-4 rounded-full">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Season 3</h4>
              <p className="text-muted-foreground">The most exciting season yet!</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-cricket-orange/30 hover:border-cricket-orange transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-cricket-orange/20 p-4 rounded-full">
                <Users className="w-8 h-8 text-cricket-orange" />
              </div>
              <h4 className="text-xl font-bold text-foreground">8 Teams</h4>
              <p className="text-muted-foreground">Biggest season ever</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-cricket-blue/30 hover:border-cricket-blue transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-cricket-blue/20 p-4 rounded-full">
                <Calendar className="w-8 h-8 text-cricket-blue" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Coming Soon</h4>
              <p className="text-muted-foreground">Match dates to be announced</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-cricket-gold/30 hover:border-cricket-gold transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-cricket-gold/20 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-cricket-gold" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Narsingh Bandh</h4>
              <p className="text-muted-foreground">Home of champions</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Teams Overview */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
          Season 3 Teams
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {season3Results.map((team) => (
            <Link to="/teams/3" key={team.teamId}>
              <Card className="p-4 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
                <div className="text-center space-y-2">
                  <div 
                    className="w-12 h-12 mx-auto rounded-full flex items-center justify-center"
                    style={{ backgroundColor: team.color }}
                  >
                    <span className="text-white font-bold text-sm">{team.shortName}</span>
                  </div>
                  <p className="font-bold text-foreground text-sm">{team.teamName}</p>
                  <p className="text-xs text-muted-foreground">{team.players.length} Players</p>
                  <p className="text-xs text-primary font-semibold">Spent: ₹{team.totalSpent.toLocaleString()}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            Season 3 Is Coming!
          </h3>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
            The auction is complete. 8 teams are ready. Stay tuned for match schedules and the most electrifying cricket tournament in Burnpur!
          </p>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://drive.google.com/file/d/1uzx4TF7V03lmoSYSOp4ZsulpLyH4z5iF/preview"
                title="NBPL Highlights Video"
                allow="autoplay; fullscreen"
                className="h-full w-full rounded-xl border border-border bg-background"
              />
            </AspectRatio>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Narsingh Bandh Premier League. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Made with ❤️ by Sukhman Hundal | Instagram:{" "}
            <a
              href="https://www.instagram.com/sukhman.hundal_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cricket-blue hover:underline"
            >
              @sukhman.hundal_
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
