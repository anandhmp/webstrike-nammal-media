import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Play,
  Trophy,
  ArrowRight,
  ArrowLeft,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  BookOpen,
  Film,
  HeartHandshake,
  MessageSquare,
  Sparkles,
  Compass,
  CheckCircle,
} from 'lucide-react';
import styles from '@/styles/About.module.scss';

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      icon: BookOpen,
      title: 'Knowledge',
      desc: 'Curiosity-driven programmes, educational features, facts and stories that make learning engaging.',
    },
    {
      icon: Film,
      title: 'Entertainment',
      desc: 'Music, cinema, humour, short films, sitcoms and programmes designed to entertain audiences across generations.',
    },
    {
      icon: HeartHandshake,
      title: 'Stories',
      desc: 'Real-life experiences, inspiring journeys and stories of people that deserve to be heard.',
    },
    {
      icon: MessageSquare,
      title: 'Conversations',
      desc: 'VOX POPs, contemporary discussions and perspectives on topics that matter to society.',
    },
    {
      icon: Sparkles,
      title: 'Culture',
      desc: 'Art, literature, music, traditions and the many things that make Malayalam culture unique.',
    },
    {
      icon: Compass,
      title: 'Discovery',
      desc: 'Content that encourages audiences to question, explore, learn and look at the world differently.',
    },
  ];

  const approachSteps = [
    {
      id: 0,
      title: 'CREATIVE IDEATION',
      image: '/assets/about/GS03.jpeg',
      points: [
        'Collaborative brainstorming for unique and compelling storylines.',
        'Emphasis on originality and innovation for every project.',
      ],
    },
    {
      id: 1,
      title: 'STRATEGIC PRE-PRODUCTION',
      image: '/assets/about/GS02.jpeg',
      points: [
        'Meticulous planning, script refinement, and casting decisions.',
        'Utilization of modern digital production frameworks.',
      ],
    },
    {
      id: 2,
      title: 'TECHNOLOGY INTEGRATION',
      image: '/assets/about/bg.jpg',
      points: [
        'Embrace latest digital broadcasting technologies to enhance storytelling.',
        'Integrate virtual production and modern camera workflows.',
      ],
    },
    {
      id: 3,
      title: 'PRODUCTION & CINEMATOGRAPHY',
      image: '/assets/about/GS02.jpeg',
      points: [
        'State-of-the-art multi-angle set direction and production setups.',
        'Capturing high dynamic range cinematic visuals.',
      ],
    },
    {
      id: 4,
      title: 'POST-PRODUCTION & DISTRIBUTION',
      image: '/assets/about/GS03.jpeg',
      points: [
        'Precision color grading, sound design, and master editing.',
        'Global digital OTT, YouTube, and multi-platform delivery.',
      ],
    },
  ];

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : approachSteps.length - 1));
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < approachSteps.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <Head>
        <title>About Us | NAMMAL MEDIA - Malayaliyude Manasakshi</title>
        <meta
          name="description"
          content="NAMMAL is a digital media platform built around the curiosity, stories and conversations of Malayalis everywhere. Led by Grand Master Dr. G. S. Pradeep."
        />
        <link rel="canonical" href="https://nammalmedia.com/about" />
        <meta property="og:title" content="About Us | NAMMAL MEDIA" />
        <meta
          property="og:description"
          content="A Media Platform Built Around Us. Knowledge, entertainment, stories, conversations, culture, and leadership behind NAMMAL MEDIA."
        />
        <meta property="og:url" content="https://nammalmedia.com/about" />
        <meta property="og:image" content="https://nammalmedia.com/assets/og-image.png" />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Hero Section - A Media Platform Built Around Us */}
        <section className={styles.hero}>
          <div className="pv-container">
            <h1 className={styles.heroTitle}>
              A Media Platform<br />Built Around Us
            </h1>
            <p className={styles.heroDesc}>
              NAMMAL is a digital media platform built around the curiosity, stories and conversations of Malayalis everywhere.
              <br /><br />
              The Malayalam word <strong>“Nammal”</strong> means <strong>“We”</strong>, representing togetherness, inclusivity and collective growth. That idea lies at the heart of the platform. NAMMAL brings people, ideas and experiences together through content that informs, entertains, inspires and connects.
              <br /><br />
              From knowledge and education to cinema, culture, lifestyle, real-life stories and contemporary conversations, NAMMAL creates a diverse space where every generation can find something meaningful to watch, explore and engage with.
            </p>

            <div className={styles.playRingWrapper}>
              <div className={styles.playRing} title="Explore Nammal Media">
                <div className={styles.playCircle}>
                  <Play size={22} fill="#ffffff" style={{ marginLeft: '2px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Knowledge & Passion Section (Split Row) */}
        <section className={styles.storySection}>
          <div className="pv-container">
            <div className={styles.splitRow}>
              <div className={styles.imgCol}>
                <img
                  src="/assets/about/GS02.jpeg"
                  alt="Knowledge and Entertainment - NAMMAL Media"
                  className={styles.splitImg}
                />
              </div>
              <div className={styles.textCol}>
                <h2 className={styles.sectionTitle}>
                  Knowledge &<br />Entertainment
                </h2>
                <p className={styles.sectionText}>
                  Kerala has always had a deep and enduring passion for knowledge. From science and history to technology, cinema, culture and the mysteries of everyday life, Malayalis have never stopped asking questions, exploring ideas and sharing stories.
                </p>
                <p className={styles.sectionText}>
                  The platform brings together <em>knowledge and entertainment</em> in a way that is engaging, accessible and relevant to today's audience. Whether it is a fascinating fact, an inspiring real-life story, a thought-provoking conversation or an entertaining programme, NAMMAL aims to make every piece of content worth discovering.
                </p>

                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <span className={styles.statVal}>നമ്മൾ</span>
                    <span className={styles.statLabel}>Malayaliyude Manasakshi</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statVal}>25+ Yrs</span>
                    <span className={styles.statLabel}>Broadcast Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What We Bring Together (6 Pillars Grid) */}
        <section className={styles.pillarsSection}>
          <div className="pv-container">
            <div className={styles.pillarsHeader}>
              <h2 className={styles.pillarsTitle}>What We Bring Together</h2>
              <p className={styles.pillarsSubtitle}>
                A rich spectrum of content designed for every generation to watch, explore and engage with.
              </p>
            </div>

            <div className={styles.pillarGrid}>
              {pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className={styles.pillarCard}>
                    <div className={styles.pillarIconCircle}>
                      <IconComp size={24} />
                    </div>
                    <h3 className={styles.pillarCardTitle}>{item.title}</h3>
                    <p className={styles.pillarCardDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Leadership Section - The Experience Behind NAMMAL */}
        <section className={styles.leadershipSection}>
          <div className="pv-container">
            <div className={`${styles.splitRow} ${styles.reverse}`}>
              <div className={styles.imgCol}>
                <img
                  src="/assets/about/GS03.jpg"
                  alt="Grand Master Dr. G. S. Pradeep - Leadership"
                  className={styles.splitImg}
                />
              </div>
              <div className={styles.textCol}>
                <span className={styles.leaderTag}>LEADERSHIP</span>
                <h2 className={styles.sectionTitle}>
                  The Experience<br />Behind Nammal
                </h2>
                <p className={styles.sectionText} style={{ fontSize: '16px', color: '#012a68', fontWeight: '700' }}>
                  NAMMAL is led by Grand Master Dr. G. S. Pradeep, one of Kerala's most recognised television and live entertainment personalities.
                </p>

                <ul className={styles.leaderList}>
                  <li className={styles.leaderListItem}>
                    <span className={styles.checkDot} />
                    <span>With more than 25 years of experience in television and live entertainment, Dr. G. S. Pradeep has built a distinctive connection with audiences through his iconic reverse quiz programmes and extensive work across television and live stages.</span>
                  </li>
                  <li className={styles.leaderListItem}>
                    <span className={styles.checkDot} />
                    <span>His television career has extended across major South Indian languages, along with eight years of programming experience in Sri Lanka.</span>
                  </li>
                  <li className={styles.leaderListItem}>
                    <span className={styles.checkDot} />
                    <span>Over the years, he has also performed before audiences across North America, Europe, Australia and the Middle East.</span>
                  </li>
                  <li className={styles.leaderListItem}>
                    <span className={styles.checkDot} />
                    <span>His experience, public connection and understanding of audiences provide NAMMAL with a strong foundation as it enters a new chapter in Malayalam digital media.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Approach Horizontal Cards Slider */}
        {/* <section className={styles.approachSection}>
          <div className="pv-container">
            <div className={styles.approachHeaderRow}>
              <div className={styles.headerText}>
                <h2 className={styles.approachTitle}>Our Approach</h2>
                <p className={styles.approachDesc}>
                  We believe in a systematic and strategic approach to content creation, ensuring every story resonates with audiences and inspires curiosity.
                </p>
              </div>

              <div className={styles.navButtons}>
                <button
                  className={styles.navBtn}
                  onClick={handlePrevStep}
                  aria-label="Previous step"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  className={`${styles.navBtn} ${styles.activeBtn}`}
                  onClick={handleNextStep}
                  aria-label="Next step"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className={styles.timelineTrack}>
              <div
                className={styles.timelineProgress}
                style={{ width: `${(activeStep / (approachSteps.length - 1)) * 100}%` }}
              />
              {approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`${styles.timelineDot} ${activeStep === idx ? styles.activeDot : ''}`}
                  onClick={() => setActiveStep(idx)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>

            <div className={styles.approachSliderContainer}>
              <div
                className={styles.approachSliderTrack}
                style={{
                  '--active-step': activeStep,
                }}
              >
                {approachSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    className={`${styles.approachCard} ${activeStep === idx ? styles.activeApproach : ''}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <div className={styles.approachImgWrapper}>
                      <img
                        src={step.image}
                        alt={step.title}
                        className={styles.approachImg}
                      />
                    </div>
                    <h3 className={styles.approachCardTitle}>{step.title}</h3>
                    <ul className={styles.approachList}>
                      {step.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* 6. Bottom Overlapping CTA Banner */}
        <div className="pv-container">
          <div className={styles.bottomCtaWrapper}>
            <div className={styles.ctaBgBanner}>
              <img
                src="/assets/about/bg.jpg"
                alt="Get in Touch Background"
                className={styles.ctaImg}
              />
            </div>

            <div className={styles.ctaCardOverlay}>
              <h3 className={styles.ctaHead}>
                Get in Touch<br />
                With Nammal Media<span>+</span>
              </h3>
              <p className={styles.ctaSub}>
                We're always happy to hear from our audiences, partners, and media enthusiasts.
              </p>

              <div className={styles.ctaDivider} />

              <div className={styles.ctaBottomRow}>
                <div className={styles.socialIcons}>
                  <a
                    href="https://www.youtube.com/@NAMMAL-MalayaliyudeManasakshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconCircle}
                    aria-label="YouTube"
                  >
                    <Youtube size={16} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconCircle}
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconCircle}
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                </div>

                <Link href="/contact" className={styles.ctaBtnWhite}>
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
