import React from 'react';
import { Search, Shield, User } from 'lucide-react';

export const SpatialLayout: React.FC<{ children: React.ReactNode; pageTitle: string }> = ({ children, pageTitle }) => {
  return (
    <div className="h-screen w-screen bg-aegis-bg flex flex-col overflow-hidden font-sans text-aegis-text relative">
      
      {/* Ambient Lighting Layers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#006FCF] opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#635BFF] opacity-5 blur-[120px] rounded-full"></div>
        {/* The Floor */}
        <div className="absolute bottom-0 w-full h-[1px] bg-white/5 blur-sm"></div>
      </div>

      {/* Top Command Bar (Z-3) */}
      <header className="h-14 mt-4 mx-6 rounded-full border border-white/10 flex items-center px-6 bg-aegis-nav/60 backdrop-blur-3xl z-30 shadow-card">
        <div className="flex items-center gap-3 text-aegis-muted">
          {/* Logo representation */}
          <Shield className="w-5 h-5 text-[#006FCF]" />
          <div className="flex items-baseline gap-2">
            <span className="font-display text-aegis-text font-bold text-lg tracking-tight">AEGIS</span>
            <span className="text-[11px] uppercase tracking-widest text-aegis-muted">/ {pageTitle}</span>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="relative w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-aegis-muted group-focus-within:text-aegis-primary transition-colors" />
            <input 
              placeholder="Search agents, policies, or actions..."
              className="bg-black/30 border border-white/5 rounded-full pl-10 pr-4 py-1.5 text-[13px] w-full
                         focus:outline-none focus:border-aegis-primary/50 transition-colors shadow-recessed text-aegis-text placeholder:text-aegis-muted"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-xs font-mono text-aegis-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-aegis-primary animate-pulse-slow"></span>
            <span className="text-aegis-text">9,842</span> TPS
          </div>
          <div>
            P99: <span className="text-[#34C759]">47ms</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/20 bg-black/40 flex items-center justify-center">
            <User className="w-4 h-4 text-aegis-text" />
          </div>
        </div>
      </header>

      {/* Main Canvas Area */}
      <div className="flex-1 flex p-6 gap-6 overflow-hidden z-10">
        {children}
      </div>
    </div>
  );
};
