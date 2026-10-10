import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SkillsMarquee from '../components/SkillsMarquee';
import WhatIBuild from '../components/WhatIBuild';
import FeaturedProjects from '../components/FeaturedProjects';
import TechStack from '../components/TechStack';
import BentoAbout from '../components/BentoAbout';
import InterestsAndInspiration from '../components/InterestsAndInspiration';
import FAQSection from '../components/FAQSection';
import FooterSection from '../components/FooterSection';
import { siteConfig } from '../config/siteConfig';

const Home = () => {
  useEffect(() => {
    document.title = siteConfig.seo.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = siteConfig.seo.description;
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <WhatIBuild />
        <FeaturedProjects />
        <TechStack />
        <BentoAbout />
        <InterestsAndInspiration />
        <FAQSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Home;
