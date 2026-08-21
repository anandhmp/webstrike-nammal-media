import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className="pv-container">
        <div className={styles.grid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/home" className={styles.logoLink}>
              <img
                src="https://www.flowerstv.in/wp-content/uploads/2021/08/cropped-Flowers-Logo-alpha-1.png"
                alt="Flowers TV Logo"
                className={styles.logoImg}
              />
              <span className={styles.logoText}>
                NAMMAL<span>+</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              A film production and media network specializing in creating visually stunning and impactful content.
            </p>
          </div>

          {/* Column 2: MENU */}
          <div>
            <h3 className={styles.colHeader}>MENU</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/home">Home</Link>
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
                <a href="https://flowersoriginals.com/" target="_blank" rel="noreferrer">
                  Flowers Originals
                </a>
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
            © 2026 NAMMAL & Flowers TV Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
