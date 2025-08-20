'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ArrowUp,
} from 'lucide-react';

// --- SUB-COMPONENTS ---
const FooterLink = ({ children, href }) => (
  <a
    href={href}
    className="relative text-neutral-600 hover:text-green-600 transition-colors duration-300 group"
  >
    {children}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative pt-28 overflow-hidden bg-white text-neutral-800 font-sans">
      {/* Background Layer 1: Liquid Glow */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-green-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />
      </div>

      {/* Background Layer 2: Effects */}
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Brand & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-40 h-auto">
              <img
                src="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/cropped-LOGO-PT-BATAVIA-SARANA-SINERGI-INODENSIA-04-scaled-1-1536x862.png"
                alt="Batavia Sarana Sinergi"
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                PT Batavia Sarana Sinergi
              </h2>
              <p className="text-neutral-600 max-w-sm">
                Mitra strategis Anda dalam perencanaan, operasional, logistik, dan layanan khusus.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {/* Navigasi */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">Navigasi</h3>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="#">Tentang Kami</FooterLink></li>
              <li><FooterLink href="#">Layanan</FooterLink></li>
              <li><FooterLink href="#">Testimoni</FooterLink></li>
              <li><FooterLink href="#">Kontak</FooterLink></li>
            </ul>
          </motion.div>

          {/* Layanan */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">Layanan</h3>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="#">Perencanaan & Strategi</FooterLink></li>
              <li><FooterLink href="#">Pengelolaan Operasional</FooterLink></li>
              <li><FooterLink href="#">Distribusi & Logistik</FooterLink></li>
              <li><FooterLink href="#">Layanan Khusus</FooterLink></li>
            </ul>
          </motion.div>

          {/* Kontak */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">Kontak Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>
                  Gedung Menara 165, Lt 17 Unit A <br />
                  JL. T.B Simatupang Kav. 1 – Cilandak Timur, <br />
                  Pasar Minggu, Jakarta Selatan <br />
                  DKI Jakarta 12560
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Office : +62 819 0878 8889</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>info@bataviasaranasinergi.com</span>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 hover:bg-green-500/20 transition">
                  <Instagram className="w-5 h-5 text-green-600" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 hover:bg-green-500/20 transition">
                  <Linkedin className="w-5 h-5 text-green-600" />
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Sub-Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-neutral-200 mt-20 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-neutral-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PT Batavia Sarana Sinergi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <FooterLink href="#">Kebijakan Privasi</FooterLink>
            <FooterLink href="#">Syarat & Ketentuan</FooterLink>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/6281908788889"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl z-50"
        whileHover={{ scale: 1.1, rotate: 6 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="Hubungi via WhatsApp"
      >
        {/* Icon WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 text-white"
        >
          <path d="M16.027 3C9.391 3 4 8.391 4 15.027c0 2.65.785 5.172 2.27 7.34L4 29l6.797-2.215a12.06 12.06 0 0 0 5.23 1.207h.004C22.663 28 28 22.609 28 15.973 28 9.391 22.663 3 16.027 3zm0 22.51c-1.662 0-3.289-.443-4.723-1.285l-.34-.201-4.037 1.316 1.32-3.93-.222-.348A9.544 9.544 0 0 1 6.482 15c0-5.253 4.283-9.536 9.545-9.536 5.262 0 9.545 4.283 9.545 9.536 0 5.262-4.283 9.545-9.545 9.545zm5.25-7.143c-.287-.143-1.699-.84-1.963-.936-.262-.098-.453-.143-.645.143-.193.287-.74.936-.906 1.129-.166.193-.334.217-.621.074-.287-.143-1.211-.445-2.309-1.418-.854-.762-1.43-1.703-1.598-1.99-.166-.287-.018-.443.125-.586.129-.129.287-.334.43-.5.143-.166.191-.287.287-.479.096-.193.049-.361-.025-.504-.074-.143-.645-1.557-.883-2.131-.232-.557-.467-.48-.645-.488-.166-.008-.357-.01-.549-.01a1.06 1.06 0 0 0-.762.355c-.262.287-1.006.984-1.006 2.4 0 1.416 1.029 2.783 1.172 2.971.143.191 2.027 3.1 4.91 4.348.686.297 1.221.475 1.637.609.688.219 1.312.188 1.805.113.551-.082 1.699-.691 1.941-1.359.24-.668.24-1.24.168-1.359-.07-.117-.262-.188-.549-.33z" />
        </svg>
      </motion.a>

    </footer>
  );
};

export default Footer;
