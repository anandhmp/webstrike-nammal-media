import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
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
              നമ്മൾ - മലയാളിയുടെ മനസ്സാക്ഷി (Nammal - The Conscience of the Malayalee). Digital media platform and entertainment channel from Kerala, India.
            </p>
            <div className={styles.socialRow}>
              <a
                href="https://www.facebook.com/profile.php?id=61590600346051"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/nammal__media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@NAMMAL-MalayaliyudeManasakshi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={styles.socialLink}
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

          {/* Column 3: SERVICES */}
          <div>
            <h3 className={styles.colHeader}>SERVICES</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services">Advertising</Link>
              </li>
              <li>
                <Link href="/services">Branding</Link>
              </li>
              <li>
                <Link href="/services">Events</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <h3 className={styles.colHeader}>CONTACT</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} className={styles.contactIcon} />
                <span>
                  Grandmaster's creative hub 'Manjusha' TC 23/1777, OD4 Jawaharnagar, Kowdiar PO, Trivandrum
                </span>
              </li>
              <li>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:+917907760700">+91 7907760700</a>
              </li>
              <li>
                <Mail size={16} className={styles.contactIcon} />
                <a href="mailto:grandmastercreativehub@gmail.com">grandmastercreativehub@gmail.com</a>
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
