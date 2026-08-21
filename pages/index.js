import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Play } from 'lucide-react';
import styles from '@/styles/Home.module.scss';

export default function StreamingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Island of Knowledge',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 2,
      title: 'Thriller Junction',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/Priyangri.jpg',
    },
    {
      id: 3,
      title: 'Under the Song Tree',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/DESIGN_SM-1.jpg',
    },
  ];

  // Auto Slider Effect (cycles every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // All 10 official shows in English only
  const allPrograms = [
    { title: 'Island of Knowledge', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg' },
    { title: 'Under the Song Tree', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg' },
    { title: 'Thriller Junction', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/Priyangri.jpg' },
    { title: 'If You Were Near', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/SEETHA-1-1-1400x800.jpg' },
    { title: 'Fun Fact', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1.jpg' },
    { title: 'Vox Pop', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/AMMAYUM-KUNJUM.jpg' },
    { title: 'Special Programs', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg' },
    { title: 'Pusthakomania', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x800.jpg' },
    { title: 'Short Films', image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg' },
    { title: 'Sitcoms', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UPPUM-MULAKUM-2_NOw-showig.jpg' },
  ];

  const originalsData = {
    title: 'NAMMAL Originals',
    items: [
      { title: 'Fun Fact', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x880.jpg' },
      { title: 'Aswamedham', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/BELOVED-H-700x880.jpg' },
      { title: 'Mahabharatham Quoted by Murukan Kattakkada', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/sathyamyittum-V-700x880.jpg' },
      { title: 'Island of Knowledge', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/POISON-V-700x880.jpg' },
    ],
  };

  return (
    <>
      <Head>
        <title>NAMMAL MEDIA - Malayaliyude Manasakshi | Official Digital Channel</title>
        <meta
          name="description"
          content="NAMMAL MEDIA (നമ്മള് - മലയാളിയുടെ മനസ്സാക്ഷി) is a premier digital media platform and entertainment channel from Kerala, India. Featuring Malayalam cinema updates, G. S. Pradeep’s Aswamedham, cultural events, interviews, stage shows, and regional news."
        />
        <meta
          name="keywords"
          content="NAMMAL Media, Malayaliyude Manasakshi, Aswamedham, GS Pradeep, Malayalam Cinema, Kerala Entertainment, Malayalam Shows, Nammal TV, Malayalam Digital Channel"
        />
        <link rel="canonical" href="https://nammalmedia.com/" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NAMMAL MEDIA - Malayaliyude Manasakshi" />
        <meta
          property="og:description"
          content="Digital media platform and entertainment channel from Kerala, India. Tagline: നമ്മള് - മലയാളിയുടെ മനസ്സാക്ഷി (Nammal - The Conscience of the Malayalee). Featuring G. S. Pradeep’s Aswamedham, Malayalam cinema updates, interviews, and stage shows."
        />
        <meta property="og:url" content="https://nammalmedia.com/" />
        <meta property="og:site_name" content="NAMMAL MEDIA" />
        <meta property="og:image" content="https://nammalmedia.com/assets/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ml_IN" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAMMAL MEDIA - Malayaliyude Manasakshi" />
        <meta
          name="twitter:description"
          content="Digital media platform and entertainment channel from Kerala, India. Tagline: നമ്മള് - മലയാളിയുടെ മനസ്സാക്ഷി"
        />
        <meta name="twitter:image" content="https://nammalmedia.com/assets/og-image.png" />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Hero Section matching reference screenshot */}
        <section className={styles.heroSection}>
          <div className="pv-container">
            {/* Top Centered Header & Subtitle */}
            <div className={styles.heroHeader}>
              <h1 className={styles.title}>
                BRING YOUR PEACEFUL STORIES<br />
                TO LIFE WITH NAMMAL MEDIA<span>+</span>
              </h1>
              <p className={styles.subtitle}>
                Our expertise lies in transforming your narratives into vivid experiences, backed by a demonstrated history of crafting top-notch movies that engage, motivate, and enchant global audiences.
              </p>
            </div>

            {/* Cinematic Banner Image Slider Frame with Centered Concentric Play Button */}
            <div className={styles.heroMediaFrame}>
              {heroSlides.map((slide, idx) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title}
                  className={styles.frameImg}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: currentSlide === idx ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                  }}
                />
              ))}

              <div className={styles.frameOverlay}>
                <div className={styles.playRing}>
                  <div className={styles.playCircle}>
                    <Play size={24} fill="#0b0c10" style={{ marginLeft: '2px' }} />
                  </div>
                </div>
              </div>

              {/* Slider Dots Indicator Overlay */}
              <div className={styles.heroDotNav}>
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.frameDot} ${currentSlide === idx ? styles.activeFrameDot : ''
                      }`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* 4 Key Stat Metrics Columns */}
            <div className={styles.statsGrid}>
              <div className={styles.statCol}>
                <span className={styles.statVal}>500</span>
                <span className={styles.statLabel}>
                  Total Employees<br />NAMMAL Media
                </span>
              </div>

              <div className={styles.statCol}>
                <span className={styles.statVal}>&gt; 20,000</span>
                <span className={styles.statLabel}>
                  Total Number of TV Series<br />Hours Produced
                </span>
              </div>

              <div className={styles.statCol}>
                <span className={styles.statVal}>6</span>
                <span className={styles.statLabel}>
                  Total Location Cinema<br />in The World
                </span>
              </div>

              <div className={styles.statCol}>
                <span className={styles.statVal}>500+</span>
                <span className={styles.statLabel}>
                  Total Film Collection of<br />NAMMAL Media
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Programs Section - All 10 Shows in English */}
        <section className={styles.showCategorySection}>
          <div className="pv-container">
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>Programs & Shows</h2>
            </div>
            <div className={styles.rowGrid}>
              {allPrograms.map((item, idx) => (
                <div key={idx} className={styles.card}>
                  <img src={item.image} alt={item.title} className={styles.cardImg} />
                  <div className={styles.playOverlay}>
                    <div className={styles.playIcon}>
                      <Play size={24} fill="#0b0c10" />
                    </div>
                  </div>
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Video Teaser Filler Banner */}
        <section className="pv-container">
          <div className={styles.videoTeaserSection}>
            <video
              src="/assets/video/nammal.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </section>

        {/* 4. Originals (Portrait Cards Section) */}
        <section className={styles.showCategorySection}>
          <div className="pv-container">
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>{originalsData.title}</h2>
            </div>
            <div className={styles.rowGridPortrait}>
              {originalsData.items.map((item, idx) => (
                <div key={idx} className={styles.cardPortrait}>
                  <img src={item.image} alt={item.title} className={styles.cardImg} />
                  <div className={styles.playOverlay}>
                    <div className={styles.playIcon}>
                      <Play size={24} fill="#0b0c10" />
                    </div>
                  </div>
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
