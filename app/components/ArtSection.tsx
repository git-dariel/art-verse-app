import { motion } from "framer-motion";
import { ArtCard } from "./ArtCard";

interface ArtItem {
  title: string;
  creator: string;
  description: string;
  image: string;
  reference: string;
}

interface ArtSectionProps {
  title: string;
  items: ArtItem[];
}

export function ArtSection({ title, items }: ArtSectionProps) {
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
          <ArtCard key={art.title} {...art} index={index} />
        ))}
      </motion.div>
    </>
  );
}
