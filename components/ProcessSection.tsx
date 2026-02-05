"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, GitBranch, Route } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "A focused 60-minute deep dive into your operations. We map out your current workflows, identify pain points, and uncover hidden inefficiencies.",
    duration: "60 minutes",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Systems Mapping",
    description:
      "I create a visual documentation of your entire information flow. You'll see exactly where data enters, moves, and where bottlenecks exist.",
    duration: "Visual deliverable",
  },
  {
    number: "03",
    icon: Route,
    title: "Strategic Roadmap",
    description:
      "A prioritized list of automation opportunities ranked by impact and effort. You'll know exactly what to fix first and why.",
    duration: "Actionable plan",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-surface">
        <div className="absolute inset-0 grid-pattern opacity-30" />
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
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            How the <span className="gradient-text">Systems Blueprint</span>{" "}
            Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-lg"
          >
            A diagnostic that reveals exactly where your business is bleeding
            time and money—and shows you how to fix it.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative p-8 rounded-2xl bg-bg-deep border border-border card-hover h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-bg-surface text-text-muted text-sm">
                    {step.duration}
                  </span>
                </div>

                {/* Connector arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 w-12 items-center justify-center -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.15 }}
                      className="w-8 h-8 rounded-full bg-bg-surface border border-border flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-primary"
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
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Price CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/20">
            <p className="text-text-muted mb-2">Investment</p>
            <p className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold mb-2">
              <span className="gradient-text">$150</span>
            </p>
            <p className="text-text-muted text-sm mb-6">
              One-time diagnostic that pays for itself
            </p>
            <a
              href="https://tally.so/r/Npp7PO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get Your Systems Blueprint
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
