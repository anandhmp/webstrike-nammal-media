import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import styles from '@/styles/Services.module.scss';

export default function ServicesPage() {
  const coreServices = [
    {
      id: 0,
      title: 'Advertising',
      image: '/assets/services/advertising.jpg',
    },
    {
      id: 1,
      title: 'Branding',
      image: '/assets/services/branding.jpg',
    },
    {
      id: 2,
      title: 'Events',
      image: '/assets/services/events.jpg',
    },
  ];

  // Repeat array 5 times for unending infinite loop
  const loopedServices = [
    ...coreServices,
    ...coreServices,
    ...coreServices,
    ...coreServices,
    ...coreServices,
  ];

  const [activeIndex, setActiveIndex] = useState(coreServices.length * 2 + 2);

  // Unending Loop Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next >= coreServices.length * 4) {
          return coreServices.length * 2;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [coreServices.length]);

  return (
    <>
      <Head>
        <title>Services & Business Verticals | NAMMAL MEDIA - Malayaliyude Manasakshi</title>
        <meta
          name="description"
          content="Explore Core Business Verticals of NAMMAL MEDIA including Film Production, Film Distribution, Free to Air Production, Web Series, Cinema, and Pay TV."
        />
        <link rel="canonical" href="https://nammalmedia.com/services" />
        <meta property="og:title" content="Services & Business Verticals | NAMMAL MEDIA" />
        <meta
          property="og:description"
          content="Film production, web series, cinema distribution, and broadcast media services from NAMMAL MEDIA."
        />
        <meta property="og:url" content="https://nammalmedia.com/services" />
        <meta property="og:image" content="https://nammalmedia.com/assets/og-image.png" />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Growing Impact & Value Creation Section (Top) */}
        <section className={styles.industryOverviewSection}>
          <div className="pv-container">
            <div className={styles.overviewGrid}>
              {/* Left Column: Headings & Paragraphs */}
              <div className={styles.overviewLeftCol}>
                <h1 className={styles.overviewTitle}>
                  Growing Impact.<br />
                  Creating More Value
                </h1>
                <p className={styles.overviewText}>
                  Every story we tell, every brand we build, and every event we create adds to a stronger tomorrow. The journey has begun, and the best is yet to come.
                </p>

                <Link href="#services-list" className={styles.investorBtn}>
                  Explore Our Services
                </Link>
              </div>

              {/* Right Column: 5 Impact Pillars List Graphic */}
              <div className={styles.overviewRightCol}>
                <div className={styles.impactPillarsContainer}>
                  <div className={styles.impactItem}>
                    <span className={styles.impactNum}>01</span>
                    <div className={styles.impactInfo}>
                      <h3 className={styles.impactHead}>Ideas</h3>
                      <p className={styles.impactDesc}>Exploring ideas that inform, entertain and inspire.</p>
                    </div>
                  </div>

                  <div className={styles.impactItem}>
                    <span className={styles.impactNum}>02</span>
                    <div className={styles.impactInfo}>
                      <h3 className={styles.impactHead}>Engage</h3>
                      <p className={styles.impactDesc}>Building a community that connects and grows with us.</p>
                    </div>
                  </div>

                  <div className={styles.impactItem}>
                    <span className={styles.impactNum}>03</span>
                    <div className={styles.impactInfo}>
                      <h3 className={styles.impactHead}>Create</h3>
                      <p className={styles.impactDesc}>Delivering quality content across platforms that people love.</p>
                    </div>
                  </div>

                  <div className={styles.impactItem}>
                    <span className={styles.impactNum}>04</span>
                    <div className={styles.impactInfo}>
                      <h3 className={styles.impactHead}>Grow</h3>
                      <p className={styles.impactDesc}>Expanding our reach and impact one step at a time.</p>
                    </div>
                  </div>

                  <div className={styles.impactItem}>
                    <span className={styles.impactNum}>05</span>
                    <div className={styles.impactInfo}>
                      <h3 className={styles.impactHead}>Impact</h3>
                      <p className={styles.impactDesc}>Making a meaningful difference together.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Business Header & Infinite Auto Slider Section (Middle) */}
        <section style={{ padding: '60px 0 40px' }}>
          <div className="pv-container">
            <div className={styles.sliderHeader}>
              <h2 className={styles.title}>
                Services of Nammal Media
              </h2>
            </div>

            <div className={styles.sliderContainer}>
              <div
                className={styles.sliderTrack}
                style={{
                  '--active-idx': activeIndex,
                }}
              >
                {loopedServices.map((service, idx) => {
                  const distance = Math.abs(idx - activeIndex);
                  let bulgeClass = styles.outerCard;
                  if (distance === 0) {
                    bulgeClass = styles.activeCenterCard;
                  } else if (distance === 1) {
                    bulgeClass = styles.neighborCard;
                  }

                  return (
                    <div
                      key={`${service.id}-${idx}`}
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
                {coreServices.map((_, idx) => {
                  const realIndex = activeIndex % coreServices.length;
                  return (
                    <button
                      key={idx}
                      className={`${styles.dotBtn} ${realIndex === idx ? styles.activeDot : ''
                        }`}
                      onClick={() => setActiveIndex(coreServices.length * 2 + idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
