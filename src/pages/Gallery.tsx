import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import main from "@/assets/main.png";
import bomb from "@/assets/bomb.png";
import avatars from "@/assets/avatars.png";
import socialPiano from "@/assets/social-piano.png";
import nightPhase from "@/assets/night-phase.png";
import emotes from "@/assets/emotes.png";
import board from "@/assets/board.png";
import actionCards from "@/assets/action-cards.png";
import chrismas from "@/assets/chrismas.png";
import battleShip from "@/assets/battle-ship.png";
import logo from "@/assets/logo.png";
import voiceIndicator from "@/assets/voice-indicator.png";
import reviveTool from "@/assets/ReviveTool.png";
import binocular from "@/assets/Binocular.png";

const shots = [
  { src: main, alt: "Main gameplay" },
  { src: bomb, alt: "Sabotage moment", span: "md:col-span-2" },
  { src: avatars, alt: "Avatar customization" },
  { src: socialPiano, alt: "Piano lobby", span: "md:col-span-2" },
  { src: nightPhase, alt: "Night phase voting" },
  { src: emotes, alt: "Emotes party" },
  { src: binocular, alt: "Binoculars" },
  { src: board, alt: "Game board" },
  { src: actionCards, alt: "Action cards" },
  { src: chrismas, alt: "Christmas theme" },
  { src: battleShip, alt: "Battle ship mode" },
  // { src: logo, alt: "Game logo" },
  { src: voiceIndicator, alt: "Voice indicator" },
  { src: reviveTool, alt: "Revive tool" },
];

const Gallery = () => (
  <SiteLayout>
    <section className="relative pt-20 pb-12">
      <div className="container max-w-4xl text-center">
        <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-4">Media & Gallery</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">See it in <span className="text-gold">action</span></h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Screenshots from the open beta — captured directly from gameplay. Click any tile to view full size.
        </p>
      </div>
    </section>

    {/* Trailer */}
    <section className="container py-10">
      <div className="relative rounded-3xl overflow-hidden shadow-deep aspect-video group">
        <iframe
          src="https://www.youtube.com/embed/MzUZRExQEVw"
          title="Fishy Business — Reveal Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="mt-4 md:mt-6 md:px-2">
        <p className="text-xs uppercase tracking-widest text-accent font-bold">Official Trailer</p>
        <h3 className="font-display text-2xl md:text-4xl mt-1">Fishy Business — Reveal</h3>
      </div>
    </section>

    {/* Grid */}
    <section className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4">
        {shots.map((s, i) => (
          <div key={i} className={`relative rounded-2xl overflow-hidden glow-card group ${s.span ?? ""}`}>
            <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-sm font-medium">{s.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-20 text-center">
      <Button variant="ember" size="lg">Download Press Kit</Button>
    </section>
  </SiteLayout>
);

export default Gallery;
