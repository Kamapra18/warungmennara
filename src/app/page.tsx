import { ContactSection } from "./components/contact/ContactSection";
import UlasanSection from "./components/testimoni/UlasanSection";
import MenuSection from "./components/menu/MenuSection";
import FAQSection from "./components/F&Q/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import WhatsAppFloatingButton from "./components/wa";
import VideoUlasanPage from "./components/video/video";

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <UlasanSection />
      <FAQSection />
      <VideoUlasanPage />
      <ContactSection />
      <WhatsAppFloatingButton />
      <Footer/>
    </main>
  );
}
