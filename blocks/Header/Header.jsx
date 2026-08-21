import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.scss';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="pv-container">
        <div className={styles.inner}>
          {/* Logo Group */}
          <Link href="/" className={styles.logoGroup}>
            <img
              src="/assets/nammal-logo.png"
              alt="NAMMAL Media Logo"
              className={styles.logoImg}
            />
          </Link>

          {/* Center Navigation Links */}
          <nav className={styles.centerNav}>
            <Link href="/" className={styles.navLink}>
              HOME
            </Link>
            <Link href="/shows" className={styles.navLink}>
              SHOWS
            </Link>
            <Link href="/schedule" className={styles.navLink}>
              SCHEDULE
            </Link>
            <Link href="/services" className={styles.navLink}>
              SERVICES
            </Link>
            <Link href="/about" className={styles.navLink}>
              ABOUT
            </Link>
            <Link href="/contact" className={`${styles.navLink} ${styles.contactHighlight}`}>
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
            <Link href="/home" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/shows" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              SHOWS
            </Link>
            <Link href="/schedule" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              SCHEDULE
            </Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              SERVICES
            </Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              ABOUT
            </Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
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
