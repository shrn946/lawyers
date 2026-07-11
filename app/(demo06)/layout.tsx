import type { Metadata } from "next";
import { AlegadaClientManager } from "@/components/demo06/AlegadaClientManager";

export const metadata = {
  title: "Alegada - Attorney & Lawyers Law Firm",
  description: "Alegada - Law Firm Group Template converted to Next.js 15",
};

export default function AlegadaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta content="telephone=no" name="format-detection" />
        <meta name="HandheldFriendly" content="true" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/demo-06/favicon.ico" />

        {/* Master Theme Stylesheet */}
        <link rel="stylesheet" href="/demo-06/assets/css/master.css" />
      </head>
      <body>
        <AlegadaClientManager />
        <div className="l-theme">
          {children}
        </div>
      </body>
    </html>
  );
}
