import type { Metadata } from "next";
import Script from "next/script";
import { myBio } from "../data/bio";
import "./globals.css";

const bootstrapHref = "/css/bootstrap.min.css";
const fontAwesomeKitSrc = "https://kit.fontawesome.com/b19667d46a.js";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: myBio.fullTitle,
  description: myBio.fullTitle,
  alternates: {
    canonical: "https://frankrosario.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href={bootstrapHref} />
      </head>
      <body className="container">
        {children}
        <Script
          src={fontAwesomeKitSrc}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
