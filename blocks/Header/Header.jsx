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
              alt="Nammal Media Logo"
              className={styles.logoImg}
            />
          </Link>

          {/* Center Navigation Links */}
          <nav className={styles.centerNav}>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
            >
              Home
            </Link>
            <Link
              href="/shows"
              className={`${styles.navLink} ${isActive('/shows') ? styles.activeLink : ''}`}
            >
              Shows
            </Link>
            <Link
              href="/subscribe"
              className={`${styles.navLink} ${isActive('/subscribe') ? styles.activeLink : ''}`}
            >
              Subscribe
            </Link>
            <Link
              href="/services"
              className={`${styles.navLink} ${isActive('/services') ? styles.activeLink : ''}`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.activeLink : ''}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${styles.navLink} ${isActive('/contact') ? styles.activeLink : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Utilities: LIVE CTA */}
          <div className={styles.rightUtils}>
            <Link href="/shows" className={styles.liveCtaBtn}>
              <span className={styles.liveDot} /> Live TV
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
              Home
            </Link>
            <Link
              href="/shows"
              className={`${styles.mobileNavLink} ${isActive('/shows') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shows
            </Link>
            <Link
              href="/subscribe"
              className={`${styles.mobileNavLink} ${isActive('/subscribe') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe
            </Link>
            <Link
              href="/services"
              className={`${styles.mobileNavLink} ${isActive('/services') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`${styles.mobileNavLink} ${isActive('/about') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.activeLink : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/shows"
              className={styles.liveCtaBtn}
              style={{ justifyContent: 'center', marginTop: '8px' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className={styles.liveDot} /> Live TV
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
