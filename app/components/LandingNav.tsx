"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function LandingNav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            ArtVerse
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
              Gallery
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
