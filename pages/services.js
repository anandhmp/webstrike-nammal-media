import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import styles from '@/styles/Services.module.scss';

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card default

  const coreServices = [
    {
      id: 0,
      title: 'FILM PRODUCTION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x800.jpg',
    },
    {
      id: 1,
      title: 'FREE TO AIR PRODUCTION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/KUTTY-KALVARA-1400x800-1.jpg',
    },
    {
      id: 2,
      title: 'WEB SERIES PRODUCTION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1400x800.jpg',
    },
    {
      id: 3,
      title: 'CINEMA',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg',
    },
    {
      id: 4,
      title: 'FILM DISTRIBUTION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 5,
      title: 'INFOTAINMENT & STAGE EVENTS',
      image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg',
    },
    {
      id: 6,
      title: 'PAY TV BROADCAST',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/DESIGN_SM-1.jpg',
    },
  ];

  // Auto Slider Effect (cycles every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coreServices.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [coreServices.length]);

  return (
    <>
      <Head>
        <title>Services | NAMMAL & Flowers TV Network</title>
        <meta
          name="description"
          content="Explore Core Business of NAMMAL Media including Film Production, Web Series, Cinema, and Distribution."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Industry Overview & Growth Chart Block Section (Top) */}
        <section className={styles.industryOverviewSection}>
          <div className="pv-container">
            <div className={styles.overviewGrid}>
              {/* Left Column: Headings & Paragraphs */}
              <div className={styles.overviewLeftCol}>
                <h1 className={styles.overviewTitle}>
                  OVERVIEW OF THE<br />
                  WORLD FILM INDUSTRY
                </h1>
                <p className={styles.overviewText}>
                  You can learn about our stock exchange listing, explore historical stock performance data and view financial reports, stay up-to-date with the latest investor-related news and announcements.
                </p>
                <p className={styles.overviewText}>
                  Join us as we continue to create cinematic magic and invest in the future of cinema.
                </p>

                <Link href="/contact" className={styles.investorBtn}>
                  Investor Relations
                </Link>
              </div>

              {/* Right Column: OTT Revenue Growth Bar Chart Graphic */}
              <div className={styles.overviewRightCol}>
                <div className={styles.chartMetaHeader}>
                  <p className={styles.chartSubtitle}>
                    Over The Top (OTT) Revenue Industry Film in the world
                  </p>
                  <div className={styles.cagrBadge}>
                    <span>CAGR</span>
                    42.5%
                  </div>
                </div>

                <div className={styles.chartBarsWrapper}>
                  {/* Curved Arrow SVG */}
                  <svg className={styles.curveArrowSvg} viewBox="0 0 100 100" fill="none">
                    <path
                      d="M 5 95 Q 40 95 90 10"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 82 12 L 92 8 L 88 18"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* 2019 Red Bar */}
                  <div className={styles.barRed}>
                    <span className={styles.barLabel}>OTT revenue</span>
                    <span className={styles.barVal}>$270 million</span>
                    <span className={styles.barYear}>2019</span>
                  </div>

                  {/* 2027 White Pillar Bar */}
                  <div className={styles.barWhite}>
                    <span className={styles.barLabel}>OTT revenue</span>
                    <span className={styles.barVal}>$5.0 billion</span>
                    <span className={styles.barYear}>2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Business Header & Auto Slider Section (Middle) */}
        <section style={{ padding: '80px 0 60px' }}>
          <div className="pv-container">
            <div className={styles.sliderHeader}>
              <h2 className={styles.title}>
                CORE BUSINESS OF NAMMAL MEDIA<span>+</span>
              </h2>
            </div>

            <div className={styles.sliderContainer}>
              <div
                className={styles.sliderTrack}
                style={{
                  transform: `translateX(calc(40% - ${activeIndex * 20}%))`,
                }}
              >
                {coreServices.map((service, idx) => {
                  const distance = Math.abs(idx - activeIndex);
                  let bulgeClass = styles.outerCard;
                  if (distance === 0) {
                    bulgeClass = styles.activeCenterCard;
                  } else if (distance === 1) {
                    bulgeClass = styles.neighborCard;
                  }

                  return (
                    <div
                      key={service.id}
                      className={`${styles.posterCard} ${bulgeClass}`}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className={styles.posterImg}
                      />
                      <div className={styles.posterOverlay}>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <Link href="/contact" className={styles.cardCtaBtn}>
                          Explore <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Slider Dots Indicator */}
              <div className={styles.controlsRow}>
                {coreServices.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dotBtn} ${activeIndex === idx ? styles.activeDot : ''
                      }`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
