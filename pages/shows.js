import React, { useState } from 'react';
import Head from 'next/head';
import { Play, ChevronDown } from 'lucide-react';
import styles from '@/styles/Shows.module.scss';

export default function ShowsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Infotainment',
    'Music & Culture',
    'Drama & Fiction',
    'Youth & Trends',
    'Specials',
    'Literature',
    'Cinema',
    'Sitcoms',
  ];

  const shows = [
    {
      id: 1,
      title: 'Island of Knowledge',
      category: 'Infotainment',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 2,
      title: 'Under the Song Tree',
      category: 'Music & Culture',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg',
    },
    {
      id: 3,
      title: 'Thriller Junction',
      category: 'Drama & Fiction',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/Priyangri.jpg',
    },
    {
      id: 4,
      title: 'If You Were Near',
      category: 'Drama & Fiction',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/SEETHA-1-1-1400x800.jpg',
    },
    {
      id: 5,
      title: 'Fun Fact',
      category: 'Infotainment',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1.jpg',
    },
    {
      id: 6,
      title: 'Vox Pop',
      category: 'Youth & Trends',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/AMMAYUM-KUNJUM.jpg',
    },
    {
      id: 7,
      title: 'Special Programs',
      category: 'Specials',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 8,
      title: 'Pusthakomania',
      category: 'Literature',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 9,
      title: 'Short Films',
      category: 'Cinema',
      image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg',
    },
    {
      id: 10,
      title: 'Sitcoms',
      category: 'Sitcoms',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UPPUM-MULAKUM-2_NOw-showig.jpg',
    },
    {
      id: 11,
      title: 'Aswamedham',
      category: 'Infotainment',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/BELOVED-H-700x880.jpg',
    },
    {
      id: 12,
      title: 'Mahabharatham Quoted by Murukan Kattakkada',
      category: 'Literature',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/sathyamyittum-V-700x880.jpg',
    },
  ];

  const filteredShows =
    activeCategory === 'All'
      ? shows
      : shows.filter((show) => show.category === activeCategory);

  return (
    <>
      <Head>
        <title>Shows & Programs | NAMMAL MEDIA - Malayaliyude Manasakshi</title>
        <meta
          name="description"
          content="Explore official Malayalam television shows, infotainment series, G. S. Pradeep’s Aswamedham, sitcoms, and stage events on NAMMAL MEDIA."
        />
        <link rel="canonical" href="https://nammalmedia.com/shows" />
        <meta property="og:title" content="Shows & Programs | NAMMAL MEDIA" />
        <meta
          property="og:description"
          content="Watch official infotainment shows, Aswamedham, sitcoms, and stage events from NAMMAL MEDIA."
        />
        <meta property="og:url" content="https://nammalmedia.com/shows" />
        <meta property="og:image" content="https://nammalmedia.com/assets/og-image.png" />
      </Head>

      <main className={styles.wrapper}>
        {/* Banner Header */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>SHOWS & PROGRAMS</h1>
        </section>

        {/* Category Filter Bar */}
        <div className={styles.filterBar}>
          <div className="pv-container">
            <div className={styles.filterScroll}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterTab} ${activeCategory === cat ? styles.active : ''
                    }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Shows Grid Catalog */}
        <section className={styles.showsSection}>
          <div className="pv-container">
            <div className={styles.grid}>
              {filteredShows.map((show) => (
                <div
                  key={show.id}
                  className={show.isPortrait ? styles.cardPortrait : styles.card}
                >
                  <img
                    src={show.image}
                    alt={show.title}
                    className={styles.cardImg}
                  />

                  <div className={styles.playOverlay}>
                    <div className={styles.playIcon}>
                      <Play size={24} fill="#0b0c10" />
                    </div>
                  </div>

                  <div className={styles.cardOverlay}>
                    <h3 className={styles.showTitle}>{show.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Manual Button */}
            <div className={styles.loadMoreWrapper}>
              <button className={styles.loadMoreBtn}>
                Load More <ChevronDown size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
