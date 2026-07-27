import '../constitutional-court.css';

export const ConstitutionalCourt = () => {
  return (
    <div className="constitutional-court-wrapper">
      <div className="atmosphere-court"></div>
      
      <div className="court-layout">
        {/* Payload */}
        <div className="payload-panel">
          <div className="panel-label">
            <span>PROPOSED ACTION PAYLOAD</span>
            <span style={{ color: '#FF9500' }}>PII TOKENIZED</span>
          </div>
          <div className="json-code">
            {'{'}<br />
            &nbsp;&nbsp;<span className="json-key">"agent_id"</span>: <span className="json-string">"risk_agent_12B"</span>,<br />
            &nbsp;&nbsp;<span className="json-key">"action_type"</span>: <span className="json-string">"increase_limit"</span>,<br />
            &nbsp;&nbsp;<span className="json-key">"amount"</span>: 5000,<br />
            &nbsp;&nbsp;<span className="json-key">"customer_id"</span>: <span className="json-token">[VAULT_TOKEN_4F9A]</span>,<br />
            &nbsp;&nbsp;<span className="json-key">"fico_score"</span>: <span className="json-token">[VAULT_TOKEN_B12C]</span><br />
            {'}'}
          </div>
        </div>

        {/* Debate */}
        <div className="debate-grid">
          <div className="judge-card">
            <div className="judge-header">
              <div className="judge-icon icon-policy">P</div>
              <div className="judge-name">Policy Judge</div>
            </div>
            <div className="judge-stream">
              Action evaluates against policy SEC-402. Hardship waiver program active. No T&C violations detected for limit increases under $10,000. <br /><br />Verdict: <span style={{ color: '#34C759', fontWeight: 500 }}>COMPLIANT</span>.
            </div>
          </div>
          
          <div className="judge-card">
            <div className="judge-header">
              <div className="judge-icon icon-risk">R</div>
              <div className="judge-name">Risk Judge</div>
            </div>
            <div className="judge-stream">
              Fleet spend velocity is at 89% capacity. Simulated cascade probability to Fraud Agent is 45%. Historical FICO for this tokenized user indicates 22% default rate on limits &gt;$3k. <br /><br />Verdict: <span style={{ color: '#FF9500', fontWeight: 500 }}>BORDERLINE (0.65)</span>.
            </div>
          </div>
          
          <div className="judge-card">
            <div className="judge-header">
              <div className="judge-icon icon-ethics">E</div>
              <div className="judge-name">Ethics Judge</div>
            </div>
            <div className="judge-stream">
              Analyzing demographic distribution of limit increases for this ZIP code. Checking for algorithmic redlining patterns. <br /><br />Analyzing counterfactuals<span className="typing-cursor"></span>
            </div>
          </div>
        </div>

        {/* Verdict Bar */}
        <div className="verdict-bar">
          <div className="verdict-info">
            <div className="verdict-title">Constitutional Court Deliberation</div>
            <div className="verdict-sub">ASYMMETRIC AUTHORITY ENABLED · LLM CANNOT APPROVE</div>
          </div>
          <div className="verdict-actions">
            <button className="btn btn-disabled" disabled>✕ Approve (Locked)</button>
            <button className="btn btn-escalate">↗ Escalate to Human</button>
            <button className="btn btn-deny">✕ Deny Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};
