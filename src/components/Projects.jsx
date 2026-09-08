import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  FolderKanban, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Layers, 
  Database, 
  CheckCircle, 
  ShieldCheck, 
  Code,
  Sparkles,
  Server
} from 'lucide-react';

export const Projects = () => {
  const { data } = usePortfolio();
  const projectsData = data.projects;
  const [expandedProjectId, setExpandedProjectId] = useState("ecommerce-testing");

  const toggleExpand = (id) => {
    setExpandedProjectId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-500/10 dark:bg-mint-500/20 border border-mint-500/25 dark:border-mint-500/35 text-mint-700 dark:text-mint-300 text-xs font-semibold mb-3">
            <FolderKanban className="w-3.5 h-3.5 text-mint-500" />
            <span>{projectsData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {projectsData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {projectsData.subtitle}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6 sm:space-y-8">
          {projectsData.items.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className={`rounded-3xl transition-all duration-300 border ${
                  isExpanded
                    ? 'border-mint-500/60 dark:border-mint-500/60 bg-white dark:bg-slate-850 shadow-xl shadow-mint-500/5'
                    : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700'
                } overflow-hidden`}
              >
                {/* Main Summary Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-mint-500/10 dark:bg-mint-500/20 text-mint-700 dark:text-mint-300 border border-mint-500/20 dark:border-mint-500/30">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/50">
                            ★ Featured Case Study
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-mint-600 dark:text-mint-400 font-medium mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Expand / Collapse Button */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-mint-500/10 dark:bg-mint-500/20 hover:bg-mint-500/20 dark:hover:bg-mint-500/30 text-mint-700 dark:text-mint-300 border border-mint-500/25 dark:border-mint-500/35 text-xs font-bold transition-all self-start md:self-auto cursor-pointer"
                    >
                      <span>{isExpanded ? projectsData.hideDetails : projectsData.viewDetails}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Overview Text */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mb-5">
                    {project.overview}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Architectural Deep-Dive Drawer */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 pt-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 animate-in fade-in duration-300">
                    
                    {/* Architecture & DB Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                        <div className="flex items-center gap-2 text-mint-600 dark:text-mint-400 font-bold text-xs uppercase tracking-wider mb-2">
                          <Layers className="w-4 h-4" />
                          <span>System Layers</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.architecture.layers}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                          <Database className="w-4 h-4" />
                          <span>Database Design</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.architecture.database}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                        <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-2">
                          <ShieldCheck className="w-4 h-4" />
                          <span>QA & Testing Scope</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.architecture.testingScope}
                        </p>
                      </div>
                    </div>

                    {/* Architectural Highlights & Outcomes */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-mint-500" />
                        <span>Key Deliverables & Engineering Accomplishments</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-mint-500 mt-1.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
