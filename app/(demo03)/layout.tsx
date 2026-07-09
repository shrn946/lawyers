import type { Metadata } from "next";
import Script from "next/script";
import LawyersClientManager from "@/components/demo03/LawyersClientManager";

export const metadata: Metadata = {
  title: "Lawyers - Attorneys Business HTML Template",
  description: "Lawyers Business Law Firm Template",
};

export default function LawyersRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/demo-03/assets/images/icons/favicon-32x32.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i%7CCrimson+Text:400,400i,700,700i" rel="stylesheet" type="text/css" />
        
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/demo-03/assets/css/bootstrap/css/bootstrap.css" />
        {/* Font Awesome Icons CSS */}
        <link rel="stylesheet" href="/demo-03/assets/css/fontawesome/css/all.min.css" />
        {/* Owl Carousel */}
        <link rel="stylesheet" href="/demo-03/assets/js/owl-carousel/owl.carousel.css" />
        {/* Main CSS File */}
        <link rel="stylesheet" href="/demo-03/assets/style.css" />

        {/* jQuery - load first */}
        <Script src="/demo-03/assets/js/jquery.js" strategy="beforeInteractive" />
        {/* Bootstrap Bundle */}
        <Script src="/demo-03/assets/css/bootstrap/js/popper.js" strategy="afterInteractive" />
        <Script src="/demo-03/assets/css/bootstrap/js/bootstrap.js" strategy="afterInteractive" />
        {/* Easing */}
        <Script src="/demo-03/assets/js/easing.js" strategy="afterInteractive" />
        {/* Fitvids */}
        <Script src="/demo-03/assets/js/fitvids.js" strategy="afterInteractive" />
        {/* Owl Carousel */}
        <Script src="/demo-03/assets/js/owl-carousel/owl.carousel.js" strategy="afterInteractive" />
        {/* Isotope */}
        <Script src="/demo-03/assets/js/isotope.js" strategy="afterInteractive" />
        {/* Magnific Popup */}
        <Script src="/demo-03/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        {/* Contact Form */}
        <Script src="/demo-03/assets/js/jquery.form.min.js" strategy="afterInteractive" />
        {/* Main Init JS */}
        <Script src="/demo-03/assets/js/init.js" strategy="afterInteractive" />
      </head>
      <body>
        <LawyersClientManager />
        {children}
      </body>
    </html>
  );
}
