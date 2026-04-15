import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import MangystauCaseSection from "@/components/MangystauCaseSection";
import GulmiraSection from "@/components/GulmiraSection";
import WhatIsBadSection from "@/components/WhatIsBadSection";
import StatsSection from "@/components/StatsSection";
import WorldMapSection from "@/components/WorldMapSection";
import PhenomenonSection from "@/components/PhenomenonSection";
import PriceSection from "@/components/PriceSection";
import DangerSection from "@/components/DangerSection";
import LegalSection from "@/components/LegalSection";
import ElenaSection from "@/components/ElenaSection";
import ExpertSection from "@/components/ExpertSection";
import MetabodySection from "@/components/MetabodySection";
import TimelineSection from "@/components/TimelineSection";
import ProtectionSection from "@/components/ProtectionSection";
import ChlorophyllSection from "@/components/ChlorophyllSection";
import EpilogueSection from "@/components/EpilogueSection";
import SourcesSection from "@/components/SourcesSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <StickyNav />
    <HeroSection />
    {/* ACT 1: Человеческие истории — эмоциональный удар */}
    <MangystauCaseSection />
    <GulmiraSection />
    {/* ACT 2: Что это и почему — факты и наука */}
    <WhatIsBadSection />
    <StatsSection />
    <WorldMapSection />
    <PhenomenonSection />
    <PriceSection />
    <DangerSection />
    <LegalSection />
    {/* ACT 3: Голоса — эксперты и индустрия */}
    <ElenaSection />
    <ExpertSection />
    <MetabodySection />
    <TimelineSection />
    {/* ACT 4: Что делать + доказательство */}
    <ProtectionSection />
    <ChlorophyllSection />
    <EpilogueSection />
    <SourcesSection />
  </div>
);

export default Index;
