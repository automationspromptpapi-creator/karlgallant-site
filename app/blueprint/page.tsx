"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  Map,
  FileText,
  MessageSquare,
  Zap,
  AlertTriangle,
  Target,
  ChevronDown,
  Shield,
} from "lucide-react";

// Reusable section wrapper with scroll animation
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// FAQ Item component
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-[family-name:var(--font-heading)] text-lg font-medium pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-text-muted leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

import { useState } from "react";

export default function BlueprintPage() {
  return (
    <>
      {/* Simple Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/90 backdrop-blur-xl border-b border-border-subtle">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-bold tracking-tight"
            >
              <span className="text-text-primary">Karl</span>
              <span className="gradient-text-coral"> Gallant</span>
            </Link>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              Get Your Blueprint
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-bg-deep">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-border-subtle mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-text-secondary text-sm font-medium">
                Limited Availability
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Finally See{" "}
              <span className="gradient-text">Exactly Where</span> Your
              Business Is Bleeding Time and Money
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-2xl mx-auto mb-10"
            >
              Get a complete visual map of your operations and a prioritized
              roadmap showing you exactly what to automate first—and why.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 w-full sm:w-auto"
              >
                Get Your Systems Blueprint — $150
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-text-muted text-sm"
            >
              60-minute call + visual map + prioritized roadmap
            </motion.p>
          </div>
        </section>

        {/* PROBLEM AGITATION */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-surface">
            <div className="absolute inset-0 dot-pattern" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                You Know Something Is{" "}
                <span className="text-primary">Broken</span>
              </h2>
              <p className="text-xl text-text-secondary">
                You just can&apos;t see exactly what—or where.
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection
                delay={0.1}
                className="p-6 lg:p-8 rounded-2xl bg-bg-deep border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
                      Your team wastes hours every week on manual busywork
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Copy-pasting data between tools. Manually updating
                      spreadsheets. Sending the same emails over and over.
                      You&apos;re paying skilled people to do work a robot could
                      handle in seconds.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={0.2}
                className="p-6 lg:p-8 rounded-2xl bg-bg-deep border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
                      Important things slip through the cracks
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Leads go cold because nobody followed up. Orders get
                      delayed because information didn&apos;t reach the right
                      person. You only find out about problems when customers
                      complain.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={0.3}
                className="p-6 lg:p-8 rounded-2xl bg-bg-deep border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
                      You&apos;ve tried to &quot;fix&quot; things before
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      New tools. New processes. Maybe even an expensive software
                      implementation that never got adopted. The problems didn&apos;t
                      go away—they just moved somewhere else.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.4} className="mt-12 text-center">
              <p className="text-xl text-text-secondary">
                The real issue?{" "}
                <span className="text-text-primary font-medium">
                  You can&apos;t fix what you can&apos;t see.
                </span>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* WHAT IF SECTION */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-deep">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[128px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Imagine If You Could{" "}
                <span className="gradient-text">See Everything</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection
                delay={0.1}
                className="p-6 rounded-xl bg-bg-surface border border-secondary/20"
              >
                <Check className="w-8 h-8 text-secondary mb-4" />
                <p className="text-text-primary font-medium">
                  A visual map showing exactly how information flows through
                  your entire business
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.15}
                className="p-6 rounded-xl bg-bg-surface border border-secondary/20"
              >
                <Check className="w-8 h-8 text-secondary mb-4" />
                <p className="text-text-primary font-medium">
                  Every bottleneck, handoff point, and broken process
                  highlighted in plain sight
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.2}
                className="p-6 rounded-xl bg-bg-surface border border-secondary/20"
              >
                <Check className="w-8 h-8 text-secondary mb-4" />
                <p className="text-text-primary font-medium">
                  A prioritized list of what to fix first—based on impact, not
                  guesswork
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.25}
                className="p-6 rounded-xl bg-bg-surface border border-secondary/20"
              >
                <Check className="w-8 h-8 text-secondary mb-4" />
                <p className="text-text-primary font-medium">
                  Clear ROI estimates so you know exactly which automations pay
                  for themselves
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.3} className="mt-12 text-center">
              <p className="text-xl text-text-secondary">
                That&apos;s exactly what the{" "}
                <span className="text-secondary font-semibold">
                  Systems Blueprint
                </span>{" "}
                gives you.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRODUCE THE BLUEPRINT */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-surface">
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block text-secondary text-sm font-medium tracking-wider uppercase mb-4">
                Introducing
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                The Systems Blueprint
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                A diagnostic that reveals exactly where your business is
                bleeding time and money—and gives you a clear roadmap to fix it.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.1}
              className="p-8 lg:p-12 rounded-2xl bg-bg-deep border border-border"
            >
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Most businesses try to solve operational problems by throwing
                tools at them. A new CRM here. A project management system
                there. Maybe some half-finished automations that nobody
                maintains.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                <span className="text-text-primary font-medium">
                  That approach doesn&apos;t work.
                </span>{" "}
                Because the problem isn&apos;t the tools—it&apos;s that nobody
                actually understands how information flows through the business.
              </p>
              <p className="text-lg text-text-primary leading-relaxed">
                The Systems Blueprint changes that. In 60 minutes, I map your
                entire operation, identify every bottleneck, and give you a
                prioritized plan to fix them—starting with the changes that will
                have the biggest impact.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-deep">
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                What You Get
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection
                delay={0.1}
                className="p-8 rounded-2xl bg-bg-surface border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-3">
                  60-Minute Discovery Call
                </h3>
                <p className="text-text-muted leading-relaxed">
                  A focused deep-dive into your operations. We&apos;ll walk
                  through your current workflows, identify pain points, and
                  uncover the hidden inefficiencies you&apos;ve been living
                  with.
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.15}
                className="p-8 rounded-2xl bg-bg-surface border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Map className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-3">
                  Visual Systems Map
                </h3>
                <p className="text-text-muted leading-relaxed">
                  A complete visual documentation of how information flows
                  through your business. See exactly where data enters, moves,
                  gets stuck, and where bottlenecks exist.
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.2}
                className="p-8 rounded-2xl bg-bg-surface border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-3">
                  Prioritized Automation Roadmap
                </h3>
                <p className="text-text-muted leading-relaxed">
                  A ranked list of automation opportunities sorted by impact and
                  effort. Know exactly what to fix first and why—no more
                  guessing which improvements matter most.
                </p>
              </AnimatedSection>

              <AnimatedSection
                delay={0.25}
                className="p-8 rounded-2xl bg-bg-surface border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-3">
                  Written Recommendations
                </h3>
                <p className="text-text-muted leading-relaxed">
                  A detailed document with specific recommendations, tool
                  suggestions, and implementation notes. Something you can
                  actually act on—whether you work with me or not.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR / NOT FOR */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-surface">
            <div className="absolute inset-0 dot-pattern" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-tight">
                Is This Right For You?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* This is for */}
              <AnimatedSection
                delay={0.1}
                className="p-8 rounded-2xl bg-bg-deep border border-secondary/30"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-6 text-secondary">
                  This is for you if...
                </h3>
                <ul className="space-y-4">
                  {[
                    "You run a business doing $500K+ in revenue",
                    "Your team spends hours on repetitive manual work",
                    "You've tried tools before but problems keep moving",
                    "You want clarity before investing in automation",
                    "You're ready to make real operational changes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* This is NOT for */}
              <AnimatedSection
                delay={0.15}
                className="p-8 rounded-2xl bg-bg-deep border border-primary/30"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-6 text-primary">
                  This is NOT for you if...
                </h3>
                <ul className="space-y-4">
                  {[
                    "You're a solopreneur with simple operations",
                    "You just want someone to set up a tool for you",
                    "You're not willing to change how things work",
                    "You need hand-holding through implementation",
                    "You're looking for a magic bullet solution",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* THE INVESTMENT */}
        <section
          id="get-started"
          className="relative py-20 lg:py-28 overflow-hidden"
        >
          <div className="absolute inset-0 bg-bg-deep">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="p-8 lg:p-12 rounded-2xl bg-bg-surface border border-border">
                <span className="inline-block text-secondary text-sm font-medium tracking-wider uppercase mb-4">
                  The Investment
                </span>

                <div className="mb-8">
                  <span className="font-[family-name:var(--font-heading)] text-6xl lg:text-7xl font-bold gradient-text-coral">
                    $150
                  </span>
                  <p className="text-text-muted mt-2">One-time diagnostic</p>
                </div>

                <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  {[
                    "60-minute discovery call",
                    "Visual systems map",
                    "Prioritized automation roadmap",
                    "Written recommendations document",
                    "Yours to keep—no strings attached",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://tally.so/r/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 w-full sm:w-auto"
                >
                  Get Your Systems Blueprint
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <p className="mt-6 text-text-muted text-sm">
                  Most clients identify $5,000+ in annual savings from the first
                  automation alone.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-surface">
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-tight">
                Questions? Answers.
              </h2>
            </AnimatedSection>

            <AnimatedSection
              delay={0.1}
              className="bg-bg-deep rounded-2xl border border-border p-6 lg:p-8"
            >
              <FAQItem
                question="What happens after I purchase?"
                answer="You'll immediately get a link to book your 60-minute discovery call. Pick a time that works for you, and come prepared to walk me through how your business operates. After the call, you'll receive your complete Systems Blueprint within 3-5 business days."
              />
              <FAQItem
                question="Do I need to prepare anything?"
                answer="Just show up ready to talk about your operations honestly. It helps to have access to the main tools your team uses (CRM, project management, etc.) so we can see the actual workflows. No documents or presentations needed."
              />
              <FAQItem
                question="What if I don't know what's broken?"
                answer="That's exactly why this exists. Most business owners know something is wrong but can't pinpoint it. My job is to find those hidden problems by asking the right questions and mapping everything out systematically."
              />
              <FAQItem
                question="Can you implement the automations too?"
                answer="Yes—but that's a separate engagement. The Blueprint is designed to give you clarity first. Many clients use it to fix things themselves or brief their own team. If you want help implementing, we can discuss that after you see the roadmap."
              />
              <FAQItem
                question="What's your refund policy?"
                answer="If you complete the discovery call and I can't identify at least 3 significant automation opportunities, you get a full refund. That's never happened, but the guarantee stands."
              />
              <FAQItem
                question="How is this different from a free consultation?"
                answer="Free consultations are sales calls. This is a paid diagnostic that delivers real, actionable value whether you ever work with me again or not. You'll leave with a complete systems map and prioritized roadmap—not a pitch."
              />
            </AnimatedSection>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-bg-deep" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <div className="p-8 lg:p-12 rounded-2xl bg-bg-surface border border-secondary/30">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-6" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
                  The &quot;Clarity or Free&quot; Guarantee
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  If I can&apos;t identify at least 3 meaningful automation
                  opportunities that would save you time or money, you pay
                  nothing. Complete the discovery call, and if I come up empty,
                  you get a full refund. No questions, no hassle.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-surface via-bg-deep to-bg-deep">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Stop Guessing.{" "}
                <span className="gradient-text">Start Fixing.</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-xl mx-auto mb-10">
                In one hour, you&apos;ll have more clarity about your operations
                than most business owners get in years of trial and error.
              </p>
              <a
                href="https://tally.so/r/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary hover:bg-primary/90 text-white text-lg font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
              >
                Get Your Systems Blueprint — $150
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <p className="mt-6 text-text-muted text-sm">
                60-minute call • Visual systems map • Prioritized roadmap •
                Guaranteed results
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="relative py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight"
            >
              <span className="text-text-primary">Karl</span>
              <span className="gradient-text-coral"> Gallant</span>
            </Link>
            <p className="text-text-muted text-sm">
              &copy; 2025 Karl Gallant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
