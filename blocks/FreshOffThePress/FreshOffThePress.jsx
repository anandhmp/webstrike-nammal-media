import React from 'react';
import Link from 'next/link';
import styles from './FreshOffThePress.module.scss';

export default function FreshOffThePress() {
  const posts = [
    {
      id: 1,
      slug: 'the-art-of-the-pitch',
      category: 'DISCUSSION',
      title: 'The Art of the Pitch: How to Drive Strategic Buy-In for Tech Architecture',
      excerpt:
      'A detailed framework for leaders on presenting technical architecture proposals and winning executive buy-in across global teams.',
      image:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      slug: 'top-5-pitch-deck-mistakes',
      category: 'DISCUSSION',
      title: 'Top 5 Pitch Deck Mistakes and How to Avoid Them',
      excerpt:
        'Discover key story mistakes startup founders make when presenting metrics, dynamic market size, and ROI to top-tier global investors.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      slug: 'from-vision-to-scale',
      category: 'DISCUSSION',
      title: "From Vision to Scale: A Founder's Guide to Growth",
      excerpt:
        'Essential principles for expanding leadership teams, preserving agile engineering culture, and scaling operations globally.',
      image:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="pv-container">
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.title}>Fresh Off the Press</h2>
          <p className={styles.subtitle}>
            The latest insights and discussions from our editorial teams.
          </p>
          <Link href="/blog" className={styles.viewAllBtn}>
            View All Posts
          </Link>
        </div>

        {/* 3 Column Grid */}
        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <article key={post.id} className={styles.card} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className={styles.imageWrapper}>
                <Link href={`/blog/${post.slug}`}>
                  <img src={post.image} alt={post.title} />
                </Link>
              </div>
              <span className={styles.badge}>{post.category}</span>
              <Link href={`/blog/${post.slug}`}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </Link>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
