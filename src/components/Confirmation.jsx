import React from 'react';

export default function Confirmation({ labels, reportData, onReset }) {
  const statuses = [
    { title: "Report Submitted", desc: "Reference ID generated and cached.", active: true },
    { title: "Awaiting Verification", desc: "System routing to local authority.", active: false },
    { title: "Authority Assigned", desc: "Field engineer deployed.", active: false },
    { title: "Resolution En Route", desc: "Final inspection pending.", active: false }
  ];

  return (
    <div className="flex flex-col gap-8 w-full animate-fade-in">
      
      {/* Success Banner & Reference ID */}
      <div className="bg-slate-900 text-white p-6 shadow-[4px_4px_0px_0px_rgba(148,163,184,1)]">
        <h3 className="text-xl font-bold font-mono tracking-tight mb-2">REPORT SECURED</h3>
        <p className="text-sm font-sans opacity-90 mb-4">
          Your civic issue has been logged into the regional system.
        </p>
        <div className="bg-white text-slate-900 p-3 text-center border-2 border-slate-900">
          <span className="block text-xs font-mono font-bold text-slate-500 uppercase mb-1">{labels.refId}</span>
          <span className="block text-2xl font-mono font-bold tracking-widest">{reportData.referenceId}</span>
        </div>
      </div>

      {/* Stretch Goal: The Timeline Tracker */}
      <div className="flex flex-col gap-0 border-2 border-slate-900 bg-white p-6">
        <h4 className="text-sm font-mono font-bold uppercase mb-6 border-b-2 border-slate-900 pb-2">
          {labels.status}
        </h4>
        
        <div className="relative border-l-2 border-slate-900 ml-3 flex flex-col gap-8 pb-4">
          {statuses.map((status, idx) => (
            <div key={idx} className="relative pl-6">
              {/* Timeline Node */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 border-2 border-slate-900 ${status.active ? 'bg-slate-900 animate-pulse' : 'bg-white'}`}></div>
              
              <div className={`${status.active ? 'text-slate-900' : 'text-slate-400'}`}>
                <h5 className="font-mono font-bold text-sm uppercase">{status.title}</h5>
                <p className="font-sans text-xs mt-1">{status.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={onReset}
        className="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 text-sm font-mono font-bold uppercase hover:bg-slate-50 transition-colors shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        Submit Another Report
      </button>

    </div>
  );
}