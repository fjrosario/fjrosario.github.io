import { Html, Head, Main } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
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
      </Head>
      <body>
        <Main />
      </body>
    </Html>
  );
}
