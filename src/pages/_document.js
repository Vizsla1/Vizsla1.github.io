import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
  return (
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    }));
  }

