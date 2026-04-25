import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { EmberParticles } from "@/components/effects/EmberParticles";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col relative">
    <EmberParticles />
    <SiteHeader />
    <main className="flex-1 relative z-10">{children}</main>
    <SiteFooter />
  </div>
);
