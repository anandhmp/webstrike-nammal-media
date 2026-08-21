import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Tv, Award, ArrowUpRight, Sparkles, Layers, Video } from 'lucide-react';
import styles from '@/styles/Services.module.scss';

export default function ServicesPage() {
  const marqueeItems = [
    'CREATIVE STUDIO',
    'EVENTS MANAGEMENT',
    'TV ADVERTISING',
    'BRAND STRATEGY',
    'DIGITAL MEDIA',
    'BROADCAST PRODUCTION',
  ];

  const works = [
    {
      id: 1,
      title: 'Flowers Top Singer',
      category: 'Mega Stage Broadcast & Events',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
      tag: 'EVENTS',
    },
    {
      id: 2,
      title: 'Star Magic',
      category: 'Prime Time Entertainment & Ad Integration',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg',
      tag: 'ADVERTISING',
    },
    {
      id: 3,
      title: 'Flowers & NAMMAL Originals',
      category: 'Original Content & Brand Series',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1400x800.jpg',
      tag: 'BRANDING',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'DISCOVER',
      text: 'We begin by understanding your brand goals, target audience, and campaign objectives through research, media insights, and creative alignment.',
      active: true,
    },
    {
      num: '02',
      title: 'DEFINE',
      text: 'We identify clear objectives, craft a compelling creative direction, and develop a strategic broadcast plan to align your vision with high-impact media solutions.',
      active: false,
    },
    {
      num: '03',
      title: 'DESIGN & PRODUCE',
      text: 'We produce premium television commercials, mega stage events, and digital media assets that engage Malayali audiences worldwide.',
      active: false,
    },
    {
      num: '04',
      title: 'DELIVER & BROADCAST',
      text: 'We launch, broadcast across Flowers TV and NAMMAL media channels, and optimize multi-platform reach to ensure maximum engagement and long-term brand success.',
      active: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Services | NAMMAL & Flowers TV Network</title>
        <meta
          name="description"
          content="Explore media services by NAMMAL & Flowers TV including Events management, Advertising solutions, and Brand strategy."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Services Hero & Bento Grid */}
        <section className={styles.heroSection}>
          <div className="pv-container">
            <span className={styles.topSubHeader}>
              CREATED TO MAKE YOU STAND OUT WITH
            </span>
            <h1 className={styles.heroTitle}>OUR SERVICES</h1>

            <div className={styles.bentoGrid}>
              {/* Left Column */}
              <div className={styles.leftCol}>
                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>EVENTS MANAGEMENT</h3>
                    <p className={styles.cardDesc}>
                      End-to-end mega stage productions, corporate galas, and live broadcast events entertain millions across Kerala and global international venues.
                    </p>
                  </div>
                </div>

                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <Tv size={22} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>TV ADVERTISING</h3>
                    <p className={styles.cardDesc}>
                      High-impact commercial slots, organic in-show brand integrations, and regional advertising campaigns reaching Malayali households worldwide.
                    </p>
                  </div>
                  <img
                    src="https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg"
                    alt="TV Advertising"
                    className={styles.graphicPreview}
                  />
                </div>
              </div>

              {/* Middle Tall Artwork Card */}
              <div className={styles.middleCard}>
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x800.jpg"
                  alt="Featured Media Production"
                  className={styles.middleImg}
                />
                <div className={styles.middleOverlay}>
                  <span style={{ fontSize: '11px', color: '#fff263', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                    FEATURED MEDIA HUB
                  </span>
                  <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
                    BROADCAST & STAGE EXCELLENCE
                  </h3>
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.rightCol}>
                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>BRAND STRATEGY</h3>
                    <p className={styles.cardDesc}>
                      360° media brand positioning, visual identity creation, cross-platform sponsorships, and audience engagement strategy.
                    </p>
                  </div>
                </div>

                <div className={styles.bentoCard}>
                  <div className={styles.cardIcon}>
                    <Video size={22} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>CONTENT CREATION</h3>
                    <p className={styles.cardDesc}>
                      Original digital series, short films, promotional trailers, and impactful video content tailored for viral social reach.
                    </p>
                  </div>
                  <img
                    src="https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg"
                    alt="Content Creation"
                    className={styles.graphicPreview}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Marquee Ticker Banner */}
        <div className={styles.marqueeBar}>
          <div className={styles.marqueeContent}>
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={idx}>✳ {item}</span>
            ))}
          </div>
        </div>

        {/* 3. Selected Works Section */}
        <section className={styles.worksSection}>
          <div className="pv-container">
            <div className={styles.worksHeader}>
              <span className={styles.sectionLabel}>OUR BEST WORKS</span>
              <h2 className={styles.sectionTitle}>
                EXPLORE A COLLECTION OF OUR SELECTED PROJECTS WHERE CREATIVITY MEETS PURPOSE
              </h2>
            </div>

            <div className={styles.worksGrid}>
              {works.map((work) => (
                <div key={work.id} className={styles.workCard}>
                  <div className={styles.workImgWrapper}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className={work.workImg}
                    />
                    <span className={styles.workTag}>{work.tag}</span>
                  </div>
                  <div className={styles.workMeta}>
                    <div>
                      <h3 className={work.workName}>{work.title}</h3>
                      <p className={work.workCategory}>{work.category}</p>
                    </div>
                    <div className={styles.arrowCircle}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Work Process Section */}
        <section className={styles.processSection}>
          <div className="pv-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <span className={styles.sectionLabel}>OUR WORK PROCESS</span>
                <h2 className={styles.sectionTitle}>
                  THE BEST WORK HAPPENS WHEN WE BUILD IT TOGETHER
                </h2>
              </div>
              <Link href="/contact" style={{ background: '#fff263', color: '#0b0c10', padding: '10px 24px', borderRadius: '50px', fontWeight: 800, fontSize: '13px', textDecoration: 'none' }}>
                Start a Project →
              </Link>
            </div>

            <div className={styles.processGrid}>
              {processSteps.map((step) =>
                step.active ? (
                  <div key={step.num} className={styles.activeProcessCard}>
                    <div className={styles.processNum}>
                      <span>{step.num}</span> PROCESS
                    </div>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processText}>{step.text}</p>
                  </div>
                ) : (
                  <div key={step.num} className={styles.processCard}>
                    <div className={styles.processNum}>{step.num}</div>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processText}>{step.text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
