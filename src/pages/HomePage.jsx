// pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>
                    PT Batavia Sarana Sinergi Indonesia | Solusi Logistik & Transportasi Terpercaya
                </title>
                <meta
                    name="description"
                    content="PT Batavia Sarana Sinergi Indonesia menyediakan solusi perencanaan, operasional, distribusi logistik, dan layanan khusus yang efisien, aman, dan tepat waktu."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-black via-green-800 to-black bg-pattern">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <TestimonialSection />
                <CTASection />
                <Footer />
                <Toaster />
            </div>
        </>
    );
};

export default HomePage;
