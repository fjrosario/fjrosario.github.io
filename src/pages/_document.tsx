import { Head, Html, Main, NextScript } from "next/document";

const bootstrapHref =
  "https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" type="text/css" href={bootstrapHref} />
      </Head>
      <body className="container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
