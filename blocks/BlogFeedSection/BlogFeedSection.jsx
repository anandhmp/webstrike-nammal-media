import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Heart, Bookmark, Calendar } from 'lucide-react';
import styles from './BlogFeedSection.module.scss';

export const SAMPLE_POSTS = [
  {
    id: 1,
    slug: 'scaling-quantum-computing-in-financial-markets',
    category: 'Technology',
    title: 'Scaling Quantum Computing Infrastructure for Next-Gen Financial Markets',
    excerpt:
      'Quantum algorithms are transitioning from theoretical physics laboratories to algorithmic trading desks and global risk modeling.',
    date: 'Aug 12, 2026',
    readTime: '5 min read',
    likes: 142,
    author: {
      name: 'Marcus Vance',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    slug: 'chief-ai-officer-playbook-for-modern-executives',
    category: 'Leadership',
    title: 'The Chief AI Officer Playbook: Governance, Speed & Ethical Frameworks',
    excerpt:
      'How modern C-suite leaders are structuring AI decision committees while balancing rapid deployment with enterprise data privacy.',
    date: 'Aug 10, 2026',
    readTime: '7 min read',
    likes: 98,
    author: {
      name: 'Dr. Sarah Jenkins',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    slug: 'sustainable-venture-capital-trends-2026',
    category: 'Market Trends',
    title: 'Sustainable Venture Capital: Where Global Funds Are Investing in 2026',
    excerpt:
      'Clean energy tech, synthetic bio-materials, and smart grid automation are dominating Q3 startup capital allocations worldwide.',
    date: 'Aug 08, 2026',
    readTime: '4 min read',
    likes: 215,
    author: {
      name: 'Liam Thorne',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    slug: 'autonomous-design-systems-micro-interactions',
    category: 'Design',
    title: 'Autonomous Design Systems: Crafting Micro-Interactions That Delight',
    excerpt:
      'Combining spatial typography, glassmorphism, and responsive CSS token architecture for world-class web experiences.',
    date: 'Aug 05, 2026',
    readTime: '6 min read',
    likes: 184,
    author: {
      name: 'Aria Sterling',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    slug: 'generative-marketing-workflows-roi',
    category: 'AI & Future',
    title: 'Measuring ROI on Generative Marketing Workflows & Hyper-Personalization',
    excerpt:
      'Brand teams using real-time dynamic audience synthesis report a 340% increase in campaign conversion velocity.',
    date: 'Aug 03, 2026',
    readTime: '5 min read',
    likes: 310,
    author: {
      name: 'Elena Rostova',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    slug: 'remote-first-corporate-culture-innovations',
    category: 'Leadership',
    title: 'Navigating Remote-First Culture Innovations & Global Talent Mobility',
    excerpt:
      'How distributed tech companies are replacing traditional office rituals with async collaborative rituals and retreat summits.',
    date: 'Jul 29, 2026',
    readTime: '8 min read',
    likes: 126,
    author: {
      name: 'Marcus Vance',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BlogFeedSection() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});

  const categories = ['All Posts', 'Technology', 'Leadership', 'Market Trends', 'Design', 'AI & Future'];

  const filteredPosts =
    activeCategory === 'All Posts'
      ? SAMPLE_POSTS
      : SAMPLE_POSTS.filter((post) => post.category === activeCategory);

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id) => {
    setBookmarkedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={styles.section}>
      <div className="pv-container">
        {/* Header & Filter Controls */}
        <div className={styles.headerRow} data-aos="fade-up">
          <div className={styles.titleGroup}>
            <h2>Latest Publication Insights</h2>
            <p>Curated articles, deep dives, and expert analysis updated daily.</p>
          </div>

          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.catBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className={styles.grid}>
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={styles.cardImg}>
                <Link href={`/blog/${post.slug}`}>
                  <img src={post.coverImage} alt={post.title} />
                </Link>
                <div className={styles.catTag}>{post.category}</div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                </Link>

                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.author}>
                    <img src={post.author.avatar} alt={post.author.name} />
                    <span>{post.author.name}</span>
                  </div>

                  <div className={styles.cardActions}>
                    <button
                      onClick={() => toggleLike(post.id)}
                      style={{ color: likedPosts[post.id] ? '#ff4f58' : 'inherit' }}
                      title="Like Article"
                    >
                      <Heart size={16} fill={likedPosts[post.id] ? '#ff4f58' : 'none'} />
                      <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(post.id)}
                      style={{ color: bookmarkedPosts[post.id] ? '#5e2ca5' : 'inherit' }}
                      title="Bookmark Article"
                    >
                      <Bookmark size={16} fill={bookmarkedPosts[post.id] ? '#5e2ca5' : 'none'} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
