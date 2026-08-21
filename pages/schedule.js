import React, { useState } from 'react';
import Head from 'next/head';
import { Play, Bell, Clock, Tv } from 'lucide-react';
import styles from '@/styles/Schedule.module.scss';

export default function SchedulePage() {
  const [activeDate, setActiveDate] = useState('Today');
  const [activeFilter, setActiveFilter] = useState('All');

  const datePills = [
    { label: 'Today', date: 'FRI 22 AUG' },
    { label: 'Sat 23 Aug', date: 'SAT 23 AUG' },
    { label: 'Sun 24 Aug', date: 'SUN 24 AUG' },
    { label: 'Mon 25 Aug', date: 'MON 25 AUG' },
    { label: 'Tue 26 Aug', date: 'TUE 26 AUG' },
    { label: 'Wed 27 Aug', date: 'WED 27 AUG' },
    { label: 'Thu 28 Aug', date: 'THU 28 AUG' },
  ];

  const categoryChips = [
    'All',
    'Primetime',
    'Sitcoms',
    'Reality Shows',
    'Fiction',
  ];

  const scheduleList = [
    {
      id: 1,
      time: '06:30 PM',
      title: 'Seethapennu',
      category: 'Fiction',
      isPrimetime: true,
      isLive: false,
      duration: '30 mins',
      desc: 'Popular Malayalam family drama depicting resilience, courage, and triumph over adversities.',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/SEETHAPENNNU.jpg',
    },
    {
      id: 2,
      time: '07:00 PM',
      title: 'Nandanam',
      category: 'Fiction',
      isPrimetime: true,
      isLive: false,
      duration: '30 mins',
      desc: 'Heartwarming narrative exploring relationships, values, and emotional bonds in Kerala.',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/NANDANAM-1.jpg',
    },
    {
      id: 3,
      time: '08:00 PM',
      title: 'Uppum Mulakum 2',
      category: 'Sitcoms',
      isPrimetime: true,
      isLive: true, // Currently airing ON AIR badge
      duration: '60 mins',
      desc: 'Kerala\'s most celebrated sitcom bringing hilarious everyday stories of Balachandran Thampi and family.',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/UPPUM-MULAKUM-2_NOw-showig.jpg',
    },
    {
      id: 4,
      time: '09:00 PM',
      title: 'Star Magic',
      category: 'Reality Shows',
      isPrimetime: true,
      isLive: false,
      duration: '30 mins',
      desc: 'High-octane celebrity game show packed with comedy skits, music, dance, and fun challenges.',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/DESIGN_SM2.jpg',
    },
    {
      id: 5,
      time: '09:30 PM',
      title: 'Flowers Oru Kodi',
      category: 'Reality Shows',
      isPrimetime: true,
      isLive: false,
      duration: '60 mins',
      desc: 'Grandmaster Dr. G. S. Pradeep leads India\'s groundbreaking knowledge quiz show featuring real inspiring stories.',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/05/FOK-1.jpg',
    },
    {
      id: 6,
      time: '10:30 PM',
      title: 'Kuttikalavara Seniors',
      category: 'Reality Shows',
      isPrimetime: false,
      isLive: false,
      duration: '30 mins',
      desc: 'Delightful culinary competition show showcasing senior chefs and youth talent in the kitchen.',
      image: 'https://www.flowerstv.in/wp-content/uploads/2022/06/KUTTY-KALVARA-956x538-1.jpg',
    },
  ];

  const filteredSchedule = scheduleList.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Primetime') return item.isPrimetime;
    return item.category === activeFilter;
  });

  return (
    <>
      <Head>
        <title>Program Schedule | Flowers TV & NAMMAL</title>
        <meta
          name="description"
          content="Daily TV schedule, show timings, live broadcasts, and episode reminders for Flowers TV and NAMMAL."
        />
      </Head>

      <main className={styles.wrapper}>
        {/* Hero Title Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Program Schedule</h1>
        </section>

        {/* Date Selector Pills Bar */}
        <div className={styles.dateBar}>
          <div className="pv-container">
            <div className={styles.dateScroll}>
              {datePills.map((p) => (
                <button
                  key={p.label}
                  className={`${styles.datePill} ${
                    activeDate === p.label ? styles.activePill : ''
                  }`}
                  onClick={() => setActiveDate(p.label)}
                >
                  {p.label} <span style={{ opacity: 0.75, fontSize: '11px', marginLeft: '4px' }}>({p.date})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Main Body */}
        <section className={styles.scheduleSection}>
          <div className="pv-container">
            {/* Category Filter Chips */}
            <div className={styles.categoryFilterBar}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', marginRight: '8px' }}>
                Filter By:
              </span>
              {categoryChips.map((chip) => (
                <button
                  key={chip}
                  className={`${styles.filterChip} ${
                    activeFilter === chip ? styles.activeChip : ''
                  }`}
                  onClick={() => setActiveFilter(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Timeline Listings */}
            <div className={styles.timelineContainer} style={{ marginTop: '24px' }}>
              {filteredSchedule.map((item) => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timeMarker}>
                    <span className={styles.timeText}>{item.time}</span>
                    <span className={styles.periodText}>IST</span>
                    <div className={styles.timeDot} />
                  </div>

                  <div className={styles.showCard}>
                    <div className={styles.thumbWrapper}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.thumbImg}
                      />
                      {item.isLive && (
                        <div className={styles.liveBadge}>
                          <div className={styles.liveDot} /> ON AIR NOW
                        </div>
                      )}
                    </div>

                    <div className={styles.contentWrapper}>
                      <div>
                        <div className={styles.metaRow}>
                          <span className={styles.categoryTag}>
                            {item.category}
                          </span>
                          <span className={styles.duration}>
                            <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                            {item.duration}
                          </span>
                        </div>
                        <h3 className={styles.showTitle}>{item.title}</h3>
                        <p className={styles.showDesc}>{item.desc}</p>
                      </div>

                      <div className={styles.actionRow}>
                        <button className={styles.watchBtn}>
                          <Play size={14} fill="#0b0c10" /> Watch Episode
                        </button>
                        <button className={styles.remindBtn}>
                          <Bell size={14} /> Set Reminder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
