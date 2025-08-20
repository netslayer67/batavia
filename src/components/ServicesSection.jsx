import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Layers,
  Truck,
  Settings,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Perencanaan & Strategi",
    desc:
      "Pendekatan terstruktur untuk memetakan kebutuhan, menyusun prioritas, dan merancang langkah eksekusi yang presisi.",
    points: [
      "Analisis kebutuhan lintas fungsi",
      "Roadmap eksekusi yang jelas",
      "Indikator kinerja terukur",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Pengelolaan Operasional",
    desc:
      "Operasional yang rapi dan adaptif untuk memastikan kelancaran proses harian dengan risiko yang terkelola.",
    points: [
      "SOP dan tata kelola efisien",
      "Monitoring & pelaporan rutin",
      "Optimasi sumber daya",
    ],
  },
  {
    icon: Truck,
    title: "Distribusi & Logistik",
    desc:
      "Jalur distribusi yang andal serta tepat waktu untuk menjaga kontinuitas layanan dan kepuasan pelanggan.",
    points: [
      "Perencanaan rute efektif",
      "Pelacakan dan visibilitas",
      "Koordinasi multi-vendor",
    ],
  },
  {
    icon: Settings,
    title: "Layanan Khusus",
    desc:
      "Solusi kustom yang dirancang sesuai karakter industri dan tantangan unik organisasi Anda.",
    points: [
      "Integrasi sistem",
      "Penyesuaian workflow",
      "Dukungan implementasi end-to-end",
    ],
  },
];

const imageUrls = [
  "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/industrial-port-container-yard-2048x1411.jpg",
  "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-07-768x776.png",
  "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/industrial-port-container-yard-2048x1411.jpg",
  "https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/industrial-port-container-yard-2048x1411.jpg",
];

const ServicesSection = () => {
  const [loaded, setLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);

  // Motion presets
  const ease = [0.22, 1, 0.36, 1];
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
      },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease },
    },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease },
    },
  };

  // Shimmer Skeleton
  const Shimmer = () => (
    <motion.div
      aria-hidden
      initial={{ x: "-100%" }}
      animate={{ x: "130%" }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.7,
      }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  );

  return (
    <section
      id="services"
      className="relative w-full min-h-screen py-28 sm:py-36 overflow-hidden text-white"
    >
      {/* Background Layer 1: Liquid Glass Accents */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute -top-20 -left-24 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-[#e6c67a]/30 via-[#c6904c]/15 to-transparent blur-[160px]" />
        <div className="absolute -bottom-24 -right-20 w-[760px] h-[760px] rounded-full bg-gradient-to-tr from-white/10 via-[#d4af37]/20 to-transparent blur-[170px]" />
      </div>

      {/* Background Layer 2: Effects */}
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto text-center mb-16 sm:mb-24"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight bg-gradient-to-r from-[#d4af37] via-[#e6c67a] to-[#fff5cc] bg-clip-text text-transparent"
          >
            Layanan Terintegrasi
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-200 font-light"
          >
            Kami menghadirkan solusi menyeluruh dengan standar premium—menggabungkan
            ketelitian perencanaan, disiplin operasional, keandalan distribusi, dan
            fleksibilitas layanan khusus—untuk memperkuat performa organisasi Anda.
          </motion.p>

          {/* Text Skeleton (visible until loaded) */}
          {!loaded && (
            <div className="relative mx-auto mt-6 w-full max-w-3xl h-5 rounded-full overflow-hidden bg-white/5">
              <Shimmer />
            </div>
          )}
        </motion.div>

        {/* Top Composition: Image Mosaic + Value Badge */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mb-16 md:mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {imageUrls.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
              >
                {!loaded && <Shimmer />}
                <img
                  src={src}
                  alt={`Service visual ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((s, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              whileHover={{ y: shouldReduceMotion ? 0 : -6, scale: shouldReduceMotion ? 1 : 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative p-6 md:p-7 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-2xl leading-tight text-white mb-2">
                {s.title}
              </h3>

              {/* Desc skeleton */}
              {!loaded && (
                <div className="relative mb-4 h-4 rounded-full overflow-hidden bg-white/5">
                  <Shimmer />
                </div>
              )}

              <p className="text-sm sm:text-base text-neutral-200/90 leading-relaxed mb-5">
                {s.desc}
              </p>

              <ul className="space-y-2.5">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-200/90">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/90">
                <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition">
                  Pelajari lebih lanjut
                </span>
                <ArrowRight className="h-4 w-4" />
              </div>

              {/* Liquid highlight */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Panel */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 md:mt-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-7 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-2xl md:text-3xl font-serif text-white">
                Siap mengakselerasi kinerja layanan Anda?
              </h4>
              <p className="mt-3 text-neutral-200/90 leading-relaxed">
                Tim kami siap membantu Anda merancang solusi yang elegan, efektif, dan dapat diandalkan—
                dari perencanaan hingga implementasi end-to-end—dengan standar eksekusi berkelas.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <button
                className="w-full lg:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#4cc656] to-[#83e67a] text-black font-semibold shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]"
              >
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
