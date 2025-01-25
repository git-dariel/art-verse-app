"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Github, Linkedin, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Have questions or suggestions? We&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-600/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:dariel.v.avila@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>dariel.v.avila@gmail.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Just Message Me🫡</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-600/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Us</h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/git-dariel"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/darielavila/"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/_darielavila/"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/dariel.avila.129"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
