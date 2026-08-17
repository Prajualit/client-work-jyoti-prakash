"use client";

import { motion } from "framer-motion";

export default function WaveBackground() {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden" aria-hidden="true" style={{ height: "45%" }}>
      {/* Wave 3 - backmost, most transparent */}
      <motion.svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <defs>
          <linearGradient id="wave3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DDEFC5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F3F9E8" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 C240,120 480,280 720,200 C960,120 1200,260 1440,180 L1440,320 L0,320Z"
          fill="url(#wave3Grad)"
        />
      </motion.svg>

      {/* Wave 2 - middle */}
      <motion.svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "80%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <defs>
          <linearGradient id="wave2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DDEFC5" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F3F9E8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M0,220 C360,140 720,280 1080,180 C1260,130 1380,200 1440,220 L1440,320 L0,320Z"
          fill="url(#wave2Grad)"
        />
      </motion.svg>

      {/* Wave 1 - frontmost, most visible */}
      <motion.svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "65%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <defs>
          <linearGradient id="wave1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16852E" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#39A935" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#DDEFC5" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M0,240 C200,180 400,260 600,220 C800,180 1000,240 1200,200 C1320,180 1400,220 1440,240 L1440,320 L0,320Z"
          fill="url(#wave1Grad)"
        />
      </motion.svg>

      {/* Subtle inner glow wave */}
      <motion.svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "45%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <defs>
          <linearGradient id="wave0Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3F9E8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFDF5" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M0,260 C300,220 600,280 900,240 C1100,210 1300,260 1440,250 L1440,320 L0,320Z"
          fill="url(#wave0Grad)"
        />
      </motion.svg>
    </div>
  );
}
