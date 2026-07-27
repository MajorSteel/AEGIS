import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { MatteButton } from '../components/ui/MatteButton';

export const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  return (
    <div className="h-screen w-screen bg-aegis-bg flex items-center justify-center font-sans text-aegis-text overflow-hidden relative">
      
      {/* Deep Spatial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#006FCF] opacity-10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="z-10 flex flex-col items-center max-w-md w-full px-6"
      >
        {/* Floating Logo vignette */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-12 flex flex-col items-center"
        >
          <img src="/logo.png" alt="AEGISX Logo" className="w-64 h-auto drop-shadow-2xl rounded-2xl border border-white/10 shadow-modal" />
        </motion.div>

        {/* Recessed Login Panel */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 shadow-card backdrop-blur-md">
          <div className="mb-6">
            <label className="block text-xs uppercase text-aegis-muted font-mono tracking-wider mb-3">Enterprise SSO</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="operator@aegis.system"
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-[15px]
                         focus:outline-none focus:border-aegis-primary transition-colors shadow-recessed text-white placeholder:text-aegis-muted/50"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none ring-1 ring-inset ring-white/5 group-focus-within:ring-aegis-primary/50 transition-all"></div>
            </div>
          </div>
          
          <MatteButton onClick={onLogin} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[15px]">
            Authenticate <ArrowRight className="w-4 h-4" />
          </MatteButton>
        </div>
        
        {/* Footer info */}
        <div className="mt-12 text-center font-mono text-[10px] text-aegis-muted/50 uppercase tracking-widest flex flex-col gap-1">
          <span>Zero Trust Environment</span>
          <span>Encrypted mTLS Connection</span>
        </div>
      </motion.div>
    </div>
  );
};
