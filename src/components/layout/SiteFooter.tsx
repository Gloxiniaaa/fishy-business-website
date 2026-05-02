import { Link } from "react-router-dom";
import { Github, Twitter, MessageCircle, Download } from "lucide-react";
import logo from "@/assets/logo.png";

export const SiteFooter = () => (
  <footer className="relative mt-32 border-t border-border/60 bg-background/80">
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Fishy Business logo" width={48} height={48} className="w-12 h-12 drop-shadow-[0_4px_18px_hsl(var(--primary)/0.55)]" />
          <span className="font-display text-2xl">Fishy <span className="text-ember">Business</span></span>
        </div>
        <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
          A 3D social deduction party game. Build the path, sabotage your friends, and trust absolutely no one around the cabin table.
        </p>
        <div className="flex gap-3 mt-6">
          {/* <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center" aria-label="Discord"><MessageCircle className="w-5 h-5" /></a> */}
          {/* <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center" aria-label="Twitter"><Twitter className="w-5 h-5" /></a> */}
          <a href="https://github.com/LeHien6601/Fishy-Business" target="_blank" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center" aria-label="GitHub"><Github className="w-5 h-5" /></a>
        </div>
      </div>
      <div>
        <h4 className="font-display text-base mb-4 text-foreground">Game</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li><Link to="/saboteur" className="hover:text-primary transition-colors">Saboteur Rules</Link></li>
          <li><Link to="/modes" className="hover:text-primary transition-colors">Game Modes</Link></li>
          <li><Link to="/social" className="hover:text-primary transition-colors">Social Hub</Link></li>
          <li><Link to="/gallery" className="hover:text-primary transition-colors">Media</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-base mb-4 text-foreground">Project</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary transition-colors">About the Team</Link></li>
          <li><Link to="/download" className="hover:text-primary transition-colors flex items-center gap-1.5"><Download className="w-3.5 h-3.5" /> Download</Link></li>
          <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="ember-divider" />
    <div className="container py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Fishy Business. A graduation thesis project. All shenanigans reserved.</p>
      <p>Built with Unity · Netcode · Vivox · and Coffee </p>
    </div>
  </footer>
);
