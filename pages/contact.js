import React from 'react';
import Head from 'next/head';
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, MapPin } from 'lucide-react';
import styles from '@/styles/Contact.module.scss';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | NAMMAL MEDIA - Malayaliyude Manasakshi</title>
        <meta
          name="description"
          content="Get in touch with NAMMAL MEDIA in Trivandrum, Kerala. Phone: +91 7907760700, Email: grandmastercreativehub@gmail.com. Explore collaboration opportunities & global branches."
        />
        <link rel="canonical" href="https://nammalmedia.com/contact" />
        <meta property="og:title" content="Contact Us | NAMMAL MEDIA" />
        <meta
          property="og:description"
          content="Contact NAMMAL MEDIA headquarters in Kowdiar, Trivandrum. Inquire about shows, collaborations, and media network partnerships."
        />
        <meta property="og:url" content="https://nammalmedia.com/contact" />
        <meta property="og:image" content="https://nammalmedia.com/assets/og-image.png" />
      </Head>

      <main className={styles.wrapper}>
        {/* Top Hero & Card Section with Background Image & Gradient */}
        <section className={styles.heroBgSection}>
          <div className="pv-container">
            {/* 1. Header & Subtitle */}
            <div className={styles.contactHeader}>
              <h1 className={styles.title}>
                LET'S WORK TOGETHER<br />
                WITH NAMMAL MEDIA<span>+</span>
              </h1>
              <p className={styles.subtitle}>
                We're always happy to hear from our viewers, brand partners, investors, and film enthusiasts.
              </p>
            </div>

            {/* 2. Main Contact Card Box */}
            <div className={styles.contactCard}>
              <div className={styles.cardGrid}>
                {/* Left Column */}
                <div className={styles.leftTalkCol}>
                  <div>
                    <h2 className={styles.talkHead}>LET'S TALK</h2>
                    <p className={styles.talkSub}>Ask us anything or just say hi 👋</p>

                    <div className={styles.contactBadges}>
                      <div className={styles.badgeItem} style={{ alignItems: 'flex-start', width: '100%', marginBottom: '4px' }}>
                        <MapPin size={18} className={styles.icon} style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ lineHeight: '1.5' }}>
                          Grandmaster's creative hub<br />
                          'Manjusha' TC 23/1777, OD4<br />
                          Jawaharnagar, Kowdiar PO, Trivandrum
                        </span>
                      </div>
                      <a href="tel:+917907760700" className={styles.badgeItem}>
                        <Phone size={18} className={styles.icon} />
                        +91 7907760700
                      </a>
                      <a href="mailto:grandmastercreativehub@gmail.com" className={styles.badgeItem}>
                        <Mail size={18} className={styles.icon} />
                        grandmastercreativehub@gmail.com
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className={styles.bottomDivider} />
                    <div className={styles.socialRow}>
                      <a
                        href="https://www.facebook.com/61590600346051/videos/aswamedham25-the-grand-launch-of-nammal-media-an-evening-dedicated-to-the-celebr/2023134008294949/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialCircle}
                        aria-label="Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                      <a
                        href="https://www.instagram.com/nammal__media/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialCircle}
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=GE1M8YzjxII"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialCircle}
                        aria-label="YouTube"
                      >
                        <Youtube size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Form Column */}
                <form
                  className={styles.rightFormCol}
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for your message! Our team will get back to you shortly.');
                  }}
                >
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="you@company.com" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Phone number</label>
                    <input type="tel" placeholder="+91 7907760700" />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Message</label>
                    <textarea placeholder="Write your message here" required />
                  </div>

                  <button type="submit" className={styles.sendBtn}>
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bottom Info Split Row (Opening Hours & Address) - Separate Solid Dark Section */}
        <section className={styles.bottomInfoSection}>
          <div className="pv-container">
            <div className={styles.bottomInfoContainer}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoHead}>OPENING HOURS</h3>
                <p className={styles.infoText}>
                  Monday - Saturday<br />
                  9am - 7pm IST
                </p>
              </div>

              <div className={styles.vertDivider} />

              <div className={styles.infoBlock}>
                <h3 className={styles.infoHead}>ADDRESS</h3>
                <p className={styles.infoText}>
                  Grandmaster's creative hub, 'Manjusha' TC 23/1777,<br />
                  OD4, Jawaharnagar, Kowdiar PO, Trivandrum
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Global Branches Dotted Map Section */}
        <section className={styles.branchesSection}>
          <div className="pv-container">
            <div className={styles.branchesHeaderRow}>
              <h2 className={styles.branchesTitle}>
                WE HAVE MANY<br />
                GLOBAL BRANCHES
              </h2>
              <div className={styles.branchesRight}>
                <p className={styles.branchesDesc}>
                  We have network hubs and broadcast facilities spread all over the world, so you can flexibly connect with our regional media studios.
                </p>
                <button className={styles.moreDetailsBtn}>
                  More Details
                </button>
              </div>
            </div>

            <div className={styles.mapWrapperRelative}>
              <div className={styles.mapContainer} />

              <div className={styles.pinContainerLayer}>
                {/* 1. Trivandrum Headquarters (Active Red Pin) */}
                <div className={`${styles.mapPin} ${styles.activePin}`} style={{ top: '64%', left: '68.5%' }}>
                  <div className={styles.dotPulse} />

                  {/* Popup Card */}
                  <div className={styles.pinPopupCard}>
                    <img
                      src="/assets/nammal-logo.png"
                      alt="Trivandrum Headquarters"
                      className={styles.popupThumb}
                    />
                    <div className={styles.popupInfo}>
                      <span className={styles.popupTitle}>
                        <MapPin size={12} color="#e11d48" /> Trivandrum, India
                      </span>
                      <span className={styles.popupAddress}>
                        Grandmaster's creative hub, Kowdiar PO
                      </span>
                      <a href="#maps" className={styles.popupBtn}>
                        See On Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Dubai UAE Studio */}
                <div className={styles.mapPin} style={{ top: '56%', left: '62%' }}>
                  <div className={styles.dotPulse} />
                </div>

                {/* 3. London UK Studio */}
                <div className={styles.mapPin} style={{ top: '34%', left: '48.5%' }}>
                  <div className={styles.dotPulse} />
                </div>

                {/* 4. New York USA Studio */}
                <div className={styles.mapPin} style={{ top: '40%', left: '26%' }}>
                  <div className={styles.dotPulse} />
                </div>

                {/* 5. Singapore Studio */}
                <div className={styles.mapPin} style={{ top: '65%', left: '76%' }}>
                  <div className={styles.dotPulse} />
                </div>

                {/* 6. Sydney Australia Studio */}
                <div className={styles.mapPin} style={{ top: '80%', left: '86%' }}>
                  <div className={styles.dotPulse} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Collaboration Opportunities Block Section */}
        <section className={styles.collabSection}>
          <div className="pv-container">
            <div className={styles.collabHeader}>
              <h2 className={styles.collabTitle}>
                NAMMAL MEDIA<span>+</span><br />
                COLLABORATION OPPORTUNITIES
              </h2>
              <p className={styles.collabSubtitle}>
                Fueling our creativity, we're excited to partner with dedicated filmmakers, producers, and industry professionals. If your project aligns with our vision, feel free to submit it for review. Here's the process:
              </p>
            </div>

            <div className={styles.collabBoxContainer}>
              <div className={styles.collabGrid}>
                {/* Card 1: Featured Active Card */}
                <div className={`${styles.collabCard} ${styles.activeCollabCard}`}>
                  <div className={styles.numBadge}>1</div>
                  <h3 className={styles.stepTitle}>SUBMIT YOUR PROJECT</h3>
                  <p className={styles.stepDesc}>
                    Connect with NAMMAL Media by emailing your project to{' '}
                    <a href="mailto:grandmastercreativehub@gmail.com">
                      grandmastercreativehub@gmail.com
                    </a>. Make it a catchy title, such as "Collaboration Opportunity: [Your Project Title]".
                  </p>
                </div>

                {/* Card 2 */}
                <div className={styles.collabCard}>
                  <div className={styles.numBadge}>2</div>
                  <h3 className={styles.stepTitle}>GUIDELINES</h3>
                  <p className={styles.stepDesc}>
                    Include a comprehensive project overview, specifying the genre, providing a synopsis, detailing your team. Attach supporting materials, whether it's a script and portfolio.
                  </p>
                </div>

                {/* Card 3 */}
                <div className={styles.collabCard}>
                  <div className={styles.numBadge}>3</div>
                  <h3 className={styles.stepTitle}>INTRODUCE YOURSELF</h3>
                  <p className={styles.stepDesc}>
                    Take a moment to introduce yourself and your team briefly. Share key highlights that showcase your experience and passion for filmmaking.
                  </p>
                </div>

                {/* Card 4 */}
                <div className={styles.collabCard}>
                  <div className={styles.numBadge}>4</div>
                  <h3 className={styles.stepTitle}>WHY NAMMAL MEDIA+</h3>
                  <p className={styles.stepDesc}>
                    Articulate why NAMMAL Media is the ideal home for your project. Highlight how your project aligns with NAMMAL Media's values and storytelling ethos.
                  </p>
                </div>

                {/* Card 5 */}
                <div className={styles.collabCard}>
                  <div className={styles.numBadge}>5</div>
                  <h3 className={styles.stepTitle}>REVIEW PROCESS</h3>
                  <p className={styles.stepDesc}>
                    Your submission undergoes meticulous review by our dedicated team. While we can't select every project, we deeply value and appreciate your creativity.
                  </p>
                </div>

                {/* Card 6 */}
                <div className={styles.collabCard}>
                  <div className={styles.numBadge}>6</div>
                  <h3 className={styles.stepTitle}>PREPARE COLLABORATION</h3>
                  <p className={styles.stepDesc}>
                    Following your submission, anticipate a confirmation or further communication regarding the acceptance of your collaboration with NAMMAL Media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}
