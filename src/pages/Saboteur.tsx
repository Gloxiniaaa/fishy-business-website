import { Link } from "react-router-dom";
import {
  Map,
  Hammer,
  Wrench,
  Trophy,
  Skull,
  Eye,
  Lightbulb,
  ArrowRight,
  Users,
  Pickaxe,
  Coins,
  Shuffle,
  Layers,
  Mountain,
  HardHat,
  ShoppingCart,
  Footprints,
  Compass,
  CircleDot,
  XCircle,
  CheckCircle2,
  HelpCircle,
  Flag,
  PlayCircle,
  RotateCw,
  Sparkles,
  ScrollText,
  AlertTriangle,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import board from "@/assets/board.png";
import actionCards from "@/assets/action-cards.png";
import boardLayout from "@/assets/board-layout.png";

/* ----------------------------- Reusable bits ----------------------------- */

const Kicker = ({ children, color = "primary" }: { children: React.ReactNode; color?: "primary" | "accent" | "destructive" | "success" }) => {
  const map = {
    primary: "text-primary",
    accent: "text-accent",
    destructive: "text-destructive",
    success: "text-success",
  } as const;
  return (
    <p className={`${map[color]} font-semibold uppercase tracking-[0.22em] text-xs mb-3`}>
      {children}
    </p>
  );
};

const SectionHeading = ({
  index,
  kicker,
  title,
  accent,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  accent?: string;
  children?: React.ReactNode;
}) => (
  <div className="max-w-3xl">
    <div className="flex items-center gap-3 mb-3">
      <span className="font-display text-sm px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/30">
        {index}
      </span>
      <Kicker>{kicker}</Kicker>
    </div>
    <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
      {title} {accent && <span className="text-ember">{accent}</span>}
    </h2>
    {children && <p className="mt-5 text-lg text-muted-foreground">{children}</p>}
  </div>
);

const Stat = ({ value, label, color = "ember" }: { value: string; label: string; color?: "ember" | "gold" }) => (
  <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 text-center">
    <div className={`font-display text-3xl md:text-4xl ${color === "ember" ? "text-ember" : "text-gold"}`}>
      {value}
    </div>
    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
  </div>
);

const Pill = ({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "destructive" | "success" | "accent" | "muted" }) => {
  const map = {
    primary: "bg-primary/15 text-primary border-primary/30",
    destructive: "bg-destructive/15 text-destructive border-destructive/30",
    success: "bg-success/15 text-success border-success/30",
    accent: "bg-accent/15 text-accent border-accent/40",
    muted: "bg-muted text-muted-foreground border-border",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${map[tone]}`}>
      {children}
    </span>
  );
};

/* ------------------------------- Page header ------------------------------ */

const PageHero = () => (
  <section className="relative pt-24 pb-16 overflow-hidden">
    <div className="absolute inset-0 bg-cabin opacity-90 -z-10" />
    <div className="container max-w-5xl text-center relative">
      <Kicker>Official Game Guide</Kicker>
      <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
        How to play <span className="text-ember">Saboteur</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        A 3D social-deduction tunnel-building party game for 3–10 friends. Built on the
        time-tested Saboteur ruleset — this is the complete reference you'll come back to mid-argument.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        <Stat value="3–10" label="Players" />
        <Stat value="3" label="Rounds" color="gold" />
        <Stat value="44" label="Path Cards" />
        <Stat value="27" label="Action Cards" color="gold" />
      </div>
    </div>
  </section>
);

/* ------------------------- 1. Overview & Objective ------------------------ */

const Overview = () => (
  <section className="container py-16">
    <SectionHeading index="01" kicker="Overview" title="Two roles," accent="one buried treasure">
      Every round, players are secretly dealt a role. Nobody knows who's on which team — and that's
      exactly the point. Survive three rounds with the most gold to win the whole game.
    </SectionHeading>

    <div className="grid md:grid-cols-2 gap-6 mt-10">
      <div className="glow-card p-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-success/10 blur-3xl" />
        <div className="w-14 h-14 rounded-2xl bg-success/15 border border-success/40 flex items-center justify-center mb-5">
          <Pickaxe className="w-7 h-7 text-success" />
        </div>
        <Pill tone="success">Team Good</Pill>
        <h3 className="font-display text-3xl mt-3 mb-3">Gold-Diggers</h3>
        <p className="text-muted-foreground">
          Cooperate (cautiously) to build a continuous tunnel from the Start card to the Goal that
          actually contains the treasure. Trust the wrong friend and you'll never see daylight.
        </p>
      </div>

      <div className="glow-card p-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-destructive/10 blur-3xl" />
        <div className="w-14 h-14 rounded-2xl bg-destructive/15 border border-destructive/40 flex items-center justify-center mb-5">
          <Skull className="w-7 h-7 text-destructive" />
        </div>
        <Pill tone="destructive">Team Evil</Pill>
        <h3 className="font-display text-3xl mt-3 mb-3">Saboteurs</h3>
        <p className="text-muted-foreground">
          Secretly derail the dig. Misdirect the path, break tools, and run the deck dry — all while
          smiling and pretending to "help." Roles are only revealed at the end of the round.
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 flex items-start gap-4">
      <Trophy className="w-6 h-6 text-accent shrink-0 mt-0.5" />
      <p className="text-foreground/90">
        <strong className="text-accent">Match goal:</strong> Play three full rounds. The player with the
        most gold nuggets at the end is the winner.
      </p>
    </div>
  </section>
);

/* ---------------------------- 2. Game Components -------------------------- */

const components = [
  {
    icon: Layers,
    name: "44 Path Cards",
    desc: "Tunnel tiles: straights, bends, intersections, dead-ends, plus 1 Start and 3 Goal cards.",
    tone: "primary" as const,
  },
  {
    icon: Sparkles,
    name: "27 Action Cards",
    desc: "Sabotage, repair, map-peek, and rockfall cards used to manipulate the game state.",
    tone: "accent" as const,
  },
  {
    icon: Users,
    name: "Role Cards",
    desc: "Hidden identities: Gold-Diggers and Saboteurs, dealt face-down at round start.",
    tone: "destructive" as const,
  },
  {
    icon: Coins,
    name: "Gold Nugget Cards",
    desc: "1, 2, and 3-nugget reward cards drafted by the winning team after each round.",
    tone: "success" as const,
  },
];

const Components = () => (
  <section className="container py-16">
    <SectionHeading index="02" kicker="What's in the box" title="Game" accent="components">
      Everything you'll shuffle, deal, and slam down on the table over a single match.
    </SectionHeading>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
      {components.map((c) => (
        <div key={c.name} className="glow-card p-6">
          <div className="mb-4">
            <Pill tone={c.tone}>
              <c.icon className="w-3.5 h-3.5" /> Component
            </Pill>
          </div>
          <h3 className="font-display text-xl mb-2">{c.name}</h3>
          <p className="text-sm text-muted-foreground">{c.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

/* --------------------------------- 3. Setup ------------------------------- */

const setupSteps = [
  { icon: Flag, title: "Place the Start card", body: "Position the Start card on the left side of the play area." },
  { icon: HelpCircle, title: "Place 3 Goal cards", body: "Set 3 Goal cards face-down on the right. One hides treasure, two are fakes." },
  { icon: Compass, title: "Mind the spacing", body: "Leave a 7-card gap between the Start and Goal cards — this is the dig zone." },
  { icon: Shuffle, title: "Deal hidden roles", body: "Shuffle role cards and deal one face-down to each player based on player count (see table)." },
  { icon: Layers, title: "Deal hands", body: "Deal 6 / 5 / 4 cards depending on player count, then form a face-down draw deck." },
];

const playerCounts = [
  { players: "3", diggers: 3, saboteurs: 1, hand: 6 },
  { players: "4", diggers: 4, saboteurs: 1, hand: 6 },
  { players: "5", diggers: 4, saboteurs: 2, hand: 6 },
  { players: "6", diggers: 5, saboteurs: 2, hand: 5 },
  { players: "7", diggers: 5, saboteurs: 3, hand: 5 },
  { players: "8", diggers: 6, saboteurs: 3, hand: 4 },
  { players: "9", diggers: 7, saboteurs: 3, hand: 4 },
  { players: "10", diggers: 7, saboteurs: 4, hand: 4 },
];

const Setup = () => (
  <section className="container py-16">
    <SectionHeading index="03" kicker="Setup" title="Setting" accent="the table">
      Five quick steps and you're digging. Don't peek at your role until everyone has theirs.
    </SectionHeading>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
      {setupSteps.map((s, i) => (
        <div key={s.title} className="glow-card p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-2xl text-ember">0{i + 1}</span>
            <s.icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-display text-lg mb-2">{s.title}</h4>
          <p className="text-sm text-muted-foreground">{s.body}</p>
        </div>
      ))}
    </div>

    {/* Board diagram */}
    <div className="mt-10 rounded-3xl border border-border bg-cabin p-8 md:p-10">
      <div className="flex items-center gap-2 mb-6">
        <Mountain className="w-5 h-5 text-accent" />
        <h4 className="font-display text-xl">Starting board layout</h4>
      </div>
      <img
        src={boardLayout}
        alt="Starting board layout showing 7-card gap between Start and three face-down Goal cards"
        className="w-full h-auto rounded-lg"
      />
      <p className="mt-5 text-xs text-muted-foreground text-center">
        7-card gap between Start (left) and the three face-down Goal cards (right). One Goal hides treasure.
      </p>
    </div>

    {/* Player count table */}
    <div className="mt-10 rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden">
      <div className="px-6 py-5 border-b border-border flex items-center gap-2">
        <Users className="w-5 h-5 text-primary" />
        <h4 className="font-display text-xl">Roles & hands per player count</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-muted-foreground uppercase text-xs tracking-wider">
            <tr>
              <th className="text-left px-6 py-3 font-semibold">Players</th>
              <th className="text-left px-6 py-3 font-semibold">Gold-Diggers</th>
              <th className="text-left px-6 py-3 font-semibold">Saboteurs</th>
              <th className="text-left px-6 py-3 font-semibold">Cards in hand</th>
            </tr>
          </thead>
          <tbody>
            {playerCounts.map((row, i) => (
              <tr key={row.players} className={i % 2 === 0 ? "bg-background/30" : ""}>
                <td className="px-6 py-3 font-display text-lg text-ember">{row.players}</td>
                <td className="px-6 py-3"><Pill tone="success">{row.diggers}</Pill></td>
                <td className="px-6 py-3"><Pill tone="destructive">{row.saboteurs}</Pill></td>
                <td className="px-6 py-3 text-foreground/90">{row.hand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

/* ----------------------------- 4. Turn Structure -------------------------- */

const TurnStructure = () => (
  <section className="container py-16">
    <SectionHeading index="04" kicker="On your turn" title="The turn" accent="cycle">
      Two simple beats: <strong>play one card</strong>, then <strong>draw one card</strong>. That's the
      whole loop. Every drama at the table happens in those two steps.
    </SectionHeading>

    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="glow-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <PlayCircle className="w-7 h-7 text-primary" />
          <h3 className="font-display text-2xl">Step 1 — Play exactly one card</h3>
        </div>
        <p className="text-muted-foreground mb-5">Choose one of three options:</p>
        <ul className="space-y-3">
          <li className="flex gap-3"><span className="text-primary font-bold">A.</span><span><strong>Place a Path card</strong> into the dig zone, connecting to the existing tunnel.</span></li>
          <li className="flex gap-3"><span className="text-primary font-bold">B.</span><span><strong>Play an Action card</strong> on yourself or another player.</span></li>
          <li className="flex gap-3"><span className="text-primary font-bold">C.</span><span><strong>Discard a card</strong> face-down (essentially passing your turn).</span></li>
        </ul>
      </div>

      <div className="glow-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <RotateCw className="w-7 h-7 text-accent" />
          <h3 className="font-display text-2xl">Step 2 — Draw one card</h3>
        </div>
        <p className="text-muted-foreground mb-5">
          Refill your hand from the draw deck so you always end your turn with the same number of cards
          you started with.
        </p>
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/90">
            <strong className="text-accent">Empty deck rule:</strong> once the draw deck is empty,
            players keep taking turns playing cards but no longer draw. The round ends as hands deplete.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------ 5. Path Cards ----------------------------- */

const pathTypes = [
  { icon: CircleDot, name: "Straight & curved paths", desc: "Standard tunnel tiles connecting two or more open edges. The bread and butter of digging." },
  { icon: Compass, name: "Intersections", desc: "T-junctions and crossroads that branch the tunnel and open up multiple directions at once." },
  { icon: XCircle, name: "Dead-end cards", desc: "Tiles with closed walls. Useful for blocking progress or fooling opponents into a fake route." },
  { icon: Flag, name: "Start & Goal", desc: "Fixed cards. The Start anchors the tunnel; the three Goals sit face-down at the end of the table." },
];

const PathCards = () => (
  <section className="container py-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <img src={board} alt="Path cards laid on a wooden table" loading="lazy" className="rounded-3xl shadow-deep" />
      <div>
        <SectionHeading index="05" kicker="Card type 01" title="Path" accent="cards">
          Used to build the tunnel from Start toward the Goals. Placement is strict — one bad
          orientation and your beautiful plan is a literal dead end.
        </SectionHeading>
      </div>
    </div>

    {/* Placement rules */}
    <div className="mt-12 grid md:grid-cols-2 gap-6">
      <div className="glow-card p-7">
        <Pill tone="success"><CheckCircle2 className="w-3.5 h-3.5" /> Valid</Pill>
        <h4 className="font-display text-xl mt-3 mb-3">Legal placement</h4>
        <ul className="space-y-2 text-sm text-foreground/90">
          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" /> Path edges meet path edges; walls meet walls.</li>
          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" /> Card touches the existing tunnel network on at least one edge.</li>
          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" /> Continuous, unbroken connection back to the Start card.</li>
          <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" /> Card may be rotated 180° before placement.</li>
        </ul>
      </div>
      <div className="glow-card p-7">
        <Pill tone="destructive"><XCircle className="w-3.5 h-3.5" /> Illegal</Pill>
        <h4 className="font-display text-xl mt-3 mb-3">Forbidden placement</h4>
        <ul className="space-y-2 text-sm text-foreground/90">
          <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Floating cards with no neighbor.</li>
          <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Mismatched edges (path against wall).</li>
          <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Rotating to anything other than 0° or 180°.</li>
          <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Placing while you have a broken tool.</li>
        </ul>
      </div>
    </div>

    {/* Path card types */}
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {pathTypes.map((p) => (
        <div key={p.name} className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5">
          <p.icon className="w-6 h-6 text-primary mb-3" />
          <h4 className="font-display text-lg mb-1.5">{p.name}</h4>
          <p className="text-sm text-muted-foreground">{p.desc}</p>
        </div>
      ))}
    </div>

    {/* Strategy */}
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
        <Pill tone="success"><Pickaxe className="w-3.5 h-3.5" /> Digger strategy</Pill>
        <p className="mt-3 text-foreground/90">
          Extend the tunnel toward the Goal you suspect holds treasure. Coordinate without giving
          obvious tells — Saboteurs are watching.
        </p>
      </div>
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
        <Pill tone="destructive"><Skull className="w-3.5 h-3.5" /> Saboteur strategy</Pill>
        <p className="mt-3 text-foreground/90">
          Steer the tunnel sideways with subtle bends, drop dead-ends at critical junctions, and
          waste cards "helpfully." Stall the deck out.
        </p>
      </div>
    </div>
  </section>
);

/* ---------------------------- 6. Action Cards ----------------------------- */

const tools = [
  { icon: ShoppingCart, name: "Cart", desc: "Hauls ore. Without it, you can't move material out of the tunnel." },
  { icon: HardHat, name: "Hat", desc: "Lantern goes on the helmet. Without it, you're literally in the dark." },
  { icon: Footprints, name: "Shovel", desc: "Strikes the rock. Without it, no tunnel gets dug today." },
];

const ActionCards = () => (
  <TooltipProvider delayDuration={150}>
    <section className="container py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <img src={actionCards} alt="Action cards including sabotage and repair" loading="lazy" className="rounded-3xl shadow-deep" />
        </div>
        <div className="lg:order-1">
          <SectionHeading index="06" kicker="Card type 02" title="Action" accent="cards">
            27 cards of pure mischief. Break tools, fix tools, peek at goals, and demolish your
            opponent's progress with a well-timed rockfall.
          </SectionHeading>
        </div>
      </div>

      {/* Tools warning */}
      <div className="mt-12 rounded-3xl border border-destructive/30 bg-destructive/5 p-8">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-destructive" />
          <h4 className="font-display text-2xl">The three tools</h4>
        </div>
        <p className="text-muted-foreground mb-6">
          Every player implicitly carries three tools. If <strong>any</strong> of them is broken,
          you cannot place Path cards until all are repaired. You can still play Action cards or pass.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {tools.map((t) => (
            <Tooltip key={t.name}>
              <TooltipTrigger asChild>
                <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 cursor-help hover:border-destructive/50 transition-colors">
                  <t.icon className="w-7 h-7 text-destructive mb-3" />
                  <h5 className="font-display text-lg">{t.name}</h5>
                  <p className="text-xs text-muted-foreground mt-1">Hover for detail</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-sm">{t.desc}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Action subtypes */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {/* Sabotage */}
        <div className="glow-card p-7">
          <div className="flex items-center justify-between mb-3">
            <Pill tone="destructive"><Hammer className="w-3.5 h-3.5" /> Sabotage</Pill>
            <span className="text-xs text-muted-foreground font-mono">×9</span>
          </div>
          <h4 className="font-display text-2xl mb-2">Break a tool</h4>
          <p className="text-muted-foreground mb-4">
            Play onto another player to break one of their three tools. While any tool is broken, that
            player cannot place Path cards.
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-xs text-primary underline underline-offset-4">How to use ›</button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Best played on the most active digger right before they reach the Goal — and on yourself if you need a plausible alibi.</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Repair */}
        <div className="glow-card p-7">
          <div className="flex items-center justify-between mb-3">
            <Pill tone="success"><Wrench className="w-3.5 h-3.5" /> Repair</Pill>
            <span className="text-xs text-muted-foreground font-mono">×9</span>
          </div>
          <h4 className="font-display text-2xl mb-2">Fix a broken tool</h4>
          <p className="text-muted-foreground mb-4">
            Single-repair cards fix one specific tool. Dual-option cards can repair either of two tools.
            The broken tool must match what the repair card supports.
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-xs text-primary underline underline-offset-4">How to use ›</button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Repairing someone is a public statement of trust — or a clever bluff. Save them for moments that change the table's mind.</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Map */}
        <div className="glow-card p-7">
          <div className="flex items-center justify-between mb-3">
            <Pill tone="accent"><Map className="w-3.5 h-3.5" /> Map</Pill>
            <span className="text-xs text-muted-foreground font-mono">×6</span>
          </div>
          <h4 className="font-display text-2xl mb-2">Peek a Goal</h4>
          <p className="text-muted-foreground mb-4">
            Secretly look at one of the three Goal cards without revealing it. Knowledge is power —
            but telling the truth is optional.
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-xs text-primary underline underline-offset-4">How to use ›</button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Saboteurs love this card — they can confidently lie about which Goal holds treasure.</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Rockfall */}
        <div className="glow-card p-7">
          <div className="flex items-center justify-between mb-3">
            <Pill tone="primary"><Mountain className="w-3.5 h-3.5" /> Rockfall</Pill>
            <span className="text-xs text-muted-foreground font-mono">×3</span>
          </div>
          <h4 className="font-display text-2xl mb-2">Demolish a tile</h4>
          <p className="text-muted-foreground mb-4">
            Remove any placed Path card from the board (except Start and Goals). Leaves a gap that
            future Path cards can rebuild — or nobody ever does.
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-xs text-primary underline underline-offset-4">How to use ›</button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Use it to undo a saboteur's misdirection — or to delete the one tile a digger needs to win.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  </TooltipProvider>
);

/* -------------------------------- 7. Passing ------------------------------ */

const Passing = () => (
  <section className="container py-16">
    <SectionHeading index="07" kicker="Stuck?" title="Passing" accent="& discarding">
      No legal play? No worries. Passing is a turn — and sometimes the most suspicious one.
    </SectionHeading>
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="glow-card p-7">
        <ScrollText className="w-7 h-7 text-primary mb-3" />
        <h4 className="font-display text-xl mb-2">Discard one face-down</h4>
        <p className="text-muted-foreground">
          Instead of playing, place any one card from your hand into the discard pile face-down. Then
          draw as normal. Nobody sees what you threw away.
        </p>
      </div>
      <div className="glow-card p-7">
        <XCircle className="w-7 h-7 text-destructive mb-3" />
        <h4 className="font-display text-xl mb-2">Out of cards = skip</h4>
        <p className="text-muted-foreground">
          If your hand is empty and the deck is too, you simply skip. Play continues around you until
          the round resolves.
        </p>
      </div>
    </div>
  </section>
);

/* ----------------------------- 8. End of Round ---------------------------- */

const EndOfRound = () => (
  <section className="container py-16">
    <SectionHeading index="08" kicker="Round resolution" title="How a round" accent="ends">
      Two ways out: someone connects to a Goal, or the deck and all hands run dry.
    </SectionHeading>

    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="glow-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-7 h-7 text-success" />
          <h3 className="font-display text-2xl">A path reaches a Goal</h3>
        </div>
        <ol className="space-y-3 text-foreground/90">
          <li className="flex gap-3"><span className="text-success font-bold">1.</span> Flip the connected Goal card face-up.</li>
          <li className="flex gap-3"><span className="text-success font-bold">2.</span> If it's the treasure → round ends immediately, Diggers win.</li>
          <li className="flex gap-3"><span className="text-success font-bold">3.</span> If it's a fake → leave it face-up, keep playing toward another Goal.</li>
        </ol>
      </div>
      <div className="glow-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <XCircle className="w-7 h-7 text-destructive" />
          <h3 className="font-display text-2xl">No one can play</h3>
        </div>
        <p className="text-foreground/90">
          If the draw deck is empty <em>and</em> every player has gone through their final hand
          without connecting to the treasure, the round ends. Saboteurs win.
        </p>
      </div>
    </div>

    <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 flex items-start gap-4">
      <Eye className="w-6 h-6 text-accent shrink-0 mt-0.5" />
      <p className="text-foreground/90">
        <strong className="text-accent">Reveal time:</strong> at round's end, every player flips
        their role card. Now you finally know who was lying to your face for the last twenty minutes.
      </p>
    </div>
  </section>
);

/* ---------------------------- 9. Win Conditions --------------------------- */

const WinConditions = () => (
  <section className="container py-16">
    <SectionHeading index="09" kicker="Victory" title="Win" accent="conditions">
      Simple on paper, brutal in practice.
    </SectionHeading>

    <div className="grid md:grid-cols-2 gap-6 mt-10">
      <div className="glow-card p-8">
        <div className="w-14 h-14 rounded-2xl bg-success/15 border border-success/40 flex items-center justify-center mb-5">
          <Trophy className="w-7 h-7 text-success" />
        </div>
        <h3 className="font-display text-2xl mb-2">Gold-Diggers win</h3>
        <p className="text-muted-foreground">
          A continuous, unbroken path connects the Start card to the Goal containing the treasure.
        </p>
      </div>
      <div className="glow-card p-8">
        <div className="w-14 h-14 rounded-2xl bg-destructive/15 border border-destructive/40 flex items-center justify-center mb-5">
          <Skull className="w-7 h-7 text-destructive" />
        </div>
        <h3 className="font-display text-2xl mb-2">Saboteurs win</h3>
        <p className="text-muted-foreground">
          The round ends — by deck-out or stalemate — without the treasure being reached.
        </p>
      </div>
    </div>
  </section>
);

/* ----------------------------- 10. Reward System -------------------------- */

const Rewards = () => (
  <section className="container py-16">
    <SectionHeading index="10" kicker="Payday" title="Reward" accent="system">
      After every round, the winning team divides gold nuggets. Most gold after three rounds wins
      the whole match.
    </SectionHeading>

    <div className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="glow-card p-8">
        <Pill tone="success"><Pickaxe className="w-3.5 h-3.5" /> Diggers won</Pill>
        <h4 className="font-display text-2xl mt-3 mb-3">Diggers draft gold</h4>
        <p className="text-muted-foreground mb-5">
          Starting with the player who placed the winning Path card, each Digger draws one gold
          nugget card from the reward deck and continues clockwise until every Digger has one.
        </p>
        <div className="flex gap-2">
          <Stat value="1" label="Common" />
          <Stat value="2" label="Solid" color="gold" />
          <Stat value="3" label="Jackpot" color="gold" />
        </div>
      </div>

      <div className="glow-card p-8">
        <Pill tone="destructive"><Skull className="w-3.5 h-3.5" /> Saboteurs won</Pill>
        <h4 className="font-display text-2xl mt-3 mb-3">Saboteurs split the pot</h4>
        <p className="text-muted-foreground">
          Each Saboteur is awarded gold based on how many Saboteurs were in play that round — fewer
          Saboteurs means a richer payday each. Gloating is mandatory.
        </p>
        <div className="mt-5 rounded-xl border border-border bg-card/60 p-4 text-sm">
          <div className="flex justify-between py-1.5 border-b border-border/60"><span className="text-muted-foreground">1 Saboteur</span><span className="text-gold font-display">4 gold each</span></div>
          <div className="flex justify-between py-1.5 border-b border-border/60"><span className="text-muted-foreground">2 Saboteurs</span><span className="text-gold font-display">3 gold each</span></div>
          <div className="flex justify-between py-1.5"><span className="text-muted-foreground">3–4 Saboteurs</span><span className="text-gold font-display">2 gold each</span></div>
        </div>
      </div>
    </div>

    <div className="mt-8 rounded-3xl bg-cabin border border-accent/30 p-8 md:p-10 text-center">
      <Coins className="w-10 h-10 text-accent mx-auto mb-3" />
      <h3 className="font-display text-3xl mb-2">After three rounds…</h3>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Tally every player's gold nuggets. Highest total wins Fishy Business. Ties are broken by
        the most rounds won — and if it's still tied, by the loudest table argument.
      </p>
    </div>
  </section>
);

/* -------------------------------- Quick tips ------------------------------ */

const QuickTips = () => (
  <section className="container pb-24">
    <div className="rounded-3xl bg-cabin border border-border p-10 md:p-14">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-accent" />
        <h3 className="font-display text-3xl">Tips for new diggers</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {[
          "Don't rush the obvious path — that's how saboteurs hide.",
          "Watch who refuses to repair others. Always.",
          "Use Map cards wisely. Don't reveal what you saw too cleanly.",
          "If everyone trusts you, you're already losing.",
          "Track which tools are broken — patterns betray traitors.",
          "Save Rockfall for the moment a Digger is one tile from winning.",
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
);

/* ---------------------------------- Page ---------------------------------- */

const Saboteur = () => (
  <SiteLayout>
    <PageHero />
    <Overview />
    <Components />
    <Setup />
    <TurnStructure />
    <PathCards />
    <ActionCards />
    <Passing />
    <EndOfRound />
    <WinConditions />
    <Rewards />
    <QuickTips />
  </SiteLayout>
);

export default Saboteur;
