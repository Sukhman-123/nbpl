import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Calendar, Users, Award } from "lucide-react";

const Seasons = () => {
  const { seasonId } = useParams();

  const seasonData = {
    "1": {
      year: "2023",
      winner: "Sunny Strikers",
      teams: 8,
      matches: 16,
      status: "Completed",
    },
    "2": {
      year: "2024",
      winner: "NMCC Titans",
      teams: 8,
      matches: 16,
      status: "Completed",
    },
    "3": {
      year: "2025",
      winner: "Upcoming",
      teams: 8,
      matches: "TBA",
      status: "Upcoming",
    },
  };

  const season = seasonData[seasonId as keyof typeof seasonData];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Season {seasonId}
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          {season?.year} Edition
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-gradient-card border-primary/30">
              <div className="flex flex-col items-center text-center space-y-3">
                <Trophy className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Winner</p>
                  <p className="text-xl font-bold text-foreground">{season?.winner}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-cricket-blue/30">
              <div className="flex flex-col items-center text-center space-y-3">
                <Users className="h-10 w-10 text-cricket-blue" />
                <div>
                  <p className="text-sm text-muted-foreground">Teams</p>
                  <p className="text-xl font-bold text-foreground">{season?.teams}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-cricket-orange/30">
              <div className="flex flex-col items-center text-center space-y-3">
                <Calendar className="h-10 w-10 text-cricket-orange" />
                <div>
                  <p className="text-sm text-muted-foreground">Matches</p>
                  <p className="text-xl font-bold text-foreground">{season?.matches}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-cricket-gold/30">
              <div className="flex flex-col items-center text-center space-y-3">
                <Award className="h-10 w-10 text-cricket-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-xl font-bold text-foreground">{season?.status}</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-card border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Season Highlights</h2>
            <p className="text-muted-foreground mb-6">
              Detailed information about Season {seasonId} will be updated soon. Stay tuned for match schedules, player statistics, and memorable moments from this exciting season.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>• Match schedules and results</p>
              <p>• Player performance statistics</p>
              <p>• Team standings and rankings</p>
              <p>• Photo gallery and highlights</p>
            </div>
          </Card>
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

export default Seasons;
