import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import HomePage from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import AboutPage from "@/pages/About";
import ResultsPage from "@/pages/Results";
import ContactPage from "@/pages/Contact";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
