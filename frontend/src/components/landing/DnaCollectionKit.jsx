"use client";

import { motion } from "framer-motion";

export default function DnaCollectionKit() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      {/* Kit box */}
      <div
        className="relative w-[180px] md:w-[200px] lg:w-[230px] h-[130px] md:h-[145px] lg:h-[165px] rounded-xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #075B32 0%, #0A4425 60%, #063818 100%)",
          boxShadow: "0 8px 32px rgba(7, 91, 50, 0.35)",
        }}
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
          }}
        />

        {/* DNA Helix decoration */}
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-20"
          viewBox="0 0 40 100"
          width="35"
          height="80"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const t = i / 7;
            const y = t * 90 + 5;
            const lx = 20 + Math.sin(t * Math.PI * 2.5) * 12;
            const rx = 20 - Math.sin(t * Math.PI * 2.5) * 12;
            return (
              <g key={i}>
                <circle cx={lx} cy={y} r="2.5" fill="#DC2626" />
                <circle cx={rx} cy={y} r="2.5" fill="#E8797A" />
                {i % 2 === 0 && (
                  <line x1={lx} y1={y} x2={rx} y2={y} stroke="#DC2626" strokeWidth="1" opacity="0.5" />
                )}
                {i > 0 && (
                  <>
                    <line x1={20 + Math.sin(((i - 1) / 7) * Math.PI * 2.5) * 12} y1={(i - 1) / 7 * 90 + 5} x2={lx} y2={y} stroke="#DC2626" strokeWidth="1.5" opacity="0.4" />
                    <line x1={20 - Math.sin(((i - 1) / 7) * Math.PI * 2.5) * 12} y1={(i - 1) / 7 * 90 + 5} x2={rx} y2={y} stroke="#E8797A" strokeWidth="1.5" opacity="0.3" />
                  </>
                )}
              </g>
            );
          })}
        </svg>

        {/* Text content */}
        <div className="relative z-10 p-4 md:p-5 flex flex-col justify-between h-full">
          <div>
            <span
              className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-white/70 block mb-1"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              DNA
            </span>
            <span
              className="text-sm md:text-base lg:text-lg font-extrabold tracking-wide text-white block leading-tight"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              COLLECTION KIT
            </span>
          </div>

          <span
            className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(211, 255, 202, 0.7)", fontFamily: "var(--font-geist-sans)" }}
          >
            Simple &bull; Safe &bull; Accurate
          </span>
        </div>

        {/* Top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Test tube */}
      <motion.div
        className="absolute -bottom-3 -right-2 md:-bottom-4 md:-right-3"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: -35 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <svg viewBox="0 0 24 100" className="w-5 md:w-6 h-auto" aria-hidden="true">
          <defs>
            <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E0E0E0" />
              <stop offset="30%" stopColor="#FAFAFA" />
              <stop offset="70%" stopColor="#F5F5F5" />
              <stop offset="100%" stopColor="#BDBDBD" />
            </linearGradient>
            <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C8E6C9" />
              <stop offset="100%" stopColor="#81C784" />
            </linearGradient>
          </defs>

          {/* Green cap */}
          <rect x="5" y="0" width="14" height="12" rx="3" fill="#16852E" />
          <rect x="5" y="0" width="14" height="4" rx="2" fill="#39A935" opacity="0.6" />

          {/* Tube body */}
          <rect x="7" y="12" width="10" height="70" rx="5" fill="url(#tubeGrad)" stroke="#BDBDBD" strokeWidth="0.5" />

          {/* Liquid */}
          <rect x="8" y="50" width="8" height="30" rx="4" fill="url(#liquidGrad)" opacity="0.7" />

          {/* Bottom cap */}
          <ellipse cx="12" cy="82" rx="5" ry="2" fill="#BDBDBD" />

          {/* Tube highlight */}
          <rect x="9" y="14" width="2" height="65" rx="1" fill="white" opacity="0.3" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
