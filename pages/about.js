import React from 'react';
import Head from 'next/head';
import styles from '@/styles/About.module.scss';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Leif Altherr',
      role: 'Growth Strategist',
      bio: 'With over a decade in scaling tech startups, Leif specializes in market entry and operational efficiency.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Corina Solé',
      role: 'Brand Architect',
      bio: 'Corina crafts compelling brand narratives that resonate, turning businesses into beloved icons.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us | Prism Vantage</title>
        <meta
          name="description"
          content="We believe knowledge is the ultimate catalyst for growth. Meet the minds behind the mission at Prism Vantage."
        />
      </Head>

      <main>
        {/* About Hero Banner with custom Wix background image */}
        <section className={styles.hero}>
          <div className={styles.heroContent} data-aos="fade-up">
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroSubtitle}>
              We believe knowledge is the ultimate catalyst for growth
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className={styles.missionSection}>
          <div className="pv-container">
            <div className={styles.missionContent} data-aos="fade-up">
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                Our mission is to empower the next generation of business leaders with clear,
                potent, and applicable insights. We are a collective of strategists, founders, and
                market analysts dedicated to demystifying the complexities of modern commerce and
                championing innovation at every scale.
              </p>
            </div>
          </div>
        </section>

        {/* The Minds Behind the Mission Section */}
        <section className={styles.teamSection}>
          <div className="pv-container">
            <div className={styles.teamHeader} data-aos="fade-up">
              <h2 className={styles.sectionTitle}>
                The Minds Behind the
                <br />
                Mission
              </h2>
              <p className={styles.teamSub}>
                A collective of seasoned experts and industry disruptors
              </p>
            </div>

            <div className={styles.teamGrid}>
              {teamMembers.map((member, idx) => (
                <div key={idx} className={styles.card} data-aos="fade-up" data-aos-delay={idx * 150}>
                  <div className={styles.imageWrapper}>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <div className={styles.memberRole}>{member.role}</div>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
