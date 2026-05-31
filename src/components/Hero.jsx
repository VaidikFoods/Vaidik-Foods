import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Globe } from 'lucide-react';

const Hero = ({ company }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden relative bg-[#fdfdfd]">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src="./images/hero_bg.png" alt="Background" className="w-full h-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-[#fdfdfd]"></div>
      </div>
      
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top pointer-events-none z-0 motion-gpu"
      ></motion.div>
      <div className="md:hidden absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-2xl pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left relative z-10 motion-gpu"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 bg-primary/10 px-4 py-2 rounded-full"
            >
              <Leaf size={14} className="animate-pulse" />
              Real Indian Flavors
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 tracking-tight"
            >
              {company.tagline || 'Pure. Natural. Simple.'}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 md:px-0"
            >
              Enjoy healthy and natural food with our high-quality dried vegetables and spices.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start px-4 md:px-0"
            >
              <a href="#products" className="btn btn-primary text-base md:text-lg flex items-center justify-center gap-3 px-8 md:px-10">
                View All
                <ArrowRight size={20} />
              </a>
              <a href="#about" className="btn btn-outline text-base md:text-lg">
                About Us
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 md:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10"
            >
              {[
                { label: 'Natural', value: '100%', icon: <Leaf size={20} className="text-primary" /> },
                { label: 'Countries', value: '15+', icon: <Globe size={20} className="text-primary" /> },
                { label: 'Quality', value: 'ISO', icon: <ShieldCheck size={20} className="text-primary" /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start group bg-white/40 backdrop-blur-sm p-4 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none">
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <p className="text-xl md:text-2xl font-black text-gray-900">{stat.value}</p>
                  </div>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold group-hover:text-primary transition-colors">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="relative group motion-gpu"
          >
            {/* Image Glow */}
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700 animate-pulse"></div>
            
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="./images/hero_main.png" 
                alt="Vaidik Spices" 
                className="w-full h-[500px] lg:h-[650px] object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-10 left-10 right-10 glass p-8 rounded-[40px] shadow-2xl border-white/50 motion-gpu"
              >
                <div className="flex items-center gap-6">
                  <img src="./images/farmer_avatar.png" alt="Farmer" className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white" loading="lazy" />
                  <div>
                    <p className="font-black text-gray-900 text-xl">Directly from Farmers</p>
                    <p className="text-gray-600">Sustainably sourced, ethically delivered to your doorstep.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-4 border-dashed border-primary/20 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
