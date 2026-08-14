import React from 'react';
import Head from 'next/head';
import Hero from '@/blocks/Hero/Hero';
import FreshOffThePress from '@/blocks/FreshOffThePress/FreshOffThePress';
import AdvantageSection from '@/blocks/AdvantageSection/AdvantageSection';
import NewsletterSection from '@/blocks/NewsletterSection/NewsletterSection';
import HotTopicsSpotlight from '@/blocks/HotTopicsSpotlight/HotTopicsSpotlight';

export default function Home() {
  return (
    <>
      <Head>
        <title>Prism Vantage - Business Blog (Vibrant)</title>
        <meta
          name="description"
          content="A vibrant website template that brings your business blog to life with captivating content, insights, and stories."
        />
      </Head>

      <main>
        {/* Top Hero Section */}
        <Hero />

        {/* Fresh Off the Press Section */}
        <FreshOffThePress />

        {/* Advantage Banner Section */}
        <AdvantageSection />

        {/* Get the Vantage Point Gold Form Section */}
        <NewsletterSection />

        {/* What's Igniting Conversation Section */}
        <HotTopicsSpotlight />
      </main>
    </>
  );
}
