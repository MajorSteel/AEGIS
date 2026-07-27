import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../audit-time-machine.css';

export const AuditTimeMachine = () => {
  const [scrubPct, setScrubPct] = useState(100);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isTampered, setIsTampered] = useState(false);

  // Derive mocked values from the scrubber position
  // 100% = Now, 0% = 24 hours ago
  const hoursAgo = (100 - scrubPct) * (24 / 100);
  
  // Fake data interpolations
  const globalRisk = (0.12 + (100 - scrubPct) * 0.005).toFixed(2);
  const activeAgents = Math.floor(142 - (100 - scrubPct) * 0.5);
  const tps = Math.floor(9858 - (100 - scrubPct) * 40);

  // Determine hash text
  let hashStr = "#4F9A...B21";
  if (scrubPct < 30 && scrubPct > 25) {
    hashStr = "STATE MISMATCH";
  } else if (scrubPct <= 25) {
    hashStr = "#2B4C...A99";
  }

  useEffect(() => {
    if (scrubPct < 30 && scrubPct > 25) {
      setIsTampered(true);
    } else {
      setIsTampered(false);
    }
  }, [scrubPct]);

  // Handle Drag manually to constraint it to the track width
  const handleDrag = (e: any, info: any) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = info.point.x - rect.left;
    let pct = (x / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setScrubPct(pct);
  };

  return (
    <div className="audit-layout">
      <div className="audit-header">
        <h1 className="audit-title">Audit Time Machine</h1>
        <div className="audit-subtitle">CRYPTOGRAPHIC STATE RECONSTRUCTION</div>
      </div>

      <div className={`merkle-badge ${isTampered ? 'tampered' : ''}`}>
        <div className="badge-icon">
          {isTampered ? (
            <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>✕</span>
          ) : (
            <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
          )}
        </div>
        <div className="badge-text">
          <div className="badge-label">Merkle Root Status</div>
          <div className="badge-hash">
            {isTampered ? 'INTEGRITY COMPROMISED' : `VERIFIED: ${hashStr}`}
          </div>
        </div>
      </div>

      <div className="audit-canvas">
        <div className="kpi-cluster">
          <div className="audit-kpi">
            <div className="kpi-title">Global Fleet Risk</div>
            <div className="kpi-value">{globalRisk}</div>
          </div>
          <div className="audit-kpi">
            <div className="kpi-title">Active Agents</div>
            <div className="kpi-value">{activeAgents}</div>
          </div>
          <div className="audit-kpi">
            <div className="kpi-title">Throughput (TPS)</div>
            <div className="kpi-value">{tps.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="scrubber-container">
        <div className="scrubber-track" ref={trackRef}>
          <div className="scrubber-fill" style={{ width: `${scrubPct}%` }}></div>
          <motion.div 
            className="scrubber-playhead"
            drag="x"
            dragConstraints={trackRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleDrag}
            style={{ left: `${scrubPct}%` }}
          >
            <div className="scrubber-time-label">
              T-{hoursAgo.toFixed(1)}h
            </div>
            <div className="playhead-line"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
