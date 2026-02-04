"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import NetworkAnimation from "./NetworkAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-deep">
        <div className="absolute inset-0 grid-pattern" />
        <NetworkAnimation />
        {/* Gradient overlays - deeper, more atmospheric */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-bright/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coral-bright/5 rounded-full blur-[200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-border-subtle mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-bright animate-pulse" />
            <span className="text-text-secondary text-sm font-medium tracking-wide">
              AI Systems Consulting
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Transform Chaotic Operations Into{" "}
            <span className="gradient-text">Intelligent Systems</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I help businesses find where information comes in, where it goes,
            and where it breaks. Then I fix it with strategic AI automation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://tally.so/r/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 w-full sm:w-auto"
            >
              Get Your Systems Blueprint
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-bg-surface hover:bg-bg-elevated border border-border-subtle hover:border-cyan-bright/30 text-text-primary font-medium rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              <Play size={16} className="text-cyan-bright" />
              See How It Works
            </a>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border-subtle"
          >
            <p className="text-text-muted text-sm font-medium tracking-wide">
              Systems-first approach to AI automation since 2022
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
