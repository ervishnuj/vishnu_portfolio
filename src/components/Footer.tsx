import React from 'react';
import { Code2 } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xl tracking-tight">
          <Code2 className="w-6 h-6" />
          <span>Vishnu.Dev</span>
        </div>

        <p className="text-slate-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Alex Developer. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>);

}