"use client";

import { motion } from "framer-motion";

const reportItems = [
  "Know Your Genes",
  "Understand Your Body",
  "Personalized Guidance",
  "Better Health Outcomes",
];

function MiniDnaHelix() {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const t = i / 9;
    const y = t * 80 + 5;
    const lx = 18 + Math.sin(t * Math.PI * 2) * 10;
    const rx = 18 - Math.sin(t * Math.PI * 2) * 10;
    points.push({ lx, rx, y });
  }

  return (
    <svg viewBox="0 0 36 90" className="w-7 md:w-8 h-auto flex-shrink-0" aria-hidden="true">
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.lx} cy={p.y} r="2" fill="#DC2626" opacity="0.7" />
          <circle cx={p.rx} cy={p.y} r="2" fill="#B91C1C" opacity="0.6" />
          {i % 2 === 0 && (
            <line x1={p.lx} y1={p.y} x2={p.rx} y2={p.y} stroke="#E8797A" strokeWidth="0.8" opacity="0.4" />
          )}
          {i > 0 && (
            <>
              <line x1={points[i - 1].lx} y1={points[i - 1].y} x2={p.lx} y2={p.y} stroke="#DC2626" strokeWidth="1.2" opacity="0.5" />
              <line x1={points[i - 1].rx} y1={points[i - 1].y} x2={p.rx} y2={p.y} stroke="#B91C1C" strokeWidth="1.2" opacity="0.4" />
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export default function DnaTestReport() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div
        className="bg-white rounded-xl p-4 md:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-[#FFEBEE] max-w-[240px] md:max-w-[270px]"
        style={{ transform: "rotate(2deg)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#FFCDD2]">
          <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
            <rect x="3" y="1" width="14" height="18" rx="2" stroke="#DC2626" strokeWidth="1.2" fill="none" />
            <line x1="7" y1="6" x2="13" y2="6" stroke="#DC2626" strokeWidth="0.8" opacity="0.5" />
            <line x1="7" y1="9" x2="13" y2="9" stroke="#DC2626" strokeWidth="0.8" opacity="0.5" />
            <line x1="7" y1="12" x2="11" y2="12" stroke="#DC2626" strokeWidth="0.8" opacity="0.5" />
          </svg>
          <span
            className="text-[11px] md:text-xs font-bold tracking-wider uppercase"
            style={{ color: "#B91C1C", fontFamily: "var(--font-geist-sans)" }}
          >
            DNA Test Report
          </span>
        </div>

        <div className="flex gap-3">
          <MiniDnaHelix />

          <div className="flex flex-col gap-2">
            {reportItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="w-3 h-3 flex-shrink-0" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" fill="#FFEBEE" />
                  <path d="M5 8L7 10L11 6" stroke="#DC2626" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="text-[10px] md:text-[11px] font-medium"
                  style={{ color: "#4A2020", fontFamily: "var(--font-geist-sans)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
