"use client";

import { motion } from "framer-motion";
import { artData } from "@/app/data/artData";

const featuredArt = [
  artData.visualArts.find((art) => art.title === "The Starry Night"),
  artData.visualArts.find((art) => art.title === "The Mona Lisa"),
  artData.visualArts.find((art) => art.title === "Girl with a Pearl Earring"),
].filter(Boolean);

export function FeaturedArt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 relative"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      {featuredArt.map((art, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-black">
            <img
              src={art?.image}
              alt={art?.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{art?.title}</h3>
              <p className="text-sm text-gray-300">{art?.creator}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
