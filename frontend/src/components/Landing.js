"use client";

import { motion } from "framer-motion";
import Brand from "./landing/Brand";
import DnaHelix from "./landing/DnaHelix";
import HeroContent from "./landing/HeroContent";
import FeatureList from "./landing/FeatureList";
import NutritionPlan from "./landing/NutritionPlan";
import MeasuringTape from "./landing/MeasuringTape";
import DnaTestReport from "./landing/DnaTestReport";
import DnaCollectionKit from "./landing/DnaCollectionKit";

export default function Landing() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Main hero content layer */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-24 md:pt-28 lg:pt-32 pb-8">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(180px,380px)_1fr_minmax(180px,280px)] gap-6 lg:gap-8 xl:gap-12 items-start">

          {/* LEFT: Brand + DNA Helix */}
          <div className="flex flex-col items-start gap-6 lg:gap-8">
            <Brand />
            <div className="hidden md:flex justify-center lg:justify-start mt-4 lg:mt-8">
              <DnaHelix />
            </div>
          </div>

          {/* CENTER: Hero Content + Visual Composition */}
          <div className="flex flex-col">
            <div className="pt-8 md:pt-12 lg:pt-20 xl:pt-24">
              <HeroContent />
            </div>

            {/* Visual composition - directly below CTAs */}
            <motion.div
              className="relative pt-10 md:pt-12 lg:pt-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-end justify-start gap-4 md:gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                  <NutritionPlan />
                </div>

                <div className="hidden md:block flex-shrink-0">
                  <DnaTestReport />
                </div>

                <div className="flex-shrink-0">
                  <DnaCollectionKit />
                </div>
              </div>

              {/* Measuring tape - overlaps across elements */}
              <div className="hidden sm:block absolute  left-[20%] right-[15%] z-10">
                <MeasuringTape />
              </div>
            </motion.div>

            {/* Mobile-only stacked layout */}
            <div className="sm:hidden flex flex-col items-center gap-6 pt-8">
              <NutritionPlan />
              <DnaTestReport />
              <DnaCollectionKit />
            </div>
          </div>

          {/* RIGHT: Feature List */}
          <div className="flex items-start justify-center lg:justify-end pt-4 md:pt-8 lg:pt-16">
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
}
