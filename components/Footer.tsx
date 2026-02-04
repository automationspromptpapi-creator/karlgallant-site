"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/karlgallant",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/karlgallant",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:hello@karlgallant.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative py-16 lg:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight mb-4"
            >
              <span className="text-text">Karl</span>
              <span className="gradient-text"> Gallant</span>
            </a>
            <p className="text-text-muted max-w-sm mb-6">
              AI systems consulting for businesses ready to transform chaotic
              operations into intelligent, automated workflows.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-bg-surface border border-border hover:border-primary/50 flex items-center justify-center text-text-muted hover:text-text transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-text-muted">
              <li>
                <a
                  href="mailto:hello@karlgallant.com"
                  className="hover:text-text transition-colors duration-200"
                >
                  hello@karlgallant.com
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/karlgallant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors duration-200"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; 2025 Karl Gallant. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Transforming operations with intelligent systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
