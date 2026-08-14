import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className="pv-container">
        <div className={styles.footerCard}>
          {/* Top Logo & Gold Button */}
          <div className={styles.topRow}>
            <Link href="/" className={styles.logo}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
              </svg>
              <span>Prism Vantage</span>
            </Link>

            <Link href="#subscribe" className={styles.joinBtn}>
              Join Community
            </Link>
          </div>

          {/* 4 Column Bottom Links */}
          <div className={styles.grid}>
            {/* Column 1 */}
            <div className={styles.col}>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>

            {/* Column 2 */}
            <div className={styles.col}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>

            {/* Column 3 */}
            <div className={styles.col}>
              <div>500 Terry Francine St.</div>
              <div>San Francisco, CA 94158</div>
              <div>info@mysite.com</div>
              <div>123-456-7890</div>
            </div>

            {/* Column 4 */}
            <div className={styles.col}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/about">Accessibility Statement</Link>
              <div className={styles.creditText}>© 2026 by Prism Vantage.</div>
              <div className={styles.creditText}>
                Powered and secured by <a href="https://wix.com" target="_blank" rel="noreferrer">Wix</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
