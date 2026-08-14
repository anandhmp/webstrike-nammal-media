import React from 'react';
import Link from 'next/link';
import styles from './AdvantageSection.module.scss';

export default function AdvantageSection() {
  return (
    <section className={styles.section}>
      <div className="pv-container">
        <div className={styles.banner} data-aos="fade-up">
          <div className={styles.overlayCard}>
            <div className={styles.portraitWrapper}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="Executive Portrait"
              />
            </div>

            <h2 className={styles.title}>More than advice. An Advantage.</h2>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                Weekly
                <br />
                Updates
              </div>
              <div className={styles.statItem}>
                Exclusive
                <br />
                Reports
              </div>
              <div className={styles.statItem}>
                Expert
                <br />
                Insights
              </div>
            </div>

            <p className={styles.description}>
              Prism Vantage was founded on a simple promise: give decision makers a strategic
              edge. We bring you direct access to executive perspectives, actionable stories, and
              real-world tools for your business.
            </p>

            <Link href="/about" className={styles.readMoreBtn}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
