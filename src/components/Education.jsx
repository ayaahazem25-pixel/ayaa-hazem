import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  ShieldAlert, 
  Laptop, 
  CheckCircle, 
  Building 
} from 'lucide-react';

export const Education = () => {
  const { data } = usePortfolio();
  const eduData = data.education;

  return (
    <section id="education" className="py-20 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-500/10 dark:bg-mint-500/20 border border-mint-500/25 dark:border-mint-500/35 text-mint-700 dark:text-mint-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-mint-500" />
            <span>{eduData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {eduData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {eduData.subtitle}
          </p>
        </div>

        {/* University Degree Feature Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-mint-500/10 via-emerald-500/5 to-transparent border border-mint-200/80 dark:border-mint-900/60 glass-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-mint-500 text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-mint-600 dark:text-mint-400">
                  {eduData.university.grade}
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {eduData.university.degree}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {eduData.university.institution}
                </p>
              </div>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 self-start md:self-auto shadow-sm">
              {eduData.university.graduation}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-mint-200/40 dark:border-mint-900/40 pt-4">
            {eduData.university.highlights}
          </p>
        </div>

        {/* Intensive Tracks Subheader */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <Laptop className="w-5 h-5 text-mint-500" />
          <span>{eduData.tracksTitle}</span>
        </h3>

        {/* Intensive Training Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {eduData.tracks.map((track, idx) => {
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 hover:border-mint-400/80 dark:hover:border-mint-500/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-mint-500/10 dark:bg-mint-500/20 text-mint-700 dark:text-mint-300 border border-mint-500/20 dark:border-mint-500/30">
                      {track.org}
                    </span>
                    <Award className="w-4 h-4 text-mint-500 flex-shrink-0" />
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {track.name}
                  </h4>

                  <p className="text-xs sm:text-sm font-semibold text-mint-600 dark:text-mint-400 mb-3">
                    {track.track}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {track.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
