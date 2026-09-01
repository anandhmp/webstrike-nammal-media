import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Send, Phone, Mail, CheckCircle2, Rocket } from 'lucide-react';
import styles from '@/styles/ServiceDetail.module.scss';

export default function BrandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Brand Stories & Features',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offerings = [
    {
      num: '01',
      title: 'Brand Stories & Features',
      desc: 'Showcase your brand through engaging stories, documentary-style features, and rich visual storytelling.',
    },
    {
      num: '02',
      title: 'Corporate Videos',
      desc: 'Present your company, people, values, and strategic vision through high-production impactful corporate films.',
    },
    {
      num: '03',
      title: 'Brand Films',
      desc: 'Turn your brand story into powerful cinematic visual experiences that resonate with audience emotions.',
    },
    {
      num: '04',
      title: 'Founder / CEO Interviews',
      desc: 'Put your leadership vision, industry insights, and entrepreneurial journey directly in the spotlight.',
    },
    {
      num: '05',
      title: 'Special Brand Features',
      desc: 'Give your brand a dedicated highlight presence across NAMMAL MEDIA digital channels and broadcast segments.',
    },
  ];

  return (
    <>
      <Head>
        <title>Branding Services | NAMMAL MEDIA - Visual Storytelling</title>
        <meta
          name="description"
          content="Tell your brand story through content people want to watch. Build a stronger brand presence through compelling visual storytelling, brand films, corporate videos, and leadership interviews."
        />
        <link rel="canonical" href="https://nammalmedia.com/services/branding" />
      </Head>

      <main className={styles.wrapper}>
        {/* 1. Hero Banner Section */}
        <section className={`${styles.hero} ${styles.heroBrandingBg}`}>
          <div className="pv-container">
            <div className={styles.heroContent}>
              <div className={styles.backRow}>
                <Link href="/services" className={styles.backLink}>
                  <ArrowLeft size={16} /> Back to All Services
                </Link>
              </div>
              <span className={styles.heroTag}>NAMMAL BRANDING</span>
              <h1 className={styles.heroTitle}>Branding</h1>
              <p className={styles.heroSubtitle}>
                Tell your brand story through content people want to watch. Build a stronger brand presence through compelling visual storytelling.
              </p>
              <div className={styles.heroCtaRow}>
                <a href="#enquiry" className={styles.primaryCta}>
                  Enquire Now <Rocket size={16} />
                </a>
                <a href="tel:+917907760700" className={styles.secondaryCta}>
                  <Phone size={16} /> Call +91 7907760700
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Branding Offerings Section */}
        <section className={styles.offeringsSection}>
          <div className="pv-container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.title}>Branding Solutions</h2>
              <p className={styles.subText}>
                From strategic identity positioning to cinematic brand films, we craft brand narratives that leave a lasting impression.
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
                <span className={styles.enquiryTag}>BUILD YOUR BRAND</span>
                <h2 className={styles.enquiryTitle}>Enquire About Branding</h2>
                <p className={styles.enquiryText}>
                  Ready to elevate your brand story? Contact our creative directors and strategy team to plan your video production or brand feature.
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
                    <p>Thank you for your enquiry! Our branding team will get in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.enquiryForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name / Brand Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Enter your name or organization"
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
                      <label htmlFor="serviceType">Branding Solution Interest</label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="Brand Stories & Features">Brand Stories & Features</option>
                        <option value="Corporate Videos">Corporate Videos</option>
                        <option value="Brand Films">Brand Films</option>
                        <option value="Founder / CEO Interviews">Founder / CEO Interviews</option>
                        <option value="Special Brand Features">Special Brand Features</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Branding Brief / Project Notes</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Share your brand vision, target timeline, or specific video production requirements"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Submit Branding Enquiry <Send size={16} />
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
