import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Web Developer, Blog, Ahmed Zrouqui, Dev Blog, Front-end, Back-end, code tutorial, programming tips, software development, web development, web development, tech blog, coding advice, development resources, software engineering, tech news" />
        <meta name="description" content="Welcome to our dev blog, where you can find expert programming tips, code tutorials, and resources for all levels of software development. Whether you're a beginner looking to learn about new IT topics or an experienced developer looking for the latest tech news and insights, we've got you covered. Our team of experienced developers is dedicated to sharing their knowledge and helping you improve your skills. Stay up to date with the latest in tech and join our community of developers today!" />
        <meta property="og:description" content="Welcome to our dev blog, where you can find expert programming tips, code tutorials, and resources for all levels of software development. Whether you're a beginner looking to learn about new IT topics or an experienced developer looking for the latest tech news and insights, we've got you covered. Our team of experienced developers is dedicated to sharing their knowledge and helping you improve your skills. Stay up to date with the latest in tech and join our community of developers today!" />
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
