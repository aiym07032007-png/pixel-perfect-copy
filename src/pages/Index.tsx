import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PhenomenonSection from "@/components/PhenomenonSection";
import PriceSection from "@/components/PriceSection";
import DangerSection from "@/components/DangerSection";
import FamilySection from "@/components/FamilySection";
import LegalSection from "@/components/LegalSection";
import RegulatorSection from "@/components/RegulatorSection";
import EpilogueSection from "@/components/EpilogueSection";
import SourcesSection from "@/components/SourcesSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <StickyNav />
    <HeroSection />
    <StatsSection />
    <PhenomenonSection />
    <PriceSection />
    <DangerSection />
    <FamilySection />
    <LegalSection />
    <RegulatorSection />
    <EpilogueSection />
    <SourcesSection />
  </div>
);

export default Index;
