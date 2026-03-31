import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return (
    <section id="about" className="py-24 bg-slate-850">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="max-w-3xl">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-1 bg-emerald-500 block"></span>
            Professional Summary
          </h2>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a results-driven Full-Stack Developer with over 3.5 years of
              experience engineering robust, high-performance enterprise
              applications. Specializing in Java, Spring Boot, and React, I
              bridge the gap between complex backend architectures and intuitive
              user experiences.
            </p>
            <p>
              My expertise lies in automating intricate business processes,
              optimizing system performance, and architecting scalable solutions
              from the ground up. I have a proven track record of delivering
              mission-critical applications that eliminate manual overhead and
              drive measurable business value for international clients.
            </p>
            <p>
              Whether it's designing efficient database schemas in MySQL or
              crafting responsive, state-driven frontends in React, I approach
              every project with a focus on clean code, maintainability, and
              tangible results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}