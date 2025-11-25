import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Teams = () => {
  const { seasonId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Teams & Owners - Season {seasonId}
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Meet the teams and their proud owners
        </p>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-cricket-orange/30">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Team Information Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detailed team and owner information for Season {seasonId} will be available here. 
                This section will feature:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8 text-left max-w-3xl mx-auto">
                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-2">Team Details</Badge>
                  <p className="text-sm text-muted-foreground">• Team names and logos</p>
                  <p className="text-sm text-muted-foreground">• Team colors and jerseys</p>
                  <p className="text-sm text-muted-foreground">• Squad compositions</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-2">Owner Information</Badge>
                  <p className="text-sm text-muted-foreground">• Owner names and profiles</p>
                  <p className="text-sm text-muted-foreground">• Team management</p>
                  <p className="text-sm text-muted-foreground">• Support staff details</p>
                </div>
              </div>
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

export default Teams;
