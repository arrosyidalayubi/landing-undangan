"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Menghindari hydration mismatch untuk tombol tema
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
              Undang.in
            </Link>
          </div>

          {/* Menu Tengah (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/#fitur" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Fitur</Link>
            <Link href="/#tema" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Katalog Tema</Link>
            <Link href="/#harga" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Harga</Link>
            <Link href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Blog</Link>
            <Link href="/#faq" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">FAQ</Link>
          </div>

          {/* Tombol Aksi Kanan */}
          <div className="flex items-center space-x-4">
            
            {/* Tombol Dark Mode */}
            {mounted && (
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            )}

            {/* Tombol Desktop Login/Register */}
            <div className="hidden sm:flex items-center space-x-4">
              <Link 
                href="https://app.komfakdish.web.id/login" 
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold transition-colors"
              >
                Masuk
              </Link>
              <Link 
                href="https://app.komfakdish.web.id/register" 
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95"
              >
                Buat Undangan
              </Link>
            </div>

            {/* Tombol Hamburger (Mobile) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 border-b border-slate-100 dark:border-slate-800' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white dark:bg-slate-950 flex flex-col">
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#fitur" className="block text-slate-600 dark:text-slate-300 font-medium">Fitur</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#tema" className="block text-slate-600 dark:text-slate-300 font-medium">Katalog Tema</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#harga" className="block text-slate-600 dark:text-slate-300 font-medium">Harga</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="block text-slate-600 dark:text-slate-300 font-medium">Blog</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#faq" className="block text-slate-600 dark:text-slate-300 font-medium">FAQ</Link>
          
          <hr className="border-slate-100 dark:border-slate-800 my-2" />
          
          <Link onClick={() => setIsMobileMenuOpen(false)} href="https://app.komfakdish.web.id/login" className="block text-slate-600 dark:text-slate-300 font-bold">Masuk Dashboard</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="https://app.komfakdish.web.id/register" className="block text-center bg-indigo-600 text-white px-5 py-3 rounded-xl font-bold">Buat Undangan Gratis</Link>
        </div>
      </div>
    </nav>
  );
}