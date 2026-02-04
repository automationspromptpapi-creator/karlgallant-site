import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import CredibilitySection from "@/components/CredibilitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <CredibilitySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
