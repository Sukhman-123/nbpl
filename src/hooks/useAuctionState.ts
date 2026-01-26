import { useState, useCallback, useEffect } from "react";
import { Player, Team, SoldPlayer, teams as initialTeams, players, INITIAL_PURSE } from "@/data/auctionData";

export type AuctionStatus = "not_started" | "in_progress" | "paused" | "completed";

interface AuctionState {
  status: AuctionStatus;
  teams: Team[];
  unsoldPlayers: Player[];
  currentPlayer: Player | null;
  currentBid: number;
  currentBidder: Team | null;
  soldPlayersLog: Array<{
    player: SoldPlayer;
    team: Team;
    timestamp: string;
  }>;
}

const STORAGE_KEY = "nbpl_auction_state";

const getInitialState = (): AuctionState => {
  // Try to load from localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Invalid saved state, use default
    }
  }
  
  return {
    status: "not_started",
    teams: initialTeams.map(t => ({ ...t, purse: INITIAL_PURSE, players: [] })),
    unsoldPlayers: [...players],
    currentPlayer: null,
    currentBid: 0,
    currentBidder: null,
    soldPlayersLog: [],
  };
};

export const useAuctionState = () => {
  const [state, setState] = useState<AuctionState>(getInitialState);

  // Save to localStorage on state change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const startAuction = useCallback(() => {
    setState(prev => ({ ...prev, status: "in_progress" }));
  }, []);

  const pauseAuction = useCallback(() => {
    setState(prev => ({ ...prev, status: "paused" }));
  }, []);

  const resumeAuction = useCallback(() => {
    setState(prev => ({ ...prev, status: "in_progress" }));
  }, []);

  const selectPlayer = useCallback((player: Player) => {
    setState(prev => ({
      ...prev,
      currentPlayer: player,
      currentBid: player.basePrice,
      currentBidder: null,
    }));
  }, []);

  const placeBid = useCallback((team: Team, amount: number) => {
    setState(prev => {
      const teamData = prev.teams.find(t => t.id === team.id);
      if (!teamData || teamData.purse < amount) return prev;
      
      return {
        ...prev,
        currentBid: amount,
        currentBidder: teamData,
      };
    });
  }, []);

  const incrementBid = useCallback((team: Team, increment: number = 50) => {
    setState(prev => {
      const teamData = prev.teams.find(t => t.id === team.id);
      const newBid = prev.currentBid + increment;
      if (!teamData || teamData.purse < newBid) return prev;
      
      return {
        ...prev,
        currentBid: newBid,
        currentBidder: teamData,
      };
    });
  }, []);

  const sellPlayer = useCallback(() => {
    setState(prev => {
      if (!prev.currentPlayer || !prev.currentBidder) return prev;

      const soldPlayer: SoldPlayer = {
        ...prev.currentPlayer,
        soldPrice: prev.currentBid,
        soldAt: new Date().toISOString(),
      };

      const updatedTeams = prev.teams.map(team => {
        if (team.id === prev.currentBidder!.id) {
          return {
            ...team,
            purse: team.purse - prev.currentBid,
            players: [...team.players, soldPlayer],
          };
        }
        return team;
      });

      const updatedUnsoldPlayers = prev.unsoldPlayers.filter(
        p => p.id !== prev.currentPlayer!.id
      );

      return {
        ...prev,
        teams: updatedTeams,
        unsoldPlayers: updatedUnsoldPlayers,
        currentPlayer: null,
        currentBid: 0,
        currentBidder: null,
        soldPlayersLog: [
          ...prev.soldPlayersLog,
          {
            player: soldPlayer,
            team: prev.currentBidder!,
            timestamp: new Date().toLocaleTimeString(),
          },
        ],
      };
    });
  }, []);

  const markUnsold = useCallback(() => {
    setState(prev => {
      if (!prev.currentPlayer) return prev;
      
      // Move player to end of unsold list for potential retry
      const player = prev.currentPlayer;
      const remaining = prev.unsoldPlayers.filter(p => p.id !== player.id);
      
      return {
        ...prev,
        unsoldPlayers: [...remaining, player],
        currentPlayer: null,
        currentBid: 0,
        currentBidder: null,
      };
    });
  }, []);

  const resetAuction = useCallback(() => {
    const freshState: AuctionState = {
      status: "not_started",
      teams: initialTeams.map(t => ({ ...t, purse: INITIAL_PURSE, players: [] })),
      unsoldPlayers: [...players],
      currentPlayer: null,
      currentBid: 0,
      currentBidder: null,
      soldPlayersLog: [],
    };
    setState(freshState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportAuctionData = useCallback(() => {
    const rows = [
      ["Sr No", "Player Name", "Category", "Base Price", "Style", "Team Sold To", "Sold Price", "Timestamp"],
    ];

    state.soldPlayersLog.forEach((log, index) => {
      rows.push([
        String(index + 1),
        log.player.name,
        log.player.category,
        String(log.player.basePrice),
        log.player.style,
        log.team.name,
        String(log.player.soldPrice),
        log.timestamp,
      ]);
    });

    const csv = rows.map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `NBPL_Season3_Auction_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [state.soldPlayersLog]);

  return {
    ...state,
    startAuction,
    pauseAuction,
    resumeAuction,
    selectPlayer,
    placeBid,
    incrementBid,
    sellPlayer,
    markUnsold,
    resetAuction,
    exportAuctionData,
  };
};
