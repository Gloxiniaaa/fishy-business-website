import { Link } from "react-router-dom";
import { Map, Hammer, Wrench, Trophy, Skull, Eye, Lightbulb, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import pathCards from "@/assets/path-cards.jpg";
import sabotageImg from "@/assets/sabotage.jpg";
import gameplayCards from "@/assets/gameplay-cards.jpg";

const PageHeader = ({ kicker, title, accent, children }: { kicker: string; title: string; accent: string; children?: React.ReactNode }) => (
  <section className="relative pt-20 pb-12">
    <div className="container max-w-4xl text-center">
      <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-4">{kicker}</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
        {title} <span className="text-ember">{accent}</span>
      </h1>
      {children && <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{children}</p>}
    </div>
  </section>
);

const Gameplay = () => (
  <SiteLayout>
    <PageHeader kicker="Gameplay" title="How the lying" accent="actually works">
      Fishy Business is part path-building puzzle, part social deduction. Here's everything you need to know before your friends start screaming at you.
    </PageHeader>

    <section className="container py-12 grid lg:grid-cols-2 gap-12 items-center">
      <img src={pathCards} alt="Path cards on table" loading="lazy" className="rounded-3xl shadow-deep" />
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <Map className="w-3.5 h-3.5" /> Card Type 01
        </div>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Path Cards</h2>
        <p className="text-muted-foreground text-lg mb-6">
          Tile-shaped cards with paths printed on the edges. Place them adjacent to existing cards so the paths line up. Build a chain from the starting card to one of three hidden treasures.
        </p>
        <ul className="space-y-3 text-foreground/90">
          {["Paths must connect — no dead ends to nowhere", "Two of the three treasures are fakes", "Diggers want to reach the real treasure first"].map((p, i) => (
            <li key={i} className="flex gap-3"><span className="text-primary font-bold">→</span>{p}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="container py-12 grid lg:grid-cols-2 gap-12 items-center">
      <div className="lg:order-2"><img src={sabotageImg} alt="Sabotage card" loading="lazy" className="rounded-3xl shadow-deep" /></div>
      <div className="lg:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-bold uppercase tracking-wider mb-4">
          <Hammer className="w-3.5 h-3.5" /> Card Type 02
        </div>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Action & Sabotage</h2>
        <p className="text-muted-foreground text-lg mb-6">
          Break someone's pickaxe so they can't dig. Smash their lantern. Bend a path back on itself. Action cards are how you ruin the plan without showing your hand.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Broken Pickaxe", color: "destructive" },
            { name: "Smashed Lantern", color: "destructive" },
            { name: "Repair Kit", color: "success" },
            { name: "Map Peek", color: "accent" },
          ].map((c, i) => (
            <div key={i} className="rounded-xl border border-border bg-card/60 backdrop-blur p-4">
              <div className={`w-2 h-2 rounded-full bg-${c.color} mb-2`} />
              <p className="font-display text-sm">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-12 grid lg:grid-cols-2 gap-12 items-center">
      <img src={gameplayCards} alt="Repair card" loading="lazy" className="rounded-3xl shadow-deep" />
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/15 text-success text-xs font-bold uppercase tracking-wider mb-4">
          <Wrench className="w-3.5 h-3.5" /> System
        </div>
        <h2 className="font-display text-4xl md:text-5xl mb-4">Repair & Recover</h2>
        <p className="text-muted-foreground text-lg">
          Sabotaged players can't place path cards until repaired. Repair cards are precious — handing one out is a public statement of trust. Or a brilliant manipulation.
        </p>
      </div>
    </section>

    {/* WIN CONDITIONS */}
    <section className="container py-20">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">Victory</p>
        <h2 className="font-display text-4xl md:text-5xl">How rounds <span className="text-gold">end</span></h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glow-card p-8">
          <div className="w-14 h-14 rounded-2xl bg-success/15 border border-success/40 flex items-center justify-center mb-5">
            <Trophy className="w-7 h-7 text-success" />
          </div>
          <h3 className="font-display text-2xl mb-2">Diggers Win</h3>
          <p className="text-muted-foreground">A connected path reaches the real treasure. Gold is split between every Digger — and absolutely none for the Saboteurs.</p>
        </div>
        <div className="glow-card p-8">
          <div className="w-14 h-14 rounded-2xl bg-destructive/15 border border-destructive/40 flex items-center justify-center mb-5">
            <Skull className="w-7 h-7 text-destructive" />
          </div>
          <h3 className="font-display text-2xl mb-2">Saboteurs Win</h3>
          <p className="text-muted-foreground">The deck runs out before any path reaches treasure. Saboteurs split the pot and gloat insufferably until the next round.</p>
        </div>
      </div>
    </section>

    {/* QUICK TIPS */}
    <section className="container pb-20">
      <div className="rounded-3xl bg-cabin border border-border p-10 md:p-14">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-6 h-6 text-accent" />
          <h3 className="font-display text-3xl">Tips for new diggers</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {[
            "Don't rush the obvious path — that's how saboteurs hide.",
            "Watch who refuses to repair others. Always.",
            "Use Map Peek wisely. Don't reveal what you saw too cleanly.",
            "If everyone trusts you, you're already losing.",
          ].map((t, i) => (
            <div key={i} className="flex gap-3">
              <Eye className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground/90">{t}</p>
            </div>
          ))}
        </div>
        <Button asChild variant="ember" size="lg" className="mt-8">
          <Link to="/modes">Explore game modes <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  </SiteLayout>
);

export default Gameplay;
