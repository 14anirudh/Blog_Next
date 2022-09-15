import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
// import '../styles/style.css' would be imoirted on all pages 

function MyApp({ Component, pageProps }) {
  return<>
  <Navbar/>
  <Component {...pageProps} /> 
  <Footer/>
  </>
}

export default MyApp
