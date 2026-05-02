import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/saboteur", label: "Saboteur" },
  { to: "/social", label: "Social" },
  { to: "/modes", label: "Modes" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/download", label: "Download" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  // close menu on route change
  if (open && typeof window !== "undefined") {
    // noop — handled by onClick below
  }
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img src={logo} alt="Fishy Business logo" width={44} height={44} className="w-11 h-11 drop-shadow-[0_4px_18px_hsl(var(--primary)/0.55)] group-hover:scale-110 transition-transform" />
          <span className="font-display text-xl md:text-2xl tracking-tight">
            Fishy <span className="text-ember">Business</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary/15 text-primary shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.4)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ember" size="sm">
            <Link to="/download"><Download className="w-4 h-4" /> Get the Game</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium ${
                    isActive ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="ember" className="mt-2">
              <Link to="/download" onClick={() => setOpen(false)}>
                <Download className="w-4 h-4" /> Get the Game
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
