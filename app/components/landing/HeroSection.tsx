"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative container mx-auto px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-600/10 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-400">Discover the Future of Art</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Where Art Meets
          <br /> Digital Innovation
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Immerse yourself in a curated collection of masterpieces, brought to life through
          cutting-edge technology and interactive experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/gallery"
            className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-all"
          >
            Explore Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg text-lg font-semibold border border-purple-600/50 text-purple-400 hover:bg-purple-600/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
