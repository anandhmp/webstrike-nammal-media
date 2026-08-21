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
      title: 'Flowers Top Singer',
      tag: 'NOW STREAMING',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 2,
      title: 'Uppum Mulakum',
      tag: 'FAMILY SITCOM',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UM-1400x800.jpg',
    },
    {
      id: 3,
      title: 'Star Magic',
      tag: 'GAME & ENTERTAINMENT',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/DESIGN_SM-1.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const sectionsData = [
    {
      title: 'Now Showing',
      items: [
        { title: 'Uppum Mulakum 2', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UPPUM-MULAKUM-2_NOw-showig.jpg' },
        { title: 'Su Su', image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg' },
      ],
    },
    {
      title: 'Game Shows',
      items: [
        { title: 'Flowers Oru Kodi', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1400x800.jpg' },
        { title: 'Star Magic', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg' },
        { title: 'Tammaar Padaar', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TAMAAR-PADAR-1400x800.jpg' },
        { title: 'Adichu Mone', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/ADICHU-MONE-1400x800.jpg' },
        { title: 'Kuttikalavara Seniors', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/KUTTY-KALVARA-1400x800-1.jpg' },
      ],
    },
    {
      title: 'Reality Shows',
      items: [
        { title: 'Ammayum Kunjum', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/AMMAYUM-KUNJUM.jpg' },
        { title: 'Flowers Top Singer', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg' },
        { title: 'IOBB', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/IOBB-1400x800.jpg' },
        { title: 'Flowers Top Singer 2', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/Top-singer-1400x800.jpg' },
      ],
    },
    {
      title: 'Sitcom',
      items: [
        { title: 'Namaskaram Flowers', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/NAMASKARAM-FLOWERS-1400x800.jpg' },
        { title: 'Uppum Mulakum 2', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UPPUM-MULAKUM-2_NOw-showig.jpg' },
        { title: 'Chakkappazam', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/CHAKKAPAZHAM.jpg' },
        { title: 'Su Su', image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg' },
        { title: 'Uppum Mulakum', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/UPPUM-MULAKUM-1400x800.jpg' },
      ],
    },
    {
      title: 'Talent Shows',
      items: [
        { title: 'Utsavam Super Star', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/US-1.jpg' },
        { title: 'Katturumbu', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/KATTURUMBU-1400x800.jpg' },
        { title: 'Midumidukki', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/MIDUMIDIKKI-1400x800.jpg' },
      ],
    },
    {
      title: 'Comedy Show',
      items: [
        { title: 'Comedy Kondattom', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/COMEDY-KONDATTOM-1.jpg' },
        { title: 'Comedy Utsavam', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/Comedy-Utsavam-1-1400x800.jpg' },
        { title: 'Comedy Super Nite', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/CSN-1400x800.jpg' },
      ],
    },
    {
      title: 'Fiction',
      items: [
        { title: 'Seetha', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/SEETHA-1400x800.jpg' },
        { title: 'Priyankari', image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/Priyangri.jpg' },
        { title: 'Arayannangalude Veedu', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/ARAYANGALUDE-VEEDU-1400x800.jpg' },
        { title: 'Nandanam', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/NANDANAM-3.jpg' },
        { title: 'Seethapennu', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/SEETHA-1-1-1400x800.jpg' },
      ],
    },
  ];

  const originalsData = {
    title: 'Flowers Originals',
    items: [
      { title: 'Chapter XIII', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x880.jpg' },
      { title: 'Beloved', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/BELOVED-H-700x880.jpg' },
      { title: 'Sathyamayittum', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/sathyamyittum-V-700x880.jpg' },
      { title: 'Poison', image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/POISON-V-700x880.jpg' },
    ],
  };

  return (
    <>
      <Head>
        <title>Home | Flowers TV & NAMMAL Streaming</title>
        <meta
          name="description"
          content="Watch Flowers TV and NAMMAL Malayalam entertainment shows, serials, game shows, sitcoms, and reality shows."
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
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.activeDot : ''
                }`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Section 1 & 2: Now Showing & Game Shows */}
        {sectionsData.slice(0, 2).map((sec, sIdx) => (
          <section key={sIdx} className={styles.showCategorySection}>
            <div className="pv-container">
              <div className={styles.categoryHeader}>
                <span className={styles.bulletDot}>·</span>
                <h2 className={styles.categoryTitle}>{sec.title}</h2>
              </div>
              <div className={styles.rowGrid}>
                {sec.items.map((item, idx) => (
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
        ))}

        {/* Video Teaser Filler Banner */}
        <section className="pv-container">
          <div className={styles.videoTeaserSection}>
            <video
              src="https://www.flowerstv.in/Videos/FILLER%2001.mp4"
              poster="https://www.flowerstv.in/wp-content/uploads/2021/08/IMAGE-1-scaled.jpg"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </section>

        {/* Remaining Sections: Reality Shows, Sitcom, Talent Shows, Comedy Show, Fiction */}
        {sectionsData.slice(2).map((sec, sIdx) => (
          <section key={sIdx} className={styles.showCategorySection}>
            <div className="pv-container">
              <div className={styles.categoryHeader}>
                <span className={styles.bulletDot}>·</span>
                <h2 className={styles.categoryTitle}>{sec.title}</h2>
              </div>
              <div className={styles.rowGrid}>
                {sec.items.map((item, idx) => (
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
        ))}

        {/* Flowers Originals (Portrait Cards Section) */}
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
