"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, TrendingUp, Shield } from "lucide-react";

const credentials = [
  {
    icon: Sparkles,
    stat: "Since 2022",
    label: "Working with AI",
    description: "Before ChatGPT went mainstream, I was already building AI-powered solutions",
  },
  {
    icon: Target,
    stat: "Systems-First",
    label: "Methodology",
    description: "Every project starts with understanding your unique information flow",
  },
  {
    icon: TrendingUp,
    stat: "ROI Focused",
    label: "Results",
    description: "Automation investments that pay for themselves within weeks, not years",
  },
  {
    icon: Shield,
    stat: "No Lock-In",
    label: "Ownership",
    description: "You own everything I build. Full documentation, full control, always",
  },
];

export default function CredibilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-deep">
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[128px] -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-secondary text-sm font-medium tracking-wider uppercase mb-4"
            >
              Why Work With Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              Not Another{" "}
              <span className="text-primary">"AI Consultant"</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-text-muted text-lg leading-relaxed"
            >
              <p>
                I don't sell you on AI hype. I find the actual problems in your
                business operations and fix them—sometimes with AI, sometimes
                with simpler solutions.
              </p>
              <p>
                My approach is diagnostic. Before I recommend any solution, I
                understand your systems completely. That's why clients trust me
                to handle their most critical workflows.
              </p>
            </motion.div>

          </div>

          {/* Right - Credentials grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-bg-surface border border-border hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <cred.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-1">
                  {cred.stat}
                </p>
                <p className="text-text-muted text-sm font-medium mb-2">
                  {cred.label}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {cred.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
