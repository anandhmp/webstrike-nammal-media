import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Calendar,
  Clock,
  Heart,
  Bookmark,
  Share2,
  ArrowLeft,
  Check,
  MessageSquare,
} from 'lucide-react';
import { SAMPLE_POSTS } from '@/blocks/BlogFeedSection/BlogFeedSection';

export default function ArticleDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'David Miller',
      date: 'Aug 14, 2026',
      text: 'Superb breakdown of quantum computing integration! The section on risk mitigation models was particularly insightful.',
    },
  ]);

  // Find post or fallback to first sample post
  const post = SAMPLE_POSTS.find((p) => p.slug === slug) || SAMPLE_POSTS[0];

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          name: 'Executive Reader',
          date: 'Just now',
          text: commentText.trim(),
        },
      ]);
      setCommentText('');
    }
  };

  return (
    <>
      <Head>
        <title>{`${post.title} | Prism Vantage`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <main style={{ padding: '48px 0 96px', background: 'var(--pv-white)' }}>
        <div className="pv-container" style={{ maxWidth: '900px' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--pv-purple)',
              fontWeight: '700',
              marginBottom: '32px',
              fontSize: '14px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>

          {/* Category Tag & Title */}
          <div style={{ marginBottom: '24px' }}>
            <span
              style={{
                background: 'var(--pv-lime)',
                color: 'var(--pv-dark)',
                fontWeight: '800',
                fontSize: '12px',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: '999px',
                letterSpacing: '0.08em',
              }}
            >
              {post.category}
            </span>

            <h1
              style={{
                fontSize: '44px',
                lineHeight: '1.2',
                margin: '20px 0 16px',
                color: 'var(--pv-dark)',
              }}
            >
              {post.title}
            </h1>

            <p style={{ fontSize: '20px', color: 'var(--pv-gray-600)', lineHeight: '1.5' }}>
              {post.excerpt}
            </p>
          </div>

          {/* Author Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 0',
              borderTop: '1px solid var(--pv-gray-200)',
              borderBottom: '1px solid var(--pv-gray-200)',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: '700', color: 'var(--pv-dark)', fontSize: '16px' }}>
                  {post.author.name}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--pv-gray-600)', display: 'flex', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setLiked(!liked)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid var(--pv-gray-300)',
                  color: liked ? '#ff4f58' : 'var(--pv-dark)',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                <Heart size={18} fill={liked ? '#ff4f58' : 'none'} />
                <span>{post.likes + (liked ? 1 : 0)}</span>
              </button>

              <button
                onClick={() => setBookmarked(!bookmarked)}
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  border: '1px solid var(--pv-gray-300)',
                  color: bookmarked ? '#5e2ca5' : 'var(--pv-dark)',
                }}
              >
                <Bookmark size={18} fill={bookmarked ? '#5e2ca5' : 'none'} />
              </button>

              <button
                onClick={handleCopyLink}
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'var(--pv-dark)',
                  color: 'var(--pv-white)',
                  fontSize: '13px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
                <span>{copied ? 'Copied Link' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Hero Main Image */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '48px',
              boxShadow: 'var(--pv-shadow-md)',
              maxHeight: '500px',
            }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Article Body Content */}
          <article
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'var(--pv-dark)',
              fontFamily: 'var(--pv-font-body)',
            }}
          >
            <p style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>
              In today's fast-moving economic landscape, technological disruption is no longer an
              abstract concept—it is the baseline condition under which global businesses operate.
            </p>

            <h2
              style={{
                fontFamily: 'var(--pv-font-heading)',
                fontSize: '28px',
                marginTop: '40px',
                marginBottom: '16px',
                color: 'var(--pv-dark)',
              }}
            >
              1. The Shift Toward High-Velocity Intelligence Systems
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Leading organizations are abandoning static annual strategic plans in favor of real-time
              algorithmic modeling. By integrating predictive models directly into operations, senior
              teams can simulate supply chain shifts, currency fluctuations, and consumer demand
              changes within seconds rather than weeks.
            </p>

            <blockquote
              style={{
                borderLeft: '4px solid var(--pv-purple)',
                paddingLeft: '24px',
                margin: '36px 0',
                fontSize: '22px',
                fontStyle: 'italic',
                color: 'var(--pv-purple-dark)',
                fontWeight: '600',
              }}
            >
              "Agility without real-time data is just reactive chaos. True advantage belongs to those
              who automate foresight."
            </blockquote>

            <h2
              style={{
                fontFamily: 'var(--pv-font-heading)',
                fontSize: '28px',
                marginTop: '40px',
                marginBottom: '16px',
                color: 'var(--pv-dark)',
              }}
            >
              2. Orchestrating Multi-Agent AI Architectures
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Rather than relying on single monolithic LLMs, modern technology stacks utilize
              specialized multi-agent swarms. Each agent is tuned for specific parameters—risk audit,
              legal compliance, code execution, or dynamic content delivery—enabling seamless
              collaboration across complex workflows.
            </p>
          </article>

          {/* Interactive Comments Section */}
          <div
            style={{
              marginTop: '64px',
              paddingTop: '40px',
              borderTop: '2px solid var(--pv-gray-200)',
            }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={22} />
              <span>Discussion ({comments.length})</span>
            </h3>

            <form onSubmit={handleAddComment} style={{ marginBottom: '32px' }}>
              <textarea
                placeholder="Add your executive perspective or thoughts..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={3}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid var(--pv-gray-300)',
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  outline: 'none',
                  marginBottom: '12px',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--pv-purple)',
                  color: 'var(--pv-white)',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  fontWeight: '700',
                  fontSize: '14px',
                }}
              >
                Post Comment
              </button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {comments.map((c) => (
                <div
                  key={c.id}
                  style={{
                    background: 'var(--pv-gray-100)',
                    padding: '20px',
                    borderRadius: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      fontWeight: '700',
                      fontSize: '14px',
                    }}
                  >
                    <span>{c.name}</span>
                    <span style={{ color: 'var(--pv-gray-600)', fontWeight: '400', fontSize: '12px' }}>
                      {c.date}
                    </span>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--pv-gray-800)' }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
