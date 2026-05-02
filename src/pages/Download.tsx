import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, CheckCircle2 } from "lucide-react";
import heroTable from "@/assets/main.png";

const Download = () => (
  <SiteLayout>
    <section className="relative pt-20 pb-12">
      <div className="container max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/15 border border-success/40 text-success text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Open Beta · Free
        </div>
        <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-4">Download</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">Pull up a chair. <br /><span className="text-ember">It's free.</span></h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Fishy Business open beta is available now for Windows. Mac and Linux builds are on the roadmap.
        </p>
      </div>
    </section>

    {/* DOWNLOAD CARD */}
    <section className="container py-12">
      <div className="relative rounded-3xl overflow-hidden border border-border shadow-deep">
        <img src={heroTable} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
        <div className="relative z-10 p-10 md:p-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Get Fishy Business</h2>
            <p className="text-muted-foreground mb-8">Download the game from itch.io.</p>
            <Button variant="ember" size="xl" className="animate-pulse-glow" asChild>
              <a href="https://lehien6601.itch.io/fishy-business" target="_blank" rel="noopener noreferrer">
                <DownloadIcon /> Download on itch.io
              </a>
            </Button>
          </div>
          <div className="space-y-3">
            {["Free during open beta", "Cross-region matchmaking", "Cosmetic-only progression", "No microtransactions, ever"].map(t => (
              <div key={t} className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/60 border border-border">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  </SiteLayout>
);

export default Download;
