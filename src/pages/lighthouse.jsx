import { useRef } from 'react';
import useMouse from '@react-hook/mouse-position';

const LighthousePage = () => {
  const lighthouseRef = useRef(null);
  const beamRef = useRef(null);

  const mouse = useMouse(document.body, {
    enterDelay: 0,
    leaveDelay: 0,
    fps: 60,
  });

  const x = mouse.x ?? -9999;
  const y = mouse.y ?? -9999;

  // Lighthouse base position
  const lighthouseX = typeof window !== 'undefined' ? window.innerWidth - 60 - 70 : 0;
  const lighthouseY = typeof window !== 'undefined' ? window.innerHeight - 250 - 400 : 0;

  // Vector from lighthouse to mouse
  const dx = x - lighthouseX;
  const dy = y - lighthouseY;

  // Angle of beam in degrees
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // Find intersection point on screen edge by extending the vector
  // We'll calculate scale to extend dx,dy to screen edge (either horizontal or vertical limit)

  let scaleX, scaleY, scale;

  if (dx === 0) {
    // Vertical line case
    scaleY = dy > 0 ? (window.innerHeight - lighthouseY) / dy : -lighthouseY / dy;
    scale = scaleY;
  } else {
    scaleX = dx > 0 ? (window.innerWidth - lighthouseX) / dx : -lighthouseX / dx;
    scaleY = dy !== 0 ? (dy > 0 ? (window.innerHeight - lighthouseY) / dy : -lighthouseY / dy) : Infinity;
    scale = Math.min(scaleX, scaleY);
  }

  // Extended point coordinates (beam end)
  const endX = lighthouseX + dx * scale;
  const endY = lighthouseY + dy * scale;

  // Length of the beam
  const length = Math.sqrt((endX - lighthouseX) ** 2 + (endY - lighthouseY) ** 2);

  // Width at lighthouse and screen edge
  const beamStartWidth = 4;   // px (slim)
  const beamEndWidth = 60;    // px (thicker)

  return (
    <div style={{
      backgroundColor: '#000',
      height: '100vh',
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Light beam trapezoid */}
      <div
        ref={beamRef}
        style={{
          position: 'absolute',
          top: `${lighthouseY}px`,
          left: `${lighthouseX}px`,
          width: `${length}px`,
          height: `${beamEndWidth}px`,
          background: 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.1))',
          transform: `rotate(${angle}deg)`,
          transformOrigin: `0% 50%`,
          pointerEvents: 'none',
          zIndex: 1,
          clipPath: `polygon(
            0% 50%, 
            0% 50%, 
            100% 0%, 
            100% 100%
          )`,
          boxShadow: '0 0 20px 8px rgba(255,255,255,0.7)',
        }}
      />

      {/* Lighthouse silhouette */}
      <img
        ref={lighthouseRef}
        src="/images/lighthouse.png"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '-200px',
          height: '850px',
          zIndex: 2,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default LighthousePage;
