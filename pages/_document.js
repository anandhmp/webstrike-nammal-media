import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TelevisionStation",
    "name": "NAMMAL MEDIA",
    "alternateName": "നമ്മള് - മലയാളിയുടെ മനസ്സാക്ഷി",
    "url": "https://nammalmedia.com",
    "logo": "https://nammalmedia.com/assets/nammal-media.png",
    "image": "https://nammalmedia.com/assets/og-image.png",
    "description": "NAMMAL MEDIA (നമ്മള് - മലയാളിയുടെ മനസ്സാക്ഷി) is a leading digital media platform and entertainment channel from Kerala, India. Featuring Malayalam cinema updates, G. S. Pradeep’s Aswamedham, cultural events, interviews, and stage shows.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grandmaster's creative hub, 'Manjusha' TC 23/1777, OD4, Jawaharnagar",
      "addressLocality": "Trivandrum",
      "addressRegion": "Kerala",
      "postalCode": "695003",
      "addressCountry": "IN"
    },
    "telephone": "+91-7907760700",
    "email": "grandmastercreativehub@gmail.com",
    "sameAs": [
      "https://www.instagram.com/nammal__media/",
      "https://www.facebook.com/profile.php?id=61590600346051",
      "https://www.youtube.com/@NAMMAL-MalayaliyudeManasakshi"
    ]
  };

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
