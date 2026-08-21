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
          {/* Original NAMMAL Logo with Tagline */}
          <Link href="/home" className={styles.logoGroup}>
            <img
              src="/assets/nammal-logo.png"
              alt="NAMMAL Logo"
              className={styles.logoImg}
            />
            <div className={styles.logoTextWrapper}>
              <span className={styles.brandTitle}>NAMMAL</span>
              <span className={styles.tagline}>മലയാളിയുടെ മനസ്സാക്ഷി</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.rightGroup}>
            <Link href="/home" className={styles.navLink}>
              Home
            </Link>
            <Link href="/shows" className={styles.navLink}>
              Shows
            </Link>
            <Link href="/schedule" className={styles.navLink}>
              Schedules
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
            <Link href="/contact#partner" className={styles.joinBtn}>
              Partner With Us
            </Link>
          </nav>

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
              Home
            </Link>
            <Link href="/shows" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Shows (ഷോകൾ)
            </Link>
            <Link href="/schedule" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Schedules (ഷെഡ്യൂളുകൾ)
            </Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
            <Link
              href="/contact#partner"
              className={styles.mobileJoinBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

