import React, { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Contact.module.scss';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'HOW SOON WILL I RECEIVE A REPLY?',
      a: 'We usually respond within 24–48 business hours. Whether you have a question about show partnerships, event sponsorships, or brand advertising, our team will prioritize your inquiry and provide custom media support.',
    },
    {
      q: 'CAN I VISIT THE NAMMAL CREATIVE HUB STUDIO?',
      a: 'Yes! Our studio doors at Grandmaster\'s Creative Hub, Kowdiar PO, Trivandrum remain open for scheduled partner meetings, creative discussions, and broadcast collaborations.',
    },
    {
      q: 'HOW DO I SPONSOR OR PARTNER FOR SHOWS & EVENTS?',
      a: 'Simply fill out the inquiry form above or reach out directly to grandmastercreativehub@gmail.com or hotline +91 7907760700. Our media strategy team will share tailor-made broadcast & digital package options.',
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us | NAMMAL & Flowers TV Network</title>
        <meta
          name="description"
          content="Get in touch with Flowers TV and NAMMAL Media at Grandmaster's Creative Hub, Kowdiar PO, Trivandrum."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Hero Section with Giant Typography */}
        <section className={styles.hero}>
          <div className="pv-container">
            <h1 className={styles.giantTitle}>
              GET IN TOUCH <span className={styles.accentScript}>the dialogue</span>
            </h1>

            <div className={styles.heroBottomRow}>
              {/* Left Subtitle & Paragraph */}
              <div className={styles.heroLeftDesc}>
                <span className={styles.subLabel}>LET'S CREATE</span>
                <h2 className={styles.dialogueHead}>
                  IN <span>dialogue</span> WITH NAMMAL
                </h2>
                <p className={styles.pText}>
                  OUR STUDIO DOORS REMAIN OPEN FOR INQUIRIES, PARTNERSHIPS, BROADCAST ADVERTISING, AND NEW IDEAS.
                </p>
              </div>

              {/* Right Contact Quick Grid */}
              <div className={styles.heroContactGrid}>
                <div className={styles.infoCol}>
                  <span className={styles.infoLabel}>GENERAL INQUIRIES</span>
                  <p className={styles.infoVal}>
                    <a href="mailto:grandmastercreativehub@gmail.com">
                      grandmastercreativehub@gmail.com
                    </a>
                  </p>
                </div>

                <div className={styles.infoCol}>
                  <span className={styles.infoLabel}>HOTLINE & SUPPORT</span>
                  <p className={styles.infoVal}>
                    <a href="tel:+917907760700">+91 7907760700</a>
                  </p>
                </div>

                <div className={styles.infoCol}>
                  <span className={styles.infoLabel}>HEADQUARTERS</span>
                  <p className={styles.infoVal}>Grandmaster's creative hub</p>
                </div>

                <div className={styles.infoCol}>
                  <span className={styles.infoLabel}>STUDIO LOCATION</span>
                  <p className={styles.infoVal}>
                    'Manjusha' TC 23/1777, Kowdiar, Trivandrum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Split Form Section */}
        <section className={styles.formSection}>
          <div className="pv-container">
            <div className={styles.formGrid}>
              {/* Left Info Column */}
              <div className={styles.leftInfoCol}>
                <div>
                  <span className={styles.emailSubLabel}>GENERAL INQUIRIES</span>
                  <a
                    href="mailto:grandmastercreativehub@gmail.com"
                    className={styles.mainEmail}
                  >
                    grandmastercreativehub@gmail.com
                  </a>

                  <div style={{ marginTop: '24px' }}>
                    <span className={styles.emailSubLabel}>PHONE HOTLINE</span>
                    <a
                      href="tel:+917907760700"
                      style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', textDecoration: 'none' }}
                    >
                      +91 7907760700
                    </a>
                  </div>
                </div>

                <div className={styles.hoursBox}>
                  <div className={styles.hoursTitle}>OPERATING HOURS</div>
                  <p className={styles.hoursText}>
                    Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
                    Broadcast Operations: 24 Hours / 7 Days
                  </p>
                </div>
              </div>

              {/* Right Minimal Inputs Form */}
              <form
                className={styles.rightFormCol}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for contacting NAMMAL Media! We will respond shortly.');
                }}
              >
                <div className={styles.inputRow}>
                  <div className={styles.formGroup}>
                    <label>FIRST NAME</label>
                    <input type="text" placeholder="Your first name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>LAST NAME</label>
                    <input type="text" placeholder="Your last name" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="name@company.com" required />
                </div>

                <div className={styles.formGroup}>
                  <label>WHERE ARE YOU LOCATED?</label>
                  <input type="text" placeholder="City, Country" />
                </div>

                <div className={styles.formGroup}>
                  <label>COMPANY NAME</label>
                  <input type="text" placeholder="Your brand / organization" />
                </div>

                <div className={styles.formGroup}>
                  <label>HOW CAN WE HELP?</label>
                  <textarea
                    placeholder="Tell us about your campaign, partnership, or show inquiry..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 3. FAQ Accordion Section */}
        <section className={styles.faqSection}>
          <div className="pv-container">
            <div className={styles.faqHeader}>
              <h2 className={styles.faqTitle}>
                CLARITY IN <span>conversation</span> AND DIALOGUE
              </h2>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${
                    openFaq === idx ? styles.openItem : ''
                  }`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.plusMinus}>
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className={styles.faqAnswer}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
