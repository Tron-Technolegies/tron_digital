import React, { useEffect } from "react";
import VoltHero from "../components/TronVoltPage/VoltHero/VoltHero";
import DigitalMarketingExcellence from "../components/TronVoltPage/DigitalMarketingExcellence/DigitalMarketingExcellence";
import VoltReadySection from "../components/TronVoltPage/VoltReadySection/VoltReadySection";
import FeaturesSection from "../components/TronVoltPage/FeaturesSection/FeaturesSection";
import ContactSection from "../components/TronVoltPage/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import NavbarVolt from "../components/TronVoltPage/NavabarVolt/NavbarVolt";

export default function TronVolt() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <VoltHero />
      <DigitalMarketingExcellence />
      <VoltReadySection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
}
