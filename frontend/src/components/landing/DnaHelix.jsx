"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dnaHelixImg from "@/app/assets/landing/dna.png";

export default function DnaHelix() {
  return (
    <motion.div
      className="relative w-[80px] md:w-[100px] lg:w-[120px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      aria-hidden="true"
    >
      <Image
        src={dnaHelixImg}
        alt="DNA Helix"
        width={120}
        height={520}
        className="w-full h-auto"
      />

      {/* Top fade into background */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #FFFDF5 0%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}
