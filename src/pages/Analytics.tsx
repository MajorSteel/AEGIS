import { useEffect, useState } from 'react';
import '../analytics.css';

export const Analytics = () => {
  const [bars, setBars] = useState([10, 10, 10, 10, 10, 10, 10]);

  useEffect(() => {
    // Animate bars on mount
    const timer = setTimeout(() => {
      setBars([40, 65, 45, 80, 55, 90, 75]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="analytics-layout">
      <div className="analytics-header">
        <h1 className="analytics-title">Deep Analytics</h1>
        <div className="analytics-subtitle">VOLUMETRIC DATA VISUALIZATION</div>
      </div>

      <div className="analytics-grid">
        {/* 3D Bar Chart */}
        <div className="chart-card col-span-8">
          <div className="chart-content">
            <div className="chart-data-label">Action Velocity (7d)</div>
            <div className="chart-data-large">14,204</div>
            
            <div className="bar-chart-container">
              {bars.map((height, i) => (
                <div key={i} className="bar-3d" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Small Metric */}
        <div className="chart-card col-span-4">
          <div className="chart-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="chart-data-label">Court Overrides</div>
            <div className="chart-data-large" style={{ position: 'relative', textAlign: 'center', color: '#FF9500' }}>42.8%</div>
          </div>
        </div>

        {/* Volumetric Line Chart */}
        <div className="chart-card col-span-12">
          <div className="chart-content">
            <div className="chart-data-label">Global Risk Drift</div>
            <div className="chart-data-large">0.12 KL</div>

            <div className="line-chart-container" style={{ marginLeft: '160px' }}>
              <svg className="line-svg">
                <defs>
                  <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(99,91,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(99,91,255,0)" />
                  </linearGradient>
                </defs>
                <path 
                  className="volumetric-area"
                  d="M 0 200 L 0 150 Q 100 100, 200 120 T 400 80 T 600 140 T 800 60 T 1000 90 L 1000 200 Z"
                />
                <path 
                  className="volumetric-line" 
                  d="M 0 150 Q 100 100, 200 120 T 400 80 T 600 140 T 800 60 T 1000 90" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Cohort Table */}
        <div className="chart-card col-span-12">
          <div className="chart-data-label">Agent Retention Cohorts</div>
          <table className="cohort-table">
            <thead>
              <tr>
                <th>Cohort</th>
                <th>Size</th>
                <th>Day 1</th>
                <th>Day 7</th>
                <th>Day 14</th>
                <th>Day 30</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Risk Agents v2', size: 42, d1: '98%', d7: '95%', d14: '92%', d30: '88%' },
                { name: 'Servicing v1.4', size: 128, d1: '99%', d7: '98%', d14: '97%', d30: '94%' },
                { name: 'Trading Bots', size: 12, d1: '100%', d7: '100%', d14: '100%', d30: '100%' },
              ].map((row, i) => (
                <tr key={i} className="cohort-row">
                  <td style={{ fontWeight: 600 }}>{row.name}</td>
                  <td style={{ color: '#64748B' }}>{row.size}</td>
                  <td className="cohort-val">{row.d1}</td>
                  <td className="cohort-val">{row.d7}</td>
                  <td className="cohort-val">{row.d14}</td>
                  <td className="cohort-val">{row.d30}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
