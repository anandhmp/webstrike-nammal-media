import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Phone,
  Instagram,
  Globe,
  Facebook,
  UserCheck,
  Headphones,
  MapPin,
  X,
  ExternalLink
} from 'lucide-react';
import styles from '@/styles/Subscribe.module.scss';

export default function SubscribePage() {
  const [showBranchesModal, setShowBranchesModal] = useState(false);

  const branches = [
    {
      title: "Headquarters - Trivandrum",
      address: "Grandmaster's creative hub, 'Manjusha' TC 23/1777, OD4, Jawaharnagar, Trivandrum, Kerala 695003",
      phone: "+91 79077 60700",
      mapUrl: "https://maps.google.com/?q=Jawaharnagar+Trivandrum"
    },
  ];

  return (
    <>
      <Head>
        <title>Subscribe & Connect | NAMMAL Media</title>
        <meta
          name="description"
          content="Connect with NAMMAL Media on Instagram, Facebook, YouTube, call our helpline, or visit our branches."
        />
      </Head>

      <main className={styles.subscribeWrapper}>
        {/* Top Right Concentric Circles Graphic */}
        <svg
          className={styles.circleBgTopRight}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="0" r="100" stroke="white" strokeWidth="24" opacity="0.35" />
          <circle cx="500" cy="0" r="180" stroke="white" strokeWidth="24" opacity="0.3" />
          <circle cx="500" cy="0" r="260" stroke="white" strokeWidth="24" opacity="0.25" />
          <circle cx="500" cy="0" r="340" stroke="white" strokeWidth="24" opacity="0.2" />
          <circle cx="500" cy="0" r="420" stroke="white" strokeWidth="24" opacity="0.15" />
        </svg>

        {/* Bottom Left Concentric Circles Graphic */}
        <svg
          className={styles.circleBgBottomLeft}
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="0" cy="500" r="120" stroke="white" strokeWidth="26" opacity="0.35" />
          <circle cx="0" cy="500" r="200" stroke="white" strokeWidth="26" opacity="0.3" />
          <circle cx="0" cy="500" r="280" stroke="white" strokeWidth="26" opacity="0.25" />
          <circle cx="0" cy="500" r="360" stroke="white" strokeWidth="26" opacity="0.2" />
          <circle cx="0" cy="500" r="440" stroke="white" strokeWidth="26" opacity="0.15" />
        </svg>

        {/* Center Card Content */}
        <div className={styles.contentCard}>
          {/* Brand Logo Badge */}
          <div className={styles.logoBadge}>
            <img
              src="/assets/nammal-media.png"
              alt="NAMMAL Media"
              className={styles.logoImage}
            />
          </div>

          {/* Title */}
          {/* <h1 className={styles.brandTitle}>NAMMAL Media</h1> */}

          {/* Action Grid (2 Rows x 3 Columns) */}
          <div className={styles.actionGrid}>
            {/* Call */}
            <a
              href="tel:+917907760700"
              className={styles.actionItem}
              title="Call Us"
            >
              <div className={styles.iconSquare}>
                <Phone size={28} strokeWidth={2.2} />
              </div>
              <span className={styles.actionLabel}>Call</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/nammal__media/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionItem}
              title="Instagram"
            >
              <div className={styles.iconSquare}>
                <Instagram size={28} strokeWidth={2.2} />
              </div>
              <span className={styles.actionLabel}>Instagram</span>
            </a>

            {/* Website */}
            <Link
              href="/"
              className={styles.actionItem}
              title="Website"
            >
              <div className={styles.iconSquare}>
                <Globe size={28} strokeWidth={2.2} />
              </div>
              <span className={styles.actionLabel}>Website</span>
            </Link>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61590600346051"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionItem}
              title="Facebook"
            >
              <div className={styles.iconSquare}>
                <Facebook size={28} strokeWidth={2.2} />
              </div>
              <span className={styles.actionLabel}>Facebook</span>
            </a>

            {/* Director */}
            <a
              href="https://wa.me/917907760700"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionItem}
              title="Director"
            >
              <div className={styles.iconSquare}>
                <UserCheck size={28} strokeWidth={2.2} />
              </div>
              <span className={styles.actionLabel}>Director</span>
            </a>

            {/* Customer Care */}
            <a
              href="mailto:grandmastercreativehub@gmail.com"
              className={styles.actionItem}
              title="Customer Care"
            >
              <div className={styles.iconSquare}>
                <Headphones size={28} strokeWidth={2.2} />
              </div>
              <span className={styles.actionLabel}>Customer Care</span>
            </a>
          </div>

          {/* Bottom Pill Button: Branches */}
          <button
            className={styles.pillButton}
            onClick={() => setShowBranchesModal(true)}
            aria-label="View Branches"
          >
            <span className={styles.pillIcon}>
              <MapPin size={20} strokeWidth={2.2} />
            </span>
            Branches
          </button>
        </div>

        {/* Branches Modal */}
        {showBranchesModal && (
          <div className={styles.modalBackdrop} onClick={() => setShowBranchesModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3>Our Branches</h3>
                <button
                  className={styles.closeBtn}
                  onClick={() => setShowBranchesModal(false)}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className={styles.branchList}>
                {branches.map((branch, idx) => (
                  <div key={idx} className={styles.branchCard}>
                    <h4>{branch.title}</h4>
                    <p>{branch.address}</p>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin size={14} /> Get Directions <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

// Disable default Header & Footer layout for this page
SubscribePage.getLayout = function getLayout(page) {
  return page;
};
