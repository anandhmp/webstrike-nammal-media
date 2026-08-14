import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="pv-container">
        <div className={styles.inner}>
          {/* Logo with 4-Corner Bracket Icon */}
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

          {/* Right Links & Join Button */}
          <div className={styles.rightGroup}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="#subscribe" className={styles.joinBtn}>
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
