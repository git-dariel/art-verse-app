import { motion } from "framer-motion";
import { GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: <GithubIcon size={20} />, href: "#", label: "GitHub" },
    { icon: <TwitterIcon size={20} />, href: "#", label: "Twitter" },
    { icon: <InstagramIcon size={20} />, href: "#", label: "Instagram" },
    { icon: <LinkedinIcon size={20} />, href: "#", label: "LinkedIn" },
  ];

  const artInstitutions = {
    museums: [
      { name: "Museum of Modern Art (MoMA)", location: "New York, USA" },
      { name: "The Louvre Museum", location: "Paris, France" },
      { name: "The Metropolitan Museum of Art", location: "New York, USA" },
      { name: "State Hermitage Museum", location: "St. Petersburg, Russia" },
    ],
    performingArts: [
      { name: "Bolshoi Theatre", location: "Moscow, Russia" },
      { name: "Royal Opera House", location: "London, UK" },
      { name: "Sydney Opera House", location: "Sydney, Australia" },
      { name: "La Scala", location: "Milan, Italy" },
    ],
    literaryArts: [
      { name: "The British Library", location: "London, UK" },
      { name: "Library of Congress", location: "Washington, D.C., USA" },
      { name: "National Library of France", location: "Paris, France" },
      { name: "Vatican Library", location: "Vatican City" },
    ],
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-20 pt-12 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            whileHover={{ scale: 1.05 }}
          >
            ArtVerse
          </motion.h2>
          <p className="text-sm text-gray-400">
            Exploring the world's most iconic works of visual, performing, and literary arts in a
            modern digital showcase.
          </p>
        </div>

        {/* Visual & Performing Arts References */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Visual Arts References</h3>
            <ul className="space-y-2">
              {artInstitutions.museums.map((museum) => (
                <li
                  key={museum.name}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="font-medium">{museum.name}</span>
                  <span className="block text-xs text-gray-500">{museum.location}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Performing Arts References</h3>
            <ul className="space-y-2">
              {artInstitutions.performingArts.map((venue) => (
                <li
                  key={venue.name}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="font-medium">{venue.name}</span>
                  <span className="block text-xs text-gray-500">{venue.location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Literary Arts References */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Literary Arts References</h3>
            <ul className="space-y-2">
              {artInstitutions.literaryArts.map((library) => (
                <li
                  key={library.name}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <span className="font-medium">{library.name}</span>
                  <span className="block text-xs text-gray-500">{library.location}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
            <p className="text-sm text-gray-400">
              Our content is sourced from various academic publications, art history resources, and
              cultural institutions worldwide. All images are credited to their respective owners
              and institutions.
            </p>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <p className="text-sm text-gray-400">
            Stay updated with our latest art collections and events. Follow us on social media for
            exclusive content and behind-the-scenes insights.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
