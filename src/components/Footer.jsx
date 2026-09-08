import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Footer = () => {
  const { data } = usePortfolio();
  const footerData = data.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-100/80 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="text-center sm:text-start">
            <div className="flex items-center justify-center sm:justify-start gap-2 font-bold text-slate-800 dark:text-white">
              <span className="w-7 h-7 rounded-full bg-mint-500 flex items-center justify-center text-white text-xs font-black">
                AH
              </span>
              <span>Aya Hazem Shawky</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
              © {new Date().getFullYear()} Aya Hazem Shawky. {footerData.rights}
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
              {footerData.developedWith}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ayaa-hazem-590901320"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-mint-600 dark:hover:text-mint-400 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            
            <a
              href="mailto:ayahazem25@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-mint-600 dark:hover:text-mint-400 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-mint-500 hover:bg-mint-600 text-white text-xs font-semibold transition-all shadow-md hover:shadow-mint-500/25 cursor-pointer"
            >
              <span>{footerData.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
