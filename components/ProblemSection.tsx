"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Boxes, RefreshCw, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Boxes,
    title: "Information Silos",
    description:
      "Critical data trapped in disconnected tools. Your team wastes hours hunting for information that should flow automatically.",
  },
  {
    icon: RefreshCw,
    title: "Manual Repetitive Tasks",
    description:
      "Your best people spend their days on work that should be automated. Copy-paste operations, data entry, status updates.",
  },
  {
    icon: AlertTriangle,
    title: "Invisible Bottlenecks",
    description:
      "Problems you can't see until they explode. No visibility into where processes slow down or break entirely.",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface">
        <div className="absolute inset-0 dot-pattern" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-secondary text-sm font-medium tracking-wider uppercase mb-4"
          >
            The Problem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Your Business Runs on{" "}
            <span className="text-primary">Broken Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Most businesses don't have a technology problem. They have a systems
            problem. Information flows in, gets stuck, and never reaches where
            it needs to go.
          </motion.p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold mb-3">
                  {problem.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-text-muted mt-16 max-w-2xl mx-auto"
        >
          Sound familiar? These aren't just inconveniences—they're costing you
          thousands in lost productivity every month.
        </motion.p>
      </div>
    </section>
  );
}
