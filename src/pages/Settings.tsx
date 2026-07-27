import { useState } from 'react';
import { motion } from 'framer-motion';
import '../settings.css';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('governance');
  const [toggles, setToggles] = useState({ autoScale: true, enforceWaf: true, strictOpa: false });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

  return (
    <div className="settings-layout">
      <div className="settings-sidebar">
        <div className="settings-header">
          <h1 className="settings-title">Settings</h1>
          <div className="settings-subtitle">FLEET CONFIGURATION</div>
        </div>

        <div 
          className={`settings-nav-item ${activeTab === 'governance' ? 'active' : ''}`}
          onClick={() => setActiveTab('governance')}
        >
          Governance & Policy
        </div>
        <div 
          className={`settings-nav-item ${activeTab === 'network' ? 'active' : ''}`}
          onClick={() => setActiveTab('network')}
        >
          Network Routing
        </div>
        <div 
          className={`settings-nav-item ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          Security & Access
        </div>
      </div>

      <div className="settings-content">
        <h2 className="settings-section-title">
          {activeTab === 'governance' && 'Governance & Policy Settings'}
          {activeTab === 'network' && 'Network Routing Configuration'}
          {activeTab === 'security' && 'Security & Access Control'}
        </h2>

        {/* Mock settings content based on tab */}
        {activeTab === 'governance' && (
          <>
            <div className="setting-row">
              <div className="setting-info">
                <div className="setting-label">Strict OPA Evaluation</div>
                <div className="setting-desc">Enforce OPA syntax strictness. If an agent payload contains undocumented fields, immediately route to the Constitutional Court.</div>
              </div>
              <div 
                className={`spatial-toggle ${toggles.strictOpa ? 'on' : ''}`}
                onClick={() => handleToggle('strictOpa')}
              >
                <motion.div 
                  className="toggle-handle"
                  initial={false}
                  animate={{ left: toggles.strictOpa ? '34px' : '4px' }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
            </div>

            <div className="setting-row">
              <div className="setting-info">
                <div className="setting-label">Global Spend Threshold ($)</div>
                <div className="setting-desc">Absolute maximum hard cap across the entire fleet before triggering the Emergency Kill Switch.</div>
              </div>
              <div>
                <input type="text" className="spatial-input" defaultValue="10,000,000" />
              </div>
            </div>
          </>
        )}

        {activeTab === 'network' && (
          <div className="setting-row">
            <div className="setting-info">
              <div className="setting-label">Auto-Scale LLM Judges</div>
              <div className="setting-desc">Automatically spin up additional Constitutional Court judge instances when the queue exceeds 1,000 pending items.</div>
            </div>
            <div 
              className={`spatial-toggle ${toggles.autoScale ? 'on' : ''}`}
              onClick={() => handleToggle('autoScale')}
            >
              <motion.div 
                className="toggle-handle"
                initial={false}
                animate={{ left: toggles.autoScale ? '34px' : '4px' }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="setting-row">
            <div className="setting-info">
              <div className="setting-label">Enforce WAF Rules</div>
              <div className="setting-desc">Enable Web Application Firewall rules on ingress traffic to the Agent Fleet API.</div>
            </div>
            <div 
              className={`spatial-toggle ${toggles.enforceWaf ? 'on' : ''}`}
              onClick={() => handleToggle('enforceWaf')}
            >
              <motion.div 
                className="toggle-handle"
                initial={false}
                animate={{ left: toggles.enforceWaf ? '34px' : '4px' }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
