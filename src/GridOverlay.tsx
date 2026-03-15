import React from 'react';

const GridOverlay: React.FC = () => {
  const gutter = '40px';

  return (
    <div
      className="pointer-events-none absolute inset-0 z-50"
      style={{
        height: '1200px',
      }}
    >
      <div
        className="w-full max-w-6xl mx-auto px-8 py-16 h-full"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(9, 1fr)`,
          gap: gutter,
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            style={{
              borderLeft: '1px solid rgba(255, 0, 0, 0.3)',
              borderRight: i === 8 ? '1px solid rgba(255, 0, 0, 0.3)' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GridOverlay; 