
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
        <title>PT BATAVIA SARANA SINERGI INDONESIA - Solusi Transportasi Terpercaya</title>
        <meta name="description" content="Tingkatkan engagement dan reach dengan layanan pembuatan konten media sosial profesional dan website interaktif dari Benerun Pro. Konsultasi gratis tersedia!" />
        <meta name="keywords" content="konten media sosial, website interaktif, video editing, copywriting, social media marketing, digital marketing" />
        <meta property="og:title" content="BENERUN PROJECT - Konten Media Sosial & Website Interaktif Terbaik" />
        <meta property="og:description" content="Tingkatkan engagement dan reach dengan layanan pembuatan konten media sosial profesional dan website interaktif dari Benerun Pro." />
        <meta property="og:type" content="website" />
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
