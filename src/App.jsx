
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";

function App() {
  return (
    <>
      <Helmet>
        {/* Title SEO-friendly */}
        <title>
          PT Batavia Sarana Sinergi Indonesia | Solusi Logistik & Transportasi Terpercaya
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="PT Batavia Sarana Sinergi Indonesia menyediakan solusi perencanaan, operasional, distribusi logistik, dan layanan khusus yang efisien, aman, dan tepat waktu."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="logistik Indonesia, distribusi barang, transportasi terpercaya, perencanaan strategi, pengelolaan operasional, jasa logistik Jakarta, Batavia Sarana Sinergi"
        />

        {/* Open Graph Meta (untuk social media preview) */}
        <meta
          property="og:title"
          content="PT Batavia Sarana Sinergi Indonesia - Solusi Logistik & Transportasi"
        />
        <meta
          property="og:description"
          content="Mitra strategis dalam perencanaan, operasional, distribusi, dan layanan logistik khusus. Solusi efisien & terpercaya untuk bisnis Anda."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bataviasaranasinergi.com" />
        <meta
          property="og:image"
          content="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/cropped-LOGO-PT-BATAVIA-SARANA-SINERGI-INODENSIA-04-scaled-1-1536x862.png"
        />

        {/* Twitter Card untuk tampilan di Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PT Batavia Sarana Sinergi Indonesia - Solusi Logistik & Transportasi"
        />
        <meta
          name="twitter:description"
          content="Solusi logistik, transportasi, perencanaan, dan layanan khusus yang efisien & terpercaya."
        />
        <meta
          name="twitter:image"
          content="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/cropped-LOGO-PT-BATAVIA-SARANA-SINERGI-INODENSIA-04-scaled-1-1536x862.png"
        />
      </Helmet>


      <div className="min-h-screen bg-gradient-to-br from-black via-green-800 to-black bg-pattern">
        <Navbar />
        <HeroSection />
        <AboutSection />
        {/* <PortfolioSection /> */}
        <ServicesSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
