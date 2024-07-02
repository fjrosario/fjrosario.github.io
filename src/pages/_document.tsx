import React from "react";
import { Html, Main, Head } from "next/document";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <Head>
          <link
            rel="shortcut icon"
            href="data:image/x-icon;,"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"
          />
        </Head>
      </head>
      <body>
        <Main />
        <GoogleTagManager gtmId="UA-7068993-1" />
      </body>
    </Html>
  );
}
