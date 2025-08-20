import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Sparkles,
    ShieldCheck,
    Leaf,
    Gauge,
    ArrowDownRight,
    Check,
} from "lucide-react";

// Skeleton with shimmer using Framer Motion (no custom CSS keyframes)
const Skeleton = ({ className = "" }) => (
    <div className={`relative overflow-hidden rounded-xl bg-neutral-200/60 ${className}`}>
        <motion.span
            aria-hidden
            className="absolute inset-y-0 -left-1/3 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

const GlassChip = ({ icon: Icon, children }) => (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/30 px-3 py-1.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-medium tracking-wide text-neutral-800">{children}</span>
    </div>
);

const VisiPage = () => {
    const prefersReducedMotion = useReducedMotion();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsReady(true), 650);
        return () => clearTimeout(t);
    }, []);

    const fadeUp = useMemo(
        () => ({
            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
            show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
        }),
        [prefersReducedMotion]
    );

    const stagger = useMemo(
        () => ({
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
            },
        }),
        [prefersReducedMotion]
    );

    return (
        <>
            <Helmet>
                <title>Visi & Misi | PT Batavia Sarana Sinergi Indonesia</title>
                <meta name="description" content="Visi dan Misi PT Batavia Sarana Sinergi Indonesia dengan pengalaman premium, elegan, dan modern." />
            </Helmet>

            <div className="relative min-h-screen text-neutral-900">

                {/* Background Layer 1: Liquid Glass + Hero Image */}
                <div
                    className="absolute inset-0 -z-30 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-06-scaled.png')",
                    }}
                />
                <div className="absolute inset-0 -z-20 bg-gradient-to-b from-neutral-900/50 via-white/40 to-neutral-900/40" />

                {/* Background Layer 2: Effects */}
                {/* Grid Background Pattern */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(rgba(24,24,27,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
                    {/* Liquid orbs */}
                    <motion.div
                        className="absolute left-8 top-24 h-40 w-40 rounded-full bg-gradient-to-b from-white/30 to-white/5 blur-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                    />
                    <motion.div
                        className="absolute right-10 bottom-10 h-52 w-52 rounded-full bg-gradient-to-t from-white/25 to-white/5 blur-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1 }}
                    />
                </div>

                {/* HERO */}
                <section className="relative pt-28 pb-14 md:pt-36 md:pb-20">
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-12">
                        {/* Headline Panel */}
                        <motion.div
                            className="relative col-span-1 md:col-span-7 rounded-3xl border border-white/40 bg-white/40 p-7 md:p-10 backdrop-blur-2xl shadow-[0_8px_48px_rgba(0,0,0,0.10)]"
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                        >
                            <div className="flex flex-wrap items-center gap-2">
                                <GlassChip icon={Sparkles}>Pengalaman Premium</GlassChip>
                                <GlassChip icon={ShieldCheck}>Terpercaya</GlassChip>
                                <GlassChip icon={Leaf}>Berkelanjutan</GlassChip>
                            </div>

                            <h1 className="mt-5 text-3xl md:text-5xl font-serif font-bold tracking-tight text-neutral-900">
                                Visi & Misi Perusahaan
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-700">
                                Menegaskan komitmen kami dalam menghadirkan solusi logistik terpadu
                                dengan pendekatan modern, ramah pengguna, dan berkelas.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a href="#visi" className="group inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-neutral-900 backdrop-blur-xl transition-transform active:scale-[0.98]">
                                    Lihat Visi
                                    <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                </a>
                                <a href="#misi" className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900/80 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 backdrop-blur-xl">
                                    Telusuri Misi
                                </a>
                            </div>
                        </motion.div>

                        {/* Highlight Card */}
                        <motion.div
                            className="relative col-span-1 md:col-span-5 rounded-3xl border border-white/40 bg-gradient-to-b from-white/50 to-white/20 p-6 backdrop-blur-2xl shadow-[0_8px_48px_rgba(0,0,0,0.12)]"
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.08 }}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs tracking-widest text-neutral-700">STANDARD OF EXCELLENCE</p>
                                    <h3 className="mt-2 text-2xl font-serif font-bold">World‑class Logistics</h3>
                                </div>
                                <Gauge className="h-6 w-6" />
                            </div>
                            <p className="mt-3 text-sm text-neutral-700">
                                Pengalaman premium berbalut <em>liquid‑glass UI</em> demi fokus pada hal terpenting: kejelasan informasi dan kepercayaan.
                            </p>

                            <div className="mt-6 grid grid-cols-3 gap-3">
                                {["99.9%", "24/7", "100+"].map((k, i) => (
                                    <div key={i} className="rounded-2xl border border-white/60 bg-white/50 p-4 text-center backdrop-blur-xl">
                                        <div className="text-xl font-semibold">{k}</div>
                                        <div className="text-[11px] text-neutral-600">Reliability</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* VISION */}
                <section id="visi" className="relative py-10 md:py-16">
                    <div className="mx-auto max-w-5xl px-6">
                        <motion.div
                            className="rounded-3xl border border-white/50 bg-white/60 p-8 md:p-12 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">Visi</h2>
                                <div className="hidden md:flex items-center gap-2 text-xs text-neutral-600">
                                    <span>Kejelasan</span>
                                    <span>•</span>
                                    <span>Integritas</span>
                                    <span>•</span>
                                    <span>Keberlanjutan</span>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {isReady ? (
                                    <motion.p
                                        key="visi-text"
                                        className="mt-6 text-base md:text-lg leading-relaxed text-neutral-800"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {/* isi teks visi misi tidak perlu diubah — akan disesuaikan oleh Anda */}
                                        Menjadi perusahaan jasa pengurusan transportasi yang terdepan, terpercaya, dan profesional dalam menyediakan solusi logistik yang terpadu dan berkelanjutan. Kami berkomitmen untuk menjadi mitra strategis bagi para pelaku usaha dalam mendukung kelancaran rantai pasok nasional dan internasional melalui pelayanan yang unggul, teknologi yang modern, serta integritas yang tinggi.
                                    </motion.p>
                                ) : (
                                    <div className="mt-6 space-y-3">
                                        <Skeleton className="h-5 w-11/12" />
                                        <Skeleton className="h-5 w-10/12" />
                                        <Skeleton className="h-5 w-9/12" />
                                    </div>
                                )}
                            </AnimatePresence>

                            {/* Decorative bottom bar */}
                            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {[
                                    { label: "Transparansi", icon: ShieldCheck },
                                    { label: "Efisiensi", icon: Gauge },
                                    { label: "Ramah Lingkungan", icon: Leaf },
                                ].map((f, i) => (
                                    <motion.div
                                        key={f.label}
                                        className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/50 px-4 py-3 backdrop-blur-xl"
                                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ delay: prefersReducedMotion ? 0 : 0.05 * i, duration: 0.45 }}
                                    >
                                        <f.icon className="h-5 w-5" />
                                        <span className="text-sm font-medium text-neutral-800">{f.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* MISSION */}
                <section id="misi" className="relative pb-20 pt-6">
                    <div className="mx-auto max-w-6xl px-6">
                        <motion.h2
                            className="mb-6 text-center text-2xl md:text-3xl font-serif font-bold"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            Misi Kami
                        </motion.h2>

                        {/* Vertical timeline layout for a brand‑new look */}
                        <motion.ol
                            className="relative mx-auto max-w-3xl border-l border-white/50 pl-6"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {[
                                "Menyediakan layanan pengurusan transportasi dan logistik multimoda yang cepat, aman, efisien, dan sesuai dengan kebutuhan spesifik pelanggan di berbagai sektor industri.",
                                "Mengembangkan sistem operasional berbasis teknologi informasi terkini untuk mendukung transparansi, kecepatan pemrosesan, dan monitoring yang akurat dalam setiap proses pengiriman.",
                                "Membangun jaringan kemitraan strategis, baik dengan pelanggan, mitra usaha, maupun pihak regulator, untuk menciptakan kolaborasi yang saling menguntungkan dan berorientasi jangka panjang.",
                                "Meningkatkan kualitas sumber daya manusia melalui pelatihan berkelanjutan dan pembinaan profesionalisme agar mampu memberikan pelayanan terbaik secara konsisten.",
                                "Menjalankan bisnis secara etis, mematuhi regulasi dan standar industri logistik, serta berkontribusi dalam menciptakan sistem logistik nasional yang efisien dan berdaya saing global.",
                                "Mendorong inovasi dan keberlanjutan dalam setiap aspek operasional guna mendukung pertumbuhan usaha yang ramah lingkungan dan bertanggung jawab secara sosial.",
                            ].map((misi, idx) => (
                                <motion.li
                                    key={idx}
                                    className="group relative mb-6 last:mb-0"
                                    variants={fadeUp}
                                >
                                    {/* node */}
                                    <div className="absolute -left-3 top-2 h-6 w-6 rounded-full border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]" />

                                    <div className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-transform group-hover:translate-y-[-2px]">
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-3xl bg-neutral-900/90 text-white shadow-md">
                                                <Check className="h-4 w-4" />
                                            </span>
                                            <p className="text-sm md:text-base leading-relaxed text-neutral-800">{misi}</p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ol>

                        {/* Sticky Glass Dock for quick nav on desktop */}
                        <motion.div
                            className="sticky bottom-4 mt-10 flex justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-3 py-2 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                                <a href="#visi" className="rounded-full px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-white/60">
                                    Ke Visi
                                </a>
                                <a href="#misi" className="rounded-full px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-white/60">
                                    Ke Misi
                                </a>
                                <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })} className="rounded-full px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-white/60">
                                    Ke Atas
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default VisiPage;