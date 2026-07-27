import { Link } from 'react-router-dom';
import '../agent-fleet.css';

const agents = [
  { id: '04A', name: 'Servicing Agent 04A', role: 'Customer Retention', status: 'safe', risk: '0.12', sparks: [20, 40, 30, 60, 45, 80, 50, 70, 90, 40] },
  { id: '12B', name: 'Risk Agent 12B', role: 'Credit Expansion', status: 'borderline', risk: '0.65', sparks: [50, 70, 60, 90, 85, 100, 70, 60, 80, 95] },
  { id: '09F', name: 'Fraud Agent 09F', role: 'Transaction Halt', status: 'blocked', risk: '0.92', sparks: [100, 10, 20, 15, 10, 5, 20, 100, 100, 100] },
  { id: '01C', name: 'Compliance Agent 01C', role: 'KYC Verification', status: 'safe', risk: '0.04', sparks: [10, 15, 12, 20, 18, 25, 15, 10, 12, 8] },
  { id: '07D', name: 'Dispute Agent 07D', role: 'Chargeback Review', status: 'safe', risk: '0.18', sparks: [30, 40, 35, 50, 45, 60, 55, 40, 50, 35] },
  { id: '14E', name: 'Onboarding Agent 14E', role: 'Welcome Flow', status: 'safe', risk: '0.08', sparks: [60, 80, 70, 90, 85, 100, 70, 80, 90, 75] },
  { id: '02G', name: 'Trading Agent 02G', role: 'Execution Engine', status: 'borderline', risk: '0.58', sparks: [80, 90, 85, 100, 95, 80, 70, 60, 75, 90] },
  { id: '11H', name: 'Treasury Agent 11H', role: 'Liquidity Mgt', status: 'safe', risk: '0.02', sparks: [5, 8, 10, 6, 4, 8, 12, 10, 5, 8] },
];

export const AgentFleet = () => {
  return (
    <div className="fleet-layout">
      <div className="fleet-header">
        <h1 className="fleet-title">Agent Fleet</h1>
        <div className="fleet-subtitle">142 ACTIVE AGENTS · REAL-TIME MATRIX</div>
      </div>

      <div className="fleet-grid">
        {agents.map(agent => (
          <Link to="/agent-profile" key={agent.id} className={`agent-card status-${agent.status}`}>
            <div className="card-top">
              <div className="card-agent-name">{agent.name}</div>
              <div className="card-agent-role">ROLE: {agent.role}</div>
            </div>
            
            <div className="card-center">
              {agent.sparks.map((val, i) => (
                <div key={i} className="spark-bar" style={{ height: `${val}%` }}></div>
              ))}
            </div>
            
            <div className="card-bottom">
              <div className="risk-label">PAST Risk Score</div>
              <div className="risk-score">{agent.risk}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
