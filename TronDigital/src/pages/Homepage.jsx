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
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="how-we-help">
        <HowCanWe />
      </section>

      <section id="tron-volt">
        <TronVoltSection />
      </section>

      <section id="future">
        <FutureSection />
      </section>

      <section id="principles">
        <OurPrinciplesSection />
      </section>

      <section id="services">
        <OurServices />
      </section>

      <section id="experts">
        <DigitalExperts />
      </section>

      <section id="growth">
        <CompanyGrowth />
      </section>

      <section id="brands">
        <BrandLogo />
      </section>

      <section id="insights">
        <InsightsSection />
      </section>

      <section id="team">
        <TeamSection />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <BrainstormNow />
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
