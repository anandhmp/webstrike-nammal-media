import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Tv, Globe, Heart, ShieldCheck } from 'lucide-react';
import styles from '@/styles/About.module.scss';

export default function AboutPage() {
  const stats = [
    { number: '10M+', label: 'Global Viewers' },
    { number: '24/7', label: 'HD Broadcast' },
    { number: '100+', label: 'Original Shows' },
    { number: '#1', label: 'Infotainment Network' },
  ];

  const networkVentures = [
    {
      id: 1,
      name: 'Flowers TV',
      desc: '24-hour premiere Malayalam entertainment channel bringing hit serials, reality competitions, and family shows.',
      logo: 'https://www.flowerstv.in/wp-content/uploads/2021/08/cropped-Flowers-Logo-alpha-1.png',
      link: 'https://www.flowerstv.in/',
    },
    {
      id: 2,
      name: 'Twenty Four News',
      desc: 'Kerala\'s leading 24-hour news channel delivering impartial, real-time journalism and investigative reports.',
      logo: 'https://www.flowerstv.in/wp-content/uploads/2021/08/cropped-Flowers-Logo-alpha-1.png',
      link: 'https://www.twentyfournews.com/',
    },
    {
      id: 3,
      name: 'Flowers Originals',
      desc: 'Exclusive digital OTT platform producing original web series, music specials, and premium streaming series.',
      logo: '/assets/nammal-logo.png',
      link: 'https://flowersoriginals.com/',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us | NAMMAL & Flowers TV</title>
        <meta
          name="description"
          content="Learn about NAMMAL & Flowers TV — Kerala's digital & broadcast platform celebrating knowledge, infotainment, and entertainment."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>INSIGHT MEDIA CITY NETWORK</span>
            <h1 className={styles.heroTitle}>About NAMMAL</h1>
            <p className={styles.heroSubtitle}>
              മലയാളിയുടെ മനസ്സാക്ഷി — A digital & broadcast ecosystem uniting audiences across generations through meaningful infotainment and entertainment.
            </p>
          </div>
        </section>

        {/* Stat Counter Grid */}
        <section className={styles.statsSection}>
          <div className="pv-container">
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statNumber}>{s.number}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className={styles.storySection}>
          <div className="pv-container">
            <div className={styles.storyGrid}>
              <div className={styles.storyImageCard}>
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg"
                  alt="NAMMAL Media Production"
                />
              </div>

              <div className={styles.storyContent}>
                <h2 className={styles.sectionTitle}>Celebrating Kerala's Passion For Knowledge</h2>
                <p className={styles.storyParagraph}>
                  From science and history to mysteries, technology, and contemporary culture, the people of Kerala have always demonstrated an enduring passion for learning. Curiosity is the driving force behind an informed society, and <strong>NAMMAL</strong> is conceived as a platform that celebrates this spirit while making high-quality content accessible to everyone.
                </p>
                <div className={styles.highlightQuote}>
                  “The Malayalam word Nammal translates to 'We'—a powerful expression of togetherness, inclusivity, and collective growth.”
                </div>
                <p className={styles.storyParagraph}>
                  From captivating reels and real-life inspiring stories to infotainment sessions, educational features, cinema, lifestyle, and trending discussions, NAMMAL delivers content that is informative, relevant, and thought-provoking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Network Ventures Section */}
        <section className={styles.networkSection}>
          <div className="pv-container">
            <h2 className={styles.sectionTitle}>Our Media Ecosystem</h2>

            <div className={styles.networkGrid}>
              {networkVentures.map((v) => (
                <div key={v.id} className={styles.networkCard}>
                  <div>
                    <div className={styles.networkLogoWrapper}>
                      <img src={v.logo} alt={v.name} />
                    </div>
                    <h3 className={styles.networkName}>{v.name}</h3>
                    <p className={styles.networkDesc}>{v.desc}</p>
                  </div>

                  <a
                    href={v.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.networkLink}
                  >
                    Visit Venture <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
