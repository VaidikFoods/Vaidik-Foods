import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = ({ company }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Bulk Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct email body with proper line breaks
    const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(bodyText)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Get in touch</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Have questions or want to partner with us? Send us a message and we'll get back to you shortly.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-gray-50 p-12 lg:p-16 rounded-[60px] relative border border-gray-100 shadow-premium">
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-white rounded-3xl py-5 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full bg-white rounded-3xl py-5 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white rounded-3xl py-5 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg appearance-none"
                  >
                    <option>Bulk Inquiry</option>
                    <option>Samples</option>
                    <option>Export Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    className="w-full bg-white rounded-[32px] py-6 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full py-6 text-xl flex items-center justify-center gap-4 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
