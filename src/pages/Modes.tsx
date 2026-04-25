import { SiteLayout } from "@/components/layout/SiteLayout";
import { Sun, Moon, Vote, Users, MessageSquare, Skull, Trophy, Clock } from "lucide-react";
import gameplayCards from "@/assets/gameplay-cards.jpg";
import dayNight from "@/assets/day-night.jpg";

const Modes = () => (
  <SiteLayout>
    <section className="relative pt-20 pb-12">
      <div className="container max-w-4xl text-center">
        <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-4">Game Modes</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">Two ways to <span className="text-ember">betray</span> your friends</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you want a tight strategy session or a screaming social deduction night, Fishy Business has a mode for that.
        </p>
      </div>
    </section>

    {/* CLASSIC */}
    <section className="container py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img src={gameplayCards} alt="Classic mode" loading="lazy" className="rounded-3xl shadow-deep w-full" />
          <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase flex items-center gap-2">
            <Sun className="w-4 h-4" /> Classic Mode
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl md:text-6xl mb-5">Classic</h2>
          <p className="text-lg text-muted-foreground mb-8">The original Fishy Business. Pure card-based path building, hidden roles, and quiet sabotage. Ideal for 4–6 players who like their lying contained.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Users, label: "Players", value: "3 – 8" },
              { icon: Clock, label: "Round Time", value: "8 – 12 min" },
              { icon: Trophy, label: "Goal", value: "Reach the gold" },
              { icon: Skull, label: "Saboteurs", value: "1 – 4 hidden" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-secondary/60 border border-border p-5">
                <s.icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{s.label}</p>
                <p className="font-display text-xl">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* DAY NIGHT */}
    <section className="container py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="lg:order-2 relative">
          <img src={dayNight} alt="Day Night mode" loading="lazy" className="rounded-3xl shadow-deep w-full" />
          <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 text-accent text-xs font-bold tracking-wider uppercase flex items-center gap-2">
            <Moon className="w-4 h-4" /> Day / Night Mode
          </div>
        </div>
        <div className="lg:order-1">
          <h2 className="font-display text-4xl md:text-6xl mb-5">Day & Night</h2>
          <p className="text-lg text-muted-foreground mb-8">All the chaos of Classic, plus rotating Day and Night phases. Argue, accuse, and vote suspects out of the round. Get it wrong and you might just hand the win to the saboteurs.</p>

          <div className="space-y-3">
            <PhaseCard icon={Sun} color="primary" title="Day Phase" desc="2 minutes of open discussion. Trade theories, defend yourself, build a case." />
            <PhaseCard icon={Vote} color="accent" title="Vote Phase" desc="Each player anonymously casts a suspicion. Majority kicks one player out for the night." />
            <PhaseCard icon={Moon} color="destructive" title="Night Phase" desc="Saboteurs act in secret. Diggers brace. Day breaks again — and the bodies pile up." />
          </div>
        </div>
      </div>
    </section>

    <section className="container py-20">
      <div className="rounded-3xl bg-cabin border border-border p-10 md:p-14 text-center">
        <MessageSquare className="w-10 h-10 text-primary mx-auto mb-5" />
        <h2 className="font-display text-3xl md:text-5xl">More modes <span className="text-ember">coming soon</span></h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Ranked, Speed Run, Couch Co-op LAN, and a custom rules sandbox are all on the roadmap. Vote on the next mode in our Discord.</p>
      </div>
    </section>
  </SiteLayout>
);

const PhaseCard = ({ icon: Icon, color, title, desc }: { icon: React.ComponentType<{ className?: string }>; color: "primary" | "accent" | "destructive"; title: string; desc: string }) => {
  const styles = {
    primary: "bg-primary/15 border-primary/40 text-primary",
    accent: "bg-accent/15 border-accent/40 text-accent",
    destructive: "bg-destructive/15 border-destructive/40 text-destructive",
  }[color];
  return (
    <div className="flex gap-4 items-start p-5 rounded-2xl bg-secondary/40 border border-border hover:border-primary/40 transition-colors">
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${styles}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-display text-lg mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default Modes;
