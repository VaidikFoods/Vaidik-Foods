import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const QuickAction = ({ company }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass p-6 rounded-[32px] shadow-premium border-white/50 mb-2 w-72"
          >
            <h4 className="text-gray-900 font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              How can we help?
            </h4>
            <div className="space-y-3">
              <a 
                href={`https://wa.me/${company.phone?.replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm border border-gray-50"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 group-hover:bg-white/20 flex items-center justify-center text-green-600 group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">WhatsApp Chat</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Instant Reply</p>
                </div>
              </a>
              
              <a 
                href={`tel:${company.phone}`} 
                className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm border border-gray-50"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-white/20 flex items-center justify-center text-blue-600 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Direct Call</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">9AM - 7PM IST</p>
                </div>
              </a>

              <a 
                href={`mailto:${company.email}`} 
                className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm border border-gray-50"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-white/20 flex items-center justify-center text-purple-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Send Email</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">For Large Orders</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'bg-gray-900 text-white' : 'bg-primary text-white shadow-primary/30'}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} className="animate-pulse" />}
      </button>
    </div>
  );
};

export default QuickAction;
