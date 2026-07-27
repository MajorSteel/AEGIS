import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../emergency-kill-switch.css';

export const EmergencyKillSwitch = () => {
  const [rotation, setRotation] = useState(0); // 0 to 90 degrees

  return (
    <div className="emergency-kill-switch-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', overflowY: 'auto', padding: '48px 0' }}>
      <div className="alert-atmosphere"></div>
      <div className="alert-glow"></div>
      
      <div className="kill-modal">
        <div className="warning-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF3B30" strokeWidth="2.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        
        <h1 className="kill-title">Hierarchical Kill Switch</h1>
        <p className="kill-desc">Initiating a fleet-wide halt will trigger a topological sort. Leaf agents will die instantly; root agents will wait for in-flight transactions to settle.</p>
        
        <div className="dial-container">
          <div className="dial-track"></div>
          {/* Dynamic glowing wedge representing rotation */}
          <div className="dial-progress" style={{ 
            background: `conic-gradient(from 180deg, #FF3B30 0deg, #FF3B30 ${rotation + 180}deg, transparent ${rotation + 180}deg)` 
          }}></div>
          
          <motion.div 
            className="dial-handle"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDrag={(e, info) => {
              // Map drag distance roughly to degrees (0 to 90)
              const newRot = Math.max(0, Math.min(90, rotation + info.delta.x * 0.5));
              setRotation(newRot);
            }}
            animate={{ rotate: rotation }}
            transition={{ type: "spring", bounce: 0, duration: 0.1 }}
          >
            <div className="dial-grip-marks"></div>
            <div className="dial-icon">🔒</div>
            <div className="dial-text">{rotation > 80 ? 'HALTING...' : 'Operational'}</div>
          </motion.div>
        </div>
        
        <div className="status-list">
          <div className="status-row">
            <div className="status-dot"></div>
            <span>09:14:32 - Awaiting operator physical verification...</span>
          </div>
          <div className="status-row active">
            <div className="status-dot"></div>
            <span>09:14:35 - Safety interlocks disengaged. Authorization pending.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
