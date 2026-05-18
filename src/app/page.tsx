import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IncentiveTable from "@/components/IncentiveTable";
import Conditions from "@/components/Conditions";
import FinalCTA from "@/components/FinalCTA";
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
        {/* Condiciones y FAQ — light */}
        <Conditions />
        {/* CTA final — dark */}
        <FinalCTA />
      </main>
    </>
  );
}
