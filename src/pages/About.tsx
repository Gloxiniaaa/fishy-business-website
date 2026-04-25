import { SiteLayout } from "@/components/layout/SiteLayout";
import { GraduationCap, Code2, Network, Palette, Music, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => (
  <SiteLayout>
    <section className="relative pt-20 pb-12">
      <div className="container max-w-4xl text-center">
        <img src={logo} alt="Fishy Business logo" width={120} height={120} className="w-28 h-28 mx-auto mb-6 drop-shadow-[0_8px_30px_hsl(var(--primary)/0.6)] animate-float-slow" />
        <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-4">About</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">A graduation thesis <br /><span className="text-ember">that got out of hand</span></h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Fishy Business started as a final-year project at the intersection of game design and networking. It accidentally became something we want to keep playing every weekend.
        </p>
      </div>
    </section>

    <section className="container py-12 max-w-3xl">
      <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
        <p>
          We grew up loving Saboteur — the German card game where friends quietly stab each other in the back over a fictional treasure. We also fell in love with the chaotic, bouncy, voice-chat anarchy of Party Animals.
        </p>
        <p>
          Our thesis question: <span className="text-accent">what happens when you fuse the two?</span> What if the cards lived on a real 3D table, in a warm wooden cabin, and the players could actually walk around, whisper, and make faces at each other?
        </p>
        <p>
          Eighteen months, a few all-nighters, and one very patient supervisor later, here we are. Fishy Business is our love letter to social games — built as a graduation project, polished as something we hope you actually play.
        </p>
      </div>
    </section>

    {/* TECH STACK */}
    <section className="container py-20">
      <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3 text-center">Tech Stack</p>
      <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Under the <span className="text-gold">hood</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { icon: Code2, title: "Unity 2022 LTS", desc: "URP rendering pipeline, custom toon shaders, low-poly asset workflow." },
          { icon: Network, title: "Mirror Networking", desc: "Authoritative server with client-side prediction for movement and card placement." },
          { icon: Music, title: "Steam Audio", desc: "Spatialized proximity voice chat — distance and walls actually matter." },
          { icon: Palette, title: "Custom Card Engine", desc: "Data-driven card definitions so adding new sabotage types takes minutes, not hours." },
          { icon: GraduationCap, title: "Academic Roots", desc: "Built as a Computer Science / Game Design thesis project at university." },
          { icon: Heart, title: "Made With Coffee", desc: "Way too much of it. Genuinely. We have a problem." },
        ].map((t, i) => (
          <div key={i} className="glow-card p-7">
            <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4">
              <t.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl mb-2">{t.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* TEAM */}
    <section className="container pb-20">
      <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 text-center">The Team</p>
      <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Four students, <span className="text-ember">one cabin</span></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { name: "Alex", role: "Programming & Networking" },
          { name: "Mira", role: "Game Design & Cards" },
          { name: "Tobi", role: "3D Art & Animation" },
          { name: "Jules", role: "Audio & UX" },
        ].map((m, i) => (
          <div key={i} className="glow-card p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-ember mx-auto mb-4 flex items-center justify-center font-display text-3xl text-primary-foreground shadow-ember">
              {m.name[0]}
            </div>
            <h3 className="font-display text-lg">{m.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default About;
