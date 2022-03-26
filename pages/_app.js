import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../store/index";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { validateToken } from "../store/actions/authActions";

const middleware = [thunk];

const makeStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

const wrapper = createWrapper(makeStore);

function MyApp({ Component, pageProps }) {
  const token = Cookies.get("token");
  const refreshToken = Cookies.get("refreshToken");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateToken(refreshToken, token));
  }, []);

  return (
    <BottomScrollListener onBottom={() => {}}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </BottomScrollListener>
  );
}

export default wrapper.withRedux(MyApp);
