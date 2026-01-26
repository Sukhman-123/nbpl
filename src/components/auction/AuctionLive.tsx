import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Player, Team } from "@/data/auctionData";
import { AuctionStatus } from "@/hooks/useAuctionState";
import { Gavel, Check, X, Pause, Play, RotateCcw, Download, User } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AuctionLiveProps {
  currentPlayer: Player | null;
  currentBid: number;
  currentBidder: Team | null;
  teams: Team[];
  status: AuctionStatus;
  onIncrementBid: (team: Team, increment?: number) => void;
  onSellPlayer: () => void;
  onMarkUnsold: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onExport: () => void;
}

export const AuctionLive = ({
  currentPlayer,
  currentBid,
  currentBidder,
  teams,
  status,
  onIncrementBid,
  onSellPlayer,
  onMarkUnsold,
  onPause,
  onResume,
  onReset,
  onExport,
}: AuctionLiveProps) => {
  const bidIncrements = [50, 100, 200, 500];

  const getStyleColor = (style: string) => {
    switch (style) {
      case "Batsman": return "bg-cricket-orange/20 text-cricket-orange border-cricket-orange/30";
      case "Bowler": return "bg-primary/20 text-primary border-primary/30";
      case "All rounder": return "bg-cricket-gold/20 text-cricket-gold border-cricket-gold/30";
      default: return "bg-muted";
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-background border-2 border-primary/20">
      {/* Controls Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${status === "in_progress" ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`} />
          <span className="font-semibold text-foreground">
            {status === "in_progress" ? "LIVE" : status === "paused" ? "PAUSED" : "AUCTION"}
          </span>
        </div>
        <div className="flex gap-2">
          {status === "in_progress" ? (
            <Button variant="outline" size="sm" onClick={onPause}>
              <Pause className="h-4 w-4 mr-1" /> Pause
            </Button>
          ) : status === "paused" ? (
            <Button variant="outline" size="sm" onClick={onResume}>
              <Play className="h-4 w-4 mr-1" /> Resume
            </Button>
          ) : null}
          <Button variant="outline" size="sm" onClick={onExport}>
            <Download className="h-4 w-4 mr-1" /> Export
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-destructive">
                <RotateCcw className="h-4 w-4 mr-1" /> Reset
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset Auction?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will reset all auction data including sold players and team purses. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onReset} className="bg-destructive text-destructive-foreground">
                  Reset Everything
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {currentPlayer ? (
        <div className="space-y-6">
          {/* Current Player Card */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Player Photo */}
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-cricket-orange/20 border-4 border-primary/30">
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
                  <User className="w-20 h-20 text-muted-foreground" />
                </div>
              </div>
              <Badge className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${getStyleColor(currentPlayer.style)}`}>
                {currentPlayer.style}
              </Badge>
            </div>

            {/* Player Info */}
            <div className="flex-1 text-center md:text-left">
              <Badge variant="outline" className="mb-2">
                {currentPlayer.category}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-1">
                {currentPlayer.name}
              </h2>
              <p className="text-muted-foreground">
                Base Price: <span className="text-primary font-bold">₹{currentPlayer.basePrice}</span>
              </p>
            </div>

            {/* Current Bid Display */}
            <div className="text-center p-6 bg-gradient-to-br from-cricket-gold/20 to-cricket-orange/20 rounded-2xl border border-cricket-gold/30">
              <p className="text-sm text-muted-foreground mb-1">Current Bid</p>
              <p className="text-5xl font-black text-cricket-gold">₹{currentBid}</p>
              {currentBidder && (
                <p className="text-sm mt-2 font-semibold" style={{ color: currentBidder.color }}>
                  {currentBidder.name}
                </p>
              )}
            </div>
          </div>

          {/* Bidding Controls */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-muted-foreground text-center">SELECT TEAM TO BID</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {teams.map((team) => (
                <div key={team.id} className="space-y-2">
                  <div 
                    className="p-3 bg-card rounded-lg border-2 text-center"
                    style={{ borderColor: team.color + '40' }}
                  >
                    <p className="font-bold text-sm truncate" style={{ color: team.color }}>
                      {team.shortName}
                    </p>
                    <p className="text-xs text-muted-foreground">₹{team.purse.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {bidIncrements.slice(0, 2).map((inc) => (
                      <Button
                        key={inc}
                        size="sm"
                        variant="outline"
                        className="text-xs px-2"
                        disabled={team.purse < currentBid + inc}
                        onClick={() => onIncrementBid(team, inc)}
                      >
                        +{inc}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-cricket-green hover:bg-cricket-green/90 text-white px-8"
              onClick={onSellPlayer}
              disabled={!currentBidder}
            >
              <Check className="h-5 w-5 mr-2" />
              SOLD to {currentBidder?.shortName || "..."}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-destructive text-destructive hover:bg-destructive/10 px-8"
              onClick={onMarkUnsold}
            >
              <X className="h-5 w-5 mr-2" />
              UNSOLD
            </Button>
          </div>
        </div>
      ) : (
        /* No Player Selected */
        <div className="text-center py-16 space-y-4">
          <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
            <Gavel className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Select a Player</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Choose a player from the pool below to begin bidding. 
            Click on any player card to bring them to the auction block.
          </p>
        </div>
      )}
    </Card>
  );
};
