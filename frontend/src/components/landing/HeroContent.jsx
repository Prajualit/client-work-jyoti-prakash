"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col max-w-[560px] lg:max-w-[620px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
    >
      <h1
        className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[3rem] font-extrabold leading-[1.15] mb-5"
        style={{ color: "#123B25", fontFamily: "var(--font-geist-sans)" }}
      >
        Understand Your Genes.
        <br />
        <span style={{ color: "#16852E" }}>Transform Your Health.</span>
      </h1>

      <p
        className="text-base md:text-lg leading-relaxed mb-8 max-w-[480px]"
        style={{ color: "#3D6B4E", fontFamily: "var(--font-geist-sans)" }}
      >
        Discover how your unique genetic profile can guide personalized nutrition
        and healthier lifestyle choices.
      </p>

      <div className="flex items-center gap-4 flex-wrap">
        <Link href="/booking">
          <motion.button
            className="px-7 py-3.5 rounded-full text-white font-semibold text-sm md:text-base tracking-wide cursor-pointer border-0"
            style={{
              background: "linear-gradient(135deg, #16852E, #075B32)",
              fontFamily: "var(--font-geist-sans)",
              boxShadow: "0 4px 16px rgba(7, 91, 50, 0.3)",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 6px 24px rgba(7, 91, 50, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            id="discover-wellness-btn"
          >
            Book a session
          </motion.button>
        </Link>

        <Link href="/nutrition">
          <motion.span
            className="px-6 py-3 rounded-full font-semibold text-sm md:text-base tracking-wide cursor-pointer inline-flex items-center gap-2"
            style={{
              color: "#16852E",
              border: "2px solid #16852E",
              fontFamily: "var(--font-geist-sans)",
              background: "transparent",
            }}
            whileHover={{
              backgroundColor: "rgba(22, 133, 46, 0.06)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8H13M10 5L13 8L10 11" />
            </svg>
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}
