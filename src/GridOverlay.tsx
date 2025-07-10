import React from 'react';

const GridOverlay: React.FC = () => (
  <div
    className="pointer-events-none fixed inset-0 z-50 flex"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
      width: '100vw',
      height: '100vh',
    }}
  >
    {Array.from({ length: 12 * 5 }).map((_, i) => (
      <div
        key={i}
        style={{
          borderRight: (i % 12 !== 11) ? '1px solid rgba(255, 0, 0, 0.2)' : undefined,
          borderBottom: (i < 12 * 4) ? '1px solid rgba(255, 0, 0, 0.28)' : undefined,
        }}
      />
    ))}
  </div>
);

export default GridOverlay; 