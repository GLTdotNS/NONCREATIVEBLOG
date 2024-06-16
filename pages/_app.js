import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Loading from "../components/Loading/Loading";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleRouteChangeStart = () => {
      NProgress.start();
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      NProgress.done();
      setLoading(false);
    };

    const handleRouteChangeError = () => {
      NProgress.done();
      setLoading(false);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    // Clean up events
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [setLoading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
