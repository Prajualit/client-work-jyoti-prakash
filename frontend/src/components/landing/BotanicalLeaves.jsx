"use client";

import { motion } from "framer-motion";

function Leaf1({ className, style }) {
  return (
    <svg viewBox="0 0 80 120" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="leaf1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39A935" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#16852E" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        d="M40 5 C20 20, 5 50, 10 85 C15 100, 30 110, 40 115 C50 110, 65 100, 70 85 C75 50, 60 20, 40 5Z"
        fill="url(#leaf1Grad)"
      />
      <path
        d="M40 15 L40 105"
        stroke="#0F6B2A"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path d="M40 30 L25 45" stroke="#0F6B2A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M40 30 L55 45" stroke="#0F6B2A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M40 50 L20 65" stroke="#0F6B2A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M40 50 L60 65" stroke="#0F6B2A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M40 70 L25 82" stroke="#0F6B2A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M40 70 L55 82" stroke="#0F6B2A" strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  );
}

function Leaf2({ className, style }) {
  return (
    <svg viewBox="0 0 100 60" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="leaf2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16852E" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#39A935" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M5 30 C15 5, 40 0, 50 2 C60 0, 85 5, 95 30 C85 55, 60 60, 50 58 C40 60, 15 55, 5 30Z"
        fill="url(#leaf2Grad)"
      />
      <path d="M10 30 L90 30" stroke="#0F6B2A" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M30 30 L22 15" stroke="#0F6B2A" strokeWidth="0.6" fill="none" opacity="0.3" />
      <path d="M30 30 L22 45" stroke="#0F6B2A" strokeWidth="0.6" fill="none" opacity="0.3" />
      <path d="M50 30 L45 12" stroke="#0F6B2A" strokeWidth="0.6" fill="none" opacity="0.3" />
      <path d="M50 30 L45 48" stroke="#0F6B2A" strokeWidth="0.6" fill="none" opacity="0.3" />
      <path d="M70 30 L65 15" stroke="#0F6B2A" strokeWidth="0.6" fill="none" opacity="0.3" />
      <path d="M70 30 L65 45" stroke="#0F6B2A" strokeWidth="0.6" fill="none" opacity="0.3" />
    </svg>
  );
}

function Leaf3({ className, style }) {
  return (
    <svg viewBox="0 0 60 90" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="leaf3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DDEFC5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#39A935" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M30 5 C15 15, 5 35, 8 60 C10 75, 20 85, 30 88 C40 85, 50 75, 52 60 C55 35, 45 15, 30 5Z"
        fill="url(#leaf3Grad)"
      />
      <path d="M30 12 L30 82" stroke="#16852E" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

export default function BotanicalLeaves() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top-right leaves */}
      <motion.div
        className="absolute -top-4 -right-4 md:top-2 md:right-4 lg:right-12"
        animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf1 className="w-20 md:w-28 lg:w-36 h-auto opacity-70" style={{ transform: "rotate(-25deg)" }} />
      </motion.div>

      <motion.div
        className="absolute top-10 -right-8 md:top-16 md:right-0 lg:top-8 lg:right-8"
        animate={{ y: [0, 4, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Leaf2 className="w-16 md:w-24 lg:w-32 h-auto opacity-50" style={{ transform: "rotate(15deg)" }} />
      </motion.div>

      <motion.div
        className="absolute -top-6 right-16 md:top-0 md:right-28 lg:-top-2 lg:right-40"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Leaf3 className="w-12 md:w-16 lg:w-20 h-auto opacity-60" style={{ transform: "rotate(-45deg) scaleX(-1)" }} />
      </motion.div>

      {/* Top-left subtle leaf */}
      <motion.div
        className="absolute -top-8 -left-6 md:-top-4 md:left-2 lg:left-8"
        animate={{ y: [0, 5, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Leaf2 className="w-14 md:w-20 lg:w-28 h-auto opacity-30" style={{ transform: "rotate(-60deg)" }} />
      </motion.div>

      {/* Bottom-left leaves */}
      <motion.div
        className="absolute bottom-48 -left-8 md:bottom-52 md:left-0 lg:bottom-48 lg:left-4"
        animate={{ y: [0, -3, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Leaf1 className="w-16 md:w-22 lg:w-28 h-auto opacity-50" style={{ transform: "rotate(30deg) scaleX(-1)" }} />
      </motion.div>

      {/* Bottom-right leaves */}
      <motion.div
        className="absolute bottom-52 -right-6 md:bottom-56 md:right-2 lg:bottom-52 lg:right-12"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <Leaf3 className="w-14 md:w-18 lg:w-24 h-auto opacity-40" style={{ transform: "rotate(40deg)" }} />
      </motion.div>

      <motion.div
        className="absolute bottom-60 right-8 md:bottom-64 md:right-20 lg:bottom-60 lg:right-32"
        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Leaf2 className="w-10 md:w-16 lg:w-20 h-auto opacity-30" style={{ transform: "rotate(70deg)" }} />
      </motion.div>
    </div>
  );
}
