import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // 👈 pakai Link
import logo from './ui/batavia.png';

const navItems = [
    { label: 'Beranda', href: '/' }, // ke landing page
    {
        label: 'Tentang Kami',
        dropdown: [
            { label: 'Profile', href: '/profile' },
            { label: 'Visi & Misi', href: '/visi-misi' },
            { label: 'Nilai - Nilai Perusahaan', href: '/nilai' },
        ],
    },
    {
        label: 'Layanan',
        dropdown: [
            { label: 'Semua Moda Transportasi Pengiriman', href: '/semua-moda' },
            { label: 'Pesawat Carter', href: '/pesawat-carter' },
            { label: 'Kargo Proyek', href: '/kargo-proyek' },
            { label: 'Pergudangan', href: '/pergudangan' },
        ],
    },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Kontak', href: '/kontak' },
];

const glass =
    'backdrop-blur-xl bg-white/10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    const shimmer = (
        <motion.span
            aria-hidden
            initial={{ x: '-100%' }}
            animate={{ x: '120%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.1 }}
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 rounded-xl"
            style={{
                background:
                    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)',
            }}
        />
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/" className="flex items-center gap-3 cursor-pointer">
                            <img src={logo} alt="Batavia Logo" className="h-10 w-auto object-contain" />
                            <span className="text-xl font-serif tracking-tight text-white">
                                <span className="font-bold">Batavia</span>
                                <span className="ml-1 bg-gradient-to-br from-[#c6904c] to-[#d4af37] bg-clip-text text-transparent">
                                    Sarana
                                </span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navItems.map((item, idx) => (
                            <li key={idx} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                                            className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                            <ChevronDown className="h-4 w-4" />
                                        </button>
                                        <AnimatePresence>
                                            {openDropdown === idx && (
                                                <motion.ul
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -8 }}
                                                    transition={{ duration: 0.25 }}
                                                    className={`absolute top-full mt-3 w-64 rounded-2xl overflow-hidden ${glass}`}
                                                >
                                                    {item.dropdown.map((sub, i) => (
                                                        <li key={i} className="relative">
                                                            <Link
                                                                to={sub.href}
                                                                className="block px-5 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                            {shimmer}
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="/kontak"
                            className="hidden md:inline-flex items-center rounded-full px-6 h-11 font-semibold text-sm text-white bg-gradient-to-r from-[#c6904c] to-[#d4af37] transition-transform hover:scale-105 active:scale-95"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Konsultasi Gratis
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.a>

                        {/* Mobile Toggle */}
                        <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-full text-white">
                            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl"
                    >
                        <ul className="flex flex-col gap-2 p-6">
                            {navItems.map((item, idx) => (
                                <li key={idx} className="relative">
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                                                className="flex items-center justify-between w-full px-4 py-3 text-lg text-white/80 hover:text-white"
                                            >
                                                {item.label}
                                                <ChevronDown className="h-5 w-5" />
                                            </button>
                                            <AnimatePresence>
                                                {openDropdown === idx && (
                                                    <motion.ul
                                                        initial={{ opacity: 0, y: -8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -8 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10"
                                                    >
                                                        {item.dropdown.map((sub, i) => (
                                                            <li key={i}>
                                                                <Link
                                                                    to={sub.href}
                                                                    className="block px-4 py-2 text-sm text-white/70 hover:text-white"
                                                                    onClick={() => setMobileOpen(false)}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="block px-4 py-3 text-lg text-white/80 hover:text-white"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li className="pt-4">
                                <Link
                                    to="/kontak"
                                    className="block w-full text-center rounded-full bg-gradient-to-r from-[#c6904c] to-[#d4af37] px-6 py-3 text-white font-semibold"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Konsultasi Gratis
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
