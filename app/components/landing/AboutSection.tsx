"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Interactive Experience",
    description: "Engage with art through modern technology and interactive features",
  },
  {
    title: "Curated Collection",
    description: "Carefully selected artworks from various periods and styles",
  },
  {
    title: "Digital Innovation",
    description: "Pushing boundaries with AI-enhanced art appreciation",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            About ArtVerse
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            ArtVerse is a revolutionary platform that bridges the gap between traditional art
            appreciation and modern technology. We believe in making art more accessible,
            interactive, and engaging through cutting-edge digital experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-600/20"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
