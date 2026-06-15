import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickAccess } from "@/components/QuickAccess";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";
import { UsefulLinksSection } from "@/components/UsefulLinksSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickAccess />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <LocationSection />
        <FAQSection />
        <UsefulLinksSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
