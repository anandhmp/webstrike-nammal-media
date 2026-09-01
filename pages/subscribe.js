import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Instagram,
  Facebook,
  Youtube,
  Globe,
  ArrowLeft
} from 'lucide-react';
import styles from '@/styles/Subscribe.module.scss';

export default function SubscribePage() {
  const router = useRouter();

  const links = [
    {
      id: 'instagram',
      title: 'Instagram',
      url: 'https://www.instagram.com/nammal__media/',
      icon: Instagram,
      isExternal: true,
    },
    {
      id: 'facebook',
      title: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61590600346051',
      icon: Facebook,
      isExternal: true,
    },
    {
      id: 'youtube',
      title: 'YouTube',
      url: 'https://www.youtube.com/@NAMMAL-MalayaliyudeManasakshi',
      icon: Youtube,
      isExternal: true,
    },
    {
      id: 'website',
      title: 'Website',
      url: '/',
      icon: Globe,
      isExternal: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Subscribe & Connect | NAMMAL Media</title>
        <meta
          name="description"
          content="Follow, Watch, Discover, and Connect with NAMMAL Media on Instagram, Facebook, YouTube, and our official website."
        />
        <link rel="canonical" href="https://nammalmedia.com/subscribe" />
      </Head>

      <main className={styles.subscribeWrapper}>
        {/* Back Button */}
        <button
          className={styles.backBtn}
          onClick={() => router.back()}
          aria-label="Go Back to Previous Page"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {/* Top Right Concentric Circles Graphic */}
        <svg
          className={styles.circleBgTopRight}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="0" r="100" stroke="white" strokeWidth="24" opacity="0.35" />
          <circle cx="500" cy="0" r="180" stroke="white" strokeWidth="24" opacity="0.3" />
          <circle cx="500" cy="0" r="260" stroke="white" strokeWidth="24" opacity="0.25" />
          <circle cx="500" cy="0" r="340" stroke="white" strokeWidth="24" opacity="0.2" />
          <circle cx="500" cy="0" r="420" stroke="white" strokeWidth="24" opacity="0.15" />
        </svg>

        {/* Bottom Left Concentric Circles Graphic */}
        <svg
          className={styles.circleBgBottomLeft}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="0" cy="500" r="120" stroke="white" strokeWidth="26" opacity="0.35" />
          <circle cx="0" cy="500" r="200" stroke="white" strokeWidth="26" opacity="0.3" />
          <circle cx="0" cy="500" r="280" stroke="white" strokeWidth="26" opacity="0.25" />
          <circle cx="0" cy="500" r="360" stroke="white" strokeWidth="26" opacity="0.2" />
          <circle cx="0" cy="500" r="440" stroke="white" strokeWidth="26" opacity="0.15" />
        </svg>

        {/* Center Card Content */}
        <div className={styles.contentCard}>
          {/* Brand Logo Badge */}
          <div className={styles.logoBadge}>
            <img
              src="/assets/nammal-media.png"
              alt="NAMMAL Media"
              className={styles.logoImage}
            />
          </div>

          {/* Tagline / CTA Subtitle */}
          <h2 className={styles.ctaTagline}>Follow. Watch. Discover. Connect.</h2>

          {/* Action Grid (2 Rows x 2 Columns) */}
          <div className={styles.actionGrid}>
            {links.map((link) => {
              const IconComponent = link.icon;
              if (link.isExternal) {
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionItem}
                    title={link.title}
                  >
                    <div className={styles.iconSquare}>
                      <IconComponent size={28} strokeWidth={2.2} />
                    </div>
                    <span className={styles.actionLabel}>{link.title}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.actionItem}
                  title={link.title}
                >
                  <div className={styles.iconSquare}>
                    <IconComponent size={28} strokeWidth={2.2} />
                  </div>
                  <span className={styles.actionLabel}>{link.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

// Disable default Header & Footer layout for this page
SubscribePage.getLayout = function getLayout(page) {
  return page;
};
