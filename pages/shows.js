import React, { useState } from 'react';
import Head from 'next/head';
import { Play, ChevronDown } from 'lucide-react';
import styles from '@/styles/Shows.module.scss';

export default function ShowsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Comedy Show',
    'Events',
    'Fiction',
    'Flowers Originals',
    'Game Shows',
    'Movies',
    'Reality Shows',
    'Sitcom',
  ];

  const shows = [
    {
      id: 1,
      title: 'Su Su',
      category: 'Sitcom',
      image: 'https://www.flowerstv.in/wp-content/uploads/2023/02/SUSU-1400-x-800-1-1.jpg',
    },
    {
      id: 2,
      title: 'Kuttikalavara Seniors',
      category: 'Game Shows',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/KUTTY-KALVARA-1400x800-1.jpg',
    },
    {
      id: 3,
      title: 'Star Magic',
      category: 'Game Shows',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg',
    },
    {
      id: 4,
      title: 'Uppum Mulakum 2',
      category: 'Sitcom',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UPPUM-MULAKUM-2_NOw-showig.jpg',
    },
    {
      id: 5,
      title: 'Priyankari',
      category: 'Fiction',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/Priyangri.jpg',
    },
    {
      id: 6,
      title: 'Ammayum Kunjum',
      category: 'Reality Shows',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/AMMAYUM-KUNJUM.jpg',
    },
    {
      id: 7,
      title: 'Chakkappazam',
      category: 'Sitcom',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/CHAKKAPAZHAM.jpg',
    },
    {
      id: 8,
      title: 'Comedy Kondattom',
      category: 'Comedy Show',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/COMEDY-KONDATTOM-1.jpg',
    },
    {
      id: 9,
      title: 'Comedy Utsavam',
      category: 'Comedy Show',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/Comedy-Utsavam-1-1400x800.jpg',
    },
    {
      id: 10,
      title: 'Seethapennu',
      category: 'Fiction',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/SEETHA-1-1-1400x800.jpg',
    },
    {
      id: 11,
      title: 'Flowers Top Singer',
      category: 'Reality Shows',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg',
    },
    {
      id: 12,
      title: 'Chapter XIII',
      category: 'Flowers Originals',
      isPortrait: true,
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/chapter-13-V-700x800.jpg',
    },
  ];

  const filteredShows =
    activeCategory === 'All'
      ? shows
      : shows.filter((show) => show.category === activeCategory);

  return (
    <>
      <Head>
        <title>SHOWS | Flowers TV</title>
        <meta
          name="description"
          content="Browse all popular Malayalam infotainment shows, reality series, comedy shows, fiction, game shows, and Flowers Originals."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* Banner Header */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>SHOWS</h1>
        </section>

        {/* Category Filter Bar */}
        <div className={styles.filterBar}>
          <div className="pv-container">
            <div className={styles.filterScroll}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterTab} ${
                    activeCategory === cat ? styles.active : ''
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
