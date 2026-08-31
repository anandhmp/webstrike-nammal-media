import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Play, X } from 'lucide-react';
import styles from '@/styles/Home.module.scss';

export default function StreamingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:v=|\/embed\/|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : url;
  };

  const heroSlides = [
    {
      id: 1,
      title: 'Island of Knowledge',
      image: 'https://i.ytimg.com/vi/lMFWzbnjdAI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCCLF-CI_4SCUJTzvuJa_QOh4aAYw',
      link: 'https://www.youtube.com/watch?v=lMFWzbnjdAI'
    },
    {
      id: 2,
      title: 'Thriller Junction',
      image: 'https://i.ytimg.com/vi/SCH3cE8s_9M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAyabhEZ9oD9_Wu_v1U9WgafcgZdQ',
      link: 'https://www.youtube.com/watch?v=SCH3cE8s_9M'

    },
    {
      id: 3,
      title: 'Under the Song Tree',
      image: 'https://i.ytimg.com/vi/anJHnL-hFZ0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCuqaXC0yrsEmqyNjPcNhvflPHfQg',
      link: 'https://www.youtube.com/watch?v=anJHnL-hFZ0'

    },
    {
      id: 4,
      title: 'Under the Song Tree',
      image: 'https://i.ytimg.com/vi/SNs_nRomDWk/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBszgmYxBXRQDNLLbfaPaYXB_gtJw',
      link: 'https://www.youtube.com/watch?v=SNs_nRomDWk'

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
    { title: 'ARIVINTE ATHBUTHADWEEP', image: 'https://i.ytimg.com/vi/aEsZ31erG6I/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCHLogY9T3rZSRXuD8SfXXUPysBBQ', link: "https://www.youtube.com/watch?v=kkIrq016fn4&list=PLdfL48cte0ro" },
    { title: 'Aswamedham', image: 'https://i.ytimg.com/vi/KARe0v-1ZrY/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD0mzsu-S5p-T6kOIzBCoF7HFYYxg', link: "https://www.youtube.com/watch?v=p4QP-OTYvMY&list=PLQ8CTlWtt9jM" },
    { title: 'Mahabharatham uddharichu', image: 'https://i.ytimg.com/vi/b6iwVDYvnY0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAuiQSGPCBLtGkJQyjJt1Gv5W8fVQ', link: "https://www.youtube.com/watch?v=DBUkRrHX1Fo&list=PLZpx-zLMRdq0" },
    // { title: 'Paattu Marachottil', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg' },
    // { title: 'Thriller Junction', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/Priyangri.jpg' },
    // { title: 'Arikil nee undayirunnenkil', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/SEETHA-1-1-1400x800.jpg' },
    { title: 'Fun Fact', image: 'https://i.ytimg.com/vi/b6iwVDYvnY0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAuiQSGPCBLtGkJQyjJt1Gv5W8fVQ', link: 'https://www.youtube.com/watch?v=63otaGghePs&list=PLOsToi2x-Kx8' },
    // { title: 'Vox Pop', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/AMMAYUM-KUNJUM.jpg' },
    // { title: 'Special Programs', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg' },
    // { title: 'Pusthakomania', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x800.jpg' },
    // { title: 'Short Films', image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg' },
    // { title: 'Sitcoms', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UPPUM-MULAKUM-2_NOw-showig.jpg' },
  ];

  const originalsData = {
    title: 'NAMMAL Originals',
    items: [
      {
        id: 'RbxUoQFz1Ec',
        title: 'NAMMAL Original Short 1',
        embedUrl: 'https://www.youtube.com/embed/RbxUoQFz1Ec',
        link: 'https://youtube.com/shorts/RbxUoQFz1Ec',
      },
      {
        id: 'rb1--Hfn9h8',
        title: 'NAMMAL Original Short 2',
        embedUrl: 'https://www.youtube.com/embed/rb1--Hfn9h8',
        link: 'https://youtube.com/shorts/rb1--Hfn9h8',
      },
      {
        id: 'TXPG0gdt2qo',
        title: 'NAMMAL Original Short 3',
        embedUrl: 'https://www.youtube.com/embed/TXPG0gdt2qo',
        link: 'https://youtube.com/shorts/TXPG0gdt2qo',
      },
      {
        id: 'TQbAdUiMPB4',
        title: 'NAMMAL Original Short 4',
        embedUrl: 'https://www.youtube.com/embed/TQbAdUiMPB4',
        link: 'https://youtube.com/shorts/TQbAdUiMPB4',
      },
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
                Nammal Media,
                <br /> Malayaliyude Manasakshi
              </h1>
              <p className={styles.subtitle}>
                NAMMAL is a digital media platform built around the curiosity, stories and conversations of Malayalis everywhere. Bringing together knowledge, entertainment, culture, cinema, real-life experiences and contemporary discussions, NAMMAL connects generations through content that informs, entertains and inspires.
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
                <div
                  className={styles.playRing}
                  onClick={() => setActiveVideoUrl(heroSlides[currentSlide].link)}
                  style={{ cursor: 'pointer' }}
                  title="Play Video"
                >
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
                <span className={styles.statVal}>Nammal </span>
                <span className={styles.statLabel}>
                  മലയാളിയുടെ മനസ്സാക്ഷി
                </span>
              </div>

              <div className={styles.statCol}>
                <span className={styles.statVal}>WE</span>
                <span className={styles.statLabel}>
                  A powerful expression of togetherness
                </span>
              </div>

              <div className={styles.statCol}>
                <span className={styles.statVal}>Across</span>
                <span className={styles.statLabel}>
                  Generations
                </span>
              </div>

              {/* <div className={styles.statCol}>
                <span className={styles.statVal}>4</span>
                <span className={styles.statLabel}>
                  Major Digital Platforms
                </span>
              </div> */}

              <div className={styles.statCol}>
                <span className={styles.statVal}>Since</span>
                <span className={styles.statLabel}>
                  17 JULY 2026
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
                <div
                  key={idx}
                  className={styles.card}
                  onClick={() => item.link && setActiveVideoUrl(item.link)}
                  style={{ cursor: item.link ? 'pointer' : 'default' }}
                >
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

        {/* 4. Originals (Portrait YouTube Shorts Section) */}
        <section className={styles.showCategorySection}>
          <div className="pv-container">
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>{originalsData.title}</h2>
            </div>
            <div className={styles.rowGridPortrait}>
              {originalsData.items.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.cardPortrait}
                  style={{
                    aspectRatio: '9 / 16',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: '#12141d',
                  }}
                >
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      display: 'block',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Player Modal Overlay */}
        {activeVideoUrl && (
          <div
            className={styles.videoModalBackdrop}
            onClick={() => setActiveVideoUrl(null)}
          >
            <div
              className={styles.videoModalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModalBtn}
                onClick={() => setActiveVideoUrl(null)}
                aria-label="Close Video"
              >
                <X size={20} />
              </button>
              <div className={styles.responsiveIframeWrapper}>
                <iframe
                  src={getYouTubeEmbedUrl(activeVideoUrl)}
                  title="NAMMAL MEDIA Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
