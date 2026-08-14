import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Blog.module.scss';

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'the-art-of-the-pivot',
    category: 'Recent Posts',
    title: 'The Art of the Pivot: When and How to Change Your Business Strategy',
    excerpt:
      'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your...',
    date: 'Jun 7',
    readTime: '2 min read',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    slug: 'ai-for-the-solopreneur',
    category: 'Trending Posts',
    title: 'AI for the Solopreneur: Tools That Automate and Elevate',
    excerpt:
      'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your...',
    date: 'Jun 7',
    readTime: '2 min read',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    slug: 'decoding-customer-feedback',
    category: 'Recent Posts',
    title: 'Decoding Customer Feedback: Turning Criticism into Capital',
    excerpt:
      'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your...',
    date: 'Jun 7',
    readTime: '2 min read',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    slug: 'beyond-the-buzzword-digital-transformation',
    category: 'Trending Posts',
    title: "Beyond the Buzzword: What 'Digital Transformation' Really Means",
    excerpt:
      'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your...',
    date: 'Jun 7',
    readTime: '2 min read',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    slug: 'the-5-minute-marketing-audit',
    category: 'Recent Posts',
    title: 'The 5-Minute Marketing Audit Your Startup Needs Today',
    excerpt:
      'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your...',
    date: 'Jun 7',
    readTime: '2 min read',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    slug: 'scale-smart-not-fast',
    category: 'Trending Posts',
    title: "Scale Smart, Not Fast: A Founder's Guide to Sustainable Growth",
    excerpt:
      'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your...',
    date: 'Jun 7',
    readTime: '2 min read',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BlogIndexPage() {
  const [activeTab, setActiveTab] = useState('All Posts');

  const tabs = ['All Posts', 'Trending Posts', 'Recent Posts'];

  const filteredPosts =
    activeTab === 'All Posts'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeTab);

  return (
    <>
      <Head>
        <title>Blog | Prism Vantage</title>
        <meta
          name="description"
          content="Explore all articles, trending stories, and recent posts from Prism Vantage."
        />
      </Head>

      <main className={styles.wrapper}>
        <div className="pv-container">
          {/* Main Title */}
          <h1 className={styles.title} data-aos="fade-up">
            Blog
          </h1>

          {/* Filter Tabs */}
          <div className={styles.filterRow} data-aos="fade-up">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.filterBtn} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3 Column Grid */}
          <div className={styles.grid}>
            {filteredPosts.map((post, idx) => (
              <article key={post.id} className={styles.card} data-aos="fade-up" data-aos-delay={idx * 80}>
                <div className={styles.imageWrapper}>
                  <Link href={`/blog/${post.slug}`}>
                    <img src={post.image} alt={post.title} />
                  </Link>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    {post.date} • {post.readTime}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                  </Link>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
