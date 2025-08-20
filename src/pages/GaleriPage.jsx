// GaleriPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
    Image as ImageIcon,
    Grid as GridIcon,
    Search,
    Plus,
    X,
    ArrowLeft,
    ArrowRight,
    Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------- sample image set ---------- */
const IMAGES = [
    "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-07-768x776.png",
    "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-06-scaled.png",
    "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-07-768x776.png",
    "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-06-scaled.png",
    "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-07-768x776.png",
    "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-06-scaled.png",
];

const usePrefersReducedMotion = () => useReducedMotion();
const shimmerTransition = { repeat: Infinity, ease: "linear", duration: 1.1 };

/* ---------- Skeleton ---------- */
const ShimmerSkeleton = ({ className = "h-40" }) => {
    const reduce = usePrefersReducedMotion();
    return (
        <div className={`relative overflow-hidden rounded-2xl bg-neutral-100/30 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
            {!reduce && (
                <motion.div
                    className="absolute -left-40 top-0 h-full w-40 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60"
                    initial={{ x: -160 }}
                    animate={{ x: "140%" }}
                    transition={shimmerTransition}
                />
            )}
        </div>
    );
};

/* ---------- Hero Carousel ---------- */
const HeroCarousel = ({ images }) => {
    const reduce = usePrefersReducedMotion();
    const [i, setI] = useState(0);
    useEffect(() => {
        if (reduce) return;
        const t = setInterval(() => setI((p) => (p + 1) % images.length), 4500);
        return () => clearInterval(t);
    }, [images.length, reduce]);

    return (
        <section className="pt-24 pb-6 px-4"> {/* pt-24 untuk beri jarak dari navbar */}
            <div className="max-w-6xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/20 shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr,320px] gap-6 p-5 items-center">
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.45 }}
                            className="rounded-2xl overflow-hidden"
                        >
                            <img
                                src={images[i]}
                                alt={`Featured ${i + 1}`}
                                className="w-full h-56 sm:h-72 object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                        <div className="space-y-3 px-2">
                            <h2 className="font-serif text-lg sm:text-xl text-neutral-900">Galeri Eksklusif</h2>
                            <p className="text-sm text-neutral-700">
                                Menyusun potret perjalanan kami: proyek, momen lapangan, dan detail layanan.
                            </p>
                            <div className="flex gap-2 mt-2">
                                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900 text-white text-sm">
                                    <ImageIcon className="w-4 h-4" /> Lihat Koleksi
                                </button>
                                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur text-sm border border-white/20">
                                    <Download className="w-4 h-4" /> Unduh
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------- Sticky Filters ---------- */
const StickyFilters = ({ onSearch }) => (
    <div className="sticky top-4 z-30 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
            <div className="flex-1 rounded-3xl bg-white/30 backdrop-blur border border-white/12 p-2 flex items-center gap-2 shadow-sm">
                <Search className="w-4 h-4 text-neutral-700 ml-2" />
                <input
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Cari foto, proyek, atau kata kunci"
                    className="flex-1 bg-transparent outline-none text-sm text-neutral-900 placeholder:text-neutral-500 px-2 py-2"
                />
            </div>
            <div className="flex gap-2">
                <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur border border-white/12 text-sm">
                    <GridIcon className="w-4 h-4" /> Grid
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900 text-white text-sm">
                    <Plus className="w-4 h-4" /> Upload
                </button>
            </div>
        </div>
    </div>
);

/* ---------- Shimmer Image ---------- */
const ShimmerImage = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    const reduce = usePrefersReducedMotion();
    return (
        <div className="w-full h-48 sm:h-56 relative bg-neutral-100/30 rounded-2xl overflow-hidden">
            {!loaded && (
                <div className="absolute inset-0 p-3">
                    <ShimmerSkeleton className="h-full" />
                </div>
            )}
            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={loaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: reduce ? 0 : 0.6 }}
                className={`w-full h-full object-cover ${loaded ? "rounded-2xl" : "opacity-0"}`}
            />
        </div>
    );
};

/* ---------- Mosaic Grid ---------- */
const MosaicGrid = ({ images, onOpen }) => {
    const reduce = usePrefersReducedMotion();
    const layout = [
        { span: "col-span-2 row-span-2" },
        {},
        {},
        { span: "col-span-2" },
        {},
        {},
    ];
    return (
        <section className="px-4 mt-6 pb-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-fr">
                    {images.map((src, idx) => {
                        const item = layout[idx] || {};
                        const classes = item.span ? item.span : "";
                        return (
                            <motion.button
                                key={idx}
                                onClick={() => onOpen(idx)}
                                whileHover={!reduce ? { scale: 1.02 } : {}}
                                whileTap={{ scale: 0.99 }}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.06, duration: 0.45 }}
                                className={`relative overflow-hidden rounded-2xl ${classes} bg-neutral-50/30 border border-white/12 shadow-md`}
                            >
                                <ShimmerImage src={src} alt={`Gallery ${idx + 1}`} />
                                <div className="absolute left-3 bottom-3 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs text-white/95">
                                    Dokumentasi • {idx + 1}
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

/* ---------- Page ---------- */
export default function GaleriPage() {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState(IMAGES);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!search) {
            setImages(IMAGES);
        } else {
            const s = search.toLowerCase();
            setImages(IMAGES.filter((_, i) => (`project ${i + 1}`).includes(s) || (`dokumentasi ${i + 1}`).includes(s)));
        }
    }, [search]);

    return (
        <div className="relative min-h-screen text-neutral-900">
            <Helmet>
                <title>Galeri - PT Batavia Sarana Sinergi</title>
            </Helmet>

            {/* Background Layer 1: Luxury Liquid Glass */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#e6c67a]/30 via-[#c6904c]/20 to-transparent blur-[160px]" />
                <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-white/10 via-[#d4af37]/20 to-transparent blur-[160px]" />
            </div>

            {/* Background Layer 2: Effects */}
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <HeroCarousel images={IMAGES} />
            <StickyFilters onSearch={setSearch} />

            <main>
                {loading ? (
                    <div className="px-4 mt-6 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i}>
                                <ShimmerSkeleton className="h-44" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <MosaicGrid images={images} onOpen={() => { }} />
                )}
                <Footer />
            </main>

        </div>
    );
}
