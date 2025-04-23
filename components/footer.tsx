"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import dynamic from "next/dynamic";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200 py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Contact & Social */}
          <div className="space-y-4">
            <motion.h3
              className="text-white text-xl font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h3>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </motion.a>
            </motion.div>
            <motion.p
              className="text-gray-400 pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:your.email@example.com"
                className="hover:text-white transition-colors duration-300"
              >
                your.email@example.com
              </a>
            </motion.p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p className="mt-1">Built with Next.js and Tailwind CSS</p>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 bg-gray-900 text-white p-3 rounded-full shadow-lg z-50 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
