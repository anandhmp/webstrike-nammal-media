import React from 'react';
import styles from './HeroTicker.module.scss';

export default function HeroTicker() {
  const items = [
    'Professional Insights',
    'Market Trends',
    'Tech Disruption',
    'Strategic Leadership',
    'Vibrant Futures',
    'Startup Pulse',
    'Design Systems',
  ];

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerTrack}>
        <div className={styles.tickerGroup}>
          {items.map((item, idx) => (
            <div key={`t1-${idx}`} className={styles.tickerItem}>
              <span>{item}</span>
              <div className={styles.dot} />
            </div>
          ))}
        </div>
        <div className={styles.tickerGroup}>
          {items.map((item, idx) => (
            <div key={`t2-${idx}`} className={styles.tickerItem}>
              <span>{item}</span>
              <div className={styles.dot} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
