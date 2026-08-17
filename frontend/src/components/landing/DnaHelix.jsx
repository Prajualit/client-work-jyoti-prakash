"use client";

import { motion } from "framer-motion";

export default function DnaHelix() {
  const strandCount = 14;
  const width = 120;
  const height = 520;
  const amplitude = 35;
  const centerX = width / 2;

  const leftStrand = [];
  const rightStrand = [];
  const rungs = [];

  for (let i = 0; i < strandCount; i++) {
    const t = i / (strandCount - 1);
    const y = t * height;
    const phase = t * Math.PI * 2.5;
    const lx = centerX + Math.sin(phase) * amplitude;
    const rx = centerX - Math.sin(phase) * amplitude;
    leftStrand.push({ x: lx, y });
    rightStrand.push({ x: rx, y });

    if (i % 2 === 0) {
      rungs.push({ x1: lx, y1: y, x2: rx, y2: y, opacity: 0.3 + Math.abs(Math.cos(phase)) * 0.4 });
    }
  }

  const buildPath = (points) =>
    points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

  return (
    <motion.svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-[80px] md:w-[100px] lg:w-[120px] h-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dnaStrandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#B91C1C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="dnaRungGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#E8797A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0.5" />
        </linearGradient>
        <filter id="dnaGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rungs */}
      {rungs.map((rung, i) => (
        <motion.line
          key={`rung-${i}`}
          x1={rung.x1}
          y1={rung.y1}
          x2={rung.x2}
          y2={rung.y2}
          stroke="url(#dnaRungGrad)"
          strokeWidth="1.5"
          opacity={rung.opacity}
          initial={{ opacity: 0 }}
          animate={{ opacity: rung.opacity }}
          transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
        />
      ))}

      {/* Left strand */}
      <motion.path
        d={buildPath(leftStrand)}
        fill="none"
        stroke="url(#dnaStrandGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#dnaGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
      />

      {/* Right strand */}
      <motion.path
        d={buildPath(rightStrand)}
        fill="none"
        stroke="url(#dnaStrandGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#dnaGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />

      {/* Nodes on strands */}
      {leftStrand.map((p, i) => (
        <motion.circle
          key={`node-l-${i}`}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="#DC2626"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
        />
      ))}
      {rightStrand.map((p, i) => (
        <motion.circle
          key={`node-r-${i}`}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="#B91C1C"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 + i * 0.08 }}
        />
      ))}
    </motion.svg>
  );
}
