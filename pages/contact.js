import React, { useState } from 'react';
import Head from 'next/head';
import { Globe, ChevronDown } from 'lucide-react';
import styles from '@/styles/Contact.module.scss';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Prism Vantage</title>
        <meta
          name="description"
          content="Get in touch with Prism Vantage. Contact details and conversation form."
        />
      </Head>

      <main className={styles.wrapper}>
        <div className="pv-container">
          <h1 className={styles.title} data-aos="fade-up">
            Contact Us
          </h1>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            {/* Contact Details */}
            <h2 className={styles.sectionTitle}>Contact Details</h2>
            <div className={styles.detailsGrid}>
              <div>
                500 Terry Francine St
                <br />
                San Francisco, CA 94158
              </div>
              <div>
                info@mysite.com
                <br />
                123-456-7890
              </div>
            </div>

            {/* Start a Conversation Form */}
            <h2 className={styles.sectionTitle}>Start a Conversation</h2>

            {!submitted ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>First name *</label>
                  <input
                    type="text"
                    required
                    className={styles.input}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Last name *</label>
                  <input
                    type="text"
                    required
                    className={styles.input}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Email *</label>
                  <input
                    type="email"
                    required
                    className={styles.input}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Phone</label>
                  <div className={styles.phoneGroup}>
                    <div className={styles.phoneIcon}>
                      <Globe size={14} />
                      <ChevronDown size={12} />
                    </div>
                    <input
                      type="tel"
                      className={`${styles.input} ${styles.phoneInput}`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Message</label>
                  <textarea
                    rows={4}
                    className={styles.textarea}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </form>
            ) : (
              <div className={styles.successMsg}>
                ✓ Thank you, {formData.firstName}! Your message has been sent to our team.
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
