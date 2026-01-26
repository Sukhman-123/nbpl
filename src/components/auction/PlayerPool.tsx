import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Player } from "@/data/auctionData";
import { Search, Filter, User, Gavel } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PlayerPoolProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
  currentPlayerId?: number;
  compact?: boolean;
}

export const PlayerPool = ({ players, onSelectPlayer, currentPlayerId, compact = false }: PlayerPoolProps) => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [styleFilter, setStyleFilter] = useState<string>("all");

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "all" || player.category === categoryFilter;
    const matchesStyle = styleFilter === "all" || player.style === styleFilter;
    return matchesSearch && matchesCategory && matchesStyle;
  });

  const getStyleColor = (style: string) => {
    switch (style) {
      case "Batsman": return "bg-cricket-orange/20 text-cricket-orange border-cricket-orange/30";
      case "Bowler": return "bg-primary/20 text-primary border-primary/30";
      case "All rounder": return "bg-cricket-gold/20 text-cricket-gold border-cricket-gold/30";
      default: return "bg-muted";
    }
  };

  const getCategoryColor = (category: string) => {
    return category === "Foreign" 
      ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
      : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
  };

  if (compact) {
    return (
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <Gavel className="h-5 w-5 text-primary" />
            Quick Select ({filteredPlayers.length} available)
          </h3>
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[120px] h-8">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Foreign">Foreign</SelectItem>
                <SelectItem value="Ward - 77">Ward-77</SelectItem>
              </SelectContent>
            </Select>
            <Select value={styleFilter} onValueChange={setStyleFilter}>
              <SelectTrigger className="w-[120px] h-8">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Batsman">Batsman</SelectItem>
                <SelectItem value="Bowler">Bowler</SelectItem>
                <SelectItem value="All rounder">All-Rounder</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {filteredPlayers.slice(0, 20).map((player) => (
            <button
              key={player.id}
              onClick={() => onSelectPlayer(player)}
              className={`flex-shrink-0 p-3 rounded-xl border-2 transition-all hover:scale-105 ${
                currentPlayerId === player.id
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted mb-2">
                <img
                  src={player.photoUrl}
                  alt={player.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <p className="text-xs font-semibold text-foreground truncate w-20">{player.name.split(' ')[0]}</p>
              <p className="text-xs text-primary font-bold">₹{player.basePrice}</p>
            </button>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search players..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Foreign">Foreign (₹300)</SelectItem>
              <SelectItem value="Ward - 77">Ward-77 (₹100)</SelectItem>
            </SelectContent>
          </Select>
          <Select value={styleFilter} onValueChange={setStyleFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              <SelectItem value="Batsman">Batsman</SelectItem>
              <SelectItem value="Bowler">Bowler</SelectItem>
              <SelectItem value="All rounder">All-Rounder</SelectItem>
            </SelectContent>
          </Select>
          <Badge variant="outline" className="ml-auto">
            {filteredPlayers.length} players
          </Badge>
        </div>
      </Card>

      {/* Player Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredPlayers.map((player) => (
          <Card
            key={player.id}
            className={`p-4 cursor-pointer transition-all hover:scale-105 ${
              currentPlayerId === player.id
                ? "border-2 border-primary ring-2 ring-primary/20"
                : "hover:border-primary/50"
            }`}
            onClick={() => onSelectPlayer(player)}
          >
            <div className="relative mb-3">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={player.photoUrl}
                  alt={player.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-muted-foreground" />
                </div>
              </div>
              <Badge className={`absolute -top-2 -right-2 text-[10px] ${getCategoryColor(player.category)}`}>
                {player.category === "Foreign" ? "F" : "L"}
              </Badge>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-foreground text-sm truncate" title={player.name}>
                {player.name}
              </p>
              <div className="flex items-center justify-between">
                <Badge className={`text-[10px] ${getStyleColor(player.style)}`}>
                  {player.style}
                </Badge>
                <span className="text-sm font-bold text-primary">₹{player.basePrice}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No players match your filters</p>
        </div>
      )}
    </div>
  );
};
