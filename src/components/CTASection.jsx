'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ClipboardList, Truck, ShieldCheck, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// --- SERVICE LIST (sesuai konteks perusahaan) ---
const services = [
  'Perencanaan & Strategi',
  'Pengelolaan Operasional',
  'Distribusi & Logistik',
  'Layanan Khusus'
];

// --- Reusable Input Field ---
const InputField = ({ label, name, value, onChange, placeholder, type = "text", as = "input", rows = 4 }) => {
  const commonProps = {
    name, value, onChange, placeholder,
    className: "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-300 resize-none"
  };
  const Component = as;
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-white/90 mb-2">{label}</label>
      <Component {...commonProps} {...(as === 'textarea' && { rows })} />
    </div>
  );
};

// --- MAIN CTA SECTION ---
const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedServices, setSelectedServices] = useState([]);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const toggleService = (s) => setSelectedServices((prev) =>
    prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || selectedServices.length === 0) {
      return toast({
        title: "Formulir Belum Lengkap",
        description: "Mohon isi nama, email, dan pilih minimal satu layanan.",
        variant: "destructive"
      });
    }
    console.log({ ...formData, services: selectedServices });
    toast({
      title: "✅ Permintaan Terkirim",
      description: `Terima kasih, ${formData.name}! Tim kami akan segera menghubungi Anda.`,
    });
    setFormData({ name: '', email: '', message: '' });
    setSelectedServices([]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // --- Shimmer Skeleton ---
  const Shimmer = () => (
    <motion.div
      aria-hidden
      initial={{ x: '-100%' }}
      animate={{ x: '130%' }}
      transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  );

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <img
          src="https://www.bataviasaranasinergi.com/wp-content/uploads/2025/05/DESAIN-LAMAN-WEB-BATAVIA-06-scaled.png"
          alt="Background"
          className="h-full w-full object-cover object-center opacity-20"
        />
      </div>

      {/* Background Layer 1: Luxury Glow */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-green-500/20 blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[680px] h-[680px] rounded-full bg-white/10 blur-[180px]" />
      </div>

      {/* Background Layer 2: Effects */}
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="lg:pt-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-green-400 via-green-300 to-white bg-clip-text text-transparent">
              Solusi Premium untuk Bisnis Anda
            </h2>
            <p className="text-lg text-neutral-200/90 mb-12 max-w-xl">
              Kami menghadirkan layanan terintegrasi yang berfokus pada presisi, efisiensi, dan hasil nyata. Setiap solusi dirancang khusus untuk mendukung pertumbuhan dan kesuksesan bisnis Anda.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 border border-white/10 flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Perencanaan & Strategi</h3>
                  <p className="text-neutral-300 mt-1">Merancang solusi tepat guna yang disesuaikan dengan kebutuhan klien.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Pengelolaan Operasional</h3>
                  <p className="text-neutral-300 mt-1">Menyediakan dukungan penuh dalam pelaksanaan kegiatan harian secara efisien.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 border border-white/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Distribusi & Logistik</h3>
                  <p className="text-neutral-300 mt-1">Menjamin alur distribusi barang atau jasa yang cepat dan tepat waktu.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 border border-white/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Layanan Khusus</h3>
                  <p className="text-neutral-300 mt-1">Solusi kustom untuk berbagai industri, sesuai tantangan dan kebutuhan unik Anda.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl"
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-serif font-semibold mb-2">Hubungi Kami</h3>
              <p className="text-neutral-300 mb-6">Mari diskusikan kebutuhan bisnis Anda.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField label="Nama Lengkap *" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nama Anda" />
                <InputField label="Email *" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="email@perusahaan.com" />
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">Layanan yang diminati *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((s) => (
                      <motion.button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`rounded-lg border px-3 py-2 text-sm transition-all duration-200 ${selectedServices.includes(s)
                            ? 'bg-green-500 text-white border-green-500 font-semibold'
                            : 'bg-white/5 text-neutral-300 border-white/20 hover:border-green-400 hover:bg-green-500/10'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <InputField as="textarea" name="message" value={formData.message} onChange={handleInputChange} label="Pesan (Opsional)" placeholder="Ceritakan detail kebutuhan Anda..." />
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-green-500 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  Kirim Pesan <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
