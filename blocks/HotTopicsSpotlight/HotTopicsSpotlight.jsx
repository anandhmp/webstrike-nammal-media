import React from 'react';
import Link from 'next/link';
import styles from './HotTopicsSpotlight.module.scss';

export default function HotTopicsSpotlight() {
  const topics = [
    {
      id: 1,
      slug: 'ai-models-reshaping-enterprise-workflows',
      category: 'TRENDING TOPIC',
      title: 'AI Models Are Reshaping Enterprise Workflows in 2026',
      excerpt:
        'A comprehensive exploration of autonomous multi-agent systems and real-time algorithmic workflow optimization for modern business.',
      image:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      slug: 'navigating-executive-burnout',
      category: 'TRENDING TOPIC',
      title: 'Navigating Executive Burnout: Building Sustainable Leaders',
      excerpt:
        'How modern corporate teams are implementing wellbeing metrics and executive retreats to preserve long-term strategic vision.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      slug: 'future-proofing-digital-infrastructure',
      category: 'TRENDING TOPIC',
      title: 'Beyond the Framework: Future-Proofing Digital Infrastructure',
      excerpt:
        'Architectural strategies for scaling resilient tech platforms in high-velocity markets without sacrificing speed or security.',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="pv-container">
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.title}>What's Igniting Conversation</h2>
          <p className={styles.subtitle}>
            Explore the stories and trendlines currently shaping the business world landscape.
          </p>
          <Link href="/blog" className={styles.exploreBtn}>
            Explore Hot Topics
          </Link>
        </div>

        {/* 3 Tall Cards Grid */}
        <div className={styles.grid}>
          {topics.map((topic, idx) => (
            <article key={topic.id} className={styles.card} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className={styles.imageWrapper}>
                <Link href={`/blog/${topic.slug}`}>
                  <img src={topic.image} alt={topic.title} />
                </Link>
              </div>
              <span className={styles.badge}>{topic.category}</span>
              <Link href={`/blog/${topic.slug}`}>
                <h3 className={styles.cardTitle}>{topic.title}</h3>
              </Link>
              <p className={styles.cardExcerpt}>{topic.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
