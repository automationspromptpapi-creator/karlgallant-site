"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Map, Zap, Brain } from "lucide-react";

const solutions = [
  {
    icon: Map,
    title: "Systems Mapping",
    description:
      "I visualize exactly where information flows in your business. Every input, every handoff, every decision point—mapped and documented.",
    highlight: "See your operations clearly",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Eliminate the manual work that's eating your team's time. Smart automations that handle the repetitive tasks while your people focus on what matters.",
    highlight: "Reclaim lost hours",
  },
  {
    icon: Brain,
    title: "Strategic AI Integration",
    description:
      "Not AI for AI's sake. Strategic automation where it actually makes sense—decisions backed by data and implemented with precision.",
    highlight: "AI that actually works",
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-deep">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[128px]" />
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
            The Solution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            A Systems-First Approach to{" "}
            <span className="gradient-text">AI Automation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            Before adding any automation, I understand your systems completely.
            Then I implement solutions that actually solve your problems.
          </motion.p>
        </div>

        {/* Solution Cards - Stacked layout */}
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 p-8 lg:p-10 rounded-2xl bg-bg-surface border border-border card-hover">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <solution.icon className="w-8 h-8 text-text" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                      {solution.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
                      {solution.highlight}
                    </span>
                  </div>
                  <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
                    {solution.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden lg:block flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary/50 flex items-center justify-center group-hover:bg-primary/5 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
