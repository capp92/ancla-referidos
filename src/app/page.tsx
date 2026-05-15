import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IncentiveTable from "@/components/IncentiveTable";
import SocialProof from "@/components/SocialProof";
import Conditions from "@/components/Conditions";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — dark */}
        <Hero />
        {/* Cómo funciona — light */}
        <HowItWorks />
        {/* Tabla de incentivos — dark */}
        <IncentiveTable />
        {/* Por qué Ancla / Social proof — brand */}
        <SocialProof />
        {/* Condiciones y FAQ — light */}
        <Conditions />
        {/* CTA final — dark */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
