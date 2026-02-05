"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            SMS Terms & Conditions
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-text-secondary">
            <p className="text-xl">
              Last updated: February 2025
            </p>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                SMS Communication Consent
              </h2>
              <p>
                By providing your phone number and opting in to receive SMS messages from Karl Gallant, you consent to receive text messages related to our services, including appointment reminders, service updates, and relevant business communications.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Message Frequency
              </h2>
              <p>
                Message frequency varies based on your interaction with our services. You may receive:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Appointment confirmations and reminders</li>
                <li>Follow-up messages after consultations</li>
                <li>Important updates about scheduled services</li>
                <li>Responses to your inquiries</li>
              </ul>
              <p className="mt-4">
                We estimate you will receive no more than 5 messages per month unless you initiate additional communication.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Message and Data Rates
              </h2>
              <p>
                Standard message and data rates may apply depending on your mobile carrier and plan. Karl Gallant is not responsible for any charges incurred from receiving SMS messages.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                How to Opt Out
              </h2>
              <p>
                You can opt out of receiving SMS messages at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Replying <strong>STOP</strong> to any message you receive</li>
                <li>Contacting us at <a href="mailto:hello@karlgallant.com" className="text-primary hover:text-primary/80 transition-colors">hello@karlgallant.com</a></li>
              </ul>
              <p className="mt-4">
                After opting out, you will receive one final confirmation message. You will no longer receive SMS messages unless you opt in again.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                How to Get Help
              </h2>
              <p>
                If you need assistance or have questions about our SMS program:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reply <strong>HELP</strong> to any message for support information</li>
                <li>Email us at <a href="mailto:hello@karlgallant.com" className="text-primary hover:text-primary/80 transition-colors">hello@karlgallant.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Privacy
              </h2>
              <p>
                Your phone number and SMS opt-in status will not be shared with third parties for marketing purposes. For full details on how we handle your data, please review our{" "}
                <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Supported Carriers
              </h2>
              <p>
                SMS messages are supported on most major U.S. carriers including AT&T, Verizon, T-Mobile, Sprint, and others. Carrier support may vary and is not guaranteed.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these SMS terms at any time. Changes will be posted on this page with an updated revision date. Continued participation in our SMS program after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text-primary mb-4">
                Contact Information
              </h2>
              <p>
                For any questions regarding these SMS terms and conditions, please contact:
              </p>
              <p className="mt-4">
                <strong>Karl Gallant</strong><br />
                Email:{" "}
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
