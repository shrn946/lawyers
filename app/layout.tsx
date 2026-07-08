import type { Metadata } from "next";
import { UIProvider } from "@/context/UIContext";
import Preloader from "@/components/Preloader";
import ProgressWrap from "@/components/ProgressWrap";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import MobileMenu from "@/components/MobileMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lawsy || Criminal Law",
  description: "Criminal Law and Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/logo/logo6.png" />
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/sidebar.css" />
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/mobile.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/plugins/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/modal-video.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick-slider.css" />
        <link rel="stylesheet" href="/assets/css/typography.css" />
        <link rel="stylesheet" href="/assets/scss/master.css" />
        <script src="/assets/js/plugins/jquery-3-6-0.min.js" defer></script>
        <script src="/assets/js/plugins/waypoints.js" defer></script>
      </head>
      <body>
        <UIProvider>
          <Preloader />
          <ProgressWrap />
          <Sidebar />
          <SearchModal />
          <MobileMenu />
          {children}
        </UIProvider>

        <script src="/assets/js/plugins/bootstrap.min.js" defer></script>
        <script src="/assets/js/plugins/counter.js" defer></script>
        <script src="/assets/js/plugins/owl-carousel.min.js" defer></script>
        <script src="/assets/js/plugins/jquery-modal.min.js" defer></script>
        <script src="/assets/js/plugins/sidebar.js" defer></script>
        <script src="/assets/js/plugins/jquery.nice-select.js" defer></script>
        <script src="/assets/js/plugins/aos.js" defer></script>
        <script src="/assets/js/plugins/slider.js" defer></script>
      </body>
    </html>
  );
}

