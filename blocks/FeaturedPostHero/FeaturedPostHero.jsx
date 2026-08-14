import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import styles from './FeaturedPostHero.module.scss';

export default function FeaturedPostHero() {
  const featuredArticle = {
    slug: 'future-of-ai-driven-business-architecture',
    category: 'TECH & STRATEGY',
    title: 'How Next-Gen AI Models Are Reshaping Enterprise Workflows in 2026',
    excerpt:
      'Explore how autonomous intelligence agents and generative enterprise platforms are dramatically accelerating productivity, strategy execution, and modern business innovation.',
    date: 'August 14, 2026',
    readTime: '6 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Tech Strategy',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  };

  return (
    <section className={styles.section}>
      <div className="pv-container">
        <div className={styles.heroGrid} data-aos="fade-up">
          {/* Visual Image Banner */}
          <div className={styles.imageWrapper}>
            <img src={featuredArticle.coverImage} alt={featuredArticle.title} />
            <div className={styles.badgeOverlay}>{featuredArticle.category}</div>
          </div>

          {/* Article Info Content */}
          <div className={styles.content}>
            <div className={styles.meta}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} /> {featuredArticle.date}
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} /> {featuredArticle.readTime}
              </span>
            </div>

            <Link href={`/blog/${featuredArticle.slug}`}>
              <h1 className={styles.title}>{featuredArticle.title}</h1>
            </Link>

            <p className={styles.excerpt}>{featuredArticle.excerpt}</p>

            <div className={styles.authorRow}>
              <img
                src={featuredArticle.author.avatar}
                alt={featuredArticle.author.name}
                className={styles.avatar}
              />
              <div className={styles.authorMeta}>
                <span className={styles.name}>{featuredArticle.author.name}</span>
                <span className={styles.role}>{featuredArticle.author.role}</span>
              </div>

              <Link href={`/blog/${featuredArticle.slug}`} className={styles.readBtn}>
                <span>Read Story</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
