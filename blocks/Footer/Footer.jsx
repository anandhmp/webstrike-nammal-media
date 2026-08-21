import React from 'react';
import Link from 'next/link';
import {
  Handshake,
  Radio,
  Briefcase,
  BookOpen,
  Newspaper,
  Heart,
  GraduationCap,
  Users,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Mail,
} from 'lucide-react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.topSection}>
        <div className="pv-container">
          <div className={styles.grid}>
            {/* Column 1: Brand Logo & Description */}
            <div className={styles.brandCol}>
              <Link href="/home">
                <img
                  src="https://www.flowerstv.in/wp-content/uploads/2021/08/cropped-Flowers-Logo-alpha-1.png"
                  alt="Flowers TV Logo"
                  className={styles.logoImg}
                />
              </Link>
              <p className={styles.brandDesc}>
                Flowers & NAMMAL, a 24 hour Malayalam entertainment television channel offering shows, serials, movies, music, infotainment and much more !
              </p>
            </div>

            {/* Column 2: Explore */}
            <div>
              <h3 className={styles.colHeader}>Explore</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/contact#partner">
                    <Handshake size={16} className={styles.linkIcon} />
                    <span>Get Connected</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <Radio size={16} className={styles.linkIcon} />
                    <span>Distribution</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <Briefcase size={16} className={styles.linkIcon} />
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.flowerstv.in/magazine/Kudumbam%20Magazine.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BookOpen size={16} className={styles.linkIcon} />
                    <span>Kudumbam Magazine</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Joint Ventures */}
            <div>
              <h3 className={styles.colHeader}>Our Joint Ventures</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="https://www.twentyfournews.com/" target="_blank" rel="noreferrer">
                    <Newspaper size={16} className={styles.linkIcon} />
                    <span>Twenty Four News</span>
                  </a>
                </li>
                <li>
                  <a href="https://flowersoriginals.com/" target="_blank" rel="noreferrer">
                    <Heart size={16} className={styles.linkIcon} />
                    <span>Flowers Originals</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.flowersacademy.in/" target="_blank" rel="noreferrer">
                    <GraduationCap size={16} className={styles.linkIcon} />
                    <span>Flowers Academy</span>
                  </a>
                </li>
                <li>
                  <a href="http://flowersfamily.in/" target="_blank" rel="noreferrer">
                    <Users size={16} className={styles.linkIcon} />
                    <span>Flowers Family Club</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className={styles.colHeader}>Contact Us</h3>
              <div className={styles.contactInfo}>
                <div className={styles.addressBox}>
                  <MapPin size={18} className={styles.icon} />
                  <div>
                    <strong>Insight media City</strong>
                    <br />
                    Puthiya Road, Chakkaraparambu, Vennala, Kochi, Ernakulam, Kerala 682028
                  </div>
                </div>
                <div className={styles.phoneBox}>
                  <Phone size={18} className={styles.icon} />
                  <span>04842203544 / 7907760700</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className={styles.bottomBar}>
        <div className="pv-container">
          <div className={styles.bottomInner}>
            <p className={styles.copyrightText}>
              © Copyright 2026 – Insight Media City (India) Pvt Ltd & NAMMAL
            </p>

            <div className={styles.socialIcons}>
              <a
                href="https://twitter.com/flowersonair"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.facebook.com/flowersonair/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@NAMMAL-MalayaliyudeManasakshi"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.instagram.com/nammal__media/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a href="mailto:grandmastercreativehub@gmail.com" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
