import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "Orion Apex Capital — Precision. Growth. Legacy.";
  const description = "Orion Apex Capital builds wealth through disciplined, risk‑managed strategies across crypto trading, automated cash businesses, and digital assets.";
  const url = "https://www.orionapexcapital.com";
  const image = "/images/og-banner.png";
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b1220" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}