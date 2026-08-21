import Header from "@/blocks/Header/Header";
import Footer from "@/blocks/Footer/Footer";
import "@/styles/globals.scss";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Google Analytics Scripts using next/script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-96JW8GGQ11"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-96JW8GGQ11');
        `}
      </Script>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
