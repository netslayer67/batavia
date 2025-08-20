import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, Sparkles, BarChart3, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// --- DATA ---
// Data di-refactor untuk menyertakan kalkulasi pertumbuhan yang jelas
const portfolioItems = [
  {
    id: 1,
    category: 'social-media',
    title: 'Kampanye Viral Brand Fashion',
    description: 'Strategi konten video yang dirancang untuk engagement maksimal, menghasilkan pertumbuhan viral dalam 30 hari.',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop',
    type: 'video',
    stats: {
      metric: 'Engagement Rate',
      before: 1.2,
      after: 8.7,
      unit: '%',
    },
    growth: 625,
  },
  {
    id: 2,
    category: 'website',
    title: 'Redesign Website E-commerce',
    description: 'Perombakan UX/UI total dengan fokus pada alur konversi, menghasilkan lonjakan penjualan yang signifikan.',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=800&auto=format&fit=crop',
    type: 'website',
    stats: {
      metric: 'Conversion Rate',
      before: 2.1,
      after: 12.3,
      unit: '%',
    },
    growth: 485,
  },
  {
    id: 3,
    category: 'social-media',
    title: 'Konten Edukasi Viral',
    description: 'Mengubah topik kompleks menjadi video pendek yang menarik dan mudah dibagikan, mencapai jangkauan organik masif.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop',
    type: 'video',
    stats: {
      metric: 'Organic Views',
      before: 800,
      after: 520000,
      unit: '',
    },
    growth: 64900,
  },
  {
    id: 4,
    category: 'copywriting',
    title: 'Sales Copy & Ad Campaign',
    description: 'Copywriting persuasif untuk iklan multi-platform yang dirancang untuk satu tujuan: meningkatkan penjualan.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop',
    type: 'copy',
    stats: {
      metric: 'Sales',
      before: 5200,
      after: 21840,
      unit: 'USD',
    },
    growth: 320,
  },
  {
    id: 5,
    category: 'website',
    title: 'Landing Page High-Convert',
    description: 'Desain landing page yang dioptimalkan dengan A/B testing untuk mencapai conversion rate tertinggi di industrinya.',
    image: 'https://images.unsplash.com/photo-1580974928064-7f2871b349db?w=800&auto=format&fit=crop',
    type: 'website',
    stats: {
      metric: 'Conversion Rate',
      before: 2.3,
      after: 18.5,
      unit: '%',
    },
    growth: 704,
  },
  {
    id: 6,
    category: 'social-media',
    title: 'Strategi Reels Explosive',
    description: 'Pengembangan pilar konten dan eksekusi strategi Reels yang konsisten, menghasilkan jutaan views secara berkelanjutan.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop',
    type: 'video',
    stats: {
      metric: 'Total Views',
      before: 1200,
      after: 2100000,
      unit: '',
    },
    growth: 174900,
  },
];


// --- SUB-COMPONENTS ---

const StatChange = ({ percentage, metric }) => (
  <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
    <TrendingUp className="h-5 w-5" />
    <span>
      <span className="font-bold">{percentage}%</span> Peningkatan {metric}
    </span>
  </div>
);

const ProjectCard = ({ item, isFeatured = false }) => {
  const { toast } = useToast();

  const handleViewProject = () => {
    toast({
      title: "🚧 Fitur Detail Project Sedang Disiapkan",
      description: "Kami sedang menyusun studi kasus lengkap untuk project ini. Stay tuned!",
      duration: 4000,
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num;
  };

  if (isFeatured) {
    return (
      <motion.div
        id='portfolio'
        variants={cardVariants}
        className="col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2 relative group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl aspect-video lg:aspect-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                  onClick={handleViewProject}
                  className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center group-hover:bg-sky-500/50 transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </motion.button>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-semibold text-sky-400 mb-2">Featured Project</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

            {/* Stats */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <h4 className="font-semibold text-lg text-white mb-4">Result Highlight</h4>
              <div className="flex justify-between items-center text-center mb-4">
                <div>
                  <div className="text-sm text-gray-400">Sebelum</div>
                  <div className="text-2xl font-semibold text-rose-400">
                    {formatNumber(item.stats.before)}{item.stats.unit}
                  </div>
                </div>
                <div className="text-2xl text-gray-500">→</div>
                <div>
                  <div className="text-sm text-gray-400">Sesudah</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {formatNumber(item.stats.after)}{item.stats.unit}
                  </div>
                </div>
              </div>
              <StatChange percentage={item.growth} metric={item.stats.metric} />
            </div>

            <Button
              onClick={handleViewProject}
              size="lg"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Lihat Studi Kasus
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-sky-500/50 transition-colors duration-300"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-gray-300 mb-4 h-10">{item.description.substring(0, 70)}...</p>

        <div className="border-t border-white/10 pt-4">
          <h4 className="text-xs text-gray-400 mb-2">Peningkatan {item.stats.metric}</h4>
          <div className="flex items-baseline gap-4">
            <div className="text-rose-400">{formatNumber(item.stats.before)}{item.stats.unit}</div>
            <div className="text-gray-500 text-sm">→</div>
            <div className="text-2xl font-bold text-emerald-400">{formatNumber(item.stats.after)}{item.stats.unit}</div>
          </div>
          <div className="mt-2">
            <StatChange percentage={item.growth} metric="" />
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/10">
        {item.category.replace('-', ' ')}
      </div>
    </motion.div>
  );
};


// --- MAIN COMPONENT ---

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Project', icon: Sparkles },
    { id: 'social-media', label: 'Social Media', icon: TrendingUp },
    { id: 'website', label: 'Website', icon: BarChart3 },
    { id: 'copywriting', label: 'Copywriting', icon: PenTool },
  ];

  const filteredItems = useMemo(() =>
    activeTab === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeTab),
    [activeTab]
  );

  const featuredItem = filteredItems[0];
  const gridItems = filteredItems.slice(1);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden text-white font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Solusi Terintegrasi untuk Kebutuhan Anda
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kami mengubah performa digital menjadi angka. Lihat bagaimana kami mengakselerasi pertumbuhan brand melalui data dan kreativitas.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
            >
              {activeTab === category.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-sky-500/20 rounded-xl border border-sky-500"
                  style={{ borderRadius: 12 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <category.icon className="w-5 h-5 z-10" />
              <span className="z-10">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredItem && <ProjectCard item={featuredItem} isFeatured={true} />}
            {gridItems.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;