import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Saboteur from "./pages/Saboteur.tsx";
import Social from "./pages/Social.tsx";
import Modes from "./pages/Modes.tsx";
import Gallery from "./pages/Gallery.tsx";
import About from "./pages/About.tsx";
import Download from "./pages/Download.tsx";
import { DevlogDetail } from "./pages/DevlogDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/saboteur" element={<Saboteur />} />
          <Route path="/social" element={<Social />} />
          <Route path="/modes" element={<Modes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/devlog/:id" element={<DevlogDetail />} />
          <Route path="/download" element={<Download />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
