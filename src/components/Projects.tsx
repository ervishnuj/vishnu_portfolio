import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight, Activity, Clock, Users } from 'lucide-react';
const projects = [
{
  title: 'Enterprise Report Automation System',
  category: 'Backend Architecture & Data Processing',
  objective:
  'Eliminate manual data entry and automate complex business reporting across multiple departments.',
  contribution:
  'Architected and developed the backend using Java and Spring Boot. Engineered highly optimized MySQL queries to aggregate and process massive datasets from disparate sources.',
  impact:
  'Reduced manual processing time by 60%, ensuring 100% data accuracy in generated reports.',
  stats: [
  {
    label: 'Time Saved',
    value: '60%',
    icon: <Clock className="w-4 h-4" />
  },
  {
    label: 'Accuracy',
    value: '100%',
    icon: <CheckCircle className="w-4 h-4" />
  }]

},
{
  title: 'Automated Telegram Notification Engine',
  category: 'API Integration & Real-time Systems',
  objective:
  'Provide real-time system alerts and critical business updates to stakeholders via mobile.',
  contribution:
  'Integrated Telegram Bot APIs seamlessly with the existing Spring Boot backend. Developed a robust, subscription-based notification logic tailored for different user roles and permission levels.',
  impact:
  'Drastically improved incident response time and kept the executive team updated with instant, reliable mobile alerts.',
  stats: [
  {
    label: 'Response Time',
    value: 'Instant',
    icon: <Activity className="w-4 h-4" />
  },
  {
    label: 'Downtime Alerts',
    value: 'Zero-delay',
    icon: <CheckCircle className="w-4 h-4" />
  }]

},
{
  title: 'Shift Rotation & Workforce Automation',
  category: 'Algorithm Design & HR Tech',
  objective:
  'Automate the complex scheduling and rotation of employee shifts to eliminate human error.',
  contribution:
  'Built a logic-heavy scheduling engine in Java designed to handle intricate rotation rules, employee constraints, and compliance requirements.',
  impact:
  'Streamlined HR operations entirely and removed human bias and errors in shift scheduling.',
  stats: [
  {
    label: 'Bias Reduction',
    value: '100%',
    icon: <Users className="w-4 h-4" />
  },
  {
    label: 'HR Efficiency',
    value: 'Maximized',
    icon: <ArrowUpRight className="w-4 h-4" />
  }]

}];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-850">
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
          className="mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-8 h-1 bg-emerald-500 block"></span>
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Showcasing high-impact solutions engineered for enterprise
            efficiency.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors group">
            
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Stats Highlight */}
                  <div className="flex gap-4 shrink-0">
                    {project.stats.map((stat, sIdx) =>
                  <div
                    key={sIdx}
                    className="bg-slate-850 border border-slate-700 rounded-lg p-4 min-w-[120px]">
                    
                        <div className="flex items-center gap-2 text-emerald-400 mb-1">
                          {stat.icon}
                          <span className="text-xl font-bold">
                            {stat.value}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                          {stat.label}
                        </span>
                      </div>
                  )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                      Objective
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.objective}
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      Contribution
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                  <div className="md:col-span-1 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-5">
                    <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Business Impact
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}