import { AppProps } from 'next/app'
import '../styles/index.css'
import Script from "next/script"


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Script
    strategy='lazyOnload'
    src={`https://www.googletagmanager.com/gtag/js?id=G-8PP4Q3WK4J`}
  />
  <Script
  strategy='lazyOnload'
  >
    {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
        
          gtag('config', G-8PP4Q3WK4J);
          ` 
    }
  </Script>
  <Component {...pageProps} />
  </>)
  
}
