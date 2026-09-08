import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Contact = () => {
  const { data, language } = usePortfolio();
  const contactData = data.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(language === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields.');
      return;
    }

    setStatus('sending');

    // Simulate reliable form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0B0F19] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-500/10 dark:bg-mint-500/20 border border-mint-500/25 dark:border-mint-500/35 text-mint-700 dark:text-mint-300 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-mint-500" />
            <span>{contactData.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {contactData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {contactData.directChannels}
              </h3>

              <div className="space-y-4">
                {contactData.quickConnect.map((channel, idx) => (
                  <a
                    key={idx}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 hover:border-mint-400/80 dark:hover:border-mint-500/80 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-mint-500/10 dark:bg-mint-500/20 text-mint-600 dark:text-mint-400 flex items-center justify-center border border-mint-500/20 dark:border-mint-500/30 group-hover:scale-105 transition-transform">
                        {channel.label === 'Email' || channel.label === 'البريد الإلكتروني' ? <Mail className="w-4 h-4" /> : null}
                        {channel.label === 'Phone' || channel.label === 'الهاتف' ? <Phone className="w-4 h-4" /> : null}
                        {channel.label === 'WhatsApp' || channel.label === 'واتساب' ? <MessageSquare className="w-4 h-4" /> : null}
                        {channel.label === 'LinkedIn' || channel.label === 'لينكد إن' ? <LinkedinIcon className="w-4 h-4" /> : null}
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          {channel.label}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200" dir="ltr">
                          {channel.value}
                        </div>
                      </div>
                    </div>
                    <Sparkles className="w-4 h-4 text-mint-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              {/* Location Card */}
              <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-750 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-mint-500 flex-shrink-0" />
                <span>Cairo, Egypt • Available for Onsite & Remote Roles</span>
              </div>
            </div>

            {/* .NET Tech Quality Promise Card */}
            <div className="p-6 rounded-3xl glass-card border border-mint-300/40 dark:border-mint-800/40 bg-mint-500/5">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                {language === 'ar' ? 'الالتزام بالجودة والمعايير' : 'Engineering Commitment'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'ar'
                  ? 'التركيز على بناء برمجيات قابلة للتوسع، خالية من الأخطاء، مع توثيق حالات الاختبار ومطابقة متطلبات العمل بدقة متناهية.'
                  : 'Dedicated to writing maintainable, clean code, robust database queries, and thorough test cases that prevent regressions and deliver enterprise value.'}
              </p>
            </div>

          </div>

          {/* Right Column: Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-mint-50 dark:bg-mint-950/80 border border-mint-300 dark:border-mint-800 text-mint-800 dark:text-mint-200 flex items-center gap-3 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 text-mint-600 dark:text-mint-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">{contactData.form.successTitle}</h5>
                    <p className="text-xs opacity-90">{contactData.form.successDesc}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {contactData.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactData.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-mint-500/30 focus:border-mint-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {contactData.form.emailLabel} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactData.form.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-mint-500/30 focus:border-mint-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {contactData.form.subjectLabel}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contactData.form.subjectPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-mint-500/30 focus:border-mint-500 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {contactData.form.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactData.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-mint-500/30 focus:border-mint-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-mint-500 hover:bg-mint-600 disabled:opacity-70 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-mint-500/25 flex items-center justify-center gap-2 glow-mint cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'sending' ? contactData.form.sending : contactData.form.submitBtn}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
