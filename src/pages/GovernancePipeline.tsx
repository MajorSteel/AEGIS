import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../governance-pipeline.css';

export const GovernancePipeline = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="pipeline-layout" onMouseMove={handleMouseMove}>
      <div className="pipeline-floor"></div>

      <div className="pipeline-header">
        <h1 className="pipeline-title">Governance Pipeline</h1>
        <div className="pipeline-subtitle">LIVE MACROSCOPIC TOPOLOGY · 10,000 TPS</div>
      </div>

      <div className="sankey-container">
        {/* SVG Streams representing the Sankey flows */}
        <svg className="sankey-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ingressFast" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="#006FCF" />
            </linearGradient>
            <linearGradient id="ingressCourt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="#635BFF" />
            </linearGradient>
            <linearGradient id="ingressHuman" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="#FF9500" />
            </linearGradient>
          </defs>

          {/* Paths connecting nodes. Using absolute % percentages roughly for responsiveness */}
          <path 
            className="sankey-path path-fast" 
            d="M 20% 50% C 40% 50%, 60% 30%, 80% 30%" 
            stroke="url(#ingressFast)" 
            strokeWidth="16" 
            opacity={hoveredPath && hoveredPath !== 'fast' ? 0.2 : 0.8}
            onMouseEnter={() => setHoveredPath('fast')}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path 
            className="sankey-path path-court" 
            d="M 20% 50% C 40% 50%, 40% 70%, 60% 70% C 70% 70%, 75% 50%, 80% 50%" 
            stroke="url(#ingressCourt)" 
            strokeWidth="8" 
            opacity={hoveredPath && hoveredPath !== 'court' ? 0.2 : 0.8}
            onMouseEnter={() => setHoveredPath('court')}
            onMouseLeave={() => setHoveredPath(null)}
          />
          <path 
            className="sankey-path path-human" 
            d="M 20% 50% C 40% 50%, 40% 90%, 80% 90%" 
            stroke="url(#ingressHuman)" 
            strokeWidth="4" 
            opacity={hoveredPath && hoveredPath !== 'human' ? 0.2 : 0.8}
            onMouseEnter={() => setHoveredPath('human')}
            onMouseLeave={() => setHoveredPath(null)}
          />
        </svg>

        {/* CSS Nodes overlayed exactly where the paths start/end */}
        <div className="sankey-node" style={{ left: '20%', top: '50%' }}>
          <div className="node-title">Ingress</div>
          <div className="node-tps tps-ingress">10,000</div>
        </div>

        <div className="sankey-node" style={{ left: '80%', top: '30%' }}>
          <div className="node-title">Fast-Path OPA</div>
          <div className="node-tps tps-fast">9,500</div>
        </div>

        <div className="sankey-node" style={{ left: '60%', top: '70%', borderColor: '#635BFF', boxShadow: '0 0 32px rgba(99,91,255,0.2)' }}>
          <div className="node-title">Constitutional Court</div>
          <div style={{ fontSize: '10px', color: '#635BFF', marginBottom: '4px' }}>LLM CLUSTER</div>
          <div className="node-tps tps-court">400</div>
        </div>

        <div className="sankey-node" style={{ left: '80%', top: '50%' }}>
          <div className="node-title">Court Resolved</div>
          <div className="node-tps tps-court">400</div>
        </div>

        <div className="sankey-node" style={{ left: '80%', top: '90%' }}>
          <div className="node-title">Human Triage</div>
          <div className="node-tps tps-human">100</div>
        </div>
      </div>

      <AnimatePresence>
        {hoveredPath && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="kpi-tooltip"
            style={{ 
              left: mousePos.x + 20, 
              top: mousePos.y + 20 
            }}
          >
            <div style={{ fontSize: '11px', color: '#006FCF', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '16px', textTransform: 'uppercase' }}>
              {hoveredPath} Path Telemetry
            </div>
            <div className="kpi-row">
              <span className="kpi-label">P99 Latency</span>
              <span className="kpi-val">{hoveredPath === 'fast' ? '2ms' : hoveredPath === 'court' ? '1.2s' : '> 5m'}</span>
            </div>
            <div className="kpi-row">
              <span className="kpi-label">Error Rate</span>
              <span className="kpi-val">{hoveredPath === 'fast' ? '0.001%' : '0.14%'}</span>
            </div>
            <div className="kpi-row">
              <span className="kpi-label">Active Nodes</span>
              <span className="kpi-val">{hoveredPath === 'fast' ? '32' : hoveredPath === 'court' ? '128' : '4'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
