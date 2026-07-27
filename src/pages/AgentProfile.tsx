import '../agent-profile.css';

export const AgentProfile = () => {
  return (
    <div className="agent-profile-wrapper">
      <div className="atmosphere"></div>
      <div className="top-bar">
        <div className="breadcrumb-pill">
          <a href="/mission-control" className="bc-link">Agent Fleet</a>
          <span className="bc-sep">/</span>
          <span className="bc-current">Servicing Agent 04A</span>
        </div>
      </div>

      <div className="profile-layout">
        <div className="left-panel">
          <div className="agent-orb"></div>
          <div className="agent-name">Servicing Agent 04A</div>
          <div className="agent-role">ROLE: CUSTOMER RETENTION</div>
          
          <div className="stat-grid">
            <div className="stat-box">
              <div className="stat-label">PAST Risk Score</div>
              <div className="stat-value" style={{ color: '#34C759' }}>0.12</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Actions / Sec</div>
              <div className="stat-value">142</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Spend Cap</div>
              <div className="stat-value">$50,000</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Drift (KL)</div>
              <div className="stat-value">0.04</div>
            </div>
          </div>
          
          <div style={{ width: '100%', height: '180px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontSize: '12px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}>
            Behavioral Fingerprint Radar
          </div>
        </div>

        <div className="right-panel">
          <div className="timeline-header">
            <div className="timeline-title">Historical Action Stream</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#64748B' }}>LAST 24 HOURS</div>
          </div>
          <div className="timeline-body">
            <div className="timeline-item">
              <div className="tl-time">09:14:32</div>
              <div className="tl-node safe"></div>
              <div className="tl-card">
                <div className="tl-action">waive_fee</div>
                <div className="tl-meta">
                  <span>AMOUNT: $50</span>
                  <span>LATENCY: 4ms</span>
                  <span style={{ color: '#34C759' }}>APPROVED (FAST-PATH)</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-time">09:08:11</div>
              <div className="tl-node court"></div>
              <div className="tl-card">
                <div className="tl-action">increase_credit_limit</div>
                <div className="tl-meta">
                  <span>AMOUNT: $5,000</span>
                  <span>LATENCY: 1.2s</span>
                  <span style={{ color: '#635BFF' }}>ESCALATED TO COURT</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-time">08:45:02</div>
              <div className="tl-node blocked"></div>
              <div className="tl-card">
                <div className="tl-action">issue_refund</div>
                <div className="tl-meta">
                  <span>AMOUNT: $1,200</span>
                  <span>LATENCY: 2ms</span>
                  <span style={{ color: '#FF3B30' }}>BLOCKED (OPA RULE)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
