import React, { useState } from 'react';
import Head from 'next/head';
import { MapPin, Phone, Mail, Send, Clock, Building2 } from 'lucide-react';
import styles from '@/styles/Contact.module.scss';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('General');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const inquiryTypes = ['General', 'Partnership', 'Distribution', 'Careers'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | NAMMAL & Flowers TV</title>
        <meta
          name="description"
          content="Get connected with Flowers TV & NAMMAL Media. Partner with us, inquire about distribution, or reach out to our team."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>REACH OUT TO US</span>
            <h1 className={styles.heroTitle}>Get Connected</h1>
            <p className={styles.heroSubtitle}>
              Whether you want to partner with us, advertise, or inquire about distribution, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className={styles.quickCardsSection}>
          <div className="pv-container">
            <div className={styles.quickGrid}>
              <div className={styles.quickCard}>
                <div className={styles.iconCircle}>
                  <MapPin size={22} />
                </div>
                <div className={styles.quickCardBody}>
                  <span className={styles.quickCardTitle}>Headquarters</span>
                  <span className={styles.quickCardValue}>
                    Grandmaster's creative hub, 'Manjusha' TC 23/1777, OD4, Jawaharnagar, Kowdiar PO, Trivandrum
                  </span>
                </div>
              </div>

              <div className={styles.quickCard}>
                <div className={styles.iconCircle}>
                  <Phone size={22} />
                </div>
                <div className={styles.quickCardBody}>
                  <span className={styles.quickCardTitle}>Hotline & Support</span>
                  <span className={styles.quickCardValue}>
                    <a href="tel:+917907760700">+91 7907760700</a>
                  </span>
                </div>
              </div>

              <div className={styles.quickCard}>
                <div className={styles.iconCircle}>
                  <Mail size={22} />
                </div>
                <div className={styles.quickCardBody}>
                  <span className={styles.quickCardTitle}>Official Email</span>
                  <span className={styles.quickCardValue}>
                    <a href="mailto:grandmastercreativehub@gmail.com">grandmastercreativehub@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form and Campus Details Grid */}
        <section className={styles.formSection}>
          <div className="pv-container">
            <div className={styles.mainGrid}>
              {/* Form Card */}
              <div id="partner" className={styles.formCard}>
                <h2 className={styles.sectionTitle}>Send A Direct Message</h2>
                <p className={styles.sectionDesc}>
                  Select your inquiry type and fill out the details below. Our team responds within 24 business hours.
                </p>

                {submitted ? (
                  <div className={styles.successBox}>
                    Thank you for reaching out! Your message has been sent to our team.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Inquiry Type Pills */}
                    <div className={styles.inquiryTypeGroup}>
                      <span className={styles.inquiryLabel}>Inquiry Type:</span>
                      <div className={styles.pillGrid}>
                        {inquiryTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            className={`${styles.pillBtn} ${
                              inquiryType === type ? styles.activePill : ''
                            }`}
                            onClick={() => setInquiryType(type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className={styles.input}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          className={styles.input}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className={styles.input}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Brief topic"
                          className={styles.input}
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        required
                        placeholder="Write your message or partnership details here..."
                        className={styles.textarea}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Side Campus Info Card */}
              <div className={styles.campusCard}>
                <div>
                  <div className={styles.campusImgWrapper}>
                    <img
                      src="https://www.flowerstv.in/wp-content/uploads/2022/05/TOP-SINGER-2-1400x800.jpg"
                      alt="Insight Media City Campus"
                    />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                    Grandmaster's Creative Hub
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#9ca3af', lineHeight: 1.6 }}>
                    'Manjusha' TC 23/1777, OD4, Jawaharnagar, Kowdiar PO, Trivandrum. Creative headquarters for Flowers TV and NAMMAL Media.
                  </p>
                </div>

                <div className={styles.hoursBox}>
                  <div className={styles.hoursTitle}>
                    <Clock size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    Operating Hours
                  </div>
                  <p className={styles.hoursText}>
                    Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
                    Broadcast Operations: 24 Hours / 7 Days
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
