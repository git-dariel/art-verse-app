"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArtCard } from "./ArtCard";
import { ArtModal } from "./ArtModal";

interface ArtItem {
  title: string;
  creator: string;
  description: string;
  image: string;
  reference: string;
  complete_description?: string;
}

interface ArtSectionProps {
  title: string;
  items: ArtItem[];
}

export function ArtSection({ title, items }: ArtSectionProps) {
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtClick = (art: ArtItem) => {
    setSelectedArt(art);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArt(null);
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {items.map((art, index) => (
          <ArtCard key={art.title} {...art} index={index} onClick={() => handleArtClick(art)} />
        ))}
      </motion.div>

      <ArtModal isOpen={isModalOpen} onClose={handleCloseModal} art={selectedArt} />
    </>
  );
}
