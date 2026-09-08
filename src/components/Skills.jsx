import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Server, 
  Layout, 
  Database, 
  CheckSquare, 
  Sparkles, 
  Layers, 
  Cpu, 
  SlidersHorizontal 
} from 'lucide-react';

export const Skills = () => {
  const { data } = usePortfolio();
  const skillsData = data.skills;
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: data.language === 'ar' ? 'الكل' : 'All Domains', icon: Layers },
    { id: 'backend', label: skillsData.categories.backend, icon: Server },
    { id: 'frontend', label: skillsData.categories.frontend, icon: Layout },
    { id: 'database', label: skillsData.categories.database, icon: Database },
    { id: 'qaba', label: skillsData.categories.qaba, icon: CheckSquare },
  ];

  const filteredItems = activeTab === 'all' 
    ? skillsData.items 
    : skillsData.items.filter(item => item.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-500/10 dark:bg-mint-500/20 border border-mint-500/25 dark:border-mint-500/35 text-mint-700 dark:text-mint-300 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-mint-500" />
            <span>{skillsData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {skillsData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {skillsData.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-mint-500 text-white shadow-md shadow-mint-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-mint-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredItems.map((skill, index) => {
            return (
              <div
                key={`${skill.name}-${index}`}
                className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 hover:border-mint-400/80 dark:hover:border-mint-500/80 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle top indicator bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-mint-500 transition-colors" />

                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-mint-600 dark:group-hover:text-mint-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {skill.desc}
                </p>

                {/* Progress Visual Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-mint-500 to-emerald-400 h-1.5 rounded-full transition-all duration-500 group-hover:opacity-100 opacity-80"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Takeaway Box */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-mint-200/70 dark:border-mint-900/50 bg-mint-50/30 dark:bg-mint-950/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-start">
          <div className="p-3 rounded-xl bg-mint-500 text-white shadow-md">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              {data.language === 'ar' ? 'نهج المعمارية المتكاملة (Full Stack Architecture)' : 'Full Stack Architectural Philosophy'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {data.language === 'ar'
                ? 'الربط المتين بين واجهات React الأمامية السريعة، وخدمات .NET الخلفية المنظمة، وقواعد بيانات SQL Server العلاقية الموثوقة مع التزام صارم بآليات الفحص والاختبار.'
                : 'Bridging responsive React frontends with structured .NET backend services and relational SQL Server storage, anchored by systematic QA and analytical requirements traceability.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
