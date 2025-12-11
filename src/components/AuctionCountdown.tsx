import { useState, useEffect } from "react";
import { Gavel } from "lucide-react";

const AUCTION_DATE = new Date("2026-02-15T10:00:00");

const AuctionCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = AUCTION_DATE.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-cricket-orange/20 via-primary/20 to-cricket-gold/20 border-2 border-cricket-orange/50 rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Gavel className="w-6 h-6 md:w-8 md:h-8 text-cricket-orange" />
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          AUCTION COUNTDOWN
        </h3>
        <Gavel className="w-6 h-6 md:w-8 md:h-8 text-cricket-orange" />
      </div>
      
      <p className="text-center text-muted-foreground mb-6">
        Mid February 2026
      </p>

      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-lg mx-auto">
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-border">
          <p className="text-2xl md:text-4xl font-black text-primary">
            {timeLeft.days}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            DAYS
          </p>
        </div>
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-border">
          <p className="text-2xl md:text-4xl font-black text-cricket-orange">
            {timeLeft.hours.toString().padStart(2, "0")}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            HOURS
          </p>
        </div>
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-border">
          <p className="text-2xl md:text-4xl font-black text-cricket-gold">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            MINS
          </p>
        </div>
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-border">
          <p className="text-2xl md:text-4xl font-black text-cricket-blue">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            SECS
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuctionCountdown;
