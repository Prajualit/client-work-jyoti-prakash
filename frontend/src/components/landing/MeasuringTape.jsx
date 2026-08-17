"use client";

import { motion } from "framer-motion";

export default function MeasuringTape() {
  const markings = [];
  for (let i = 0; i <= 30; i++) {
    const x = 10 + (i / 30) * 380;
    const isMajor = i % 5 === 0;
    markings.push({
      x,
      height: isMajor ? 10 : 5,
      label: isMajor ? `${i * 2}` : null,
    });
  }

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, scaleX: 0.8 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 30" className="w-[180px] md:w-[220px] lg:w-[280px] h-auto">
        <defs>
          <linearGradient id="tapeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDE7" />
            <stop offset="50%" stopColor="#FFF9C4" />
            <stop offset="100%" stopColor="#FFF59D" />
          </linearGradient>
          <filter id="tapeShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Tape body with curve */}
        <path
          d="M5,15 C100,10 200,20 395,12"
          stroke="url(#tapeGrad)"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
          filter="url(#tapeShadow)"
        />
        <path
          d="M5,15 C100,10 200,20 395,12"
          stroke="#FFFDE7"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />

        {/* Edge lines */}
        <path
          d="M5,8 C100,3 200,13 395,5"
          stroke="#E0E0E0"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M5,22 C100,17 200,27 395,19"
          stroke="#E0E0E0"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />

        {/* Markings - approximate on the curve */}
        {markings.map((m, i) => {
          const t = m.x / 400;
          const cy = 15 + Math.sin(t * Math.PI) * (t < 0.5 ? -5 : 8);
          const y1 = cy - m.height / 2;
          const y2 = cy + m.height / 2;
          return (
            <g key={i}>
              <line
                x1={m.x}
                y1={y1}
                x2={m.x}
                y2={y2}
                stroke="#424242"
                strokeWidth={m.label ? "0.8" : "0.4"}
              />
              {m.label && (
                <text
                  x={m.x}
                  y={y2 + 8}
                  textAnchor="middle"
                  fontSize="5"
                  fill="#757575"
                  fontFamily="var(--font-geist-sans)"
                >
                  {m.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
