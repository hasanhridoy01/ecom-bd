import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
        <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
