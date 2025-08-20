// pages/ProfilePage.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    ShieldCheck,
    Truck,
    Clock,
    FileText,
    Building2,
    Award,
    ChevronRight,
    Sparkles,
} from 'lucide-react';

const LEGAL_DOCS = [
    {
        title: 'SK Kemenkumham',
        url: 'https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/2.-SK-KEMKUMHAM_page-0001-1001x1536.jpg',
    },
    {
        title: 'Surat Keterangan Terdaftar (SKT)',
        url: 'https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/4.-SKT_page-0001-1087x1536.jpg',
    },
    {
        title: 'NIB',
        url: 'https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/6.-NIB_page-0001-1085x1536.jpg',
    },
    {
        title: 'Sertifikat Standar',
        url: 'https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/7.-SERTIFIKAT-STANDAR_page-0002-1085x1536.jpg',
    },
];

const Skeleton = ({ className = '' }) => (
    <div className={`relative overflow-hidden bg-neutral-200/60 dark:bg-neutral-800/40 ${className}`}>
        <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
            style={{ animation: 'shimmer 1.4s infinite' }}
        />
        <style>{`
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `}</style>
    </div>
);

const ProfilePage = () => {
    const prefersReducedMotion = useReducedMotion();
    const [textLoaded, setTextLoaded] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(Array(LEGAL_DOCS.length).fill(false));

    useEffect(() => {
        const t = setTimeout(() => setTextLoaded(true), 500);
        return () => clearTimeout(t);
    }, []);

    const container = useMemo(
        () => ({
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.08,
                    duration: 0.5,
                },
            },
        }),
        [prefersReducedMotion]
    );

    const item = useMemo(
        () => ({
            hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        }),
        [prefersReducedMotion]
    );

    return (
        <>
            <Helmet>
                <title>Profil Perusahaan | PT Batavia Sarana Sinergi Indonesia</title>
                <meta
                    name="description"
                    content="Profil resmi PT Batavia Sarana Sinergi Indonesia: perusahaan JPT & solusi logistik terpadu yang mengutamakan keandalan, efisiensi, dan ketepatan waktu."
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Profil | PT Batavia Sarana Sinergi Indonesia" />
                <meta
                    property="og:description"
                    content="Siapa kami, legalitas, dan nilai inti dalam memberikan solusi logistik & transportasi yang terpercaya."
                />
            </Helmet>

            <div className="relative min-h-screen bg-white text-neutral-900">

                {/* Background Layer 1: Liquid Glass & Hero Background */}
                <div className="pointer-events-none absolute inset-0 -z-20">
                    {/* Liquid blobs */}
                    <div className="absolute -top-24 -left-20 w-[38rem] h-[38rem] rounded-full bg-green-500/10 blur-[140px]" />
                    <div className="absolute top-1/3 -right-16 w-[44rem] h-[44rem] rounded-full bg-emerald-400/10 blur-[160px]" />
                </div>

                {/* Background Layer 2: Effects */}
                {/* Grid Background Pattern */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,16,0.06)_1px,transparent_1px),linear-gradient(rgba(16,24,16,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
                </div>

                {/* HERO */}
                <section
                    className="relative isolate pt-32 md:pt-40 pb-16 md:pb-24"
                    style={{
                        backgroundImage:
                            "url('https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-06-scaled.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-white/80 to-black/92" />

                    <div className="relative max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="w-full md:w-5/6 lg:w-3/4"
                        >
                            <div className="rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                                <div className="flex items-center gap-2 text-green-700">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="text-xs tracking-widest font-semibold uppercase">
                                        Profil Perusahaan
                                    </span>
                                </div>
                                <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-neutral-900">
                                    PT Batavia Sarana Sinergi Indonesia
                                </h1>
                                <p className="mt-4 text-base sm:text-lg text-neutral-700">
                                    Mitra sinergis untuk solusi logistik terpadu: efisien, aman, dan tepat waktu.
                                </p>
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white text-xs sm:text-sm px-4 py-2">
                                        <ShieldCheck className="w-4 h-4" /> Terlisensi & Terverifikasi
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 text-green-700 text-xs sm:text-sm px-4 py-2">
                                        <Truck className="w-4 h-4" /> Jaringan Distribusi Nasional
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white text-xs sm:text-sm px-4 py-2">
                                        <Clock className="w-4 h-4" /> SLA Tepat Waktu
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SIAPA KAMI */}
                <section className="relative py-14 md:py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                        >
                            {/* Konten Teks */}
                            <motion.div variants={item} className="lg:col-span-7">
                                <div className="rounded-3xl p-6 md:p-8 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                                        Siapa Kami?
                                    </h2>

                                    <AnimatePresence initial={false}>
                                        {!textLoaded ? (
                                            <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-5 space-y-3">
                                                <Skeleton className="h-5 rounded-md" />
                                                <Skeleton className="h-5 rounded-md w-11/12" />
                                                <Skeleton className="h-5 rounded-md w-5/6" />
                                                <Skeleton className="h-5 rounded-md w-4/6" />
                                                <div className="mt-4 space-y-2">
                                                    <Skeleton className="h-4 rounded-md" />
                                                    <Skeleton className="h-4 rounded-md w-10/12" />
                                                    <Skeleton className="h-4 rounded-md w-9/12" />
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="content"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="mt-5 space-y-4 text-neutral-700 leading-relaxed"
                                            >
                                                <p><strong>PT Batavia Sarana Sinergi Indonesia</strong> adalah perusahaan yang bergerak di bidang <em>Jasa Pengurusan Transportasi (JPT)</em> dan solusi logistik terpadu, hadir untuk menjawab kebutuhan pengiriman barang yang efisien, aman, dan tepat waktu.</p>
                                                <p>Didukung oleh tim profesional dengan pengalaman lebih dari satu dekade di industri logistik dan transportasi, kami berkomitmen memberikan layanan yang mengedepankan integritas, keandalan, serta transparansi dalam setiap prosesnya.</p>
                                                <p>Sejak awal berdiri, PT Batavia Sarana Sinergi Indonesia menjadikan nilai kepercayaan, tanggung jawab, dan uji kelayakan sebagai fondasi utama dalam membangun hubungan jangka panjang dengan klien dan mitra usaha.</p>
                                                <p>Kami percaya bahwa logistik bukan sekadar pemindahan barang, melainkan bagian strategis dari keberhasilan operasional bisnis. Oleh karena itu, kami hadir sebagai mitra sinergis yang siap mendukung pertumbuhan dan kelancaran rantai pasok Anda, baik di tingkat nasional maupun internasional.</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Fitur Ringkas */}
                                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {[
                                            { icon: <Building2 className="w-4 h-4" />, label: 'JPT Terpadu' },
                                            { icon: <Award className="w-4 h-4" />, label: 'Integritas' },
                                            { icon: <ShieldCheck className="w-4 h-4" />, label: 'Keandalan' },
                                            { icon: <Clock className="w-4 h-4" />, label: 'Tepat Waktu' },
                                        ].map((f, i) => (
                                            <motion.div
                                                variants={item}
                                                key={i}
                                                className="flex items-center gap-2 rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-md px-3 py-2"
                                            >
                                                <span className="text-green-700">{f.icon}</span>
                                                <span className="text-xs font-medium text-neutral-700">{f.label}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Gambar Gedung */}
                            <motion.div variants={item} className="lg:col-span-5 flex justify-center">
                                <div className="relative rounded-3xl overflow-hidden border border-white/40 shadow-lg bg-white/70 backdrop-blur-xl">
                                    <img
                                        src="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/Untitled-1-1.png"
                                        alt="Gedung PT Batavia Sarana Sinergi Indonesia"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Komitmen Layanan dipindah ke bawah */}
                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-12"
                        >
                            <div className="relative rounded-3xl p-6 md:p-10 overflow-hidden border border-white/40 bg-gradient-to-br from-green-50 to-white backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                                <div className="absolute -top-20 -right-16 w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />
                                <div className="relative">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-neutral-900">Komitmen Layanan</h3>
                                    <ul className="mt-6 space-y-4 text-sm md:text-base text-neutral-700">
                                        {[
                                            'Perencanaan & Strategi berbasis kebutuhan klien',
                                            'Pengelolaan Operasional yang efisien & transparan',
                                            'Distribusi & Logistik cepat serta terukur',
                                            'Layanan Khusus lintas industri',
                                        ].map((t, i) => (
                                            <li key={i} className="flex items-start gap-3 rounded-xl bg-white/70 border border-neutral-200/60 px-5 py-3">
                                                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
                                                    <ChevronRight className="w-4 h-4" />
                                                </span>
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* LEGALITAS KAMI */}
                <section className="relative py-14 md:py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-end justify-between gap-6 mb-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
                                    Legalitas Kami
                                </h2>
                                <p className="mt-2 text-neutral-600">
                                    Dokumen resmi perusahaan untuk menjamin kepercayaan dan kepatuhan regulasi.
                                </p>
                            </div>
                            <a
                                href="https://www.bataviasaranasinergi.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 backdrop-blur-md px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-white transition"
                            >
                                <FileText className="w-4 h-4 text-green-700" />
                                Lihat Selengkapnya
                            </a>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {LEGAL_DOCS.map((doc, idx) => (
                                <motion.div variants={item} key={doc.title} className="group">
                                    <div className="relative rounded-2xl overflow-hidden border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                                        <a href={doc.url} target="_blank" rel="noopener noreferrer" className="block">
                                            <div className="aspect-[3/4]">
                                                {!imgLoaded[idx] && <Skeleton className="w-full h-full" />}
                                                <img
                                                    src={doc.url}
                                                    alt={doc.title}
                                                    loading="lazy"
                                                    onLoad={() =>
                                                        setImgLoaded((s) => {
                                                            const cp = [...s];
                                                            cp[idx] = true;
                                                            return cp;
                                                        })
                                                    }
                                                    className={`h-full w-full object-cover transition duration-500 ease-out ${imgLoaded[idx] ? 'opacity-100' : 'opacity-0'
                                                        } group-hover:scale-[1.02]`}
                                                />
                                            </div>
                                        </a>

                                        <div className="p-4">
                                            <h3 className="text-sm font-semibold text-neutral-900">{doc.title}</h3>
                                            <p className="mt-1 text-xs text-neutral-600">
                                                Klik untuk melihat versi resolusi penuh.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* STRATEGIC PILLARS */}
                <section className="relative pb-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {[
                                {
                                    icon: <ShieldCheck className="w-5 h-5" />,
                                    title: 'Kepastian & Kepatuhan',
                                    desc: 'Mematuhi regulasi dan standar industri agar proses berjalan mulus dan aman.',
                                },
                                {
                                    icon: <Truck className="w-5 h-5" />,
                                    title: 'Konektivitas & Kapabilitas',
                                    desc: 'Jaringan moda transportasi yang lincah untuk kebutuhan nasional dan internasional.',
                                },
                                {
                                    icon: <Clock className="w-5 h-5" />,
                                    title: 'Kecepatan & Ketepatan',
                                    desc: 'SLA terukur, pelacakan transparan, dan pengiriman tepat waktu.',
                                },
                            ].map((c, i) => (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ y: prefersReducedMotion ? 0 : -4 }}
                                    className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                                >
                                    <div className="inline-flex items-center justify-center rounded-xl bg-green-600 text-white h-10 w-10">
                                        {c.icon}
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-neutral-900">{c.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default ProfilePage;
