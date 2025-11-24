import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import nbplLogo from "@/assets/nbpl-logo.png";
import cricketHero from "@/assets/cricket-hero.jpg";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
              className="w-40 h-40 md:w-56 md:h-56 animate-pulse"
            />
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tight leading-tight">
                NARSINGH BANDH<br />PREMIER LEAGUE
              </h1>
              <div className="inline-block bg-cricket-gold px-8 py-3 rounded-lg shadow-glow-secondary">
                <p className="text-3xl md:text-5xl font-bold text-background">SEASON 3</p>
              </div>
            </div>

            <div className="bg-card/90 backdrop-blur-sm border-2 border-cricket-orange rounded-2xl p-8 md:p-12 max-w-3xl w-full shadow-glow-secondary">
              <h2 className="text-3xl md:text-5xl font-black text-cricket-orange mb-4 animate-bounce">
                🏏 TEAM BOOKING NOW OPEN!
              </h2>
              <p className="text-xl md:text-2xl text-foreground font-semibold mb-6">
                Limited Spots Available
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-primary/20 px-6 py-3 rounded-lg border border-primary">
                  <p className="text-4xl md:text-6xl font-black text-primary">8</p>
                  <p className="text-sm text-muted-foreground font-medium">TEAMS ONLY</p>
                </div>
              </div>
              <Button variant="booking" size="lg" className="text-lg md:text-xl px-12 py-6 h-auto">
                REGISTER YOUR TEAM NOW
              </Button>
            </div>
          </div>
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
              <p className="text-muted-foreground">Limited slots available</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-cricket-blue/30 hover:border-cricket-blue transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-cricket-blue/20 p-4 rounded-full">
                <Calendar className="w-8 h-8 text-cricket-blue" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Coming Soon</h4>
              <p className="text-muted-foreground">Dates to be announced</p>
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

      {/* Call to Action */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            Don't Miss Your Chance!
          </h3>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
            Register your team today and be part of the most electrifying cricket tournament in Narsingh Bandh!
          </p>
          <Button variant="tournament" size="lg" className="text-lg px-12 py-6 h-auto">
            BOOK YOUR TEAM SLOT
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <img src={nbplLogo} alt="NBPL" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-muted-foreground">
            © 2025 Narsingh Bandh Premier League. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
