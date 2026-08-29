import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className="pv-container">
        <div className={styles.grid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <img
                src="/assets/nammal-media.png"
                alt="NAMMAL Media Logo"
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandDesc}>
              നമ്മള് - മലയാളിയുടെ മനസ്സാക്ഷി (Nammal - The Conscience of the Malayalee). Digital media platform and entertainment channel from Kerala, India.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '12px' }}>
              <a
                href="https://www.facebook.com/profile.php?id=61590600346051"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: '#9ca3af', transition: 'color 0.2s' }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/nammal__media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: '#9ca3af', transition: 'color 0.2s' }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@NAMMAL-MalayaliyudeManasakshi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ color: '#9ca3af', transition: 'color 0.2s' }}
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: MENU */}
          <div>
            <h3 className={styles.colHeader}>MENU</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/shows">Shows</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: BUSINESS */}
          <div>
            <h3 className={styles.colHeader}>BUSINESS</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/shows">Movies</Link>
              </li>
              <li>
                <Link href="/shows">Web Series</Link>
              </li>
              <li>
                <a href="https://www.twentyfournews.com/" target="_blank" rel="noreferrer">
                  Twenty Four News
                </a>
              </li>
              <li>
                <Link href="/services">Film Distributor</Link>
              </li>
              <li>
                <Link href="/shows">
                  NAMMAL Originals
                </Link>
              </li>
              <li>
                <Link href="/services">Pay TV</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: INVESTORS */}
          <div>
            <h3 className={styles.colHeader}>INVESTORS</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#">Stock</a>
              </li>
              <li>
                <a href="#">Prospectus</a>
              </li>
              <li>
                <a href="#">Financials</a>
              </li>
              <li>
                <a href="#">Annual Report</a>
              </li>
              <li>
                <a href="#">GMS</a>
              </li>
              <li>
                <a href="#">Press Release</a>
              </li>
            </ul>
          </div>

          {/* Column 5: GOVERNANCE */}
          <div>
            <h3 className={styles.colHeader}>GOVERNANCE</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#">Articles of Association</a>
              </li>
              <li>
                <a href="#">Internal & External Audit</a>
              </li>
              <li>
                <a href="#">Code of Conduct</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © 2026 NAMMAL MEDIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
