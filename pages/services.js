import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight, Megaphone, Rocket, Trophy } from 'lucide-react';
import styles from '@/styles/Services.module.scss';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services & Business Verticals | NAMMAL MEDIA - Malayaliyude Manasakshi</title>
        <meta
          name="description"
          content="Explore Advertising, Branding, and Event Services from NAMMAL MEDIA. Connecting brands with Malayalam audiences."
        />
        <link rel="canonical" href="https://nammalmedia.com/services" />
        <meta property="og:title" content="Services & Business Verticals | NAMMAL MEDIA" />
        <meta
          property="og:description"
          content="Advertising, branding, and event production services from NAMMAL MEDIA."
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

        {/* 2. Services Epic Bento Grid Section */}
        <section id="services-list" className={styles.bentoSection}>
          <div className="pv-container">
            <div className={styles.bentoHeader}>
              <h2 className={styles.title}>Services of Nammal Media</h2>
              <p className={styles.bentoSub}>
                Empowering businesses with creative storytelling, advertising reach, and unforgettable event experiences.
              </p>
            </div>

            <div className={styles.epicBentoContainer}>
              {/* Top Featured Wide Bento Card (Advertising) */}
              <div className={styles.epicBentoTopCard}>
                <div className={styles.bentoLeftInfo}>
                  <h3 className={styles.epicBentoTitle}>Advertising</h3>
                  <p className={styles.epicBentoDesc}>
                    Reach millions of engaged Malayalis across digital platforms, broadcast shows, and targeted campaign integrations. We craft high-impact video commercials, brand sponsorships, and native digital ad placements that drive real audience engagement.
                  </p>
                  <Link href="/services/advertising" className={styles.epicBentoBtn}>
                    Explore Advertising <ArrowUpRight size={16} />
                  </Link>
                </div>

                <Link href="/services/advertising" className={styles.bentoRightGraphic}>
                  <div className={styles.gridPatternBg} />
                  <div className={styles.graphicIconWrapper}>
                    <img
                      src="/assets/services/ads.png"
                      alt="NAMMAL Advertising Service"
                      className={styles.bento3dImg}
                    />
                    <span className={styles.graphicTextLogo}>
                      NAMMAL<br />ADVERTISING
                    </span>
                  </div>
                  <span className={styles.verticalTag}>ADVERTISING SERVICE</span>
                </Link>
              </div>

              {/* Bottom Row (2 Equal Bento Cards: Branding & Events) */}
              <div className={styles.epicBentoBottomRow}>
                {/* Branding Card */}
                <div className={styles.epicBentoSmallCard}>
                  <Link href="/services/branding" className={styles.bentoGraphicBox}>
                    <div className={styles.gridPatternBg} />
                    <div className={styles.graphicIconWrapper}>
                      <img
                        src="/assets/services/branding (1).png"
                        alt="NAMMAL Branding Service"
                        className={styles.bento3dImgSmall}
                      />
                    </div>
                    <span className={styles.verticalTag}>BRANDING SERVICE</span>
                  </Link>

                  <div className={styles.bentoSmallFooter}>
                    <div className={styles.bentoSmallTextGroup}>
                      <h3 className={styles.epicBentoSmallTitle}>
                        <Link href="/services/branding" style={{ color: 'inherit', textDecoration: 'none' }}>Branding</Link>
                      </h3>
                      <p className={styles.epicBentoSmallDesc}>
                        Strategic visual identity design, brand positioning, and compelling storytelling that build emotional connection and trust.
                      </p>
                    </div>
                    <Link href="/services/branding" className={styles.circleArrowBtn} title="Explore Branding">
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Events Card */}
                <div className={styles.epicBentoSmallCard}>
                  <Link href="/services/events" className={styles.bentoGraphicBox}>
                    <div className={styles.gridPatternBg} />
                    <div className={styles.graphicIconWrapper}>
                      <img
                        src="/assets/services/events.png"
                        alt="NAMMAL Events Service"
                        className={styles.bento3dImgSmall}
                      />
                    </div>
                    <span className={styles.verticalTag}>EVENTS SERVICE</span>
                  </Link>

                  <div className={styles.bentoSmallFooter}>
                    <div className={styles.bentoSmallTextGroup}>
                      <h3 className={styles.epicBentoSmallTitle}>
                        <Link href="/services/events" style={{ color: 'inherit', textDecoration: 'none' }}>Events</Link>
                      </h3>
                      <p className={styles.epicBentoSmallDesc}>
                        Memorable live entertainment shows, stage productions, cultural festivals, and brand activation experiences.
                      </p>
                    </div>
                    <Link href="/services/events" className={styles.circleArrowBtn} title="Explore Events">
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
