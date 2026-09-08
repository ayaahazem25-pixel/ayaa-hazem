import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Zap, 
  TrendingUp 
} from 'lucide-react';

export const Experience = () => {
  const { data } = usePortfolio();
  const expData = data.experience;

  return (
    <section id="experience" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-500/10 dark:bg-mint-500/20 border border-mint-500/25 dark:border-mint-500/35 text-mint-700 dark:text-mint-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-mint-500" />
            <span>{expData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {expData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {expData.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-mint-200 dark:border-mint-900/80 ml-4 sm:ml-8 space-y-10">
          {expData.items.map((item, index) => {
            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-mint-500 group-hover:scale-125 transition-transform shadow-sm" />

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-mint-400/80 dark:hover:border-mint-500/80 transition-all duration-300">
                  
                  {/* Top Bar: Role, Company & Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-mint-500/10 dark:bg-mint-500/20 text-mint-700 dark:text-mint-300 border border-mint-500/20 dark:border-mint-500/30 inline-block mb-1.5">
                        {item.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-mint-500" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-mint-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint-500 mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Gained Tags */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {item.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
