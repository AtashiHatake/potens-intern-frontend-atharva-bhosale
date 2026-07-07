// src/App.jsx
import React, { useState } from 'react';
import { translations } from './utils/translation';
import './index.css';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1); 
  const [lang, setLang] = useState('en'); 
  const t = translations[lang]; 

  const [reportData, setReportData] = useState({
    category: '',
    description: '',
    photo: null,
    referenceId: ''
  });

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'mr' : 'en');
  };

  return (
    // Outer wrapper: Full width, full height
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-slate-900 selection:text-white">
      
      {/* Header spans full width on desktop */}
      <header className="px-6 py-4 border-b-2 border-slate-900 bg-white flex justify-between items-center sticky top-0 z-50">
        <h1 className="font-mono font-bold tracking-tight text-lg uppercase">{t.navTitle}</h1>
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 border-slate-900 bg-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(15,23,42,1)] transition-all cursor-pointer"
        >
          {lang === 'en' ? 'मराठी' : 'English'}
        </button>
      </header>

      {/* Main content centers the form on desktop, fills screen on mobile */}
      <main className="flex-1 w-full flex flex-col items-center p-4 md:p-8 lg:p-12">
        
        {/* The Card Container - Keeps inputs readable on large screens */}
        <div className="w-full max-w-md bg-white border-2 border-slate-900 p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] flex flex-col flex-1 md:flex-none md:min-h-[500px]">
          
          <div className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider border-b border-slate-200 pb-2">
            Step {currentStep} of 3
          </div>
          
          {currentStep === 1 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <h2 className="text-2xl font-bold font-mono tracking-tight mb-6">{t.step1Title}</h2>
              <div className="flex-1 p-6 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm font-mono">
                [Category Selection Form Placeholder]
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-8 flex gap-3">
            {currentStep > 1 && (
              <button 
                onClick={() => setCurrentStep(prev => prev - 1)} 
                className="px-4 py-3 border-2 border-slate-900 bg-white text-sm font-mono font-bold uppercase cursor-pointer hover:bg-slate-50 transition-colors"
              >
                {t.labels.backBtn}
              </button>
            )}
            {currentStep < 3 && (
              <button 
                onClick={() => setCurrentStep(prev => prev + 1)} 
                className="px-4 py-3 bg-slate-900 text-white border-2 border-slate-900 text-sm font-mono font-bold uppercase flex-1 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                {t.labels.nextBtn}
              </button>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}