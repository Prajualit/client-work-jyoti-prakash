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
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      {/* Food bowl */}
      <div className="relative mb-3">
        <svg viewBox="0 0 260 180" className="w-[200px] md:w-[240px] lg:w-[280px] h-auto" aria-label="Healthy food bowl with vegetables, berries, and nuts">
          <defs>
            <radialGradient id="bowlGrad" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#DEB887" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C4A265" stopOpacity="0.6" />
            </radialGradient>
            <radialGradient id="bowlInner" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5E6D0" />
              <stop offset="100%" stopColor="#E8D5B7" />
            </radialGradient>
          </defs>

          {/* Bowl shadow */}
          <ellipse cx="130" cy="168" rx="110" ry="10" fill="#000" opacity="0.06" />

          {/* Bowl outer */}
          <ellipse cx="130" cy="120" rx="120" ry="50" fill="url(#bowlGrad)" />
          <ellipse cx="130" cy="120" rx="115" ry="46" fill="#DEB887" opacity="0.4" />

          {/* Bowl inner */}
          <ellipse cx="130" cy="110" rx="100" ry="38" fill="url(#bowlInner)" />

          {/* Food items */}
          {/* Lettuce base */}
          <ellipse cx="100" cy="105" rx="40" ry="18" fill="#7CB342" opacity="0.8" />
          <ellipse cx="160" cy="108" rx="35" ry="15" fill="#8BC34A" opacity="0.7" />

          {/* Broccoli */}
          <circle cx="85" cy="95" r="12" fill="#558B2F" />
          <circle cx="78" cy="90" r="8" fill="#689F38" />
          <circle cx="92" cy="88" r="9" fill="#7CB342" />
          <circle cx="85" cy="85" r="7" fill="#8BC34A" />

          {/* Bell pepper (yellow) */}
          <ellipse cx="140" cy="92" rx="14" ry="12" fill="#FDD835" />
          <ellipse cx="140" cy="90" rx="10" ry="8" fill="#FFEE58" opacity="0.6" />

          {/* Tomatoes */}
          <circle cx="115" cy="88" r="9" fill="#E53935" />
          <circle cx="115" cy="87" r="6" fill="#EF5350" opacity="0.5" />
          <circle cx="170" cy="100" r="7" fill="#E53935" />

          {/* Avocado */}
          <ellipse cx="190" cy="95" rx="15" ry="12" fill="#7CB342" />
          <ellipse cx="190" cy="93" rx="10" ry="8" fill="#C0CA33" opacity="0.5" />
          <circle cx="190" cy="92" r="6" fill="#8D6E63" />

          {/* Blueberries */}
          <circle cx="100" cy="82" r="4" fill="#5C6BC0" />
          <circle cx="108" cy="78" r="3.5" fill="#3F51B5" />
          <circle cx="95" cy="79" r="3" fill="#5C6BC0" />
          <circle cx="155" cy="82" r="3.5" fill="#5C6BC0" />
          <circle cx="162" cy="79" r="3" fill="#3F51B5" />

          {/* Almonds */}
          <ellipse cx="125" cy="80" rx="4" ry="2.5" fill="#A1887F" transform="rotate(-20 125 80)" />
          <ellipse cx="132" cy="77" rx="3.5" ry="2" fill="#8D6E63" transform="rotate(15 132 77)" />
          <ellipse cx="145" cy="80" rx="4" ry="2.5" fill="#A1887F" transform="rotate(-10 145 80)" />

          {/* Bowl rim highlight */}
          <ellipse cx="130" cy="72" rx="98" ry="6" fill="white" opacity="0.15" />
        </svg>
      </div>

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
