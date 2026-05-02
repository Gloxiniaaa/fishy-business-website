import { SiteLayout } from "@/components/layout/SiteLayout";
import { Mic, Sparkles, Music, Shirt, MessageCircle, Footprints } from "lucide-react";
import socialPiano from "@/assets/social-piano.png";
import avatars from "@/assets/avatars.png";
import emotes from "@/assets/emotes.png";
import chrismas from "@/assets/chrismas.png";
import ship from "@/assets/battle-ship.png";
import playground from "@/assets/playground.png";



const Social = () => (
  <SiteLayout>
    <section className="relative pt-20 pb-12">
      <div className="container max-w-4xl text-center">
        <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-4">Social Experience</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          A virtual <span className="text-gold">hangout</span>, not just a match
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          The cabin lobby is its own little world. Walk around, mess with the piano, hide in the corner — all before anyone even sits down to play.
        </p>
      </div>
    </section>

    <section className="container py-12">
      <div className="rounded-3xl overflow-hidden shadow-deep relative">
        <img src={chrismas} alt="Player at piano" loading="lazy" className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
          <h2 className="font-display text-3xl md:text-5xl">The lobby is the game too</h2>
        </div>
      </div>
    </section>

    <section className="container py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        { icon: Footprints, title: "Free Avatar Movement", desc: "Walk, run, sit, dance. Bump into other players. Form circles. Block doorways for laughs." },
        { icon: Mic, title: "Voice Chat", desc: "Talk to everyone in the game with voice support. Real conversations, real betrayal." },
        { icon: Sparkles, title: "Emote Wheel", desc: "Quick reactions, dances, finger-pointing accusations. Pin your favorites for fast access." },
        { icon: Shirt, title: "Avatar Customization", desc: "Hats, jackets, glasses, animal forms. Build a character your friends will recognize across rooms." },
        { icon: Music, title: "Mini Activities", desc: "Play piano. Sit at the bar. Toss bottles. Down-time isn't dead time." },
        { icon: MessageCircle, title: "Text Chat & Reactions", desc: "Quick chat for muted players. Emoji reactions float above the table." },
      ].map((f, i) => (
        <div key={i} className="glow-card p-7">
          <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center mb-4 glow-gold">
            <f.icon className="w-5 h-5 text-accent-foreground" />
          </div>
          <h3 className="font-display text-xl mb-2">{f.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </section>

    <section className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
      <img src={avatars} alt="Custom avatars" loading="lazy" className="rounded-3xl shadow-deep w-full" />
      <div>
        <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Customization</p>
        <h2 className="font-display text-4xl md:text-5xl mb-5">Be unmistakably <span className="text-ember">you</span></h2>
        <p className="text-muted-foreground text-lg mb-6">
          Hundreds of cosmetic combinations. From graduation caps to pirate hats, hoodies to capes. Earn new pieces by winning rounds — or by losing them gracefully.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {["Hats", "Tops", "Bottoms", "Shoes", "Eyewear", "Gloves"].map(c => (
            <div key={c} className="rounded-xl bg-secondary/60 border border-border p-4 text-center text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors cursor-default">{c}</div>
          ))}
        </div>
      </div>
    </section>

    <section className="container pb-20">
      <div className="rounded-3xl overflow-hidden relative">
        <img src={emotes} alt="Emotes party" loading="lazy" className="w-full max-h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent flex items-center">
          <div className="container max-w-xl">
            <h3 className="font-display text-3xl md:text-5xl  ">Wave. Dance. <span className="text-ember">Boxing.</span></h3>
            <p className="mt-4 text-muted-foreground">An expressive emote system designed to maximize chaos at the table.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container pb-20">
      <div className="rounded-3xl overflow-hidden relative">
        <img src={socialPiano} alt="Emotes party" loading="lazy" className="w-full max-h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent flex items-center">
          <div className="container max-w-xl">
            <h3 className="font-display text-3xl md:text-5xl  ">Skillful <span className="text-ember">Pianist.</span></h3>
            <p className="mt-4 text-muted-foreground">Shock your friends with your hidden talents</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container pb-20">
      <div className="rounded-3xl overflow-hidden relative">
        <img src={ship} alt="Emotes party" loading="lazy" className="w-full max-h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent flex items-center">
          <div className="container max-w-xl">
            <h3 className="font-display text-3xl md:text-5xl  ">Battle <span className="text-ember">Ship</span></h3>
            <p className="mt-4 text-muted-foreground">Or do you want to play boardgames amongst the breezes of the sea</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container pb-20">
      <div className="rounded-3xl overflow-hidden relative">
        <img src={playground} alt="Emotes party" loading="lazy" className="w-full max-h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent flex items-center">
          <div className="container max-w-xl">
            <h3 className="font-display text-3xl md:text-5xl  ">Play<span className="text-ember">ground</span></h3>
            <p className="mt-4 text-muted-foreground">Play in a fun, casual environment with friends</p>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Social;
