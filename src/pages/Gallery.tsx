import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Gallery
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Relive the best moments from NBPL
        </p>

        <div className="max-w-6xl mx-auto">
          <Card className="p-12 bg-card border-cricket-blue/30">
            <div className="text-center space-y-4">
              <Camera className="h-16 w-16 text-cricket-blue mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">
                Photo Gallery Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're curating an amazing collection of photos from all seasons. 
                Soon you'll be able to browse through memorable moments, action shots, 
                victory celebrations, and behind-the-scenes glimpses from the tournament.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium text-foreground">Match Highlights</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Action-packed moments
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium text-foreground">Team Photos</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Official team portraits
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium text-foreground">Celebrations</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Victory moments
                  </p>
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

export default Gallery;
