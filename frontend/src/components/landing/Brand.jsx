"use client";

import { motion } from "framer-motion";

function WellnessLogo() {
  return (
    <svg viewBox="0 0 60 60" className="w-14 h-14 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px]" aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16852E" />
          <stop offset="100%" stopColor="#075B32" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="28" fill="none" stroke="url(#logoGrad)" strokeWidth="2" />
      <circle cx="30" cy="30" r="24" fill="none" stroke="#16852E" strokeWidth="0.5" opacity="0.3" />
      {/* Person silhouette */}
      <circle cx="30" cy="20" r="5" fill="#075B32" />
      <path
        d="M22 32 C22 26 26 23 30 23 C34 23 38 26 38 32 L38 36 C38 37 37 38 36 38 L24 38 C23 38 22 37 22 36Z"
        fill="#075B32"
      />
      {/* Leaf */}
      <path
        d="M38 18 C42 14, 48 14, 48 20 C48 26, 42 28, 38 24"
        fill="#39A935"
        opacity="0.9"
      />
      <path
        d="M39 19 C42 16, 46 17, 46 21"
        stroke="#FFFDF5"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
      {/* Circular motion arrows */}
      <path
        d="M30 6 C46 6 54 18 54 30"
        stroke="#16852E"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path d="M52 8 L54 6 L56 10" stroke="#16852E" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" />
      <path
        d="M30 54 C14 54 6 42 6 30"
        stroke="#16852E"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path d="M8 52 L6 54 L4 50" stroke="#16852E" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Brand() {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-start gap-3">
        <WellnessLogo />
        <div className="flex flex-col leading-none">
          <span
            className="text-sm md:text-base font-light tracking-wide"
            style={{ color: "#123B25", fontFamily: "var(--font-geist-sans)" }}
          >
            The
          </span>
          <span
            className="text-2xl md:text-3xl lg:text-[2.1rem] font-extrabold tracking-tight leading-none"
            style={{ color: "#075B32", fontFamily: "var(--font-geist-sans)" }}
          >
            WELLNESS
          </span>
          <span
            className="text-2xl md:text-3xl lg:text-[2.1rem] font-extrabold tracking-tight leading-none"
            style={{ color: "#39A935", fontFamily: "var(--font-geist-sans)" }}
          >
            SPOT
          </span>
        </div>
      </div>

      {/* Tagline */}
      <div className="flex items-center gap-2 mt-3 ml-1">
        {["Eat Right", "Live Right", "Feel Right"].map((text, i) => (
          <span key={text} className="flex items-center gap-2">
            <span
              className="text-[11px] md:text-xs font-semibold tracking-wide"
              style={{ color: "#123B25", fontFamily: "var(--font-geist-sans)" }}
            >
              {text}
            </span>
            {i < 2 && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#39A935] flex-shrink-0" aria-hidden="true" />
            )}
          </span>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        className="mt-3 h-[2px] bg-gradient-to-r from-[#16852E] via-[#39A935] to-transparent rounded-full"
        style={{ width: "180px" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  );
}
