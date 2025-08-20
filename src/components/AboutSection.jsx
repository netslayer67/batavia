import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Framer Motion Variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  // Shimmer Skeleton
  const shimmer = (
    <motion.div
      aria-hidden
      initial={{ x: "-100%" }}
      animate={{ x: "120%" }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.8,
      }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  );

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-28 sm:py-36 overflow-hidden"
    >
      {/* Background Layer 1: Luxury Liquid Glass */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#e6c67a]/30 via-[#c6904c]/20 to-transparent blur-[160px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-white/10 via-[#d4af37]/20 to-transparent blur-[160px]" />
      </div>

      {/* Background Layer 2: Effects */}
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Heading & Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight bg-gradient-to-r from-[#d4af37] via-[#e6c67a] to-[#fff5cc] bg-clip-text text-transparent"
          >
            Tentang Kami
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl leading-relaxed text-neutral-200 font-light"
          >
            Dengan semangat kolaborasi dan sinergi,{" "}
            <span className="font-semibold text-white">
              PT Batavia Sarana Sinergi Indonesia
            </span>{" "}
            hadir untuk mendukung kebutuhan berbagai sektor melalui layanan yang
            efisien, terpercaya, dan adaptif. Kami percaya bahwa setiap
            pergerakan memiliki arti, dan setiap proses harus memberikan nilai.
            <br />
            <br />
            Dengan tim yang berdedikasi dan sistem yang terintegrasi, kami siap
            menjadi mitra andal dalam setiap perjalanan bisnis Anda.
          </motion.p>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left - Premium Image Showcase */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 w-full max-w-2xl mx-auto"
          >
            {/* Image 1 - Large */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl">
              {!loaded && <div className="absolute inset-0">{shimmer}</div>}
              <img
                src="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/industrial-port-container-yard-2048x1411.jpg"
                alt="Industrial Port"
                className="h-full w-full object-cover hover:scale-105 transition duration-700 ease-out"
              />
            </div>

            {/* Image 2 - Small, Bottom Right */}
            <div className="absolute bottom-[-60px] right-6 w-[45%] aspect-square overflow-hidden rounded-[1.5rem] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl">
              {!loaded && <div className="absolute inset-0">{shimmer}</div>}
              <img
                src="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-07-768x776.png"
                alt="Company Illustration"
                className="h-full w-full object-cover hover:scale-105 transition duration-700 ease-out"
              />
            </div>
          </motion.div>


          {/* Right - Features */}
          <motion.div variants={fadeUp} className="space-y-8">
            {[
              " Solusi Terpadu",
              " Layanan Profiesional",
              " Proses Yang Efisien",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                className="flex items-start gap-4 p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <CheckCircle2 className="h-8 w-8 text-[#37d476] flex-shrink-0" />
                <p className="text-lg font-medium text-white/90">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
