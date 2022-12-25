import { AppProps } from 'next/app'
import '../styles/index.css'
import Script from "next/script"


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
        async
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        onError={ (e) => { console.error('Script failed to load', e) }}
        crossOrigin="anonymous"
      />
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
      strategy='lazyOnload'
      >
        {
              `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              ` 
        }
      </Script>
      <Component {...pageProps} />
  </>)
  
}



