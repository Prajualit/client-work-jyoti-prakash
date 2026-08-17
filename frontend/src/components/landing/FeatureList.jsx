"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: ["Understand", "Your Genes"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M7 2C7 6 10 8 12 8C14 8 17 6 17 2" />
        <path d="M7 22C7 18 10 16 12 16C14 16 17 18 17 22" />
        <path d="M7 7L17 7" />
        <path d="M7 12L17 12" />
        <path d="M7 17L17 17" />
        <circle cx="7" cy="4" r="1.5" fill="white" stroke="none" />
        <circle cx="17" cy="4" r="1.5" fill="white" stroke="none" />
        <circle cx="7" cy="20" r="1.5" fill="white" stroke="none" />
        <circle cx="17" cy="20" r="1.5" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    title: ["Personalized", "Nutrition"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 3C8 3 5 6 5 10C5 14 8 18 12 21C16 18 19 14 19 10C19 6 16 3 12 3Z" />
        <path d="M12 10C12 10 9 13 9 15C9 17 10.5 18 12 18C13.5 18 15 17 15 15C15 13 12 10 12 10Z" fill="white" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: ["Transform", "Your Health"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="5" r="3" />
        <path d="M6 21V19C6 16.8 8.7 15 12 15C15.3 15 18 16.8 18 19V21" />
        <path d="M12 8V12" />
        <path d="M10 10L12 8L14 10" />
      </svg>
    ),
  },
  {
    title: ["Live Right", "Feel Right"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 21C12 21 4 14 4 9C4 6 6.5 3.5 9 3.5C10.5 3.5 11.5 4.2 12 5C12.5 4.2 13.5 3.5 15 3.5C17.5 3.5 20 6 20 9C20 14 12 21 12 21Z" fill="white" opacity="0.2" />
        <path d="M3 13L7 13L9 10L11 16L13 12L15 14L21 14" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function FeatureList() {
  return (
    <motion.div
      className="flex flex-col gap-0"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } },
      }}
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          className="flex flex-col"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 py-4">
            <div
              className="w-[52px] h-[52px] md:w-[58px] md:h-[58px] lg:w-[62px] lg:h-[62px] rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #16852E, #075B32)",
                boxShadow: "0 4px 12px rgba(22, 133, 46, 0.25)",
              }}
            >
              {feature.icon}
            </div>
            <div className="flex flex-col">
              {feature.title.map((line, j) => (
                <span
                  key={j}
                  className="text-[13px] md:text-sm lg:text-[15px] font-bold leading-tight"
                  style={{ color: "#123B25", fontFamily: "var(--font-geist-sans)" }}
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
          {i < features.length - 1 && (
            <div className="h-[1px] bg-gradient-to-r from-[#16852E]/20 to-transparent" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
