"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { ArtSection } from "./components/ArtSection";
import { Footer } from "./components/Footer";
import { artData } from "./data/artData";

export default function Home() {
  const [activeSection, setActiveSection] = useState("visual");

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          {activeSection === "visual" && (
            <ArtSection title="Visual Arts" items={artData.visualArts} />
          )}

          {activeSection === "performing" && (
            <ArtSection title="Performing Arts" items={artData.performingArts} />
          )}

          {activeSection === "literary" && (
            <ArtSection title="Literary Arts" items={artData.literaryArts} />
          )}
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}
