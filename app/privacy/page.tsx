"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-text-secondary">
            <p className="text-xl">
              Last updated: February 2026
            </p>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Introduction
              </h2>
              <p>
                Karl Gallant (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number when you fill out forms or book a call</li>
                <li><strong>Business Information:</strong> Company name, role, and business details you share during consultations</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent</li>
                <li><strong>Communication Data:</strong> Records of correspondence if you contact us</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our consulting services</li>
                <li>Communicate with you about appointments and services</li>
                <li>Send relevant updates and marketing communications (with your consent)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Data Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party tools we use to operate our business (e.g., scheduling software, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Cookies
              </h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:hello@karlgallant.com" className="text-primary hover:text-primary/80 transition-colors">
                  hello@karlgallant.com
                </a>
              </p>
            </section>
          </div>
        </div>
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
            <div className="flex items-center gap-6 text-text-muted text-sm">
              <Link href="/privacy" className="hover:text-text transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-text transition-colors">
                SMS Terms
              </Link>
            </div>
            <p className="text-text-muted text-sm">
              &copy; 2025 Karl Gallant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
