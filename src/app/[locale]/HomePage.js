"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturesGrid from '@/components/FeaturesGrid';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonial from '@/components/Testimonial';
import PressReviews from '@/components/PressReviews';
import DownloadSection from '@/components/DownloadSection';
import AvailableAs from '@/components/AvailableAs';
import HomeFAQ from '@/components/HomeFAQ';
import FeaturesSection from '@/components/FeaturesSection';
import PartnerSection from '@/components/PartnerSection';
import TallyPopup from '@/components/TallyPopup';

export default function HomePage() {
  return (
    <div className="absolute inset-x-0 mx-auto min-h-screen w-full bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <HowItWorks />
        <AvailableAs />
        <FeaturesSection />
        <PartnerSection />
        <HomeFAQ />
        {/* <FeaturesGrid />
        <ComparisonTable /> 
        <Testimonial /> */}
        {/* <PressReviews /> */}
        {/* <DownloadSection /> */}
      </main>

      <Footer />
      {/* <TallyPopup /> */}
    </div>
  );
}
