'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Nadia Prameswari',
    role: 'Direktur Operasional, Arunika Group',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80',
    quote:
      'Pendekatan tim sangat presisi dan penuh estetika. Proses internal kami menjadi lebih rapi, pelanggan lebih terhubung, dan hasilnya terasa naik kelas.',
    highlight: { value: '+280%', label: 'Pertumbuhan Interaksi' },
  },
  {
    name: 'Reza Alfarizi',
    role: 'Head of Marketing, SagaraTech',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    quote:
      'Desain yang menawan sekaligus performa tangguh. Konversi meningkat tajam tanpa kompromi pada estetika—pondasi premium bagi brand kami.',
    highlight: { value: '+7.9%', label: 'Conversion Rate' },
  },
  {
    name: 'Laras Sekar',
    role: 'CEO, Prima Logistik',
    avatar:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
    quote:
      'Eksekusi end-to-end begitu disiplin. Tim tanggap, insight tajam, hasil konsisten. Kami mendapatkan arah jelas sekaligus kecepatan yang berkelas.',
    highlight: { value: '98%', label: 'Retensi Klien' },
  },
];

const LOGO_FILES = Array.from({ length: 19 }, (_, i) => `${i + 3}.png`);

const TestimonialSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const intervalRef = useRef(null);
  const hoveringRef = useRef(false);

  // Auto-play
  useEffect(() => {
    const play = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (!hoveringRef.current)
          setIndex((i) => (i + 1) % TESTIMONIALS.length);
      }, shouldReduceMotion ? 9000 : 6000);
    };
    play();
    return () => clearInterval(intervalRef.current);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // Motion
  const ease = [0.22, 1, 0.36, 1];
  const fade = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease }
    }
  };

  // Shimmer Skeleton
  const Shimmer = () => (
    <motion.div
      aria-hidden
      initial={{ x: '-100%' }}
      animate={{ x: '130%' }}
      transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  );

  const marqueeLogos = useMemo(() => [...LOGO_FILES, ...LOGO_FILES], []);

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen py-28 sm:py-36 text-white overflow-hidden"
    >
      {/* Background Layer 1: Liquid Glass */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-[#e6c67a]/30 via-[#c6904c]/15 to-transparent blur-[160px]" />
        <div className="absolute -bottom-28 -right-20 w-[760px] h-[760px] rounded-full bg-gradient-to-tr from-white/10 via-[#d4af37]/20 to-transparent blur-[170px]" />
      </div>

      {/* Background Layer 2: Effects */}
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-5xl mx-auto text-center mb-16 sm:mb-24"
        >
          <motion.h2
            variants={fade}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight bg-gradient-to-r from-[#d4af37] via-[#e6c67a] to-[#fff5cc] bg-clip-text text-transparent"
          >
            Testimoni Eksklusif
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-6 sm:mt-8 text-lg md:text-xl text-neutral-200/90 leading-relaxed font-light"
          >
            Suara dari para mitra dan klien yang mempercayai kami—reflektif,
            elegan, dan penuh presisi.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => (hoveringRef.current = true)}
          onMouseLeave={() => (hoveringRef.current = false)}
        >
          <AnimatePresence mode="wait">
            {TESTIMONIALS.map((t, i) =>
              i === index ? (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } }}
                  exit={{ opacity: 0, y: -24, scale: 0.98, transition: { duration: 0.4, ease } }}
                  className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl shadow-xl p-10"
                >
                  {/* Header */}
                  <div className="flex items-center gap-5">
                    <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                      {!loaded && <Shimmer />}
                      <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                      <p className="text-sm text-neutral-300">{t.role}</p>
                    </div>
                    <div className="ml-auto hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                      <span className="text-sm text-white/90">{t.highlight.value}</span>
                      <span className="text-xs text-neutral-200/80">{t.highlight.label}</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-7">
                    <Quote className="w-8 h-8 text-white/60" />
                    {!loaded && (
                      <div className="relative my-3 h-4 rounded-full overflow-hidden bg-white/5">
                        <Shimmer />
                      </div>
                    )}
                    <p className="mt-4 text-lg sm:text-xl leading-relaxed text-neutral-100 italic">
                      “{t.quote}”
                    </p>
                  </div>
                </motion.article>
              ) : null
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute -bottom-8 right-4 flex items-center gap-3">
            <button
              aria-label="Sebelumnya"
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="h-10 w-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Berikutnya"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              className="h-10 w-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-12 flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
                  }`}
                aria-label={`Pilih testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Logo Marquee */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-24"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="px-6 py-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-sm text-neutral-200/90">
                Dipercaya oleh brand dan institusi lintas industri
              </p>
            </div>

            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex flex-nowrap gap-10 items-center py-6 min-w-max"
                animate={shouldReduceMotion ? {} : { x: ['0%', '-50%'] }}
                transition={
                  shouldReduceMotion ? {} : { duration: 25, ease: 'linear', repeat: Infinity }
                }
              >
                {marqueeLogos.map((file, i) => (
                  <div
                    key={`${file}-${i}`}
                    className="h-12 md:h-14 xl:h-16 opacity-90 hover:opacity-100 transition-opacity flex items-center"
                  >
                    <img
                      src={`/logos/${file}`}
                      alt={`Partner ${file.replace('.png', '')}`}
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                      className="h-full w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
