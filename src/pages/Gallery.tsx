import { SiteLayout } from "@/components/layout/SiteLayout";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTable from "@/assets/hero-table.jpg";
import gameplayCards from "@/assets/gameplay-cards.jpg";
import sabotageImg from "@/assets/sabotage.jpg";
import socialPiano from "@/assets/social-piano.png";
import avatars from "@/assets/avatars.png";
import dayNight from "@/assets/day-night.jpg";
import emotes from "@/assets/emotes.jpg";
import pathCards from "@/assets/path-cards.jpg";

const shots = [
  { src: heroTable, alt: "Players at the table", span: "md:col-span-2 md:row-span-2" },
  { src: gameplayCards, alt: "Card placement" },
  { src: sabotageImg, alt: "Sabotage moment" },
  { src: socialPiano, alt: "Piano lobby", span: "md:col-span-2" },
  { src: avatars, alt: "Avatar customization" },
  { src: dayNight, alt: "Day Night vote" },
  { src: emotes, alt: "Emotes party", span: "md:col-span-2" },
  { src: pathCards, alt: "Path cards top down" },
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
