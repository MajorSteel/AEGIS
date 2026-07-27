import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { MissionControl } from '../../pages/MissionControl';
import { AgentFleet } from '../../pages/AgentFleet';
import { AgentProfile } from '../../pages/AgentProfile';
import { ConstitutionalCourt } from '../../pages/ConstitutionalCourt';
import { EmergencyKillSwitch } from '../../pages/EmergencyKillSwitch';
import { AlertsCenter } from '../../pages/AlertsCenter';
import { PolicyStudio } from '../../pages/PolicyStudio';
import { SpendGovernance } from '../../pages/SpendGovernance';
import { GovernancePipeline } from '../../pages/GovernancePipeline';
import { AuditTimeMachine } from '../../pages/AuditTimeMachine';
import { Analytics } from '../../pages/Analytics';
import { Settings } from '../../pages/Settings';
import { DesignSystem } from '../../pages/DesignSystem';
import { SpatialNav } from './SpatialNav';
import { AegisChat } from '../ui/AegisChat';
import { AnimatePresence } from 'framer-motion';

export const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname !== '/';

  return (
    <div 
      className="bg-aegis-bg text-aegis-text min-h-screen selection:bg-aegis-primary/30" 
      style={{ 
        minWidth: '1440px', 
        overflowX: 'auto', 
        overflowY: 'hidden',
        paddingLeft: '96px'
      }}
    >
      <SpatialNav />
      <AegisChat />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/mission-control" element={<MissionControl />} />
          <Route path="/agent-fleet" element={<AgentFleet />} />
          <Route path="/agent-profile" element={<AgentProfile />} />
          <Route path="/alerts" element={<AlertsCenter />} />
          <Route path="/policy-studio" element={<PolicyStudio />} />
          <Route path="/spend" element={<SpendGovernance />} />
          <Route path="/pipeline" element={<GovernancePipeline />} />
          <Route path="/audit" element={<AuditTimeMachine />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/court" element={<ConstitutionalCourt />} />
          <Route path="/kill-switch" element={<EmergencyKillSwitch />} />
          <Route path="*" element={<Navigate to="/mission-control" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
