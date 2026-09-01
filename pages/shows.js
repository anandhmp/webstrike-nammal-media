import React from 'react';
import Head from 'next/head';
import { Play } from 'lucide-react';
import styles from '@/styles/Shows.module.scss';

export default function ShowsPage() {
  const shows = [
    {
      id: 1,
      title: 'Arivinte Athbuthadweep',
      image: 'https://i.ytimg.com/vi/aEsZ31erG6I/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCHLogY9T3rZSRXuD8SfXXUPysBBQ',
      link: 'https://www.youtube.com/playlist?list=PLdfL48cte0ro',
    },
    {
      id: 2,
      title: 'Aswamedham',
      image: 'https://i.ytimg.com/vi/KARe0v-1ZrY/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD0mzsu-S5p-T6kOIzBCoF7HFYYxg',
      link: 'https://www.youtube.com/playlist?list=PLQ8CTlWtt9jM',
    },
    {
      id: 3,
      title: 'Mahabharatham Uddharichu',
      image: 'https://i.ytimg.com/vi/b6iwVDYvnY0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAuiQSGPCBLtGkJQyjJt1Gv5W8fVQ',
      link: 'https://www.youtube.com/playlist?list=PLZpx-zLMRdq0',
    },
    {
      id: 4,
      title: 'Fun Fact',
      image: 'https://i.ytimg.com/vi/b6iwVDYvnY0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAuiQSGPCBLtGkJQyjJt1Gv5W8fVQ',
      link: 'https://www.youtube.com/playlist?list=PLOsToi2x-Kx8',
    },
  ];

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
          <h1 className={styles.heroTitle}>Shows & Programs</h1>
        </section>

        {/* Shows Grid Catalog */}
        <section className={styles.showsSection}>
          <div className="pv-container">
            <div className={styles.grid}>
              {shows.map((show) => (
                <div
                  key={show.id}
                  className={styles.card}
                  onClick={() => window.open(show.link, '_blank', 'noopener,noreferrer')}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={show.image}
                    alt={show.title}
                    className={styles.cardImg}
                  />

                  <div className={styles.playOverlay}>
                    <div className={styles.playIcon}>
                      <Play size={24} fill="#ffffff" />
                    </div>
                  </div>

                  <div className={styles.cardOverlay}>
                    <h3 className={styles.showTitle}>{show.title}</h3>
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
