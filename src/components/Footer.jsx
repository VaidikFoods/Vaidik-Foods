import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, MessageCircle, Users, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ company }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    const subject = encodeURIComponent('Newsletter Subscription Request');
    const body = encodeURIComponent(`I would like to subscribe to the Vaidik Foods newsletter.\n\nEmail: ${newsletterEmail}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-32 pb-12 text-white overflow-hidden relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-3xl font-black font-display tracking-tighter">
                {company.name}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-10 text-lg">
              We are experts in dried foods, bringing natural and safe ingredients to the whole world.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Globe size={20} />, href: '#' },
                { icon: <MessageCircle size={20} />, href: '#' },
                { icon: <Users size={20} />, href: '#' },
                { icon: <Send size={20} />, href: '#' }
              ].map((soc, i) => (
                <a key={i} href={soc.href} className="w-12 h-12 rounded-2xl border border-gray-800 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  {soc.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-10 flex items-center gap-3">
              <span className="w-8 h-px bg-primary"></span> Quick Links
            </h4>
            <ul className="space-y-5 text-gray-400 text-lg">
              {['Home', 'About Us', 'Selection', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-10 flex items-center gap-3">
              <span className="w-8 h-px bg-primary"></span> Contact Details
            </h4>
            <ul className="space-y-8 text-gray-400">
              <li className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Phone</p>
                  <p className="text-lg">{company.phone}</p>
                </div>
              </li>
              <li className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white font-bold mb-1">Email</p>
                  <p className="text-base break-all">{company.email}</p>
                </div>
              </li>
              <li className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Office</p>
                  <p className="text-lg">{company.address}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-10 flex items-center gap-3">
              <span className="w-8 h-px bg-primary"></span> Newsletter
            </h4>
            <p className="text-gray-400 mb-8 text-lg">Get updates on our new arrivals and offers.</p>
            <form className="relative group" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full bg-[#151515] border border-gray-800 rounded-[24px] py-5 pl-8 pr-28 focus:outline-none focus:border-primary transition-all duration-300 text-white placeholder:text-gray-600"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-primary px-8 rounded-[18px] hover:bg-primary-light transition-all duration-300 font-bold flex items-center justify-center shadow-lg shadow-primary/20"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm font-medium tracking-wide">
          <p>© {new Date().getFullYear()} {company.name}. All Rights Reserved. Made for great cooking.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
    </footer>
  );
};

export default Footer;

