// pages/NilaiPage.jsx
// Complete premium redesign — Glassmorphism, Liquid Glass, Framer Motion
// - Pure TailwindCSS utilities
// - Lucide-react icons
// - Reduced motion aware
// - Background image supplied in brief

import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Layers, Shield, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";

/* Background Layer 2: Effects */
/* Grid Background Pattern */

const ValueCardSkeleton = ({ className = "" }) => {
    return (
        <div className={`rounded-2xl p-4 bg-neutral-200/50 backdrop-blur-sm overflow-hidden ${className}`}>
            <div className="h-10 w-10 rounded-lg bg-neutral-300/60 mb-4 relative overflow-hidden">
                <motion.div
                    aria-hidden
                    initial={{ x: "-100%" }}
                    animate={{ x: ["-100%", "150%"] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />
            </div>
            <div className="h-4 w-3/4 rounded-md bg-neutral-300/60 mb-3 relative overflow-hidden">
                <motion.div aria-hidden initial={{ x: "-100%" }} animate={{ x: ["-100%", "150%"] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
            <div className="h-3 w-full rounded-md bg-neutral-300/60 mt-2 relative overflow-hidden">
                <motion.div aria-hidden initial={{ x: "-100%" }} animate={{ x: ["-100%", "150%"] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
        </div>
    );
};

const ValueIcon = ({ Icon, className = "" }) => (
    <div className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${className}`}>
        <Icon className="h-6 w-6" />
    </div>
);

const NilaiPage = () => {
    const prefersReducedMotion = useReducedMotion();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // small delay to show skeletons -> simulates content load (kept short)
        const t = setTimeout(() => setLoaded(true), 650);
        return () => clearTimeout(t);
    }, []);

    const fadeInUp = useMemo(
        () => ({
            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        }),
        [prefersReducedMotion]
    );

    const stagger = useMemo(
        () => ({
            hidden: {},
            show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
        }),
        [prefersReducedMotion]
    );

    const values = [
        {
            id: 1,
            title: "Uji Kelayakan",
            desc: "Kami menganalisis keputusan dari berbagai sudut untuk menjamin kelayakan operasional, teknis, dan finansial — pendekatan holistik yang mengurangi risiko dan meningkatkan efisiensi.",
            Icon: Layers,
            accent: "bg-amber-400/30",
        },
        {
            id: 2,
            title: "Integritas",
            desc: "Integritas adalah landasan operasional kami: jujur, konsisten, dan bertanggung jawab, membangun kepercayaan jangka panjang bersama mitra dan klien.",
            Icon: Shield,
            accent: "bg-rose-400/25",
        },
        {
            id: 3,
            title: "Daya Ungkit",
            desc: "Kami menciptakan sinergi dan memaksimalkan potensi untuk mendorong pertumbuhan berkelanjutan dan solusi logistik yang berdampak.",
            Icon: TrendingUp,
            accent: "bg-emerald-400/25",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Nilai Utama | PT Batavia Sarana Sinergi Indonesia</title>
                <meta name="description" content="Nilai-nilai utama PT Batavia Sarana Sinergi Indonesia — profesional, terpercaya, dan berkelas." />
            </Helmet>

            <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">


                {/* Page background hero with image and layered glass */}
                <div className="relative isolate overflow-hidden">
                    {/* full bleed background image */}
                    <div
                        className="absolute inset-0 -z-30 bg-center bg-cover brightness-95"
                        style={{
                            backgroundImage:
                                "url('https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-07-768x776.png')",
                        }}
                        aria-hidden
                    />

                    {/* soft gradient overlay */}
                    <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/70 via-neutral-50/60 to-neutral-900/5" />

                    {/* Grid Background Pattern (kept as requested) */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
                        {/* decorative liquid glass blobs */}
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-6 top-16 h-40 w-40 rounded-full blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent 40%),linear-gradient(90deg,rgba(255,255,255,0.06),rgba(99,102,241,0.06))] opacity-90"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute right-6 bottom-20 h-56 w-56 rounded-full blur-3xl bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.12),transparent 40%),linear-gradient(90deg,rgba(34,197,94,0.04),rgba(99,102,241,0.04))] opacity-90"
                        />
                    </div>

                    {/* Hero / Intro */}
                    <header className="relative z-10 pt-20 pb-10 px-6">
                        <div className="mx-auto max-w-5xl">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
                                {/* Left / Title block */}
                                <motion.div
                                    className="md:col-span-7"
                                    initial="hidden"
                                    animate="show"
                                    variants={fadeInUp}
                                >
                                    <div className="max-w-xl">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight text-neutral-900">
                                            Nilai Nilai Utama Kami
                                        </h1>
                                        <p className="mt-4 text-sm sm:text-base text-neutral-900 max-w-xl">
                                            Menjalankan setiap langkah dengan prinsip profesionalisme, integritas, dan efisiensi — membentuk solusi logistik yang andal, berkelanjutan, dan bernilai.
                                        </p>

                                        <div className="mt-6 flex items-center gap-3">
                                            <a
                                                href="#values"
                                                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-white/60 backdrop-blur-md border border-white/50 shadow-sm text-sm font-medium hover:translate-y-[-2px] transition-transform"
                                            >
                                                Jelajahi Nilai Kami
                                                <ChevronRight className="h-4 w-4" />
                                            </a>

                                            <a
                                                href="#about"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 underline underline-offset-4"
                                            >
                                                Tentang Kami
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right / Glass feature block */}
                                <motion.div
                                    className="md:col-span-5"
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                                >
                                    <div className="rounded-3xl p-4 sm:p-6 bg-white/50 backdrop-blur-2xl border border-white/40 shadow-lg">
                                        <div className="relative overflow-hidden rounded-2xl">
                                            {/* shimmering glass overlay */}
                                            <div className="absolute inset-0 pointer-events-none">
                                                <div className="absolute left-0 top-0 h-24 w-24 rounded-full blur-2xl bg-white/20 mix-blend-screen opacity-60" />
                                                <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full blur-2xl bg-amber-200/10" />
                                            </div>

                                            {!loaded ? (
                                                <div className="p-4">
                                                    <ValueCardSkeleton />
                                                </div>
                                            ) : (
                                                <div className="p-4">
                                                    <div className="flex items-start gap-4">
                                                        <div className="h-12 w-12 rounded-lg bg-white/30 flex items-center justify-center">
                                                            <CheckCircle2 className="h-6 w-6 text-amber-500" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold font-serif">Standar Pelayanan Premium</h4>
                                                            <p className="text-xs text-neutral-700 mt-1">Proses kami dirancang untuk konsistensi, keamanan, dan ketepatan waktu — setiap saat.</p>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                                        <div className="rounded-xl bg-white/40 p-3 backdrop-blur-sm border border-white/30">
                                                            <p className="text-xs font-medium">SLA Terukur</p>
                                                            <p className="text-xs text-neutral-700 mt-1">Kinerja yang terpantau & dapat dilaporkan.</p>
                                                        </div>
                                                        <div className="rounded-xl bg-white/40 p-3 backdrop-blur-sm border border-white/30">
                                                            <p className="text-xs font-medium">Keamanan</p>
                                                            <p className="text-xs text-neutral-700 mt-1">Kepatuhan & proteksi data.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </header>
                </div>

                {/* MAIN CONTENT */}
                <main className="px-6 pb-16">
                    <section id="values" className="mx-auto max-w-6xl">
                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {values.map((v, idx) => (
                                <motion.article
                                    key={v.id}
                                    variants={fadeInUp}
                                    className="relative rounded-3xl p-6 overflow-hidden border border-white/40 bg-white/60 backdrop-blur-2xl shadow-[0_12px_40px_rgba(2,6,23,0.06)]"
                                >
                                    <div className="absolute -inset-1 -z-10 rounded-3xl" aria-hidden>
                                        {/* elegant diagonal highlight */}
                                        <div className={`absolute inset-0 transform -skew-y-3 ${v.accent} opacity-30`} />
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="rounded-2xl p-2 bg-white/40 border border-white/30 shadow-sm">
                                            <ValueIcon Icon={v.Icon} className="text-neutral-900" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-serif font-semibold">{v.title}</h3>
                                            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{v.desc}</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600">
                                            <CheckCircle2 className="h-4 w-4" />
                                            Fundamental
                                        </div>
                                        <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:underline">
                                            Read more
                                            <ChevronRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </section>

                    {/* Feature row with staggered cards + skeletons */}
                    <section id="about" className="mt-12 mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[0, 1, 2].map((c, i) => (
                                <AnimatePresence mode="popLayout" key={i}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="rounded-2xl p-5 bg-white/50 backdrop-blur-md border border-white/30"
                                    >
                                        {!loaded ? (
                                            <ValueCardSkeleton />
                                        ) : (
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="text-sm font-semibold">Proses & Kebijakan</h4>
                                                        <p className="text-xs text-neutral-600 mt-1">Standar operasi dan kebijakan mutu kami.</p>
                                                    </div>
                                                    <div className="h-10 w-10 rounded-lg bg-white/30 flex items-center justify-center">
                                                        <Layers className="h-5 w-5" />
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm text-neutral-700">Kami menerapkan kontrol kualitas terpadu dan audit berkala untuk memastikan konsistensi hasil.</p>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            ))}
                        </div>
                    </section>

                    {/* CTA / closing */}
                    <section className="mt-14 mx-auto max-w-4xl">
                        <motion.div initial="hidden" animate="show" variants={fadeInUp} className="rounded-3xl p-6 bg-gradient-to-r from-white/70 to-white/50 border border-white/30 backdrop-blur-2xl shadow-xl">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-serif font-semibold">Bermitra dengan kami</h3>
                                    <p className="text-sm text-neutral-700 mt-1">Bersama kami, Anda mendapatkan standar tinggi, kepastian operasi, dan kolaborasi strategis.</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                                    <a className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-neutral-900 text-white text-sm font-medium shadow hover:scale-[1.01] transition-transform" href="#">
                                        Hubungi Sales
                                        <ChevronRight className="h-4 w-4" />
                                    </a>
                                    <a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700" href="#">
                                        Lihat Dokumen
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default NilaiPage;
