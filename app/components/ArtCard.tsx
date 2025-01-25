"use client";

import { motion } from "framer-motion";

interface ArtCardProps {
  title: string;
  creator: string;
  description: string;
  image: string;
  reference: string;
  index: number;
  onClick: () => void;
}

export function ArtCard({
  title,
  creator,
  description,
  image,
  reference,
  index,
  onClick,
}: ArtCardProps) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="art-card group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <motion.img
          src={image}
          alt={title}
          className="art-image transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{creator}</p>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <p className="text-xs text-gray-500">Source: {reference}</p>
    </motion.div>
  );
}
