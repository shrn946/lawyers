import type { Metadata } from "next";
import Script from "next/script";
import { LawmasterClientManager } from "@/components/demo05/LawmasterClientManager";

export const metadata: Metadata = {
  title: "Master Law | Attorney & Lawyers Law Firm",
  description: "Master Law - Law Firm Group Template converted to Next.js 15",
};

export default function LawmasterRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/demo-05/images/favicon.ico" type="image/x-icon" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Philosopher:400,400italic,700,700italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" type="text/css" />

        {/* Libraries Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/demo-05/libraries/loader/loaders.min.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/libraries/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/libraries/fonts/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/libraries/fonts/elegant-icons.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/libraries/owl-carousel/owl.carousel.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/libraries/owl-carousel/owl.theme.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/libraries/animate/animate.min.css" />

        {/* Custom Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/demo-05/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/css/navigation-menu.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/style.css" />
        <link rel="stylesheet" type="text/css" href="/demo-05/css/shortcodes.css" />
      </head>
      <body data-offset="200" data-spy="scroll" data-target=".ow-navigation">
        <LawmasterClientManager />
        {children}
      </body>
    </html>
  );
}
