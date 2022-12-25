import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Web Developer, Blog, Ahmed Zrouqui, Dev Blog, Front-end, Back-end" />
        <meta name="description" content="Ahmed Zrouqui Dev blog, I will be sharing my daily coding challenges and knowledge in this blog." />
        <meta property="og:description" content="Ahmed Zrouqui Dev blog, I will be sharing my daily coding challenges and knowledge in this blog." />
        <meta name="author" content="Ahmed Zrouqui" />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
