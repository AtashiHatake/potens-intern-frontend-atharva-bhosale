import React, { useState, useEffect, useRef } from 'react';

export default function DetailsInput({ labels, reportData, setReportData, lang }) {
  const [isListening, setIsListening] = useState(false);
  const [supportSpeech, setSupportSpeech] = useState(true);
  
  const recognitionRef = useRef(null);
  const baseTextRef = useRef(''); 

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setSupportSpeech(false);
    }
  }, []);

  const toggleVoiceInput = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    baseTextRef.current = reportData.description;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    const getSpeechLangCode = (appLang) => {
      const langMap = { en: 'en-US', hi: 'hi-IN', mr: 'mr-IN', as: 'en-US', hr: 'hi-IN' };
      return langMap[appLang] || 'en-US';
    };

    recognition.lang = getSpeechLangCode(lang);
    recognition.continuous = true; 
    recognition.interimResults = true; 

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let sessionTranscript = '';
      for (let i = 0; i < event.results.length; ++i) {
        sessionTranscript += event.results[i][0].transcript;
      }
      
      setReportData(prev => ({
        ...prev,
        description: (baseTextRef.current + ' ' + sessionTranscript).trim()
      }));
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setReportData({ ...reportData, photo: imageUrl });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-mono font-bold uppercase">{labels.description}</label>
        <textarea
          value={reportData.description}
          onChange={(e) => setReportData({ ...reportData, description: e.target.value })}
          className="w-full h-32 p-3 border-2 border-slate-900 font-sans text-sm resize-none focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-shadow"
          placeholder="..."
        />
      </div>

      {supportSpeech && (
        <button
          onClick={toggleVoiceInput}
          type="button"
          className={`flex items-center justify-center gap-3 w-full py-4 border-2 border-slate-900 font-mono font-bold text-sm transition-all duration-150 ease-out cursor-pointer
            ${isListening 
              ? 'bg-red-500 text-white shadow-none translate-x-1 translate-y-1' 
              : 'bg-slate-100 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-200 active:translate-x-1 active:translate-y-1 active:shadow-none'
            }
          `}
        >
          <span className="text-xl">{isListening ? '🛑' : '🎤'}</span>
          <span className="uppercase tracking-tight">
            {isListening ? "Stop Recording" : labels.voiceInput}
          </span>
        </button>
      )}

      <div className="flex flex-col gap-2 mt-2">
        <label className="text-sm font-mono font-bold uppercase">{labels.photoUpload}</label>
        <div className={`relative w-full border-2 border-slate-900 p-4 text-center transition-colors cursor-pointer ${reportData.photo ? 'bg-slate-900 text-white' : 'border-dashed bg-white text-slate-500 hover:bg-slate-50'}`}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <span className="text-sm font-mono font-bold uppercase tracking-tight">
            {reportData.photo ? '📸 Image Attached' : '+ Choose Image'}
          </span>
        </div>
      </div>

    </div>
  );
}