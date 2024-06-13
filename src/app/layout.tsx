import type { Metadata } from "next";
import { myBio } from "../data/bio";
export const metadata: Metadata = {
  title: myBio.fullTitle,
  description: myBio.fullTitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClass = `container`;
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          rel="shortcut icon"
          href="data:image/x-icon;,"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={bodyClass}>{children}</body>
    </html>
  );
}
