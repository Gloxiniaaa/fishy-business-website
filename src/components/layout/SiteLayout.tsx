import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { EmberParticles } from "@/components/effects/EmberParticles";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <EmberParticles />
      <SiteHeader />
      <main className="flex-1 relative z-10">{children}</main>
      <SiteFooter />
    </div>
  );
};
