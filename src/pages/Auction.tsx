import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AuctionHero } from "@/components/auction/AuctionHero";
import { AuctionLive } from "@/components/auction/AuctionLive";
import { TeamPursePanel } from "@/components/auction/TeamPursePanel";
import { PlayerPool } from "@/components/auction/PlayerPool";
import { SoldPlayersLog } from "@/components/auction/SoldPlayersLog";
import { useAuctionState } from "@/hooks/useAuctionState";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Gavel, Users, Trophy, History, ArrowLeft } from "lucide-react";

const Auction = () => {
  const auctionState = useAuctionState();
  const [activeTab, setActiveTab] = useState("auction");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {auctionState.status === "not_started" ? (
        <AuctionHero onStart={auctionState.startAuction} />
      ) : (
        <div className="container mx-auto px-4 py-6">
          {/* Back Button */}
          <div className="mb-4">
            <Button
              variant="outline"
              onClick={auctionState.stopAuction}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Start
            </Button>
          </div>

          {/* Header Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4 border border-primary/30">
              <p className="text-sm text-muted-foreground">Total Players</p>
              <p className="text-3xl font-black text-primary">107</p>
            </div>
            <div className="bg-gradient-to-br from-cricket-green/20 to-cricket-green/5 rounded-xl p-4 border border-cricket-green/30">
              <p className="text-sm text-muted-foreground">Sold</p>
              <p className="text-3xl font-black text-cricket-green">
                {auctionState.soldPlayersLog.length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cricket-orange/20 to-cricket-orange/5 rounded-xl p-4 border border-cricket-orange/30">
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className="text-3xl font-black text-cricket-orange">
                {auctionState.unsoldPlayers.length}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cricket-gold/20 to-cricket-gold/5 rounded-xl p-4 border border-cricket-gold/30">
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="text-3xl font-black text-cricket-gold">
                ₹{auctionState.soldPlayersLog.reduce((sum, log) => sum + log.player.soldPrice, 0).toLocaleString()}
              </p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 h-12">
              <TabsTrigger value="auction" className="gap-2">
                <Gavel className="h-4 w-4" />
                <span className="hidden sm:inline">Live Auction</span>
              </TabsTrigger>
              <TabsTrigger value="players" className="gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Player Pool</span>
              </TabsTrigger>
              <TabsTrigger value="teams" className="gap-2">
                <Trophy className="h-4 w-4" />
                <span className="hidden sm:inline">Teams</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="gap-2">
                <History className="h-4 w-4" />
                <span className="hidden sm:inline">History</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="auction" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <AuctionLive
                    currentPlayer={auctionState.currentPlayer}
                    currentBid={auctionState.currentBid}
                    currentBidder={auctionState.currentBidder}
                    teams={auctionState.teams}
                    status={auctionState.status}
                    onIncrementBid={auctionState.incrementBid}
                    onSellPlayer={auctionState.sellPlayer}
                    onMarkUnsold={auctionState.markUnsold}
                    onPause={auctionState.pauseAuction}
                    onResume={auctionState.resumeAuction}
                    onReset={auctionState.resetAuction}
                    onExport={auctionState.exportAuctionData}
                  />
                </div>
                <div>
                  <TeamPursePanel teams={auctionState.teams} />
                </div>
              </div>
              
              {/* Quick Player Select */}
              <PlayerPool
                players={auctionState.unsoldPlayers}
                onSelectPlayer={auctionState.selectPlayer}
                currentPlayerId={auctionState.currentPlayer?.id}
                compact
              />
            </TabsContent>

            <TabsContent value="players">
              <PlayerPool
                players={auctionState.unsoldPlayers}
                onSelectPlayer={auctionState.selectPlayer}
                currentPlayerId={auctionState.currentPlayer?.id}
              />
            </TabsContent>

            <TabsContent value="teams">
              <TeamPursePanel teams={auctionState.teams} expanded />
            </TabsContent>

            <TabsContent value="history">
              <SoldPlayersLog 
                log={auctionState.soldPlayersLog}
                onExport={auctionState.exportAuctionData}
              />
            </TabsContent>
          </Tabs>
        </div>
      )}

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

export default Auction;
