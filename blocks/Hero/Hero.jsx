import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.scss';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroWrapper}>
      {/* Parallax Background */}
      <div
        className={styles.parallaxBg}
        style={{ transform: `translateY(${offsetY}px)` }}
      />

      <div className="pv-container">
        <div className={styles.heroContent} data-aos="fade-up">
          {/* Main Serif Headline */}
          <h1 className={styles.headline}>
            The Arena
            <br />
            of Ambition
          </h1>

          <p className={styles.subheadline}>Business Blog With Independent Opinions</p>

          {/* Card Group */}
          <div className={styles.cardGroup}>
            {/* Spotlight Card */}
            <div className={styles.spotlightCard}>
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                alt="Beyond the Buzzword"
                className={styles.cardImg}
              />
              <div className={styles.cardBody}>
                <span className={styles.badge}>Trending Posts</span>
                <Link href="/blog/beyond-the-buzzword">
                  <h3 className={styles.cardTitle}>
                    Beyond the Buzzword: What 'Digital Transformation' Really Means
                  </h3>
                </Link>
              </div>
            </div>

            {/* Readers Pill */}
            <div className={styles.readersPill}>
              <div className={styles.avatars}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Reader 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Reader 2"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Reader 3"
                />
              </div>
              <div className={styles.readersText}>
                Trusted reading for <strong>12,000+</strong> founders & operators
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
