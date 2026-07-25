'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { locales } from '@/lib/i18n';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: '/about', label: t.nav.about },
    { href: '/pricing', label: t.nav.pricing },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="KMRM logo" width={40} height={40} />
              <div className="flex flex-col leading-tight">
                <span className="text-md sm:text-xl font-bold tracking-tight">{t.nav.title}</span>
                <span className="text-zinc-400 text-xs sm:text-md">{t.nav.subtitle}</span>
              </div>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-300 hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="flex gap-2 ml-4 border-l border-zinc-700 pl-4">
                {locales.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLocale(lang)}
                    className={`text-sm font-medium uppercase transition-colors ${
                      locale === lang
                        ? 'text-white'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Burger Button Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar Mobile */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <button
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={closeMobileMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMobileMenu()}
          tabIndex={0}
          aria-label="Close menu"
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-zinc-900 border-l border-zinc-800 shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            {/* Menu Items */}
            <nav className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-lg text-zinc-300 hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language Switcher Mobile */}
            <div className="mt-auto pt-6 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 uppercase mb-3 font-medium">Langue</p>
              <div className="flex gap-3">
                {locales.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLocale(lang);
                      closeMobileMenu();
                    }}
                    className={`px-4 py-2 rounded-md text-sm font-medium uppercase transition-all ${
                      locale === lang
                        ? 'bg-white text-black'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
