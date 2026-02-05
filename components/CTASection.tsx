"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, FileText } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-surface to-bg-deep">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute inset-20 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Ready to Fix Your{" "}
            <span className="gradient-text">Broken Systems?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-muted text-lg max-w-2xl mx-auto mb-12"
          >
            Stop losing time to inefficient workflows. Let's map your systems,
            find the bottlenecks, and build a roadmap to automation.
          </motion.p>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Primary CTA - Book a Call */}
            <motion.a
              href="https://cal.com/karlgallant"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-1"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
                  Book a Discovery Call
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Free 30-minute call to discuss your operations and see if
                  we're a good fit.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Schedule Now
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </motion.a>

            {/* Secondary CTA - Systems Blueprint */}
            <motion.a
              href="https://tally.so/r/Npp7PO"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative p-8 rounded-2xl bg-bg-surface border border-border card-hover overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
                  Get the Systems Blueprint
                </h3>
                <p className="text-text-muted text-sm mb-6">
                  $150 diagnostic that maps your operations and identifies
                  automation opportunities.
                </p>
                <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </motion.a>
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-text-muted text-sm"
          >
            Not sure which option? Book the free call first—no pressure, just
            clarity.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
