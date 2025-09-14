import React, { useRef } from 'react';
import useMouse from '@react-hook/mouse-position';

const ProjectGlowCard = ({ children }) => {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 60,
  });

  const x = mouse.x ?? -9999;
  const y = mouse.y ?? -9999;
  const isHovering = mouse.isOver;

  return (
    <div
      ref={ref}
      style={{
        padding: '2px',
        borderRadius: '12px',
        backgroundColor: '#1a1a1a',
        overflow: 'hidden',
        position: 'relative',
        '--x': `${x}px`,
        '--y': `${y}px`,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '0',
          backgroundColor: '#111',
          color: 'white',
          borderRadius: '12px',
          position: 'relative',
          zIndex: 10,
          // used again to fill content inside space
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          
            backgroundColor: 'black', 
            color: 'white'
          
        }}
      >
        {children}
      </div>

      {isHovering && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background: `radial-gradient(400px circle at var(--x) var(--y), #15ca82, transparent 80%)`,
            transition: 'background 0.2s ease',
            
          }}
        />
      )}
    </div>
  );
};

export default ProjectGlowCard;
