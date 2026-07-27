import '../design-system.css';

export const DesignSystem = () => {
  const colors = [
    { name: 'Core Blue', hex: '#006FCF' },
    { name: 'Court Purple', hex: '#635BFF' },
    { name: 'Danger Red', hex: '#FF3B30' },
    { name: 'Warning Orange', hex: '#FF9500' },
    { name: 'Safe Green', hex: '#34C759' },
    { name: 'Deep Space', hex: '#050A14' },
    { name: 'Slate Gray', hex: '#64748B' },
  ];

  return (
    <div className="ds-layout">
      <div className="ds-header">
        <h1 className="ds-title">Design System</h1>
        <div className="ds-subtitle">LIVING SPATIAL BLUEPRINT</div>
      </div>

      <div>
        <h2 className="ds-section-title">Volumetric Color Palette</h2>
        <div className="color-grid">
          {colors.map(color => (
            <div key={color.name} className="color-swatch-container">
              <div className="color-sphere" style={{ background: color.hex }}></div>
              <div>
                <div className="color-label">{color.name}</div>
                <div className="color-hex">{color.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="ds-section-title">Spatial Components</h2>
        <div className="component-canvas">
          {/* Mock components to showcase the UI library */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#64748B' }}>MATTE BUTTONS</span>
            <button className="btn btn-escalate" style={{ width: '200px' }}>↗ Primary Action</button>
            <button className="btn btn-deny" style={{ width: '200px' }}>✕ Critical Action</button>
            <button className="btn btn-disabled" style={{ width: '200px' }}>Disabled State</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: '#64748B' }}>GLASSMORPHIC CARD (HOVER ME)</span>
            <div className="ds-glass-card">
              Z-2 Surface
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
