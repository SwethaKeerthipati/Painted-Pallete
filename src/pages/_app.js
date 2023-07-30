import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { ToastContainer } from "react-toastify";
import NProgress from "nprogress";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ToastContainer limit={4} />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
