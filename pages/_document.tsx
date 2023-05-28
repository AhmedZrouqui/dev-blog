import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Az Devblog" />
        <Script src="/_next/static/react-snap.js" async></Script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
