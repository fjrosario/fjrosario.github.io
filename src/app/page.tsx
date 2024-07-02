import React from "react";
import App from "./components/App";
import { masterLinkArray } from "../data/linkArray";
import { myBio } from "../data/bio";
import Script from "next/script";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: myBio.fullTitle,
  description: myBio.fullTitle,
};

export default function Home() {
  return (
    <>
      <App linkArray={masterLinkArray} bio={myBio} />
      <GoogleTagManager gtmId="UA-7068993-1" />
      <Script
        src="https://kit.fontawesome.com/b19667d46a.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}
