//import '../styles/globals.css'
import '../styles/scss/index.scss'
import SimpleReactLightbox from "simple-react-lightbox";
import type { AppProps } from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return <SimpleReactLightbox>
    <Component {...pageProps} />
  </SimpleReactLightbox>
}
export default MyApp
