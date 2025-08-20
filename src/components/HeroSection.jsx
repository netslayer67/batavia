import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

// Premium HeroSection — Mobile-first, glass, liquid effects, micro-interactions, and skeleton shimmer
// Notes:
// - Pure TailwindCSS utility classes only (no external CSS).
// - Smooth, but performance-friendly motion with reduced motion support.
// - Keep the required background layer comments intact.
// - Completely different layout & look from previous version.

const gradientText =
  'bg-clip-text text-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.65)_45%,rgba(240,240,255,0.55)_60%,rgba(200,220,255,0.45)_100%)]';

const glass =
  'backdrop-blur-xl bg-white/10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]';

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const shimmerRef = useRef(null);

  // Skeleton fake delay to show shimmer briefly (feels intentional).
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  const containerStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1, ease: 'easeOut' },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const float = prefersReducedMotion
    ? {}
    : {
      animate: {
        y: [0, -8, 0, 8, 0],
        rotate: [0, 1.5, 0, -1.5, 0],
        transition: { duration: 10, ease: 'easeInOut', repeat: Infinity },
      },
    };

  const shimmer = (
    <motion.span
      aria-hidden
      initial={{ x: '-100%' }}
      animate={{ x: loaded ? '120%' : '-100%' }}
      transition={{ duration: 1.2, ease: 'easeInOut', repeat: loaded ? Infinity : 0, repeatDelay: 1.1 }}
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 rounded-xl"
      style={{
        background:
          'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)',
      }}
    />
  );

  const handlePrimary = () => {
    // You can replace with your real action / router push
    console.log('Primary CTA clicked');
  };

  const handleSecondary = () => {
    console.log('Watch reel clicked');
  };

  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen overflow-hidden">
      {/* Background Layer 1: Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoReady(true)}
        className="absolute inset-0 h-full w-full object-cover z-0"
        style={{ opacity: 0.18 }}
        poster="data:image/gif;base64,R0lGODlhAQABAAAAACw="
      >
        <source src="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/hero-cd1f9b39-2.mp4" type="video/mp4" />
      </video>

      {/* Background Layer 2: Effects */}
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Soft grid with radial mask for depth */}
        <div
          className="absolute inset-0 opacity-70 md:opacity-80 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at 50% 40%, black 55%, transparent 78%)' }}
        />

        {/* Liquid glass blobs (gooey) */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div
          className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(125,211,252,0.55), rgba(59,130,246,0.28), transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 -right-24 h-[360px] w-[360px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at 70% 50%, rgba(168,85,247,0.45), rgba(59,130,246,0.25), transparent 70%)' }}
        />

        <div className="absolute inset-0" style={{ filter: 'url(#goo)' }}>
          {!prefersReducedMotion && (
            <>
              <motion.div
                className="absolute left-10 top-20 h-36 w-36 rounded-[32px] bg-white/10 backdrop-blur-2xl border border-white/10"
                animate={{ y: [0, -14, 0, 14, 0], x: [0, 10, 0, -10, 0] }}
                transition={{ duration: 11, ease: 'easeInOut', repeat: Infinity }}
              />
              <motion.div
                className="absolute right-12 bottom-16 h-28 w-28 rounded-[28px] bg-white/10 backdrop-blur-2xl border border-white/10"
                animate={{ y: [0, 10, 0, -10, 0], x: [0, -12, 0, 12, 0] }}
                transition={{ duration: 9.5, ease: 'easeInOut', repeat: Infinity, delay: 0.4 }}
              />
            </>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-40 pb-16">
          {/* Top utility badge row */}
          <AnimatePresence initial={false}>
            {!loaded && (
              <motion.div
                key="skeleton-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-6 flex items-center gap-3"
              >
                <div className="relative h-7 w-28 rounded-full bg-white/10 overflow-hidden" ref={shimmerRef}>
                  {shimmer}
                </div>
                <div className="relative h-7 w-20 rounded-full bg-white/10 overflow-hidden">{shimmer}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate={loaded ? 'show' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            {/* Left — Headline & CTAs */}
            <div className="lg:col-span-7 text-white">
              <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs sm:text-sm text-white/80 border border-white/15 bg-white/5 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                <span>Kualitas Premium • Pelayanan Terpercaya</span>
              </motion.div>

              <motion.h1
                variants={item}
                className={`mt-4 max-w-2xl sm:max-w-3xl text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.05] ${gradientText}`}
              >
                Mobilitas yang elegan,
                <br className="hidden sm:block" />
                <span className="font-sans font-extrabold">mendefinisikan standar baru</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
              >
                Hadir dengan armada modern, pengemudi bersertifikat, dan standar layanan kelas dunia. Untuk bisnis yang gesit dan perjalanan personal yang berkelas.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handlePrimary}
                  className={`group relative inline-flex items-center justify-center rounded-full px-6 sm:px-8 h-12 sm:h-14 font-semibold text-sm sm:text-base ${glass} text-white hover:bg-white/15 transition-transform active:scale-[0.99]`}
                >
                  <span className="pr-2">Jadwalkan Konsultasi</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span className="absolute -inset-[1.5px] rounded-full bg-white/10 opacity-0 group-hover:opacity-100" />
                </button>
                <button
                  onClick={handleSecondary}
                  className="group inline-flex items-center justify-center rounded-full h-12 sm:h-14 px-6 sm:px-8 border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 backdrop-blur-md"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Tonton Company Reel
                </button>
              </motion.div>

              <motion.div variants={item} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[{ k: '99.3%', v: 'Uptime Operasional' }, { k: '24/7', v: 'Layanan Pelanggan' }, { k: '500+', v: 'Mitra Korporat' }].map((stat, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-2xl p-4 ${glass}`}>
                    {!loaded && (
                      <div className="absolute inset-0">
                        <div className="relative h-full w-full bg-white/5 rounded-2xl overflow-hidden">{shimmer}</div>
                      </div>
                    )}
                    <div className="relative">
                      <div className="text-2xl sm:text-3xl font-extrabold">{stat.k}</div>
                      <div className="mt-1 text-xs sm:text-sm text-white/70">{stat.v}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Showcase Card */}
            <div className="lg:col-span-5">
              <motion.div
                variants={item}
                className={`relative ${glass} rounded-3xl p-3 sm:p-4 md:p-5`}
              >
                {/* Showcase image skeleton */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
                  {!loaded && (
                    <>
                      <div className="absolute inset-0">{shimmer}</div>
                      <div className="absolute inset-0 animate-pulse" />
                    </>
                  )}
                  <motion.img
                    src="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2069&auto=format&fit=crop"
                    alt="Premium fleet preview"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.06, opacity: 0 }}
                    animate={{ scale: 1, opacity: loaded ? 1 : 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />

                  {/* Floating status chip */}
                  <motion.div
                    {...float}
                    className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/90 border border-white/15 bg-black/20 backdrop-blur-md"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    ISO 9001 Certified
                  </motion.div>

                  {/* Bottom glass bar */}
                  <div className="absolute inset-x-3 bottom-3">
                    <div className={`flex items-center justify-between rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${glass}`}>
                      <div className="text-xs sm:text-sm text-white/80">Armada Eksekutif • Driver Profesional</div>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom trusted logos / badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: videoReady ? 1 : 0, y: videoReady ? 0 : 12 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 sm:mt-12 text-white/60"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm">
              <span>Dipercaya oleh:</span>
              <span className="opacity-90">Bank Mandiri</span>
              <span className="opacity-90">Pertamina</span>
              <span className="opacity-90">Telkom Indonesia</span>
              <span className="opacity-90">Astra</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;