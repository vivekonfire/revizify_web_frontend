import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { BottomScrollListener } from "react-bottom-scroll-listener";

function MyApp({ Component, pageProps }) {
  return (
    <BottomScrollListener onBottom={() => {}}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </BottomScrollListener>
  );
}

export default MyApp;
