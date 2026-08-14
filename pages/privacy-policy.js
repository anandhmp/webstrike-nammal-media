import React from 'react';
import Head from 'next/head';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Prism Vantage</title>
        <meta
          name="description"
          content="Read the Privacy Policy and legal disclaimers for Prism Vantage."
        />
      </Head>

      <main style={{ background: 'var(--pv-bg-warm)', minHeight: '90vh', padding: '140px 0 96px' }}>
        <div className="pv-container" style={{ maxWidth: '800px' }}>
          <h1
            style={{
              fontFamily: 'var(--pv-font-serif)',
              fontSize: '56px',
              fontWeight: '400',
              color: 'var(--pv-dark)',
              marginBottom: '40px',
            }}
            data-aos="fade-up"
          >
            Privacy Policy
          </h1>

          {/* Section 1 */}
          <div style={{ marginBottom: '36px' }} data-aos="fade-up" data-aos-delay="100">
            <h2
              style={{
                fontFamily: 'var(--pv-font-serif)',
                fontSize: '24px',
                fontWeight: '400',
                color: 'var(--pv-dark)',
                marginBottom: '14px',
              }}
            >
              A legal disclaimer
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--pv-dark)',
                opacity: 0.9,
              }}
            >
              The explanations and information provided on this page are only general and high-level
              explanations and information on how to write your own document of a Privacy Policy. You
              should not rely on this article as legal advice or as recommendations regarding what
              you should actually do, because we cannot know in advance what are the specific privacy
              policies you wish to establish between your business and your customers and visitors. We
              recommend that you seek legal advice to help you understand and to assist you in the
              creation of your own Privacy Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: '36px' }} data-aos="fade-up" data-aos-delay="150">
            <h2
              style={{
                fontFamily: 'var(--pv-font-serif)',
                fontSize: '24px',
                fontWeight: '400',
                color: 'var(--pv-dark)',
                marginBottom: '14px',
              }}
            >
              Privacy Policy - the basics
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--pv-dark)',
                opacity: 0.9,
              }}
            >
              Having said that, a privacy policy is a statement that discloses some or all of the
              ways a website collects, uses, discloses, processes, and manages the data of its
              visitors and customers. It usually also includes a statement regarding the website's
              commitment to protecting its visitors' or customers' privacy, and an explanation
              about the different mechanisms the website is implementing in order to protect
              privacy.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
