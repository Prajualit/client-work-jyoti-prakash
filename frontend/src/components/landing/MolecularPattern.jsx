"use client";

import { motion } from "framer-motion";

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function MolecularPattern() {
  const rand = seededRandom(42);
  const hexagons = [];
  const nodes = [];
  const connections = [];

  const cols = 12;
  const rows = 8;
  const hexSize = 40;
  const hexH = hexSize * Math.sqrt(3);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexSize * 1.5 + (row % 2 ? hexSize * 0.75 : 0);
      const y = row * hexH * 0.5;

      if (rand() > 0.5) {
        hexagons.push({ x, y, id: `hex-${row}-${col}` });
      }

      if (rand() > 0.6) {
        nodes.push({ x, y, r: 2 + rand() * 2, id: `node-${row}-${col}` });
      }
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (dist < 100 && rand() > 0.5) {
        connections.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          id: `conn-${i}-${j}`,
        });
      }
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="molLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16852E" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#39A935" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {hexagons.map((h) => {
          const points = [];
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            points.push(`${h.x + hexSize * 0.4 * Math.cos(angle)},${h.y + hexSize * 0.4 * Math.sin(angle)}`);
          }
          return (
            <polygon
              key={h.id}
              points={points.join(" ")}
              fill="none"
              stroke="#16852E"
              strokeWidth="0.5"
              opacity="0.06"
            />
          );
        })}

        {connections.map((c) => (
          <line
            key={c.id}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="url(#molLine)"
            strokeWidth="0.5"
          />
        ))}

        {nodes.map((n) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#16852E"
            opacity="0.07"
          />
        ))}
      </svg>
    </div>
  );
}
