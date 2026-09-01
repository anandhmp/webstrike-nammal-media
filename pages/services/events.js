import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Send, Phone, Mail, CheckCircle2, Trophy } from 'lucide-react';
import styles from '@/styles/ServiceDetail.module.scss';

export default function EventsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Celebrity Appearances',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offerings = [
    {
      num: '01',
      title: 'Celebrity Appearances',
      desc: 'Bring star power, prominent film personalities, and renowned artists to your corporate or public event.',
    },
    {
      num: '02',
      title: 'Stage Shows',
      desc: 'Create highly engaging, entertaining stage shows and live broadcast events produced with grand excellence.',
    },
    {
      num: '03',
      title: 'Event Hosting & Anchoring',
      desc: 'Professional hosting, Grand Master anchoring, and stage coordination for seamless event execution.',
    },
    {
      num: '04',
      title: 'Corporate Events',
      desc: 'Create impactful corporate gatherings, annual meets, awards ceremonies, and milestone celebrations.',
    },
    {
      num: '05',
      title: 'Brand Launches',
      desc: 'Make product launches and brand unveilings unforgettable through creative media staging and publicity.',
    },
    {
      num: '06',
      title: 'Public Events',
      desc: 'Connect directly with large public audiences through engaging outdoor festivals and mass media events.',
    },
    {
      num: '07',
      title: 'Cultural Programmes',
      desc: 'Celebrate Kerala’s heritage and arts through meaningful cultural events and traditional stage productions.',
    },
  ];

  return (
    <>
      <Head>
        <title>Events & Experiences | NAMMAL MEDIA - Live Shows & Anchoring</title>
        <meta
          name="description"
          content="Create memorable experiences and amplify them across media. From corporate events to cultural programmes, stage shows, celebrity appearances, and event hosting."
        />
        <link rel="canonical" href="https://nammalmedia.com/services/events" />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Hero Banner Section */}
        <section className={`${styles.hero} ${styles.heroEventsBg}`}>
          <div className="pv-container">
            <div className={styles.heroContent}>
              <div className={styles.backRow}>
                <Link href="/services" className={styles.backLink}>
                  <ArrowLeft size={16} /> Back to All Services
                </Link>
              </div>
              <span className={styles.heroTag}>NAMMAL EVENTS</span>
              <h1 className={styles.heroTitle}>Events</h1>
              <p className={styles.heroSubtitle}>
                Create memorable experiences and amplify them across media. From corporate events to cultural programmes, we create experiences that connect and engage.
              </p>
              <div className={styles.heroCtaRow}>
                <a href="#enquiry" className={styles.primaryCta}>
                  Enquire Now <Trophy size={16} />
                </a>
                <a href="tel:+917907760700" className={styles.secondaryCta}>
                  <Phone size={16} /> Call +91 7907760700
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Events Offerings Section */}
        <section className={styles.offeringsSection}>
          <div className="pv-container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.title}>Event Production & Management</h2>
              <p className={styles.subText}>
                We bring complete concept design, celebrity curation, media broadcasting, and flawless stage management to every event.
              </p>
            </div>

            <div className={`${styles.featuresGrid} ${styles.threeCol}`}>
              {offerings.map((item, idx) => (
                <div key={idx} className={styles.featureCard}>
                  <div className={styles.featureNum}>{item.num}</div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Interactive Enquiry Session Form */}
        <section id="enquiry" className={styles.enquirySection}>
          <div className="pv-container">
            <div className={styles.enquiryContainer}>
              {/* Left Info Column */}
              <div className={styles.enquiryInfoCol}>
                <span className={styles.enquiryTag}>PLAN YOUR EVENT</span>
                <h2 className={styles.enquiryTitle}>Enquire About Events</h2>
                <p className={styles.enquiryText}>
                  Planning a stage show, corporate launch, or cultural event? Submit your details to collaborate with NAMMAL MEDIA’s event production division.
                </p>

                <div className={styles.quickContactBox}>
                  <a href="tel:+917907760700" className={styles.contactItem}>
                    <div className={styles.iconCircle}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Call Us Directly</div>
                      <div>+91 7907760700</div>
                    </div>
                  </a>

                  <a href="mailto:grandmastercreativehub@gmail.com" className={styles.contactItem}>
                    <div className={styles.iconCircle}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Email Our Team</div>
                      <div>grandmastercreativehub@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Form Column */}
              <div>
                {submitted ? (
                  <div className={styles.successMsg}>
                    <CheckCircle2 size={24} style={{ marginBottom: '8px' }} />
                    <p>Thank you for your event enquiry! Our production team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.enquiryForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name / Organization *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Enter your name or company"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="serviceType">Event Service Category</label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="Celebrity Appearances">Celebrity Appearances</option>
                        <option value="Stage Shows">Stage Shows</option>
                        <option value="Event Hosting & Anchoring">Event Hosting & Anchoring</option>
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Brand Launches">Brand Launches</option>
                        <option value="Public Events">Public Events</option>
                        <option value="Cultural Programmes">Cultural Programmes</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Event Date & Requirements</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Provide details such as expected event date, location, audience size, or specific requirements"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Submit Event Enquiry <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
