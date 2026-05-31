import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShoppingBag, MousePointerClick } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Products = ({ products, company }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  
  const whatsappNumber = company.phone ? company.phone.replace(/[^0-9]/g, '') : '919316787170';
  
  // Extract main categories dynamically
  const categories = [...new Set(products.map(p => p.category))];
  
  // Extract subcategories for the active main category
  const subcategories = activeCategory && activeCategory !== 'All'
    ? [...new Set(products.filter(p => p.category === activeCategory).map(p => p.subcategory).filter(Boolean))]
    : [];

  const handleCategoryClick = (cat) => {
    if (activeCategory === cat) {
      setActiveCategory(null);
      setActiveSubcategory(null);
    } else {
      setActiveCategory(cat);
      // Auto-select first subcategory only for Dehydrated
      if (cat === 'Dehydrated') {
        const firstSub = [...new Set(products.filter(p => p.category === 'Dehydrated').map(p => p.subcategory).filter(Boolean))][0];
        setActiveSubcategory(firstSub || null);
      } else {
        setActiveSubcategory(null);
      }
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => {
        const matchesCategory = p.category === activeCategory;
        const matchesSubcategory = activeSubcategory ? p.subcategory === activeSubcategory : true;
        return matchesCategory && matchesSubcategory;
      });

  return (
    <section id="products" className="section-padding bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 motion-gpu"
        >
          <span className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Selection</span>
          <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">High-Quality Ingredients</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Cleanly made and packed to keep the natural taste. We deliver the best farm ingredients to your door.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary/60 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 animate-pulse">
            <MousePointerClick size={14} />
            Explore our collection below
          </div>
        </motion.div>

        {/* Main Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8 motion-gpu"
        >
          <button
            onClick={() => handleCategoryClick('All')}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 text-sm uppercase tracking-widest ${
              activeCategory === 'All' 
              ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30' 
              : 'bg-white text-gray-500 border-gray-100 hover:border-primary hover:text-primary shadow-sm'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 text-sm uppercase tracking-widest ${
                activeCategory === cat 
                ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-primary hover:text-primary shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Subcategory Filter */}
        <AnimatePresence>
          {subcategories.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-wrap justify-center gap-3 mb-12 motion-gpu"
            >
              {activeCategory !== 'Dehydrated' && (
                <button
                  onClick={() => setActiveSubcategory(null)}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border text-[10px] uppercase tracking-[0.15em] ${
                    activeSubcategory === null 
                    ? 'bg-primary/10 text-primary border-primary/20' 
                    : 'bg-gray-50 text-gray-400 border-gray-100 hover:border-primary/20 hover:text-primary'
                  }`}
                >
                  All {activeCategory}
                </button>
              )}
              {subcategories.map(sub => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(activeSubcategory === sub ? null : sub)}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border text-[10px] uppercase tracking-[0.15em] ${
                    activeSubcategory === sub 
                    ? 'bg-primary/10 text-primary border-primary/20' 
                    : 'bg-gray-50 text-gray-400 border-gray-100 hover:border-primary/20 hover:text-primary'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {activeCategory && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div 
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white rounded-[48px] overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-premium flex flex-col h-full motion-gpu"
                >
                  <div className="relative h-80 overflow-hidden m-4 rounded-[40px]">
                    <img 
                      src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop'} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-6 right-6 glass px-5 py-2 rounded-full text-[10px] font-black text-primary shadow-sm uppercase tracking-[0.2em]">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors pr-4">
                        {product.name}
                      </h4>
                      <ArrowUpRight className="text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="pt-8 border-t border-gray-50">
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=I'm interested in ${product.name}. Please provide the latest price.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group/btn bg-[#25D366]/5 hover:bg-[#25D366] transition-all duration-300 p-4 rounded-2xl border border-[#25D366]/10 hover:border-[#25D366] shadow-sm hover:shadow-lg hover:shadow-[#25D366]/20"
                      >
                        <span className="text-sm font-bold text-[#25D366] group-hover/btn:text-white transition-colors uppercase tracking-widest">Get Latest Price</span>
                        <WhatsAppIcon className="text-[#25D366] group-hover/btn:text-white transition-colors w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : !activeCategory ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="bg-white/40 backdrop-blur-sm rounded-[48px] p-16 border-2 border-dashed border-primary/10 max-w-lg mx-auto">
                  <ShoppingBag size={48} className="mx-auto text-primary/20 mb-6" />
                  <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">Select a category to explore our collection</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="bg-gray-50 rounded-[40px] p-12 border-2 border-dashed border-gray-100">
                  <ShoppingBag size={48} className="mx-auto text-gray-200 mb-4" />
                  <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">No items found in this category</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Products;