import React from "react";
import { Html, Main } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="data:image/x-icon;,"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Main />
      </body>
    </Html>
  );
}
