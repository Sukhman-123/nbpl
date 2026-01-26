import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SoldPlayer, Team } from "@/data/auctionData";
import { Download, History, TrendingUp, User } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SoldPlayersLogProps {
  log: Array<{
    player: SoldPlayer;
    team: Team;
    timestamp: string;
  }>;
  onExport: () => void;
}

export const SoldPlayersLog = ({ log, onExport }: SoldPlayersLogProps) => {
  const totalSpent = log.reduce((sum, item) => sum + item.player.soldPrice, 0);
  const avgPrice = log.length > 0 ? Math.round(totalSpent / log.length) : 0;
  const highestBid = log.length > 0 ? Math.max(...log.map(l => l.player.soldPrice)) : 0;
  const highestBidPlayer = log.find(l => l.player.soldPrice === highestBid);

  const getStyleColor = (style: string) => {
    switch (style) {
      case "Batsman": return "bg-cricket-orange/20 text-cricket-orange";
      case "Bowler": return "bg-primary/20 text-primary";
      case "All rounder": return "bg-cricket-gold/20 text-cricket-gold";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-primary/10 to-background">
          <p className="text-sm text-muted-foreground">Players Sold</p>
          <p className="text-3xl font-black text-primary">{log.length}</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-cricket-gold/10 to-background">
          <p className="text-sm text-muted-foreground">Total Spent</p>
          <p className="text-3xl font-black text-cricket-gold">₹{totalSpent.toLocaleString()}</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-cricket-orange/10 to-background">
          <p className="text-sm text-muted-foreground">Average Price</p>
          <p className="text-3xl font-black text-cricket-orange">₹{avgPrice}</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-cricket-green/10 to-background">
          <p className="text-sm text-muted-foreground">Highest Bid</p>
          <p className="text-3xl font-black text-cricket-green">₹{highestBid}</p>
          {highestBidPlayer && (
            <p className="text-xs text-muted-foreground truncate">{highestBidPlayer.player.name}</p>
          )}
        </Card>
      </div>

      {/* Export Button */}
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          Auction History
        </h3>
        <Button onClick={onExport} variant="outline" disabled={log.length === 0}>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Instructions for Google Sheets */}
      <Card className="p-4 bg-muted/50 border-dashed">
        <p className="text-sm text-muted-foreground">
          <strong>📊 Google Sheets Integration:</strong> Click "Export CSV" to download auction data. 
          Create a Google Sheet with columns: <code className="bg-background px-1 rounded">Sr No, Player Name, Category, Base Price, Style, Team Sold To, Sold Price, Timestamp</code>
        </p>
      </Card>

      {log.length > 0 ? (
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Player</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Style</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-right">Base</TableHead>
                <TableHead className="text-right">Sold</TableHead>
                <TableHead className="text-right">Premium</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...log].reverse().map((item, index) => {
                const premium = item.player.soldPrice - item.player.basePrice;
                const premiumPercent = ((premium / item.player.basePrice) * 100).toFixed(0);
                
                return (
                  <TableRow key={item.player.id}>
                    <TableCell className="font-medium">{log.length - index}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                          <img
                            src={item.player.photoUrl}
                            alt={item.player.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <span className="font-medium">{item.player.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {item.player.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-xs ${getStyleColor(item.player.style)}`}>
                        {item.player.style}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold" style={{ color: item.team.color }}>
                        {item.team.shortName}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">₹{item.player.basePrice}</TableCell>
                    <TableCell className="text-right font-bold text-primary">
                      ₹{item.player.soldPrice}
                    </TableCell>
                    <TableCell className="text-right">
                      {premium > 0 ? (
                        <span className="text-cricket-green flex items-center justify-end gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +{premiumPercent}%
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Base</span>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {item.timestamp}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <Card className="p-12 text-center">
          <History className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">No Players Sold Yet</h3>
          <p className="text-muted-foreground">
            Start the auction and sell players to see the history here.
          </p>
        </Card>
      )}
    </div>
  );
};
