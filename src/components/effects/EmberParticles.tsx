// Floating ember/glow particles for ambient game-like atmosphere
import { useMemo } from "react";

export const EmberParticles = ({ count = 18 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 14 + Math.random() * 18,
        delay: Math.random() * 20,
        hue: Math.random() > 0.6 ? 42 : 22,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `hsl(${p.hue} 100% 60%)`,
            boxShadow: `0 0 ${p.size * 4}px hsl(${p.hue} 100% 60% / 0.8)`,
            animation: `ember-rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
