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
import TallyPopup from '@/components/TallyPopup';

export default function HomePage() {
  return (
    <div className="absolute inset-x-0 mx-auto min-h-screen w-full bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <HowItWorks />
        <AvailableAs />
        <FeaturesGrid />
        <ComparisonTable /> 
        <Testimonial />
        {/* <PressReviews /> */}

        <DownloadSection />
      </main>

      <Footer fixed={false} />
      {/* <TallyPopup /> */}
    </div>
  );
}
