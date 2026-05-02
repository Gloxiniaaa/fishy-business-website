import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Cpu, HardDrive, MonitorSpeaker, Wifi, CheckCircle2 } from "lucide-react";
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
            <h2 className="font-display text-4xl md:text-5xl mb-4">Windows Build</h2>
            <p className="text-muted-foreground mb-2">Latest version: <span className="text-foreground font-semibold">v0.9.4 — Cabin Update</span></p>
            <p className="text-muted-foreground mb-8">~ 1.4 GB · Updated weekly during beta</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="ember" size="xl" className="animate-pulse-glow"><DownloadIcon /> Download for Windows</Button>
              <Button variant="cabin" size="xl">Steam (coming soon)</Button>
            </div>
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

    {/* SYSTEM REQUIREMENTS */}
    <section className="container py-20">
      <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3 text-center">System Requirements</p>
      <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Will it run on your <span className="text-gold">rig?</span></h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ReqCard
          tier="Minimum"
          tierClass="text-muted-foreground"
          rows={[
            { icon: MonitorSpeaker, k: "OS", v: "Windows 10 (64-bit)" },
            { icon: Cpu, k: "Processor", v: "Intel i5-4460 / AMD FX-8350" },
            { icon: Cpu, k: "GPU", v: "GTX 960 / Radeon R9 280" },
            { icon: HardDrive, k: "Memory", v: "8 GB RAM" },
            { icon: HardDrive, k: "Storage", v: "2 GB available" },
            { icon: Wifi, k: "Network", v: "Broadband connection" },
          ]}
        />
        <ReqCard
          tier="Recommended"
          tierClass="text-primary"
          highlighted
          rows={[
            { icon: MonitorSpeaker, k: "OS", v: "Windows 11 (64-bit)" },
            { icon: Cpu, k: "Processor", v: "Intel i7-9700 / Ryzen 5 3600" },
            { icon: Cpu, k: "GPU", v: "RTX 2060 / RX 5700" },
            { icon: HardDrive, k: "Memory", v: "16 GB RAM" },
            { icon: HardDrive, k: "Storage", v: "2 GB SSD" },
            { icon: Wifi, k: "Network", v: "Low-latency broadband" },
          ]}
        />
      </div>
    </section>
  </SiteLayout>
);

const ReqCard = ({ tier, tierClass, rows, highlighted }: { tier: string; tierClass: string; rows: { icon: React.ComponentType<{ className?: string }>; k: string; v: string }[]; highlighted?: boolean }) => (
  <div className={`glow-card p-8 ${highlighted ? "border-primary/50 shadow-ember" : ""}`}>
    <p className={`uppercase tracking-widest text-xs font-bold mb-1 ${tierClass}`}>{tier}</p>
    <h3 className="font-display text-2xl mb-6">{highlighted ? "For the full party" : "To get in the door"}</h3>
    <ul className="space-y-3">
      {rows.map((r, i) => (
        <li key={i} className="flex items-center gap-3 py-3 border-b border-border/60 last:border-0">
          <r.icon className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground w-24">{r.k}</span>
          <span className="text-sm font-medium ml-auto text-right">{r.v}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Download;
