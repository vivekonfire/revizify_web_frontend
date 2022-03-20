import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../store/index";

const middleware = [thunk];

const makeStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

const wrapper = createWrapper(makeStore);

function MyApp({ Component, pageProps }) {
  return (
    <BottomScrollListener onBottom={() => {}}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </BottomScrollListener>
  );
}

export default wrapper.withRedux(MyApp);
