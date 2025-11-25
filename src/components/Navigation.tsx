import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import nbplLogo from "@/assets/nbpl-logo.png";
import { cn } from "@/lib/utils";

const seasons = [
  { name: "Season 1", path: "/seasons/1" },
  { name: "Season 2", path: "/seasons/2" },
  { name: "Season 3", path: "/seasons/3" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Seasons</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-popover">
                    {seasons.map((season) => (
                      <li key={season.path}>
                        <Link to={season.path}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {season.name}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Players</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-popover">
                    {seasons.map((season) => (
                      <li key={season.path}>
                        <Link to={`/players${season.path.replace("/seasons", "")}`}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {season.name}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Teams & Owners</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-popover">
                    {seasons.map((season) => (
                      <li key={season.path}>
                        <Link to={`/teams${season.path.replace("/seasons", "")}`}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {season.name}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/gallery">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
          <div className="lg:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-muted-foreground mb-2">Seasons</div>
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

            <div className="px-4 py-2">
              <div className="text-sm font-medium text-muted-foreground mb-2">Players</div>
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

            <div className="px-4 py-2">
              <div className="text-sm font-medium text-muted-foreground mb-2">Teams & Owners</div>
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
