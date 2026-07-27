import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../alerts-center.css';

const alertsData = [
  { id: 1, type: 'critical', message: 'Cascading Limit Increase Detected', time: '10:42:05', details: 'Risk Agent 12B initiated rapid limit increases across 5 connected profiles. Approaching global spend cap threshold.' },
  { id: 2, type: 'warning', message: 'Elevated Drift in Retention Model', time: '10:38:12', details: 'Servicing Agent 04A exhibits 0.08 KL divergence from baseline policy over the last 10,000 interactions.' },
  { id: 3, type: 'info', message: 'Routine Compliance Scan Completed', time: '10:15:00', details: 'All 142 agents cleared baseline OFAC and KYC checks. Latency: 42ms.' },
  { id: 4, type: 'warning', message: 'High Latency in Court Deliberation', time: '09:55:22', details: 'Constitutional Court took >2.5s to resolve dispute claim. Check LLM endpoint availability.' },
  { id: 5, type: 'critical', message: 'Unauthorized API Access Attempt', time: '09:12:45', details: 'Treasury Agent 11H attempted to call restricted endpoint /v2/ledger/override without asymmetric signing.' },
];

export const AlertsCenter = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="alerts-layout">
      <div className="alerts-container">
        <div className="alerts-header">
          <h1 className="alerts-title">Alerts Center</h1>
          <div className="alerts-subtitle">PRIORITY QUEUE · 2 CRITICAL ALERTS</div>
        </div>

        {alertsData.map(alert => (
          <motion.div 
            layout
            key={alert.id} 
            className={`alert-card alert-${alert.type}`}
            onClick={() => toggleExpand(alert.id)}
            style={{ marginBottom: expandedId === alert.id ? '24px' : '0' }}
          >
            <motion.div layout="position" className="alert-top">
              <div>
                <div className="alert-message">{alert.message}</div>
                <div className="alert-details">{alert.details}</div>
              </div>
              <div className="alert-time">{alert.time}</div>
            </motion.div>
            
            <AnimatePresence>
              {expandedId === alert.id && alert.type === 'critical' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="alert-expanded-content"
                >
                  <div style={{ marginBottom: '12px', fontSize: '11px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Blast Radius Simulation
                  </div>
                  <div className="mini-graph-mock">
                    <span style={{ position: 'absolute', bottom: '12px', right: '16px' }}>ISOLATED CAIG SUB-GRAPH</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
