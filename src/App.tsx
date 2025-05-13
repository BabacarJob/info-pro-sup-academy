
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import NotFound from "./pages/NotFound";
import OrientationPage from "./pages/Orientation";
import FormationsPage from "./pages/Formations";
import BibliothequePage from "./pages/Bibliotheque";
import BoursesPage from "./pages/Bourses";
import ConcoursPage from "./pages/Concours";
import StagesPage from "./pages/Stages";
import PartenairesPage from "./pages/Partenaires";
import ContactPage from "./pages/Contact";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><IndexPage /></Layout>} />
          <Route path="/orientation" element={<Layout><OrientationPage /></Layout>} />
          <Route path="/formations" element={<Layout><FormationsPage /></Layout>} />
          <Route path="/bibliotheque" element={<Layout><BibliothequePage /></Layout>} />
          <Route path="/bourses" element={<Layout><BoursesPage /></Layout>} />
          <Route path="/concours" element={<Layout><ConcoursPage /></Layout>} />
          <Route path="/stages" element={<Layout><StagesPage /></Layout>} />
          <Route path="/partenaires" element={<Layout><PartenairesPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
