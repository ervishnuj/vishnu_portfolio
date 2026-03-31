import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, MessageSquare } from 'lucide-react';
const valueProps = [
{
  title: 'Full-Stack Capability',
  description:
  'End-to-end ownership of the development lifecycle. I seamlessly handle everything from architecting robust database schemas to deploying polished, interactive user interfaces.',
  icon: <Layers className="w-8 h-8" />
},
{
  title: 'Strategic Problem Solver',
  description:
  'Thrive in complex environments. Highly experienced in debugging legacy codebases, resolving critical bottlenecks, and optimizing slow APIs for peak performance.',
  icon: <Lightbulb className="w-8 h-8" />
},
{
  title: 'Efficient Communicator',
  description:
  'Bridging the gap between business and tech. I excel at translating ambiguous business requirements into precise, scalable technical solutions that stakeholders understand.',
  icon: <MessageSquare className="w-8 h-8" />
}];

export function WhyHireMe() {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
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
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Hire Me?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Delivering technical excellence aligned with your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, idx) =>
          <motion.div
            key={idx}
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
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="bg-slate-850 p-8 rounded-2xl border border-slate-800 text-center hover:-translate-y-2 transition-transform duration-300">
            
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {prop.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}