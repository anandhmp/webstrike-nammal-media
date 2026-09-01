import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.scss';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path) => {
    if (path === '/') {
      return currentPath === '/' || currentPath === '/home';
    }
    return currentPath === path;
  };

  return (
    <header className={styles.header}>
      <div className="pv-container">
        <div className={styles.inner}>
          {/* Logo Group */}
          <Link href="/" className={styles.logoGroup}>
            <img
              src="/assets/nammal-media.png"
              alt="NAMMAL Media Logo"
              className={styles.logoImg}
            />
          </Link>

          {/* Center Navigation Links */}
          <nav className={styles.centerNav}>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
            >
              HOME
            </Link>
            <Link
              href="/shows"
              className={`${styles.navLink} ${isActive('/shows') ? styles.activeLink : ''}`}
            >
              SHOWS
            </Link>
            <Link
              href="/subscribe"
              className={`${styles.navLink} ${isActive('/subscribe') ? styles.activeLink : ''}`}
            >
              SUBSCRIBE
            </Link>
            <Link
              href="/services"
              className={`${styles.navLink} ${isActive('/services') ? styles.activeLink : ''}`}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.activeLink : ''}`}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className={`${styles.navLink} ${isActive('/contact') ? styles.activeLink : ''}`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Utilities: LIVE CTA */}
          <div className={styles.rightUtils}>
            <Link href="/shows" className={styles.liveCtaBtn}>
              <span className={styles.liveDot} /> LIVE TV
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileDropdown}>
            <Link
              href="/"
              className={`${styles.mobileNavLink} ${isActive('/') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/shows"
              className={`${styles.mobileNavLink} ${isActive('/shows') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              SHOWS
            </Link>
            <Link
              href="/subscribe"
              className={`${styles.mobileNavLink} ${isActive('/subscribe') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              SUBSCRIBE
            </Link>
            <Link
              href="/services"
              className={`${styles.mobileNavLink} ${isActive('/services') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className={`${styles.mobileNavLink} ${isActive('/about') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/shows"
              className={styles.liveCtaBtn}
              style={{ justifyContent: 'center', marginTop: '8px' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className={styles.liveDot} /> LIVE TV
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
