"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-space-grotesk)] text-xl lg:text-2xl font-bold tracking-tight"
          >
            <span className="text-text">Karl</span>
            <span className="gradient-text"> Gallant</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://cal.com/karlgallant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-text-muted hover:text-text transition-colors duration-200 text-base font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://cal.com/karlgallant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transition-all duration-200 mt-4"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
