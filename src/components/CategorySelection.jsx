import React from 'react';

export default function CategorySelection({ categories, selectedCategory, onSelect }) {
  
  const categoryOptions = [
    { id: 'pothole', label: categories.pothole, icon: '🚧' },
    { id: 'sanitation', label: categories.sanitation, icon: '🗑️' },
    { id: 'water', label: categories.water, icon: '💧' },
    { id: 'electricity', label: categories.electricity, icon: '⚡' },
  ];

  return (
    <div className="flex flex-col gap-4">
      {categoryOptions.map((option) => {
        const isSelected = selectedCategory === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`
              relative w-full text-left px-4 py-4 border-2 border-slate-900 font-mono font-bold text-sm transition-all duration-150 ease-out cursor-pointer
              ${isSelected 
                ? 'bg-slate-900 text-white translate-x-1 translate-y-1 shadow-none' 
                : 'bg-white text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl" aria-hidden="true">{option.icon}</span>
              <span className="uppercase tracking-tight">{option.label}</span>
            </div>
            
            {isSelected && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
            )}
          </button>
        );
      })}
    </div>
  );
}