import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Send, Phone, Mail, CheckCircle2, Megaphone } from 'lucide-react';
import styles from '@/styles/ServiceDetail.module.scss';

export default function AdvertisingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Sponsored Programmes & Segments',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offerings = [
    {
      num: '01',
      title: 'Sponsored Programmes & Segments',
      desc: 'Promote your brand through high-reach NAMMAL digital programmes, show sponsorships, and segment integrations.',
    },
    {
      num: '02',
      title: 'Brand Integrations',
      desc: 'Integrate your brand naturally into NAMMAL content, stories, and broadcast shows without interrupting audience engagement.',
    },
    {
      num: '03',
      title: 'Interview & Feature Content',
      desc: 'Tell your brand story and leadership vision through engaging studio interviews, founder spotlights, and featured stories.',
    },
    {
      num: '04',
      title: 'Campaign Promotions',
      desc: 'Amplify targeted marketing campaigns around NAMMAL’s special programmes, viral shorts, and festive broadcast events.',
    },
  ];

  return (
    <>
      <Head>
        <title>Advertising Services | NAMMAL MEDIA - Reach Kerala Audiences</title>
        <meta
          name="description"
          content="Connect your brand with Kerala through NAMMAL MEDIA's digital advertising, sponsored programmes, brand integrations, and campaign promotions."
        />
        <link rel="canonical" href="https://nammalmedia.com/services/advertising" />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Hero Banner Section */}
        <section className={`${styles.hero} ${styles.heroAdsBg}`}>
          <div className="pv-container">
            <div className={styles.heroContent}>
              <div className={styles.backRow}>
                <Link href="/services" className={styles.backLink}>
                  <ArrowLeft size={16} /> Back to All Services
                </Link>
              </div>
              <span className={styles.heroTag}>NAMMAL ADVERTISING</span>
              <h1 className={styles.heroTitle}>Advertising</h1>
              <p className={styles.heroSubtitle}>
                Reach Kerala through the power of Malayalam digital media. Connect your brand with Kerala through engaging content and strategic media promotions.
              </p>
              <div className={styles.heroCtaRow}>
                <a href="#enquiry" className={styles.primaryCta}>
                  Enquire Now <Megaphone size={16} />
                </a>
                <a href="tel:+917907760700" className={styles.secondaryCta}>
                  <Phone size={16} /> Call +91 7907760700
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Advertising Offerings Section */}
        <section className={styles.offeringsSection}>
          <div className="pv-container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.title}>Advertising Solutions</h2>
              <p className={styles.subText}>
                We offer targeted advertising formats designed to maximize brand recall and build genuine connection with Malayalam audiences worldwide.
              </p>
            </div>

            <div className={styles.featuresGrid}>
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
                <span className={styles.enquiryTag}>GET STARTED TODAY</span>
                <h2 className={styles.enquiryTitle}>Enquire About Advertising</h2>
                <p className={styles.enquiryText}>
                  Partner with NAMMAL MEDIA to amplify your brand. Fill out the enquiry form or get in touch with our creative brand team directly.
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
                    <p>Thank you for your enquiry! Our brand team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.enquiryForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name / Brand Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Enter your name or business"
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
                      <label htmlFor="serviceType">Advertising Format Interest</label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="Sponsored Programmes & Segments">Sponsored Programmes & Segments</option>
                        <option value="Brand Integrations">Brand Integrations</option>
                        <option value="Interview & Feature Content">Interview & Feature Content</option>
                        <option value="Campaign Promotions">Campaign Promotions</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Project Brief / Enquiry Details</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your advertising goals, campaign dates, or target audience"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Submit Advertising Enquiry <Send size={16} />
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
