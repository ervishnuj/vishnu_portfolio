import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="flex items-center gap-2 text-emerald-400 font-medium mb-6">
            
            <Terminal className="w-5 h-5" />
            <span>Hello, I'm Vishnu</span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            
            Architecting Scalable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-emerald-400">
              Enterprise Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            
            Versatile Full-Stack Developer specializing in high-performance Java
            backends and interactive React interfaces. I transform complex
            business requirements into robust, automated, and scalable digital
            products.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="flex flex-col sm:flex-row gap-4">
            
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md transition-all group">
              
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-700 hover:border-emerald-500 hover:text-emerald-400 text-slate-300 font-semibold rounded-md transition-all">
              
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}