"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, Square } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ArtModalProps {
  isOpen: boolean;
  onClose: () => void;
  art: {
    title: string;
    creator: string;
    description: string;
    image: string;
    reference: string;
    complete_description?: string;
  } | null;
}

export function ArtModal({ isOpen, onClose, art }: ArtModalProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!art) return null;

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      if (isSpeaking) {
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Clean up speech when modal closes
  const handleClose = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[201] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-900/20 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10 text-white/90 hover:text-white"
                >
                  <X size={24} />
                </button>

                {/* Image Section */}
                <div className="relative h-[60vh]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-[1]" />
                  <Image
                    src={art.image}
                    alt={art.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-[2]">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                      {art.title}
                    </h2>
                    <p className="text-xl text-gray-300">{art.creator}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-900/20 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Main Description */}
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {art.description}
                      </p>

                      {/* Complete Description */}
                      {art.complete_description && (
                        <div className="mt-8 space-y-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-2">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                              About the Artwork
                            </h3>
                            <button
                              onClick={() => speak(art.complete_description || "")}
                              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors text-white text-sm sm:text-base w-full sm:w-auto"
                            >
                              {isSpeaking ? (
                                <Square size={16} className="sm:w-5 sm:h-5" />
                              ) : (
                                <Volume2 size={16} className="sm:w-5 sm:h-5" />
                              )}
                              {isSpeaking ? "Stop" : "Listen"}
                            </button>
                          </div>
                          <div className="text-gray-300 space-y-4">
                            {art.complete_description.split("\n\n").map((paragraph, index) => (
                              <p key={index} className="leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Reference */}
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-sm text-gray-400">
                          <span className="font-semibold">Source:</span> {art.reference}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
