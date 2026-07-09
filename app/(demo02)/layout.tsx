import type { Metadata } from "next";
import Script from "next/script";
import LawgneClientManager from "@/components/demo02/LawgneClientManager";

export const metadata: Metadata = {
  title: "Lawgne - Attorney & Lawyers HTML Template",
  description: "Attorney & Lawyers Law Firm Template",
};

export default function LawgneRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/demo-02/assets/images/favicon.ico" type="image/x-icon" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/demo-02/assets/css/bootstrap.min.css" />
        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="/demo-02/assets/fonts/fontawesome/css/all.min.css" />
        {/* Flaticon CSS */}
        <link rel="stylesheet" href="/demo-02/assets/fonts/flaticon/flaticon.css" />
        {/* Magnific Popup CSS */}
        <link rel="stylesheet" href="/demo-02/assets/css/magnific-popup.css" />
        {/* Slick CSS */}
        <link rel="stylesheet" href="/demo-02/assets/css/slick.css" />
        {/* Nice Select CSS */}
        <link rel="stylesheet" href="/demo-02/assets/css/nice-select.css" />
        {/* Animate CSS */}
        <link rel="stylesheet" href="/demo-02/assets/css/animate.css" />
        {/* Default CSS */}
        <link rel="stylesheet" href="/demo-02/assets/css/default.css" />
        {/* Main Style CSS */}
        <link rel="stylesheet" href="/demo-02/assets/css/style.css" />

        {/* jQuery - must be first */}
        <Script src="/demo-02/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        {/* Popper JS */}
        <Script src="/demo-02/assets/js/popper.min.js" strategy="afterInteractive" />
        {/* Bootstrap JS */}
        <Script src="/demo-02/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        {/* Slick JS */}
        <Script src="/demo-02/assets/js/slick.min.js" strategy="afterInteractive" />
        {/* Magnific Popup JS */}
        <Script src="/demo-02/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        {/* Isotope JS */}
        <Script src="/demo-02/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        {/* Images Loaded JS */}
        <Script src="/demo-02/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        {/* Nice Select JS */}
        <Script src="/demo-02/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        {/* Counter Up JS */}
        <Script src="/demo-02/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
        {/* Waypoints JS */}
        <Script src="/demo-02/assets/js/jquery.waypoints.js" strategy="afterInteractive" />
        {/* WOW JS */}
        <Script src="/demo-02/assets/js/wow.min.js" strategy="afterInteractive" />
        {/* Main JS */}
        <Script src="/demo-02/assets/js/main.js" strategy="afterInteractive" />
      </head>
      <body>
        <LawgneClientManager />
        {children}
      </body>
    </html>
  );
}
