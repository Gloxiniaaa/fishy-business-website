import { SiteLayout } from "@/components/layout/SiteLayout";
import { GraduationCap, Code2, Network, Palette, Music, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
const getInitials = (name) => {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();
};
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
          Six months, a few all-nighters, and one very patient supervisor later, here we are. Fishy Business is our love letter to social games — built as a graduation project, polished as something we hope you actually play.
        </p>
      </div>
    </section>

    {/* TECH STACK */}
    <section className="container py-20">
      <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3 text-center">Tech Stack</p>
      <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Under the <span className="text-gold">hood</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { 
            icon: Code2, 
            title: "Unity 6.0", 
            desc: "Core engine powering the game with modern rendering, smooth performance, and scalable architecture." 
          },
          { 
            icon: Network, 
            title: "Netcode for GameObjects", 
            desc: "Multiplayer foundation with authoritative host and synchronized gameplay across all players." 
          },
          { 
            icon: Music, 
            title: "Vivox Voice & Text Chat", 
            desc: "Real-time voice and text communication — seamless interaction between players in every match." 
          },
          { 
            icon: Palette, 
            title: "Figma UI Design", 
            desc: "All UI/UX flows are designed in Figma for clarity, consistency, and fast iteration." 
          },
          { 
            icon: GraduationCap, 
            title: "Game Development Focus", 
            desc: "Built with a strong focus on gameplay systems, multiplayer interaction, and player experience." 
          },
          { 
            icon: Heart, 
            title: "Made With Passion", 
            desc: "Crafted with dedication, late nights, and a lot of problem-solving along the way." 
          },
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
      <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Three students, <span className="text-ember">Three devs</span></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          // { name: "Jules", role: "Audio & UX" },
          { name: "Lê Ngọc Hiền", role: "2211024" },
          { name: "Huỳnh Trần Học Đăng", role: "2210731" },
          { name: "Nguyễn Mạnh Hùng", role: "2211337" },
        ].map((m, i) => (
          <div key={i} className="glow-card p-6 text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-ember mx-auto mb-4 flex items-center justify-center font-display text-3xl md:text-4xl text-primary-foreground shadow-ember">
              {getInitials(m.name)}
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
