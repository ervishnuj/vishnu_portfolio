import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Wrench } from 'lucide-react';
const skillCategories = [
{
  title: 'Languages',
  icon: <Code className="w-5 h-5" />,
  skills: ['Java (Expert)', 'JavaScript (ES6+)', 'SQL']
},
{
  title: 'Backend',
  icon: <Server className="w-5 h-5" />,
  skills: [
  'Spring Boot',
  'RESTful APIs',
  'Spring Security',
  'Hibernate',
  'Microservices']

},
{
  title: 'Frontend',
  icon: <Layout className="w-5 h-5" />,
  skills: ['React.js', 'HTML5', 'CSS3', 'jQuery']
},
{
  title: 'Databases',
  icon: <Database className="w-5 h-5" />,
  skills: ['MySQL', 'PostgreSQL', 'Redis']
},
{
  title: 'Tools & DevOps',
  icon: <Wrench className="w-5 h-5" />,
  skills: ['Git', 'Maven', 'Postman', 'Docker', 'Zoho Deluge/CRM']
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">
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
            Technical Expertise
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A comprehensive toolkit for building end-to-end enterprise
            applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {skillCategories.map((category, idx) =>
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-slate-850 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
            
              <div className="flex items-center gap-3 text-emerald-400 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) =>
              <span
                key={skillIdx}
                className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium rounded-md">
                
                    {skill}
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}