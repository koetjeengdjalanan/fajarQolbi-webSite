import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBarTop from "../components/NavigationBarTop";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
 return (
  <content>
   <NavigationBarTop />
   <Component {...pageProps} />
   <Footer />
  </content>
 );
}

export default MyApp;
