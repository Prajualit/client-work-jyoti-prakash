"use client";

import MolecularPattern from "./MolecularPattern";
import BotanicalLeaves from "./BotanicalLeaves";
import WaveBackground from "./WaveBackground";

export default function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Warm white to pale green gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(170deg, #FFFDF5 0%, #FFFDF5 40%, #F3F9E8 70%, #EAF5D8 100%)`,
        }}
      />

      {/* Subtle radial highlight in center */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 45% 45%, rgba(211, 239, 197, 0.2) 0%, transparent 70%)`,
        }}
      />

      {/* Molecular pattern */}
      <MolecularPattern />

      {/* Botanical leaves */}
      <BotanicalLeaves />

      {/* Wave background at bottom */}
      <WaveBackground />
    </div>
  );
}
