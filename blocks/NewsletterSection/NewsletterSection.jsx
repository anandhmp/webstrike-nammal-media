import React, { useState } from 'react';
import styles from './NewsletterSection.module.scss';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const marqueeItems = Array(12).fill('Professional Insights');

  return (
    <section className={styles.section} id="subscribe">
      <div className="pv-container">
        <div className={styles.card} data-aos="fade-up">
          <div className={styles.content}>
            <h2 className={styles.title}>
              Get the Vantage
              <br />
              Point
            </h2>

            <p className={styles.subtitle}>
              Join our community and receive a weekly briefing of our most potent insights
              directly to your inbox
            </p>

            {!submitted ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.checkboxRow}>
                  <input
                    type="checkbox"
                    id="sub-check"
                    checked={subscribed}
                    onChange={(e) => setSubscribed(e.target.checked)}
                    required
                  />
                  <label htmlFor="sub-check">Yes, subscribe me to your newsletter. *</label>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </form>
            ) : (
              <div className={styles.successState}>
                ✓ Thank you! You have been subscribed to our weekly briefing.
              </div>
            )}
          </div>

          {/* Infinite Scrollable Marquee Ticker */}
          <div className={styles.tickerRow}>
            <div className={styles.tickerTrack}>
              {marqueeItems.map((item, idx) => (
                <div key={`m1-${idx}`} className={styles.tickerItem}>
                  <span>{item}</span>
                  <div className={styles.dot} />
                </div>
              ))}
              {marqueeItems.map((item, idx) => (
                <div key={`m2-${idx}`} className={styles.tickerItem}>
                  <span>{item}</span>
                  <div className={styles.dot} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
