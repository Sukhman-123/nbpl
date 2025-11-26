import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import nbplLogo from "@/assets/nbpl-logo.png";

const seasons = [
  { name: "Season 1", path: "/seasons/1" },
  { name: "Season 2", path: "/seasons/2" },
  { name: "Season 3", path: "/seasons/3" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={nbplLogo} alt="NBPL" className="h-10 w-10" />
            <span className="hidden sm:inline-block text-lg font-bold text-foreground">
              NBPL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" className="font-medium">
                Home
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center gap-1 font-medium">
                  Seasons
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="z-50 min-w-[200px]">
                {seasons.map((season) => (
                  <DropdownMenuItem asChild key={season.path}>
                    <Link to={season.path}>{season.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center gap-1 font-medium">
                  Players
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="z-50 min-w-[200px]">
                {seasons.map((season) => (
                  <DropdownMenuItem asChild key={season.path}>
                    <Link to={`/players${season.path.replace("/seasons", "")}`}>
                      {season.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center gap-1 font-medium">
                  Teams & Owners
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="z-50 min-w-[220px]">
                {seasons.map((season) => (
                  <DropdownMenuItem asChild key={season.path}>
                    <Link to={`/teams${season.path.replace("/seasons", "")}`}>
                      {season.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/gallery">
              <Button variant="ghost" className="font-medium">
                Gallery
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="ghost" className="font-medium">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Seasons Dropdown */}
            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('seasons')}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Seasons</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${openDropdown === 'seasons' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'seasons' && (
                <div className="mt-2 space-y-1">
                  {seasons.map((season) => (
                    <Link
                      key={season.path}
                      to={season.path}
                      className="block pl-4 py-2 rounded-md hover:bg-accent text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {season.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Players Dropdown */}
            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('players')}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Players</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${openDropdown === 'players' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'players' && (
                <div className="mt-2 space-y-1">
                  {seasons.map((season) => (
                    <Link
                      key={season.path}
                      to={`/players${season.path.replace("/seasons", "")}`}
                      className="block pl-4 py-2 rounded-md hover:bg-accent text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {season.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Teams & Owners Dropdown */}
            <div className="px-4 py-2">
              <button
                onClick={() => toggleDropdown('teams')}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Teams & Owners</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${openDropdown === 'teams' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'teams' && (
                <div className="mt-2 space-y-1">
                  {seasons.map((season) => (
                    <Link
                      key={season.path}
                      to={`/teams${season.path.replace("/seasons", "")}`}
                      className="block pl-4 py-2 rounded-md hover:bg-accent text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {season.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="block px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="block px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
