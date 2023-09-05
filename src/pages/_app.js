import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "@/styles/globals.css";
import "@/styles/reset.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getLogInStatus, getUserProfile, selectIsLoggedIn, selectUser } from "@/redux/slices/authSlice";
import { store } from "@/redux/store";
import wrapper from "@/redux/redux-wrapper";

axios.defaults.withCredentials = true;

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLogInStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUserProfile());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
export default wrapper.withRedux(App);
