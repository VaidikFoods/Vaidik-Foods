import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Truck, Zap, Award, ThumbsUp, Leaf, ChevronDown } from 'lucide-react';

const Features = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      title: "Guaranteed Quality",
      desc: "We follow high safety standards for everything we make.",
      icon: <ShieldCheck size={32} className="text-primary" />
    },
    {
      title: "Worldwide Delivery",
      desc: "We ship to over 15 countries and always deliver on time.",
      icon: <Truck size={32} className="text-primary" />
    },
    {
      title: "Natural Methods",
      desc: "We use both old and new ways to keep our food healthy.",
      icon: <Zap size={32} className="text-primary" />
    },
    {
      title: "Fresh Ingredients",
      desc: "We work with local farmers to get the freshest ingredients.",
      icon: <Leaf size={32} className="text-primary" />
    },
    {
      title: "Custom Orders",
      desc: "We can process and pack ingredients exactly how you need them.",
      icon: <Award size={32} className="text-primary" />
    },
    {
      title: "Eco-Friendly",
      desc: "We use methods that are good for the planet and reduce waste.",
      icon: <ThumbsUp size={32} className="text-primary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Why Choose Us</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Why We Are Different</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            We care about quality, our traditions, and helping our customers succeed around the world.
          </p>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 bg-primary/5 hover:bg-primary text-primary hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/20"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 motion-gpu"
            >
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 bg-white shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Features;