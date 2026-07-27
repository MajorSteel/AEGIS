import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../spend-governance.css';

const agents = ['Agent 04A', 'Agent 12B', 'Agent 09F', 'Agent 01C', 'Agent 07D'];

// Generate dummy heatmap data
const generateHeatmap = (capLevel: number) => {
  return agents.map((agent, i) => {
    return Array.from({ length: 12 }).map((_, j) => {
      // Logic to change heat based on slider level and some randomness
      const baseHeat = (i * 10 + j * 5) % 100;
      const severity = baseHeat + (100 - capLevel);
      if (severity > 140) return 'capped';
      if (severity > 100) return 'warning';
      return 'safe';
    });
  });
};

export const SpendGovernance = () => {
  const [capPct, setCapPct] = useState(50); // 0 to 100

  // Drag handler for slider
  const handleDrag = (event: any, info: any) => {
    // 320px draggable area (400 track - 80 handle)
    const newY = info.point.y; 
    // Simplified mapping for demo purposes. In a real app we'd map coords properly.
    // For now, we'll just use a mock update interval to show reactivity.
  };

  const heatmapData = generateHeatmap(capPct);

  return (
    <div className="spend-layout">
      {/* Controls */}
      <div className="spend-controls">
        <div className="spend-header">
          <h1 className="spend-title">Spend Governance</h1>
          <div className="spend-subtitle">TACTILE FINANCIAL THROTTLE · DYNAMIC CAPS</div>
        </div>

        <div className="sliders-container">
          <div className="slider-group">
            <div className="slider-track">
              <motion.div 
                className="slider-handle"
                drag="y"
                dragConstraints={{ top: 0, bottom: 320 }}
                dragElastic={0.1}
                initial={{ y: 160 }}
                onDrag={(e, info) => {
                  // Rough estimation: y goes from 0 to 320
                  // 0 is 100%, 320 is 0%
                  const pct = Math.max(0, Math.min(100, 100 - (info.point.y / 320) * 100));
                  setCapPct(Math.round(pct));
                }}
              >
                <div className="slider-grip"></div>
                <div className="slider-grip"></div>
                <div className="slider-grip"></div>
              </motion.div>
            </div>
            <div className="slider-info">
              <div className="slider-label">GLOBAL FLEET CAP</div>
              <div className="slider-value">
                ${(capPct * 1000).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="spend-heatmap">
        <div className="pane-header" style={{ background: 'transparent', padding: '0 0 24px 0', border: 'none' }}>
          <span className="pane-title">Velocity Heatmap (Last 12 Hours)</span>
        </div>
        
        <div className="heatmap-grid">
          {/* Headers */}
          <div></div>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`h-${i}`} style={{ textAlign: 'center', fontSize: '10px', color: '#64748B', fontFamily: 'JetBrains Mono' }}>
              -{12 - i}h
            </div>
          ))}

          {/* Rows */}
          {heatmapData.map((row, i) => (
            <React.Fragment key={i}>
              <div className="heatmap-y-label">{agents[i]}</div>
              {row.map((heat, j) => (
                <div key={`${i}-${j}`} className={`heatmap-cell heat-${heat}`}></div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
