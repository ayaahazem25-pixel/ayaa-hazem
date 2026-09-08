import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Download, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Code, 
  Layers, 
  Database,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Hero = () => {
  const { data, language, isRTL } = usePortfolio();
  const hero = data.hero;

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const message = language === 'ar' 
      ? 'جاري تجهيز السيرة الذاتية (Aya Hazem Shawky - Full Stack .NET Developer CV). يمكنك أيضاً مراسلتي مباشرة عبر البريد الإلكتروني.'
      : 'Preparing CV (Aya Hazem Shawky - Full Stack .NET Developer CV). You can also contact me directly via email or LinkedIn.';
    alert(message);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-mint-400/10 dark:bg-mint-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-300/10 dark:bg-emerald-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Info Column (Left in LTR / Right in RTL) */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-500/10 dark:bg-mint-500/20 border border-mint-500/25 dark:border-mint-500/35 text-mint-700 dark:text-mint-300 text-xs font-semibold mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
              </span>
              <span>{hero.statusBadge}</span>
            </div>

            {/* Sub-headline greeting */}
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium tracking-wide uppercase">
              {hero.greeting}
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1 mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300">
                {hero.name}
              </span>
            </h1>

            {/* Professional Title with Mint Accent */}
            <div className="inline-block px-3 py-1 rounded-lg bg-mint-500/10 dark:bg-mint-400/10 border border-mint-500/20 mb-5">
              <span className="text-mint-600 dark:text-mint-400 font-semibold text-base sm:text-lg">
                {hero.title}
              </span>
            </div>

            {/* Summary */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              {hero.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              {/* Primary CTA: Contact Me */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-mint-500 hover:bg-mint-600 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-mint-500/25 active:scale-95 glow-mint"
              >
                <Send className="w-4 h-4" />
                <span>{hero.ctaPrimary}</span>
              </a>

              {/* Secondary CTA: Download CV */}
              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 text-sm font-semibold transition-all duration-200 shadow-sm hover:border-mint-400/60 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-mint-500" />
                <span>{hero.ctaSecondary}</span>
              </button>

              {/* LinkedIn Button */}
              <a
                href={hero.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors hover:text-[#0A66C2] hover:border-[#0A66C2]/40"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors hover:text-slate-900 dark:hover:text-white"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800/80 w-full">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-mint-500" />
                <span>{hero.locationValue}</span>
              </div>
              <a href={`tel:${hero.phoneValue}`} className="flex items-center gap-1.5 hover:text-mint-600 dark:hover:text-mint-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-mint-500" />
                <span dir="ltr">{hero.phoneValue}</span>
              </a>
              <a href={`mailto:${hero.emailValue}`} className="flex items-center gap-1.5 hover:text-mint-600 dark:hover:text-mint-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-mint-500" />
                <span>{hero.emailValue}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Tech Architecture Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              
              {/* Developer Code/Architecture Card */}
              <div className="relative rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xl overflow-hidden">
                
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50/80 dark:bg-slate-850/80 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-mint-500" />
                    <span>AyaShawky.Portfolio.cs</span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-mint-600 dark:text-mint-300 bg-mint-500/10 dark:bg-mint-500/20 px-2 py-0.5 rounded-md border border-mint-500/20 dark:border-mint-500/30">
                    v1.0
                  </span>
                </div>

                {/* Code-like presentation & Profile Metrics */}
                <div className="p-5 font-mono text-xs space-y-4">
                  
                  {/* C# Class snippet */}
                  <div className="space-y-1 text-slate-700 dark:text-slate-300">
                    <div className="text-slate-400 dark:text-slate-500">// Full Stack .NET Developer Spec</div>
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">public class</span>{" "}
                      <span className="text-mint-600 dark:text-mint-400 font-semibold">SoftwareEngineer</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">string</span> Name ={" "}
                      <span className="text-amber-600 dark:text-amber-300">"Aya Hazem Shawky"</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">string[]</span> Stack = &#123;{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"C#"</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">".NET Core"</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"React"</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"SQL Server"</span> &#125;;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">string[]</span> Methodologies = &#123;{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"QA Testing"</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"BA Analysis"</span> &#125;;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-600 dark:text-blue-400">bool</span> ReadyToDeliver ={" "}
                      <span className="text-purple-600 dark:text-purple-400 font-bold">true</span>;
                    </div>
                  </div>

                  {/* Highlight Stat Badges */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2.5 not-italic font-sans">
                    {hero.stats.map((stat, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 hover:border-mint-300 dark:hover:border-mint-800 transition-colors"
                      >
                        <div className="text-lg font-bold text-mint-600 dark:text-mint-400">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Verified Track Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200/60 dark:border-emerald-800/60">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" /> ITI Track
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200/60 dark:border-emerald-800/60">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" /> DEPI Track
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200/60 dark:border-emerald-800/60">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" /> MCIT QA/BA
                    </span>
                  </div>

                </div>

                {/* Decorative Bottom Strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-mint-500 via-emerald-400 to-teal-500" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
