import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-850 relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something <br />
              <span className="text-emerald-400">Great Together.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
              Currently available for freelance opportunities. Whether you have
              a question or just want to say hi, I'll try my best to get back to
              you!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:ervishnuj"
                className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group w-fit">
                
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">ervishnuj@gmail.com</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group w-fit">
                
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">
                  github.com/ervishnuj
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group w-fit">
                
                <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">
                  www.linkedin.com/in/vishnu-j-8880bb384
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl">
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-400">
                    
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Vishnu Prabu"
                    className="w-full bg-slate-850 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                  
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-400">
                    
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="alex@example.com"
                    className="w-full bg-slate-850 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                  
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-400">
                  
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-850 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-400">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-850 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none">
                </textarea>
              </div>
              <button
                type="button"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}