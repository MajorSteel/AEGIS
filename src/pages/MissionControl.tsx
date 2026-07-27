import { useState, useEffect } from 'react';
import '../mission-control.css';
import { CausalGraph } from '../components/ui/CausalGraph';

export const MissionControl = () => {
  return (
    <div className="mission-control-wrapper">
      {/* TOP COMMAND BAR */}
      <div className="command-bar">
        <div className="command-left">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded border border-white/10 shadow-recessed object-cover" />
          <span className="logo-text">AEGISX</span>
          <span className="separator">·</span>
          <span className="breadcrumb">Mission Control</span>
        </div>
        
        <div className="command-center">
          <div className="search-pill">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input className="search-input" placeholder="Search agents, policies, or actions..." />
          </div>
        </div>
        
        <div className="command-right">
          <div className="metric">
            <span className="metric-label">TPS</span>
            <span className="metric-value">9,842</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric">
            <span className="metric-label">P99</span>
            <span className="metric-value success">47ms</span>
          </div>
          <div className="metric-divider"></div>
          <div className="operator-avatar"></div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="main-layout">
        
        {/* LEFT COLUMN */}
        <div className="left-column">
          
          {/* Card A: Global Fleet Risk */}
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Global Fleet Risk</span>
              <div className="kpi-status">
                <div className="status-dot"></div>
                <span>STABLE</span>
              </div>
            </div>
            <div className="kpi-value">0.12</div>
            <div className="kpi-subtext">↓ 0.03 from last hour</div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '12%' }}></div>
            </div>
          </div>
          
          {/* Card B: Governance Pipeline */}
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Governance Pipeline</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span className="kpi-value" style={{ fontSize: '36px' }}>9,858</span>
              <span style={{ fontSize: '14px', color: '#64748B' }}>TPS</span>
            </div>
            <div className="pipeline-bar">
              <div className="pipeline-segment pipeline-fast">9,580 FAST</div>
              <div className="pipeline-segment pipeline-court">380</div>
              <div className="pipeline-segment pipeline-human"></div>
            </div>
            <div className="pipeline-legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ background: '#006FCF' }}></div>
                <span>Fast-Path</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ background: '#635BFF' }}></div>
                <span>Court</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ background: '#FF9500' }}></div>
                <span>Human</span>
              </div>
            </div>
          </div>
          
          {/* Card C: P99 Latency */}
          <div className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">P99 Enforcement Latency</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span className="kpi-value" style={{ fontSize: '36px', color: '#34C759' }}>47ms</span>
            </div>
            <div className="kpi-subtext">↓ 3ms improvement</div>
            <div className="micro-chart">
              <div className="chart-bar" style={{ height: '40%' }}></div>
              <div className="chart-bar" style={{ height: '65%' }}></div>
              <div className="chart-bar" style={{ height: '50%' }}></div>
              <div className="chart-bar" style={{ height: '80%' }}></div>
              <div className="chart-bar" style={{ height: '45%' }}></div>
              <div className="chart-bar" style={{ height: '70%' }}></div>
              <div className="chart-bar" style={{ height: '55%' }}></div>
              <div className="chart-bar" style={{ height: '35%' }}></div>
              <div className="chart-bar" style={{ height: '60%' }}></div>
              <div className="chart-bar" style={{ height: '30%' }}></div>
            </div>
          </div>
          
        </div>
        
        {/* CENTER STAGE: CAIG Graph */}
        <div className="center-stage">
          <div className="graph-ambient"></div>
          
          <div className="graph-label">
            <h2>Causal Agent Interaction Graph</h2>
            <p>142 AGENTS · 1,284 EDGES · REAL-TIME</p>
          </div>
          
          {/* Replaced SVG with 3D Graph */}
          <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0 }}>
             <CausalGraph />
          </div>
          
          <div className="graph-legend">
            <div className="legend-item">
              <div className="legend-dot" style={{ background: '#006FCF', boxShadow: '0 0 6px rgba(0,111,207,0.5)' }}></div>
              <span>Safe</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot" style={{ background: '#635BFF', boxShadow: '0 0 6px rgba(99,91,255,0.5)' }}></div>
              <span>Borderline</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot" style={{ background: '#FF3B30' }}></div>
              <span>Critical</span>
            </div>
          </div>
          
          <div className="graph-controls">
            <div className="graph-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
            <div className="graph-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* RIGHT COLUMN */}
        <div className="right-column">
          
          {/* Live Feed */}
          <div className="feed-card">
            <div className="feed-header">
              <span className="feed-title">Live Execution Feed</span>
              <div className="live-badge">
                <div className="status-dot"></div>
                <span>LIVE</span>
              </div>
            </div>
            <div className="feed-list">
              <div className="feed-item">
                <div className="feed-left">
                  <div className="feed-dot feed-dot-approved"></div>
                  <span className="feed-agent">Servicing</span>
                  <span className="feed-separator">·</span>
                  <span className="feed-action">waive_fee</span>
                  <span className="feed-amount">$50</span>
                </div>
                <div className="feed-right">
                  <span className="status-pill pill-approved">APPROVED</span>
                  <span className="feed-latency">4ms</span>
                </div>
              </div>
              
              <div className="feed-item">
                <div className="feed-left">
                  <div className="feed-dot feed-dot-court"></div>
                  <span className="feed-agent">Risk</span>
                  <span className="feed-separator">·</span>
                  <span className="feed-action">increase_limit</span>
                  <span className="feed-amount">$5,000</span>
                </div>
                <div className="feed-right">
                  <span className="status-pill pill-court">COURT</span>
                  <span className="feed-latency">1.2s</span>
                </div>
              </div>
              
              <div className="feed-item">
                <div className="feed-left">
                  <div className="feed-dot feed-dot-approved"></div>
                  <span className="feed-agent">Dispute</span>
                  <span className="feed-separator">·</span>
                  <span className="feed-action">refund_charge</span>
                  <span className="feed-amount">$120</span>
                </div>
                <div className="feed-right">
                  <span className="status-pill pill-approved">APPROVED</span>
                  <span className="feed-latency">3ms</span>
                </div>
              </div>
              
              <div className="feed-item">
                <div className="feed-left">
                  <div className="feed-dot feed-dot-blocked"></div>
                  <span className="feed-agent">Fraud</span>
                  <span className="feed-separator">·</span>
                  <span className="feed-action">freeze_card</span>
                </div>
                <div className="feed-right">
                  <span className="status-pill pill-blocked">BLOCKED</span>
                  <span className="feed-latency">2ms</span>
                </div>
              </div>
              
              <div className="feed-item">
                <div className="feed-left">
                  <div className="feed-dot feed-dot-approved"></div>
                  <span className="feed-agent">Servicing</span>
                  <span className="feed-separator">·</span>
                  <span className="feed-action">update_address</span>
                </div>
                <div className="feed-right">
                  <span className="status-pill pill-approved">APPROVED</span>
                  <span className="feed-latency">2ms</span>
                </div>
              </div>
              
              <div className="feed-item">
                <div className="feed-left">
                  <div className="feed-dot feed-dot-approved"></div>
                  <span className="feed-agent">Credit</span>
                  <span className="feed-separator">·</span>
                  <span className="feed-action">lower_apr</span>
                  <span className="feed-amount">2.4%</span>
                </div>
                <div className="feed-right">
                  <span className="status-pill pill-approved">APPROVED</span>
                  <span className="feed-latency">5ms</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Constitutional Court Card */}
          <div className="court-card">
            <div className="court-header">
              <div className="court-pulse"></div>
              <span className="court-title">Constitutional Court · Deliberating</span>
            </div>
            <div className="court-action">
              increase_limit · $5,000
            </div>
            <div className="court-judges">
              <div className="judge-row">
                <span className="judge-name">Policy Judge</span>
                <span className="judge-status judge-compliant">✓ COMPLIANT</span>
              </div>
              <div className="judge-row">
                <span className="judge-name">Risk Judge</span>
                <span className="judge-status judge-borderline">⚠ BORDERLINE 0.65</span>
              </div>
              <div className="judge-row">
                <span className="judge-name">Ethics Judge</span>
                <span className="judge-status judge-pending">
                  <div className="status-dot" style={{ background: '#635BFF', boxShadow: '0 0 6px rgba(99,91,255,0.6)', width: '5px', height: '5px' }}></div>
                  PENDING
                </span>
              </div>
            </div>
            <div className="court-progress">
              <div className="court-progress-fill"></div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};
