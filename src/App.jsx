import React, { useState, useEffect } from 'react';
import { translations } from './utils/translations';
import CategorySelection from './components/CategorySelection';
import DetailsInput from './components/DetailsInput';
import Confirmation from './components/Confirmation';
import './index.css';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1); 
  const [lang, setLang] = useState('en'); 
  const t = translations[lang]; 

  const initialReportState = {
    category: '',
    description: '',
    photo: null,
    referenceId: ''
  };
  const [reportData, setReportData] = useState(initialReportState);

  const isNextDisabled = () => {
    if (currentStep === 1 && !reportData.category) return true;
    if (currentStep === 2 && !reportData.description.trim()) return true;
    return false;
  };

  const handleSubmit = () => {
    const refId = 'PRAS-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    const finalData = { ...reportData, referenceId: refId, timestamp: new Date().toISOString() };
    
    setReportData(finalData);
    
    const existingReports = JSON.parse(localStorage.getItem('civic_reports') || '[]');
    existingReports.push(finalData);
    localStorage.setItem('civic_reports', JSON.stringify(existingReports));

    setCurrentStep(3);
  };

  const resetForm = () => {
    setReportData(initialReportState);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-slate-900 selection:text-white">
      
      <header className="px-6 py-4 border-b-2 border-slate-900 bg-white flex justify-between items-center sticky top-0 z-50">
        <h1 className="font-mono font-bold tracking-tight text-lg uppercase">{t.navTitle}</h1>
        
        <select 
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="px-2 py-1.5 text-xs font-mono font-bold uppercase border-2 border-slate-900 bg-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] focus:outline-none cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी (Hindi)</option>
          <option value="mr">मराठी (Marathi)</option>
          <option value="hr">हरियाणवी (Haryanvi)</option>
          <option value="as">অসমীয়া (Assamese)</option>
        </select>
      </header>

      <main className="flex-1 w-full flex flex-col items-center p-4 md:p-8 lg:p-12">
        
        <div className="w-full max-w-md bg-white border-2 border-slate-900 p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] flex flex-col flex-1 md:flex-none md:min-h-[500px]">
          
          <div className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider border-b border-slate-200 pb-2">
            Step {currentStep} of 3
          </div>
          
          {currentStep === 1 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <h2 className="text-2xl font-bold font-mono tracking-tight mb-6">{t.step1Title}</h2>
              <div className="flex-1">
                <CategorySelection 
                  categories={t.categories}
                  selectedCategory={reportData.category}
                  onSelect={(categoryId) => setReportData({ ...reportData, category: categoryId })}
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in flex-1 flex flex-col">
              <h2 className="text-2xl font-bold font-mono tracking-tight mb-6">{t.step2Title}</h2>
              <div className="flex-1">
                <DetailsInput 
                  labels={t.labels}
                  reportData={reportData}
                  setReportData={setReportData}
                  lang={lang}
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <Confirmation 
              labels={t.labels} 
              reportData={reportData} 
              onReset={resetForm} 
            />
          )}

          {currentStep < 3 && (
            <div className="mt-8 flex gap-3">
              {currentStep > 1 && (
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)} 
                  className="px-4 py-3 border-2 border-slate-900 bg-white text-sm font-mono font-bold uppercase cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  {t.labels.backBtn}
                </button>
              )}
              
              <button 
                onClick={currentStep === 2 ? handleSubmit : () => setCurrentStep(prev => prev + 1)} 
                disabled={isNextDisabled()}
                className={`px-4 py-3 border-2 border-slate-900 text-sm font-mono font-bold uppercase flex-1 transition-all
                  ${isNextDisabled()
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-70'
                    : 'bg-slate-900 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer'
                  }
                `}
              >
                {currentStep === 2 ? t.labels.submitBtn : t.labels.nextBtn}
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}