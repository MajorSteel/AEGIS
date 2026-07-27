import { NavLink } from 'react-router-dom';
import { 
  Activity, Users, Scale, Code2, 
  SlidersHorizontal, GitMerge, Bell, 
  History, PieChart, Settings, Power, Palette 
} from 'lucide-react';
import './spatial-nav.css';

export const SpatialNav = () => {
  const navItems = [
    { name: 'Mission Control', path: '/mission-control', icon: <Activity size={18} /> },
    { name: 'Agent Fleet', path: '/agent-fleet', icon: <Users size={18} /> },
    { name: 'Governance Pipeline', path: '/pipeline', icon: <GitMerge size={18} /> },
    { name: 'Policy Studio', path: '/policy-studio', icon: <Code2 size={18} /> },
    { name: 'Spend Governance', path: '/spend', icon: <SlidersHorizontal size={18} /> },
    { name: 'Constitutional Court', path: '/court', icon: <Scale size={18} /> },
    { name: 'Alerts Center', path: '/alerts', icon: <Bell size={18} /> },
    { name: 'Audit Time Machine', path: '/audit', icon: <History size={18} /> },
    { name: 'Analytics', path: '/analytics', icon: <PieChart size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
    { name: 'Design System', path: '/design-system', icon: <Palette size={18} /> },
  ];

  return (
    <div className="spatial-nav">
      <div className="nav-logo">
        <img src="/logo.png" alt="AEGISX" className="w-8 h-8 rounded border border-white/10 object-cover" />
      </div>
      
      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            title={item.name}
          >
            {item.icon}
          </NavLink>
        ))}
      </div>

      <div className="nav-footer">
        <NavLink 
          to="/kill-switch"
          className={({ isActive }) => `nav-item kill-switch-btn ${isActive ? 'active' : ''}`}
          title="Emergency Kill Switch"
        >
          <Power size={18} color="#FF3B30" />
        </NavLink>
      </div>
    </div>
  );
};
