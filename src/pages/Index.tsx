import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Download, Users, Sparkles, MessageSquare, Vote, Music, ArrowRight, Skull, Wrench, Eye, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";
import heroTable from "@/assets/hero-table.jpg";
import gameplayCards from "@/assets/gameplay-cards.jpg";
import sabotageImg from "@/assets/sabotage.jpg";
import socialPiano from "@/assets/social-piano.jpg";
import dayNight from "@/assets/day-night.jpg";
import emotes from "@/assets/emotes.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 -z-0"
          style={{
            backgroundImage: `url(${heroTable})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.25}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-md text-primary text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now in Open Beta · 3–8 Players
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Fishy
              <br />
              <span className="text-ember drop-shadow-[0_0_40px_hsl(var(--primary)/0.4)]">Business</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-foreground/80 max-w-2xl font-medium animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Trust no one. Build the path. <span className="text-accent font-semibold">Sabotage everything.</span>
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
              A 3D social deduction party game where friends become rivals around a candlelit cabin table. Place cards. Pick a role. Wreck the plan.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Button asChild variant="ember" size="xl" className="animate-pulse-glow">
                <Link to="/download"><Download /> Play Now</Link>
              </Button>
              <Button variant="cabin" size="xl">
                <Play /> Watch Trailer
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.65s" }}>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Cross-platform voice chat</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> 3D avatar movement</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Hidden roles & sabotage</div>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      </section>

      {/* GAMEPLAY PREVIEW */}
      <section className="container py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Gameplay Preview</p>
          <h2 className="font-display text-4xl md:text-6xl">Every round, a new <span className="text-ember">betrayal</span></h2>
          <p className="mt-5 text-muted-foreground text-lg">Place path cards toward the treasure. Or play action cards to wreck the plans of whoever you don't trust this turn.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: gameplayCards, title: "Place Path Cards", desc: "Build the route together — or quietly send it nowhere." },
            { img: sabotageImg, title: "Sabotage", desc: "Break a tool. Block a player. Watch the chaos unfold." },
            { img: emotes, title: "Read the Table", desc: "Body language, emotes, voice. The real game is people." },
          ].map((s, i) => (
            <div key={i} className="glow-card overflow-hidden group">
              <div className="aspect-[5/4] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="relative py-28 bg-cabin">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">Core Features</p>
            <h2 className="font-display text-4xl md:text-6xl">A party of <span className="text-gold">organized chaos</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users, title: "Multiplayer Chaos", desc: "3–8 players around the same wooden table. Shenanigans guaranteed." },
              { icon: Eye, title: "Hidden Roles", desc: "Diggers, saboteurs, and the occasional secret traitor. Find out who's lying." },
              { icon: Vote, title: "Day & Night Voting", desc: "Argue in daylight, accuse at night. Eject the suspect — or the wrong friend." },
              { icon: MessageSquare, title: "Proximity Voice Chat", desc: "Whisper deals, shout accusations. Real voices, real betrayal." },
              { icon: Sparkles, title: "Emotes & Avatars", desc: "Dance, laugh, point fingers. Customize a character that's unmistakably you." },
              { icon: Music, title: "Mini Activities", desc: "Play piano, sit at the bar, fish off the dock between rounds." },
            ].map((f, i) => (
              <div
                key={i}
                className="glow-card p-7 group"
                style={{ animation: `fade-up 0.6s ease-out ${i * 0.05}s both` }}
              >
                <div className="w-12 h-12 rounded-xl bg-ember flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-500 shadow-ember">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAME MODES */}
      <section className="container py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Game Modes</p>
          <h2 className="font-display text-4xl md:text-6xl">Pick your <span className="text-ember">poison</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glow-card overflow-hidden group">
            <div className="aspect-video overflow-hidden relative">
              <img src={gameplayCards} alt="Classic mode" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5" /> Classic
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl mb-3">Classic Mode</h3>
              <p className="text-muted-foreground mb-5">Pure path-building strategy. Race to the treasure while saboteurs quietly torch the plan. The original Fishy Business experience.</p>
              <Link to="/modes" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn the rules <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="glow-card overflow-hidden group">
            <div className="aspect-video overflow-hidden relative">
              <img src={dayNight} alt="Day/Night mode" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 text-accent text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5" /> Day / Night
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl mb-3">Day & Night Mode</h3>
              <p className="text-muted-foreground mb-5">Discuss by day. Vote at night. Accuse, defend, banish. Social deduction layered on top of the card game — pure chaos.</p>
              <Link to="/modes" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                See how it works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="relative py-28 overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={socialPiano} alt="Social hangout" loading="lazy" className="rounded-3xl shadow-deep w-full" />
            <div className="absolute -bottom-6 -right-6 glow-card p-5 max-w-[220px] hidden md:block">
              <div className="flex items-center gap-2 mb-1.5">
                <Music className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Live</span>
              </div>
              <p className="text-sm text-muted-foreground">Someone is playing piano in the lobby right now.</p>
            </div>
          </div>
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Why It's Different</p>
            <h2 className="font-display text-4xl md:text-6xl">Not a card game. <br /><span className="text-ember">A whole hangout.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Fishy Business isn't a flat 2D board on Tabletop Simulator. It's a 3D space you walk around in. Pull up a chair. Whisper to your neighbor. Walk away mid-round to play piano. The table is just where the lying happens.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Users, text: "Real-time avatar movement around a shared 3D space" },
                { icon: MessageSquare, text: "Proximity voice — closer means louder" },
                { icon: Skull, text: "Party game energy with social deduction depth" },
                { icon: Wrench, text: "Built-in mini activities so the lobby is never boring" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-cabin border border-border p-12 md:p-20 text-center shadow-deep">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl">Pull up a <span className="text-ember">chair</span>.</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Free open beta on Windows. Grab the game, gather your most untrustworthy friends, and see who cracks first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild variant="ember" size="xl">
                <Link to="/download"><Download /> Download for Windows</Link>
              </Button>
              <Button asChild variant="cabin" size="xl">
                <a href="#"><MessageSquare /> Join Discord</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
