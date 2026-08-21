import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Play, Trophy, ArrowRight, ArrowLeft, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import styles from '@/styles/About.module.scss';

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0);

  const teamMembers = [
    {
      name: 'R. Sreekandan Nair',
      role: 'Director',
      image: 'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg',
    },
    {
      name: 'Gokulakrishnan',
      role: 'Writer',
      image: 'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg',
    },
    {
      name: 'Anand M. P.',
      role: 'Writer',
      image: 'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg',
    },
    {
      name: 'Elisabeth Taylor',
      role: 'Cinematographer',
      image: 'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg',
    },
    {
      name: 'Robert Paul',
      role: 'Co-Producer',
      image: 'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg',
    },
    {
      name: 'Christina Rose',
      role: 'Production Assistant',
      image: 'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg',
    },
  ];

  const approachSteps = [
    {
      id: 0,
      title: 'CREATIVE IDEATION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1400x800.jpg',
      points: [
        'Collaborative brainstorming for unique and compelling storylines.',
        'Emphasis on originality and innovation for every project.',
      ],
    },
    {
      id: 1,
      title: 'STRATEGIC PRE-PRODUCTION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/KUTTY-KALVARA-1400x800-1.jpg',
      points: [
        'Meticulous planning, script refinement, and casting decisions.',
        'Utilization of project management tools for efficient communication.',
      ],
    },
    {
      id: 2,
      title: 'TECHNOLOGY INTEGRATION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg',
      points: [
        'Embrace the latest cinematic technologies to enhance storytelling.',
        'Integrate virtual production and advanced cinematography tools.',
      ],
    },
    {
      id: 3,
      title: 'PRODUCTION & CINEMATOGRAPHY',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg',
      points: [
        'State-of-the-art camera setups and multi-angle set direction.',
        'Capturing high dynamic range cinematic visuals.',
      ],
    },
    {
      id: 4,
      title: 'POST-PRODUCTION & DISTRIBUTION',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
      points: [
        'Precision color grading, sound design, and master editing.',
        'Global theatrical, OTT, and broadcast delivery.',
      ],
    },
  ];

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : approachSteps.length - 1));
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < approachSteps.length - 1 ? prev + 1 : 0));
  };

  const awards = [
    {
      num: '01',
      title: 'Cinematic Mastery Award',
      desc: 'Acknowledged in 2023, this award celebrates Cinevision+\'s exceptional craftsmanship and storytelling prowess in the film industry.',
    },
    {
      num: '02',
      title: 'Innovation in Filmmaking',
      desc: 'In 2022, Cinevision+ received recognition from the Technology and Arts Sector for pioneering approaches and technological advancements in filmmaking.',
    },
    {
      num: '03',
      title: 'Audience Choice Accolade',
      desc: 'Securing the Audience Choice Accolade in 2021, Cinevision+ is celebrated for creating impactful and beloved cinematic experiences in the Entertainment.',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us | NAMMAL MEDIA - Malayaliyude Manasakshi</title>
        <meta
          name="description"
          content="Learn about NAMMAL MEDIA (നമ്മള് - മലയാളിയുടെ മനസ്സാക്ഷി), Kerala's premier digital media network, our leadership team, founding story, awards, and approach."
        />
        <link rel="canonical" href="https://nammalmedia.com/about" />
        <meta property="og:title" content="About Us | NAMMAL MEDIA" />
        <meta
          property="og:description"
          content="NAMMAL MEDIA - Malayaliyude Manasakshi. Founding story, production vision, leadership, and accolades."
        />
        <meta property="og:url" content="https://nammalmedia.com/about" />
        <meta property="og:image" content="https://nammalmedia.com/assets/og-image.png" />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Hero Section - Single Background Image with Black Gradient */}
        <section className={styles.hero}>
          <div className="pv-container">
            <h1 className={styles.heroTitle}>ABOUT US</h1>
            <p className={styles.heroDesc}>
              Welcome to NAMMAL MEDIA, where storytelling meets innovation, and visual narratives come to life. As a pioneering force in the world of cinematic production and broadcasting, NAMMAL Media is dedicated to pushing the boundaries of creativity, technology, and storytelling. Our passion lies in crafting compelling visual experiences that captivate, inspire, and leave a lasting impact.
            </p>

            <div className={styles.playRingWrapper}>
              <div className={styles.playRing}>
                <div className={styles.playCircle}>
                  <Play size={22} fill="#0b0c10" style={{ marginLeft: '2px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Manifesto & Founding Story Section */}
        <section className={styles.storySection}>
          <div className="pv-container">
            {/* Split Row 1: Manifesto */}
            <div className={styles.splitRow}>
              <div className={styles.imgCol}>
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg"
                  alt="Broadcast Manifesto"
                  className={styles.splitImg}
                />
              </div>
              <div className={styles.textCol}>
                <h2 className={styles.sectionTitle}>
                  OUR CINEMATIC<br />MANIFESTO
                </h2>
                <p className={styles.sectionText}>
                  At NAMMAL MEDIA, we are not merely storytellers; we are architects of visual narratives, weaving tales that transcend the ordinary.
                </p>
                <p className={styles.sectionText}>
                  Our mission is to redefine cinematic excellence, leveraging innovation, creativity, and cutting-edge technology to craft immersive experiences that linger in the hearts of audiences.
                </p>
                <p className={styles.sectionText}>
                  Guided by a vision of pushing the boundaries of storytelling, we believe in transforming concepts into visual symphonies that captivate, inspire, and endure.
                </p>
              </div>
            </div>

            {/* Split Row 2: Founding Story */}
            <div className={`${styles.splitRow} ${styles.reverse}`}>
              <div className={styles.imgCol}>
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1400x800.jpg"
                  alt="Founding Story"
                  className={styles.splitImg}
                />
              </div>
              <div className={styles.textCol}>
                <h2 className={styles.sectionTitle}>FOUNDING STORY</h2>
                <p className={styles.sectionText}>
                  In the genesis of NAMMAL MEDIA, our narrative unfolded with a profound passion for storytelling and a shared vision among a group of cinematic enthusiasts.
                </p>
                <p className={styles.sectionText}>
                  Founded on the principles of artistic integrity and a commitment to pushing the envelope, our journey began with the belief that each frame has the power to resonate and etch itself into the tapestry of cinematic history.
                </p>

                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <span className={styles.statVal}>2015</span>
                    <span className={styles.statLabel}>Year Founded</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statVal}>10M+</span>
                    <span className={styles.statLabel}>Global Viewers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Meet Our Leadership Team */}
        <section className={styles.teamSection}>
          <div className="pv-container">
            <h2 className={styles.teamHeaderTitle}>
              MEET OUR TEAM<br />
              MEMBER NAMMAL MEDIA<span>+</span>
            </h2>

            <div className={styles.teamGrid}>
              {teamMembers.map((member, idx) => (
                <div key={idx} className={styles.teamCard}>
                  <div className={styles.avatarWrapper}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.avatarImg}
                    />
                    <div className={styles.linkedinBadge}>in</div>
                  </div>
                  <span className={styles.memberRole}>{member.role}</span>
                  <h3 className={styles.memberName}>{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Crafting Excellence in Every Frame */}
        <section className={styles.frameSection}>
          <div className="pv-container">
            <h2 className={styles.frameTitleHeader}>
              CRAFTING EXCELLENCE<br />
              IN EVERY FRAME
            </h2>
            <p className={styles.frameSubTitle}>
              Explore a curated showcase of our finest projects each a testament to our commitment to quality and an unwavering pursuit of cinematic brilliance.
            </p>

            <div className={styles.featuredFrame}>
              <img
                src="https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg"
                alt="Web Series Production"
                className={styles.frameImg}
              />
              <div className={styles.frameOverlay}>
                <h3 className={styles.frameTitle}>WEB SERIES PRODUCTION</h3>
                <span className={styles.frameYear}>2023</span>
              </div>
            </div>

            <div className={styles.smallFramesGrid}>
              <div className={styles.smallFrameCard}>
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg"
                  alt="Cinema"
                  className={styles.smallImg}
                />
                <div className={styles.smallOverlay}>
                  <h4 className={styles.smallTitle}>CINEMA</h4>
                  <span className={styles.smallYear}>2023</span>
                </div>
              </div>

              <div className={styles.smallFrameCard}>
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1400x800.jpg"
                  alt="Film Production"
                  className={styles.smallImg}
                />
                <div className={styles.smallOverlay}>
                  <h4 className={styles.smallTitle}>FILM PRODUCTION</h4>
                  <span className={styles.smallYear}>2023</span>
                </div>
              </div>

              <div className={styles.smallFrameCard}>
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x800.jpg"
                  alt="Movie Series"
                  className={styles.smallImg}
                />
                <div className={styles.smallOverlay}>
                  <h4 className={styles.smallTitle}>MOVIE SERIES</h4>
                  <span className={styles.smallYear}>2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Approach Horizontal Cards Slider */}
        <section className={styles.approachSection}>
          <div className="pv-container">
            <div className={styles.approachHeaderRow}>
              <div className={styles.headerText}>
                <h2 className={styles.approachTitle}>OUR APPROACH</h2>
                <p className={styles.approachDesc}>
                  We believe in a systematic and strategic approach to copywriting, ensuring every word resonates with your audience and accomplishes your goals.
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

            {/* Timeline Track with Nodes */}
            <div className={styles.timelineTrack}>
              <div
                className={styles.timelineProgress}
                style={{ width: `${(activeStep / (approachSteps.length - 1)) * 100}%` }}
              />
              {approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`${styles.timelineDot} ${
                    activeStep === idx ? styles.activeDot : ''
                  }`}
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
                    className={`${styles.approachCard} ${
                      activeStep === idx ? styles.activeApproach : ''
                    }`}
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
        </section>

        {/* 6. Awards & Accolades List */}
        <section className={styles.awardsSection}>
          <div className="pv-container">
            <h2 className={styles.awardsHeaderTitle}>
              A CINEMATIC JOURNEY<br />
              CELEBRATED
            </h2>
            <p className={styles.awardsSubTitle}>
              A world of cinematic brilliance as we proudly showcase the many awards NAMMAL MEDIA has earned
            </p>

            <div className={styles.awardsList}>
              {awards.map((item) => (
                <div key={item.num} className={styles.awardItem}>
                  <div className={styles.awardNum}>{item.num}</div>
                  <div className={styles.awardBadgeIcon}>
                    <Trophy size={32} />
                  </div>
                  <div className={styles.awardContent}>
                    <h3 className={styles.awardTitle}>{item.title}</h3>
                    <p className={styles.awardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Bottom Overlapping CTA Banner */}
        <div className="pv-container">
          <div className={styles.bottomCtaWrapper}>
            <div className={styles.ctaBgBanner}>
              <img
                src="https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1400x800.jpg"
                alt="Get in Touch Background"
                className={styles.ctaImg}
              />
            </div>

            <div className={styles.ctaCardOverlay}>
              <h3 className={styles.ctaHead}>
                GET IN TOUCH<br />
                WITH NAMMAL MEDIA<span>+</span>
              </h3>
              <p className={styles.ctaSub}>
                We're always happy to hear from our customers, investors, and film enthusiasts.
              </p>

              <div className={styles.ctaDivider} />

              <div className={styles.ctaBottomRow}>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.iconCircle} aria-label="Facebook">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className={styles.iconCircle} aria-label="Twitter">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className={styles.iconCircle} aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className={styles.iconCircle} aria-label="YouTube">
                    <Youtube size={16} />
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
