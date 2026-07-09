import type { Metadata } from "next";
import Script from "next/script";
import LawiaClientManager from "@/components/LawiaClientManager";

export const metadata: Metadata = {
  title: "Lawia - Attorney & Lawyers React Template",
  description: "Attorney & Lawyers Law Firm Template",
};

export default function LawiaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/demo-01/assets/img/title-icon.svg" type="image/x-icon" />
        <link rel="stylesheet" href="/demo-01/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/demo-01/assets/css/all.min.css" />
        <link rel="stylesheet" href="/demo-01/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/demo-01/assets/css/slick.css" />
        <link rel="stylesheet" href="/demo-01/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/demo-01/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/demo-01/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/demo-01/assets/css/style.css" />
      </head>
      <body>
        <LawiaClientManager />
        {children}

        {/* Load jQuery first */}
        <Script src="/demo-01/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        
        {/* Load other libraries */}
        <Script src="/demo-01/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/demo-01/assets/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/demo-01/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/demo-01/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/demo-01/assets/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/demo-01/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/demo-01/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
