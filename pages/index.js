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
      tag: 'INFOTAINMENT',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 2,
      title: 'Thriller Junction',
      tag: 'DRAMA & THRILLER',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/Priyangri.jpg',
    },
    {
      id: 3,
      title: 'Under the Song Tree',
      tag: 'MUSIC SPECIAL',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/DESIGN_SM-1.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
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
        <title>Home | NAMMAL & Flowers TV Streaming</title>
        <meta
          name="description"
          content="Watch NAMMAL & Flowers TV official infotainment shows, English serials, short films, and special programs."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* Main Featured Hero Slider */}
        <div className={styles.heroSlider}>
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={styles.slideBackground}
              style={{
                backgroundImage: `url('${slide.image}')`,
                opacity: currentSlide === idx ? 1 : 0,
              }}
            >
              {currentSlide === idx && (
                <div className={styles.slideOverlay}>
                  <div className={styles.slideContent}>
                    <span className={styles.sliderTag}>{slide.tag}</span>
                    <h1 className={styles.sliderTitle}>{slide.title}</h1>
                    <div className={styles.sliderBtns}>
                      <Link href="/shows" className={styles.watchNowBtn}>
                        <Play size={18} fill="#0b0c10" /> Watch Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className={styles.sliderNavDots}>
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${currentSlide === idx ? styles.activeDot : ''
                  }`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Programs Section - All 10 Shows in English */}
        <section className={styles.showCategorySection}>
          <div className="pv-container">
            <div className={styles.categoryHeader}>
              <span className={styles.bulletDot}>·</span>
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

        {/* Video Teaser Filler Banner */}
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

        {/* Originals (Portrait Cards Section) */}
        <section className={styles.showCategorySection}>
          <div className="pv-container">
            <div className={styles.categoryHeader}>
              <span className={styles.bulletDot}>·</span>
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
