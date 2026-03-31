import React, { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-emerald-400 font-bold text-xl tracking-tight">
          
          <Code2 className="w-6 h-6" />
          <span>Vishnu.Dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-md transition-colors">
            
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          
          {isMobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="md:hidden absolute top-full left-0 right-0 bg-slate-850 border-b border-slate-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
        
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-base font-medium text-slate-300 hover:text-emerald-400 transition-colors py-2">
          
              {link.name}
            </a>
        )}
        </motion.div>
      }
    </header>);

}