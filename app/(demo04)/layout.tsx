import type { Metadata } from "next";
import LawfinityClientManager from "@/components/demo04/LawfinityClientManager";

export const metadata: Metadata = {
  title: "Law and Order | Lawfinity",
  description: "Lawfinity - Defending Your Rights in the World of Law and Order",
};

export default function LawfinityRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="apple-touch-icon" sizes="57x57" href="/demo-04/assets/images/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/demo-04/assets/images/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/demo-04/assets/images/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/demo-04/assets/images/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/demo-04/assets/images/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/demo-04/assets/images/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/demo-04/assets/images/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/demo-04/assets/images/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/demo-04/assets/images/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/demo-04/assets/images/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/demo-04/assets/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/demo-04/assets/images/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/demo-04/assets/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/demo-04/assets/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* Global CDNs */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />

        {/* Local Stylesheets */}
        <link href="/demo-04/assets/bootstrap/bootstrap.min.css" rel="stylesheet" />
        <link href="/demo-04/assets/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/demo-04/assets/css/responsive.css" rel="stylesheet" type="text/css" />
        <link href="/demo-04/assets/css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
        <link href="/demo-04/assets/css/owl.theme.default.min.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <LawfinityClientManager />
        {children}
      </body>
    </html>
  );
}
