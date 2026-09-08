import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Sun, 
  Moon, 
  Languages, 
  Menu, 
  X, 
  Code2, 
  Briefcase, 
  FolderKanban, 
  GraduationCap, 
  Award, 
  Mail,
  User
} from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme, language, toggleLanguage, data, isRTL } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'about', label: data.nav.about, icon: User },
    { id: 'skills', label: data.nav.skills, icon: Code2 },
    { id: 'projects', label: data.nav.projects, icon: FolderKanban },
    { id: 'experience', label: data.nav.experience, icon: Briefcase },
    { id: 'education', label: data.nav.education, icon: GraduationCap },
    { id: 'certifications', label: data.nav.certifications, icon: Award },
    { id: 'contact', label: data.nav.contact, icon: Mail },
  ];

  // Scroll listener for sticky styling and section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'certifications', 'education', 'experience', 'projects', 'skills', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Floating Center Glassmorphic Navbar Container */}
      <nav 
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200/80 dark:border-slate-800/80 scale-[0.98]' 
            : 'glass-nav shadow-md border border-slate-200/60 dark:border-slate-800/60'
        } max-w-5xl w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80`}
      >
        {/* Brand / Logo */}
        <a 
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          className="flex items-center gap-2 font-bold text-slate-800 dark:text-white hover:text-mint-600 dark:hover:text-mint-400 transition-colors group cursor-pointer"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-mint-600 to-mint-400 flex items-center justify-center text-white text-sm font-black shadow-sm group-hover:rotate-12 transition-transform">
            AH
          </span>
          <span className="hidden sm:inline-block tracking-tight text-sm md:text-base">
            {data.nav.brand}
          </span>
          <span className="hidden md:inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-mint-500/10 dark:bg-mint-500/20 text-mint-700 dark:text-mint-300 border border-mint-500/20 dark:border-mint-500/30">
            {data.nav.roleBadge}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                  isActive 
                    ? 'text-mint-600 dark:text-mint-400 font-semibold bg-mint-500/10' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mint-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Language Switcher, Theme Switcher, Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            aria-label="Toggle language"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-mint-600 dark:hover:text-mint-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 transition-all hover:border-mint-400/50 cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5 text-mint-500" />
            <span>{language === 'en' ? 'العربية' : 'EN'}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            aria-label="Toggle theme"
            className="p-1.5 sm:p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-mint-600 dark:hover:text-mint-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 transition-all hover:border-mint-400/50 cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 transition-transform rotate-0 hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-1.5 sm:p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed top-16 sm:top-20 left-4 right-4 max-w-md mx-auto pointer-events-auto p-4 rounded-2xl glass-card shadow-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl transition-all animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-mint-500/10 text-mint-600 dark:text-mint-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-mint-500' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="flex-1 py-2.5 text-center text-xs font-semibold text-white bg-mint-500 hover:bg-mint-600 rounded-xl transition-colors shadow-sm"
              >
                {data.nav.hireMe}
              </a>
              <a
                href="/cv-aya-hazem.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  alert(language === 'ar' ? 'يمكنك استعراض وتحميل السيرة الذاتية أو التواصل عبر البريد الإلكتروني.' : 'CV ready for review! You can also contact Aya directly via email or LinkedIn.');
                }}
                className="px-3 py-2.5 text-center text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {data.nav.downloadCV}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
