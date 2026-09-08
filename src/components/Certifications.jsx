import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, CheckCircle2, ShieldCheck, Landmark, Sparkles } from 'lucide-react';

export const Certifications = () => {
  const { data } = usePortfolio();
  const certData = data.certifications;

  return (
    <section id="certifications" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-500/10 dark:bg-mint-500/20 border border-mint-500/25 dark:border-mint-500/35 text-mint-700 dark:text-mint-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-mint-500" />
            <span>{certData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {certData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {certData.subtitle}
          </p>
        </div>

        {/* Certifications Badge Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certData.items.map((cert, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 hover:border-mint-400/80 dark:hover:border-mint-500/80 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-mint-500/10 dark:bg-mint-500/20 text-mint-600 dark:text-mint-400 flex items-center justify-center border border-mint-500/20 dark:border-mint-500/30 group-hover:scale-110 transition-transform">
                      <Landmark className="w-5 h-5" />
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/20 dark:border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{data.language === 'ar' ? 'معتمد' : 'Verified'}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 group-hover:text-mint-600 dark:group-hover:text-mint-400 transition-colors">
                    {cert.name}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-mint-600 dark:text-mint-400 font-medium">
                  <span>{cert.category}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
