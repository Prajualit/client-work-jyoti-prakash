"use client";

import { motion } from "framer-motion";


const checkItems = [
  "Personalized Diet",
  "Balanced Nutrition",
  "Better Health",
  "Healthy Lifestyle",
];

export default function NutritionPlan() {
  return (
    <motion.div
      className="relative flex flex-col gap-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >

      {/* Nutrition Plan card */}
      <motion.div
        className="bg-white rounded-xl p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E8F5E9] max-w-[220px] md:max-w-[250px]"
        style={{ transform: "rotate(-2deg)" }}
        whileHover={{ rotate: 0, y: -2 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" aria-hidden="true">
            <rect x="2" y="1" width="16" height="18" rx="2" stroke="#075B32" strokeWidth="1.5" fill="none" />
            <line x1="6" y1="6" x2="14" y2="6" stroke="#075B32" strokeWidth="1" opacity="0.5" />
            <line x1="6" y1="9" x2="14" y2="9" stroke="#075B32" strokeWidth="1" opacity="0.5" />
            <line x1="6" y1="12" x2="14" y2="12" stroke="#075B32" strokeWidth="1" opacity="0.5" />
            <line x1="6" y1="15" x2="11" y2="15" stroke="#075B32" strokeWidth="1" opacity="0.5" />
          </svg>
          <span
            className="text-[11px] md:text-xs font-bold tracking-wider uppercase"
            style={{ color: "#075B32", fontFamily: "var(--font-geist-sans)" }}
          >
            Nutrition Plan
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {checkItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="#E8F5E9" />
                <path d="M5 8L7 10L11 6" stroke="#16852E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                className="text-[11px] md:text-xs font-medium"
                style={{ color: "#3D6B4E", fontFamily: "var(--font-geist-sans)" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
