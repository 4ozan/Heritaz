'use client';

import React, { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-2";
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { FAQ } from '@/components/home/FAQ';
import { Dashboard } from '@/components/home/Dashboard';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Heritaz",
  "applicationCategory": "DeFi",
  "operatingSystem": "Web",
  "description": "A decentralized dead man's switch for crypto inheritance on Solana, ensuring your digital assets reach your loved ones.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Amrit",
    "url": "https://twitter.com/amritwt"
  }
};

const Homepage: FC = () => {
  const { connected } = useWallet();

  if (connected) {
    return <Dashboard />;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-primary/20 via-background to-background text-foreground overflow-hidden">
        <div className="relative min-h-screen flex flex-col">
          <div className="relative z-10 text-center space-y-16 p-8 max-w-6xl mx-auto">
            <Hero />
            <FeaturesSectionDemo />
            <HowItWorks />
            <FAQ />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;