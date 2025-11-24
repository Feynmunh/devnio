'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

type NavLink = { label: string; href: string };

export default function MobileNav({ links, isDark }: { links: NavLink[]; isDark: boolean }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* Hamburger */}
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={`md:hidden inline-flex items-center justify-center rounded-full p-2 border transition ${
          isDark ? 'border-white/15 bg-white/10 text-white hover:bg-white/20' : 'border-black/10 bg-black/5 text-black hover:bg-black/10'
        }`}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && mounted && createPortal(
        <div className={`fixed inset-0 z-[99999] ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}>
                    <span className="text-sm font-bold">DN</span>
                  </div>
                  <span className={`text-xl font-semibold tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>DEVNIO</span>
                </div>
              <button 
                onClick={() => setOpen(false)}
                className={`p-2 rounded-full ${isDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'}`}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <Link 
                  key={l.label} 
                  href={l.href} 
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-medium ${isDark ? 'text-white' : 'text-black'}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setOpen(false)}
                className={`text-2xl font-medium ${isDark ? 'text-white' : 'text-black'}`}
              >
                START A PROJECT
              </Link>
            </nav>

            {/* Footer / Theme Toggle */}
            <div className="mt-auto pt-8 border-t border-white/10">
               <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${isDark ? 'text-white/70' : 'text-black/70'}`}>THEME</span>
                  <ThemeToggle />
                </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
