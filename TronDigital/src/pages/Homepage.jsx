import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUs/AboutUs";
import HowCanWe from "../components/Howcanwe/HowCanWe";
import TronVoltSection from "../components/TronVoltSection/TronVoltSection";
import FutureSection from "../components/FutureSection/FutureSection";
import OurPrinciplesSection from "../components/PrincipleSection/OurPrincipleSection";
import OurServices from "../components/OurServices/OurServices";
import DigitalExperience from "../components/DigitalExperience";
import DigitalExperts from "../components/DigitalExperts/DigitalExperts";
import CompanyGrowth from "../components/CompanyGrowth/CompanyGrowth";
import BrandLogo from "../components/BrandLogo/BrandLogo";
import InsightsSection from "../components/InsightsSection/InsightsSection";
import TeamSection from "../components/TeamSection/TeamSection";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import BrainstormNow from "../components/BrainstormNow/BrainstormNow";
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <HowCanWe />
      <TronVoltSection />
      <FutureSection />
      <OurPrinciplesSection />
      <OurServices />
      <DigitalExperts />
      <CompanyGrowth />
      <BrandLogo />
      <InsightsSection />
      <TeamSection />
      <FAQ />
      <BrainstormNow />
    </div>
  );
};

export default Homepage;
